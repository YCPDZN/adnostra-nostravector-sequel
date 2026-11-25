import numpy as np, xatlas, time
from PIL import Image
from scipy.spatial import cKDTree
from scipy import ndimage
H=np.load('high.npz'); hP=H['P'].astype(np.float64); hN=H['N'].astype(np.float64); hUV=H['UV'].astype(np.float64); hI=H['I'].astype(np.int64)
wpos=np.fromfile('wpos.bin',dtype=np.float32).reshape(-1,3).astype(np.float64)
tex={k:np.asarray(Image.open(f'src_{k}.png').convert('RGB'),dtype=np.float32)/255 for k in ('base','mr')}
TS=1024

def compact(idx):
    used,inv=np.unique(idx,return_inverse=True); return wpos[used],inv.reshape(-1,3)
def vnormals(P,F):
    fn=np.cross(P[F[:,1]]-P[F[:,0]],P[F[:,2]]-P[F[:,0]])
    n=np.zeros_like(P)
    for k in range(3): np.add.at(n,F[:,k],fn)
    return n/np.maximum(np.linalg.norm(n,axis=1,keepdims=True),1e-12)

# --- high-poly closest-point query
hA,hB,hC=hP[hI[:,0]],hP[hI[:,1]],hP[hI[:,2]]
tree=cKDTree((hA+hB+hC)/3)
def closest_on_tris(p,a,b,c):
    # Ericson, vectorised; returns barycentrics (u,v,w) for a,b,c
    ab=b-a; ac=c-a; ap=p-a
    d1=(ab*ap).sum(-1); d2=(ac*ap).sum(-1)
    bp=p-b; d3=(ab*bp).sum(-1); d4=(ac*bp).sum(-1)
    cp=p-c; d5=(ab*cp).sum(-1); d6=(ac*cp).sum(-1)
    va=d3*d6-d5*d4; vb=d5*d2-d1*d6; vc=d1*d4-d3*d2
    den=np.where(np.abs(va+vb+vc)<1e-20,1e-20,va+vb+vc)
    v=vb/den; w=vc/den; u=1-v-w
    bary=np.stack([u,v,w],-1)
    def setm(m,val):
        nonlocal bary; bary=np.where(m[...,None],val,bary)
    # region tests (order matters: later overrides earlier only where unresolved -> apply in reverse priority)
    with np.errstate(divide='ignore',invalid='ignore'):
        m=(va<=0)&((d4-d3)>=0)&((d5-d6)>=0); t=np.clip((d4-d3)/((d4-d3)+(d5-d6)),0,1); setm(m,np.stack([0*t,1-t,t],-1))
        m=(vb<=0)&(d2>=0)&(d6<=0); t=np.clip(d2/(d2-d6),0,1); setm(m,np.stack([1-t,0*t,t],-1))
        m=(vc<=0)&(d1>=0)&(d3<=0); t=np.clip(d1/(d1-d3),0,1); setm(m,np.stack([1-t,t,0*t],-1))
        z=np.zeros_like(d1); o=np.ones_like(d1)
        setm((d6>=0)&(d5<=d6),np.stack([z,z,o],-1))
        setm((d3>=0)&(d4<=d3),np.stack([z,o,z],-1))
        setm((d1<=0)&(d2<=0),np.stack([o,z,z],-1))
    return bary
def query(p,k=10,chunk=200000):
    tri=np.empty(len(p),np.int64); bar=np.empty((len(p),3))
    for s in range(0,len(p),chunk):
        q=p[s:s+chunk]; _,cand=tree.query(q,k=k)
        a,b,c=hA[cand],hB[cand],hC[cand]; qq=np.repeat(q[:,None],k,1)
        br=closest_on_tris(qq,a,b,c)
        cpt=br[...,0:1]*a+br[...,1:2]*b+br[...,2:3]*c
        dd=((cpt-qq)**2).sum(-1); best=dd.argmin(1); r=np.arange(len(q))
        tri[s:s+chunk]=cand[r,best]; bar[s:s+chunk]=br[r,best]
    return tri,bar
def sample(img,uv):
    h,w,_=img.shape; x=uv[:,0]*w-0.5; y=uv[:,1]*h-0.5
    x0=np.floor(x).astype(int); y0=np.floor(y).astype(int); fx=(x-x0)[:,None]; fy=(y-y0)[:,None]
    g=lambda yy,xx: img[np.mod(yy,h),np.mod(xx,w)]
    return (g(y0,x0)*(1-fx)+g(y0,x0+1)*fx)*(1-fy)+(g(y0+1,x0)*(1-fx)+g(y0+1,x0+1)*fx)*fy
def high_attr(p):
    tri,bar=query(p); f=hI[tri]
    uv=(hUV[f]*bar[...,None]).sum(1)
    n=(hN[f]*bar[...,None]).sum(1); n/=np.maximum(np.linalg.norm(n,axis=1,keepdims=True),1e-12)
    return uv,n

