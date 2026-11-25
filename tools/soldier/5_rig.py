import numpy as np, json, struct, io
from PIL import Image
S=1.94  # model units -> game metres (1.9 m tall)
M=np.load('himesh.npz'); P,N,UV,F=M['P'],M['N'],M['UV'],M['F']
L=np.load('lomesh.npz')
# ---------------------------------------------------------------- skeleton (model units, +X = character's left)
J={}  # name: (parent, pos)
def add(n,p,pos): J[n]=(p,np.array(pos,float))
add('hips',None,(0,0.48,0.015)); add('spine','hips',(0,0.58,0.015)); add('chest','spine',(0,0.69,0.005))
add('neck','chest',(0,0.80,0.0)); add('head','neck',(0,0.84,0.02))
for s,sd in ((1,'L'),(-1,'R')):
    add('clav'+sd,'chest',(0.04*s,0.77,0.0)); add('uarm'+sd,'clav'+sd,(0.155*s,0.755,-0.01))
    add('farm'+sd,'uarm'+sd,(0.183*s,0.595,0.0)); add('hand'+sd,'farm'+sd,(0.188*s,0.47,0.045))
    add('thigh'+sd,'hips',(0.072*s,0.455,0.02)); add('shin'+sd,'thigh'+sd,(0.095*s,0.265,0.005)); add('foot'+sd,'shin'+sd,(0.12*s,0.075,-0.01))
names=list(J.keys()); idx={n:i for i,n in enumerate(names)}
tail={'hips':(0,0.56,0.015),'spine':(0,0.68,0.01),'chest':(0,0.78,0.0),'neck':(0,0.84,0.02),'head':(0,0.98,0.02)}
for s,sd in ((1,'L'),(-1,'R')):
    tail.update({'clav'+sd:(0.155*s,0.755,-0.01),'uarm'+sd:(0.183*s,0.595,0.0),'farm'+sd:(0.188*s,0.47,0.045),'hand'+sd:(0.19*s,0.405,0.06),
                 'thigh'+sd:(0.095*s,0.265,0.005),'shin'+sd:(0.12*s,0.075,-0.01),'foot'+sd:(0.135*s,0.01,0.085)})
def seg_dist(p,a,b):
    ab=b-a; t=np.clip(((p-a)@ab)/(ab@ab),0,1); return np.linalg.norm(p-(a+t[:,None]*ab),axis=1)
