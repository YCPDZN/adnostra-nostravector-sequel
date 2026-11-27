"""Taiman's tail: the Tripo export ends in a short pointed stub with a loose fragment floating behind it.
Drop the fragment, and grow a full tail from the stub: a tapering tube along a curve that curls round to the
dragon's right and lies on the sand, with dorsal spines, textured with colour sampled off the stub's own scales.
Writes taiman/fixed.npz: the body mesh (P N UV F, original atlas) and the tail mesh (TP TN TUV TF, its own texture),
plus tail_color.png, tail_mr.png, tail_normal.png and the tail's centreline (for the rig)."""
import numpy as np, io, json, struct
from PIL import Image, ImageFilter
from scipy.spatial import cKDTree
M = np.load('taiman/lo.npz'); P, N, UV, F = M['P'], M['N'], M['UV'], M['F']
from scipy.sparse import coo_matrix
from scipy.sparse.csgraph import connected_components
_, _inv = np.unique(P.round(5), axis=0, return_inverse=True); _inv = _inv.ravel(); _e = _inv[np.concatenate([F[:, [0, 1]], F[:, [1, 2]]])]
_, _lab = connected_components(coo_matrix((np.ones(len(_e)), (_e[:, 0], _e[:, 1])), shape=(_inv.max() + 1,) * 2), directed=False)
lv = _lab[_inv]; lv = (lv != np.bincount(lv).argmax()).astype(int)   # 0 = the body, 1 = the loose fragment
# ---- 1. drop the floating fragment
keep = lv == 0
remap = -np.ones(len(P), int); remap[keep] = np.arange(keep.sum())
F = F[keep[F].all(1)]; F = remap[F]; P, N, UV = P[keep], N[keep], UV[keep]
# ---- 2. the centreline: through the stub, then curling round to the right, down onto the ground
K = np.array([[-0.012, 0.074, -0.10], [-0.024, 0.068, -0.155], [-0.034, 0.060, -0.21], [-0.038, 0.055, -0.27], [-0.030, 0.046, -0.36], [0.020, 0.036, -0.44],
              [0.110, 0.028, -0.485], [0.210, 0.022, -0.475], [0.290, 0.016, -0.42], [0.335, 0.012, -0.37]])
def catmull(K, n):
    Q = np.vstack([2 * K[0] - K[1], K, 2 * K[-1] - K[-2]]); out = []
    for i in range(1, len(Q) - 2):
        p0, p1, p2, p3 = Q[i - 1], Q[i], Q[i + 1], Q[i + 2]
        for t in np.linspace(0, 1, n, endpoint=False):
            out.append(0.5 * ((2 * p1) + (-p0 + p2) * t + (2 * p0 - 5 * p1 + 4 * p2 - p3) * t * t + (-p0 + 3 * p1 - 3 * p2 + p3) * t ** 3))
    out.append(K[-1]); return np.array(out)
C = catmull(K, 40)
seg = np.linalg.norm(np.diff(C, axis=0), axis=1); s = np.concatenate([[0], np.cumsum(seg)]); Ltot = s[-1]
u = s / Ltot
# cross-section half-width / half-height: envelops the stub at the start, tapers to a point
rw = 0.038 * (1 - u) ** 0.8 + 0.0025
rh = 0.031 * (1 - u) ** 0.8 + 0.0025
# rest on the sand once clear of the body
ground = rh + 0.004
C[:, 1] = np.where(u < 0.25, np.maximum(C[:, 1], ground), np.maximum(ground, C[:, 1] * (1 - np.clip((u - 0.25) / 0.15, 0, 1)) + ground * np.clip((u - 0.25) / 0.15, 0, 1)))
# frames: tangent, side (horizontal), up
T = np.gradient(C, axis=0); T /= np.linalg.norm(T, axis=1)[:, None]
up0 = np.array([0, 1.0, 0]); Sd = np.cross(up0, T); Sd /= np.linalg.norm(Sd, axis=1)[:, None]; Up = np.cross(T, Sd)
NR = 28; th = np.linspace(0, 2 * np.pi, NR + 1)   # seam column duplicated for UVs
flat = 1 + 0.25 * u   # a little flatter toward the tip
ring = lambda i, a: C[i] + Sd[i] * np.cos(a) * rw[i] * flat[i] + Up[i] * np.sin(a) * rh[i] / flat[i]
TP = np.array([[ring(i, a) for a in th] for i in range(len(C))]).reshape(-1, 3)
# texture coordinates: around (u) and along (v, in world-ish units so scales keep their size)
TEXL = 0.11   # tail length one texture repeat covers
TUV = np.array([[a / (2 * np.pi), s[i] / TEXL] for i in range(len(C)) for a in th])
TF = []
W = NR + 1
for i in range(len(C) - 1):
    for k in range(NR):
        a, b, c, d = i * W + k, i * W + k + 1, (i + 1) * W + k, (i + 1) * W + k + 1
        TF += [[a, c, b], [b, c, d]]
