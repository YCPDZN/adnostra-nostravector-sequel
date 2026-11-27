"""Rig a dragon: skin weights by surface (geodesic) distance to each bone, smoothed, 4 bones a vertex;
writes a skinned GLB (bones are plain translations, so every bone's rest rotation is identity and +x/+y/+z mean
the dragon's left/up/forward for every bone) and the same model embedded as a .js for double-click play.
usage: rig.py tuldran|taiman"""
import os
import numpy as np, json, struct, sys, base64, io
from scipy.sparse import coo_matrix
from scipy.sparse.csgraph import dijkstra
from PIL import Image
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__))); import skel
name = sys.argv[1]

def glb_parts(path):
    d = open(path, 'rb').read(); jl = struct.unpack('<I', d[12:16])[0]; J = json.loads(d[20:20 + jl]); B = d[20 + jl + 8:]
    return J, B
# ---------------------------------------------------------------- mesh parts (positions in the rig frame)
if name == 'tuldran':
    M = np.load('tuldran/lo.npz'); P0 = M['P'].astype(float); N0 = M['N'].astype(float)
    rot = lambda A: np.stack([-A[:, 2], A[:, 1], A[:, 0]], 1)   # head down +z
    parts = [dict(P=rot(P0), N=rot(N0), UV=M['UV'], F=M['F'].astype(np.int64), mat=0)]
    JOINTS, TIPS, MAIN = skel.TULDRAN, skel.TULDRAN_TIPS, skel.TULDRAN_MAIN; jawmask = skel.TULDRAN_JAW
else:
    M = np.load('taiman/fixed.npz')
    parts = [dict(P=M['P'].astype(float), N=M['N'].astype(float), UV=M['UV'], F=M['F'].astype(np.int64), mat=0),
             dict(P=M['TP'].astype(float), N=M['TN'].astype(float), UV=M['TUV'], F=M['TF'].astype(np.int64), mat=1)]
    JOINTS, TIPS = skel.taiman_with_tail(M['C'], M['U']); MAIN = skel.TAIMAN_MAIN; jawmask = None
P = np.vstack([p['P'] for p in parts]); offs = np.cumsum([0] + [len(p['P']) for p in parts])
F = np.vstack([p['F'] + o for p, o in zip(parts, offs[:-1])])
names = list(JOINTS.keys()); idx = {n: i for i, n in enumerate(names)}
head = {n: np.array(JOINTS[n][1], float) for n in names}
children = {n: [c for c in names if JOINTS[c][0] == n] for n in names}
def end_of(n):
    if n in TIPS: return np.array(TIPS[n], float)
    m = MAIN.get(n, 'x')
    if m is None: return head[n] + np.array([0, 0, 0.01])
    if m != 'x': return head[m]
    ch = [c for c in children[n] if np.linalg.norm(head[c] - head[n]) > 1e-6] or children[n]
    return head[ch[0]] if ch else head[n] + np.array([0, 0, 0.01])
seg = {n: (head[n], end_of(n)) for n in names}
skin_bones = [n for n in names if n != 'root']
# ---------------------------------------------------------------- distances
def seg_dist(X, a, b):
    ab = b - a; L = ab @ ab
    t = np.clip(((X - a) @ ab) / L, 0, 1) if L > 1e-12 else np.zeros(len(X))
    return np.linalg.norm(X - (a + t[:, None] * ab), axis=1)