def weights(P,adj=None):
    x,y=P[:,0],P[:,1]; ax=np.abs(x)
    armb=np.interp(y,[0.38,0.5,0.6,0.65,0.70,0.74],[0.135,0.14,0.12,0.108,0.128,0.128])
    isarm=(ax>armb)&(y<0.745)&(y>0.38)
    if adj is not None:
        # geodesic distance over the surface from arm / leg / torso seeds: a vertex is arm if it is reached from an arm first
        from scipy.sparse.csgraph import dijkstra
        A=adj.tocoo(); m=A.row!=A.col
        from scipy.sparse import coo_matrix as _c
        el=np.linalg.norm(P[A.row[m]]-P[A.col[m]],axis=1)+1e-6
        Gd=_c((el,(A.row[m],A.col[m])),shape=adj.shape).tocsr()
        def seeds(n): a_,b_=J[n][1],np.array(tail[n]); return np.nonzero(seg_dist(P,a_,b_)<0.045)[0]
        armS=np.concatenate([seeds(n) for n in ('farmL','farmR','handL','handR')])
        armS=armS[(np.abs(P[armS,0])>0.165)&(P[armS,1]<0.62)]
        bodyS=np.concatenate([seeds(n) for n in ('hips','spine','chest','thighL','thighR','shinL','shinR')])
        bodyS=bodyS[np.abs(P[bodyS,0])<0.10]
        da=dijkstra(Gd,indices=armS,min_only=True); db=dijkstra(Gd,indices=bodyS,min_only=True)
        geo_arm=(da<db)&(y<0.745)&(y>0.36)&(ax>0.10)
        print('arm verts',geo_arm.sum(),'of',len(P))
        wide=(ax>np.interp(y,[0.36,0.5,0.6,0.7],[0.155,0.15,0.135,0.135]))&(y>0.36)
        dae=np.min(np.stack([seg_dist(P,J[n][1],np.array(tail[n])) for n in names if n.startswith(('uarm','farm','hand'))],1),1)
        isarm=np.where(y<0.66,(geo_arm&(dae<0.058))|wide,False)
    band=(y>=0.66)&(y<0.745)&(ax>0.10)   # armpit: blend upper arm with chest/clavicle
    shoulder=(y>=0.745)&(ax>0.10)
    D=np.full((len(P),len(names)),np.inf)
    for n in names:
        a,b=J[n][1],np.array(tail[n]); d=seg_dist(P,a,b)
        sd=n[-1] if n[-1] in 'LR' and n not in ('head',) else None
        side=None if sd is None else (1 if sd=='L' else -1)
        ok=np.ones(len(P),bool)
        if side is not None: ok&=(np.sign(x)==side)|(ax<1e-4)
        if n.startswith(('uarm','farm','hand')): ok&=isarm|((shoulder|band)&n.startswith('uarm'))
        elif n.startswith(('thigh','shin','foot')): ok&=(y<0.47)&~isarm
        elif n.startswith('clav'): ok&=(y>0.64)&~isarm
        else: ok&=~isarm
        if n=='head': ok&=y>0.79
        if n=='neck': ok&=y>0.74
        D[ok,idx[n]]=d[ok]
    W=1/np.maximum(D,0.004)**4; W[~np.isfinite(D)]=0
    # vertices that ended with no eligible bone (rare) fall back to nearest bone
    bad=W.sum(1)==0
    if bad.any():
        Dall=np.stack([seg_dist(P[bad],J[n][1],np.array(tail[n])) for n in names],1); W[bad,Dall.argmin(1)]=1
    W/=W.sum(1,keepdims=True)
    if adj is not None:
        E=np.isfinite(D)|(W>0)
        for _ in range(3):
            W=0.5*W+0.5*np.asarray(adj@W)/np.maximum(np.asarray(adj.sum(1)),1)
            W*=E; W/=np.maximum(W.sum(1,keepdims=True),1e-12)
    # keep 4 strongest
    top=np.argsort(-W,1)[:,:4]; tw=np.take_along_axis(W,top,1); tw/=tw.sum(1,keepdims=True)
    return top.astype(np.uint8),tw.astype(np.float32)
from scipy.sparse import coo_matrix
def adjacency(P,F):
    # weld by position so seams share weights
    _,inv=np.unique(P.round(6),axis=0,return_inverse=True); inv=inv.ravel(); n=inv.max()+1
    e=np.concatenate([F[:,[0,1]],F[:,[1,2]],F[:,[2,0]]]); e=inv[e]; e=np.concatenate([e,e[:,::-1]])
    A=coo_matrix((np.ones(len(e)),(e[:,0],e[:,1])),shape=(n,n)).tocsr(); A.data[:]=1
    # operator on full vertex set: gather welded neighbourhood
    G=coo_matrix((np.ones(len(inv)),(np.arange(len(inv)),inv)),shape=(len(inv),n)).tocsr()
    return G@A@G.T
jt,wt=weights(P,adjacency(P,F))
np.savez('weights_dbg.npz',jt=jt,wt=wt)
# ---------------------------------------------------------------- GLB writer
buf=bytearray(); views=[]; accs=[]
def view(data,target=None):
    while len(buf)%4: buf.append(0)
    o=len(buf); buf.extend(data); v={'buffer':0,'byteOffset':o,'byteLength':len(data)}
    if target: v['target']=target
    views.append(v); return len(views)-1
def acc(arr,ctype,typ,target=34962,minmax=False,norm=False):
    arr=np.ascontiguousarray(arr); a={'bufferView':view(arr.tobytes(),target),'componentType':ctype,'count':len(arr),'type':typ}
    if minmax: a['min']=arr.min(0).tolist(); a['max']=arr.max(0).tolist()
    if norm: a['normalized']=True
    accs.append(a); return len(accs)-1
def img(path,q,mode='RGB'):
    b=io.BytesIO(); Image.open(path).convert(mode).save(b,'JPEG',quality=q,optimize=True); return view(b.getvalue())
