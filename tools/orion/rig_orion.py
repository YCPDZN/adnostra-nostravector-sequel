"""Orion Mascar: rig the simplified Tripo mesh with the Ascendant soldier's 19-bone skeleton
(same bone names, so src/soldier.js animates him), weight the cape to the torso, build a small
vertex-coloured copy for distant rendering, and write orion.glb + orion.js.
Inputs: lo.npz (P, N, UV, F of the simplified mesh), orion_mascar.glb (textures), lod.bin (LOD faces)."""
import numpy as np, json, struct, base64, io, sys
from PIL import Image
from scipy.sparse import coo_matrix
S = 1.94   # model units -> metres, same as the soldier (Orion stands 1.9 m)

M = np.load('lo.npz'); P, N, UV, F = M['P'].astype(np.float64), M['N'], M['UV'], M['F']
# ---------------------------------------------------------------- skeleton (model units, +X = character's left, faces +Z)
J = {}
def add(n, p, pos): J[n] = (p, np.array(pos, float))
add('hips', None, (0, 0.47, 0.04)); add('spine', 'hips', (0, 0.57, 0.04)); add('chest', 'spine', (0, 0.68, 0.035))
add('neck', 'chest', (0, 0.81, 0.03)); add('head', 'neck', (0, 0.855, 0.04))
for s, sd in ((1, 'L'), (-1, 'R')):
    add('clav' + sd, 'chest', (0.04 * s, 0.775, 0.02)); add('uarm' + sd, 'clav' + sd, (0.165 * s, 0.75, 0.0))
    add('farm' + sd, 'uarm' + sd, (0.19 * s, 0.60, 0.0)); add('hand' + sd, 'farm' + sd, (0.19 * s, 0.50, 0.045))
    add('thigh' + sd, 'hips', (0.06 * s, 0.45, 0.035)); add('shin' + sd, 'thigh' + sd, (0.075 * s, 0.26, 0.03)); add('foot' + sd, 'shin' + sd, (0.09 * s, 0.075, 0.0))
names = list(J.keys()); idx = {n: i for i, n in enumerate(names)}
tail = {'hips': (0, 0.56, 0.04), 'spine': (0, 0.67, 0.04), 'chest': (0, 0.8, 0.03), 'neck': (0, 0.85, 0.035), 'head': (0, 0.98, 0.04)}
for s, sd in ((1, 'L'), (-1, 'R')):
    tail.update({'clav' + sd: (0.165 * s, 0.75, 0.0), 'uarm' + sd: (0.19 * s, 0.60, 0.0), 'farm' + sd: (0.19 * s, 0.50, 0.045), 'hand' + sd: (0.195 * s, 0.41, 0.07),
                 'thigh' + sd: (0.075 * s, 0.26, 0.03), 'shin' + sd: (0.09 * s, 0.075, 0.0), 'foot' + sd: (0.12 * s, 0.01, 0.1)})

def seg_dist(p, a, b):
    ab = b - a; t = np.clip(((p - a) @ ab) / (ab @ ab), 0, 1); return np.linalg.norm(p - (a + t[:, None] * ab), axis=1)

# welded adjacency (seams share weights)
_, inv = np.unique(P.round(6), axis=0, return_inverse=True); inv = inv.ravel(); nW = inv.max() + 1
e = np.concatenate([F[:, [0, 1]], F[:, [1, 2]], F[:, [2, 0]]]); e = inv[e]; e = np.concatenate([e, e[:, ::-1]])
A = coo_matrix((np.ones(len(e)), (e[:, 0], e[:, 1])), shape=(nW, nW)).tocsr(); A.data[:] = 1
G = coo_matrix((np.ones(len(inv)), (np.arange(len(inv)), inv)), shape=(len(inv), nW)).tocsr()
adj = G @ A @ G.T