_, inv = np.unique(P.round(6), axis=0, return_inverse=True); inv = inv.ravel(); nW = inv.max() + 1
PW = np.zeros((nW, 3)); PW[inv] = P
e = np.concatenate([F[:, [0, 1]], F[:, [1, 2]], F[:, [2, 0]]]); e = inv[e]; e = e[e[:, 0] != e[:, 1]]
el = np.linalg.norm(PW[e[:, 0]] - PW[e[:, 1]], axis=1) + 1e-7
G = coo_matrix((np.r_[el, el], (np.r_[e[:, 0], e[:, 1]], np.r_[e[:, 1], e[:, 0]])), shape=(nW, nW)).tocsr()
x = PW[:, 0]
D = np.full((nW, len(skin_bones)), np.inf)
for k, n in enumerate(skin_bones):
    a, b = seg[n]; de = seg_dist(PW, a, b)
    allowed = np.ones(nW, bool)
    if n.endswith('L'): allowed &= x > -0.005
    if n.endswith('R'): allowed &= x < 0.005
    if n == 'jaw': allowed &= jawmask(PW)
    seeds = np.nonzero(allowed & (de < de[allowed].min() + 0.008))[0]
    g = dijkstra(G, indices=seeds, min_only=True, limit=0.35)
    d = np.maximum(g, de)
    d = np.where(np.isfinite(g), d, de * 2.5 + 0.03)   # not reachable over the surface (a separate piece): straight line, penalised
    d[~allowed] = np.inf
    D[:, k] = d
if jawmask is not None:   # inside the jaw, the jaw wins outright; the head keeps the rest
    jm = jawmask(PW); kj = skin_bones.index('jaw'); kh = skin_bones.index('head')
    D[jm, kj] *= 0.25; D[~jm, kj] = np.inf
sigma = 0.010 if name == 'tuldran' else 0.008
Dm = D.min(1, keepdims=True); Wt = np.exp(-(D - Dm) / sigma); Wt[~np.isfinite(D)] = 0
Wt /= Wt.sum(1, keepdims=True)
# smooth over the surface a little, so joints bend rather than crease
A = G.copy(); A.data[:] = 1; deg = np.asarray(A.sum(1)).ravel()
for it in range(3):
    Wt = 0.5 * Wt + 0.5 * (A @ Wt) / np.maximum(deg, 1)[:, None]
    if jawmask is not None: Wt[~jm, kj] = 0
    Wt /= Wt.sum(1, keepdims=True)
# top four
top = np.argsort(-Wt, axis=1)[:, :4]; tw = np.take_along_axis(Wt, top, 1); tw /= tw.sum(1, keepdims=True)
J4 = np.array([[idx[skin_bones[j]] for j in r] for r in top], np.uint8)[inv]
W4 = tw[inv]
W8 = np.round(W4 * 255).astype(np.int32); W8[:, 0] += 255 - W8.sum(1); W8 = np.clip(W8, 0, 255).astype(np.uint8)
dom = np.array(skin_bones)[top[:, 0]]
print(name, 'bones', len(names), 'verts', len(P), 'dominant-bone counts:', {n: int((dom == n).sum()) for n in skin_bones if (dom == n).sum()})
np.savez(f'{name}/rig.npz', P=P, F=F, J=J4, W=W8.astype(np.float32) / 255, names=np.array(names), heads=np.array([head[n] for n in names]), parents=np.array([names.index(JOINTS[n][0]) if JOINTS[n][0] else -1 for n in names]), offs=offs)
# ---------------------------------------------------------------- write the skinned GLB
srcJ, srcB = glb_parts(f'{name}/{name}.glb')
bin_ = bytearray(); views = []; acc = []
def add(b, target=None):
    while len(bin_) % 4: bin_.append(0)
    v = {'buffer': 0, 'byteOffset': len(bin_), 'byteLength': len(b)}
    if target: v['target'] = target
    bin_.extend(b); views.append(v); return len(views) - 1
def Acc(arr, typ, ct, target=None, minmax=False, norm=False):
    vi = add(np.ascontiguousarray(arr).tobytes(), target); a = {'bufferView': vi, 'componentType': ct, 'count': len(arr), 'type': typ}
    if minmax: a['min'] = arr.min(0).tolist(); a['max'] = arr.max(0).tolist()
    if norm: a['normalized'] = True
    acc.append(a); return len(acc) - 1