# tip cap
tip = len(TP); TP = np.vstack([TP, C[-1] + T[-1] * 0.008]); TUV = np.vstack([TUV, [0.5, s[-1] / TEXL + 0.05]])
TF += [[(len(C) - 1) * W + k, tip, (len(C) - 1) * W + k + 1] for k in range(NR)]
# dorsal spines along the top, shrinking toward the tip
for sp in np.arange(0.13, 0.88, 0.042):
    i = int(np.searchsorted(u, sp)); base = C[i] + Up[i] * rh[i] / flat[i] * 0.85
    h = rh[i] * 1.5 + 0.004; r = rh[i] * 0.45 + 0.002
    tipP = base + Up[i] * h - T[i] * h * 0.55
    b0 = len(TP); vv = s[i] / TEXL
    for a in np.linspace(0, 2 * np.pi, 7)[:-1]:
        TP = np.vstack([TP, base + (T[i] * np.cos(a) + Sd[i] * np.sin(a)) * r]); TUV = np.vstack([TUV, [0.25 + 0.03 * np.cos(a), vv + 0.03 * np.sin(a)]])
    TP = np.vstack([TP, tipP]); TUV = np.vstack([TUV, [0.25, vv + 0.08]])
    TF += [[b0 + k, b0 + (k + 1) % 6, b0 + 6] for k in range(6)]
TF = np.array(TF, np.uint32)
# normals
def vnormals(P, F):
    n = np.zeros_like(P); fn = np.cross(P[F[:, 1]] - P[F[:, 0]], P[F[:, 2]] - P[F[:, 0]])
    for k in range(3): np.add.at(n, F[:, k], fn)
    return n / (np.linalg.norm(n, axis=1)[:, None] + 1e-12)
TN = vnormals(TP, TF)
# fix seam normals (duplicate column)
for i in range(len(C)): a, b = i * W, i * W + NR; m = TN[a] + TN[b]; m /= np.linalg.norm(m); TN[a] = TN[b] = m
# make sure the winding faces out
if np.mean(np.sum(TN[:len(C) * W] * (TP[:len(C) * W] - np.repeat(C, W, 0)), 1)) < 0: TF = TF[:, ::-1].copy(); TN = vnormals(TP, TF)
# ---- 3. bake the tail's texture from the stub's surface
d = open('taiman/taiman.glb', 'rb').read(); jl = struct.unpack('<I', d[12:16])[0]; J = json.loads(d[20:20 + jl]); Bn = d[20 + jl + 8:]
def img(idx):
    bv = J['bufferViews'][J['images'][J['textures'][idx]['source']]['bufferView']]
    return np.asarray(Image.open(io.BytesIO(Bn[bv['byteOffset']:bv['byteOffset'] + bv['byteLength']])).convert('RGB')).astype(np.float32)
