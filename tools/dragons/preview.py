import numpy as np, sys, io, json, struct
from PIL import Image
def render(name, views, out, W=520, H=420):
    M = np.load(f'{name}/lo.npz'); P, N, UV, F = M['P'], M['N'], M['UV'], M['F']
    d = open(f'{name}/{name}.glb', 'rb').read(); jl = struct.unpack('<I', d[12:16])[0]; J = json.loads(d[20:20+jl]); B = d[20+jl+8:]
    bv = J['bufferViews'][J['images'][J['textures'][J['materials'][0]['pbrMetallicRoughness']['baseColorTexture']['index']]['source']]['bufferView']]
    tex = np.asarray(Image.open(io.BytesIO(B[bv['byteOffset']:bv['byteOffset']+bv['byteLength']])).convert('RGB')).astype(np.float32)/255
    th, tw = tex.shape[:2]
    col = tex[np.clip((UV[:,1]*th).astype(int),0,th-1), np.clip((UV[:,0]*tw).astype(int),0,tw-1)]
    tiles = []
    c = (P.max(0)+P.min(0))/2
    for (yaw, pitch, label) in views:
        cy, sy, cp, sp = np.cos(yaw), np.sin(yaw), np.cos(pitch), np.sin(pitch)
        R1 = np.array([[cy,0,-sy],[0,1,0],[sy,0,cy]]); R2 = np.array([[1,0,0],[0,cp,-sp],[0,sp,cp]])
        Q = (P-c) @ R1.T @ R2.T; Nn = N @ R1.T @ R2.T
        s = min(W, H)*0.9/ (np.ptp(Q[:,:2],axis=0).max())
        X = Q[:,0]*s + W/2; Y = -Q[:,1]*s + H/2; Z = Q[:,2]
        light = np.clip(Nn @ np.array([0.3,0.6,0.75])/1.0, 0, 1)*0.75+0.3
        vc = np.clip(col*light[:,None],0,1)
        img = np.ones((H,W,3),np.float32)*0.85; zb = np.full((H,W),-1e9,np.float32)
        tri = F; x0=X[tri]; y0=Y[tri]; z0=Z[tri]
        # rasterise each triangle via its centroid splat (dense mesh: fine at this size)
        for k in range(3):
            pass
        cx=(x0.mean(1)).astype(int); cyy=(y0.mean(1)).astype(int); cz=z0.mean(1); cc=vc[tri].mean(1)
        o=np.argsort(cz)
        for dx in (-1,0,1):
            for dy in (-1,0,1):
                xx=np.clip(cx[o]+dx,0,W-1); yy=np.clip(cyy[o]+dy,0,H-1)
                img[yy,xx]=cc[o]
        tiles.append((img*255).astype(np.uint8))
    im = np.concatenate(tiles, 1); Image.fromarray(im).save(out)
v = [(0,0,'front +z'),(np.pi/2,0,'side'),(np.pi,0,'back'),(0,-np.pi/2+0.01,'top')]
render(sys.argv[1], v, sys.argv[2])
