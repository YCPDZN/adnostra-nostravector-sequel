"""Nico Brown: rig the simplified Tripo mesh with the Ascendant soldier's 19-bone skeleton
(same bone names, so src/soldier.js animates her), keep her long hair on the head, neck and chest,
build a small vertex-coloured copy for distant rendering, and write nico.glb + nico.js.
Inputs: lo.npz (P, N, UV, F of the simplified mesh), nico_static.glb (textures), lod.bin (LOD faces)."""
import numpy as np, json, struct, base64, io, sys
from PIL import Image
from scipy.sparse import coo_matrix
S = 1.70   # model units -> metres (Nico stands 1.70 m)

M = np.load('lo.npz'); P, N, UV, F = M['P'].astype(np.float64), M['N'], M['UV'], M['F']
# ---------------------------------------------------------------- skeleton (model units, +X = character's left, faces +Z)
J = {}
def add(n, p, pos): J[n] = (p, np.array(pos, float))
add('hips', None, (0, 0.50, -0.005)); add('spine', 'hips', (0, 0.58, -0.005)); add('chest', 'spine', (0, 0.68, -0.01))
add('neck', 'chest', (0, 0.81, -0.02)); add('head', 'neck', (0, 0.86, -0.01))
# arms hanging at her sides, palms in
add('clavL', 'chest', (0.035, 0.79, -0.025)); add('uarmL', 'clavL', (0.105, 0.775, -0.035)); add('farmL', 'uarmL', (0.118, 0.615, -0.03)); add('handL', 'farmL', (0.118, 0.45, 0.01))
add('thighL', 'hips', (0.06, 0.47, 0.0)); add('shinL', 'thighL', (0.06, 0.275, 0.022)); add('footL', 'shinL', (0.062, 0.08, -0.025))
add('clavR', 'chest', (-0.035, 0.79, -0.025)); add('uarmR', 'clavR', (-0.108, 0.775, -0.033)); add('farmR', 'uarmR', (-0.12, 0.615, -0.015)); add('handR', 'farmR', (-0.12, 0.45, 0.022))
add('thighR', 'hips', (-0.065, 0.47, 0.005)); add('shinR', 'thighR', (-0.045, 0.275, -0.008)); add('footR', 'shinR', (-0.03, 0.08, -0.02))
names = list(J.keys()); idx = {n: i for i, n in enumerate(names)}
tail = {'hips': (0, 0.58, -0.005), 'spine': (0, 0.68, -0.01), 'chest': (0, 0.79, -0.02), 'neck': (0, 0.86, -0.01), 'head': (0, 1.0, 0.0),
        'clavL': (0.105, 0.775, -0.035), 'uarmL': (0.118, 0.615, -0.03), 'farmL': (0.118, 0.45, 0.01), 'handL': (0.105, 0.375, 0.02),
        'thighL': (0.06, 0.275, 0.022), 'shinL': (0.062, 0.08, -0.025), 'footL': (0.06, 0.01, 0.075),
        'clavR': (-0.108, 0.775, -0.033), 'uarmR': (-0.12, 0.615, -0.015), 'farmR': (-0.12, 0.45, 0.022), 'handR': (-0.10, 0.375, 0.02),
        'thighR': (-0.045, 0.275, -0.008), 'shinR': (-0.03, 0.08, -0.02), 'footR': (-0.035, 0.01, 0.08)}

def seg_dist(p, a, b):
    ab = b - a; t = np.clip(((p - a) @ ab) / (ab @ ab), 0, 1); return np.linalg.norm(p - (a + t[:, None] * ab), axis=1)

# welded adjacency (seams share weights)
_, inv = np.unique(P.round(6), axis=0, return_inverse=True); inv = inv.ravel(); nW = inv.max() + 1
e = np.concatenate([F[:, [0, 1]], F[:, [1, 2]], F[:, [2, 0]]]); e = inv[e]; e = np.concatenate([e, e[:, ::-1]])
A = coo_matrix((np.ones(len(e)), (e[:, 0], e[:, 1])), shape=(nW, nW)).tocsr(); A.data[:] = 1
G = coo_matrix((np.ones(len(inv)), (np.arange(len(inv)), inv)), shape=(len(inv), nW)).tocsr()
adj = G @ A @ G.T

