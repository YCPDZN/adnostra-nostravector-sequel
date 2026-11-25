# Read the source GLB (Tripo export: one mesh, three textures), weld positions for simplification.
# usage: python3 1_extract.py source.glb
import json, struct, io, sys, numpy as np
from PIL import Image
d = open(sys.argv[1], 'rb').read()
cl, = struct.unpack('<I', d[12:16]); j = json.loads(d[20:20 + cl]); b0 = 20 + cl + 8
def acc(i, dt, n):
    a = j['accessors'][i]; bv = j['bufferViews'][a['bufferView']]
    arr = np.frombuffer(d, dtype=dt, count=a['count'] * n, offset=b0 + bv.get('byteOffset', 0) + a.get('byteOffset', 0))
    return arr.reshape(-1, n) if n > 1 else arr
pr = j['meshes'][0]['primitives'][0]; at = pr['attributes']
P = acc(at['POSITION'], np.float32, 3); N = acc(at['NORMAL'], np.float32, 3); UV = acc(at['TEXCOORD_0'], np.float32, 2)
I = acc(pr['indices'], np.uint32, 1).reshape(-1, 3)
np.savez('high.npz', P=P, N=N, UV=UV, I=I)
mat = j['materials'][0]; tex = lambda t: j['textures'][t['index']]['source']
for name, src in (('base', tex(mat['pbrMetallicRoughness']['baseColorTexture'])), ('mr', tex(mat['pbrMetallicRoughness']['metallicRoughnessTexture']))):
    bv = j['bufferViews'][j['images'][src]['bufferView']]; o = b0 + bv.get('byteOffset', 0)
    Image.open(io.BytesIO(d[o:o + bv['byteLength']])).convert('RGB').save(f'src_{name}.png')
u, inv = np.unique(P, axis=0, return_inverse=True); inv = inv.ravel(); Iw = inv[I]
Iw = Iw[(Iw[:, 0] != Iw[:, 1]) & (Iw[:, 1] != Iw[:, 2]) & (Iw[:, 0] != Iw[:, 2])]
u.astype(np.float32).tofile('wpos.bin'); Iw.astype(np.uint32).tofile('widx.bin')
print('verts', len(P), 'welded', len(u), 'tris', len(Iw))
