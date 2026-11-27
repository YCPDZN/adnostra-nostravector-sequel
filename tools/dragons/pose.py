"""Pose a rigged dragon in numpy (linear blend skinning, as three.js does) and render it, to check the weights."""
import os
import numpy as np, sys, io, json, struct
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from raster import raster, texcol
from ortho import parts_for
from PIL import Image
def euler(x, y, z):   # XYZ order, as three.js Euler default
    cx, sx, cy, sy, cz, sz = np.cos(x), np.sin(x), np.cos(y), np.sin(y), np.cos(z), np.sin(z)
    Rx = np.array([[1, 0, 0], [0, cx, -sx], [0, sx, cx]]); Ry = np.array([[cy, 0, sy], [0, 1, 0], [-sy, 0, cy]]); Rz = np.array([[cz, -sz, 0], [sz, cz, 0], [0, 0, 1]])
    return Rx @ Ry @ Rz
def posed(name, pose):
    R = np.load(f'{name}/rig.npz'); names = list(R['names']); heads = R['heads']; par = R['parents']
    Gm = []
    for i, n in enumerate(names):
        L = np.eye(4); L[:3, 3] = heads[i] - (heads[par[i]] if par[i] >= 0 else 0); L[:3, :3] = euler(*pose.get(n, (0, 0, 0)))
        Gm.append((Gm[par[i]] if par[i] >= 0 else np.eye(4)) @ L)
    S = np.array([g @ np.vstack([np.hstack([np.eye(3), -heads[i][:, None]]), [0, 0, 0, 1]]) for i, g in enumerate(Gm)])
    P = R['P']; Ph = np.hstack([P, np.ones((len(P), 1))])
    out = np.zeros((len(P), 3))
    for k in range(4):
        out += R['W'][:, k:k + 1] * np.einsum('nij,nj->ni', S[R['J'][:, k]], Ph)[:, :3]
    return out, R
def render(name, pose, views, out, W=520, H=420, colour_by_bone=False):
    Pp, R = posed(name, pose); parts = parts_for(name); offs = R['offs']
    if colour_by_bone:
        rng = np.random.default_rng(3); pal = rng.uniform(0.15, 1, (64, 3)); cols = pal[R['J'][:, 0]]
        parts = [(Pp[o:o2], p[1], cols[o:o2]) for p, o, o2 in zip(parts, offs[:-1], offs[1:])]
    else:
        parts = [(Pp[o:o2], p[1], p[2]) for p, o, o2 in zip(parts, offs[:-1], offs[1:])]
    ims = [raster(parts, y, p, W, H, centre=np.array([0, 0.15, 0]), span=1.15)[0] for y, p in views]
    Image.fromarray(np.concatenate(ims, 1)).save(out)