x, y, z = P[:, 0], P[:, 1], P[:, 2]; ax = np.abs(x)
# ---- regions (no cape)
cape = np.zeros(len(P), bool)
from scipy.sparse.csgraph import dijkstra
Aco = adj.tocoo(); m = Aco.row != Aco.col
el = np.linalg.norm(P[Aco.row[m]] - P[Aco.col[m]], axis=1) + 1e-6
Gd = coo_matrix((el, (Aco.row[m], Aco.col[m])), shape=adj.shape).tocsr()
def seeds(n, r=0.03): a_, b_ = J[n][1], np.array(tail[n]); return np.nonzero(seg_dist(P, a_, b_) < r)[0]
armS = np.concatenate([seeds('farmR'), seeds('handR'), seeds('farmL'), seeds('handL')])
armS = armS[(ax[armS] > 0.105) & (y[armS] < 0.70)]
bodyS = np.concatenate([seeds(n) for n in ('hips', 'spine', 'chest', 'thighL', 'thighR', 'shinL', 'shinR')]); bodyS = bodyS[ax[bodyS] < 0.06]
da = dijkstra(Gd, indices=armS, min_only=True); db = dijkstra(Gd, indices=bodyS, min_only=True)
# her hair: long, down her back and over her shoulders; it stays with the head, neck and chest, never the arms
hair = (y > 0.6) & (((z < -0.045) & (ax < 0.1)) | ((y > 0.72) & (ax < 0.092) & (z > -0.06) & (z < 0.06) & (ax > 0.05)))
# her arms are bare and her trousers dark: the hands hang against the trouser pockets, so tell them apart by colour
_src = open('nico_static.glb', 'rb').read(); _jl = struct.unpack('<I', _src[12:16])[0]; _SJ = json.loads(_src[20:20 + _jl]); _SB = _src[20 + _jl + 8:]
_bi = _SJ['textures'][_SJ['materials'][0]['pbrMetallicRoughness']['baseColorTexture']['index']]['source']; _bv = _SJ['bufferViews'][_SJ['images'][_bi]['bufferView']]
_tex = np.asarray(Image.open(io.BytesIO(_SB[_bv.get('byteOffset', 0):_bv.get('byteOffset', 0) + _bv['byteLength']])).convert('RGB')).astype(np.float32) / 255
_c = _tex[np.clip((UV[:, 1] * _tex.shape[0]).astype(int), 0, _tex.shape[0] - 1), np.clip((UV[:, 0] * _tex.shape[1]).astype(int), 0, _tex.shape[1] - 1)]
skin = (_c[:, 0] > 0.30) & (_c[:, 0] > _c[:, 2] + 0.05) & (_c[:, 0] >= _c[:, 1] - 0.02)
# skin is decided per welded vertex (seams agree), then grown one ring so the edges of the arm come with it
_sw = np.zeros(nW); np.add.at(_sw, inv, skin.astype(float)); _sw /= np.bincount(inv, minlength=nW)
skinw = _sw > 0.5
isarm_w = np.zeros(nW, bool); _cand = np.zeros(nW, bool)
_Pw = np.zeros((nW, 3)); _Pw[inv] = P; _axw = np.abs(_Pw[:, 0])
_cand = skinw & (_axw > 0.086) & (_Pw[:, 1] < 0.79) & (_Pw[:, 1] > 0.34)
_Aw = A.copy(); _cand = _cand | ((np.asarray(_Aw @ _cand.astype(float)).ravel() > 0) & (_axw > 0.1) & (_Pw[:, 1] < 0.79) & (_Pw[:, 1] > 0.34) & (_Pw[:, 1] > 0.4) & skinw.astype(bool) | _cand)
isarm = _cand[inv] & ~hair
band = (y >= 0.72) & (y < 0.79) & (ax > 0.095) & ~isarm & ~hair    # armpit: upper arm blended with chest
shoulder = (y >= 0.76) & (ax > 0.095) & ~hair
print('arm verts', isarm.sum(), 'hair verts', hair.sum(), 'of', len(P))

_dl = np.min([seg_dist(P, J[n][1], np.array(tail[n])) for n in ('thighL', 'shinL', 'footL')], 0)
_dr = np.min([seg_dist(P, J[n][1], np.array(tail[n])) for n in ('thighR', 'shinR', 'footR')], 0)
_ls = np.where(_dl < _dr, 1.0, -1.0); _lw = np.zeros(nW); np.add.at(_lw, inv, _ls); legside = np.where(_lw[inv] >= 0, 1, -1)   # seam copies agree
D = np.full((len(P), len(names)), np.inf)
for n in names:
    a, b = J[n][1], np.array(tail[n]); d = seg_dist(P, a, b)
    sd = n[-1] if n[-1] in 'LR' else None
    ok = np.ones(len(P), bool)
    if sd and n.startswith(('thigh', 'shin', 'foot')): ok &= legside == (1 if sd == 'L' else -1)
    elif sd: ok &= (np.sign(x) == (1 if sd == 'L' else -1)) | (ax < 1e-4)
    if n.startswith(('uarm', 'farm', 'hand')): ok &= isarm | ((shoulder | band) & n.startswith('uarm'))
    elif n.startswith(('thigh', 'shin', 'foot')): ok &= (y < 0.51) & ~isarm
    elif n.startswith('clav'): ok &= (y > 0.7) & ~isarm & ~hair
    else: ok &= ~isarm
    if hair.any() and not n in ('head', 'neck', 'chest', 'spine'): ok &= ~hair
    if n == 'head': ok &= y > 0.835
    if n == 'neck': ok &= y > 0.77
    D[ok, idx[n]] = d[ok]
