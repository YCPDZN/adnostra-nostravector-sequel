"""Orthographic textured views with a world-unit grid, for measuring joints. Optional skeleton overlay."""
import os
import numpy as np, io, json, struct, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from raster import raster, texcol
from PIL import Image, ImageDraw
VIEWS = {   # rows of R: screen x, screen y, depth (toward viewer)
    'side': [[0, 0, 1], [0, 1, 0], [1, 0, 0]],      # seen from +x (the dragon's left): z to the right
    'top': [[1, 0, 0], [0, 0, 1], [0, 1, 0]],       # seen from above: x right, z up
    'front': [[-1, 0, 0], [0, 1, 0], [0, 0, 1]],    # seen from in front: dragon's left (+x) on screen right? no: -x right
    'back': [[1, 0, 0], [0, 1, 0], [0, 0, -1]],
}
def gltex(path, which):
    d = open(path, 'rb').read(); jl = struct.unpack('<I', d[12:16])[0]; J = json.loads(d[20:20 + jl]); B = d[20 + jl + 8:]
    bv = J['bufferViews'][J['images'][J['textures'][J['materials'][0]['pbrMetallicRoughness']['baseColorTexture']['index']]['source']]['bufferView']]
    return np.asarray(Image.open(io.BytesIO(B[bv['byteOffset']:bv['byteOffset'] + bv['byteLength']])).convert('RGB'))
def parts_for(name):
    if name == 'taiman':
        M = np.load('taiman/fixed.npz'); tt = np.asarray(Image.open('taiman/tail_color.png').convert('RGB')); TUV = M['TUV'].copy(); TUV[:, 1] %= 1
        return [(M['P'].astype(float), M['F'], texcol(M['UV'], gltex('taiman/taiman.glb', 0))), (M['TP'].astype(float), M['TF'], texcol(TUV, tt))]
    M = np.load('tuldran/lo.npz'); P = M['P'].astype(float); P = np.stack([-P[:, 2], P[:, 1], P[:, 0]], 1)
    return [(P, M['F'], texcol(M['UV'], gltex('tuldran/tuldran.glb', 0)))]
def view(name, v, out, W=1400, H=900, bones=None, clip=None):
    parts = parts_for(name)
    if clip: parts = [(P, F[clip(P)[F].all(1)], c) for P, F, c in parts]
    R = np.array(VIEWS[v], float); allP = np.vstack([p[0] for p in parts]); c = np.zeros(3)
    Q = allP @ R.T; span = max(np.ptp(Q[:, 0]) * H / W, np.ptp(Q[:, 1])) * 1.05
    c = R.T @ np.array([(Q[:, 0].max() + Q[:, 0].min()) / 2, (Q[:, 1].max() + Q[:, 1].min()) / 2, 0])
    img, (R, c, sc) = raster(parts, 0, 0, W, H, centre=c, span=span, Rm=R)
    im = Image.fromarray(img); d = ImageDraw.Draw(im)
    toS = lambda p: ((np.array(p) - c) @ R.T)[:2] * [sc, -sc] + [W / 2, H / 2]
    cs = c @ R.T
    for g in np.arange(-0.6, 0.61, 0.02):
        big = abs(round(g / 0.1) * 0.1 - g) < 1e-6
        x = (g - cs[0]) * sc + W / 2; y = -(g - cs[1]) * sc + H / 2
        col = (255, 60, 60) if big else (120, 120, 140)
        if 0 <= x < W: d.line([(x, 0), (x, H)], fill=col, width=1); d.text((x + 2, 2), f'{g:.2f}', fill=(200, 0, 0) if big else (60, 60, 90))
        if 0 <= y < H: d.line([(0, y), (W, y)], fill=col, width=1); d.text((2, y + 1), f'{g:.2f}', fill=(200, 0, 0) if big else (60, 60, 90))
    if bones:
        for n, (par, pos) in bones.items():
            a = toS(pos); d.ellipse([a[0] - 4, a[1] - 4, a[0] + 4, a[1] + 4], fill=(255, 255, 0), outline=(0, 0, 0))
            if par: b = toS(bones[par][1]); d.line([tuple(a), tuple(b)], fill=(255, 255, 0), width=3)
    im.save(out)
if __name__ == '__main__':
    view(sys.argv[1], sys.argv[2], sys.argv[3])
