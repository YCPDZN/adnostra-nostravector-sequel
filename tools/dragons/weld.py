import sys, struct, numpy as np
sys.path.insert(0, sys.argv[3])
from load import load
J,B,P,N,UV,F=load(sys.argv[1])
u,wpos=np.unique(P.astype(np.float64).round(7),axis=0,return_inverse=True); wpos=wpos.ravel().astype(np.int32)
print(sys.argv[1],'pos',len(u),'wedges',len(P),'tris',len(F))
with open(sys.argv[2],'wb') as f:
    f.write(struct.pack('<iii',len(u),len(P),len(F))); f.write(u.astype('<f8').tobytes()); f.write(wpos.tobytes()); f.write(F.astype('<i4').tobytes())