W = 1 / np.maximum(D, 0.004) ** 4; W[~np.isfinite(D)] = 0
bad = W.sum(1) == 0
if bad.any():
    Dall = np.stack([seg_dist(P[bad], J[n][1], np.array(tail[n])) for n in names], 1); W[bad, Dall.argmin(1)] = 1
W /= W.sum(1, keepdims=True)
E = np.isfinite(D) | (W > 0)
for _ in range(3):
    W = 0.5 * W + 0.5 * np.asarray(adj @ W) / np.maximum(np.asarray(adj.sum(1)), 1)
    W *= E; W /= np.maximum(W.sum(1, keepdims=True), 1e-12)
top = np.argsort(-W, 1)[:, :4]; tw = np.take_along_axis(W, top, 1); tw /= tw.sum(1, keepdims=True)
jt, wt = top.astype(np.uint8), tw.astype(np.float32)
# where the export fused her hands to her trouser pockets, and her boots together, cut the few triangles that bridge
# them, or they stretch into strands when she moves (in the rest pose the parts touch, so nothing opens up)
dom = np.array(names)[top[:, 0]]
grp = np.full(len(P), 'body', object)
for sd in 'LR':
    grp[np.isin(dom, ['uarm' + sd, 'farm' + sd, 'hand' + sd])] = 'arm' + sd
    grp[np.isin(dom, ['thigh' + sd, 'shin' + sd, 'foot' + sd])] = 'leg' + sd
grp[np.isin(dom, ['hips', 'spine'])] = 'hips'
G3 = grp[F]
def has(g): return (G3 == g).any(1)
bridge = ((has('armL') | has('armR')) & (has('hips') | has('legL') | has('legR'))) | (has('legL') & has('legR') & (P[F][:, :, 1].max(1) < 0.42))
print('bridging triangles cut:', int(bridge.sum()))
F = F[~bridge]
np.savez('nico_weights.npz', jt=jt, wt=wt, F=F)

# ---------------------------------------------------------------- distant copy: positions-only simplification, colours from the texture
src = open('nico_static.glb', 'rb').read(); jl = struct.unpack('<I', src[12:16])[0]; SJ = json.loads(src[20:20 + jl]); SB = src[20 + jl + 8:]
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
nodes += [{'name': 'nico', 'mesh': 0, 'skin': 0}, {'name': 'nico_lod', 'mesh': 1}, {'name': 'NicoRoot', 'children': [idx['hips'], nb, nb + 1]}]
mat0 = dict(SJ['materials'][0]); mat0['name'] = 'nico'
gl = {'asset': {'version': '2.0', 'generator': 'ad-nostra nico rig'}, 'scene': 0, 'scenes': [{'nodes': [nb + 2]}], 'nodes': nodes,
      'skins': [{'joints': list(range(nb)), 'inverseBindMatrices': a_ibm, 'skeleton': idx['hips']}],
      'meshes': [{'name': 'nico', 'primitives': [{'attributes': {'POSITION': a_pos, 'NORMAL': a_nrm, 'TEXCOORD_0': a_uv, 'JOINTS_0': a_j, 'WEIGHTS_0': a_w}, 'indices': a_i, 'material': 0}]},
                 {'name': 'nico_lod', 'primitives': [{'attributes': {'POSITION': l_pos, 'NORMAL': l_nrm, 'COLOR_0': l_col}, 'indices': l_i, 'material': 1}]}],
      'materials': [mat0, {'name': 'nico_lod', 'pbrMetallicRoughness': {'metallicFactor': 0.55, 'roughnessFactor': 0.5}}],
      'textures': SJ['textures'], 'samplers': SJ.get('samplers', [{'magFilter': 9729, 'minFilter': 9987}]),
      'images': [{'bufferView': v, 'mimeType': SJ['images'][i]['mimeType']} for i, v in enumerate(iv)],
      'accessors': accs, 'bufferViews': views, 'buffers': [{'byteLength': len(buf)}]}
js = json.dumps(gl, separators=(',', ':')).encode(); js += b' ' * ((4 - len(js) % 4) % 4)
while len(buf) % 4: buf.append(0)
out = struct.pack('<III', 0x46546C67, 2, 12 + 8 + len(js) + 8 + len(buf)) + struct.pack('<II', len(js), 0x4E4F534A) + js + struct.pack('<II', len(buf), 0x004E4942) + bytes(buf)
open('nico_rigged.glb', 'wb').write(out)
open('nico.js', 'w').write('// Nico Brown: rigged with the Ascendant skeleton, 110k triangles. Embedded so the game runs from a double-click.\nwindow.NICO_GLB_B64="' + base64.b64encode(out).decode() + '";\n')
print('nico.glb', len(out), 'bytes; bones', len(names))