x, y, z = P[:, 0], P[:, 1], P[:, 2]; ax = np.abs(x)
# ---- regions
# cape: the sheet hanging behind the body (separate from the legs and arms below the shoulder blades)
cape = (z < -0.052) & (y < 0.64) & (y > 0.05)
# a vertex belongs to the arm if it is reached over the surface from the arm before the torso
from scipy.sparse.csgraph import dijkstra
Aco = adj.tocoo(); m = Aco.row != Aco.col
el = np.linalg.norm(P[Aco.row[m]] - P[Aco.col[m]], axis=1) + 1e-6
Gd = coo_matrix((el, (Aco.row[m], Aco.col[m])), shape=adj.shape).tocsr()
def seeds(n, r=0.04): a_, b_ = J[n][1], np.array(tail[n]); return np.nonzero(seg_dist(P, a_, b_) < r)[0]
armS = np.concatenate([seeds(n) for n in ('farmL', 'farmR', 'handL', 'handR')]); armS = armS[(ax[armS] > 0.16) & (y[armS] < 0.62) & ~cape[armS]]
bodyS = np.concatenate([seeds(n) for n in ('hips', 'spine', 'chest', 'thighL', 'thighR', 'shinL', 'shinR')]); bodyS = bodyS[(ax[bodyS] < 0.1) & ~cape[bodyS]]
da = dijkstra(Gd, indices=armS, min_only=True); db = dijkstra(Gd, indices=bodyS, min_only=True)
isarm = (da < db) & (y < 0.66) & (y > 0.37) & (ax > 0.12) & ~cape
band = (y >= 0.66) & (y < 0.75) & (ax > 0.11) & ~cape      # armpit: upper arm blended with chest
shoulder = (y >= 0.75) & (ax > 0.11)                         # pauldrons ride on the upper arm
print('arm verts', isarm.sum(), 'cape verts', cape.sum(), 'of', len(P))

D = np.full((len(P), len(names)), np.inf)
for n in names:
    a, b = J[n][1], np.array(tail[n]); d = seg_dist(P, a, b)
    sd = n[-1] if n[-1] in 'LR' else None
    ok = np.ones(len(P), bool)
    if sd: ok &= (np.sign(x) == (1 if sd == 'L' else -1)) | (ax < 1e-4)
    if n.startswith(('uarm', 'farm', 'hand')): ok &= isarm | ((shoulder | band) & n.startswith('uarm'))
    elif n.startswith(('thigh', 'shin', 'foot')): ok &= (y < 0.48) & ~isarm & ~cape
    elif n.startswith('clav'): ok &= (y > 0.66) & ~isarm & ~cape
    else: ok &= ~isarm
    if n == 'head': ok &= y > 0.83
    if n == 'neck': ok &= y > 0.76
    D[ok, idx[n]] = d[ok]
W = 1 / np.maximum(D, 0.004) ** 4; W[~np.isfinite(D)] = 0
bad = W.sum(1) == 0
if bad.any():
    Dall = np.stack([seg_dist(P[bad], J[n][1], np.array(tail[n])) for n in names], 1); W[bad, Dall.argmin(1)] = 1
W /= W.sum(1, keepdims=True)
# cape: torso by height, and the hem follows the legs a little so a stride swings it
cy = y[cape]; cw = np.zeros((cape.sum(), len(names)))
t = np.clip((cy - 0.47) / 0.2, 0, 1); cw[:, idx['chest']] = t * 0.6; cw[:, idx['spine']] = t * 0.4 + (1 - t) * 0.35; cw[:, idx['hips']] = (1 - t) * 0.65
leg = np.clip((0.4 - cy) / 0.3, 0, 1) * 0.45
sideL = x[cape] > 0
cw *= (1 - leg)[:, None]
cw[sideL, idx['thighL']] += leg[sideL]; cw[~sideL, idx['thighR']] += leg[~sideL]
W[cape] = cw
E = np.isfinite(D) | (W > 0)
for _ in range(3):
    W = 0.5 * W + 0.5 * np.asarray(adj @ W) / np.maximum(np.asarray(adj.sum(1)), 1)
    W *= E; W /= np.maximum(W.sum(1, keepdims=True), 1e-12)