t0=time.time()
# ---------------- HI: unwrap + bake
hiP,hiF=compact(np.fromfile('hi_idx.bin',dtype=np.uint32).reshape(-1,3))
atlas=xatlas.Atlas(); atlas.add_mesh(hiP.astype(np.float32),hiF.astype(np.uint32))
po=xatlas.PackOptions(); po.resolution=TS; po.padding=4; po.bilinear=True; po.bruteForce=False
co=xatlas.ChartOptions(); co.max_iterations=2
atlas.generate(co,po)
vmap,F,UV=atlas[0]
P=hiP[vmap]; N=vnormals(hiP,hiF)[vmap]  # smooth normals from welded mesh, shared across seams
print('unwrapped',len(P),'verts',len(F),'tris',time.time()-t0)
# rasterise in UV space
pix=UV*TS-0.5
tri_of=-np.ones((TS,TS),np.int64); bc=np.zeros((TS,TS,3))
for fi,(a,b,c) in enumerate(F):
    A,B,C=pix[a],pix[b],pix[c]
    x0=int(np.floor(min(A[0],B[0],C[0])))-1; x1=int(np.ceil(max(A[0],B[0],C[0])))+1
    y0=int(np.floor(min(A[1],B[1],C[1])))-1; y1=int(np.ceil(max(A[1],B[1],C[1])))+1
    x0=max(x0,0); y0=max(y0,0); x1=min(x1,TS-1); y1=min(y1,TS-1)
    xs,ys=np.meshgrid(np.arange(x0,x1+1),np.arange(y0,y1+1)); q=np.stack([xs.ravel(),ys.ravel()],1).astype(float)
    v0=B-A; v1=C-A; v2=q-A; den=v0[0]*v1[1]-v1[0]*v0[1]
    if abs(den)<1e-12: continue
    v=(v2[:,0]*v1[1]-v1[0]*v2[:,1])/den; w=(v0[0]*v2[:,1]-v2[:,0]*v0[1])/den; u=1-v-w
    m=(u>=-0.02)&(v>=-0.02)&(w>=-0.02)
    yy=ys.ravel()[m]; xx=xs.ravel()[m]
    free=tri_of[yy,xx]<0
    tri_of[yy[free],xx[free]]=fi; bc[yy[free],xx[free]]=np.stack([u[m][free],v[m][free],w[m][free]],1)
mask=tri_of>=0; ys,xs=np.nonzero(mask); ft=F[tri_of[ys,xs]]; b=bc[ys,xs]
print('texels',mask.sum(),time.time()-t0)
p3=(P[ft]*b[...,None]).sum(1)
n3=(N[ft]*b[...,None]).sum(1); n3/=np.linalg.norm(n3,axis=1,keepdims=True)
huv,hn=high_attr(p3)
print('queried',time.time()-t0)
out={}
for k in ('base','mr'): out[k]=sample(tex[k],huv)
# tangent frame of the low triangle: gradients of u and v (matches three.js derivative-based frame)
def grads(Pt,UVt):
    e1=Pt[:,1]-Pt[:,0]; e2=Pt[:,2]-Pt[:,0]; fn=np.cross(e1,e2); fn/=np.maximum(np.linalg.norm(fn,axis=1,keepdims=True),1e-20)
    du1=UVt[:,1,0]-UVt[:,0,0]; du2=UVt[:,2,0]-UVt[:,0,0]; dv1=UVt[:,1,1]-UVt[:,0,1]; dv2=UVt[:,2,1]-UVt[:,0,1]
    # solve gradient g of scalar s on plane: g.e1 = ds1, g.e2 = ds2, g.fn=0
    M=np.stack([e1,e2,fn],1)
    Minv=np.linalg.inv(M+np.eye(3)*1e-12)
    gu=np.einsum('nij,nj->ni',Minv,np.stack([du1,du2,0*du1],1)); gv=np.einsum('nij,nj->ni',Minv,np.stack([dv1,dv2,0*dv1],1))
    return gu,gv
gu,gv=grads(P[F],UV[F])
T=gu[tri_of[ys,xs]]; Bt=gv[tri_of[ys,xs]]
# project onto the plane of the interpolated normal (as the shader does) and normalise by the larger length
T=T-n3*(T*n3).sum(1,keepdims=True); Bt=Bt-n3*(Bt*n3).sum(1,keepdims=True)
sc=1/np.sqrt(np.maximum((T*T).sum(1),(Bt*Bt).sum(1)))[:,None]; T*=sc; Bt*=sc
M=np.stack([T,Bt,n3],2)  # columns
mn=np.linalg.solve(M,hn[...,None])[...,0]
mn[:,2]=np.maximum(mn[:,2],0.05); mn/=np.linalg.norm(mn,axis=1,keepdims=True)
out['nrm']=mn*0.5+0.5
dist,(iy,ix)=ndimage.distance_transform_edt(~mask,return_indices=True)
for k,v in out.items():
    img=np.zeros((TS,TS,3),np.float32); img[ys,xs]=v
    img=img[iy,ix]  # dilate into gutters
    Image.fromarray((np.clip(img,0,1)*255+0.5).astype(np.uint8)).save(f'bake_{k}.png')
np.savez('himesh.npz',P=P,N=N,UV=UV,F=F)
print('hi done',time.time()-t0)
# ---------------- LO: vertex colours
loP,loF=compact(np.fromfile('lo_idx.bin',dtype=np.uint32).reshape(-1,3))
loN=vnormals(loP,loF)
# average colour over a small neighbourhood of surface samples around each vertex
cols=np.zeros((len(loP),3))
for off in [(0,0,0),(.006,0,0),(-.006,0,0),(0,.006,0),(0,-.006,0),(0,0,.006),(0,0,-.006)]:
    uv,_=high_attr(loP+np.array(off)); cols+=sample(tex['base'],uv)
cols/=7
np.savez('lomesh.npz',P=loP,N=loN,F=loF,C=cols)
print('lo done',time.time()-t0)
