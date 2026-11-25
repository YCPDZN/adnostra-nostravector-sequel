import json, struct, numpy as np
def load(path):
    d=open(path,'rb').read()
    jl=struct.unpack('<I',d[12:16])[0]; J=json.loads(d[20:20+jl]); B=d[20+jl+8:]
    def acc(i):
        a=J['accessors'][i]; bv=J['bufferViews'][a['bufferView']]
        n={'SCALAR':1,'VEC2':2,'VEC3':3,'VEC4':4}[a['type']]; dt={5126:'<f4',5123:'<u2',5125:'<u4'}[a['componentType']]
        isz=np.dtype(dt).itemsize*n; st=bv.get('byteStride',isz); off=bv.get('byteOffset',0)+a.get('byteOffset',0)
        if st==isz: arr=np.frombuffer(B,dtype=dt,count=a['count']*n,offset=off)
        else:
            raw=np.frombuffer(B,dtype=np.uint8,count=st*(a['count']-1)+isz,offset=off)
            arr=np.lib.stride_tricks.as_strided(raw,shape=(a['count'],isz),strides=(st,1)).copy().view(dt)
        return arr.reshape(-1,n) if n>1 else arr
    p=J['meshes'][0]['primitives'][0]
    return J,B,acc(p['attributes']['POSITION']).copy(),acc(p['attributes']['NORMAL']).copy(),acc(p['attributes']['TEXCOORD_0']).copy(),acc(p['indices']).astype(np.uint32).reshape(-1,3)