W[cape] = cw  # keep the cape exact (smoothing would leak leg weight across the waist)
top = np.argsort(-W, 1)[:, :4]; tw = np.take_along_axis(W, top, 1); tw /= tw.sum(1, keepdims=True)
jt, wt = top.astype(np.uint8), tw.astype(np.float32)
np.savez('orion_weights.npz', jt=jt, wt=wt)

# ---------------------------------------------------------------- distant copy: positions-only simplification, colours from the texture
src = open('orion_mascar.glb', 'rb').read(); jl = struct.unpack('<I', src[12:16])[0]; SJ = json.loads(src[20:20 + jl]); SB = src[20 + jl + 8:]
def img_bytes(i): bv = SJ['bufferViews'][SJ['images'][i]['bufferView']]; o = bv.get('byteOffset', 0); return SB[o:o + bv['byteLength']]
mat = SJ['materials'][0]; base_i = SJ['textures'][mat['pbrMetallicRoughness']['baseColorTexture']['index']]['source']
tex = np.asarray(Image.open(io.BytesIO(img_bytes(base_i))).convert('RGB')).astype(np.float32) / 255
th, tw_ = tex.shape[:2]
col = tex[np.clip((UV[:, 1] * th).astype(int), 0, th - 1), np.clip((UV[:, 0] * tw_).astype(int), 0, tw_ - 1)]
wpos = inv; Pw = np.zeros((nW, 3)); Pw[wpos] = P
Cw = np.zeros((nW, 3)); np.add.at(Cw, wpos, col); Cw /= np.bincount(wpos, minlength=nW)[:, None]
if len(sys.argv) > 1 and sys.argv[1] == 'lodin':
    with open('lodin.bin', 'wb') as f:
        np.array([nW, nW, len(F)], np.int32).tofile(f); Pw.tofile(f); np.arange(nW, dtype=np.int32).tofile(f); wpos[F].astype(np.int32).tofile(f)
    print('wrote lodin.bin'); sys.exit()
d = open('lod.bin', 'rb').read(); n = struct.unpack('<i', d[:4])[0]; LF = np.frombuffer(d[4:], dtype=np.int32).reshape(n, 3)
used, linv = np.unique(LF, return_inverse=True); LF = linv.reshape(-1, 3)
LP = Pw[used]; LC = Cw[used]
# flat-ish normals for the small copy
LN = np.zeros_like(LP); fn = np.cross(LP[LF[:, 1]] - LP[LF[:, 0]], LP[LF[:, 2]] - LP[LF[:, 0]])
for k in range(3): np.add.at(LN, LF[:, k], fn)
LN /= np.maximum(np.linalg.norm(LN, axis=1, keepdims=True), 1e-12)
LN[np.linalg.norm(LN, axis=1) < 0.5] = (0, 1, 0)   # a vertex whose faces cancel out: give it a valid normal (zero normals make NaN pixels)
print('lod tris', len(LF))

# ---------------------------------------------------------------- GLB
buf = bytearray(); views = []; accs = []
def view(data, target=None):
    while len(buf) % 4: buf.append(0)
    o = len(buf); buf.extend(data); v = {'buffer': 0, 'byteOffset': o, 'byteLength': len(data)}
    if target: v['target'] = target
    views.append(v); return len(views) - 1
def acc(arr, ctype, typ, target=34962, minmax=False):
    arr = np.ascontiguousarray(arr); a = {'bufferView': view(arr.tobytes(), target), 'componentType': ctype, 'count': len(arr), 'type': typ}
    if minmax: a['min'] = arr.min(0).tolist(); a['max'] = arr.max(0).tolist()
    accs.append(a); return len(accs) - 1