prims = []
for p, o, o2 in zip(parts, offs[:-1], offs[1:]):
    sl = slice(o, o2)
    prims.append({'attributes': {'POSITION': Acc(p['P'].astype('<f4'), 'VEC3', 5126, 34962, True), 'NORMAL': Acc(p['N'].astype('<f4'), 'VEC3', 5126, 34962),
                                 'TEXCOORD_0': Acc(p['UV'].astype('<f4'), 'VEC2', 5126, 34962), 'JOINTS_0': Acc(J4[sl], 'VEC4', 5121, 34962),
                                 'WEIGHTS_0': Acc(W8[sl], 'VEC4', 5121, 34962, norm=True)},
                  'indices': Acc(p['F'].astype('<u4').ravel(), 'SCALAR', 5125, 34963), 'material': p['mat']})
images, textures = [], []
for im in srcJ['images']:
    bv = srcJ['bufferViews'][im['bufferView']]; images.append({'bufferView': add(srcB[bv['byteOffset']:bv['byteOffset'] + bv['byteLength']]), 'mimeType': im['mimeType']})
textures = [dict(t) for t in srcJ['textures']]
mats = [dict(srcJ['materials'][0], name=name)]
if name == 'taiman':   # the regrown tail's own textures
    def jpg(path, q=88):
        b = io.BytesIO(); Image.open(path).convert('RGB').save(b, 'JPEG', quality=q); return b.getvalue()
    base = len(images)
    for f in ['taiman/tail_normal.png', 'taiman/tail_color.png', 'taiman/tail_mr.png']:
        images.append({'bufferView': add(jpg(f)), 'mimeType': 'image/jpeg'}); textures.append({'source': len(images) - 1, 'sampler': 0})
    mats.append({'name': 'taiman_tail', 'normalTexture': {'index': base}, 'pbrMetallicRoughness': {'baseColorTexture': {'index': base + 1}, 'metallicRoughnessTexture': {'index': base + 2}}})
# nodes: 0 = the mesh; 1.. = the bones, each a translation from its parent
nodes = [{'name': name, 'mesh': 0, 'skin': 0}]
for n in names:
    par = JOINTS[n][0]; t = head[n] - (head[par] if par else 0)
    nodes.append({'name': n, 'translation': [float(v) for v in t], 'children': [1 + names.index(c) for c in children[n]]})
for nd in nodes[1:]:
    if not nd['children']: del nd['children']
ibm = np.zeros((len(names), 16), '<f4')
for i, n in enumerate(names): m = np.eye(4); m[:3, 3] = -head[n]; ibm[i] = m.T.ravel()   # column-major
skin = {'joints': [1 + i for i in range(len(names))], 'skeleton': 1, 'inverseBindMatrices': Acc(ibm, 'MAT4', 5126)}
gl = {'asset': {'version': '2.0', 'generator': 'ad-nostra dragon rig'}, 'scene': 0, 'scenes': [{'nodes': [0, 1]}], 'nodes': nodes,
      'meshes': [{'primitives': prims}], 'skins': [skin], 'materials': mats, 'textures': textures, 'images': images,
      'samplers': srcJ.get('samplers', [{}]) or [{}], 'accessors': acc, 'bufferViews': views, 'buffers': [{'byteLength': len(bin_)}]}
for t in gl['textures']: t.setdefault('sampler', 0)
js = json.dumps(gl, separators=(',', ':')).encode(); js += b' ' * ((4 - len(js) % 4) % 4)
while len(bin_) % 4: bin_.append(0)
tot = 12 + 8 + len(js) + 8 + len(bin_)
glb = struct.pack('<III', 0x46546C67, 2, tot) + struct.pack('<II', len(js), 0x4E4F534A) + js + struct.pack('<II', len(bin_), 0x004E4942) + bytes(bin_)
open(f'{name}/{name}_rigged.glb', 'wb').write(glb)
open(f'{name}/{name}_rigged.js', 'w').write(f'window.{name.upper()}_GLB_B64="{base64.b64encode(glb).decode()}";\n')
print('glb bytes', tot)
