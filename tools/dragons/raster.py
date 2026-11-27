"""Small z-buffered software rasteriser with textures, for checking models (no GPU here)."""
import numpy as np
def raster(parts, yaw, pitch, W=640, H=480, centre=None, span=None, light=(0.35, 0.7, 0.6), bg=(0.82, 0.84, 0.86), Rm=None):
    """parts: list of (P, F, colours-per-vertex). Orthographic."""
    allP = np.vstack([p[0] for p in parts]); c = centre if centre is not None else (allP.max(0) + allP.min(0)) / 2
    cy, sy, cp, sp = np.cos(yaw), np.sin(yaw), np.cos(pitch), np.sin(pitch)
    R = np.array([[1, 0, 0], [0, cp, -sp], [0, sp, cp]]) @ np.array([[cy, 0, -sy], [0, 1, 0], [sy, 0, cy]])
    if Rm is not None: R = np.array(Rm, float)
    Qa = (allP - c) @ R.T; sc = min(W, H) * 0.92 / (span if span else np.ptp(Qa[:, :2], axis=0).max())
    img = np.zeros((H, W, 3)); img[:] = bg; zb = np.full((H, W), -1e9)
    Lv = np.array(light) / np.linalg.norm(light)
    for P, F, col in parts:
        Q = (P - c) @ R.T; X = Q[:, 0] * sc + W / 2; Y = -Q[:, 1] * sc + H / 2; Z = Q[:, 2]
        tri = F; x = X[tri]; y = Y[tri]; z = Z[tri]
        n = np.cross(Q[tri[:, 1]] - Q[tri[:, 0]], Q[tri[:, 2]] - Q[tri[:, 0]]); n /= np.linalg.norm(n, axis=1)[:, None] + 1e-12
        shade = np.abs(n @ (R @ Lv)) * 0.7 + 0.3
        fc = col[tri].mean(1) * shade[:, None]
        x0 = np.floor(x.min(1)).astype(int); x1 = np.ceil(x.max(1)).astype(int); y0 = np.floor(y.min(1)).astype(int); y1 = np.ceil(y.max(1)).astype(int)
        for t in np.argsort(z.mean(1)):
            a0, a1, b0, b1 = max(x0[t], 0), min(x1[t], W - 1), max(y0[t], 0), min(y1[t], H - 1)
            if a0 > a1 or b0 > b1: continue
            gx, gy = np.meshgrid(np.arange(a0, a1 + 1) + 0.5, np.arange(b0, b1 + 1) + 0.5)
            (xa, xb, xc), (ya, yb, yc) = x[t], y[t]
            d = (yb - yc) * (xa - xc) + (xc - xb) * (ya - yc)
            if abs(d) < 1e-9: continue
            l1 = ((yb - yc) * (gx - xc) + (xc - xb) * (gy - yc)) / d; l2 = ((yc - ya) * (gx - xc) + (xa - xc) * (gy - yc)) / d; l3 = 1 - l1 - l2
            m = (l1 >= -1e-3) & (l2 >= -1e-3) & (l3 >= -1e-3)
            if not m.any(): continue
            zz = l1 * z[t, 0] + l2 * z[t, 1] + l3 * z[t, 2]
            sub = zb[b0:b1 + 1, a0:a1 + 1]; upd = m & (zz > sub)
            sub[upd] = zz[upd]; img[b0:b1 + 1, a0:a1 + 1][upd] = fc[t]
    return (np.clip(img, 0, 1) * 255).astype(np.uint8), (R, c, sc)
def texcol(UV, tex):
    h, w = tex.shape[:2]
    return tex[np.clip((UV[:, 1] * h).astype(int), 0, h - 1), np.clip((UV[:, 0] * w).astype(int), 0, w - 1)] / 255.0