mat = J['materials'][0]; col = img(mat['pbrMetallicRoughness']['baseColorTexture']['index']); mr = img(mat['pbrMetallicRoughness']['metallicRoughnessTexture']['index'])
H_, W_ = col.shape[:2]
reg = (P[:, 2] < -0.15) & (P[:, 2] > -0.30) & (P[:, 0] > -0.09) & (P[:, 0] < 0.03)
Fr = F[reg[F].all(1)]
rng = np.random.default_rng(1); smp, suv = [], []
for _ in range(40):
    b = rng.dirichlet([1, 1, 1], len(Fr)); smp.append(np.einsum('nk,nkj->nj', b, P[Fr])); suv.append(np.einsum('nk,nkj->nj', b, UV[Fr]))
smp = np.vstack(smp); suv = np.vstack(suv); tree = cKDTree(smp)
def bil(im, uv):
    x = np.clip(uv[:, 0] * W_ - 0.5, 0, W_ - 1.001); y = np.clip(uv[:, 1] * H_ - 0.5, 0, H_ - 1.001); x0 = x.astype(int); y0 = y.astype(int); fx = (x - x0)[:, None]; fy = (y - y0)[:, None]
    return im[y0, x0] * (1 - fx) * (1 - fy) + im[y0, x0 + 1] * fx * (1 - fy) + im[y0 + 1, x0] * (1 - fx) * fy + im[y0 + 1, x0 + 1] * fx * fy
TW, TH = 512, 512
A = (np.arange(TW) + 0.5) / TW * 2 * np.pi; V = (np.arange(TH) + 0.5) / TH
# along: mirror-repeat across the stub between z=-0.16 and z=-0.27 (one texture repeat = there and back)
zz = -0.16 - 0.11 * (1 - np.abs(1 - 2 * V))
def slice_centre(z):
    m = (np.abs(smp[:, 2] - z) < 0.006); q = smp[m]
    return np.array([np.median(q[:, 0]), (np.percentile(q[:, 1], 5) + np.percentile(q[:, 1], 60)) / 2, z]), (np.percentile(q[:, 0], 97) - np.percentile(q[:, 0], 3)) / 2, (np.percentile(q[:, 1], 60) - np.percentile(q[:, 1], 3)) / 2
Q = np.zeros((TH, TW, 3))
for j in range(TH):
    c, hw, hh = slice_centre(zz[j])
    Q[j] = c + np.stack([np.cos(A) * hw * 1.6, np.sin(A) * hh * 1.6, np.zeros_like(A)], 1)
_, ix = tree.query(Q.reshape(-1, 3)); uvs = suv[ix]
tc = bil(col, uvs).reshape(TH, TW, 3); tm = bil(mr, uvs).reshape(TH, TW, 3)
# the texture's v runs down the image; glTF v=0 is the top row
Image.fromarray(np.clip(tc, 0, 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(0.6)).save('taiman/tail_color.png')
Image.fromarray(np.clip(tm, 0, 255).astype(np.uint8)).save('taiman/tail_mr.png')
# a normal map from the colour's brightness, so the scales catch the light like the rest of him
lum = np.asarray(Image.fromarray(np.clip(tc, 0, 255).astype(np.uint8)).convert('L').filter(ImageFilter.GaussianBlur(1.2))).astype(np.float32) / 255
gx = np.roll(lum, -1, 1) - np.roll(lum, 1, 1); gy = np.roll(lum, -1, 0) - np.roll(lum, 1, 0); k = 3.0
nm = np.stack([-gx * k, gy * k, np.ones_like(lum)], -1); nm /= np.linalg.norm(nm, axis=-1, keepdims=True)
Image.fromarray(((nm * 0.5 + 0.5) * 255).astype(np.uint8)).save('taiman/tail_normal.png')
np.savez('taiman/fixed.npz', P=P.astype('<f4'), N=N.astype('<f4'), UV=UV.astype('<f4'), F=F.astype(np.uint32),
         TP=TP.astype('<f4'), TN=TN.astype('<f4'), TUV=TUV.astype('<f4'), TF=TF, C=C, U=u)
print('body', len(P), len(F), 'tail', len(TP), len(TF), 'tail length', round(Ltot, 3), 'bounds', np.vstack([P, TP]).min(0).round(3), np.vstack([P, TP]).max(0).round(3))
