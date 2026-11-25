import json, struct, numpy as np, sys
from load import load
J,B,P,N,UV,F0=load('/mnt/user-data/uploads/orion_mascar.glb')
d=open('out.bin','rb').read(); n=struct.unpack('<i',d[:4])[0]; F=np.frombuffer(d[4:],dtype=np.int32).reshape(n,3)
used,inv=np.unique(F,return_inverse=True); F=inv.reshape(-1,3).astype(np.uint32)
P,N,UV=P[used].astype('<f4'),N[used].astype('<f4'),UV[used].astype('<f4')
print('verts',len(P),'tris',len(F))
bin_=bytearray(); views=[]
def add(b, target=None):
    while len(bin_)%4: bin_.append(0)
    v={'buffer':0,'byteOffset':len(bin_),'byteLength':len(b)}
    if target: v['target']=target
    bin_.extend(b); views.append(v); return len(views)-1
acc=[]
def A(arr,typ,ct,target,minmax=False):
    vi=add(arr.tobytes(),target); a={'bufferView':vi,'componentType':ct,'count':len(arr),'type':typ}
    if minmax: a['min']=arr.min(0).tolist(); a['max']=arr.max(0).tolist()
    acc.append(a); return len(acc)-1
ip=A(P,'VEC3',5126,34962,True); inn=A(N,'VEC3',5126,34962); iu=A(UV,'VEC2',5126,34962); ii=A(F.ravel(),'SCALAR',5125,34963)
imgs=[]
for im in J['images']:
    bv=J['bufferViews'][im['bufferView']]; vi=add(B[bv.get('byteOffset',0):bv.get('byteOffset',0)+bv['byteLength']])
    imgs.append({'bufferView':vi,'mimeType':im['mimeType']})
out={'asset':{'version':'2.0','generator':'ad-nostra orion pipeline'},'scene':0,'scenes':[{'nodes':[0]}],
     'nodes':[{'mesh':0,'name':'orion_mascar'}],
     'meshes':[{'primitives':[{'attributes':{'POSITION':ip,'NORMAL':inn,'TEXCOORD_0':iu},'indices':ii,'material':0}]}],
     'materials':J['materials'],'textures':J['textures'],'images':imgs,'accessors':acc,'bufferViews':views,'buffers':[{'byteLength':len(bin_)}]}
if 'samplers' in J: out['samplers']=J['samplers']
js=json.dumps(out,separators=(',',':')).encode(); js+=b' '*((4-len(js)%4)%4)
while len(bin_)%4: bin_.append(0)
tot=12+8+len(js)+8+len(bin_)
with open('orion_mascar.glb','wb') as f:
    f.write(struct.pack('<III',0x46546C67,2,tot)); f.write(struct.pack('<II',len(js),0x4E4F534A)); f.write(js); f.write(struct.pack('<II',len(bin_),0x004E4942)); f.write(bin_)
print('glb bytes',tot)