a_pos = acc((P * S).astype(np.float32), 5126, 'VEC3', minmax=True); a_nrm = acc(N.astype(np.float32), 5126, 'VEC3'); a_uv = acc(UV.astype(np.float32), 5126, 'VEC2')
a_j = acc(jt, 5121, 'VEC4'); a_w = acc(wt, 5126, 'VEC4'); a_i = acc(F.astype(np.uint32).ravel(), 5125, 'SCALAR', 34963)
l_pos = acc((LP * S).astype(np.float32), 5126, 'VEC3', minmax=True); l_nrm = acc(LN.astype(np.float32), 5126, 'VEC3')
l_col = acc((np.clip(LC, 0, 1) ** 2.2).astype(np.float32), 5126, 'VEC3'); l_i = acc(LF.astype(np.uint16).ravel(), 5123, 'SCALAR', 34963)
ibm = np.zeros((len(names), 4, 4), np.float32)
for nm in names: mm = np.eye(4, dtype=np.float32); mm[:3, 3] = -J[nm][1] * S; ibm[idx[nm]] = mm.T
a_ibm = acc(ibm.reshape(-1, 16), 5126, 'MAT4', target=None)
iv = [view(img_bytes(i)) for i in range(len(SJ['images']))]
nodes = []
for nm in names:
    p, pos = J[nm]; local = pos - (J[p][1] if p else 0); nodes.append({'name': nm, 'translation': (local * S).tolist()})
for nm in names:
    ch = [idx[c] for c in names if J[c][0] == nm]
    if ch: nodes[idx[nm]]['children'] = ch
nb = len(nodes)
nodes += [{'name': 'orion', 'mesh': 0, 'skin': 0}, {'name': 'orion_lod', 'mesh': 1}, {'name': 'OrionRoot', 'children': [idx['hips'], nb, nb + 1]}]
mat0 = dict(SJ['materials'][0]); mat0['name'] = 'orion'
gl = {'asset': {'version': '2.0', 'generator': 'ad-nostra orion rig'}, 'scene': 0, 'scenes': [{'nodes': [nb + 2]}], 'nodes': nodes,
      'skins': [{'joints': list(range(nb)), 'inverseBindMatrices': a_ibm, 'skeleton': idx['hips']}],
      'meshes': [{'name': 'orion', 'primitives': [{'attributes': {'POSITION': a_pos, 'NORMAL': a_nrm, 'TEXCOORD_0': a_uv, 'JOINTS_0': a_j, 'WEIGHTS_0': a_w}, 'indices': a_i, 'material': 0}]},
                 {'name': 'orion_lod', 'primitives': [{'attributes': {'POSITION': l_pos, 'NORMAL': l_nrm, 'COLOR_0': l_col}, 'indices': l_i, 'material': 1}]}],
      'materials': [mat0, {'name': 'orion_lod', 'pbrMetallicRoughness': {'metallicFactor': 0.55, 'roughnessFactor': 0.5}}],
      'textures': SJ['textures'], 'samplers': SJ.get('samplers', [{'magFilter': 9729, 'minFilter': 9987}]),
      'images': [{'bufferView': v, 'mimeType': SJ['images'][i]['mimeType']} for i, v in enumerate(iv)],
      'accessors': accs, 'bufferViews': views, 'buffers': [{'byteLength': len(buf)}]}
js = json.dumps(gl, separators=(',', ':')).encode(); js += b' ' * ((4 - len(js) % 4) % 4)
while len(buf) % 4: buf.append(0)
out = struct.pack('<III', 0x46546C67, 2, 12 + 8 + len(js) + 8 + len(buf)) + struct.pack('<II', len(js), 0x4E4F534A) + js + struct.pack('<II', len(buf), 0x004E4942) + bytes(buf)
open('orion.glb', 'wb').write(out)
open('orion.js', 'w').write('// Orion Mascar, father of the Governor: rigged with the Ascendant skeleton, 110k triangles. Embedded so the game runs from a double-click.\nwindow.ORION_GLB_B64="' + base64.b64encode(out).decode() + '";\n')
print('orion.glb', len(out), 'bytes; bones', len(names))
