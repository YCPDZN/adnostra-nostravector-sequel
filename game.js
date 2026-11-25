(()=>{var Dh="170";var Um=0,gd=1,Om=2;var kf=1,Nh=2,Ti=3,ci=0,hn=1,sn=2,li=0,yr=1,_n=2,xd=3,yd=4,Fm=5,Ns=100,Bm=101,km=102,Hm=103,zm=104,Vm=200,Gm=201,Wm=202,Xm=203,_c=204,vc=205,qm=206,Ym=207,$m=208,Zm=209,Km=210,jm=211,Jm=212,Qm=213,e0=214,Mc=0,bc=1,Tc=2,br=3,Ec=4,Sc=5,wc=6,Ac=7,Uh=0,t0=1,n0=2,Qi=0,Oh=1,Fh=2,Bh=3,Io=4,i0=5,kh=6,Hh=7,_d="attached",s0="detached",Hf=300,Tr=301,Er=302,Rc=303,Cc=304,ol=306,Ai=1e3,Rn=1001,xo=1002,yn=1003,zh=1004;var gr=1005;var Cn=1006,fo=1007;var ai=1008;var Ri=1009,zf=1010,Vf=1011,yo=1012,Vh=1013,es=1014,Fn=1015,kn=1016,Gh=1017,Wh=1018,Sr=1020,Gf=35902,Wf=1021,Xf=1022,In=1023,qf=1024,Yf=1025,_r=1026,wr=1027,Xh=1028,al=1029,$f=1030,qh=1031;var Yh=1033,Ia=33776,Pa=33777,La=33778,Da=33779,Ic=35840,Pc=35841,Lc=35842,Dc=35843,Nc=36196,Uc=37492,Oc=37496,Fc=37808,Bc=37809,kc=37810,Hc=37811,zc=37812,Vc=37813,Gc=37814,Wc=37815,Xc=37816,qc=37817,Yc=37818,$c=37819,Zc=37820,Kc=37821,Na=36492,jc=36494,Jc=36495,Zf=36283,Qc=36284,eh=36285,th=36286;var Ar=2300,Rr=2301,Bl=2302,vd=2400,Md=2401,bd=2402,r0=2500;var Kf=0,ll=1,Po=2,o0=3200,a0=3201;var $h=0,l0=1,ji="",Wt="srgb",Mn="srgb-linear",cl="linear",bt="srgb";var tr=7680;var Td=519,c0=512,h0=513,u0=514,jf=515,d0=516,f0=517,p0=518,m0=519,nh=35044;var Ed="300 es",Si=2e3,Ua=2001,ts=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sd=1234567,po=Math.PI/180,Cr=180/Math.PI;function ei(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]).toLowerCase()}function xn(n,e,t){return Math.max(e,Math.min(t,n))}function Zh(n,e){return(n%e+e)%e}function g0(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function x0(n,e,t){return n!==e?(t-n)/(e-n):0}function mo(n,e,t){return(1-t)*n+t*e}function y0(n,e,t,i){return mo(n,e,1-Math.exp(-t*i))}function _0(n,e=1){return e-Math.abs(Zh(n,e*2)-e)}function v0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function M0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function b0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function T0(n,e){return n+Math.random()*(e-n)}function E0(n){return n*(.5-Math.random())}function S0(n){n!==void 0&&(Sd=n);let e=Sd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function w0(n){return n*po}function A0(n){return n*Cr}function R0(n){return(n&n-1)===0&&n!==0}function C0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function I0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function P0(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),d=o((e-i)/2),f=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*u,l*d,a*c);break;case"YZY":n.set(l*d,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*d,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*f,a*c);break;case"YXY":n.set(l*f,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Qn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function wt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Jf={DEG2RAD:po,RAD2DEG:Cr,generateUUID:ei,clamp:xn,euclideanModulo:Zh,mapLinear:g0,inverseLerp:x0,lerp:mo,damp:y0,pingpong:_0,smoothstep:v0,smootherstep:M0,randInt:b0,randFloat:T0,randFloatSpread:E0,seededRandom:S0,degToRad:w0,radToDeg:A0,isPowerOfTwo:R0,ceilPowerOfTwo:C0,floorPowerOfTwo:I0,setQuaternionFromProperEuler:P0,normalize:wt,denormalize:Qn},Ve=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(xn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},tt=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],x=s[0],m=s[3],p=s[6],_=s[1],b=s[4],y=s[7],L=s[2],w=s[5],R=s[8];return r[0]=o*x+a*_+l*L,r[3]=o*m+a*b+l*w,r[6]=o*p+a*y+l*R,r[1]=c*x+h*_+u*L,r[4]=c*m+h*b+u*w,r[7]=c*p+h*y+u*R,r[2]=d*x+f*_+g*L,r[5]=d*m+f*b+g*w,r[8]=d*p+f*y+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=t*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*c-h*i)*x,e[2]=(a*i-s*o)*x,e[3]=d*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(kl.makeScale(e,t)),this}rotate(e){return this.premultiply(kl.makeRotation(-e)),this}translate(e,t){return this.premultiply(kl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},kl=new tt;function Qf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function _o(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function L0(){let n=_o("canvas");return n.style.display="block",n}var wd={};function ho(n){n in wd||(wd[n]=!0,console.warn(n))}function D0(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function N0(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function U0(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var st={enabled:!0,workingColorSpace:Mn,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===bt&&(n.r=wi(n.r),n.g=wi(n.g),n.b=wi(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===bt&&(n.r=vr(n.r),n.g=vr(n.g),n.b=vr(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ji?cl:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function wi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function vr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ad=[.64,.33,.3,.6,.15,.06],Rd=[.2126,.7152,.0722],Cd=[.3127,.329],Id=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pd=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);st.define({[Mn]:{primaries:Ad,whitePoint:Cd,transfer:cl,toXYZ:Id,fromXYZ:Pd,luminanceCoefficients:Rd,workingColorSpaceConfig:{unpackColorSpace:Wt},outputColorSpaceConfig:{drawingBufferColorSpace:Wt}},[Wt]:{primaries:Ad,whitePoint:Cd,transfer:bt,toXYZ:Id,fromXYZ:Pd,luminanceCoefficients:Rd,outputColorSpaceConfig:{drawingBufferColorSpace:Wt}}});var nr,ih=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{nr===void 0&&(nr=_o("canvas")),nr.width=e.width,nr.height=e.height;let i=nr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=nr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=_o("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=wi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(wi(t[i]/255)*255):t[i]=wi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},O0=0,Oa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=ei(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Hl(s[o].image)):r.push(Hl(s[o]))}else r=Hl(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Hl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ih.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var F0=0,on=class n extends ts{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Rn,s=Rn,r=Cn,o=ai,a=In,l=Ri,c=n.DEFAULT_ANISOTROPY,h=ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=ei(),this.name="",this.source=new Oa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ai:e.x=e.x-Math.floor(e.x);break;case Rn:e.x=e.x<0?0:1;break;case xo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ai:e.y=e.y-Math.floor(e.y);break;case Rn:e.y=e.y<0?0:1;break;case xo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=Hf;on.DEFAULT_ANISOTROPY=1;var gt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,y=(f+1)/2,L=(p+1)/2,w=(h+d)/4,R=(u+x)/4,P=(g+m)/4;return b>y&&b>L?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=w/i,r=R/i):y>L?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=w/s,r=P/s):L<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),i=R/r,s=P/r),this.set(i,s,r,t),this}let _=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-x)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},sh=class extends ts{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);let s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new on(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Oa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},un=class extends sh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Fa=class extends on{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var rh=class extends on{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Sn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(u!==x||l!==d||c!==f||h!==g){let m=1-a,p=l*d+c*f+h*g+u*x,_=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){let L=Math.sqrt(b),w=Math.atan2(L,p*_);m=Math.sin(m*w)/L,a=Math.sin(a*w)/L}let y=a*_;if(l=l*m+d*y,c=c*m+f*y,h=h*m+g*y,u=u*m+x*y,m===1-a){let L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-a*f,e[t+2]=c*g+h*f+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ld.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ld.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return zl.copy(this).projectOnVector(e),this.sub(zl)}reflect(e){return this.sub(zl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(xn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},zl=new U,Ld=new Sn,rn=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Kn):Kn.fromBufferAttribute(r,o),Kn.applyMatrix4(e.matrixWorld),this.expandByPoint(Kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ta.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ta.copy(i.boundingBox)),ta.applyMatrix4(e.matrixWorld),this.union(ta)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(to),na.subVectors(this.max,to),ir.subVectors(e.a,to),sr.subVectors(e.b,to),rr.subVectors(e.c,to),Xi.subVectors(sr,ir),qi.subVectors(rr,sr),Ss.subVectors(ir,rr);let t=[0,-Xi.z,Xi.y,0,-qi.z,qi.y,0,-Ss.z,Ss.y,Xi.z,0,-Xi.x,qi.z,0,-qi.x,Ss.z,0,-Ss.x,-Xi.y,Xi.x,0,-qi.y,qi.x,0,-Ss.y,Ss.x,0];return!Vl(t,ir,sr,rr,na)||(t=[1,0,0,0,1,0,0,0,1],!Vl(t,ir,sr,rr,na))?!1:(ia.crossVectors(Xi,qi),t=[ia.x,ia.y,ia.z],Vl(t,ir,sr,rr,na))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},xi=[new U,new U,new U,new U,new U,new U,new U,new U],Kn=new U,ta=new rn,ir=new U,sr=new U,rr=new U,Xi=new U,qi=new U,Ss=new U,to=new U,na=new U,ia=new U,ws=new U;function Vl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ws.fromArray(n,r);let a=s.x*Math.abs(ws.x)+s.y*Math.abs(ws.y)+s.z*Math.abs(ws.z),l=e.dot(ws),c=t.dot(ws),h=i.dot(ws);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var B0=new rn,no=new U,Gl=new U,jt=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):B0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;no.subVectors(e,this.center);let t=no.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(no,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(no.copy(e.center).add(Gl)),this.expandByPoint(no.copy(e.center).sub(Gl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},yi=new U,Wl=new U,sa=new U,Yi=new U,Xl=new U,ra=new U,ql=new U,Bs=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,t),yi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Wl.copy(e).add(t).multiplyScalar(.5),sa.copy(t).sub(e).normalize(),Yi.copy(this.origin).sub(Wl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(sa),a=Yi.dot(this.direction),l=-Yi.dot(sa),c=Yi.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Wl).addScaledVector(sa,d),f}intersectSphere(e,t){yi.subVectors(e.center,this.origin);let i=yi.dot(this.direction),s=yi.dot(yi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,t,i,s,r){Xl.subVectors(t,e),ra.subVectors(i,e),ql.crossVectors(Xl,ra);let o=this.direction.dot(ql),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yi.subVectors(this.origin,e);let l=a*this.direction.dot(ra.crossVectors(Yi,ra));if(l<0)return null;let c=a*this.direction.dot(Xl.cross(Yi));if(c<0||l+c>o)return null;let h=-a*Yi.dot(ql);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},$e=class n{constructor(e,t,i,s,r,o,a,l,c,h,u,d,f,g,x,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,d,f,g,x,m)}set(e,t,i,s,r,o,a,l,c,h,u,d,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/or.setFromMatrixColumn(e,0).length(),r=1/or.setFromMatrixColumn(e,1).length(),o=1/or.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,g=c*h,x=c*u;t[0]=d+x*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,g=c*h,x=c*u;t[0]=d-x*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,f=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=x-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-x*u}else if(e.order==="XZY"){let d=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(k0,e,H0)}lookAt(e,t,i){let s=this.elements;return Un.subVectors(e,t),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),$i.crossVectors(i,Un),$i.lengthSq()===0&&(Math.abs(i.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),$i.crossVectors(i,Un)),$i.normalize(),oa.crossVectors(Un,$i),s[0]=$i.x,s[4]=oa.x,s[8]=Un.x,s[1]=$i.y,s[5]=oa.y,s[9]=Un.y,s[2]=$i.z,s[6]=oa.z,s[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],x=i[6],m=i[10],p=i[14],_=i[3],b=i[7],y=i[11],L=i[15],w=s[0],R=s[4],P=s[8],T=s[12],v=s[1],D=s[5],X=s[9],W=s[13],V=s[2],K=s[6],q=s[10],ie=s[14],Z=s[3],me=s[7],ye=s[11],Ie=s[15];return r[0]=o*w+a*v+l*V+c*Z,r[4]=o*R+a*D+l*K+c*me,r[8]=o*P+a*X+l*q+c*ye,r[12]=o*T+a*W+l*ie+c*Ie,r[1]=h*w+u*v+d*V+f*Z,r[5]=h*R+u*D+d*K+f*me,r[9]=h*P+u*X+d*q+f*ye,r[13]=h*T+u*W+d*ie+f*Ie,r[2]=g*w+x*v+m*V+p*Z,r[6]=g*R+x*D+m*K+p*me,r[10]=g*P+x*X+m*q+p*ye,r[14]=g*T+x*W+m*ie+p*Ie,r[3]=_*w+b*v+y*V+L*Z,r[7]=_*R+b*D+y*K+L*me,r[11]=_*P+b*X+y*q+L*ye,r[15]=_*T+b*W+y*ie+L*Ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*l*u-s*c*u-r*a*d+i*c*d+s*a*f-i*l*f)+x*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+m*(+t*c*u-t*a*f-r*o*u+i*o*f+r*a*h-i*c*h)+p*(-s*a*h-t*l*u+t*a*d+s*o*u-i*o*d+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],_=u*m*c-x*d*c+x*l*f-a*m*f-u*l*p+a*d*p,b=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,y=h*x*c-g*u*c+g*a*f-o*x*f-h*a*p+o*u*p,L=g*u*l-h*x*l-g*a*d+o*x*d+h*a*m-o*u*m,w=t*_+i*b+s*y+r*L;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/w;return e[0]=_*R,e[1]=(x*d*r-u*m*r-x*s*f+i*m*f+u*s*p-i*d*p)*R,e[2]=(a*m*r-x*l*r+x*s*c-i*m*c-a*s*p+i*l*p)*R,e[3]=(u*l*r-a*d*r-u*s*c+i*d*c+a*s*f-i*l*f)*R,e[4]=b*R,e[5]=(h*m*r-g*d*r+g*s*f-t*m*f-h*s*p+t*d*p)*R,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*R,e[7]=(o*d*r-h*l*r+h*s*c-t*d*c-o*s*f+t*l*f)*R,e[8]=y*R,e[9]=(g*u*r-h*x*r-g*i*f+t*x*f+h*i*p-t*u*p)*R,e[10]=(o*x*r-g*a*r+g*i*c-t*x*c-o*i*p+t*a*p)*R,e[11]=(h*a*r-o*u*r-h*i*c+t*u*c+o*i*f-t*a*f)*R,e[12]=L*R,e[13]=(h*x*s-g*u*s+g*i*d-t*x*d-h*i*m+t*u*m)*R,e[14]=(g*a*s-o*x*s-g*i*l+t*x*l+o*i*m-t*a*m)*R,e[15]=(o*u*s-h*a*s+h*i*l-t*u*l-o*i*d+t*a*d)*R,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,x=o*h,m=o*u,p=a*u,_=l*c,b=l*h,y=l*u,L=i.x,w=i.y,R=i.z;return s[0]=(1-(x+p))*L,s[1]=(f+y)*L,s[2]=(g-b)*L,s[3]=0,s[4]=(f-y)*w,s[5]=(1-(d+p))*w,s[6]=(m+_)*w,s[7]=0,s[8]=(g+b)*R,s[9]=(m-_)*R,s[10]=(1-(d+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=or.set(s[0],s[1],s[2]).length(),o=or.set(s[4],s[5],s[6]).length(),a=or.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],jn.copy(this);let c=1/r,h=1/o,u=1/a;return jn.elements[0]*=c,jn.elements[1]*=c,jn.elements[2]*=c,jn.elements[4]*=h,jn.elements[5]*=h,jn.elements[6]*=h,jn.elements[8]*=u,jn.elements[9]*=u,jn.elements[10]*=u,t.setFromRotationMatrix(jn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Si){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),f,g;if(a===Si)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ua)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Si){let l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(o-r),d=(t+e)*c,f=(i+s)*h,g,x;if(a===Si)g=(o+r)*u,x=-2*u;else if(a===Ua)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},or=new U,jn=new $e,k0=new U(0,0,0),H0=new U(1,1,1),$i=new U,oa=new U,Un=new U,Dd=new $e,Nd=new Sn,Pn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(xn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(xn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-xn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(xn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-xn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Dd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nd.setFromEuler(this),this.setFromQuaternion(Nd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pn.DEFAULT_ORDER="XYZ";var vo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},z0=0,Ud=new U,ar=new Sn,_i=new $e,aa=new U,io=new U,V0=new U,G0=new Sn,Od=new U(1,0,0),Fd=new U(0,1,0),Bd=new U(0,0,1),kd={type:"added"},W0={type:"removed"},lr={type:"childadded",child:null},Yl={type:"childremoved",child:null},Ht=class n extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new U,t=new Pn,i=new Sn,s=new U(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $e},normalMatrix:{value:new tt}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ar.setFromAxisAngle(e,t),this.quaternion.multiply(ar),this}rotateOnWorldAxis(e,t){return ar.setFromAxisAngle(e,t),this.quaternion.premultiply(ar),this}rotateX(e){return this.rotateOnAxis(Od,e)}rotateY(e){return this.rotateOnAxis(Fd,e)}rotateZ(e){return this.rotateOnAxis(Bd,e)}translateOnAxis(e,t){return Ud.copy(e).applyQuaternion(this.quaternion),this.position.add(Ud.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Od,e)}translateY(e){return this.translateOnAxis(Fd,e)}translateZ(e){return this.translateOnAxis(Bd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?aa.copy(e):aa.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(io,aa,this.up):_i.lookAt(aa,io,this.up),this.quaternion.setFromRotationMatrix(_i),s&&(_i.extractRotation(s.matrixWorld),ar.setFromRotationMatrix(_i),this.quaternion.premultiply(ar.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kd),lr.child=e,this.dispatchEvent(lr),lr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(W0),Yl.child=e,this.dispatchEvent(Yl),Yl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kd),lr.child=e,this.dispatchEvent(lr),lr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,e,V0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,G0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Ht.DEFAULT_UP=new U(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Jn=new U,vi=new U,$l=new U,Mi=new U,cr=new U,hr=new U,Hd=new U,Zl=new U,Kl=new U,jl=new U,Jl=new gt,Ql=new gt,ec=new gt,Us=class n{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Jn.subVectors(e,t),s.cross(Jn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Jn.subVectors(s,t),vi.subVectors(i,t),$l.subVectors(e,t);let o=Jn.dot(Jn),a=Jn.dot(vi),l=Jn.dot($l),c=vi.dot(vi),h=vi.dot($l),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Mi.x),l.addScaledVector(o,Mi.y),l.addScaledVector(a,Mi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Jl.setScalar(0),Ql.setScalar(0),ec.setScalar(0),Jl.fromBufferAttribute(e,t),Ql.fromBufferAttribute(e,i),ec.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Jl,r.x),o.addScaledVector(Ql,r.y),o.addScaledVector(ec,r.z),o}static isFrontFacing(e,t,i,s){return Jn.subVectors(i,t),vi.subVectors(e,t),Jn.cross(vi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),Jn.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;cr.subVectors(s,i),hr.subVectors(r,i),Zl.subVectors(e,i);let l=cr.dot(Zl),c=hr.dot(Zl);if(l<=0&&c<=0)return t.copy(i);Kl.subVectors(e,s);let h=cr.dot(Kl),u=hr.dot(Kl);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(cr,o);jl.subVectors(e,r);let f=cr.dot(jl),g=hr.dot(jl);if(g>=0&&f<=g)return t.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(hr,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Hd.subVectors(r,s),a=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Hd,a);let p=1/(m+x+d);return o=x*p,a=d*p,t.copy(i).addScaledVector(cr,o).addScaledVector(hr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ep={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},la={h:0,s:0,l:0};function tc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ve=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=st.workingColorSpace){if(e=Zh(e,1),t=xn(t,0,1),i=xn(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=tc(o,r,e+1/3),this.g=tc(o,r,e),this.b=tc(o,r,e-1/3)}return st.toWorkingColorSpace(this,s),this}setStyle(e,t=Wt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){let i=ep[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}copyLinearToSRGB(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return st.fromWorkingColorSpace(mn.copy(this),e),Math.round(xn(mn.r*255,0,255))*65536+Math.round(xn(mn.g*255,0,255))*256+Math.round(xn(mn.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace(mn.copy(this),t);let i=mn.r,s=mn.g,r=mn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=Wt){st.fromWorkingColorSpace(mn.copy(this),e);let t=mn.r,i=mn.g,s=mn.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Zi),this.setHSL(Zi.h+e,Zi.s+t,Zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Zi),e.getHSL(la);let i=mo(Zi.h,la.h,t),s=mo(Zi.s,la.s,t),r=mo(Zi.l,la.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mn=new ve;ve.NAMES=ep;var X0=0,Ln=class extends ts{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:X0++}),this.uuid=ei(),this.name="",this.blending=yr,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_c,this.blendDst=vc,this.blendEquation=Ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ve(0,0,0),this.blendAlpha=0,this.depthFunc=br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Td,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tr,this.stencilZFail=tr,this.stencilZPass=tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==yr&&(i.blending=this.blending),this.side!==ci&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==_c&&(i.blendSrc=this.blendSrc),this.blendDst!==vc&&(i.blendDst=this.blendDst),this.blendEquation!==Ns&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==br&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Td&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==tr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==tr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==tr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Tt=class extends Ln{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=Uh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Zt=new U,ca=new Ve,At=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=nh,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ca.fromBufferAttribute(this,t),ca.applyMatrix3(e),this.setXY(t,ca.x,ca.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Qn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=wt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),s=wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),s=wt(s,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nh&&(e.usage=this.usage),e}};var Ba=class extends At{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ka=class extends At{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var rt=class extends At{constructor(e,t,i){super(new Float32Array(e),t,i)}},q0=0,Gn=new $e,nc=new Ht,ur=new U,On=new rn,so=new rn,nn=new U,pt=class n extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=ei(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qf(e)?ka:Ba)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new tt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,t,i){return Gn.makeTranslation(e,t,i),this.applyMatrix4(Gn),this}scale(e,t,i){return Gn.makeScale(e,t,i),this.applyMatrix4(Gn),this}lookAt(e){return nc.lookAt(e),nc.updateMatrix(),this.applyMatrix4(nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ur).negate(),this.translate(ur.x,ur.y,ur.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new rt(i,3))}else{for(let i=0,s=t.count;i<s;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];On.setFromBufferAttribute(r),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let i=this.boundingSphere.center;if(On.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];so.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(On.min,so.min),On.expandByPoint(nn),nn.addVectors(On.max,so.max),On.expandByPoint(nn)):(On.expandByPoint(so.min),On.expandByPoint(so.max))}On.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)nn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(nn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)nn.fromBufferAttribute(a,c),l&&(ur.fromBufferAttribute(e,c),nn.add(ur)),s=Math.max(s,i.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new At(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new U,l[P]=new U;let c=new U,h=new U,u=new U,d=new Ve,f=new Ve,g=new Ve,x=new U,m=new U;function p(P,T,v){c.fromBufferAttribute(i,P),h.fromBufferAttribute(i,T),u.fromBufferAttribute(i,v),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,v),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(D),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(D),a[P].add(x),a[T].add(x),a[v].add(x),l[P].add(m),l[T].add(m),l[v].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let P=0,T=_.length;P<T;++P){let v=_[P],D=v.start,X=v.count;for(let W=D,V=D+X;W<V;W+=3)p(e.getX(W+0),e.getX(W+1),e.getX(W+2))}let b=new U,y=new U,L=new U,w=new U;function R(P){L.fromBufferAttribute(s,P),w.copy(L);let T=a[P];b.copy(T),b.sub(L.multiplyScalar(L.dot(T))).normalize(),y.crossVectors(w,T);let D=y.dot(l[P])<0?-1:1;o.setXYZW(P,b.x,b.y,b.z,D)}for(let P=0,T=_.length;P<T;++P){let v=_[P],D=v.start,X=v.count;for(let W=D,V=D+X;W<V;W+=3)R(e.getX(W+0)),R(e.getX(W+1)),R(e.getX(W+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new At(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,h=new U,u=new U;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new At(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},zd=new $e,As=new Bs,ha=new jt,Vd=new U,ua=new U,da=new U,fa=new U,ic=new U,pa=new U,Gd=new U,ma=new U,ne=class extends Ht{constructor(e=new pt,t=new Tt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){pa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(ic.fromBufferAttribute(u,e),o?pa.addScaledVector(ic,h):pa.addScaledVector(ic.sub(t),h))}t.add(pa)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ha.copy(i.boundingSphere),ha.applyMatrix4(r),As.copy(e.ray).recast(e.near),!(ha.containsPoint(As.origin)===!1&&(As.intersectSphere(ha,Vd)===null||As.origin.distanceToSquared(Vd)>(e.far-e.near)**2))&&(zd.copy(r).invert(),As.copy(e.ray).applyMatrix4(zd),!(i.boundingBox!==null&&As.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,As)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),b=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,L=b;y<L;y+=3){let w=a.getX(y),R=a.getX(y+1),P=a.getX(y+2);s=ga(this,p,e,i,c,h,u,w,R,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let _=a.getX(m),b=a.getX(m+1),y=a.getX(m+2);s=ga(this,o,e,i,c,h,u,_,b,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,L=b;y<L;y+=3){let w=y,R=y+1,P=y+2;s=ga(this,p,e,i,c,h,u,w,R,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let _=m,b=m+1,y=m+2;s=ga(this,o,e,i,c,h,u,_,b,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Y0(n,e,t,i,s,r,o,a){let l;if(e.side===hn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===ci,a),l===null)return null;ma.copy(a),ma.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(ma);return c<t.near||c>t.far?null:{distance:c,point:ma.clone(),object:n}}function ga(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,ua),n.getVertexPosition(l,da),n.getVertexPosition(c,fa);let h=Y0(n,e,t,i,ua,da,fa,Gd);if(h){let u=new U;Us.getBarycoord(Gd,ua,da,fa,u),s&&(h.uv=Us.getInterpolatedAttribute(s,a,l,c,u,new Ve)),r&&(h.uv1=Us.getInterpolatedAttribute(r,a,l,c,u,new Ve)),o&&(h.normal=Us.getInterpolatedAttribute(o,a,l,c,u,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new U,materialIndex:0};Us.getNormal(ua,da,fa,d.normal),h.face=d,h.barycoord=u}return h}var vn=class n extends pt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new rt(c,3)),this.setAttribute("normal",new rt(h,3)),this.setAttribute("uv",new rt(u,2));function g(x,m,p,_,b,y,L,w,R,P,T){let v=y/R,D=L/P,X=y/2,W=L/2,V=w/2,K=R+1,q=P+1,ie=0,Z=0,me=new U;for(let ye=0;ye<q;ye++){let Ie=ye*D-W;for(let Xe=0;Xe<K;Xe++){let ut=Xe*v-X;me[x]=ut*_,me[m]=Ie*b,me[p]=V,c.push(me.x,me.y,me.z),me[x]=0,me[m]=0,me[p]=w>0?1:-1,h.push(me.x,me.y,me.z),u.push(Xe/R),u.push(1-ye/P),ie+=1}}for(let ye=0;ye<P;ye++)for(let Ie=0;Ie<R;Ie++){let Xe=d+Ie+K*ye,ut=d+Ie+K*(ye+1),te=d+(Ie+1)+K*(ye+1),ce=d+(Ie+1)+K*ye;l.push(Xe,ut,ce),l.push(ut,te,ce),Z+=6}a.addGroup(f,Z,T),f+=Z,d+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ir(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function En(n){let e={};for(let t=0;t<n.length;t++){let i=Ir(n[t]);for(let s in i)e[s]=i[s]}return e}function $0(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function tp(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}var fs={clone:Ir,merge:En},Z0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,K0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,qt=class extends Ln{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Z0,this.fragmentShader=K0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ir(e.uniforms),this.uniformsGroups=$0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Ha=class extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=Si}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ki=new U,Wd=new Ve,Xd=new Ve,Xt=class extends Ha{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Cr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(po*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cr*2*Math.atan(Math.tan(po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z)}getViewSize(e,t){return this.getViewBounds(e,Wd,Xd),t.subVectors(Xd,Wd)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(po*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},dr=-90,fr=1,oh=class extends Ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Xt(dr,fr,e,t);s.layers=this.layers,this.add(s);let r=new Xt(dr,fr,e,t);r.layers=this.layers,this.add(r);let o=new Xt(dr,fr,e,t);o.layers=this.layers,this.add(o);let a=new Xt(dr,fr,e,t);a.layers=this.layers,this.add(a);let l=new Xt(dr,fr,e,t);l.layers=this.layers,this.add(l);let c=new Xt(dr,fr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Si)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ua)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},za=class extends on{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Tr,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ah=class extends un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new za(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Cn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new vn(5,5,5),r=new qt({name:"CubemapFromEquirect",uniforms:Ir(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:li});r.uniforms.tEquirect.value=t;let o=new ne(s,r),a=t.minFilter;return t.minFilter===ai&&(t.minFilter=Cn),new oh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},sc=new U,j0=new U,J0=new tt,Ei=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=sc.subVectors(i,t).cross(j0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(sc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||J0.getNormalMatrix(e),s=this.coplanarPoint(sc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Rs=new jt,xa=new U,Pr=class{constructor(e=new Ei,t=new Ei,i=new Ei,s=new Ei,r=new Ei,o=new Ei){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Si){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],x=s[10],m=s[11],p=s[12],_=s[13],b=s[14],y=s[15];if(i[0].setComponents(l-r,d-c,m-f,y-p).normalize(),i[1].setComponents(l+r,d+c,m+f,y+p).normalize(),i[2].setComponents(l+o,d+h,m+g,y+_).normalize(),i[3].setComponents(l-o,d-h,m-g,y-_).normalize(),i[4].setComponents(l-a,d-u,m-x,y-b).normalize(),t===Si)i[5].setComponents(l+a,d+u,m+x,y+b).normalize();else if(t===Ua)i[5].setComponents(a,u,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(e){return Rs.center.set(0,0,0),Rs.radius=.7071067811865476,Rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(xa.x=s.normal.x>0?e.max.x:e.min.x,xa.y=s.normal.y>0?e.max.y:e.min.y,xa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(xa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function np(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Q0(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var an=class n extends pt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let _=p*d-o;for(let b=0;b<c;b++){let y=b*u-r;g.push(y,-_,0),x.push(0,0,1),m.push(b/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<a;_++){let b=_+c*p,y=_+c*(p+1),L=_+1+c*(p+1),w=_+1+c*p;f.push(b,y,w),f.push(y,L,w)}this.setIndex(f),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(x,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},eg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ng=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ig=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,og=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ag=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,cg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ug=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,fg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,pg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,mg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,gg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_g=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Tg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Eg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Sg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,wg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ag=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ig="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Dg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ng=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ug=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Og=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Fg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Vg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,qg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Yg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$g=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Jg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ex=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ix=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ox=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ax=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ux=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,px=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,gx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,yx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_x=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Tx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ex=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ax=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Cx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ix=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Px=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ux=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ox=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Fx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Bx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Gx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$x=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Jx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Qx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ey=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ty=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ny=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ry=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,oy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ay=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ly=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,cy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,py=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,my=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,yy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_y=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,My=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,by=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ty=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ey=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ay=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ry=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Iy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Py=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ly=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,it={alphahash_fragment:eg,alphahash_pars_fragment:tg,alphamap_fragment:ng,alphamap_pars_fragment:ig,alphatest_fragment:sg,alphatest_pars_fragment:rg,aomap_fragment:og,aomap_pars_fragment:ag,batching_pars_vertex:lg,batching_vertex:cg,begin_vertex:hg,beginnormal_vertex:ug,bsdfs:dg,iridescence_fragment:fg,bumpmap_pars_fragment:pg,clipping_planes_fragment:mg,clipping_planes_pars_fragment:gg,clipping_planes_pars_vertex:xg,clipping_planes_vertex:yg,color_fragment:_g,color_pars_fragment:vg,color_pars_vertex:Mg,color_vertex:bg,common:Tg,cube_uv_reflection_fragment:Eg,defaultnormal_vertex:Sg,displacementmap_pars_vertex:wg,displacementmap_vertex:Ag,emissivemap_fragment:Rg,emissivemap_pars_fragment:Cg,colorspace_fragment:Ig,colorspace_pars_fragment:Pg,envmap_fragment:Lg,envmap_common_pars_fragment:Dg,envmap_pars_fragment:Ng,envmap_pars_vertex:Ug,envmap_physical_pars_fragment:qg,envmap_vertex:Og,fog_vertex:Fg,fog_pars_vertex:Bg,fog_fragment:kg,fog_pars_fragment:Hg,gradientmap_pars_fragment:zg,lightmap_pars_fragment:Vg,lights_lambert_fragment:Gg,lights_lambert_pars_fragment:Wg,lights_pars_begin:Xg,lights_toon_fragment:Yg,lights_toon_pars_fragment:$g,lights_phong_fragment:Zg,lights_phong_pars_fragment:Kg,lights_physical_fragment:jg,lights_physical_pars_fragment:Jg,lights_fragment_begin:Qg,lights_fragment_maps:ex,lights_fragment_end:tx,logdepthbuf_fragment:nx,logdepthbuf_pars_fragment:ix,logdepthbuf_pars_vertex:sx,logdepthbuf_vertex:rx,map_fragment:ox,map_pars_fragment:ax,map_particle_fragment:lx,map_particle_pars_fragment:cx,metalnessmap_fragment:hx,metalnessmap_pars_fragment:ux,morphinstance_vertex:dx,morphcolor_vertex:fx,morphnormal_vertex:px,morphtarget_pars_vertex:mx,morphtarget_vertex:gx,normal_fragment_begin:xx,normal_fragment_maps:yx,normal_pars_fragment:_x,normal_pars_vertex:vx,normal_vertex:Mx,normalmap_pars_fragment:bx,clearcoat_normal_fragment_begin:Tx,clearcoat_normal_fragment_maps:Ex,clearcoat_pars_fragment:Sx,iridescence_pars_fragment:wx,opaque_fragment:Ax,packing:Rx,premultiplied_alpha_fragment:Cx,project_vertex:Ix,dithering_fragment:Px,dithering_pars_fragment:Lx,roughnessmap_fragment:Dx,roughnessmap_pars_fragment:Nx,shadowmap_pars_fragment:Ux,shadowmap_pars_vertex:Ox,shadowmap_vertex:Fx,shadowmask_pars_fragment:Bx,skinbase_vertex:kx,skinning_pars_vertex:Hx,skinning_vertex:zx,skinnormal_vertex:Vx,specularmap_fragment:Gx,specularmap_pars_fragment:Wx,tonemapping_fragment:Xx,tonemapping_pars_fragment:qx,transmission_fragment:Yx,transmission_pars_fragment:$x,uv_pars_fragment:Zx,uv_pars_vertex:Kx,uv_vertex:jx,worldpos_vertex:Jx,background_vert:Qx,background_frag:ey,backgroundCube_vert:ty,backgroundCube_frag:ny,cube_vert:iy,cube_frag:sy,depth_vert:ry,depth_frag:oy,distanceRGBA_vert:ay,distanceRGBA_frag:ly,equirect_vert:cy,equirect_frag:hy,linedashed_vert:uy,linedashed_frag:dy,meshbasic_vert:fy,meshbasic_frag:py,meshlambert_vert:my,meshlambert_frag:gy,meshmatcap_vert:xy,meshmatcap_frag:yy,meshnormal_vert:_y,meshnormal_frag:vy,meshphong_vert:My,meshphong_frag:by,meshphysical_vert:Ty,meshphysical_frag:Ey,meshtoon_vert:Sy,meshtoon_frag:wy,points_vert:Ay,points_frag:Ry,shadow_vert:Cy,shadow_frag:Iy,sprite_vert:Py,sprite_frag:Ly},_e={common:{diffuse:{value:new ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new ve(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},oi={basic:{uniforms:En([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:En([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new ve(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:En([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:En([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:En([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new ve(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:En([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:En([_e.points,_e.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:En([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:En([_e.common,_e.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:En([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:En([_e.sprite,_e.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:En([_e.common,_e.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:En([_e.lights,_e.fog,{color:{value:new ve(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};oi.physical={uniforms:En([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new ve(0)},specularColor:{value:new ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};var ya={r:0,b:0,g:0},Cs=new Pn,Dy=new $e;function Ny(n,e,t,i,s,r,o){let a=new ve(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(_){let b=_.isScene===!0?_.background:null;return b&&b.isTexture&&(b=(_.backgroundBlurriness>0?t:e).get(b)),b}function x(_){let b=!1,y=g(_);y===null?p(a,l):y&&y.isColor&&(p(y,1),b=!0);let L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(_,b){let y=g(b);y&&(y.isCubeTexture||y.mapping===ol)?(h===void 0&&(h=new ne(new vn(1,1,1),new qt({name:"BackgroundCubeMaterial",uniforms:Ir(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Cs.copy(b.backgroundRotation),Cs.x*=-1,Cs.y*=-1,Cs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Cs.y*=-1,Cs.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Dy.makeRotationFromEuler(Cs)),h.material.toneMapped=st.getTransfer(y.colorSpace)!==bt,(u!==y||d!==y.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=n.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new ne(new an(2,2),new qt({name:"BackgroundMaterial",uniforms:Ir(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=st.getTransfer(y.colorSpace)!==bt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,b){_.getRGB(ya,tp(n)),i.buffers.color.setClear(ya.r,ya.g,ya.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(_,b=1){a.set(_),l=b,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(a,l)},render:x,addToRenderList:m}}function Uy(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(v,D,X,W,V){let K=!1,q=u(W,X,D);r!==q&&(r=q,c(r.object)),K=f(v,W,X,V),K&&g(v,W,X,V),V!==null&&e.update(V,n.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,y(v,D,X,W),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return n.createVertexArray()}function c(v){return n.bindVertexArray(v)}function h(v){return n.deleteVertexArray(v)}function u(v,D,X){let W=X.wireframe===!0,V=i[v.id];V===void 0&&(V={},i[v.id]=V);let K=V[D.id];K===void 0&&(K={},V[D.id]=K);let q=K[W];return q===void 0&&(q=d(l()),K[W]=q),q}function d(v){let D=[],X=[],W=[];for(let V=0;V<t;V++)D[V]=0,X[V]=0,W[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:X,attributeDivisors:W,object:v,attributes:{},index:null}}function f(v,D,X,W){let V=r.attributes,K=D.attributes,q=0,ie=X.getAttributes();for(let Z in ie)if(ie[Z].location>=0){let ye=V[Z],Ie=K[Z];if(Ie===void 0&&(Z==="instanceMatrix"&&v.instanceMatrix&&(Ie=v.instanceMatrix),Z==="instanceColor"&&v.instanceColor&&(Ie=v.instanceColor)),ye===void 0||ye.attribute!==Ie||Ie&&ye.data!==Ie.data)return!0;q++}return r.attributesNum!==q||r.index!==W}function g(v,D,X,W){let V={},K=D.attributes,q=0,ie=X.getAttributes();for(let Z in ie)if(ie[Z].location>=0){let ye=K[Z];ye===void 0&&(Z==="instanceMatrix"&&v.instanceMatrix&&(ye=v.instanceMatrix),Z==="instanceColor"&&v.instanceColor&&(ye=v.instanceColor));let Ie={};Ie.attribute=ye,ye&&ye.data&&(Ie.data=ye.data),V[Z]=Ie,q++}r.attributes=V,r.attributesNum=q,r.index=W}function x(){let v=r.newAttributes;for(let D=0,X=v.length;D<X;D++)v[D]=0}function m(v){p(v,0)}function p(v,D){let X=r.newAttributes,W=r.enabledAttributes,V=r.attributeDivisors;X[v]=1,W[v]===0&&(n.enableVertexAttribArray(v),W[v]=1),V[v]!==D&&(n.vertexAttribDivisor(v,D),V[v]=D)}function _(){let v=r.newAttributes,D=r.enabledAttributes;for(let X=0,W=D.length;X<W;X++)D[X]!==v[X]&&(n.disableVertexAttribArray(X),D[X]=0)}function b(v,D,X,W,V,K,q){q===!0?n.vertexAttribIPointer(v,D,X,V,K):n.vertexAttribPointer(v,D,X,W,V,K)}function y(v,D,X,W){x();let V=W.attributes,K=X.getAttributes(),q=D.defaultAttributeValues;for(let ie in K){let Z=K[ie];if(Z.location>=0){let me=V[ie];if(me===void 0&&(ie==="instanceMatrix"&&v.instanceMatrix&&(me=v.instanceMatrix),ie==="instanceColor"&&v.instanceColor&&(me=v.instanceColor)),me!==void 0){let ye=me.normalized,Ie=me.itemSize,Xe=e.get(me);if(Xe===void 0)continue;let ut=Xe.buffer,te=Xe.type,ce=Xe.bytesPerElement,Ce=te===n.INT||te===n.UNSIGNED_INT||me.gpuType===Vh;if(me.isInterleavedBufferAttribute){let ge=me.data,ze=ge.stride,Ye=me.offset;if(ge.isInstancedInterleavedBuffer){for(let O=0;O<Z.locationSize;O++)p(Z.location+O,ge.meshPerAttribute);v.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let O=0;O<Z.locationSize;O++)m(Z.location+O);n.bindBuffer(n.ARRAY_BUFFER,ut);for(let O=0;O<Z.locationSize;O++)b(Z.location+O,Ie/Z.locationSize,te,ye,ze*ce,(Ye+Ie/Z.locationSize*O)*ce,Ce)}else{if(me.isInstancedBufferAttribute){for(let ge=0;ge<Z.locationSize;ge++)p(Z.location+ge,me.meshPerAttribute);v.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let ge=0;ge<Z.locationSize;ge++)m(Z.location+ge);n.bindBuffer(n.ARRAY_BUFFER,ut);for(let ge=0;ge<Z.locationSize;ge++)b(Z.location+ge,Ie/Z.locationSize,te,ye,Ie*ce,Ie/Z.locationSize*ge*ce,Ce)}}else if(q!==void 0){let ye=q[ie];if(ye!==void 0)switch(ye.length){case 2:n.vertexAttrib2fv(Z.location,ye);break;case 3:n.vertexAttrib3fv(Z.location,ye);break;case 4:n.vertexAttrib4fv(Z.location,ye);break;default:n.vertexAttrib1fv(Z.location,ye)}}}}_()}function L(){P();for(let v in i){let D=i[v];for(let X in D){let W=D[X];for(let V in W)h(W[V].object),delete W[V];delete D[X]}delete i[v]}}function w(v){if(i[v.id]===void 0)return;let D=i[v.id];for(let X in D){let W=D[X];for(let V in W)h(W[V].object),delete W[V];delete D[X]}delete i[v.id]}function R(v){for(let D in i){let X=i[D];if(X[v.id]===void 0)continue;let W=X[v.id];for(let V in W)h(W[V].object),delete W[V];delete X[v.id]}}function P(){T(),o=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:T,dispose:L,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function Oy(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,i,1)}function l(c,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Fy(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==In&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let P=R===kn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Ri&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Fn&&!P)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:L,maxSamples:w}}function By(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Ei,a=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let _=r?0:i,b=_*4,y=p.clippingState||null;l.value=y,y=h(g,d,b,f);for(let L=0;L!==b;++L)y[L]=t[L];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,y=f;b!==x;++b,y+=4)o.copy(u[b]).applyMatrix4(_,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function ky(n){let e=new WeakMap;function t(o,a){return a===Rc?o.mapping=Tr:a===Cc&&(o.mapping=Er),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Rc||a===Cc)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new ah(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var ns=class extends Ha{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},xr=4,qd=[.125,.215,.35,.446,.526,.582],Os=20,rc=new ns,Yd=new ve,oc=null,ac=0,lc=0,cc=!1,Ds=(1+Math.sqrt(5))/2,pr=1/Ds,$d=[new U(-Ds,pr,0),new U(Ds,pr,0),new U(-pr,0,Ds),new U(pr,0,Ds),new U(0,Ds,-pr),new U(0,Ds,pr),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],Lr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){oc=this._renderer.getRenderTarget(),ac=this._renderer.getActiveCubeFace(),lc=this._renderer.getActiveMipmapLevel(),cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(oc,ac,lc),this._renderer.xr.enabled=cc,e.scissorTest=!1,_a(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Tr||e.mapping===Er?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oc=this._renderer.getRenderTarget(),ac=this._renderer.getActiveCubeFace(),lc=this._renderer.getActiveMipmapLevel(),cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:kn,format:In,colorSpace:Mn,depthBuffer:!1},s=Zd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zd(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hy(r)),this._blurMaterial=zy(r,e,t)}return s}_compileMaterial(e){let t=new ne(this._lodPlanes[0],e);this._renderer.compile(t,rc)}_sceneToCubeUV(e,t,i,s){let a=new Xt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Yd),h.toneMapping=Qi,h.autoClear=!1;let f=new Tt({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),g=new ne(new vn,f),x=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,x=!0):(f.color.copy(Yd),x=!0);for(let p=0;p<6;p++){let _=p%3;_===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):_===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let b=this._cubeSize;_a(s,_*b,p>2?b:0,b,b),h.setRenderTarget(s),x&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Tr||e.mapping===Er;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ne(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;_a(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,rc)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=$d[(s-r-1)%$d.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ne(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Os-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Os;m>Os&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Os}`);let p=[],_=0;for(let R=0;R<Os;++R){let P=R/x,T=Math.exp(-P*P/2);p.push(T),R===0?_+=T:R<m&&(_+=2*T)}for(let R=0;R<p.length;R++)p[R]=p[R]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-i;let y=this._sizeLods[s],L=3*y*(s>b-xr?s-b+xr:0),w=4*(this._cubeSize-y);_a(t,L,w,3*y,2*y),l.setRenderTarget(t),l.render(u,rc)}};function Hy(n){let e=[],t=[],i=[],s=n,r=n-xr+1+qd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-xr?l=qd[o-n+xr-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,_=new Float32Array(x*g*f),b=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let w=0;w<f;w++){let R=w%3*2/3-1,P=w>2?0:-1,T=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];_.set(T,x*g*w),b.set(d,m*g*w);let v=[w,w,w,w,w,w];y.set(v,p*g*w)}let L=new pt;L.setAttribute("position",new At(_,x)),L.setAttribute("uv",new At(b,m)),L.setAttribute("faceIndex",new At(y,p)),e.push(L),s>xr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Zd(n,e,t){let i=new un(n,e,t);return i.texture.mapping=ol,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _a(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function zy(n,e,t){let i=new Float32Array(Os),s=new U(0,1,0);return new qt({name:"SphericalGaussianBlur",defines:{n:Os,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Kd(){return new qt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function jd(){return new qt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Kh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Vy(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Rc||l===Cc,h=l===Tr||l===Er;if(c||h){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Lr(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new Lr(n)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Gy(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&ho("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Wy(n,e,t,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)e.update(d[g],n.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],n.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let _=f.array;x=f.version;for(let b=0,y=_.length;b<y;b+=3){let L=_[b+0],w=_[b+1],R=_[b+2];d.push(L,w,w,R,R,L)}}else if(g!==void 0){let _=g.array;x=g.version;for(let b=0,y=_.length/3-1;b<y;b+=3){let L=b+0,w=b+1,R=b+2;d.push(L,w,w,R,R,L)}}else return;let m=new(Qf(d)?ka:Ba)(d,1);m.version=x;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Xy(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*o),t.update(f,i,1)}function c(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,d*o,g),t.update(f,i,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function u(d,f,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,x,0,g);let p=0;for(let _=0;_<g;_++)p+=f[_]*x[_];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function qy(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Yy(n,e,t){let i=new WeakMap,s=new gt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let T=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],b=0;f===!0&&(b=1),g===!0&&(b=2),x===!0&&(b=3);let y=a.attributes.position.count*b,L=1;y>e.maxTextureSize&&(L=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let w=new Float32Array(y*L*4*u),R=new Fa(w,y,L,u);R.type=Fn,R.needsUpdate=!0;let P=b*4;for(let v=0;v<u;v++){let D=m[v],X=p[v],W=_[v],V=y*L*4*v;for(let K=0;K<D.count;K++){let q=K*P;f===!0&&(s.fromBufferAttribute(D,K),w[V+q+0]=s.x,w[V+q+1]=s.y,w[V+q+2]=s.z,w[V+q+3]=0),g===!0&&(s.fromBufferAttribute(X,K),w[V+q+4]=s.x,w[V+q+5]=s.y,w[V+q+6]=s.z,w[V+q+7]=0),x===!0&&(s.fromBufferAttribute(W,K),w[V+q+8]=s.x,w[V+q+9]=s.y,w[V+q+10]=s.z,w[V+q+11]=W.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new Ve(y,L)},i.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function $y(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Va=class extends on{constructor(e,t,i,s,r,o,a,l,c,h=_r){if(h!==_r&&h!==wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===_r&&(i=es),i===void 0&&h===wr&&(i=Sr),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:yn,this.minFilter=l!==void 0?l:yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ip=new on,Jd=new Va(1,1),sp=new Fa,rp=new rh,op=new za,Qd=[],ef=[],tf=new Float32Array(16),nf=new Float32Array(9),sf=new Float32Array(4);function Br(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Qd[s];if(r===void 0&&(r=new Float32Array(s),Qd[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Jt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Qt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function hl(n,e){let t=ef[e];t===void 0&&(t=new Int32Array(e),ef[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Zy(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Ky(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2fv(this.addr,e),Qt(t,e)}}function jy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jt(t,e))return;n.uniform3fv(this.addr,e),Qt(t,e)}}function Jy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4fv(this.addr,e),Qt(t,e)}}function Qy(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Qt(t,e)}else{if(Jt(t,i))return;sf.set(i),n.uniformMatrix2fv(this.addr,!1,sf),Qt(t,i)}}function e_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Qt(t,e)}else{if(Jt(t,i))return;nf.set(i),n.uniformMatrix3fv(this.addr,!1,nf),Qt(t,i)}}function t_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Qt(t,e)}else{if(Jt(t,i))return;tf.set(i),n.uniformMatrix4fv(this.addr,!1,tf),Qt(t,i)}}function n_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function i_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2iv(this.addr,e),Qt(t,e)}}function s_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;n.uniform3iv(this.addr,e),Qt(t,e)}}function r_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4iv(this.addr,e),Qt(t,e)}}function o_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function a_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2uiv(this.addr,e),Qt(t,e)}}function l_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;n.uniform3uiv(this.addr,e),Qt(t,e)}}function c_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4uiv(this.addr,e),Qt(t,e)}}function h_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Jd.compareFunction=jf,r=Jd):r=ip,t.setTexture2D(e||r,s)}function u_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||rp,s)}function d_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||op,s)}function f_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||sp,s)}function p_(n){switch(n){case 5126:return Zy;case 35664:return Ky;case 35665:return jy;case 35666:return Jy;case 35674:return Qy;case 35675:return e_;case 35676:return t_;case 5124:case 35670:return n_;case 35667:case 35671:return i_;case 35668:case 35672:return s_;case 35669:case 35673:return r_;case 5125:return o_;case 36294:return a_;case 36295:return l_;case 36296:return c_;case 35678:case 36198:case 36298:case 36306:case 35682:return h_;case 35679:case 36299:case 36307:return u_;case 35680:case 36300:case 36308:case 36293:return d_;case 36289:case 36303:case 36311:case 36292:return f_}}function m_(n,e){n.uniform1fv(this.addr,e)}function g_(n,e){let t=Br(e,this.size,2);n.uniform2fv(this.addr,t)}function x_(n,e){let t=Br(e,this.size,3);n.uniform3fv(this.addr,t)}function y_(n,e){let t=Br(e,this.size,4);n.uniform4fv(this.addr,t)}function __(n,e){let t=Br(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function v_(n,e){let t=Br(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function M_(n,e){let t=Br(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function b_(n,e){n.uniform1iv(this.addr,e)}function T_(n,e){n.uniform2iv(this.addr,e)}function E_(n,e){n.uniform3iv(this.addr,e)}function S_(n,e){n.uniform4iv(this.addr,e)}function w_(n,e){n.uniform1uiv(this.addr,e)}function A_(n,e){n.uniform2uiv(this.addr,e)}function R_(n,e){n.uniform3uiv(this.addr,e)}function C_(n,e){n.uniform4uiv(this.addr,e)}function I_(n,e,t){let i=this.cache,s=e.length,r=hl(t,s);Jt(i,r)||(n.uniform1iv(this.addr,r),Qt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||ip,r[o])}function P_(n,e,t){let i=this.cache,s=e.length,r=hl(t,s);Jt(i,r)||(n.uniform1iv(this.addr,r),Qt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||rp,r[o])}function L_(n,e,t){let i=this.cache,s=e.length,r=hl(t,s);Jt(i,r)||(n.uniform1iv(this.addr,r),Qt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||op,r[o])}function D_(n,e,t){let i=this.cache,s=e.length,r=hl(t,s);Jt(i,r)||(n.uniform1iv(this.addr,r),Qt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||sp,r[o])}function N_(n){switch(n){case 5126:return m_;case 35664:return g_;case 35665:return x_;case 35666:return y_;case 35674:return __;case 35675:return v_;case 35676:return M_;case 5124:case 35670:return b_;case 35667:case 35671:return T_;case 35668:case 35672:return E_;case 35669:case 35673:return S_;case 5125:return w_;case 36294:return A_;case 36295:return R_;case 36296:return C_;case 35678:case 36198:case 36298:case 36306:case 35682:return I_;case 35679:case 36299:case 36307:return P_;case 35680:case 36300:case 36308:case 36293:return L_;case 36289:case 36303:case 36311:case 36292:return D_}}var lh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=p_(t.type)}},ch=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=N_(t.type)}},hh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},hc=/(\w+)(\])?(\[|\.)?/g;function rf(n,e){n.seq.push(e),n.map[e.id]=e}function U_(n,e,t){let i=n.name,s=i.length;for(hc.lastIndex=0;;){let r=hc.exec(i),o=hc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){rf(t,c===void 0?new lh(a,n,e):new ch(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new hh(a),rf(t,u)),t=u}}}var Mr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);U_(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function of(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var O_=37297,F_=0;function B_(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var af=new tt;function k_(n){st._getMatrix(af,st.workingColorSpace,n);let e=`mat3( ${af.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(n)){case cl:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function lf(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+B_(n.getShaderSource(e),o)}else return s}function H_(n,e){let t=k_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function z_(n,e){let t;switch(e){case Oh:t="Linear";break;case Fh:t="Reinhard";break;case Bh:t="Cineon";break;case Io:t="ACESFilmic";break;case kh:t="AgX";break;case Hh:t="Neutral";break;case i0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var va=new U;function V_(){st.getLuminanceCoefficients(va);let n=va.x.toFixed(4),e=va.y.toFixed(4),t=va.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function G_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(uo).join(`
`)}function W_(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function X_(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function uo(n){return n!==""}function cf(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var q_=/^[ \t]*#include +<([\w\d./]+)>/gm;function uh(n){return n.replace(q_,$_)}var Y_=new Map;function $_(n,e){let t=it[e];if(t===void 0){let i=Y_.get(e);if(i!==void 0)t=it[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return uh(t)}var Z_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uf(n){return n.replace(Z_,K_)}function K_(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function df(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function j_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===kf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Nh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ti&&(e="SHADOWMAP_TYPE_VSM"),e}function J_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Tr:case Er:e="ENVMAP_TYPE_CUBE";break;case ol:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Q_(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Er:e="ENVMAP_MODE_REFRACTION";break}return e}function ev(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Uh:e="ENVMAP_BLENDING_MULTIPLY";break;case t0:e="ENVMAP_BLENDING_MIX";break;case n0:e="ENVMAP_BLENDING_ADD";break}return e}function tv(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function nv(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=j_(t),c=J_(t),h=Q_(t),u=ev(t),d=tv(t),f=G_(t),g=W_(r),x=s.createProgram(),m,p,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(uo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(uo).join(`
`),p.length>0&&(p+=`
`)):(m=[df(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(uo).join(`
`),p=[df(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qi?"#define TONE_MAPPING":"",t.toneMapping!==Qi?it.tonemapping_pars_fragment:"",t.toneMapping!==Qi?z_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,H_("linearToOutputTexel",t.outputColorSpace),V_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(uo).join(`
`)),o=uh(o),o=cf(o,t),o=hf(o,t),a=uh(a),a=cf(a,t),a=hf(a,t),o=uf(o),a=uf(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Ed?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ed?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=_+m+o,y=_+p+a,L=of(s,s.VERTEX_SHADER,b),w=of(s,s.FRAGMENT_SHADER,y);s.attachShader(x,L),s.attachShader(x,w),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(D){if(n.debug.checkShaderErrors){let X=s.getProgramInfoLog(x).trim(),W=s.getShaderInfoLog(L).trim(),V=s.getShaderInfoLog(w).trim(),K=!0,q=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,L,w);else{let ie=lf(s,L,"vertex"),Z=lf(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+X+`
`+ie+`
`+Z)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(W===""||V==="")&&(q=!1);q&&(D.diagnostics={runnable:K,programLog:X,vertexShader:{log:W,prefix:m},fragmentShader:{log:V,prefix:p}})}s.deleteShader(L),s.deleteShader(w),P=new Mr(s,x),T=X_(s,x)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(x,O_)),v},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=F_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=L,this.fragmentShader=w,this}var iv=0,dh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new fh(e),t.set(e,i)),i}},fh=class{constructor(e){this.id=iv++,this.code=e,this.usedTimes=0}};function sv(n,e,t,i,s,r,o){let a=new vo,l=new dh,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,v,D,X,W){let V=X.fog,K=W.geometry,q=T.isMeshStandardMaterial?X.environment:null,ie=(T.isMeshStandardMaterial?t:e).get(T.envMap||q),Z=ie&&ie.mapping===ol?ie.image.height:null,me=g[T.type];T.precision!==null&&(f=s.getMaxPrecision(T.precision),f!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));let ye=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Ie=ye!==void 0?ye.length:0,Xe=0;K.morphAttributes.position!==void 0&&(Xe=1),K.morphAttributes.normal!==void 0&&(Xe=2),K.morphAttributes.color!==void 0&&(Xe=3);let ut,te,ce,Ce;if(me){let St=oi[me];ut=St.vertexShader,te=St.fragmentShader}else ut=T.vertexShader,te=T.fragmentShader,l.update(T),ce=l.getVertexShaderID(T),Ce=l.getFragmentShaderID(T);let ge=n.getRenderTarget(),ze=n.state.buffers.depth.getReversed(),Ye=W.isInstancedMesh===!0,O=W.isBatchedMesh===!0,J=!!T.map,j=!!T.matcap,he=!!ie,I=!!T.aoMap,Pe=!!T.lightMap,xe=!!T.bumpMap,Oe=!!T.normalMap,be=!!T.displacementMap,ct=!!T.emissiveMap,Le=!!T.metalnessMap,A=!!T.roughnessMap,M=T.anisotropy>0,G=T.clearcoat>0,C=T.dispersion>0,F=T.iridescence>0,H=T.sheen>0,re=T.transmission>0,oe=M&&!!T.anisotropyMap,pe=G&&!!T.clearcoatMap,Je=G&&!!T.clearcoatNormalMap,ae=G&&!!T.clearcoatRoughnessMap,Se=F&&!!T.iridescenceMap,Ze=F&&!!T.iridescenceThicknessMap,Ke=H&&!!T.sheenColorMap,Ne=H&&!!T.sheenRoughnessMap,dt=!!T.specularMap,nt=!!T.specularColorMap,Pt=!!T.specularIntensityMap,B=re&&!!T.transmissionMap,Me=re&&!!T.thicknessMap,ee=!!T.gradientMap,se=!!T.alphaMap,we=T.alphaTest>0,Te=!!T.alphaHash,Qe=!!T.extensions,Vt=Qi;T.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Vt=n.toneMapping);let fn={shaderID:me,shaderType:T.type,shaderName:T.name,vertexShader:ut,fragmentShader:te,defines:T.defines,customVertexShaderID:ce,customFragmentShaderID:Ce,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:O,batchingColor:O&&W._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&W.instanceColor!==null,instancingMorph:Ye&&W.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ge===null?n.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Mn,alphaToCoverage:!!T.alphaToCoverage,map:J,matcap:j,envMap:he,envMapMode:he&&ie.mapping,envMapCubeUVHeight:Z,aoMap:I,lightMap:Pe,bumpMap:xe,normalMap:Oe,displacementMap:d&&be,emissiveMap:ct,normalMapObjectSpace:Oe&&T.normalMapType===l0,normalMapTangentSpace:Oe&&T.normalMapType===$h,metalnessMap:Le,roughnessMap:A,anisotropy:M,anisotropyMap:oe,clearcoat:G,clearcoatMap:pe,clearcoatNormalMap:Je,clearcoatRoughnessMap:ae,dispersion:C,iridescence:F,iridescenceMap:Se,iridescenceThicknessMap:Ze,sheen:H,sheenColorMap:Ke,sheenRoughnessMap:Ne,specularMap:dt,specularColorMap:nt,specularIntensityMap:Pt,transmission:re,transmissionMap:B,thicknessMap:Me,gradientMap:ee,opaque:T.transparent===!1&&T.blending===yr&&T.alphaToCoverage===!1,alphaMap:se,alphaTest:we,alphaHash:Te,combine:T.combine,mapUv:J&&x(T.map.channel),aoMapUv:I&&x(T.aoMap.channel),lightMapUv:Pe&&x(T.lightMap.channel),bumpMapUv:xe&&x(T.bumpMap.channel),normalMapUv:Oe&&x(T.normalMap.channel),displacementMapUv:be&&x(T.displacementMap.channel),emissiveMapUv:ct&&x(T.emissiveMap.channel),metalnessMapUv:Le&&x(T.metalnessMap.channel),roughnessMapUv:A&&x(T.roughnessMap.channel),anisotropyMapUv:oe&&x(T.anisotropyMap.channel),clearcoatMapUv:pe&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:Je&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ke&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&x(T.sheenRoughnessMap.channel),specularMapUv:dt&&x(T.specularMap.channel),specularColorMapUv:nt&&x(T.specularColorMap.channel),specularIntensityMapUv:Pt&&x(T.specularIntensityMap.channel),transmissionMapUv:B&&x(T.transmissionMap.channel),thicknessMapUv:Me&&x(T.thicknessMap.channel),alphaMapUv:se&&x(T.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Oe||M),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!K.attributes.uv&&(J||se),fog:!!V,useFog:T.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:ze,skinning:W.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Ie,morphTextureStride:Xe,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Vt,decodeVideoTexture:J&&T.map.isVideoTexture===!0&&st.getTransfer(T.map.colorSpace)===bt,decodeVideoTextureEmissive:ct&&T.emissiveMap.isVideoTexture===!0&&st.getTransfer(T.emissiveMap.colorSpace)===bt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===sn,flipSided:T.side===hn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Qe&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qe&&T.extensions.multiDraw===!0||O)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return fn.vertexUv1s=c.has(1),fn.vertexUv2s=c.has(2),fn.vertexUv3s=c.has(3),c.clear(),fn}function p(T){let v=[];if(T.shaderID?v.push(T.shaderID):(v.push(T.customVertexShaderID),v.push(T.customFragmentShaderID)),T.defines!==void 0)for(let D in T.defines)v.push(D),v.push(T.defines[D]);return T.isRawShaderMaterial===!1&&(_(v,T),b(v,T),v.push(n.outputColorSpace)),v.push(T.customProgramCacheKey),v.join()}function _(T,v){T.push(v.precision),T.push(v.outputColorSpace),T.push(v.envMapMode),T.push(v.envMapCubeUVHeight),T.push(v.mapUv),T.push(v.alphaMapUv),T.push(v.lightMapUv),T.push(v.aoMapUv),T.push(v.bumpMapUv),T.push(v.normalMapUv),T.push(v.displacementMapUv),T.push(v.emissiveMapUv),T.push(v.metalnessMapUv),T.push(v.roughnessMapUv),T.push(v.anisotropyMapUv),T.push(v.clearcoatMapUv),T.push(v.clearcoatNormalMapUv),T.push(v.clearcoatRoughnessMapUv),T.push(v.iridescenceMapUv),T.push(v.iridescenceThicknessMapUv),T.push(v.sheenColorMapUv),T.push(v.sheenRoughnessMapUv),T.push(v.specularMapUv),T.push(v.specularColorMapUv),T.push(v.specularIntensityMapUv),T.push(v.transmissionMapUv),T.push(v.thicknessMapUv),T.push(v.combine),T.push(v.fogExp2),T.push(v.sizeAttenuation),T.push(v.morphTargetsCount),T.push(v.morphAttributeCount),T.push(v.numDirLights),T.push(v.numPointLights),T.push(v.numSpotLights),T.push(v.numSpotLightMaps),T.push(v.numHemiLights),T.push(v.numRectAreaLights),T.push(v.numDirLightShadows),T.push(v.numPointLightShadows),T.push(v.numSpotLightShadows),T.push(v.numSpotLightShadowsWithMaps),T.push(v.numLightProbes),T.push(v.shadowMapType),T.push(v.toneMapping),T.push(v.numClippingPlanes),T.push(v.numClipIntersection),T.push(v.depthPacking)}function b(T,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),T.push(a.mask)}function y(T){let v=g[T.type],D;if(v){let X=oi[v];D=fs.clone(X.uniforms)}else D=T.uniforms;return D}function L(T,v){let D;for(let X=0,W=h.length;X<W;X++){let V=h[X];if(V.cacheKey===v){D=V,++D.usedTimes;break}}return D===void 0&&(D=new nv(n,v,T,r),h.push(D)),D}function w(T){if(--T.usedTimes===0){let v=h.indexOf(T);h[v]=h[h.length-1],h.pop(),T.destroy()}}function R(T){l.remove(T)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:L,releaseProgram:w,releaseShaderCache:R,programs:h,dispose:P}}function rv(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function ov(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ff(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function pf(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,d,f,g,x,m){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},n[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),e++,p}function a(u,d,f,g,x,m){let p=o(u,d,f,g,x,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(u,d,f,g,x,m){let p=o(u,d,f,g,x,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||ov),i.length>1&&i.sort(d||ff),s.length>1&&s.sort(d||ff)}function h(){for(let u=e,d=n.length;u<d;u++){let f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function av(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new pf,n.set(i,[o])):s>=r.length?(o=new pf,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function lv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new ve};break;case"SpotLight":t={position:new U,direction:new U,color:new ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new ve,groundColor:new ve};break;case"RectAreaLight":t={color:new ve,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function cv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var hv=0;function uv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function dv(n){let e=new lv,t=cv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);let s=new U,r=new $e,o=new $e;function a(c){let h=0,u=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,_=0,b=0,y=0,L=0,w=0,R=0;c.sort(uv);for(let T=0,v=c.length;T<v;T++){let D=c[T],X=D.color,W=D.intensity,V=D.distance,K=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=X.r*W,u+=X.g*W,d+=X.b*W;else if(D.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(D.sh.coefficients[q],W);R++}else if(D.isDirectionalLight){let q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let ie=D.shadow,Z=t.get(D);Z.shadowIntensity=ie.intensity,Z.shadowBias=ie.bias,Z.shadowNormalBias=ie.normalBias,Z.shadowRadius=ie.radius,Z.shadowMapSize=ie.mapSize,i.directionalShadow[f]=Z,i.directionalShadowMap[f]=K,i.directionalShadowMatrix[f]=D.shadow.matrix,_++}i.directional[f]=q,f++}else if(D.isSpotLight){let q=e.get(D);q.position.setFromMatrixPosition(D.matrixWorld),q.color.copy(X).multiplyScalar(W),q.distance=V,q.coneCos=Math.cos(D.angle),q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),q.decay=D.decay,i.spot[x]=q;let ie=D.shadow;if(D.map&&(i.spotLightMap[L]=D.map,L++,ie.updateMatrices(D),D.castShadow&&w++),i.spotLightMatrix[x]=ie.matrix,D.castShadow){let Z=t.get(D);Z.shadowIntensity=ie.intensity,Z.shadowBias=ie.bias,Z.shadowNormalBias=ie.normalBias,Z.shadowRadius=ie.radius,Z.shadowMapSize=ie.mapSize,i.spotShadow[x]=Z,i.spotShadowMap[x]=K,y++}x++}else if(D.isRectAreaLight){let q=e.get(D);q.color.copy(X).multiplyScalar(W),q.halfWidth.set(D.width*.5,0,0),q.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=q,m++}else if(D.isPointLight){let q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),q.distance=D.distance,q.decay=D.decay,D.castShadow){let ie=D.shadow,Z=t.get(D);Z.shadowIntensity=ie.intensity,Z.shadowBias=ie.bias,Z.shadowNormalBias=ie.normalBias,Z.shadowRadius=ie.radius,Z.shadowMapSize=ie.mapSize,Z.shadowCameraNear=ie.camera.near,Z.shadowCameraFar=ie.camera.far,i.pointShadow[g]=Z,i.pointShadowMap[g]=K,i.pointShadowMatrix[g]=D.shadow.matrix,b++}i.point[g]=q,g++}else if(D.isHemisphereLight){let q=e.get(D);q.skyColor.copy(D.color).multiplyScalar(W),q.groundColor.copy(D.groundColor).multiplyScalar(W),i.hemi[p]=q,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let P=i.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==_||P.numPointShadows!==b||P.numSpotShadows!==y||P.numSpotMaps!==L||P.numLightProbes!==R)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=y+L-w,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=R,P.directionalLength=f,P.pointLength=g,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=_,P.numPointShadows=b,P.numSpotShadows=y,P.numSpotMaps=L,P.numLightProbes=R,i.version=hv++)}function l(c,h){let u=0,d=0,f=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,_=c.length;p<_;p++){let b=c[p];if(b.isDirectionalLight){let y=i.directional[u];y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(b.isSpotLight){let y=i.spot[f];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(b.isRectAreaLight){let y=i.rectArea[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){let y=i.point[d];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){let y=i.hemi[x];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function mf(n){let e=new dv(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function fv(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new mf(n),e.set(s,[a])):r>=o.length?(a=new mf(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var ph=class extends Ln{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=o0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},mh=class extends Ln{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},pv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function gv(n,e,t){let i=new Pr,s=new Ve,r=new Ve,o=new gt,a=new ph({depthPacking:a0}),l=new mh,c={},h=t.maxTextureSize,u={[ci]:hn,[hn]:ci,[sn]:sn},d=new qt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:pv,fragmentShader:mv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new pt;g.setAttribute("position",new At(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ne(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kf;let p=this.type;this.render=function(w,R,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let T=n.getRenderTarget(),v=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),X=n.state;X.setBlending(li),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);let W=p!==Ti&&this.type===Ti,V=p===Ti&&this.type!==Ti;for(let K=0,q=w.length;K<q;K++){let ie=w[K],Z=ie.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let me=Z.getFrameExtents();if(s.multiply(me),r.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/me.x),s.x=r.x*me.x,Z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/me.y),s.y=r.y*me.y,Z.mapSize.y=r.y)),Z.map===null||W===!0||V===!0){let Ie=this.type!==Ti?{minFilter:yn,magFilter:yn}:{};Z.map!==null&&Z.map.dispose(),Z.map=new un(s.x,s.y,Ie),Z.map.texture.name=ie.name+".shadowMap",Z.camera.updateProjectionMatrix()}n.setRenderTarget(Z.map),n.clear();let ye=Z.getViewportCount();for(let Ie=0;Ie<ye;Ie++){let Xe=Z.getViewport(Ie);o.set(r.x*Xe.x,r.y*Xe.y,r.x*Xe.z,r.y*Xe.w),X.viewport(o),Z.updateMatrices(ie,Ie),i=Z.getFrustum(),y(R,P,Z.camera,ie,this.type)}Z.isPointLightShadow!==!0&&this.type===Ti&&_(Z,P),Z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(T,v,D)};function _(w,R){let P=e.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new un(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(R,null,P,d,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(R,null,P,f,x,null)}function b(w,R,P,T){let v=null,D=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)v=D;else if(v=P.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let X=v.uuid,W=R.uuid,V=c[X];V===void 0&&(V={},c[X]=V);let K=V[W];K===void 0&&(K=v.clone(),V[W]=K,R.addEventListener("dispose",L)),v=K}if(v.visible=R.visible,v.wireframe=R.wireframe,T===Ti?v.side=R.shadowSide!==null?R.shadowSide:R.side:v.side=R.shadowSide!==null?R.shadowSide:u[R.side],v.alphaMap=R.alphaMap,v.alphaTest=R.alphaTest,v.map=R.map,v.clipShadows=R.clipShadows,v.clippingPlanes=R.clippingPlanes,v.clipIntersection=R.clipIntersection,v.displacementMap=R.displacementMap,v.displacementScale=R.displacementScale,v.displacementBias=R.displacementBias,v.wireframeLinewidth=R.wireframeLinewidth,v.linewidth=R.linewidth,P.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let X=n.properties.get(v);X.light=P}return v}function y(w,R,P,T,v){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===Ti)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);let W=e.update(w),V=w.material;if(Array.isArray(V)){let K=W.groups;for(let q=0,ie=K.length;q<ie;q++){let Z=K[q],me=V[Z.materialIndex];if(me&&me.visible){let ye=b(w,me,T,v);w.onBeforeShadow(n,w,R,P,W,ye,Z),n.renderBufferDirect(P,null,W,ye,w,Z),w.onAfterShadow(n,w,R,P,W,ye,Z)}}}else if(V.visible){let K=b(w,V,T,v);w.onBeforeShadow(n,w,R,P,W,K,null),n.renderBufferDirect(P,null,W,K,w,null),w.onAfterShadow(n,w,R,P,W,K,null)}}let X=w.children;for(let W=0,V=X.length;W<V;W++)y(X[W],R,P,T,v)}function L(w){w.target.removeEventListener("dispose",L);for(let P in c){let T=c[P],v=w.target.uuid;v in T&&(T[v].dispose(),delete T[v])}}}var xv={[Mc]:bc,[Tc]:wc,[Ec]:Ac,[br]:Sc,[bc]:Mc,[wc]:Tc,[Ac]:Ec,[Sc]:br};function yv(n,e){function t(){let B=!1,Me=new gt,ee=null,se=new gt(0,0,0,0);return{setMask:function(we){ee!==we&&!B&&(n.colorMask(we,we,we,we),ee=we)},setLocked:function(we){B=we},setClear:function(we,Te,Qe,Vt,fn){fn===!0&&(we*=Vt,Te*=Vt,Qe*=Vt),Me.set(we,Te,Qe,Vt),se.equals(Me)===!1&&(n.clearColor(we,Te,Qe,Vt),se.copy(Me))},reset:function(){B=!1,ee=null,se.set(-1,0,0,0)}}}function i(){let B=!1,Me=!1,ee=null,se=null,we=null;return{setReversed:function(Te){if(Me!==Te){let Qe=e.get("EXT_clip_control");Me?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT);let Vt=we;we=null,this.setClear(Vt)}Me=Te},getReversed:function(){return Me},setTest:function(Te){Te?ge(n.DEPTH_TEST):ze(n.DEPTH_TEST)},setMask:function(Te){ee!==Te&&!B&&(n.depthMask(Te),ee=Te)},setFunc:function(Te){if(Me&&(Te=xv[Te]),se!==Te){switch(Te){case Mc:n.depthFunc(n.NEVER);break;case bc:n.depthFunc(n.ALWAYS);break;case Tc:n.depthFunc(n.LESS);break;case br:n.depthFunc(n.LEQUAL);break;case Ec:n.depthFunc(n.EQUAL);break;case Sc:n.depthFunc(n.GEQUAL);break;case wc:n.depthFunc(n.GREATER);break;case Ac:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}se=Te}},setLocked:function(Te){B=Te},setClear:function(Te){we!==Te&&(Me&&(Te=1-Te),n.clearDepth(Te),we=Te)},reset:function(){B=!1,ee=null,se=null,we=null,Me=!1}}}function s(){let B=!1,Me=null,ee=null,se=null,we=null,Te=null,Qe=null,Vt=null,fn=null;return{setTest:function(St){B||(St?ge(n.STENCIL_TEST):ze(n.STENCIL_TEST))},setMask:function(St){Me!==St&&!B&&(n.stencilMask(St),Me=St)},setFunc:function(St,$n,mi){(ee!==St||se!==$n||we!==mi)&&(n.stencilFunc(St,$n,mi),ee=St,se=$n,we=mi)},setOp:function(St,$n,mi){(Te!==St||Qe!==$n||Vt!==mi)&&(n.stencilOp(St,$n,mi),Te=St,Qe=$n,Vt=mi)},setLocked:function(St){B=St},setClear:function(St){fn!==St&&(n.clearStencil(St),fn=St)},reset:function(){B=!1,Me=null,ee=null,se=null,we=null,Te=null,Qe=null,Vt=null,fn=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,_=null,b=null,y=null,L=null,w=null,R=new ve(0,0,0),P=0,T=!1,v=null,D=null,X=null,W=null,V=null,K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,ie=0,Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(Z)[1]),q=ie>=1):Z.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),q=ie>=2);let me=null,ye={},Ie=n.getParameter(n.SCISSOR_BOX),Xe=n.getParameter(n.VIEWPORT),ut=new gt().fromArray(Ie),te=new gt().fromArray(Xe);function ce(B,Me,ee,se){let we=new Uint8Array(4),Te=n.createTexture();n.bindTexture(B,Te),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Qe=0;Qe<ee;Qe++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(Me,0,n.RGBA,1,1,se,0,n.RGBA,n.UNSIGNED_BYTE,we):n.texImage2D(Me+Qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,we);return Te}let Ce={};Ce[n.TEXTURE_2D]=ce(n.TEXTURE_2D,n.TEXTURE_2D,1),Ce[n.TEXTURE_CUBE_MAP]=ce(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ce[n.TEXTURE_2D_ARRAY]=ce(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ce[n.TEXTURE_3D]=ce(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ge(n.DEPTH_TEST),o.setFunc(br),xe(!1),Oe(gd),ge(n.CULL_FACE),I(li);function ge(B){h[B]!==!0&&(n.enable(B),h[B]=!0)}function ze(B){h[B]!==!1&&(n.disable(B),h[B]=!1)}function Ye(B,Me){return u[B]!==Me?(n.bindFramebuffer(B,Me),u[B]=Me,B===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Me),B===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Me),!0):!1}function O(B,Me){let ee=f,se=!1;if(B){ee=d.get(Me),ee===void 0&&(ee=[],d.set(Me,ee));let we=B.textures;if(ee.length!==we.length||ee[0]!==n.COLOR_ATTACHMENT0){for(let Te=0,Qe=we.length;Te<Qe;Te++)ee[Te]=n.COLOR_ATTACHMENT0+Te;ee.length=we.length,se=!0}}else ee[0]!==n.BACK&&(ee[0]=n.BACK,se=!0);se&&n.drawBuffers(ee)}function J(B){return g!==B?(n.useProgram(B),g=B,!0):!1}let j={[Ns]:n.FUNC_ADD,[Bm]:n.FUNC_SUBTRACT,[km]:n.FUNC_REVERSE_SUBTRACT};j[Hm]=n.MIN,j[zm]=n.MAX;let he={[Vm]:n.ZERO,[Gm]:n.ONE,[Wm]:n.SRC_COLOR,[_c]:n.SRC_ALPHA,[Km]:n.SRC_ALPHA_SATURATE,[$m]:n.DST_COLOR,[qm]:n.DST_ALPHA,[Xm]:n.ONE_MINUS_SRC_COLOR,[vc]:n.ONE_MINUS_SRC_ALPHA,[Zm]:n.ONE_MINUS_DST_COLOR,[Ym]:n.ONE_MINUS_DST_ALPHA,[jm]:n.CONSTANT_COLOR,[Jm]:n.ONE_MINUS_CONSTANT_COLOR,[Qm]:n.CONSTANT_ALPHA,[e0]:n.ONE_MINUS_CONSTANT_ALPHA};function I(B,Me,ee,se,we,Te,Qe,Vt,fn,St){if(B===li){x===!0&&(ze(n.BLEND),x=!1);return}if(x===!1&&(ge(n.BLEND),x=!0),B!==Fm){if(B!==m||St!==T){if((p!==Ns||y!==Ns)&&(n.blendEquation(n.FUNC_ADD),p=Ns,y=Ns),St)switch(B){case yr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _n:n.blendFunc(n.ONE,n.ONE);break;case xd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yd:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case yr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _n:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case xd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yd:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}_=null,b=null,L=null,w=null,R.set(0,0,0),P=0,m=B,T=St}return}we=we||Me,Te=Te||ee,Qe=Qe||se,(Me!==p||we!==y)&&(n.blendEquationSeparate(j[Me],j[we]),p=Me,y=we),(ee!==_||se!==b||Te!==L||Qe!==w)&&(n.blendFuncSeparate(he[ee],he[se],he[Te],he[Qe]),_=ee,b=se,L=Te,w=Qe),(Vt.equals(R)===!1||fn!==P)&&(n.blendColor(Vt.r,Vt.g,Vt.b,fn),R.copy(Vt),P=fn),m=B,T=!1}function Pe(B,Me){B.side===sn?ze(n.CULL_FACE):ge(n.CULL_FACE);let ee=B.side===hn;Me&&(ee=!ee),xe(ee),B.blending===yr&&B.transparent===!1?I(li):I(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);let se=B.stencilWrite;a.setTest(se),se&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ct(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ge(n.SAMPLE_ALPHA_TO_COVERAGE):ze(n.SAMPLE_ALPHA_TO_COVERAGE)}function xe(B){v!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),v=B)}function Oe(B){B!==Um?(ge(n.CULL_FACE),B!==D&&(B===gd?n.cullFace(n.BACK):B===Om?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ze(n.CULL_FACE),D=B}function be(B){B!==X&&(q&&n.lineWidth(B),X=B)}function ct(B,Me,ee){B?(ge(n.POLYGON_OFFSET_FILL),(W!==Me||V!==ee)&&(n.polygonOffset(Me,ee),W=Me,V=ee)):ze(n.POLYGON_OFFSET_FILL)}function Le(B){B?ge(n.SCISSOR_TEST):ze(n.SCISSOR_TEST)}function A(B){B===void 0&&(B=n.TEXTURE0+K-1),me!==B&&(n.activeTexture(B),me=B)}function M(B,Me,ee){ee===void 0&&(me===null?ee=n.TEXTURE0+K-1:ee=me);let se=ye[ee];se===void 0&&(se={type:void 0,texture:void 0},ye[ee]=se),(se.type!==B||se.texture!==Me)&&(me!==ee&&(n.activeTexture(ee),me=ee),n.bindTexture(B,Me||Ce[B]),se.type=B,se.texture=Me)}function G(){let B=ye[me];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function C(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function F(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function H(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function re(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function oe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Je(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ae(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Se(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ze(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ke(B){ut.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),ut.copy(B))}function Ne(B){te.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),te.copy(B))}function dt(B,Me){let ee=c.get(Me);ee===void 0&&(ee=new WeakMap,c.set(Me,ee));let se=ee.get(B);se===void 0&&(se=n.getUniformBlockIndex(Me,B.name),ee.set(B,se))}function nt(B,Me){let se=c.get(Me).get(B);l.get(Me)!==se&&(n.uniformBlockBinding(Me,se,B.__bindingPointIndex),l.set(Me,se))}function Pt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},me=null,ye={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,_=null,b=null,y=null,L=null,w=null,R=new ve(0,0,0),P=0,T=!1,v=null,D=null,X=null,W=null,V=null,ut.set(0,0,n.canvas.width,n.canvas.height),te.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ge,disable:ze,bindFramebuffer:Ye,drawBuffers:O,useProgram:J,setBlending:I,setMaterial:Pe,setFlipSided:xe,setCullFace:Oe,setLineWidth:be,setPolygonOffset:ct,setScissorTest:Le,activeTexture:A,bindTexture:M,unbindTexture:G,compressedTexImage2D:C,compressedTexImage3D:F,texImage2D:Se,texImage3D:Ze,updateUBOMapping:dt,uniformBlockBinding:nt,texStorage2D:Je,texStorage3D:ae,texSubImage2D:H,texSubImage3D:re,compressedTexSubImage2D:oe,compressedTexSubImage3D:pe,scissor:Ke,viewport:Ne,reset:Pt}}function gf(n,e,t,i){let s=_v(i);switch(t){case Wf:return n*e;case qf:return n*e;case Yf:return n*e*2;case Xh:return n*e/s.components*s.byteLength;case al:return n*e/s.components*s.byteLength;case $f:return n*e*2/s.components*s.byteLength;case qh:return n*e*2/s.components*s.byteLength;case Xf:return n*e*3/s.components*s.byteLength;case In:return n*e*4/s.components*s.byteLength;case Yh:return n*e*4/s.components*s.byteLength;case Ia:case Pa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case La:case Da:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Pc:case Dc:return Math.max(n,16)*Math.max(e,8)/4;case Ic:case Lc:return Math.max(n,8)*Math.max(e,8)/2;case Nc:case Uc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Oc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case kc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Hc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case zc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Vc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Gc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Wc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Xc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case qc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Yc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case $c:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Zc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Kc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Na:case jc:case Jc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Zf:case Qc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case eh:case th:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _v(n){switch(n){case Ri:case zf:return{byteLength:1,components:1};case yo:case Vf:case kn:return{byteLength:2,components:1};case Gh:case Wh:return{byteLength:2,components:4};case es:case Vh:case Fn:return{byteLength:4,components:1};case Gf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function vv(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ve,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,M){return f?new OffscreenCanvas(A,M):_o("canvas")}function x(A,M,G){let C=1,F=Le(A);if((F.width>G||F.height>G)&&(C=G/Math.max(F.width,F.height)),C<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let H=Math.floor(C*F.width),re=Math.floor(C*F.height);u===void 0&&(u=g(H,re));let oe=M?g(H,re):u;return oe.width=H,oe.height=re,oe.getContext("2d").drawImage(A,0,0,H,re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+F.width+"x"+F.height+") to ("+H+"x"+re+")."),oe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+F.width+"x"+F.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){n.generateMipmap(A)}function _(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(A,M,G,C,F=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let H=M;if(M===n.RED&&(G===n.FLOAT&&(H=n.R32F),G===n.HALF_FLOAT&&(H=n.R16F),G===n.UNSIGNED_BYTE&&(H=n.R8)),M===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(H=n.R8UI),G===n.UNSIGNED_SHORT&&(H=n.R16UI),G===n.UNSIGNED_INT&&(H=n.R32UI),G===n.BYTE&&(H=n.R8I),G===n.SHORT&&(H=n.R16I),G===n.INT&&(H=n.R32I)),M===n.RG&&(G===n.FLOAT&&(H=n.RG32F),G===n.HALF_FLOAT&&(H=n.RG16F),G===n.UNSIGNED_BYTE&&(H=n.RG8)),M===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(H=n.RG8UI),G===n.UNSIGNED_SHORT&&(H=n.RG16UI),G===n.UNSIGNED_INT&&(H=n.RG32UI),G===n.BYTE&&(H=n.RG8I),G===n.SHORT&&(H=n.RG16I),G===n.INT&&(H=n.RG32I)),M===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(H=n.RGB8UI),G===n.UNSIGNED_SHORT&&(H=n.RGB16UI),G===n.UNSIGNED_INT&&(H=n.RGB32UI),G===n.BYTE&&(H=n.RGB8I),G===n.SHORT&&(H=n.RGB16I),G===n.INT&&(H=n.RGB32I)),M===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(H=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(H=n.RGBA16UI),G===n.UNSIGNED_INT&&(H=n.RGBA32UI),G===n.BYTE&&(H=n.RGBA8I),G===n.SHORT&&(H=n.RGBA16I),G===n.INT&&(H=n.RGBA32I)),M===n.RGB&&G===n.UNSIGNED_INT_5_9_9_9_REV&&(H=n.RGB9_E5),M===n.RGBA){let re=F?cl:st.getTransfer(C);G===n.FLOAT&&(H=n.RGBA32F),G===n.HALF_FLOAT&&(H=n.RGBA16F),G===n.UNSIGNED_BYTE&&(H=re===bt?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(H=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(H=n.RGB5_A1)}return(H===n.R16F||H===n.R32F||H===n.RG16F||H===n.RG32F||H===n.RGBA16F||H===n.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function y(A,M){let G;return A?M===null||M===es||M===Sr?G=n.DEPTH24_STENCIL8:M===Fn?G=n.DEPTH32F_STENCIL8:M===yo&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===es||M===Sr?G=n.DEPTH_COMPONENT24:M===Fn?G=n.DEPTH_COMPONENT32F:M===yo&&(G=n.DEPTH_COMPONENT16),G}function L(A,M){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==yn&&A.minFilter!==Cn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function w(A){let M=A.target;M.removeEventListener("dispose",w),P(M),M.isVideoTexture&&h.delete(M)}function R(A){let M=A.target;M.removeEventListener("dispose",R),v(M)}function P(A){let M=i.get(A);if(M.__webglInit===void 0)return;let G=A.source,C=d.get(G);if(C){let F=C[M.__cacheKey];F.usedTimes--,F.usedTimes===0&&T(A),Object.keys(C).length===0&&d.delete(G)}i.remove(A)}function T(A){let M=i.get(A);n.deleteTexture(M.__webglTexture);let G=A.source,C=d.get(G);delete C[M.__cacheKey],o.memory.textures--}function v(A){let M=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let C=0;C<6;C++){if(Array.isArray(M.__webglFramebuffer[C]))for(let F=0;F<M.__webglFramebuffer[C].length;F++)n.deleteFramebuffer(M.__webglFramebuffer[C][F]);else n.deleteFramebuffer(M.__webglFramebuffer[C]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[C])}else{if(Array.isArray(M.__webglFramebuffer))for(let C=0;C<M.__webglFramebuffer.length;C++)n.deleteFramebuffer(M.__webglFramebuffer[C]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let C=0;C<M.__webglColorRenderbuffer.length;C++)M.__webglColorRenderbuffer[C]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[C]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let G=A.textures;for(let C=0,F=G.length;C<F;C++){let H=i.get(G[C]);H.__webglTexture&&(n.deleteTexture(H.__webglTexture),o.memory.textures--),i.remove(G[C])}i.remove(A)}let D=0;function X(){D=0}function W(){let A=D;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),D+=1,A}function V(A){let M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function K(A,M){let G=i.get(A);if(A.isVideoTexture&&be(A),A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){let C=A.image;if(C===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(C.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(G,A,M);return}}t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+M)}function q(A,M){let G=i.get(A);if(A.version>0&&G.__version!==A.version){te(G,A,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+M)}function ie(A,M){let G=i.get(A);if(A.version>0&&G.__version!==A.version){te(G,A,M);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+M)}function Z(A,M){let G=i.get(A);if(A.version>0&&G.__version!==A.version){ce(G,A,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+M)}let me={[Ai]:n.REPEAT,[Rn]:n.CLAMP_TO_EDGE,[xo]:n.MIRRORED_REPEAT},ye={[yn]:n.NEAREST,[zh]:n.NEAREST_MIPMAP_NEAREST,[gr]:n.NEAREST_MIPMAP_LINEAR,[Cn]:n.LINEAR,[fo]:n.LINEAR_MIPMAP_NEAREST,[ai]:n.LINEAR_MIPMAP_LINEAR},Ie={[c0]:n.NEVER,[m0]:n.ALWAYS,[h0]:n.LESS,[jf]:n.LEQUAL,[u0]:n.EQUAL,[p0]:n.GEQUAL,[d0]:n.GREATER,[f0]:n.NOTEQUAL};function Xe(A,M){if(M.type===Fn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Cn||M.magFilter===fo||M.magFilter===gr||M.magFilter===ai||M.minFilter===Cn||M.minFilter===fo||M.minFilter===gr||M.minFilter===ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,me[M.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,me[M.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,me[M.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,ye[M.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,ye[M.minFilter]),M.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,Ie[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===yn||M.minFilter!==gr&&M.minFilter!==ai||M.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function ut(A,M){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",w));let C=M.source,F=d.get(C);F===void 0&&(F={},d.set(C,F));let H=V(M);if(H!==A.__cacheKey){F[H]===void 0&&(F[H]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),F[H].usedTimes++;let re=F[A.__cacheKey];re!==void 0&&(F[A.__cacheKey].usedTimes--,re.usedTimes===0&&T(M)),A.__cacheKey=H,A.__webglTexture=F[H].texture}return G}function te(A,M,G){let C=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(C=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(C=n.TEXTURE_3D);let F=ut(A,M),H=M.source;t.bindTexture(C,A.__webglTexture,n.TEXTURE0+G);let re=i.get(H);if(H.version!==re.__version||F===!0){t.activeTexture(n.TEXTURE0+G);let oe=st.getPrimaries(st.workingColorSpace),pe=M.colorSpace===ji?null:st.getPrimaries(M.colorSpace),Je=M.colorSpace===ji||oe===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);let ae=x(M.image,!1,s.maxTextureSize);ae=ct(M,ae);let Se=r.convert(M.format,M.colorSpace),Ze=r.convert(M.type),Ke=b(M.internalFormat,Se,Ze,M.colorSpace,M.isVideoTexture);Xe(C,M);let Ne,dt=M.mipmaps,nt=M.isVideoTexture!==!0,Pt=re.__version===void 0||F===!0,B=H.dataReady,Me=L(M,ae);if(M.isDepthTexture)Ke=y(M.format===wr,M.type),Pt&&(nt?t.texStorage2D(n.TEXTURE_2D,1,Ke,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,Ke,ae.width,ae.height,0,Se,Ze,null));else if(M.isDataTexture)if(dt.length>0){nt&&Pt&&t.texStorage2D(n.TEXTURE_2D,Me,Ke,dt[0].width,dt[0].height);for(let ee=0,se=dt.length;ee<se;ee++)Ne=dt[ee],nt?B&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,Ne.width,Ne.height,Se,Ze,Ne.data):t.texImage2D(n.TEXTURE_2D,ee,Ke,Ne.width,Ne.height,0,Se,Ze,Ne.data);M.generateMipmaps=!1}else nt?(Pt&&t.texStorage2D(n.TEXTURE_2D,Me,Ke,ae.width,ae.height),B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae.width,ae.height,Se,Ze,ae.data)):t.texImage2D(n.TEXTURE_2D,0,Ke,ae.width,ae.height,0,Se,Ze,ae.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){nt&&Pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Me,Ke,dt[0].width,dt[0].height,ae.depth);for(let ee=0,se=dt.length;ee<se;ee++)if(Ne=dt[ee],M.format!==In)if(Se!==null)if(nt){if(B)if(M.layerUpdates.size>0){let we=gf(Ne.width,Ne.height,M.format,M.type);for(let Te of M.layerUpdates){let Qe=Ne.data.subarray(Te*we/Ne.data.BYTES_PER_ELEMENT,(Te+1)*we/Ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,Te,Ne.width,Ne.height,1,Se,Qe)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,Ne.width,Ne.height,ae.depth,Se,Ne.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ee,Ke,Ne.width,Ne.height,ae.depth,0,Ne.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?B&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,Ne.width,Ne.height,ae.depth,Se,Ze,Ne.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ee,Ke,Ne.width,Ne.height,ae.depth,0,Se,Ze,Ne.data)}else{nt&&Pt&&t.texStorage2D(n.TEXTURE_2D,Me,Ke,dt[0].width,dt[0].height);for(let ee=0,se=dt.length;ee<se;ee++)Ne=dt[ee],M.format!==In?Se!==null?nt?B&&t.compressedTexSubImage2D(n.TEXTURE_2D,ee,0,0,Ne.width,Ne.height,Se,Ne.data):t.compressedTexImage2D(n.TEXTURE_2D,ee,Ke,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?B&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,Ne.width,Ne.height,Se,Ze,Ne.data):t.texImage2D(n.TEXTURE_2D,ee,Ke,Ne.width,Ne.height,0,Se,Ze,Ne.data)}else if(M.isDataArrayTexture)if(nt){if(Pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Me,Ke,ae.width,ae.height,ae.depth),B)if(M.layerUpdates.size>0){let ee=gf(ae.width,ae.height,M.format,M.type);for(let se of M.layerUpdates){let we=ae.data.subarray(se*ee/ae.data.BYTES_PER_ELEMENT,(se+1)*ee/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,se,ae.width,ae.height,1,Se,Ze,we)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Se,Ze,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ke,ae.width,ae.height,ae.depth,0,Se,Ze,ae.data);else if(M.isData3DTexture)nt?(Pt&&t.texStorage3D(n.TEXTURE_3D,Me,Ke,ae.width,ae.height,ae.depth),B&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Se,Ze,ae.data)):t.texImage3D(n.TEXTURE_3D,0,Ke,ae.width,ae.height,ae.depth,0,Se,Ze,ae.data);else if(M.isFramebufferTexture){if(Pt)if(nt)t.texStorage2D(n.TEXTURE_2D,Me,Ke,ae.width,ae.height);else{let ee=ae.width,se=ae.height;for(let we=0;we<Me;we++)t.texImage2D(n.TEXTURE_2D,we,Ke,ee,se,0,Se,Ze,null),ee>>=1,se>>=1}}else if(dt.length>0){if(nt&&Pt){let ee=Le(dt[0]);t.texStorage2D(n.TEXTURE_2D,Me,Ke,ee.width,ee.height)}for(let ee=0,se=dt.length;ee<se;ee++)Ne=dt[ee],nt?B&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,Se,Ze,Ne):t.texImage2D(n.TEXTURE_2D,ee,Ke,Se,Ze,Ne);M.generateMipmaps=!1}else if(nt){if(Pt){let ee=Le(ae);t.texStorage2D(n.TEXTURE_2D,Me,Ke,ee.width,ee.height)}B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,Ze,ae)}else t.texImage2D(n.TEXTURE_2D,0,Ke,Se,Ze,ae);m(M)&&p(C),re.__version=H.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function ce(A,M,G){if(M.image.length!==6)return;let C=ut(A,M),F=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+G);let H=i.get(F);if(F.version!==H.__version||C===!0){t.activeTexture(n.TEXTURE0+G);let re=st.getPrimaries(st.workingColorSpace),oe=M.colorSpace===ji?null:st.getPrimaries(M.colorSpace),pe=M.colorSpace===ji||re===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let Je=M.isCompressedTexture||M.image[0].isCompressedTexture,ae=M.image[0]&&M.image[0].isDataTexture,Se=[];for(let se=0;se<6;se++)!Je&&!ae?Se[se]=x(M.image[se],!0,s.maxCubemapSize):Se[se]=ae?M.image[se].image:M.image[se],Se[se]=ct(M,Se[se]);let Ze=Se[0],Ke=r.convert(M.format,M.colorSpace),Ne=r.convert(M.type),dt=b(M.internalFormat,Ke,Ne,M.colorSpace),nt=M.isVideoTexture!==!0,Pt=H.__version===void 0||C===!0,B=F.dataReady,Me=L(M,Ze);Xe(n.TEXTURE_CUBE_MAP,M);let ee;if(Je){nt&&Pt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,dt,Ze.width,Ze.height);for(let se=0;se<6;se++){ee=Se[se].mipmaps;for(let we=0;we<ee.length;we++){let Te=ee[we];M.format!==In?Ke!==null?nt?B&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,we,0,0,Te.width,Te.height,Ke,Te.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,we,dt,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,we,0,0,Te.width,Te.height,Ke,Ne,Te.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,we,dt,Te.width,Te.height,0,Ke,Ne,Te.data)}}}else{if(ee=M.mipmaps,nt&&Pt){ee.length>0&&Me++;let se=Le(Se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,dt,se.width,se.height)}for(let se=0;se<6;se++)if(ae){nt?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Se[se].width,Se[se].height,Ke,Ne,Se[se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,dt,Se[se].width,Se[se].height,0,Ke,Ne,Se[se].data);for(let we=0;we<ee.length;we++){let Qe=ee[we].image[se].image;nt?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,we+1,0,0,Qe.width,Qe.height,Ke,Ne,Qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,we+1,dt,Qe.width,Qe.height,0,Ke,Ne,Qe.data)}}else{nt?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ke,Ne,Se[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,dt,Ke,Ne,Se[se]);for(let we=0;we<ee.length;we++){let Te=ee[we];nt?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,we+1,0,0,Ke,Ne,Te.image[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,we+1,dt,Ke,Ne,Te.image[se])}}}m(M)&&p(n.TEXTURE_CUBE_MAP),H.__version=F.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Ce(A,M,G,C,F,H){let re=r.convert(G.format,G.colorSpace),oe=r.convert(G.type),pe=b(G.internalFormat,re,oe,G.colorSpace),Je=i.get(M),ae=i.get(G);if(ae.__renderTarget=M,!Je.__hasExternalTextures){let Se=Math.max(1,M.width>>H),Ze=Math.max(1,M.height>>H);F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?t.texImage3D(F,H,pe,Se,Ze,M.depth,0,re,oe,null):t.texImage2D(F,H,pe,Se,Ze,0,re,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),Oe(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,C,F,ae.__webglTexture,0,xe(M)):(F===n.TEXTURE_2D||F>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&F<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,C,F,ae.__webglTexture,H),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ge(A,M,G){if(n.bindRenderbuffer(n.RENDERBUFFER,A),M.depthBuffer){let C=M.depthTexture,F=C&&C.isDepthTexture?C.type:null,H=y(M.stencilBuffer,F),re=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=xe(M);Oe(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,H,M.width,M.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,H,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,H,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,A)}else{let C=M.textures;for(let F=0;F<C.length;F++){let H=C[F],re=r.convert(H.format,H.colorSpace),oe=r.convert(H.type),pe=b(H.internalFormat,re,oe,H.colorSpace),Je=xe(M);G&&Oe(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Je,pe,M.width,M.height):Oe(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Je,pe,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,pe,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ze(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let C=i.get(M.depthTexture);C.__renderTarget=M,(!C.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),K(M.depthTexture,0);let F=C.__webglTexture,H=xe(M);if(M.depthTexture.format===_r)Oe(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,F,0,H):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,F,0);else if(M.depthTexture.format===wr)Oe(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,F,0,H):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,F,0);else throw new Error("Unknown depthTexture format")}function Ye(A){let M=i.get(A),G=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){let C=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),C){let F=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,C.removeEventListener("dispose",F)};C.addEventListener("dispose",F),M.__depthDisposeCallback=F}M.__boundDepthTexture=C}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ze(M.__webglFramebuffer,A)}else if(G){M.__webglDepthbuffer=[];for(let C=0;C<6;C++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[C]),M.__webglDepthbuffer[C]===void 0)M.__webglDepthbuffer[C]=n.createRenderbuffer(),ge(M.__webglDepthbuffer[C],A,!1);else{let F=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=M.__webglDepthbuffer[C];n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,F,n.RENDERBUFFER,H)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),ge(M.__webglDepthbuffer,A,!1);else{let C=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,F=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,F),n.framebufferRenderbuffer(n.FRAMEBUFFER,C,n.RENDERBUFFER,F)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function O(A,M,G){let C=i.get(A);M!==void 0&&Ce(C.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&Ye(A)}function J(A){let M=A.texture,G=i.get(A),C=i.get(M);A.addEventListener("dispose",R);let F=A.textures,H=A.isWebGLCubeRenderTarget===!0,re=F.length>1;if(re||(C.__webglTexture===void 0&&(C.__webglTexture=n.createTexture()),C.__version=M.version,o.memory.textures++),H){G.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[oe]=[];for(let pe=0;pe<M.mipmaps.length;pe++)G.__webglFramebuffer[oe][pe]=n.createFramebuffer()}else G.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let oe=0;oe<M.mipmaps.length;oe++)G.__webglFramebuffer[oe]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(re)for(let oe=0,pe=F.length;oe<pe;oe++){let Je=i.get(F[oe]);Je.__webglTexture===void 0&&(Je.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&Oe(A)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let oe=0;oe<F.length;oe++){let pe=F[oe];G.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[oe]);let Je=r.convert(pe.format,pe.colorSpace),ae=r.convert(pe.type),Se=b(pe.internalFormat,Je,ae,pe.colorSpace,A.isXRRenderTarget===!0),Ze=xe(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ze,Se,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,G.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),ge(G.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(H){t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture),Xe(n.TEXTURE_CUBE_MAP,M);for(let oe=0;oe<6;oe++)if(M.mipmaps&&M.mipmaps.length>0)for(let pe=0;pe<M.mipmaps.length;pe++)Ce(G.__webglFramebuffer[oe][pe],A,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,pe);else Ce(G.__webglFramebuffer[oe],A,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(M)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){for(let oe=0,pe=F.length;oe<pe;oe++){let Je=F[oe],ae=i.get(Je);t.bindTexture(n.TEXTURE_2D,ae.__webglTexture),Xe(n.TEXTURE_2D,Je),Ce(G.__webglFramebuffer,A,Je,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,0),m(Je)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(oe=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,C.__webglTexture),Xe(oe,M),M.mipmaps&&M.mipmaps.length>0)for(let pe=0;pe<M.mipmaps.length;pe++)Ce(G.__webglFramebuffer[pe],A,M,n.COLOR_ATTACHMENT0,oe,pe);else Ce(G.__webglFramebuffer,A,M,n.COLOR_ATTACHMENT0,oe,0);m(M)&&p(oe),t.unbindTexture()}A.depthBuffer&&Ye(A)}function j(A){let M=A.textures;for(let G=0,C=M.length;G<C;G++){let F=M[G];if(m(F)){let H=_(A),re=i.get(F).__webglTexture;t.bindTexture(H,re),p(H),t.unbindTexture()}}}let he=[],I=[];function Pe(A){if(A.samples>0){if(Oe(A)===!1){let M=A.textures,G=A.width,C=A.height,F=n.COLOR_BUFFER_BIT,H=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=i.get(A),oe=M.length>1;if(oe)for(let pe=0;pe<M.length;pe++)t.bindFramebuffer(n.FRAMEBUFFER,re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let pe=0;pe<M.length;pe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(F|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(F|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,re.__webglColorRenderbuffer[pe]);let Je=i.get(M[pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Je,0)}n.blitFramebuffer(0,0,G,C,0,0,G,C,F,n.NEAREST),l===!0&&(he.length=0,I.length=0,he.push(n.COLOR_ATTACHMENT0+pe),A.depthBuffer&&A.resolveDepthBuffer===!1&&(he.push(H),I.push(H),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,I)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,he))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let pe=0;pe<M.length;pe++){t.bindFramebuffer(n.FRAMEBUFFER,re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,re.__webglColorRenderbuffer[pe]);let Je=i.get(M[pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,Je,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let M=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function xe(A){return Math.min(s.maxSamples,A.samples)}function Oe(A){let M=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function be(A){let M=o.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function ct(A,M){let G=A.colorSpace,C=A.format,F=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==Mn&&G!==ji&&(st.getTransfer(G)===bt?(C!==In||F!==Ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),M}function Le(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=X,this.setTexture2D=K,this.setTexture2DArray=q,this.setTexture3D=ie,this.setTextureCube=Z,this.rebindTextures=O,this.setupRenderTarget=J,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=Oe}function Mv(n,e){function t(i,s=ji){let r,o=st.getTransfer(s);if(i===Ri)return n.UNSIGNED_BYTE;if(i===Gh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Wh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Gf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===zf)return n.BYTE;if(i===Vf)return n.SHORT;if(i===yo)return n.UNSIGNED_SHORT;if(i===Vh)return n.INT;if(i===es)return n.UNSIGNED_INT;if(i===Fn)return n.FLOAT;if(i===kn)return n.HALF_FLOAT;if(i===Wf)return n.ALPHA;if(i===Xf)return n.RGB;if(i===In)return n.RGBA;if(i===qf)return n.LUMINANCE;if(i===Yf)return n.LUMINANCE_ALPHA;if(i===_r)return n.DEPTH_COMPONENT;if(i===wr)return n.DEPTH_STENCIL;if(i===Xh)return n.RED;if(i===al)return n.RED_INTEGER;if(i===$f)return n.RG;if(i===qh)return n.RG_INTEGER;if(i===Yh)return n.RGBA_INTEGER;if(i===Ia||i===Pa||i===La||i===Da)if(o===bt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ia)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===La)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ia)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Pa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===La)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Da)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ic||i===Pc||i===Lc||i===Dc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ic)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Pc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Lc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Dc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Nc||i===Uc||i===Oc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Nc||i===Uc)return o===bt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Oc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Fc||i===Bc||i===kc||i===Hc||i===zc||i===Vc||i===Gc||i===Wc||i===Xc||i===qc||i===Yc||i===$c||i===Zc||i===Kc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Fc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Bc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===kc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Hc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===zc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Vc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Gc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Wc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Xc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===qc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Yc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===$c)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Zc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Kc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Na||i===jc||i===Jc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Na)return o===bt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===jc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Jc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Zf||i===Qc||i===eh||i===th)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Na)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Qc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===eh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===th)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Sr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var gh=class extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ue=class extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}},bv={type:"move"},go=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ue,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ue,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ue,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bv)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Ue;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Tv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ev=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,xh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let s=new on,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new qt({vertexShader:Tv,fragmentShader:Ev,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ne(new an(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yh=class extends ts{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,x=new xh,m=t.getContextAttributes(),p=null,_=null,b=[],y=[],L=new Ve,w=null,R=new Xt;R.viewport=new gt;let P=new Xt;P.viewport=new gt;let T=[R,P],v=new gh,D=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ce=b[te];return ce===void 0&&(ce=new go,b[te]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(te){let ce=b[te];return ce===void 0&&(ce=new go,b[te]=ce),ce.getGripSpace()},this.getHand=function(te){let ce=b[te];return ce===void 0&&(ce=new go,b[te]=ce),ce.getHandSpace()};function W(te){let ce=y.indexOf(te.inputSource);if(ce===-1)return;let Ce=b[ce];Ce!==void 0&&(Ce.update(te.inputSource,te.frame,c||o),Ce.dispatchEvent({type:te.type,data:te.inputSource}))}function V(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",K);for(let te=0;te<b.length;te++){let ce=y[te];ce!==null&&(y[te]=null,b[te].disconnect(ce))}D=null,X=null,x.reset(),e.setRenderTarget(p),f=null,d=null,u=null,s=null,_=null,ut.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",V),s.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(L),s.renderState.layers===void 0){let ce={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ce),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new un(f.framebufferWidth,f.framebufferHeight,{format:In,type:Ri,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ce=null,Ce=null,ge=null;m.depth&&(ge=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=m.stencil?wr:_r,Ce=m.stencil?Sr:es);let ze={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(ze),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new un(d.textureWidth,d.textureHeight,{format:In,type:Ri,depthTexture:new Va(d.textureWidth,d.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ut.setContext(s),ut.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function K(te){for(let ce=0;ce<te.removed.length;ce++){let Ce=te.removed[ce],ge=y.indexOf(Ce);ge>=0&&(y[ge]=null,b[ge].disconnect(Ce))}for(let ce=0;ce<te.added.length;ce++){let Ce=te.added[ce],ge=y.indexOf(Ce);if(ge===-1){for(let Ye=0;Ye<b.length;Ye++)if(Ye>=y.length){y.push(Ce),ge=Ye;break}else if(y[Ye]===null){y[Ye]=Ce,ge=Ye;break}if(ge===-1)break}let ze=b[ge];ze&&ze.connect(Ce)}}let q=new U,ie=new U;function Z(te,ce,Ce){q.setFromMatrixPosition(ce.matrixWorld),ie.setFromMatrixPosition(Ce.matrixWorld);let ge=q.distanceTo(ie),ze=ce.projectionMatrix.elements,Ye=Ce.projectionMatrix.elements,O=ze[14]/(ze[10]-1),J=ze[14]/(ze[10]+1),j=(ze[9]+1)/ze[5],he=(ze[9]-1)/ze[5],I=(ze[8]-1)/ze[0],Pe=(Ye[8]+1)/Ye[0],xe=O*I,Oe=O*Pe,be=ge/(-I+Pe),ct=be*-I;if(ce.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(ct),te.translateZ(be),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),ze[10]===-1)te.projectionMatrix.copy(ce.projectionMatrix),te.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{let Le=O+be,A=J+be,M=xe-ct,G=Oe+(ge-ct),C=j*J/A*Le,F=he*J/A*Le;te.projectionMatrix.makePerspective(M,G,C,F,Le,A),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function me(te,ce){ce===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ce.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;let ce=te.near,Ce=te.far;x.texture!==null&&(x.depthNear>0&&(ce=x.depthNear),x.depthFar>0&&(Ce=x.depthFar)),v.near=P.near=R.near=ce,v.far=P.far=R.far=Ce,(D!==v.near||X!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),D=v.near,X=v.far),R.layers.mask=te.layers.mask|2,P.layers.mask=te.layers.mask|4,v.layers.mask=R.layers.mask|P.layers.mask;let ge=te.parent,ze=v.cameras;me(v,ge);for(let Ye=0;Ye<ze.length;Ye++)me(ze[Ye],ge);ze.length===2?Z(v,R,P):v.projectionMatrix.copy(R.projectionMatrix),ye(te,v,ge)};function ye(te,ce,Ce){Ce===null?te.matrix.copy(ce.matrixWorld):(te.matrix.copy(Ce.matrixWorld),te.matrix.invert(),te.matrix.multiply(ce.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ce.projectionMatrix),te.projectionMatrixInverse.copy(ce.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Cr*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(te){l=te,d!==null&&(d.fixedFoveation=te),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=te)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(v)};let Ie=null;function Xe(te,ce){if(h=ce.getViewerPose(c||o),g=ce,h!==null){let Ce=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let ge=!1;Ce.length!==v.cameras.length&&(v.cameras.length=0,ge=!0);for(let Ye=0;Ye<Ce.length;Ye++){let O=Ce[Ye],J=null;if(f!==null)J=f.getViewport(O);else{let he=u.getViewSubImage(d,O);J=he.viewport,Ye===0&&(e.setRenderTargetTextures(_,he.colorTexture,d.ignoreDepthValues?void 0:he.depthStencilTexture),e.setRenderTarget(_))}let j=T[Ye];j===void 0&&(j=new Xt,j.layers.enable(Ye),j.viewport=new gt,T[Ye]=j),j.matrix.fromArray(O.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(O.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(J.x,J.y,J.width,J.height),Ye===0&&(v.matrix.copy(j.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ge===!0&&v.cameras.push(j)}let ze=s.enabledFeatures;if(ze&&ze.includes("depth-sensing")){let Ye=u.getDepthInformation(Ce[0]);Ye&&Ye.isValid&&Ye.texture&&x.init(e,Ye,s.renderState)}}for(let Ce=0;Ce<b.length;Ce++){let ge=y[Ce],ze=b[Ce];ge!==null&&ze!==void 0&&ze.update(ge,ce,c||o)}Ie&&Ie(te,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),g=null}let ut=new np;ut.setAnimationLoop(Xe),this.setAnimationLoop=function(te){Ie=te},this.dispose=function(){}}},Is=new Pn,Sv=new $e;function wv(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,tp(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,b,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,_,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===hn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===hn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=e.get(p),b=_.envMap,y=_.envMapRotation;b&&(m.envMap.value=b,Is.copy(y),Is.x*=-1,Is.y*=-1,Is.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Is.y*=-1,Is.z*=-1),m.envMapRotation.value.setFromMatrix4(Sv.makeRotationFromEuler(Is)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===hn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let _=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Av(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,b){let y=b.program;i.uniformBlockBinding(_,y)}function c(_,b){let y=s[_.id];y===void 0&&(g(_),y=h(_),s[_.id]=y,_.addEventListener("dispose",m));let L=b.program;i.updateUBOMapping(_,L);let w=e.render.frame;r[_.id]!==w&&(d(_),r[_.id]=w)}function h(_){let b=u();_.__bindingPointIndex=b;let y=n.createBuffer(),L=_.__size,w=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,L,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,y),y}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let b=s[_.id],y=_.uniforms,L=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let w=0,R=y.length;w<R;w++){let P=Array.isArray(y[w])?y[w]:[y[w]];for(let T=0,v=P.length;T<v;T++){let D=P[T];if(f(D,w,T,L)===!0){let X=D.__offset,W=Array.isArray(D.value)?D.value:[D.value],V=0;for(let K=0;K<W.length;K++){let q=W[K],ie=x(q);typeof q=="number"||typeof q=="boolean"?(D.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,X+V,D.__data)):q.isMatrix3?(D.__data[0]=q.elements[0],D.__data[1]=q.elements[1],D.__data[2]=q.elements[2],D.__data[3]=0,D.__data[4]=q.elements[3],D.__data[5]=q.elements[4],D.__data[6]=q.elements[5],D.__data[7]=0,D.__data[8]=q.elements[6],D.__data[9]=q.elements[7],D.__data[10]=q.elements[8],D.__data[11]=0):(q.toArray(D.__data,V),V+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,X,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(_,b,y,L){let w=_.value,R=b+"_"+y;if(L[R]===void 0)return typeof w=="number"||typeof w=="boolean"?L[R]=w:L[R]=w.clone(),!0;{let P=L[R];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return L[R]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function g(_){let b=_.uniforms,y=0,L=16;for(let R=0,P=b.length;R<P;R++){let T=Array.isArray(b[R])?b[R]:[b[R]];for(let v=0,D=T.length;v<D;v++){let X=T[v],W=Array.isArray(X.value)?X.value:[X.value];for(let V=0,K=W.length;V<K;V++){let q=W[V],ie=x(q),Z=y%L,me=Z%ie.boundary,ye=Z+me;y+=me,ye!==0&&L-ye<ie.storage&&(y+=L-ye),X.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=y,y+=ie.storage}}}let w=y%L;return w>0&&(y+=L-w),_.__size=y,_.__cache={},this}function x(_){let b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=48,b.storage=48):_.isMatrix4?(b.boundary=64,b.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),b}function m(_){let b=_.target;b.removeEventListener("dispose",m);let y=o.indexOf(b.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(let _ in s)n.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Ga=class{constructor(e={}){let{canvas:t=L0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,_=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Wt,this.toneMapping=Qi,this.toneMappingExposure=1;let y=this,L=!1,w=0,R=0,P=null,T=-1,v=null,D=new gt,X=new gt,W=null,V=new ve(0),K=0,q=t.width,ie=t.height,Z=1,me=null,ye=null,Ie=new gt(0,0,q,ie),Xe=new gt(0,0,q,ie),ut=!1,te=new Pr,ce=!1,Ce=!1,ge=new $e,ze=new $e,Ye=new U,O=new gt,J={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},j=!1;function he(){return P===null?Z:1}let I=i;function Pe(E,k){return t.getContext(E,k)}try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Dh}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",Te,!1),I===null){let k="webgl2";if(I=Pe(k,E),I===null)throw Pe(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let xe,Oe,be,ct,Le,A,M,G,C,F,H,re,oe,pe,Je,ae,Se,Ze,Ke,Ne,dt,nt,Pt,B;function Me(){xe=new Gy(I),xe.init(),nt=new Mv(I,xe),Oe=new Fy(I,xe,e,nt),be=new yv(I,xe),Oe.reverseDepthBuffer&&d&&be.buffers.depth.setReversed(!0),ct=new qy(I),Le=new rv,A=new vv(I,xe,be,Le,Oe,nt,ct),M=new ky(y),G=new Vy(y),C=new Q0(I),Pt=new Uy(I,C),F=new Wy(I,C,ct,Pt),H=new $y(I,F,C,ct),Ke=new Yy(I,Oe,A),ae=new By(Le),re=new sv(y,M,G,xe,Oe,Pt,ae),oe=new wv(y,Le),pe=new av,Je=new fv(xe),Ze=new Ny(y,M,G,be,H,f,l),Se=new gv(y,H,Oe),B=new Av(I,ct,Oe,be),Ne=new Oy(I,xe,ct),dt=new Xy(I,xe,ct),ct.programs=re.programs,y.capabilities=Oe,y.extensions=xe,y.properties=Le,y.renderLists=pe,y.shadowMap=Se,y.state=be,y.info=ct}Me();let ee=new yh(y,I);this.xr=ee,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let E=xe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=xe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(E){E!==void 0&&(Z=E,this.setSize(q,ie,!1))},this.getSize=function(E){return E.set(q,ie)},this.setSize=function(E,k,Y=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=E,ie=k,t.width=Math.floor(E*Z),t.height=Math.floor(k*Z),Y===!0&&(t.style.width=E+"px",t.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(q*Z,ie*Z).floor()},this.setDrawingBufferSize=function(E,k,Y){q=E,ie=k,Z=Y,t.width=Math.floor(E*Y),t.height=Math.floor(k*Y),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(D)},this.getViewport=function(E){return E.copy(Ie)},this.setViewport=function(E,k,Y,$){E.isVector4?Ie.set(E.x,E.y,E.z,E.w):Ie.set(E,k,Y,$),be.viewport(D.copy(Ie).multiplyScalar(Z).round())},this.getScissor=function(E){return E.copy(Xe)},this.setScissor=function(E,k,Y,$){E.isVector4?Xe.set(E.x,E.y,E.z,E.w):Xe.set(E,k,Y,$),be.scissor(X.copy(Xe).multiplyScalar(Z).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(E){be.setScissorTest(ut=E)},this.setOpaqueSort=function(E){me=E},this.setTransparentSort=function(E){ye=E},this.getClearColor=function(E){return E.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(E=!0,k=!0,Y=!0){let $=0;if(E){let z=!1;if(P!==null){let ue=P.texture.format;z=ue===Yh||ue===qh||ue===al}if(z){let ue=P.texture.type,Ee=ue===Ri||ue===es||ue===yo||ue===Sr||ue===Gh||ue===Wh,Be=Ze.getClearColor(),ke=Ze.getClearAlpha(),je=Be.r,et=Be.g,He=Be.b;Ee?(g[0]=je,g[1]=et,g[2]=He,g[3]=ke,I.clearBufferuiv(I.COLOR,0,g)):(x[0]=je,x[1]=et,x[2]=He,x[3]=ke,I.clearBufferiv(I.COLOR,0,x))}else $|=I.COLOR_BUFFER_BIT}k&&($|=I.DEPTH_BUFFER_BIT),Y&&($|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),pe.dispose(),Je.dispose(),Le.dispose(),M.dispose(),G.dispose(),H.dispose(),Pt.dispose(),B.dispose(),re.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",ld),ee.removeEventListener("sessionend",cd),Es.stop()};function se(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let E=ct.autoReset,k=Se.enabled,Y=Se.autoUpdate,$=Se.needsUpdate,z=Se.type;Me(),ct.autoReset=E,Se.enabled=k,Se.autoUpdate=Y,Se.needsUpdate=$,Se.type=z}function Te(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Qe(E){let k=E.target;k.removeEventListener("dispose",Qe),Vt(k)}function Vt(E){fn(E),Le.remove(E)}function fn(E){let k=Le.get(E).programs;k!==void 0&&(k.forEach(function(Y){re.releaseProgram(Y)}),E.isShaderMaterial&&re.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,Y,$,z,ue){k===null&&(k=J);let Ee=z.isMesh&&z.matrixWorld.determinant()<0,Be=Lm(E,k,Y,$,z);be.setMaterial($,Ee);let ke=Y.index,je=1;if($.wireframe===!0){if(ke=F.getWireframeAttribute(Y),ke===void 0)return;je=2}let et=Y.drawRange,He=Y.attributes.position,ft=et.start*je,Lt=(et.start+et.count)*je;ue!==null&&(ft=Math.max(ft,ue.start*je),Lt=Math.min(Lt,(ue.start+ue.count)*je)),ke!==null?(ft=Math.max(ft,0),Lt=Math.min(Lt,ke.count)):He!=null&&(ft=Math.max(ft,0),Lt=Math.min(Lt,He.count));let Nt=Lt-ft;if(Nt<0||Nt===1/0)return;Pt.setup(z,$,Be,Y,ke);let wn,vt=Ne;if(ke!==null&&(wn=C.get(ke),vt=dt,vt.setIndex(wn)),z.isMesh)$.wireframe===!0?(be.setLineWidth($.wireframeLinewidth*he()),vt.setMode(I.LINES)):vt.setMode(I.TRIANGLES);else if(z.isLine){let We=$.linewidth;We===void 0&&(We=1),be.setLineWidth(We*he()),z.isLineSegments?vt.setMode(I.LINES):z.isLineLoop?vt.setMode(I.LINE_LOOP):vt.setMode(I.LINE_STRIP)}else z.isPoints?vt.setMode(I.POINTS):z.isSprite&&vt.setMode(I.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)vt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(xe.get("WEBGL_multi_draw"))vt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let We=z._multiDrawStarts,gi=z._multiDrawCounts,Mt=z._multiDrawCount,Zn=ke?C.get(ke).bytesPerElement:1,er=Le.get($).currentProgram.getUniforms();for(let Nn=0;Nn<Mt;Nn++)er.setValue(I,"_gl_DrawID",Nn),vt.render(We[Nn]/Zn,gi[Nn])}else if(z.isInstancedMesh)vt.renderInstances(ft,Nt,z.count);else if(Y.isInstancedBufferGeometry){let We=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,gi=Math.min(Y.instanceCount,We);vt.renderInstances(ft,Nt,gi)}else vt.render(ft,Nt)};function St(E,k,Y){E.transparent===!0&&E.side===sn&&E.forceSinglePass===!1?(E.side=hn,E.needsUpdate=!0,ea(E,k,Y),E.side=ci,E.needsUpdate=!0,ea(E,k,Y),E.side=sn):ea(E,k,Y)}this.compile=function(E,k,Y=null){Y===null&&(Y=E),p=Je.get(Y),p.init(k),b.push(p),Y.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),E!==Y&&E.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();let $=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let ue=z.material;if(ue)if(Array.isArray(ue))for(let Ee=0;Ee<ue.length;Ee++){let Be=ue[Ee];St(Be,Y,z),$.add(Be)}else St(ue,Y,z),$.add(ue)}),b.pop(),p=null,$},this.compileAsync=function(E,k,Y=null){let $=this.compile(E,k,Y);return new Promise(z=>{function ue(){if($.forEach(function(Ee){Le.get(Ee).currentProgram.isReady()&&$.delete(Ee)}),$.size===0){z(E);return}setTimeout(ue,10)}xe.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let $n=null;function mi(E){$n&&$n(E)}function ld(){Es.stop()}function cd(){Es.start()}let Es=new np;Es.setAnimationLoop(mi),typeof self<"u"&&Es.setContext(self),this.setAnimationLoop=function(E){$n=E,ee.setAnimationLoop(E),E===null?Es.stop():Es.start()},ee.addEventListener("sessionstart",ld),ee.addEventListener("sessionend",cd),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(k),k=ee.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,k,P),p=Je.get(E,b.length),p.init(k),b.push(p),ze.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),te.setFromProjectionMatrix(ze),Ce=this.localClippingEnabled,ce=ae.init(this.clippingPlanes,Ce),m=pe.get(E,_.length),m.init(),_.push(m),ee.enabled===!0&&ee.isPresenting===!0){let ue=y.xr.getDepthSensingMesh();ue!==null&&Fl(ue,k,-1/0,y.sortObjects)}Fl(E,k,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(me,ye),j=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,j&&Ze.addToRenderList(m,E),this.info.render.frame++,ce===!0&&ae.beginShadows();let Y=p.state.shadowsArray;Se.render(Y,E,k),ce===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();let $=m.opaque,z=m.transmissive;if(p.setupLights(),k.isArrayCamera){let ue=k.cameras;if(z.length>0)for(let Ee=0,Be=ue.length;Ee<Be;Ee++){let ke=ue[Ee];ud($,z,E,ke)}j&&Ze.render(E);for(let Ee=0,Be=ue.length;Ee<Be;Ee++){let ke=ue[Ee];hd(m,E,ke,ke.viewport)}}else z.length>0&&ud($,z,E,k),j&&Ze.render(E),hd(m,E,k);P!==null&&(A.updateMultisampleRenderTarget(P),A.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(y,E,k),Pt.resetDefaultState(),T=-1,v=null,b.pop(),b.length>0?(p=b[b.length-1],ce===!0&&ae.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function Fl(E,k,Y,$){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)Y=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||te.intersectsSprite(E)){$&&O.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ze);let Ee=H.update(E),Be=E.material;Be.visible&&m.push(E,Ee,Be,Y,O.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||te.intersectsObject(E))){let Ee=H.update(E),Be=E.material;if($&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),O.copy(E.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),O.copy(Ee.boundingSphere.center)),O.applyMatrix4(E.matrixWorld).applyMatrix4(ze)),Array.isArray(Be)){let ke=Ee.groups;for(let je=0,et=ke.length;je<et;je++){let He=ke[je],ft=Be[He.materialIndex];ft&&ft.visible&&m.push(E,Ee,ft,Y,O.z,He)}}else Be.visible&&m.push(E,Ee,Be,Y,O.z,null)}}let ue=E.children;for(let Ee=0,Be=ue.length;Ee<Be;Ee++)Fl(ue[Ee],k,Y,$)}function hd(E,k,Y,$){let z=E.opaque,ue=E.transmissive,Ee=E.transparent;p.setupLightsView(Y),ce===!0&&ae.setGlobalState(y.clippingPlanes,Y),$&&be.viewport(D.copy($)),z.length>0&&Qo(z,k,Y),ue.length>0&&Qo(ue,k,Y),Ee.length>0&&Qo(Ee,k,Y),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function ud(E,k,Y,$){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new un(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")||xe.has("EXT_color_buffer_float")?kn:Ri,minFilter:ai,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));let ue=p.state.transmissionRenderTarget[$.id],Ee=$.viewport||D;ue.setSize(Ee.z,Ee.w);let Be=y.getRenderTarget();y.setRenderTarget(ue),y.getClearColor(V),K=y.getClearAlpha(),K<1&&y.setClearColor(16777215,.5),y.clear(),j&&Ze.render(Y);let ke=y.toneMapping;y.toneMapping=Qi;let je=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),ce===!0&&ae.setGlobalState(y.clippingPlanes,$),Qo(E,Y,$),A.updateMultisampleRenderTarget(ue),A.updateRenderTargetMipmap(ue),xe.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let He=0,ft=k.length;He<ft;He++){let Lt=k[He],Nt=Lt.object,wn=Lt.geometry,vt=Lt.material,We=Lt.group;if(vt.side===sn&&Nt.layers.test($.layers)){let gi=vt.side;vt.side=hn,vt.needsUpdate=!0,dd(Nt,Y,$,wn,vt,We),vt.side=gi,vt.needsUpdate=!0,et=!0}}et===!0&&(A.updateMultisampleRenderTarget(ue),A.updateRenderTargetMipmap(ue))}y.setRenderTarget(Be),y.setClearColor(V,K),je!==void 0&&($.viewport=je),y.toneMapping=ke}function Qo(E,k,Y){let $=k.isScene===!0?k.overrideMaterial:null;for(let z=0,ue=E.length;z<ue;z++){let Ee=E[z],Be=Ee.object,ke=Ee.geometry,je=$===null?Ee.material:$,et=Ee.group;Be.layers.test(Y.layers)&&dd(Be,k,Y,ke,je,et)}}function dd(E,k,Y,$,z,ue){E.onBeforeRender(y,k,Y,$,z,ue),E.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(y,k,Y,$,E,ue),z.transparent===!0&&z.side===sn&&z.forceSinglePass===!1?(z.side=hn,z.needsUpdate=!0,y.renderBufferDirect(Y,k,$,z,E,ue),z.side=ci,z.needsUpdate=!0,y.renderBufferDirect(Y,k,$,z,E,ue),z.side=sn):y.renderBufferDirect(Y,k,$,z,E,ue),E.onAfterRender(y,k,Y,$,z,ue)}function ea(E,k,Y){k.isScene!==!0&&(k=J);let $=Le.get(E),z=p.state.lights,ue=p.state.shadowsArray,Ee=z.state.version,Be=re.getParameters(E,z.state,ue,k,Y),ke=re.getProgramCacheKey(Be),je=$.programs;$.environment=E.isMeshStandardMaterial?k.environment:null,$.fog=k.fog,$.envMap=(E.isMeshStandardMaterial?G:M).get(E.envMap||$.environment),$.envMapRotation=$.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,je===void 0&&(E.addEventListener("dispose",Qe),je=new Map,$.programs=je);let et=je.get(ke);if(et!==void 0){if($.currentProgram===et&&$.lightsStateVersion===Ee)return pd(E,Be),et}else Be.uniforms=re.getUniforms(E),E.onBeforeCompile(Be,y),et=re.acquireProgram(Be,ke),je.set(ke,et),$.uniforms=Be.uniforms;let He=$.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(He.clippingPlanes=ae.uniform),pd(E,Be),$.needsLights=Nm(E),$.lightsStateVersion=Ee,$.needsLights&&(He.ambientLightColor.value=z.state.ambient,He.lightProbe.value=z.state.probe,He.directionalLights.value=z.state.directional,He.directionalLightShadows.value=z.state.directionalShadow,He.spotLights.value=z.state.spot,He.spotLightShadows.value=z.state.spotShadow,He.rectAreaLights.value=z.state.rectArea,He.ltc_1.value=z.state.rectAreaLTC1,He.ltc_2.value=z.state.rectAreaLTC2,He.pointLights.value=z.state.point,He.pointLightShadows.value=z.state.pointShadow,He.hemisphereLights.value=z.state.hemi,He.directionalShadowMap.value=z.state.directionalShadowMap,He.directionalShadowMatrix.value=z.state.directionalShadowMatrix,He.spotShadowMap.value=z.state.spotShadowMap,He.spotLightMatrix.value=z.state.spotLightMatrix,He.spotLightMap.value=z.state.spotLightMap,He.pointShadowMap.value=z.state.pointShadowMap,He.pointShadowMatrix.value=z.state.pointShadowMatrix),$.currentProgram=et,$.uniformsList=null,et}function fd(E){if(E.uniformsList===null){let k=E.currentProgram.getUniforms();E.uniformsList=Mr.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function pd(E,k){let Y=Le.get(E);Y.outputColorSpace=k.outputColorSpace,Y.batching=k.batching,Y.batchingColor=k.batchingColor,Y.instancing=k.instancing,Y.instancingColor=k.instancingColor,Y.instancingMorph=k.instancingMorph,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}function Lm(E,k,Y,$,z){k.isScene!==!0&&(k=J),A.resetTextureUnits();let ue=k.fog,Ee=$.isMeshStandardMaterial?k.environment:null,Be=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Mn,ke=($.isMeshStandardMaterial?G:M).get($.envMap||Ee),je=$.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,et=!!Y.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),He=!!Y.morphAttributes.position,ft=!!Y.morphAttributes.normal,Lt=!!Y.morphAttributes.color,Nt=Qi;$.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Nt=y.toneMapping);let wn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,vt=wn!==void 0?wn.length:0,We=Le.get($),gi=p.state.lights;if(ce===!0&&(Ce===!0||E!==v)){let Vn=E===v&&$.id===T;ae.setState($,E,Vn)}let Mt=!1;$.version===We.__version?(We.needsLights&&We.lightsStateVersion!==gi.state.version||We.outputColorSpace!==Be||z.isBatchedMesh&&We.batching===!1||!z.isBatchedMesh&&We.batching===!0||z.isBatchedMesh&&We.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&We.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&We.instancing===!1||!z.isInstancedMesh&&We.instancing===!0||z.isSkinnedMesh&&We.skinning===!1||!z.isSkinnedMesh&&We.skinning===!0||z.isInstancedMesh&&We.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&We.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&We.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&We.instancingMorph===!1&&z.morphTexture!==null||We.envMap!==ke||$.fog===!0&&We.fog!==ue||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==ae.numPlanes||We.numIntersection!==ae.numIntersection)||We.vertexAlphas!==je||We.vertexTangents!==et||We.morphTargets!==He||We.morphNormals!==ft||We.morphColors!==Lt||We.toneMapping!==Nt||We.morphTargetsCount!==vt)&&(Mt=!0):(Mt=!0,We.__version=$.version);let Zn=We.currentProgram;Mt===!0&&(Zn=ea($,k,z));let er=!1,Nn=!1,Qr=!1,Ut=Zn.getUniforms(),ri=We.uniforms;if(be.useProgram(Zn.program)&&(er=!0,Nn=!0,Qr=!0),$.id!==T&&(T=$.id,Nn=!0),er||v!==E){be.buffers.depth.getReversed()?(ge.copy(E.projectionMatrix),N0(ge),U0(ge),Ut.setValue(I,"projectionMatrix",ge)):Ut.setValue(I,"projectionMatrix",E.projectionMatrix),Ut.setValue(I,"viewMatrix",E.matrixWorldInverse);let Gi=Ut.map.cameraPosition;Gi!==void 0&&Gi.setValue(I,Ye.setFromMatrixPosition(E.matrixWorld)),Oe.logarithmicDepthBuffer&&Ut.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ut.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),v!==E&&(v=E,Nn=!0,Qr=!0)}if(z.isSkinnedMesh){Ut.setOptional(I,z,"bindMatrix"),Ut.setOptional(I,z,"bindMatrixInverse");let Vn=z.skeleton;Vn&&(Vn.boneTexture===null&&Vn.computeBoneTexture(),Ut.setValue(I,"boneTexture",Vn.boneTexture,A))}z.isBatchedMesh&&(Ut.setOptional(I,z,"batchingTexture"),Ut.setValue(I,"batchingTexture",z._matricesTexture,A),Ut.setOptional(I,z,"batchingIdTexture"),Ut.setValue(I,"batchingIdTexture",z._indirectTexture,A),Ut.setOptional(I,z,"batchingColorTexture"),z._colorsTexture!==null&&Ut.setValue(I,"batchingColorTexture",z._colorsTexture,A));let eo=Y.morphAttributes;if((eo.position!==void 0||eo.normal!==void 0||eo.color!==void 0)&&Ke.update(z,Y,Zn),(Nn||We.receiveShadow!==z.receiveShadow)&&(We.receiveShadow=z.receiveShadow,Ut.setValue(I,"receiveShadow",z.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(ri.envMap.value=ke,ri.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&k.environment!==null&&(ri.envMapIntensity.value=k.environmentIntensity),Nn&&(Ut.setValue(I,"toneMappingExposure",y.toneMappingExposure),We.needsLights&&Dm(ri,Qr),ue&&$.fog===!0&&oe.refreshFogUniforms(ri,ue),oe.refreshMaterialUniforms(ri,$,Z,ie,p.state.transmissionRenderTarget[E.id]),Mr.upload(I,fd(We),ri,A)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Mr.upload(I,fd(We),ri,A),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ut.setValue(I,"center",z.center),Ut.setValue(I,"modelViewMatrix",z.modelViewMatrix),Ut.setValue(I,"normalMatrix",z.normalMatrix),Ut.setValue(I,"modelMatrix",z.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){let Vn=$.uniformsGroups;for(let Gi=0,Wi=Vn.length;Gi<Wi;Gi++){let md=Vn[Gi];B.update(md,Zn),B.bind(md,Zn)}}return Zn}function Dm(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function Nm(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,k,Y){Le.get(E.texture).__webglTexture=k,Le.get(E.depthTexture).__webglTexture=Y;let $=Le.get(E);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=Y===void 0,$.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,k){let Y=Le.get(E);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,Y=0){P=E,w=k,R=Y;let $=!0,z=null,ue=!1,Ee=!1;if(E){let ke=Le.get(E);if(ke.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(I.FRAMEBUFFER,null),$=!1;else if(ke.__webglFramebuffer===void 0)A.setupRenderTarget(E);else if(ke.__hasExternalTextures)A.rebindTextures(E,Le.get(E.texture).__webglTexture,Le.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let He=E.depthTexture;if(ke.__boundDepthTexture!==He){if(He!==null&&Le.has(He)&&(E.width!==He.image.width||E.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(E)}}let je=E.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Ee=!0);let et=Le.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(et[k])?z=et[k][Y]:z=et[k],ue=!0):E.samples>0&&A.useMultisampledRTT(E)===!1?z=Le.get(E).__webglMultisampledFramebuffer:Array.isArray(et)?z=et[Y]:z=et,D.copy(E.viewport),X.copy(E.scissor),W=E.scissorTest}else D.copy(Ie).multiplyScalar(Z).floor(),X.copy(Xe).multiplyScalar(Z).floor(),W=ut;if(be.bindFramebuffer(I.FRAMEBUFFER,z)&&$&&be.drawBuffers(E,z),be.viewport(D),be.scissor(X),be.setScissorTest(W),ue){let ke=Le.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+k,ke.__webglTexture,Y)}else if(Ee){let ke=Le.get(E.texture),je=k||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,ke.__webglTexture,Y||0,je)}T=-1},this.readRenderTargetPixels=function(E,k,Y,$,z,ue,Ee){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=Le.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ee!==void 0&&(Be=Be[Ee]),Be){be.bindFramebuffer(I.FRAMEBUFFER,Be);try{let ke=E.texture,je=ke.format,et=ke.type;if(!Oe.textureFormatReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Oe.textureTypeReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-$&&Y>=0&&Y<=E.height-z&&I.readPixels(k,Y,$,z,nt.convert(je),nt.convert(et),ue)}finally{let ke=P!==null?Le.get(P).__webglFramebuffer:null;be.bindFramebuffer(I.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(E,k,Y,$,z,ue,Ee){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=Le.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ee!==void 0&&(Be=Be[Ee]),Be){let ke=E.texture,je=ke.format,et=ke.type;if(!Oe.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Oe.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=E.width-$&&Y>=0&&Y<=E.height-z){be.bindFramebuffer(I.FRAMEBUFFER,Be);let He=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,He),I.bufferData(I.PIXEL_PACK_BUFFER,ue.byteLength,I.STREAM_READ),I.readPixels(k,Y,$,z,nt.convert(je),nt.convert(et),0);let ft=P!==null?Le.get(P).__webglFramebuffer:null;be.bindFramebuffer(I.FRAMEBUFFER,ft);let Lt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await D0(I,Lt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,He),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ue),I.deleteBuffer(He),I.deleteSync(Lt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,k=null,Y=0){E.isTexture!==!0&&(ho("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,E=arguments[1]);let $=Math.pow(2,-Y),z=Math.floor(E.image.width*$),ue=Math.floor(E.image.height*$),Ee=k!==null?k.x:0,Be=k!==null?k.y:0;A.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,Y,0,0,Ee,Be,z,ue),be.unbindTexture()},this.copyTextureToTexture=function(E,k,Y=null,$=null,z=0){E.isTexture!==!0&&(ho("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,E=arguments[1],k=arguments[2],z=arguments[3]||0,Y=null);let ue,Ee,Be,ke,je,et,He,ft,Lt,Nt=E.isCompressedTexture?E.mipmaps[z]:E.image;Y!==null?(ue=Y.max.x-Y.min.x,Ee=Y.max.y-Y.min.y,Be=Y.isBox3?Y.max.z-Y.min.z:1,ke=Y.min.x,je=Y.min.y,et=Y.isBox3?Y.min.z:0):(ue=Nt.width,Ee=Nt.height,Be=Nt.depth||1,ke=0,je=0,et=0),$!==null?(He=$.x,ft=$.y,Lt=$.z):(He=0,ft=0,Lt=0);let wn=nt.convert(k.format),vt=nt.convert(k.type),We;k.isData3DTexture?(A.setTexture3D(k,0),We=I.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(A.setTexture2DArray(k,0),We=I.TEXTURE_2D_ARRAY):(A.setTexture2D(k,0),We=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment);let gi=I.getParameter(I.UNPACK_ROW_LENGTH),Mt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Zn=I.getParameter(I.UNPACK_SKIP_PIXELS),er=I.getParameter(I.UNPACK_SKIP_ROWS),Nn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Nt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Nt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ke),I.pixelStorei(I.UNPACK_SKIP_ROWS,je),I.pixelStorei(I.UNPACK_SKIP_IMAGES,et);let Qr=E.isDataArrayTexture||E.isData3DTexture,Ut=k.isDataArrayTexture||k.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){let ri=Le.get(E),eo=Le.get(k),Vn=Le.get(ri.__renderTarget),Gi=Le.get(eo.__renderTarget);be.bindFramebuffer(I.READ_FRAMEBUFFER,Vn.__webglFramebuffer),be.bindFramebuffer(I.DRAW_FRAMEBUFFER,Gi.__webglFramebuffer);for(let Wi=0;Wi<Be;Wi++)Qr&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Le.get(E).__webglTexture,z,et+Wi),E.isDepthTexture?(Ut&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Le.get(k).__webglTexture,z,Lt+Wi),I.blitFramebuffer(ke,je,ue,Ee,He,ft,ue,Ee,I.DEPTH_BUFFER_BIT,I.NEAREST)):Ut?I.copyTexSubImage3D(We,z,He,ft,Lt+Wi,ke,je,ue,Ee):I.copyTexSubImage2D(We,z,He,ft,Lt+Wi,ke,je,ue,Ee);be.bindFramebuffer(I.READ_FRAMEBUFFER,null),be.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Ut?E.isDataTexture||E.isData3DTexture?I.texSubImage3D(We,z,He,ft,Lt,ue,Ee,Be,wn,vt,Nt.data):k.isCompressedArrayTexture?I.compressedTexSubImage3D(We,z,He,ft,Lt,ue,Ee,Be,wn,Nt.data):I.texSubImage3D(We,z,He,ft,Lt,ue,Ee,Be,wn,vt,Nt):E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,z,He,ft,ue,Ee,wn,vt,Nt.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,z,He,ft,Nt.width,Nt.height,wn,Nt.data):I.texSubImage2D(I.TEXTURE_2D,z,He,ft,ue,Ee,wn,vt,Nt);I.pixelStorei(I.UNPACK_ROW_LENGTH,gi),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Mt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Zn),I.pixelStorei(I.UNPACK_SKIP_ROWS,er),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Nn),z===0&&k.generateMipmaps&&I.generateMipmap(We),be.unbindTexture()},this.copyTextureToTexture3D=function(E,k,Y=null,$=null,z=0){return E.isTexture!==!0&&(ho("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,$=arguments[1]||null,E=arguments[2],k=arguments[3],z=arguments[4]||0),ho('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,k,Y,$,z)},this.initRenderTarget=function(E){Le.get(E).__webglFramebuffer===void 0&&A.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),be.unbindTexture()},this.resetState=function(){w=0,R=0,P=null,be.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}},Wa=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ve(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},Xa=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new ve(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ks=class extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Mo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=nh,this.updateRanges=[],this.version=0,this.uuid=ei()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Tn=new U,bo=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Tn.fromBufferAttribute(this,t),Tn.applyMatrix4(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tn.fromBufferAttribute(this,t),Tn.applyNormalMatrix(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tn.fromBufferAttribute(this,t),Tn.transformDirection(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Qn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=wt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Qn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Qn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Qn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Qn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),s=wt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),s=wt(s,this.array),r=wt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new At(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var xf=new U,yf=new gt,_f=new gt,Rv=new U,vf=new $e,Ma=new U,uc=new jt,Mf=new $e,dc=new Bs,qa=class extends ne{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=_d,this.bindMatrix=new $e,this.bindMatrixInverse=new $e,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new rn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ma),this.boundingBox.expandByPoint(Ma)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new jt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ma),this.boundingSphere.expandByPoint(Ma)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),uc.copy(this.boundingSphere),uc.applyMatrix4(s),e.ray.intersectsSphere(uc)!==!1&&(Mf.copy(s).invert(),dc.copy(e.ray).applyMatrix4(Mf),!(this.boundingBox!==null&&dc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,dc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new gt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===_d?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===s0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;yf.fromBufferAttribute(s.attributes.skinIndex,e),_f.fromBufferAttribute(s.attributes.skinWeight,e),xf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=_f.getComponent(r);if(o!==0){let a=yf.getComponent(r);vf.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(Rv.copy(xf).applyMatrix4(vf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},To=class extends Ht{constructor(){super(),this.isBone=!0,this.type="Bone"}},Fs=class extends on{constructor(e=null,t=1,i=1,s,r,o,a,l,c=yn,h=yn,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},bf=new $e,Cv=new $e,Ya=class n{constructor(e=[],t=[]){this.uuid=ei(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new $e)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new $e;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Cv;bf.multiplyMatrices(a,t[r]),bf.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new Fs(t,e,e,In,Fn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new To),this.bones.push(o),this.boneInverses.push(new $e().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=i[s];e.boneInverses.push(a.toArray())}return e}},Hs=class extends At{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},mr=new $e,Tf=new $e,ba=[],Ef=new rn,Iv=new $e,ro=new ne,oo=new jt,Ci=class extends ne{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Hs(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Iv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new rn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,mr),Ef.copy(e.boundingBox).applyMatrix4(mr),this.boundingBox.union(Ef)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new jt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,mr),oo.copy(e.boundingSphere).applyMatrix4(mr),this.boundingSphere.union(oo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(ro.geometry=this.geometry,ro.material=this.material,ro.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oo.copy(this.boundingSphere),oo.applyMatrix4(i),e.ray.intersectsSphere(oo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,mr),Tf.multiplyMatrices(i,mr),ro.matrixWorld=Tf,ro.raycast(e,ba);for(let o=0,a=ba.length;o<a;o++){let l=ba[o];l.instanceId=r,l.object=this,t.push(l)}ba.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Hs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Fs(new Float32Array(s*this.count),s,this.count,Xh,Fn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};function fc(n,e){return n-e}function Pv(n,e){return n.z-e.z}function Lv(n,e){return e.z-n.z}var _h=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,s){let r=this.pool,o=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let a=r[this.index];o.push(a),this.index++,a.start=e,a.count=t,a.z=i,a.index=s}reset(){this.list.length=0,this.index=0}},An=new $e,Dv=new ve(1,1,1),pc=new Pr,Ta=new rn,Ps=new jt,ao=new U,Sf=new U,Nv=new U,mc=new _h,gn=new ne,Ea=[];function Uv(n,e,t=0){let i=e.itemSize;if(n.isInterleavedBufferAttribute||n.array.constructor!==e.array.constructor){let s=n.count;for(let r=0;r<s;r++)for(let o=0;o<i;o++)e.setComponent(r+t,o,n.getComponent(r,o))}else e.array.set(n.array,t*i);e.needsUpdate=!0}function Ls(n,e){if(n.constructor!==e.constructor){let t=Math.min(n.length,e.length);for(let i=0;i<t;i++)e[i]=n[i]}else{let t=Math.min(n.length,e.length);e.set(new n.constructor(n.buffer,0,t))}}var Eo=class extends ne{get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}constructor(e,t,i=t*2,s){super(new pt,s),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=i,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4),i=new Fs(t,e,e,In,Fn);this._matricesTexture=i}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Uint32Array(e*e),i=new Fs(t,e,e,al,es);this._indirectTexture=i}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Float32Array(e*e*4).fill(1),i=new Fs(t,e,e,In,Fn);i.colorSpace=st.workingColorSpace,this._colorsTexture=i}_initializeGeometry(e){let t=this.geometry,i=this._maxVertexCount,s=this._maxIndexCount;if(this._geometryInitialized===!1){for(let r in e.attributes){let o=e.getAttribute(r),{array:a,itemSize:l,normalized:c}=o,h=new a.constructor(i*l),u=new At(h,l,c);t.setAttribute(r,u)}if(e.getIndex()!==null){let r=i>65535?new Uint32Array(s):new Uint16Array(s);t.setIndex(new At(r,1))}this._geometryInitialized=!0}}_validateGeometry(e){let t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(let i in t.attributes){if(!e.hasAttribute(i))throw new Error(`BatchedMesh: Added geometry missing "${i}". All geometries must have consistent attributes.`);let s=e.getAttribute(i),r=t.getAttribute(i);if(s.itemSize!==r.itemSize||s.normalized!==r.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rn);let e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let i=0,s=t.length;i<s;i++){if(t[i].active===!1)continue;let r=t[i].geometryIndex;this.getMatrixAt(i,An),this.getBoundingBoxAt(r,Ta).applyMatrix4(An),e.union(Ta)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jt);let e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let i=0,s=t.length;i<s;i++){if(t[i].active===!1)continue;let r=t[i].geometryIndex;this.getMatrixAt(i,An),this.getBoundingSphereAt(r,Ps).applyMatrix4(An),e.union(Ps)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("BatchedMesh: Maximum item count reached.");let i={visible:!0,active:!0,geometryIndex:e},s=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(fc),s=this._availableInstanceIds.shift(),this._instanceInfo[s]=i):(s=this._instanceInfo.length,this._instanceInfo.push(i));let r=this._matricesTexture;An.identity().toArray(r.image.data,s*16),r.needsUpdate=!0;let o=this._colorsTexture;return o&&(Dv.toArray(o.image.data,s*4),o.needsUpdate=!0),this._visibilityChanged=!0,s}addGeometry(e,t=-1,i=-1){this._initializeGeometry(e),this._validateGeometry(e);let s={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;s.vertexStart=this._nextVertexStart,s.reservedVertexCount=t===-1?e.getAttribute("position").count:t;let o=e.getIndex();if(o!==null&&(s.indexStart=this._nextIndexStart,s.reservedIndexCount=i===-1?o.count:i),s.indexStart!==-1&&s.indexStart+s.reservedIndexCount>this._maxIndexCount||s.vertexStart+s.reservedVertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(fc),l=this._availableGeometryIds.shift(),r[l]=s):(l=this._geometryCount,this._geometryCount++,r.push(s)),this.setGeometryAt(l,e),this._nextIndexStart=s.indexStart+s.reservedIndexCount,this._nextVertexStart=s.vertexStart+s.reservedVertexCount,l}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);let i=this.geometry,s=i.getIndex()!==null,r=i.getIndex(),o=t.getIndex(),a=this._geometryInfo[e];if(s&&o.count>a.reservedIndexCount||t.attributes.position.count>a.reservedVertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");let l=a.vertexStart,c=a.reservedVertexCount;a.vertexCount=t.getAttribute("position").count;for(let h in i.attributes){let u=t.getAttribute(h),d=i.getAttribute(h);Uv(u,d,l);let f=u.itemSize;for(let g=u.count,x=c;g<x;g++){let m=l+g;for(let p=0;p<f;p++)d.setComponent(m,p,0)}d.needsUpdate=!0,d.addUpdateRange(l*f,c*f)}if(s){let h=a.indexStart,u=a.reservedIndexCount;a.indexCount=t.getIndex().count;for(let d=0;d<o.count;d++)r.setX(h+d,l+o.getX(d));for(let d=o.count,f=u;d<f;d++)r.setX(h+d,l);r.needsUpdate=!0,r.addUpdateRange(h,a.reservedIndexCount)}return a.start=s?a.indexStart:a.vertexStart,a.count=s?a.indexCount:a.vertexCount,a.boundingBox=null,t.boundingBox!==null&&(a.boundingBox=t.boundingBox.clone()),a.boundingSphere=null,t.boundingSphere!==null&&(a.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){let t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;let i=this._instanceInfo;for(let s=0,r=i.length;s<r;s++)i[s].geometryIndex===e&&this.deleteInstance(s);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){let t=this._instanceInfo;return e>=t.length||t[e].active===!1?this:(t[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this)}optimize(){let e=0,t=0,i=this._geometryInfo,s=i.map((o,a)=>a).sort((o,a)=>i[o].vertexStart-i[a].vertexStart),r=this.geometry;for(let o=0,a=i.length;o<a;o++){let l=s[o],c=i[l];if(c.active!==!1){if(r.index!==null){if(c.indexStart!==t){let{indexStart:h,vertexStart:u,reservedIndexCount:d}=c,f=r.index,g=f.array,x=e-u;for(let m=h;m<h+d;m++)g[m]=g[m]+x;f.array.copyWithin(t,h,h+d),f.addUpdateRange(t,d),c.indexStart=t}t+=c.reservedIndexCount}if(c.vertexStart!==e){let{vertexStart:h,reservedVertexCount:u}=c,d=r.attributes;for(let f in d){let g=d[f],{array:x,itemSize:m}=g;x.copyWithin(e*m,h*m,(h+u)*m),g.addUpdateRange(e*m,u*m)}c.vertexStart=e}e+=c.reservedVertexCount,c.start=r.index?c.indexStart:c.vertexStart,this._nextIndexStart=r.index?c.indexStart+c.reservedIndexCount:0,this._nextVertexStart=c.vertexStart+c.reservedVertexCount}}return this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;let i=this.geometry,s=this._geometryInfo[e];if(s.boundingBox===null){let r=new rn,o=i.index,a=i.attributes.position;for(let l=s.start,c=s.start+s.count;l<c;l++){let h=l;o&&(h=o.getX(h)),r.expandByPoint(ao.fromBufferAttribute(a,h))}s.boundingBox=r}return t.copy(s.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;let i=this.geometry,s=this._geometryInfo[e];if(s.boundingSphere===null){let r=new jt;this.getBoundingBoxAt(e,Ta),Ta.getCenter(r.center);let o=i.index,a=i.attributes.position,l=0;for(let c=s.start,h=s.start+s.count;c<h;c++){let u=c;o&&(u=o.getX(u)),ao.fromBufferAttribute(a,u),l=Math.max(l,r.center.distanceToSquared(ao))}r.radius=Math.sqrt(l),s.boundingSphere=r}return t.copy(s.boundingSphere),t}setMatrixAt(e,t){let i=this._instanceInfo,s=this._matricesTexture,r=this._matricesTexture.image.data;return e>=i.length||i[e].active===!1?this:(t.toArray(r,e*16),s.needsUpdate=!0,this)}getMatrixAt(e,t){let i=this._instanceInfo,s=this._matricesTexture.image.data;return e>=i.length||i[e].active===!1?null:t.fromArray(s,e*16)}setColorAt(e,t){this._colorsTexture===null&&this._initColorsTexture();let i=this._colorsTexture,s=this._colorsTexture.image.data,r=this._instanceInfo;return e>=r.length||r[e].active===!1?this:(t.toArray(s,e*4),i.needsUpdate=!0,this)}getColorAt(e,t){let i=this._colorsTexture.image.data,s=this._instanceInfo;return e>=s.length||s[e].active===!1?null:t.fromArray(i,e*4)}setVisibleAt(e,t){let i=this._instanceInfo;return e>=i.length||i[e].active===!1||i[e].visible===t?this:(i[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){let t=this._instanceInfo;return e>=t.length||t[e].active===!1?!1:t[e].visible}setGeometryIdAt(e,t){let i=this._instanceInfo,s=this._geometryInfo;return e>=i.length||i[e].active===!1||t>=s.length||s[t].active===!1?null:(i[e].geometryIndex=t,this)}getGeometryIdAt(e){let t=this._instanceInfo;return e>=t.length||t[e].active===!1?-1:t[e].geometryIndex}getGeometryRangeAt(e,t={}){if(e<0||e>=this._geometryCount)return null;let i=this._geometryInfo[e];return t.vertexStart=i.vertexStart,t.vertexCount=i.vertexCount,t.reservedVertexCount=i.reservedVertexCount,t.indexStart=i.indexStart,t.indexCount=i.indexCount,t.reservedIndexCount=i.reservedIndexCount,t.start=i.start,t.count=i.count,t}setInstanceCount(e){let t=this._availableInstanceIds,i=this._instanceInfo;for(t.sort(fc);t[t.length-1]===i.length;)i.pop(),t.pop();if(e<i.length)throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);let s=new Int32Array(e),r=new Int32Array(e);Ls(this._multiDrawCounts,s),Ls(this._multiDrawStarts,r),this._multiDrawCounts=s,this._multiDrawStarts=r,this._maxInstanceCount=e;let o=this._indirectTexture,a=this._matricesTexture,l=this._colorsTexture;o.dispose(),this._initIndirectTexture(),Ls(o.image.data,this._indirectTexture.image.data),a.dispose(),this._initMatricesTexture(),Ls(a.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),Ls(l.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){let i=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...i.map(a=>a.vertexStart+a.reservedVertexCount))>e)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...i.map(l=>l.indexStart+l.reservedIndexCount))>t)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);let r=this.geometry;r.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new pt,this._initializeGeometry(r));let o=this.geometry;r.index&&Ls(r.index.array,o.index.array);for(let a in r.attributes)Ls(r.attributes[a].array,o.attributes[a].array)}raycast(e,t){let i=this._instanceInfo,s=this._geometryInfo,r=this.matrixWorld,o=this.geometry;gn.material=this.material,gn.geometry.index=o.index,gn.geometry.attributes=o.attributes,gn.geometry.boundingBox===null&&(gn.geometry.boundingBox=new rn),gn.geometry.boundingSphere===null&&(gn.geometry.boundingSphere=new jt);for(let a=0,l=i.length;a<l;a++){if(!i[a].visible||!i[a].active)continue;let c=i[a].geometryIndex,h=s[c];gn.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(a,gn.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,gn.geometry.boundingBox),this.getBoundingSphereAt(c,gn.geometry.boundingSphere),gn.raycast(e,Ea);for(let u=0,d=Ea.length;u<d;u++){let f=Ea[u];f.object=this,f.batchId=a,t.push(f)}Ea.length=0}gn.material=null,gn.geometry.index=null,gn.geometry.attributes={},gn.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(e,t,i,s,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let o=s.getIndex(),a=o===null?1:o.array.BYTES_PER_ELEMENT,l=this._instanceInfo,c=this._multiDrawStarts,h=this._multiDrawCounts,u=this._geometryInfo,d=this.perObjectFrustumCulled,f=this._indirectTexture,g=f.image.data;d&&(An.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse).multiply(this.matrixWorld),pc.setFromProjectionMatrix(An,e.coordinateSystem));let x=0;if(this.sortObjects){An.copy(this.matrixWorld).invert(),ao.setFromMatrixPosition(i.matrixWorld).applyMatrix4(An),Sf.set(0,0,-1).transformDirection(i.matrixWorld).transformDirection(An);for(let _=0,b=l.length;_<b;_++)if(l[_].visible&&l[_].active){let y=l[_].geometryIndex;this.getMatrixAt(_,An),this.getBoundingSphereAt(y,Ps).applyMatrix4(An);let L=!1;if(d&&(L=!pc.intersectsSphere(Ps)),!L){let w=u[y],R=Nv.subVectors(Ps.center,ao).dot(Sf);mc.push(w.start,w.count,R,_)}}let m=mc.list,p=this.customSort;p===null?m.sort(r.transparent?Lv:Pv):p.call(this,m,i);for(let _=0,b=m.length;_<b;_++){let y=m[_];c[x]=y.start*a,h[x]=y.count,g[x]=y.index,x++}mc.reset()}else for(let m=0,p=l.length;m<p;m++)if(l[m].visible&&l[m].active){let _=l[m].geometryIndex,b=!1;if(d&&(this.getMatrixAt(m,An),this.getBoundingSphereAt(_,Ps).applyMatrix4(An),b=!pc.intersectsSphere(Ps)),!b){let y=u[_];c[x]=y.start*a,h[x]=y.count,g[x]=m,x++}}f.needsUpdate=!0,this._multiDrawCount=x,this._visibilityChanged=!1}onBeforeShadow(e,t,i,s,r,o){this.onBeforeRender(e,null,s,r,o)}},is=class extends Ln{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},$a=new U,Za=new U,wf=new $e,lo=new Bs,Sa=new jt,gc=new U,Af=new U,Ii=class extends Ht{constructor(e=new pt,t=new is){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)$a.fromBufferAttribute(t,s-1),Za.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=$a.distanceTo(Za);e.setAttribute("lineDistance",new rt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Sa.copy(i.boundingSphere),Sa.applyMatrix4(s),Sa.radius+=r,e.ray.intersectsSphere(Sa)===!1)return;wf.copy(s).invert(),lo.copy(e.ray).applyMatrix4(wf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=c){let p=h.getX(x),_=h.getX(x+1),b=wa(this,e,lo,l,p,_);b&&t.push(b)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(f),p=wa(this,e,lo,l,x,m);p&&t.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=c){let p=wa(this,e,lo,l,x,x+1);p&&t.push(p)}if(this.isLineLoop){let x=wa(this,e,lo,l,g-1,f);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function wa(n,e,t,i,s,r){let o=n.geometry.attributes.position;if($a.fromBufferAttribute(o,s),Za.fromBufferAttribute(o,r),t.distanceSqToSegment($a,Za,gc,Af)>i)return;gc.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(gc);if(!(l<e.near||l>e.far))return{distance:l,point:Af.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}var Rf=new U,Cf=new U,Ka=class extends Ii{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Rf.fromBufferAttribute(t,s),Cf.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Rf.distanceTo(Cf);e.setAttribute("lineDistance",new rt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ja=class extends Ii{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Pi=class extends Ln{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},If=new $e,vh=new Bs,Aa=new jt,Ra=new U,ss=class extends Ht{constructor(e=new pt,t=new Pi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Aa.copy(i.boundingSphere),Aa.applyMatrix4(s),Aa.radius+=r,e.ray.intersectsSphere(Aa)===!1)return;If.copy(s).invert(),vh.copy(e.ray).applyMatrix4(If);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,x=f;g<x;g++){let m=c.getX(g);Ra.fromBufferAttribute(u,m),Pf(Ra,m,l,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,x=f;g<x;g++)Ra.fromBufferAttribute(u,g),Pf(Ra,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Pf(n,e,t,i,s,r,o){let a=vh.distanceSqToPoint(n);if(a<t){let l=new U;vh.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Ja=class extends on{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var rs=class n extends pt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new U,h=new Ve;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=i+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new rt(o,3)),this.setAttribute("normal",new rt(a,3)),this.setAttribute("uv",new rt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Yt=class n extends pt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],m=i/2,p=0;_(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new rt(u,3)),this.setAttribute("normal",new rt(d,3)),this.setAttribute("uv",new rt(f,2));function _(){let y=new U,L=new U,w=0,R=(t-e)/i;for(let P=0;P<=r;P++){let T=[],v=P/r,D=v*(t-e)+e;for(let X=0;X<=s;X++){let W=X/s,V=W*l+a,K=Math.sin(V),q=Math.cos(V);L.x=D*K,L.y=-v*i+m,L.z=D*q,u.push(L.x,L.y,L.z),y.set(K,R,q).normalize(),d.push(y.x,y.y,y.z),f.push(W,1-v),T.push(g++)}x.push(T)}for(let P=0;P<s;P++)for(let T=0;T<r;T++){let v=x[T][P],D=x[T+1][P],X=x[T+1][P+1],W=x[T][P+1];(e>0||T!==0)&&(h.push(v,D,W),w+=3),(t>0||T!==r-1)&&(h.push(D,X,W),w+=3)}c.addGroup(p,w,0),p+=w}function b(y){let L=g,w=new Ve,R=new U,P=0,T=y===!0?e:t,v=y===!0?1:-1;for(let X=1;X<=s;X++)u.push(0,m*v,0),d.push(0,v,0),f.push(.5,.5),g++;let D=g;for(let X=0;X<=s;X++){let V=X/s*l+a,K=Math.cos(V),q=Math.sin(V);R.x=T*q,R.y=m*v,R.z=T*K,u.push(R.x,R.y,R.z),d.push(0,v,0),w.x=K*.5+.5,w.y=q*.5*v+.5,f.push(w.x,w.y),g++}for(let X=0;X<s;X++){let W=L+X,V=D+X;y===!0?h.push(V,V+1,W):h.push(V+1,V,W),P+=3}c.addGroup(p,P,y===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},os=class n extends Yt{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},So=class n extends pt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new rt(r,3)),this.setAttribute("normal",new rt(r.slice(),3)),this.setAttribute("uv",new rt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let b=new U,y=new U,L=new U;for(let w=0;w<t.length;w+=3)f(t[w+0],b),f(t[w+1],y),f(t[w+2],L),l(b,y,L,_)}function l(_,b,y,L){let w=L+1,R=[];for(let P=0;P<=w;P++){R[P]=[];let T=_.clone().lerp(y,P/w),v=b.clone().lerp(y,P/w),D=w-P;for(let X=0;X<=D;X++)X===0&&P===w?R[P][X]=T:R[P][X]=T.clone().lerp(v,X/D)}for(let P=0;P<w;P++)for(let T=0;T<2*(w-P)-1;T++){let v=Math.floor(T/2);T%2===0?(d(R[P][v+1]),d(R[P+1][v]),d(R[P][v])):(d(R[P][v+1]),d(R[P+1][v+1]),d(R[P+1][v]))}}function c(_){let b=new U;for(let y=0;y<r.length;y+=3)b.x=r[y+0],b.y=r[y+1],b.z=r[y+2],b.normalize().multiplyScalar(_),r[y+0]=b.x,r[y+1]=b.y,r[y+2]=b.z}function h(){let _=new U;for(let b=0;b<r.length;b+=3){_.x=r[b+0],_.y=r[b+1],_.z=r[b+2];let y=m(_)/2/Math.PI+.5,L=p(_)/Math.PI+.5;o.push(y,1-L)}g(),u()}function u(){for(let _=0;_<o.length;_+=6){let b=o[_+0],y=o[_+2],L=o[_+4],w=Math.max(b,y,L),R=Math.min(b,y,L);w>.9&&R<.1&&(b<.2&&(o[_+0]+=1),y<.2&&(o[_+2]+=1),L<.2&&(o[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,b){let y=_*3;b.x=e[y+0],b.y=e[y+1],b.z=e[y+2]}function g(){let _=new U,b=new U,y=new U,L=new U,w=new Ve,R=new Ve,P=new Ve;for(let T=0,v=0;T<r.length;T+=9,v+=6){_.set(r[T+0],r[T+1],r[T+2]),b.set(r[T+3],r[T+4],r[T+5]),y.set(r[T+6],r[T+7],r[T+8]),w.set(o[v+0],o[v+1]),R.set(o[v+2],o[v+3]),P.set(o[v+4],o[v+5]),L.copy(_).add(b).add(y).divideScalar(3);let D=m(L);x(w,v+0,_,D),x(R,v+2,b,D),x(P,v+4,y,D)}}function x(_,b,y,L){L<0&&_.x===1&&(o[b]=_.x-1),y.x===0&&y.z===0&&(o[b]=L/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}},Qa=class n extends So{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Dr=class n extends So{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Nr=class n extends So{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},as=class n extends pt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=e,d=(t-e)/s,f=new U,g=new Ve;for(let x=0;x<=s;x++){for(let m=0;m<=i;m++){let p=r+m/i*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<s;x++){let m=x*(i+1);for(let p=0;p<i;p++){let _=p+m,b=_,y=_+i+1,L=_+i+2,w=_+1;a.push(b,y,w),a.push(y,L,w)}}this.setIndex(a),this.setAttribute("position",new rt(l,3)),this.setAttribute("normal",new rt(c,3)),this.setAttribute("uv",new rt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Li=class n extends pt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new U,d=new U,f=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){let _=[],b=p/i,y=0;p===0&&o===0?y=.5/t:p===i&&l===Math.PI&&(y=-.5/t);for(let L=0;L<=t;L++){let w=L/t;u.x=-e*Math.cos(s+w*r)*Math.sin(o+b*a),u.y=e*Math.cos(o+b*a),u.z=e*Math.sin(s+w*r)*Math.sin(o+b*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(w+y,1-b),_.push(c++)}h.push(_)}for(let p=0;p<i;p++)for(let _=0;_<t;_++){let b=h[p][_+1],y=h[p][_],L=h[p+1][_],w=h[p+1][_+1];(p!==0||o>0)&&f.push(b,y,w),(p!==i-1||l<Math.PI)&&f.push(y,L,w)}this.setIndex(f),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(x,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Wn=class n extends pt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new U,u=new U,d=new U;for(let f=0;f<=i;f++)for(let g=0;g<=s;g++){let x=g/s*r,m=f/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(x),u.y=(e+t*Math.cos(m))*Math.sin(x),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=s;g++){let x=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,_=(s+1)*f+g;o.push(x,m,_),o.push(m,p,_)}this.setIndex(o),this.setAttribute("position",new rt(a,3)),this.setAttribute("normal",new rt(l,3)),this.setAttribute("uv",new rt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var el=class extends qt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},Ae=class extends Ln{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$h,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Bn=class extends Ae{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ve(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return xn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var wo=class extends Ln{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$h,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=Uh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Ca(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Ov(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Fv(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Lf(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function ap(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}var ls=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Mh=class extends ls{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vd,endingEnd:vd}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Md:r=e,a=2*t-i;break;case bd:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Md:o=e,l=2*i-t;break;case bd:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,_=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,b=(-1-f)*m+(1.5+f)*x+.5*g,y=f*m-f*x;for(let L=0;L!==a;++L)r[L]=p*o[h+L]+_*o[c+L]+b*o[l+L]+y*o[u+L];return r}},bh=class extends ls{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Th=class extends ls{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Xn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ca(t,this.TimeBufferType),this.values=Ca(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ca(e.times,Array),values:Ca(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Th(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new bh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Mh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ar:t=this.InterpolantFactoryMethodDiscrete;break;case Rr:t=this.InterpolantFactoryMethodLinear;break;case Bl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ar;case this.InterpolantFactoryMethodLinear:return Rr;case this.InterpolantFactoryMethodSmooth:return Bl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Ov(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Bl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let x=t[u+g];if(x!==t[d+g]||x!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Xn.prototype.TimeBufferType=Float32Array;Xn.prototype.ValueBufferType=Float32Array;Xn.prototype.DefaultInterpolation=Rr;var cs=class extends Xn{constructor(e,t,i){super(e,t,i)}};cs.prototype.ValueTypeName="bool";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=Ar;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;var tl=class extends Xn{};tl.prototype.ValueTypeName="color";var Di=class extends Xn{};Di.prototype.ValueTypeName="number";var Eh=class extends ls{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Sn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ni=class extends Xn{InterpolantFactoryMethodLinear(e){return new Eh(this.times,this.values,this.getValueSize(),e)}};Ni.prototype.ValueTypeName="quaternion";Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var hs=class extends Xn{constructor(e,t,i){super(e,t,i)}};hs.prototype.ValueTypeName="string";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=Ar;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ui=class extends Xn{};Ui.prototype.ValueTypeName="vector";var nl=class{constructor(e="",t=-1,i=[],s=r0){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=ei(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(kv(i[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(Xn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=Fv(l);l=Lf(l,1,h),c=Lf(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Di(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(u,d,f,g,x){if(f.length!==0){let m=[],p=[];ap(f,m,p,g),m.length!==0&&x.push(new u(d,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(let x in f){let m=[],p=[];for(let _=0;_!==d[g].morphTargets.length;++_){let b=d[g];m.push(b.time),p.push(b.morphTarget===x?1:0)}s.push(new Di(".morphTargetInfluence["+x+"]",m,p))}l=f.length*o}else{let f=".bones["+t[u].name+"]";i(Ui,f+".position",d,"pos",s),i(Ni,f+".quaternion",d,"rot",s),i(Ui,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Bv(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Di;case"vector":case"vector2":case"vector3":case"vector4":return Ui;case"color":return tl;case"quaternion":return Ni;case"bool":case"boolean":return cs;case"string":return hs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function kv(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Bv(n.type);if(n.times===void 0){let t=[],i=[];ap(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var Ji={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Sh=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},Hv=new Sh,Oi=class{constructor(e){this.manager=e!==void 0?e:Hv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Oi.DEFAULT_MATERIAL_NAME="__DEFAULT";var bi={},wh=class extends Error{constructor(e,t){super(e),this.response=t}},Ao=class extends Oi{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ji.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(bi[e]!==void 0){bi[e].push({onLoad:t,onProgress:i,onError:s});return}bi[e]=[],bi[e].push({onLoad:t,onProgress:i,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=bi[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,x=0,m=new ReadableStream({start(p){_();function _(){u.read().then(({done:b,value:y})=>{if(b)p.close();else{x+=y.byteLength;let L=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let w=0,R=h.length;w<R;w++){let P=h[w];P.onProgress&&P.onProgress(L)}p.enqueue(y),_()}},b=>{p.error(b)})}}});return new Response(m)}else throw new wh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Ji.add(e,c);let h=bi[e];delete bi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=bi[e];if(h===void 0)throw this.manager.itemError(e),c;delete bi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Ah=class extends Oi{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ji.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=_o("img");function l(){h(),Ji.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var il=class extends Oi{constructor(e){super(e)}load(e,t,i,s){let r=new on,o=new Ah(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},Ur=class extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ro=class extends Ur{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},xc=new $e,Df=new U,Nf=new U,Co=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pr,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Df.setFromMatrixPosition(e.matrixWorld),t.position.copy(Df),Nf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nf),t.updateMatrixWorld(),xc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(xc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Rh=class extends Co{constructor(){super(new Xt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=Cr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},us=class extends Ur{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Rh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Uf=new $e,co=new U,yc=new U,Ch=class extends Co{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ve(4,2),this._viewportCount=6,this._viewports=[new gt(2,1,1,1),new gt(0,1,1,1),new gt(3,1,1,1),new gt(1,1,1,1),new gt(3,0,1,1),new gt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),co.setFromMatrixPosition(e.matrixWorld),i.position.copy(co),yc.copy(i.position),yc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(yc),i.updateMatrixWorld(),s.makeTranslation(-co.x,-co.y,-co.z),Uf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uf)}},zs=class extends Ur{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Ch}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ih=class extends Co{constructor(){super(new ns(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Or=class extends Ur{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new Ih}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ds=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var sl=class extends Oi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ji.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ji.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Ji.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Ji.add(e,l),r.manager.itemStart(e)}};var Fr=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Of(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Of();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Of(){return performance.now()}var jh="\\[\\]\\.:\\/",zv=new RegExp("["+jh+"]","g"),Jh="[^"+jh+"]",Vv="[^"+jh.replace("\\.","")+"]",Gv=/((?:WC+[\/:])*)/.source.replace("WC",Jh),Wv=/(WCOD+)?/.source.replace("WCOD",Vv),Xv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jh),qv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jh),Yv=new RegExp("^"+Gv+Wv+Xv+qv+"$"),$v=["material","materials","bones","map"],Ph=class{constructor(e,t,i){let s=i||Dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Dt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(zv,"")}static parseTrackName(e){let t=Yv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);$v.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Dt.Composite=Ph;Dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Dt.prototype.GetterByBindingType=[Dt.prototype._getValue_direct,Dt.prototype._getValue_array,Dt.prototype._getValue_arrayElement,Dt.prototype._getValue_toArray];Dt.prototype.SetterByBindingTypeAndVersioning=[[Dt.prototype._setValue_direct,Dt.prototype._setValue_direct_setNeedsUpdate,Dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_array,Dt.prototype._setValue_array_setNeedsUpdate,Dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_arrayElement,Dt.prototype._setValue_arrayElement_setNeedsUpdate,Dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_fromArray,Dt.prototype._setValue_fromArray_setNeedsUpdate,Dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var q1=new Float32Array(1);var Ff=new $e,rl=class{constructor(e,t,i=0,s=1/0){this.ray=new Bs(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new vo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ff.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ff),this}intersectObject(e,t=!0,i=[]){return Lh(e,this,i,t),i.sort(Bf),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Lh(e[s],this,i,t);return i.sort(Bf),i}};function Bf(n,e){return n.distance-e.distance}function Lh(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)Lh(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dh);function Lo(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new pt,c=0;for(let h=0;h<n.length;++h){let u=n[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0,u=[];for(let d=0;d<n.length;++d){let f=n[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=n[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=cp(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);let g=cp(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function cp(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new At(o,t,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<t;g++){let x=h.getComponent(d,g);a.setComponent(d+u,g,x)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function Qh(n,e){if(e===Kf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Po||e===ll){let t=n.getIndex();if(t===null){let o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=t.count-2,s=[];if(e===Po)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}var Hr=class extends Oi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ou(t)}),this.register(function(t){return new au(t)}),this.register(function(t){return new gu(t)}),this.register(function(t){return new xu(t)}),this.register(function(t){return new yu(t)}),this.register(function(t){return new cu(t)}),this.register(function(t){return new hu(t)}),this.register(function(t){return new uu(t)}),this.register(function(t){return new du(t)}),this.register(function(t){return new ru(t)}),this.register(function(t){return new fu(t)}),this.register(function(t){return new lu(t)}),this.register(function(t){return new mu(t)}),this.register(function(t){return new pu(t)}),this.register(function(t){return new iu(t)}),this.register(function(t){return new _u(t)}),this.register(function(t){return new vu(t)})}load(e,t,i,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=ds.extractUrlBase(e);o=ds.resolveURL(c,this.path)}else o=ds.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Ao(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===pp){try{o[ot.KHR_BINARY_GLTF]=new Mu(e)}catch(u){s&&s(u);return}r=JSON.parse(o[ot.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Ru(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case ot.KHR_MATERIALS_UNLIT:o[u]=new su;break;case ot.KHR_DRACO_MESH_COMPRESSION:o[u]=new bu(r,this.dracoLoader);break;case ot.KHR_TEXTURE_TRANSFORM:o[u]=new Tu;break;case ot.KHR_MESH_QUANTIZATION:o[u]=new Eu;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,s)}parseAsync(e,t){let i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}};function Zv(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}var ot={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},iu=class{constructor(e){this.parser=e,this.name=ot.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,s=t.cache.get(i);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new ve(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Mn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Or(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new zs(h),c.distance=u;break;case"spot":c=new us(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Fi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}},su=class{constructor(){this.name=ot.KHR_MATERIALS_UNLIT}getMaterialType(){return Tt}extendParams(e,t,i){let s=[];e.color=new ve(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Mn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,Wt))}return Promise.all(s)}},ru=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},ou=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Bn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ve(a,a)}return Promise.all(r)}},au=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_DISPERSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Bn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},lu=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Bn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},cu=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SHEEN}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Bn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new ve(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Mn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Wt)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},hu=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Bn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},uu=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_VOLUME}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Bn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ve().setRGB(a[0],a[1],a[2],Mn),Promise.all(r)}},du=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IOR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Bn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},fu=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SPECULAR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Bn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new ve().setRGB(a[0],a[1],a[2],Mn),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Wt)),Promise.all(r)}},pu=class{constructor(e){this.parser=e,this.name=ot.EXT_MATERIALS_BUMP}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Bn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},mu=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Bn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},gu=class{constructor(e){this.parser=e,this.name=ot.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},xu=class{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},yu=class{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=i.textureLoader;if(a.uri){let c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},_u=class{constructor(e){this.name=ot.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},vu=class{constructor(e){this.name=ot.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let s=t.meshes[i.mesh];for(let c of s.primitives)if(c.mode!==qn.TRIANGLES&&c.mode!==qn.TRIANGLE_STRIP&&c.mode!==qn.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=i.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let g of u){let x=new $e,m=new U,p=new Sn,_=new U(1,1,1),b=new Ci(g.geometry,g.material,d);for(let y=0;y<d;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,y),l.SCALE&&_.fromBufferAttribute(l.SCALE,y),b.setMatrixAt(y,x.compose(m,p,_));for(let y in l)if(y==="_COLOR_0"){let L=l[y];b.instanceColor=new Hs(L.array,L.itemSize,L.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);Ht.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),f.push(b)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},pp="glTF",Do=12,hp={JSON:1313821514,BIN:5130562},Mu=class{constructor(e){this.name=ot.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Do),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==pp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Do,r=new DataView(e,Do),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===hp.JSON){let c=new Uint8Array(e,Do+o,a);this.content=i.decode(c)}else if(l===hp.BIN){let c=Do+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},bu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ot.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=wu[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=wu[h]||h.toLowerCase();if(o[h]!==void 0){let d=i.accessors[e.attributes[h]],f=kr[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let x=f.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}u(f)},a,c,Mn,d)})})}},Tu=class{constructor(){this.name=ot.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Eu=class{constructor(){this.name=ot.KHR_MESH_QUANTIZATION}},ul=class extends ls{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-t,u=(i-t)/h,d=u*u,f=d*u,g=e*c,x=g-c,m=-2*f+3*d,p=f-d,_=1-m,b=p-d+u;for(let y=0;y!==a;y++){let L=o[x+y+a],w=o[x+y+l]*h,R=o[g+y+a],P=o[g+y]*h;r[y]=_*L+b*w+m*R+p*P}return r}},Kv=new Sn,Su=class extends ul{interpolate_(e,t,i,s){let r=super.interpolate_(e,t,i,s);return Kv.fromArray(r).normalize().toArray(r),r}},qn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},kr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},up={9728:yn,9729:Cn,9984:zh,9985:fo,9986:gr,9987:ai},dp={33071:Rn,33648:xo,10497:Ai},eu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},wu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ps={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},jv={CUBICSPLINE:void 0,LINEAR:Rr,STEP:Ar},tu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Jv(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Ae({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ci})),n.DefaultMaterial}function Vs(n,e,t){for(let i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Fi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Qv(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(i){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):n.attributes.position;o.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):n.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):n.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return i&&(n.morphAttributes.position=h),s&&(n.morphAttributes.normal=u),r&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function eM(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function tM(n){let e,t=n.extensions&&n.extensions[ot.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+nu(t.attributes):e=n.indices+":"+nu(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+nu(n.targets[i]);return e}function nu(n){let e="",t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Au(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function nM(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var iM=new $e,Ru=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Zv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=i&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&o<98?this.textureLoader=new il(this.options.manager):this.textureLoader=new sl(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ao(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return Vs(r,a,s),Fi(a,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let s=i.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let s=e(t[i]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ot.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){i.load(ds.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){let t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=eu[s.type],a=kr[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new At(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=eu[s.type],c=kr[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,x,m;if(f&&f!==u){let p=Math.floor(d/f),_="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,b=t.cache.get(_);b||(x=new c(a,p*f,s.count*f/h),b=new Mo(x,f/h),t.cache.add(_,b)),m=new bo(b,l,d%f/h,g)}else a===null?x=new c(s.count*l):x=new c(a,d,s.count*l),m=new At(x,l,g);if(s.sparse!==void 0){let p=eu.SCALAR,_=kr[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,L=new _(o[1],b,s.sparse.count*p),w=new c(o[2],y,s.sparse.count*l);a!==null&&(m=new At(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,P=L.length;R<P;R++){let T=L[R];if(m.setX(T,w[R*l]),l>=2&&m.setY(T,w[R*l+1]),l>=3&&m.setZ(T,w[R*l+2]),l>=4&&m.setW(T,w[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=up[d.magFilter]||Cn,h.minFilter=up[d.minFilter]||ai,h.wrapS=dp[d.wrapS]||Ai,h.wrapT=dp[d.wrapT]||Ai,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==yn&&h.minFilter!==Cn,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){let m=new on(x);m.needsUpdate=!0,d(m)}),t.load(ds.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),Fi(u,o),u.userData.mimeType=o.mimeType||nM(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,s){let r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[ot.KHR_TEXTURE_TRANSFORM]){let a=i.extensions!==void 0?i.extensions[ot.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[ot.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,i=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new Pi,Ln.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){let a="LineBasicMaterial:"+i.uuid,l=this.cache.get(a);l||(l=new is,Ln.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Ae}loadMaterial(e){let t=this,i=this.json,s=this.extensions,r=i.materials[e],o,a={},l=r.extensions||{},c=[];if(l[ot.KHR_MATERIALS_UNLIT]){let u=s[ot.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new ve(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Mn),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Wt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=sn);let h=r.alphaMode||tu.OPAQUE;if(h===tu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===tu.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Tt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ve(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Tt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Tt){let u=r.emissiveFactor;a.emissive=new ve().setRGB(u[0],u[1],u[2],Mn)}return r.emissiveTexture!==void 0&&o!==Tt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Wt)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Fi(u,r),t.associations.set(u,{materials:e}),r.extensions&&Vs(s,u,r),u})}createUniqueName(e){let t=Dt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[ot.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return fp(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=tM(c),u=s[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[ot.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=fp(new pt,c,t),s[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?Jv(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let x=h[f],m=o[f],p,_=c[f];if(m.mode===qn.TRIANGLES||m.mode===qn.TRIANGLE_STRIP||m.mode===qn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new qa(x,_):new ne(x,_),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===qn.TRIANGLE_STRIP?p.geometry=Qh(p.geometry,ll):m.mode===qn.TRIANGLE_FAN&&(p.geometry=Qh(p.geometry,Po));else if(m.mode===qn.LINES)p=new Ka(x,_);else if(m.mode===qn.LINE_STRIP)p=new Ii(x,_);else if(m.mode===qn.LINE_LOOP)p=new ja(x,_);else if(m.mode===qn.POINTS)p=new ss(x,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&eM(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Fi(p,r),m.extensions&&Vs(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Vs(s,u[0],r),u[0];let d=new Ue;r.extensions&&Vs(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Xt(Jf.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new ns(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Fi(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let d=new $e;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ya(a,l)})}loadAnimation(e){let t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],g=s.samplers[f.sampler],x=f.target,m=x.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,_=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",_)),c.push(g),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],x=u[3],m=u[4],p=[];for(let _=0,b=d.length;_<b;_++){let y=d[_],L=f[_],w=g[_],R=x[_],P=m[_];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();let T=i._createAnimationTracks(y,L,w,R,P);if(T)for(let v=0;v<T.length;v++)p.push(T[v])}return new nl(r,void 0,p)})}createNodeMesh(e){let t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){let o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(i.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,iM)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new To:c.length>1?h=new Ue:c.length===1?h=c[0]:h=new Ht,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Fi(h,r),r.extensions&&Vs(i,h,r),r.matrix!==void 0){let u=new $e;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],s=this,r=new Ue;i.name&&(r.name=s.createUniqueName(i.name)),Fi(r,i),i.extensions&&Vs(t,r,i);let o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);let c=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof Ln||d instanceof on)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];ps[r.path]===ps.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(ps[r.path]){case ps.weights:c=Di;break;case ps.rotation:c=Ni;break;case ps.position:case ps.scale:c=Ui;break;default:switch(i.itemSize){case 1:c=Di;break;case 2:case 3:default:c=Ui;break}break}let h=s.interpolation!==void 0?jv[s.interpolation]:Rr,u=this._getArrayFromAccessor(i);for(let d=0,f=l.length;d<f;d++){let g=new c(l[d]+"."+ps[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=Au(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let s=this instanceof Ni?Su:ul;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function sM(n,e,t){let i=e.attributes,s=new rn;if(i.POSITION!==void 0){let a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new U(l[0],l[1],l[2]),new U(c[0],c[1],c[2])),a.normalized){let h=Au(kr[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new U,l=new U;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let x=Au(kr[d.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;let o=new jt;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function fp(n,e,t){let i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(let o in i){let a=wu[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){let o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return st.workingColorSpace!==Mn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${st.workingColorSpace}" not supported.`),Fi(n,e),sM(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Qv(n,e.targets,t):n})}var dl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Hn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},rM=new ns(-1,1,1,-1,0,1),Cu=class extends pt{constructor(){super(),this.setAttribute("position",new rt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new rt([0,2,0,0,2,0],2))}},oM=new Cu,ms=class{constructor(e){this._mesh=new ne(oM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,rM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var fl=class extends Hn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof qt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=fs.clone(e.uniforms),this.material=new qt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ms(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var No=class extends Hn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},pl=class extends Hn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var ml=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new Ve);this._width=i.width,this._height=i.height,t=new un(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:kn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new fl(dl),this.copyPass.material.blending=li,this.clock=new Fr}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}No!==void 0&&(o instanceof No?i=!0:o instanceof pl&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Ve);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var gl=class extends Hn{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ve}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var mp={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ve(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var zr=class n extends Hn{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new Ve(e.x,e.y):new Ve(256,256),this.clearColor=new ve(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new un(r,o,{type:kn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new un(r,o,{type:kn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new un(r,o,{type:kn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=mp;this.highPassUniforms=fs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new qt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Ve(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=dl;this.copyUniforms=fs.clone(h.uniforms),this.blendMaterial=new qt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:_n,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ve,this.oldClearAlpha=1,this.basic=new Tt,this.fsQuad=new ms(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ve(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new qt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ve(.5,.5)},direction:{value:new Ve(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new qt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};zr.BlurDirectionX=new Ve(1,0);zr.BlurDirectionY=new Ve(0,1);var gp={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var xl=class extends Hn{constructor(){super();let e=gp;this.uniforms=fs.clone(e.uniforms),this.material=new el({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new ms(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},st.getTransfer(this._outputColorSpace)===bt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Oh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Fh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Bh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Io?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===kh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Hh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Re={ctx:null,master:null,music:null,sfxBus:null,nodes:[],bellTimer:0,mode:null,volume:.6,musicOn:!0,init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}try{this.ctx=new(window.AudioContext||window.webkitAudioContext)}catch{return}let n=this.ctx;this.master=n.createGain(),this.master.gain.value=this.volume,this.master.connect(n.destination),this.verb=n.createConvolver(),this.verb.buffer=this._impulse(3.2);let e=n.createGain();e.gain.value=.45,this.verb.connect(e),e.connect(this.master),this.music=n.createGain(),this.music.gain.value=this.musicOn?.32:0,this.music.connect(this.master),this.music.connect(this.verb),this.sfxBus=n.createGain(),this.sfxBus.gain.value=.8,this.sfxBus.connect(this.master);let t=n.createGain();t.gain.value=.25,this.sfxBus.connect(t),t.connect(this.verb)},_impulse(n){let e=this.ctx,t=e.sampleRate*n,i=e.createBuffer(2,t,e.sampleRate);for(let s=0;s<2;s++){let r=i.getChannelData(s);for(let o=0;o<t;o++)r[o]=(Math.random()*2-1)*Math.pow(1-o/t,2.4)}return i},setVolume(n){this.volume=n,this.master&&this.master.gain.setTargetAtTime(n,this.ctx.currentTime,.05),this._syncTheme()},setMusic(n){this.musicOn=n,this.music&&this.music.gain.setTargetAtTime(n?.32:0,this.ctx.currentTime,.3),this._syncTheme()},
  // Main menu theme: a recorded track played through an <audio> element, which also works when the game is opened by double-click.
  theme: null, themeFade: null, THEME_LEVEL: 0.8,
  _themeVol() { return this.musicOn ? Math.min(1, this.volume * this.THEME_LEVEL) : 0; },
  _fadeTheme(to, sec, then) {
    const a = this.theme; if (!a) return;
    clearInterval(this.themeFade);
    const from = a.volume, steps = Math.max(1, Math.round(sec * 30)); let i = 0;
    this.themeFade = setInterval(() => {
      i++; a.volume = Math.min(1, Math.max(0, from + (to - from) * i / steps));
      if (i >= steps) { clearInterval(this.themeFade); this.themeFade = null; if (then) then(); }
    }, 1000 / 30);
  },
  _startTheme() {
    if (!this.theme) { this.theme = new Audio('assets/main_menu_theme.mp3'); this.theme.loop = true; this.theme.preload = 'auto'; this.theme.volume = 0; }
    const p = this.theme.play(); if (p && p.catch) p.catch(() => {});
    this._fadeTheme(this._themeVol(), 1.5);
  },
  _stopTheme() {
    const a = this.theme; if (!a || a.paused) return;
    this._fadeTheme(0, 1.2, () => { a.pause(); a.currentTime = 0; });
  },
  _syncTheme() { if (this.theme && this.mode === 'menu') { clearInterval(this.themeFade); this.themeFade = null; this.theme.volume = this._themeVol(); } },
playMusic(n){if(!this.ctx||this.mode===n)return;this.mode=n;let e=this.ctx,t=e.currentTime;for(let c of this.nodes)try{c.g.gain.setTargetAtTime(0,t,.8),c.o.forEach(h=>h.stop(t+4))}catch{}this.nodes=[];n==="menu"?this._startTheme():this._stopTheme()},tick(n){if(this.mode==="menu")return;if(!(!this.ctx||!this.musicOn||!this.mode)){if(this.mode==="cantina"){if(this.seqT=(this.seqT||0)-n,this.seqT<=0){this.seqT+=.2777777777777778,this.step=((this.step||0)+1)%16;let e=[87.31,0,0,87.31,0,0,130.81,0,98,0,0,98,0,0,116.54,0],t=[349.23,0,440,523.25,0,440,0,392,349.23,0,293.66,0,349.23,392,0,0];e[this.step]&&this.tone(e[this.step],.35,"triangle",.09,null,this.music),t[this.step]&&Math.random()<.85&&(this.tone(t[this.step],.28,"triangle",.045,null,this.music),this.tone(t[this.step]*2,.12,"sine",.012,null,this.music)),this.step%2===1&&this.noise(.05,.03,7e3,2),this.step%8===4&&this.noise(.12,.06,1800,1)}return}if(this.bellTimer-=n,this.bellTimer<=0){this.bellTimer=2.5+Math.random()*4;let e=this.mode==="menu"?[293.66,369.99,440,554.37,587.33,739.99]:this.mode==="savannah"?[293.66,329.63,369.99,440,493.88,587.33]:[261.63,311.13,392,466.16,523.25],t=e[Math.random()*e.length|0];this.tone(t,3.5,"sine",.05,null,this.music),this.tone(t*2.01,2.5,"sine",.015,null,this.music)}}},tone(n,e,t="sine",i=.2,s=null,r=null,o=0){if(!this.ctx)return;let a=this.ctx,l=a.currentTime+o,c=a.createOscillator(),h=a.createGain();c.type=t,c.frequency.setValueAtTime(n,l),s&&c.frequency.exponentialRampToValueAtTime(s,l+e),h.gain.setValueAtTime(1e-4,l),h.gain.exponentialRampToValueAtTime(i,l+.01),h.gain.exponentialRampToValueAtTime(1e-4,l+e),c.connect(h),h.connect(r||this.sfxBus),c.start(l),c.stop(l+e+.05)},noise(n,e=.2,t=1200,i=1,s=0){if(!this.ctx)return;let r=this.ctx,o=r.currentTime+s,a=Math.max(1,r.sampleRate*n|0),l=r.createBuffer(1,a,r.sampleRate),c=l.getChannelData(0);for(let f=0;f<a;f++)c[f]=Math.random()*2-1;let h=r.createBufferSource();h.buffer=l;let u=r.createBiquadFilter();u.type="bandpass",u.frequency.value=t,u.Q.value=i;let d=r.createGain();d.gain.setValueAtTime(e,o),d.gain.exponentialRampToValueAtTime(1e-4,o+n),h.connect(u),u.connect(d),d.connect(this.sfxBus),h.start(o)},sfx(n){if(this.ctx)switch(n){case"click":this.tone(880,.06,"square",.04),this.tone(1320,.05,"sine",.03,null,null,.03);break;case"hover":this.tone(1600,.03,"sine",.015);break;case"start":this.tone(110,1.8,"sawtooth",.12,55),this.tone(440,1.2,"sine",.08,880),this.noise(1.2,.08,600,.5);break;case"slash":this.noise(.14,.25,2600,.8),this.tone(320,.1,"triangle",.08,140);break;case"heavy":this.noise(.3,.35,900,.6),this.tone(120,.35,"sawtooth",.15,50);break;case"zap":this.tone(1800,.18,"sawtooth",.06,300),this.noise(.12,.12,4e3,2);break;case"lance":this.tone(220,.6,"sawtooth",.12,1800),this.noise(.5,.15,3e3,1);break;case"hit":this.noise(.08,.22,1500,1);break;case"hurt":this.tone(160,.18,"square",.07,80),this.noise(.1,.15,500,1);break;case"heal":[523,659,784,1047].forEach((e,t)=>this.tone(e,.5,"sine",.06,null,null,t*.06));break;case"shield":this.tone(300,.6,"sine",.1,600),this.tone(450,.6,"triangle",.05,900);break;case"blink":this.tone(1200,.25,"sine",.08,200),this.noise(.2,.1,6e3,3);break;case"boom":this.noise(.9,.5,200,.4),this.tone(70,.9,"sine",.3,30);break;case"die":this.tone(200,.6,"sawtooth",.08,40);break;case"levelup":[392,523,659,784,1047].forEach((e,t)=>{this.tone(e,.9,"triangle",.08,null,null,t*.09),this.tone(e*2,.6,"sine",.03,null,null,t*.09)});break;case"quest":[659,784,988].forEach((e,t)=>this.tone(e,.7,"sine",.09,null,null,t*.12));break;case"accept":this.tone(523,.3,"sine",.08),this.tone(784,.4,"sine",.08,null,null,.1);break;case"pickup":this.tone(1047,.3,"sine",.07),this.tone(1568,.4,"sine",.05,null,null,.07);break;case"coin":this.tone(1318,.12,"square",.03),this.tone(1760,.2,"square",.03,null,null,.06);break;case"error":this.tone(180,.15,"square",.05);break;case"jump":this.noise(.12,.08,1800,1.5);break;case"flip":this.noise(.25,.12,2400,2),this.tone(500,.2,"sine",.03,900);break;case"bulletjump":this.noise(.45,.22,1400,1.2),this.tone(160,.35,"sawtooth",.08,520),this.tone(900,.3,"sine",.04,2200);break;case"slide":this.noise(.45,.14,700,.7);break;case"roll":this.noise(.3,.1,900,1);break;case"land":this.noise(.35,.3,300,.6),this.tone(90,.3,"sine",.2,40);break;case"chat":this.tone(1400,.05,"sine",.02);break;case"death":[330,262,196,131].forEach((e,t)=>this.tone(e,1.2,"triangle",.08,null,null,t*.25));break}}};function xp(n){let e=new Map,t=new Map,i=n.clone();return yp(n,i,function(s,r){e.set(r,s),t.set(s,r)}),i.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),i}function yp(n,e,t){t(n,e);for(let i=0;i<n.children.length;i++)yp(n.children[i],e.children[i],t)}var Kt={flip:.5,bj:.62,roll:.5,landHard:.55,landSoft:.2},Pu=null,Sp=null,Lu=()=>!!Pu;async function wp(){await new Promise((o,a)=>{let l=document.createElement("script");l.src="assets/soldier.js",l.onload=o,l.onerror=()=>a(new Error("Could not load assets/soldier.js")),document.head.appendChild(l)});let n=window.SOLDIER_GLB_B64;window.SOLDIER_GLB_B64=null;let e;try{e=await(await fetch("data:application/octet-stream;base64,"+n)).arrayBuffer()}catch{let a=atob(n),l=new Uint8Array(a.length);for(let c=0;c<a.length;c++)l[c]=a.charCodeAt(c);e=l.buffer}let i=(await new Promise((o,a)=>new Hr().parse(e,"",o,a))).scene,s=i.getObjectByName("soldier_lod");if(s){s.parent.remove(s);let o=s.geometry.index?s.geometry.toNonIndexed():s.geometry.clone();for(let a of Object.keys(o.attributes))["position","normal","color"].includes(a)||o.deleteAttribute(a);Sp=o}let r=i.getObjectByName("soldier");r.material.envMapIntensity=1,r.material.normalScale.set(1,-1),Pu=i}var Du=["hips","spine","chest","neck","head","clavL","uarmL","farmL","handL","thighL","shinL","footL","clavR","uarmR","farmR","handR","thighR","shinR","footR"],Bt={};Du.forEach((n,e)=>{Bt[n+".x"]=e*3,Bt[n+".y"]=e*3+1,Bt[n+".z"]=e*3+2});var Vr=Du.length*3;Bt.hipsY=Vr;Bt.pivDY=Vr+1;Bt.pivX=Vr+2;Bt.pivY=Vr+3;Bt.pivZ=Vr+4;var Uo=Vr+5,_p=.368,Bi=Math.PI*2,zn=(n,e,t)=>Math.max(e,Math.min(t,n)),hi=(n,e,t)=>{let i=zn((t-n)/(e-n),0,1);return i*i*(3-2*i)},yl=n=>n<.5?2*n*n:1-Math.pow(-2*n+2,2)/2,vp=n=>(n=(n+Math.PI)%Bi,n<0&&(n+=Bi),n-Math.PI);function qe(n,e,t,i=1){n[Bt[e]]+=t*i}function Fe(n,e,t,i,s,r=1){let o=Bt[e+".x"];n[o]+=t*r,n[o+1]+=i*r,n[o+2]+=s*r}function Et(n,e,t,i,s,r=1,o=t){Fe(n,e+"L",t,i,s,r),Fe(n,e+"R",o,-i,-s,r)}function _l(n,e,t=1){if(e<=0||t<=0)return;let i=Math.acos(zn((2*_p-e)/(2*_p),-1,1));qe(n,"hipsY",-e,t);for(let s of"LR")qe(n,"thigh"+s+".x",-i,t),qe(n,"shin"+s+".x",2*i,t),qe(n,"foot"+s+".x",-i,t)}function Gs(n,e,t){if(!(t<=0)){if(t>=1){n.set(e);return}for(let i=0;i<Uo;i++)n[i]+=(e[i]-n[i])*t}}var aM=(n,e)=>{if(n<=e[0][0])return e[0][1];for(let t=1;t<e.length;t++)if(n<=e[t][0]){let[i,s]=e[t-1],[r,o]=e[t];return s+(o-s)*yl((n-i)/(r-i))}return e[e.length-1][1]},Iu={slashA:{dur:.52,ch:{"uarmR.x":[[0,-.3],[.3,-.6],[.55,-1.45],[1,-.3]],"uarmR.z":[[0,-.2],[.3,-1.25],[.55,.45],[1,-.15]],"farmR.x":[[0,-.6],[.3,-1.5],[.55,-.25],[1,-.6]],"chest.y":[[0,0],[.3,-.6],[.55,.65],[1,0]],"spine.x":[[0,.1],[.3,.05],[.55,.3],[1,.1]],"uarmL.x":[[0,-.5],[1,-.5]],"farmL.x":[[0,-1.5],[1,-1.5]],"uarmL.z":[[0,.3],[1,.3]]}},slashB:{dur:.5,ch:{"uarmR.x":[[0,-.4],[.3,-1.3],[.55,-.9],[1,-.3]],"uarmR.z":[[0,.2],[.3,.55],[.55,-1.45],[1,-.15]],"farmR.x":[[0,-.6],[.3,-1.7],[.55,-.2],[1,-.6]],"chest.y":[[0,0],[.3,.6],[.55,-.7],[1,0]],"spine.x":[[0,.1],[.55,.28],[1,.1]],"uarmL.x":[[0,-.5],[1,-.5]],"farmL.x":[[0,-1.5],[1,-1.5]],"uarmL.z":[[0,.3],[1,.3]]}},heavy:{dur:.62,ch:{"uarmR.x":[[0,-.3],[.38,-2.85],[.6,-.75],[1,-.3]],"farmR.x":[[0,-.5],[.38,-.7],[.6,-.1],[1,-.5]],"uarmL.x":[[0,-.4],[.38,-2.7],[.6,-.8],[1,-.4]],"farmL.x":[[0,-1],[.38,-.9],[.6,-.2],[1,-1]],"uarmR.z":[[0,-.1],[.6,.25],[1,-.1]],"uarmL.z":[[0,.1],[.6,-.25],[1,.1]],"spine.x":[[0,.05],[.38,-.3],[.6,.5],[1,.05]],"chest.x":[[0,0],[.38,-.15],[.6,.2],[1,0]],hipsY:[[0,0],[.5,0],[.62,-.16],[1,0]]}},stabR:{dur:.36,ch:{"uarmR.x":[[0,-.4],[.3,.35],[.55,-1.5],[1,-.4]],"farmR.x":[[0,-1.2],[.3,-2],[.55,-.15],[1,-1.2]],"uarmR.z":[[0,-.2],[.55,.2],[1,-.2]],"chest.y":[[0,0],[.3,-.35],[.55,.5],[1,0]],"spine.x":[[0,.15],[.55,.35],[1,.15]]}},spin:{dur:.55,ch:{"uarmR.z":[[0,-.3],[.2,-1.4],[.8,-1.4],[1,-.3]],"uarmL.z":[[0,.3],[.2,1.4],[.8,1.4],[1,.3]],"farmR.x":[[0,-1],[.2,-.1],[.8,-.1],[1,-1]],"farmL.x":[[0,-1],[.2,-.1],[.8,-.1],[1,-1]],pivY:[[0,0],[.85,Bi],[1,Bi]],hipsY:[[0,0],[.3,-.14],[.8,-.14],[1,0]]}},cast:{dur:.55,ch:{"uarmR.x":[[0,-.3],[.3,-1.6],[.75,-1.55],[1,-.3]],"farmR.x":[[0,-.7],[.3,-.1],[.75,-.15],[1,-.7]],"uarmR.z":[[0,-.15],[.3,.15],[1,-.15]],"chest.y":[[0,0],[.3,-.4],[.75,-.35],[1,0]],"uarmL.x":[[0,-.4],[.3,-.9],[.75,-.9],[1,-.4]],"farmL.x":[[0,-.8],[.3,-1.5],[.75,-1.5],[1,-.8]],"uarmL.z":[[0,.2],[.3,.45],[1,.2]],"spine.x":[[0,.05],[.3,.2],[1,.05]],"handR.x":[[0,0],[.3,1.5],[.75,1.5],[1,0]]}},lance:{dur:.8,ch:{"uarmR.x":[[0,-.3],[.45,.3],[.62,-1.6],[.85,-1.6],[1,-.3]],"farmR.x":[[0,-.7],[.45,-1.9],[.62,-.05],[1,-.7]],"uarmL.x":[[0,-.3],[.45,.3],[.62,-1.6],[.85,-1.6],[1,-.3]],"farmL.x":[[0,-.7],[.45,-1.9],[.62,-.05],[1,-.7]],"uarmR.z":[[0,-.1],[.62,.3],[1,-.1]],"uarmL.z":[[0,.1],[.62,-.3],[1,.1]],"chest.y":[[0,0],[.45,-.5],[.62,.1],[1,0]],"spine.x":[[0,.05],[.45,-.1],[.62,.3],[1,.05]],hipsY:[[0,0],[.45,-.12],[.62,-.05],[1,0]]}},slam:{dur:.75,ch:{pivDY:[[0,0],[.3,.55],[.5,-.45],[.8,-.45],[1,0]],pivX:[[0,0],[.3,-.2],[.5,.35],[.8,.35],[1,0]],"uarmR.x":[[0,-.3],[.3,-2.9],[.5,-.9],[.8,-.9],[1,-.3]],"uarmL.x":[[0,-.3],[.3,-2.9],[.5,-.9],[.8,-.9],[1,-.3]],"farmR.x":[[0,-.5],[.3,-.4],[.5,-.1],[1,-.5]],"farmL.x":[[0,-.5],[.3,-.4],[.5,-.1],[1,-.5]],"thighL.x":[[0,0],[.3,-1.2],[.5,-1.4],[.8,-1.4],[1,0]],"shinL.x":[[0,0],[.3,1.8],[.5,1.7],[.8,1.7],[1,0]],"thighR.x":[[0,0],[.3,-.6],[.5,.2],[.8,.2],[1,0]],"shinR.x":[[0,0],[.3,1.4],[.5,1.3],[.8,1.3],[1,0]],"spine.x":[[0,0],[.3,-.3],[.5,.4],[.8,.4],[1,0]]}},guard:{dur:.7,ch:{"uarmR.x":[[0,-.3],[.25,-1.35],[.8,-1.35],[1,-.3]],"uarmL.x":[[0,-.3],[.25,-1.35],[.8,-1.35],[1,-.3]],"uarmR.z":[[0,-.1],[.25,.35],[.8,.35],[1,-.1]],"uarmL.z":[[0,.1],[.25,-.35],[.8,-.35],[1,.1]],"farmR.x":[[0,-.5],[.25,-1.9],[.8,-1.9],[1,-.5]],"farmL.x":[[0,-.5],[.25,-1.9],[.8,-1.9],[1,-.5]],hipsY:[[0,0],[.25,-.15],[.8,-.15],[1,0]],"spine.x":[[0,0],[.25,.2],[.8,.2],[1,0]]}},heal:{dur:.9,ch:{"uarmR.z":[[0,-.1],[.3,-1.9],[.8,-1.9],[1,-.1]],"uarmL.z":[[0,.1],[.3,1.9],[.8,1.9],[1,.1]],"uarmR.x":[[0,-.2],[.3,-.4],[1,-.2]],"uarmL.x":[[0,-.2],[.3,-.4],[1,-.2]],"farmR.x":[[0,-.5],[.3,-.2],[1,-.5]],"farmL.x":[[0,-.5],[.3,-.2],[1,-.5]],"spine.x":[[0,0],[.3,-.2],[.8,-.2],[1,0]],"neck.x":[[0,0],[.3,-.4],[.8,-.4],[1,0]]}},wave:{dur:1.2,ch:{"uarmR.z":[[0,-.1],[.2,-2.5],[.85,-2.5],[1,-.1]],"farmR.z":[[0,0],[.2,-.5],[.35,.2],[.5,-.5],[.65,.2],[.85,-.3],[1,0]],"farmR.x":[[0,-.3],[.2,-.4],[1,-.3]],"neck.y":[[0,0],[.2,-.2],[1,0]]}},salute:{dur:1.3,ch:{"uarmR.x":[[0,-.2],[.25,-.9],[.8,-.9],[1,-.2]],"uarmR.z":[[0,-.1],[.25,.25],[.8,.25],[1,-.1]],"farmR.x":[[0,-.4],[.25,-2.2],[.8,-2.2],[1,-.4]],"farmR.y":[[0,0],[.25,.6],[.8,.6],[1,0]],"neck.x":[[0,0],[.3,.35],[.75,.35],[1,0]],"spine.x":[[0,0],[.3,.1],[.75,.1],[1,0]]}}};function lM(n){let e={};for(let[t,i]of Object.entries(n.ch)){let[s,r]=t.split(".");if(!r){e[t]=i;continue}let o=s.endsWith("R")?s.slice(0,-1)+"L":s.endsWith("L")?s.slice(0,-1)+"R":s;e[o+"."+r]=r==="y"||r==="z"?i.map(([a,l])=>[a,-l]):i}return{dur:n.dur,ch:e}}Iu.stabL=lM(Iu.stabR);var Ap={};for(let[n,e]of Object.entries(Iu))Ap[n]={name:n,dur:e.dur,ch:Object.entries(e.ch).map(([t,i])=>[Bt[t],i])};var Mp={blade:["slashA","slashB","heavy"],daggers:["stabR","stabL","stabR","spin"],staff:["cast"],none:["slashA","slashB"]},cM={slam:"slam",guard:"guard",restore:"heal",bolt:"cast",chain:"cast",lance:"lance",judge:"heavy",wave:"wave",salute:"salute",cast:"cast",blink:"spin"};function bp(n,e,t){let i=new Ue;i.position.set(0,-.105,.03);let s=(r,o,a,l,c,h,u)=>{let d=new ne(new vn(r,o,a),l);return d.position.set(c,h,u),d.castShadow=!0,i.add(d),d};if(n==="blade")i.rotation.x=1.22,s(.045,.045,.22,t.dark(),0,0,0),s(.06,.16,.035,t.armor(5857902),0,0,.12),s(.022,.085,.98,t.armor(9016998),0,.005,.63),s(.026,.014,.98,t.glow(e,2.6),0,-.045,.63);else if(n==="daggers")i.rotation.x=-.28,s(.04,.12,.04,t.dark(),0,0,0),s(.02,.46,.06,t.armor(9016998),0,.29,-.02),s(.024,.46,.012,t.glow(e,2.8),0,.29,-.056);else if(n==="staff"){let r=new ne(new Yt(.022,.026,1.9,8),t.dark());r.position.y=.25,r.castShadow=!0,i.add(r);for(let a of[.85,-.55])s(.06,.08,.06,t.armor(5857902),0,a,0);let o=new ne(new Nr(.11,0),t.glow(e,3));o.position.y=1.32,i.add(o),i.userData.orb=o}return i}function Nu({energy:n=4122367,accent:e=4122367,weapon:t="none",tint:i=null,mats:s}){let r=xp(Pu),o=r.getObjectByName("soldier"),a=o.material.clone();a.emissive=new ve(n),a.emissiveIntensity=3.2,i!=null&&(a.color=new ve(i)),o.material=a,o.castShadow=!0,o.receiveShadow=!0,o.boundingSphere=new jt(new U(0,1,0),1.9);let l={};r.traverse(f=>{f.isBone&&(l[f.name]=f)});let c=new Ue,h=new Ue;h.position.y=1,r.position.y=-1,h.rotation.order="XYZ",c.add(h),h.add(r);let u=bp(t,e,s);if(t==="daggers"){l.handR.add(u);let f=bp("daggers",e,s);l.handL.add(f)}else t!=="none"&&l.handR.add(u);return u.userData.orb&&(c.userData.orb=u.userData.orb),{isSoldier:!0,group:c,pivot:h,bones:Du.map(f=>l[f]),hipsRest:l.hips.position.y,weapon:t,mesh:o,st:{lx:null,lz:0,lyaw:0,yawRate:0,spd:0,vy:0,ly:0,phase:Math.random()*Bi,seed:Math.random()*100,air:0,slide:0,glide:0,combat:0,act:null,actT:0,combo:0,lastAtk:0,C:new Float32Array(Uo),T:new Float32Array(Uo),Q:new Float32Array(Uo),flipWas:0,bjWas:0,rollWas:0},farBake:()=>({key:"soldier",body:Sp,glow:null}),legs:[],arms:[],torso:l.chest,head:l.head,hips:l.hips}}function hM(n,e,t,i,s){_l(n,.035,e),Et(n,"thigh",0,0,.07,e),Et(n,"foot",0,0,-.07,e),qe(n,"hips.z",.035+.02*Math.sin(t*.45+i.seed),e),qe(n,"chest.x",.03*Math.sin(t*1.7),e),qe(n,"chest.y",.06,e),qe(n,"chest.z",-.03,e),qe(n,"neck.y",.32*Math.sin(t*.29+i.seed)*Math.sin(t*.11+i.seed*2),e),qe(n,"head.x",.06*Math.sin(t*.41+i.seed),e),Et(n,"uarm",.04,0,.13,e),Et(n,"farm",-.32,0,0,e),s==="blade"&&(Fe(n,"uarmR",-.12,0,.02,e),Fe(n,"farmR",-.35,0,0,e)),s==="staff"&&(Fe(n,"uarmR",-.12,0,-.18,e),Fe(n,"farmR",-.75,-.2,0,e),Fe(n,"handR",.85,0,0,e)),s==="daggers"&&(Et(n,"uarm",0,0,.08,e),Et(n,"farm",-.15,0,0,e))}function uM(n,e,t,i){_l(n,.14,e),Fe(n,"thighL",-.28,0,.1,e),Fe(n,"thighR",.22,0,-.1,e),Fe(n,"footR",-.15,0,0,e),qe(n,"spine.x",.15,e),qe(n,"chest.y",.3,e),qe(n,"neck.y",-.3,e),qe(n,"hips.y",.1,e),qe(n,"hipsY",.012*Math.sin(t*5),e),i==="staff"?(Fe(n,"uarmR",-.6,0,-.1,e),Fe(n,"farmR",-.85,0,0,e),Fe(n,"handR",1.4,0,0,e),Fe(n,"uarmL",-.75,0,.3,e),Fe(n,"farmL",-1.3,0,0,e)):(Fe(n,"uarmR",-.7,0,-.25,e),Fe(n,"farmR",-1.3,0,0,e),Fe(n,"uarmL",-.5,0,.3,e),Fe(n,"farmL",-1.65,0,0,e))}function Tp(n,e,t,i,s,r,o,a){let l=Math.sin(t),c=r+s*Math.pow(Math.max(0,Math.cos(t+.55)),1.3);Fe(n,"thigh"+e,-i*l-o,0,0,a),Fe(n,"shin"+e,c,0,0,a),Fe(n,"foot"+e,.35*Math.max(0,-l)*(i>.6?1:.4)-.1*c*.3,0,0,a)}function dM(n,e,t,i,s){let r=zn(i,0,1),o=zn(i-1,0,1),a=.42+.4*r+.22*o,l=.55+.95*r+.4*o,c=.06+.2*r+.05*o,h=.06*r+.14*o,u=.04+.16*r+.32*o,d=Math.sin(t);Tp(n,"L",t,a,l,c,h,e),Tp(n,"R",t+Math.PI,a,l,c,h,e);let f=(.025-.08*r-.01*o)*Math.cos(2*t);qe(n,"hipsY",f-.02*r-.04*o,e),qe(n,"hips.y",-.13*d*(1-.4*o),e),qe(n,"chest.y",.26*d*(1-.5*o),e),qe(n,"hips.z",.04*Math.cos(t)*(1-r),e),qe(n,"spine.x",u*.55,e),qe(n,"chest.x",u*.45,e),qe(n,"neck.x",-u*.5,e),qe(n,"head.x",-u*.3,e);let g=s==="blade"||s==="daggers"||s==="none"?o:0,x=(.3+.6*r)*(1-g),m=.25+1.1*r;Fe(n,"uarmL",x*d,0,.1+.05*r,e),Fe(n,"farmL",-m-.25*Math.max(0,-d)*r,0,0,e),s==="staff"&&o>0?(Fe(n,"uarmR",x*-d*(1-o)+.85*o,0,-.1-.15*o,e),Fe(n,"farmR",-m*(1-o)-.35*o,0,0,e)):(Fe(n,"uarmR",-x*d,0,-.1-.05*r,e),Fe(n,"farmR",-m-.25*Math.max(0,d)*r,0,0,e)),g>0&&(Et(n,"uarm",1.2+.06*Math.sin(t*2),0,.32,e*g),Et(n,"farm",m-.2,0,0,e*g),qe(n,"chest.x",.08,e*g),Et(n,"clav",0,.12,0,e*g))}function fM(n,e,t,i){let s=hi(-5,4,t);Fe(n,"thighL",-.95*s-.3*(1-s),0,.05,e),Fe(n,"shinL",1.55*s+.55*(1-s),0,0,e),Fe(n,"thighR",-.3*s-.55*(1-s),0,-.05,e),Fe(n,"shinR",.8*s+1*(1-s),0,0,e),Et(n,"foot",.3,0,0,e),Et(n,"uarm",-.45*s-.15*(1-s),0,.4*s+.85*(1-s),e),Et(n,"farm",-.7*s-.35*(1-s),0,0,e),qe(n,"spine.x",.1+.25*hi(10,16,i),e),qe(n,"neck.x",-.15,e)}function pM(n,e,t){qe(n,"pivDY",-.62,e),qe(n,"pivX",-.12,e),Fe(n,"thighL",-1.4,0,.05,e),Fe(n,"shinL",.12,0,0,e),Fe(n,"footL",.35,0,0,e),Fe(n,"thighR",-.95,.2,-.55,e),Fe(n,"shinR",2.3,0,0,e),Fe(n,"footR",.4,0,0,e),qe(n,"spine.x",.28,e),qe(n,"chest.y",.32,e),qe(n,"neck.x",-.32,e),qe(n,"neck.y",-.25,e),Fe(n,"uarmL",.45,0,.75,e),Fe(n,"farmL",-.15,0,0,e),Fe(n,"uarmR",-.8,0,-.3,e),Fe(n,"farmR",-.85,0,0,e),qe(n,"hipsY",.008*Math.sin(t*40),e)}function Ep(n,e){Et(n,"thigh",-1.75,0,.12,e),Et(n,"shin",2.35,0,0,e),Et(n,"foot",.3,0,0,e),qe(n,"spine.x",.55,e),qe(n,"chest.x",.2,e),qe(n,"neck.x",.35,e),Et(n,"uarm",-.75,0,.3,e),Et(n,"farm",-1.4,0,0,e)}function mM(n,e){Et(n,"thigh",.12,0,.04,e),Et(n,"shin",.18,0,0,e),Et(n,"foot",.55,0,0,e),Et(n,"uarm",.4,0,.22,e),Et(n,"farm",-.1,0,0,e),Et(n,"clav",0,.1,0,e),qe(n,"spine.x",-.05,e),qe(n,"neck.x",-.75,e),qe(n,"head.x",-.2,e)}function gM(n,e,t){qe(n,"pivX",.55,e),Et(n,"uarm",-.25,0,1.3+.05*Math.sin(t*3),e),Et(n,"farm",-.2,0,0,e),Fe(n,"thighL",.25,0,.08,e),Fe(n,"shinL",.45,0,0,e),Fe(n,"thighR",.05,0,-.08,e),Fe(n,"shinR",.85,0,0,e),Et(n,"foot",.45,0,0,e),qe(n,"neck.x",-.55,e)}function xM(n,e){qe(n,"pivDY",-.5,e),qe(n,"pivX",.25,e),Fe(n,"thighL",-1.45,0,.12,e),Fe(n,"shinL",1.75,0,0,e),Fe(n,"footL",-.25,0,0,e),Fe(n,"thighR",.15,0,-.12,e),Fe(n,"shinR",1.3,0,0,e),Fe(n,"footR",.6,0,0,e),Fe(n,"uarmR",-.55,0,-.1,e),Fe(n,"farmR",-.15,0,0,e),Fe(n,"uarmL",.75,0,.7,e),Fe(n,"farmL",-.45,0,0,e),qe(n,"spine.x",.35,e),qe(n,"neck.x",-.4,e)}function yM(n,e){let t=Math.abs(Math.sin(e*4));_l(n,.04+.1*t),qe(n,"hips.z",.12*Math.sin(e*4)),qe(n,"chest.y",.35*Math.sin(e*4)),qe(n,"neck.x",-.15*t),Fe(n,"uarmL",-.3,0,2.2+.45*Math.sin(e*8)),Fe(n,"farmL",-.7+.5*Math.sin(e*8),0,0),Fe(n,"uarmR",-.3,0,-2.2-.45*Math.sin(e*8+1)),Fe(n,"farmR",-.7+.5*Math.sin(e*8+1),0,0)}function _M(n){Et(n,"uarm",0,0,.6),Et(n,"farm",-.4,0,0),qe(n,"neck.y",.6),Et(n,"thigh",-.15,0,.12),Et(n,"shin",.4,0,0)}function Oo(n,e,t,i,s=!0){let r=n.st,o=e.pos;r.lx===null&&(r.lx=o.x,r.lz=o.z,r.ly=o.y,r.lyaw=e.group.rotation.y);let a=Math.max(t,1e-4),l=Math.hypot(o.x-r.lx,o.z-r.lz)/a;l>70&&(l=r.spd);let c=(o.y-r.ly)/a;Math.abs(c)>60&&(c=0),r.lx=o.x,r.lz=o.z,r.ly=o.y,r.spd+=(l-r.spd)*(1-Math.exp(-t*12)),r.vy+=((e.vy!==void 0?e.vy:c)-r.vy)*(1-Math.exp(-t*15));let h=e.group.rotation.y,u=vp(h-r.lyaw);r.lyaw=h,r.yawRate+=(u/a-r.yawRate)*(1-Math.exp(-t*8));let d=e.atk||0;if(d>r.lastAtk+.04){let w=e.actHint&&cM[e.actHint];e.actHint=null;let R=w;if(!R){let P=Mp[n.weapon]||Mp.none;r.actT>1.1&&(r.combo=0),R=P[r.combo%P.length],r.combo++}r.act=Ap[R],r.actT=0}r.lastAtk=d,r.actT+=t;let f=r.spd,g=o.y<=.02;if(!s)return;let x=r.T,m=r.Q,p=r.C;x.fill(0);let _=16,b=e.dead||e.alive===!1;if(b)_M(x),_=6,r.act=null;else if(e.danceT>0)yM(x,i),_=14;else{let w=hi(2.4,4.6,f)+hi(10.5,13,f),R=1.45+1.25*zn(w,0,1)+.95*zn(w-1,0,1);g&&!(e.slideT>=0)&&(r.phase+=t*f/R*Bi);let P=hi(.25,1.1,f);if(r.combat+=((e.combat?1:0)-r.combat)*(1-Math.exp(-t*6)),P<1){let v=1-P;hM(x,v*(1-r.combat),i,r,n.weapon),uM(x,v*r.combat,i,n.weapon)}P>0&&dM(x,P,r.phase,w,n.weapon),r.air+=((g?0:1)-r.air)*(1-Math.exp(-t*(g?22:12))),r.air>.01&&(m.fill(0),fM(m,1,r.vy,f),Gs(x,m,r.air));let T=g&&e.slideT!==void 0&&e.slideT>=0;if(r.slide+=((T?1:0)-r.slide)*(1-Math.exp(-t*(T?18:10))),r.slide>.01&&(m.fill(0),pM(m,1,i),Gs(x,m,r.slide)),r.glide+=((e.glide?1:0)-r.glide)*(1-Math.exp(-t*8)),r.glide>.01&&(m.fill(0),gM(m,1,i),Gs(x,m,r.glide)),e.landT>0)if(e.landHard){let v=e.landT/Kt.landHard,D=v<.65?1:1-hi(.65,1,v);m.fill(0),xM(m,1),Gs(x,m,D),_=24}else{let v=e.landT/Kt.landSoft;_l(x,.24*(1-v))}if(e.bjT>0){let v=zn(e.bjT/Kt.bj,0,1);m.fill(0),mM(m,1),Gs(x,m,1-hi(.8,1,v)),_=26}if(e.flipT>0){let v=zn(e.flipT/Kt.flip,0,1);m.fill(0),Ep(m,1),Gs(x,m,Math.sin(Math.PI*v)),_=28}if(e.rollT>0){let v=zn(e.rollT/Kt.roll,0,1);m.fill(0),Ep(m,1),qe(m,"pivDY",-.45*Math.sin(Math.PI*v)),Gs(x,m,Math.min(1,Math.sin(Math.PI*v)*1.6)),_=30}if(r.act){let v=r.act,D=r.actT/v.dur;if(D>=1)r.act=null;else{let X=Math.min(1,D/.08)*(D>.85?(1-D)/.15:1);for(let[W,V]of v.ch)x[W]+=(aM(D,V)-x[W])*X;_=Math.max(_,26)}}qe(x,"pivZ",zn(-r.yawRate*f*.011,-.38,.38)*(g?1:.4)*(1-r.slide*.6))}let y=1-Math.exp(-t*_);for(let w of[Bt.pivX,Bt.pivY])p[w]=x[w]+vp(p[w]-x[w]);for(let w=0;w<Uo;w++)p[w]+=(x[w]-p[w])*y;if(!b){if(e.flipT>0&&(p[Bt.pivX]=Bi*yl(zn(e.flipT/Kt.flip,0,1))),e.rollT>0&&(p[Bt.pivX]=Bi*yl(zn(e.rollT/Kt.roll,0,1))),e.bjT>0){let w=zn(e.bjT/Kt.bj,0,1);p[Bt.pivX]=1.35*hi(0,.2,w)*(1-.55*hi(.7,1,w)),p[Bt.pivY]=Bi*yl(hi(.05,.85,w))}r.act&&r.act.name==="spin"&&(p[Bt.pivY]=x[Bt.pivY])}let L=n.bones;for(let w=0;w<L.length;w++)L[w].rotation.set(p[w*3],p[w*3+1],p[w*3+2]);L[0].position.y=n.hipsRest+p[Bt.hipsY],n.pivot.position.y=1+p[Bt.pivDY],n.pivot.rotation.set(p[Bt.pivX],p[Bt.pivY],p[Bt.pivZ])}var Uu=[{title:"The Year 2137",tag:"THE WORLD",body:['Ad-Nostra \u2014 "to ours" \u2014 rises from the golden savannah of the African continent: a city of sandstone towers and glass spires, ringed by acacia and grassland that runs to the edge of the sky.',"Ten years have passed since the Catharsis fell at Carax. The war in the stars is over, but its scars reached Earth. A Catharsis beacon-ship lies broken in a crater north of the city, and what it left behind still walks the grasslands.","Ad-Nostra is governed by Croxian Mascar. Its people call themselves the Concord, and the volunteers who defend it are the Ascendants."]},{title:"The Third World War",tag:"2080 \u2013 2095",body:["For fifteen years the old powers tore at each other in the Third World War. Cities burned from the Baltic to the Pacific.","Orion Mascar fought through it. At his side for much of it was his apprentice, Thomas Hawthorne. The two fought together until the Siege of Harbin, in China. After Harbin, Hawthorne made his own path.","In the winter of 2094, in the frozen city of Kaliningrad, with the war still raging, Orion's wife Talina gave birth to a son. They named him Croxian. The war ended the following year."]},{title:"Orion Mascar",tag:"BORN 2069",body:["Born in 2069, Orion Mascar came of age in the Third World War and survived the whole of it. He married Talina Alvarez, and their son Croxian was born in the last winter of the war.","He trained Thomas Hawthorne, and he lived to see what his apprentice became.","In Ad-Nostra his name is tied to one place above all: the Salt Lantern. It was in that cantina that Orion Mascar fought Daniel Brown."]},{title:"Terra Imperia",tag:"THE FACTION",body:["Terra Imperia was the far-right faction built by Thomas Hawthorne after he broke from his old master. It promised order, strength and a single hand on the wheel of the world.","By 2125, Croxian Mascar was one of its members, serving under the man who had once been his father's apprentice.","He did not stay. With the help of a wanderer, Croxian broke away from Terra Imperia. That choice set him on the road to Carax."]},{title:"The Catharsis",tag:"THE ENEMY",body:["In 2127 the Catharsis invaded the Milky Way. At its head was Lord Zark.","The Catharsis did not only conquer. It turned people. Those it took became its weapons, their old loyalties burned out and replaced with its own. Thomas Hawthorne was one of them.","Its fleets reached as far as Earth. When the war ended, one of its beacon-ships fell burning onto the savannah north of Ad-Nostra. The Crater it left still glows crimson at night."]},{title:"Carax",tag:"SAGITTARIUS A* \xB7 2127",body:["Carax is a planet in orbit around Sagittarius A*, the supermassive black hole at the heart of our galaxy.","It was there, in 2127, that the war against the Catharsis was decided. Croxian Mascar stood with the Wanderer, the same wanderer who had helped him leave Terra Imperia. Together they defeated Lord Zark, and the Catharsis-turned Thomas Hawthorne.","Croxian rarely speaks of Carax. When he does, he speaks of the Wanderer, never of himself."]},{title:"Croxian Mascar",tag:"GOVERNOR OF AD-NOSTRA",body:["Born 2094 in Kaliningrad, during the Third World War, to Orion Mascar and Talina Mascar (n\xE9e Alvarez).","Once a soldier of Terra Imperia. He walked away from it, then helped the Wanderer bring down Lord Zark and the Catharsis-turned Thomas Hawthorne at Carax in 2127.","Today he governs Ad-Nostra from Concordia Plaza, beneath a statue raised in his honour against his wishes. He still wears his Carax armour, its seams lit with cyan."]},{title:"The Salt Lantern",tag:"CANTINA \xB7 AD-NOSTRA",body:["Just south of Concordia Plaza stands the Salt Lantern: a whitewashed cantina with a great crystal lantern burning over its door, warm as the savannah at dusk.","It is the oldest place in the city that anyone still drinks in. It is also where Orion Mascar fought Daniel Brown. A plaque marks the spot, and the regulars will happily argue about the rest.","The keeper, Zuri Adeyemi, pours Lantern Ale for any Ascendant with credits. It is said to sharpen the mind."]},{title:"The Remnants",tag:"THREATS",body:["The Catharsis is defeated. What it left behind is not.","On the Scorched Veld to the east, where the beacon-ship's descent set the grass alight, the Hollowed wander: people the Catharsis turned and never released.","On the Echo Plains to the west, its war-drones still hold station around their signal pylons.","And in the Crater to the north, the shards of the beacon have begun to pulse in rhythm. Something of Lord Zark's will is gathering itself in the wreck."]},{title:"Ascendants",tag:"YOU",body:["Ascendants are citizens of Ad-Nostra who have sworn the Governor's Oath to defend the city and its grasslands.","VANGUARDS hold the line in heavy plate. ARCWRIGHTS turn salvaged Catharsis technology into lightning. SHADES move between moments and strike where the Remnants are blind.","Thousands now patrol the savannah. You are the newest of them."]}],Rp=["Croxian Mascar was born in the winter of Kaliningrad in 2094, in the last year of the Third World War.","The Salt Lantern is a sanctuary. Lantern Ale from Zuri Adeyemi grants bonus experience.","Hollowed lose interest if you lead them too far from where they rose.","Shades who strike from Blink deal guaranteed critical damage.","Concordia Plaza is a sanctuary. No Remnant will follow you there.","Quartermaster Ilse Varn sells medkits and weapon tuning. Press 5 to use a medkit.","Thomas Hawthorne was Orion Mascar's apprentice before the Siege of Harbin.","Carax orbits Sagittarius A*, the black hole at the heart of the galaxy.","Echo Drones attack from range. Close the distance, or out-range them as an Arcwright."],ki={vanguard:{name:"VANGUARD",role:"DEFENDER \xB7 MELEE",icon:"\u26E8",color:"#3ee6ff",hex:4122367,hp:170,en:100,range:3.6,gcd:1,crit:.1,weapon:"blade",desc:"Heavy plate and heavy blades. Vanguards stand where the line must not break, trading blows that would fell anyone else.",abil:[{id:"riven",name:"Riven Strike",icon:"\u2694",cost:0,cd:0,target:!0,desc:"A heavy blade strike.",dmg:18},{id:"slam",name:"Bulwark Slam",icon:"\u25CE",cost:20,cd:6,target:!1,desc:"Strike the ground, damaging all enemies within 6m.",dmg:15,radius:6},{id:"guard",name:"Concord Guard",icon:"\u26E8",cost:25,cd:18,target:!1,desc:"Raise a barrier that absorbs 60 damage for 8s.",shield:60,dur:8},{id:"judge",name:"Judgement",icon:"\u2726",cost:35,cd:12,target:!0,desc:"The Governor's justice, delivered by hand.",dmg:50}]},arcwright:{name:"ARCWRIGHT",role:"CHANNELER \xB7 RANGED",icon:"\u03DF",color:"#b07bff",hex:11566079,hp:120,en:120,range:24,gcd:1,crit:.12,weapon:"staff",desc:"Engineers who learned to turn the Catharsis's own technology against it. Arcwrights strike from afar with salvaged lightning.",abil:[{id:"bolt",name:"Arc Bolt",icon:"\u03DF",cost:0,cd:0,target:!0,desc:"Hurl a bolt of salvaged lightning.",dmg:16,proj:!0},{id:"chain",name:"Chain Surge",icon:"\u2301",cost:25,cd:7,target:!0,desc:"Lightning leaps from the target to up to 3 nearby enemies.",dmg:14,jump:10},{id:"restore",name:"Restore Field",icon:"\u271A",cost:30,cd:20,target:!1,desc:"Restore 45% of your maximum health.",heal:.45},{id:"lance",name:"Overcharge Lance",icon:"\u27B6",cost:40,cd:14,target:!0,desc:"A lance of white-hot plasma.",dmg:62,proj:!0,big:!0}]},shade:{name:"SHADE",role:"STRIKER \xB7 MELEE",icon:"\u25D0",color:"#4dff9a",hex:5111706,hp:135,en:100,range:3.6,gcd:.8,crit:.2,weapon:"daggers",desc:"They move between moments. Shades strike where the Remnants are blind and are gone before the crimson light can find them.",abil:[{id:"cut",name:"Phase Cut",icon:"\u27CB",cost:0,cd:0,target:!0,desc:"A swift, precise cut.",dmg:14},{id:"bleed",name:"Bleed Mark",icon:"\u260D",cost:20,cd:8,target:!0,desc:"Mark the target: 6 damage, then 8 per second for 6s.",dmg:6,dot:8,dur:6},{id:"blink",name:"Blink",icon:"\u21DD",cost:20,cd:12,target:!0,desc:"Step behind the target. Your next attack is a guaranteed critical.",range:22},{id:"flurry",name:"Eclipse Flurry",icon:"\u2738",cost:40,cd:15,target:!0,desc:"Five strikes in a heartbeat, 11 damage each.",dmg:11,hits:5}]}},vl=["#3ee6ff","#e8c46a","#ff2b4a","#4dff9a","#b07bff","#ffffff"],Ml=[{title:"The Turned",type:"hollowed",count:6,xp:220,cr:80,zone:"Scorched Veld (east)",obj:"Grant rest to Hollowed on the Scorched Veld",offer:`Ascendant. Welcome to Ad-Nostra.

Ten years ago, on Carax, the Wanderer and I ended Lord Zark. The Catharsis broke with him. But it had already reached Earth, and what it turned does not simply turn back.

East of the city, on the Scorched Veld, the Hollowed still walk. They were people once. Grant them rest. Six, to start.`,active:"The Scorched Veld lies east along the Causeway, where the grass burned when the beacon-ship fell. Do not let their faces stop you.",done:`I knew a man the Catharsis turned. I faced him at Carax. There was nothing left of him to save.

You did right. You have my thanks, and the city's.`},{title:"Silence the Echoes",type:"drone",count:6,xp:380,cr:120,zone:"Echo Plains (west)",obj:"Destroy Echo Drones on the Echo Plains",offer:`West of the city lie the Echo Plains. Zark's war-drones still hold station there around their signal pylons, waiting for orders from a fleet that no longer exists.

Every signal draws the Hollowed closer to our walls. Silence them.`,active:"Follow the Causeway west. The drones strike from range. Close the distance quickly, or outlast them.",done:`Quiet. Hear that? Wind in the grass, and nothing else.

That is what we fought for.`},{title:"Shards of the Beacon",type:"shard",count:5,xp:520,cr:160,zone:"The Crater (north)",obj:"Recover beacon shards from the Crater",offer:`When Zark fell, one of his beacon-ships came down north of here. We call the place the Crater.

The shards of that beacon are warming. Go north and recover five before anything else does. They glow crimson among the rocks, and the Remnants there carry some of their own.

Do not hold them longer than you must.`,active:"The Crater lies north, at the end of the Causeway. Look for the crimson light and press E to recover a shard.",done:`They are pulsing together. Like a heartbeat.

I felt this once before, on Carax, just before Zark showed himself. Something in that wreck remembers him.`},{title:"The Last Remnant",type:"boss",count:1,xp:1200,cr:500,zone:"The Crater (north)",obj:"Destroy the Remnant of the Catharsis",offer:`A Remnant of the Catharsis has risen in the Crater, built from the beacon's shards and whatever of Lord Zark still clings to them.

I would go myself. But the Concord forbids its Governor to leave the city, and they are right.

So I am asking you. Finish what the Wanderer and I started.`,active:"It waits at the heart of the Crater. When the ground beneath you glows red, move. Bring others if you can. Nobody should face the Catharsis alone.",done:`It is done, then. Truly done.

My father would have liked you, {name}. Come find me at the Salt Lantern some evening, and I will tell you about him.

From this day you are a Hero of Ad-Nostra.`},{title:"Watch of the Concord",type:"any",count:10,xp:400,cr:150,zone:"Anywhere on the savannah",repeat:!0,obj:"Destroy Remnants of any kind",offer:`The savannah still needs watchers, Hero. The Remnants will not end in a day.

Ten of them, any kind, anywhere. The Concord pays its debts.`,active:"Ten Remnants. Hollowed or drones, it does not matter. Each one is a night of peace for someone out on the grass.",done:"Well done. Rest a while. Have an ale at the Lantern on me, then come back. There is always more to do."}],Cp=["I was born in the snow of Kaliningrad, in the last winter of the war. I have never once missed the cold.","My father fought through the whole of the Third World War. When I was young I thought that made him unbreakable.","Thomas Hawthorne was my father's apprentice. Then he was my commander. Then, at Carax, he was the Catharsis. I still do not know which of those men I was fighting.","I wore the colours of Terra Imperia once. I am not proud of it. I am proud that I left.","The Wanderer never asked for anything. Not on Carax, not after. I owe that soul more than a statue.","Go see the Salt Lantern if you have not. My father fought Daniel Brown there. Zuri will tell you it is the best thing that ever happened to her business."],gs={greet:"Welcome to the Salt Lantern, Ascendant. Sit anywhere except the corner table. That one is the Governor's.",fight:`Right there, where the plaque is. That is where Orion Mascar fought Daniel Brown.

Ask ten regulars how it started and you will hear ten different stories. Ask them how it ended and they will all go quiet and order another round.`,gov:`He comes in some evenings, alone. Sits where his father used to sit and orders one glass that he never finishes.

People leave him be. Mostly.`,aleOk:`One Lantern Ale. Brewed with savannah honey and something I will not tell you about.

(+20% experience for 10 minutes)`,aleAgain:`Another? The first one is still working, Ascendant. I will top it up, and the clock starts over.

(+20% experience for 10 minutes)`,aleNo:"Twenty-five credits, Ascendant. The Lantern does not run a tab. Not since the Governor's father, anyway."},bl={title:"MEMORIAL PLAQUE",name:"THE SALT LANTERN",text:`HERE, IN THIS ROOM,
ORION MASCAR FOUGHT DANIEL BROWN.

The Lantern still stands.

Raised by the regulars of the Salt Lantern.`},Ip=["Kaelith","Vex_2137","NovaRook","Seraphyn","Draxx","Ilmatar","LastLegion","Quorra","Ashwalker","Brennic","Zyra_Nyx","Holloway","Corvane","Mirelle","OrbitalOtter","Tavik","Severine","Juno_Arc","Kwame_X","Amara","Tendai"],Pp=["Concord Legion","Savannah Watch","Lantern Regulars","Pale Hunters","Dawnbreakers","",""],Lp=["LFG crater remnant, need 2 more","anyone know where the beacon shards spawn? crater right?","first round at the Salt Lantern is on me tonight","WTS tuned blade, pst","echo plains are packed tonight lol","just saw a giraffe walk past the crater like nothing was happening","Mascar never takes off that armour. respect","shade blink into a drone swarm = instant regret","Concord Legion recruiting, all classes, /w Kaelith","hollowed on the veld respawn SO fast","arcwright chain surge is busted (in a good way)","imagine being on Carax for the final fight. at a BLACK HOLE","pro tip: the plaza is a sanctuary, kite them back if you're low","did the remnant just one-shot me or am i crazy","o7 to everyone who fought in 2127","Ilse Varn's medkits are a scam. i buy 10 a day","anyone else hear the shards humming?? creepy","the sunsets here never get old","there was an argument at the Lantern about Orion vs Daniel Brown again. chairs were thrown","still can't believe the governor used to be Terra Imperia"],Dp=["drone over here if anyone needs one","careful, lvl 3 hollowed by the burning brush","need help with the big one in the crater","pulling, stand back","gg","lol that crit"],Np=["zuri another round please","that's the spot. right there. where orion fought daniel brown","who keeps playing that song","the governor's table is empty tonight","cheers o7"],Up=["The Concord reminds all Ascendants: beacon shards are to be delivered to the Governor's Office, not sold.","The Causeway tram will resume service once the Echo Plains are secured.","Ten years since Carax. Ad-Nostra stands. \u2014 C. Mascar","Herders are advised to keep livestock away from the Crater rim.","Medical stations in Concordia Plaza are open to all Ascendants, free of charge."],Op=["Mascar and the Wanderer took down Lord Zark on Carax. at Sagittarius A*. absolute legend","he was Terra Imperia once, you know. takes guts to walk away from that","my gran says his dad Orion was born in 2069 and never lost a fight. well. maybe one","governor mascar administered my oath personally","born in kaliningrad in the middle of ww3. no wonder he's like that"],Ou=["o7","hey {name}!","welcome to Ad-Nostra {name}","yo","hi hi","o/","sawubona!","jambo!"];var Ge=U,Q=n=>document.getElementById(n),N=(n,e)=>n+Math.random()*(e-n),js=(n,e)=>Math.floor(N(n,e+1)),ht=n=>n[Math.floor(Math.random()*n.length)],ii=(n,e,t)=>Math.max(e,Math.min(t,n)),_t=(n,e)=>Math.hypot(n.x-e.x,n.z-e.z),ys=n=>n.toLocaleString("en-GB"),$t=n=>String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function zu(n){let e=Q("err");e.textContent=n,e.classList.remove("hidden"),setTimeout(()=>e.classList.add("hidden"),8e3)}window.addEventListener("error",n=>{console.error(n.error||n.message)});var Js={get(n,e=null){try{let t=localStorage.getItem(n);return t?JSON.parse(t):e}catch{return e}},set(n,e){try{localStorage.setItem(n,JSON.stringify(e))}catch{}}},Ko="adnostra_save_v1",lt=Object.assign({volume:.6,music:!0,bloom:!0,shadows:!0,sens:1,plates:!0,dynres:!0,fps:!1},Js.get("adnostra_settings",{}));Re.volume=lt.volume;Re.musicOn=lt.music;var Qs=matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0&&!matchMedia("(pointer: fine)").matches;Qs&&document.documentElement.classList.add("touch");var _s=Qs?{pixelRatio:1.5,shadowMap:1024,worldGrass:14e3,menuGrass:4e3}:{pixelRatio:2,shadowMap:2048,worldGrass:36e3,menuGrass:9e3},Kr=Q("scene"),Ft=new Ga({canvas:Kr,antialias:!1,powerPreference:"high-performance"});Ft.setPixelRatio(Math.min(devicePixelRatio,_s.pixelRatio));Ft.setSize(innerWidth,innerHeight);Ft.toneMapping=Io;Ft.toneMappingExposure=1.05;Ft.outputColorSpace=Wt;Ft.shadowMap.enabled=lt.shadows;Ft.shadowMap.type=Nh;Ft.info.autoReset=!1;var vM=new Lr(Ft);function Kp(n){let e=new ks;return e.add(new ne(new Li(50,32,16),n.material)),vM.fromScene(e,.03,.1,100).texture}var MM=4,pi=new ml(Ft,new un(innerWidth,innerHeight,{type:kn,samples:MM}));pi.setPixelRatio(Ft.getPixelRatio());pi.setSize(innerWidth,innerHeight);var Vu=new gl(new ks,new Xt);pi.addPass(Vu);var $s=new zr(new Ve(innerWidth/2,innerHeight/2),.85,.55,.72);$s.enabled=lt.bloom;pi.addPass($s);pi.addPass(new xl);var bM=new Fr;function Ku(n,e){Vu.scene=n,Vu.camera=e;let t=n.userData.post||{strength:.6,radius:.5,threshold:.85,exposure:1};$s.strength=t.strength,$s.radius=t.radius,$s.threshold=t.threshold,Ft.toneMappingExposure=t.exposure,at.grace=3}var S={mode:"splash",time:0,world:null,P:null,D:null,enemies:[],bots:[],npcs:[],shards:[],proj:[],fx:[],timers:[],floaters:[],props:[],animals:[],herds:[],colliders:[],ui:null,zone:"",autosave:20,chatT:6};function Gt(n,e,t,i=1){let s=document.createElement("canvas");s.width=n,s.height=e,t(s.getContext("2d"),n,e);let r=new Ja(s);return r.colorSpace=Wt,r.wrapS=r.wrapT=Ai,r.anisotropy=Ft.capabilities.getMaxAnisotropy(),r.repeat.set(i,i),r}var Fp=null,ju=()=>Fp||(Fp=Gt(64,64,(n,e,t)=>{let i=n.createRadialGradient(e/2,t/2,0,e/2,t/2,e/2);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.35,"rgba(255,255,255,0.7)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.clearRect(0,0,e,t),n.fillStyle=i,n.fillRect(0,0,e,t)}));function ui(n,e,t,i,s,r=2){for(let o=0;o<i;o++)n.fillStyle=ht(s),n.fillRect(Math.random()*e,Math.random()*t,r*Math.random()+.5,r*Math.random()+.5)}function Fo(n,e,t,i,s,r=1.5){n.strokeStyle=s,n.lineWidth=r;for(let o=0;o<i;o++){let a=Math.random()*e,l=Math.random()*t;n.beginPath(),n.moveTo(a,l);for(let c=0;c<8;c++)a+=N(-30,30),l+=N(-30,30),n.lineTo(a,l);n.stroke()}}var El=null;async function TM(n){await new Promise((o,a)=>{let l=document.createElement("script");l.src="assets/model.js",l.onload=o,l.onerror=()=>a(new Error("Could not load assets/model.js")),document.head.appendChild(l)}),n(.7);let e=window.MASCAR_GLB_B64;window.MASCAR_GLB_B64=null;let t;try{t=await(await fetch("data:application/octet-stream;base64,"+e)).arrayBuffer()}catch{let a=atob(e),l=new Uint8Array(a.length);for(let c=0;c<a.length;c++)l[c]=a.charCodeAt(c);t=l.buffer}n(.85);let s=(await new Promise((o,a)=>new Hr().parse(t,"",o,a))).scene,r=new rn().setFromObject(s);s.userData.height=r.max.y-r.min.y,s.traverse(o=>{o.isMesh&&(o.castShadow=!0,o.receiveShadow=!0,o.material&&(o.material.envMapIntensity=1))}),s.add(makeScythe({Group:Ue,Mesh:ne,BufferGeometry:pt,Float32BufferAttribute:rt,MeshStandardMaterial:Ae,CylinderGeometry:Yt,BoxGeometry:vn,DoubleSide:2})),El=s,n(1)}
// Croxian Mascar's scythe: a tall pole gripped in his right fist, with four curved blades
// stacked near the top, each with a glowing cyan line. Built in the Mascar model's own units
// (feet at y = 0, about 0.98 tall, facing +Z), so it scales with every copy of him.
// T is the three.js namespace (only the classes used below are needed).
function makeScythe(T) {
  const X = -0.19, Z = 0.07;                         // pole axis: through the right fist, clear of the arm and cape
  const metal = new T.MeshStandardMaterial({ color: 0x5b6169, metalness: 0.75, roughness: 0.42 });
  const blade = new T.MeshStandardMaterial({ color: 0x2b3038, metalness: 0.8, roughness: 0.32 });
  const dark = new T.MeshStandardMaterial({ color: 0x171b21, metalness: 0.5, roughness: 0.6 });
  const glow = new T.MeshStandardMaterial({ color: 0x3ee6ff, emissive: 0x3ee6ff, emissiveIntensity: 2.4, roughness: 0.4, side: T.DoubleSide });
  const g = new T.Group(); g.name = 'scythe';
  const add = (geo, m, x, y, z) => { const me = new T.Mesh(geo, m); me.position.set(x, y, z); me.castShadow = true; me.receiveShadow = true; g.add(me); return me; };
  const TOP = 1.3;
  // pole, pointed foot and the cyan line along its lower end
  add(new T.CylinderGeometry(0.0085, 0.0085, TOP - 0.05, 10), metal, X, 0.05 + (TOP - 0.05) / 2, Z);
  add(new T.CylinderGeometry(0.0085, 0.001, 0.05, 10), metal, X, 0.025, Z);
  add(new T.BoxGeometry(0.004, 0.32, 0.005), glow, X - 0.0085, 0.22, Z);
  // ridged grip just above the fist
  const ring = new T.CylinderGeometry(0.0115, 0.0115, 0.007, 10);
  for (let i = 0; i < 9; i++) add(ring, dark, X, 0.545 + i * 0.016, Z);
  // four blades, each fixed to the pole by a dark knuckle block
  const knuckle = new T.BoxGeometry(0.03, 0.03, 0.03);
  const bez = (a, b, c, d, t) => { const u = 1 - t; return [u * u * u * a[0] + 3 * u * u * t * b[0] + 3 * u * t * t * c[0] + t * t * t * d[0], u * u * u * a[1] + 3 * u * u * t * b[1] + 3 * u * t * t * c[1] + t * t * t * d[1]]; };
  // blade outline in (out, up) from its root: a sharp lower edge and a thicker spine on top, meeting at a drooping tip
  const N = 28, TH = 0.006, lo = [], up = [];
  for (let i = 0; i <= N; i++) {
    const t = i / N;
    lo.push(bez([0, -0.016], [0.1, -0.004], [0.27, -0.02], [0.4, -0.135], t));
    up.push(bez([0, 0.018], [0.13, 0.055], [0.3, 0.045], [0.4, -0.135], t));
  }
  const bladeGeo = (() => {
    const p = [];
    const tri = (a, b, c) => p.push(...a, ...b, ...c);
    const L = (i) => [-lo[i][0], lo[i][1], 0];             // cutting edge: sharp (zero thickness)
    const U = (i, s) => [-up[i][0], up[i][1], s * TH];     // spine: thick on both faces
    for (let i = 0; i < N; i++) {
      tri(L(i), U(i, 1), L(i + 1)); tri(L(i + 1), U(i, 1), U(i + 1, 1));                 // front face
      tri(L(i), L(i + 1), U(i, -1)); tri(L(i + 1), U(i + 1, -1), U(i, -1));              // back face
      tri(U(i, 1), U(i, -1), U(i + 1, 1)); tri(U(i + 1, 1), U(i, -1), U(i + 1, -1));     // spine
    }
    tri(L(0), U(0, -1), U(0, 1));                                                        // root
    const geo = new T.BufferGeometry(); geo.setAttribute('position', new T.Float32BufferAttribute(p, 3)); geo.computeVertexNormals(); return geo;
  })();
  const lineGeo = (() => {   // glowing line on both faces, running along the blade just above the edge
    const p = [], A = 0.17, B = 0.38, I0 = 2, I1 = N - 2;
    const at = (i, f, s) => { const x = lo[i][0] + (up[i][0] - lo[i][0]) * f, y = lo[i][1] + (up[i][1] - lo[i][1]) * f; return [-x, y, s * (f * TH + 0.0012)]; };
    for (const s of [1, -1]) for (let i = I0; i < I1; i++) p.push(...at(i, A, s), ...at(i, B, s), ...at(i + 1, A, s), ...at(i + 1, A, s), ...at(i, B, s), ...at(i + 1, B, s));
    const geo = new T.BufferGeometry(); geo.setAttribute('position', new T.Float32BufferAttribute(p, 3)); geo.computeVertexNormals(); return geo;
  })();
  for (const y of [1.28, 1.185, 1.09, 0.995]) {
    add(knuckle, dark, X, y, Z);
    add(bladeGeo, blade, X - 0.012, y, Z);
    add(lineGeo, glow, X - 0.012, y, Z);
  }
  add(new T.BoxGeometry(0.022, 0.014, 0.022), dark, X, TOP + 0.007, Z);   // cap
  return g;
}
function Ju(n,e=null){if(!El){let s=jr({armor:3818062,accent:4122367,visor:4122367,weapon:"none"});return s.group.scale.setScalar(n/1.86),s.group}let t=El.clone(!0);e&&t.traverse(s=>{if(s.isMesh){let r=e.clone();r.normalMap=s.material.normalMap,s.material=r}}),t.scale.setScalar(n/El.userData.height);let i=new Ue;return i.add(t),i}var Bp={};function Ct(n,e){return Bp[n]||(Bp[n]=e())}var en=(n,e=2.4)=>Ct("glow"+n+e,()=>new Ae({color:n,emissive:n,emissiveIntensity:e,roughness:.4})),fi=n=>Ct("arm"+n,()=>new Ae({color:n,metalness:.75,roughness:.36})),jp=()=>Ct("dark",()=>new Ae({color:987928,metalness:.4,roughness:.7})),mt={box:new vn(1,1,1),sph:new Li(1,16,12),oct:new Nr(1,0),ico:new Dr(1,0),cyl:new Yt(1,1,1,16),rock:new Qa(1,0),ico1:new Dr(1,1)},Jp={glow:en,armor:fi,dark:jp},EM=[null,null,14212582,14074800,12571323,13876429,12043484,14734004];function fe(n,e,t,i,s=0,r=0,o=0,a){let l=new ne(mt.box,i);return l.scale.set(n,e,t),l.position.set(s,r,o),l.castShadow=!0,l.receiveShadow=!0,a&&a.add(l),l}function jr({armor:n=2830908,accent:e=4122367,visor:t=4122367,weapon:i="blade",hollow:s=!1}){let r=new Ue,o=fi(n),a=jp(),l=en(e,s?3:2.2),c=en(t,3),h=new Ue;h.position.y=.95,r.add(h);let u=[-1,1].map(m=>{let p=new Ue;return p.position.set(.13*m,0,0),h.add(p),fe(.17,.5,.2,o,0,-.25,0,p),fe(.15,.45,.17,a,0,-.68,0,p),fe(.18,.1,.28,o,0,-.9,.04,p),p}),d=new Ue;h.add(d),fe(.42,.22,.24,a,0,.08,0,d),fe(.52,.42,.3,o,0,.4,0,d),fe(.4,.04,.02,l,0,.36,.16,d),fe(.04,.2,.02,l,0,.5,.16,d),fe(.3,.34,.1,a,0,.42,-.19,d),fe(.04,.26,.02,l,-.08,.42,-.25,d),fe(.04,.26,.02,l,.08,.42,-.25,d);let f=[-1,1].map(m=>{fe(.22,.14,.3,o,.34*m,.62,0,d);let p=new Ue;return p.position.set(.34*m,.58,0),d.add(p),fe(.13,.34,.15,a,0,-.17,0,p),fe(.15,.32,.17,o,0,-.46,0,p),s&&fe(.05,.25,.05,l,0,-.72,.04,p),p}),g=new Ue;g.position.y=.78,d.add(g),fe(.25,.27,.27,s?a:o,0,.02,0,g),s?(fe(.05,.04,.02,c,-.06,.04,.14,g),fe(.05,.04,.02,c,.06,.04,.14,g)):(fe(.21,.06,.02,c,0,.03,.14,g),fe(.04,.12,.1,o,0,.18,-.02,g));let x=f[1];if(i==="blade"){fe(.05,.16,.05,a,0,-.66,.05,x);let m=fe(.04,1,.11,fi(9016998),0,-.66,.5,x);m.rotation.x=Math.PI/2;let p=fe(.015,1,.02,l,0,-.66,.5,x);p.rotation.x=Math.PI/2,p.position.y-=.06}if(i==="staff"){let m=fe(.05,1.7,.05,a,0,-.62,.05,x);m.rotation.x=.1;let p=new ne(mt.oct,l);p.scale.setScalar(.12),p.position.set(0,.25,.1),p.userData.keep=!0,x.add(p),r.userData.orb=p}if(i==="daggers")for(let m of f){let p=fe(.03,.45,.07,l,0,-.7,.22,m);p.rotation.x=Math.PI/2.2}return s&&(d.rotation.x=.38,g.rotation.x=-.25,f.forEach(m=>m.scale.y=1.25)),r.traverse(m=>{m.isMesh&&(m.castShadow=!0)}),sm(r),{group:r,legs:u,arms:f,torso:d,head:g,hips:h}}function zo(n,e,t,i=0,s=0){let r=Math.sin(t*9)*.75*e;if(n.legs[0].rotation.x=r,n.legs[1].rotation.x=-r,n.arms[0].rotation.x=-r*.6,n.arms[1].rotation.x=r*.6,n.hips.position.y=.95+Math.abs(Math.cos(t*9))*.05*e,i>0){let o=Math.sin((1-i/.3)*Math.PI);n.arms[1].rotation.x=-2.4*o,n.torso.rotation.y=-.4*o}else n.torso.rotation.y*=.8;s>0?(n.arms[0].rotation.z=-2.4+Math.sin(t*8)*.4,n.arms[1].rotation.z=2.4+Math.sin(t*8+1)*.4,n.hips.position.y=.95+Math.abs(Math.sin(t*8))*.12):(n.arms[0].rotation.z*=.8,n.arms[1].rotation.z*=.8)}function SM(n){let e=new Ue,t=new Ue;t.position.y=2.6,e.add(t);let i=new ne(mt.oct,en(16722762,3));i.scale.set(.42,.55,.42),t.add(i);let s=new ne(mt.ico,Ct("droneShell",()=>new Ae({color:1909289,metalness:.8,roughness:.3,wireframe:!0})));s.scale.setScalar(.72),t.add(s);let r=new ne(new Wn(.95,.05,6,32),fi(3752525));r.rotation.x=Math.PI/2,t.add(r);for(let a=0;a<3;a++){let l=fe(.08,.5,.35,fi(3752525),0,0,0),c=new Ue;c.rotation.y=a*2.094,l.position.x=.95,c.add(l),t.add(c)}let o=new ne(mt.sph,en(16769253,4));return o.scale.setScalar(.1),o.position.z=.42,t.add(o),e.traverse(a=>{a.isMesh&&(a.castShadow=!0)}),{group:e,body:t,ring:r,shell:s}}function wM(){let n=new Ue,e=new Ue;n.add(e);let t=Ct("obsid",()=>new Ae({color:1312779,metalness:.6,roughness:.25,flatShading:!0})),i=en(16722762,3.2),s=new ne(mt.oct,i);s.scale.set(1.3,2,1.3),s.position.y=4.4,e.add(s);for(let h=0;h<7;h++){let u=new ne(mt.oct,t),d=h/7*Math.PI*2;u.scale.set(.7,N(1.6,2.6),.5),u.position.set(Math.cos(d)*1.35,4.2+N(-.6,.6),Math.sin(d)*1.35),u.rotation.set(N(-.3,.3),-d,.25*Math.cos(d)),e.add(u)}let r=new ne(mt.oct,t);r.scale.set(.8,1.1,.8),r.position.y=7,e.add(r);let o=new ne(mt.sph,en(16765144,5));o.scale.setScalar(.22),o.position.set(0,7.05,.62),e.add(o);let a=[-1,1].map(h=>{let u=new ne(mt.oct,t);return u.scale.set(.5,1.9,.5),u.position.set(.9*h,1.7,0),u.rotation.z=.15*h,e.add(u),u}),l=[-1,1].map(h=>{let u=new Ue;u.position.set(2.1*h,5.6,0),e.add(u);let d=new ne(mt.oct,t);d.scale.set(.45,2.4,.45),d.position.y=-2,u.add(d);let f=new ne(mt.oct,i);return f.scale.set(.2,1,.2),f.position.y=-3.6,u.add(f),u}),c=new Ue;c.position.y=4.4,e.add(c);for(let h=0;h<9;h++){let u=new ne(mt.oct,h%3?t:i);u.scale.set(.18,.5,.18);let d=h/9*Math.PI*2;u.position.set(Math.cos(d)*3.2,N(-1.5,1.5),Math.sin(d)*3.2),c.add(u)}return n.traverse(h=>{h.isMesh&&(h.castShadow=!0)}),{group:n,body:e,arms:l,legs:a,orbit:c,core:s}}var Sl=new Ge(-.55,.5,-.67).normalize(),AM=new Ge(-.18,.07,-.98).normalize(),Il={value:0};function Qp(n,e=600,t={}){let i=Object.assign({zen:6129336,mid:13218714,hor:14264440,glow:16761466,clouds:1,stars:0,sunI:1.35},t),s=r=>new ve(r);return new ne(new Li(e,48,24),new qt({side:hn,depthWrite:!1,fog:!1,uniforms:{sun:{value:n.clone()},t:{value:0},zen:{value:s(i.zen)},mid:{value:s(i.mid)},hor:{value:s(i.hor)},glow:{value:s(i.glow)},clouds:{value:i.clouds},stars:{value:i.stars},sunI:{value:i.sunI}},vertexShader:"varying vec3 vp; void main(){ vp = position; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`varying vec3 vp; uniform vec3 sun, zen, mid, hor, glow; uniform float t, clouds, stars, sunI;
      float h2(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
      float n2(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.-2.*f);
        return mix(mix(h2(i), h2(i+vec2(1,0)), f.x), mix(h2(i+vec2(0,1)), h2(i+vec2(1,1)), f.x), f.y); }
      void main(){
        vec3 d = normalize(vp); float y = d.y;
        float s = max(dot(d, sun), 0.);
        vec3 c = mix(hor, mid, smoothstep(0.0, 0.22, y));
        c = mix(c, zen, smoothstep(0.18, 0.85, y));
        c += glow * pow(s, 6.) * 0.45 * (1. - smoothstep(0., 0.6, y));   // warm haze around the sun
        c += glow * pow(s, 64.) * 0.5;
        if (clouds > 0. && y > 0.) {                                     // soft cloud bank on a flat sky plane
          vec2 uv = d.xz / (y + 0.15) * 1.3 + vec2(t * 0.006, t * 0.002);
          float n = n2(uv) * 0.5 + n2(uv * 2.1 + 3.7) * 0.3 + n2(uv * 4.3 + 9.1) * 0.2;
          float cl = smoothstep(0.52, 0.82, n) * smoothstep(0.02, 0.16, y) * (1. - smoothstep(0.45, 0.85, y)) * clouds;
          vec3 cc = mix(mix(hor, vec3(1.), 0.45), glow * 1.15, pow(s, 3.) * 0.7);
          c = mix(c, cc, cl * 0.65);
        }
        c = mix(c, vec3(1.0, 0.94, 0.82) * sunI, smoothstep(0.99935, 0.9997, s));   // sun disc
        if (stars > 0.) { vec3 cell = floor(d * 280.); float h = fract(sin(dot(cell, vec3(12.9898,78.233,45.164))) * 43758.5453);
          c += vec3(step(0.9975, h) * (0.55 + 0.45 * sin(t * 2. + h * 80.)) * smoothstep(0.3, 0.7, y) * stars); }
        if (y < 0.) c = mix(hor, hor * 0.45, smoothstep(0., -0.25, y));
        gl_FragColor = vec4(c, 1.);
      }`}))}function em(n,e,t,i){return Gt(512,512,(s,r,o)=>{s.fillStyle=n,s.fillRect(0,0,r,o);for(let a=0;a<9e3;a++){s.strokeStyle=Math.random()<.5?e:t,s.globalAlpha=N(.2,.7),s.lineWidth=N(.5,1.5);let l=Math.random()*r,c=Math.random()*o;s.beginPath(),s.moveTo(l,c),s.lineTo(l+N(-3,3),c-N(3,9)),s.stroke()}s.globalAlpha=1,ui(s,r,o,1500,["rgba(80,55,30,0.5)","rgba(60,40,20,0.4)"],4)},i)}function Qu(n){let e=n.index?n.toNonIndexed():n.clone();for(let t of Object.keys(e.attributes))t!=="position"&&t!=="normal"&&t!=="uv"&&e.deleteAttribute(t);return e.attributes.normal||e.computeVertexNormals(),e.attributes.uv||e.setAttribute("uv",new rt(new Float32Array(e.attributes.position.count*2),2)),e.morphAttributes={},e}function RM(n,e,t){let i=new pt;for(let[s,r]of Object.entries(n.attributes))i.setAttribute(s,new At(r.array.slice(e*r.itemSize,(e+t)*r.itemSize),r.itemSize));return i}function tm(n,e=250){n.updateMatrixWorld(!0);let t=new Map,i=[];n.traverse(s=>{if(!s.isMesh||s.isInstancedMesh||s.isSkinnedMesh)return;for(let h=s;h;h=h.parent)if(h.userData.dynamic)return;if([].concat(s.material).some(h=>h.transparent||h.isShaderMaterial||h.visible===!1))return;let o=Qu(s.geometry).applyMatrix4(s.matrixWorld);o.computeBoundingSphere();let a=o.boundingSphere.center,l=Math.floor(a.x/e)+","+Math.floor(a.z/e),c=Array.isArray(s.material)?o.groups.map(h=>[RM(o,h.start,h.count),s.material[h.materialIndex]]):[[o,s.material]];for(let[h,u]of c){if(!u)continue;h.clearGroups();let d=u.uuid+"|"+l+"|"+s.castShadow+"|"+s.receiveShadow;t.has(d)||t.set(d,{m:u,cs:s.castShadow,rs:s.receiveShadow,geos:[]}),t.get(d).geos.push(h)}i.push(s)});for(let s of i)s.removeFromParent();for(let s of t.values()){let r=new ne(Lo(s.geos),s.m);r.castShadow=s.cs,r.receiveShadow=s.rs,n.add(r)}return{meshes:i.length,batches:t.size}}var kp=30,cn={body:null,glow:null,geo:new Map,ids:new Map};function CM(n){let e=new Eo(256,16e4,0,new Ae({vertexColors:!0,metalness:.55,roughness:.45})),t=new Eo(192,3e4,0,new Tt({vertexColors:!0}));e.castShadow=!0,e.receiveShadow=!0,e.perObjectFrustumCulled=t.perObjectFrustumCulled=!0,e.frustumCulled=t.frustumCulled=!1,n.add(e,t),Object.assign(cn,{body:e,glow:t})}function IM(n){if(n.rig&&n.rig.farBake){let o=n.rig.farBake();if(o.body)return o}let e=n.group;e.updateMatrixWorld(!0);let t=e.matrixWorld.clone().invert(),i=[],s=[],r=[];for(let o of e.children)o!==n.hitbox&&o.traverse(a=>{if(!a.isMesh||!a.visible)return;let l=a.material;if(Array.isArray(l)||l.visible===!1||l.transparent||l.wireframe)return;let c=Qu(a.geometry).applyMatrix4(new $e().multiplyMatrices(t,a.matrixWorld));c.deleteAttribute("uv"),c.clearGroups();let h=l.emissiveIntensity>1&&l.emissive&&l.emissive.getHex()!==0,u=h?l.emissive.clone().multiplyScalar(Math.min(l.emissiveIntensity,3)*.7):l.userData.lodColor!=null?new ve(l.userData.lodColor):(l.color||new ve(8947848)).clone(),d=c.attributes.position.count,f=new Float32Array(d*3);for(let m=0;m<d;m++)f.set([u.r,u.g,u.b],m*3);c.setAttribute("color",new At(f,3));let g=0,x=c.attributes.position.array;for(let m=0;m<x.length;m+=7)g+=x[m];(h?s:i).push(c),r.push(l.uuid,x.length,g.toFixed(2))});return{key:r.join(","),body:i.length?Lo(i):null,glow:s.length?Lo(s):null}}function nm(n){if(n.lod=null,!(!cn.body||!n.rig||n.isBoss||!n.group))try{let e=IM(n),t=cn.geo.get(e.key);t||(t={body:e.body&&cn.body.addGeometry(e.body),glow:e.glow&&cn.glow.addGeometry(e.glow)},cn.geo.set(e.key,t)),n.lod={body:t.body!=null?cn.body.addInstance(t.body):null,glow:t.glow!=null?cn.glow.addInstance(t.glow):null},n.lodParts=n.group.children.filter(i=>i!==n.hitbox),n.lodNear=!0,cn.ids.set(n,n.lod),im(n,!1)}catch(e){n.lod=null,console.warn("far-LOD skipped for",n.name,e.message)}}function im(n,e){n.lod.body!=null&&cn.body.setVisibleAt(n.lod.body,e),n.lod.glow!=null&&cn.glow.setVisibleAt(n.lod.glow,e)}var Fu=new $e;function PM(){if(!cn.body)return;let n=le.cam.position,e=kp*kp,t=new Set;for(let i of[S.enemies,S.bots,S.npcs,S.animals])for(let s of i){if(s.lod===void 0&&nm(s),!s.lod)continue;t.add(s);let r=s.group,o=r.position.distanceToSquared(n)<e,a=r.visible&&r.parent!==null;if(o!==s.lodNear){s.lodNear=o;for(let c of s.lodParts)c.visible=o}let l=!o&&a;im(s,l),l&&(Fu.compose(r.position,r.quaternion,r.scale),s.lod.body!=null&&cn.body.setMatrixAt(s.lod.body,Fu),s.lod.glow!=null&&cn.glow.setMatrixAt(s.lod.glow,Fu))}for(let[i,s]of cn.ids)t.has(i)||(s.body!=null&&cn.body.deleteInstance(s.body),s.glow!=null&&cn.glow.deleteInstance(s.glow),cn.ids.delete(i))}function sm(n){n.traverse(e=>{if(e.isMesh)return;let t=new Map;for(let i of e.children)i.isMesh&&!i.userData.keep&&!Array.isArray(i.material)&&i.children.length===0&&(t.has(i.material)||t.set(i.material,[]),t.get(i.material).push(i));for(let[i,s]of t){if(s.length<2)continue;let r=s.map(a=>{a.updateMatrix();let l=Qu(a.geometry).applyMatrix4(a.matrix);return l.clearGroups(),l}),o=new ne(Lo(r),i);o.castShadow=!0,o.receiveShadow=s[0].receiveShadow;for(let a of s)e.remove(a);e.add(o)}})}function rm(n,e,t,i=0,s=0,r=0){let o=[],a=[];for(let y=0;y<5;y++){let L=y/5*Math.PI*2+N(-.3,.3),w=N(.45,.95),R=N(.1,.3),P=.05,T=Math.cos(L),v=Math.sin(L),D=-v*P,X=T*P;o.push(D,0,X,-D,0,-X,T*R,w,v*R),a.push(.55,.55,.55,.55,.55,.55,1.15,1.15,1.15)}let l=new pt;l.setAttribute("position",new rt(o,3)),l.setAttribute("color",new rt(a,3)),l.computeVertexNormals();let c=new wo({vertexColors:!0,side:sn});c.onBeforeCompile=y=>{y.uniforms.uTime=Il,y.vertexShader=`uniform float uTime;
`+y.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      #ifdef USE_INSTANCING
        float ph = instanceMatrix[3].x * 0.13 + instanceMatrix[3].z * 0.09;
      #else
        float ph = 0.0;
      #endif
      float sw = (sin(uTime * 1.7 + ph) * 0.6 + sin(uTime * 3.1 + ph * 2.0) * 0.25) * 0.16 * position.y;
      transformed.x += sw; transformed.z += sw * 0.6;`)};let h={gold:new ve(14266986),pale:new ve(13222042),burnt:new ve(3814448)},u=new $e,d=new Sn,f=new Ge,g=new Ge,x=new Ge(0,1,0),m=new Map,p=0,_=0;for(;p<n&&_<n*6;){_++;let y=i+N(-e,e),L=s+N(-e,e),w=t(y,L);if(!w)continue;d.setFromAxisAngle(x,N(0,6.28));let R=N(.7,1.5);f.set(R,R*N(.8,1.3),R),g.set(y,0,L);let P=r?Math.floor(y/r)+","+Math.floor(L/r):"0";m.has(P)||m.set(P,[]),m.get(P).push([u.compose(g,d,f).clone(),h[w].clone().offsetHSL(N(-.02,.02),N(-.08,.05),N(-.08,.08))]),p++}let b=new Ue;b.userData.chunks=[];for(let y of m.values()){let L=new Ci(l,c,y.length);y.forEach(([w,R],P)=>{L.setMatrixAt(P,w),L.setColorAt(P,R)}),L.instanceMatrix.needsUpdate=!0,L.instanceColor&&(L.instanceColor.needsUpdate=!0),L.computeBoundingSphere(),L.receiveShadow=!0,L.frustumCulled=!!r,b.add(L),b.userData.chunks.push(L)}return b}function LM(n,e,t=190){let i=t*t;for(let s of n.userData.chunks){let r=s.boundingSphere.center;s.visible=(r.x-e.position.x)**2+(r.z-e.position.z)**2<i}}function Gu(n){let e=new Ue,t=new Yt(.1,.22,1,6);t.translate(0,.5,0);let i=new Dr(1,1),s=new Ci(t,new Ae({color:16777215,roughness:.95}),n.length*3),r=new Ci(i,new Ae({color:16777215,roughness:.9,flatShading:!0}),n.length*3),o=new $e,a=new Sn,l=new Pn,c=0,h=0,u=new ve(3877405),d=new ve(1906966);for(let f of n){let g=N(3.2,5)*f.s,x=N(-.12,.12);l.set(x,N(0,6),N(-.12,.12)),a.setFromEuler(l),o.compose(new Ge(f.x,0,f.z),a,new Ge(f.s,g,f.s)),s.setMatrixAt(c,o),s.setColorAt(c++,f.dead?d:u);for(let m of[-1,1])l.set(0,0,m*N(.5,.8)),a.setFromEuler(l),o.compose(new Ge(f.x,g*.7,f.z),a,new Ge(f.s*.6,g*.45,f.s*.6)),s.setMatrixAt(c,o),s.setColorAt(c++,f.dead?d:u);if(!f.dead)for(let m=0;m<3;m++){let p=N(2.2,3.4)*f.s;a.identity(),o.compose(new Ge(f.x+N(-1.4,1.4)*f.s,g+N(-.2,.5),f.z+N(-1.4,1.4)*f.s),a,new Ge(p,p*.22,p*N(.8,1.1))),r.setMatrixAt(h,o),r.setColorAt(h++,new ve(5660716).offsetHSL(N(-.03,.03),0,N(-.06,.04)))}}s.count=c,r.count=h;for(let f of[s,r])f.castShadow=!0,f.receiveShadow=!0,f.instanceMatrix.needsUpdate=!0,f.instanceColor&&(f.instanceColor.needsUpdate=!0),e.add(f);return e}function om(n=1){let e=new Ue,t=Ct("bark",()=>new Ae({color:8218192,roughness:.95,flatShading:!0})),i=N(6,8)*n,s=new ne(new Yt(1.1*n,1.7*n,i,9),t);s.position.y=i/2,e.add(s);for(let r=0;r<6;r++){let o=r/6*Math.PI*2,a=new ne(new Yt(.12*n,.3*n,2.4*n,5),t);a.position.set(Math.cos(o)*.9*n,i+.7*n,Math.sin(o)*.9*n),a.rotation.set(Math.sin(o)*.7,0,-Math.cos(o)*.7),e.add(a);let l=new ne(mt.ico,Ct("baoLeaf",()=>new Ae({color:6122032,flatShading:!0,roughness:.9})));l.scale.set(1*n,.5*n,1*n),l.position.set(Math.cos(o)*1.8*n,i+1.8*n,Math.sin(o)*1.8*n),e.add(l)}return e.traverse(r=>{r.isMesh&&(r.castShadow=!0,r.receiveShadow=!0)}),e}function Xs(n){let e={sand:{base:"#c9a679",band:"#b38f63",win:"#3a2c20",lit:["#ffcf8a","#ffdca8"],litP:.08,arch:!0},white:{base:"#e2d9c6",band:"#cbbfa6",win:"#3b3631",lit:["#ffd9a0"],litP:.06,arch:!0},terra:{base:"#b56a43",band:"#9a5634",win:"#2c1a12",lit:["#ffc070","#ffe0b0"],litP:.08,arch:!1},glass:{base:"#2a3d52",band:"#1b2734",win:"#34506a",lit:["#bfe6ff","#7fdfff"],litP:.14,glass:!0}}[n],t=4,i=12,s=[];for(let l=0;l<t*i;l++)s.push(Math.random()<e.litP?ht(e.lit):null);let r=l=>(c,h,u)=>{let d=h/t,f=u/i;if(c.fillStyle=l?"#000":e.base,c.fillRect(0,0,h,u),!l){let g=c.createLinearGradient(0,0,0,u);g.addColorStop(0,"rgba(255,255,255,0.05)"),g.addColorStop(1,"rgba(40,20,0,0.12)"),c.fillStyle=g,c.fillRect(0,0,h,u),ui(c,h,u,2500,["rgba(0,0,0,0.05)","rgba(255,255,255,0.05)"],2),c.fillStyle=e.band;for(let x=0;x<i;x++)c.fillRect(0,x*f,h,e.glass?5:4);if(e.glass){c.fillStyle="rgba(0,0,0,0.35)";for(let x=0;x<=t*2;x++)c.fillRect(x*d/2-1.5,0,3,u)}}for(let g=0;g<i;g++)for(let x=0;x<t;x++){let m=s[g*t+x];if(l&&!m)continue;let p=x*d,_=g*f;if(e.glass){if(l)c.fillStyle=m,c.globalAlpha=.8,c.fillRect(p+4,_+8,d-8,f-12),c.globalAlpha=1;else{let R=c.createLinearGradient(p,_,p+d,_+f);R.addColorStop(0,m?"#6f97b8":"#41627f"),R.addColorStop(1,e.win),c.fillStyle=R,c.fillRect(p+4,_+8,d-8,f-12)}continue}let b=d*.36,y=f*.56,L=p+(d-b)/2,w=_+f*.26;l||(c.fillStyle="rgba(60,35,15,0.25)",c.fillRect(L-3,w-3,b+6,y+7)),c.fillStyle=l?m:m?"#80603e":e.win,c.beginPath(),e.arch?(c.moveTo(L,w+y),c.lineTo(L,w+b/2),c.arc(L+b/2,w+b/2,b/2,Math.PI,0),c.lineTo(L+b,w+y),c.closePath()):c.rect(L,w,b,y),c.fill(),l||(c.fillStyle="rgba(255,245,225,0.22)",c.fillRect(L-4,w+y,b+8,3))}},o=Gt(256,512,r(!1)),a=Gt(256,512,r(!0));return new Ae({map:o,emissive:16777215,emissiveMap:a,emissiveIntensity:.6,roughness:e.glass?.22:.88,metalness:e.glass?.6:.02})}function ed(n,e,t,i){let s=n.attributes.uv,r=[i,i,e,e,e,e];for(let o=0;o<6;o++)for(let a=0;a<4;a++){let l=o*4+a;s.setXY(l,s.getX(l)*r[o]/16,s.getY(l)*(o===2||o===3?i/16:t/48))}}function am(n){let e=new Tt({color:9203590,fog:!1}),t=new Tt({color:15916240,fog:!1}),i=new ne(new os(230,150,28,1),e);i.position.set(330,70,-440),n.add(i);let s=new ne(new os(62,42,28,1),t);s.position.set(330,124,-440),n.add(s);let r=new Tt({color:10121066,fog:!1});for(let o=0;o<9;o++){let a=N(0,Math.PI*2),l=N(470,540);if(Math.abs(a-Math.atan2(-440,330))<.4)continue;let c=new ne(new Yt(N(30,70),N(50,90),N(25,55),7),r);c.position.set(Math.cos(a)*l,10,Math.sin(a)*l),n.add(c)}}var De={scene:new ks,cam:new Xt(32,innerWidth/innerHeight,.1,1200),mascar:null,yaw:0,yawVel:0,drag:!1,mx:0,my:0};function DM(){let n=De.scene;n.fog=new Wa(4861478,.0105);let e=Qp(AM,900,{zen:1317432,mid:7225162,hor:15764040,glow:16749896,clouds:.55,stars:.7,sunI:1.25});n.add(e),De.sky=e,n.environment=Kp(e),n.environmentIntensity=.7,n.userData.post={strength:.5,radius:.45,threshold:.92,exposure:1},am(n),n.add(new Ro(16757370,2233871,.5));let t=new us(16769732,130,0,.42,.7,2);t.position.set(3.5,7.5,5.5),t.target.position.set(0,1,0),t.castShadow=!0,t.shadow.mapSize.set(_s.shadowMap/2,_s.shadowMap/2),t.shadow.bias=-2e-4,t.shadow.normalBias=.02,n.add(t,t.target);let i=new us(16747066,260,0,.55,.8,2);i.position.set(2.2,3.2,-6),i.target.position.set(0,1.2,0),n.add(i,i.target);let s=new us(4122367,70,0,.5,.8,2);s.position.set(-4,3,-4),s.target.position.set(0,1.4,0),n.add(s,s.target);let r=new zs(4122367,2.5,10,2);r.position.set(-1.5,1.2,2.5),n.add(r);let o=new ne(new rs(400,64),new Ae({map:em("#7a5a34","#4e3820","#a8844e",60),roughness:1}));o.rotation.x=-Math.PI/2,o.receiveShadow=!0,n.add(o),n.add(rm(_s.menuGrass,60,(V,K)=>{let q=Math.hypot(V,K);return q>3.2&&q<60&&K<8?"gold":null}));let a=new ne(new Yt(1.25,1.45,.38,48),new Ae({color:2762274,metalness:.85,roughness:.3}));a.position.y=.19,a.receiveShadow=!0,a.castShadow=!0,n.add(a);let l=new ne(new Wn(1.32,.018,8,96),en(4122367,1.6));l.rotation.x=Math.PI/2,l.position.y=.39,n.add(l);let c=new ne(new as(2.2,2.24,96),new Tt({color:4122367,transparent:!0,opacity:.28}));c.rotation.x=-Math.PI/2,c.position.y=.02,n.add(c);let h=new Ue;h.position.set(0,2.1,-2.6),n.add(h);let u=new is({color:4122367,transparent:!0,opacity:.35}),d=(V,K=96)=>{let q=[];for(let ie=0;ie<=K;ie++){let Z=ie/K*Math.PI*2;q.push(new Ge(Math.cos(Z)*V,Math.sin(Z)*V,0))}return new Ii(new pt().setFromPoints(q),u)};h.add(d(1.9),d(1.75),d(1.1,6));let f=d(1.75,3);f.rotation.z=Math.PI/2,h.add(f);let g=d(1.75,3);g.rotation.z=-Math.PI/2,h.add(g),De.sigil=h;let x=[];for(let V=0;V<46;V++){let K=N(-Math.PI,0),q=N(16,140);x.push({x:Math.cos(K)*q,z:Math.sin(K)*q-4,s:N(.9,1.6)})}n.add(Gu(x));for(let[V,K,q]of[[-22,-34,1.3],[26,-58,1.6],[-60,-90,1.8]]){let ie=om(q);ie.position.set(V,0,K),n.add(ie)}let m=new Ge(-.39,0,-.92),p=new Ge(.92,0,-.39),_=(V,K)=>m.clone().multiplyScalar(Math.cos(V*Math.PI/180)*K).addScaledVector(p,Math.sin(V*Math.PI/180)*K),b=[Xs("sand"),Xs("white"),Xs("glass")],y=new Ae({color:15129803,roughness:.6}),L=new Ae({color:10124894,roughness:.9});for(let V=0;V<40;V++){let K=_(N(19,36),N(170,240)),q=N(6,13),ie=N(6,13),Z=N(12,55)*(V%6===0?1.7:1),me=Z>60?b[2]:ht([b[0],b[0],b[1]]),ye=new vn(q,Z,ie);ed(ye,q,Z,ie);let Ie=new ne(ye,[me,me,L,L,me,me]);if(Ie.position.set(K.x,Z/2,K.z),n.add(Ie),me!==b[2]&&V%3===0){let Xe=new ne(new Li(Math.min(q,ie)*.45,16,8,0,Math.PI*2,0,Math.PI/2),y);Xe.position.set(K.x,Z,K.z),n.add(Xe)}}let w=new Ue,R=_(-17,135);w.position.set(R.x,0,R.z),n.add(w);let P=en(16722762,1.6),T=new ne(mt.oct,P);T.scale.set(3,14,3),T.position.y=5,T.rotation.z=.35,w.add(T),De.frags=[];for(let V=0;V<7;V++){let K=new ne(mt.oct,P);K.scale.set(N(.6,1.4),N(2,4),N(.6,1.4)),K.position.set(N(-8,8),N(14,26),N(-3,3)),K.rotation.set(N(0,3),N(0,3),N(0,3)),K.userData.s=N(.1,.4),K.userData.dynamic=!0,w.add(K),De.frags.push(K)}let v=700,D=new Float32Array(v*3),X=new Float32Array(v*3);for(let V=0;V<v;V++){D[V*3]=N(-14,14),D[V*3+1]=N(0,10),D[V*3+2]=N(-12,6);let K=Math.random()<.8?[1,.75,.4]:[.25,.9,1];X.set(K,V*3)}let W=new pt;W.setAttribute("position",new At(D,3)),W.setAttribute("color",new At(X,3)),De.embers=new ss(W,new Pi({map:ju(),size:.07,vertexColors:!0,transparent:!0,opacity:.8,blending:_n,depthWrite:!1})),n.add(De.embers),De.mascar=Ju(2.05),De.mascar.position.y=.38,De.mascar.userData.dynamic=!0,n.add(De.mascar),De.onView=_,De.herd=[];for(let[V,K,q]of[["elephant",-4,62],["elephant",-8,66],["giraffe",-13,70],["giraffe",-17,74],["giraffe",-22,68]]){let ie=V==="giraffe"?cm():hm();ie.group.userData.dynamic=!0,n.add(ie.group),De.herd.push({rig:ie,deg:K,dist:q,phase:N(0,6),speed:V==="giraffe"?1.5:1.2})}De.birds=um(Al(4,_(-6,120).x,_(-6,120).z,14,26,26,34,6,1.6)),n.add(De.birds),tm(n,400),De.cam.position.set(1.9,1.95,7.3)}function NM(n){let e=S.time;Il.value=e,De.sky.material.uniforms.t.value=e;for(let a of De.herd){a.deg+=a.speed*n/a.dist*180/Math.PI,a.deg>8&&(a.deg-=38);let l=De.onView(a.deg,a.dist),c=De.onView(a.deg+1,a.dist),h=a.rig.group;h.position.set(l.x,0,l.z),h.rotation.y=Math.atan2(c.x-l.x,c.z-l.z),a.phase+=n*a.speed/a.rig.legLen*2.4,a.rig.legs.forEach((u,d)=>{u.rotation.x=Math.sin(a.phase+[0,Math.PI,Math.PI,0][d])*.34}),a.rig.tail.rotation.z=Math.sin(e*2+a.dist)*.3}dm(De.birds,e),De.drag||(De.yawVel*=.94,De.yaw+=De.yawVel,De.yaw*=.985),De.mascar&&(De.mascar.rotation.y=De.yaw+Math.sin(e*.25)*.18,De.mascar.children[0].scale.y=De.mascar.children[0].scale.x*(1+Math.sin(e*1.6)*.003)),De.sigil.rotation.z=e*.05,De.sigil.children[3].rotation.z=Math.PI/2-e*.12,De.sigil.children[4].rotation.z=-Math.PI/2+e*.09;for(let a of De.frags)a.rotation.y+=a.userData.s*n,a.position.y+=Math.sin(e+a.userData.s*10)*.004;let t=De.embers.geometry.attributes.position;for(let a=0;a<t.count;a++){let l=t.getY(a)+n*(.08+a%7*.02);l>10&&(l=0),t.setY(a,l),t.setX(a,t.getX(a)+Math.sin(e*.4+a)*.003+n*.05),t.getX(a)>14&&t.setX(a,-14)}t.needsUpdate=!0;let i=De.cam.aspect<1,s=(i?.5:1.9)+De.mx*.35,r=(i?1.6:1.95)-De.my*.2,o=i?6.4+4.5/De.cam.aspect:7.3;De.cam.position.x+=(s-De.cam.position.x)*.04,De.cam.position.y+=(r-De.cam.position.y)*.04,De.cam.position.z+=(o-De.cam.position.z)*.08,De.cam.lookAt(i?0:-.85,i?.35:1.45,0)}var le={scene:new ks,cam:new Xt(60,innerWidth/innerHeight,.1,900)},Vo={plaza:{name:"CONCORDIA PLAZA",sub:"SANCTUARY \xB7 SEAT OF THE GOVERNOR",safe:!0},causeway:{name:"CONCORD CAUSEWAY",sub:"AD-NOSTRA"},ward:{name:"SPIRE WARD",sub:"AD-NOSTRA"},ashen:{name:"SCORCHED VELD",sub:"LEVEL 1\u20133 \xB7 CONTESTED"},echo:{name:"ECHO PLAINS",sub:"LEVEL 2\u20134 \xB7 CONTESTED"},crater:{name:"THE CATHARSIS CRATER",sub:"LEVEL 4\u20137 \xB7 HOSTILE"},cantina:{name:"THE SALT LANTERN",sub:"CANTINA \xB7 SANCTUARY",safe:!0}},dn={x0:-11,x1:11,z0:46,z1:70,h:6.2},UM=(n,e)=>n>dn.x0+.3&&n<dn.x1-.3&&e>dn.z0+.3&&e<dn.z1-.3,OM=(n,e)=>Math.abs(n)<17&&e>28&&e<78,xt=new Ge(0,0,-165);function Yn(n,e){return UM(n,e)?"cantina":Math.hypot(n,e)<34?"plaza":Math.hypot(n-xt.x,e-xt.z)<72?"crater":n>34&&n<156&&Math.abs(e)<62?"ashen":n<-34&&n>-156&&Math.abs(e)<62?"echo":Math.abs(e)<12||Math.abs(n)<12&&e<0?"causeway":"ward"}function Hp(n,e,t){return Math.abs(n)<17+t&&e>28-t&&e<78+t||Math.hypot(n,e)<40+t||Math.abs(e)<12+t||Math.abs(n)<12+t||n>30-t&&n<160+t&&Math.abs(e)<66+t||n<-30+t&&n>-160-t&&Math.abs(e)<66+t||Math.hypot(n-xt.x,e-xt.z)<76+t||Math.hypot(n,e)>232-t}function kt(n,e,t,i,s=60){S.colliders.push({minX:n-t/2,maxX:n+t/2,minZ:e-i/2,maxZ:e+i/2,h:s})}function FM(){let n=le.scene;n.fog=new Xa(14200450,70,330),n.userData.post={strength:.45,radius:.5,threshold:.95,exposure:.9},n.add(new Ro(16769208,5914152,.6));let e=new Or(16766624,2.4);e.castShadow=!0,e.shadow.mapSize.set(_s.shadowMap,_s.shadowMap),Object.assign(e.shadow.camera,{left:-45,right:45,top:45,bottom:-45,near:1,far:300}),e.shadow.camera.updateProjectionMatrix(),e.shadow.bias=-4e-4,e.shadow.normalBias=.03,n.add(e,e.target),le.sun=e;let t=Qp(Sl,600,{zen:4880564,mid:12170408,hor:14200450,glow:16761466,clouds:1});n.add(t),le.sky=t,n.environment=Kp(t),n.environmentIntensity=.55,am(n);let i=em("#9a7440","#6e5028","#c9a160",90),s=new ne(new an(600,600),new Ae({map:i,roughness:1}));s.rotation.x=-Math.PI/2,s.receiveShadow=!0,n.add(s);let r=(O,J,j,he,I=.02,Pe={})=>{let xe=new ne(O,new Ae(Object.assign({map:J,roughness:.95,polygonOffset:!0,polygonOffsetFactor:-1-I*10},Pe)));return xe.rotation.x=-Math.PI/2,xe.position.set(j,I,he),xe.receiveShadow=!0,n.add(xe),xe},o=Gt(256,256,(O,J,j)=>{O.fillStyle="#8a5a3a",O.fillRect(0,0,J,j),ui(O,J,j,2500,["#7a4e32","#9c6a46","#6a4229"],3),O.fillStyle="rgba(240,220,180,0.35)",O.fillRect(40,124,170,8)});o.repeat.set(300/14,1),r(new an(300,14),o,0,0,.01);let a=Gt(256,256,(O,J,j)=>{O.fillStyle="#8a5a3a",O.fillRect(0,0,J,j),ui(O,J,j,2500,["#7a4e32","#9c6a46","#6a4229"],3),O.fillStyle="rgba(240,220,180,0.35)",O.fillRect(124,40,8,170)});a.repeat.set(1,120/14),r(new an(14,120),a,0,-60,.011);let l=Ct("kerb",()=>new Ae({color:14205082,roughness:.9}));for(let O of[-1,1]){for(let J of[-1,1])fe(116,.06,.12,l,J*92,.03,O*7.2,n).castShadow=!1;fe(.12,.06,70,l,O*7.2,.03,-71,n).castShadow=!1}let c={sand:Xs("sand"),white:Xs("white"),terra:Xs("terra"),glass:Xs("glass")},h=new Ae({color:11045478,roughness:.92}),u=new Ae({color:14931384,roughness:.85}),d=new Ae({color:15656144,roughness:.55}),f=en(16724821,3);le.blink=f;let g=(O,J,j,he,I,Pe,xe)=>{let Oe=new vn(O,J,j);ed(Oe,O,J,j);let be=new ne(Oe,[xe,xe,h,h,xe,xe]);be.position.set(he,I+J/2,Pe),be.castShadow=be.receiveShadow=!0,n.add(be)},x=(O,J,j,he,I)=>{for(let[Pe,xe,Oe,be]of[[O,.35,0,J/2],[O,.35,0,-J/2],[.35,J,O/2,0],[.35,J,-O/2,0]])fe(Pe,.9,xe,u,j+Oe,he+.45,I+be,n)},m=(O,J,j)=>{let he=N(7,13);fe(.35,he,.35,u,O,J+he/2,j,n);let I=new ne(mt.sph,f);I.scale.setScalar(.35),I.position.set(O,J+he,j),n.add(I)};for(let O=-230;O<=230;O+=20)for(let J=-230;J<=230;J+=20){let j=N(9,15),he=N(9,15),I=O+N(-2,2),Pe=J+N(-2,2);if(Hp(I,Pe,Math.max(j,he)/2))continue;let xe=Math.hypot(I,Pe),Oe=N(14,40)+(xe<120?N(0,45):N(0,20));if(kt(I,Pe,j,he,Oe+3),Oe>58&&Math.random()<.55){let C=N(7,11);g(j,C,he,I,0,Pe,c.sand),x(j,he,I,C,Pe);let F=j*N(.55,.7),H=he*N(.55,.7);g(F,Oe-C,H,I,C,Pe,c.glass),m(I,Oe,Pe);continue}let be=ht([c.sand,c.sand,c.white,c.terra]),ct=Oe>34?js(2,3):1,Le=0,A=j,M=he,G=Oe;for(let C=0;C<ct;C++){let F=C===ct-1?G:G*N(.45,.62);g(A,F,M,I,Le,Pe,be),Le+=F,G-=F,(C<ct-1||be!==c.white)&&x(A,M,I,Le,Pe),C<ct-1&&(A*=N(.62,.8),M*=N(.62,.8))}if(be===c.white&&Math.random()<.7){let C=Math.min(A,M)*.42,F=new ne(new Yt(C,C,1.6,20),u);F.position.set(I,Le+.8,Pe),F.castShadow=!0,n.add(F);let H=new ne(new Li(C,20,10,0,Math.PI*2,0,Math.PI/2),d);H.position.set(I,Le+1.6,Pe),H.castShadow=!0,n.add(H)}else Oe>50&&m(I,Le,Pe)}let p=new ne(new Yt(246,246,34,128,1,!0),new Ae({color:11832418,roughness:.95,side:hn}));p.position.y=17,n.add(p);let _=new ne(new Wn(245,.25,6,256),en(15254634,1.6));_.rotation.x=Math.PI/2,_.position.y=33,n.add(_);let b=["AD-NOSTRA","REBUILD \xB7 RENEW \xB7 REMEMBER","CONCORD","ANNO DOMINI 2137","THE SKY IS OURS","ENLIST \xB7 ASCEND"];b.forEach((O,J)=>{let j=Gt(1024,192,(Pe,xe,Oe)=>{Pe.clearRect(0,0,xe,Oe),Pe.strokeStyle=J%2?"#e8c46a":"#3ee6ff",Pe.lineWidth=4,Pe.strokeRect(8,8,xe-16,Oe-16),Pe.fillStyle=J%2?"#e8c46a":"#3ee6ff",Pe.font="bold 84px Bahnschrift, Segoe UI, sans-serif",Pe.textAlign="center",Pe.textBaseline="middle",Pe.fillText(O,xe/2,Oe/2+4)});j.wrapS=j.wrapT=Rn;let he=J/b.length*Math.PI*2+.5,I=new ne(new an(26,4.9),new Tt({map:j,transparent:!0,opacity:.85,side:sn,blending:_n,depthWrite:!1}));I.position.set(Math.cos(he)*46,N(20,30),Math.sin(he)*46),I.lookAt(0,I.position.y,0),n.add(I)});let y=Gt(1024,1024,(O,J,j)=>{O.fillStyle="#b4936c",O.fillRect(0,0,J,j),ui(O,J,j,8e3,["#c0a07a","#a6845e","#c9ab86"]),O.strokeStyle="rgba(90,60,30,0.35)",O.lineWidth=3;for(let he=64;he<512;he+=64)O.beginPath(),O.arc(512,512,he,0,Math.PI*2),O.stroke();for(let he=0;he<32;he++){let I=he/32*Math.PI*2;O.beginPath(),O.moveTo(512+Math.cos(I)*64,512+Math.sin(I)*64),O.lineTo(512+Math.cos(I)*512,512+Math.sin(I)*512),O.stroke()}});r(new rs(34,96),y,0,0,.03,{roughness:.85});for(let[O,J]of[[33.6,.9],[30,.5],[16,.6]]){let j=new ne(new as(O-.15,O,128),new Tt({color:4122367,transparent:!0,opacity:J}));j.rotation.x=-Math.PI/2,j.position.y=.05,n.add(j)}let L=fi(2765115);for(let O=0;O<12;O++){let J=O/12*Math.PI*2+Math.PI/12,j=Math.cos(J)*31,he=Math.sin(J)*31;fe(.25,5,.25,L,j,2.5,he,n),fe(.9,.12,.9,en(10480127,3),j,5.05,he,n),kt(j,he,.5,.5)}let w=new Ae({color:9073240,metalness:.2,roughness:.6});for(let[O,J]of[[5.5,.4],[4.3,.8],[3.2,1.2]]){let j=new ne(new Yt(O,O+.2,J,48),w);j.position.set(0,J/2,-12),j.receiveShadow=!0,j.castShadow=!0,n.add(j)}let R=new ne(new Wn(3.25,.03,6,96),en(4122367,4));R.rotation.x=Math.PI/2,R.position.set(0,1.21,-12),n.add(R);let P=fe(9,4,9,w,0,2,-27,n);kt(0,-27,9,9);let T=Gt(512,128,(O,J,j)=>{O.fillStyle="#c9a85a",O.font="bold 40px Bahnschrift, sans-serif",O.textAlign="center",O.fillText("CARAX \xB7 SAGITTARIUS A*",J/2,52),O.font="28px Bahnschrift, sans-serif",O.fillText("MMCXXVII",J/2,98)});T.wrapS=T.wrapT=Rn;let v=new ne(new an(6,1.5),new Ae({map:T,transparent:!0,emissive:13215834,emissiveMap:T,emissiveIntensity:.5}));v.position.set(0,2.2,-22.48),n.add(v);let D=Ju(15,new Ae({color:9212828,roughness:.75,metalness:.15}));D.position.set(0,4,-27),n.add(D);let X=new ne(new Wn(7,.12,8,128),en(4122367,3));X.position.set(0,15,-29),X.userData.dynamic=!0,n.add(X),le.halo=X;let W=Gt(512,512,(O,J,j)=>{O.fillStyle="#4a3a2c",O.fillRect(0,0,J,j),ui(O,J,j,9e3,["#3a2e24","#2a221c","#5c4834","#6e5028"],3),Fo(O,J,j,18,"rgba(0,0,0,0.6)",2),Fo(O,J,j,4,"rgba(255,90,40,0.25)",1.5)},8);r(new an(124,126),W,95,0,.02);let V=new Ae({color:9072210,roughness:.95}),K=new Ae({color:3024416,roughness:1});for(let O=0;O<46;O++){let J=N(42,150),j=N(-58,58);if(Math.abs(j)<9)continue;let he=Math.random()<.5,I=N(3,11),Pe=N(.8,5.5),xe=N(.6,1.2),Oe=fe(he?xe:I,Pe,he?I:xe,Math.random()<.5?V:K,J,Pe/2,j,n);if(kt(J,j,he?xe:I,he?I:xe,Pe),Math.random()<.4)for(let be=0;be<4;be++)fe(N(.4,1.4),N(.3,.9),N(.4,1.4),V,J+N(-3,3),.25,j+N(-3,3),n).rotation.set(N(0,1),N(0,3),N(0,1))}le.fires=[];let q=new Ae({color:16742954,emissive:16734746,emissiveIntensity:3,transparent:!0,opacity:.9});for(let O=0;O<12;O++){let J=N(45,148),j=N(-55,55);if(Math.abs(j)<9)continue;let he=new ne(mt.cyl,fi(3811874));he.scale.set(.45,1,.45),he.position.set(J,.5,j),he.castShadow=!0,n.add(he),kt(J,j,.9,.9,1.2);let I=new ne(new os(.4,1.2,8),q);I.position.set(J,1.5,j),I.userData.dynamic=!0,n.add(I),le.fires.push(I)}let ie=[];for(let O=0;O<22;O++){let J=N(44,150),j=N(-58,58);Math.abs(j)<12||(ie.push({x:J,z:j,s:N(.8,1.3),dead:Math.random()<.7}),kt(J,j,.7,.7,4))}n.add(Gu(ie));let Z=Gt(512,512,(O,J,j)=>{O.fillStyle="#b7a77c",O.fillRect(0,0,J,j),ui(O,J,j,6e3,["#c9bb92","#a39268","#d4c8a2"],2),O.strokeStyle="rgba(255,43,74,0.12)",O.lineWidth=2;for(let he=0;he<=8;he++)O.beginPath(),O.moveTo(he*64,0),O.lineTo(he*64,j),O.stroke(),O.beginPath(),O.moveTo(0,he*64),O.lineTo(J,he*64),O.stroke();Fo(O,J,j,10,"rgba(60,40,20,0.35)")},6);r(new an(124,126),Z,-95,0,.02),le.pylons=[];for(let O=0;O<9;O++){let J=N(-148,-48),j=N(-55,55);if(Math.abs(j)<10)continue;let he=new ne(new Yt(.35,.7,16,8),fi(3814448));he.position.set(J,8,j),he.castShadow=!0,n.add(he),kt(J,j,1.4,1.4);let I=new ne(new Wn(1.6,.08,6,32),en(16722762,3));I.position.set(J,12,j),I.rotation.x=Math.PI/2,n.add(I);let Pe=new ne(mt.oct,en(16722762,4));Pe.scale.setScalar(.5),Pe.position.set(J,16.6,j),n.add(Pe),I.userData.dynamic=Pe.userData.dynamic=!0,le.pylons.push({r:I,top:Pe,ph:N(0,6)})}let me=[];for(let O=0;O<18;O++){let J=N(-150,-44),j=N(-58,58);Math.abs(j)<12||(me.push({x:J,z:j,s:N(.9,1.5)}),kt(J,j,.7,.7,4))}n.add(Gu(me));for(let[O,J,j]of[[-70,-40,1.1],[-132,34,1.3],[-110,-50,.9]]){let he=om(j);he.position.set(O,0,J),n.add(he),kt(O,J,3.2*j,3.2*j,8)}let ye=Gt(1024,1024,(O,J,j)=>{O.fillStyle="#5a2e22",O.fillRect(0,0,J,j),ui(O,J,j,12e3,["#6a3828","#44221a","#7a4430","#2a1610"],3),O.shadowColor="#ff2b4a",O.shadowBlur=8,Fo(O,J,j,26,"rgba(255,43,74,0.55)",2.5),O.shadowBlur=0,Fo(O,J,j,30,"rgba(0,0,0,0.6)",2)});r(new rs(72,96),ye,xt.x,xt.z,.025,{emissive:16777215,emissiveMap:ye,emissiveIntensity:.15});let Ie=new Ae({color:8014388,roughness:.9,flatShading:!0});for(let O=0;O<Math.PI*2;O+=.085){if(Math.abs(O-Math.PI/2)<.2)continue;let J=N(64,74),j=N(3.5,7),he=N(6,16),I=xt.x+Math.cos(O)*J,Pe=xt.z+Math.sin(O)*J,xe=new ne(mt.rock,Ie);xe.scale.set(j*1.25,he*.32,j),xe.position.set(I,he*.1,Pe),xe.rotation.set(N(-.15,.15),N(0,3),N(-.15,.15)),xe.castShadow=!0,xe.receiveShadow=!0,n.add(xe),kt(I,Pe,j*1.3,j*1.3,he*.6)}for(let O=0;O<26;O++){let J=N(0,Math.PI*2),j=N(18,58),he=xt.x+Math.cos(J)*j,I=xt.z+Math.sin(J)*j;if(I>xt.z+40&&Math.abs(he)<10)continue;let Pe=N(1,2.5),xe=new ne(mt.rock,Ie);xe.scale.set(Pe*1.2,Pe*N(.5,.8),Pe),xe.position.set(he,Pe*.2,I),xe.rotation.set(N(-.4,.4),N(0,3),N(-.4,.4)),xe.castShadow=!0,n.add(xe),kt(he,I,Pe*1.2,Pe*1.2,3)}let Xe=new Ue;Xe.position.set(xt.x,0,xt.z-12),n.add(Xe);let ut=new Ae({color:2753289,emissive:16718396,emissiveIntensity:1.8,roughness:.2,metalness:.3,flatShading:!0}),te=new ne(mt.oct,ut);te.scale.set(5,14,5),te.position.y=4,te.rotation.z=.15,Xe.add(te),te.castShadow=!0,kt(Xe.position.x,Xe.position.z,8,8);let ce=new Ae({color:1709078,metalness:.7,roughness:.45,flatShading:!0}),Ce=new ne(new Yt(2.5,5.5,36,8),ce);Ce.position.set(7,4,-24),Ce.rotation.set(1.32,.25,0),Ce.castShadow=!0,Ce.receiveShadow=!0,Xe.add(Ce);for(let O=0;O<4;O++){let J=new ne(new Wn(3+O*.7,.12,6,8),ut);J.position.set(0,-12+O*7,0),J.rotation.x=Math.PI/2,Ce.add(J)}for(let O of[-1,1]){let J=fe(9,.5,5,ce,0,6,0);J.position.set(O*6,6,0),J.rotation.z=O*.4,Ce.add(J)}for(let O=0;O<4;O++)kt(Xe.position.x+7+(O-1.5)*2.2,Xe.position.z-10-O*8,10,9,8);le.frags=[];for(let O=0;O<9;O++){let J=new ne(mt.oct,ut);J.scale.set(N(1,2.5),N(3,7),N(1,2.5));let j=O/9*Math.PI*2;J.userData={a:j,r:N(9,15),y:N(16,30),s:N(.05,.15),dynamic:!0},Xe.add(J),le.frags.push(J)}let ge=1400,ze=new Float32Array(ge*3);for(let O=0;O<ge;O++)ze[O*3]=N(-60,60),ze[O*3+1]=N(0,30),ze[O*3+2]=N(-60,60);let Ye=new pt;Ye.setAttribute("position",new At(ze,3)),le.ash=new ss(Ye,new Pi({map:ju(),size:.16,color:16769192,transparent:!0,opacity:.55,depthWrite:!1})),n.add(le.ash),le.grass=rm(_s.worldGrass,232,(O,J)=>{if(Math.hypot(O,J)>236||!Hp(O,J,-2)||OM(O,J)||Math.abs(J)<8||Math.abs(O)<8&&J<0&&J>-120)return null;let j=Yn(O,J);return j==="plaza"?null:j==="crater"?Math.hypot(O-xt.x,J-xt.z)>62&&Math.random()<.3?"burnt":null:j==="ashen"?Math.random()<.6?"burnt":"gold":j==="echo"?"pale":"gold"},0,0,64),n.add(le.grass),le.shieldMesh=new ne(new Li(1.3,24,16),new Tt({color:10480127,transparent:!0,opacity:.18,blending:_n,depthWrite:!1})),le.shieldMesh.visible=!1,n.add(le.shieldMesh),le.targetRing=new ne(new as(.9,1.05,48),new Tt({color:16722762,transparent:!0,opacity:.9,depthWrite:!1})),le.targetRing.rotation.x=-Math.PI/2,le.targetRing.visible=!1,n.add(le.targetRing),HM(n),le.birds=um([...Al(7,xt.x,xt.z,22,46,30,46,7,1.6),...Al(10,-95,8,12,24,14,20,10,.45),...Al(8,95,-10,12,22,14,20,10,.45)]),n.add(le.birds),le.batch=tm(n,250),CM(n),s1(),zM(),r1(),o1(),a1(),QM(),S.world=!0}var BM=()=>Gt(512,512,(n,e,t)=>{n.fillStyle="#ece5d6",n.fillRect(0,0,e,t),ui(n,e,t,5e3,["rgba(0,0,0,0.035)","rgba(255,255,255,0.08)","rgba(120,90,50,0.05)"],3);let i=n.createLinearGradient(0,t,0,t*.55);i.addColorStop(0,"rgba(150,110,60,0.28)"),i.addColorStop(1,"rgba(150,110,60,0)"),n.fillStyle=i,n.fillRect(0,t*.55,e,t*.45)}),kM=()=>Gt(512,512,(n,e,t)=>{let s=t/16;for(let r=0;r<16;r++){let o=-N(0,200);for(;o<e;){let a=N(140,260);n.fillStyle=ht(["#6b4527","#5e3c22","#74502e","#634024"]),n.fillRect(o,r*s,a-2,s-2),o+=a}}for(let r=0;r<900;r++)n.fillStyle="rgba(30,15,5,0.18)",n.fillRect(N(0,e),N(0,t),N(8,40),1)},3);function zp(n,e,t,i){let s=Gt(n,e,r=>{t&&(r.fillStyle=t,r.fillRect(0,0,n,e));for(let o of i)r.fillStyle=o.c,r.font=o.f,r.textAlign="center",r.textBaseline="middle",r.fillText(o.t,n/2,o.y)});return s.wrapS=s.wrapT=Rn,s}function HM(n){let{x0:e,x1:t,z0:i,z1:s,h:r}=dn,o=.6,a=(e+t)/2,l=(i+s)/2,c=t-e,h=s-i,u=Ct("plaster",()=>new Ae({map:BM(),roughness:.95})),d=Ct("darkwood",()=>new Ae({color:4073238,roughness:.75})),f=Ct("lightwood",()=>new Ae({color:9067058,roughness:.55})),g=Ct("iron",()=>new Ae({color:2236446,metalness:.7,roughness:.45})),x=Ct("brass",()=>new Ae({color:13213776,metalness:.9,roughness:.3})),m=en(16757575,2.2),p=(C,F,H,re,oe,pe)=>{let Je=new vn(C,F,H);ed(Je,C,F*3,H);let ae=new ne(Je,u);ae.position.set(re,oe,pe),ae.castShadow=ae.receiveShadow=!0,n.add(ae)},_=(C,F,H,re,oe,pe,Je,ae=16)=>{let Se=new ne(new Yt(C,F,H,ae),re);return Se.position.set(oe,pe,Je),Se.castShadow=Se.receiveShadow=!0,n.add(Se),Se},b=Gt(512,512,(C,F,H)=>{C.fillStyle="#b4936c",C.fillRect(0,0,F,H),ui(C,F,H,6e3,["#c0a07a","#a6845e","#c9ab86"]),C.strokeStyle="rgba(80,55,30,0.4)",C.lineWidth=3;for(let re=0;re<=8;re++)C.beginPath(),C.moveTo(re*64,0),C.lineTo(re*64,H),C.stroke(),C.beginPath(),C.moveTo(0,re*64+re%2*16),C.lineTo(F,re*64+re%2*16),C.stroke()},5),y=new ne(new an(34,50),new Ae({map:b,roughness:.9,polygonOffset:!0,polygonOffsetFactor:-1.2}));y.rotation.x=-Math.PI/2,y.position.set(0,.022,53),y.receiveShadow=!0,n.add(y);let L=Ct("terracotta",()=>new Ae({color:10768430,roughness:.85})),w=Ct("frond",()=>new Ae({color:5925420,roughness:.85,side:sn}));for(let C of[-1,1]){let F=C*4.4,H=i-1.6;_(.55,.42,.9,L,F,.45,H);let re=_(.1,.16,3.2,Ct("palmTrunk",()=>new Ae({color:7033398,roughness:.95})),F,2.4,H,6);re.rotation.z=C*.06;for(let oe=0;oe<7;oe++){let pe=new ne(new an(.5,2.2),w),Je=oe/7*Math.PI*2;pe.position.set(F+Math.sin(Je)*.8,3.9,H+Math.cos(Je)*.8),pe.rotation.set(1.05,Je,0,"YXZ"),pe.castShadow=!0,n.add(pe)}kt(F,H,1.1,1.1,2),fe(2.4,.12,.6,f,C*8,.55,i-1.2,n),fe(.12,.5,.5,d,C*8-1,.25,i-1.2,n),fe(.12,.5,.5,d,C*8+1,.25,i-1.2,n)}p(o,r,h+o,e,r/2,l),p(o,r,h+o,t,r/2,l),p(c+o,r,o,a,r/2,s);let R=4.4,P=(c-R)/2;p(P,r,o,e+P/2,r/2,i),p(P,r,o,t-P/2,r/2,i),p(R,2,o,a,r-1,i),kt(e,l,o,h+o,r+.5),kt(t,l,o,h+o,r+.5),kt(a,s,c+o,o,r+.5),kt(e+P/2,i,P,o,r+.5),kt(t-P/2,i,P,o,r+.5);for(let C of[-1,1])fe(.3,4.4,.8,d,C*(R/2+.05),2.2,i,n);fe(R+.7,.35,.8,d,a,4.35,i,n);let T=Gt(128,256,(C,F,H)=>{C.fillStyle="#3a2414",C.fillRect(0,0,F,H),C.strokeStyle="#24160b",C.lineWidth=6,C.strokeRect(10,10,F-20,H-20),C.strokeRect(24,30,F-48,H-60),C.fillStyle="#d4a94e";for(let re=40;re<H-30;re+=26)for(let oe of[36,F/2,F-36])C.beginPath(),C.arc(oe,re,4,0,7),C.fill()}),v=new ne(new vn(2,4.1,.14),new Ae({map:T,roughness:.7}));v.geometry.translate(1,0,0),v.position.set(a-R/2+.1,2.05,i+.25),v.rotation.y=-1.75,v.castShadow=!0,n.add(v);let D=Gt(64,128,(C,F,H)=>{C.fillStyle="#2a1a10",C.fillRect(0,0,F,H),C.fillStyle="#ffc070",C.beginPath(),C.moveTo(8,H-8),C.lineTo(8,30),C.arc(F/2,30,F/2-8,Math.PI,0),C.lineTo(F-8,H-8),C.fill(),C.fillStyle="#2a1a10",C.fillRect(F/2-2,10,4,H-18),C.fillRect(8,H/2,F-16,4)}),X=new Ae({map:D,emissive:16777215,emissiveMap:D,emissiveIntensity:.9,roughness:.4});for(let C of[51,58,65])for(let F of[e,t]){let H=new ne(new vn(o+.06,2,1.1),X);H.position.set(F,2.8,C),n.add(H)}let W=zp(1024,220,"#2a1a10",[{t:"THE SALT LANTERN",y:100,c:"#f0c46a",f:"bold 96px Georgia, serif"},{t:"\xB7 EST. BEFORE ANYONE REMEMBERS \xB7",y:178,c:"#b48a4a",f:"34px Georgia, serif"}]),V=new ne(new an(4.6,1),new Ae({map:W,emissive:16777215,emissiveMap:W,emissiveIntensity:.35,roughness:.6}));V.position.set(a,5.25,i-o/2-.03),V.rotation.y=Math.PI,n.add(V),fe(1.4,.5,1.4,u,a,r+.25,i,n);let K=new Ue;K.position.set(a,r+.5,i),n.add(K);for(let[C,F]of[[-1,-1],[1,-1],[-1,1],[1,1]])fe(.08,2,.08,g,C*.5,1,F*.5,K);fe(1.2,.12,1.2,g,0,.06,0,K);let q=new ne(new os(.95,.7,4),g);q.position.y=2.35,q.rotation.y=Math.PI/4,q.castShadow=!0,K.add(q);let ie=new ne(mt.oct,m);ie.scale.set(.38,.75,.38),ie.position.y=1,ie.userData.dynamic=!0,K.add(ie),le.lanternCrystal=ie;let Z=new ne(new an(c,h),new Ae({map:kM(),roughness:.7,polygonOffset:!0,polygonOffsetFactor:-2}));Z.rotation.x=-Math.PI/2,Z.position.set(a,.035,l),Z.receiveShadow=!0,n.add(Z);let me=Gt(128,512,(C,F,H)=>{C.fillStyle="#7a2a1c",C.fillRect(0,0,F,H),C.strokeStyle="#d9a44e",C.lineWidth=6,C.strokeRect(8,8,F-16,H-16),C.fillStyle="#1d3b4a";for(let re=40;re<H-30;re+=48)C.beginPath(),C.moveTo(F/2,re),C.lineTo(F/2+26,re+20),C.lineTo(F/2,re+40),C.lineTo(F/2-26,re+20),C.fill()}),ye=new ne(new an(2.4,7),new Ae({map:me,roughness:1,polygonOffset:!0,polygonOffsetFactor:-3}));ye.rotation.x=-Math.PI/2,ye.position.set(a,.04,i+4),ye.receiveShadow=!0,n.add(ye);let Ie=new Ue;Ie.userData.dynamic=!0,n.add(Ie);let Xe=Ct("cantinaRoof",()=>new Ae({color:14274493,roughness:.95})),ut=new ne(new vn(c+o+.8,.5,h+o+.8),Xe);ut.position.set(a,r+.25,l),Ie.add(ut);for(let[C,F,H,re]of[[c+o+.8,.4,a,s+.6],[.4,h+o+.8,e-.6,l],[.4,h+o+.8,t+.6,l]]){let oe=new ne(new vn(C,.9,F),Xe);oe.position.set(H,r+.95,re),Ie.add(oe)}Ie.traverse(C=>{C.isMesh&&(C.castShadow=!0,C.receiveShadow=!0)}),le.cantinaRoof={group:Ie,solid:Xe,ghost:new Ae({colorWrite:!1,depthWrite:!1}),inside:!1};for(let C of[49.5,54,58.5,63,67.5])fe(c,.35,.4,d,a,r-.35,C,n);for(let[C,F]of[[-5,54],[5,54],[-5,63],[5,63],[0,58.5]]){fe(.03,1.2,.03,g,C,r-1.1,F,n);let H=new ne(mt.oct,m);H.scale.set(.16,.26,.16),H.position.set(C,r-1.9,F),n.add(H);let re=new ne(new os(.2,.18,6),g);re.position.set(C,r-1.6,F),n.add(re)}let te=new zs(16756838,0,26,1.6);te.position.set(a,r-1.6,l),n.add(te),le.cantinaLight=te;let ce=-2,Ce=9.4,ge=66,ze=Ce-ce,Ye=(ce+Ce)/2;fe(ze,1.1,1,d,Ye,.55,ge,n),fe(ze+.2,.1,1.25,f,Ye,1.15,ge,n);let O=new ne(new Yt(.04,.04,ze,8),x);O.rotation.z=Math.PI/2,O.position.set(Ye,.25,ge-.62),n.add(O),kt(Ye,ge,ze,1,1.4);for(let C of[1.7,2.5,3.3]){fe(10.5,.08,.38,f,4,C,s-.5,n);for(let F=0;F<16;F++){let H=ht([13072930,4160058,8003364,6983592,12098122]),re=Ct("bottle"+H,()=>new Ae({color:H,emissive:H,emissiveIntensity:.35,roughness:.15,metalness:.1})),oe=N(.28,.42),pe=new ne(mt.cyl,re);pe.scale.set(.07,oe,.07),pe.position.set(-.9+F*.62+N(-.1,.1),C+.04+oe/2,s-.5),n.add(pe)}}let J=zp(512,256,"#1d211e",[{t:"LANTERN ALE",y:70,c:"#f3ead6",f:"bold 54px Georgia, serif"},{t:"savannah honey \xB7 and something else",y:140,c:"#cfc6b0",f:"italic 28px Georgia, serif"},{t:"25 CREDITS",y:205,c:"#f0c46a",f:"bold 40px Georgia, serif"}]),j=new ne(new an(2.6,1.3),new Ae({map:J,roughness:.9}));j.position.set(-.2,4.6,s-o/2-.02),j.rotation.y=Math.PI,n.add(j);for(let[C,F,H]of[[10,.6,67.6],[10,.6,68.9],[10,1.72,68.25]]){let re=_(.55,.55,1.1,Ct("barrel",()=>new Ae({color:6044190,roughness:.8})),C,F,H,14);re.rotation.x=Math.PI/2;for(let oe of[-.35,.35]){let pe=new ne(new Wn(.56,.03,6,20),g);pe.position.set(C,F,H+oe),n.add(pe)}}kt(10,68.25,1.2,2.6,2.3);let he=Ct("mug",()=>new Ae({color:15260864,roughness:.6})),I=en(13666858,.6),Pe=(C,F)=>{_(.85,.85,.08,f,C,1,F,20),_(.08,.1,.96,d,C,.5,F,8),_(.45,.5,.06,d,C,.03,F,12);for(let H=0;H<3;H++){let re=H/3*Math.PI*2+N(0,1),oe=C+Math.cos(re)*1.3,pe=F+Math.sin(re)*1.3;_(.3,.3,.07,f,oe,.64,pe,12),_(.05,.07,.6,d,oe,.31,pe,6)}for(let H=0;H<js(1,3);H++){let re=C+N(-.45,.45),oe=F+N(-.45,.45);_(.09,.08,.2,he,re,1.14,oe,10),_(.075,.075,.01,I,re,1.24,oe,10)}kt(C,F,1.5,1.5,1.2)};Pe(-6,51.5),Pe(6.5,51.5),Pe(-6.5,58.5),Pe(6.5,59);let xe=-8.6,Oe=67.4;fe(1.5,.08,1.1,f,xe,1,Oe,n);for(let[C,F]of[[-.65,-.45],[.65,-.45],[-.65,.45],[.65,.45]])fe(.08,1,.08,d,xe+C,.5,Oe+F,n);let be=new Ue;be.position.set(xe-1.15,0,Oe+.9),be.rotation.y=Math.PI*.8,n.add(be),fe(.6,.08,.6,d,0,.62,0,be),fe(.6,.9,.08,d,0,1.1,-.28,be);for(let[C,F]of[[-.25,-.25],[.25,-.25],[-.25,.25],[.25,.25]])fe(.06,.62,.06,d,C,.31,F,be);_(.07,.06,.22,new Ae({color:12573152,transparent:!1,roughness:.05,metalness:.2}),xe+.2,1.15,Oe-.1,12),_(.06,.06,.012,I,xe+.2,1.22,Oe-.1,12),fe(.3,.05,.12,x,xe-.3,1.06,Oe-.3,n),kt(xe,Oe,1.6,1.2,1.2);let ct=Gt(512,512,(C,F,H)=>{let re=C.createRadialGradient(F/2,H/2,40,F/2,H/2,F/2);re.addColorStop(0,"#b98a3e"),re.addColorStop(1,"#6e4a1c"),C.fillStyle=re,C.beginPath(),C.arc(F/2,H/2,F/2,0,7),C.fill(),C.strokeStyle="#e6c27a",C.lineWidth=10,C.beginPath(),C.arc(F/2,H/2,F/2-22,0,7),C.stroke(),C.fillStyle="#2e1d0a",C.textAlign="center",C.textBaseline="middle",C.font="bold 34px Georgia, serif",C.fillText("HERE",F/2,150),C.font="bold 50px Georgia, serif",C.fillText("ORION MASCAR",F/2,210),C.font="italic 34px Georgia, serif",C.fillText("fought",F/2,262),C.font="bold 50px Georgia, serif",C.fillText("DANIEL BROWN",F/2,316),C.font="24px Georgia, serif",C.fillText("THE SALT LANTERN",F/2,390)});ct.wrapS=ct.wrapT=Rn;let Le={x:.6,z:56},A=new ne(new rs(.75,40),new Ae({map:ct,metalness:.75,roughness:.35,polygonOffset:!0,polygonOffsetFactor:-4}));A.rotation.set(-Math.PI/2,0,Math.PI),A.position.set(Le.x,.05,Le.z),A.receiveShadow=!0,n.add(A);let M=new ne(new Wn(.76,.035,6,40),x);M.rotation.x=Math.PI/2,M.position.set(Le.x,.05,Le.z),n.add(M);let G=new Ue;G.position.set(Le.x+1.6,.3,Le.z-1.1),G.rotation.set(0,.6,1.45),n.add(G),fe(.6,.07,.6,f,0,.3,0,G),fe(.07,.6,.07,d,0,0,0,G),S.props.push({kind:"prop",id:"plaque",name:"Memorial Plaque",pos:new Ge(Le.x,0,Le.z)})}function zM(){let n=jr({armor:7031342,accent:16757575,visor:16757575,weapon:"none"}),e=new Ge(5.5,0,67.9);n.group.position.copy(e),n.group.rotation.y=Math.PI,le.scene.add(n.group);let t={kind:"npc",id:"zuri",name:"Zuri Adeyemi",title:"Keeper of the Salt Lantern",pos:e,group:n.group,rig:n,height:2.1,radius:1,alive:!0};t.plate=Wo("npc",'<div class="n">Zuri Adeyemi</div><div class="g">&lt;Keeper of the Salt Lantern&gt;</div>'),Xo(t,1,2,1,1),S.npcs.push(t)}function Yr(n=gs.greet){Xr("KEEPER OF THE SALT LANTERN","ZURI ADEYEMI","",n,S.D.aleT>0?`LANTERN ALE \xB7 ${lm(S.D.aleT)} LEFT`:"",[{label:"LANTERN ALE \xB7 25 CR",gold:!0,fn:VM},{label:"THE PLAQUE",fn:()=>Yr(gs.fight)},{label:"THE GOVERNOR",fn:()=>Yr(gs.gov)},{label:"LEAVE",fn:zt}])}var wl={cost:25,secs:600,bonus:.2};function VM(){let n=S.D;if(n.credits<wl.cost){Re.sfx("error"),Yr(gs.aleNo);return}let e=n.aleT>0;n.credits-=wl.cost,n.aleT=wl.secs,Re.sfx("coin"),yt("loot",null,"You drink a Lantern Ale. (+20% experience for 10 minutes)"),di(S.P.pos,16757575,2.5,.8),tn(S.P.pos.clone().setY(1.4),16757575,16,1.5),bs(),Yr(e?gs.aleAgain:gs.aleOk)}var lm=n=>`${Math.floor(n/60)}:${String(Math.floor(n%60)).padStart(2,"0")}`;function GM(){Xr(bl.title,bl.name,"",bl.text,"",[{label:"ASK ZURI ABOUT IT",fn:()=>{let n=S.npcs.find(e=>e.id==="zuri");n&&_t(S.P.pos,n.pos)<16?Yr(gs.fight):zt()}},{label:"CLOSE",fn:zt}])}var WM=[[-6,53.2],[-4.3,51.6],[6.5,53.2],[8.2,51.4],[-6.5,60.2],[-4.8,58.4],[6.5,60.7],[4.8,59],[-1.5,64.6],[1.5,64.7],[4.5,64.7],[7.5,64.6]],XM=()=>{let[n,e]=ht(WM);return new Ge(n+N(-.3,.3),0,e+N(-.3,.3))},Bu=new Map,Go=(n,e,t=8)=>{let i=n+","+e+","+t;return Bu.has(i)||Bu.set(i,new Yt(n,e,1,t)),Bu.get(i)};function Pl(n,e,t,i,s,r,o,a,l){let c=new Ue;c.position.set(e,t,i),n.add(c);let h=new ne(Go(r,o),a);if(h.scale.set(1,s,1),h.position.y=-s/2,c.add(h),l){let u=new ne(Go(o*1.1,o*1.3,6),l);u.scale.set(1,.1,1),u.position.y=-s+.05,c.add(u)}return c}var td=()=>Ct("animalDark",()=>new Ae({color:2826780,roughness:.9})),qM=()=>Ct("giraffe",()=>{let n=Gt(256,256,(t,i,s)=>{t.fillStyle="#eedcb0",t.fillRect(0,0,i,s);let r=6,o=i/r,a=[];for(let l=0;l<=r;l++){a[l]=[];for(let c=0;c<=r;c++)a[l][c]=[c*o+(c%r?N(-o*.28,o*.28):0),l*o+(l%r?N(-o*.28,o*.28):0)]}for(let l=0;l<r;l++)for(let c=0;c<r;c++){let h=[a[l][c],a[l][c+1],a[l+1][c+1],a[l+1][c]],u=h.reduce((d,f)=>[d[0]+f[0]/4,d[1]+f[1]/4],[0,0]);t.fillStyle=ht(["#8b5326","#94592a","#7e4a22"]),t.beginPath(),h.forEach(d=>t.lineTo(u[0]+(d[0]-u[0])*.8,u[1]+(d[1]-u[1])*.8)),t.closePath(),t.fill()}}),e=new Ae({map:n,roughness:.9});return e.userData.lodColor=11039812,e}),Vp=n=>Ct(n?"zebraLegs":"zebra",()=>{let e=Gt(256,256,(i,s,r)=>{i.fillStyle="#ece6da",i.fillRect(0,0,s,r),i.fillStyle="#1c1a19";for(let o=0;o<12;o++){let a=o*(n?r:s)/12;if(i.beginPath(),n){for(let l=0;l<=s;l+=8)i.lineTo(l,a+Math.sin(l*.05+o)*3);for(let l=s;l>=0;l-=8)i.lineTo(l,a+9+Math.sin(l*.05+o)*3)}else{for(let l=0;l<=r;l+=8)i.lineTo(a+Math.sin(l*.045+o)*6,l);for(let l=r;l>=0;l-=8)i.lineTo(a+9+Math.sin(l*.045+o+.7)*6,l)}i.closePath(),i.fill()}}),t=new Ae({map:e,roughness:.85});return t.userData.lodColor=9407106,t});function Ll(n,e){return n.traverse(t=>{t.isMesh&&(t.castShadow=!0,t.receiveShadow=!0)}),sm(n),e.bodyY=e.body.position.y,e.group=n,e}function cm(){let n=new Ue,e=qM(),t=td(),i=new Ue;i.position.y=2.45,n.add(i),fe(.8,.9,1.9,e,0,0,0,i),fe(.72,.62,.55,e,0,.16,.8,i);let s=new Ue;s.position.set(0,.35,.95),s.rotation.x=.42,i.add(s),fe(.3,2.4,.42,e,0,1.15,0,s),fe(.06,2.2,.1,t,0,1.15,-.24,s);let r=new Ue;r.position.set(0,2.35,.04),r.rotation.x=-.17,s.add(r),fe(.28,.3,.72,e,0,0,.25,r),fe(.2,.2,.2,t,0,-.04,.6,r);for(let l of[-1,1])fe(.06,.26,.06,t,l*.09,.27,-.02,r),fe(.16,.06,.08,e,l*.2,.12,-.05,r);let o=[[-.28,.78],[.28,.78],[-.28,-.78],[.28,-.78]].map(([l,c])=>Pl(i,l,-.35,c,2.1,.08,.06,e,t)),a=new Ue;return a.position.set(0,.3,-.95),a.rotation.x=-.25,i.add(a),fe(.05,1,.05,t,0,-.5,0,a),Ll(n,{body:i,neck:s,head:r,legs:o,tail:a,legLen:2.1,neckRest:.42,neckGraze:.62})}function hm(){let n=new Ue,e=Ct("eleSkin",()=>new Ae({color:8748149,roughness:.95,flatShading:!0})),t=Ct("ivory",()=>new Ae({color:15656658,roughness:.5})),i=Ct("eleToe",()=>new Ae({color:6248531,roughness:.9})),s=new Ue;s.position.y=2.15,n.add(s);let r=new ne(mt.ico1,e);r.scale.set(.95,.95,1.45),s.add(r);let o=new Ue;o.position.set(0,.35,1.3),s.add(o);let a=new ne(mt.ico1,e);a.scale.set(.62,.7,.6),a.position.set(0,.1,.35),o.add(a);let l=[-1,1].map(x=>{let m=new Ue;m.position.set(x*.45,.15,.2),m.rotation.y=x*.25,o.add(m);let p=fe(.07,1.1,.95,e,x*.04,-.05,-.4,m);return p.rotation.z=x*.1,m}),c=[],h=o,u=-.25,d=.85;for(let[x,m]of[[.7,.2],[.65,.15],[.55,.1]]){let p=new Ue;p.position.set(0,u,d),h.add(p);let _=new ne(Go(m,m*.8,8),e);_.scale.set(1,x,1),_.position.y=-x/2,p.add(_),c.push(p),h=p,u=-x,d=0}c[0].rotation.x=.35,c[1].rotation.x=.15;for(let x of[-1,1]){let m=new ne(Go(.015,.07,6),t);m.scale.set(1,.75,1),m.position.set(x*.25,-.35,.7),m.rotation.x=2.1,o.add(m)}let f=[[-.5,.82],[.5,.82],[-.5,-.82],[.5,-.82]].map(([x,m])=>Pl(s,x,-.6,m,1.55,.32,.3,e,i)),g=new Ue;return g.position.set(0,.3,-1.4),g.rotation.x=-.15,s.add(g),fe(.06,1,.06,e,0,-.5,0,g),Ll(n,{body:s,neck:o,head:a,legs:f,tail:g,ears:l,trunk:c,legLen:1.55,neckRest:0,neckGraze:.22})}function YM(){let n=new Ue,e=Vp(!1),t=Vp(!0),i=td(),s=new Ue;s.position.y=1.32,n.add(s),fe(.5,.62,1.35,e,0,0,0,s);let r=new Ue;r.position.set(0,.2,.62),r.rotation.x=.55,s.add(r),fe(.2,.78,.38,e,0,.36,0,r),fe(.06,.78,.12,i,0,.38,-.21,r);let o=new Ue;o.position.set(0,.75,.04),o.rotation.x=.55,r.add(o),fe(.2,.22,.55,e,0,0,.22,o),fe(.16,.16,.14,i,0,-.02,.5,o);for(let c of[-1,1])fe(.05,.2,.06,e,c*.08,.17,-.02,o);let a=[[-.17,.5],[.17,.5],[-.17,-.5],[.17,-.5]].map(([c,h])=>Pl(s,c,-.3,h,1.02,.065,.045,t,i)),l=new Ue;return l.position.set(0,.2,-.68),l.rotation.x=-.3,s.add(l),fe(.04,.6,.04,i,0,-.3,0,l),Ll(n,{body:s,neck:r,head:o,legs:a,tail:l,legLen:1.02,neckRest:.55,neckGraze:1.95})}function $M(){let n=new Ue,e=td(),t=Ct("gazelle",()=>new Ae({color:12089404,roughness:.85})),i=Ct("gazelleBelly",()=>new Ae({color:15722198,roughness:.85})),s=new Ue;s.position.y=.98,n.add(s),fe(.32,.36,.85,t,0,0,0,s),fe(.28,.1,.7,i,0,-.16,0,s),fe(.22,.24,.05,i,0,0,-.43,s);let r=new Ue;r.position.set(0,.12,.38),r.rotation.x=.5,s.add(r),fe(.13,.5,.2,t,0,.24,0,r);let o=new Ue;o.position.set(0,.5,.02),o.rotation.x=.6,r.add(o),fe(.13,.14,.34,t,0,0,.13,o);for(let c of[-1,1]){let h=new ne(Go(.008,.022,5),e);h.scale.set(1,.4,1),h.position.set(c*.04,.24,-.04),h.rotation.set(-.45,0,c*.18),o.add(h),fe(.04,.14,.08,t,c*.08,.08,-.05,o)}let a=[[-.1,.3],[.1,.3],[-.1,-.3],[.1,-.3]].map(([c,h])=>Pl(s,c,-.12,h,.86,.035,.025,t,e)),l=new Ue;return l.position.set(0,.1,-.44),l.rotation.x=-.3,s.add(l),fe(.03,.25,.03,e,0,-.12,0,l),Ll(n,{body:s,neck:r,head:o,legs:a,tail:l,legLen:.86,neckRest:.5,neckGraze:1.95})}function ZM(n,e,t){let i=n.rig,s=n.speed>n.spec.walk*1.6;n.phase+=e*n.speed/i.legLen*(s?1.7:2.4);let r=Math.min(1,n.speed/n.spec.walk)*(s?.75:.36),o=s?[0,.4,Math.PI,Math.PI+.4]:[0,Math.PI,Math.PI,0];i.legs.forEach((l,c)=>{l.rotation.x=Math.sin(n.phase+o[c])*r}),i.body.position.y=i.bodyY+(s?Math.abs(Math.sin(n.phase))*.07*i.legLen:0);let a=n.state==="graze"?i.neckGraze:i.neckRest+Math.sin(t*.6+n.seed)*.04;i.neck.rotation.x+=(a-i.neck.rotation.x)*Math.min(1,e*2),i.tail.rotation.z=Math.sin(t*2.4+n.seed)*.35,i.ears&&(i.ears[0].rotation.y=-.25-Math.max(0,Math.sin(t*1.3+n.seed))*.35,i.ears[1].rotation.y=.25+Math.max(0,Math.sin(t*1.3+n.seed+.5))*.35),i.trunk&&(i.trunk[0].rotation.x=.35+Math.sin(t*.9+n.seed)*.12+(n.state==="graze"?.15:0),i.trunk[2].rotation.x=.25+Math.sin(t*1.4+n.seed)*.3)}var KM={giraffe:{build:cm,walk:1.5,run:6.5,flee:0,herd:[3,4],spread:12,r:.9},elephant:{build:hm,walk:1.2,run:3.5,flee:0,herd:[3,4],spread:10,r:1.4},zebra:{build:YM,walk:1.4,run:8.5,flee:12,herd:[5,7],spread:9,r:.55},gazelle:{build:$M,walk:1.2,run:10.5,flee:14,herd:[6,8],spread:9,r:.35}},jM={echo:{x0:-150,x1:-46,z0:-56,z1:56},ashen:{x0:46,x1:150,z0:-56,z1:56}},JM=[["zebra","echo"],["gazelle","echo"],["giraffe","echo"],["elephant","echo"],["gazelle","ashen"],["zebra","ashen"],["giraffe","ashen"]];function QM(){for(let[n,e]of JM){let t=jM[e],i=KM[n],s={R:t,c:new Ge(N(t.x0+15,t.x1-15),0,N(t.z0+15,t.z1-15)),to:null,t:0};S.herds.push(s);for(let r=0,o=js(...i.herd);r<o;r++){let a=i.build(),l={kind:"animal",sp:n,spec:i,rig:a,group:a.group,herd:s,pos:s.c.clone().add(new Ge(N(-i.spread,i.spread),0,N(-i.spread,i.spread))),yaw:N(0,6.28),wantYaw:void 0,speed:0,phase:N(0,6),seed:N(0,100),state:"graze",t:N(1,8),to:null,fleeT:0,alive:!0};l.group.scale.setScalar(N(.9,1.08)),l.group.position.copy(l.pos),l.group.rotation.y=l.yaw,le.scene.add(l.group),S.animals.push(l),nm(l)}}}function e1(n,e){for(let t of S.animals)t.herd===n.herd&&t.state!=="flee"&&_t(t.pos,n.pos)<18&&(t.state="flee",t.fleeT=N(2.5,4),t.from=e,t.jink=N(-.5,.5))}function t1(n){let e=S.P,t=S.time;for(let i of S.herds){i.t-=n,(i.t<=0||!i.to)&&(i.t=N(25,60),i.to=new Ge(N(i.R.x0+12,i.R.x1-12),0,N(i.R.z0+12,i.R.z1-12)));let s=i.to.x-i.c.x,r=i.to.z-i.c.z,o=Math.hypot(s,r);o>.5&&(i.c.x+=s/o*.5*n,i.c.z+=r/o*.5*n)}for(let i of S.animals){let s=i.spec,r=_t(i.pos,e.pos);s.flee&&!e.dead&&r<s.flee&&i.state!=="flee"&&e1(i,e.pos);let o=0;i.state==="flee"?(i.fleeT-=n,o=s.run,i.fleeT<=0&&r>s.flee*1.6?(i.state="graze",i.t=N(2,5)):i.wantYaw=Math.atan2(i.pos.x-i.from.x,i.pos.z-i.from.z)+i.jink):i.state==="walk"?(o=s.walk,!i.to||_t(i.pos,i.to)<1?(i.state="graze",i.t=N(4,12)):i.wantYaw=Math.atan2(i.to.x-i.pos.x,i.to.z-i.pos.z)):(i.t-=n)<=0&&(i.state="walk",i.to=i.herd.c.clone().add(new Ge(N(-s.spread,s.spread),0,N(-s.spread,s.spread))));let a=i.herd.R;if((i.pos.x<a.x0||i.pos.x>a.x1||i.pos.z<a.z0||i.pos.z>a.z1)&&(i.wantYaw=Math.atan2(i.herd.c.x-i.pos.x,i.herd.c.z-i.pos.z)),i.speed+=(o-i.speed)*Math.min(1,n*(i.state==="flee"?4:2)),i.wantYaw!==void 0){let l=i.wantYaw-i.yaw;for(;l>Math.PI;)l-=Math.PI*2;for(;l<-Math.PI;)l+=Math.PI*2;i.yaw+=l*Math.min(1,n*(i.state==="flee"?5:1.6))}i.pos.x+=Math.sin(i.yaw)*i.speed*n,i.pos.z+=Math.cos(i.yaw)*i.speed*n,Jo(i.pos,s.r),i.group.position.copy(i.pos),i.group.rotation.y=i.yaw,i.lodNear!==!1&&ZM(i,n,t)}}function um(n){let e=[],t=[],i=(a,l,c,h)=>{e.push(...a,...l,...c),t.push(h,h,h)};i([0,.06,.45],[-.09,0,0],[.09,0,0],0),i([0,.06,.45],[.09,0,0],[0,.05,-.5],0),i([0,.06,.45],[0,.05,-.5],[-.09,0,0],0);for(let a of[-1,1])i([a*.08,.02,.2],[a*1.3,0,-.15],[a*.08,.02,-.25],1),i([a*1.3,0,-.15],[a*.75,.01,-.4],[a*.08,.02,-.25],1);let s=new pt;s.setAttribute("position",new rt(e,3)),s.setAttribute("wing",new rt(t,1)),s.computeVertexNormals();let r=new wo({color:2761245,side:sn});r.onBeforeCompile=a=>{a.uniforms.uTime=Il,a.vertexShader=`uniform float uTime;
attribute float wing;
`+a.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      #ifdef USE_INSTANCING
        float ph = instanceMatrix[3].x * 0.37 + instanceMatrix[3].z * 0.21;
        float rate = length(instanceMatrix[0].xyz) < 1.0 ? 11.0 : 4.5;   // small birds flap fast, vultures slow
      #else
        float ph = 0.0; float rate = 5.0;
      #endif
      float glide = 0.2 + 0.8 * step(0.2, sin(uTime * 0.5 + ph));      // soar, then a burst of beats
      transformed.y += wing * abs(position.x) * sin(uTime * rate + ph) * 0.55 * glide;`)};let o=new Ci(s,r,n.length);return o.frustumCulled=!1,o.userData.birds=n,o}var Gp=new Sn,Wp=new Pn(0,0,0,"YXZ"),n1=new $e,i1=new Ge,Xp=new Ge;function dm(n,e){n.userData.birds.forEach((t,i)=>{let s=t.ph+e*t.speed/t.r*t.dir;Xp.set(t.cx+Math.cos(s)*t.r,t.h+Math.sin(e*.3+t.ph)*1.5,t.cz+Math.sin(s)*t.r),Wp.set(0,Math.atan2(-Math.sin(s)*t.dir,Math.cos(s)*t.dir),-.35*t.dir),Gp.setFromEuler(Wp),n.setMatrixAt(i,n1.compose(Xp,Gp,i1.setScalar(t.s)))}),n.instanceMatrix.needsUpdate=!0}function Al(n,e,t,i,s,r,o,a,l){return Array.from({length:n},()=>({cx:e+N(-6,6),cz:t+N(-6,6),r:N(i,s),h:N(r,o),speed:a*N(.85,1.15),s:l*N(.85,1.15),ph:N(0,6.28),dir:Math.random()<.5?1:-1}))}function Wo(n,e){let t=document.createElement("div");return t.className="plate "+n,t.innerHTML=e,t.style.display="none",Q("plates").appendChild(t),t}function Xo(n,e,t,i,s){let r=new ne(mt.box,new Tt({visible:!1}));r.scale.set(e,t,i),r.position.y=s,r.userData.ent=n,n.group.add(r),n.hitbox=r}function s1(){let n=Ju(2.25);n.position.set(0,1.2,-12),le.scene.add(n);let e={kind:"npc",id:"mascar",name:"Croxian Mascar",title:"Governor of Ad-Nostra",pos:new Ge(0,1.2,-12),group:n,height:2.6,radius:1,alive:!0};e.plate=Wo("npc",'<div class="qm"></div><div class="n">Croxian Mascar</div><div class="g">&lt;Governor of Ad-Nostra&gt;</div>'),Xo(e,1.2/n.scale.x,2.4,1.2,1.2),S.npcs.push(e);let t=jr({armor:4865836,accent:15254634,visor:15254634,weapon:"none"});t.group.position.set(13,0,-3),t.group.rotation.y=-Math.PI/2.4,le.scene.add(t.group);let i=fe(1,1.1,3.4,fi(2765115),11.6,.55,-3,le.scene);kt(11.6,-3,1,3.4),fe(.05,.05,3.42,en(15254634,1.5),11.08,1.1,-3,le.scene);for(let r=0;r<4;r++)fe(.9,.9,.9,fi(3814182),14.5+N(-.5,.5),.45+(r>2?.9:0),-4.5+r*.9,le.scene).rotation.y=N(-.3,.3);let s={kind:"npc",id:"ilse",name:"Ilse Varn",title:"Concord Quartermaster",pos:new Ge(13,0,-3),group:t.group,rig:t,height:2.1,radius:1,alive:!0};s.plate=Wo("npc",'<div class="n">Ilse Varn</div><div class="g">&lt;Concord Quartermaster&gt;</div>'),Xo(s,1,2,1,1),S.npcs.push(s)}function Gr(n,e,t,i,s=!1){let r={kind:"enemy",type:n,level:e,spawn:new Ge(t,0,i),pos:new Ge(t,0,i),alive:!0,state:"idle",target:null,atkT:N(.5,1.5),wanderT:N(1,6),wanderTo:null,dots:[],tagged:!1,yaw:N(0,6.28),anim:N(0,10),temp:s,move:0},o;n==="hollowed"?(Object.assign(r,{name:e>=4?"Beacon-Bound Hollowed":"Hollowed",maxHp:70+30*e,dmg:5+2.6*e,atkCd:1.7,atkR:2.1,speed:3.4+.25*e,aggroR:13,xp:36+16*e,height:2.15,radius:.55,respawn:16}),o=jr({armor:1774871,accent:16722762,visor:16722762,weapon:"none",hollow:!0}),o.group.scale.setScalar(1+e*.03)):n==="drone"?(Object.assign(r,{name:"Echo Drone",maxHp:55+22*e,dmg:5+2.3*e,atkCd:2.2,atkR:13,speed:4.6,aggroR:16,xp:42+17*e,height:3.5,radius:.85,respawn:18}),o=SM(e)):(Object.assign(r,{name:"Remnant of the Catharsis",isBoss:!0,maxHp:2600,dmg:24,atkCd:2.3,atkR:4.8,speed:3.3,aggroR:20,xp:950,height:8.4,radius:2.2,respawn:120,slamT:7,phase:0}),o=wM()),r.rig=o,r.group=o.group,r.hp=r.maxHp,r.group.position.copy(r.pos),le.scene.add(r.group);let a=r.group.scale.x;return Xo(r,r.radius*2/a,r.height/a,r.radius*2/a,r.height/2/a),r.plate=Wo("enemy",`<div class="n">${$t(r.name)} <span style="color:#aaa">${r.level}</span></div><div class="hb"><i></i></div>`),r.plateBar=r.plate.querySelector(".hb i"),S.enemies.push(r),r}function r1(){for(let n=0;n<16;n++){let e=N(44,150),t=N(-56,56);Gr("hollowed",e<75?1:e<115?2:3,e,t)}for(let n=0;n<14;n++){let e=N(-150,-44),t=N(-56,56);Gr("drone",e>-75?2:e>-115?3:4,e,t)}for(let n=0;n<9;n++){let e=N(0,Math.PI*2),t=N(22,56);Gr("hollowed",js(4,5),xt.x+Math.cos(e)*t,xt.z+Math.sin(e)*t)}for(let n=0;n<4;n++){let e=N(0,Math.PI*2),t=N(20,50);Gr("drone",5,xt.x+Math.cos(e)*t,xt.z+Math.sin(e)*t)}S.boss=Gr("boss",7,xt.x,xt.z+2)}function o1(){let n=new Ae({color:3802640,emissive:16722762,emissiveIntensity:3,flatShading:!0}),e=new Tt({color:16722762,transparent:!0,opacity:.25,blending:_n,depthWrite:!1});for(let t=0;t<10;t++){let i=t/10*Math.PI*2+N(-.2,.2),s=N(24,54),r=new Ue;r.position.set(xt.x+Math.cos(i)*s,0,xt.z+Math.sin(i)*s);let o=new ne(mt.oct,n);o.scale.set(.3,.6,.3),o.position.y=.9,r.add(o);let a=new ne(new Yt(.08,.08,14,6,1,!0),e);a.position.y=7,r.add(a),le.scene.add(r),S.shards.push({kind:"shard",pos:r.position,group:r,crystal:o,active:!0,respawnT:0})}}var ku={ashen:[new Ge(36,0,0)],echo:[new Ge(-36,0,0)],crater:[new Ge(0,0,-38),new Ge(0,0,-106)],plaza:[],cantina:[new Ge(0,0,40),new Ge(0,0,49)]};function xs(n){if(n==="cantina")return XM();if(n==="ashen")return new Ge(N(46,145),0,N(-50,50));if(n==="echo")return new Ge(N(-145,-46),0,N(-50,50));if(n==="crater"){let s=N(0,Math.PI*2),r=N(12,50);return new Ge(xt.x+Math.cos(s)*r,0,xt.z+Math.sin(s)*r)}let e=N(0,Math.PI*2),t=N(6,26),i=new Ge(Math.cos(e)*t,0,Math.sin(e)*t);return i.z<-6&&Math.abs(i.x)<7&&(i.z=4),i}function a1(){let n=Ip.slice().sort(()=>Math.random()-.5).slice(0,14);for(let e of n){let t=ht(Object.keys(ki)),i=ki[t],s=new ve(ht(vl)).getHex(),r=Lu()?Nu({energy:s,accent:i.hex,weapon:i.weapon,tint:ht(EM),mats:Jp}):jr({armor:ht([2830908,3817290,2764586,3878710,2501688]),accent:i.hex,visor:s,weapon:i.weapon}),o={kind:"bot",name:e,cls:t,level:js(3,18),guild:ht(Pp),rig:r,group:r.group,pos:xs("plaza"),alive:!0,hp:260,maxHp:260,state:"idle",path:[],idleT:N(2,20),actT:0,act:"plaza",target:null,atkT:0,yaw:0,move:0,atk:0,danceT:0,height:2.1,radius:.5,vy:0,slideT:-1,rollT:0,bjT:0,flipT:0,landT:0,landHard:!1,boost:1,canFlip:!1};o.group.position.copy(o.pos),le.scene.add(o.group),o.plate=Wo("bot",`<div class="n">${$t(e)}</div>${o.guild?`<div class="g">&lt;${$t(o.guild)}&gt;</div>`:""}`),Xo(o,.9,2,.9,1),Math.random()<.6&&(o.act=ht(["ashen","ashen","echo","echo","crater"]),o.pos.copy(xs(o.act)),o.state="hunt",o.actT=N(40,160),o.group.position.copy(o.pos)),S.bots.push(o)}}var Wu=new Ge(0,0,8);function l1(n,e,t){return{v:1,name:n,cls:e,visor:t,level:1,xp:0,credits:30,medkits:3,wpn:0,arm:0,q:{i:0,st:"available",p:0},aleT:0,kills:0,deaths:0,title:"Ascendant",played:0,completed:0,pos:null,created:Date.now()}}var Xu=n=>Math.round(140*Math.pow(n,1.55)),Vi=()=>ki[S.D.cls],si=()=>Math.round(Vi().hp*(1+.1*(S.D.level-1))+18*S.D.arm),Ks=()=>Vi().en,Dl=()=>(1+.12*(S.D.level-1))*(1+.1*S.D.wpn);function c1(){let n=S.D,e=Vi();S.P&&S.P.group&&(le.scene.remove(S.P.group),S.P.plate?.remove());let t=new ve(n.visor).getHex(),i=Lu()?Nu({energy:t,accent:e.hex,weapon:e.weapon,mats:Jp}):jr({armor:3094338,accent:e.hex,visor:t,weapon:e.weapon}),s={kind:"player",rig:i,group:i.group,pos:Wu.clone(),vy:0,yaw:Math.PI,alive:!0,dead:!1,vel:new Ge,airJumps:1,airCap:0,slideT:-1,rollT:0,rollDir:new Ge(0,0,1),bjT:0,bjUsed:!1,flipT:0,glide:!1,glideT:0,landT:0,landHard:!1,qHeld:!1,jumpHeld:!1,dustT:0,combat:!1,hp:si(),en:Ks(),shield:0,shieldT:0,target:null,gcd:0,cds:{},autoOn:!1,autoT:0,combatT:0,critNext:!1,atk:0,move:0,danceT:0,medT:0,height:2.1,radius:.45};n.pos&&Yn(n.pos[0],n.pos[1])!=="ward"&&s.pos.set(n.pos[0],0,n.pos[1]),s.group.position.copy(s.pos),le.scene.add(s.group),S.P=s,S.cam={yaw:0,pitch:.32,dist:9.5},s.pos.distanceTo(Wu)>1&&(S.cam.yaw=Math.atan2(s.pos.x,s.pos.z)),N1()}function qs(n,e,t,i=2.2,s=!1){let r=document.createElement("div");r.className="fl"+(s?" crit":""),r.textContent=e,r.style.color=t,Q("floaters").appendChild(r),S.floaters.push({el:r,p:new Ge(n.x+N(-.4,.4),(n.y||0)+i,n.z+N(-.4,.4)),t:0,life:s?1.4:1.1})}function ni(n){let e=Q("center-msg");e.textContent=n,e.style.opacity=1,clearTimeout(ni.t),ni.t=setTimeout(()=>e.style.opacity=0,1300),Re.sfx("error")}function $r(n,e,t="",i=""){let s=Q("banner");s.className=i,s.querySelector(".b1").textContent=n,s.querySelector(".b2").textContent=e,s.querySelector(".b3").textContent=t,s.style.opacity=1,clearTimeout($r.t),$r.t=setTimeout(()=>s.style.opacity=0,2800)}function qu(){let n=Q("vignette");n.style.boxShadow="inset 0 0 160px rgba(255,20,50,.55)",clearTimeout(qu.t),qu.t=setTimeout(()=>n.style.boxShadow="inset 0 0 160px rgba(255,20,50,0)",160)}function zi(n,e,t,i={}){if(!n.alive)return;e=Math.max(1,Math.round(e));let s=S.P;if(n===s){if(s.dead)return;if(s.rollT>0){qs(s.pos,"DODGE","#9fdcff",2.3);return}if(s.shield>0){let r=Math.min(s.shield,e);s.shield-=r,e-=r,qs(s.pos,"ABSORB "+r,"#9fdcff",2.3)}if(s.combatT=6,e<=0)return;s.hp-=e,qs(s.pos,"-"+e,"#ff5a6e",2.3),Re.sfx("hurt"),qu(),s.hp<=0&&h1();return}n.hp-=e,n.kind==="enemy"?(t===s&&(n.tagged=!0,qs(n.pos,String(e),i.crit?"#ffd166":"#ffffff",n.height*.75+(n.type==="drone"?.6:0),i.crit),Re.sfx("hit")),(n.state==="idle"||!n.target||!n.target.alive)&&(n.isBoss&&t===s&&n.state==="idle"&&_m(),n.target=t,n.state="chase"),t===s&&n.target&&n.target.kind==="bot"&&Math.random()<.15&&(n.target=s),n.hp<=0&&fm(n,t)):n.kind==="bot"&&n.hp<=0&&d1(n)}function fm(n,e){if(n.alive=!1,n.hp=0,n.state="dead",n.deadT=0,n.dots=[],n.target=null,tn(n.pos.clone().setY(n.height*.5),n.isBoss?16722762:16734830,n.isBoss?120:30,n.isBoss?9:4),Re.sfx(n.isBoss?"boom":"die"),S.P.target===n&&setTimeout(()=>{S.P.target===n&&vs(null)},600),n.tagged){let t=S.D,i=n.xp,s=t.level-n.level;s>=4?i=Math.round(i*.2):s>=2&&(i=Math.round(i*.6)),pm(i);let r=n.isBoss?300:js(2+n.level,6+n.level*3);t.credits+=r,yt("loot",null,`You loot ${r} credits.`),Re.sfx("coin"),t.kills++,Yu(n.isBoss?"boss":n.type,n),Yn(n.pos.x,n.pos.z)==="crater"&&!n.isBoss&&t.q.i===2&&t.q.st==="active"&&Math.random()<.4&&(yt("loot",null,"You loot: [Beacon Shard]"),Yu("shard")),Math.random()<.06&&!n.isBoss&&(t.medkits++,yt("loot",null,"You loot: [Concord Medkit]")),n.isBoss&&(yt("world",null,`${t.name} has destroyed the Remnant of the Catharsis!`,"sys"),setTimeout(()=>Zs(ht(S.bots),ht(["GG "+t.name+"!!","legend","WOW","grats "+t.name,"o7 hero"])),1500))}n.isBoss&&(Q("bossbar").classList.add("hidden"),Re.playMusic("world"))}function pm(n){let e=S.D,t=S.P;if(!(e.level>=30))for(e.aleT>0&&(n=Math.round(n*(1+wl.bonus))),e.xp+=n,qs(t.pos,`+${n} XP`,"#c9a3ff",2.8);e.xp>=Xu(e.level)&&e.level<30;)e.xp-=Xu(e.level),e.level++,t.hp=si(),t.en=Ks(),$r("LEVEL UP","LEVEL "+e.level,"YOUR POWER GROWS","lv"),Re.sfx("levelup"),di(t.pos,15254634,6,1.2),tn(t.pos.clone().setY(1),15254634,40,4),yt("sys",null,`Congratulations, you have reached level ${e.level}!`),Math.random()<.6&&setTimeout(()=>Zs(ht(S.bots),ht(["grats!","gz","grats "+e.name,"ding!"])),1200),bs()}function h1(){let n=S.P;gm(n),n.hp=0,n.dead=!0,n.alive=!1,n.autoOn=!1,S.D.deaths++,Re.sfx("death"),n.group.rotation.x=-Math.PI/2,n.group.position.y=.3;for(let e of S.enemies)e.target===n&&(e.target=null,e.state="return");zt(),Q("death").classList.remove("hidden")}function u1(){let n=S.P;gm(n),n.dead=!1,n.alive=!0,n.hp=si(),n.en=Ks(),n.pos.copy(Wu),n.group.rotation.x=0,n.shield=0,vs(null),Q("death").classList.add("hidden"),tn(n.pos.clone().setY(1),4122367,40,3),Re.sfx("heal"),S.cam.yaw=0}function d1(n){n.alive=!1,n.hp=0,n.state="dead",n.deadT=0,n.target=null,n.group.rotation.x=-Math.PI/2,n.group.position.y=.3;for(let e of S.enemies)e.target===n&&(e.target=null,e.state="return");Math.random()<.3&&setTimeout(()=>yt("zone",n.name,ht(["ugh","rip","that thing hits HARD","brb corpse run","nooo"])),800)}function vs(n){let e=S.P;e.target=n,n||(e.autoOn=!1),bm(!0)}function f1(n,e=S.P.pos,t=null){let i=null,s=n;for(let r of S.enemies){if(!r.alive||r===t)continue;let o=_t(e,r.pos)-r.radius;o<s&&(s=o,i=r)}return i}function mm(){let n=S.P,e=S.enemies.filter(i=>i.alive&&_t(n.pos,i.pos)<40).sort((i,s)=>_t(n.pos,i.pos)-_t(n.pos,s.pos));if(!e.length){ni("No enemies nearby");return}let t=e.indexOf(n.target);vs(e[(t+1)%e.length]),n.autoOn=!0}function p1(){let n=S.P;return n.critNext?(n.critNext=!1,!0):Math.random()<Vi().crit}function ti(n,e,t={}){let i=t.noCrit?!1:p1();zi(n,e*Dl()*(i?1.8:1)*N(.92,1.08),S.P,{crit:i})}function qo(n,e){n.yaw=Math.atan2(e.x-n.pos.x,e.z-n.pos.z)}function Wr(n){let e=S.P;if(!e||e.dead||S.mode!=="world")return;if(n===4)return m1();let t=Vi(),i=t.abil[n];if((e.cds[i.id]||0)>0||e.gcd>0){(e.cds[i.id]||0)>0&&ni("Ability not ready");return}if(e.en<i.cost){ni("Not enough energy");return}let s=e.target;if(i.target){if(!s||!s.alive||s.kind!=="enemy"){if(s=f1((i.range||t.range)+2),!s){ni("No target");return}vs(s)}if(_t(e.pos,s.pos)-s.radius>(i.range||t.range)){ni("Out of range");return}qo(e,s.pos)}e.en-=i.cost,e.cds[i.id]=i.cd,e.gcd=t.gcd,e.combatT=6,s&&(e.autoOn=!0),e.actHint=i.id,e.atk=.3;let r=Q("hotbar").children[n];r.classList.remove("flash"),r.offsetWidth,r.classList.add("flash");let o=e.pos.clone().setY(1.4);switch(i.id){case"riven":case"cut":ti(s,i.dmg),Bo(s,t.hex),Re.sfx("slash");break;case"judge":ti(s,i.dmg),Bo(s,15254634,1.8),di(s.pos,15254634,3,.4),Re.sfx("heavy");break;case"slam":{di(e.pos,t.hex,i.radius,.45),Re.sfx("heavy");let a=0;for(let l of S.enemies)l.alive&&_t(e.pos,l.pos)-l.radius<i.radius&&(ti(l,i.dmg),a++);break}case"guard":e.shield=Math.round(i.shield*(1+.1*(S.D.level-1))),e.shieldT=i.dur,Re.sfx("shield");break;case"bolt":Yo(o,s,t.hex,.18,34,()=>ti(s,i.dmg)),Re.sfx("zap");break;case"lance":Yo(o,s,16777215,.35,42,()=>{ti(s,i.dmg),di(s.pos,t.hex,2.5,.3)}),Re.sfx("lance");break;case"chain":{ti(s,i.dmg),qp(o,s.pos.clone().setY(s.height*.6),t.hex);let a=s,l=[s];for(let c=0;c<3;c++){let h=null,u=i.jump;for(let d of S.enemies){if(!d.alive||l.includes(d))continue;let f=_t(a.pos,d.pos);f<u&&(u=f,h=d)}if(!h)break;l.push(h),qp(a.pos.clone().setY(a.height*.6),h.pos.clone().setY(h.height*.6),t.hex),ti(h,i.dmg*.75),a=h}Re.sfx("zap");break}case"restore":{let a=Math.round(si()*i.heal);e.hp=Math.min(si(),e.hp+a),qs(e.pos,"+"+a,"#4dff9a",2.4),tn(e.pos.clone().setY(1),5111706,30,2),di(e.pos,5111706,3,.6),Re.sfx("heal");break}case"bleed":ti(s,i.dmg),s.dots.push({dps:i.dot*Dl(),t:i.dur,tick:1,src:e}),Bo(s,16722762),Re.sfx("slash");break;case"blink":{tn(e.pos.clone().setY(1),t.hex,20,2);let a=new Ge(e.pos.x-s.pos.x,0,e.pos.z-s.pos.z).normalize(),l=s.pos.clone().addScaledVector(a,-(s.radius+1));l.y=0,e.pos.copy(l),Jo(e.pos,e.radius),qo(e,s.pos),e.critNext=!0,tn(e.pos.clone().setY(1),t.hex,20,2),Re.sfx("blink");break}case"flurry":for(let a=0;a<i.hits;a++)S.timers.push({t:a*.12,fn:()=>{s.alive&&(ti(s,i.dmg),Bo(s,t.hex,.8),Re.sfx("slash"),e.atk=.2)}});break}}function m1(){let n=S.P,e=S.D;if(n.medT>0){ni("Medkit not ready");return}if(e.medkits<=0){ni("No medkits \u2014 visit Ilse Varn");return}e.medkits--,n.medT=15;let t=Math.round(si()*.5);n.hp=Math.min(si(),n.hp+t),qs(n.pos,"+"+t,"#4dff9a",2.4),tn(n.pos.clone().setY(1),5111706,24,2),Re.sfx("heal"),sd()}var Cl={ring:new as(.85,1,64),half:new as(.7,1.3,24,1,0,Math.PI),disc:new rs(1,48)};function jo(n,e,t){le.scene.add(n),S.fx.push({obj:n,t:0,life:e,update:t})}function di(n,e,t,i){let s=new ne(Cl.ring,new Tt({color:e,transparent:!0,opacity:.9,blending:_n,depthWrite:!1,side:sn}));s.rotation.x=-Math.PI/2,s.position.set(n.x,.12,n.z),jo(s,i,(r,o)=>{let a=.3+o*t;s.scale.set(a,a,a),s.material.opacity=.9*(1-o)})}function Bo(n,e,t=1.2){let i=new ne(Cl.half,new Tt({color:e,transparent:!0,opacity:1,blending:_n,depthWrite:!1,side:sn}));i.position.set(n.pos.x,(n.pos.y||0)+n.height*.55,n.pos.z),i.lookAt(le.cam.position),i.rotateZ(N(-1,1)),jo(i,.22,(s,r)=>{i.scale.setScalar(t*(.6+r*.6)),i.material.opacity=1-r})}function tn(n,e,t,i){let s=new pt,r=new Float32Array(t*3),o=[];for(let l=0;l<t;l++)r.set([n.x,n.y,n.z],l*3),o.push(new Ge(N(-1,1),N(-.2,1.2),N(-1,1)).normalize().multiplyScalar(i*N(.4,1)));s.setAttribute("position",new At(r,3));let a=new ss(s,new Pi({map:ju(),color:e,size:.26,transparent:!0,blending:_n,depthWrite:!1}));jo(a,.9,(l,c,h)=>{let u=s.attributes.position;for(let d=0;d<t;d++)o[d].y-=6*h,u.setXYZ(d,u.getX(d)+o[d].x*h,Math.max(.05,u.getY(d)+o[d].y*h),u.getZ(d)+o[d].z*h);u.needsUpdate=!0,a.material.opacity=1-c})}function qp(n,e,t){let i=[n.clone()],s=7;for(let o=1;o<s;o++){let a=n.clone().lerp(e,o/s);a.x+=N(-.4,.4),a.y+=N(-.4,.4),a.z+=N(-.4,.4),i.push(a)}i.push(e.clone());let r=new Ii(new pt().setFromPoints(i),new is({color:t,transparent:!0,blending:_n}));jo(r,.25,(o,a)=>{r.material.opacity=1-a})}function Yo(n,e,t,i,s,r,o=S.P){let a=new ne(mt.sph,new Tt({color:t,transparent:!0,blending:_n}));a.scale.setScalar(i),a.position.copy(n),le.scene.add(a);let l=new ne(mt.sph,new Tt({color:t,transparent:!0,opacity:.3,blending:_n,depthWrite:!1}));l.scale.setScalar(2.2),a.add(l),S.proj.push({m:a,target:e,speed:s,onHit:r,life:4})}function g1(n,e,t,i){let s=new ne(Cl.disc,new Tt({color:16722762,transparent:!0,opacity:.2,depthWrite:!1,blending:_n}));s.rotation.x=-Math.PI/2,s.position.set(n.x,.08,n.z),s.scale.setScalar(e);let r=new ne(Cl.ring,new Tt({color:16722762,transparent:!0,opacity:.9,depthWrite:!1}));s.add(r),jo(s,t,(o,a)=>{s.material.opacity=.15+.35*a,r.scale.setScalar(a),a>=.999&&!o.done&&(o.done=!0,i())})}function Jo(n,e){for(let i of S.colliders){if(n.x+e<i.minX||n.x-e>i.maxX||n.z+e<i.minZ||n.z-e>i.maxZ)continue;let s=n.x+e-i.minX,r=i.maxX-(n.x-e),o=n.z+e-i.minZ,a=i.maxZ-(n.z-e),l=Math.min(s,r,o,a);l===s?n.x-=s:l===r?n.x+=r:l===o?n.z-=o:n.z+=a}let t=Math.hypot(n.x,n.z);t>238&&(n.x*=238/t,n.z*=238/t)}function Ys(n,e,t,i,s=.2){let r=e.x-n.pos.x,o=e.z-n.pos.z,a=Math.hypot(r,o);if(a<=s)return n.move=Math.max(0,n.move-i*5),!0;let l=Math.min(a-s,t*i);return n.pos.x+=r/a*l,n.pos.z+=o/a*l,n.yaw=Math.atan2(r,o),n.move=Math.min(1,n.move+i*5),!1}function $o(n,e,t,i=10){let s=e-n.rotation.y;for(;s>Math.PI;)s-=Math.PI*2;for(;s<-Math.PI;)s+=Math.PI*2;n.rotation.y+=s*Math.min(1,t*i)}var Dn={},It={run:9,sprint:14.5,accel:55,brake:70,airAccel:16,g:26,jump:9.2,airJump:9.2,bjH:21,bjV:10.5,slideBoost:3.5,slideFric:5.5,slideMin:4.5,rollSpeed:13,glideFall:2,glideMax:1.6,hardLand:-12.5};function Nl(){if(document.activeElement===Q("chat-input")||S.ui)return null;let n=0,e=0;(Dn.KeyW||Dn.ArrowUp)&&(e+=1),(Dn.KeyS||Dn.ArrowDown)&&(e-=1),(Dn.KeyA||Dn.ArrowLeft)&&(n-=1),(Dn.KeyD||Dn.ArrowRight)&&(n+=1),Ot.both&&(e=1),Rt.id!==null&&(n+=Rt.x,e-=Rt.y);let t=S.cam.yaw,i=new Ge(-Math.sin(t)*e+Math.cos(t)*n,0,-Math.cos(t)*e-Math.sin(t)*n);return i.lengthSq()>4e-4?i.normalize():null}var x1=()=>new Ge(-Math.sin(S.cam.yaw),0,-Math.cos(S.cam.yaw));function gm(n){n.vel.set(0,0,0),n.vy=0,n.slideT=-1,n.rollT=0,n.bjT=0,n.flipT=0,n.landT=0,n.glide=!1,n.glideT=0,n.airJumps=1,n.bjUsed=!1}function xm(){return new ve(S.D.visor).getHex()}function ym(){let n=S.P;if(!n||n.dead||S.ui||S.mode!=="world")return;if(n.jumpHeld=!0,n.pos.y<=.001&&n.vy<=.001){if(n.slideT>=0||n.qHeld)return y1(n);if(n.rollT>0)return;n.vy=It.jump,n.airCap=n.vel.length(),n.landT=0,Re.sfx("jump")}else if(n.airJumps>0){n.airJumps--,n.vy=It.airJump,n.flipT=1e-4,n.glideT=0;let t=Nl();if(t){let i=Math.max(n.vel.length(),It.run);n.vel.copy(t).multiplyScalar(i),n.airCap=Math.max(n.airCap,i)}Re.sfx("flip")}}function y1(n){let e=Nl()||x1();n.vel.copy(e).multiplyScalar(It.bjH),n.vy=It.bjV,n.airCap=It.bjH,n.bjT=1e-4,n.bjUsed=!0,n.slideT=-1,n.landT=0,n.airJumps=1,n.glideT=0,n.yaw=Math.atan2(e.x,e.z),n.group.rotation.y=n.yaw;let t=xm();di(n.pos,t,2.6,.35),tn(n.pos.clone().setY(.4),t,18,4),tn(n.pos.clone().setY(.1),13214048,10,2.5),Re.sfx("bulletjump")}function Ul(n){let e=S.P;if(!e||(e.qHeld=n,!n||e.dead||S.ui||S.mode!=="world")||e.pos.y>.001||e.rollT>0||e.slideT>=0)return;let t=e.vel.length();if(t>6)e.slideT=0,e.landT=0,e.vel.multiplyScalar((Math.max(t,It.sprint)+It.slideBoost)/t),Re.sfx("slide");else{let i=Nl()||new Ge(Math.sin(e.yaw),0,Math.cos(e.yaw));e.rollT=1e-4,e.rollDir.copy(i),e.yaw=Math.atan2(i.x,i.z),e.landT=0,Re.sfx("roll")}}function _1(n){let e=n.vy;n.airJumps=1,n.glideT=0,n.glide=!1,n.bjT=0,n.flipT=0,n.bjUsed=!1,e<It.hardLand?(n.landT=1e-4,n.landHard=!0,n.vel.multiplyScalar(.2),di(n.pos,13214048,3.2,.5),tn(n.pos.clone().setY(.15),13214048,22,3.5),tn(n.pos.clone().setY(.3),xm(),10,2),Re.sfx("land")):(n.landT=1e-4,n.landHard=!1,e<-6&&tn(n.pos.clone().setY(.1),13214048,6,1.5)),n.qHeld&&n.vel.length()>6&&(n.slideT=0,n.landT=0,n.landHard=!1,Re.sfx("slide"))}function v1(n,e){let t=Nl(),i=n.vel,s=Dn.ShiftLeft||Dn.ShiftRight||Rt.mag>.92,r=n.pos.y<=.001&&n.vy<=0;if(n.flipT>0&&(n.flipT+=e)>=Kt.flip&&(n.flipT=0),n.bjT>0&&(n.bjT+=e)>=Kt.bj&&(n.bjT=0),n.landT>0&&(n.landT+=e)>=(n.landHard?Kt.landHard:Kt.landSoft)&&(n.landT=0),n.rollT>0){n.rollT+=e;let l=Math.min(1,n.rollT/Kt.roll);i.copy(n.rollDir).multiplyScalar(It.rollSpeed*(1-.55*l)),n.rollT>=Kt.roll&&(n.rollT=0,i.multiplyScalar(.6))}else if(n.slideT>=0){n.slideT+=e;let l=i.length();if(l=Math.max(0,l-It.slideFric*e*(l>It.sprint?1.6:1)),l>.01){let c=Math.atan2(i.x,i.z);if(t){let h=Math.atan2(t.x,t.z)-c;for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;c+=ii(h,-2.2*e,2.2*e)}i.set(Math.sin(c)*l,0,Math.cos(c)*l)}(!n.qHeld||l<It.slideMin||!r)&&(n.slideT=-1),(n.dustT-=e)<=0&&(n.dustT=.07,tn(n.pos.clone().setY(.08),13214048,3,1.4))}else if(r){let l=n.landT>0&&n.landHard&&n.landT<Kt.landHard*.55,h=(t&&!l?t.clone().multiplyScalar(s?It.sprint:It.run):new Ge).sub(i),u=(t&&!l?It.accel:It.brake)*e,d=h.length();d<=u?i.add(h):i.addScaledVector(h,u/d)}else if(t){i.addScaledVector(t,It.airAccel*e);let l=Math.max(n.airCap,It.run),c=i.length();c>l&&i.multiplyScalar(l/c)}n.pos.addScaledVector(i,e);let o=n.pos.y>.001||n.vy>0;n.glide=o&&n.jumpHeld&&n.vy<0&&n.glideT<It.glideMax&&(n.airJumps===0||n.bjUsed)&&n.rollT===0,n.glide?(n.glideT+=e,n.vy=Math.max(n.vy-It.g*.3*e,-It.glideFall),i.multiplyScalar(1-e*.2)):n.vy-=It.g*e,n.pos.y+=n.vy*e,n.pos.y<=0&&(o&&n.vy<0&&_1(n),n.pos.y=0,n.vy=0),Jo(n.pos,n.radius);let a=i.length();n.rollT>0||n.slideT>=0||n.bjT>0||o&&a>2?a>.5&&(n.yaw=Math.atan2(i.x,i.z)):t&&a>.3?n.yaw=Math.atan2(t.x,t.z):n.target&&n.target.alive&&n.autoOn&&qo(n,n.target.pos),n.move=ii(a/It.run,0,1),t&&(n.danceT=0)}function M1(n){let e=S.P,t=S.D,i=Vi();t.played+=n,e.gcd=Math.max(0,e.gcd-n),e.medT=Math.max(0,e.medT-n);for(let o in e.cds)e.cds[o]=Math.max(0,e.cds[o]-n);if(e.combatT=Math.max(0,e.combatT-n),e.shieldT>0&&(e.shieldT-=n,e.shieldT<=0&&(e.shield=0)),e.dead){e.group.position.copy(e.pos).setY(.3),e.rig.isSoldier&&Oo(e.rig,e,n,S.time);return}e.en=Math.min(Ks(),e.en+9*n),t.aleT>0&&(t.aleT=Math.max(0,t.aleT-n)),e.combatT<=0&&(e.hp=Math.min(si(),e.hp+si()*.035*n)),v1(e,n),Jo(e.pos,e.radius);let s=e.target;e.autoOn&&s&&s.alive&&s.kind==="enemy"&&(e.autoT-=n,e.autoT<=0&&_t(e.pos,s.pos)-s.radius<=i.range&&(e.autoT=2,e.combatT=6,i.range>5?(Yo(e.pos.clone().setY(e.pos.y+1.4),s,i.hex,.1,30,()=>ti(s,7)),Re.sfx("drone"),e.actHint="cast",e.atk=.3):(ti(s,7),e.atk=.3,Re.sfx("slash")))),e.atk=Math.max(0,e.atk-n),e.danceT=Math.max(0,e.danceT-n),e.group.position.copy(e.pos),$o(e.group,e.yaw+(e.danceT>0?S.time*6:0),n,e.danceT>0?50:14),e.combat=e.combatT>0,e.rig.isSoldier?Oo(e.rig,e,n,S.time):zo(e.rig,e.move,S.time,e.atk,e.danceT),e.rig.group.userData.orb&&(e.rig.group.userData.orb.rotation.y+=n*3),le.shieldMesh.visible=e.shield>0,le.shieldMesh.position.copy(e.pos).setY(1),le.shieldMesh.material.opacity=.12+Math.sin(S.time*6)*.05;let r=Yn(e.pos.x,e.pos.z);if(r!==S.zone){let o=S.zone;S.zone=r;let a=Vo[r];Q("zone-name").textContent=a.name,Q("zone-sub").textContent=a.sub,!(o==="causeway"&&r==="ward")&&!(o==="ward"&&r==="causeway")&&$r(a.safe?"SANCTUARY":"ENTERING",a.name,a.sub),r==="cantina"?Re.playMusic("cantina"):o==="cantina"&&Re.playMusic("world")}}function b1(n){let e=S.P;for(let t of S.enemies){if(t.anim+=n,!t.alive){if(t.deadT+=n,t.deadT<2?(t.group.position.y=-t.deadT*(t.type==="drone"?1.3:.8),t.group.rotation.z=Math.min(1.4,t.deadT*2)*(t.type==="drone"?1:.6)):t.group.visible=!1,t.temp&&t.deadT>2.2){le.scene.remove(t.group),t.plate.remove(),t.removed=!0;continue}!t.temp&&t.deadT>t.respawn&&(t.alive=!0,t.hp=t.maxHp,t.pos.copy(t.spawn),t.state="idle",t.tagged=!1,t.phase=0,t.group.visible=!0,t.group.rotation.z=0,t.group.position.y=0,tn(t.pos.clone().setY(1),16722762,20,2));continue}for(let r of t.dots)r.t-=n,r.tick-=n,r.tick<=0&&(r.tick=1,zi(t,r.dps,r.src));if(t.dots=t.dots.filter(r=>r.t>0),!t.alive)continue;let i=t.isBoss?40:44,s=Vo[Yn(e.pos.x,e.pos.z)].safe;if(t.state==="idle")t.wanderT-=n,t.wanderT<=0&&(t.wanderT=N(3,8),t.wanderTo=t.spawn.clone().add(new Ge(N(-6,6),0,N(-6,6)))),t.wanderTo?Ys(t,t.wanderTo,t.speed*.35,n)&&(t.wanderTo=null):t.move=Math.max(0,t.move-n*4),e.alive&&!s&&_t(e.pos,t.pos)<t.aggroR&&(t.target=e,t.state="chase",t.isBoss&&_m());else if(t.state==="chase"){let r=t.target;if(!r||!r.alive||r===e&&s||_t(t.pos,t.spawn)>i)t.state="return",t.target=null;else{let o=t.atkR+(r.radius||.5),a=_t(t.pos,r.pos)<=o;a?(t.move=Math.max(0,t.move-n*5),qo(t,r.pos)):Ys(t,r.pos,t.speed,n,o*.85),t.atkT-=n,a&&t.atkT<=0&&(t.atkT=t.atkCd,t.atk=.3,t.type==="drone"?(Yo(t.pos.clone().setY(2.6),r,16722762,.16,18,()=>zi(r,t.dmg*N(.9,1.1),t),t),r===e&&Re.sfx("drone")):zi(r,t.dmg*N(.9,1.1),t)),t.isBoss&&T1(t,n)}}else t.state==="return"&&(t.hp=Math.min(t.maxHp,t.hp+t.maxHp*.25*n),t.dots=[],t.tagged=!1,Ys(t,t.spawn,t.speed*1.6,n,.5)&&(t.state="idle",t.hp=t.maxHp,t.isBoss&&(t.phase=0,Q("bossbar").classList.add("hidden"),Re.playMusic("world"))));for(let r of S.enemies){if(r===t||!r.alive)continue;let o=t.pos.x-r.pos.x,a=t.pos.z-r.pos.z,l=Math.hypot(o,a),c=t.radius+r.radius;l<c&&l>.001&&(t.pos.x+=o/l*(c-l)*.5,t.pos.z+=a/l*(c-l)*.5)}if(t.group.position.set(t.pos.x,0,t.pos.z),$o(t.group,t.yaw,n,8),t.atk=Math.max(0,(t.atk||0)-n),t.type==="hollowed")zo(t.rig,t.move*.8,t.anim*.8,t.atk),t.rig.head.rotation.z=Math.sin(t.anim*1.3)*.15;else if(t.type==="drone")t.rig.body.position.y=2.6+Math.sin(t.anim*2)*.25,t.rig.ring.rotation.z+=n*2,t.rig.shell.rotation.y-=n,t.rig.body.rotation.x=t.move*.25;else{t.rig.orbit.rotation.y+=n*.8,t.rig.body.position.y=Math.sin(t.anim)*.2;let r=t.atk>0?Math.sin((1-t.atk/.3)*Math.PI):0;t.rig.arms[1].rotation.x=-1.6*r,t.rig.arms[0].rotation.x=Math.sin(t.anim*.7)*.1,t.rig.core.rotation.y+=n}}S.enemies=S.enemies.filter(t=>!t.removed)}function _m(){Re.playMusic("boss"),Q("bossbar").classList.remove("hidden"),yt("zone",null,'The Remnant of the Catharsis: "THE WILL OF ZARK DOES NOT DIE."',"err")}function T1(n,e){if(n.slamT-=e,n.slamT<=0&&n.target){n.slamT=N(7,10);let i=n.target.pos.clone();g1(i,6,1.8,()=>{Re.sfx("boom"),di(i,16722762,7,.5),tn(i.clone().setY(.5),16722762,50,6),S.P.alive&&_t(S.P.pos,i)<6&&zi(S.P,46,n);for(let s of S.bots)s.alive&&_t(s.pos,i)<6&&zi(s,46,n)})}let t=n.hp/n.maxHp;if(n.phase===0&&t<.6||n.phase===1&&t<.3){n.phase++,yt("zone",null,'The Remnant of the Catharsis: "RISE. SERVE THE CATHARSIS."',"err"),Re.sfx("boom");for(let i=0;i<3;i++){let s=N(0,6.28),r=Gr("hollowed",5,n.pos.x+Math.cos(s)*6,n.pos.z+Math.sin(s)*6,!0);r.target=n.target,r.state="chase",tn(r.pos.clone().setY(1),16722762,30,3)}}}function E1(n,e){n.flipT>0&&(n.flipT+=e)>=Kt.flip&&(n.flipT=0),n.bjT>0&&(n.bjT+=e)>=Kt.bj&&(n.bjT=0),n.landT>0&&(n.landT+=e)>=(n.landHard?Kt.landHard:Kt.landSoft)&&(n.landT=0),n.slideT>=0&&(n.slideT+=e)>.6&&(n.slideT=-1),(n.pos.y>0||n.vy>0)&&(n.canFlip&&n.vy<.5&&n.pos.y>1.2&&(n.canFlip=!1,n.vy=9,n.flipT=1e-4),n.vy-=It.g*e,n.pos.y+=n.vy*e,n.pos.y<=0&&(n.landHard=n.vy<It.hardLand,n.landT=1e-4,n.pos.y=0,n.vy=0,n.boost=1,n.bjT=0,n.flipT=0,n.landHard&&_t(n.pos,S.P.pos)<30&&di(n.pos,13214048,2.6,.45)))}function S1(n){for(let e of S.bots){if(!e.alive){e.deadT+=n,e.deadT>12&&(e.alive=!0,e.hp=e.maxHp,e.pos.copy(xs("plaza")),e.group.rotation.x=0,e.state="idle",e.act="plaza",e.idleT=N(5,20),e.path=[],e.vy=0,e.slideT=-1,e.bjT=e.flipT=e.landT=0),e.group.position.copy(e.pos).setY(.3),e.rig.isSoldier&&Oo(e.rig,e,n,S.time,e.lodNear!==!1);continue}if(e.atk=Math.max(0,e.atk-n),e.danceT=Math.max(0,e.danceT-n),e.state==="idle")e.idleT-=n,(!e.wp||Ys(e,e.wp,2.2,n))&&Math.random()<.01&&(e.wp=xs("plaza")),Math.random()<8e-4&&(e.danceT=4),e.hp=Math.min(e.maxHp,e.hp+20*n),e.idleT<=0&&(e.act=Math.random()<.25?"cantina":ht(["ashen","ashen","echo","echo","crater","crater"]),e.path=[...ku[e.act],xs(e.act)],e.state="travel",e.actT=e.act==="cantina"?N(40,110):N(60,180),e.wp=null);else if(e.state==="travel"){if(!e.path.length){e.state=e.act==="plaza"?"idle":e.act==="cantina"?"lounge":"hunt",e.idleT=N(15,50);continue}e.rig.isSoldier&&e.pos.y===0&&e.slideT<0&&e.act!=="cantina"&&_t(e.pos,e.path[0])>24&&(Math.random()<n*.3?(e.vy=10.5,e.bjT=1e-4,e.boost=1.6,e.canFlip=Math.random()<.6):Math.random()<n*.12&&(e.slideT=0));let t=(e.act==="cantina"&&Yn(e.pos.x,e.pos.z)==="cantina"?3:13)*(e.pos.y>0?e.boost:1)*(e.slideT>=0?1.15:1);Ys(e,e.path[0],t,n,1)&&e.path.shift()}else if(e.state==="lounge")e.actT-=n,e.move=Math.max(0,e.move-n*5),Math.random()<.0015&&(e.danceT=2.5),e.actT<=0&&(e.act="plaza",e.path=[...ku.cantina].reverse().concat([xs("plaza")]),e.state="travel");else if(e.state==="hunt"){if(e.actT-=n,e.actT<=0){e.act="plaza",e.path=[...ku[Yn(e.pos.x,e.pos.z)==="crater"?"crater":e.pos.x>0?"ashen":"echo"]].reverse().concat([xs("plaza")]),e.state="travel",e.target=null;continue}if(!e.target||!e.target.alive){e.target=null;let t=30;for(let i of S.enemies){if(!i.alive||i.isBoss&&Math.random()<.995)continue;let s=_t(e.pos,i.pos);s<t&&Yn(i.pos.x,i.pos.z)===Yn(e.pos.x,e.pos.z)&&(t=s,e.target=i)}e.target||(!e.wp||Ys(e,e.wp,9,n))&&(e.wp=xs(e.act))}else{let t=e.target,i=ki[e.cls],s=(i.range>5?14:2.2)+t.radius;if(_t(e.pos,t.pos)>s)Ys(e,t.pos,10,n,s*.9);else if(e.move=Math.max(0,e.move-n*5),qo(e,t.pos),e.atkT-=n,e.atkT<=0){e.atkT=N(1.4,1.9),e.atk=.3,i.range>5&&(e.actHint="cast");let r=6+e.level*.7;i.range>5?Yo(e.pos.clone().setY(e.pos.y+1.4),t,i.hex,.12,30,()=>zi(t,r,e),e):(zi(t,r,e),_t(e.pos,S.P.pos)<30&&Math.random()<.5&&Bo(t,i.hex,.9))}e.hp<e.maxHp*.3&&Math.random()<.01&&(e.hp=e.maxHp,tn(e.pos.clone().setY(1),5111706,12,2))}}Jo(e.pos,.4),e.rig.isSoldier&&E1(e,n),e.group.position.copy(e.pos),$o(e.group,e.yaw+(e.danceT>0?S.time*6:0),n,e.danceT>0?50:12),e.rig.isSoldier?(e.combat=e.state==="hunt"&&!!e.target&&e.target.alive&&_t(e.pos,e.target.pos)<18,Oo(e.rig,e,n,S.time,e.lodNear!==!1)):zo(e.rig,e.move,S.time+e.name.length,e.atk,e.danceT)}}function w1(n){for(let e of S.proj){e.life-=n;let t=e.target;if(!t||!t.alive||e.life<=0){e.dead=!0;continue}let i=t.pos.clone().setY((t.pos.y||0)+(t.type==="drone"?2.6:t.height*.55)),s=e.m.position.distanceTo(i);if(s<.6){e.dead=!0,e.onHit();continue}e.m.position.addScaledVector(i.sub(e.m.position).normalize(),Math.min(s,e.speed*n))}for(let e of S.proj)e.dead&&(le.scene.remove(e.m),e.m.material.dispose());S.proj=S.proj.filter(e=>!e.dead)}function A1(n){for(let e of S.fx){e.t+=n;let t=Math.min(1,e.t/e.life);e.update(e,t,n),e.t>=e.life&&(e.dead=!0,le.scene.remove(e.obj),e.obj.material?.dispose?.(),(e.obj.isPoints||e.obj.isLine)&&e.obj.geometry.dispose())}S.fx=S.fx.filter(e=>!e.dead);for(let e of S.timers)e.t-=n,e.t<=0&&(e.done=!0,e.fn());S.timers=S.timers.filter(e=>!e.done)}function R1(n){for(let e of S.shards){if(!e.active){e.respawnT-=n,e.respawnT<=0&&(e.active=!0,e.group.visible=!0);continue}e.crystal.rotation.y+=n*1.5,e.crystal.position.y=.9+Math.sin(S.time*2+e.pos.x)*.15}}function C1(n){let e=S.time,t=S.P;le.sky.material.uniforms.t.value=e,Il.value=e,t1(n),dm(le.birds,e),LM(le.grass,le.cam),PM(),le.lanternCrystal.rotation.y+=n*.4,le.lanternCrystal.material.emissiveIntensity=2+Math.sin(e*1.7)*.4;let i=S.zone==="cantina",s=le.cantinaRoof;i!==s.inside&&(s.inside=i,s.group.traverse(c=>{c.isMesh&&(c.material=i?s.ghost:s.solid)})),le.cantinaLight.intensity+=((i?30:0)-le.cantinaLight.intensity)*Math.min(1,n*3);let r=S.npcs.find(c=>c.id==="zuri");r&&r.lodNear&&(zo(r.rig,0,e),r.rig.arms[1].rotation.x=-1+Math.sin(e*2.6)*.25,r.rig.arms[1].rotation.z=Math.sin(e*1.3)*.3,r.rig.head.rotation.y=_t(t.pos,r.pos)<9?ii(Math.atan2(t.pos.x-r.pos.x,t.pos.z-r.pos.z)-Math.PI,-.8,.8):Math.sin(e*.3)*.3),le.blink.emissiveIntensity=Math.sin(e*3)>.6?4:.3;for(let c of le.fires){let h=.8+Math.random()*.4;c.scale.set(h,.8+Math.random()*.5,h),c.userData.light&&(c.userData.light.intensity=30+Math.random()*20)}for(let c of le.pylons)c.r.rotation.z+=n,c.r.position.y=12+Math.sin(e+c.ph)*1.5,c.top.material.emissiveIntensity=2+Math.sin(e*4+c.ph)*2;for(let c of le.frags){let h=c.userData;h.a+=h.s*n,c.position.set(Math.cos(h.a)*h.r,h.y+Math.sin(e*.5+h.r)*1.2,Math.sin(h.a)*h.r),c.rotation.y+=n*.2}le.halo.rotation.z+=n*.2,le.ash.position.set(Math.floor(t.pos.x/10)*10,0,Math.floor(t.pos.z/10)*10);let o=le.ash.geometry.attributes.position;for(let c=0;c<o.count;c++){let h=o.getY(c)+n*(.1+c%5*.04);h>30&&(h=0),o.setY(c,h),o.setX(c,o.getX(c)+Math.sin(e*.3+c)*.01+n*.08)}o.needsUpdate=!0,le.sun.position.set(t.pos.x+Sl.x*120,Sl.y*120,t.pos.z+Sl.z*120),le.sun.target.position.copy(t.pos);let a=S.npcs[1];zo(a.rig,0,e),a.rig.head.rotation.y=Math.sin(e*.4)*.4;let l=S.npcs[0];_t(t.pos,l.pos)<14?$o(l.group,Math.atan2(t.pos.x-l.pos.x,t.pos.z-l.pos.z),n,2):$o(l.group,0,n,1)}function I1(n){let e=S.P,t=S.cam,i=e.pos.clone().setY(e.pos.y+1.7),s=new Ge(Math.sin(t.yaw)*Math.cos(t.pitch),Math.sin(t.pitch),Math.cos(t.yaw)*Math.cos(t.pitch)).multiplyScalar(t.dist).add(i);s.y=Math.max(.6,s.y);let r=S.colliders.filter(l=>l.maxX>Math.min(i.x,s.x)-1&&l.minX<Math.max(i.x,s.x)+1&&l.maxZ>Math.min(i.z,s.z)-1&&l.minZ<Math.max(i.z,s.z)+1);if(r.length){let l=new Ge().subVectors(s,i).divideScalar(24),c=i.clone();for(let h=0;h<24;h++){c.add(l);let u=!1;for(let d of r)if(c.x>d.minX-.3&&c.x<d.maxX+.3&&c.z>d.minZ-.3&&c.z<d.maxZ+.3&&c.y<d.h){u=!0;break}if(u){c.sub(l),s.copy(c),le.cam.position.lerp(s,.5);break}}}le.cam.position.lerp(s,Math.min(1,n*14)),le.cam.lookAt(i);let o=e.vel?e.vel.length():0,a=60+ii((o-It.run)/12,0,1)*14;Math.abs(le.cam.fov-a)>.05&&(le.cam.fov+=(a-le.cam.fov)*Math.min(1,n*4),le.cam.updateProjectionMatrix())}function P1(n){M1(n),b1(n),S1(n),w1(n),A1(n),R1(n),C1(n),I1(n);let e=S.P.target;e&&e.alive?(le.targetRing.visible=!0,le.targetRing.position.set(e.pos.x,.1,e.pos.z),le.targetRing.scale.setScalar(e.radius*1.3),le.targetRing.rotation.z+=n):le.targetRing.visible=!1,D1(),U1(),O1(),F1(n),B1(),S.chatT-=n,S.chatT<=0&&(S.chatT=N(6,14),H1()),S.autosave-=n,S.autosave<=0&&(S.autosave=20,bs())}var Ol=()=>Ml[Math.min(S.D.q.i,Ml.length-1)];function Yu(n){let e=S.D,t=Ol();e.q.st==="active"&&(t.type===n||t.type==="any"&&(n==="hollowed"||n==="drone"))&&(e.q.p=Math.min(t.count,e.q.p+1),yt("sys",null,`${t.obj}: ${e.q.p}/${t.count}`),e.q.p>=t.count&&(e.q.st="ready",Re.sfx("quest"),$r("OBJECTIVE COMPLETE",t.title.toUpperCase(),"RETURN TO GOVERNOR MASCAR")),Zo())}function Hu(n){return n.replace(/\{name\}/g,S.D.name)}function nd(){let n=S.D,e=Ol();Re.sfx("click"),n.q.st==="available"?Xr("GOVERNOR OF AD-NOSTRA","CROXIAN MASCAR",e.title.toUpperCase(),Hu(e.offer),`REWARD \xB7 ${e.xp} XP \xB7 ${e.cr} CREDITS`,[{label:"NOT YET",fn:zt},{label:"ACCEPT",gold:!0,fn:()=>{n.q.st="active",n.q.p=0,Re.sfx("accept"),yt("sys",null,`Quest accepted: ${e.title}`),Zo(),zt(),bs()}}]):n.q.st==="active"?Xr("GOVERNOR OF AD-NOSTRA","CROXIAN MASCAR",e.title.toUpperCase(),Hu(e.active)+`

Progress: ${n.q.p} / ${e.count}`,"",[{label:"ASK ABOUT THE CITY",fn:()=>Xr("GOVERNOR OF AD-NOSTRA","CROXIAN MASCAR","",ht(Cp),"",[{label:"FAREWELL",fn:zt}])},{label:"FAREWELL",fn:zt}]):Xr("GOVERNOR OF AD-NOSTRA","CROXIAN MASCAR",e.title.toUpperCase()+" \u2014 COMPLETE",Hu(e.done),`REWARD \xB7 ${e.xp} XP \xB7 ${e.cr} CREDITS`,[{label:"COMPLETE QUEST",gold:!0,fn:()=>{Re.sfx("quest"),n.credits+=e.cr,pm(e.xp),n.completed++,yt("sys",null,`Quest complete: ${e.title}. Received ${e.cr} credits.`),n.q.i===3&&(n.title="Hero of Ad-Nostra",yt("gov",null,`By decree of Governor Croxian Mascar, ${n.name} is named Hero of Ad-Nostra.`),$r("TITLE EARNED","HERO OF AD-NOSTRA","THE CITY WILL REMEMBER")),n.q.i=Math.min(n.q.i+1,Ml.length-1),n.q.st="available",n.q.p=0,Zo(),bs(),zt(),setTimeout(nd,450)}}])}function L1(){S.ui="vendor",Q("vendor").classList.remove("hidden"),Re.sfx("click"),vm()}function vm(){let n=S.D,e=[{name:"Concord Medkit",desc:"Restores 50% health. Press 5 to use.",cost:25,buy:()=>{n.medkits++,sd()}},{name:`Weapon Tuning \xB7 Rank ${n.wpn+1}`,desc:"+10% damage with all attacks.",cost:120*(n.wpn+1),buy:()=>{n.wpn++}},{name:`Concord Plating \xB7 Rank ${n.arm+1}`,desc:"+18 maximum health.",cost:100*(n.arm+1),buy:()=>{n.arm++}}],t=Q("vendor-items");t.innerHTML="";for(let i of e){let s=document.createElement("div");s.className="vitem",s.innerHTML=`<div><b>${$t(i.name)}</b><p>${$t(i.desc)}</p></div>`;let r=document.createElement("button");r.className="btn gold",r.textContent=`\u2B21 ${i.cost}`,r.disabled=n.credits<i.cost,r.onclick=()=>{n.credits<i.cost||(n.credits-=i.cost,i.buy(),Re.sfx("coin"),yt("loot",null,`Purchased: ${i.name}`),vm(),bs())},s.appendChild(r),t.appendChild(s)}Q("vendor-wallet").textContent=`YOUR CREDITS: \u2B21 ${ys(n.credits)} \xB7 MEDKITS: ${n.medkits}`}function Mm(){let n=S.P,e=null,t=5;for(let i of S.npcs){let s=_t(n.pos,i.pos);s<t&&(t=s,e=i)}for(let i of S.props){let s=_t(n.pos,i.pos);s<2.2&&s<t&&(t=s,e=i)}for(let i of S.shards){if(!i.active)continue;let s=_t(n.pos,i.pos);s<3&&s<t&&(t=s,e=i)}return e}function id(n=Mm()){if(!(!n||S.P.dead)){if(n.id==="mascar")nd();else if(n.id==="ilse")L1();else if(n.id==="zuri")Yr();else if(n.id==="plaque")GM();else if(n.kind==="shard"){let e=S.D;e.q.i===2&&e.q.st==="active"?(n.active=!1,n.group.visible=!1,n.respawnT=25,Re.sfx("pickup"),yt("loot",null,"You recover: [Beacon Shard]"),tn(n.pos.clone().setY(1),16722762,20,2),Yu("shard")):e.q.i<2?ni("The shard hums with crimson light. The Governor should know of this."):ni("You have no reason to take it now.")}}}function D1(){let n=Mm(),e=Q("prompt");if(n&&!S.ui&&!S.P.dead){let t=n.kind==="shard"?"Recover Beacon Shard":n.id==="mascar"?"Speak with Governor Mascar":n.id==="zuri"?"Talk to Zuri Adeyemi":n.id==="plaque"?"Read the memorial plaque":"Trade with Ilse Varn";e.innerHTML=`<b>${Qs?"\u25B6":"[E]"}</b> ${t}`,e.classList.remove("hidden")}else e.classList.add("hidden")}var Zr=new Map;function ln(n,e){Zr.get(n)!==e&&(Zr.set(n,e),Q(n).textContent=e)}function Ws(n,e){let t=(ii(e,0,1)*100).toFixed(1)+"%";Zr.get(n+"w")!==t&&(Zr.set(n+"w",t),Q(n).style.width=t)}function N1(){let n=Q("hotbar");n.innerHTML="",[...Vi().abil,{id:"med",name:"Concord Medkit",icon:"\u271A",cost:0,cd:15,desc:"Restore 50% of your health. Buy more from Ilse Varn."}].forEach((i,s)=>{let r=document.createElement("div");r.className="slot",r.innerHTML=`<span class="k">${s+1}</span>${i.icon}<span class="c"></span><div class="cd" style="height:0"></div><div class="cdt"></div>`,r.onclick=()=>Wr(s),Qs||(r.onmouseenter=o=>{let a=Q("tooltip");a.innerHTML=`<b>${$t(i.name)}</b>${$t(i.desc)}<br><i>${i.cost?i.cost+" energy \xB7 ":""}${i.cd?i.cd+"s cooldown":"no cooldown"}${i.dmg?" \xB7 "+Math.round(i.dmg*Dl())+" dmg":""}</i>`,a.classList.remove("hidden");let l=r.getBoundingClientRect();a.style.left=l.left-80+"px",a.style.top=l.top-a.offsetHeight-10+"px"}),r.onmouseleave=()=>Q("tooltip").classList.add("hidden"),n.appendChild(r)}),sd()}function sd(){let n=Q("hotbar").children[4];n&&(n.querySelector(".c").textContent=S.D.medkits)}function U1(){let n=S.P,e=S.D,t=Vi();ln("p-name",e.name),ln("p-lvl","LV "+e.level),ln("p-title",`${e.title.toUpperCase()} \xB7 ${t.name}`);let i=si();Ws("p-hp",n.hp/i),ln("p-hpt",`${Math.ceil(n.hp)} / ${i}`),Ws("p-sh",n.shield/i),Ws("p-en",n.en/Ks()),ln("p-ent",`${Math.floor(n.en)} / ${Ks()}`);let s=[];n.shield>0&&s.push(`\u26E8 ${n.shield}`),n.critNext&&s.push("\u25D0 CRIT"),n.combatT>0&&s.push("\u2694 COMBAT"),Vo[S.zone]?.safe&&s.push("\u2726 SANCTUARY"),e.aleT>0&&s.push(`\u25C8 ALE ${lm(e.aleT)}`);let r=s.map(c=>`<span class="buff">${c}</span>`).join("");Zr.get("buffs")!==r&&(Zr.set("buffs",r),Q("p-buffs").innerHTML=r);let o=Xu(e.level);Ws("xp-fill",e.xp/o),ln("xp-text",e.level>=30?"MAX LEVEL":`LEVEL ${e.level} \xB7 ${ys(e.xp)} / ${ys(o)} XP`),ln("wallet",`\u2B21 ${ys(e.credits)} CR`);let a=Q("hotbar").children,l=t.abil;for(let c=0;c<5;c++){let h=a[c];if(!h)continue;let u,d,f=0;if(c<4){let p=l[c],_=n.cds[p.id]||0;_>=n.gcd?(u=_,d=p.cd||1):(u=n.gcd,d=t.gcd),f=p.cost}else u=n.medT,d=15;let g=u>0?(u/d*100).toFixed(0)+"%":"0";h._h!==g&&(h._h=g,h.children[2].style.height=g);let x=u>1?Math.ceil(u):"";h._t!==x&&(h._t=x,h.children[3].textContent=x);let m=n.en<f||c===4&&e.medkits<=0;h._n!==m&&(h._n=m,h.classList.toggle("noen",m))}bm(),S.boss&&!Q("bossbar").classList.contains("hidden")&&Ws("boss-hp",S.boss.hp/S.boss.maxHp)}function bm(n){let e=S.P?.target,t=Q("tframe");if(!e){t.classList.add("hidden");return}t.classList.remove("hidden"),e.kind==="enemy"?(ln("t-name",e.name),ln("t-lvl","LV "+e.level),ln("t-sub",e.isBoss?"ELITE \xB7 REMNANT":e.type==="drone"?"MECHANICAL \xB7 REMNANT":"HOLLOWED \xB7 REMNANT"),Q("t-bar").style.display="",Ws("t-hp",e.hp/e.maxHp),ln("t-hpt",`${Math.max(0,Math.ceil(e.hp))} / ${e.maxHp}`)):e.kind==="bot"?(ln("t-name",e.name),ln("t-lvl","LV "+e.level),ln("t-sub",`${ki[e.cls].name}${e.guild?" \xB7 "+e.guild.toUpperCase():""}`),Q("t-bar").style.display="",Ws("t-hp",e.hp/e.maxHp),ln("t-hpt","ASCENDANT")):(ln("t-name",e.name),ln("t-lvl",""),ln("t-sub",e.title.toUpperCase()),Q("t-bar").style.display="none")}function Zo(){let n=S.D,e=Ol(),t=Q("tracker");n.q.st==="available"?t.innerHTML=`<h4>${e.repeat?"REPEATABLE":"NEW QUEST"}</h4><div class="qt">${$t(e.title)}</div><div class="qo">Speak with Governor Mascar in Concordia Plaza.</div>`:n.q.st==="active"?t.innerHTML=`<h4>QUEST</h4><div class="qt">${$t(e.title)}</div><div class="qo">\u2022 ${$t(e.obj)}: ${n.q.p} / ${e.count}</div><div class="qo" style="color:var(--dim)">${$t(e.zone)}</div>`:t.innerHTML=`<h4>QUEST</h4><div class="qt">${$t(e.title)}</div><div class="qo done">\u2713 ${$t(e.obj)}: ${e.count} / ${e.count}</div><div class="qo">Return to Governor Mascar.</div>`}var Tl=new Ge;function Tm(n,e){return Tl.set(n.x,(n.y||0)+e,n.z).project(le.cam),Tl.z>1?null:[(Tl.x*.5+.5)*innerWidth,(-Tl.y*.5+.5)*innerHeight]}function O1(){let n=S.P,e=lt.plates,t=[...S.npcs,...S.enemies,...S.bots],i=S.D.q.st==="available"?"!":S.D.q.st==="ready"?"?":"",s=S.npcs[0].plate.firstChild;s.textContent!==i&&(s.textContent=i);for(let r of t){let o=r.plate,a=le.cam.position.distanceTo(r.pos),l=e&&(r.alive||r.kind==="bot")&&a<(r.kind==="npc"?70:r.isBoss?90:50),c=null;if(l&&(c=Tm(r.pos,r.height+.35),l=!!c),!l){o._v!==!1&&(o.style.display="none",o._v=!1);continue}o._v!==!0&&(o.style.display="",o._v=!0);let h=ii(1.25-a/80,.6,1.1);if(o.style.transform=`translate(${c[0].toFixed(1)}px,${c[1].toFixed(1)}px) translate(-50%,-100%) scale(${h.toFixed(2)})`,r.kind==="enemy"){let u=(r.hp/r.maxHp*100).toFixed(0)+"%";r._pw!==u&&(r._pw=u,r.plateBar.style.width=u);let d=n.target===r;r._pt!==d&&(r._pt=d,o.classList.toggle("tgt",d))}}}function F1(n){for(let e of S.floaters){e.t+=n;let t=e.t/e.life,i=Tm(e.p,t*1.4);!i||t>=1?e.el.style.opacity=0:(e.el.style.transform=`translate(${i[0]}px,${i[1]}px) translate(-50%,-50%) scale(${t<.1?1+(.1-t)*5:1})`,e.el.style.opacity=t>.6?(1-t)/.4:1),t>=1&&(e.el.remove(),e.dead=!0)}S.floaters=S.floaters.filter(e=>!e.dead)}var de=Q("minimap").getContext("2d");function B1(){let n=S.P,e=184,t=e/2,i=.85,s=a=>t+(a-n.pos.x)*i,r=a=>t+(a-n.pos.z)*i;de.save(),de.clearRect(0,0,e,e),de.beginPath(),de.arc(t,t,t,0,Math.PI*2),de.clip(),de.fillStyle="#4a3a24",de.fillRect(0,0,e,e),de.fillStyle="rgba(30,20,12,0.45)",de.fillRect(s(34),r(-62),122*i,124*i),de.fillStyle="rgba(220,205,160,0.22)",de.fillRect(s(-156),r(-62),122*i,124*i),de.fillStyle="rgba(140,40,30,0.45)",de.beginPath(),de.arc(s(xt.x),r(xt.z),72*i,0,7),de.fill(),de.fillStyle="rgba(62,230,255,0.12)",de.beginPath(),de.arc(s(0),r(0),34*i,0,7),de.fill(),de.fillStyle="rgba(255,179,71,0.35)",de.fillRect(s(dn.x0),r(dn.z0),(dn.x1-dn.x0)*i,(dn.z1-dn.z0)*i),de.strokeStyle="rgba(255,179,71,0.9)",de.lineWidth=1,de.strokeRect(s(dn.x0),r(dn.z0),(dn.x1-dn.x0)*i,(dn.z1-dn.z0)*i),de.fillStyle="rgba(140,90,58,0.6)",de.fillRect(s(-150),r(-7),300*i,14*i),de.fillRect(s(-7),r(-110),14*i,110*i),de.fillStyle="rgba(220,190,150,0.3)";for(let a of S.colliders){if(Math.abs(a.minX-n.pos.x)>140||Math.abs(a.minZ-n.pos.z)>140)continue;let l=(a.maxX-a.minX)*i;l<2||de.fillRect(s(a.minX),r(a.minZ),l,(a.maxZ-a.minZ)*i)}if(de.strokeStyle="rgba(232,196,106,0.6)",de.lineWidth=2,de.beginPath(),de.arc(s(0),r(0),246*i,0,7),de.stroke(),S.D.q.i===2&&S.D.q.st==="active"){de.fillStyle="#ff6b7f";for(let a of S.shards)a.active&&(de.save(),de.translate(s(a.pos.x),r(a.pos.z)),de.rotate(Math.PI/4),de.fillRect(-2.5,-2.5,5,5),de.restore())}for(let a of S.enemies){if(!a.alive)continue;de.fillStyle=a.isBoss?"#ff2b4a":"#ff5a6e";let l=a.isBoss?5:2.2;de.beginPath(),de.arc(s(a.pos.x),r(a.pos.z),l,0,7),de.fill()}de.fillStyle="#7fe3ff";for(let a of S.bots)a.alive&&(de.beginPath(),de.arc(s(a.pos.x),r(a.pos.z),2.2,0,7),de.fill());de.fillStyle="#e8c46a";for(let a of S.npcs)de.beginPath(),de.arc(s(a.pos.x),r(a.pos.z),3.5,0,7),de.fill();let o=k1();if(o){let a=s(o.x),l=r(o.z),c=a-t,h=l-t,u=Math.hypot(c,h);u>t-10&&(a=t+c/u*(t-10),l=t+h/u*(t-10)),de.fillStyle="#e8c46a",de.save(),de.translate(a,l),de.rotate(Math.PI/4),de.fillRect(-4,-4,8,8),de.restore()}de.save(),de.translate(t,t),de.rotate(-n.group.rotation.y+Math.PI),de.fillStyle="#fff",de.beginPath(),de.moveTo(0,-7),de.lineTo(5,5),de.lineTo(0,2),de.lineTo(-5,5),de.closePath(),de.fill(),de.restore(),de.save(),de.translate(t,t),de.rotate(-S.cam.yaw),de.fillStyle="rgba(255,255,255,0.05)",de.beginPath(),de.moveTo(0,0),de.arc(0,0,70,-Math.PI/2-.55,-Math.PI/2+.55),de.fill(),de.restore(),de.restore(),de.fillStyle="rgba(255,255,255,0.6)",de.font="10px Bahnschrift, sans-serif",de.textAlign="center",de.fillText("N",t,11)}function k1(){let n=S.D,e=Ol();return n.q.st!=="active"?S.npcs[0].pos:{hollowed:new Ge(95,0,0),drone:new Ge(-95,0,0),shard:xt,boss:xt,any:S.P.pos.x>=0?new Ge(95,0,0):new Ge(-95,0,0)}[e.type]}var Yp={world:"[World]",zone:"[Zone]",sys:"",gov:"[Governor's Office]",say:"[Say]",loot:"",err:"",whisper:"[Whisper]"};function yt(n,e,t,i){let s=Q("chat-log"),r=document.createElement("div");for(r.className="ch-"+(i||n),r.innerHTML=`${Yp[n]?Yp[n]+" ":""}${e?`<span class="ch-name">[${$t(e)}]</span>: `:""}${$t(t)}`,s.appendChild(r);s.children.length>80;)s.firstChild.remove();s.scrollTop=s.scrollHeight}function Zs(n,e,t="world"){n&&yt(t,n.name,e.replace(/\{name\}/g,S.D.name))}function H1(){let n=Math.random();if(S.zone==="cantina"&&n<.45){let e=S.bots.filter(t=>Yn(t.pos.x,t.pos.z)==="cantina");Zs(e.length?ht(e):ht(S.bots),ht(Np),"say");return}if(n<.55)Zs(ht(S.bots),ht(Lp));else if(n<.75){let e=S.bots.filter(t=>Yn(t.pos.x,t.pos.z)===S.zone);e.length&&Zs(ht(e),ht(Dp),"zone")}else n<.82&&yt("gov",null,ht(Up))}function z1(n){if(n=n.trim(),!n)return;let e=S.D,t=S.P;if(n[0]==="/"){let[r]=n.slice(1).toLowerCase().split(" ");switch(r){case"help":yt("sys",null,"Commands: /who /played /loc /dance /wave /salute /help");break;case"who":{let o=S.bots.slice(0,6).map(a=>`${a.name} (${a.level} ${ki[a.cls].name.toLowerCase()}, ${Vo[Yn(a.pos.x,a.pos.z)].name.toLowerCase()})`);yt("sys",null,`Online: ${o.join(", ")} \u2026and ${ys(Rl-6)} others.`);break}case"played":{let o=e.played|0;yt("sys",null,`Time played: ${Math.floor(o/3600)}h ${Math.floor(o/60)%60}m ${o%60}s`);break}case"loc":yt("sys",null,`${Vo[S.zone].name}: ${t.pos.x.toFixed(0)}, ${(-t.pos.z).toFixed(0)}`);break;case"dance":t.danceT=5,yt("say",null,`${e.name} bursts into dance.`,"sys");break;case"wave":t.actHint="wave",t.atk=.3,yt("say",null,`${e.name} waves.`,"sys"),setTimeout(()=>{let o=S.bots.find(a=>_t(a.pos,t.pos)<20);o&&yt("say",o.name,"o/")},900);break;case"salute":{t.actHint="salute",t.atk=.3;let o=_t(t.pos,S.npcs[0].pos)<15;yt("say",null,o?`${e.name} salutes Governor Mascar.`:`${e.name} salutes.`,"sys"),o&&setTimeout(()=>yt("say","Croxian Mascar",ht(["At ease, Ascendant.","The city sees you.","Stand tall. You have earned it."])),900);break}default:yt("err",null,"Unknown command. Type /help.")}return}yt("world",e.name,n),Re.sfx("chat");let i=n.toLowerCase(),s=(r,o=N(1,3))=>setTimeout(()=>Zs(ht(S.bots),ht(r)),o*1e3);/\b(hi|hello|hey|yo|sup|o7|o\/|greetings)\b/.test(i)?(s(Ou),Math.random()<.5&&s(Ou,N(2,4))):/mascar|governor|croxian/.test(i)?s(Op):/catharsis|remnant|monolith/.test(i)?s(["don't say that name too loud","the crater still gives me nightmares","the remnant hits like a tram, bring medkits"]):/lfg|group|party|help/.test(i)?s(["inv me","omw","where at?","sure, what zone"]):i.includes("?")?s(["no idea tbh","ask the governor","check the codex","pretty sure it's north"]):Math.random()<.3&&s(["lol","true","based","real","fr"])}function Xr(n,e,t,i,s,r){S.ui="dialog",Q("vendor").classList.add("hidden"),Q("dlg-who").textContent=n,Q("dlg-name").textContent=e,Q("dlg-q").textContent=t,Q("dlg-text").textContent=i,Q("dlg-rew").textContent=s;let o=Q("dlg-opts");o.innerHTML="";for(let a of r){let l=document.createElement("button");l.className="btn"+(a.gold?" gold":" ghost"),l.textContent=a.label,l.onclick=a.fn,o.appendChild(l)}Q("dialog").classList.remove("hidden")}function zt(){for(let n of["dialog","vendor","sheet","pause"])Q(n).classList.add("hidden");S.ui=null,Q("tooltip").classList.add("hidden")}function rd(){let n=S.D,e=S.P,t=Vi();zt(),S.ui="sheet",Q("sh-name").textContent=n.name.toUpperCase();let i=[["Title",n.title],["Class",t.name],["Level",n.level],["Health",`${Math.ceil(e.hp)} / ${si()}`],["Energy",Ks()],["Damage bonus",`+${Math.round((Dl()-1)*100)}%`],["Critical chance",`${Math.round(t.crit*100)}%`],["Weapon tuning",`Rank ${n.wpn}`],["Concord plating",`Rank ${n.arm}`],["Remnants destroyed",ys(n.kills)],["Deaths",n.deaths],["Quests completed",n.completed],["Credits",ys(n.credits)],["Realm",Q("realm").value.split(" \xB7 ")[0]]];Q("sheet-rows").innerHTML=i.map(([s,r])=>`<div class="srow"><span>${s.toUpperCase()}</span><b>${$t(r)}</b></div>`).join(""),Q("sheet").classList.remove("hidden")}function Em(){if(S.ui==="pause"){zt();return}zt(),S.ui="pause",Q("pause").classList.remove("hidden")}var Ot={down:-1,sx:0,sy:0,lx:0,ly:0,dragged:!1,both:!1,btns:0};Kr.addEventListener("contextmenu",n=>n.preventDefault());Kr.addEventListener("mousedown",n=>{Re.init(),Ot.down=n.button,Ot.btns=n.buttons,Ot.sx=Ot.lx=n.clientX,Ot.sy=Ot.ly=n.clientY,Ot.dragged=!1,Ot.both=(n.buttons&3)===3,S.mode==="menu"&&(De.drag=!0),document.activeElement===Q("chat-input")&&Q("chat-input").blur()});window.addEventListener("mousemove",n=>{let e=n.clientX-Ot.lx,t=n.clientY-Ot.ly;if(Ot.lx=n.clientX,Ot.ly=n.clientY,S.mode==="menu"){De.mx=n.clientX/innerWidth*2-1,De.my=n.clientY/innerHeight*2-1,De.drag&&Ot.down>=0&&(De.yaw+=e*.01,De.yawVel=e*.002);return}Ot.down<0||S.mode!=="world"||(Math.abs(n.clientX-Ot.sx)+Math.abs(n.clientY-Ot.sy)>4&&(Ot.dragged=!0),Ot.dragged&&(S.cam.yaw-=e*.006*lt.sens,S.cam.pitch=ii(S.cam.pitch+t*.004*lt.sens,-.1,1.35),Ot.down===2&&S.P&&!S.P.dead&&(S.P.yaw=S.cam.yaw+Math.PI)))});window.addEventListener("mouseup",n=>{if(S.mode==="menu"){De.drag=!1,Ot.down=-1;return}S.mode==="world"&&n.target===Kr&&!Ot.dragged&&Ot.down===0&&Sm(n.clientX,n.clientY),Ot.down=-1,Ot.both=!1});Kr.addEventListener("wheel",n=>{S.mode==="world"&&(S.cam.dist=ii(S.cam.dist+Math.sign(n.deltaY)*1.2,3.5,24))},{passive:!0});var $p=new rl;function Sm(n,e){$p.setFromCamera(new Ve(n/innerWidth*2-1,-(e/innerHeight)*2+1),le.cam);let t=[...S.enemies.filter(s=>s.alive),...S.bots,...S.npcs].map(s=>s.hitbox),i=$p.intersectObjects(t,!1)[0];if(i){let s=i.object.userData.ent;vs(s),s.kind==="enemy"&&(S.P.autoOn=!0),s.kind==="npc"&&_t(S.P.pos,s.pos)<6&&id(s),Re.sfx("click")}else vs(null)}window.addEventListener("keydown",n=>{if(S.mode==="splash"){S.ready&&Rm();return}let e=Q("chat-input"),t=document.activeElement===e;if(!(document.activeElement&&document.activeElement.tagName==="INPUT"&&!t)){if(S.mode!=="world"){n.code==="Escape"&&Zp();return}if(t){n.code==="Enter"||n.key==="Enter"?(z1(e.value),e.value="",e.blur()):n.code==="Escape"&&(e.value="",e.blur());return}if(Dn[n.code]=!0,!Q("codex").classList.contains("hidden")||!Q("settings").classList.contains("hidden")){n.code==="Escape"&&Zp();return}switch(n.code){case"Enter":n.preventDefault(),e.focus();break;case"Slash":n.preventDefault(),e.focus(),e.value="/";break;case"Escape":S.ui?zt():S.P.target?vs(null):Em();break;case"Tab":n.preventDefault(),mm();break;case"Digit1":Wr(0);break;case"Digit2":Wr(1);break;case"Digit3":Wr(2);break;case"Digit4":Wr(3);break;case"Digit5":Wr(4);break;case"KeyE":case"KeyF":if(S.ui==="dialog")break;id();break;case"KeyC":S.ui==="sheet"?zt():rd();break;case"Space":n.preventDefault(),n.repeat||ym();break;case"KeyQ":n.repeat||Ul(!0);break}}});window.addEventListener("keyup",n=>{Dn[n.code]=!1,S.P&&n.code==="Space"&&(S.P.jumpHeld=!1),S.P&&n.code==="KeyQ"&&Ul(!1)});window.addEventListener("blur",()=>{for(let n in Dn)Dn[n]=!1;S.P&&(S.P.jumpHeld=!1,S.P.qHeld=!1)});var Rt={id:null,x:0,y:0,mag:0,cx:0,cy:0,r:52},Hi=new Map,ko=0;function wm(n){let e=n.clientX-Rt.cx,t=n.clientY-Rt.cy,i=Math.hypot(e,t);i>Rt.r&&(e*=Rt.r/i,t*=Rt.r/i),Rt.x=e/Rt.r,Rt.y=t/Rt.r,Rt.mag=Math.min(1,i/Rt.r),Rt.mag<.15&&(Rt.x=Rt.y=0),Q("joy-knob").style.transform=`translate(${e}px, ${t}px)`}function V1(){Rt.id=null,Rt.x=Rt.y=Rt.mag=0,Q("joy-knob").style.transform="",Q("joy").classList.remove("on")}Q("joy").addEventListener("touchstart",n=>{if(n.preventDefault(),Re.init(),Rt.id!==null||S.ui)return;let e=n.changedTouches[0],t=Q("joy").getBoundingClientRect();Rt.id=e.identifier,Rt.cx=t.left+t.width/2,Rt.cy=t.top+t.height/2,Rt.r=t.width*.4,Q("joy").classList.add("on"),wm(e)},{passive:!1});window.addEventListener("touchmove",n=>{for(let e of n.changedTouches){if(e.identifier===Rt.id){wm(e);continue}let t=Hi.get(e.identifier);if(!t)continue;let i=e.clientX-t.x,s=e.clientY-t.y;if(t.x=e.clientX,t.y=e.clientY,Math.abs(t.x-t.sx)+Math.abs(t.y-t.sy)>10&&(t.moved=!0),S.mode==="menu"){De.yaw+=i*.01,De.yawVel=i*.002;continue}S.mode!=="world"||Hi.size>1||(S.cam.yaw-=i*.008*lt.sens,S.cam.pitch=ii(S.cam.pitch+s*.005*lt.sens,-.1,1.35))}if(Hi.size===2&&S.mode==="world"){let[e,t]=[...Hi.values()],i=Math.hypot(e.x-t.x,e.y-t.y);ko&&(S.cam.dist=ii(S.cam.dist-(i-ko)*.04,3.5,24)),ko=i}},{passive:!0});Kr.addEventListener("touchstart",n=>{n.preventDefault(),Re.init(),document.activeElement===Q("chat-input")&&Q("chat-input").blur();for(let e of n.changedTouches)Hi.set(e.identifier,{x:e.clientX,y:e.clientY,sx:e.clientX,sy:e.clientY,t:performance.now(),moved:!1});S.mode==="menu"&&(De.drag=!0),ko=0},{passive:!1});function Am(n){for(let e of n.changedTouches){if(e.identifier===Rt.id){V1();continue}let t=Hi.get(e.identifier);t&&(Hi.delete(e.identifier),S.mode==="world"&&!t.moved&&Hi.size===0&&performance.now()-t.t<350&&!S.ui&&Sm(e.clientX,e.clientY))}Hi.size===0&&(De.drag=!1,ko=0)}window.addEventListener("touchend",Am);window.addEventListener("touchcancel",Am);var Jr=(n,e)=>Q(n).addEventListener("pointerdown",t=>{t.preventDefault(),t.stopPropagation(),Re.init(),e()});Jr("tb-jump",()=>ym());Jr("tb-slide",()=>Ul(!0));for(let n of["pointerup","pointercancel","pointerleave"])Q("tb-jump").addEventListener(n,()=>{S.P&&(S.P.jumpHeld=!1)}),Q("tb-slide").addEventListener(n,()=>Ul(!1));Jr("tb-target",()=>mm());Jr("tb-menu",()=>{S.ui&&S.ui!=="pause"?zt():Em()});Jr("tb-sheet",()=>{S.ui==="sheet"?zt():rd()});Jr("tb-chat",()=>{let n=Q("chat-input");n.classList.add("open"),n.focus()});Q("chat-input").addEventListener("blur",()=>Q("chat-input").classList.remove("open"));Q("prompt").addEventListener("click",()=>{S.ui!=="dialog"&&id()});var Rl=4812;function Ms(n){Q(n).classList.remove("hidden")}function bn(n){Q(n).classList.add("hidden")}function Zp(){bn("codex"),bn("settings")}function Rm(){if(Qs){let n=document.documentElement;try{let e=n.requestFullscreen&&n.requestFullscreen({navigationUI:"hide"});e&&e.then(()=>screen.orientation?.lock?.("landscape")).catch(()=>{})}catch{}}Re.init(),Re.sfx("start"),setTimeout(()=>Re.playMusic("menu"),300),Q("splash").style.opacity=0,setTimeout(()=>bn("splash"),1e3),S.mode="menu",od()}function od(){S.mode="menu",Ku(De.scene,De.cam),bn("hud"),bn("create"),bn("loading"),Ms("menu");let n=Js.get(Ko),e=Q("btn-continue");n?(e.disabled=!1,Q("continue-sub").textContent=`${n.name.toUpperCase()} \xB7 LV ${n.level} ${ki[n.cls].name}`):(e.disabled=!0,Q("continue-sub").textContent="NO ASCENDANT REGISTERED"),Re.playMusic("menu")}document.querySelectorAll(".mbtn, .btn").forEach(n=>{n.addEventListener("mouseenter",()=>Re.sfx("hover")),n.addEventListener("click",()=>Re.sfx("click"))});Q("btn-continue").onclick=()=>{let n=Js.get(Ko);n&&(S.D=n,Im())};Q("btn-new").onclick=()=>$u();Q("btn-codex").onclick=()=>ad();Q("btn-settings").onclick=()=>Cm();Q("btn-quit").onclick=()=>{try{window.close()}catch{}setTimeout(()=>Ms("farewell"),150)};document.querySelectorAll("[data-close]").forEach(n=>n.onclick=()=>bn(n.dataset.close));Q("codex").addEventListener("mousedown",n=>{n.target.id==="codex"&&bn("codex")});Q("settings").addEventListener("mousedown",n=>{n.target.id==="settings"&&bn("settings")});function ad(n=0){let e=Q("codex-list");e.innerHTML="",Uu.forEach((i,s)=>{let r=document.createElement("li");r.textContent=i.title.toUpperCase(),s===n&&(r.className="on"),r.onclick=()=>{Re.sfx("click"),ad(s)},e.appendChild(r)});let t=Uu[n];Q("codex-body").innerHTML=`<h3>${$t(t.title.toUpperCase())}</h3><div class="tag">${$t(t.tag)}</div>${t.body.map(i=>`<p>${$t(i)}</p>`).join("")}`,Ms("codex")}function Cm(){Q("set-volume").value=lt.volume,Q("set-music").checked=lt.music,Q("set-bloom").checked=lt.bloom,Q("set-shadows").checked=lt.shadows,Q("set-sens").value=lt.sens,Q("set-plates").checked=lt.plates,Q("set-dynres").checked=lt.dynres,Q("set-fps").checked=lt.fps,Ms("settings")}function Ts(){Js.set("adnostra_settings",lt)}Q("set-volume").oninput=n=>{lt.volume=+n.target.value,Re.setVolume(lt.volume),Ts()};Q("set-music").onchange=n=>{lt.music=n.target.checked,Re.setMusic(lt.music),Ts()};Q("set-bloom").onchange=n=>{lt.bloom=n.target.checked,$s.enabled=lt.bloom,Ts()};Q("set-shadows").onchange=n=>{lt.shadows=n.target.checked,Ft.shadowMap.enabled=lt.shadows;for(let e of[De.scene,le.scene])e.traverse(t=>{t.material&&[].concat(t.material).forEach(i=>i.needsUpdate=!0)});Ts()};Q("set-sens").oninput=n=>{lt.sens=+n.target.value,Ts()};Q("set-plates").onchange=n=>{lt.plates=n.target.checked,Ts()};Q("set-dynres").onchange=n=>{lt.dynres=n.target.checked,at.level=0,at.fails=0,Zu(),Ts()};Q("set-fps").onchange=n=>{lt.fps=n.target.checked,Q("fps").classList.toggle("hidden",!lt.fps),Ts()};Q("fps").classList.toggle("hidden",!lt.fps);var qr={cls:"vanguard",visor:vl[0]};function $u(){bn("menu"),Ms("create");let n=Q("classes");n.innerHTML="";for(let[i,s]of Object.entries(ki)){let r=document.createElement("div");r.className="ccard cut"+(i===qr.cls?" on":""),r.style.setProperty("--c",s.color),r.innerHTML=`<div class="cico">${s.icon}</div><h3>${s.name}</h3><div class="role">${s.role}</div><p>${$t(s.desc)}</p>
      <div class="stats"><span>HEALTH <b>${s.hp}</b></span><span>RANGE <b>${s.range>5?"LONG":"MELEE"}</b></span><span>CRIT <b>${Math.round(s.crit*100)}%</b></span></div>
      <ul>${s.abil.map(o=>`<li><span>${o.icon}</span>${$t(o.name)}</li>`).join("")}</ul>`,r.onclick=()=>{qr.cls=i,Re.sfx("click"),$u()},n.appendChild(r)}let e=Q("swatches");e.innerHTML="";for(let i of vl){let s=document.createElement("div");s.className="sw"+(i===qr.visor?" on":""),s.style.setProperty("--c",i),s.onclick=()=>{qr.visor=i,Re.sfx("click"),$u()},e.appendChild(s)}let t=Q("cname");t.value||(t.value=ht(["Ardent","Talon","Vesper","Rook","Cassia","Orin","Lyra","Dain","Sorrel","Kestrel"])),Q("overwrite").classList.toggle("hidden",!Js.get(Ko))}Q("create-back").onclick=()=>{bn("create"),od()};Q("create-go").onclick=()=>{let n=Q("cname").value.trim();if(!/^[A-Za-z0-9_\- ]{2,16}$/.test(n)){Q("cname").style.borderColor="var(--crimson)",setTimeout(()=>Q("cname").style.borderColor="",1200);return}S.D=l1(n,qr.cls,qr.visor),Js.set(Ko,S.D),Re.sfx("start"),Im(!0)};function Im(n=!1){bn("menu"),bn("create"),Ms("loading"),Q("load-tip").textContent=ht(Rp);let e=Q("load-bar");e.style.transition="none",e.style.width="0",requestAnimationFrame(()=>{e.style.transition="width 1.6s ease",e.style.width="70%"}),setTimeout(()=>{try{S.world||FM()}catch(t){console.error(t),zu("World failed to build: "+t.message)}c1();for(let t of S.enemies)(t.target===S.P||t.target&&t.target.kind==="player")&&(t.target=null,t.state="return");S.zone="",S.ui=null,zt(),bn("death"),Q("chat-log").innerHTML="",e.style.width="100%",setTimeout(()=>{bn("loading"),Ms("hud"),S.mode="world",Ku(le.scene,le.cam),Zo(),vs(null),le.cam.position.copy(S.P.pos).add(new Ge(0,6,14)),Re.playMusic("world"),yt("sys",null,`Welcome to Ad-Nostra, ${S.D.name}. Realm: ${Q("realm").value.split(" \xB7 ")[0]}.`),yt("gov",null,"Anno Domini 2137. Ten years since Carax. The Catharsis is fallen \u2014 but its Remnants endure."),(n||S.D.q.i===0&&S.D.q.st==="available")&&yt("sys",null,`Governor Croxian Mascar awaits you on his dais. Walk up and ${Qs?"tap the prompt":"press E"}.`),setTimeout(()=>Zs(ht(S.bots),`welcome ${S.D.name} o7`),3500)},500)},900)}function G1(){bs(),zt();for(let n of S.floaters)n.el.remove();S.floaters=[],od()}function bs(){!S.D||!S.P||(S.D.pos=[S.P.pos.x,S.P.pos.z],Js.set(Ko,S.D))}window.addEventListener("beforeunload",()=>{S.mode==="world"&&bs()});Q("respawn").onclick=u1;Q("vendor-x").onclick=zt;Q("sheet-x").onclick=zt;Q("pz-resume").onclick=zt;Q("pz-sheet").onclick=rd;Q("pz-codex").onclick=()=>{zt(),ad()};Q("pz-settings").onclick=()=>{zt(),Cm()};Q("pz-exit").onclick=G1;setInterval(()=>{Rl=ii(Rl+js(-14,16),4200,5600),Q("online").textContent=ys(Rl)},3e3);window.addEventListener("resize",()=>{for(let n of[De.cam,le.cam])n.aspect=innerWidth/innerHeight,n.updateProjectionMatrix();Ft.setSize(innerWidth,innerHeight),pi.setPixelRatio(Ft.getPixelRatio()),pi.setSize(innerWidth,innerHeight),$s.resolution.set(innerWidth/2,innerHeight/2)});var Ho=[1,.85,.72,.6],at={level:0,acc:0,n:0,cool:0,grace:3,fails:0,frames:0,fpsT:0,fps:0},W1=()=>Math.min(devicePixelRatio,_s.pixelRatio);function Zu(){let n=W1()*(lt.dynres?Ho[at.level]:1);Math.abs(Ft.getPixelRatio()-n)<.01||(Ft.setPixelRatio(n),pi.setPixelRatio(n),pi.setSize(innerWidth,innerHeight))}function X1(n){if(at.frames++,at.fpsT+=n,at.fpsT>=.5&&(at.fps=at.frames/at.fpsT,at.frames=0,at.fpsT=0,lt.fps&&(Q("fps").textContent=`${Math.round(at.fps)} FPS \xB7 ${Math.round(Ho[lt.dynres?at.level:0]*100)}% RES \xB7 ${Ft.info.render.calls} DRAWS`)),!lt.dynres||document.hidden||n>2)return;if(at.grace>0){at.grace-=n;return}let e=Math.min(n,.1);if(at.cool=Math.max(0,at.cool-n),at.acc+=e,at.n++,at.acc<1.5&&at.n<90)return;let t=at.acc/at.n*1e3;at.acc=0,at.n=0,t>21&&at.level<Ho.length-1?(at.level=Math.min(Ho.length-1,at.level+(t>40?2:1)),at.fails++,at.cool=Math.min(60,6*2**at.fails),Zu()):t<17.8&&at.level>0&&at.cool<=0&&(at.level--,at.cool=4,Zu())}function Pm(){requestAnimationFrame(Pm);let n=bM.getDelta(),e=Math.min(n,.05);S.time+=e,X1(n),Re.tick(e);try{S.mode==="world"?P1(e):NM(e)}catch(t){console.error(t)}Ft.info.reset(),pi.render()}(async function(){let e=Q("splash-bar"),t=Q("splash-status"),i=s=>e.style.width=s*100+"%";i(.1);try{await TM(i),t.textContent="UPLINK ESTABLISHED"}catch(s){console.error(s),t.textContent="GOVERNOR MODEL UNAVAILABLE \u2014 USING FALLBACK",zu(s.message)}try{await wp()}catch(s){console.error(s),zu("Ascendant model unavailable, using the fallback: "+s.message)}DM(),Ku(De.scene,De.cam),Pm(),setTimeout(()=>{bn("splash-load"),Ms("splash-press"),S.ready=!0},400),Q("splash").addEventListener("pointerdown",()=>{S.ready&&S.mode==="splash"&&Rm()}),Qs&&(Q("splash-press").textContent="TAP TO BEGIN"),window.__AD=S,window.__ADdbg={W:le,menu:De,damage:zi,killEnemy:fm,talkMascar:nd,updateTracker:Zo,stats:()=>({batch:le.batch,res:Ho[at.level],calls:Ft.info.render.calls,tris:Ft.info.render.triangles,geos:Ft.info.memory.geometries,tex:Ft.info.memory.textures,pr:Ft.getPixelRatio()})}})();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