Ps=(P*S).astype(np.float32); Ls=(L['P']*S).astype(np.float32)
# normal map: convert my +dv convention to glTF's (+Y up = -v)
nm=np.asarray(Image.open('bake_nrm.png')).copy(); nm[...,1]=255-nm[...,1]; Image.fromarray(nm).save('bake_nrm_gltf.png')
a_pos=acc(Ps,5126,'VEC3',minmax=True); a_nrm=acc(N.astype(np.float32),5126,'VEC3'); a_uv=acc(UV.astype(np.float32),5126,'VEC2')
a_j=acc(jt,5121,'VEC4'); a_w=acc(wt,5126,'VEC4'); a_i=acc(F.astype(np.uint16 if len(P)<65536 else np.uint32).ravel(),5123 if len(P)<65536 else 5125,'SCALAR',34963)
l_pos=acc(Ls,5126,'VEC3',minmax=True); l_nrm=acc(L['N'].astype(np.float32),5126,'VEC3'); l_col=acc((np.clip(L['C'],0,1)**2.2).astype(np.float32),5126,'VEC3')
l_i=acc(L['F'].astype(np.uint16).ravel(),5123,'SCALAR',34963)
ibm=np.zeros((len(names),4,4),np.float32)
for n in names: m=np.eye(4,dtype=np.float32); m[:3,3]=-J[n][1]*S; ibm[idx[n]]=m.T  # column-major
a_ibm=acc(ibm.reshape(-1,16),5126,'MAT4',target=None)
iv=[img('bake_base.png',88),img('bake_nrm_gltf.png',92),img('bake_mr.png',88),img('bake_emit.png',85,'L')]
nodes=[]
for n in names:
    p,pos=J[n]; local=pos-(J[p][1] if p else 0)
    nodes.append({'name':n,'translation':(local*S).tolist()})
for n in names:
    ch=[idx[c] for c in names if J[c][0]==n]
    if ch: nodes[idx[n]]['children']=ch
nb=len(nodes)
nodes.append({'name':'soldier','mesh':0,'skin':0})
nodes.append({'name':'soldier_lod','mesh':1})
nodes.append({'name':'SoldierRoot','children':[idx['hips'],nb,nb+1]})
gl={'asset':{'version':'2.0','generator':'ad-nostra soldier rig'},'scene':0,'scenes':[{'nodes':[nb+2]}],'nodes':nodes,
 'skins':[{'joints':list(range(nb)),'inverseBindMatrices':a_ibm,'skeleton':idx['hips']}],
 'meshes':[{'name':'soldier','primitives':[{'attributes':{'POSITION':a_pos,'NORMAL':a_nrm,'TEXCOORD_0':a_uv,'JOINTS_0':a_j,'WEIGHTS_0':a_w},'indices':a_i,'material':0}]},
           {'name':'soldier_lod','primitives':[{'attributes':{'POSITION':l_pos,'NORMAL':l_nrm,'COLOR_0':l_col},'indices':l_i,'material':1}]}],
 'materials':[{'name':'soldier','pbrMetallicRoughness':{'baseColorTexture':{'index':0},'metallicRoughnessTexture':{'index':2}},'normalTexture':{'index':1},'emissiveTexture':{'index':3},'emissiveFactor':[1,1,1]},
              {'name':'soldier_lod','pbrMetallicRoughness':{'metallicFactor':0.55,'roughnessFactor':0.5}}],
 'textures':[{'source':i,'sampler':0} for i in range(4)],'images':[{'bufferView':v,'mimeType':'image/jpeg'} for v in iv],
 'samplers':[{'magFilter':9729,'minFilter':9987,'wrapS':33071,'wrapT':33071}],
 'accessors':accs,'bufferViews':views,'buffers':[{'byteLength':len(buf)}]}
js=json.dumps(gl,separators=(',',':')).encode(); js+=b' '*((4-len(js)%4)%4)
while len(buf)%4: buf.append(0)
out=struct.pack('<III',0x46546C67,2,12+8+len(js)+8+len(buf))+struct.pack('<II',len(js),0x4E4F534A)+js+struct.pack('<II',len(buf),0x004E4942)+bytes(buf)
open('soldier.glb','wb').write(out); print('soldier.glb',len(out),'bytes; bones',len(names))
# embed for double-click play
import base64
open('soldier.js', 'w').write('// Ascendant soldier (player + other Ascendants): rigged, 16k triangles, baked textures. Embedded so the game runs from a double-click.\nwindow.SOLDIER_GLB_B64="' + base64.b64encode(out).decode() + '";\n')
print('wrote soldier.js: copy soldier.glb to assets/ascendant_soldier.glb and soldier.js to assets/soldier.js')
