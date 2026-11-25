(()=>{var rh="170";var Tp=0,Nu=1,Ap=2;var nf=1,oh=2,ci=3,Kn=0,$t=1,nn=2,Zn=0,er=1,rn=2,Uu=3,Ou=4,Rp=5,xs=100,Cp=101,Ip=102,Pp=103,Lp=104,Dp=200,Np=201,Up=202,Op=203,Xc=204,qc=205,Fp=206,Bp=207,kp=208,zp=209,Hp=210,Vp=211,Gp=212,Wp=213,Xp=214,Yc=0,$c=1,Zc=2,sr=3,Kc=4,Jc=5,jc=6,Qc=7,ah=0,qp=1,Yp=2,Bi=0,ch=1,lh=2,hh=3,co=4,$p=5,uh=6,dh=7,Fu="attached",Zp="detached",sf=300,rr=301,or=302,el=303,tl=304,Fa=306,di=1e3,In=1001,Zr=1002,sn=1003,fh=1004;var js=1005;var pn=1006,Xr=1007;var $n=1008;var fi=1009,rf=1010,of=1011,Kr=1012,ph=1013,ki=1014,Sn=1015,Tn=1016,mh=1017,gh=1018,ar=1020,af=35902,cf=1021,lf=1022,mn=1023,hf=1024,uf=1025,tr=1026,cr=1027,xh=1028,Ba=1029,df=1030,_h=1031;var yh=1033,ra=33776,oa=33777,aa=33778,ca=33779,nl=35840,il=35841,sl=35842,rl=35843,ol=36196,al=37492,cl=37496,ll=37808,hl=37809,ul=37810,dl=37811,fl=37812,pl=37813,ml=37814,gl=37815,xl=37816,_l=37817,yl=37818,vl=37819,Ml=37820,bl=37821,la=36492,Sl=36494,wl=36495,ff=36283,El=36284,Tl=36285,Al=36286;var lr=2300,hr=2301,hc=2302,Bu=2400,ku=2401,zu=2402,Kp=2500;var pf=0,ka=1,lo=2,Jp=3200,jp=3201;var vh=0,Qp=1,Oi="",Ut="srgb",an="srgb-linear",za="linear",mt="srgb";var Fs=7680;var Hu=519,em=512,tm=513,nm=514,mf=515,im=516,sm=517,rm=518,om=519,Rl=35044;var Vu="300 es",hi=2e3,ha=2001,zi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gu=1234567,qr=Math.PI/180,ur=180/Math.PI;function Vn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]).toLowerCase()}function tn(i,e,t){return Math.max(e,Math.min(t,i))}function Mh(i,e){return(i%e+e)%e}function am(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function cm(i,e,t){return i!==e?(t-i)/(e-i):0}function Yr(i,e,t){return(1-t)*i+t*e}function lm(i,e,t,n){return Yr(i,e,1-Math.exp(-t*n))}function hm(i,e=1){return e-Math.abs(Mh(i,e*2)-e)}function um(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function dm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function fm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function pm(i,e){return i+Math.random()*(e-i)}function mm(i){return i*(.5-Math.random())}function gm(i){i!==void 0&&(Gu=i);let e=Gu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function xm(i){return i*qr}function _m(i){return i*ur}function ym(i){return(i&i-1)===0&&i!==0}function vm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Mm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function bm(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Hn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function yt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var gf={DEG2RAD:qr,RAD2DEG:ur,generateUUID:Vn,clamp:tn,euclideanModulo:Mh,mapLinear:am,inverseLerp:cm,lerp:Yr,damp:lm,pingpong:hm,smoothstep:um,smootherstep:dm,randInt:fm,randFloat:pm,randFloatSpread:mm,seededRandom:gm,degToRad:xm,radToDeg:_m,isPowerOfTwo:ym,ceilPowerOfTwo:vm,floorPowerOfTwo:Mm,setQuaternionFromProperEuler:bm,normalize:yt,denormalize:Hn},Ne=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(tn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ze=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],M=s[1],b=s[4],_=s[7],I=s[2],T=s[5],R=s[8];return r[0]=o*x+a*M+c*I,r[3]=o*m+a*b+c*T,r[6]=o*p+a*_+c*R,r[1]=l*x+h*M+u*I,r[4]=l*m+h*b+u*T,r[7]=l*p+h*_+u*R,r[2]=d*x+f*M+g*I,r[5]=d*m+f*b+g*T,r[8]=d*p+f*_+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*l-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=d*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(uc.makeScale(e,t)),this}rotate(e){return this.premultiply(uc.makeRotation(-e)),this}translate(e,t){return this.premultiply(uc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},uc=new Ze;function xf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Jr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Sm(){let i=Jr("canvas");return i.style.display="block",i}var Wu={};function Gr(i){i in Wu||(Wu[i]=!0,console.warn(i))}function wm(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Em(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Tm(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var je={enabled:!0,workingColorSpace:an,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===mt&&(i.r=ui(i.r),i.g=ui(i.g),i.b=ui(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===mt&&(i.r=nr(i.r),i.g=nr(i.g),i.b=nr(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Oi?za:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ui(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function nr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Xu=[.64,.33,.3,.6,.15,.06],qu=[.2126,.7152,.0722],Yu=[.3127,.329],$u=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zu=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);je.define({[an]:{primaries:Xu,whitePoint:Yu,transfer:za,toXYZ:$u,fromXYZ:Zu,luminanceCoefficients:qu,workingColorSpaceConfig:{unpackColorSpace:Ut},outputColorSpaceConfig:{drawingBufferColorSpace:Ut}},[Ut]:{primaries:Xu,whitePoint:Yu,transfer:mt,toXYZ:$u,fromXYZ:Zu,luminanceCoefficients:qu,outputColorSpaceConfig:{drawingBufferColorSpace:Ut}}});var Bs,Cl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Bs===void 0&&(Bs=Jr("canvas")),Bs.width=e.width,Bs.height=e.height;let n=Bs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Bs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Jr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ui(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ui(t[n]/255)*255):t[n]=ui(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Am=0,ua=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Am++}),this.uuid=Vn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(dc(s[o].image)):r.push(dc(s[o]))}else r=dc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function dc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Cl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Rm=0,Xt=class i extends zi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=In,s=In,r=pn,o=$n,a=mn,c=fi,l=i.DEFAULT_ANISOTROPY,h=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=Vn(),this.name="",this.source=new ua(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case di:e.x=e.x-Math.floor(e.x);break;case In:e.x=e.x<0?0:1;break;case Zr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case di:e.y=e.y-Math.floor(e.y);break;case In:e.y=e.y<0?0:1;break;case Zr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=sf;Xt.DEFAULT_ANISOTROPY=1;var ut=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,_=(f+1)/2,I=(p+1)/2,T=(h+d)/4,R=(u+x)/4,P=(g+m)/4;return b>_&&b>I?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=T/n,r=R/n):_>I?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=T/s,r=P/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=R/r,s=P/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-x)/M,this.z=(d-h)/M,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Il=class extends zi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Xt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ua(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kt=class extends Il{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},da=class extends Xt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Pl=class extends Xt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var gn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(u!==x||c!==d||l!==f||h!==g){let m=1-a,p=c*d+l*f+h*g+u*x,M=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){let I=Math.sqrt(b),T=Math.atan2(I,p*M);m=Math.sin(m*T)/I,a=Math.sin(a*T)/I}let _=a*M;if(c=c*m+d*_,l=l*m+f*_,h=h*m+g*_,u=u*m+x*_,m===1-a){let I=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=I,l*=I,h*=I,u*=I}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ku.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ku.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return fc.copy(this).projectOnVector(e),this.sub(fc)}reflect(e){return this.sub(fc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(tn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},fc=new D,Ku=new gn,Wt=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Bn):Bn.fromBufferAttribute(r,o),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Io.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Io.copy(n.boundingBox)),Io.applyMatrix4(e.matrixWorld),this.union(Io)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Nr),Po.subVectors(this.max,Nr),ks.subVectors(e.a,Nr),zs.subVectors(e.b,Nr),Hs.subVectors(e.c,Nr),Ii.subVectors(zs,ks),Pi.subVectors(Hs,zs),cs.subVectors(ks,Hs);let t=[0,-Ii.z,Ii.y,0,-Pi.z,Pi.y,0,-cs.z,cs.y,Ii.z,0,-Ii.x,Pi.z,0,-Pi.x,cs.z,0,-cs.x,-Ii.y,Ii.x,0,-Pi.y,Pi.x,0,-cs.y,cs.x,0];return!pc(t,ks,zs,Hs,Po)||(t=[1,0,0,0,1,0,0,0,1],!pc(t,ks,zs,Hs,Po))?!1:(Lo.crossVectors(Ii,Pi),t=[Lo.x,Lo.y,Lo.z],pc(t,ks,zs,Hs,Po))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ni=[new D,new D,new D,new D,new D,new D,new D,new D],Bn=new D,Io=new Wt,ks=new D,zs=new D,Hs=new D,Ii=new D,Pi=new D,cs=new D,Nr=new D,Po=new D,Lo=new D,ls=new D;function pc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ls.fromArray(i,r);let a=s.x*Math.abs(ls.x)+s.y*Math.abs(ls.y)+s.z*Math.abs(ls.z),c=e.dot(ls),l=t.dot(ls),h=n.dot(ls);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Cm=new Wt,Ur=new D,mc=new D,Zt=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Cm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ur.subVectors(e,this.center);let t=Ur.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ur,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ur.copy(e.center).add(mc)),this.expandByPoint(Ur.copy(e.center).sub(mc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ii=new D,gc=new D,Do=new D,Li=new D,xc=new D,No=new D,_c=new D,Ms=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ii.copy(this.origin).addScaledVector(this.direction,t),ii.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){gc.copy(e).add(t).multiplyScalar(.5),Do.copy(t).sub(e).normalize(),Li.copy(this.origin).sub(gc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Do),a=Li.dot(this.direction),c=-Li.dot(Do),l=Li.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(gc).addScaledVector(Do,d),f}intersectSphere(e,t){ii.subVectors(e.center,this.origin);let n=ii.dot(this.direction),s=ii.dot(ii)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ii)!==null}intersectTriangle(e,t,n,s,r){xc.subVectors(t,e),No.subVectors(n,e),_c.crossVectors(xc,No);let o=this.direction.dot(_c),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Li.subVectors(this.origin,e);let c=a*this.direction.dot(No.crossVectors(Li,No));if(c<0)return null;let l=a*this.direction.dot(xc.cross(Li));if(l<0||c+l>o)return null;let h=-a*Li.dot(_c);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ve=class i{constructor(e,t,n,s,r,o,a,c,l,h,u,d,f,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,d,f,g,x,m)}set(e,t,n,s,r,o,a,c,l,h,u,d,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Vs.setFromMatrixColumn(e,0).length(),r=1/Vs.setFromMatrixColumn(e,1).length(),o=1/Vs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,g=a*h,x=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,g=l*h,x=l*u;t[0]=d+x*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=x+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,g=l*h,x=l*u;t[0]=d-x*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,f=o*u,g=a*h,x=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+x,t[1]=c*u,t[5]=x*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=x-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-x*u}else if(e.order==="XZY"){let d=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+x,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Im,e,Pm)}lookAt(e,t,n){let s=this.elements;return Mn.subVectors(e,t),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Di.crossVectors(n,Mn),Di.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Di.crossVectors(n,Mn)),Di.normalize(),Uo.crossVectors(Mn,Di),s[0]=Di.x,s[4]=Uo.x,s[8]=Mn.x,s[1]=Di.y,s[5]=Uo.y,s[9]=Mn.y,s[2]=Di.z,s[6]=Uo.z,s[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],M=n[3],b=n[7],_=n[11],I=n[15],T=s[0],R=s[4],P=s[8],S=s[12],v=s[1],L=s[5],H=s[9],V=s[13],k=s[2],Z=s[6],X=s[10],ie=s[14],q=s[3],le=s[7],xe=s[11],Re=s[15];return r[0]=o*T+a*v+c*k+l*q,r[4]=o*R+a*L+c*Z+l*le,r[8]=o*P+a*H+c*X+l*xe,r[12]=o*S+a*V+c*ie+l*Re,r[1]=h*T+u*v+d*k+f*q,r[5]=h*R+u*L+d*Z+f*le,r[9]=h*P+u*H+d*X+f*xe,r[13]=h*S+u*V+d*ie+f*Re,r[2]=g*T+x*v+m*k+p*q,r[6]=g*R+x*L+m*Z+p*le,r[10]=g*P+x*H+m*X+p*xe,r[14]=g*S+x*V+m*ie+p*Re,r[3]=M*T+b*v+_*k+I*q,r[7]=M*R+b*L+_*Z+I*le,r[11]=M*P+b*H+_*X+I*xe,r[15]=M*S+b*V+_*ie+I*Re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+x*(+t*c*f-t*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+m*(+t*l*u-t*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-t*c*u+t*a*d+s*o*u-n*o*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],M=u*m*l-x*d*l+x*c*f-a*m*f-u*c*p+a*d*p,b=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,_=h*x*l-g*u*l+g*a*f-o*x*f-h*a*p+o*u*p,I=g*u*c-h*x*c-g*a*d+o*x*d+h*a*m-o*u*m,T=t*M+n*b+s*_+r*I;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/T;return e[0]=M*R,e[1]=(x*d*r-u*m*r-x*s*f+n*m*f+u*s*p-n*d*p)*R,e[2]=(a*m*r-x*c*r+x*s*l-n*m*l-a*s*p+n*c*p)*R,e[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*R,e[4]=b*R,e[5]=(h*m*r-g*d*r+g*s*f-t*m*f-h*s*p+t*d*p)*R,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*p-t*c*p)*R,e[7]=(o*d*r-h*c*r+h*s*l-t*d*l-o*s*f+t*c*f)*R,e[8]=_*R,e[9]=(g*u*r-h*x*r-g*n*f+t*x*f+h*n*p-t*u*p)*R,e[10]=(o*x*r-g*a*r+g*n*l-t*x*l-o*n*p+t*a*p)*R,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*f-t*a*f)*R,e[12]=I*R,e[13]=(h*x*s-g*u*s+g*n*d-t*x*d-h*n*m+t*u*m)*R,e[14]=(g*a*s-o*x*s-g*n*c+t*x*c+o*n*m-t*a*m)*R,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*d+t*a*d)*R,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,x=o*h,m=o*u,p=a*u,M=c*l,b=c*h,_=c*u,I=n.x,T=n.y,R=n.z;return s[0]=(1-(x+p))*I,s[1]=(f+_)*I,s[2]=(g-b)*I,s[3]=0,s[4]=(f-_)*T,s[5]=(1-(d+p))*T,s[6]=(m+M)*T,s[7]=0,s[8]=(g+b)*R,s[9]=(m-M)*R,s[10]=(1-(d+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Vs.set(s[0],s[1],s[2]).length(),o=Vs.set(s[4],s[5],s[6]).length(),a=Vs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],kn.copy(this);let l=1/r,h=1/o,u=1/a;return kn.elements[0]*=l,kn.elements[1]*=l,kn.elements[2]*=l,kn.elements[4]*=h,kn.elements[5]*=h,kn.elements[6]*=h,kn.elements[8]*=u,kn.elements[9]*=u,kn.elements[10]*=u,t.setFromRotationMatrix(kn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=hi){let c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),f,g;if(a===hi)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ha)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=hi){let c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(o-r),d=(t+e)*l,f=(n+s)*h,g,x;if(a===hi)g=(o+r)*u,x=-2*u;else if(a===ha)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Vs=new D,kn=new Ve,Im=new D(0,0,0),Pm=new D(1,1,1),Di=new D,Uo=new D,Mn=new D,Ju=new Ve,ju=new gn,wn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(tn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-tn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(tn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ju.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ju,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ju.setFromEuler(this),this.setFromQuaternion(ju,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};wn.DEFAULT_ORDER="XYZ";var jr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Lm=0,Qu=new D,Gs=new gn,si=new Ve,Oo=new D,Or=new D,Dm=new D,Nm=new gn,ed=new D(1,0,0),td=new D(0,1,0),nd=new D(0,0,1),id={type:"added"},Um={type:"removed"},Ws={type:"childadded",child:null},yc={type:"childremoved",child:null},Lt=class i extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lm++}),this.uuid=Vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new wn,n=new gn,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ve},normalMatrix:{value:new Ze}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.premultiply(Gs),this}rotateX(e){return this.rotateOnAxis(ed,e)}rotateY(e){return this.rotateOnAxis(td,e)}rotateZ(e){return this.rotateOnAxis(nd,e)}translateOnAxis(e,t){return Qu.copy(e).applyQuaternion(this.quaternion),this.position.add(Qu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ed,e)}translateY(e){return this.translateOnAxis(td,e)}translateZ(e){return this.translateOnAxis(nd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Oo.copy(e):Oo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(Or,Oo,this.up):si.lookAt(Oo,Or,this.up),this.quaternion.setFromRotationMatrix(si),s&&(si.extractRotation(s.matrixWorld),Gs.setFromRotationMatrix(si),this.quaternion.premultiply(Gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(id),Ws.child=e,this.dispatchEvent(Ws),Ws.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Um),yc.child=e,this.dispatchEvent(yc),yc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),si.multiply(e.parent.matrixWorld)),e.applyMatrix4(si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(id),Ws.child=e,this.dispatchEvent(Ws),Ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,e,Dm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,Nm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Lt.DEFAULT_UP=new D(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var zn=new D,ri=new D,vc=new D,oi=new D,Xs=new D,qs=new D,sd=new D,Mc=new D,bc=new D,Sc=new D,wc=new ut,Ec=new ut,Tc=new ut,_s=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),zn.subVectors(e,t),s.cross(zn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){zn.subVectors(s,t),ri.subVectors(n,t),vc.subVectors(e,t);let o=zn.dot(zn),a=zn.dot(ri),c=zn.dot(vc),l=ri.dot(ri),h=ri.dot(vc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,oi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,oi.x),c.addScaledVector(o,oi.y),c.addScaledVector(a,oi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return wc.setScalar(0),Ec.setScalar(0),Tc.setScalar(0),wc.fromBufferAttribute(e,t),Ec.fromBufferAttribute(e,n),Tc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(wc,r.x),o.addScaledVector(Ec,r.y),o.addScaledVector(Tc,r.z),o}static isFrontFacing(e,t,n,s){return zn.subVectors(n,t),ri.subVectors(e,t),zn.cross(ri).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),zn.cross(ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Xs.subVectors(s,n),qs.subVectors(r,n),Mc.subVectors(e,n);let c=Xs.dot(Mc),l=qs.dot(Mc);if(c<=0&&l<=0)return t.copy(n);bc.subVectors(e,s);let h=Xs.dot(bc),u=qs.dot(bc);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Xs,o);Sc.subVectors(e,r);let f=Xs.dot(Sc),g=qs.dot(Sc);if(g>=0&&f<=g)return t.copy(r);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(qs,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return sd.subVectors(r,s),a=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(sd,a);let p=1/(m+x+d);return o=x*p,a=d*p,t.copy(n).addScaledVector(Xs,o).addScaledVector(qs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},_f={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},Fo={h:0,s:0,l:0};function Ac(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ve=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=je.workingColorSpace){if(e=Mh(e,1),t=tn(t,0,1),n=tn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ac(o,r,e+1/3),this.g=Ac(o,r,e),this.b=Ac(o,r,e-1/3)}return je.toWorkingColorSpace(this,s),this}setStyle(e,t=Ut){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){let n=_f[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ui(e.r),this.g=ui(e.g),this.b=ui(e.b),this}copyLinearToSRGB(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return je.fromWorkingColorSpace(Qt.copy(this),e),Math.round(tn(Qt.r*255,0,255))*65536+Math.round(tn(Qt.g*255,0,255))*256+Math.round(tn(Qt.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.fromWorkingColorSpace(Qt.copy(this),t);let n=Qt.r,s=Qt.g,r=Qt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.fromWorkingColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=Ut){je.fromWorkingColorSpace(Qt.copy(this),e);let t=Qt.r,n=Qt.g,s=Qt.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ni),this.setHSL(Ni.h+e,Ni.s+t,Ni.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ni),e.getHSL(Fo);let n=Yr(Ni.h,Fo.h,t),s=Yr(Ni.s,Fo.s,t),r=Yr(Ni.l,Fo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qt=new ve;ve.NAMES=_f;var Om=0,xn=class extends zi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Om++}),this.uuid=Vn(),this.name="",this.blending=er,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xc,this.blendDst=qc,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ve(0,0,0),this.blendAlpha=0,this.depthFunc=sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fs,this.stencilZFail=Fs,this.stencilZPass=Fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==er&&(n.blending=this.blending),this.side!==Kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xc&&(n.blendSrc=this.blendSrc),this.blendDst!==qc&&(n.blendDst=this.blendDst),this.blendEquation!==xs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==sr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Fs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Fs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},gt=class extends xn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=ah,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var kt=new D,Bo=new Ne,vt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Rl,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Bo.fromBufferAttribute(this,t),Bo.applyMatrix3(e),this.setXY(t,Bo.x,Bo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hn(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hn(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hn(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array),r=yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rl&&(e.usage=this.usage),e}};var fa=class extends vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var pa=class extends vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var tt=class extends vt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Fm=0,Cn=new Ve,Rc=new Lt,Ys=new D,bn=new Wt,Fr=new Wt,Gt=new D,dt=class i extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fm++}),this.uuid=Vn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xf(e)?pa:fa)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,t,n){return Cn.makeTranslation(e,t,n),this.applyMatrix4(Cn),this}scale(e,t,n){return Cn.makeScale(e,t,n),this.applyMatrix4(Cn),this}lookAt(e){return Rc.lookAt(e),Rc.updateMatrix(),this.applyMatrix4(Rc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ys).negate(),this.translate(Ys.x,Ys.y,Ys.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new tt(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];bn.setFromBufferAttribute(r),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(bn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Fr.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(bn.min,Fr.min),bn.expandByPoint(Gt),Gt.addVectors(bn.max,Fr.max),bn.expandByPoint(Gt)):(bn.expandByPoint(Fr.min),bn.expandByPoint(Fr.max))}bn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Gt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Gt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Gt.fromBufferAttribute(a,l),c&&(Ys.fromBufferAttribute(e,l),Gt.add(Ys)),s=Math.max(s,n.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new D,c[P]=new D;let l=new D,h=new D,u=new D,d=new Ne,f=new Ne,g=new Ne,x=new D,m=new D;function p(P,S,v){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,v),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,v),h.sub(l),u.sub(l),f.sub(d),g.sub(d);let L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(L),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(L),a[P].add(x),a[S].add(x),a[v].add(x),c[P].add(m),c[S].add(m),c[v].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let P=0,S=M.length;P<S;++P){let v=M[P],L=v.start,H=v.count;for(let V=L,k=L+H;V<k;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let b=new D,_=new D,I=new D,T=new D;function R(P){I.fromBufferAttribute(s,P),T.copy(I);let S=a[P];b.copy(S),b.sub(I.multiplyScalar(I.dot(S))).normalize(),_.crossVectors(T,S);let L=_.dot(c[P])<0?-1:1;o.setXYZW(P,b.x,b.y,b.z,L)}for(let P=0,S=M.length;P<S;++P){let v=M[P],L=v.start,H=v.count;for(let V=L,k=L+H;V<k;V+=3)R(e.getX(V+0)),R(e.getX(V+1)),R(e.getX(V+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new vt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new D,r=new D,o=new D,a=new D,c=new D,l=new D,h=new D,u=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new vt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},rd=new Ve,hs=new Ms,ko=new Zt,od=new D,zo=new D,Ho=new D,Vo=new D,Cc=new D,Go=new D,ad=new D,Wo=new D,se=class extends Lt{constructor(e=new dt,t=new gt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Go.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Cc.fromBufferAttribute(u,e),o?Go.addScaledVector(Cc,h):Go.addScaledVector(Cc.sub(t),h))}t.add(Go)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ko.copy(n.boundingSphere),ko.applyMatrix4(r),hs.copy(e.ray).recast(e.near),!(ko.containsPoint(hs.origin)===!1&&(hs.intersectSphere(ko,od)===null||hs.origin.distanceToSquared(od)>(e.far-e.near)**2))&&(rd.copy(r).invert(),hs.copy(e.ray).applyMatrix4(rd),!(n.boundingBox!==null&&hs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,hs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),b=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=M,I=b;_<I;_+=3){let T=a.getX(_),R=a.getX(_+1),P=a.getX(_+2);s=Xo(this,p,e,n,l,h,u,T,R,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let M=a.getX(m),b=a.getX(m+1),_=a.getX(m+2);s=Xo(this,o,e,n,l,h,u,M,b,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),b=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=M,I=b;_<I;_+=3){let T=_,R=_+1,P=_+2;s=Xo(this,p,e,n,l,h,u,T,R,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let M=m,b=m+1,_=m+2;s=Xo(this,o,e,n,l,h,u,M,b,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Bm(i,e,t,n,s,r,o,a){let c;if(e.side===$t?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Kn,a),c===null)return null;Wo.copy(a),Wo.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Wo);return l<t.near||l>t.far?null:{distance:l,point:Wo.clone(),object:i}}function Xo(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,zo),i.getVertexPosition(c,Ho),i.getVertexPosition(l,Vo);let h=Bm(i,e,t,n,zo,Ho,Vo,ad);if(h){let u=new D;_s.getBarycoord(ad,zo,Ho,Vo,u),s&&(h.uv=_s.getInterpolatedAttribute(s,a,c,l,u,new Ne)),r&&(h.uv1=_s.getInterpolatedAttribute(r,a,c,l,u,new Ne)),o&&(h.normal=_s.getInterpolatedAttribute(o,a,c,l,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new D,materialIndex:0};_s.getNormal(zo,Ho,Vo,d.normal),h.face=d,h.barycoord=u}return h}var pi=class i extends dt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new tt(l,3)),this.setAttribute("normal",new tt(h,3)),this.setAttribute("uv",new tt(u,2));function g(x,m,p,M,b,_,I,T,R,P,S){let v=_/R,L=I/P,H=_/2,V=I/2,k=T/2,Z=R+1,X=P+1,ie=0,q=0,le=new D;for(let xe=0;xe<X;xe++){let Re=xe*L-V;for(let ze=0;ze<Z;ze++){let lt=ze*v-H;le[x]=lt*M,le[m]=Re*b,le[p]=k,l.push(le.x,le.y,le.z),le[x]=0,le[m]=0,le[p]=T>0?1:-1,h.push(le.x,le.y,le.z),u.push(ze/R),u.push(1-xe/P),ie+=1}}for(let xe=0;xe<P;xe++)for(let Re=0;Re<R;Re++){let ze=d+Re+Z*xe,lt=d+Re+Z*(xe+1),ee=d+(Re+1)+Z*(xe+1),re=d+(Re+1)+Z*xe;c.push(ze,lt,re),c.push(lt,ee,re),q+=6}a.addGroup(f,q,S),f+=q,d+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function dr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function un(i){let e={};for(let t=0;t<i.length;t++){let n=dr(i[t]);for(let s in n)e[s]=n[s]}return e}function km(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function yf(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}var Ji={clone:dr,merge:un},zm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ft=class extends xn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zm,this.fragmentShader=Hm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=dr(e.uniforms),this.uniformsGroups=km(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ma=class extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=hi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ui=new D,cd=new Ne,ld=new Ne,Ot=class extends ma{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ur*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(qr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ur*2*Math.atan(Math.tan(qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z)}getViewSize(e,t){return this.getViewBounds(e,cd,ld),t.subVectors(ld,cd)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(qr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},$s=-90,Zs=1,Ll=class extends Lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ot($s,Zs,e,t);s.layers=this.layers,this.add(s);let r=new Ot($s,Zs,e,t);r.layers=this.layers,this.add(r);let o=new Ot($s,Zs,e,t);o.layers=this.layers,this.add(o);let a=new Ot($s,Zs,e,t);a.layers=this.layers,this.add(a);let c=new Ot($s,Zs,e,t);c.layers=this.layers,this.add(c);let l=new Ot($s,Zs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===hi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ha)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ga=class extends Xt{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:rr,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Dl=class extends Kt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ga(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:pn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new pi(5,5,5),r=new Ft({name:"CubemapFromEquirect",uniforms:dr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$t,blending:Zn});r.uniforms.tEquirect.value=t;let o=new se(s,r),a=t.minFilter;return t.minFilter===$n&&(t.minFilter=pn),new Ll(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Ic=new D,Vm=new D,Gm=new Ze,li=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ic.subVectors(n,t).cross(Vm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ic),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Gm.getNormalMatrix(e),s=this.coplanarPoint(Ic).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},us=new Zt,qo=new D,fr=class{constructor(e=new li,t=new li,n=new li,s=new li,r=new li,o=new li){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=hi){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],x=s[10],m=s[11],p=s[12],M=s[13],b=s[14],_=s[15];if(n[0].setComponents(c-r,d-l,m-f,_-p).normalize(),n[1].setComponents(c+r,d+l,m+f,_+p).normalize(),n[2].setComponents(c+o,d+h,m+g,_+M).normalize(),n[3].setComponents(c-o,d-h,m-g,_-M).normalize(),n[4].setComponents(c-a,d-u,m-x,_-b).normalize(),t===hi)n[5].setComponents(c+a,d+u,m+x,_+b).normalize();else if(t===ha)n[5].setComponents(a,u,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(e){return us.center.set(0,0,0),us.radius=.7071067811865476,us.applyMatrix4(e.matrixWorld),this.intersectsSphere(us)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(qo.x=s.normal.x>0?e.max.x:e.min.x,qo.y=s.normal.y>0?e.max.y:e.min.y,qo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(qo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function vf(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Wm(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Pn=class i extends dt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let M=p*d-o;for(let b=0;b<l;b++){let _=b*u-r;g.push(_,-M,0),x.push(0,0,1),m.push(b/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){let b=M+l*p,_=M+l*(p+1),I=M+1+l*(p+1),T=M+1+l*p;f.push(b,_,T),f.push(_,I,T)}this.setIndex(f),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(x,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Xm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qm=`#ifdef USE_ALPHAHASH
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
#endif`,Ym=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$m=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Km=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jm=`#ifdef USE_AOMAP
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
#endif`,jm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qm=`#ifdef USE_BATCHING
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
#endif`,eg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ng=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ig=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sg=`#ifdef USE_IRIDESCENCE
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
#endif`,rg=`#ifdef USE_BUMPMAP
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
#endif`,og=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ag=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ug=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,pg=`#define PI 3.141592653589793
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
} // validated`,mg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gg=`vec3 transformedNormal = objectNormal;
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
#endif`,xg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_g=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mg="gl_FragColor = linearToOutputTexel( gl_FragColor );",bg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sg=`#ifdef USE_ENVMAP
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
#endif`,wg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Eg=`#ifdef USE_ENVMAP
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
#endif`,Tg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ag=`#ifdef USE_ENVMAP
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
#endif`,Rg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ig=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lg=`#ifdef USE_GRADIENTMAP
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
}`,Dg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ng=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ug=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Og=`uniform bool receiveShadow;
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
#endif`,Fg=`#ifdef USE_ENVMAP
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
#endif`,Bg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vg=`PhysicalMaterial material;
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
#endif`,Gg=`struct PhysicalMaterial {
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
}`,Wg=`
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
#endif`,Xg=`#if defined( RE_IndirectDiffuse )
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
#endif`,qg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$g=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,e0=`#if defined( USE_POINTS_UV )
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
#endif`,t0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,n0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,i0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,s0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,r0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o0=`#ifdef USE_MORPHTARGETS
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
#endif`,a0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,c0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,l0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,h0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,f0=`#ifdef USE_NORMALMAP
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
#endif`,p0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,m0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,g0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,x0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,y0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,v0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,M0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,b0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,S0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,w0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,E0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,T0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,A0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,R0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,C0=`float getShadowMask() {
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
}`,I0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,P0=`#ifdef USE_SKINNING
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
#endif`,L0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,D0=`#ifdef USE_SKINNING
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
#endif`,N0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,U0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,O0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,F0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,B0=`#ifdef USE_TRANSMISSION
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
#endif`,k0=`#ifdef USE_TRANSMISSION
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
#endif`,z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,W0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,X0=`uniform sampler2D t2D;
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
}`,q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K0=`#include <common>
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
}`,J0=`#if DEPTH_PACKING == 3200
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
}`,j0=`#define DISTANCE
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
}`,Q0=`#define DISTANCE
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
}`,ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nx=`uniform float scale;
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
}`,ix=`uniform vec3 diffuse;
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
}`,sx=`#include <common>
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
}`,rx=`uniform vec3 diffuse;
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
}`,ox=`#define LAMBERT
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
}`,ax=`#define LAMBERT
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
}`,cx=`#define MATCAP
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
}`,lx=`#define MATCAP
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
}`,hx=`#define NORMAL
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
}`,ux=`#define NORMAL
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
}`,dx=`#define PHONG
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
}`,fx=`#define PHONG
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
}`,px=`#define STANDARD
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
}`,mx=`#define STANDARD
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
}`,gx=`#define TOON
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
}`,xx=`#define TOON
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
}`,_x=`uniform float size;
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
}`,yx=`uniform vec3 diffuse;
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
}`,vx=`#include <common>
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
}`,Mx=`uniform vec3 color;
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
}`,bx=`uniform float rotation;
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
}`,Sx=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:Xm,alphahash_pars_fragment:qm,alphamap_fragment:Ym,alphamap_pars_fragment:$m,alphatest_fragment:Zm,alphatest_pars_fragment:Km,aomap_fragment:Jm,aomap_pars_fragment:jm,batching_pars_vertex:Qm,batching_vertex:eg,begin_vertex:tg,beginnormal_vertex:ng,bsdfs:ig,iridescence_fragment:sg,bumpmap_pars_fragment:rg,clipping_planes_fragment:og,clipping_planes_pars_fragment:ag,clipping_planes_pars_vertex:cg,clipping_planes_vertex:lg,color_fragment:hg,color_pars_fragment:ug,color_pars_vertex:dg,color_vertex:fg,common:pg,cube_uv_reflection_fragment:mg,defaultnormal_vertex:gg,displacementmap_pars_vertex:xg,displacementmap_vertex:_g,emissivemap_fragment:yg,emissivemap_pars_fragment:vg,colorspace_fragment:Mg,colorspace_pars_fragment:bg,envmap_fragment:Sg,envmap_common_pars_fragment:wg,envmap_pars_fragment:Eg,envmap_pars_vertex:Tg,envmap_physical_pars_fragment:Fg,envmap_vertex:Ag,fog_vertex:Rg,fog_pars_vertex:Cg,fog_fragment:Ig,fog_pars_fragment:Pg,gradientmap_pars_fragment:Lg,lightmap_pars_fragment:Dg,lights_lambert_fragment:Ng,lights_lambert_pars_fragment:Ug,lights_pars_begin:Og,lights_toon_fragment:Bg,lights_toon_pars_fragment:kg,lights_phong_fragment:zg,lights_phong_pars_fragment:Hg,lights_physical_fragment:Vg,lights_physical_pars_fragment:Gg,lights_fragment_begin:Wg,lights_fragment_maps:Xg,lights_fragment_end:qg,logdepthbuf_fragment:Yg,logdepthbuf_pars_fragment:$g,logdepthbuf_pars_vertex:Zg,logdepthbuf_vertex:Kg,map_fragment:Jg,map_pars_fragment:jg,map_particle_fragment:Qg,map_particle_pars_fragment:e0,metalnessmap_fragment:t0,metalnessmap_pars_fragment:n0,morphinstance_vertex:i0,morphcolor_vertex:s0,morphnormal_vertex:r0,morphtarget_pars_vertex:o0,morphtarget_vertex:a0,normal_fragment_begin:c0,normal_fragment_maps:l0,normal_pars_fragment:h0,normal_pars_vertex:u0,normal_vertex:d0,normalmap_pars_fragment:f0,clearcoat_normal_fragment_begin:p0,clearcoat_normal_fragment_maps:m0,clearcoat_pars_fragment:g0,iridescence_pars_fragment:x0,opaque_fragment:_0,packing:y0,premultiplied_alpha_fragment:v0,project_vertex:M0,dithering_fragment:b0,dithering_pars_fragment:S0,roughnessmap_fragment:w0,roughnessmap_pars_fragment:E0,shadowmap_pars_fragment:T0,shadowmap_pars_vertex:A0,shadowmap_vertex:R0,shadowmask_pars_fragment:C0,skinbase_vertex:I0,skinning_pars_vertex:P0,skinning_vertex:L0,skinnormal_vertex:D0,specularmap_fragment:N0,specularmap_pars_fragment:U0,tonemapping_fragment:O0,tonemapping_pars_fragment:F0,transmission_fragment:B0,transmission_pars_fragment:k0,uv_pars_fragment:z0,uv_pars_vertex:H0,uv_vertex:V0,worldpos_vertex:G0,background_vert:W0,background_frag:X0,backgroundCube_vert:q0,backgroundCube_frag:Y0,cube_vert:$0,cube_frag:Z0,depth_vert:K0,depth_frag:J0,distanceRGBA_vert:j0,distanceRGBA_frag:Q0,equirect_vert:ex,equirect_frag:tx,linedashed_vert:nx,linedashed_frag:ix,meshbasic_vert:sx,meshbasic_frag:rx,meshlambert_vert:ox,meshlambert_frag:ax,meshmatcap_vert:cx,meshmatcap_frag:lx,meshnormal_vert:hx,meshnormal_frag:ux,meshphong_vert:dx,meshphong_frag:fx,meshphysical_vert:px,meshphysical_frag:mx,meshtoon_vert:gx,meshtoon_frag:xx,points_vert:_x,points_frag:yx,shadow_vert:vx,shadow_frag:Mx,sprite_vert:bx,sprite_frag:Sx},ue={common:{diffuse:{value:new ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new ve(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Yn={basic:{uniforms:un([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:un([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new ve(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:un([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:un([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:un([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new ve(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:un([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:un([ue.points,ue.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:un([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:un([ue.common,ue.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:un([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:un([ue.sprite,ue.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:un([ue.common,ue.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:un([ue.lights,ue.fog,{color:{value:new ve(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Yn.physical={uniforms:un([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new ve(0)},specularColor:{value:new ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};var Yo={r:0,b:0,g:0},ds=new wn,wx=new Ve;function Ex(i,e,t,n,s,r,o){let a=new ve(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(M){let b=M.isScene===!0?M.background:null;return b&&b.isTexture&&(b=(M.backgroundBlurriness>0?t:e).get(b)),b}function x(M){let b=!1,_=g(M);_===null?p(a,c):_&&_.isColor&&(p(_,1),b=!0);let I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,b){let _=g(b);_&&(_.isCubeTexture||_.mapping===Fa)?(h===void 0&&(h=new se(new pi(1,1,1),new Ft({name:"BackgroundCubeMaterial",uniforms:dr(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ds.copy(b.backgroundRotation),ds.x*=-1,ds.y*=-1,ds.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(wx.makeRotationFromEuler(ds)),h.material.toneMapped=je.getTransfer(_.colorSpace)!==mt,(u!==_||d!==_.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new se(new Pn(2,2),new Ft({name:"BackgroundMaterial",uniforms:dr(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=je.getTransfer(_.colorSpace)!==mt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,b){M.getRGB(Yo,yf(i)),n.buffers.color.setClear(Yo.r,Yo.g,Yo.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(M,b=1){a.set(M),c=b,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(a,c)},render:x,addToRenderList:m}}function Tx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(v,L,H,V,k){let Z=!1,X=u(V,H,L);r!==X&&(r=X,l(r.object)),Z=f(v,V,H,k),Z&&g(v,V,H,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,_(v,L,H,V),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,L,H){let V=H.wireframe===!0,k=n[v.id];k===void 0&&(k={},n[v.id]=k);let Z=k[L.id];Z===void 0&&(Z={},k[L.id]=Z);let X=Z[V];return X===void 0&&(X=d(c()),Z[V]=X),X}function d(v){let L=[],H=[],V=[];for(let k=0;k<t;k++)L[k]=0,H[k]=0,V[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:H,attributeDivisors:V,object:v,attributes:{},index:null}}function f(v,L,H,V){let k=r.attributes,Z=L.attributes,X=0,ie=H.getAttributes();for(let q in ie)if(ie[q].location>=0){let xe=k[q],Re=Z[q];if(Re===void 0&&(q==="instanceMatrix"&&v.instanceMatrix&&(Re=v.instanceMatrix),q==="instanceColor"&&v.instanceColor&&(Re=v.instanceColor)),xe===void 0||xe.attribute!==Re||Re&&xe.data!==Re.data)return!0;X++}return r.attributesNum!==X||r.index!==V}function g(v,L,H,V){let k={},Z=L.attributes,X=0,ie=H.getAttributes();for(let q in ie)if(ie[q].location>=0){let xe=Z[q];xe===void 0&&(q==="instanceMatrix"&&v.instanceMatrix&&(xe=v.instanceMatrix),q==="instanceColor"&&v.instanceColor&&(xe=v.instanceColor));let Re={};Re.attribute=xe,xe&&xe.data&&(Re.data=xe.data),k[q]=Re,X++}r.attributes=k,r.attributesNum=X,r.index=V}function x(){let v=r.newAttributes;for(let L=0,H=v.length;L<H;L++)v[L]=0}function m(v){p(v,0)}function p(v,L){let H=r.newAttributes,V=r.enabledAttributes,k=r.attributeDivisors;H[v]=1,V[v]===0&&(i.enableVertexAttribArray(v),V[v]=1),k[v]!==L&&(i.vertexAttribDivisor(v,L),k[v]=L)}function M(){let v=r.newAttributes,L=r.enabledAttributes;for(let H=0,V=L.length;H<V;H++)L[H]!==v[H]&&(i.disableVertexAttribArray(H),L[H]=0)}function b(v,L,H,V,k,Z,X){X===!0?i.vertexAttribIPointer(v,L,H,k,Z):i.vertexAttribPointer(v,L,H,V,k,Z)}function _(v,L,H,V){x();let k=V.attributes,Z=H.getAttributes(),X=L.defaultAttributeValues;for(let ie in Z){let q=Z[ie];if(q.location>=0){let le=k[ie];if(le===void 0&&(ie==="instanceMatrix"&&v.instanceMatrix&&(le=v.instanceMatrix),ie==="instanceColor"&&v.instanceColor&&(le=v.instanceColor)),le!==void 0){let xe=le.normalized,Re=le.itemSize,ze=e.get(le);if(ze===void 0)continue;let lt=ze.buffer,ee=ze.type,re=ze.bytesPerElement,be=ee===i.INT||ee===i.UNSIGNED_INT||le.gpuType===ph;if(le.isInterleavedBufferAttribute){let de=le.data,Be=de.stride,Ge=le.offset;if(de.isInstancedInterleavedBuffer){for(let N=0;N<q.locationSize;N++)p(q.location+N,de.meshPerAttribute);v.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let N=0;N<q.locationSize;N++)m(q.location+N);i.bindBuffer(i.ARRAY_BUFFER,lt);for(let N=0;N<q.locationSize;N++)b(q.location+N,Re/q.locationSize,ee,xe,Be*re,(Ge+Re/q.locationSize*N)*re,be)}else{if(le.isInstancedBufferAttribute){for(let de=0;de<q.locationSize;de++)p(q.location+de,le.meshPerAttribute);v.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let de=0;de<q.locationSize;de++)m(q.location+de);i.bindBuffer(i.ARRAY_BUFFER,lt);for(let de=0;de<q.locationSize;de++)b(q.location+de,Re/q.locationSize,ee,xe,Re*re,Re/q.locationSize*de*re,be)}}else if(X!==void 0){let xe=X[ie];if(xe!==void 0)switch(xe.length){case 2:i.vertexAttrib2fv(q.location,xe);break;case 3:i.vertexAttrib3fv(q.location,xe);break;case 4:i.vertexAttrib4fv(q.location,xe);break;default:i.vertexAttrib1fv(q.location,xe)}}}}M()}function I(){P();for(let v in n){let L=n[v];for(let H in L){let V=L[H];for(let k in V)h(V[k].object),delete V[k];delete L[H]}delete n[v]}}function T(v){if(n[v.id]===void 0)return;let L=n[v.id];for(let H in L){let V=L[H];for(let k in V)h(V[k].object),delete V[k];delete L[H]}delete n[v.id]}function R(v){for(let L in n){let H=n[L];if(H[v.id]===void 0)continue;let V=H[v.id];for(let k in V)h(V[k].object),delete V[k];delete H[v.id]}}function P(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:S,dispose:I,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function Ax(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Rx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==mn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let P=R===Tn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==fi&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Sn&&!P)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:_,vertexTextures:I,maxSamples:T}}function Cx(i){let e=this,t=null,n=0,s=!1,r=!1,o=new li,a=new Ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let M=r?0:n,b=M*4,_=p.clippingState||null;c.value=_,_=h(g,d,b,f);for(let I=0;I!==b;++I)_[I]=t[I];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=f+x*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,_=f;b!==x;++b,_+=4)o.copy(u[b]).applyMatrix4(M,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Ix(i){let e=new WeakMap;function t(o,a){return a===el?o.mapping=rr:a===tl&&(o.mapping=or),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===el||a===tl)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Dl(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Hi=class extends ma{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Qs=4,hd=[.125,.215,.35,.446,.526,.582],ys=20,Pc=new Hi,ud=new ve,Lc=null,Dc=0,Nc=0,Uc=!1,gs=(1+Math.sqrt(5))/2,Ks=1/gs,dd=[new D(-gs,Ks,0),new D(gs,Ks,0),new D(-Ks,0,gs),new D(Ks,0,gs),new D(0,gs,-Ks),new D(0,gs,Ks),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],pr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Lc=this._renderer.getRenderTarget(),Dc=this._renderer.getActiveCubeFace(),Nc=this._renderer.getActiveMipmapLevel(),Uc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=md(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Lc,Dc,Nc),this._renderer.xr.enabled=Uc,e.scissorTest=!1,$o(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===rr||e.mapping===or?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Lc=this._renderer.getRenderTarget(),Dc=this._renderer.getActiveCubeFace(),Nc=this._renderer.getActiveMipmapLevel(),Uc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:Tn,format:mn,colorSpace:an,depthBuffer:!1},s=fd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fd(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Px(r)),this._blurMaterial=Lx(r,e,t)}return s}_compileMaterial(e){let t=new se(this._lodPlanes[0],e);this._renderer.compile(t,Pc)}_sceneToCubeUV(e,t,n,s){let a=new Ot(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(ud),h.toneMapping=Bi,h.autoClear=!1;let f=new gt({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1}),g=new se(new pi,f),x=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,x=!0):(f.color.copy(ud),x=!0);for(let p=0;p<6;p++){let M=p%3;M===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):M===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let b=this._cubeSize;$o(s,M*b,p>2?b:0,b,b),h.setRenderTarget(s),x&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===rr||e.mapping===or;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=md()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new se(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;$o(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Pc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=dd[(s-r-1)%dd.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new se(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ys-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):ys;m>ys&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ys}`);let p=[],M=0;for(let R=0;R<ys;++R){let P=R/x,S=Math.exp(-P*P/2);p.push(S),R===0?M+=S:R<m&&(M+=2*S)}for(let R=0;R<p.length;R++)p[R]=p[R]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;let _=this._sizeLods[s],I=3*_*(s>b-Qs?s-b+Qs:0),T=4*(this._cubeSize-_);$o(t,I,T,3*_,2*_),c.setRenderTarget(t),c.render(u,Pc)}};function Px(i){let e=[],t=[],n=[],s=i,r=i-Qs+1+hd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-Qs?c=hd[o-i+Qs-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,M=new Float32Array(x*g*f),b=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let T=0;T<f;T++){let R=T%3*2/3-1,P=T>2?0:-1,S=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];M.set(S,x*g*T),b.set(d,m*g*T);let v=[T,T,T,T,T,T];_.set(v,p*g*T)}let I=new dt;I.setAttribute("position",new vt(M,x)),I.setAttribute("uv",new vt(b,m)),I.setAttribute("faceIndex",new vt(_,p)),e.push(I),s>Qs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function fd(i,e,t){let n=new Kt(i,e,t);return n.texture.mapping=Fa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $o(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Lx(i,e,t){let n=new Float32Array(ys),s=new D(0,1,0);return new Ft({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:bh(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function pd(){return new Ft({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bh(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function md(){return new Ft({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function bh(){return`

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
	`}function Dx(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===el||c===tl,h=c===rr||c===or;if(l||h){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new pr(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new pr(i)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Nx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Gr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ux(i,e,t,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)e.update(d[g],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],i.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let M=f.array;x=f.version;for(let b=0,_=M.length;b<_;b+=3){let I=M[b+0],T=M[b+1],R=M[b+2];d.push(I,T,T,R,R,I)}}else if(g!==void 0){let M=g.array;x=g.version;for(let b=0,_=M.length/3-1;b<_;b+=3){let I=b+0,T=b+1,R=b+2;d.push(I,T,T,R,R,I)}}else return;let m=new(xf(d)?pa:fa)(d,1);m.version=x;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Ox(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let M=0;M<g;M++)p+=f[M]*x[M];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Fx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Bx(i,e,t){let n=new WeakMap,s=new ut;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let S=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],b=0;f===!0&&(b=1),g===!0&&(b=2),x===!0&&(b=3);let _=a.attributes.position.count*b,I=1;_>e.maxTextureSize&&(I=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let T=new Float32Array(_*I*4*u),R=new da(T,_,I,u);R.type=Sn,R.needsUpdate=!0;let P=b*4;for(let v=0;v<u;v++){let L=m[v],H=p[v],V=M[v],k=_*I*4*v;for(let Z=0;Z<L.count;Z++){let X=Z*P;f===!0&&(s.fromBufferAttribute(L,Z),T[k+X+0]=s.x,T[k+X+1]=s.y,T[k+X+2]=s.z,T[k+X+3]=0),g===!0&&(s.fromBufferAttribute(H,Z),T[k+X+4]=s.x,T[k+X+5]=s.y,T[k+X+6]=s.z,T[k+X+7]=0),x===!0&&(s.fromBufferAttribute(V,Z),T[k+X+8]=s.x,T[k+X+9]=s.y,T[k+X+10]=s.z,T[k+X+11]=V.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new Ne(_,I)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function kx(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var xa=class extends Xt{constructor(e,t,n,s,r,o,a,c,l,h=tr){if(h!==tr&&h!==cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===tr&&(n=ki),n===void 0&&h===cr&&(n=ar),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:sn,this.minFilter=c!==void 0?c:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Mf=new Xt,gd=new xa(1,1),bf=new da,Sf=new Pl,wf=new ga,xd=[],_d=[],yd=new Float32Array(16),vd=new Float32Array(9),Md=new Float32Array(4);function vr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=xd[s];if(r===void 0&&(r=new Float32Array(s),xd[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Ht(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ha(i,e){let t=_d[e];t===void 0&&(t=new Int32Array(e),_d[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function zx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Hx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2fv(this.addr,e),Vt(t,e)}}function Vx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;i.uniform3fv(this.addr,e),Vt(t,e)}}function Gx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4fv(this.addr,e),Vt(t,e)}}function Wx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,n))return;Md.set(n),i.uniformMatrix2fv(this.addr,!1,Md),Vt(t,n)}}function Xx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,n))return;vd.set(n),i.uniformMatrix3fv(this.addr,!1,vd),Vt(t,n)}}function qx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,n))return;yd.set(n),i.uniformMatrix4fv(this.addr,!1,yd),Vt(t,n)}}function Yx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function $x(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2iv(this.addr,e),Vt(t,e)}}function Zx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;i.uniform3iv(this.addr,e),Vt(t,e)}}function Kx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4iv(this.addr,e),Vt(t,e)}}function Jx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function jx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2uiv(this.addr,e),Vt(t,e)}}function Qx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;i.uniform3uiv(this.addr,e),Vt(t,e)}}function e_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4uiv(this.addr,e),Vt(t,e)}}function t_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(gd.compareFunction=mf,r=gd):r=Mf,t.setTexture2D(e||r,s)}function n_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Sf,s)}function i_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||wf,s)}function s_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||bf,s)}function r_(i){switch(i){case 5126:return zx;case 35664:return Hx;case 35665:return Vx;case 35666:return Gx;case 35674:return Wx;case 35675:return Xx;case 35676:return qx;case 5124:case 35670:return Yx;case 35667:case 35671:return $x;case 35668:case 35672:return Zx;case 35669:case 35673:return Kx;case 5125:return Jx;case 36294:return jx;case 36295:return Qx;case 36296:return e_;case 35678:case 36198:case 36298:case 36306:case 35682:return t_;case 35679:case 36299:case 36307:return n_;case 35680:case 36300:case 36308:case 36293:return i_;case 36289:case 36303:case 36311:case 36292:return s_}}function o_(i,e){i.uniform1fv(this.addr,e)}function a_(i,e){let t=vr(e,this.size,2);i.uniform2fv(this.addr,t)}function c_(i,e){let t=vr(e,this.size,3);i.uniform3fv(this.addr,t)}function l_(i,e){let t=vr(e,this.size,4);i.uniform4fv(this.addr,t)}function h_(i,e){let t=vr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function u_(i,e){let t=vr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function d_(i,e){let t=vr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function f_(i,e){i.uniform1iv(this.addr,e)}function p_(i,e){i.uniform2iv(this.addr,e)}function m_(i,e){i.uniform3iv(this.addr,e)}function g_(i,e){i.uniform4iv(this.addr,e)}function x_(i,e){i.uniform1uiv(this.addr,e)}function __(i,e){i.uniform2uiv(this.addr,e)}function y_(i,e){i.uniform3uiv(this.addr,e)}function v_(i,e){i.uniform4uiv(this.addr,e)}function M_(i,e,t){let n=this.cache,s=e.length,r=Ha(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Mf,r[o])}function b_(i,e,t){let n=this.cache,s=e.length,r=Ha(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Sf,r[o])}function S_(i,e,t){let n=this.cache,s=e.length,r=Ha(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||wf,r[o])}function w_(i,e,t){let n=this.cache,s=e.length,r=Ha(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||bf,r[o])}function E_(i){switch(i){case 5126:return o_;case 35664:return a_;case 35665:return c_;case 35666:return l_;case 35674:return h_;case 35675:return u_;case 35676:return d_;case 5124:case 35670:return f_;case 35667:case 35671:return p_;case 35668:case 35672:return m_;case 35669:case 35673:return g_;case 5125:return x_;case 36294:return __;case 36295:return y_;case 36296:return v_;case 35678:case 36198:case 36298:case 36306:case 35682:return M_;case 35679:case 36299:case 36307:return b_;case 35680:case 36300:case 36308:case 36293:return S_;case 36289:case 36303:case 36311:case 36292:return w_}}var Nl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=r_(t.type)}},Ul=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=E_(t.type)}},Ol=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Oc=/(\w+)(\])?(\[|\.)?/g;function bd(i,e){i.seq.push(e),i.map[e.id]=e}function T_(i,e,t){let n=i.name,s=n.length;for(Oc.lastIndex=0;;){let r=Oc.exec(n),o=Oc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){bd(t,l===void 0?new Nl(a,i,e):new Ul(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Ol(a),bd(t,u)),t=u}}}var ir=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);T_(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Sd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var A_=37297,R_=0;function C_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var wd=new Ze;function I_(i){je._getMatrix(wd,je.workingColorSpace,i);let e=`mat3( ${wd.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(i)){case za:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ed(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+C_(i.getShaderSource(e),o)}else return s}function P_(i,e){let t=I_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function L_(i,e){let t;switch(e){case ch:t="Linear";break;case lh:t="Reinhard";break;case hh:t="Cineon";break;case co:t="ACESFilmic";break;case uh:t="AgX";break;case dh:t="Neutral";break;case $p:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Zo=new D;function D_(){je.getLuminanceCoefficients(Zo);let i=Zo.x.toFixed(4),e=Zo.y.toFixed(4),t=Zo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function N_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wr).join(`
`)}function U_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function O_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Wr(i){return i!==""}function Td(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ad(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var F_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fl(i){return i.replace(F_,k_)}var B_=new Map;function k_(i,e){let t=Je[e];if(t===void 0){let n=B_.get(e);if(n!==void 0)t=Je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Fl(t)}var z_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rd(i){return i.replace(z_,H_)}function H_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Cd(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function V_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===nf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===oh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ci&&(e="SHADOWMAP_TYPE_VSM"),e}function G_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case rr:case or:e="ENVMAP_TYPE_CUBE";break;case Fa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function W_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case or:e="ENVMAP_MODE_REFRACTION";break}return e}function X_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ah:e="ENVMAP_BLENDING_MULTIPLY";break;case qp:e="ENVMAP_BLENDING_MIX";break;case Yp:e="ENVMAP_BLENDING_ADD";break}return e}function q_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Y_(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=V_(t),l=G_(t),h=W_(t),u=X_(t),d=q_(t),f=N_(t),g=U_(r),x=s.createProgram(),m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Wr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Wr).join(`
`),p.length>0&&(p+=`
`)):(m=[Cd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wr).join(`
`),p=[Cd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bi?"#define TONE_MAPPING":"",t.toneMapping!==Bi?Je.tonemapping_pars_fragment:"",t.toneMapping!==Bi?L_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,P_("linearToOutputTexel",t.outputColorSpace),D_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wr).join(`
`)),o=Fl(o),o=Td(o,t),o=Ad(o,t),a=Fl(a),a=Td(a,t),a=Ad(a,t),o=Rd(o),a=Rd(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Vu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=M+m+o,_=M+p+a,I=Sd(s,s.VERTEX_SHADER,b),T=Sd(s,s.FRAGMENT_SHADER,_);s.attachShader(x,I),s.attachShader(x,T),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(L){if(i.debug.checkShaderErrors){let H=s.getProgramInfoLog(x).trim(),V=s.getShaderInfoLog(I).trim(),k=s.getShaderInfoLog(T).trim(),Z=!0,X=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,I,T);else{let ie=Ed(s,I,"vertex"),q=Ed(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+H+`
`+ie+`
`+q)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(V===""||k==="")&&(X=!1);X&&(L.diagnostics={runnable:Z,programLog:H,vertexShader:{log:V,prefix:m},fragmentShader:{log:k,prefix:p}})}s.deleteShader(I),s.deleteShader(T),P=new ir(s,x),S=O_(s,x)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(x,A_)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=R_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=T,this}var $_=0,Bl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new kl(e),t.set(e,n)),n}},kl=class{constructor(e){this.id=$_++,this.code=e,this.usedTimes=0}};function Z_(i,e,t,n,s,r,o){let a=new jr,c=new Bl,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,v,L,H,V){let k=H.fog,Z=V.geometry,X=S.isMeshStandardMaterial?H.environment:null,ie=(S.isMeshStandardMaterial?t:e).get(S.envMap||X),q=ie&&ie.mapping===Fa?ie.image.height:null,le=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let xe=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Re=xe!==void 0?xe.length:0,ze=0;Z.morphAttributes.position!==void 0&&(ze=1),Z.morphAttributes.normal!==void 0&&(ze=2),Z.morphAttributes.color!==void 0&&(ze=3);let lt,ee,re,be;if(le){let _t=Yn[le];lt=_t.vertexShader,ee=_t.fragmentShader}else lt=S.vertexShader,ee=S.fragmentShader,c.update(S),re=c.getVertexShaderID(S),be=c.getFragmentShaderID(S);let de=i.getRenderTarget(),Be=i.state.buffers.depth.getReversed(),Ge=V.isInstancedMesh===!0,N=V.isBatchedMesh===!0,$=!!S.map,Y=!!S.matcap,ae=!!ie,C=!!S.aoMap,Ae=!!S.lightMap,me=!!S.bumpMap,ke=!!S.normalMap,we=!!S.displacementMap,ht=!!S.emissiveMap,De=!!S.metalnessMap,E=!!S.roughnessMap,y=S.anisotropy>0,z=S.clearcoat>0,j=S.dispersion>0,te=S.iridescence>0,Q=S.sheen>0,Ue=S.transmission>0,ge=y&&!!S.anisotropyMap,Se=z&&!!S.clearcoatMap,ot=z&&!!S.clearcoatNormalMap,oe=z&&!!S.clearcoatRoughnessMap,Ee=te&&!!S.iridescenceMap,He=te&&!!S.iridescenceThicknessMap,We=Q&&!!S.sheenColorMap,Te=Q&&!!S.sheenRoughnessMap,rt=!!S.specularMap,Ke=!!S.specularColorMap,Et=!!S.specularIntensityMap,U=Ue&&!!S.transmissionMap,pe=Ue&&!!S.thicknessMap,J=!!S.gradientMap,ne=!!S.alphaMap,Me=S.alphaTest>0,_e=!!S.alphaHash,Ye=!!S.extensions,Dt=Bi;S.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Dt=i.toneMapping);let Jt={shaderID:le,shaderType:S.type,shaderName:S.name,vertexShader:lt,fragmentShader:ee,defines:S.defines,customVertexShaderID:re,customFragmentShaderID:be,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:N,batchingColor:N&&V._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&V.instanceColor!==null,instancingMorph:Ge&&V.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:de===null?i.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:an,alphaToCoverage:!!S.alphaToCoverage,map:$,matcap:Y,envMap:ae,envMapMode:ae&&ie.mapping,envMapCubeUVHeight:q,aoMap:C,lightMap:Ae,bumpMap:me,normalMap:ke,displacementMap:d&&we,emissiveMap:ht,normalMapObjectSpace:ke&&S.normalMapType===Qp,normalMapTangentSpace:ke&&S.normalMapType===vh,metalnessMap:De,roughnessMap:E,anisotropy:y,anisotropyMap:ge,clearcoat:z,clearcoatMap:Se,clearcoatNormalMap:ot,clearcoatRoughnessMap:oe,dispersion:j,iridescence:te,iridescenceMap:Ee,iridescenceThicknessMap:He,sheen:Q,sheenColorMap:We,sheenRoughnessMap:Te,specularMap:rt,specularColorMap:Ke,specularIntensityMap:Et,transmission:Ue,transmissionMap:U,thicknessMap:pe,gradientMap:J,opaque:S.transparent===!1&&S.blending===er&&S.alphaToCoverage===!1,alphaMap:ne,alphaTest:Me,alphaHash:_e,combine:S.combine,mapUv:$&&x(S.map.channel),aoMapUv:C&&x(S.aoMap.channel),lightMapUv:Ae&&x(S.lightMap.channel),bumpMapUv:me&&x(S.bumpMap.channel),normalMapUv:ke&&x(S.normalMap.channel),displacementMapUv:we&&x(S.displacementMap.channel),emissiveMapUv:ht&&x(S.emissiveMap.channel),metalnessMapUv:De&&x(S.metalnessMap.channel),roughnessMapUv:E&&x(S.roughnessMap.channel),anisotropyMapUv:ge&&x(S.anisotropyMap.channel),clearcoatMapUv:Se&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:ot&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:He&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:We&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Te&&x(S.sheenRoughnessMap.channel),specularMapUv:rt&&x(S.specularMap.channel),specularColorMapUv:Ke&&x(S.specularColorMap.channel),specularIntensityMapUv:Et&&x(S.specularIntensityMap.channel),transmissionMapUv:U&&x(S.transmissionMap.channel),thicknessMapUv:pe&&x(S.thicknessMap.channel),alphaMapUv:ne&&x(S.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(ke||y),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!Z.attributes.uv&&($||ne),fog:!!k,useFog:S.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Be,skinning:V.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:ze,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Dt,decodeVideoTexture:$&&S.map.isVideoTexture===!0&&je.getTransfer(S.map.colorSpace)===mt,decodeVideoTextureEmissive:ht&&S.emissiveMap.isVideoTexture===!0&&je.getTransfer(S.emissiveMap.colorSpace)===mt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===nn,flipSided:S.side===$t,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ye&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&S.extensions.multiDraw===!0||N)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Jt.vertexUv1s=l.has(1),Jt.vertexUv2s=l.has(2),Jt.vertexUv3s=l.has(3),l.clear(),Jt}function p(S){let v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(let L in S.defines)v.push(L),v.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(M(v,S),b(v,S),v.push(i.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function M(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function b(S,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),S.push(a.mask)}function _(S){let v=g[S.type],L;if(v){let H=Yn[v];L=Ji.clone(H.uniforms)}else L=S.uniforms;return L}function I(S,v){let L;for(let H=0,V=h.length;H<V;H++){let k=h[H];if(k.cacheKey===v){L=k,++L.usedTimes;break}}return L===void 0&&(L=new Y_(i,v,S,r),h.push(L)),L}function T(S){if(--S.usedTimes===0){let v=h.indexOf(S);h[v]=h[h.length-1],h.pop(),S.destroy()}}function R(S){c.remove(S)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:I,releaseProgram:T,releaseShaderCache:R,programs:h,dispose:P}}function K_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function J_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Id(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Pd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,f,g,x,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),e++,p}function a(u,d,f,g,x,m){let p=o(u,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(u,d,f,g,x,m){let p=o(u,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||J_),n.length>1&&n.sort(d||Id),s.length>1&&s.sort(d||Id)}function h(){for(let u=e,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function j_(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Pd,i.set(n,[o])):s>=r.length?(o=new Pd,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Q_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new ve};break;case"SpotLight":t={position:new D,direction:new D,color:new ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new ve,groundColor:new ve};break;case"RectAreaLight":t={color:new ve,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function ey(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var ty=0;function ny(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function iy(i){let e=new Q_,t=ey(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);let s=new D,r=new Ve,o=new Ve;function a(l){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,M=0,b=0,_=0,I=0,T=0,R=0;l.sort(ny);for(let S=0,v=l.length;S<v;S++){let L=l[S],H=L.color,V=L.intensity,k=L.distance,Z=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=H.r*V,u+=H.g*V,d+=H.b*V;else if(L.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(L.sh.coefficients[X],V);R++}else if(L.isDirectionalLight){let X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let ie=L.shadow,q=t.get(L);q.shadowIntensity=ie.intensity,q.shadowBias=ie.bias,q.shadowNormalBias=ie.normalBias,q.shadowRadius=ie.radius,q.shadowMapSize=ie.mapSize,n.directionalShadow[f]=q,n.directionalShadowMap[f]=Z,n.directionalShadowMatrix[f]=L.shadow.matrix,M++}n.directional[f]=X,f++}else if(L.isSpotLight){let X=e.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(H).multiplyScalar(V),X.distance=k,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,n.spot[x]=X;let ie=L.shadow;if(L.map&&(n.spotLightMap[I]=L.map,I++,ie.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[x]=ie.matrix,L.castShadow){let q=t.get(L);q.shadowIntensity=ie.intensity,q.shadowBias=ie.bias,q.shadowNormalBias=ie.normalBias,q.shadowRadius=ie.radius,q.shadowMapSize=ie.mapSize,n.spotShadow[x]=q,n.spotShadowMap[x]=Z,_++}x++}else if(L.isRectAreaLight){let X=e.get(L);X.color.copy(H).multiplyScalar(V),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=X,m++}else if(L.isPointLight){let X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){let ie=L.shadow,q=t.get(L);q.shadowIntensity=ie.intensity,q.shadowBias=ie.bias,q.shadowNormalBias=ie.normalBias,q.shadowRadius=ie.radius,q.shadowMapSize=ie.mapSize,q.shadowCameraNear=ie.camera.near,q.shadowCameraFar=ie.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=L.shadow.matrix,b++}n.point[g]=X,g++}else if(L.isHemisphereLight){let X=e.get(L);X.skyColor.copy(L.color).multiplyScalar(V),X.groundColor.copy(L.groundColor).multiplyScalar(V),n.hemi[p]=X,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==M||P.numPointShadows!==b||P.numSpotShadows!==_||P.numSpotMaps!==I||P.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=_+I-T,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,P.directionalLength=f,P.pointLength=g,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=M,P.numPointShadows=b,P.numSpotShadows=_,P.numSpotMaps=I,P.numLightProbes=R,n.version=ty++)}function c(l,h){let u=0,d=0,f=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){let b=l[p];if(b.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(b.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(b.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(b.width*.5,0,0),_.halfHeight.set(0,b.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(b.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function Ld(i){let e=new iy(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function sy(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Ld(i),e.set(s,[a])):r>=o.length?(a=new Ld(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var zl=class extends xn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Jp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Hl=class extends xn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},ry=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oy=`uniform sampler2D shadow_pass;
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
}`;function ay(i,e,t){let n=new fr,s=new Ne,r=new Ne,o=new ut,a=new zl({depthPacking:jp}),c=new Hl,l={},h=t.maxTextureSize,u={[Kn]:$t,[$t]:Kn,[nn]:nn},d=new Ft({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:ry,fragmentShader:oy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new dt;g.setAttribute("position",new vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new se(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nf;let p=this.type;this.render=function(T,R,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let S=i.getRenderTarget(),v=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),H=i.state;H.setBlending(Zn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let V=p!==ci&&this.type===ci,k=p===ci&&this.type!==ci;for(let Z=0,X=T.length;Z<X;Z++){let ie=T[Z],q=ie.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let le=q.getFrameExtents();if(s.multiply(le),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/le.x),s.x=r.x*le.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/le.y),s.y=r.y*le.y,q.mapSize.y=r.y)),q.map===null||V===!0||k===!0){let Re=this.type!==ci?{minFilter:sn,magFilter:sn}:{};q.map!==null&&q.map.dispose(),q.map=new Kt(s.x,s.y,Re),q.map.texture.name=ie.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();let xe=q.getViewportCount();for(let Re=0;Re<xe;Re++){let ze=q.getViewport(Re);o.set(r.x*ze.x,r.y*ze.y,r.x*ze.z,r.y*ze.w),H.viewport(o),q.updateMatrices(ie,Re),n=q.getFrustum(),_(R,P,q.camera,ie,this.type)}q.isPointLightShadow!==!0&&this.type===ci&&M(q,P),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,v,L)};function M(T,R){let P=e.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Kt(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,P,d,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,P,f,x,null)}function b(T,R,P,S){let v=null,L=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)v=L;else if(v=P.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let H=v.uuid,V=R.uuid,k=l[H];k===void 0&&(k={},l[H]=k);let Z=k[V];Z===void 0&&(Z=v.clone(),k[V]=Z,R.addEventListener("dispose",I)),v=Z}if(v.visible=R.visible,v.wireframe=R.wireframe,S===ci?v.side=R.shadowSide!==null?R.shadowSide:R.side:v.side=R.shadowSide!==null?R.shadowSide:u[R.side],v.alphaMap=R.alphaMap,v.alphaTest=R.alphaTest,v.map=R.map,v.clipShadows=R.clipShadows,v.clippingPlanes=R.clippingPlanes,v.clipIntersection=R.clipIntersection,v.displacementMap=R.displacementMap,v.displacementScale=R.displacementScale,v.displacementBias=R.displacementBias,v.wireframeLinewidth=R.wireframeLinewidth,v.linewidth=R.linewidth,P.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let H=i.properties.get(v);H.light=P}return v}function _(T,R,P,S,v){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===ci)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);let V=e.update(T),k=T.material;if(Array.isArray(k)){let Z=V.groups;for(let X=0,ie=Z.length;X<ie;X++){let q=Z[X],le=k[q.materialIndex];if(le&&le.visible){let xe=b(T,le,S,v);T.onBeforeShadow(i,T,R,P,V,xe,q),i.renderBufferDirect(P,null,V,xe,T,q),T.onAfterShadow(i,T,R,P,V,xe,q)}}}else if(k.visible){let Z=b(T,k,S,v);T.onBeforeShadow(i,T,R,P,V,Z,null),i.renderBufferDirect(P,null,V,Z,T,null),T.onAfterShadow(i,T,R,P,V,Z,null)}}let H=T.children;for(let V=0,k=H.length;V<k;V++)_(H[V],R,P,S,v)}function I(T){T.target.removeEventListener("dispose",I);for(let P in l){let S=l[P],v=T.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}var cy={[Yc]:$c,[Zc]:jc,[Kc]:Qc,[sr]:Jc,[$c]:Yc,[jc]:Zc,[Qc]:Kc,[Jc]:sr};function ly(i,e){function t(){let U=!1,pe=new ut,J=null,ne=new ut(0,0,0,0);return{setMask:function(Me){J!==Me&&!U&&(i.colorMask(Me,Me,Me,Me),J=Me)},setLocked:function(Me){U=Me},setClear:function(Me,_e,Ye,Dt,Jt){Jt===!0&&(Me*=Dt,_e*=Dt,Ye*=Dt),pe.set(Me,_e,Ye,Dt),ne.equals(pe)===!1&&(i.clearColor(Me,_e,Ye,Dt),ne.copy(pe))},reset:function(){U=!1,J=null,ne.set(-1,0,0,0)}}}function n(){let U=!1,pe=!1,J=null,ne=null,Me=null;return{setReversed:function(_e){if(pe!==_e){let Ye=e.get("EXT_clip_control");pe?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT);let Dt=Me;Me=null,this.setClear(Dt)}pe=_e},getReversed:function(){return pe},setTest:function(_e){_e?de(i.DEPTH_TEST):Be(i.DEPTH_TEST)},setMask:function(_e){J!==_e&&!U&&(i.depthMask(_e),J=_e)},setFunc:function(_e){if(pe&&(_e=cy[_e]),ne!==_e){switch(_e){case Yc:i.depthFunc(i.NEVER);break;case $c:i.depthFunc(i.ALWAYS);break;case Zc:i.depthFunc(i.LESS);break;case sr:i.depthFunc(i.LEQUAL);break;case Kc:i.depthFunc(i.EQUAL);break;case Jc:i.depthFunc(i.GEQUAL);break;case jc:i.depthFunc(i.GREATER);break;case Qc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ne=_e}},setLocked:function(_e){U=_e},setClear:function(_e){Me!==_e&&(pe&&(_e=1-_e),i.clearDepth(_e),Me=_e)},reset:function(){U=!1,J=null,ne=null,Me=null,pe=!1}}}function s(){let U=!1,pe=null,J=null,ne=null,Me=null,_e=null,Ye=null,Dt=null,Jt=null;return{setTest:function(_t){U||(_t?de(i.STENCIL_TEST):Be(i.STENCIL_TEST))},setMask:function(_t){pe!==_t&&!U&&(i.stencilMask(_t),pe=_t)},setFunc:function(_t,On,ei){(J!==_t||ne!==On||Me!==ei)&&(i.stencilFunc(_t,On,ei),J=_t,ne=On,Me=ei)},setOp:function(_t,On,ei){(_e!==_t||Ye!==On||Dt!==ei)&&(i.stencilOp(_t,On,ei),_e=_t,Ye=On,Dt=ei)},setLocked:function(_t){U=_t},setClear:function(_t){Jt!==_t&&(i.clearStencil(_t),Jt=_t)},reset:function(){U=!1,pe=null,J=null,ne=null,Me=null,_e=null,Ye=null,Dt=null,Jt=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,M=null,b=null,_=null,I=null,T=null,R=new ve(0,0,0),P=0,S=!1,v=null,L=null,H=null,V=null,k=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,ie=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(q)[1]),X=ie>=1):q.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),X=ie>=2);let le=null,xe={},Re=i.getParameter(i.SCISSOR_BOX),ze=i.getParameter(i.VIEWPORT),lt=new ut().fromArray(Re),ee=new ut().fromArray(ze);function re(U,pe,J,ne){let Me=new Uint8Array(4),_e=i.createTexture();i.bindTexture(U,_e),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ye=0;Ye<J;Ye++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(pe,0,i.RGBA,1,1,ne,0,i.RGBA,i.UNSIGNED_BYTE,Me):i.texImage2D(pe+Ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Me);return _e}let be={};be[i.TEXTURE_2D]=re(i.TEXTURE_2D,i.TEXTURE_2D,1),be[i.TEXTURE_CUBE_MAP]=re(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[i.TEXTURE_2D_ARRAY]=re(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),be[i.TEXTURE_3D]=re(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),de(i.DEPTH_TEST),o.setFunc(sr),me(!1),ke(Nu),de(i.CULL_FACE),C(Zn);function de(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function Be(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Ge(U,pe){return u[U]!==pe?(i.bindFramebuffer(U,pe),u[U]=pe,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=pe),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=pe),!0):!1}function N(U,pe){let J=f,ne=!1;if(U){J=d.get(pe),J===void 0&&(J=[],d.set(pe,J));let Me=U.textures;if(J.length!==Me.length||J[0]!==i.COLOR_ATTACHMENT0){for(let _e=0,Ye=Me.length;_e<Ye;_e++)J[_e]=i.COLOR_ATTACHMENT0+_e;J.length=Me.length,ne=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,ne=!0);ne&&i.drawBuffers(J)}function $(U){return g!==U?(i.useProgram(U),g=U,!0):!1}let Y={[xs]:i.FUNC_ADD,[Cp]:i.FUNC_SUBTRACT,[Ip]:i.FUNC_REVERSE_SUBTRACT};Y[Pp]=i.MIN,Y[Lp]=i.MAX;let ae={[Dp]:i.ZERO,[Np]:i.ONE,[Up]:i.SRC_COLOR,[Xc]:i.SRC_ALPHA,[Hp]:i.SRC_ALPHA_SATURATE,[kp]:i.DST_COLOR,[Fp]:i.DST_ALPHA,[Op]:i.ONE_MINUS_SRC_COLOR,[qc]:i.ONE_MINUS_SRC_ALPHA,[zp]:i.ONE_MINUS_DST_COLOR,[Bp]:i.ONE_MINUS_DST_ALPHA,[Vp]:i.CONSTANT_COLOR,[Gp]:i.ONE_MINUS_CONSTANT_COLOR,[Wp]:i.CONSTANT_ALPHA,[Xp]:i.ONE_MINUS_CONSTANT_ALPHA};function C(U,pe,J,ne,Me,_e,Ye,Dt,Jt,_t){if(U===Zn){x===!0&&(Be(i.BLEND),x=!1);return}if(x===!1&&(de(i.BLEND),x=!0),U!==Rp){if(U!==m||_t!==S){if((p!==xs||_!==xs)&&(i.blendEquation(i.FUNC_ADD),p=xs,_=xs),_t)switch(U){case er:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rn:i.blendFunc(i.ONE,i.ONE);break;case Uu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ou:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case er:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Uu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ou:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}M=null,b=null,I=null,T=null,R.set(0,0,0),P=0,m=U,S=_t}return}Me=Me||pe,_e=_e||J,Ye=Ye||ne,(pe!==p||Me!==_)&&(i.blendEquationSeparate(Y[pe],Y[Me]),p=pe,_=Me),(J!==M||ne!==b||_e!==I||Ye!==T)&&(i.blendFuncSeparate(ae[J],ae[ne],ae[_e],ae[Ye]),M=J,b=ne,I=_e,T=Ye),(Dt.equals(R)===!1||Jt!==P)&&(i.blendColor(Dt.r,Dt.g,Dt.b,Jt),R.copy(Dt),P=Jt),m=U,S=!1}function Ae(U,pe){U.side===nn?Be(i.CULL_FACE):de(i.CULL_FACE);let J=U.side===$t;pe&&(J=!J),me(J),U.blending===er&&U.transparent===!1?C(Zn):C(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let ne=U.stencilWrite;a.setTest(ne),ne&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ht(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?de(i.SAMPLE_ALPHA_TO_COVERAGE):Be(i.SAMPLE_ALPHA_TO_COVERAGE)}function me(U){v!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),v=U)}function ke(U){U!==Tp?(de(i.CULL_FACE),U!==L&&(U===Nu?i.cullFace(i.BACK):U===Ap?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Be(i.CULL_FACE),L=U}function we(U){U!==H&&(X&&i.lineWidth(U),H=U)}function ht(U,pe,J){U?(de(i.POLYGON_OFFSET_FILL),(V!==pe||k!==J)&&(i.polygonOffset(pe,J),V=pe,k=J)):Be(i.POLYGON_OFFSET_FILL)}function De(U){U?de(i.SCISSOR_TEST):Be(i.SCISSOR_TEST)}function E(U){U===void 0&&(U=i.TEXTURE0+Z-1),le!==U&&(i.activeTexture(U),le=U)}function y(U,pe,J){J===void 0&&(le===null?J=i.TEXTURE0+Z-1:J=le);let ne=xe[J];ne===void 0&&(ne={type:void 0,texture:void 0},xe[J]=ne),(ne.type!==U||ne.texture!==pe)&&(le!==J&&(i.activeTexture(J),le=J),i.bindTexture(U,pe||be[U]),ne.type=U,ne.texture=pe)}function z(){let U=xe[le];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ue(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Se(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ot(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function oe(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function He(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function We(U){lt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),lt.copy(U))}function Te(U){ee.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),ee.copy(U))}function rt(U,pe){let J=l.get(pe);J===void 0&&(J=new WeakMap,l.set(pe,J));let ne=J.get(U);ne===void 0&&(ne=i.getUniformBlockIndex(pe,U.name),J.set(U,ne))}function Ke(U,pe){let ne=l.get(pe).get(U);c.get(pe)!==ne&&(i.uniformBlockBinding(pe,ne,U.__bindingPointIndex),c.set(pe,ne))}function Et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},le=null,xe={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,M=null,b=null,_=null,I=null,T=null,R=new ve(0,0,0),P=0,S=!1,v=null,L=null,H=null,V=null,k=null,lt.set(0,0,i.canvas.width,i.canvas.height),ee.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:de,disable:Be,bindFramebuffer:Ge,drawBuffers:N,useProgram:$,setBlending:C,setMaterial:Ae,setFlipSided:me,setCullFace:ke,setLineWidth:we,setPolygonOffset:ht,setScissorTest:De,activeTexture:E,bindTexture:y,unbindTexture:z,compressedTexImage2D:j,compressedTexImage3D:te,texImage2D:Ee,texImage3D:He,updateUBOMapping:rt,uniformBlockBinding:Ke,texStorage2D:ot,texStorage3D:oe,texSubImage2D:Q,texSubImage3D:Ue,compressedTexSubImage2D:ge,compressedTexSubImage3D:Se,scissor:We,viewport:Te,reset:Et}}function Dd(i,e,t,n){let s=hy(n);switch(t){case cf:return i*e;case hf:return i*e;case uf:return i*e*2;case xh:return i*e/s.components*s.byteLength;case Ba:return i*e/s.components*s.byteLength;case df:return i*e*2/s.components*s.byteLength;case _h:return i*e*2/s.components*s.byteLength;case lf:return i*e*3/s.components*s.byteLength;case mn:return i*e*4/s.components*s.byteLength;case yh:return i*e*4/s.components*s.byteLength;case ra:case oa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case aa:case ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case il:case rl:return Math.max(i,16)*Math.max(e,8)/4;case nl:case sl:return Math.max(i,8)*Math.max(e,8)/2;case ol:case al:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case cl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ll:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case hl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ul:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case dl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case fl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case pl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ml:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case gl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case xl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case _l:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case yl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case vl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ml:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case bl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case la:case Sl:case wl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ff:case El:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Tl:case Al:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hy(i){switch(i){case fi:case rf:return{byteLength:1,components:1};case Kr:case of:case Tn:return{byteLength:2,components:1};case mh:case gh:return{byteLength:2,components:4};case ki:case ph:case Sn:return{byteLength:4,components:1};case af:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function uy(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ne,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,y){return f?new OffscreenCanvas(E,y):Jr("canvas")}function x(E,y,z){let j=1,te=De(E);if((te.width>z||te.height>z)&&(j=z/Math.max(te.width,te.height)),j<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let Q=Math.floor(j*te.width),Ue=Math.floor(j*te.height);u===void 0&&(u=g(Q,Ue));let ge=y?g(Q,Ue):u;return ge.width=Q,ge.height=Ue,ge.getContext("2d").drawImage(E,0,0,Q,Ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Q+"x"+Ue+")."),ge}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){i.generateMipmap(E)}function M(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(E,y,z,j,te=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Q=y;if(y===i.RED&&(z===i.FLOAT&&(Q=i.R32F),z===i.HALF_FLOAT&&(Q=i.R16F),z===i.UNSIGNED_BYTE&&(Q=i.R8)),y===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Q=i.R8UI),z===i.UNSIGNED_SHORT&&(Q=i.R16UI),z===i.UNSIGNED_INT&&(Q=i.R32UI),z===i.BYTE&&(Q=i.R8I),z===i.SHORT&&(Q=i.R16I),z===i.INT&&(Q=i.R32I)),y===i.RG&&(z===i.FLOAT&&(Q=i.RG32F),z===i.HALF_FLOAT&&(Q=i.RG16F),z===i.UNSIGNED_BYTE&&(Q=i.RG8)),y===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Q=i.RG8UI),z===i.UNSIGNED_SHORT&&(Q=i.RG16UI),z===i.UNSIGNED_INT&&(Q=i.RG32UI),z===i.BYTE&&(Q=i.RG8I),z===i.SHORT&&(Q=i.RG16I),z===i.INT&&(Q=i.RG32I)),y===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),z===i.UNSIGNED_INT&&(Q=i.RGB32UI),z===i.BYTE&&(Q=i.RGB8I),z===i.SHORT&&(Q=i.RGB16I),z===i.INT&&(Q=i.RGB32I)),y===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),z===i.UNSIGNED_INT&&(Q=i.RGBA32UI),z===i.BYTE&&(Q=i.RGBA8I),z===i.SHORT&&(Q=i.RGBA16I),z===i.INT&&(Q=i.RGBA32I)),y===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),y===i.RGBA){let Ue=te?za:je.getTransfer(j);z===i.FLOAT&&(Q=i.RGBA32F),z===i.HALF_FLOAT&&(Q=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Q=Ue===mt?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function _(E,y){let z;return E?y===null||y===ki||y===ar?z=i.DEPTH24_STENCIL8:y===Sn?z=i.DEPTH32F_STENCIL8:y===Kr&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ki||y===ar?z=i.DEPTH_COMPONENT24:y===Sn?z=i.DEPTH_COMPONENT32F:y===Kr&&(z=i.DEPTH_COMPONENT16),z}function I(E,y){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==sn&&E.minFilter!==pn?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function T(E){let y=E.target;y.removeEventListener("dispose",T),P(y),y.isVideoTexture&&h.delete(y)}function R(E){let y=E.target;y.removeEventListener("dispose",R),v(y)}function P(E){let y=n.get(E);if(y.__webglInit===void 0)return;let z=E.source,j=d.get(z);if(j){let te=j[y.__cacheKey];te.usedTimes--,te.usedTimes===0&&S(E),Object.keys(j).length===0&&d.delete(z)}n.remove(E)}function S(E){let y=n.get(E);i.deleteTexture(y.__webglTexture);let z=E.source,j=d.get(z);delete j[y.__cacheKey],o.memory.textures--}function v(E){let y=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(y.__webglFramebuffer[j]))for(let te=0;te<y.__webglFramebuffer[j].length;te++)i.deleteFramebuffer(y.__webglFramebuffer[j][te]);else i.deleteFramebuffer(y.__webglFramebuffer[j]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[j])}else{if(Array.isArray(y.__webglFramebuffer))for(let j=0;j<y.__webglFramebuffer.length;j++)i.deleteFramebuffer(y.__webglFramebuffer[j]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let j=0;j<y.__webglColorRenderbuffer.length;j++)y.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[j]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let z=E.textures;for(let j=0,te=z.length;j<te;j++){let Q=n.get(z[j]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(z[j])}n.remove(E)}let L=0;function H(){L=0}function V(){let E=L;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),L+=1,E}function k(E){let y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function Z(E,y){let z=n.get(E);if(E.isVideoTexture&&we(E),E.isRenderTargetTexture===!1&&E.version>0&&z.__version!==E.version){let j=E.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(z,E,y);return}}t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+y)}function X(E,y){let z=n.get(E);if(E.version>0&&z.__version!==E.version){ee(z,E,y);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+y)}function ie(E,y){let z=n.get(E);if(E.version>0&&z.__version!==E.version){ee(z,E,y);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+y)}function q(E,y){let z=n.get(E);if(E.version>0&&z.__version!==E.version){re(z,E,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+y)}let le={[di]:i.REPEAT,[In]:i.CLAMP_TO_EDGE,[Zr]:i.MIRRORED_REPEAT},xe={[sn]:i.NEAREST,[fh]:i.NEAREST_MIPMAP_NEAREST,[js]:i.NEAREST_MIPMAP_LINEAR,[pn]:i.LINEAR,[Xr]:i.LINEAR_MIPMAP_NEAREST,[$n]:i.LINEAR_MIPMAP_LINEAR},Re={[em]:i.NEVER,[om]:i.ALWAYS,[tm]:i.LESS,[mf]:i.LEQUAL,[nm]:i.EQUAL,[rm]:i.GEQUAL,[im]:i.GREATER,[sm]:i.NOTEQUAL};function ze(E,y){if(y.type===Sn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===pn||y.magFilter===Xr||y.magFilter===js||y.magFilter===$n||y.minFilter===pn||y.minFilter===Xr||y.minFilter===js||y.minFilter===$n)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,le[y.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,le[y.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,le[y.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,xe[y.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,xe[y.minFilter]),y.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Re[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===sn||y.minFilter!==js&&y.minFilter!==$n||y.type===Sn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function lt(E,y){let z=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",T));let j=y.source,te=d.get(j);te===void 0&&(te={},d.set(j,te));let Q=k(y);if(Q!==E.__cacheKey){te[Q]===void 0&&(te[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),te[Q].usedTimes++;let Ue=te[E.__cacheKey];Ue!==void 0&&(te[E.__cacheKey].usedTimes--,Ue.usedTimes===0&&S(y)),E.__cacheKey=Q,E.__webglTexture=te[Q].texture}return z}function ee(E,y,z){let j=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(j=i.TEXTURE_3D);let te=lt(E,y),Q=y.source;t.bindTexture(j,E.__webglTexture,i.TEXTURE0+z);let Ue=n.get(Q);if(Q.version!==Ue.__version||te===!0){t.activeTexture(i.TEXTURE0+z);let ge=je.getPrimaries(je.workingColorSpace),Se=y.colorSpace===Oi?null:je.getPrimaries(y.colorSpace),ot=y.colorSpace===Oi||ge===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);let oe=x(y.image,!1,s.maxTextureSize);oe=ht(y,oe);let Ee=r.convert(y.format,y.colorSpace),He=r.convert(y.type),We=b(y.internalFormat,Ee,He,y.colorSpace,y.isVideoTexture);ze(j,y);let Te,rt=y.mipmaps,Ke=y.isVideoTexture!==!0,Et=Ue.__version===void 0||te===!0,U=Q.dataReady,pe=I(y,oe);if(y.isDepthTexture)We=_(y.format===cr,y.type),Et&&(Ke?t.texStorage2D(i.TEXTURE_2D,1,We,oe.width,oe.height):t.texImage2D(i.TEXTURE_2D,0,We,oe.width,oe.height,0,Ee,He,null));else if(y.isDataTexture)if(rt.length>0){Ke&&Et&&t.texStorage2D(i.TEXTURE_2D,pe,We,rt[0].width,rt[0].height);for(let J=0,ne=rt.length;J<ne;J++)Te=rt[J],Ke?U&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,Te.width,Te.height,Ee,He,Te.data):t.texImage2D(i.TEXTURE_2D,J,We,Te.width,Te.height,0,Ee,He,Te.data);y.generateMipmaps=!1}else Ke?(Et&&t.texStorage2D(i.TEXTURE_2D,pe,We,oe.width,oe.height),U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe.width,oe.height,Ee,He,oe.data)):t.texImage2D(i.TEXTURE_2D,0,We,oe.width,oe.height,0,Ee,He,oe.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ke&&Et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,We,rt[0].width,rt[0].height,oe.depth);for(let J=0,ne=rt.length;J<ne;J++)if(Te=rt[J],y.format!==mn)if(Ee!==null)if(Ke){if(U)if(y.layerUpdates.size>0){let Me=Dd(Te.width,Te.height,y.format,y.type);for(let _e of y.layerUpdates){let Ye=Te.data.subarray(_e*Me/Te.data.BYTES_PER_ELEMENT,(_e+1)*Me/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,_e,Te.width,Te.height,1,Ee,Ye)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,Te.width,Te.height,oe.depth,Ee,Te.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,We,Te.width,Te.height,oe.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,Te.width,Te.height,oe.depth,Ee,He,Te.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,We,Te.width,Te.height,oe.depth,0,Ee,He,Te.data)}else{Ke&&Et&&t.texStorage2D(i.TEXTURE_2D,pe,We,rt[0].width,rt[0].height);for(let J=0,ne=rt.length;J<ne;J++)Te=rt[J],y.format!==mn?Ee!==null?Ke?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,Te.width,Te.height,Ee,Te.data):t.compressedTexImage2D(i.TEXTURE_2D,J,We,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?U&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,Te.width,Te.height,Ee,He,Te.data):t.texImage2D(i.TEXTURE_2D,J,We,Te.width,Te.height,0,Ee,He,Te.data)}else if(y.isDataArrayTexture)if(Ke){if(Et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,We,oe.width,oe.height,oe.depth),U)if(y.layerUpdates.size>0){let J=Dd(oe.width,oe.height,y.format,y.type);for(let ne of y.layerUpdates){let Me=oe.data.subarray(ne*J/oe.data.BYTES_PER_ELEMENT,(ne+1)*J/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ne,oe.width,oe.height,1,Ee,He,Me)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Ee,He,oe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,We,oe.width,oe.height,oe.depth,0,Ee,He,oe.data);else if(y.isData3DTexture)Ke?(Et&&t.texStorage3D(i.TEXTURE_3D,pe,We,oe.width,oe.height,oe.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Ee,He,oe.data)):t.texImage3D(i.TEXTURE_3D,0,We,oe.width,oe.height,oe.depth,0,Ee,He,oe.data);else if(y.isFramebufferTexture){if(Et)if(Ke)t.texStorage2D(i.TEXTURE_2D,pe,We,oe.width,oe.height);else{let J=oe.width,ne=oe.height;for(let Me=0;Me<pe;Me++)t.texImage2D(i.TEXTURE_2D,Me,We,J,ne,0,Ee,He,null),J>>=1,ne>>=1}}else if(rt.length>0){if(Ke&&Et){let J=De(rt[0]);t.texStorage2D(i.TEXTURE_2D,pe,We,J.width,J.height)}for(let J=0,ne=rt.length;J<ne;J++)Te=rt[J],Ke?U&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,Ee,He,Te):t.texImage2D(i.TEXTURE_2D,J,We,Ee,He,Te);y.generateMipmaps=!1}else if(Ke){if(Et){let J=De(oe);t.texStorage2D(i.TEXTURE_2D,pe,We,J.width,J.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee,He,oe)}else t.texImage2D(i.TEXTURE_2D,0,We,Ee,He,oe);m(y)&&p(j),Ue.__version=Q.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function re(E,y,z){if(y.image.length!==6)return;let j=lt(E,y),te=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+z);let Q=n.get(te);if(te.version!==Q.__version||j===!0){t.activeTexture(i.TEXTURE0+z);let Ue=je.getPrimaries(je.workingColorSpace),ge=y.colorSpace===Oi?null:je.getPrimaries(y.colorSpace),Se=y.colorSpace===Oi||Ue===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let ot=y.isCompressedTexture||y.image[0].isCompressedTexture,oe=y.image[0]&&y.image[0].isDataTexture,Ee=[];for(let ne=0;ne<6;ne++)!ot&&!oe?Ee[ne]=x(y.image[ne],!0,s.maxCubemapSize):Ee[ne]=oe?y.image[ne].image:y.image[ne],Ee[ne]=ht(y,Ee[ne]);let He=Ee[0],We=r.convert(y.format,y.colorSpace),Te=r.convert(y.type),rt=b(y.internalFormat,We,Te,y.colorSpace),Ke=y.isVideoTexture!==!0,Et=Q.__version===void 0||j===!0,U=te.dataReady,pe=I(y,He);ze(i.TEXTURE_CUBE_MAP,y);let J;if(ot){Ke&&Et&&t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,rt,He.width,He.height);for(let ne=0;ne<6;ne++){J=Ee[ne].mipmaps;for(let Me=0;Me<J.length;Me++){let _e=J[Me];y.format!==mn?We!==null?Ke?U&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me,0,0,_e.width,_e.height,We,_e.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me,rt,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me,0,0,_e.width,_e.height,We,Te,_e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me,rt,_e.width,_e.height,0,We,Te,_e.data)}}}else{if(J=y.mipmaps,Ke&&Et){J.length>0&&pe++;let ne=De(Ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,rt,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(oe){Ke?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ee[ne].width,Ee[ne].height,We,Te,Ee[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,rt,Ee[ne].width,Ee[ne].height,0,We,Te,Ee[ne].data);for(let Me=0;Me<J.length;Me++){let Ye=J[Me].image[ne].image;Ke?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me+1,0,0,Ye.width,Ye.height,We,Te,Ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me+1,rt,Ye.width,Ye.height,0,We,Te,Ye.data)}}else{Ke?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,We,Te,Ee[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,rt,We,Te,Ee[ne]);for(let Me=0;Me<J.length;Me++){let _e=J[Me];Ke?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me+1,0,0,We,Te,_e.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me+1,rt,We,Te,_e.image[ne])}}}m(y)&&p(i.TEXTURE_CUBE_MAP),Q.__version=te.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function be(E,y,z,j,te,Q){let Ue=r.convert(z.format,z.colorSpace),ge=r.convert(z.type),Se=b(z.internalFormat,Ue,ge,z.colorSpace),ot=n.get(y),oe=n.get(z);if(oe.__renderTarget=y,!ot.__hasExternalTextures){let Ee=Math.max(1,y.width>>Q),He=Math.max(1,y.height>>Q);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,Q,Se,Ee,He,y.depth,0,Ue,ge,null):t.texImage2D(te,Q,Se,Ee,He,0,Ue,ge,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),ke(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,te,oe.__webglTexture,0,me(y)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,te,oe.__webglTexture,Q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function de(E,y,z){if(i.bindRenderbuffer(i.RENDERBUFFER,E),y.depthBuffer){let j=y.depthTexture,te=j&&j.isDepthTexture?j.type:null,Q=_(y.stencilBuffer,te),Ue=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=me(y);ke(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge,Q,y.width,y.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,Q,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Q,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ue,i.RENDERBUFFER,E)}else{let j=y.textures;for(let te=0;te<j.length;te++){let Q=j[te],Ue=r.convert(Q.format,Q.colorSpace),ge=r.convert(Q.type),Se=b(Q.internalFormat,Ue,ge,Q.colorSpace),ot=me(y);z&&ke(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,Se,y.width,y.height):ke(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,Se,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Se,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Be(E,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=n.get(y.depthTexture);j.__renderTarget=y,(!j.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Z(y.depthTexture,0);let te=j.__webglTexture,Q=me(y);if(y.depthTexture.format===tr)ke(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0);else if(y.depthTexture.format===cr)ke(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Ge(E){let y=n.get(E),z=E.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==E.depthTexture){let j=E.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),j){let te=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,j.removeEventListener("dispose",te)};j.addEventListener("dispose",te),y.__depthDisposeCallback=te}y.__boundDepthTexture=j}if(E.depthTexture&&!y.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Be(y.__webglFramebuffer,E)}else if(z){y.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[j]),y.__webglDepthbuffer[j]===void 0)y.__webglDepthbuffer[j]=i.createRenderbuffer(),de(y.__webglDepthbuffer[j],E,!1);else{let te=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=y.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,Q)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),de(y.__webglDepthbuffer,E,!1);else{let j=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,te)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function N(E,y,z){let j=n.get(E);y!==void 0&&be(j.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Ge(E)}function $(E){let y=E.texture,z=n.get(E),j=n.get(y);E.addEventListener("dispose",R);let te=E.textures,Q=E.isWebGLCubeRenderTarget===!0,Ue=te.length>1;if(Ue||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=y.version,o.memory.textures++),Q){z.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[ge]=[];for(let Se=0;Se<y.mipmaps.length;Se++)z.__webglFramebuffer[ge][Se]=i.createFramebuffer()}else z.__webglFramebuffer[ge]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let ge=0;ge<y.mipmaps.length;ge++)z.__webglFramebuffer[ge]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Ue)for(let ge=0,Se=te.length;ge<Se;ge++){let ot=n.get(te[ge]);ot.__webglTexture===void 0&&(ot.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&ke(E)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ge=0;ge<te.length;ge++){let Se=te[ge];z.__webglColorRenderbuffer[ge]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[ge]);let ot=r.convert(Se.format,Se.colorSpace),oe=r.convert(Se.type),Ee=b(Se.internalFormat,ot,oe,Se.colorSpace,E.isXRRenderTarget===!0),He=me(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,He,Ee,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,z.__webglColorRenderbuffer[ge])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),de(z.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),ze(i.TEXTURE_CUBE_MAP,y);for(let ge=0;ge<6;ge++)if(y.mipmaps&&y.mipmaps.length>0)for(let Se=0;Se<y.mipmaps.length;Se++)be(z.__webglFramebuffer[ge][Se],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Se);else be(z.__webglFramebuffer[ge],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);m(y)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ue){for(let ge=0,Se=te.length;ge<Se;ge++){let ot=te[ge],oe=n.get(ot);t.bindTexture(i.TEXTURE_2D,oe.__webglTexture),ze(i.TEXTURE_2D,ot),be(z.__webglFramebuffer,E,ot,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,0),m(ot)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let ge=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ge=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,j.__webglTexture),ze(ge,y),y.mipmaps&&y.mipmaps.length>0)for(let Se=0;Se<y.mipmaps.length;Se++)be(z.__webglFramebuffer[Se],E,y,i.COLOR_ATTACHMENT0,ge,Se);else be(z.__webglFramebuffer,E,y,i.COLOR_ATTACHMENT0,ge,0);m(y)&&p(ge),t.unbindTexture()}E.depthBuffer&&Ge(E)}function Y(E){let y=E.textures;for(let z=0,j=y.length;z<j;z++){let te=y[z];if(m(te)){let Q=M(E),Ue=n.get(te).__webglTexture;t.bindTexture(Q,Ue),p(Q),t.unbindTexture()}}}let ae=[],C=[];function Ae(E){if(E.samples>0){if(ke(E)===!1){let y=E.textures,z=E.width,j=E.height,te=i.COLOR_BUFFER_BIT,Q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ue=n.get(E),ge=y.length>1;if(ge)for(let Se=0;Se<y.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Se=0;Se<y.length;Se++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),ge){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[Se]);let ot=n.get(y[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ot,0)}i.blitFramebuffer(0,0,z,j,0,0,z,j,te,i.NEAREST),c===!0&&(ae.length=0,C.length=0,ae.push(i.COLOR_ATTACHMENT0+Se),E.depthBuffer&&E.resolveDepthBuffer===!1&&(ae.push(Q),C.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,C)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ae))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ge)for(let Se=0;Se<y.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[Se]);let ot=n.get(y[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,ot,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){let y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function me(E){return Math.min(s.maxSamples,E.samples)}function ke(E){let y=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function we(E){let y=o.render.frame;h.get(E)!==y&&(h.set(E,y),E.update())}function ht(E,y){let z=E.colorSpace,j=E.format,te=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||z!==an&&z!==Oi&&(je.getTransfer(z)===mt?(j!==mn||te!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),y}function De(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=H,this.setTexture2D=Z,this.setTexture2DArray=X,this.setTexture3D=ie,this.setTextureCube=q,this.rebindTextures=N,this.setupRenderTarget=$,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=be,this.useMultisampledRTT=ke}function dy(i,e){function t(n,s=Oi){let r,o=je.getTransfer(s);if(n===fi)return i.UNSIGNED_BYTE;if(n===mh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===gh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===af)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===rf)return i.BYTE;if(n===of)return i.SHORT;if(n===Kr)return i.UNSIGNED_SHORT;if(n===ph)return i.INT;if(n===ki)return i.UNSIGNED_INT;if(n===Sn)return i.FLOAT;if(n===Tn)return i.HALF_FLOAT;if(n===cf)return i.ALPHA;if(n===lf)return i.RGB;if(n===mn)return i.RGBA;if(n===hf)return i.LUMINANCE;if(n===uf)return i.LUMINANCE_ALPHA;if(n===tr)return i.DEPTH_COMPONENT;if(n===cr)return i.DEPTH_STENCIL;if(n===xh)return i.RED;if(n===Ba)return i.RED_INTEGER;if(n===df)return i.RG;if(n===_h)return i.RG_INTEGER;if(n===yh)return i.RGBA_INTEGER;if(n===ra||n===oa||n===aa||n===ca)if(o===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ra)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ra)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===oa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ca)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===nl||n===il||n===sl||n===rl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===nl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===il)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===sl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===rl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ol||n===al||n===cl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ol||n===al)return o===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===cl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ll||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===xl||n===_l||n===yl||n===vl||n===Ml||n===bl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ll)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===hl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ul)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===dl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ml)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===gl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_l)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===vl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ml)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===la||n===Sl||n===wl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===la)return o===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Sl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ff||n===El||n===Tl||n===Al)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===la)return r.COMPRESSED_RED_RGTC1_EXT;if(n===El)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Tl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Al)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ar?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Vl=class extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ct=class extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}},fy={type:"move"},$r=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fy)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ct;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},py=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,my=`
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

}`,Gl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Xt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ft({vertexShader:py,fragmentShader:my,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new se(new Pn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Wl=class extends zi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,x=new Gl,m=t.getContextAttributes(),p=null,M=null,b=[],_=[],I=new Ne,T=null,R=new Ot;R.viewport=new ut;let P=new Ot;P.viewport=new ut;let S=[R,P],v=new Vl,L=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let re=b[ee];return re===void 0&&(re=new $r,b[ee]=re),re.getTargetRaySpace()},this.getControllerGrip=function(ee){let re=b[ee];return re===void 0&&(re=new $r,b[ee]=re),re.getGripSpace()},this.getHand=function(ee){let re=b[ee];return re===void 0&&(re=new $r,b[ee]=re),re.getHandSpace()};function V(ee){let re=_.indexOf(ee.inputSource);if(re===-1)return;let be=b[re];be!==void 0&&(be.update(ee.inputSource,ee.frame,l||o),be.dispatchEvent({type:ee.type,data:ee.inputSource}))}function k(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",Z);for(let ee=0;ee<b.length;ee++){let re=_[ee];re!==null&&(_[ee]=null,b[ee].disconnect(re))}L=null,H=null,x.reset(),e.setRenderTarget(p),f=null,d=null,u=null,s=null,M=null,lt.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ee){l=ee},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",k),s.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(I),s.renderState.layers===void 0){let re={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,re),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Kt(f.framebufferWidth,f.framebufferHeight,{format:mn,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let re=null,be=null,de=null;m.depth&&(de=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=m.stencil?cr:tr,be=m.stencil?ar:ki);let Be={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Be),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Kt(d.textureWidth,d.textureHeight,{format:mn,type:fi,depthTexture:new xa(d.textureWidth,d.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),lt.setContext(s),lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Z(ee){for(let re=0;re<ee.removed.length;re++){let be=ee.removed[re],de=_.indexOf(be);de>=0&&(_[de]=null,b[de].disconnect(be))}for(let re=0;re<ee.added.length;re++){let be=ee.added[re],de=_.indexOf(be);if(de===-1){for(let Ge=0;Ge<b.length;Ge++)if(Ge>=_.length){_.push(be),de=Ge;break}else if(_[Ge]===null){_[Ge]=be,de=Ge;break}if(de===-1)break}let Be=b[de];Be&&Be.connect(be)}}let X=new D,ie=new D;function q(ee,re,be){X.setFromMatrixPosition(re.matrixWorld),ie.setFromMatrixPosition(be.matrixWorld);let de=X.distanceTo(ie),Be=re.projectionMatrix.elements,Ge=be.projectionMatrix.elements,N=Be[14]/(Be[10]-1),$=Be[14]/(Be[10]+1),Y=(Be[9]+1)/Be[5],ae=(Be[9]-1)/Be[5],C=(Be[8]-1)/Be[0],Ae=(Ge[8]+1)/Ge[0],me=N*C,ke=N*Ae,we=de/(-C+Ae),ht=we*-C;if(re.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(ht),ee.translateZ(we),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Be[10]===-1)ee.projectionMatrix.copy(re.projectionMatrix),ee.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{let De=N+we,E=$+we,y=me-ht,z=ke+(de-ht),j=Y*$/E*De,te=ae*$/E*De;ee.projectionMatrix.makePerspective(y,z,j,te,De,E),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function le(ee,re){re===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(re.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;let re=ee.near,be=ee.far;x.texture!==null&&(x.depthNear>0&&(re=x.depthNear),x.depthFar>0&&(be=x.depthFar)),v.near=P.near=R.near=re,v.far=P.far=R.far=be,(L!==v.near||H!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),L=v.near,H=v.far),R.layers.mask=ee.layers.mask|2,P.layers.mask=ee.layers.mask|4,v.layers.mask=R.layers.mask|P.layers.mask;let de=ee.parent,Be=v.cameras;le(v,de);for(let Ge=0;Ge<Be.length;Ge++)le(Be[Ge],de);Be.length===2?q(v,R,P):v.projectionMatrix.copy(R.projectionMatrix),xe(ee,v,de)};function xe(ee,re,be){be===null?ee.matrix.copy(re.matrixWorld):(ee.matrix.copy(be.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(re.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(re.projectionMatrix),ee.projectionMatrixInverse.copy(re.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=ur*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(ee){c=ee,d!==null&&(d.fixedFoveation=ee),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ee)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(v)};let Re=null;function ze(ee,re){if(h=re.getViewerPose(l||o),g=re,h!==null){let be=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let de=!1;be.length!==v.cameras.length&&(v.cameras.length=0,de=!0);for(let Ge=0;Ge<be.length;Ge++){let N=be[Ge],$=null;if(f!==null)$=f.getViewport(N);else{let ae=u.getViewSubImage(d,N);$=ae.viewport,Ge===0&&(e.setRenderTargetTextures(M,ae.colorTexture,d.ignoreDepthValues?void 0:ae.depthStencilTexture),e.setRenderTarget(M))}let Y=S[Ge];Y===void 0&&(Y=new Ot,Y.layers.enable(Ge),Y.viewport=new ut,S[Ge]=Y),Y.matrix.fromArray(N.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(N.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set($.x,$.y,$.width,$.height),Ge===0&&(v.matrix.copy(Y.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),de===!0&&v.cameras.push(Y)}let Be=s.enabledFeatures;if(Be&&Be.includes("depth-sensing")){let Ge=u.getDepthInformation(be[0]);Ge&&Ge.isValid&&Ge.texture&&x.init(e,Ge,s.renderState)}}for(let be=0;be<b.length;be++){let de=_[be],Be=b[be];de!==null&&Be!==void 0&&Be.update(de,re,l||o)}Re&&Re(ee,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),g=null}let lt=new vf;lt.setAnimationLoop(ze),this.setAnimationLoop=function(ee){Re=ee},this.dispose=function(){}}},fs=new wn,gy=new Ve;function xy(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,yf(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,b,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,M,b):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===$t&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===$t&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=e.get(p),b=M.envMap,_=M.envMapRotation;b&&(m.envMap.value=b,fs.copy(_),fs.x*=-1,fs.y*=-1,fs.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),m.envMapRotation.value.setFromMatrix4(gy.makeRotationFromEuler(fs)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$t&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function _y(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,b){let _=b.program;n.uniformBlockBinding(M,_)}function l(M,b){let _=s[M.id];_===void 0&&(g(M),_=h(M),s[M.id]=_,M.addEventListener("dispose",m));let I=b.program;n.updateUBOMapping(M,I);let T=e.render.frame;r[M.id]!==T&&(d(M),r[M.id]=T)}function h(M){let b=u();M.__bindingPointIndex=b;let _=i.createBuffer(),I=M.__size,T=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,I,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,_),_}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let b=s[M.id],_=M.uniforms,I=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let T=0,R=_.length;T<R;T++){let P=Array.isArray(_[T])?_[T]:[_[T]];for(let S=0,v=P.length;S<v;S++){let L=P[S];if(f(L,T,S,I)===!0){let H=L.__offset,V=Array.isArray(L.value)?L.value:[L.value],k=0;for(let Z=0;Z<V.length;Z++){let X=V[Z],ie=x(X);typeof X=="number"||typeof X=="boolean"?(L.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,H+k,L.__data)):X.isMatrix3?(L.__data[0]=X.elements[0],L.__data[1]=X.elements[1],L.__data[2]=X.elements[2],L.__data[3]=0,L.__data[4]=X.elements[3],L.__data[5]=X.elements[4],L.__data[6]=X.elements[5],L.__data[7]=0,L.__data[8]=X.elements[6],L.__data[9]=X.elements[7],L.__data[10]=X.elements[8],L.__data[11]=0):(X.toArray(L.__data,k),k+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,b,_,I){let T=M.value,R=b+"_"+_;if(I[R]===void 0)return typeof T=="number"||typeof T=="boolean"?I[R]=T:I[R]=T.clone(),!0;{let P=I[R];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return I[R]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(M){let b=M.uniforms,_=0,I=16;for(let R=0,P=b.length;R<P;R++){let S=Array.isArray(b[R])?b[R]:[b[R]];for(let v=0,L=S.length;v<L;v++){let H=S[v],V=Array.isArray(H.value)?H.value:[H.value];for(let k=0,Z=V.length;k<Z;k++){let X=V[k],ie=x(X),q=_%I,le=q%ie.boundary,xe=q+le;_+=le,xe!==0&&I-xe<ie.storage&&(_+=I-xe),H.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=_,_+=ie.storage}}}let T=_%I;return T>0&&(_+=I-T),M.__size=_,M.__cache={},this}function x(M){let b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),b}function m(M){let b=M.target;b.removeEventListener("dispose",m);let _=o.indexOf(b.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(let M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var _a=class{constructor(e={}){let{canvas:t=Sm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,M=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ut,this.toneMapping=Bi,this.toneMappingExposure=1;let _=this,I=!1,T=0,R=0,P=null,S=-1,v=null,L=new ut,H=new ut,V=null,k=new ve(0),Z=0,X=t.width,ie=t.height,q=1,le=null,xe=null,Re=new ut(0,0,X,ie),ze=new ut(0,0,X,ie),lt=!1,ee=new fr,re=!1,be=!1,de=new Ve,Be=new Ve,Ge=new D,N=new ut,$={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Y=!1;function ae(){return P===null?q:1}let C=n;function Ae(w,O){return t.getContext(w,O)}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${rh}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",_e,!1),C===null){let O="webgl2";if(C=Ae(O,w),C===null)throw Ae(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let me,ke,we,ht,De,E,y,z,j,te,Q,Ue,ge,Se,ot,oe,Ee,He,We,Te,rt,Ke,Et,U;function pe(){me=new Nx(C),me.init(),Ke=new dy(C,me),ke=new Rx(C,me,e,Ke),we=new ly(C,me),ke.reverseDepthBuffer&&d&&we.buffers.depth.setReversed(!0),ht=new Fx(C),De=new K_,E=new uy(C,me,we,De,ke,Ke,ht),y=new Ix(_),z=new Dx(_),j=new Wm(C),Et=new Tx(C,j),te=new Ux(C,j,ht,Et),Q=new kx(C,te,j,ht),We=new Bx(C,ke,E),oe=new Cx(De),Ue=new Z_(_,y,z,me,ke,Et,oe),ge=new xy(_,De),Se=new j_,ot=new sy(me),He=new Ex(_,y,z,we,Q,f,c),Ee=new ay(_,Q,ke),U=new _y(C,ht,ke,we),Te=new Ax(C,me,ht),rt=new Ox(C,me,ht),ht.programs=Ue.programs,_.capabilities=ke,_.extensions=me,_.properties=De,_.renderLists=Se,_.shadowMap=Ee,_.state=we,_.info=ht}pe();let J=new Wl(_,C);this.xr=J,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let w=me.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=me.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize(X,ie,!1))},this.getSize=function(w){return w.set(X,ie)},this.setSize=function(w,O,G=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=w,ie=O,t.width=Math.floor(w*q),t.height=Math.floor(O*q),G===!0&&(t.style.width=w+"px",t.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(X*q,ie*q).floor()},this.setDrawingBufferSize=function(w,O,G){X=w,ie=O,q=G,t.width=Math.floor(w*G),t.height=Math.floor(O*G),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(Re)},this.setViewport=function(w,O,G,W){w.isVector4?Re.set(w.x,w.y,w.z,w.w):Re.set(w,O,G,W),we.viewport(L.copy(Re).multiplyScalar(q).round())},this.getScissor=function(w){return w.copy(ze)},this.setScissor=function(w,O,G,W){w.isVector4?ze.set(w.x,w.y,w.z,w.w):ze.set(w,O,G,W),we.scissor(H.copy(ze).multiplyScalar(q).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(w){we.setScissorTest(lt=w)},this.setOpaqueSort=function(w){le=w},this.setTransparentSort=function(w){xe=w},this.getClearColor=function(w){return w.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor.apply(He,arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha.apply(He,arguments)},this.clear=function(w=!0,O=!0,G=!0){let W=0;if(w){let F=!1;if(P!==null){let ce=P.texture.format;F=ce===yh||ce===_h||ce===Ba}if(F){let ce=P.texture.type,ye=ce===fi||ce===ki||ce===Kr||ce===ar||ce===mh||ce===gh,Ce=He.getClearColor(),Ie=He.getClearAlpha(),Xe=Ce.r,$e=Ce.g,Pe=Ce.b;ye?(g[0]=Xe,g[1]=$e,g[2]=Pe,g[3]=Ie,C.clearBufferuiv(C.COLOR,0,g)):(x[0]=Xe,x[1]=$e,x[2]=Pe,x[3]=Ie,C.clearBufferiv(C.COLOR,0,x))}else W|=C.COLOR_BUFFER_BIT}O&&(W|=C.DEPTH_BUFFER_BIT),G&&(W|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),Se.dispose(),ot.dispose(),De.dispose(),y.dispose(),z.dispose(),Q.dispose(),Et.dispose(),U.dispose(),Ue.dispose(),J.dispose(),J.removeEventListener("sessionstart",Tu),J.removeEventListener("sessionend",Au),as.stop()};function ne(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let w=ht.autoReset,O=Ee.enabled,G=Ee.autoUpdate,W=Ee.needsUpdate,F=Ee.type;pe(),ht.autoReset=w,Ee.enabled=O,Ee.autoUpdate=G,Ee.needsUpdate=W,Ee.type=F}function _e(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ye(w){let O=w.target;O.removeEventListener("dispose",Ye),Dt(O)}function Dt(w){Jt(w),De.remove(w)}function Jt(w){let O=De.get(w).programs;O!==void 0&&(O.forEach(function(G){Ue.releaseProgram(G)}),w.isShaderMaterial&&Ue.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,G,W,F,ce){O===null&&(O=$);let ye=F.isMesh&&F.matrixWorld.determinant()<0,Ce=Sp(w,O,G,W,F);we.setMaterial(W,ye);let Ie=G.index,Xe=1;if(W.wireframe===!0){if(Ie=te.getWireframeAttribute(G),Ie===void 0)return;Xe=2}let $e=G.drawRange,Pe=G.attributes.position,at=$e.start*Xe,Tt=($e.start+$e.count)*Xe;ce!==null&&(at=Math.max(at,ce.start*Xe),Tt=Math.min(Tt,(ce.start+ce.count)*Xe)),Ie!==null?(at=Math.max(at,0),Tt=Math.min(Tt,Ie.count)):Pe!=null&&(at=Math.max(at,0),Tt=Math.min(Tt,Pe.count));let Rt=Tt-at;if(Rt<0||Rt===1/0)return;Et.setup(F,W,Ce,G,Ie);let dn,ft=Te;if(Ie!==null&&(dn=j.get(Ie),ft=rt,ft.setIndex(dn)),F.isMesh)W.wireframe===!0?(we.setLineWidth(W.wireframeLinewidth*ae()),ft.setMode(C.LINES)):ft.setMode(C.TRIANGLES);else if(F.isLine){let Oe=W.linewidth;Oe===void 0&&(Oe=1),we.setLineWidth(Oe*ae()),F.isLineSegments?ft.setMode(C.LINES):F.isLineLoop?ft.setMode(C.LINE_LOOP):ft.setMode(C.LINE_STRIP)}else F.isPoints?ft.setMode(C.POINTS):F.isSprite&&ft.setMode(C.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ft.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(me.get("WEBGL_multi_draw"))ft.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Oe=F._multiDrawStarts,ti=F._multiDrawCounts,pt=F._multiDrawCount,Fn=Ie?j.get(Ie).bytesPerElement:1,Os=De.get(W).currentProgram.getUniforms();for(let vn=0;vn<pt;vn++)Os.setValue(C,"_gl_DrawID",vn),ft.render(Oe[vn]/Fn,ti[vn])}else if(F.isInstancedMesh)ft.renderInstances(at,Rt,F.count);else if(G.isInstancedBufferGeometry){let Oe=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,ti=Math.min(G.instanceCount,Oe);ft.renderInstances(at,Rt,ti)}else ft.render(at,Rt)};function _t(w,O,G){w.transparent===!0&&w.side===nn&&w.forceSinglePass===!1?(w.side=$t,w.needsUpdate=!0,Co(w,O,G),w.side=Kn,w.needsUpdate=!0,Co(w,O,G),w.side=nn):Co(w,O,G)}this.compile=function(w,O,G=null){G===null&&(G=w),p=ot.get(G),p.init(O),b.push(p),G.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),w!==G&&w.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();let W=new Set;return w.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let ce=F.material;if(ce)if(Array.isArray(ce))for(let ye=0;ye<ce.length;ye++){let Ce=ce[ye];_t(Ce,G,F),W.add(Ce)}else _t(ce,G,F),W.add(ce)}),b.pop(),p=null,W},this.compileAsync=function(w,O,G=null){let W=this.compile(w,O,G);return new Promise(F=>{function ce(){if(W.forEach(function(ye){De.get(ye).currentProgram.isReady()&&W.delete(ye)}),W.size===0){F(w);return}setTimeout(ce,10)}me.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let On=null;function ei(w){On&&On(w)}function Tu(){as.stop()}function Au(){as.start()}let as=new vf;as.setAnimationLoop(ei),typeof self<"u"&&as.setContext(self),this.setAnimationLoop=function(w){On=w,J.setAnimationLoop(w),w===null?as.stop():as.start()},J.addEventListener("sessionstart",Tu),J.addEventListener("sessionend",Au),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(O),O=J.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,O,P),p=ot.get(w,b.length),p.init(O),b.push(p),Be.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ee.setFromProjectionMatrix(Be),be=this.localClippingEnabled,re=oe.init(this.clippingPlanes,be),m=Se.get(w,M.length),m.init(),M.push(m),J.enabled===!0&&J.isPresenting===!0){let ce=_.xr.getDepthSensingMesh();ce!==null&&lc(ce,O,-1/0,_.sortObjects)}lc(w,O,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(le,xe),Y=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,Y&&He.addToRenderList(m,w),this.info.render.frame++,re===!0&&oe.beginShadows();let G=p.state.shadowsArray;Ee.render(G,w,O),re===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=m.opaque,F=m.transmissive;if(p.setupLights(),O.isArrayCamera){let ce=O.cameras;if(F.length>0)for(let ye=0,Ce=ce.length;ye<Ce;ye++){let Ie=ce[ye];Cu(W,F,w,Ie)}Y&&He.render(w);for(let ye=0,Ce=ce.length;ye<Ce;ye++){let Ie=ce[ye];Ru(m,w,Ie,Ie.viewport)}}else F.length>0&&Cu(W,F,w,O),Y&&He.render(w),Ru(m,w,O);P!==null&&(E.updateMultisampleRenderTarget(P),E.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(_,w,O),Et.resetDefaultState(),S=-1,v=null,b.pop(),b.length>0?(p=b[b.length-1],re===!0&&oe.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function lc(w,O,G,W){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ee.intersectsSprite(w)){W&&N.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Be);let ye=Q.update(w),Ce=w.material;Ce.visible&&m.push(w,ye,Ce,G,N.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ee.intersectsObject(w))){let ye=Q.update(w),Ce=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),N.copy(w.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),N.copy(ye.boundingSphere.center)),N.applyMatrix4(w.matrixWorld).applyMatrix4(Be)),Array.isArray(Ce)){let Ie=ye.groups;for(let Xe=0,$e=Ie.length;Xe<$e;Xe++){let Pe=Ie[Xe],at=Ce[Pe.materialIndex];at&&at.visible&&m.push(w,ye,at,G,N.z,Pe)}}else Ce.visible&&m.push(w,ye,Ce,G,N.z,null)}}let ce=w.children;for(let ye=0,Ce=ce.length;ye<Ce;ye++)lc(ce[ye],O,G,W)}function Ru(w,O,G,W){let F=w.opaque,ce=w.transmissive,ye=w.transparent;p.setupLightsView(G),re===!0&&oe.setGlobalState(_.clippingPlanes,G),W&&we.viewport(L.copy(W)),F.length>0&&Ro(F,O,G),ce.length>0&&Ro(ce,O,G),ye.length>0&&Ro(ye,O,G),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function Cu(w,O,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new Kt(1,1,{generateMipmaps:!0,type:me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float")?Tn:fi,minFilter:$n,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));let ce=p.state.transmissionRenderTarget[W.id],ye=W.viewport||L;ce.setSize(ye.z,ye.w);let Ce=_.getRenderTarget();_.setRenderTarget(ce),_.getClearColor(k),Z=_.getClearAlpha(),Z<1&&_.setClearColor(16777215,.5),_.clear(),Y&&He.render(G);let Ie=_.toneMapping;_.toneMapping=Bi;let Xe=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),re===!0&&oe.setGlobalState(_.clippingPlanes,W),Ro(w,G,W),E.updateMultisampleRenderTarget(ce),E.updateRenderTargetMipmap(ce),me.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Pe=0,at=O.length;Pe<at;Pe++){let Tt=O[Pe],Rt=Tt.object,dn=Tt.geometry,ft=Tt.material,Oe=Tt.group;if(ft.side===nn&&Rt.layers.test(W.layers)){let ti=ft.side;ft.side=$t,ft.needsUpdate=!0,Iu(Rt,G,W,dn,ft,Oe),ft.side=ti,ft.needsUpdate=!0,$e=!0}}$e===!0&&(E.updateMultisampleRenderTarget(ce),E.updateRenderTargetMipmap(ce))}_.setRenderTarget(Ce),_.setClearColor(k,Z),Xe!==void 0&&(W.viewport=Xe),_.toneMapping=Ie}function Ro(w,O,G){let W=O.isScene===!0?O.overrideMaterial:null;for(let F=0,ce=w.length;F<ce;F++){let ye=w[F],Ce=ye.object,Ie=ye.geometry,Xe=W===null?ye.material:W,$e=ye.group;Ce.layers.test(G.layers)&&Iu(Ce,O,G,Ie,Xe,$e)}}function Iu(w,O,G,W,F,ce){w.onBeforeRender(_,O,G,W,F,ce),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),F.onBeforeRender(_,O,G,W,w,ce),F.transparent===!0&&F.side===nn&&F.forceSinglePass===!1?(F.side=$t,F.needsUpdate=!0,_.renderBufferDirect(G,O,W,F,w,ce),F.side=Kn,F.needsUpdate=!0,_.renderBufferDirect(G,O,W,F,w,ce),F.side=nn):_.renderBufferDirect(G,O,W,F,w,ce),w.onAfterRender(_,O,G,W,F,ce)}function Co(w,O,G){O.isScene!==!0&&(O=$);let W=De.get(w),F=p.state.lights,ce=p.state.shadowsArray,ye=F.state.version,Ce=Ue.getParameters(w,F.state,ce,O,G),Ie=Ue.getProgramCacheKey(Ce),Xe=W.programs;W.environment=w.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(w.isMeshStandardMaterial?z:y).get(w.envMap||W.environment),W.envMapRotation=W.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,Xe===void 0&&(w.addEventListener("dispose",Ye),Xe=new Map,W.programs=Xe);let $e=Xe.get(Ie);if($e!==void 0){if(W.currentProgram===$e&&W.lightsStateVersion===ye)return Lu(w,Ce),$e}else Ce.uniforms=Ue.getUniforms(w),w.onBeforeCompile(Ce,_),$e=Ue.acquireProgram(Ce,Ie),Xe.set(Ie,$e),W.uniforms=Ce.uniforms;let Pe=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Pe.clippingPlanes=oe.uniform),Lu(w,Ce),W.needsLights=Ep(w),W.lightsStateVersion=ye,W.needsLights&&(Pe.ambientLightColor.value=F.state.ambient,Pe.lightProbe.value=F.state.probe,Pe.directionalLights.value=F.state.directional,Pe.directionalLightShadows.value=F.state.directionalShadow,Pe.spotLights.value=F.state.spot,Pe.spotLightShadows.value=F.state.spotShadow,Pe.rectAreaLights.value=F.state.rectArea,Pe.ltc_1.value=F.state.rectAreaLTC1,Pe.ltc_2.value=F.state.rectAreaLTC2,Pe.pointLights.value=F.state.point,Pe.pointLightShadows.value=F.state.pointShadow,Pe.hemisphereLights.value=F.state.hemi,Pe.directionalShadowMap.value=F.state.directionalShadowMap,Pe.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Pe.spotShadowMap.value=F.state.spotShadowMap,Pe.spotLightMatrix.value=F.state.spotLightMatrix,Pe.spotLightMap.value=F.state.spotLightMap,Pe.pointShadowMap.value=F.state.pointShadowMap,Pe.pointShadowMatrix.value=F.state.pointShadowMatrix),W.currentProgram=$e,W.uniformsList=null,$e}function Pu(w){if(w.uniformsList===null){let O=w.currentProgram.getUniforms();w.uniformsList=ir.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function Lu(w,O){let G=De.get(w);G.outputColorSpace=O.outputColorSpace,G.batching=O.batching,G.batchingColor=O.batchingColor,G.instancing=O.instancing,G.instancingColor=O.instancingColor,G.instancingMorph=O.instancingMorph,G.skinning=O.skinning,G.morphTargets=O.morphTargets,G.morphNormals=O.morphNormals,G.morphColors=O.morphColors,G.morphTargetsCount=O.morphTargetsCount,G.numClippingPlanes=O.numClippingPlanes,G.numIntersection=O.numClipIntersection,G.vertexAlphas=O.vertexAlphas,G.vertexTangents=O.vertexTangents,G.toneMapping=O.toneMapping}function Sp(w,O,G,W,F){O.isScene!==!0&&(O=$),E.resetTextureUnits();let ce=O.fog,ye=W.isMeshStandardMaterial?O.environment:null,Ce=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:an,Ie=(W.isMeshStandardMaterial?z:y).get(W.envMap||ye),Xe=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,$e=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Pe=!!G.morphAttributes.position,at=!!G.morphAttributes.normal,Tt=!!G.morphAttributes.color,Rt=Bi;W.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Rt=_.toneMapping);let dn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ft=dn!==void 0?dn.length:0,Oe=De.get(W),ti=p.state.lights;if(re===!0&&(be===!0||w!==v)){let Rn=w===v&&W.id===S;oe.setState(W,w,Rn)}let pt=!1;W.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==ti.state.version||Oe.outputColorSpace!==Ce||F.isBatchedMesh&&Oe.batching===!1||!F.isBatchedMesh&&Oe.batching===!0||F.isBatchedMesh&&Oe.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Oe.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Oe.instancing===!1||!F.isInstancedMesh&&Oe.instancing===!0||F.isSkinnedMesh&&Oe.skinning===!1||!F.isSkinnedMesh&&Oe.skinning===!0||F.isInstancedMesh&&Oe.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Oe.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Oe.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Oe.instancingMorph===!1&&F.morphTexture!==null||Oe.envMap!==Ie||W.fog===!0&&Oe.fog!==ce||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==oe.numPlanes||Oe.numIntersection!==oe.numIntersection)||Oe.vertexAlphas!==Xe||Oe.vertexTangents!==$e||Oe.morphTargets!==Pe||Oe.morphNormals!==at||Oe.morphColors!==Tt||Oe.toneMapping!==Rt||Oe.morphTargetsCount!==ft)&&(pt=!0):(pt=!0,Oe.__version=W.version);let Fn=Oe.currentProgram;pt===!0&&(Fn=Co(W,O,F));let Os=!1,vn=!1,Lr=!1,Ct=Fn.getUniforms(),qn=Oe.uniforms;if(we.useProgram(Fn.program)&&(Os=!0,vn=!0,Lr=!0),W.id!==S&&(S=W.id,vn=!0),Os||v!==w){we.buffers.depth.getReversed()?(de.copy(w.projectionMatrix),Em(de),Tm(de),Ct.setValue(C,"projectionMatrix",de)):Ct.setValue(C,"projectionMatrix",w.projectionMatrix),Ct.setValue(C,"viewMatrix",w.matrixWorldInverse);let Ri=Ct.map.cameraPosition;Ri!==void 0&&Ri.setValue(C,Ge.setFromMatrixPosition(w.matrixWorld)),ke.logarithmicDepthBuffer&&Ct.setValue(C,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ct.setValue(C,"isOrthographic",w.isOrthographicCamera===!0),v!==w&&(v=w,vn=!0,Lr=!0)}if(F.isSkinnedMesh){Ct.setOptional(C,F,"bindMatrix"),Ct.setOptional(C,F,"bindMatrixInverse");let Rn=F.skeleton;Rn&&(Rn.boneTexture===null&&Rn.computeBoneTexture(),Ct.setValue(C,"boneTexture",Rn.boneTexture,E))}F.isBatchedMesh&&(Ct.setOptional(C,F,"batchingTexture"),Ct.setValue(C,"batchingTexture",F._matricesTexture,E),Ct.setOptional(C,F,"batchingIdTexture"),Ct.setValue(C,"batchingIdTexture",F._indirectTexture,E),Ct.setOptional(C,F,"batchingColorTexture"),F._colorsTexture!==null&&Ct.setValue(C,"batchingColorTexture",F._colorsTexture,E));let Dr=G.morphAttributes;if((Dr.position!==void 0||Dr.normal!==void 0||Dr.color!==void 0)&&We.update(F,G,Fn),(vn||Oe.receiveShadow!==F.receiveShadow)&&(Oe.receiveShadow=F.receiveShadow,Ct.setValue(C,"receiveShadow",F.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(qn.envMap.value=Ie,qn.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&O.environment!==null&&(qn.envMapIntensity.value=O.environmentIntensity),vn&&(Ct.setValue(C,"toneMappingExposure",_.toneMappingExposure),Oe.needsLights&&wp(qn,Lr),ce&&W.fog===!0&&ge.refreshFogUniforms(qn,ce),ge.refreshMaterialUniforms(qn,W,q,ie,p.state.transmissionRenderTarget[w.id]),ir.upload(C,Pu(Oe),qn,E)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ir.upload(C,Pu(Oe),qn,E),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ct.setValue(C,"center",F.center),Ct.setValue(C,"modelViewMatrix",F.modelViewMatrix),Ct.setValue(C,"normalMatrix",F.normalMatrix),Ct.setValue(C,"modelMatrix",F.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let Rn=W.uniformsGroups;for(let Ri=0,Ci=Rn.length;Ri<Ci;Ri++){let Du=Rn[Ri];U.update(Du,Fn),U.bind(Du,Fn)}}return Fn}function wp(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function Ep(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,O,G){De.get(w.texture).__webglTexture=O,De.get(w.depthTexture).__webglTexture=G;let W=De.get(w);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,O){let G=De.get(w);G.__webglFramebuffer=O,G.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,G=0){P=w,T=O,R=G;let W=!0,F=null,ce=!1,ye=!1;if(w){let Ie=De.get(w);if(Ie.__useDefaultFramebuffer!==void 0)we.bindFramebuffer(C.FRAMEBUFFER,null),W=!1;else if(Ie.__webglFramebuffer===void 0)E.setupRenderTarget(w);else if(Ie.__hasExternalTextures)E.rebindTextures(w,De.get(w.texture).__webglTexture,De.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Pe=w.depthTexture;if(Ie.__boundDepthTexture!==Pe){if(Pe!==null&&De.has(Pe)&&(w.width!==Pe.image.width||w.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(w)}}let Xe=w.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(ye=!0);let $e=De.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray($e[O])?F=$e[O][G]:F=$e[O],ce=!0):w.samples>0&&E.useMultisampledRTT(w)===!1?F=De.get(w).__webglMultisampledFramebuffer:Array.isArray($e)?F=$e[G]:F=$e,L.copy(w.viewport),H.copy(w.scissor),V=w.scissorTest}else L.copy(Re).multiplyScalar(q).floor(),H.copy(ze).multiplyScalar(q).floor(),V=lt;if(we.bindFramebuffer(C.FRAMEBUFFER,F)&&W&&we.drawBuffers(w,F),we.viewport(L),we.scissor(H),we.setScissorTest(V),ce){let Ie=De.get(w.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ie.__webglTexture,G)}else if(ye){let Ie=De.get(w.texture),Xe=O||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ie.__webglTexture,G||0,Xe)}S=-1},this.readRenderTargetPixels=function(w,O,G,W,F,ce,ye){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=De.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(Ce=Ce[ye]),Ce){we.bindFramebuffer(C.FRAMEBUFFER,Ce);try{let Ie=w.texture,Xe=Ie.format,$e=Ie.type;if(!ke.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ke.textureTypeReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-W&&G>=0&&G<=w.height-F&&C.readPixels(O,G,W,F,Ke.convert(Xe),Ke.convert($e),ce)}finally{let Ie=P!==null?De.get(P).__webglFramebuffer:null;we.bindFramebuffer(C.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(w,O,G,W,F,ce,ye){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=De.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(Ce=Ce[ye]),Ce){let Ie=w.texture,Xe=Ie.format,$e=Ie.type;if(!ke.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ke.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=w.width-W&&G>=0&&G<=w.height-F){we.bindFramebuffer(C.FRAMEBUFFER,Ce);let Pe=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Pe),C.bufferData(C.PIXEL_PACK_BUFFER,ce.byteLength,C.STREAM_READ),C.readPixels(O,G,W,F,Ke.convert(Xe),Ke.convert($e),0);let at=P!==null?De.get(P).__webglFramebuffer:null;we.bindFramebuffer(C.FRAMEBUFFER,at);let Tt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await wm(C,Tt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Pe),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ce),C.deleteBuffer(Pe),C.deleteSync(Tt),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,O=null,G=0){w.isTexture!==!0&&(Gr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,w=arguments[1]);let W=Math.pow(2,-G),F=Math.floor(w.image.width*W),ce=Math.floor(w.image.height*W),ye=O!==null?O.x:0,Ce=O!==null?O.y:0;E.setTexture2D(w,0),C.copyTexSubImage2D(C.TEXTURE_2D,G,0,0,ye,Ce,F,ce),we.unbindTexture()},this.copyTextureToTexture=function(w,O,G=null,W=null,F=0){w.isTexture!==!0&&(Gr("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,w=arguments[1],O=arguments[2],F=arguments[3]||0,G=null);let ce,ye,Ce,Ie,Xe,$e,Pe,at,Tt,Rt=w.isCompressedTexture?w.mipmaps[F]:w.image;G!==null?(ce=G.max.x-G.min.x,ye=G.max.y-G.min.y,Ce=G.isBox3?G.max.z-G.min.z:1,Ie=G.min.x,Xe=G.min.y,$e=G.isBox3?G.min.z:0):(ce=Rt.width,ye=Rt.height,Ce=Rt.depth||1,Ie=0,Xe=0,$e=0),W!==null?(Pe=W.x,at=W.y,Tt=W.z):(Pe=0,at=0,Tt=0);let dn=Ke.convert(O.format),ft=Ke.convert(O.type),Oe;O.isData3DTexture?(E.setTexture3D(O,0),Oe=C.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(E.setTexture2DArray(O,0),Oe=C.TEXTURE_2D_ARRAY):(E.setTexture2D(O,0),Oe=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,O.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,O.unpackAlignment);let ti=C.getParameter(C.UNPACK_ROW_LENGTH),pt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Fn=C.getParameter(C.UNPACK_SKIP_PIXELS),Os=C.getParameter(C.UNPACK_SKIP_ROWS),vn=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Rt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Rt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ie),C.pixelStorei(C.UNPACK_SKIP_ROWS,Xe),C.pixelStorei(C.UNPACK_SKIP_IMAGES,$e);let Lr=w.isDataArrayTexture||w.isData3DTexture,Ct=O.isDataArrayTexture||O.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let qn=De.get(w),Dr=De.get(O),Rn=De.get(qn.__renderTarget),Ri=De.get(Dr.__renderTarget);we.bindFramebuffer(C.READ_FRAMEBUFFER,Rn.__webglFramebuffer),we.bindFramebuffer(C.DRAW_FRAMEBUFFER,Ri.__webglFramebuffer);for(let Ci=0;Ci<Ce;Ci++)Lr&&C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,De.get(w).__webglTexture,F,$e+Ci),w.isDepthTexture?(Ct&&C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,De.get(O).__webglTexture,F,Tt+Ci),C.blitFramebuffer(Ie,Xe,ce,ye,Pe,at,ce,ye,C.DEPTH_BUFFER_BIT,C.NEAREST)):Ct?C.copyTexSubImage3D(Oe,F,Pe,at,Tt+Ci,Ie,Xe,ce,ye):C.copyTexSubImage2D(Oe,F,Pe,at,Tt+Ci,Ie,Xe,ce,ye);we.bindFramebuffer(C.READ_FRAMEBUFFER,null),we.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Ct?w.isDataTexture||w.isData3DTexture?C.texSubImage3D(Oe,F,Pe,at,Tt,ce,ye,Ce,dn,ft,Rt.data):O.isCompressedArrayTexture?C.compressedTexSubImage3D(Oe,F,Pe,at,Tt,ce,ye,Ce,dn,Rt.data):C.texSubImage3D(Oe,F,Pe,at,Tt,ce,ye,Ce,dn,ft,Rt):w.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,F,Pe,at,ce,ye,dn,ft,Rt.data):w.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,F,Pe,at,Rt.width,Rt.height,dn,Rt.data):C.texSubImage2D(C.TEXTURE_2D,F,Pe,at,ce,ye,dn,ft,Rt);C.pixelStorei(C.UNPACK_ROW_LENGTH,ti),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,pt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Fn),C.pixelStorei(C.UNPACK_SKIP_ROWS,Os),C.pixelStorei(C.UNPACK_SKIP_IMAGES,vn),F===0&&O.generateMipmaps&&C.generateMipmap(Oe),we.unbindTexture()},this.copyTextureToTexture3D=function(w,O,G=null,W=null,F=0){return w.isTexture!==!0&&(Gr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,w=arguments[2],O=arguments[3],F=arguments[4]||0),Gr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,O,G,W,F)},this.initRenderTarget=function(w){De.get(w).__webglFramebuffer===void 0&&E.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?E.setTextureCube(w,0):w.isData3DTexture?E.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?E.setTexture2DArray(w,0):E.setTexture2D(w,0),we.unbindTexture()},this.resetState=function(){T=0,R=0,P=null,we.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}},ya=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ve(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},va=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ve(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},bs=class extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Qr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Rl,this.updateRanges=[],this.version=0,this.uuid=Vn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},hn=new D,eo=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Hn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Hn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Hn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Hn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array),r=yt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new vt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Nd=new D,Ud=new ut,Od=new ut,yy=new D,Fd=new Ve,Ko=new D,Fc=new Zt,Bd=new Ve,Bc=new Ms,Ma=class extends se{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Fu,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Wt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ko),this.boundingBox.expandByPoint(Ko)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Zt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ko),this.boundingSphere.expandByPoint(Ko)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fc.copy(this.boundingSphere),Fc.applyMatrix4(s),e.ray.intersectsSphere(Fc)!==!1&&(Bd.copy(s).invert(),Bc.copy(e.ray).applyMatrix4(Bd),!(this.boundingBox!==null&&Bc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Bc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ut,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Fu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Zp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Ud.fromBufferAttribute(s.attributes.skinIndex,e),Od.fromBufferAttribute(s.attributes.skinWeight,e),Nd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Od.getComponent(r);if(o!==0){let a=Ud.getComponent(r);Fd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(yy.copy(Nd).applyMatrix4(Fd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},to=class extends Lt{constructor(){super(),this.isBone=!0,this.type="Bone"}},vs=class extends Xt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=sn,h=sn,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},kd=new Ve,vy=new Ve,ba=class i{constructor(e=[],t=[]){this.uuid=Vn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ve;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:vy;kd.multiplyMatrices(a,t[r]),kd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new vs(t,e,e,mn,Sn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new to),this.bones.push(o),this.boneInverses.push(new Ve().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},Ss=class extends vt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Js=new Ve,zd=new Ve,Jo=[],Hd=new Wt,My=new Ve,Br=new se,kr=new Zt,Vi=class extends se{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ss(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,My)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Wt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Js),Hd.copy(e.boundingBox).applyMatrix4(Js),this.boundingBox.union(Hd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Js),kr.copy(e.boundingSphere).applyMatrix4(Js),this.boundingSphere.union(kr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Br.geometry=this.geometry,Br.material=this.material,Br.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),kr.copy(this.boundingSphere),kr.applyMatrix4(n),e.ray.intersectsSphere(kr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Js),zd.multiplyMatrices(n,Js),Br.matrixWorld=zd,Br.raycast(e,Jo);for(let o=0,a=Jo.length;o<a;o++){let c=Jo[o];c.instanceId=r,c.object=this,t.push(c)}Jo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ss(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new vs(new Float32Array(s*this.count),s,this.count,xh,Sn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};function kc(i,e){return i-e}function by(i,e){return i.z-e.z}function Sy(i,e){return e.z-i.z}var Xl=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,s){let r=this.pool,o=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let a=r[this.index];o.push(a),this.index++,a.start=e,a.count=t,a.z=n,a.index=s}reset(){this.list.length=0,this.index=0}},fn=new Ve,wy=new ve(1,1,1),zc=new fr,jo=new Wt,ps=new Zt,zr=new D,Vd=new D,Ey=new D,Hc=new Xl,en=new se,Qo=[];function Ty(i,e,t=0){let n=e.itemSize;if(i.isInterleavedBufferAttribute||i.array.constructor!==e.array.constructor){let s=i.count;for(let r=0;r<s;r++)for(let o=0;o<n;o++)e.setComponent(r+t,o,i.getComponent(r,o))}else e.array.set(i.array,t*n);e.needsUpdate=!0}function ms(i,e){if(i.constructor!==e.constructor){let t=Math.min(i.length,e.length);for(let n=0;n<t;n++)e[n]=i[n]}else{let t=Math.min(i.length,e.length);e.set(new i.constructor(i.buffer,0,t))}}var no=class extends se{get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}constructor(e,t,n=t*2,s){super(new dt,s),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4),n=new vs(t,e,e,mn,Sn);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Uint32Array(e*e),n=new vs(t,e,e,Ba,ki);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Float32Array(e*e*4).fill(1),n=new vs(t,e,e,mn,Sn);n.colorSpace=je.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){let t=this.geometry,n=this._maxVertexCount,s=this._maxIndexCount;if(this._geometryInitialized===!1){for(let r in e.attributes){let o=e.getAttribute(r),{array:a,itemSize:c,normalized:l}=o,h=new a.constructor(n*c),u=new vt(h,c,l);t.setAttribute(r,u)}if(e.getIndex()!==null){let r=n>65535?new Uint32Array(s):new Uint16Array(s);t.setIndex(new vt(r,1))}this._geometryInitialized=!0}}_validateGeometry(e){let t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(let n in t.attributes){if(!e.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);let s=e.getAttribute(n),r=t.getAttribute(n);if(s.itemSize!==r.itemSize||s.normalized!==r.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wt);let e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,s=t.length;n<s;n++){if(t[n].active===!1)continue;let r=t[n].geometryIndex;this.getMatrixAt(n,fn),this.getBoundingBoxAt(r,jo).applyMatrix4(fn),e.union(jo)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zt);let e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,s=t.length;n<s;n++){if(t[n].active===!1)continue;let r=t[n].geometryIndex;this.getMatrixAt(n,fn),this.getBoundingSphereAt(r,ps).applyMatrix4(fn),e.union(ps)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("BatchedMesh: Maximum item count reached.");let n={visible:!0,active:!0,geometryIndex:e},s=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(kc),s=this._availableInstanceIds.shift(),this._instanceInfo[s]=n):(s=this._instanceInfo.length,this._instanceInfo.push(n));let r=this._matricesTexture;fn.identity().toArray(r.image.data,s*16),r.needsUpdate=!0;let o=this._colorsTexture;return o&&(wy.toArray(o.image.data,s*4),o.needsUpdate=!0),this._visibilityChanged=!0,s}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);let s={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;s.vertexStart=this._nextVertexStart,s.reservedVertexCount=t===-1?e.getAttribute("position").count:t;let o=e.getIndex();if(o!==null&&(s.indexStart=this._nextIndexStart,s.reservedIndexCount=n===-1?o.count:n),s.indexStart!==-1&&s.indexStart+s.reservedIndexCount>this._maxIndexCount||s.vertexStart+s.reservedVertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");let c;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(kc),c=this._availableGeometryIds.shift(),r[c]=s):(c=this._geometryCount,this._geometryCount++,r.push(s)),this.setGeometryAt(c,e),this._nextIndexStart=s.indexStart+s.reservedIndexCount,this._nextVertexStart=s.vertexStart+s.reservedVertexCount,c}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);let n=this.geometry,s=n.getIndex()!==null,r=n.getIndex(),o=t.getIndex(),a=this._geometryInfo[e];if(s&&o.count>a.reservedIndexCount||t.attributes.position.count>a.reservedVertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");let c=a.vertexStart,l=a.reservedVertexCount;a.vertexCount=t.getAttribute("position").count;for(let h in n.attributes){let u=t.getAttribute(h),d=n.getAttribute(h);Ty(u,d,c);let f=u.itemSize;for(let g=u.count,x=l;g<x;g++){let m=c+g;for(let p=0;p<f;p++)d.setComponent(m,p,0)}d.needsUpdate=!0,d.addUpdateRange(c*f,l*f)}if(s){let h=a.indexStart,u=a.reservedIndexCount;a.indexCount=t.getIndex().count;for(let d=0;d<o.count;d++)r.setX(h+d,c+o.getX(d));for(let d=o.count,f=u;d<f;d++)r.setX(h+d,c);r.needsUpdate=!0,r.addUpdateRange(h,a.reservedIndexCount)}return a.start=s?a.indexStart:a.vertexStart,a.count=s?a.indexCount:a.vertexCount,a.boundingBox=null,t.boundingBox!==null&&(a.boundingBox=t.boundingBox.clone()),a.boundingSphere=null,t.boundingSphere!==null&&(a.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){let t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;let n=this._instanceInfo;for(let s=0,r=n.length;s<r;s++)n[s].geometryIndex===e&&this.deleteInstance(s);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){let t=this._instanceInfo;return e>=t.length||t[e].active===!1?this:(t[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this)}optimize(){let e=0,t=0,n=this._geometryInfo,s=n.map((o,a)=>a).sort((o,a)=>n[o].vertexStart-n[a].vertexStart),r=this.geometry;for(let o=0,a=n.length;o<a;o++){let c=s[o],l=n[c];if(l.active!==!1){if(r.index!==null){if(l.indexStart!==t){let{indexStart:h,vertexStart:u,reservedIndexCount:d}=l,f=r.index,g=f.array,x=e-u;for(let m=h;m<h+d;m++)g[m]=g[m]+x;f.array.copyWithin(t,h,h+d),f.addUpdateRange(t,d),l.indexStart=t}t+=l.reservedIndexCount}if(l.vertexStart!==e){let{vertexStart:h,reservedVertexCount:u}=l,d=r.attributes;for(let f in d){let g=d[f],{array:x,itemSize:m}=g;x.copyWithin(e*m,h*m,(h+u)*m),g.addUpdateRange(e*m,u*m)}l.vertexStart=e}e+=l.reservedVertexCount,l.start=r.index?l.indexStart:l.vertexStart,this._nextIndexStart=r.index?l.indexStart+l.reservedIndexCount:0,this._nextVertexStart=l.vertexStart+l.reservedVertexCount}}return this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;let n=this.geometry,s=this._geometryInfo[e];if(s.boundingBox===null){let r=new Wt,o=n.index,a=n.attributes.position;for(let c=s.start,l=s.start+s.count;c<l;c++){let h=c;o&&(h=o.getX(h)),r.expandByPoint(zr.fromBufferAttribute(a,h))}s.boundingBox=r}return t.copy(s.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;let n=this.geometry,s=this._geometryInfo[e];if(s.boundingSphere===null){let r=new Zt;this.getBoundingBoxAt(e,jo),jo.getCenter(r.center);let o=n.index,a=n.attributes.position,c=0;for(let l=s.start,h=s.start+s.count;l<h;l++){let u=l;o&&(u=o.getX(u)),zr.fromBufferAttribute(a,u),c=Math.max(c,r.center.distanceToSquared(zr))}r.radius=Math.sqrt(c),s.boundingSphere=r}return t.copy(s.boundingSphere),t}setMatrixAt(e,t){let n=this._instanceInfo,s=this._matricesTexture,r=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?this:(t.toArray(r,e*16),s.needsUpdate=!0,this)}getMatrixAt(e,t){let n=this._instanceInfo,s=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?null:t.fromArray(s,e*16)}setColorAt(e,t){this._colorsTexture===null&&this._initColorsTexture();let n=this._colorsTexture,s=this._colorsTexture.image.data,r=this._instanceInfo;return e>=r.length||r[e].active===!1?this:(t.toArray(s,e*4),n.needsUpdate=!0,this)}getColorAt(e,t){let n=this._colorsTexture.image.data,s=this._instanceInfo;return e>=s.length||s[e].active===!1?null:t.fromArray(n,e*4)}setVisibleAt(e,t){let n=this._instanceInfo;return e>=n.length||n[e].active===!1||n[e].visible===t?this:(n[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){let t=this._instanceInfo;return e>=t.length||t[e].active===!1?!1:t[e].visible}setGeometryIdAt(e,t){let n=this._instanceInfo,s=this._geometryInfo;return e>=n.length||n[e].active===!1||t>=s.length||s[t].active===!1?null:(n[e].geometryIndex=t,this)}getGeometryIdAt(e){let t=this._instanceInfo;return e>=t.length||t[e].active===!1?-1:t[e].geometryIndex}getGeometryRangeAt(e,t={}){if(e<0||e>=this._geometryCount)return null;let n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){let t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(kc);t[t.length-1]===n.length;)n.pop(),t.pop();if(e<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);let s=new Int32Array(e),r=new Int32Array(e);ms(this._multiDrawCounts,s),ms(this._multiDrawStarts,r),this._multiDrawCounts=s,this._multiDrawStarts=r,this._maxInstanceCount=e;let o=this._indirectTexture,a=this._matricesTexture,c=this._colorsTexture;o.dispose(),this._initIndirectTexture(),ms(o.image.data,this._indirectTexture.image.data),a.dispose(),this._initMatricesTexture(),ms(a.image.data,this._matricesTexture.image.data),c&&(c.dispose(),this._initColorsTexture(),ms(c.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){let n=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...n.map(a=>a.vertexStart+a.reservedVertexCount))>e)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(c=>c.indexStart+c.reservedIndexCount))>t)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);let r=this.geometry;r.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new dt,this._initializeGeometry(r));let o=this.geometry;r.index&&ms(r.index.array,o.index.array);for(let a in r.attributes)ms(r.attributes[a].array,o.attributes[a].array)}raycast(e,t){let n=this._instanceInfo,s=this._geometryInfo,r=this.matrixWorld,o=this.geometry;en.material=this.material,en.geometry.index=o.index,en.geometry.attributes=o.attributes,en.geometry.boundingBox===null&&(en.geometry.boundingBox=new Wt),en.geometry.boundingSphere===null&&(en.geometry.boundingSphere=new Zt);for(let a=0,c=n.length;a<c;a++){if(!n[a].visible||!n[a].active)continue;let l=n[a].geometryIndex,h=s[l];en.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(a,en.matrixWorld).premultiply(r),this.getBoundingBoxAt(l,en.geometry.boundingBox),this.getBoundingSphereAt(l,en.geometry.boundingSphere),en.raycast(e,Qo);for(let u=0,d=Qo.length;u<d;u++){let f=Qo[u];f.object=this,f.batchId=a,t.push(f)}Qo.length=0}en.material=null,en.geometry.index=null,en.geometry.attributes={},en.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(e,t,n,s,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let o=s.getIndex(),a=o===null?1:o.array.BYTES_PER_ELEMENT,c=this._instanceInfo,l=this._multiDrawStarts,h=this._multiDrawCounts,u=this._geometryInfo,d=this.perObjectFrustumCulled,f=this._indirectTexture,g=f.image.data;d&&(fn.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),zc.setFromProjectionMatrix(fn,e.coordinateSystem));let x=0;if(this.sortObjects){fn.copy(this.matrixWorld).invert(),zr.setFromMatrixPosition(n.matrixWorld).applyMatrix4(fn),Vd.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(fn);for(let M=0,b=c.length;M<b;M++)if(c[M].visible&&c[M].active){let _=c[M].geometryIndex;this.getMatrixAt(M,fn),this.getBoundingSphereAt(_,ps).applyMatrix4(fn);let I=!1;if(d&&(I=!zc.intersectsSphere(ps)),!I){let T=u[_],R=Ey.subVectors(ps.center,zr).dot(Vd);Hc.push(T.start,T.count,R,M)}}let m=Hc.list,p=this.customSort;p===null?m.sort(r.transparent?Sy:by):p.call(this,m,n);for(let M=0,b=m.length;M<b;M++){let _=m[M];l[x]=_.start*a,h[x]=_.count,g[x]=_.index,x++}Hc.reset()}else for(let m=0,p=c.length;m<p;m++)if(c[m].visible&&c[m].active){let M=c[m].geometryIndex,b=!1;if(d&&(this.getMatrixAt(m,fn),this.getBoundingSphereAt(M,ps).applyMatrix4(fn),b=!zc.intersectsSphere(ps)),!b){let _=u[M];l[x]=_.start*a,h[x]=_.count,g[x]=m,x++}}f.needsUpdate=!0,this._multiDrawCount=x,this._visibilityChanged=!1}onBeforeShadow(e,t,n,s,r,o){this.onBeforeRender(e,null,s,r,o)}},Gi=class extends xn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Sa=new D,wa=new D,Gd=new Ve,Hr=new Ms,ea=new Zt,Vc=new D,Wd=new D,mi=class extends Lt{constructor(e=new dt,t=new Gi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Sa.fromBufferAttribute(t,s-1),wa.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Sa.distanceTo(wa);e.setAttribute("lineDistance",new tt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(s),ea.radius+=r,e.ray.intersectsSphere(ea)===!1)return;Gd.copy(s).invert(),Hr.copy(e.ray).applyMatrix4(Gd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=l){let p=h.getX(x),M=h.getX(x+1),b=ta(this,e,Hr,c,p,M);b&&t.push(b)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(f),p=ta(this,e,Hr,c,x,m);p&&t.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=l){let p=ta(this,e,Hr,c,x,x+1);p&&t.push(p)}if(this.isLineLoop){let x=ta(this,e,Hr,c,g-1,f);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ta(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(Sa.fromBufferAttribute(o,s),wa.fromBufferAttribute(o,r),t.distanceSqToSegment(Sa,wa,Vc,Wd)>n)return;Vc.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Vc);if(!(c<e.near||c>e.far))return{distance:c,point:Wd.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Xd=new D,qd=new D,Ea=class extends mi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Xd.fromBufferAttribute(t,s),qd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Xd.distanceTo(qd);e.setAttribute("lineDistance",new tt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ta=class extends mi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},gi=class extends xn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Yd=new Ve,ql=new Ms,na=new Zt,ia=new D,Wi=class extends Lt{constructor(e=new dt,t=new gi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere),na.applyMatrix4(s),na.radius+=r,e.ray.intersectsSphere(na)===!1)return;Yd.copy(s).invert(),ql.copy(e.ray).applyMatrix4(Yd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,x=f;g<x;g++){let m=l.getX(g);ia.fromBufferAttribute(u,m),$d(ia,m,c,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,x=f;g<x;g++)ia.fromBufferAttribute(u,g),$d(ia,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function $d(i,e,t,n,s,r,o){let a=ql.distanceSqToPoint(i);if(a<t){let c=new D;ql.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Aa=class extends Xt{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ws=class i extends dt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new D,h=new Ne;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new tt(o,3)),this.setAttribute("normal",new tt(a,3)),this.setAttribute("uv",new tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},on=class i extends dt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],m=n/2,p=0;M(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new tt(u,3)),this.setAttribute("normal",new tt(d,3)),this.setAttribute("uv",new tt(f,2));function M(){let _=new D,I=new D,T=0,R=(t-e)/n;for(let P=0;P<=r;P++){let S=[],v=P/r,L=v*(t-e)+e;for(let H=0;H<=s;H++){let V=H/s,k=V*c+a,Z=Math.sin(k),X=Math.cos(k);I.x=L*Z,I.y=-v*n+m,I.z=L*X,u.push(I.x,I.y,I.z),_.set(Z,R,X).normalize(),d.push(_.x,_.y,_.z),f.push(V,1-v),S.push(g++)}x.push(S)}for(let P=0;P<s;P++)for(let S=0;S<r;S++){let v=x[S][P],L=x[S+1][P],H=x[S+1][P+1],V=x[S][P+1];(e>0||S!==0)&&(h.push(v,L,V),T+=3),(t>0||S!==r-1)&&(h.push(L,H,V),T+=3)}l.addGroup(p,T,0),p+=T}function b(_){let I=g,T=new Ne,R=new D,P=0,S=_===!0?e:t,v=_===!0?1:-1;for(let H=1;H<=s;H++)u.push(0,m*v,0),d.push(0,v,0),f.push(.5,.5),g++;let L=g;for(let H=0;H<=s;H++){let k=H/s*c+a,Z=Math.cos(k),X=Math.sin(k);R.x=S*X,R.y=m*v,R.z=S*Z,u.push(R.x,R.y,R.z),d.push(0,v,0),T.x=Z*.5+.5,T.y=X*.5*v+.5,f.push(T.x,T.y),g++}for(let H=0;H<s;H++){let V=I+H,k=L+H;_===!0?h.push(k,k+1,V):h.push(k+1,k,V),P+=3}l.addGroup(p,P,_===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},mr=class i extends on{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},io=class i extends dt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new tt(r,3)),this.setAttribute("normal",new tt(r.slice(),3)),this.setAttribute("uv",new tt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let b=new D,_=new D,I=new D;for(let T=0;T<t.length;T+=3)f(t[T+0],b),f(t[T+1],_),f(t[T+2],I),c(b,_,I,M)}function c(M,b,_,I){let T=I+1,R=[];for(let P=0;P<=T;P++){R[P]=[];let S=M.clone().lerp(_,P/T),v=b.clone().lerp(_,P/T),L=T-P;for(let H=0;H<=L;H++)H===0&&P===T?R[P][H]=S:R[P][H]=S.clone().lerp(v,H/L)}for(let P=0;P<T;P++)for(let S=0;S<2*(T-P)-1;S++){let v=Math.floor(S/2);S%2===0?(d(R[P][v+1]),d(R[P+1][v]),d(R[P][v])):(d(R[P][v+1]),d(R[P+1][v+1]),d(R[P+1][v]))}}function l(M){let b=new D;for(let _=0;_<r.length;_+=3)b.x=r[_+0],b.y=r[_+1],b.z=r[_+2],b.normalize().multiplyScalar(M),r[_+0]=b.x,r[_+1]=b.y,r[_+2]=b.z}function h(){let M=new D;for(let b=0;b<r.length;b+=3){M.x=r[b+0],M.y=r[b+1],M.z=r[b+2];let _=m(M)/2/Math.PI+.5,I=p(M)/Math.PI+.5;o.push(_,1-I)}g(),u()}function u(){for(let M=0;M<o.length;M+=6){let b=o[M+0],_=o[M+2],I=o[M+4],T=Math.max(b,_,I),R=Math.min(b,_,I);T>.9&&R<.1&&(b<.2&&(o[M+0]+=1),_<.2&&(o[M+2]+=1),I<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,b){let _=M*3;b.x=e[_+0],b.y=e[_+1],b.z=e[_+2]}function g(){let M=new D,b=new D,_=new D,I=new D,T=new Ne,R=new Ne,P=new Ne;for(let S=0,v=0;S<r.length;S+=9,v+=6){M.set(r[S+0],r[S+1],r[S+2]),b.set(r[S+3],r[S+4],r[S+5]),_.set(r[S+6],r[S+7],r[S+8]),T.set(o[v+0],o[v+1]),R.set(o[v+2],o[v+3]),P.set(o[v+4],o[v+5]),I.copy(M).add(b).add(_).divideScalar(3);let L=m(I);x(T,v+0,M,L),x(R,v+2,b,L),x(P,v+4,_,L)}}function x(M,b,_,I){I<0&&M.x===1&&(o[b]=M.x-1),_.x===0&&_.z===0&&(o[b]=I/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},Ra=class i extends io{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var so=class i extends io{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Ca=class i extends io{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Xi=class i extends dt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=e,d=(t-e)/s,f=new D,g=new Ne;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let p=r+m/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<s;x++){let m=x*(n+1);for(let p=0;p<n;p++){let M=p+m,b=M,_=M+n+1,I=M+n+2,T=M+1;a.push(b,_,T),a.push(_,I,T)}}this.setIndex(a),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(l,3)),this.setAttribute("uv",new tt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var xi=class i extends dt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new D,d=new D,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let M=[],b=p/n,_=0;p===0&&o===0?_=.5/t:p===n&&c===Math.PI&&(_=-.5/t);for(let I=0;I<=t;I++){let T=I/t;u.x=-e*Math.cos(s+T*r)*Math.sin(o+b*a),u.y=e*Math.cos(o+b*a),u.z=e*Math.sin(s+T*r)*Math.sin(o+b*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(T+_,1-b),M.push(l++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){let b=h[p][M+1],_=h[p][M],I=h[p+1][M],T=h[p+1][M+1];(p!==0||o>0)&&f.push(b,_,T),(p!==n-1||c<Math.PI)&&f.push(_,I,T)}this.setIndex(f),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(x,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Jn=class i extends dt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new D,u=new D,d=new D;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let x=g/s*r,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(x),u.y=(e+t*Math.cos(m))*Math.sin(x),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let x=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,M=(s+1)*f+g;o.push(x,m,M),o.push(m,p,M)}this.setIndex(o),this.setAttribute("position",new tt(a,3)),this.setAttribute("normal",new tt(c,3)),this.setAttribute("uv",new tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Ia=class extends Ft{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},Qe=class extends xn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vh,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},En=class extends Qe{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Pa=class extends xn{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vh,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=ah,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function sa(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ay(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ry(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Zd(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function Ef(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var qi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Yl=class extends qi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bu,endingEnd:Bu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ku:r=e,a=2*t-n;break;case zu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ku:o=e,c=2*n-t;break;case zu:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,M=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,b=(-1-f)*m+(1.5+f)*x+.5*g,_=f*m-f*x;for(let I=0;I!==a;++I)r[I]=p*o[h+I]+M*o[l+I]+b*o[c+I]+_*o[u+I];return r}},$l=class extends qi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},Zl=class extends qi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ln=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=sa(t,this.TimeBufferType),this.values=sa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:sa(e.times,Array),values:sa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Zl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new $l(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Yl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case lr:t=this.InterpolantFactoryMethodDiscrete;break;case hr:t=this.InterpolantFactoryMethodLinear;break;case hc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return lr;case this.InterpolantFactoryMethodLinear:return hr;case this.InterpolantFactoryMethodSmooth:return hc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Ay(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===hc,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let x=t[u+g];if(x!==t[d+g]||x!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=hr;var Yi=class extends Ln{constructor(e,t,n){super(e,t,n)}};Yi.prototype.ValueTypeName="bool";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=lr;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var La=class extends Ln{};La.prototype.ValueTypeName="color";var _i=class extends Ln{};_i.prototype.ValueTypeName="number";var Kl=class extends qi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)gn.slerpFlat(r,0,o,l-a,o,l,c);return r}},yi=class extends Ln{InterpolantFactoryMethodLinear(e){return new Kl(this.times,this.values,this.getValueSize(),e)}};yi.prototype.ValueTypeName="quaternion";yi.prototype.InterpolantFactoryMethodSmooth=void 0;var $i=class extends Ln{constructor(e,t,n){super(e,t,n)}};$i.prototype.ValueTypeName="string";$i.prototype.ValueBufferType=Array;$i.prototype.DefaultInterpolation=lr;$i.prototype.InterpolantFactoryMethodLinear=void 0;$i.prototype.InterpolantFactoryMethodSmooth=void 0;var vi=class extends Ln{};vi.prototype.ValueTypeName="vector";var Da=class{constructor(e="",t=-1,n=[],s=Kp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Vn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Iy(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Ln.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=Ry(c);c=Zd(c,1,h),l=Zd(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new _i(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,g,x){if(f.length!==0){let m=[],p=[];Ef(f,m,p,g),m.length!==0&&x.push(new u(d,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(let x in f){let m=[],p=[];for(let M=0;M!==d[g].morphTargets.length;++M){let b=d[g];m.push(b.time),p.push(b.morphTarget===x?1:0)}s.push(new _i(".morphTargetInfluence["+x+"]",m,p))}c=f.length*o}else{let f=".bones["+t[u].name+"]";n(vi,f+".position",d,"pos",s),n(yi,f+".quaternion",d,"rot",s),n(vi,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Cy(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return _i;case"vector":case"vector2":case"vector3":case"vector4":return vi;case"color":return La;case"quaternion":return yi;case"bool":case"boolean":return Yi;case"string":return $i}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Iy(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Cy(i.type);if(i.times===void 0){let t=[],n=[];Ef(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Fi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Jl=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},Py=new Jl,Mi=class{constructor(e){this.manager=e!==void 0?e:Py,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Mi.DEFAULT_MATERIAL_NAME="__DEFAULT";var ai={},jl=class extends Error{constructor(e,t){super(e),this.response=t}},ro=class extends Mi{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Fi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ai[e]!==void 0){ai[e].push({onLoad:t,onProgress:n,onError:s});return}ai[e]=[],ai[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=ai[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,x=0,m=new ReadableStream({start(p){M();function M(){u.read().then(({done:b,value:_})=>{if(b)p.close();else{x+=_.byteLength;let I=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let T=0,R=h.length;T<R;T++){let P=h[T];P.onProgress&&P.onProgress(I)}p.enqueue(_),M()}},b=>{p.error(b)})}}});return new Response(m)}else throw new jl(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Fi.add(e,l);let h=ai[e];delete ai[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=ai[e];if(h===void 0)throw this.manager.itemError(e),l;delete ai[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Ql=class extends Mi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Fi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Jr("img");function c(){h(),Fi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Na=class extends Mi{constructor(e){super(e)}load(e,t,n,s){let r=new Xt,o=new Ql(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},gr=class extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},oo=class extends gr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Gc=new Ve,Kd=new D,Jd=new D,ao=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fr,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Kd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kd),Jd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jd),t.updateMatrixWorld(),Gc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Gc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},eh=class extends ao{constructor(){super(new Ot(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=ur*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Zi=class extends gr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new eh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},jd=new Ve,Vr=new D,Wc=new D,th=class extends ao{constructor(){super(new Ot(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ne(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Vr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Vr),Wc.copy(n.position),Wc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Wc),n.updateMatrixWorld(),s.makeTranslation(-Vr.x,-Vr.y,-Vr.z),jd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jd)}},xr=class extends gr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new th}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},nh=class extends ao{constructor(){super(new Hi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},_r=class extends gr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new nh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Ki=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Ua=class extends Mi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Fi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Fi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Fi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Fi.add(e,c),r.manager.itemStart(e)}};var yr=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Qd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Qd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Qd(){return performance.now()}var Sh="\\[\\]\\.:\\/",Ly=new RegExp("["+Sh+"]","g"),wh="[^"+Sh+"]",Dy="[^"+Sh.replace("\\.","")+"]",Ny=/((?:WC+[\/:])*)/.source.replace("WC",wh),Uy=/(WCOD+)?/.source.replace("WCOD",Dy),Oy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wh),Fy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wh),By=new RegExp("^"+Ny+Uy+Oy+Fy+"$"),ky=["material","materials","bones","map"],ih=class{constructor(e,t,n){let s=n||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},At=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ly,"")}static parseTrackName(e){let t=By.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ky.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};At.Composite=ih;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var eM=new Float32Array(1);var ef=new Ve,Oa=class{constructor(e,t,n=0,s=1/0){this.ray=new Ms(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new jr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ef.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ef),this}intersectObject(e,t=!0,n=[]){return sh(e,this,n,t),n.sort(tf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)sh(e[s],this,n,t);return n.sort(tf),n}};function tf(i,e){return i.distance-e.distance}function sh(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)sh(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rh);function ho(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new dt,l=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Tf(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);let g=Tf(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Tf(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new vt(o,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<t;g++){let x=h.getComponent(d,g);a.setComponent(d+u,g,x)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function Eh(i,e){if(e===pf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===lo||e===ka){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===lo)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Va=class extends Mi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Lh(t)}),this.register(function(t){return new Dh(t)}),this.register(function(t){return new Vh(t)}),this.register(function(t){return new Gh(t)}),this.register(function(t){return new Wh(t)}),this.register(function(t){return new Uh(t)}),this.register(function(t){return new Oh(t)}),this.register(function(t){return new Fh(t)}),this.register(function(t){return new Bh(t)}),this.register(function(t){return new Ph(t)}),this.register(function(t){return new kh(t)}),this.register(function(t){return new Nh(t)}),this.register(function(t){return new Hh(t)}),this.register(function(t){return new zh(t)}),this.register(function(t){return new Ch(t)}),this.register(function(t){return new Xh(t)}),this.register(function(t){return new qh(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=Ki.extractUrlBase(e);o=Ki.resolveURL(l,this.path)}else o=Ki.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new ro(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Pf){try{o[nt.KHR_BINARY_GLTF]=new Yh(e)}catch(u){s&&s(u);return}r=JSON.parse(o[nt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new eu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case nt.KHR_MATERIALS_UNLIT:o[u]=new Ih;break;case nt.KHR_DRACO_MESH_COMPRESSION:o[u]=new $h(r,this.dracoLoader);break;case nt.KHR_TEXTURE_TRANSFORM:o[u]=new Zh;break;case nt.KHR_MESH_QUANTIZATION:o[u]=new Kh;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function Hy(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var nt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Ch=class{constructor(e){this.parser=e,this.name=nt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new ve(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],an);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new _r(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new xr(h),l.distance=u;break;case"spot":l=new Zi(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,bi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},Ih=class{constructor(){this.name=nt.KHR_MATERIALS_UNLIT}getMaterialType(){return gt}extendParams(e,t,n){let s=[];e.color=new ve(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],an),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Ut))}return Promise.all(s)}},Ph=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Lh=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ne(a,a)}return Promise.all(r)}},Dh=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Nh=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Uh=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new ve(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],an)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ut)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Oh=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Fh=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ve().setRGB(a[0],a[1],a[2],an),Promise.all(r)}},Bh=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},kh=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new ve().setRGB(a[0],a[1],a[2],an),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ut)),Promise.all(r)}},zh=class{constructor(e){this.parser=e,this.name=nt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Hh=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Vh=class{constructor(e){this.parser=e,this.name=nt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Gh=class{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Wh=class{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Xh=class{constructor(e){this.name=nt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},qh=class{constructor(e){this.name=nt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==Dn.TRIANGLES&&l.mode!==Dn.TRIANGLE_STRIP&&l.mode!==Dn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let g of u){let x=new Ve,m=new D,p=new gn,M=new D(1,1,1),b=new Vi(g.geometry,g.material,d);for(let _=0;_<d;_++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,_),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,_),c.SCALE&&M.fromBufferAttribute(c.SCALE,_),b.setMatrixAt(_,x.compose(m,p,M));for(let _ in c)if(_==="_COLOR_0"){let I=c[_];b.instanceColor=new Ss(I.array,I.itemSize,I.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,c[_]);Lt.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),f.push(b)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Pf="glTF",uo=12,Af={JSON:1313821514,BIN:5130562},Yh=class{constructor(e){this.name=nt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,uo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Pf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-uo,r=new DataView(e,uo),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===Af.JSON){let l=new Uint8Array(e,uo+o,a);this.content=n.decode(l)}else if(c===Af.BIN){let l=uo+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},$h=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=nt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=jh[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=jh[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Mr[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let x=f.attributes[g],m=c[g];m!==void 0&&(x.normalized=m)}u(f)},a,l,an,d)})})}},Zh=class{constructor(){this.name=nt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Kh=class{constructor(){this.name=nt.KHR_MESH_QUANTIZATION}},Ga=class extends qi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,x=g-l,m=-2*f+3*d,p=f-d,M=1-m,b=p-d+u;for(let _=0;_!==a;_++){let I=o[x+_+a],T=o[x+_+c]*h,R=o[g+_+a],P=o[g+_]*h;r[_]=M*I+b*T+m*R+p*P}return r}},Vy=new gn,Jh=class extends Ga{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return Vy.fromArray(r).normalize().toArray(r),r}},Dn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Mr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Rf={9728:sn,9729:pn,9984:fh,9985:Xr,9986:js,9987:$n},Cf={33071:In,33648:Zr,10497:di},Th={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},jh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ji={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Gy={CUBICSPLINE:void 0,LINEAR:hr,STEP:lr},Ah={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Wy(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Qe({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Kn})),i.DefaultMaterial}function Es(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function bi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Xy(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function qy(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Yy(i){let e,t=i.extensions&&i.extensions[nt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Rh(t.attributes):e=i.indices+":"+Rh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Rh(i.targets[n]);return e}function Rh(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Qh(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function $y(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Zy=new Ve,eu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Hy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Na(this.options.manager):this.textureLoader=new Ua(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ro(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Es(r,a,s),bi(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[nt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(Ki.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Th[s.type],a=Mr[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new vt(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=Th[s.type],l=Mr[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,x,m;if(f&&f!==u){let p=Math.floor(d/f),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,b=t.cache.get(M);b||(x=new l(a,p*f,s.count*f/h),b=new Qr(x,f/h),t.cache.add(M,b)),m=new eo(b,c,d%f/h,g)}else a===null?x=new l(s.count*c):x=new l(a,d,s.count*c),m=new vt(x,c,g);if(s.sparse!==void 0){let p=Th.SCALAR,M=Mr[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,I=new M(o[1],b,s.sparse.count*p),T=new l(o[2],_,s.sparse.count*c);a!==null&&(m=new vt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,P=I.length;R<P;R++){let S=I[R];if(m.setX(S,T[R*c]),c>=2&&m.setY(S,T[R*c+1]),c>=3&&m.setZ(S,T[R*c+2]),c>=4&&m.setW(S,T[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Rf[d.magFilter]||pn,h.minFilter=Rf[d.minFilter]||$n,h.wrapS=Cf[d.wrapS]||di,h.wrapT=Cf[d.wrapT]||di,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==sn&&h.minFilter!==pn,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){let m=new Xt(x);m.needsUpdate=!0,d(m)}),t.load(Ki.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),bi(u,o),u.userData.mimeType=o.mimeType||$y(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[nt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[nt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[nt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new gi,xn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Gi,xn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Qe}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[nt.KHR_MATERIALS_UNLIT]){let u=s[nt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new ve(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],an),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,Ut)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=nn);let h=r.alphaMode||Ah.OPAQUE;if(h===Ah.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Ah.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==gt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ne(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==gt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==gt){let u=r.emissiveFactor;a.emissive=new ve().setRGB(u[0],u[1],u[2],an)}return r.emissiveTexture!==void 0&&o!==gt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ut)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),bi(u,r),t.associations.set(u,{materials:e}),r.extensions&&Es(s,u,r),u})}createUniqueName(e){let t=At.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[nt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return If(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=Yy(l),u=s[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[nt.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=If(new dt,l,t),s[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?Wy(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let x=h[f],m=o[f],p,M=l[f];if(m.mode===Dn.TRIANGLES||m.mode===Dn.TRIANGLE_STRIP||m.mode===Dn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Ma(x,M):new se(x,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Dn.TRIANGLE_STRIP?p.geometry=Eh(p.geometry,ka):m.mode===Dn.TRIANGLE_FAN&&(p.geometry=Eh(p.geometry,lo));else if(m.mode===Dn.LINES)p=new Ea(x,M);else if(m.mode===Dn.LINE_STRIP)p=new mi(x,M);else if(m.mode===Dn.LINE_LOOP)p=new Ta(x,M);else if(m.mode===Dn.POINTS)p=new Wi(x,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&qy(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),bi(p,r),m.extensions&&Es(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Es(s,u[0],r),u[0];let d=new ct;r.extensions&&Es(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ot(gf.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Hi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),bi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let d=new Ve;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ba(a,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],g=s.samplers[f.sampler],x=f.target,m=x.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,M=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",M)),l.push(g),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],x=u[3],m=u[4],p=[];for(let M=0,b=d.length;M<b;M++){let _=d[M],I=f[M],T=g[M],R=x[M],P=m[M];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let S=n._createAnimationTracks(_,I,T,R,P);if(S)for(let v=0;v<S.length;v++)p.push(S[v])}return new Da(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Zy)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new to:l.length>1?h=new ct:l.length===1?h=l[0]:h=new Lt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),bi(h,r),r.extensions&&Es(n,h,r),r.matrix!==void 0){let u=new Ve;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new ct;n.name&&(r.name=s.createUniqueName(n.name)),bi(r,n),n.extensions&&Es(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof xn||d instanceof Xt)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];ji[r.path]===ji.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(ji[r.path]){case ji.weights:l=_i;break;case ji.rotation:l=yi;break;case ji.position:case ji.scale:l=vi;break;default:switch(n.itemSize){case 1:l=_i;break;case 2:case 3:default:l=vi;break}break}let h=s.interpolation!==void 0?Gy[s.interpolation]:hr,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){let g=new l(c[d]+"."+ji[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Qh(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof yi?Jh:Ga;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Ky(i,e,t){let n=e.attributes,s=new Wt;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new D(c[0],c[1],c[2]),new D(l[0],l[1],l[2])),a.normalized){let h=Qh(Mr[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new D,c=new D;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let x=Qh(Mr[d.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new Zt;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function If(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(let o in n){let a=jh[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return je.workingColorSpace!==an&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${je.workingColorSpace}" not supported.`),bi(i,e),Ky(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Xy(i,e.targets,t):i})}var Wa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var An=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Jy=new Hi(-1,1,1,-1,0,1),tu=class extends dt{constructor(){super(),this.setAttribute("position",new tt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new tt([0,2,0,0,2,0],2))}},jy=new tu,Qi=class{constructor(e){this._mesh=new se(jy,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Jy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Xa=class extends An{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Ft?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ji.clone(e.uniforms),this.material=new Ft({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Qi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var fo=class extends An{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},qa=class extends An{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Ya=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Ne);this._width=n.width,this._height=n.height,t=new Kt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Tn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Xa(Wa),this.copyPass.material.blending=Zn,this.clock=new yr}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}fo!==void 0&&(o instanceof fo?n=!0:o instanceof qa&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Ne);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var $a=class extends An{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ve}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Lf={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ve(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var br=class i extends An{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Ne(e.x,e.y):new Ne(256,256),this.clearColor=new ve(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Kt(r,o,{type:Tn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new Kt(r,o,{type:Tn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Kt(r,o,{type:Tn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=Lf;this.highPassUniforms=Ji.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ft({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Ne(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Wa;this.copyUniforms=Ji.clone(h.uniforms),this.blendMaterial=new Ft({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:rn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ve,this.oldClearAlpha=1,this.basic=new gt,this.fsQuad=new Qi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ne(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Ft({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ne(.5,.5)},direction:{value:new Ne(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Ft({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};br.BlurDirectionX=new Ne(1,0);br.BlurDirectionY=new Ne(0,1);var Df={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Za=class extends An{constructor(){super();let e=Df;this.uniforms=Ji.clone(e.uniforms),this.material=new Ia({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Qi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},je.getTransfer(this._outputColorSpace)===mt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ch?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===lh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===hh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===co?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===uh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===dh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Le={ctx:null,master:null,music:null,sfxBus:null,nodes:[],bellTimer:0,mode:null,volume:.6,musicOn:!0,init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}try{this.ctx=new(window.AudioContext||window.webkitAudioContext)}catch{return}let i=this.ctx;this.master=i.createGain(),this.master.gain.value=this.volume,this.master.connect(i.destination),this.verb=i.createConvolver(),this.verb.buffer=this._impulse(3.2);let e=i.createGain();e.gain.value=.45,this.verb.connect(e),e.connect(this.master),this.music=i.createGain(),this.music.gain.value=this.musicOn?.32:0,this.music.connect(this.master),this.music.connect(this.verb),this.sfxBus=i.createGain(),this.sfxBus.gain.value=.8,this.sfxBus.connect(this.master);let t=i.createGain();t.gain.value=.25,this.sfxBus.connect(t),t.connect(this.verb)},_impulse(i){let e=this.ctx,t=e.sampleRate*i,n=e.createBuffer(2,t,e.sampleRate);for(let s=0;s<2;s++){let r=n.getChannelData(s);for(let o=0;o<t;o++)r[o]=(Math.random()*2-1)*Math.pow(1-o/t,2.4)}return n},setVolume(i){this.volume=i,this.master&&this.master.gain.setTargetAtTime(i,this.ctx.currentTime,.05)},setMusic(i){this.musicOn=i,this.music&&this.music.gain.setTargetAtTime(i?.32:0,this.ctx.currentTime,.3)},playMusic(i){if(!this.ctx||this.mode===i)return;this.mode=i;let e=this.ctx,t=e.currentTime;for(let l of this.nodes)try{l.g.gain.setTargetAtTime(0,t,.8),l.o.forEach(h=>h.stop(t+4))}catch{}this.nodes=[];let n={menu:[73.42,110,146.83,185,220,329.63],world:[65.41,98,130.81,155.56,196,233.08],boss:[61.74,92.5,123.47,146.83,185,174.61],cantina:[87.31,130.81,174.61,220,261.63,329.63],savannah:[73.42,110,146.83,185,220,277.18]},s=e.createGain();s.gain.value=0,s.gain.setTargetAtTime(1,t,2.5);let r=e.createBiquadFilter();r.type="lowpass",r.frequency.value=i==="boss"?1400:i==="cantina"?1100:700,r.Q.value=3;let o=e.createOscillator();o.frequency.value=.07;let a=e.createGain();a.gain.value=380,o.connect(a),a.connect(r.frequency),o.start(),r.connect(s),s.connect(this.music);let c=[o];if(n[i].forEach((l,h)=>{for(let u of[-7,6]){let d=e.createOscillator();d.type=h<2?"sawtooth":"triangle",d.frequency.value=l,d.detune.value=u+Math.random()*3;let f=e.createGain();f.gain.value=h<2?.05:.04,d.connect(f),f.connect(r),d.start(),c.push(d)}}),i==="boss"){let l=e.createOscillator();l.type="square",l.frequency.value=2.2;let h=e.createGain();h.gain.value=.5,l.connect(h),h.connect(s.gain),l.start(),c.push(l)}this.nodes.push({g:s,o:c})},tick(i){if(!(!this.ctx||!this.musicOn||!this.mode)){if(this.mode==="cantina"){if(this.seqT=(this.seqT||0)-i,this.seqT<=0){this.seqT+=.2777777777777778,this.step=((this.step||0)+1)%16;let e=[87.31,0,0,87.31,0,0,130.81,0,98,0,0,98,0,0,116.54,0],t=[349.23,0,440,523.25,0,440,0,392,349.23,0,293.66,0,349.23,392,0,0];e[this.step]&&this.tone(e[this.step],.35,"triangle",.09,null,this.music),t[this.step]&&Math.random()<.85&&(this.tone(t[this.step],.28,"triangle",.045,null,this.music),this.tone(t[this.step]*2,.12,"sine",.012,null,this.music)),this.step%2===1&&this.noise(.05,.03,7e3,2),this.step%8===4&&this.noise(.12,.06,1800,1)}return}if(this.bellTimer-=i,this.bellTimer<=0){this.bellTimer=2.5+Math.random()*4;let e=this.mode==="menu"?[293.66,369.99,440,554.37,587.33,739.99]:this.mode==="savannah"?[293.66,329.63,369.99,440,493.88,587.33]:[261.63,311.13,392,466.16,523.25],t=e[Math.random()*e.length|0];this.tone(t,3.5,"sine",.05,null,this.music),this.tone(t*2.01,2.5,"sine",.015,null,this.music)}}},tone(i,e,t="sine",n=.2,s=null,r=null,o=0){if(!this.ctx)return;let a=this.ctx,c=a.currentTime+o,l=a.createOscillator(),h=a.createGain();l.type=t,l.frequency.setValueAtTime(i,c),s&&l.frequency.exponentialRampToValueAtTime(s,c+e),h.gain.setValueAtTime(1e-4,c),h.gain.exponentialRampToValueAtTime(n,c+.01),h.gain.exponentialRampToValueAtTime(1e-4,c+e),l.connect(h),h.connect(r||this.sfxBus),l.start(c),l.stop(c+e+.05)},noise(i,e=.2,t=1200,n=1,s=0){if(!this.ctx)return;let r=this.ctx,o=r.currentTime+s,a=Math.max(1,r.sampleRate*i|0),c=r.createBuffer(1,a,r.sampleRate),l=c.getChannelData(0);for(let f=0;f<a;f++)l[f]=Math.random()*2-1;let h=r.createBufferSource();h.buffer=c;let u=r.createBiquadFilter();u.type="bandpass",u.frequency.value=t,u.Q.value=n;let d=r.createGain();d.gain.setValueAtTime(e,o),d.gain.exponentialRampToValueAtTime(1e-4,o+i),h.connect(u),u.connect(d),d.connect(this.sfxBus),h.start(o)},sfx(i){if(this.ctx)switch(i){case"click":this.tone(880,.06,"square",.04),this.tone(1320,.05,"sine",.03,null,null,.03);break;case"hover":this.tone(1600,.03,"sine",.015);break;case"start":this.tone(110,1.8,"sawtooth",.12,55),this.tone(440,1.2,"sine",.08,880),this.noise(1.2,.08,600,.5);break;case"slash":this.noise(.14,.25,2600,.8),this.tone(320,.1,"triangle",.08,140);break;case"heavy":this.noise(.3,.35,900,.6),this.tone(120,.35,"sawtooth",.15,50);break;case"zap":this.tone(1800,.18,"sawtooth",.06,300),this.noise(.12,.12,4e3,2);break;case"lance":this.tone(220,.6,"sawtooth",.12,1800),this.noise(.5,.15,3e3,1);break;case"hit":this.noise(.08,.22,1500,1);break;case"hurt":this.tone(160,.18,"square",.07,80),this.noise(.1,.15,500,1);break;case"heal":[523,659,784,1047].forEach((e,t)=>this.tone(e,.5,"sine",.06,null,null,t*.06));break;case"shield":this.tone(300,.6,"sine",.1,600),this.tone(450,.6,"triangle",.05,900);break;case"blink":this.tone(1200,.25,"sine",.08,200),this.noise(.2,.1,6e3,3);break;case"boom":this.noise(.9,.5,200,.4),this.tone(70,.9,"sine",.3,30);break;case"drone":this.tone(900,.2,"square",.04,1400);break;case"die":this.tone(200,.6,"sawtooth",.08,40);break;case"levelup":[392,523,659,784,1047].forEach((e,t)=>{this.tone(e,.9,"triangle",.08,null,null,t*.09),this.tone(e*2,.6,"sine",.03,null,null,t*.09)});break;case"quest":[659,784,988].forEach((e,t)=>this.tone(e,.7,"sine",.09,null,null,t*.12));break;case"accept":this.tone(523,.3,"sine",.08),this.tone(784,.4,"sine",.08,null,null,.1);break;case"pickup":this.tone(1047,.3,"sine",.07),this.tone(1568,.4,"sine",.05,null,null,.07);break;case"coin":this.tone(1318,.12,"square",.03),this.tone(1760,.2,"square",.03,null,null,.06);break;case"error":this.tone(180,.15,"square",.05);break;case"chat":this.tone(1400,.05,"sine",.02);break;case"death":[330,262,196,131].forEach((e,t)=>this.tone(e,1.2,"triangle",.08,null,null,t*.25));break}}};var nu=[{title:"The Year 2137",tag:"THE WORLD",body:['Ad-Nostra \u2014 "to ours" \u2014 rises from the golden savannah of the African continent: a city of sandstone towers and glass spires, ringed by acacia and grassland that runs to the edge of the sky.',"Ten years have passed since the Catharsis fell at Carax. The war in the stars is over, but its scars reached Earth. A Catharsis beacon-ship lies broken in a crater north of the city, and what it left behind still walks the grasslands.","Ad-Nostra is governed by Croxian Mascar. Its people call themselves the Concord, and the volunteers who defend it are the Ascendants."]},{title:"The Third World War",tag:"2080 \u2013 2095",body:["For fifteen years the old powers tore at each other in the Third World War. Cities burned from the Baltic to the Pacific.","Orion Mascar fought through it. At his side for much of it was his apprentice, Thomas Hawthorne. The two fought together until the Siege of Harbin, in China. After Harbin, Hawthorne made his own path.","In the winter of 2094, in the frozen city of Kaliningrad, with the war still raging, Orion's wife Talina gave birth to a son. They named him Croxian. The war ended the following year."]},{title:"Orion Mascar",tag:"BORN 2069",body:["Born in 2069, Orion Mascar came of age in the Third World War and survived the whole of it. He married Talina Alvarez, and their son Croxian was born in the last winter of the war.","He trained Thomas Hawthorne, and he lived to see what his apprentice became.","In Ad-Nostra his name is tied to one place above all: the Salt Lantern. It was in that cantina that Orion Mascar fought Daniel Brown."]},{title:"Terra Imperia",tag:"THE FACTION",body:["Terra Imperia was the far-right faction built by Thomas Hawthorne after he broke from his old master. It promised order, strength and a single hand on the wheel of the world.","By 2125, Croxian Mascar was one of its members, serving under the man who had once been his father's apprentice.","He did not stay. With the help of a wanderer, Croxian broke away from Terra Imperia. That choice set him on the road to Carax."]},{title:"The Catharsis",tag:"THE ENEMY",body:["In 2127 the Catharsis invaded the Milky Way. At its head was Lord Zark.","The Catharsis did not only conquer. It turned people. Those it took became its weapons, their old loyalties burned out and replaced with its own. Thomas Hawthorne was one of them.","Its fleets reached as far as Earth. When the war ended, one of its beacon-ships fell burning onto the savannah north of Ad-Nostra. The Crater it left still glows crimson at night."]},{title:"Carax",tag:"SAGITTARIUS A* \xB7 2127",body:["Carax is a planet in orbit around Sagittarius A*, the supermassive black hole at the heart of our galaxy.","It was there, in 2127, that the war against the Catharsis was decided. Croxian Mascar stood with the Wanderer, the same wanderer who had helped him leave Terra Imperia. Together they defeated Lord Zark, and the Catharsis-turned Thomas Hawthorne.","Croxian rarely speaks of Carax. When he does, he speaks of the Wanderer, never of himself."]},{title:"Croxian Mascar",tag:"GOVERNOR OF AD-NOSTRA",body:["Born 2094 in Kaliningrad, during the Third World War, to Orion Mascar and Talina Mascar (n\xE9e Alvarez).","Once a soldier of Terra Imperia. He walked away from it, then helped the Wanderer bring down Lord Zark and the Catharsis-turned Thomas Hawthorne at Carax in 2127.","Today he governs Ad-Nostra from Concordia Plaza, beneath a statue raised in his honour against his wishes. He still wears his Carax armour, its seams lit with cyan."]},{title:"The Salt Lantern",tag:"CANTINA \xB7 AD-NOSTRA",body:["Just south of Concordia Plaza stands the Salt Lantern: a whitewashed cantina with a great crystal lantern burning over its door, warm as the savannah at dusk.","It is the oldest place in the city that anyone still drinks in. It is also where Orion Mascar fought Daniel Brown. A plaque marks the spot, and the regulars will happily argue about the rest.","The keeper, Zuri Adeyemi, pours Lantern Ale for any Ascendant with credits. It is said to sharpen the mind."]},{title:"The Remnants",tag:"THREATS",body:["The Catharsis is defeated. What it left behind is not.","On the Scorched Veld to the east, where the beacon-ship's descent set the grass alight, the Hollowed wander: people the Catharsis turned and never released.","On the Echo Plains to the west, its war-drones still hold station around their signal pylons.","And in the Crater to the north, the shards of the beacon have begun to pulse in rhythm. Something of Lord Zark's will is gathering itself in the wreck."]},{title:"Ascendants",tag:"YOU",body:["Ascendants are citizens of Ad-Nostra who have sworn the Governor's Oath to defend the city and its grasslands.","VANGUARDS hold the line in heavy plate. ARCWRIGHTS turn salvaged Catharsis technology into lightning. SHADES move between moments and strike where the Remnants are blind.","Thousands now patrol the savannah. You are the newest of them."]}],Nf=["Croxian Mascar was born in the winter of Kaliningrad in 2094, in the last year of the Third World War.","The Salt Lantern is a sanctuary. Lantern Ale from Zuri Adeyemi grants bonus experience.","Hollowed lose interest if you lead them too far from where they rose.","Shades who strike from Blink deal guaranteed critical damage.","Concordia Plaza is a sanctuary. No Remnant will follow you there.","Quartermaster Ilse Varn sells medkits and weapon tuning. Press 5 to use a medkit.","Thomas Hawthorne was Orion Mascar's apprentice before the Siege of Harbin.","Carax orbits Sagittarius A*, the black hole at the heart of the galaxy.","Echo Drones attack from range. Close the distance, or out-range them as an Arcwright."],Si={vanguard:{name:"VANGUARD",role:"DEFENDER \xB7 MELEE",icon:"\u26E8",color:"#3ee6ff",hex:4122367,hp:170,en:100,range:3.6,gcd:1,crit:.1,weapon:"blade",desc:"Heavy plate and heavy blades. Vanguards stand where the line must not break, trading blows that would fell anyone else.",abil:[{id:"riven",name:"Riven Strike",icon:"\u2694",cost:0,cd:0,target:!0,desc:"A heavy blade strike.",dmg:18},{id:"slam",name:"Bulwark Slam",icon:"\u25CE",cost:20,cd:6,target:!1,desc:"Strike the ground, damaging all enemies within 6m.",dmg:15,radius:6},{id:"guard",name:"Concord Guard",icon:"\u26E8",cost:25,cd:18,target:!1,desc:"Raise a barrier that absorbs 60 damage for 8s.",shield:60,dur:8},{id:"judge",name:"Judgement",icon:"\u2726",cost:35,cd:12,target:!0,desc:"The Governor's justice, delivered by hand.",dmg:50}]},arcwright:{name:"ARCWRIGHT",role:"CHANNELER \xB7 RANGED",icon:"\u03DF",color:"#b07bff",hex:11566079,hp:120,en:120,range:24,gcd:1,crit:.12,weapon:"staff",desc:"Engineers who learned to turn the Catharsis's own technology against it. Arcwrights strike from afar with salvaged lightning.",abil:[{id:"bolt",name:"Arc Bolt",icon:"\u03DF",cost:0,cd:0,target:!0,desc:"Hurl a bolt of salvaged lightning.",dmg:16,proj:!0},{id:"chain",name:"Chain Surge",icon:"\u2301",cost:25,cd:7,target:!0,desc:"Lightning leaps from the target to up to 3 nearby enemies.",dmg:14,jump:10},{id:"restore",name:"Restore Field",icon:"\u271A",cost:30,cd:20,target:!1,desc:"Restore 45% of your maximum health.",heal:.45},{id:"lance",name:"Overcharge Lance",icon:"\u27B6",cost:40,cd:14,target:!0,desc:"A lance of white-hot plasma.",dmg:62,proj:!0,big:!0}]},shade:{name:"SHADE",role:"STRIKER \xB7 MELEE",icon:"\u25D0",color:"#4dff9a",hex:5111706,hp:135,en:100,range:3.6,gcd:.8,crit:.2,weapon:"daggers",desc:"They move between moments. Shades strike where the Remnants are blind and are gone before the crimson light can find them.",abil:[{id:"cut",name:"Phase Cut",icon:"\u27CB",cost:0,cd:0,target:!0,desc:"A swift, precise cut.",dmg:14},{id:"bleed",name:"Bleed Mark",icon:"\u260D",cost:20,cd:8,target:!0,desc:"Mark the target: 6 damage, then 8 per second for 6s.",dmg:6,dot:8,dur:6},{id:"blink",name:"Blink",icon:"\u21DD",cost:20,cd:12,target:!0,desc:"Step behind the target. Your next attack is a guaranteed critical.",range:22},{id:"flurry",name:"Eclipse Flurry",icon:"\u2738",cost:40,cd:15,target:!0,desc:"Five strikes in a heartbeat, 11 damage each.",dmg:11,hits:5}]}},Ka=["#3ee6ff","#e8c46a","#ff2b4a","#4dff9a","#b07bff","#ffffff"],Ja=[{title:"The Turned",type:"hollowed",count:6,xp:220,cr:80,zone:"Scorched Veld (east)",obj:"Grant rest to Hollowed on the Scorched Veld",offer:`Ascendant. Welcome to Ad-Nostra.

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

Ten of them, any kind, anywhere. The Concord pays its debts.`,active:"Ten Remnants. Hollowed or drones, it does not matter. Each one is a night of peace for someone out on the grass.",done:"Well done. Rest a while. Have an ale at the Lantern on me, then come back. There is always more to do."}],Uf=["I was born in the snow of Kaliningrad, in the last winter of the war. I have never once missed the cold.","My father fought through the whole of the Third World War. When I was young I thought that made him unbreakable.","Thomas Hawthorne was my father's apprentice. Then he was my commander. Then, at Carax, he was the Catharsis. I still do not know which of those men I was fighting.","I wore the colours of Terra Imperia once. I am not proud of it. I am proud that I left.","The Wanderer never asked for anything. Not on Carax, not after. I owe that soul more than a statue.","Go see the Salt Lantern if you have not. My father fought Daniel Brown there. Zuri will tell you it is the best thing that ever happened to her business."];var Of=["Kaelith","Vex_2137","NovaRook","Seraphyn","Draxx","Ilmatar","LastLegion","Quorra","Ashwalker","Brennic","Zyra_Nyx","Holloway","Corvane","Mirelle","OrbitalOtter","Tavik","Severine","Juno_Arc","Kwame_X","Amara","Tendai"],Ff=["Concord Legion","Savannah Watch","Lantern Regulars","Pale Hunters","Dawnbreakers","",""],Bf=["LFG crater remnant, need 2 more","anyone know where the beacon shards spawn? crater right?","first round at the Salt Lantern is on me tonight","WTS tuned blade, pst","echo plains are packed tonight lol","just saw a giraffe walk past the crater like nothing was happening","Mascar never takes off that armour. respect","shade blink into a drone swarm = instant regret","Concord Legion recruiting, all classes, /w Kaelith","hollowed on the veld respawn SO fast","arcwright chain surge is busted (in a good way)","imagine being on Carax for the final fight. at a BLACK HOLE","pro tip: the plaza is a sanctuary, kite them back if you're low","did the remnant just one-shot me or am i crazy","o7 to everyone who fought in 2127","Ilse Varn's medkits are a scam. i buy 10 a day","anyone else hear the shards humming?? creepy","the sunsets here never get old","there was an argument at the Lantern about Orion vs Daniel Brown again. chairs were thrown","still can't believe the governor used to be Terra Imperia"],kf=["drone over here if anyone needs one","careful, lvl 3 hollowed by the burning brush","need help with the big one in the crater","pulling, stand back","gg","lol that crit"];var zf=["The Concord reminds all Ascendants: beacon shards are to be delivered to the Governor's Office, not sold.","The Causeway tram will resume service once the Echo Plains are secured.","Ten years since Carax. Ad-Nostra stands. \u2014 C. Mascar","Herders are advised to keep livestock away from the Crater rim.","Medical stations in Concordia Plaza are open to all Ascendants, free of charge."],Hf=["Mascar and the Wanderer took down Lord Zark on Carax. at Sagittarius A*. absolute legend","he was Terra Imperia once, you know. takes guts to walk away from that","my gran says his dad Orion was born in 2069 and never lost a fight. well. maybe one","governor mascar administered my oath personally","born in kaliningrad in the middle of ww3. no wonder he's like that"],iu=["o7","hey {name}!","welcome to Ad-Nostra {name}","yo","hi hi","o/","sawubona!","jambo!"];var qe=D,K=i=>document.getElementById(i),B=(i,e)=>i+Math.random()*(e-i),So=(i,e)=>Math.floor(B(i,e+1)),wt=i=>i[Math.floor(Math.random()*i.length)],Ps=(i,e,t)=>Math.max(e,Math.min(t,i)),Nt=(i,e)=>Math.hypot(i.x-e.x,i.z-e.z),ts=i=>i.toLocaleString("en-GB"),Bt=i=>String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function Jf(i){let e=K("err");e.textContent=i,e.classList.remove("hidden"),setTimeout(()=>e.classList.add("hidden"),8e3)}window.addEventListener("error",i=>{console.error(i.error||i.message)});var Ns={get(i,e=null){try{let t=localStorage.getItem(i);return t?JSON.parse(t):e}catch{return e}},set(i,e){try{localStorage.setItem(i,JSON.stringify(e))}catch{}}},wo="adnostra_save_v1",st=Object.assign({volume:.6,music:!0,bloom:!0,shadows:!0,sens:1,plates:!0,dynres:!0,fps:!1},Ns.get("adnostra_settings",{}));Le.volume=st.volume;Le.musicOn=st.music;var Us=matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0&&!matchMedia("(pointer: fine)").matches;Us&&document.documentElement.classList.add("touch");var ns=Us?{pixelRatio:1.5,shadowMap:1024,worldGrass:14e3,menuGrass:4e3}:{pixelRatio:2,shadowMap:2048,worldGrass:36e3,menuGrass:9e3},Pr=K("scene"),Pt=new _a({canvas:Pr,antialias:!1,powerPreference:"high-performance"});Pt.setPixelRatio(Math.min(devicePixelRatio,ns.pixelRatio));Pt.setSize(innerWidth,innerHeight);Pt.toneMapping=co;Pt.toneMappingExposure=1.05;Pt.outputColorSpace=Ut;Pt.shadowMap.enabled=st.shadows;Pt.shadowMap.type=oh;Pt.info.autoReset=!1;var Qy=new pr(Pt);function jf(i){let e=new bs;return e.add(new se(new xi(50,32,16),i.material)),Qy.fromScene(e,.03,.1,100).texture}var ev=4,Qn=new Ya(Pt,new Kt(innerWidth,innerHeight,{type:Tn,samples:ev}));Qn.setPixelRatio(Pt.getPixelRatio());Qn.setSize(innerWidth,innerHeight);var ou=new $a(new bs,new Ot);Qn.addPass(ou);var Is=new br(new Ne(innerWidth/2,innerHeight/2),.85,.55,.72);Is.enabled=st.bloom;Qn.addPass(Is);Qn.addPass(new Za);var tv=new yr;function pu(i,e){ou.scene=i,ou.camera=e;let t=i.userData.post||{strength:.6,radius:.5,threshold:.85,exposure:1};Is.strength=t.strength,Is.radius=t.radius,Is.threshold=t.threshold,Pt.toneMappingExposure=t.exposure,it.grace=3}var A={mode:"splash",time:0,world:null,P:null,D:null,enemies:[],bots:[],npcs:[],shards:[],proj:[],fx:[],timers:[],floaters:[],colliders:[],ui:null,zone:"",autosave:20,chatT:6};function Nn(i,e,t,n=1){let s=document.createElement("canvas");s.width=i,s.height=e,t(s.getContext("2d"),i,e);let r=new Aa(s);return r.colorSpace=Ut,r.wrapS=r.wrapT=di,r.anisotropy=Pt.capabilities.getMaxAnisotropy(),r.repeat.set(n,n),r}var Vf=null,mu=()=>Vf||(Vf=Nn(64,64,(i,e,t)=>{let n=i.createRadialGradient(e/2,t/2,0,e/2,t/2,e/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.35,"rgba(255,255,255,0.7)"),n.addColorStop(1,"rgba(255,255,255,0)"),i.clearRect(0,0,e,t),i.fillStyle=n,i.fillRect(0,0,e,t)}));function es(i,e,t,n,s,r=2){for(let o=0;o<n;o++)i.fillStyle=wt(s),i.fillRect(Math.random()*e,Math.random()*t,r*Math.random()+.5,r*Math.random()+.5)}function po(i,e,t,n,s,r=1.5){i.strokeStyle=s,i.lineWidth=r;for(let o=0;o<n;o++){let a=Math.random()*e,c=Math.random()*t;i.beginPath(),i.moveTo(a,c);for(let l=0;l<8;l++)a+=B(-30,30),c+=B(-30,30),i.lineTo(a,c);i.stroke()}}var ec=null;async function nv(i){await new Promise((o,a)=>{let c=document.createElement("script");c.src="assets/model.js",c.onload=o,c.onerror=()=>a(new Error("Could not load assets/model.js")),document.head.appendChild(c)}),i(.7);let e=window.MASCAR_GLB_B64;window.MASCAR_GLB_B64=null;let t;try{t=await(await fetch("data:application/octet-stream;base64,"+e)).arrayBuffer()}catch{let a=atob(e),c=new Uint8Array(a.length);for(let l=0;l<a.length;l++)c[l]=a.charCodeAt(l);t=c.buffer}i(.85);let s=(await new Promise((o,a)=>new Va().parse(t,"",o,a))).scene,r=new Wt().setFromObject(s);s.userData.height=r.max.y-r.min.y,s.traverse(o=>{o.isMesh&&(o.castShadow=!0,o.receiveShadow=!0,o.material&&(o.material.envMapIntensity=1))}),ec=s,i(1)}function gu(i,e=null){if(!ec){let s=Eo({armor:3818062,accent:4122367,visor:4122367,weapon:"none"});return s.group.scale.setScalar(i/1.86),s.group}let t=ec.clone(!0);e&&t.traverse(s=>{if(s.isMesh){let r=e.clone();r.normalMap=s.material.normalMap,s.material=r}}),t.scale.setScalar(i/ec.userData.height);let n=new ct;return n.add(t),n}var Gf={};function is(i,e){return Gf[i]||(Gf[i]=e())}var cn=(i,e=2.4)=>is("glow"+i+e,()=>new Qe({color:i,emissive:i,emissiveIntensity:e,roughness:.4})),Ei=i=>is("arm"+i,()=>new Qe({color:i,metalness:.75,roughness:.36})),iv=()=>is("dark",()=>new Qe({color:987928,metalness:.4,roughness:.7})),St={box:new pi(1,1,1),sph:new xi(1,16,12),oct:new Ca(1,0),ico:new so(1,0),cyl:new on(1,1,1,16),rock:new Ra(1,0)};function et(i,e,t,n,s=0,r=0,o=0,a){let c=new se(St.box,n);return c.scale.set(i,e,t),c.position.set(s,r,o),c.castShadow=!0,c.receiveShadow=!0,a&&a.add(c),c}function Eo({armor:i=2830908,accent:e=4122367,visor:t=4122367,weapon:n="blade",hollow:s=!1}){let r=new ct,o=Ei(i),a=iv(),c=cn(e,s?3:2.2),l=cn(t,3),h=new ct;h.position.y=.95,r.add(h);let u=[-1,1].map(m=>{let p=new ct;return p.position.set(.13*m,0,0),h.add(p),et(.17,.5,.2,o,0,-.25,0,p),et(.15,.45,.17,a,0,-.68,0,p),et(.18,.1,.28,o,0,-.9,.04,p),p}),d=new ct;h.add(d),et(.42,.22,.24,a,0,.08,0,d),et(.52,.42,.3,o,0,.4,0,d),et(.4,.04,.02,c,0,.36,.16,d),et(.04,.2,.02,c,0,.5,.16,d),et(.3,.34,.1,a,0,.42,-.19,d),et(.04,.26,.02,c,-.08,.42,-.25,d),et(.04,.26,.02,c,.08,.42,-.25,d);let f=[-1,1].map(m=>{et(.22,.14,.3,o,.34*m,.62,0,d);let p=new ct;return p.position.set(.34*m,.58,0),d.add(p),et(.13,.34,.15,a,0,-.17,0,p),et(.15,.32,.17,o,0,-.46,0,p),s&&et(.05,.25,.05,c,0,-.72,.04,p),p}),g=new ct;g.position.y=.78,d.add(g),et(.25,.27,.27,s?a:o,0,.02,0,g),s?(et(.05,.04,.02,l,-.06,.04,.14,g),et(.05,.04,.02,l,.06,.04,.14,g)):(et(.21,.06,.02,l,0,.03,.14,g),et(.04,.12,.1,o,0,.18,-.02,g));let x=f[1];if(n==="blade"){et(.05,.16,.05,a,0,-.66,.05,x);let m=et(.04,1,.11,Ei(9016998),0,-.66,.5,x);m.rotation.x=Math.PI/2;let p=et(.015,1,.02,c,0,-.66,.5,x);p.rotation.x=Math.PI/2,p.position.y-=.06}if(n==="staff"){let m=et(.05,1.7,.05,a,0,-.62,.05,x);m.rotation.x=.1;let p=new se(St.oct,c);p.scale.setScalar(.12),p.position.set(0,.25,.1),p.userData.keep=!0,x.add(p),r.userData.orb=p}if(n==="daggers")for(let m of f){let p=et(.03,.45,.07,c,0,-.7,.22,m);p.rotation.x=Math.PI/2.2}return s&&(d.rotation.x=.38,g.rotation.x=-.25,f.forEach(m=>m.scale.y=1.25)),r.traverse(m=>{m.isMesh&&(m.castShadow=!0)}),dv(r),{group:r,legs:u,arms:f,torso:d,head:g,hips:h}}function oc(i,e,t,n=0,s=0){let r=Math.sin(t*9)*.75*e;if(i.legs[0].rotation.x=r,i.legs[1].rotation.x=-r,i.arms[0].rotation.x=-r*.6,i.arms[1].rotation.x=r*.6,i.hips.position.y=.95+Math.abs(Math.cos(t*9))*.05*e,n>0){let o=Math.sin((1-n/.3)*Math.PI);i.arms[1].rotation.x=-2.4*o,i.torso.rotation.y=-.4*o}else i.torso.rotation.y*=.8;s>0?(i.arms[0].rotation.z=-2.4+Math.sin(t*8)*.4,i.arms[1].rotation.z=2.4+Math.sin(t*8+1)*.4,i.hips.position.y=.95+Math.abs(Math.sin(t*8))*.12):(i.arms[0].rotation.z*=.8,i.arms[1].rotation.z*=.8)}function sv(i){let e=new ct,t=new ct;t.position.y=2.6,e.add(t);let n=new se(St.oct,cn(16722762,3));n.scale.set(.42,.55,.42),t.add(n);let s=new se(St.ico,is("droneShell",()=>new Qe({color:1909289,metalness:.8,roughness:.3,wireframe:!0})));s.scale.setScalar(.72),t.add(s);let r=new se(new Jn(.95,.05,6,32),Ei(3752525));r.rotation.x=Math.PI/2,t.add(r);for(let a=0;a<3;a++){let c=et(.08,.5,.35,Ei(3752525),0,0,0),l=new ct;l.rotation.y=a*2.094,c.position.x=.95,l.add(c),t.add(l)}let o=new se(St.sph,cn(16769253,4));return o.scale.setScalar(.1),o.position.z=.42,t.add(o),e.traverse(a=>{a.isMesh&&(a.castShadow=!0)}),{group:e,body:t,ring:r,shell:s}}function rv(){let i=new ct,e=new ct;i.add(e);let t=is("obsid",()=>new Qe({color:1312779,metalness:.6,roughness:.25,flatShading:!0})),n=cn(16722762,3.2),s=new se(St.oct,n);s.scale.set(1.3,2,1.3),s.position.y=4.4,e.add(s);for(let h=0;h<7;h++){let u=new se(St.oct,t),d=h/7*Math.PI*2;u.scale.set(.7,B(1.6,2.6),.5),u.position.set(Math.cos(d)*1.35,4.2+B(-.6,.6),Math.sin(d)*1.35),u.rotation.set(B(-.3,.3),-d,.25*Math.cos(d)),e.add(u)}let r=new se(St.oct,t);r.scale.set(.8,1.1,.8),r.position.y=7,e.add(r);let o=new se(St.sph,cn(16765144,5));o.scale.setScalar(.22),o.position.set(0,7.05,.62),e.add(o);let a=[-1,1].map(h=>{let u=new se(St.oct,t);return u.scale.set(.5,1.9,.5),u.position.set(.9*h,1.7,0),u.rotation.z=.15*h,e.add(u),u}),c=[-1,1].map(h=>{let u=new ct;u.position.set(2.1*h,5.6,0),e.add(u);let d=new se(St.oct,t);d.scale.set(.45,2.4,.45),d.position.y=-2,u.add(d);let f=new se(St.oct,n);return f.scale.set(.2,1,.2),f.position.y=-3.6,u.add(f),u}),l=new ct;l.position.y=4.4,e.add(l);for(let h=0;h<9;h++){let u=new se(St.oct,h%3?t:n);u.scale.set(.18,.5,.18);let d=h/9*Math.PI*2;u.position.set(Math.cos(d)*3.2,B(-1.5,1.5),Math.sin(d)*3.2),l.add(u)}return i.traverse(h=>{h.isMesh&&(h.castShadow=!0)}),{group:i,body:e,arms:c,legs:a,orbit:l,core:s}}var tc=new qe(-.55,.5,-.67).normalize(),ov=new qe(-.18,.07,-.98).normalize(),xu={value:0};function Qf(i,e=600,t={}){let n=Object.assign({zen:6129336,mid:13218714,hor:14264440,glow:16761466,clouds:1,stars:0,sunI:1.35},t),s=r=>new ve(r);return new se(new xi(e,48,24),new Ft({side:$t,depthWrite:!1,fog:!1,uniforms:{sun:{value:i.clone()},t:{value:0},zen:{value:s(n.zen)},mid:{value:s(n.mid)},hor:{value:s(n.hor)},glow:{value:s(n.glow)},clouds:{value:n.clouds},stars:{value:n.stars},sunI:{value:n.sunI}},vertexShader:"varying vec3 vp; void main(){ vp = position; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`varying vec3 vp; uniform vec3 sun, zen, mid, hor, glow; uniform float t, clouds, stars, sunI;
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
      }`}))}function ep(i,e,t,n){return Nn(512,512,(s,r,o)=>{s.fillStyle=i,s.fillRect(0,0,r,o);for(let a=0;a<9e3;a++){s.strokeStyle=Math.random()<.5?e:t,s.globalAlpha=B(.2,.7),s.lineWidth=B(.5,1.5);let c=Math.random()*r,l=Math.random()*o;s.beginPath(),s.moveTo(c,l),s.lineTo(c+B(-3,3),l-B(3,9)),s.stroke()}s.globalAlpha=1,es(s,r,o,1500,["rgba(80,55,30,0.5)","rgba(60,40,20,0.4)"],4)},n)}function _u(i){let e=i.index?i.toNonIndexed():i.clone();for(let t of Object.keys(e.attributes))t!=="position"&&t!=="normal"&&t!=="uv"&&e.deleteAttribute(t);return e.attributes.normal||e.computeVertexNormals(),e.attributes.uv||e.setAttribute("uv",new tt(new Float32Array(e.attributes.position.count*2),2)),e.morphAttributes={},e}function av(i,e,t){let n=new dt;for(let[s,r]of Object.entries(i.attributes))n.setAttribute(s,new vt(r.array.slice(e*r.itemSize,(e+t)*r.itemSize),r.itemSize));return n}function tp(i,e=250){i.updateMatrixWorld(!0);let t=new Map,n=[];i.traverse(s=>{if(!s.isMesh||s.isInstancedMesh||s.isSkinnedMesh)return;for(let h=s;h;h=h.parent)if(h.userData.dynamic)return;if([].concat(s.material).some(h=>h.transparent||h.isShaderMaterial||h.visible===!1))return;let o=_u(s.geometry).applyMatrix4(s.matrixWorld);o.computeBoundingSphere();let a=o.boundingSphere.center,c=Math.floor(a.x/e)+","+Math.floor(a.z/e),l=Array.isArray(s.material)?o.groups.map(h=>[av(o,h.start,h.count),s.material[h.materialIndex]]):[[o,s.material]];for(let[h,u]of l){if(!u)continue;h.clearGroups();let d=u.uuid+"|"+c+"|"+s.castShadow+"|"+s.receiveShadow;t.has(d)||t.set(d,{m:u,cs:s.castShadow,rs:s.receiveShadow,geos:[]}),t.get(d).geos.push(h)}n.push(s)});for(let s of n)s.removeFromParent();for(let s of t.values()){let r=new se(ho(s.geos),s.m);r.castShadow=s.cs,r.receiveShadow=s.rs,i.add(r)}return{meshes:n.length,batches:t.size}}var Wf=30,Yt={body:null,glow:null,geo:new Map,ids:new Map};function cv(i){let e=new no(192,12e4,0,new Qe({vertexColors:!0,metalness:.55,roughness:.45})),t=new no(192,3e4,0,new gt({vertexColors:!0}));e.castShadow=!0,e.receiveShadow=!0,e.perObjectFrustumCulled=t.perObjectFrustumCulled=!0,e.frustumCulled=t.frustumCulled=!1,i.add(e,t),Object.assign(Yt,{body:e,glow:t})}function lv(i){let e=i.group;e.updateMatrixWorld(!0);let t=e.matrixWorld.clone().invert(),n=[],s=[],r=[];for(let o of e.children)o!==i.hitbox&&o.traverse(a=>{if(!a.isMesh||!a.visible)return;let c=a.material;if(Array.isArray(c)||c.visible===!1||c.transparent||c.wireframe)return;let l=_u(a.geometry).applyMatrix4(new Ve().multiplyMatrices(t,a.matrixWorld));l.deleteAttribute("uv"),l.clearGroups();let h=c.emissiveIntensity>1&&c.emissive&&c.emissive.getHex()!==0,u=h?c.emissive.clone().multiplyScalar(Math.min(c.emissiveIntensity,3)*.7):(c.color||new ve(8947848)).clone(),d=l.attributes.position.count,f=new Float32Array(d*3);for(let g=0;g<d;g++)f.set([u.r,u.g,u.b],g*3);l.setAttribute("color",new vt(f,3)),(h?s:n).push(l),r.push(c.uuid,a.geometry.uuid)});return{key:r.join(","),body:n.length?ho(n):null,glow:s.length?ho(s):null}}function hv(i){if(i.lod=null,!(!Yt.body||!i.rig||i.isBoss||!i.group))try{let e=lv(i),t=Yt.geo.get(e.key);t||(t={body:e.body&&Yt.body.addGeometry(e.body),glow:e.glow&&Yt.glow.addGeometry(e.glow)},Yt.geo.set(e.key,t)),i.lod={body:t.body!=null?Yt.body.addInstance(t.body):null,glow:t.glow!=null?Yt.glow.addInstance(t.glow):null},i.lodParts=i.group.children.filter(n=>n!==i.hitbox),i.lodNear=!0,Yt.ids.set(i,i.lod),np(i,!1)}catch(e){i.lod=null,console.warn("far-LOD skipped for",i.name,e.message)}}function np(i,e){i.lod.body!=null&&Yt.body.setVisibleAt(i.lod.body,e),i.lod.glow!=null&&Yt.glow.setVisibleAt(i.lod.glow,e)}var su=new Ve;function uv(){if(!Yt.body)return;let i=fe.cam.position,e=Wf*Wf,t=new Set;for(let n of[A.enemies,A.bots,A.npcs])for(let s of n){if(s.lod===void 0&&hv(s),!s.lod)continue;t.add(s);let r=s.group,o=r.position.distanceToSquared(i)<e,a=r.visible&&r.parent!==null;if(o!==s.lodNear){s.lodNear=o;for(let l of s.lodParts)l.visible=o}let c=!o&&a;np(s,c),c&&(su.compose(r.position,r.quaternion,r.scale),s.lod.body!=null&&Yt.body.setMatrixAt(s.lod.body,su),s.lod.glow!=null&&Yt.glow.setMatrixAt(s.lod.glow,su))}for(let[n,s]of Yt.ids)t.has(n)||(s.body!=null&&Yt.body.deleteInstance(s.body),s.glow!=null&&Yt.glow.deleteInstance(s.glow),Yt.ids.delete(n))}function dv(i){i.traverse(e=>{if(e.isMesh)return;let t=new Map;for(let n of e.children)n.isMesh&&!n.userData.keep&&!Array.isArray(n.material)&&n.children.length===0&&(t.has(n.material)||t.set(n.material,[]),t.get(n.material).push(n));for(let[n,s]of t){if(s.length<2)continue;let r=s.map(a=>{a.updateMatrix();let c=_u(a.geometry).applyMatrix4(a.matrix);return c.clearGroups(),c}),o=new se(ho(r),n);o.castShadow=!0,o.receiveShadow=s[0].receiveShadow;for(let a of s)e.remove(a);e.add(o)}})}function ip(i,e,t,n=0,s=0,r=0){let o=[],a=[];for(let _=0;_<5;_++){let I=_/5*Math.PI*2+B(-.3,.3),T=B(.45,.95),R=B(.1,.3),P=.05,S=Math.cos(I),v=Math.sin(I),L=-v*P,H=S*P;o.push(L,0,H,-L,0,-H,S*R,T,v*R),a.push(.55,.55,.55,.55,.55,.55,1.15,1.15,1.15)}let c=new dt;c.setAttribute("position",new tt(o,3)),c.setAttribute("color",new tt(a,3)),c.computeVertexNormals();let l=new Pa({vertexColors:!0,side:nn});l.onBeforeCompile=_=>{_.uniforms.uTime=xu,_.vertexShader=`uniform float uTime;
`+_.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      #ifdef USE_INSTANCING
        float ph = instanceMatrix[3].x * 0.13 + instanceMatrix[3].z * 0.09;
      #else
        float ph = 0.0;
      #endif
      float sw = (sin(uTime * 1.7 + ph) * 0.6 + sin(uTime * 3.1 + ph * 2.0) * 0.25) * 0.16 * position.y;
      transformed.x += sw; transformed.z += sw * 0.6;`)};let h={gold:new ve(14266986),pale:new ve(13222042),burnt:new ve(3814448)},u=new Ve,d=new gn,f=new qe,g=new qe,x=new qe(0,1,0),m=new Map,p=0,M=0;for(;p<i&&M<i*6;){M++;let _=n+B(-e,e),I=s+B(-e,e),T=t(_,I);if(!T)continue;d.setFromAxisAngle(x,B(0,6.28));let R=B(.7,1.5);f.set(R,R*B(.8,1.3),R),g.set(_,0,I);let P=r?Math.floor(_/r)+","+Math.floor(I/r):"0";m.has(P)||m.set(P,[]),m.get(P).push([u.compose(g,d,f).clone(),h[T].clone().offsetHSL(B(-.02,.02),B(-.08,.05),B(-.08,.08))]),p++}let b=new ct;b.userData.chunks=[];for(let _ of m.values()){let I=new Vi(c,l,_.length);_.forEach(([T,R],P)=>{I.setMatrixAt(P,T),I.setColorAt(P,R)}),I.instanceMatrix.needsUpdate=!0,I.instanceColor&&(I.instanceColor.needsUpdate=!0),I.computeBoundingSphere(),I.receiveShadow=!0,I.frustumCulled=!!r,b.add(I),b.userData.chunks.push(I)}return b}function fv(i,e,t=190){let n=t*t;for(let s of i.userData.chunks){let r=s.boundingSphere.center;s.visible=(r.x-e.position.x)**2+(r.z-e.position.z)**2<n}}function au(i){let e=new ct,t=new on(.1,.22,1,6);t.translate(0,.5,0);let n=new so(1,1),s=new Vi(t,new Qe({color:16777215,roughness:.95}),i.length*3),r=new Vi(n,new Qe({color:16777215,roughness:.9,flatShading:!0}),i.length*3),o=new Ve,a=new gn,c=new wn,l=0,h=0,u=new ve(3877405),d=new ve(1906966);for(let f of i){let g=B(3.2,5)*f.s,x=B(-.12,.12);c.set(x,B(0,6),B(-.12,.12)),a.setFromEuler(c),o.compose(new qe(f.x,0,f.z),a,new qe(f.s,g,f.s)),s.setMatrixAt(l,o),s.setColorAt(l++,f.dead?d:u);for(let m of[-1,1])c.set(0,0,m*B(.5,.8)),a.setFromEuler(c),o.compose(new qe(f.x,g*.7,f.z),a,new qe(f.s*.6,g*.45,f.s*.6)),s.setMatrixAt(l,o),s.setColorAt(l++,f.dead?d:u);if(!f.dead)for(let m=0;m<3;m++){let p=B(2.2,3.4)*f.s;a.identity(),o.compose(new qe(f.x+B(-1.4,1.4)*f.s,g+B(-.2,.5),f.z+B(-1.4,1.4)*f.s),a,new qe(p,p*.22,p*B(.8,1.1))),r.setMatrixAt(h,o),r.setColorAt(h++,new ve(5660716).offsetHSL(B(-.03,.03),0,B(-.06,.04)))}}s.count=l,r.count=h;for(let f of[s,r])f.castShadow=!0,f.receiveShadow=!0,f.instanceMatrix.needsUpdate=!0,f.instanceColor&&(f.instanceColor.needsUpdate=!0),e.add(f);return e}function sp(i=1){let e=new ct,t=is("bark",()=>new Qe({color:8218192,roughness:.95,flatShading:!0})),n=B(6,8)*i,s=new se(new on(1.1*i,1.7*i,n,9),t);s.position.y=n/2,e.add(s);for(let r=0;r<6;r++){let o=r/6*Math.PI*2,a=new se(new on(.12*i,.3*i,2.4*i,5),t);a.position.set(Math.cos(o)*.9*i,n+.7*i,Math.sin(o)*.9*i),a.rotation.set(Math.sin(o)*.7,0,-Math.cos(o)*.7),e.add(a);let c=new se(St.ico,is("baoLeaf",()=>new Qe({color:6122032,flatShading:!0,roughness:.9})));c.scale.set(1*i,.5*i,1*i),c.position.set(Math.cos(o)*1.8*i,n+1.8*i,Math.sin(o)*1.8*i),e.add(c)}return e.traverse(r=>{r.isMesh&&(r.castShadow=!0,r.receiveShadow=!0)}),e}function Rs(i){let e={sand:{base:"#c9a679",band:"#b38f63",win:"#3a2c20",lit:["#ffcf8a","#ffdca8"],litP:.08,arch:!0},white:{base:"#e2d9c6",band:"#cbbfa6",win:"#3b3631",lit:["#ffd9a0"],litP:.06,arch:!0},terra:{base:"#b56a43",band:"#9a5634",win:"#2c1a12",lit:["#ffc070","#ffe0b0"],litP:.08,arch:!1},glass:{base:"#2a3d52",band:"#1b2734",win:"#34506a",lit:["#bfe6ff","#7fdfff"],litP:.14,glass:!0}}[i],t=4,n=12,s=[];for(let c=0;c<t*n;c++)s.push(Math.random()<e.litP?wt(e.lit):null);let r=c=>(l,h,u)=>{let d=h/t,f=u/n;if(l.fillStyle=c?"#000":e.base,l.fillRect(0,0,h,u),!c){let g=l.createLinearGradient(0,0,0,u);g.addColorStop(0,"rgba(255,255,255,0.05)"),g.addColorStop(1,"rgba(40,20,0,0.12)"),l.fillStyle=g,l.fillRect(0,0,h,u),es(l,h,u,2500,["rgba(0,0,0,0.05)","rgba(255,255,255,0.05)"],2),l.fillStyle=e.band;for(let x=0;x<n;x++)l.fillRect(0,x*f,h,e.glass?5:4);if(e.glass){l.fillStyle="rgba(0,0,0,0.35)";for(let x=0;x<=t*2;x++)l.fillRect(x*d/2-1.5,0,3,u)}}for(let g=0;g<n;g++)for(let x=0;x<t;x++){let m=s[g*t+x];if(c&&!m)continue;let p=x*d,M=g*f;if(e.glass){if(c)l.fillStyle=m,l.globalAlpha=.8,l.fillRect(p+4,M+8,d-8,f-12),l.globalAlpha=1;else{let R=l.createLinearGradient(p,M,p+d,M+f);R.addColorStop(0,m?"#6f97b8":"#41627f"),R.addColorStop(1,e.win),l.fillStyle=R,l.fillRect(p+4,M+8,d-8,f-12)}continue}let b=d*.36,_=f*.56,I=p+(d-b)/2,T=M+f*.26;c||(l.fillStyle="rgba(60,35,15,0.25)",l.fillRect(I-3,T-3,b+6,_+7)),l.fillStyle=c?m:m?"#80603e":e.win,l.beginPath(),e.arch?(l.moveTo(I,T+_),l.lineTo(I,T+b/2),l.arc(I+b/2,T+b/2,b/2,Math.PI,0),l.lineTo(I+b,T+_),l.closePath()):l.rect(I,T,b,_),l.fill(),c||(l.fillStyle="rgba(255,245,225,0.22)",l.fillRect(I-4,T+_,b+8,3))}},o=Nn(256,512,r(!1)),a=Nn(256,512,r(!0));return new Qe({map:o,emissive:16777215,emissiveMap:a,emissiveIntensity:.6,roughness:e.glass?.22:.88,metalness:e.glass?.6:.02})}function rp(i,e,t,n){let s=i.attributes.uv,r=[n,n,e,e,e,e];for(let o=0;o<6;o++)for(let a=0;a<4;a++){let c=o*4+a;s.setXY(c,s.getX(c)*r[o]/16,s.getY(c)*(o===2||o===3?n/16:t/48))}}function op(i){let e=new gt({color:9203590,fog:!1}),t=new gt({color:15916240,fog:!1}),n=new se(new mr(230,150,28,1),e);n.position.set(330,70,-440),i.add(n);let s=new se(new mr(62,42,28,1),t);s.position.set(330,124,-440),i.add(s);let r=new gt({color:10121066,fog:!1});for(let o=0;o<9;o++){let a=B(0,Math.PI*2),c=B(470,540);if(Math.abs(a-Math.atan2(-440,330))<.4)continue;let l=new se(new on(B(30,70),B(50,90),B(25,55),7),r);l.position.set(Math.cos(a)*c,10,Math.sin(a)*c),i.add(l)}}var Fe={scene:new bs,cam:new Ot(32,innerWidth/innerHeight,.1,1200),mascar:null,yaw:0,yawVel:0,drag:!1,mx:0,my:0};function pv(){let i=Fe.scene;i.fog=new ya(4861478,.0105);let e=Qf(ov,900,{zen:1317432,mid:7225162,hor:15764040,glow:16749896,clouds:.55,stars:.7,sunI:1.25});i.add(e),Fe.sky=e,i.environment=jf(e),i.environmentIntensity=.7,i.userData.post={strength:.5,radius:.45,threshold:.92,exposure:1},op(i),i.add(new oo(16757370,2233871,.5));let t=new Zi(16769732,130,0,.42,.7,2);t.position.set(3.5,7.5,5.5),t.target.position.set(0,1,0),t.castShadow=!0,t.shadow.mapSize.set(ns.shadowMap/2,ns.shadowMap/2),t.shadow.bias=-2e-4,t.shadow.normalBias=.02,i.add(t,t.target);let n=new Zi(16747066,260,0,.55,.8,2);n.position.set(2.2,3.2,-6),n.target.position.set(0,1.2,0),i.add(n,n.target);let s=new Zi(4122367,70,0,.5,.8,2);s.position.set(-4,3,-4),s.target.position.set(0,1.4,0),i.add(s,s.target);let r=new xr(4122367,2.5,10,2);r.position.set(-1.5,1.2,2.5),i.add(r);let o=new se(new ws(400,64),new Qe({map:ep("#7a5a34","#4e3820","#a8844e",60),roughness:1}));o.rotation.x=-Math.PI/2,o.receiveShadow=!0,i.add(o),i.add(ip(ns.menuGrass,60,(k,Z)=>{let X=Math.hypot(k,Z);return X>3.2&&X<60&&Z<8?"gold":null}));let a=new se(new on(1.25,1.45,.38,48),new Qe({color:2762274,metalness:.85,roughness:.3}));a.position.y=.19,a.receiveShadow=!0,a.castShadow=!0,i.add(a);let c=new se(new Jn(1.32,.018,8,96),cn(4122367,1.6));c.rotation.x=Math.PI/2,c.position.y=.39,i.add(c);let l=new se(new Xi(2.2,2.24,96),new gt({color:4122367,transparent:!0,opacity:.28}));l.rotation.x=-Math.PI/2,l.position.y=.02,i.add(l);let h=new ct;h.position.set(0,2.1,-2.6),i.add(h);let u=new Gi({color:4122367,transparent:!0,opacity:.35}),d=(k,Z=96)=>{let X=[];for(let ie=0;ie<=Z;ie++){let q=ie/Z*Math.PI*2;X.push(new qe(Math.cos(q)*k,Math.sin(q)*k,0))}return new mi(new dt().setFromPoints(X),u)};h.add(d(1.9),d(1.75),d(1.1,6));let f=d(1.75,3);f.rotation.z=Math.PI/2,h.add(f);let g=d(1.75,3);g.rotation.z=-Math.PI/2,h.add(g),Fe.sigil=h;let x=[];for(let k=0;k<46;k++){let Z=B(-Math.PI,0),X=B(16,140);x.push({x:Math.cos(Z)*X,z:Math.sin(Z)*X-4,s:B(.9,1.6)})}i.add(au(x));for(let[k,Z,X]of[[-22,-34,1.3],[26,-58,1.6],[-60,-90,1.8]]){let ie=sp(X);ie.position.set(k,0,Z),i.add(ie)}let m=new qe(-.39,0,-.92),p=new qe(.92,0,-.39),M=(k,Z)=>m.clone().multiplyScalar(Math.cos(k*Math.PI/180)*Z).addScaledVector(p,Math.sin(k*Math.PI/180)*Z),b=[Rs("sand"),Rs("white"),Rs("glass")],_=new Qe({color:15129803,roughness:.6}),I=new Qe({color:10124894,roughness:.9});for(let k=0;k<40;k++){let Z=M(B(19,36),B(170,240)),X=B(6,13),ie=B(6,13),q=B(12,55)*(k%6===0?1.7:1),le=q>60?b[2]:wt([b[0],b[0],b[1]]),xe=new pi(X,q,ie);rp(xe,X,q,ie);let Re=new se(xe,[le,le,I,I,le,le]);if(Re.position.set(Z.x,q/2,Z.z),i.add(Re),le!==b[2]&&k%3===0){let ze=new se(new xi(Math.min(X,ie)*.45,16,8,0,Math.PI*2,0,Math.PI/2),_);ze.position.set(Z.x,q,Z.z),i.add(ze)}}let T=new ct,R=M(-17,135);T.position.set(R.x,0,R.z),i.add(T);let P=cn(16722762,1.6),S=new se(St.oct,P);S.scale.set(3,14,3),S.position.y=5,S.rotation.z=.35,T.add(S),Fe.frags=[];for(let k=0;k<7;k++){let Z=new se(St.oct,P);Z.scale.set(B(.6,1.4),B(2,4),B(.6,1.4)),Z.position.set(B(-8,8),B(14,26),B(-3,3)),Z.rotation.set(B(0,3),B(0,3),B(0,3)),Z.userData.s=B(.1,.4),Z.userData.dynamic=!0,T.add(Z),Fe.frags.push(Z)}let v=700,L=new Float32Array(v*3),H=new Float32Array(v*3);for(let k=0;k<v;k++){L[k*3]=B(-14,14),L[k*3+1]=B(0,10),L[k*3+2]=B(-12,6);let Z=Math.random()<.8?[1,.75,.4]:[.25,.9,1];H.set(Z,k*3)}let V=new dt;V.setAttribute("position",new vt(L,3)),V.setAttribute("color",new vt(H,3)),Fe.embers=new Wi(V,new gi({map:mu(),size:.07,vertexColors:!0,transparent:!0,opacity:.8,blending:rn,depthWrite:!1})),i.add(Fe.embers),Fe.mascar=gu(2.05),Fe.mascar.position.y=.38,Fe.mascar.userData.dynamic=!0,i.add(Fe.mascar),tp(i,400),Fe.cam.position.set(1.9,1.75,6.4)}function mv(i){let e=A.time;xu.value=e,Fe.sky.material.uniforms.t.value=e,Fe.drag||(Fe.yawVel*=.94,Fe.yaw+=Fe.yawVel,Fe.yaw*=.985),Fe.mascar&&(Fe.mascar.rotation.y=Fe.yaw+Math.sin(e*.25)*.18,Fe.mascar.children[0].scale.y=Fe.mascar.children[0].scale.x*(1+Math.sin(e*1.6)*.003)),Fe.sigil.rotation.z=e*.05,Fe.sigil.children[3].rotation.z=Math.PI/2-e*.12,Fe.sigil.children[4].rotation.z=-Math.PI/2+e*.09;for(let a of Fe.frags)a.rotation.y+=a.userData.s*i,a.position.y+=Math.sin(e+a.userData.s*10)*.004;let t=Fe.embers.geometry.attributes.position;for(let a=0;a<t.count;a++){let c=t.getY(a)+i*(.08+a%7*.02);c>10&&(c=0),t.setY(a,c),t.setX(a,t.getX(a)+Math.sin(e*.4+a)*.003+i*.05),t.getX(a)>14&&t.setX(a,-14)}t.needsUpdate=!0;let n=Fe.cam.aspect<1,s=(n?.5:1.9)+Fe.mx*.35,r=(n?1.6:1.75)-Fe.my*.2,o=n?6.4+4.5/Fe.cam.aspect:6.4;Fe.cam.position.x+=(s-Fe.cam.position.x)*.04,Fe.cam.position.y+=(r-Fe.cam.position.y)*.04,Fe.cam.position.z+=(o-Fe.cam.position.z)*.08,Fe.cam.lookAt(n?0:-.85,n?.35:1.22,0)}var fe={scene:new bs,cam:new Ot(60,innerWidth/innerHeight,.1,900)},_o={plaza:{name:"CONCORDIA PLAZA",sub:"SANCTUARY \xB7 SEAT OF THE GOVERNOR",safe:!0},causeway:{name:"CONCORD CAUSEWAY",sub:"AD-NOSTRA"},ward:{name:"SPIRE WARD",sub:"AD-NOSTRA"},ashen:{name:"SCORCHED VELD",sub:"LEVEL 1\u20133 \xB7 CONTESTED"},echo:{name:"ECHO PLAINS",sub:"LEVEL 2\u20134 \xB7 CONTESTED"},crater:{name:"THE CATHARSIS CRATER",sub:"LEVEL 4\u20137 \xB7 HOSTILE"}},bt=new qe(0,0,-165);function jn(i,e){return Math.hypot(i,e)<34?"plaza":Math.hypot(i-bt.x,e-bt.z)<72?"crater":i>34&&i<156&&Math.abs(e)<62?"ashen":i<-34&&i>-156&&Math.abs(e)<62?"echo":Math.abs(e)<12||Math.abs(i)<12&&e<0?"causeway":"ward"}function Xf(i,e,t){return Math.hypot(i,e)<40+t||Math.abs(e)<12+t||Math.abs(i)<12+t||i>30-t&&i<160+t&&Math.abs(e)<66+t||i<-30+t&&i>-160-t&&Math.abs(e)<66+t||Math.hypot(i-bt.x,e-bt.z)<76+t||Math.hypot(i,e)>232-t}function _n(i,e,t,n,s=60){A.colliders.push({minX:i-t/2,maxX:i+t/2,minZ:e-n/2,maxZ:e+n/2,h:s})}function gv(){let i=fe.scene;i.fog=new va(14200450,70,330),i.userData.post={strength:.45,radius:.5,threshold:.95,exposure:.9},i.add(new oo(16769208,5914152,.6));let e=new _r(16766624,2.4);e.castShadow=!0,e.shadow.mapSize.set(ns.shadowMap,ns.shadowMap),Object.assign(e.shadow.camera,{left:-45,right:45,top:45,bottom:-45,near:1,far:300}),e.shadow.camera.updateProjectionMatrix(),e.shadow.bias=-4e-4,e.shadow.normalBias=.03,i.add(e,e.target),fe.sun=e;let t=Qf(tc,600,{zen:4880564,mid:12170408,hor:14200450,glow:16761466,clouds:1});i.add(t),fe.sky=t,i.environment=jf(t),i.environmentIntensity=.55,op(i);let n=ep("#9a7440","#6e5028","#c9a160",90),s=new se(new Pn(600,600),new Qe({map:n,roughness:1}));s.rotation.x=-Math.PI/2,s.receiveShadow=!0,i.add(s);let r=(N,$,Y,ae,C=.02,Ae={})=>{let me=new se(N,new Qe(Object.assign({map:$,roughness:.95,polygonOffset:!0,polygonOffsetFactor:-1-C*10},Ae)));return me.rotation.x=-Math.PI/2,me.position.set(Y,C,ae),me.receiveShadow=!0,i.add(me),me},o=Nn(256,256,(N,$,Y)=>{N.fillStyle="#8a5a3a",N.fillRect(0,0,$,Y),es(N,$,Y,2500,["#7a4e32","#9c6a46","#6a4229"],3),N.fillStyle="rgba(240,220,180,0.35)",N.fillRect(40,124,170,8)});o.repeat.set(300/14,1),r(new Pn(300,14),o,0,0,.01);let a=Nn(256,256,(N,$,Y)=>{N.fillStyle="#8a5a3a",N.fillRect(0,0,$,Y),es(N,$,Y,2500,["#7a4e32","#9c6a46","#6a4229"],3),N.fillStyle="rgba(240,220,180,0.35)",N.fillRect(124,40,8,170)});a.repeat.set(1,120/14),r(new Pn(14,120),a,0,-60,.011);let c=is("kerb",()=>new Qe({color:14205082,roughness:.9}));for(let N of[-1,1]){for(let $ of[-1,1])et(116,.06,.12,c,$*92,.03,N*7.2,i).castShadow=!1;et(.12,.06,70,c,N*7.2,.03,-71,i).castShadow=!1}let l={sand:Rs("sand"),white:Rs("white"),terra:Rs("terra"),glass:Rs("glass")},h=new Qe({color:11045478,roughness:.92}),u=new Qe({color:14931384,roughness:.85}),d=new Qe({color:15656144,roughness:.55}),f=cn(16724821,3);fe.blink=f;let g=(N,$,Y,ae,C,Ae,me)=>{let ke=new pi(N,$,Y);rp(ke,N,$,Y);let we=new se(ke,[me,me,h,h,me,me]);we.position.set(ae,C+$/2,Ae),we.castShadow=we.receiveShadow=!0,i.add(we)},x=(N,$,Y,ae,C)=>{for(let[Ae,me,ke,we]of[[N,.35,0,$/2],[N,.35,0,-$/2],[.35,$,N/2,0],[.35,$,-N/2,0]])et(Ae,.9,me,u,Y+ke,ae+.45,C+we,i)},m=(N,$,Y)=>{let ae=B(7,13);et(.35,ae,.35,u,N,$+ae/2,Y,i);let C=new se(St.sph,f);C.scale.setScalar(.35),C.position.set(N,$+ae,Y),i.add(C)};for(let N=-230;N<=230;N+=20)for(let $=-230;$<=230;$+=20){let Y=B(9,15),ae=B(9,15),C=N+B(-2,2),Ae=$+B(-2,2);if(Xf(C,Ae,Math.max(Y,ae)/2))continue;let me=Math.hypot(C,Ae),ke=B(14,40)+(me<120?B(0,45):B(0,20));if(_n(C,Ae,Y,ae,ke+3),ke>58&&Math.random()<.55){let j=B(7,11);g(Y,j,ae,C,0,Ae,l.sand),x(Y,ae,C,j,Ae);let te=Y*B(.55,.7),Q=ae*B(.55,.7);g(te,ke-j,Q,C,j,Ae,l.glass),m(C,ke,Ae);continue}let we=wt([l.sand,l.sand,l.white,l.terra]),ht=ke>34?So(2,3):1,De=0,E=Y,y=ae,z=ke;for(let j=0;j<ht;j++){let te=j===ht-1?z:z*B(.45,.62);g(E,te,y,C,De,Ae,we),De+=te,z-=te,(j<ht-1||we!==l.white)&&x(E,y,C,De,Ae),j<ht-1&&(E*=B(.62,.8),y*=B(.62,.8))}if(we===l.white&&Math.random()<.7){let j=Math.min(E,y)*.42,te=new se(new on(j,j,1.6,20),u);te.position.set(C,De+.8,Ae),te.castShadow=!0,i.add(te);let Q=new se(new xi(j,20,10,0,Math.PI*2,0,Math.PI/2),d);Q.position.set(C,De+1.6,Ae),Q.castShadow=!0,i.add(Q)}else ke>50&&m(C,De,Ae)}let p=new se(new on(246,246,34,128,1,!0),new Qe({color:11832418,roughness:.95,side:$t}));p.position.y=17,i.add(p);let M=new se(new Jn(245,.25,6,256),cn(15254634,1.6));M.rotation.x=Math.PI/2,M.position.y=33,i.add(M);let b=["AD-NOSTRA","REBUILD \xB7 RENEW \xB7 REMEMBER","CONCORD","ANNO DOMINI 2137","THE SKY IS OURS","ENLIST \xB7 ASCEND"];b.forEach((N,$)=>{let Y=Nn(1024,192,(Ae,me,ke)=>{Ae.clearRect(0,0,me,ke),Ae.strokeStyle=$%2?"#e8c46a":"#3ee6ff",Ae.lineWidth=4,Ae.strokeRect(8,8,me-16,ke-16),Ae.fillStyle=$%2?"#e8c46a":"#3ee6ff",Ae.font="bold 84px Bahnschrift, Segoe UI, sans-serif",Ae.textAlign="center",Ae.textBaseline="middle",Ae.fillText(N,me/2,ke/2+4)});Y.wrapS=Y.wrapT=In;let ae=$/b.length*Math.PI*2+.5,C=new se(new Pn(26,4.9),new gt({map:Y,transparent:!0,opacity:.85,side:nn,blending:rn,depthWrite:!1}));C.position.set(Math.cos(ae)*46,B(20,30),Math.sin(ae)*46),C.lookAt(0,C.position.y,0),i.add(C)});let _=Nn(1024,1024,(N,$,Y)=>{N.fillStyle="#b4936c",N.fillRect(0,0,$,Y),es(N,$,Y,8e3,["#c0a07a","#a6845e","#c9ab86"]),N.strokeStyle="rgba(90,60,30,0.35)",N.lineWidth=3;for(let ae=64;ae<512;ae+=64)N.beginPath(),N.arc(512,512,ae,0,Math.PI*2),N.stroke();for(let ae=0;ae<32;ae++){let C=ae/32*Math.PI*2;N.beginPath(),N.moveTo(512+Math.cos(C)*64,512+Math.sin(C)*64),N.lineTo(512+Math.cos(C)*512,512+Math.sin(C)*512),N.stroke()}});r(new ws(34,96),_,0,0,.03,{roughness:.85});for(let[N,$]of[[33.6,.9],[30,.5],[16,.6]]){let Y=new se(new Xi(N-.15,N,128),new gt({color:4122367,transparent:!0,opacity:$}));Y.rotation.x=-Math.PI/2,Y.position.y=.05,i.add(Y)}let I=Ei(2765115);for(let N=0;N<12;N++){let $=N/12*Math.PI*2+Math.PI/12,Y=Math.cos($)*31,ae=Math.sin($)*31;et(.25,5,.25,I,Y,2.5,ae,i),et(.9,.12,.9,cn(10480127,3),Y,5.05,ae,i),_n(Y,ae,.5,.5)}let T=new Qe({color:9073240,metalness:.2,roughness:.6});for(let[N,$]of[[5.5,.4],[4.3,.8],[3.2,1.2]]){let Y=new se(new on(N,N+.2,$,48),T);Y.position.set(0,$/2,-12),Y.receiveShadow=!0,Y.castShadow=!0,i.add(Y)}let R=new se(new Jn(3.25,.03,6,96),cn(4122367,4));R.rotation.x=Math.PI/2,R.position.set(0,1.21,-12),i.add(R);let P=et(9,4,9,T,0,2,-27,i);_n(0,-27,9,9);let S=Nn(512,128,(N,$,Y)=>{N.fillStyle="#c9a85a",N.font="bold 40px Bahnschrift, sans-serif",N.textAlign="center",N.fillText("CARAX \xB7 SAGITTARIUS A*",$/2,52),N.font="28px Bahnschrift, sans-serif",N.fillText("MMCXXVII",$/2,98)});S.wrapS=S.wrapT=In;let v=new se(new Pn(6,1.5),new Qe({map:S,transparent:!0,emissive:13215834,emissiveMap:S,emissiveIntensity:.5}));v.position.set(0,2.2,-22.48),i.add(v);let L=gu(15,new Qe({color:9212828,roughness:.75,metalness:.15}));L.position.set(0,4,-27),i.add(L);let H=new se(new Jn(7,.12,8,128),cn(4122367,3));H.position.set(0,15,-29),H.userData.dynamic=!0,i.add(H),fe.halo=H;let V=Nn(512,512,(N,$,Y)=>{N.fillStyle="#4a3a2c",N.fillRect(0,0,$,Y),es(N,$,Y,9e3,["#3a2e24","#2a221c","#5c4834","#6e5028"],3),po(N,$,Y,18,"rgba(0,0,0,0.6)",2),po(N,$,Y,4,"rgba(255,90,40,0.25)",1.5)},8);r(new Pn(124,126),V,95,0,.02);let k=new Qe({color:9072210,roughness:.95}),Z=new Qe({color:3024416,roughness:1});for(let N=0;N<46;N++){let $=B(42,150),Y=B(-58,58);if(Math.abs(Y)<9)continue;let ae=Math.random()<.5,C=B(3,11),Ae=B(.8,5.5),me=B(.6,1.2),ke=et(ae?me:C,Ae,ae?C:me,Math.random()<.5?k:Z,$,Ae/2,Y,i);if(_n($,Y,ae?me:C,ae?C:me,Ae),Math.random()<.4)for(let we=0;we<4;we++)et(B(.4,1.4),B(.3,.9),B(.4,1.4),k,$+B(-3,3),.25,Y+B(-3,3),i).rotation.set(B(0,1),B(0,3),B(0,1))}fe.fires=[];let X=new Qe({color:16742954,emissive:16734746,emissiveIntensity:3,transparent:!0,opacity:.9});for(let N=0;N<12;N++){let $=B(45,148),Y=B(-55,55);if(Math.abs(Y)<9)continue;let ae=new se(St.cyl,Ei(3811874));ae.scale.set(.45,1,.45),ae.position.set($,.5,Y),ae.castShadow=!0,i.add(ae),_n($,Y,.9,.9,1.2);let C=new se(new mr(.4,1.2,8),X);C.position.set($,1.5,Y),C.userData.dynamic=!0,i.add(C),fe.fires.push(C)}let ie=[];for(let N=0;N<22;N++){let $=B(44,150),Y=B(-58,58);Math.abs(Y)<12||(ie.push({x:$,z:Y,s:B(.8,1.3),dead:Math.random()<.7}),_n($,Y,.7,.7,4))}i.add(au(ie));let q=Nn(512,512,(N,$,Y)=>{N.fillStyle="#b7a77c",N.fillRect(0,0,$,Y),es(N,$,Y,6e3,["#c9bb92","#a39268","#d4c8a2"],2),N.strokeStyle="rgba(255,43,74,0.12)",N.lineWidth=2;for(let ae=0;ae<=8;ae++)N.beginPath(),N.moveTo(ae*64,0),N.lineTo(ae*64,Y),N.stroke(),N.beginPath(),N.moveTo(0,ae*64),N.lineTo($,ae*64),N.stroke();po(N,$,Y,10,"rgba(60,40,20,0.35)")},6);r(new Pn(124,126),q,-95,0,.02),fe.pylons=[];for(let N=0;N<9;N++){let $=B(-148,-48),Y=B(-55,55);if(Math.abs(Y)<10)continue;let ae=new se(new on(.35,.7,16,8),Ei(3814448));ae.position.set($,8,Y),ae.castShadow=!0,i.add(ae),_n($,Y,1.4,1.4);let C=new se(new Jn(1.6,.08,6,32),cn(16722762,3));C.position.set($,12,Y),C.rotation.x=Math.PI/2,i.add(C);let Ae=new se(St.oct,cn(16722762,4));Ae.scale.setScalar(.5),Ae.position.set($,16.6,Y),i.add(Ae),C.userData.dynamic=Ae.userData.dynamic=!0,fe.pylons.push({r:C,top:Ae,ph:B(0,6)})}let le=[];for(let N=0;N<18;N++){let $=B(-150,-44),Y=B(-58,58);Math.abs(Y)<12||(le.push({x:$,z:Y,s:B(.9,1.5)}),_n($,Y,.7,.7,4))}i.add(au(le));for(let[N,$,Y]of[[-70,-40,1.1],[-132,34,1.3],[-110,-50,.9]]){let ae=sp(Y);ae.position.set(N,0,$),i.add(ae),_n(N,$,3.2*Y,3.2*Y,8)}let xe=Nn(1024,1024,(N,$,Y)=>{N.fillStyle="#5a2e22",N.fillRect(0,0,$,Y),es(N,$,Y,12e3,["#6a3828","#44221a","#7a4430","#2a1610"],3),N.shadowColor="#ff2b4a",N.shadowBlur=8,po(N,$,Y,26,"rgba(255,43,74,0.55)",2.5),N.shadowBlur=0,po(N,$,Y,30,"rgba(0,0,0,0.6)",2)});r(new ws(72,96),xe,bt.x,bt.z,.025,{emissive:16777215,emissiveMap:xe,emissiveIntensity:.15});let Re=new Qe({color:8014388,roughness:.9,flatShading:!0});for(let N=0;N<Math.PI*2;N+=.085){if(Math.abs(N-Math.PI/2)<.2)continue;let $=B(64,74),Y=B(3.5,7),ae=B(6,16),C=bt.x+Math.cos(N)*$,Ae=bt.z+Math.sin(N)*$,me=new se(St.rock,Re);me.scale.set(Y*1.25,ae*.32,Y),me.position.set(C,ae*.1,Ae),me.rotation.set(B(-.15,.15),B(0,3),B(-.15,.15)),me.castShadow=!0,me.receiveShadow=!0,i.add(me),_n(C,Ae,Y*1.3,Y*1.3,ae*.6)}for(let N=0;N<26;N++){let $=B(0,Math.PI*2),Y=B(18,58),ae=bt.x+Math.cos($)*Y,C=bt.z+Math.sin($)*Y;if(C>bt.z+40&&Math.abs(ae)<10)continue;let Ae=B(1,2.5),me=new se(St.rock,Re);me.scale.set(Ae*1.2,Ae*B(.5,.8),Ae),me.position.set(ae,Ae*.2,C),me.rotation.set(B(-.4,.4),B(0,3),B(-.4,.4)),me.castShadow=!0,i.add(me),_n(ae,C,Ae*1.2,Ae*1.2,3)}let ze=new ct;ze.position.set(bt.x,0,bt.z-12),i.add(ze);let lt=new Qe({color:2753289,emissive:16718396,emissiveIntensity:1.8,roughness:.2,metalness:.3,flatShading:!0}),ee=new se(St.oct,lt);ee.scale.set(5,14,5),ee.position.y=4,ee.rotation.z=.15,ze.add(ee),ee.castShadow=!0,_n(ze.position.x,ze.position.z,8,8);let re=new Qe({color:1709078,metalness:.7,roughness:.45,flatShading:!0}),be=new se(new on(2.5,5.5,36,8),re);be.position.set(7,4,-24),be.rotation.set(1.32,.25,0),be.castShadow=!0,be.receiveShadow=!0,ze.add(be);for(let N=0;N<4;N++){let $=new se(new Jn(3+N*.7,.12,6,8),lt);$.position.set(0,-12+N*7,0),$.rotation.x=Math.PI/2,be.add($)}for(let N of[-1,1]){let $=et(9,.5,5,re,0,6,0);$.position.set(N*6,6,0),$.rotation.z=N*.4,be.add($)}for(let N=0;N<4;N++)_n(ze.position.x+7+(N-1.5)*2.2,ze.position.z-10-N*8,10,9,8);fe.frags=[];for(let N=0;N<9;N++){let $=new se(St.oct,lt);$.scale.set(B(1,2.5),B(3,7),B(1,2.5));let Y=N/9*Math.PI*2;$.userData={a:Y,r:B(9,15),y:B(16,30),s:B(.05,.15),dynamic:!0},ze.add($),fe.frags.push($)}let de=1400,Be=new Float32Array(de*3);for(let N=0;N<de;N++)Be[N*3]=B(-60,60),Be[N*3+1]=B(0,30),Be[N*3+2]=B(-60,60);let Ge=new dt;Ge.setAttribute("position",new vt(Be,3)),fe.ash=new Wi(Ge,new gi({map:mu(),size:.16,color:16769192,transparent:!0,opacity:.55,depthWrite:!1})),i.add(fe.ash),fe.grass=ip(ns.worldGrass,232,(N,$)=>{if(Math.hypot(N,$)>236||!Xf(N,$,-2)||Math.abs($)<8||Math.abs(N)<8&&$<0&&$>-120)return null;let Y=jn(N,$);return Y==="plaza"?null:Y==="crater"?Math.hypot(N-bt.x,$-bt.z)>62&&Math.random()<.3?"burnt":null:Y==="ashen"?Math.random()<.6?"burnt":"gold":Y==="echo"?"pale":"gold"},0,0,64),i.add(fe.grass),fe.shieldMesh=new se(new xi(1.3,24,16),new gt({color:10480127,transparent:!0,opacity:.18,blending:rn,depthWrite:!1})),fe.shieldMesh.visible=!1,i.add(fe.shieldMesh),fe.targetRing=new se(new Xi(.9,1.05,48),new gt({color:16722762,transparent:!0,opacity:.9,depthWrite:!1})),fe.targetRing.rotation.x=-Math.PI/2,fe.targetRing.visible=!1,i.add(fe.targetRing),fe.batch=tp(i,250),cv(i),xv(),_v(),yv(),vv(),A.world=!0}function ic(i,e){let t=document.createElement("div");return t.className="plate "+i,t.innerHTML=e,t.style.display="none",K("plates").appendChild(t),t}function sc(i,e,t,n,s){let r=new se(St.box,new gt({visible:!1}));r.scale.set(e,t,n),r.position.y=s,r.userData.ent=i,i.group.add(r),i.hitbox=r}function xv(){let i=gu(2.25);i.position.set(0,1.2,-12),fe.scene.add(i);let e={kind:"npc",id:"mascar",name:"Croxian Mascar",title:"Governor of Ad-Nostra",pos:new qe(0,1.2,-12),group:i,height:2.6,radius:1,alive:!0};e.plate=ic("npc",'<div class="qm"></div><div class="n">Croxian Mascar</div><div class="g">&lt;Governor of Ad-Nostra&gt;</div>'),sc(e,1.2/i.scale.x,2.4,1.2,1.2),A.npcs.push(e);let t=Eo({armor:4865836,accent:15254634,visor:15254634,weapon:"none"});t.group.position.set(13,0,-3),t.group.rotation.y=-Math.PI/2.4,fe.scene.add(t.group);let n=et(1,1.1,3.4,Ei(2765115),11.6,.55,-3,fe.scene);_n(11.6,-3,1,3.4),et(.05,.05,3.42,cn(15254634,1.5),11.08,1.1,-3,fe.scene);for(let r=0;r<4;r++)et(.9,.9,.9,Ei(3814182),14.5+B(-.5,.5),.45+(r>2?.9:0),-4.5+r*.9,fe.scene).rotation.y=B(-.3,.3);let s={kind:"npc",id:"ilse",name:"Ilse Varn",title:"Concord Quartermaster",pos:new qe(13,0,-3),group:t.group,rig:t,height:2.1,radius:1,alive:!0};s.plate=ic("npc",'<div class="n">Ilse Varn</div><div class="g">&lt;Concord Quartermaster&gt;</div>'),sc(s,1,2,1,1),A.npcs.push(s)}function Sr(i,e,t,n,s=!1){let r={kind:"enemy",type:i,level:e,spawn:new qe(t,0,n),pos:new qe(t,0,n),alive:!0,state:"idle",target:null,atkT:B(.5,1.5),wanderT:B(1,6),wanderTo:null,dots:[],tagged:!1,yaw:B(0,6.28),anim:B(0,10),temp:s,move:0},o;i==="hollowed"?(Object.assign(r,{name:e>=4?"Beacon-Bound Hollowed":"Hollowed",maxHp:70+30*e,dmg:5+2.6*e,atkCd:1.7,atkR:2.1,speed:3.4+.25*e,aggroR:13,xp:36+16*e,height:2.15,radius:.55,respawn:16}),o=Eo({armor:1774871,accent:16722762,visor:16722762,weapon:"none",hollow:!0}),o.group.scale.setScalar(1+e*.03)):i==="drone"?(Object.assign(r,{name:"Echo Drone",maxHp:55+22*e,dmg:5+2.3*e,atkCd:2.2,atkR:13,speed:4.6,aggroR:16,xp:42+17*e,height:3.5,radius:.85,respawn:18}),o=sv(e)):(Object.assign(r,{name:"Remnant of the Catharsis",isBoss:!0,maxHp:2600,dmg:24,atkCd:2.3,atkR:4.8,speed:3.3,aggroR:20,xp:950,height:8.4,radius:2.2,respawn:120,slamT:7,phase:0}),o=rv()),r.rig=o,r.group=o.group,r.hp=r.maxHp,r.group.position.copy(r.pos),fe.scene.add(r.group);let a=r.group.scale.x;return sc(r,r.radius*2/a,r.height/a,r.radius*2/a,r.height/2/a),r.plate=ic("enemy",`<div class="n">${Bt(r.name)} <span style="color:#aaa">${r.level}</span></div><div class="hb"><i></i></div>`),r.plateBar=r.plate.querySelector(".hb i"),A.enemies.push(r),r}function _v(){for(let i=0;i<16;i++){let e=B(44,150),t=B(-56,56);Sr("hollowed",e<75?1:e<115?2:3,e,t)}for(let i=0;i<14;i++){let e=B(-150,-44),t=B(-56,56);Sr("drone",e>-75?2:e>-115?3:4,e,t)}for(let i=0;i<9;i++){let e=B(0,Math.PI*2),t=B(22,56);Sr("hollowed",So(4,5),bt.x+Math.cos(e)*t,bt.z+Math.sin(e)*t)}for(let i=0;i<4;i++){let e=B(0,Math.PI*2),t=B(20,50);Sr("drone",5,bt.x+Math.cos(e)*t,bt.z+Math.sin(e)*t)}A.boss=Sr("boss",7,bt.x,bt.z+2)}function yv(){let i=new Qe({color:3802640,emissive:16722762,emissiveIntensity:3,flatShading:!0}),e=new gt({color:16722762,transparent:!0,opacity:.25,blending:rn,depthWrite:!1});for(let t=0;t<10;t++){let n=t/10*Math.PI*2+B(-.2,.2),s=B(24,54),r=new ct;r.position.set(bt.x+Math.cos(n)*s,0,bt.z+Math.sin(n)*s);let o=new se(St.oct,i);o.scale.set(.3,.6,.3),o.position.y=.9,r.add(o);let a=new se(new on(.08,.08,14,6,1,!0),e);a.position.y=7,r.add(a),fe.scene.add(r),A.shards.push({kind:"shard",pos:r.position,group:r,crystal:o,active:!0,respawnT:0})}}var qf={ashen:[new qe(36,0,0)],echo:[new qe(-36,0,0)],crater:[new qe(0,0,-38),new qe(0,0,-106)],plaza:[]};function Ts(i){if(i==="ashen")return new qe(B(46,145),0,B(-50,50));if(i==="echo")return new qe(B(-145,-46),0,B(-50,50));if(i==="crater"){let s=B(0,Math.PI*2),r=B(12,50);return new qe(bt.x+Math.cos(s)*r,0,bt.z+Math.sin(s)*r)}let e=B(0,Math.PI*2),t=B(6,26),n=new qe(Math.cos(e)*t,0,Math.sin(e)*t);return n.z<-6&&Math.abs(n.x)<7&&(n.z=4),n}function vv(){let i=Of.slice().sort(()=>Math.random()-.5).slice(0,14);for(let e of i){let t=wt(Object.keys(Si)),n=Si[t],s=Eo({armor:wt([2830908,3817290,2764586,3878710,2501688]),accent:n.hex,visor:new ve(wt(Ka)).getHex(),weapon:n.weapon}),r={kind:"bot",name:e,cls:t,level:So(3,18),guild:wt(Ff),rig:s,group:s.group,pos:Ts("plaza"),alive:!0,hp:260,maxHp:260,state:"idle",path:[],idleT:B(2,20),actT:0,act:"plaza",target:null,atkT:0,yaw:0,move:0,atk:0,danceT:0,height:2.1,radius:.5};r.group.position.copy(r.pos),fe.scene.add(r.group),r.plate=ic("bot",`<div class="n">${Bt(e)}</div>${r.guild?`<div class="g">&lt;${Bt(r.guild)}&gt;</div>`:""}`),sc(r,.9,2,.9,1),Math.random()<.6&&(r.act=wt(["ashen","ashen","echo","echo","crater"]),r.pos.copy(Ts(r.act)),r.state="hunt",r.actT=B(40,160),r.group.position.copy(r.pos)),A.bots.push(r)}}var cu=new qe(0,0,8);function Mv(i,e,t){return{v:1,name:i,cls:e,visor:t,level:1,xp:0,credits:30,medkits:3,wpn:0,arm:0,q:{i:0,st:"available",p:0},kills:0,deaths:0,title:"Ascendant",played:0,completed:0,pos:null,created:Date.now()}}var lu=i=>Math.round(140*Math.pow(i,1.55)),Ai=()=>Si[A.D.cls],Xn=()=>Math.round(Ai().hp*(1+.1*(A.D.level-1))+18*A.D.arm),Ls=()=>Ai().en,ac=()=>(1+.12*(A.D.level-1))*(1+.1*A.D.wpn);function bv(){let i=A.D,e=Ai();A.P&&A.P.group&&(fe.scene.remove(A.P.group),A.P.plate?.remove());let t=Eo({armor:3094338,accent:e.hex,visor:new ve(i.visor).getHex(),weapon:e.weapon}),n={kind:"player",rig:t,group:t.group,pos:cu.clone(),vy:0,yaw:Math.PI,alive:!0,dead:!1,hp:Xn(),en:Ls(),shield:0,shieldT:0,target:null,gcd:0,cds:{},autoOn:!1,autoT:0,combatT:0,critNext:!1,atk:0,move:0,danceT:0,medT:0,height:2.1,radius:.45};i.pos&&jn(i.pos[0],i.pos[1])!=="ward"&&n.pos.set(i.pos[0],0,i.pos[1]),n.group.position.copy(n.pos),fe.scene.add(n.group),A.P=n,A.cam={yaw:0,pitch:.32,dist:9.5},n.pos.distanceTo(cu)>1&&(A.cam.yaw=Math.atan2(n.pos.x,n.pos.z)),Vv()}function Ar(i,e,t,n=2.2,s=!1){let r=document.createElement("div");r.className="fl"+(s?" crit":""),r.textContent=e,r.style.color=t,K("floaters").appendChild(r),A.floaters.push({el:r,p:new qe(i.x+B(-.4,.4),(i.y||0)+n,i.z+B(-.4,.4)),t:0,life:s?1.4:1.1})}function Wn(i){let e=K("center-msg");e.textContent=i,e.style.opacity=1,clearTimeout(Wn.t),Wn.t=setTimeout(()=>e.style.opacity=0,1300),Le.sfx("error")}function Rr(i,e,t="",n=""){let s=K("banner");s.className=n,s.querySelector(".b1").textContent=i,s.querySelector(".b2").textContent=e,s.querySelector(".b3").textContent=t,s.style.opacity=1,clearTimeout(Rr.t),Rr.t=setTimeout(()=>s.style.opacity=0,2800)}function hu(){let i=K("vignette");i.style.boxShadow="inset 0 0 160px rgba(255,20,50,.55)",clearTimeout(hu.t),hu.t=setTimeout(()=>i.style.boxShadow="inset 0 0 160px rgba(255,20,50,0)",160)}function Ti(i,e,t,n={}){if(!i.alive)return;e=Math.max(1,Math.round(e));let s=A.P;if(i===s){if(s.dead)return;if(s.shield>0){let r=Math.min(s.shield,e);s.shield-=r,e-=r,Ar(s.pos,"ABSORB "+r,"#9fdcff",2.3)}if(s.combatT=6,e<=0)return;s.hp-=e,Ar(s.pos,"-"+e,"#ff5a6e",2.3),Le.sfx("hurt"),hu(),s.hp<=0&&Sv();return}i.hp-=e,i.kind==="enemy"?(t===s&&(i.tagged=!0,Ar(i.pos,String(e),n.crit?"#ffd166":"#ffffff",i.height*.75+(i.type==="drone"?.6:0),n.crit),Le.sfx("hit")),(i.state==="idle"||!i.target||!i.target.alive)&&(i.isBoss&&t===s&&i.state==="idle"&&hp(),i.target=t,i.state="chase"),t===s&&i.target&&i.target.kind==="bot"&&Math.random()<.15&&(i.target=s),i.hp<=0&&ap(i,t)):i.kind==="bot"&&i.hp<=0&&Ev(i)}function ap(i,e){if(i.alive=!1,i.hp=0,i.state="dead",i.deadT=0,i.dots=[],i.target=null,Un(i.pos.clone().setY(i.height*.5),i.isBoss?16722762:16734830,i.isBoss?120:30,i.isBoss?9:4),Le.sfx(i.isBoss?"boom":"die"),A.P.target===i&&setTimeout(()=>{A.P.target===i&&ss(null)},600),i.tagged){let t=A.D,n=i.xp,s=t.level-i.level;s>=4?n=Math.round(n*.2):s>=2&&(n=Math.round(n*.6)),cp(n);let r=i.isBoss?300:So(2+i.level,6+i.level*3);t.credits+=r,xt("loot",null,`You loot ${r} credits.`),Le.sfx("coin"),t.kills++,uu(i.isBoss?"boss":i.type,i),jn(i.pos.x,i.pos.z)==="crater"&&!i.isBoss&&t.q.i===2&&t.q.st==="active"&&Math.random()<.4&&(xt("loot",null,"You loot: [Beacon Shard]"),uu("shard")),Math.random()<.06&&!i.isBoss&&(t.medkits++,xt("loot",null,"You loot: [Concord Medkit]")),i.isBoss&&(xt("world",null,`${t.name} has destroyed the Remnant of the Catharsis!`,"sys"),setTimeout(()=>Ir(wt(A.bots),wt(["GG "+t.name+"!!","legend","WOW","grats "+t.name,"o7 hero"])),1500))}i.isBoss&&(K("bossbar").classList.add("hidden"),Le.playMusic("world"))}function cp(i){let e=A.D,t=A.P;if(!(e.level>=30))for(e.xp+=i,Ar(t.pos,`+${i} XP`,"#c9a3ff",2.8);e.xp>=lu(e.level)&&e.level<30;)e.xp-=lu(e.level),e.level++,t.hp=Xn(),t.en=Ls(),Rr("LEVEL UP","LEVEL "+e.level,"YOUR POWER GROWS","lv"),Le.sfx("levelup"),Er(t.pos,15254634,6,1.2),Un(t.pos.clone().setY(1),15254634,40,4),xt("sys",null,`Congratulations, you have reached level ${e.level}!`),Math.random()<.6&&setTimeout(()=>Ir(wt(A.bots),wt(["grats!","gz","grats "+e.name,"ding!"])),1200),Ds()}function Sv(){let i=A.P;i.hp=0,i.dead=!0,i.alive=!1,i.autoOn=!1,A.D.deaths++,Le.sfx("death"),i.group.rotation.x=-Math.PI/2,i.group.position.y=.3;for(let e of A.enemies)e.target===i&&(e.target=null,e.state="return");zt(),K("death").classList.remove("hidden")}function wv(){let i=A.P;i.dead=!1,i.alive=!0,i.hp=Xn(),i.en=Ls(),i.pos.copy(cu),i.group.rotation.x=0,i.shield=0,ss(null),K("death").classList.add("hidden"),Un(i.pos.clone().setY(1),4122367,40,3),Le.sfx("heal"),A.cam.yaw=0}function Ev(i){i.alive=!1,i.hp=0,i.state="dead",i.deadT=0,i.target=null,i.group.rotation.x=-Math.PI/2,i.group.position.y=.3;for(let e of A.enemies)e.target===i&&(e.target=null,e.state="return");Math.random()<.3&&setTimeout(()=>xt("zone",i.name,wt(["ugh","rip","that thing hits HARD","brb corpse run","nooo"])),800)}function ss(i){let e=A.P;e.target=i,i||(e.autoOn=!1),fp(!0)}function Tv(i,e=A.P.pos,t=null){let n=null,s=i;for(let r of A.enemies){if(!r.alive||r===t)continue;let o=Nt(e,r.pos)-r.radius;o<s&&(s=o,n=r)}return n}function lp(){let i=A.P,e=A.enemies.filter(n=>n.alive&&Nt(i.pos,n.pos)<40).sort((n,s)=>Nt(i.pos,n.pos)-Nt(i.pos,s.pos));if(!e.length){Wn("No enemies nearby");return}let t=e.indexOf(i.target);ss(e[(t+1)%e.length]),i.autoOn=!0}function Av(){let i=A.P;return i.critNext?(i.critNext=!1,!0):Math.random()<Ai().crit}function Gn(i,e,t={}){let n=t.noCrit?!1:Av();Ti(i,e*ac()*(n?1.8:1)*B(.92,1.08),A.P,{crit:n})}function yo(i,e){i.yaw=Math.atan2(e.x-i.pos.x,e.z-i.pos.z)}function wr(i){let e=A.P;if(!e||e.dead||A.mode!=="world")return;if(i===4)return Rv();let t=Ai(),n=t.abil[i];if((e.cds[n.id]||0)>0||e.gcd>0){(e.cds[n.id]||0)>0&&Wn("Ability not ready");return}if(e.en<n.cost){Wn("Not enough energy");return}let s=e.target;if(n.target){if(!s||!s.alive||s.kind!=="enemy"){if(s=Tv((n.range||t.range)+2),!s){Wn("No target");return}ss(s)}if(Nt(e.pos,s.pos)-s.radius>(n.range||t.range)){Wn("Out of range");return}yo(e,s.pos)}e.en-=n.cost,e.cds[n.id]=n.cd,e.gcd=t.gcd,e.combatT=6,s&&(e.autoOn=!0),e.atk=.3;let r=K("hotbar").children[i];r.classList.remove("flash"),r.offsetWidth,r.classList.add("flash");let o=e.pos.clone().setY(1.4);switch(n.id){case"riven":case"cut":Gn(s,n.dmg),mo(s,t.hex),Le.sfx("slash");break;case"judge":Gn(s,n.dmg),mo(s,15254634,1.8),Er(s.pos,15254634,3,.4),Le.sfx("heavy");break;case"slam":{Er(e.pos,t.hex,n.radius,.45),Le.sfx("heavy");let a=0;for(let c of A.enemies)c.alive&&Nt(e.pos,c.pos)-c.radius<n.radius&&(Gn(c,n.dmg),a++);break}case"guard":e.shield=Math.round(n.shield*(1+.1*(A.D.level-1))),e.shieldT=n.dur,Le.sfx("shield");break;case"bolt":vo(o,s,t.hex,.18,34,()=>Gn(s,n.dmg)),Le.sfx("zap");break;case"lance":vo(o,s,16777215,.35,42,()=>{Gn(s,n.dmg),Er(s.pos,t.hex,2.5,.3)}),Le.sfx("lance");break;case"chain":{Gn(s,n.dmg),Yf(o,s.pos.clone().setY(s.height*.6),t.hex);let a=s,c=[s];for(let l=0;l<3;l++){let h=null,u=n.jump;for(let d of A.enemies){if(!d.alive||c.includes(d))continue;let f=Nt(a.pos,d.pos);f<u&&(u=f,h=d)}if(!h)break;c.push(h),Yf(a.pos.clone().setY(a.height*.6),h.pos.clone().setY(h.height*.6),t.hex),Gn(h,n.dmg*.75),a=h}Le.sfx("zap");break}case"restore":{let a=Math.round(Xn()*n.heal);e.hp=Math.min(Xn(),e.hp+a),Ar(e.pos,"+"+a,"#4dff9a",2.4),Un(e.pos.clone().setY(1),5111706,30,2),Er(e.pos,5111706,3,.6),Le.sfx("heal");break}case"bleed":Gn(s,n.dmg),s.dots.push({dps:n.dot*ac(),t:n.dur,tick:1,src:e}),mo(s,16722762),Le.sfx("slash");break;case"blink":{Un(e.pos.clone().setY(1),t.hex,20,2);let a=new qe(e.pos.x-s.pos.x,0,e.pos.z-s.pos.z).normalize(),c=s.pos.clone().addScaledVector(a,-(s.radius+1));c.y=0,e.pos.copy(c),yu(e.pos,e.radius),yo(e,s.pos),e.critNext=!0,Un(e.pos.clone().setY(1),t.hex,20,2),Le.sfx("blink");break}case"flurry":for(let a=0;a<n.hits;a++)A.timers.push({t:a*.12,fn:()=>{s.alive&&(Gn(s,n.dmg),mo(s,t.hex,.8),Le.sfx("slash"),e.atk=.2)}});break}}function Rv(){let i=A.P,e=A.D;if(i.medT>0){Wn("Medkit not ready");return}if(e.medkits<=0){Wn("No medkits \u2014 visit Ilse Varn");return}e.medkits--,i.medT=15;let t=Math.round(Xn()*.5);i.hp=Math.min(Xn(),i.hp+t),Ar(i.pos,"+"+t,"#4dff9a",2.4),Un(i.pos.clone().setY(1),5111706,24,2),Le.sfx("heal"),bu()}var rc={ring:new Xi(.85,1,64),half:new Xi(.7,1.3,24,1,0,Math.PI),disc:new ws(1,48)};function To(i,e,t){fe.scene.add(i),A.fx.push({obj:i,t:0,life:e,update:t})}function Er(i,e,t,n){let s=new se(rc.ring,new gt({color:e,transparent:!0,opacity:.9,blending:rn,depthWrite:!1,side:nn}));s.rotation.x=-Math.PI/2,s.position.set(i.x,.12,i.z),To(s,n,(r,o)=>{let a=.3+o*t;s.scale.set(a,a,a),s.material.opacity=.9*(1-o)})}function mo(i,e,t=1.2){let n=new se(rc.half,new gt({color:e,transparent:!0,opacity:1,blending:rn,depthWrite:!1,side:nn}));n.position.set(i.pos.x,(i.pos.y||0)+i.height*.55,i.pos.z),n.lookAt(fe.cam.position),n.rotateZ(B(-1,1)),To(n,.22,(s,r)=>{n.scale.setScalar(t*(.6+r*.6)),n.material.opacity=1-r})}function Un(i,e,t,n){let s=new dt,r=new Float32Array(t*3),o=[];for(let c=0;c<t;c++)r.set([i.x,i.y,i.z],c*3),o.push(new qe(B(-1,1),B(-.2,1.2),B(-1,1)).normalize().multiplyScalar(n*B(.4,1)));s.setAttribute("position",new vt(r,3));let a=new Wi(s,new gi({map:mu(),color:e,size:.26,transparent:!0,blending:rn,depthWrite:!1}));To(a,.9,(c,l,h)=>{let u=s.attributes.position;for(let d=0;d<t;d++)o[d].y-=6*h,u.setXYZ(d,u.getX(d)+o[d].x*h,Math.max(.05,u.getY(d)+o[d].y*h),u.getZ(d)+o[d].z*h);u.needsUpdate=!0,a.material.opacity=1-l})}function Yf(i,e,t){let n=[i.clone()],s=7;for(let o=1;o<s;o++){let a=i.clone().lerp(e,o/s);a.x+=B(-.4,.4),a.y+=B(-.4,.4),a.z+=B(-.4,.4),n.push(a)}n.push(e.clone());let r=new mi(new dt().setFromPoints(n),new Gi({color:t,transparent:!0,blending:rn}));To(r,.25,(o,a)=>{r.material.opacity=1-a})}function vo(i,e,t,n,s,r,o=A.P){let a=new se(St.sph,new gt({color:t,transparent:!0,blending:rn}));a.scale.setScalar(n),a.position.copy(i),fe.scene.add(a);let c=new se(St.sph,new gt({color:t,transparent:!0,opacity:.3,blending:rn,depthWrite:!1}));c.scale.setScalar(2.2),a.add(c),A.proj.push({m:a,target:e,speed:s,onHit:r,life:4})}function Cv(i,e,t,n){let s=new se(rc.disc,new gt({color:16722762,transparent:!0,opacity:.2,depthWrite:!1,blending:rn}));s.rotation.x=-Math.PI/2,s.position.set(i.x,.08,i.z),s.scale.setScalar(e);let r=new se(rc.ring,new gt({color:16722762,transparent:!0,opacity:.9,depthWrite:!1}));s.add(r),To(s,t,(o,a)=>{s.material.opacity=.15+.35*a,r.scale.setScalar(a),a>=.999&&!o.done&&(o.done=!0,n())})}function yu(i,e){for(let n of A.colliders){if(i.x+e<n.minX||i.x-e>n.maxX||i.z+e<n.minZ||i.z-e>n.maxZ)continue;let s=i.x+e-n.minX,r=n.maxX-(i.x-e),o=i.z+e-n.minZ,a=n.maxZ-(i.z-e),c=Math.min(s,r,o,a);c===s?i.x-=s:c===r?i.x+=r:c===o?i.z-=o:i.z+=a}let t=Math.hypot(i.x,i.z);t>238&&(i.x*=238/t,i.z*=238/t)}function Cs(i,e,t,n,s=.2){let r=e.x-i.pos.x,o=e.z-i.pos.z,a=Math.hypot(r,o);if(a<=s)return i.move=Math.max(0,i.move-n*5),!0;let c=Math.min(a-s,t*n);return i.pos.x+=r/a*c,i.pos.z+=o/a*c,i.yaw=Math.atan2(r,o),i.move=Math.min(1,i.move+n*5),!1}function Mo(i,e,t,n=10){let s=e-i.rotation.y;for(;s>Math.PI;)s-=Math.PI*2;for(;s<-Math.PI;)s+=Math.PI*2;i.rotation.y+=s*Math.min(1,t*n)}var yn={};function Iv(i){let e=A.P,t=A.D,n=Ai();t.played+=i,e.gcd=Math.max(0,e.gcd-i),e.medT=Math.max(0,e.medT-i);for(let g in e.cds)e.cds[g]=Math.max(0,e.cds[g]-i);if(e.combatT=Math.max(0,e.combatT-i),e.shieldT>0&&(e.shieldT-=i,e.shieldT<=0&&(e.shield=0)),e.dead){e.group.position.copy(e.pos).setY(.3);return}e.en=Math.min(Ls(),e.en+9*i),e.combatT<=0&&(e.hp=Math.min(Xn(),e.hp+Xn()*.035*i));let s=document.activeElement===K("chat-input"),r=0,o=0;!s&&!A.ui&&((yn.KeyW||yn.ArrowUp)&&(o+=1),(yn.KeyS||yn.ArrowDown)&&(o-=1),(yn.KeyA||yn.ArrowLeft)&&(r-=1),(yn.KeyD||yn.ArrowRight)&&(r+=1),It.both&&(o=1),Mt.id!==null&&(r+=Mt.x,o-=Mt.y));let a=A.cam.yaw,c=new qe(-Math.sin(a),0,-Math.cos(a)),l=new qe(Math.cos(a),0,-Math.sin(a)),h=c.multiplyScalar(o).add(l.multiplyScalar(r));if(h.lengthSq()>0){h.normalize();let g=yn.ShiftLeft||yn.ShiftRight||Mt.mag>.92?10.5:7;e.pos.addScaledVector(h,g*i),e.yaw=Math.atan2(h.x,h.z),e.move=Math.min(1,e.move+i*6),e.danceT=0}else e.move=Math.max(0,e.move-i*6),e.target&&e.target.alive&&e.autoOn&&yo(e,e.target.pos);e.vy-=22*i,e.pos.y+=e.vy*i,e.pos.y<=0&&(e.pos.y=0,e.vy=0),yu(e.pos,e.radius);let d=e.target;e.autoOn&&d&&d.alive&&d.kind==="enemy"&&(e.autoT-=i,e.autoT<=0&&Nt(e.pos,d.pos)-d.radius<=n.range&&(e.autoT=2,e.combatT=6,n.range>5?(vo(e.pos.clone().setY(1.4),d,n.hex,.1,30,()=>Gn(d,7)),Le.sfx("drone")):(Gn(d,7),e.atk=.3,Le.sfx("slash")))),e.atk=Math.max(0,e.atk-i),e.danceT=Math.max(0,e.danceT-i),e.group.position.copy(e.pos),Mo(e.group,e.yaw+(e.danceT>0?A.time*6:0),i,e.danceT>0?50:12),oc(e.rig,e.move,A.time,e.atk,e.danceT),e.rig.group.userData.orb&&(e.rig.group.userData.orb.rotation.y+=i*3),fe.shieldMesh.visible=e.shield>0,fe.shieldMesh.position.copy(e.pos).setY(1),fe.shieldMesh.material.opacity=.12+Math.sin(A.time*6)*.05;let f=jn(e.pos.x,e.pos.z);if(f!==A.zone){let g=A.zone;A.zone=f;let x=_o[f];K("zone-name").textContent=x.name,K("zone-sub").textContent=x.sub,!(g==="causeway"&&f==="ward")&&!(g==="ward"&&f==="causeway")&&Rr(x.safe?"SANCTUARY":"ENTERING",x.name,x.sub)}}function Pv(i){let e=A.P;for(let t of A.enemies){if(t.anim+=i,!t.alive){if(t.deadT+=i,t.deadT<2?(t.group.position.y=-t.deadT*(t.type==="drone"?1.3:.8),t.group.rotation.z=Math.min(1.4,t.deadT*2)*(t.type==="drone"?1:.6)):t.group.visible=!1,t.temp&&t.deadT>2.2){fe.scene.remove(t.group),t.plate.remove(),t.removed=!0;continue}!t.temp&&t.deadT>t.respawn&&(t.alive=!0,t.hp=t.maxHp,t.pos.copy(t.spawn),t.state="idle",t.tagged=!1,t.phase=0,t.group.visible=!0,t.group.rotation.z=0,t.group.position.y=0,Un(t.pos.clone().setY(1),16722762,20,2));continue}for(let r of t.dots)r.t-=i,r.tick-=i,r.tick<=0&&(r.tick=1,Ti(t,r.dps,r.src));if(t.dots=t.dots.filter(r=>r.t>0),!t.alive)continue;let n=t.isBoss?40:44,s=_o[jn(e.pos.x,e.pos.z)].safe;if(t.state==="idle")t.wanderT-=i,t.wanderT<=0&&(t.wanderT=B(3,8),t.wanderTo=t.spawn.clone().add(new qe(B(-6,6),0,B(-6,6)))),t.wanderTo?Cs(t,t.wanderTo,t.speed*.35,i)&&(t.wanderTo=null):t.move=Math.max(0,t.move-i*4),e.alive&&!s&&Nt(e.pos,t.pos)<t.aggroR&&(t.target=e,t.state="chase",t.isBoss&&hp());else if(t.state==="chase"){let r=t.target;if(!r||!r.alive||r===e&&s||Nt(t.pos,t.spawn)>n)t.state="return",t.target=null;else{let o=t.atkR+(r.radius||.5),a=Nt(t.pos,r.pos)<=o;a?(t.move=Math.max(0,t.move-i*5),yo(t,r.pos)):Cs(t,r.pos,t.speed,i,o*.85),t.atkT-=i,a&&t.atkT<=0&&(t.atkT=t.atkCd,t.atk=.3,t.type==="drone"?(vo(t.pos.clone().setY(2.6),r,16722762,.16,18,()=>Ti(r,t.dmg*B(.9,1.1),t),t),r===e&&Le.sfx("drone")):Ti(r,t.dmg*B(.9,1.1),t)),t.isBoss&&Lv(t,i)}}else t.state==="return"&&(t.hp=Math.min(t.maxHp,t.hp+t.maxHp*.25*i),t.dots=[],t.tagged=!1,Cs(t,t.spawn,t.speed*1.6,i,.5)&&(t.state="idle",t.hp=t.maxHp,t.isBoss&&(t.phase=0,K("bossbar").classList.add("hidden"),Le.playMusic("world"))));for(let r of A.enemies){if(r===t||!r.alive)continue;let o=t.pos.x-r.pos.x,a=t.pos.z-r.pos.z,c=Math.hypot(o,a),l=t.radius+r.radius;c<l&&c>.001&&(t.pos.x+=o/c*(l-c)*.5,t.pos.z+=a/c*(l-c)*.5)}if(t.group.position.set(t.pos.x,0,t.pos.z),Mo(t.group,t.yaw,i,8),t.atk=Math.max(0,(t.atk||0)-i),t.type==="hollowed")oc(t.rig,t.move*.8,t.anim*.8,t.atk),t.rig.head.rotation.z=Math.sin(t.anim*1.3)*.15;else if(t.type==="drone")t.rig.body.position.y=2.6+Math.sin(t.anim*2)*.25,t.rig.ring.rotation.z+=i*2,t.rig.shell.rotation.y-=i,t.rig.body.rotation.x=t.move*.25;else{t.rig.orbit.rotation.y+=i*.8,t.rig.body.position.y=Math.sin(t.anim)*.2;let r=t.atk>0?Math.sin((1-t.atk/.3)*Math.PI):0;t.rig.arms[1].rotation.x=-1.6*r,t.rig.arms[0].rotation.x=Math.sin(t.anim*.7)*.1,t.rig.core.rotation.y+=i}}A.enemies=A.enemies.filter(t=>!t.removed)}function hp(){Le.playMusic("boss"),K("bossbar").classList.remove("hidden"),xt("zone",null,'The Remnant of the Catharsis: "THE WILL OF ZARK DOES NOT DIE."',"err")}function Lv(i,e){if(i.slamT-=e,i.slamT<=0&&i.target){i.slamT=B(7,10);let n=i.target.pos.clone();Cv(n,6,1.8,()=>{Le.sfx("boom"),Er(n,16722762,7,.5),Un(n.clone().setY(.5),16722762,50,6),A.P.alive&&Nt(A.P.pos,n)<6&&Ti(A.P,46,i);for(let s of A.bots)s.alive&&Nt(s.pos,n)<6&&Ti(s,46,i)})}let t=i.hp/i.maxHp;if(i.phase===0&&t<.6||i.phase===1&&t<.3){i.phase++,xt("zone",null,'The Remnant of the Catharsis: "RISE. SERVE THE CATHARSIS."',"err"),Le.sfx("boom");for(let n=0;n<3;n++){let s=B(0,6.28),r=Sr("hollowed",5,i.pos.x+Math.cos(s)*6,i.pos.z+Math.sin(s)*6,!0);r.target=i.target,r.state="chase",Un(r.pos.clone().setY(1),16722762,30,3)}}}function Dv(i){for(let e of A.bots){if(!e.alive){e.deadT+=i,e.deadT>12&&(e.alive=!0,e.hp=e.maxHp,e.pos.copy(Ts("plaza")),e.group.rotation.x=0,e.state="idle",e.act="plaza",e.idleT=B(5,20),e.path=[]),e.group.position.copy(e.pos).setY(.3);continue}if(e.atk=Math.max(0,e.atk-i),e.danceT=Math.max(0,e.danceT-i),e.state==="idle")e.idleT-=i,(!e.wp||Cs(e,e.wp,2.5,i))&&Math.random()<.01&&(e.wp=Ts("plaza")),Math.random()<8e-4&&(e.danceT=4),e.hp=Math.min(e.maxHp,e.hp+20*i),e.idleT<=0&&(e.act=wt(["ashen","ashen","echo","echo","crater","crater"]),e.path=[...qf[e.act],Ts(e.act)],e.state="travel",e.actT=B(60,180),e.wp=null);else if(e.state==="travel"){if(!e.path.length){e.state=e.act==="plaza"?"idle":"hunt",e.idleT=B(15,50);continue}Cs(e,e.path[0],7,i,1)&&e.path.shift()}else if(e.state==="hunt"){if(e.actT-=i,e.actT<=0){e.act="plaza",e.path=[...qf[jn(e.pos.x,e.pos.z)==="crater"?"crater":e.pos.x>0?"ashen":"echo"]].reverse().concat([Ts("plaza")]),e.state="travel",e.target=null;continue}if(!e.target||!e.target.alive){e.target=null;let t=30;for(let n of A.enemies){if(!n.alive||n.isBoss&&Math.random()<.995)continue;let s=Nt(e.pos,n.pos);s<t&&jn(n.pos.x,n.pos.z)===jn(e.pos.x,e.pos.z)&&(t=s,e.target=n)}e.target||(!e.wp||Cs(e,e.wp,5,i))&&(e.wp=Ts(e.act))}else{let t=e.target,n=Si[e.cls],s=(n.range>5?14:2.2)+t.radius;if(Nt(e.pos,t.pos)>s)Cs(e,t.pos,6.5,i,s*.9);else if(e.move=Math.max(0,e.move-i*5),yo(e,t.pos),e.atkT-=i,e.atkT<=0){e.atkT=B(1.4,1.9),e.atk=.3;let r=6+e.level*.7;n.range>5?vo(e.pos.clone().setY(1.4),t,n.hex,.12,30,()=>Ti(t,r,e),e):(Ti(t,r,e),Nt(e.pos,A.P.pos)<30&&Math.random()<.5&&mo(t,n.hex,.9))}e.hp<e.maxHp*.3&&Math.random()<.01&&(e.hp=e.maxHp,Un(e.pos.clone().setY(1),5111706,12,2))}}yu(e.pos,.4),e.group.position.copy(e.pos),Mo(e.group,e.yaw+(e.danceT>0?A.time*6:0),i,e.danceT>0?50:10),oc(e.rig,e.move,A.time+e.name.length,e.atk,e.danceT)}}function Nv(i){for(let e of A.proj){e.life-=i;let t=e.target;if(!t||!t.alive||e.life<=0){e.dead=!0;continue}let n=t.pos.clone().setY((t.pos.y||0)+(t.type==="drone"?2.6:t.height*.55)),s=e.m.position.distanceTo(n);if(s<.6){e.dead=!0,e.onHit();continue}e.m.position.addScaledVector(n.sub(e.m.position).normalize(),Math.min(s,e.speed*i))}for(let e of A.proj)e.dead&&(fe.scene.remove(e.m),e.m.material.dispose());A.proj=A.proj.filter(e=>!e.dead)}function Uv(i){for(let e of A.fx){e.t+=i;let t=Math.min(1,e.t/e.life);e.update(e,t,i),e.t>=e.life&&(e.dead=!0,fe.scene.remove(e.obj),e.obj.material?.dispose?.(),(e.obj.isPoints||e.obj.isLine)&&e.obj.geometry.dispose())}A.fx=A.fx.filter(e=>!e.dead);for(let e of A.timers)e.t-=i,e.t<=0&&(e.done=!0,e.fn());A.timers=A.timers.filter(e=>!e.done)}function Ov(i){for(let e of A.shards){if(!e.active){e.respawnT-=i,e.respawnT<=0&&(e.active=!0,e.group.visible=!0);continue}e.crystal.rotation.y+=i*1.5,e.crystal.position.y=.9+Math.sin(A.time*2+e.pos.x)*.15}}function Fv(i){let e=A.time,t=A.P;fe.sky.material.uniforms.t.value=e,xu.value=e,fv(fe.grass,fe.cam),uv(),fe.blink.emissiveIntensity=Math.sin(e*3)>.6?4:.3;for(let o of fe.fires){let a=.8+Math.random()*.4;o.scale.set(a,.8+Math.random()*.5,a),o.userData.light&&(o.userData.light.intensity=30+Math.random()*20)}for(let o of fe.pylons)o.r.rotation.z+=i,o.r.position.y=12+Math.sin(e+o.ph)*1.5,o.top.material.emissiveIntensity=2+Math.sin(e*4+o.ph)*2;for(let o of fe.frags){let a=o.userData;a.a+=a.s*i,o.position.set(Math.cos(a.a)*a.r,a.y+Math.sin(e*.5+a.r)*1.2,Math.sin(a.a)*a.r),o.rotation.y+=i*.2}fe.halo.rotation.z+=i*.2,fe.ash.position.set(Math.floor(t.pos.x/10)*10,0,Math.floor(t.pos.z/10)*10);let n=fe.ash.geometry.attributes.position;for(let o=0;o<n.count;o++){let a=n.getY(o)+i*(.1+o%5*.04);a>30&&(a=0),n.setY(o,a),n.setX(o,n.getX(o)+Math.sin(e*.3+o)*.01+i*.08)}n.needsUpdate=!0,fe.sun.position.set(t.pos.x+tc.x*120,tc.y*120,t.pos.z+tc.z*120),fe.sun.target.position.copy(t.pos);let s=A.npcs[1];oc(s.rig,0,e),s.rig.head.rotation.y=Math.sin(e*.4)*.4;let r=A.npcs[0];Nt(t.pos,r.pos)<14?Mo(r.group,Math.atan2(t.pos.x-r.pos.x,t.pos.z-r.pos.z),i,2):Mo(r.group,0,i,1)}function Bv(i){let e=A.P,t=A.cam,n=e.pos.clone().setY(e.pos.y+1.7),s=new qe(Math.sin(t.yaw)*Math.cos(t.pitch),Math.sin(t.pitch),Math.cos(t.yaw)*Math.cos(t.pitch)).multiplyScalar(t.dist).add(n);s.y=Math.max(.6,s.y);let r=A.colliders.filter(o=>o.maxX>Math.min(n.x,s.x)-1&&o.minX<Math.max(n.x,s.x)+1&&o.maxZ>Math.min(n.z,s.z)-1&&o.minZ<Math.max(n.z,s.z)+1);if(r.length){let o=new qe().subVectors(s,n).divideScalar(24),a=n.clone();for(let c=0;c<24;c++){a.add(o);let l=!1;for(let h of r)if(a.x>h.minX-.3&&a.x<h.maxX+.3&&a.z>h.minZ-.3&&a.z<h.maxZ+.3&&a.y<h.h){l=!0;break}if(l){a.sub(o),s.copy(a),fe.cam.position.lerp(s,.5);break}}}fe.cam.position.lerp(s,Math.min(1,i*14)),fe.cam.lookAt(n)}function kv(i){Iv(i),Pv(i),Dv(i),Nv(i),Uv(i),Ov(i),Fv(i),Bv(i);let e=A.P.target;e&&e.alive?(fe.targetRing.visible=!0,fe.targetRing.position.set(e.pos.x,.1,e.pos.z),fe.targetRing.scale.setScalar(e.radius*1.3),fe.targetRing.rotation.z+=i):fe.targetRing.visible=!1,Hv(),Gv(),Wv(),Xv(i),qv(),A.chatT-=i,A.chatT<=0&&(A.chatT=B(6,14),$v()),A.autosave-=i,A.autosave<=0&&(A.autosave=20,Ds())}var cc=()=>Ja[Math.min(A.D.q.i,Ja.length-1)];function uu(i){let e=A.D,t=cc();e.q.st==="active"&&(t.type===i||t.type==="any"&&(i==="hollowed"||i==="drone"))&&(e.q.p=Math.min(t.count,e.q.p+1),xt("sys",null,`${t.obj}: ${e.q.p}/${t.count}`),e.q.p>=t.count&&(e.q.st="ready",Le.sfx("quest"),Rr("OBJECTIVE COMPLETE",t.title.toUpperCase(),"RETURN TO GOVERNOR MASCAR")),bo())}function ru(i){return i.replace(/\{name\}/g,A.D.name)}function vu(){let i=A.D,e=cc();Le.sfx("click"),i.q.st==="available"?Qa("GOVERNOR OF AD-NOSTRA","CROXIAN MASCAR",e.title.toUpperCase(),ru(e.offer),`REWARD \xB7 ${e.xp} XP \xB7 ${e.cr} CREDITS`,[{label:"NOT YET",fn:zt},{label:"ACCEPT",gold:!0,fn:()=>{i.q.st="active",i.q.p=0,Le.sfx("accept"),xt("sys",null,`Quest accepted: ${e.title}`),bo(),zt(),Ds()}}]):i.q.st==="active"?Qa("GOVERNOR OF AD-NOSTRA","CROXIAN MASCAR",e.title.toUpperCase(),ru(e.active)+`

Progress: ${i.q.p} / ${e.count}`,"",[{label:"ASK ABOUT THE CITY",fn:()=>Qa("GOVERNOR OF AD-NOSTRA","CROXIAN MASCAR","",wt(Uf),"",[{label:"FAREWELL",fn:zt}])},{label:"FAREWELL",fn:zt}]):Qa("GOVERNOR OF AD-NOSTRA","CROXIAN MASCAR",e.title.toUpperCase()+" \u2014 COMPLETE",ru(e.done),`REWARD \xB7 ${e.xp} XP \xB7 ${e.cr} CREDITS`,[{label:"COMPLETE QUEST",gold:!0,fn:()=>{Le.sfx("quest"),i.credits+=e.cr,cp(e.xp),i.completed++,xt("sys",null,`Quest complete: ${e.title}. Received ${e.cr} credits.`),i.q.i===3&&(i.title="Hero of Ad-Nostra",xt("gov",null,`By decree of Governor Croxian Mascar, ${i.name} is named Hero of Ad-Nostra.`),Rr("TITLE EARNED","HERO OF AD-NOSTRA","THE CITY WILL REMEMBER")),i.q.i=Math.min(i.q.i+1,Ja.length-1),i.q.st="available",i.q.p=0,bo(),Ds(),zt(),setTimeout(vu,450)}}])}function zv(){A.ui="vendor",K("vendor").classList.remove("hidden"),Le.sfx("click"),up()}function up(){let i=A.D,e=[{name:"Concord Medkit",desc:"Restores 50% health. Press 5 to use.",cost:25,buy:()=>{i.medkits++,bu()}},{name:`Weapon Tuning \xB7 Rank ${i.wpn+1}`,desc:"+10% damage with all attacks.",cost:120*(i.wpn+1),buy:()=>{i.wpn++}},{name:`Concord Plating \xB7 Rank ${i.arm+1}`,desc:"+18 maximum health.",cost:100*(i.arm+1),buy:()=>{i.arm++}}],t=K("vendor-items");t.innerHTML="";for(let n of e){let s=document.createElement("div");s.className="vitem",s.innerHTML=`<div><b>${Bt(n.name)}</b><p>${Bt(n.desc)}</p></div>`;let r=document.createElement("button");r.className="btn gold",r.textContent=`\u2B21 ${n.cost}`,r.disabled=i.credits<n.cost,r.onclick=()=>{i.credits<n.cost||(i.credits-=n.cost,n.buy(),Le.sfx("coin"),xt("loot",null,`Purchased: ${n.name}`),up(),Ds())},s.appendChild(r),t.appendChild(s)}K("vendor-wallet").textContent=`YOUR CREDITS: \u2B21 ${ts(i.credits)} \xB7 MEDKITS: ${i.medkits}`}function dp(){let i=A.P,e=null,t=5;for(let n of A.npcs){let s=Nt(i.pos,n.pos);s<t&&(t=s,e=n)}for(let n of A.shards){if(!n.active)continue;let s=Nt(i.pos,n.pos);s<3&&s<t&&(t=s,e=n)}return e}function Mu(i=dp()){if(!(!i||A.P.dead)){if(i.id==="mascar")vu();else if(i.id==="ilse")zv();else if(i.kind==="shard"){let e=A.D;e.q.i===2&&e.q.st==="active"?(i.active=!1,i.group.visible=!1,i.respawnT=25,Le.sfx("pickup"),xt("loot",null,"You recover: [Beacon Shard]"),Un(i.pos.clone().setY(1),16722762,20,2),uu("shard")):e.q.i<2?Wn("The shard hums with crimson light. The Governor should know of this."):Wn("You have no reason to take it now.")}}}function Hv(){let i=dp(),e=K("prompt");if(i&&!A.ui&&!A.P.dead){let t=i.kind==="shard"?"Recover Beacon Shard":i.id==="mascar"?"Speak with Governor Mascar":"Trade with Ilse Varn";e.innerHTML=`<b>${Us?"\u25B6":"[E]"}</b> ${t}`,e.classList.remove("hidden")}else e.classList.add("hidden")}var Cr=new Map;function qt(i,e){Cr.get(i)!==e&&(Cr.set(i,e),K(i).textContent=e)}function As(i,e){let t=(Ps(e,0,1)*100).toFixed(1)+"%";Cr.get(i+"w")!==t&&(Cr.set(i+"w",t),K(i).style.width=t)}function Vv(){let i=K("hotbar");i.innerHTML="",[...Ai().abil,{id:"med",name:"Concord Medkit",icon:"\u271A",cost:0,cd:15,desc:"Restore 50% of your health. Buy more from Ilse Varn."}].forEach((n,s)=>{let r=document.createElement("div");r.className="slot",r.innerHTML=`<span class="k">${s+1}</span>${n.icon}<span class="c"></span><div class="cd" style="height:0"></div><div class="cdt"></div>`,r.onclick=()=>wr(s),Us||(r.onmouseenter=o=>{let a=K("tooltip");a.innerHTML=`<b>${Bt(n.name)}</b>${Bt(n.desc)}<br><i>${n.cost?n.cost+" energy \xB7 ":""}${n.cd?n.cd+"s cooldown":"no cooldown"}${n.dmg?" \xB7 "+Math.round(n.dmg*ac())+" dmg":""}</i>`,a.classList.remove("hidden");let c=r.getBoundingClientRect();a.style.left=c.left-80+"px",a.style.top=c.top-a.offsetHeight-10+"px"}),r.onmouseleave=()=>K("tooltip").classList.add("hidden"),i.appendChild(r)}),bu()}function bu(){let i=K("hotbar").children[4];i&&(i.querySelector(".c").textContent=A.D.medkits)}function Gv(){let i=A.P,e=A.D,t=Ai();qt("p-name",e.name),qt("p-lvl","LV "+e.level),qt("p-title",`${e.title.toUpperCase()} \xB7 ${t.name}`);let n=Xn();As("p-hp",i.hp/n),qt("p-hpt",`${Math.ceil(i.hp)} / ${n}`),As("p-sh",i.shield/n),As("p-en",i.en/Ls()),qt("p-ent",`${Math.floor(i.en)} / ${Ls()}`);let s=[];i.shield>0&&s.push(`\u26E8 ${i.shield}`),i.critNext&&s.push("\u25D0 CRIT"),i.combatT>0&&s.push("\u2694 COMBAT"),_o[A.zone]?.safe&&s.push("\u2726 SANCTUARY");let r=s.map(l=>`<span class="buff">${l}</span>`).join("");Cr.get("buffs")!==r&&(Cr.set("buffs",r),K("p-buffs").innerHTML=r);let o=lu(e.level);As("xp-fill",e.xp/o),qt("xp-text",e.level>=30?"MAX LEVEL":`LEVEL ${e.level} \xB7 ${ts(e.xp)} / ${ts(o)} XP`),qt("wallet",`\u2B21 ${ts(e.credits)} CR`);let a=K("hotbar").children,c=t.abil;for(let l=0;l<5;l++){let h=a[l];if(!h)continue;let u,d,f=0;if(l<4){let p=c[l],M=i.cds[p.id]||0;M>=i.gcd?(u=M,d=p.cd||1):(u=i.gcd,d=t.gcd),f=p.cost}else u=i.medT,d=15;let g=u>0?(u/d*100).toFixed(0)+"%":"0";h._h!==g&&(h._h=g,h.children[2].style.height=g);let x=u>1?Math.ceil(u):"";h._t!==x&&(h._t=x,h.children[3].textContent=x);let m=i.en<f||l===4&&e.medkits<=0;h._n!==m&&(h._n=m,h.classList.toggle("noen",m))}fp(),A.boss&&!K("bossbar").classList.contains("hidden")&&As("boss-hp",A.boss.hp/A.boss.maxHp)}function fp(i){let e=A.P?.target,t=K("tframe");if(!e){t.classList.add("hidden");return}t.classList.remove("hidden"),e.kind==="enemy"?(qt("t-name",e.name),qt("t-lvl","LV "+e.level),qt("t-sub",e.isBoss?"ELITE \xB7 REMNANT":e.type==="drone"?"MECHANICAL \xB7 REMNANT":"HOLLOWED \xB7 REMNANT"),K("t-bar").style.display="",As("t-hp",e.hp/e.maxHp),qt("t-hpt",`${Math.max(0,Math.ceil(e.hp))} / ${e.maxHp}`)):e.kind==="bot"?(qt("t-name",e.name),qt("t-lvl","LV "+e.level),qt("t-sub",`${Si[e.cls].name}${e.guild?" \xB7 "+e.guild.toUpperCase():""}`),K("t-bar").style.display="",As("t-hp",e.hp/e.maxHp),qt("t-hpt","ASCENDANT")):(qt("t-name",e.name),qt("t-lvl",""),qt("t-sub",e.title.toUpperCase()),K("t-bar").style.display="none")}function bo(){let i=A.D,e=cc(),t=K("tracker");i.q.st==="available"?t.innerHTML=`<h4>${e.repeat?"REPEATABLE":"NEW QUEST"}</h4><div class="qt">${Bt(e.title)}</div><div class="qo">Speak with Governor Mascar in Concordia Plaza.</div>`:i.q.st==="active"?t.innerHTML=`<h4>QUEST</h4><div class="qt">${Bt(e.title)}</div><div class="qo">\u2022 ${Bt(e.obj)}: ${i.q.p} / ${e.count}</div><div class="qo" style="color:var(--dim)">${Bt(e.zone)}</div>`:t.innerHTML=`<h4>QUEST</h4><div class="qt">${Bt(e.title)}</div><div class="qo done">\u2713 ${Bt(e.obj)}: ${e.count} / ${e.count}</div><div class="qo">Return to Governor Mascar.</div>`}var ja=new qe;function pp(i,e){return ja.set(i.x,(i.y||0)+e,i.z).project(fe.cam),ja.z>1?null:[(ja.x*.5+.5)*innerWidth,(-ja.y*.5+.5)*innerHeight]}function Wv(){let i=A.P,e=st.plates,t=[...A.npcs,...A.enemies,...A.bots],n=A.D.q.st==="available"?"!":A.D.q.st==="ready"?"?":"",s=A.npcs[0].plate.firstChild;s.textContent!==n&&(s.textContent=n);for(let r of t){let o=r.plate,a=fe.cam.position.distanceTo(r.pos),c=e&&(r.alive||r.kind==="bot")&&a<(r.kind==="npc"?70:r.isBoss?90:50),l=null;if(c&&(l=pp(r.pos,r.height+.35),c=!!l),!c){o._v!==!1&&(o.style.display="none",o._v=!1);continue}o._v!==!0&&(o.style.display="",o._v=!0);let h=Ps(1.25-a/80,.6,1.1);if(o.style.transform=`translate(${l[0].toFixed(1)}px,${l[1].toFixed(1)}px) translate(-50%,-100%) scale(${h.toFixed(2)})`,r.kind==="enemy"){let u=(r.hp/r.maxHp*100).toFixed(0)+"%";r._pw!==u&&(r._pw=u,r.plateBar.style.width=u);let d=i.target===r;r._pt!==d&&(r._pt=d,o.classList.toggle("tgt",d))}}}function Xv(i){for(let e of A.floaters){e.t+=i;let t=e.t/e.life,n=pp(e.p,t*1.4);!n||t>=1?e.el.style.opacity=0:(e.el.style.transform=`translate(${n[0]}px,${n[1]}px) translate(-50%,-50%) scale(${t<.1?1+(.1-t)*5:1})`,e.el.style.opacity=t>.6?(1-t)/.4:1),t>=1&&(e.el.remove(),e.dead=!0)}A.floaters=A.floaters.filter(e=>!e.dead)}var he=K("minimap").getContext("2d");function qv(){let i=A.P,e=184,t=e/2,n=.85,s=a=>t+(a-i.pos.x)*n,r=a=>t+(a-i.pos.z)*n;he.save(),he.clearRect(0,0,e,e),he.beginPath(),he.arc(t,t,t,0,Math.PI*2),he.clip(),he.fillStyle="#4a3a24",he.fillRect(0,0,e,e),he.fillStyle="rgba(30,20,12,0.45)",he.fillRect(s(34),r(-62),122*n,124*n),he.fillStyle="rgba(220,205,160,0.22)",he.fillRect(s(-156),r(-62),122*n,124*n),he.fillStyle="rgba(140,40,30,0.45)",he.beginPath(),he.arc(s(bt.x),r(bt.z),72*n,0,7),he.fill(),he.fillStyle="rgba(62,230,255,0.12)",he.beginPath(),he.arc(s(0),r(0),34*n,0,7),he.fill(),he.fillStyle="rgba(140,90,58,0.6)",he.fillRect(s(-150),r(-7),300*n,14*n),he.fillRect(s(-7),r(-110),14*n,110*n),he.fillStyle="rgba(220,190,150,0.3)";for(let a of A.colliders){if(Math.abs(a.minX-i.pos.x)>140||Math.abs(a.minZ-i.pos.z)>140)continue;let c=(a.maxX-a.minX)*n;c<2||he.fillRect(s(a.minX),r(a.minZ),c,(a.maxZ-a.minZ)*n)}if(he.strokeStyle="rgba(232,196,106,0.6)",he.lineWidth=2,he.beginPath(),he.arc(s(0),r(0),246*n,0,7),he.stroke(),A.D.q.i===2&&A.D.q.st==="active"){he.fillStyle="#ff6b7f";for(let a of A.shards)a.active&&(he.save(),he.translate(s(a.pos.x),r(a.pos.z)),he.rotate(Math.PI/4),he.fillRect(-2.5,-2.5,5,5),he.restore())}for(let a of A.enemies){if(!a.alive)continue;he.fillStyle=a.isBoss?"#ff2b4a":"#ff5a6e";let c=a.isBoss?5:2.2;he.beginPath(),he.arc(s(a.pos.x),r(a.pos.z),c,0,7),he.fill()}he.fillStyle="#7fe3ff";for(let a of A.bots)a.alive&&(he.beginPath(),he.arc(s(a.pos.x),r(a.pos.z),2.2,0,7),he.fill());he.fillStyle="#e8c46a";for(let a of A.npcs)he.beginPath(),he.arc(s(a.pos.x),r(a.pos.z),3.5,0,7),he.fill();let o=Yv();if(o){let a=s(o.x),c=r(o.z),l=a-t,h=c-t,u=Math.hypot(l,h);u>t-10&&(a=t+l/u*(t-10),c=t+h/u*(t-10)),he.fillStyle="#e8c46a",he.save(),he.translate(a,c),he.rotate(Math.PI/4),he.fillRect(-4,-4,8,8),he.restore()}he.save(),he.translate(t,t),he.rotate(-i.group.rotation.y+Math.PI),he.fillStyle="#fff",he.beginPath(),he.moveTo(0,-7),he.lineTo(5,5),he.lineTo(0,2),he.lineTo(-5,5),he.closePath(),he.fill(),he.restore(),he.save(),he.translate(t,t),he.rotate(-A.cam.yaw),he.fillStyle="rgba(255,255,255,0.05)",he.beginPath(),he.moveTo(0,0),he.arc(0,0,70,-Math.PI/2-.55,-Math.PI/2+.55),he.fill(),he.restore(),he.restore(),he.fillStyle="rgba(255,255,255,0.6)",he.font="10px Bahnschrift, sans-serif",he.textAlign="center",he.fillText("N",t,11)}function Yv(){let i=A.D,e=cc();return i.q.st!=="active"?A.npcs[0].pos:{hollowed:new qe(95,0,0),drone:new qe(-95,0,0),shard:bt,boss:bt,any:A.P.pos.x>=0?new qe(95,0,0):new qe(-95,0,0)}[e.type]}var $f={world:"[World]",zone:"[Zone]",sys:"",gov:"[Governor's Office]",say:"[Say]",loot:"",err:"",whisper:"[Whisper]"};function xt(i,e,t,n){let s=K("chat-log"),r=document.createElement("div");for(r.className="ch-"+(n||i),r.innerHTML=`${$f[i]?$f[i]+" ":""}${e?`<span class="ch-name">[${Bt(e)}]</span>: `:""}${Bt(t)}`,s.appendChild(r);s.children.length>80;)s.firstChild.remove();s.scrollTop=s.scrollHeight}function Ir(i,e,t="world"){i&&xt(t,i.name,e.replace(/\{name\}/g,A.D.name))}function $v(){let i=Math.random();if(i<.55)Ir(wt(A.bots),wt(Bf));else if(i<.75){let e=A.bots.filter(t=>jn(t.pos.x,t.pos.z)===A.zone);e.length&&Ir(wt(e),wt(kf),"zone")}else i<.82&&xt("gov",null,wt(zf))}function Zv(i){if(i=i.trim(),!i)return;let e=A.D,t=A.P;if(i[0]==="/"){let[r]=i.slice(1).toLowerCase().split(" ");switch(r){case"help":xt("sys",null,"Commands: /who /played /loc /dance /wave /salute /help");break;case"who":{let o=A.bots.slice(0,6).map(a=>`${a.name} (${a.level} ${Si[a.cls].name.toLowerCase()}, ${_o[jn(a.pos.x,a.pos.z)].name.toLowerCase()})`);xt("sys",null,`Online: ${o.join(", ")} \u2026and ${ts(nc-6)} others.`);break}case"played":{let o=e.played|0;xt("sys",null,`Time played: ${Math.floor(o/3600)}h ${Math.floor(o/60)%60}m ${o%60}s`);break}case"loc":xt("sys",null,`${_o[A.zone].name}: ${t.pos.x.toFixed(0)}, ${(-t.pos.z).toFixed(0)}`);break;case"dance":t.danceT=5,xt("say",null,`${e.name} bursts into dance.`,"sys");break;case"wave":t.atk=.3,xt("say",null,`${e.name} waves.`,"sys"),setTimeout(()=>{let o=A.bots.find(a=>Nt(a.pos,t.pos)<20);o&&xt("say",o.name,"o/")},900);break;case"salute":{t.atk=.3;let o=Nt(t.pos,A.npcs[0].pos)<15;xt("say",null,o?`${e.name} salutes Governor Mascar.`:`${e.name} salutes.`,"sys"),o&&setTimeout(()=>xt("say","Croxian Mascar",wt(["At ease, Ascendant.","The city sees you.","Stand tall. You have earned it."])),900);break}default:xt("err",null,"Unknown command. Type /help.")}return}xt("world",e.name,i),Le.sfx("chat");let n=i.toLowerCase(),s=(r,o=B(1,3))=>setTimeout(()=>Ir(wt(A.bots),wt(r)),o*1e3);/\b(hi|hello|hey|yo|sup|o7|o\/|greetings)\b/.test(n)?(s(iu),Math.random()<.5&&s(iu,B(2,4))):/mascar|governor|croxian/.test(n)?s(Hf):/catharsis|remnant|monolith/.test(n)?s(["don't say that name too loud","the crater still gives me nightmares","the remnant hits like a tram, bring medkits"]):/lfg|group|party|help/.test(n)?s(["inv me","omw","where at?","sure, what zone"]):n.includes("?")?s(["no idea tbh","ask the governor","check the codex","pretty sure it's north"]):Math.random()<.3&&s(["lol","true","based","real","fr"])}function Qa(i,e,t,n,s,r){A.ui="dialog",K("vendor").classList.add("hidden"),K("dlg-who").textContent=i,K("dlg-name").textContent=e,K("dlg-q").textContent=t,K("dlg-text").textContent=n,K("dlg-rew").textContent=s;let o=K("dlg-opts");o.innerHTML="";for(let a of r){let c=document.createElement("button");c.className="btn"+(a.gold?" gold":" ghost"),c.textContent=a.label,c.onclick=a.fn,o.appendChild(c)}K("dialog").classList.remove("hidden")}function zt(){for(let i of["dialog","vendor","sheet","pause"])K(i).classList.add("hidden");A.ui=null,K("tooltip").classList.add("hidden")}function Su(){let i=A.D,e=A.P,t=Ai();zt(),A.ui="sheet",K("sh-name").textContent=i.name.toUpperCase();let n=[["Title",i.title],["Class",t.name],["Level",i.level],["Health",`${Math.ceil(e.hp)} / ${Xn()}`],["Energy",Ls()],["Damage bonus",`+${Math.round((ac()-1)*100)}%`],["Critical chance",`${Math.round(t.crit*100)}%`],["Weapon tuning",`Rank ${i.wpn}`],["Concord plating",`Rank ${i.arm}`],["Remnants destroyed",ts(i.kills)],["Deaths",i.deaths],["Quests completed",i.completed],["Credits",ts(i.credits)],["Realm",K("realm").value.split(" \xB7 ")[0]]];K("sheet-rows").innerHTML=n.map(([s,r])=>`<div class="srow"><span>${s.toUpperCase()}</span><b>${Bt(r)}</b></div>`).join(""),K("sheet").classList.remove("hidden")}function mp(){if(A.ui==="pause"){zt();return}zt(),A.ui="pause",K("pause").classList.remove("hidden")}var It={down:-1,sx:0,sy:0,lx:0,ly:0,dragged:!1,both:!1,btns:0};Pr.addEventListener("contextmenu",i=>i.preventDefault());Pr.addEventListener("mousedown",i=>{Le.init(),It.down=i.button,It.btns=i.buttons,It.sx=It.lx=i.clientX,It.sy=It.ly=i.clientY,It.dragged=!1,It.both=(i.buttons&3)===3,A.mode==="menu"&&(Fe.drag=!0),document.activeElement===K("chat-input")&&K("chat-input").blur()});window.addEventListener("mousemove",i=>{let e=i.clientX-It.lx,t=i.clientY-It.ly;if(It.lx=i.clientX,It.ly=i.clientY,A.mode==="menu"){Fe.mx=i.clientX/innerWidth*2-1,Fe.my=i.clientY/innerHeight*2-1,Fe.drag&&It.down>=0&&(Fe.yaw+=e*.01,Fe.yawVel=e*.002);return}It.down<0||A.mode!=="world"||(Math.abs(i.clientX-It.sx)+Math.abs(i.clientY-It.sy)>4&&(It.dragged=!0),It.dragged&&(A.cam.yaw-=e*.006*st.sens,A.cam.pitch=Ps(A.cam.pitch+t*.004*st.sens,-.1,1.35),It.down===2&&A.P&&!A.P.dead&&(A.P.yaw=A.cam.yaw+Math.PI)))});window.addEventListener("mouseup",i=>{if(A.mode==="menu"){Fe.drag=!1,It.down=-1;return}A.mode==="world"&&i.target===Pr&&!It.dragged&&It.down===0&&gp(i.clientX,i.clientY),It.down=-1,It.both=!1});Pr.addEventListener("wheel",i=>{A.mode==="world"&&(A.cam.dist=Ps(A.cam.dist+Math.sign(i.deltaY)*1.2,3.5,24))},{passive:!0});var Zf=new Oa;function gp(i,e){Zf.setFromCamera(new Ne(i/innerWidth*2-1,-(e/innerHeight)*2+1),fe.cam);let t=[...A.enemies.filter(s=>s.alive),...A.bots,...A.npcs].map(s=>s.hitbox),n=Zf.intersectObjects(t,!1)[0];if(n){let s=n.object.userData.ent;ss(s),s.kind==="enemy"&&(A.P.autoOn=!0),s.kind==="npc"&&Nt(A.P.pos,s.pos)<6&&Mu(s),Le.sfx("click")}else ss(null)}window.addEventListener("keydown",i=>{if(A.mode==="splash"){A.ready&&yp();return}let e=K("chat-input"),t=document.activeElement===e;if(!(document.activeElement&&document.activeElement.tagName==="INPUT"&&!t)){if(A.mode!=="world"){i.code==="Escape"&&Kf();return}if(t){i.code==="Enter"||i.key==="Enter"?(Zv(e.value),e.value="",e.blur()):i.code==="Escape"&&(e.value="",e.blur());return}if(yn[i.code]=!0,!K("codex").classList.contains("hidden")||!K("settings").classList.contains("hidden")){i.code==="Escape"&&Kf();return}switch(i.code){case"Enter":i.preventDefault(),e.focus();break;case"Slash":i.preventDefault(),e.focus(),e.value="/";break;case"Escape":A.ui?zt():A.P.target?ss(null):mp();break;case"Tab":i.preventDefault(),lp();break;case"Digit1":wr(0);break;case"Digit2":wr(1);break;case"Digit3":wr(2);break;case"Digit4":wr(3);break;case"Digit5":wr(4);break;case"KeyE":case"KeyF":if(A.ui==="dialog")break;Mu();break;case"KeyC":A.ui==="sheet"?zt():Su();break;case"Space":i.preventDefault(),A.P.pos.y===0&&!A.P.dead&&(A.P.vy=8);break}}});window.addEventListener("keyup",i=>{yn[i.code]=!1});window.addEventListener("blur",()=>{for(let i in yn)yn[i]=!1});var Mt={id:null,x:0,y:0,mag:0,cx:0,cy:0,r:52},wi=new Map,go=0;function xp(i){let e=i.clientX-Mt.cx,t=i.clientY-Mt.cy,n=Math.hypot(e,t);n>Mt.r&&(e*=Mt.r/n,t*=Mt.r/n),Mt.x=e/Mt.r,Mt.y=t/Mt.r,Mt.mag=Math.min(1,n/Mt.r),Mt.mag<.15&&(Mt.x=Mt.y=0),K("joy-knob").style.transform=`translate(${e}px, ${t}px)`}function Kv(){Mt.id=null,Mt.x=Mt.y=Mt.mag=0,K("joy-knob").style.transform="",K("joy").classList.remove("on")}K("joy").addEventListener("touchstart",i=>{if(i.preventDefault(),Le.init(),Mt.id!==null||A.ui)return;let e=i.changedTouches[0],t=K("joy").getBoundingClientRect();Mt.id=e.identifier,Mt.cx=t.left+t.width/2,Mt.cy=t.top+t.height/2,Mt.r=t.width*.4,K("joy").classList.add("on"),xp(e)},{passive:!1});window.addEventListener("touchmove",i=>{for(let e of i.changedTouches){if(e.identifier===Mt.id){xp(e);continue}let t=wi.get(e.identifier);if(!t)continue;let n=e.clientX-t.x,s=e.clientY-t.y;if(t.x=e.clientX,t.y=e.clientY,Math.abs(t.x-t.sx)+Math.abs(t.y-t.sy)>10&&(t.moved=!0),A.mode==="menu"){Fe.yaw+=n*.01,Fe.yawVel=n*.002;continue}A.mode!=="world"||wi.size>1||(A.cam.yaw-=n*.008*st.sens,A.cam.pitch=Ps(A.cam.pitch+s*.005*st.sens,-.1,1.35))}if(wi.size===2&&A.mode==="world"){let[e,t]=[...wi.values()],n=Math.hypot(e.x-t.x,e.y-t.y);go&&(A.cam.dist=Ps(A.cam.dist-(n-go)*.04,3.5,24)),go=n}},{passive:!0});Pr.addEventListener("touchstart",i=>{i.preventDefault(),Le.init(),document.activeElement===K("chat-input")&&K("chat-input").blur();for(let e of i.changedTouches)wi.set(e.identifier,{x:e.clientX,y:e.clientY,sx:e.clientX,sy:e.clientY,t:performance.now(),moved:!1});A.mode==="menu"&&(Fe.drag=!0),go=0},{passive:!1});function _p(i){for(let e of i.changedTouches){if(e.identifier===Mt.id){Kv();continue}let t=wi.get(e.identifier);t&&(wi.delete(e.identifier),A.mode==="world"&&!t.moved&&wi.size===0&&performance.now()-t.t<350&&!A.ui&&gp(e.clientX,e.clientY))}wi.size===0&&(Fe.drag=!1,go=0)}window.addEventListener("touchend",_p);window.addEventListener("touchcancel",_p);var Ao=(i,e)=>K(i).addEventListener("pointerdown",t=>{t.preventDefault(),t.stopPropagation(),Le.init(),e()});Ao("tb-jump",()=>{A.P&&A.P.pos.y===0&&!A.P.dead&&(A.P.vy=8)});Ao("tb-target",()=>lp());Ao("tb-menu",()=>{A.ui&&A.ui!=="pause"?zt():mp()});Ao("tb-sheet",()=>{A.ui==="sheet"?zt():Su()});Ao("tb-chat",()=>{let i=K("chat-input");i.classList.add("open"),i.focus()});K("chat-input").addEventListener("blur",()=>K("chat-input").classList.remove("open"));K("prompt").addEventListener("click",()=>{A.ui!=="dialog"&&Mu()});var nc=4812;function rs(i){K(i).classList.remove("hidden")}function ln(i){K(i).classList.add("hidden")}function Kf(){ln("codex"),ln("settings")}function yp(){if(Us){let i=document.documentElement;try{let e=i.requestFullscreen&&i.requestFullscreen({navigationUI:"hide"});e&&e.then(()=>screen.orientation?.lock?.("landscape")).catch(()=>{})}catch{}}Le.init(),Le.sfx("start"),setTimeout(()=>Le.playMusic("menu"),300),K("splash").style.opacity=0,setTimeout(()=>ln("splash"),1e3),A.mode="menu",wu()}function wu(){A.mode="menu",pu(Fe.scene,Fe.cam),ln("hud"),ln("create"),ln("loading"),rs("menu");let i=Ns.get(wo),e=K("btn-continue");i?(e.disabled=!1,K("continue-sub").textContent=`${i.name.toUpperCase()} \xB7 LV ${i.level} ${Si[i.cls].name}`):(e.disabled=!0,K("continue-sub").textContent="NO ASCENDANT REGISTERED"),Le.playMusic("menu")}document.querySelectorAll(".mbtn, .btn").forEach(i=>{i.addEventListener("mouseenter",()=>Le.sfx("hover")),i.addEventListener("click",()=>Le.sfx("click"))});K("btn-continue").onclick=()=>{let i=Ns.get(wo);i&&(A.D=i,Mp())};K("btn-new").onclick=()=>du();K("btn-codex").onclick=()=>Eu();K("btn-settings").onclick=()=>vp();K("btn-quit").onclick=()=>{try{window.close()}catch{}setTimeout(()=>rs("farewell"),150)};document.querySelectorAll("[data-close]").forEach(i=>i.onclick=()=>ln(i.dataset.close));K("codex").addEventListener("mousedown",i=>{i.target.id==="codex"&&ln("codex")});K("settings").addEventListener("mousedown",i=>{i.target.id==="settings"&&ln("settings")});function Eu(i=0){let e=K("codex-list");e.innerHTML="",nu.forEach((n,s)=>{let r=document.createElement("li");r.textContent=n.title.toUpperCase(),s===i&&(r.className="on"),r.onclick=()=>{Le.sfx("click"),Eu(s)},e.appendChild(r)});let t=nu[i];K("codex-body").innerHTML=`<h3>${Bt(t.title.toUpperCase())}</h3><div class="tag">${Bt(t.tag)}</div>${t.body.map(n=>`<p>${Bt(n)}</p>`).join("")}`,rs("codex")}function vp(){K("set-volume").value=st.volume,K("set-music").checked=st.music,K("set-bloom").checked=st.bloom,K("set-shadows").checked=st.shadows,K("set-sens").value=st.sens,K("set-plates").checked=st.plates,K("set-dynres").checked=st.dynres,K("set-fps").checked=st.fps,rs("settings")}function os(){Ns.set("adnostra_settings",st)}K("set-volume").oninput=i=>{st.volume=+i.target.value,Le.setVolume(st.volume),os()};K("set-music").onchange=i=>{st.music=i.target.checked,Le.setMusic(st.music),os()};K("set-bloom").onchange=i=>{st.bloom=i.target.checked,Is.enabled=st.bloom,os()};K("set-shadows").onchange=i=>{st.shadows=i.target.checked,Pt.shadowMap.enabled=st.shadows;for(let e of[Fe.scene,fe.scene])e.traverse(t=>{t.material&&[].concat(t.material).forEach(n=>n.needsUpdate=!0)});os()};K("set-sens").oninput=i=>{st.sens=+i.target.value,os()};K("set-plates").onchange=i=>{st.plates=i.target.checked,os()};K("set-dynres").onchange=i=>{st.dynres=i.target.checked,it.level=0,it.fails=0,fu(),os()};K("set-fps").onchange=i=>{st.fps=i.target.checked,K("fps").classList.toggle("hidden",!st.fps),os()};K("fps").classList.toggle("hidden",!st.fps);var Tr={cls:"vanguard",visor:Ka[0]};function du(){ln("menu"),rs("create");let i=K("classes");i.innerHTML="";for(let[n,s]of Object.entries(Si)){let r=document.createElement("div");r.className="ccard cut"+(n===Tr.cls?" on":""),r.style.setProperty("--c",s.color),r.innerHTML=`<div class="cico">${s.icon}</div><h3>${s.name}</h3><div class="role">${s.role}</div><p>${Bt(s.desc)}</p>
      <div class="stats"><span>HEALTH <b>${s.hp}</b></span><span>RANGE <b>${s.range>5?"LONG":"MELEE"}</b></span><span>CRIT <b>${Math.round(s.crit*100)}%</b></span></div>
      <ul>${s.abil.map(o=>`<li><span>${o.icon}</span>${Bt(o.name)}</li>`).join("")}</ul>`,r.onclick=()=>{Tr.cls=n,Le.sfx("click"),du()},i.appendChild(r)}let e=K("swatches");e.innerHTML="";for(let n of Ka){let s=document.createElement("div");s.className="sw"+(n===Tr.visor?" on":""),s.style.setProperty("--c",n),s.onclick=()=>{Tr.visor=n,Le.sfx("click"),du()},e.appendChild(s)}let t=K("cname");t.value||(t.value=wt(["Ardent","Talon","Vesper","Rook","Cassia","Orin","Lyra","Dain","Sorrel","Kestrel"])),K("overwrite").classList.toggle("hidden",!Ns.get(wo))}K("create-back").onclick=()=>{ln("create"),wu()};K("create-go").onclick=()=>{let i=K("cname").value.trim();if(!/^[A-Za-z0-9_\- ]{2,16}$/.test(i)){K("cname").style.borderColor="var(--crimson)",setTimeout(()=>K("cname").style.borderColor="",1200);return}A.D=Mv(i,Tr.cls,Tr.visor),Ns.set(wo,A.D),Le.sfx("start"),Mp(!0)};function Mp(i=!1){ln("menu"),ln("create"),rs("loading"),K("load-tip").textContent=wt(Nf);let e=K("load-bar");e.style.transition="none",e.style.width="0",requestAnimationFrame(()=>{e.style.transition="width 1.6s ease",e.style.width="70%"}),setTimeout(()=>{try{A.world||gv()}catch(t){console.error(t),Jf("World failed to build: "+t.message)}bv();for(let t of A.enemies)(t.target===A.P||t.target&&t.target.kind==="player")&&(t.target=null,t.state="return");A.zone="",A.ui=null,zt(),ln("death"),K("chat-log").innerHTML="",e.style.width="100%",setTimeout(()=>{ln("loading"),rs("hud"),A.mode="world",pu(fe.scene,fe.cam),bo(),ss(null),fe.cam.position.copy(A.P.pos).add(new qe(0,6,14)),Le.playMusic("world"),xt("sys",null,`Welcome to Ad-Nostra, ${A.D.name}. Realm: ${K("realm").value.split(" \xB7 ")[0]}.`),xt("gov",null,"Anno Domini 2137. Ten years since Carax. The Catharsis is fallen \u2014 but its Remnants endure."),(i||A.D.q.i===0&&A.D.q.st==="available")&&xt("sys",null,`Governor Croxian Mascar awaits you on his dais. Walk up and ${Us?"tap the prompt":"press E"}.`),setTimeout(()=>Ir(wt(A.bots),`welcome ${A.D.name} o7`),3500)},500)},900)}function Jv(){Ds(),zt();for(let i of A.floaters)i.el.remove();A.floaters=[],wu()}function Ds(){!A.D||!A.P||(A.D.pos=[A.P.pos.x,A.P.pos.z],Ns.set(wo,A.D))}window.addEventListener("beforeunload",()=>{A.mode==="world"&&Ds()});K("respawn").onclick=wv;K("vendor-x").onclick=zt;K("sheet-x").onclick=zt;K("pz-resume").onclick=zt;K("pz-sheet").onclick=Su;K("pz-codex").onclick=()=>{zt(),Eu()};K("pz-settings").onclick=()=>{zt(),vp()};K("pz-exit").onclick=Jv;setInterval(()=>{nc=Ps(nc+So(-14,16),4200,5600),K("online").textContent=ts(nc)},3e3);window.addEventListener("resize",()=>{for(let i of[Fe.cam,fe.cam])i.aspect=innerWidth/innerHeight,i.updateProjectionMatrix();Pt.setSize(innerWidth,innerHeight),Qn.setPixelRatio(Pt.getPixelRatio()),Qn.setSize(innerWidth,innerHeight),Is.resolution.set(innerWidth/2,innerHeight/2)});var xo=[1,.85,.72,.6],it={level:0,acc:0,n:0,cool:0,grace:3,fails:0,frames:0,fpsT:0,fps:0},jv=()=>Math.min(devicePixelRatio,ns.pixelRatio);function fu(){let i=jv()*(st.dynres?xo[it.level]:1);Math.abs(Pt.getPixelRatio()-i)<.01||(Pt.setPixelRatio(i),Qn.setPixelRatio(i),Qn.setSize(innerWidth,innerHeight))}function Qv(i){if(it.frames++,it.fpsT+=i,it.fpsT>=.5&&(it.fps=it.frames/it.fpsT,it.frames=0,it.fpsT=0,st.fps&&(K("fps").textContent=`${Math.round(it.fps)} FPS \xB7 ${Math.round(xo[st.dynres?it.level:0]*100)}% RES \xB7 ${Pt.info.render.calls} DRAWS`)),!st.dynres||document.hidden||i>2)return;if(it.grace>0){it.grace-=i;return}let e=Math.min(i,.1);if(it.cool=Math.max(0,it.cool-i),it.acc+=e,it.n++,it.acc<1.5&&it.n<90)return;let t=it.acc/it.n*1e3;it.acc=0,it.n=0,t>21&&it.level<xo.length-1?(it.level=Math.min(xo.length-1,it.level+(t>40?2:1)),it.fails++,it.cool=Math.min(60,6*2**it.fails),fu()):t<17.8&&it.level>0&&it.cool<=0&&(it.level--,it.cool=4,fu())}function bp(){requestAnimationFrame(bp);let i=tv.getDelta(),e=Math.min(i,.05);A.time+=e,Qv(i),Le.tick(e);try{A.mode==="world"?kv(e):mv(e)}catch(t){console.error(t)}Pt.info.reset(),Qn.render()}(async function(){let e=K("splash-bar"),t=K("splash-status"),n=s=>e.style.width=s*100+"%";n(.1);try{await nv(n),t.textContent="UPLINK ESTABLISHED"}catch(s){console.error(s),t.textContent="GOVERNOR MODEL UNAVAILABLE \u2014 USING FALLBACK",Jf(s.message)}pv(),pu(Fe.scene,Fe.cam),bp(),setTimeout(()=>{ln("splash-load"),rs("splash-press"),A.ready=!0},400),K("splash").addEventListener("pointerdown",()=>{A.ready&&A.mode==="splash"&&yp()}),Us&&(K("splash-press").textContent="TAP TO BEGIN"),window.__AD=A,window.__ADdbg={W:fe,damage:Ti,killEnemy:ap,talkMascar:vu,updateTracker:bo,stats:()=>({batch:fe.batch,res:xo[it.level],calls:Pt.info.render.calls,tris:Pt.info.render.triangles,geos:Pt.info.memory.geometries,tex:Pt.info.memory.textures,pr:Pt.getPixelRatio()})}})();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
