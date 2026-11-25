(()=>{var gh="170";var Kp=0,Yu=1,Jp=2;var gf=1,xh=2,di=3,ti=0,tn=1,$t=2,ei=0,ar=1,dn=2,$u=3,Zu=4,jp=5,Ss=100,Qp=101,em=102,tm=103,nm=104,im=200,sm=201,rm=202,om=203,nl=204,il=205,am=206,cm=207,lm=208,hm=209,um=210,dm=211,fm=212,pm=213,mm=214,sl=0,rl=1,ol=2,ur=3,al=4,cl=5,ll=6,hl=7,_h=0,gm=1,xm=2,Vi=0,yh=1,vh=2,Mh=3,go=4,_m=5,bh=6,Eh=7,Ku="attached",ym="detached",xf=300,dr=301,fr=302,ul=303,dl=304,Xa=306,gi=1e3,vn=1001,no=1002,un=1003,Sh=1004;var rr=1005;var Mn=1006,jr=1007;var Qn=1008;var xi=1009,_f=1010,yf=1011,io=1012,Th=1013,Gi=1014,In=1015,Ln=1016,wh=1017,Ah=1018,pr=1020,vf=35902,Mf=1021,bf=1022,bn=1023,Ef=1024,Sf=1025,cr=1026,mr=1027,Rh=1028,qa=1029,Tf=1030,Ch=1031;var Ih=1033,pa=33776,ma=33777,ga=33778,xa=33779,fl=35840,pl=35841,ml=35842,gl=35843,xl=36196,_l=37492,yl=37496,vl=37808,Ml=37809,bl=37810,El=37811,Sl=37812,Tl=37813,wl=37814,Al=37815,Rl=37816,Cl=37817,Il=37818,Pl=37819,Ll=37820,Dl=37821,_a=36492,Nl=36494,Ul=36495,wf=36283,Ol=36284,Fl=36285,Bl=36286;var gr=2300,xr=2301,Mc=2302,Ju=2400,ju=2401,Qu=2402,vm=2500;var Af=0,Ya=1,xo=2,Mm=3200,bm=3201;var Ph=0,Em=1,zi="",kt="srgb",fn="srgb-linear",$a="linear",yt="srgb";var Ws=7680;var ed=519,Sm=512,Tm=513,wm=514,Rf=515,Am=516,Rm=517,Cm=518,Im=519,kl=35044;var td="300 es",pi=2e3,ya=2001,Wi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nd=1234567,Qr=Math.PI/180,_r=180/Math.PI;function qn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[t&63|128]+an[t>>8&255]+"-"+an[t>>16&255]+an[t>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function hn(i,e,t){return Math.max(e,Math.min(t,i))}function Lh(i,e){return(i%e+e)%e}function Pm(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Lm(i,e,t){return i!==e?(t-i)/(e-i):0}function eo(i,e,t){return(1-t)*i+t*e}function Dm(i,e,t,n){return eo(i,e,1-Math.exp(-t*n))}function Nm(i,e=1){return e-Math.abs(Lh(i,e*2)-e)}function Um(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Om(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Fm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Bm(i,e){return i+Math.random()*(e-i)}function km(i){return i*(.5-Math.random())}function zm(i){i!==void 0&&(nd=i);let e=nd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Hm(i){return i*Qr}function Vm(i){return i*_r}function Gm(i){return(i&i-1)===0&&i!==0}function Wm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Xm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function qm(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Xn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function bt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Cf={DEG2RAD:Qr,RAD2DEG:_r,generateUUID:qn,clamp:hn,euclideanModulo:Lh,mapLinear:Pm,inverseLerp:Lm,lerp:eo,damp:Dm,pingpong:Nm,smoothstep:Um,smootherstep:Om,randInt:Fm,randFloat:Bm,randFloatSpread:km,seededRandom:zm,degToRad:Hm,radToDeg:Vm,isPowerOfTwo:Gm,ceilPowerOfTwo:Wm,floorPowerOfTwo:Xm,setQuaternionFromProperEuler:qm,normalize:bt,denormalize:Xn},He=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(hn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qe=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],y=s[1],b=s[4],_=s[7],L=s[2],A=s[5],R=s[8];return r[0]=o*x+a*y+c*L,r[3]=o*m+a*b+c*A,r[6]=o*p+a*_+c*R,r[1]=l*x+h*y+u*L,r[4]=l*m+h*b+u*A,r[7]=l*p+h*_+u*R,r[2]=d*x+f*y+g*L,r[5]=d*m+f*b+g*A,r[8]=d*p+f*_+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*l-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=d*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(bc.makeScale(e,t)),this}rotate(e){return this.premultiply(bc.makeRotation(-e)),this}translate(e,t){return this.premultiply(bc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},bc=new Qe;function If(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function so(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ym(){let i=so("canvas");return i.style.display="block",i}var id={};function Kr(i){i in id||(id[i]=!0,console.warn(i))}function $m(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Zm(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Km(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var nt={enabled:!0,workingColorSpace:fn,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===yt&&(i.r=mi(i.r),i.g=mi(i.g),i.b=mi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===yt&&(i.r=lr(i.r),i.g=lr(i.g),i.b=lr(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===zi?$a:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function lr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var sd=[.64,.33,.3,.6,.15,.06],rd=[.2126,.7152,.0722],od=[.3127,.329],ad=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cd=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);nt.define({[fn]:{primaries:sd,whitePoint:od,transfer:$a,toXYZ:ad,fromXYZ:cd,luminanceCoefficients:rd,workingColorSpaceConfig:{unpackColorSpace:kt},outputColorSpaceConfig:{drawingBufferColorSpace:kt}},[kt]:{primaries:sd,whitePoint:od,transfer:yt,toXYZ:ad,fromXYZ:cd,luminanceCoefficients:rd,outputColorSpaceConfig:{drawingBufferColorSpace:kt}}});var Xs,zl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Xs===void 0&&(Xs=so("canvas")),Xs.width=e.width,Xs.height=e.height;let n=Xs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Xs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=so("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=mi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(mi(t[n]/255)*255):t[n]=mi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Jm=0,va=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jm++}),this.uuid=qn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ec(s[o].image)):r.push(Ec(s[o]))}else r=Ec(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Ec(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?zl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var jm=0,Kt=class i extends Wi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=vn,s=vn,r=Mn,o=Qn,a=bn,c=xi,l=i.DEFAULT_ANISOTROPY,h=zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jm++}),this.uuid=qn(),this.name="",this.source=new va(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gi:e.x=e.x-Math.floor(e.x);break;case vn:e.x=e.x<0?0:1;break;case no:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gi:e.y=e.y-Math.floor(e.y);break;case vn:e.y=e.y<0?0:1;break;case no:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=xf;Kt.DEFAULT_ANISOTROPY=1;var pt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,_=(f+1)/2,L=(p+1)/2,A=(h+d)/4,R=(u+x)/4,P=(g+m)/4;return b>_&&b>L?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=A/n,r=R/n):_>L?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=A/s,r=P/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=R/r,s=P/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-x)/y,this.z=(d-h)/y,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Hl=class extends Wi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Kt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new va(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},sn=class extends Hl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ma=class extends Kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Vl=class extends Kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(u!==x||c!==d||l!==f||h!==g){let m=1-a,p=c*d+l*f+h*g+u*x,y=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){let L=Math.sqrt(b),A=Math.atan2(L,p*y);m=Math.sin(m*A)/L,a=Math.sin(a*A)/L}let _=a*y;if(c=c*m+d*_,l=l*m+f*_,h=h*m+g*_,u=u*m+x*_,m===1-a){let L=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=L,l*=L,h*=L,u*=L}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(hn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ld.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ld.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Sc.copy(this).projectOnVector(e),this.sub(Sc)}reflect(e){return this.sub(Sc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(hn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Sc=new U,ld=new xn,Zt=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Vn):Vn.fromBufferAttribute(r,o),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ko.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ko.copy(n.boundingBox)),ko.applyMatrix4(e.matrixWorld),this.union(ko)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hr),zo.subVectors(this.max,Hr),qs.subVectors(e.a,Hr),Ys.subVectors(e.b,Hr),$s.subVectors(e.c,Hr),Ni.subVectors(Ys,qs),Ui.subVectors($s,Ys),ms.subVectors(qs,$s);let t=[0,-Ni.z,Ni.y,0,-Ui.z,Ui.y,0,-ms.z,ms.y,Ni.z,0,-Ni.x,Ui.z,0,-Ui.x,ms.z,0,-ms.x,-Ni.y,Ni.x,0,-Ui.y,Ui.x,0,-ms.y,ms.x,0];return!Tc(t,qs,Ys,$s,zo)||(t=[1,0,0,0,1,0,0,0,1],!Tc(t,qs,Ys,$s,zo))?!1:(Ho.crossVectors(Ni,Ui),t=[Ho.x,Ho.y,Ho.z],Tc(t,qs,Ys,$s,zo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},oi=[new U,new U,new U,new U,new U,new U,new U,new U],Vn=new U,ko=new Zt,qs=new U,Ys=new U,$s=new U,Ni=new U,Ui=new U,ms=new U,Hr=new U,zo=new U,Ho=new U,gs=new U;function Tc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){gs.fromArray(i,r);let a=s.x*Math.abs(gs.x)+s.y*Math.abs(gs.y)+s.z*Math.abs(gs.z),c=e.dot(gs),l=t.dot(gs),h=n.dot(gs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Qm=new Zt,Vr=new U,wc=new U,nn=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Qm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vr.subVectors(e,this.center);let t=Vr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Vr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vr.copy(e.center).add(wc)),this.expandByPoint(Vr.copy(e.center).sub(wc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ai=new U,Ac=new U,Vo=new U,Oi=new U,Rc=new U,Go=new U,Cc=new U,Rs=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,t),ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ac.copy(e).add(t).multiplyScalar(.5),Vo.copy(t).sub(e).normalize(),Oi.copy(this.origin).sub(Ac);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Vo),a=Oi.dot(this.direction),c=-Oi.dot(Vo),l=Oi.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ac).addScaledVector(Vo,d),f}intersectSphere(e,t){ai.subVectors(e.center,this.origin);let n=ai.dot(this.direction),s=ai.dot(ai)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,n,s,r){Rc.subVectors(t,e),Go.subVectors(n,e),Cc.crossVectors(Rc,Go);let o=this.direction.dot(Cc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Oi.subVectors(this.origin,e);let c=a*this.direction.dot(Go.crossVectors(Oi,Go));if(c<0)return null;let l=a*this.direction.dot(Rc.cross(Oi));if(l<0||c+l>o)return null;let h=-a*Oi.dot(Cc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},qe=class i{constructor(e,t,n,s,r,o,a,c,l,h,u,d,f,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,d,f,g,x,m)}set(e,t,n,s,r,o,a,c,l,h,u,d,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Zs.setFromMatrixColumn(e,0).length(),r=1/Zs.setFromMatrixColumn(e,1).length(),o=1/Zs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,g=a*h,x=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,g=l*h,x=l*u;t[0]=d+x*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=x+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,g=l*h,x=l*u;t[0]=d-x*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,f=o*u,g=a*h,x=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+x,t[1]=c*u,t[5]=x*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=x-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-x*u}else if(e.order==="XZY"){let d=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+x,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(e0,e,t0)}lookAt(e,t,n){let s=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),Fi.crossVectors(n,Rn),Fi.lengthSq()===0&&(Math.abs(n.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),Fi.crossVectors(n,Rn)),Fi.normalize(),Wo.crossVectors(Rn,Fi),s[0]=Fi.x,s[4]=Wo.x,s[8]=Rn.x,s[1]=Fi.y,s[5]=Wo.y,s[9]=Rn.y,s[2]=Fi.z,s[6]=Wo.z,s[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],y=n[3],b=n[7],_=n[11],L=n[15],A=s[0],R=s[4],P=s[8],E=s[12],M=s[1],N=s[5],X=s[9],W=s[13],V=s[2],K=s[6],q=s[10],ie=s[14],Z=s[3],me=s[7],_e=s[11],Ce=s[15];return r[0]=o*A+a*M+c*V+l*Z,r[4]=o*R+a*N+c*K+l*me,r[8]=o*P+a*X+c*q+l*_e,r[12]=o*E+a*W+c*ie+l*Ce,r[1]=h*A+u*M+d*V+f*Z,r[5]=h*R+u*N+d*K+f*me,r[9]=h*P+u*X+d*q+f*_e,r[13]=h*E+u*W+d*ie+f*Ce,r[2]=g*A+x*M+m*V+p*Z,r[6]=g*R+x*N+m*K+p*me,r[10]=g*P+x*X+m*q+p*_e,r[14]=g*E+x*W+m*ie+p*Ce,r[3]=y*A+b*M+_*V+L*Z,r[7]=y*R+b*N+_*K+L*me,r[11]=y*P+b*X+_*q+L*_e,r[15]=y*E+b*W+_*ie+L*Ce,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+x*(+t*c*f-t*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+m*(+t*l*u-t*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-t*c*u+t*a*d+s*o*u-n*o*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],y=u*m*l-x*d*l+x*c*f-a*m*f-u*c*p+a*d*p,b=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,_=h*x*l-g*u*l+g*a*f-o*x*f-h*a*p+o*u*p,L=g*u*c-h*x*c-g*a*d+o*x*d+h*a*m-o*u*m,A=t*y+n*b+s*_+r*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/A;return e[0]=y*R,e[1]=(x*d*r-u*m*r-x*s*f+n*m*f+u*s*p-n*d*p)*R,e[2]=(a*m*r-x*c*r+x*s*l-n*m*l-a*s*p+n*c*p)*R,e[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*R,e[4]=b*R,e[5]=(h*m*r-g*d*r+g*s*f-t*m*f-h*s*p+t*d*p)*R,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*p-t*c*p)*R,e[7]=(o*d*r-h*c*r+h*s*l-t*d*l-o*s*f+t*c*f)*R,e[8]=_*R,e[9]=(g*u*r-h*x*r-g*n*f+t*x*f+h*n*p-t*u*p)*R,e[10]=(o*x*r-g*a*r+g*n*l-t*x*l-o*n*p+t*a*p)*R,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*f-t*a*f)*R,e[12]=L*R,e[13]=(h*x*s-g*u*s+g*n*d-t*x*d-h*n*m+t*u*m)*R,e[14]=(g*a*s-o*x*s-g*n*c+t*x*c+o*n*m-t*a*m)*R,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*d+t*a*d)*R,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,x=o*h,m=o*u,p=a*u,y=c*l,b=c*h,_=c*u,L=n.x,A=n.y,R=n.z;return s[0]=(1-(x+p))*L,s[1]=(f+_)*L,s[2]=(g-b)*L,s[3]=0,s[4]=(f-_)*A,s[5]=(1-(d+p))*A,s[6]=(m+y)*A,s[7]=0,s[8]=(g+b)*R,s[9]=(m-y)*R,s[10]=(1-(d+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Zs.set(s[0],s[1],s[2]).length(),o=Zs.set(s[4],s[5],s[6]).length(),a=Zs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Gn.copy(this);let l=1/r,h=1/o,u=1/a;return Gn.elements[0]*=l,Gn.elements[1]*=l,Gn.elements[2]*=l,Gn.elements[4]*=h,Gn.elements[5]*=h,Gn.elements[6]*=h,Gn.elements[8]*=u,Gn.elements[9]*=u,Gn.elements[10]*=u,t.setFromRotationMatrix(Gn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=pi){let c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),f,g;if(a===pi)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ya)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=pi){let c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(o-r),d=(t+e)*l,f=(n+s)*h,g,x;if(a===pi)g=(o+r)*u,x=-2*u;else if(a===ya)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Zs=new U,Gn=new qe,e0=new U(0,0,0),t0=new U(1,1,1),Fi=new U,Wo=new U,Rn=new U,hd=new qe,ud=new xn,En=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(hn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-hn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(hn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-hn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(hn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-hn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return hd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ud.setFromEuler(this),this.setFromQuaternion(ud,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};En.DEFAULT_ORDER="XYZ";var ro=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},n0=0,dd=new U,Ks=new xn,ci=new qe,Xo=new U,Gr=new U,i0=new U,s0=new xn,fd=new U(1,0,0),pd=new U(0,1,0),md=new U(0,0,1),gd={type:"added"},r0={type:"removed"},Js={type:"childadded",child:null},Ic={type:"childremoved",child:null},Ut=class i extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new U,t=new En,n=new xn,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new qe},normalMatrix:{value:new Qe}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ro,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ks.setFromAxisAngle(e,t),this.quaternion.multiply(Ks),this}rotateOnWorldAxis(e,t){return Ks.setFromAxisAngle(e,t),this.quaternion.premultiply(Ks),this}rotateX(e){return this.rotateOnAxis(fd,e)}rotateY(e){return this.rotateOnAxis(pd,e)}rotateZ(e){return this.rotateOnAxis(md,e)}translateOnAxis(e,t){return dd.copy(e).applyQuaternion(this.quaternion),this.position.add(dd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fd,e)}translateY(e){return this.translateOnAxis(pd,e)}translateZ(e){return this.translateOnAxis(md,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xo.copy(e):Xo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(Gr,Xo,this.up):ci.lookAt(Xo,Gr,this.up),this.quaternion.setFromRotationMatrix(ci),s&&(ci.extractRotation(s.matrixWorld),Ks.setFromRotationMatrix(ci),this.quaternion.premultiply(Ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gd),Js.child=e,this.dispatchEvent(Js),Js.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(r0),Ic.child=e,this.dispatchEvent(Ic),Ic.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gd),Js.child=e,this.dispatchEvent(Js),Js.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,e,i0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,s0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Ut.DEFAULT_UP=new U(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Wn=new U,li=new U,Pc=new U,hi=new U,js=new U,Qs=new U,xd=new U,Lc=new U,Dc=new U,Nc=new U,Uc=new pt,Oc=new pt,Fc=new pt,Ts=class i{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Wn.subVectors(e,t),s.cross(Wn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Wn.subVectors(s,t),li.subVectors(n,t),Pc.subVectors(e,t);let o=Wn.dot(Wn),a=Wn.dot(li),c=Wn.dot(Pc),l=li.dot(li),h=li.dot(Pc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,hi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,hi.x),c.addScaledVector(o,hi.y),c.addScaledVector(a,hi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Uc.setScalar(0),Oc.setScalar(0),Fc.setScalar(0),Uc.fromBufferAttribute(e,t),Oc.fromBufferAttribute(e,n),Fc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Uc,r.x),o.addScaledVector(Oc,r.y),o.addScaledVector(Fc,r.z),o}static isFrontFacing(e,t,n,s){return Wn.subVectors(n,t),li.subVectors(e,t),Wn.cross(li).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Wn.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;js.subVectors(s,n),Qs.subVectors(r,n),Lc.subVectors(e,n);let c=js.dot(Lc),l=Qs.dot(Lc);if(c<=0&&l<=0)return t.copy(n);Dc.subVectors(e,s);let h=js.dot(Dc),u=Qs.dot(Dc);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(js,o);Nc.subVectors(e,r);let f=js.dot(Nc),g=Qs.dot(Nc);if(g>=0&&f<=g)return t.copy(r);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Qs,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return xd.subVectors(r,s),a=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(xd,a);let p=1/(m+x+d);return o=x*p,a=d*p,t.copy(n).addScaledVector(js,o).addScaledVector(Qs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Pf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},qo={h:0,s:0,l:0};function Bc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Me=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=nt.workingColorSpace){if(e=Lh(e,1),t=hn(t,0,1),n=hn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Bc(o,r,e+1/3),this.g=Bc(o,r,e),this.b=Bc(o,r,e-1/3)}return nt.toWorkingColorSpace(this,s),this}setStyle(e,t=kt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){let n=Pf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}copyLinearToSRGB(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return nt.fromWorkingColorSpace(cn.copy(this),e),Math.round(hn(cn.r*255,0,255))*65536+Math.round(hn(cn.g*255,0,255))*256+Math.round(hn(cn.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(cn.copy(this),t);let n=cn.r,s=cn.g,r=cn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(cn.copy(this),t),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=kt){nt.fromWorkingColorSpace(cn.copy(this),e);let t=cn.r,n=cn.g,s=cn.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Bi),this.setHSL(Bi.h+e,Bi.s+t,Bi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Bi),e.getHSL(qo);let n=eo(Bi.h,qo.h,t),s=eo(Bi.s,qo.s,t),r=eo(Bi.l,qo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},cn=new Me;Me.NAMES=Pf;var o0=0,Sn=class extends Wi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=qn(),this.name="",this.blending=ar,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nl,this.blendDst=il,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ed,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ws,this.stencilZFail=Ws,this.stencilZPass=Ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ar&&(n.blending=this.blending),this.side!==ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==nl&&(n.blendSrc=this.blendSrc),this.blendDst!==il&&(n.blendDst=this.blendDst),this.blendEquation!==Ss&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ur&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ed&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ws&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ws&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ws&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},vt=class extends Sn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=_h,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Gt=new U,Yo=new He,Et=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=kl,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Yo.fromBufferAttribute(this,t),Yo.applyMatrix3(e),this.setXY(t,Yo.x,Yo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),s=bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),s=bt(s,this.array),r=bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kl&&(e.usage=this.usage),e}};var ba=class extends Et{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ea=class extends Et{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var it=class extends Et{constructor(e,t,n){super(new Float32Array(e),t,n)}},a0=0,On=new qe,kc=new Ut,er=new U,Cn=new Zt,Wr=new Zt,Yt=new U,dt=class i extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(If(e)?Ea:ba)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,t,n){return On.makeTranslation(e,t,n),this.applyMatrix4(On),this}scale(e,t,n){return On.makeScale(e,t,n),this.applyMatrix4(On),this}lookAt(e){return kc.lookAt(e),kc.updateMatrix(),this.applyMatrix4(kc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(er).negate(),this.translate(er.x,er.y,er.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new it(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Wr.setFromBufferAttribute(a),this.morphTargetsRelative?(Yt.addVectors(Cn.min,Wr.min),Cn.expandByPoint(Yt),Yt.addVectors(Cn.max,Wr.max),Cn.expandByPoint(Yt)):(Cn.expandByPoint(Wr.min),Cn.expandByPoint(Wr.max))}Cn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Yt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Yt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Yt.fromBufferAttribute(a,l),c&&(er.fromBufferAttribute(e,l),Yt.add(er)),s=Math.max(s,n.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Et(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new U,c[P]=new U;let l=new U,h=new U,u=new U,d=new He,f=new He,g=new He,x=new U,m=new U;function p(P,E,M){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,M),h.sub(l),u.sub(l),f.sub(d),g.sub(d);let N=1/(f.x*g.y-g.x*f.y);isFinite(N)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(N),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(N),a[P].add(x),a[E].add(x),a[M].add(x),c[P].add(m),c[E].add(m),c[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let P=0,E=y.length;P<E;++P){let M=y[P],N=M.start,X=M.count;for(let W=N,V=N+X;W<V;W+=3)p(e.getX(W+0),e.getX(W+1),e.getX(W+2))}let b=new U,_=new U,L=new U,A=new U;function R(P){L.fromBufferAttribute(s,P),A.copy(L);let E=a[P];b.copy(E),b.sub(L.multiplyScalar(L.dot(E))).normalize(),_.crossVectors(A,E);let N=_.dot(c[P])<0?-1:1;o.setXYZW(P,b.x,b.y,b.z,N)}for(let P=0,E=y.length;P<E;++P){let M=y[P],N=M.start,X=M.count;for(let W=N,V=N+X;W<V;W+=3)R(e.getX(W+0)),R(e.getX(W+1)),R(e.getX(W+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Et(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new U,r=new U,o=new U,a=new U,c=new U,l=new U,h=new U,u=new U;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Et(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},_d=new qe,xs=new Rs,$o=new nn,yd=new U,Zo=new U,Ko=new U,Jo=new U,zc=new U,jo=new U,vd=new U,Qo=new U,ne=class extends Ut{constructor(e=new dt,t=new vt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){jo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(zc.fromBufferAttribute(u,e),o?jo.addScaledVector(zc,h):jo.addScaledVector(zc.sub(t),h))}t.add(jo)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$o.copy(n.boundingSphere),$o.applyMatrix4(r),xs.copy(e.ray).recast(e.near),!($o.containsPoint(xs.origin)===!1&&(xs.intersectSphere($o,yd)===null||xs.origin.distanceToSquared(yd)>(e.far-e.near)**2))&&(_d.copy(r).invert(),xs.copy(e.ray).applyMatrix4(_d),!(n.boundingBox!==null&&xs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,xs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),b=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,L=b;_<L;_+=3){let A=a.getX(_),R=a.getX(_+1),P=a.getX(_+2);s=ea(this,p,e,n,l,h,u,A,R,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let y=a.getX(m),b=a.getX(m+1),_=a.getX(m+2);s=ea(this,o,e,n,l,h,u,y,b,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),b=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,L=b;_<L;_+=3){let A=_,R=_+1,P=_+2;s=ea(this,p,e,n,l,h,u,A,R,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let y=m,b=m+1,_=m+2;s=ea(this,o,e,n,l,h,u,y,b,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function c0(i,e,t,n,s,r,o,a){let c;if(e.side===tn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===ti,a),c===null)return null;Qo.copy(a),Qo.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Qo);return l<t.near||l>t.far?null:{distance:l,point:Qo.clone(),object:i}}function ea(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Zo),i.getVertexPosition(c,Ko),i.getVertexPosition(l,Jo);let h=c0(i,e,t,n,Zo,Ko,Jo,vd);if(h){let u=new U;Ts.getBarycoord(vd,Zo,Ko,Jo,u),s&&(h.uv=Ts.getInterpolatedAttribute(s,a,c,l,u,new He)),r&&(h.uv1=Ts.getInterpolatedAttribute(r,a,c,l,u,new He)),o&&(h.normal=Ts.getInterpolatedAttribute(o,a,c,l,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new U,materialIndex:0};Ts.getNormal(Zo,Ko,Jo,d.normal),h.face=d,h.barycoord=u}return h}var Tn=class i extends dt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new it(l,3)),this.setAttribute("normal",new it(h,3)),this.setAttribute("uv",new it(u,2));function g(x,m,p,y,b,_,L,A,R,P,E){let M=_/R,N=L/P,X=_/2,W=L/2,V=A/2,K=R+1,q=P+1,ie=0,Z=0,me=new U;for(let _e=0;_e<q;_e++){let Ce=_e*N-W;for(let Ge=0;Ge<K;Ge++){let ct=Ge*M-X;me[x]=ct*y,me[m]=Ce*b,me[p]=V,l.push(me.x,me.y,me.z),me[x]=0,me[m]=0,me[p]=A>0?1:-1,h.push(me.x,me.y,me.z),u.push(Ge/R),u.push(1-_e/P),ie+=1}}for(let _e=0;_e<P;_e++)for(let Ce=0;Ce<R;Ce++){let Ge=d+Ce+K*_e,ct=d+Ce+K*(_e+1),te=d+(Ce+1)+K*(_e+1),ce=d+(Ce+1)+K*_e;c.push(Ge,ct,ce),c.push(ct,te,ce),Z+=6}a.addGroup(f,Z,E),f+=Z,d+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function yr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function gn(i){let e={};for(let t=0;t<i.length;t++){let n=yr(i[t]);for(let s in n)e[s]=n[s]}return e}function l0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Lf(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}var ns={clone:yr,merge:gn},h0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,u0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ht=class extends Sn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=h0,this.fragmentShader=u0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yr(e.uniforms),this.uniformsGroups=l0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Sa=class extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=pi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ki=new U,Md=new He,bd=new He,zt=class extends Sa{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=_r*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Qr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _r*2*Math.atan(Math.tan(Qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ki.x,ki.y).multiplyScalar(-e/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ki.x,ki.y).multiplyScalar(-e/ki.z)}getViewSize(e,t){return this.getViewBounds(e,Md,bd),t.subVectors(bd,Md)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Qr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},tr=-90,nr=1,Gl=class extends Ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new zt(tr,nr,e,t);s.layers=this.layers,this.add(s);let r=new zt(tr,nr,e,t);r.layers=this.layers,this.add(r);let o=new zt(tr,nr,e,t);o.layers=this.layers,this.add(o);let a=new zt(tr,nr,e,t);a.layers=this.layers,this.add(a);let c=new zt(tr,nr,e,t);c.layers=this.layers,this.add(c);let l=new zt(tr,nr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===pi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ya)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ta=class extends Kt{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:dr,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Wl=class extends sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ta(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Mn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Tn(5,5,5),r=new Ht({name:"CubemapFromEquirect",uniforms:yr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:ei});r.uniforms.tEquirect.value=t;let o=new ne(s,r),a=t.minFilter;return t.minFilter===Qn&&(t.minFilter=Mn),new Gl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Hc=new U,d0=new U,f0=new Qe,fi=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Hc.subVectors(n,t).cross(d0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Hc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||f0.getNormalMatrix(e),s=this.coplanarPoint(Hc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},_s=new nn,ta=new U,vr=class{constructor(e=new fi,t=new fi,n=new fi,s=new fi,r=new fi,o=new fi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=pi){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],x=s[10],m=s[11],p=s[12],y=s[13],b=s[14],_=s[15];if(n[0].setComponents(c-r,d-l,m-f,_-p).normalize(),n[1].setComponents(c+r,d+l,m+f,_+p).normalize(),n[2].setComponents(c+o,d+h,m+g,_+y).normalize(),n[3].setComponents(c-o,d-h,m-g,_-y).normalize(),n[4].setComponents(c-a,d-u,m-x,_-b).normalize(),t===pi)n[5].setComponents(c+a,d+u,m+x,_+b).normalize();else if(t===ya)n[5].setComponents(a,u,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_s.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_s.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(e){return _s.center.set(0,0,0),_s.radius=.7071067811865476,_s.applyMatrix4(e.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ta.x=s.normal.x>0?e.max.x:e.min.x,ta.y=s.normal.y>0?e.max.y:e.min.y,ta.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ta)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Df(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function p0(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Jt=class i extends dt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let y=p*d-o;for(let b=0;b<l;b++){let _=b*u-r;g.push(_,-y,0),x.push(0,0,1),m.push(b/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){let b=y+l*p,_=y+l*(p+1),L=y+1+l*(p+1),A=y+1+l*p;f.push(b,_,A),f.push(_,L,A)}this.setIndex(f),this.setAttribute("position",new it(g,3)),this.setAttribute("normal",new it(x,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},m0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,g0=`#ifdef USE_ALPHAHASH
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
#endif`,x0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,y0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,v0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,M0=`#ifdef USE_AOMAP
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
#endif`,b0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,E0=`#ifdef USE_BATCHING
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
#endif`,S0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,T0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,w0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,A0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,R0=`#ifdef USE_IRIDESCENCE
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
#endif`,C0=`#ifdef USE_BUMPMAP
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
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,P0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,L0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,D0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,N0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,U0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,O0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,F0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,B0=`#define PI 3.141592653589793
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
} // validated`,k0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,z0=`vec3 transformedNormal = objectNormal;
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
#endif`,H0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,V0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,G0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,W0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,X0="gl_FragColor = linearToOutputTexel( gl_FragColor );",q0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Y0=`#ifdef USE_ENVMAP
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
#endif`,$0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Z0=`#ifdef USE_ENVMAP
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
#endif`,K0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,J0=`#ifdef USE_ENVMAP
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
#endif`,j0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Q0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ng=`#ifdef USE_GRADIENTMAP
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
}`,ig=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,og=`uniform bool receiveShadow;
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
#endif`,ag=`#ifdef USE_ENVMAP
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
#endif`,cg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ug=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dg=`PhysicalMaterial material;
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
#endif`,fg=`struct PhysicalMaterial {
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
}`,pg=`
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
#endif`,mg=`#if defined( RE_IndirectDiffuse )
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
#endif`,gg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_g=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Eg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sg=`#if defined( USE_POINTS_UV )
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
#endif`,Tg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ag=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ig=`#ifdef USE_MORPHTARGETS
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
#endif`,Pg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ng=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ug=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Og=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fg=`#ifdef USE_NORMALMAP
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
#endif`,Bg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$g=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qg=`float getShadowMask() {
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
}`,ex=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tx=`#ifdef USE_SKINNING
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
#endif`,nx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ix=`#ifdef USE_SKINNING
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
#endif`,sx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ox=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ax=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cx=`#ifdef USE_TRANSMISSION
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
#endif`,lx=`#ifdef USE_TRANSMISSION
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
#endif`,hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,px=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mx=`uniform sampler2D t2D;
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
}`,gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vx=`#include <common>
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
}`,Mx=`#if DEPTH_PACKING == 3200
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
}`,bx=`#define DISTANCE
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
}`,Ex=`#define DISTANCE
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
}`,Sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wx=`uniform float scale;
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
}`,Ax=`uniform vec3 diffuse;
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
}`,Rx=`#include <common>
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
}`,Cx=`uniform vec3 diffuse;
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
}`,Ix=`#define LAMBERT
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
}`,Px=`#define LAMBERT
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
}`,Lx=`#define MATCAP
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
}`,Dx=`#define MATCAP
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
}`,Nx=`#define NORMAL
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
}`,Ux=`#define NORMAL
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
}`,Ox=`#define PHONG
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
}`,Fx=`#define PHONG
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
}`,Bx=`#define STANDARD
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
}`,kx=`#define STANDARD
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
}`,zx=`#define TOON
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
}`,Hx=`#define TOON
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
}`,Vx=`uniform float size;
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
}`,Gx=`uniform vec3 diffuse;
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
}`,Wx=`#include <common>
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
}`,Xx=`uniform vec3 color;
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
}`,qx=`uniform float rotation;
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
}`,Yx=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:m0,alphahash_pars_fragment:g0,alphamap_fragment:x0,alphamap_pars_fragment:_0,alphatest_fragment:y0,alphatest_pars_fragment:v0,aomap_fragment:M0,aomap_pars_fragment:b0,batching_pars_vertex:E0,batching_vertex:S0,begin_vertex:T0,beginnormal_vertex:w0,bsdfs:A0,iridescence_fragment:R0,bumpmap_pars_fragment:C0,clipping_planes_fragment:I0,clipping_planes_pars_fragment:P0,clipping_planes_pars_vertex:L0,clipping_planes_vertex:D0,color_fragment:N0,color_pars_fragment:U0,color_pars_vertex:O0,color_vertex:F0,common:B0,cube_uv_reflection_fragment:k0,defaultnormal_vertex:z0,displacementmap_pars_vertex:H0,displacementmap_vertex:V0,emissivemap_fragment:G0,emissivemap_pars_fragment:W0,colorspace_fragment:X0,colorspace_pars_fragment:q0,envmap_fragment:Y0,envmap_common_pars_fragment:$0,envmap_pars_fragment:Z0,envmap_pars_vertex:K0,envmap_physical_pars_fragment:ag,envmap_vertex:J0,fog_vertex:j0,fog_pars_vertex:Q0,fog_fragment:eg,fog_pars_fragment:tg,gradientmap_pars_fragment:ng,lightmap_pars_fragment:ig,lights_lambert_fragment:sg,lights_lambert_pars_fragment:rg,lights_pars_begin:og,lights_toon_fragment:cg,lights_toon_pars_fragment:lg,lights_phong_fragment:hg,lights_phong_pars_fragment:ug,lights_physical_fragment:dg,lights_physical_pars_fragment:fg,lights_fragment_begin:pg,lights_fragment_maps:mg,lights_fragment_end:gg,logdepthbuf_fragment:xg,logdepthbuf_pars_fragment:_g,logdepthbuf_pars_vertex:yg,logdepthbuf_vertex:vg,map_fragment:Mg,map_pars_fragment:bg,map_particle_fragment:Eg,map_particle_pars_fragment:Sg,metalnessmap_fragment:Tg,metalnessmap_pars_fragment:wg,morphinstance_vertex:Ag,morphcolor_vertex:Rg,morphnormal_vertex:Cg,morphtarget_pars_vertex:Ig,morphtarget_vertex:Pg,normal_fragment_begin:Lg,normal_fragment_maps:Dg,normal_pars_fragment:Ng,normal_pars_vertex:Ug,normal_vertex:Og,normalmap_pars_fragment:Fg,clearcoat_normal_fragment_begin:Bg,clearcoat_normal_fragment_maps:kg,clearcoat_pars_fragment:zg,iridescence_pars_fragment:Hg,opaque_fragment:Vg,packing:Gg,premultiplied_alpha_fragment:Wg,project_vertex:Xg,dithering_fragment:qg,dithering_pars_fragment:Yg,roughnessmap_fragment:$g,roughnessmap_pars_fragment:Zg,shadowmap_pars_fragment:Kg,shadowmap_pars_vertex:Jg,shadowmap_vertex:jg,shadowmask_pars_fragment:Qg,skinbase_vertex:ex,skinning_pars_vertex:tx,skinning_vertex:nx,skinnormal_vertex:ix,specularmap_fragment:sx,specularmap_pars_fragment:rx,tonemapping_fragment:ox,tonemapping_pars_fragment:ax,transmission_fragment:cx,transmission_pars_fragment:lx,uv_pars_fragment:hx,uv_pars_vertex:ux,uv_vertex:dx,worldpos_vertex:fx,background_vert:px,background_frag:mx,backgroundCube_vert:gx,backgroundCube_frag:xx,cube_vert:_x,cube_frag:yx,depth_vert:vx,depth_frag:Mx,distanceRGBA_vert:bx,distanceRGBA_frag:Ex,equirect_vert:Sx,equirect_frag:Tx,linedashed_vert:wx,linedashed_frag:Ax,meshbasic_vert:Rx,meshbasic_frag:Cx,meshlambert_vert:Ix,meshlambert_frag:Px,meshmatcap_vert:Lx,meshmatcap_frag:Dx,meshnormal_vert:Nx,meshnormal_frag:Ux,meshphong_vert:Ox,meshphong_frag:Fx,meshphysical_vert:Bx,meshphysical_frag:kx,meshtoon_vert:zx,meshtoon_frag:Hx,points_vert:Vx,points_frag:Gx,shadow_vert:Wx,shadow_frag:Xx,sprite_vert:qx,sprite_frag:Yx},ye={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},jn={basic:{uniforms:gn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:gn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Me(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:gn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:gn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:gn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Me(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:gn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:gn([ye.points,ye.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:gn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:gn([ye.common,ye.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:gn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:gn([ye.sprite,ye.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:gn([ye.common,ye.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:gn([ye.lights,ye.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};jn.physical={uniforms:gn([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};var na={r:0,b:0,g:0},ys=new En,$x=new qe;function Zx(i,e,t,n,s,r,o){let a=new Me(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(y){let b=y.isScene===!0?y.background:null;return b&&b.isTexture&&(b=(y.backgroundBlurriness>0?t:e).get(b)),b}function x(y){let b=!1,_=g(y);_===null?p(a,c):_&&_.isColor&&(p(_,1),b=!0);let L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,b){let _=g(b);_&&(_.isCubeTexture||_.mapping===Xa)?(h===void 0&&(h=new ne(new Tn(1,1,1),new Ht({name:"BackgroundCubeMaterial",uniforms:yr(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ys.copy(b.backgroundRotation),ys.x*=-1,ys.y*=-1,ys.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4($x.makeRotationFromEuler(ys)),h.material.toneMapped=nt.getTransfer(_.colorSpace)!==yt,(u!==_||d!==_.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new ne(new Jt(2,2),new Ht({name:"BackgroundMaterial",uniforms:yr(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=nt.getTransfer(_.colorSpace)!==yt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,b){y.getRGB(na,Lf(i)),n.buffers.color.setClear(na.r,na.g,na.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(y,b=1){a.set(y),c=b,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(a,c)},render:x,addToRenderList:m}}function Kx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(M,N,X,W,V){let K=!1,q=u(W,X,N);r!==q&&(r=q,l(r.object)),K=f(M,W,X,V),K&&g(M,W,X,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,_(M,N,X,W),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,N,X){let W=X.wireframe===!0,V=n[M.id];V===void 0&&(V={},n[M.id]=V);let K=V[N.id];K===void 0&&(K={},V[N.id]=K);let q=K[W];return q===void 0&&(q=d(c()),K[W]=q),q}function d(M){let N=[],X=[],W=[];for(let V=0;V<t;V++)N[V]=0,X[V]=0,W[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:X,attributeDivisors:W,object:M,attributes:{},index:null}}function f(M,N,X,W){let V=r.attributes,K=N.attributes,q=0,ie=X.getAttributes();for(let Z in ie)if(ie[Z].location>=0){let _e=V[Z],Ce=K[Z];if(Ce===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(Ce=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(Ce=M.instanceColor)),_e===void 0||_e.attribute!==Ce||Ce&&_e.data!==Ce.data)return!0;q++}return r.attributesNum!==q||r.index!==W}function g(M,N,X,W){let V={},K=N.attributes,q=0,ie=X.getAttributes();for(let Z in ie)if(ie[Z].location>=0){let _e=K[Z];_e===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(_e=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(_e=M.instanceColor));let Ce={};Ce.attribute=_e,_e&&_e.data&&(Ce.data=_e.data),V[Z]=Ce,q++}r.attributes=V,r.attributesNum=q,r.index=W}function x(){let M=r.newAttributes;for(let N=0,X=M.length;N<X;N++)M[N]=0}function m(M){p(M,0)}function p(M,N){let X=r.newAttributes,W=r.enabledAttributes,V=r.attributeDivisors;X[M]=1,W[M]===0&&(i.enableVertexAttribArray(M),W[M]=1),V[M]!==N&&(i.vertexAttribDivisor(M,N),V[M]=N)}function y(){let M=r.newAttributes,N=r.enabledAttributes;for(let X=0,W=N.length;X<W;X++)N[X]!==M[X]&&(i.disableVertexAttribArray(X),N[X]=0)}function b(M,N,X,W,V,K,q){q===!0?i.vertexAttribIPointer(M,N,X,V,K):i.vertexAttribPointer(M,N,X,W,V,K)}function _(M,N,X,W){x();let V=W.attributes,K=X.getAttributes(),q=N.defaultAttributeValues;for(let ie in K){let Z=K[ie];if(Z.location>=0){let me=V[ie];if(me===void 0&&(ie==="instanceMatrix"&&M.instanceMatrix&&(me=M.instanceMatrix),ie==="instanceColor"&&M.instanceColor&&(me=M.instanceColor)),me!==void 0){let _e=me.normalized,Ce=me.itemSize,Ge=e.get(me);if(Ge===void 0)continue;let ct=Ge.buffer,te=Ge.type,ce=Ge.bytesPerElement,Re=te===i.INT||te===i.UNSIGNED_INT||me.gpuType===Th;if(me.isInterleavedBufferAttribute){let ge=me.data,ze=ge.stride,Xe=me.offset;if(ge.isInstancedInterleavedBuffer){for(let O=0;O<Z.locationSize;O++)p(Z.location+O,ge.meshPerAttribute);M.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let O=0;O<Z.locationSize;O++)m(Z.location+O);i.bindBuffer(i.ARRAY_BUFFER,ct);for(let O=0;O<Z.locationSize;O++)b(Z.location+O,Ce/Z.locationSize,te,_e,ze*ce,(Xe+Ce/Z.locationSize*O)*ce,Re)}else{if(me.isInstancedBufferAttribute){for(let ge=0;ge<Z.locationSize;ge++)p(Z.location+ge,me.meshPerAttribute);M.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let ge=0;ge<Z.locationSize;ge++)m(Z.location+ge);i.bindBuffer(i.ARRAY_BUFFER,ct);for(let ge=0;ge<Z.locationSize;ge++)b(Z.location+ge,Ce/Z.locationSize,te,_e,Ce*ce,Ce/Z.locationSize*ge*ce,Re)}}else if(q!==void 0){let _e=q[ie];if(_e!==void 0)switch(_e.length){case 2:i.vertexAttrib2fv(Z.location,_e);break;case 3:i.vertexAttrib3fv(Z.location,_e);break;case 4:i.vertexAttrib4fv(Z.location,_e);break;default:i.vertexAttrib1fv(Z.location,_e)}}}}y()}function L(){P();for(let M in n){let N=n[M];for(let X in N){let W=N[X];for(let V in W)h(W[V].object),delete W[V];delete N[X]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;let N=n[M.id];for(let X in N){let W=N[X];for(let V in W)h(W[V].object),delete W[V];delete N[X]}delete n[M.id]}function R(M){for(let N in n){let X=n[N];if(X[M.id]===void 0)continue;let W=X[M.id];for(let V in W)h(W[V].object),delete W[V];delete X[M.id]}}function P(){E(),o=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:E,dispose:L,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function Jx(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function jx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==bn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let P=R===Ln&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==xi&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==In&&!P)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:_,vertexTextures:L,maxSamples:A}}function Qx(i){let e=this,t=null,n=0,s=!1,r=!1,o=new fi,a=new Qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let y=r?0:n,b=y*4,_=p.clippingState||null;c.value=_,_=h(g,d,b,f);for(let L=0;L!==b;++L)_[L]=t[L];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=f+x*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,_=f;b!==x;++b,_+=4)o.copy(u[b]).applyMatrix4(y,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function e_(i){let e=new WeakMap;function t(o,a){return a===ul?o.mapping=dr:a===dl&&(o.mapping=fr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===ul||a===dl)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Wl(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Xi=class extends Sa{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},or=4,Ed=[.125,.215,.35,.446,.526,.582],ws=20,Vc=new Xi,Sd=new Me,Gc=null,Wc=0,Xc=0,qc=!1,Es=(1+Math.sqrt(5))/2,ir=1/Es,Td=[new U(-Es,ir,0),new U(Es,ir,0),new U(-ir,0,Es),new U(ir,0,Es),new U(0,Es,-ir),new U(0,Es,ir),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],Mr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Gc=this._renderer.getRenderTarget(),Wc=this._renderer.getActiveCubeFace(),Xc=this._renderer.getActiveMipmapLevel(),qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ad(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Gc,Wc,Xc),this._renderer.xr.enabled=qc,e.scissorTest=!1,ia(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===dr||e.mapping===fr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gc=this._renderer.getRenderTarget(),Wc=this._renderer.getActiveCubeFace(),Xc=this._renderer.getActiveMipmapLevel(),qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:Ln,format:bn,colorSpace:fn,depthBuffer:!1},s=wd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wd(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=t_(r)),this._blurMaterial=n_(r,e,t)}return s}_compileMaterial(e){let t=new ne(this._lodPlanes[0],e);this._renderer.compile(t,Vc)}_sceneToCubeUV(e,t,n,s){let a=new zt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Sd),h.toneMapping=Vi,h.autoClear=!1;let f=new vt({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),g=new ne(new Tn,f),x=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,x=!0):(f.color.copy(Sd),x=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):y===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let b=this._cubeSize;ia(s,y*b,p>2?b:0,b,b),h.setRenderTarget(s),x&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===dr||e.mapping===fr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ad());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ne(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;ia(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Vc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Td[(s-r-1)%Td.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ne(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ws-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):ws;m>ws&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ws}`);let p=[],y=0;for(let R=0;R<ws;++R){let P=R/x,E=Math.exp(-P*P/2);p.push(E),R===0?y+=E:R<m&&(y+=2*E)}for(let R=0;R<p.length;R++)p[R]=p[R]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;let _=this._sizeLods[s],L=3*_*(s>b-or?s-b+or:0),A=4*(this._cubeSize-_);ia(t,L,A,3*_,2*_),c.setRenderTarget(t),c.render(u,Vc)}};function t_(i){let e=[],t=[],n=[],s=i,r=i-or+1+Ed.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-or?c=Ed[o-i+or-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,y=new Float32Array(x*g*f),b=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let A=0;A<f;A++){let R=A%3*2/3-1,P=A>2?0:-1,E=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];y.set(E,x*g*A),b.set(d,m*g*A);let M=[A,A,A,A,A,A];_.set(M,p*g*A)}let L=new dt;L.setAttribute("position",new Et(y,x)),L.setAttribute("uv",new Et(b,m)),L.setAttribute("faceIndex",new Et(_,p)),e.push(L),s>or&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function wd(i,e,t){let n=new sn(i,e,t);return n.texture.mapping=Xa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ia(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function n_(i,e,t){let n=new Float32Array(ws),s=new U(0,1,0);return new Ht({name:"SphericalGaussianBlur",defines:{n:ws,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Dh(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Ad(){return new Ht({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dh(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Rd(){return new Ht({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Dh(){return`

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
	`}function i_(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===ul||c===dl,h=c===dr||c===fr;if(l||h){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Mr(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new Mr(i)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function s_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Kr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function r_(i,e,t,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)e.update(d[g],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],i.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let y=f.array;x=f.version;for(let b=0,_=y.length;b<_;b+=3){let L=y[b+0],A=y[b+1],R=y[b+2];d.push(L,A,A,R,R,L)}}else if(g!==void 0){let y=g.array;x=g.version;for(let b=0,_=y.length/3-1;b<_;b+=3){let L=b+0,A=b+1,R=b+2;d.push(L,A,A,R,R,L)}}else return;let m=new(If(d)?Ea:ba)(d,1);m.version=x;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function o_(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*x[y];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function a_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function c_(i,e,t){let n=new WeakMap,s=new pt;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let E=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],b=0;f===!0&&(b=1),g===!0&&(b=2),x===!0&&(b=3);let _=a.attributes.position.count*b,L=1;_>e.maxTextureSize&&(L=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let A=new Float32Array(_*L*4*u),R=new Ma(A,_,L,u);R.type=In,R.needsUpdate=!0;let P=b*4;for(let M=0;M<u;M++){let N=m[M],X=p[M],W=y[M],V=_*L*4*M;for(let K=0;K<N.count;K++){let q=K*P;f===!0&&(s.fromBufferAttribute(N,K),A[V+q+0]=s.x,A[V+q+1]=s.y,A[V+q+2]=s.z,A[V+q+3]=0),g===!0&&(s.fromBufferAttribute(X,K),A[V+q+4]=s.x,A[V+q+5]=s.y,A[V+q+6]=s.z,A[V+q+7]=0),x===!0&&(s.fromBufferAttribute(W,K),A[V+q+8]=s.x,A[V+q+9]=s.y,A[V+q+10]=s.z,A[V+q+11]=W.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new He(_,L)},n.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function l_(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var wa=class extends Kt{constructor(e,t,n,s,r,o,a,c,l,h=cr){if(h!==cr&&h!==mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===cr&&(n=Gi),n===void 0&&h===mr&&(n=pr),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:un,this.minFilter=c!==void 0?c:un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Nf=new Kt,Cd=new wa(1,1),Uf=new Ma,Of=new Vl,Ff=new Ta,Id=[],Pd=[],Ld=new Float32Array(16),Dd=new Float32Array(9),Nd=new Float32Array(4);function wr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Id[s];if(r===void 0&&(r=new Float32Array(s),Id[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Za(i,e){let t=Pd[e];t===void 0&&(t=new Int32Array(e),Pd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function h_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function u_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2fv(this.addr,e),Xt(t,e)}}function d_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;i.uniform3fv(this.addr,e),Xt(t,e)}}function f_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4fv(this.addr,e),Xt(t,e)}}function p_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Nd.set(n),i.uniformMatrix2fv(this.addr,!1,Nd),Xt(t,n)}}function m_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Dd.set(n),i.uniformMatrix3fv(this.addr,!1,Dd),Xt(t,n)}}function g_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Ld.set(n),i.uniformMatrix4fv(this.addr,!1,Ld),Xt(t,n)}}function x_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function __(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2iv(this.addr,e),Xt(t,e)}}function y_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3iv(this.addr,e),Xt(t,e)}}function v_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4iv(this.addr,e),Xt(t,e)}}function M_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function b_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2uiv(this.addr,e),Xt(t,e)}}function E_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3uiv(this.addr,e),Xt(t,e)}}function S_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4uiv(this.addr,e),Xt(t,e)}}function T_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Cd.compareFunction=Rf,r=Cd):r=Nf,t.setTexture2D(e||r,s)}function w_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Of,s)}function A_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ff,s)}function R_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Uf,s)}function C_(i){switch(i){case 5126:return h_;case 35664:return u_;case 35665:return d_;case 35666:return f_;case 35674:return p_;case 35675:return m_;case 35676:return g_;case 5124:case 35670:return x_;case 35667:case 35671:return __;case 35668:case 35672:return y_;case 35669:case 35673:return v_;case 5125:return M_;case 36294:return b_;case 36295:return E_;case 36296:return S_;case 35678:case 36198:case 36298:case 36306:case 35682:return T_;case 35679:case 36299:case 36307:return w_;case 35680:case 36300:case 36308:case 36293:return A_;case 36289:case 36303:case 36311:case 36292:return R_}}function I_(i,e){i.uniform1fv(this.addr,e)}function P_(i,e){let t=wr(e,this.size,2);i.uniform2fv(this.addr,t)}function L_(i,e){let t=wr(e,this.size,3);i.uniform3fv(this.addr,t)}function D_(i,e){let t=wr(e,this.size,4);i.uniform4fv(this.addr,t)}function N_(i,e){let t=wr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function U_(i,e){let t=wr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function O_(i,e){let t=wr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function F_(i,e){i.uniform1iv(this.addr,e)}function B_(i,e){i.uniform2iv(this.addr,e)}function k_(i,e){i.uniform3iv(this.addr,e)}function z_(i,e){i.uniform4iv(this.addr,e)}function H_(i,e){i.uniform1uiv(this.addr,e)}function V_(i,e){i.uniform2uiv(this.addr,e)}function G_(i,e){i.uniform3uiv(this.addr,e)}function W_(i,e){i.uniform4uiv(this.addr,e)}function X_(i,e,t){let n=this.cache,s=e.length,r=Za(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Nf,r[o])}function q_(i,e,t){let n=this.cache,s=e.length,r=Za(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Of,r[o])}function Y_(i,e,t){let n=this.cache,s=e.length,r=Za(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Ff,r[o])}function $_(i,e,t){let n=this.cache,s=e.length,r=Za(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Uf,r[o])}function Z_(i){switch(i){case 5126:return I_;case 35664:return P_;case 35665:return L_;case 35666:return D_;case 35674:return N_;case 35675:return U_;case 35676:return O_;case 5124:case 35670:return F_;case 35667:case 35671:return B_;case 35668:case 35672:return k_;case 35669:case 35673:return z_;case 5125:return H_;case 36294:return V_;case 36295:return G_;case 36296:return W_;case 35678:case 36198:case 36298:case 36306:case 35682:return X_;case 35679:case 36299:case 36307:return q_;case 35680:case 36300:case 36308:case 36293:return Y_;case 36289:case 36303:case 36311:case 36292:return $_}}var Xl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=C_(t.type)}},ql=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Z_(t.type)}},Yl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Yc=/(\w+)(\])?(\[|\.)?/g;function Ud(i,e){i.seq.push(e),i.map[e.id]=e}function K_(i,e,t){let n=i.name,s=n.length;for(Yc.lastIndex=0;;){let r=Yc.exec(n),o=Yc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Ud(t,l===void 0?new Xl(a,i,e):new ql(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Yl(a),Ud(t,u)),t=u}}}var hr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);K_(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Od(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var J_=37297,j_=0;function Q_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Fd=new Qe;function ey(i){nt._getMatrix(Fd,nt.workingColorSpace,i);let e=`mat3( ${Fd.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(i)){case $a:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Bd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Q_(i.getShaderSource(e),o)}else return s}function ty(i,e){let t=ey(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ny(i,e){let t;switch(e){case yh:t="Linear";break;case vh:t="Reinhard";break;case Mh:t="Cineon";break;case go:t="ACESFilmic";break;case bh:t="AgX";break;case Eh:t="Neutral";break;case _m:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var sa=new U;function iy(){nt.getLuminanceCoefficients(sa);let i=sa.x.toFixed(4),e=sa.y.toFixed(4),t=sa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jr).join(`
`)}function ry(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function oy(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Jr(i){return i!==""}function kd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ay=/^[ \t]*#include +<([\w\d./]+)>/gm;function $l(i){return i.replace(ay,ly)}var cy=new Map;function ly(i,e){let t=tt[e];if(t===void 0){let n=cy.get(e);if(n!==void 0)t=tt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return $l(t)}var hy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hd(i){return i.replace(hy,uy)}function uy(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vd(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function dy(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===gf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===xh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===di&&(e="SHADOWMAP_TYPE_VSM"),e}function fy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case dr:case fr:e="ENVMAP_TYPE_CUBE";break;case Xa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function py(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case fr:e="ENVMAP_MODE_REFRACTION";break}return e}function my(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case _h:e="ENVMAP_BLENDING_MULTIPLY";break;case gm:e="ENVMAP_BLENDING_MIX";break;case xm:e="ENVMAP_BLENDING_ADD";break}return e}function gy(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function xy(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=dy(t),l=fy(t),h=py(t),u=my(t),d=gy(t),f=sy(t),g=ry(r),x=s.createProgram(),m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Jr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Jr).join(`
`),p.length>0&&(p+=`
`)):(m=[Vd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jr).join(`
`),p=[Vd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vi?"#define TONE_MAPPING":"",t.toneMapping!==Vi?tt.tonemapping_pars_fragment:"",t.toneMapping!==Vi?ny("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,ty("linearToOutputTexel",t.outputColorSpace),iy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Jr).join(`
`)),o=$l(o),o=kd(o,t),o=zd(o,t),a=$l(a),a=kd(a,t),a=zd(a,t),o=Hd(o),a=Hd(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===td?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===td?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=y+m+o,_=y+p+a,L=Od(s,s.VERTEX_SHADER,b),A=Od(s,s.FRAGMENT_SHADER,_);s.attachShader(x,L),s.attachShader(x,A),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(N){if(i.debug.checkShaderErrors){let X=s.getProgramInfoLog(x).trim(),W=s.getShaderInfoLog(L).trim(),V=s.getShaderInfoLog(A).trim(),K=!0,q=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,L,A);else{let ie=Bd(s,L,"vertex"),Z=Bd(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+X+`
`+ie+`
`+Z)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(W===""||V==="")&&(q=!1);q&&(N.diagnostics={runnable:K,programLog:X,vertexShader:{log:W,prefix:m},fragmentShader:{log:V,prefix:p}})}s.deleteShader(L),s.deleteShader(A),P=new hr(s,x),E=oy(s,x)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,J_)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=j_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=L,this.fragmentShader=A,this}var _y=0,Zl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Kl(e),t.set(e,n)),n}},Kl=class{constructor(e){this.id=_y++,this.code=e,this.usedTimes=0}};function yy(i,e,t,n,s,r,o){let a=new ro,c=new Zl,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,M,N,X,W){let V=X.fog,K=W.geometry,q=E.isMeshStandardMaterial?X.environment:null,ie=(E.isMeshStandardMaterial?t:e).get(E.envMap||q),Z=ie&&ie.mapping===Xa?ie.image.height:null,me=g[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));let _e=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Ce=_e!==void 0?_e.length:0,Ge=0;K.morphAttributes.position!==void 0&&(Ge=1),K.morphAttributes.normal!==void 0&&(Ge=2),K.morphAttributes.color!==void 0&&(Ge=3);let ct,te,ce,Re;if(me){let Mt=jn[me];ct=Mt.vertexShader,te=Mt.fragmentShader}else ct=E.vertexShader,te=E.fragmentShader,c.update(E),ce=c.getVertexShaderID(E),Re=c.getFragmentShaderID(E);let ge=i.getRenderTarget(),ze=i.state.buffers.depth.getReversed(),Xe=W.isInstancedMesh===!0,O=W.isBatchedMesh===!0,j=!!E.map,J=!!E.matcap,le=!!ie,I=!!E.aoMap,Ie=!!E.lightMap,xe=!!E.bumpMap,Ue=!!E.normalMap,be=!!E.displacementMap,at=!!E.emissiveMap,Pe=!!E.metalnessMap,w=!!E.roughnessMap,v=E.anisotropy>0,G=E.clearcoat>0,C=E.dispersion>0,F=E.iridescence>0,z=E.sheen>0,re=E.transmission>0,oe=v&&!!E.anisotropyMap,pe=G&&!!E.clearcoatMap,Ke=G&&!!E.clearcoatNormalMap,ae=G&&!!E.clearcoatRoughnessMap,Te=F&&!!E.iridescenceMap,Ye=F&&!!E.iridescenceThicknessMap,$e=z&&!!E.sheenColorMap,De=z&&!!E.sheenRoughnessMap,lt=!!E.specularMap,et=!!E.specularColorMap,At=!!E.specularIntensityMap,B=re&&!!E.transmissionMap,ve=re&&!!E.thicknessMap,ee=!!E.gradientMap,se=!!E.alphaMap,we=E.alphaTest>0,Ee=!!E.alphaHash,Je=!!E.extensions,Ft=Vi;E.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Ft=i.toneMapping);let on={shaderID:me,shaderType:E.type,shaderName:E.name,vertexShader:ct,fragmentShader:te,defines:E.defines,customVertexShaderID:ce,customFragmentShaderID:Re,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:O,batchingColor:O&&W._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&W.instanceColor!==null,instancingMorph:Xe&&W.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ge===null?i.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:fn,alphaToCoverage:!!E.alphaToCoverage,map:j,matcap:J,envMap:le,envMapMode:le&&ie.mapping,envMapCubeUVHeight:Z,aoMap:I,lightMap:Ie,bumpMap:xe,normalMap:Ue,displacementMap:d&&be,emissiveMap:at,normalMapObjectSpace:Ue&&E.normalMapType===Em,normalMapTangentSpace:Ue&&E.normalMapType===Ph,metalnessMap:Pe,roughnessMap:w,anisotropy:v,anisotropyMap:oe,clearcoat:G,clearcoatMap:pe,clearcoatNormalMap:Ke,clearcoatRoughnessMap:ae,dispersion:C,iridescence:F,iridescenceMap:Te,iridescenceThicknessMap:Ye,sheen:z,sheenColorMap:$e,sheenRoughnessMap:De,specularMap:lt,specularColorMap:et,specularIntensityMap:At,transmission:re,transmissionMap:B,thicknessMap:ve,gradientMap:ee,opaque:E.transparent===!1&&E.blending===ar&&E.alphaToCoverage===!1,alphaMap:se,alphaTest:we,alphaHash:Ee,combine:E.combine,mapUv:j&&x(E.map.channel),aoMapUv:I&&x(E.aoMap.channel),lightMapUv:Ie&&x(E.lightMap.channel),bumpMapUv:xe&&x(E.bumpMap.channel),normalMapUv:Ue&&x(E.normalMap.channel),displacementMapUv:be&&x(E.displacementMap.channel),emissiveMapUv:at&&x(E.emissiveMap.channel),metalnessMapUv:Pe&&x(E.metalnessMap.channel),roughnessMapUv:w&&x(E.roughnessMap.channel),anisotropyMapUv:oe&&x(E.anisotropyMap.channel),clearcoatMapUv:pe&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:Ke&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ye&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:$e&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:De&&x(E.sheenRoughnessMap.channel),specularMapUv:lt&&x(E.specularMap.channel),specularColorMapUv:et&&x(E.specularColorMap.channel),specularIntensityMapUv:At&&x(E.specularIntensityMap.channel),transmissionMapUv:B&&x(E.transmissionMap.channel),thicknessMapUv:ve&&x(E.thicknessMap.channel),alphaMapUv:se&&x(E.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Ue||v),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!K.attributes.uv&&(j||se),fog:!!V,useFog:E.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:ze,skinning:W.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:Ge,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ft,decodeVideoTexture:j&&E.map.isVideoTexture===!0&&nt.getTransfer(E.map.colorSpace)===yt,decodeVideoTextureEmissive:at&&E.emissiveMap.isVideoTexture===!0&&nt.getTransfer(E.emissiveMap.colorSpace)===yt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===$t,flipSided:E.side===tn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Je&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Je&&E.extensions.multiDraw===!0||O)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return on.vertexUv1s=l.has(1),on.vertexUv2s=l.has(2),on.vertexUv3s=l.has(3),l.clear(),on}function p(E){let M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(let N in E.defines)M.push(N),M.push(E.defines[N]);return E.isRawShaderMaterial===!1&&(y(M,E),b(M,E),M.push(i.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function y(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function b(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),E.push(a.mask)}function _(E){let M=g[E.type],N;if(M){let X=jn[M];N=ns.clone(X.uniforms)}else N=E.uniforms;return N}function L(E,M){let N;for(let X=0,W=h.length;X<W;X++){let V=h[X];if(V.cacheKey===M){N=V,++N.usedTimes;break}}return N===void 0&&(N=new xy(i,M,E,r),h.push(N)),N}function A(E){if(--E.usedTimes===0){let M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function R(E){c.remove(E)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:L,releaseProgram:A,releaseShaderCache:R,programs:h,dispose:P}}function vy(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function My(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Gd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Wd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,f,g,x,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),e++,p}function a(u,d,f,g,x,m){let p=o(u,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(u,d,f,g,x,m){let p=o(u,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||My),n.length>1&&n.sort(d||Gd),s.length>1&&s.sort(d||Gd)}function h(){for(let u=e,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function by(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Wd,i.set(n,[o])):s>=r.length?(o=new Wd,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ey(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Me};break;case"SpotLight":t={position:new U,direction:new U,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":t={color:new Me,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function Sy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Ty=0;function wy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ay(i){let e=new Ey,t=Sy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);let s=new U,r=new qe,o=new qe;function a(l){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,y=0,b=0,_=0,L=0,A=0,R=0;l.sort(wy);for(let E=0,M=l.length;E<M;E++){let N=l[E],X=N.color,W=N.intensity,V=N.distance,K=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=X.r*W,u+=X.g*W,d+=X.b*W;else if(N.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(N.sh.coefficients[q],W);R++}else if(N.isDirectionalLight){let q=e.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let ie=N.shadow,Z=t.get(N);Z.shadowIntensity=ie.intensity,Z.shadowBias=ie.bias,Z.shadowNormalBias=ie.normalBias,Z.shadowRadius=ie.radius,Z.shadowMapSize=ie.mapSize,n.directionalShadow[f]=Z,n.directionalShadowMap[f]=K,n.directionalShadowMatrix[f]=N.shadow.matrix,y++}n.directional[f]=q,f++}else if(N.isSpotLight){let q=e.get(N);q.position.setFromMatrixPosition(N.matrixWorld),q.color.copy(X).multiplyScalar(W),q.distance=V,q.coneCos=Math.cos(N.angle),q.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),q.decay=N.decay,n.spot[x]=q;let ie=N.shadow;if(N.map&&(n.spotLightMap[L]=N.map,L++,ie.updateMatrices(N),N.castShadow&&A++),n.spotLightMatrix[x]=ie.matrix,N.castShadow){let Z=t.get(N);Z.shadowIntensity=ie.intensity,Z.shadowBias=ie.bias,Z.shadowNormalBias=ie.normalBias,Z.shadowRadius=ie.radius,Z.shadowMapSize=ie.mapSize,n.spotShadow[x]=Z,n.spotShadowMap[x]=K,_++}x++}else if(N.isRectAreaLight){let q=e.get(N);q.color.copy(X).multiplyScalar(W),q.halfWidth.set(N.width*.5,0,0),q.halfHeight.set(0,N.height*.5,0),n.rectArea[m]=q,m++}else if(N.isPointLight){let q=e.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),q.distance=N.distance,q.decay=N.decay,N.castShadow){let ie=N.shadow,Z=t.get(N);Z.shadowIntensity=ie.intensity,Z.shadowBias=ie.bias,Z.shadowNormalBias=ie.normalBias,Z.shadowRadius=ie.radius,Z.shadowMapSize=ie.mapSize,Z.shadowCameraNear=ie.camera.near,Z.shadowCameraFar=ie.camera.far,n.pointShadow[g]=Z,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=N.shadow.matrix,b++}n.point[g]=q,g++}else if(N.isHemisphereLight){let q=e.get(N);q.skyColor.copy(N.color).multiplyScalar(W),q.groundColor.copy(N.groundColor).multiplyScalar(W),n.hemi[p]=q,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==y||P.numPointShadows!==b||P.numSpotShadows!==_||P.numSpotMaps!==L||P.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=_+L-A,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,P.directionalLength=f,P.pointLength=g,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=y,P.numPointShadows=b,P.numSpotShadows=_,P.numSpotMaps=L,P.numLightProbes=R,n.version=Ty++)}function c(l,h){let u=0,d=0,f=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){let b=l[p];if(b.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(b.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(b.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(b.width*.5,0,0),_.halfHeight.set(0,b.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(b.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function Xd(i){let e=new Ay(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Ry(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Xd(i),e.set(s,[a])):r>=o.length?(a=new Xd(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Jl=class extends Sn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Mm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},jl=class extends Sn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Cy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Iy=`uniform sampler2D shadow_pass;
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
}`;function Py(i,e,t){let n=new vr,s=new He,r=new He,o=new pt,a=new Jl({depthPacking:bm}),c=new jl,l={},h=t.maxTextureSize,u={[ti]:tn,[tn]:ti,[$t]:$t},d=new Ht({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:Cy,fragmentShader:Iy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new dt;g.setAttribute("position",new Et(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ne(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gf;let p=this.type;this.render=function(A,R,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let E=i.getRenderTarget(),M=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),X=i.state;X.setBlending(ei),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);let W=p!==di&&this.type===di,V=p===di&&this.type!==di;for(let K=0,q=A.length;K<q;K++){let ie=A[K],Z=ie.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let me=Z.getFrameExtents();if(s.multiply(me),r.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/me.x),s.x=r.x*me.x,Z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/me.y),s.y=r.y*me.y,Z.mapSize.y=r.y)),Z.map===null||W===!0||V===!0){let Ce=this.type!==di?{minFilter:un,magFilter:un}:{};Z.map!==null&&Z.map.dispose(),Z.map=new sn(s.x,s.y,Ce),Z.map.texture.name=ie.name+".shadowMap",Z.camera.updateProjectionMatrix()}i.setRenderTarget(Z.map),i.clear();let _e=Z.getViewportCount();for(let Ce=0;Ce<_e;Ce++){let Ge=Z.getViewport(Ce);o.set(r.x*Ge.x,r.y*Ge.y,r.x*Ge.z,r.y*Ge.w),X.viewport(o),Z.updateMatrices(ie,Ce),n=Z.getFrustum(),_(R,P,Z.camera,ie,this.type)}Z.isPointLightShadow!==!0&&this.type===di&&y(Z,P),Z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,M,N)};function y(A,R){let P=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new sn(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(R,null,P,d,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(R,null,P,f,x,null)}function b(A,R,P,E){let M=null,N=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(N!==void 0)M=N;else if(M=P.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let X=M.uuid,W=R.uuid,V=l[X];V===void 0&&(V={},l[X]=V);let K=V[W];K===void 0&&(K=M.clone(),V[W]=K,R.addEventListener("dispose",L)),M=K}if(M.visible=R.visible,M.wireframe=R.wireframe,E===di?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:u[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let X=i.properties.get(M);X.light=P}return M}function _(A,R,P,E,M){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===di)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);let W=e.update(A),V=A.material;if(Array.isArray(V)){let K=W.groups;for(let q=0,ie=K.length;q<ie;q++){let Z=K[q],me=V[Z.materialIndex];if(me&&me.visible){let _e=b(A,me,E,M);A.onBeforeShadow(i,A,R,P,W,_e,Z),i.renderBufferDirect(P,null,W,_e,A,Z),A.onAfterShadow(i,A,R,P,W,_e,Z)}}}else if(V.visible){let K=b(A,V,E,M);A.onBeforeShadow(i,A,R,P,W,K,null),i.renderBufferDirect(P,null,W,K,A,null),A.onAfterShadow(i,A,R,P,W,K,null)}}let X=A.children;for(let W=0,V=X.length;W<V;W++)_(X[W],R,P,E,M)}function L(A){A.target.removeEventListener("dispose",L);for(let P in l){let E=l[P],M=A.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}var Ly={[sl]:rl,[ol]:ll,[al]:hl,[ur]:cl,[rl]:sl,[ll]:ol,[hl]:al,[cl]:ur};function Dy(i,e){function t(){let B=!1,ve=new pt,ee=null,se=new pt(0,0,0,0);return{setMask:function(we){ee!==we&&!B&&(i.colorMask(we,we,we,we),ee=we)},setLocked:function(we){B=we},setClear:function(we,Ee,Je,Ft,on){on===!0&&(we*=Ft,Ee*=Ft,Je*=Ft),ve.set(we,Ee,Je,Ft),se.equals(ve)===!1&&(i.clearColor(we,Ee,Je,Ft),se.copy(ve))},reset:function(){B=!1,ee=null,se.set(-1,0,0,0)}}}function n(){let B=!1,ve=!1,ee=null,se=null,we=null;return{setReversed:function(Ee){if(ve!==Ee){let Je=e.get("EXT_clip_control");ve?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT);let Ft=we;we=null,this.setClear(Ft)}ve=Ee},getReversed:function(){return ve},setTest:function(Ee){Ee?ge(i.DEPTH_TEST):ze(i.DEPTH_TEST)},setMask:function(Ee){ee!==Ee&&!B&&(i.depthMask(Ee),ee=Ee)},setFunc:function(Ee){if(ve&&(Ee=Ly[Ee]),se!==Ee){switch(Ee){case sl:i.depthFunc(i.NEVER);break;case rl:i.depthFunc(i.ALWAYS);break;case ol:i.depthFunc(i.LESS);break;case ur:i.depthFunc(i.LEQUAL);break;case al:i.depthFunc(i.EQUAL);break;case cl:i.depthFunc(i.GEQUAL);break;case ll:i.depthFunc(i.GREATER);break;case hl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}se=Ee}},setLocked:function(Ee){B=Ee},setClear:function(Ee){we!==Ee&&(ve&&(Ee=1-Ee),i.clearDepth(Ee),we=Ee)},reset:function(){B=!1,ee=null,se=null,we=null,ve=!1}}}function s(){let B=!1,ve=null,ee=null,se=null,we=null,Ee=null,Je=null,Ft=null,on=null;return{setTest:function(Mt){B||(Mt?ge(i.STENCIL_TEST):ze(i.STENCIL_TEST))},setMask:function(Mt){ve!==Mt&&!B&&(i.stencilMask(Mt),ve=Mt)},setFunc:function(Mt,zn,si){(ee!==Mt||se!==zn||we!==si)&&(i.stencilFunc(Mt,zn,si),ee=Mt,se=zn,we=si)},setOp:function(Mt,zn,si){(Ee!==Mt||Je!==zn||Ft!==si)&&(i.stencilOp(Mt,zn,si),Ee=Mt,Je=zn,Ft=si)},setLocked:function(Mt){B=Mt},setClear:function(Mt){on!==Mt&&(i.clearStencil(Mt),on=Mt)},reset:function(){B=!1,ve=null,ee=null,se=null,we=null,Ee=null,Je=null,Ft=null,on=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,y=null,b=null,_=null,L=null,A=null,R=new Me(0,0,0),P=0,E=!1,M=null,N=null,X=null,W=null,V=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,ie=0,Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(Z)[1]),q=ie>=1):Z.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),q=ie>=2);let me=null,_e={},Ce=i.getParameter(i.SCISSOR_BOX),Ge=i.getParameter(i.VIEWPORT),ct=new pt().fromArray(Ce),te=new pt().fromArray(Ge);function ce(B,ve,ee,se){let we=new Uint8Array(4),Ee=i.createTexture();i.bindTexture(B,Ee),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Je=0;Je<ee;Je++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(ve,0,i.RGBA,1,1,se,0,i.RGBA,i.UNSIGNED_BYTE,we):i.texImage2D(ve+Je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,we);return Ee}let Re={};Re[i.TEXTURE_2D]=ce(i.TEXTURE_2D,i.TEXTURE_2D,1),Re[i.TEXTURE_CUBE_MAP]=ce(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Re[i.TEXTURE_2D_ARRAY]=ce(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Re[i.TEXTURE_3D]=ce(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ge(i.DEPTH_TEST),o.setFunc(ur),xe(!1),Ue(Yu),ge(i.CULL_FACE),I(ei);function ge(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function ze(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function Xe(B,ve){return u[B]!==ve?(i.bindFramebuffer(B,ve),u[B]=ve,B===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ve),B===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ve),!0):!1}function O(B,ve){let ee=f,se=!1;if(B){ee=d.get(ve),ee===void 0&&(ee=[],d.set(ve,ee));let we=B.textures;if(ee.length!==we.length||ee[0]!==i.COLOR_ATTACHMENT0){for(let Ee=0,Je=we.length;Ee<Je;Ee++)ee[Ee]=i.COLOR_ATTACHMENT0+Ee;ee.length=we.length,se=!0}}else ee[0]!==i.BACK&&(ee[0]=i.BACK,se=!0);se&&i.drawBuffers(ee)}function j(B){return g!==B?(i.useProgram(B),g=B,!0):!1}let J={[Ss]:i.FUNC_ADD,[Qp]:i.FUNC_SUBTRACT,[em]:i.FUNC_REVERSE_SUBTRACT};J[tm]=i.MIN,J[nm]=i.MAX;let le={[im]:i.ZERO,[sm]:i.ONE,[rm]:i.SRC_COLOR,[nl]:i.SRC_ALPHA,[um]:i.SRC_ALPHA_SATURATE,[lm]:i.DST_COLOR,[am]:i.DST_ALPHA,[om]:i.ONE_MINUS_SRC_COLOR,[il]:i.ONE_MINUS_SRC_ALPHA,[hm]:i.ONE_MINUS_DST_COLOR,[cm]:i.ONE_MINUS_DST_ALPHA,[dm]:i.CONSTANT_COLOR,[fm]:i.ONE_MINUS_CONSTANT_COLOR,[pm]:i.CONSTANT_ALPHA,[mm]:i.ONE_MINUS_CONSTANT_ALPHA};function I(B,ve,ee,se,we,Ee,Je,Ft,on,Mt){if(B===ei){x===!0&&(ze(i.BLEND),x=!1);return}if(x===!1&&(ge(i.BLEND),x=!0),B!==jp){if(B!==m||Mt!==E){if((p!==Ss||_!==Ss)&&(i.blendEquation(i.FUNC_ADD),p=Ss,_=Ss),Mt)switch(B){case ar:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dn:i.blendFunc(i.ONE,i.ONE);break;case $u:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case ar:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case $u:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}y=null,b=null,L=null,A=null,R.set(0,0,0),P=0,m=B,E=Mt}return}we=we||ve,Ee=Ee||ee,Je=Je||se,(ve!==p||we!==_)&&(i.blendEquationSeparate(J[ve],J[we]),p=ve,_=we),(ee!==y||se!==b||Ee!==L||Je!==A)&&(i.blendFuncSeparate(le[ee],le[se],le[Ee],le[Je]),y=ee,b=se,L=Ee,A=Je),(Ft.equals(R)===!1||on!==P)&&(i.blendColor(Ft.r,Ft.g,Ft.b,on),R.copy(Ft),P=on),m=B,E=!1}function Ie(B,ve){B.side===$t?ze(i.CULL_FACE):ge(i.CULL_FACE);let ee=B.side===tn;ve&&(ee=!ee),xe(ee),B.blending===ar&&B.transparent===!1?I(ei):I(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);let se=B.stencilWrite;a.setTest(se),se&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),at(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ge(i.SAMPLE_ALPHA_TO_COVERAGE):ze(i.SAMPLE_ALPHA_TO_COVERAGE)}function xe(B){M!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),M=B)}function Ue(B){B!==Kp?(ge(i.CULL_FACE),B!==N&&(B===Yu?i.cullFace(i.BACK):B===Jp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ze(i.CULL_FACE),N=B}function be(B){B!==X&&(q&&i.lineWidth(B),X=B)}function at(B,ve,ee){B?(ge(i.POLYGON_OFFSET_FILL),(W!==ve||V!==ee)&&(i.polygonOffset(ve,ee),W=ve,V=ee)):ze(i.POLYGON_OFFSET_FILL)}function Pe(B){B?ge(i.SCISSOR_TEST):ze(i.SCISSOR_TEST)}function w(B){B===void 0&&(B=i.TEXTURE0+K-1),me!==B&&(i.activeTexture(B),me=B)}function v(B,ve,ee){ee===void 0&&(me===null?ee=i.TEXTURE0+K-1:ee=me);let se=_e[ee];se===void 0&&(se={type:void 0,texture:void 0},_e[ee]=se),(se.type!==B||se.texture!==ve)&&(me!==ee&&(i.activeTexture(ee),me=ee),i.bindTexture(B,ve||Re[B]),se.type=B,se.texture=ve)}function G(){let B=_e[me];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function C(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function F(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function z(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function re(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function oe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ke(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ae(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Te(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ye(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function $e(B){ct.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),ct.copy(B))}function De(B){te.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),te.copy(B))}function lt(B,ve){let ee=l.get(ve);ee===void 0&&(ee=new WeakMap,l.set(ve,ee));let se=ee.get(B);se===void 0&&(se=i.getUniformBlockIndex(ve,B.name),ee.set(B,se))}function et(B,ve){let se=l.get(ve).get(B);c.get(ve)!==se&&(i.uniformBlockBinding(ve,se,B.__bindingPointIndex),c.set(ve,se))}function At(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},me=null,_e={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,y=null,b=null,_=null,L=null,A=null,R=new Me(0,0,0),P=0,E=!1,M=null,N=null,X=null,W=null,V=null,ct.set(0,0,i.canvas.width,i.canvas.height),te.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ge,disable:ze,bindFramebuffer:Xe,drawBuffers:O,useProgram:j,setBlending:I,setMaterial:Ie,setFlipSided:xe,setCullFace:Ue,setLineWidth:be,setPolygonOffset:at,setScissorTest:Pe,activeTexture:w,bindTexture:v,unbindTexture:G,compressedTexImage2D:C,compressedTexImage3D:F,texImage2D:Te,texImage3D:Ye,updateUBOMapping:lt,uniformBlockBinding:et,texStorage2D:Ke,texStorage3D:ae,texSubImage2D:z,texSubImage3D:re,compressedTexSubImage2D:oe,compressedTexSubImage3D:pe,scissor:$e,viewport:De,reset:At}}function qd(i,e,t,n){let s=Ny(n);switch(t){case Mf:return i*e;case Ef:return i*e;case Sf:return i*e*2;case Rh:return i*e/s.components*s.byteLength;case qa:return i*e/s.components*s.byteLength;case Tf:return i*e*2/s.components*s.byteLength;case Ch:return i*e*2/s.components*s.byteLength;case bf:return i*e*3/s.components*s.byteLength;case bn:return i*e*4/s.components*s.byteLength;case Ih:return i*e*4/s.components*s.byteLength;case pa:case ma:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ga:case xa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pl:case gl:return Math.max(i,16)*Math.max(e,8)/4;case fl:case ml:return Math.max(i,8)*Math.max(e,8)/2;case xl:case _l:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case yl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case vl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ml:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case bl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case El:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Sl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Tl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case wl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Al:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Rl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Cl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Il:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Pl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ll:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Dl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case _a:case Nl:case Ul:return Math.ceil(i/4)*Math.ceil(e/4)*16;case wf:case Ol:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Fl:case Bl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ny(i){switch(i){case xi:case _f:return{byteLength:1,components:1};case io:case yf:case Ln:return{byteLength:2,components:1};case wh:case Ah:return{byteLength:2,components:4};case Gi:case Th:case In:return{byteLength:4,components:1};case vf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Uy(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new He,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,v){return f?new OffscreenCanvas(w,v):so("canvas")}function x(w,v,G){let C=1,F=Pe(w);if((F.width>G||F.height>G)&&(C=G/Math.max(F.width,F.height)),C<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let z=Math.floor(C*F.width),re=Math.floor(C*F.height);u===void 0&&(u=g(z,re));let oe=v?g(z,re):u;return oe.width=z,oe.height=re,oe.getContext("2d").drawImage(w,0,0,z,re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+F.width+"x"+F.height+") to ("+z+"x"+re+")."),oe}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+F.width+"x"+F.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){i.generateMipmap(w)}function y(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(w,v,G,C,F=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let z=v;if(v===i.RED&&(G===i.FLOAT&&(z=i.R32F),G===i.HALF_FLOAT&&(z=i.R16F),G===i.UNSIGNED_BYTE&&(z=i.R8)),v===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(z=i.R8UI),G===i.UNSIGNED_SHORT&&(z=i.R16UI),G===i.UNSIGNED_INT&&(z=i.R32UI),G===i.BYTE&&(z=i.R8I),G===i.SHORT&&(z=i.R16I),G===i.INT&&(z=i.R32I)),v===i.RG&&(G===i.FLOAT&&(z=i.RG32F),G===i.HALF_FLOAT&&(z=i.RG16F),G===i.UNSIGNED_BYTE&&(z=i.RG8)),v===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(z=i.RG8UI),G===i.UNSIGNED_SHORT&&(z=i.RG16UI),G===i.UNSIGNED_INT&&(z=i.RG32UI),G===i.BYTE&&(z=i.RG8I),G===i.SHORT&&(z=i.RG16I),G===i.INT&&(z=i.RG32I)),v===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(z=i.RGB8UI),G===i.UNSIGNED_SHORT&&(z=i.RGB16UI),G===i.UNSIGNED_INT&&(z=i.RGB32UI),G===i.BYTE&&(z=i.RGB8I),G===i.SHORT&&(z=i.RGB16I),G===i.INT&&(z=i.RGB32I)),v===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(z=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(z=i.RGBA16UI),G===i.UNSIGNED_INT&&(z=i.RGBA32UI),G===i.BYTE&&(z=i.RGBA8I),G===i.SHORT&&(z=i.RGBA16I),G===i.INT&&(z=i.RGBA32I)),v===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(z=i.RGB9_E5),v===i.RGBA){let re=F?$a:nt.getTransfer(C);G===i.FLOAT&&(z=i.RGBA32F),G===i.HALF_FLOAT&&(z=i.RGBA16F),G===i.UNSIGNED_BYTE&&(z=re===yt?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(z=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(z=i.RGB5_A1)}return(z===i.R16F||z===i.R32F||z===i.RG16F||z===i.RG32F||z===i.RGBA16F||z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),z}function _(w,v){let G;return w?v===null||v===Gi||v===pr?G=i.DEPTH24_STENCIL8:v===In?G=i.DEPTH32F_STENCIL8:v===io&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Gi||v===pr?G=i.DEPTH_COMPONENT24:v===In?G=i.DEPTH_COMPONENT32F:v===io&&(G=i.DEPTH_COMPONENT16),G}function L(w,v){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==un&&w.minFilter!==Mn?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function A(w){let v=w.target;v.removeEventListener("dispose",A),P(v),v.isVideoTexture&&h.delete(v)}function R(w){let v=w.target;v.removeEventListener("dispose",R),M(v)}function P(w){let v=n.get(w);if(v.__webglInit===void 0)return;let G=w.source,C=d.get(G);if(C){let F=C[v.__cacheKey];F.usedTimes--,F.usedTimes===0&&E(w),Object.keys(C).length===0&&d.delete(G)}n.remove(w)}function E(w){let v=n.get(w);i.deleteTexture(v.__webglTexture);let G=w.source,C=d.get(G);delete C[v.__cacheKey],o.memory.textures--}function M(w){let v=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let C=0;C<6;C++){if(Array.isArray(v.__webglFramebuffer[C]))for(let F=0;F<v.__webglFramebuffer[C].length;F++)i.deleteFramebuffer(v.__webglFramebuffer[C][F]);else i.deleteFramebuffer(v.__webglFramebuffer[C]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[C])}else{if(Array.isArray(v.__webglFramebuffer))for(let C=0;C<v.__webglFramebuffer.length;C++)i.deleteFramebuffer(v.__webglFramebuffer[C]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let C=0;C<v.__webglColorRenderbuffer.length;C++)v.__webglColorRenderbuffer[C]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[C]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let G=w.textures;for(let C=0,F=G.length;C<F;C++){let z=n.get(G[C]);z.__webglTexture&&(i.deleteTexture(z.__webglTexture),o.memory.textures--),n.remove(G[C])}n.remove(w)}let N=0;function X(){N=0}function W(){let w=N;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),N+=1,w}function V(w){let v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function K(w,v){let G=n.get(w);if(w.isVideoTexture&&be(w),w.isRenderTargetTexture===!1&&w.version>0&&G.__version!==w.version){let C=w.image;if(C===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(C.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(G,w,v);return}}t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+v)}function q(w,v){let G=n.get(w);if(w.version>0&&G.__version!==w.version){te(G,w,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+v)}function ie(w,v){let G=n.get(w);if(w.version>0&&G.__version!==w.version){te(G,w,v);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+v)}function Z(w,v){let G=n.get(w);if(w.version>0&&G.__version!==w.version){ce(G,w,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+v)}let me={[gi]:i.REPEAT,[vn]:i.CLAMP_TO_EDGE,[no]:i.MIRRORED_REPEAT},_e={[un]:i.NEAREST,[Sh]:i.NEAREST_MIPMAP_NEAREST,[rr]:i.NEAREST_MIPMAP_LINEAR,[Mn]:i.LINEAR,[jr]:i.LINEAR_MIPMAP_NEAREST,[Qn]:i.LINEAR_MIPMAP_LINEAR},Ce={[Sm]:i.NEVER,[Im]:i.ALWAYS,[Tm]:i.LESS,[Rf]:i.LEQUAL,[wm]:i.EQUAL,[Cm]:i.GEQUAL,[Am]:i.GREATER,[Rm]:i.NOTEQUAL};function Ge(w,v){if(v.type===In&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Mn||v.magFilter===jr||v.magFilter===rr||v.magFilter===Qn||v.minFilter===Mn||v.minFilter===jr||v.minFilter===rr||v.minFilter===Qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,me[v.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,me[v.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,me[v.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,_e[v.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,_e[v.minFilter]),v.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Ce[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===un||v.minFilter!==rr&&v.minFilter!==Qn||v.type===In&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ct(w,v){let G=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",A));let C=v.source,F=d.get(C);F===void 0&&(F={},d.set(C,F));let z=V(v);if(z!==w.__cacheKey){F[z]===void 0&&(F[z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),F[z].usedTimes++;let re=F[w.__cacheKey];re!==void 0&&(F[w.__cacheKey].usedTimes--,re.usedTimes===0&&E(v)),w.__cacheKey=z,w.__webglTexture=F[z].texture}return G}function te(w,v,G){let C=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(C=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(C=i.TEXTURE_3D);let F=ct(w,v),z=v.source;t.bindTexture(C,w.__webglTexture,i.TEXTURE0+G);let re=n.get(z);if(z.version!==re.__version||F===!0){t.activeTexture(i.TEXTURE0+G);let oe=nt.getPrimaries(nt.workingColorSpace),pe=v.colorSpace===zi?null:nt.getPrimaries(v.colorSpace),Ke=v.colorSpace===zi||oe===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let ae=x(v.image,!1,s.maxTextureSize);ae=at(v,ae);let Te=r.convert(v.format,v.colorSpace),Ye=r.convert(v.type),$e=b(v.internalFormat,Te,Ye,v.colorSpace,v.isVideoTexture);Ge(C,v);let De,lt=v.mipmaps,et=v.isVideoTexture!==!0,At=re.__version===void 0||F===!0,B=z.dataReady,ve=L(v,ae);if(v.isDepthTexture)$e=_(v.format===mr,v.type),At&&(et?t.texStorage2D(i.TEXTURE_2D,1,$e,ae.width,ae.height):t.texImage2D(i.TEXTURE_2D,0,$e,ae.width,ae.height,0,Te,Ye,null));else if(v.isDataTexture)if(lt.length>0){et&&At&&t.texStorage2D(i.TEXTURE_2D,ve,$e,lt[0].width,lt[0].height);for(let ee=0,se=lt.length;ee<se;ee++)De=lt[ee],et?B&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,De.width,De.height,Te,Ye,De.data):t.texImage2D(i.TEXTURE_2D,ee,$e,De.width,De.height,0,Te,Ye,De.data);v.generateMipmaps=!1}else et?(At&&t.texStorage2D(i.TEXTURE_2D,ve,$e,ae.width,ae.height),B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae.width,ae.height,Te,Ye,ae.data)):t.texImage2D(i.TEXTURE_2D,0,$e,ae.width,ae.height,0,Te,Ye,ae.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){et&&At&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,$e,lt[0].width,lt[0].height,ae.depth);for(let ee=0,se=lt.length;ee<se;ee++)if(De=lt[ee],v.format!==bn)if(Te!==null)if(et){if(B)if(v.layerUpdates.size>0){let we=qd(De.width,De.height,v.format,v.type);for(let Ee of v.layerUpdates){let Je=De.data.subarray(Ee*we/De.data.BYTES_PER_ELEMENT,(Ee+1)*we/De.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,Ee,De.width,De.height,1,Te,Je)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,De.width,De.height,ae.depth,Te,De.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ee,$e,De.width,De.height,ae.depth,0,De.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?B&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,De.width,De.height,ae.depth,Te,Ye,De.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ee,$e,De.width,De.height,ae.depth,0,Te,Ye,De.data)}else{et&&At&&t.texStorage2D(i.TEXTURE_2D,ve,$e,lt[0].width,lt[0].height);for(let ee=0,se=lt.length;ee<se;ee++)De=lt[ee],v.format!==bn?Te!==null?et?B&&t.compressedTexSubImage2D(i.TEXTURE_2D,ee,0,0,De.width,De.height,Te,De.data):t.compressedTexImage2D(i.TEXTURE_2D,ee,$e,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?B&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,De.width,De.height,Te,Ye,De.data):t.texImage2D(i.TEXTURE_2D,ee,$e,De.width,De.height,0,Te,Ye,De.data)}else if(v.isDataArrayTexture)if(et){if(At&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,$e,ae.width,ae.height,ae.depth),B)if(v.layerUpdates.size>0){let ee=qd(ae.width,ae.height,v.format,v.type);for(let se of v.layerUpdates){let we=ae.data.subarray(se*ee/ae.data.BYTES_PER_ELEMENT,(se+1)*ee/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,se,ae.width,ae.height,1,Te,Ye,we)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Te,Ye,ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,$e,ae.width,ae.height,ae.depth,0,Te,Ye,ae.data);else if(v.isData3DTexture)et?(At&&t.texStorage3D(i.TEXTURE_3D,ve,$e,ae.width,ae.height,ae.depth),B&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Te,Ye,ae.data)):t.texImage3D(i.TEXTURE_3D,0,$e,ae.width,ae.height,ae.depth,0,Te,Ye,ae.data);else if(v.isFramebufferTexture){if(At)if(et)t.texStorage2D(i.TEXTURE_2D,ve,$e,ae.width,ae.height);else{let ee=ae.width,se=ae.height;for(let we=0;we<ve;we++)t.texImage2D(i.TEXTURE_2D,we,$e,ee,se,0,Te,Ye,null),ee>>=1,se>>=1}}else if(lt.length>0){if(et&&At){let ee=Pe(lt[0]);t.texStorage2D(i.TEXTURE_2D,ve,$e,ee.width,ee.height)}for(let ee=0,se=lt.length;ee<se;ee++)De=lt[ee],et?B&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,Te,Ye,De):t.texImage2D(i.TEXTURE_2D,ee,$e,Te,Ye,De);v.generateMipmaps=!1}else if(et){if(At){let ee=Pe(ae);t.texStorage2D(i.TEXTURE_2D,ve,$e,ee.width,ee.height)}B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Te,Ye,ae)}else t.texImage2D(i.TEXTURE_2D,0,$e,Te,Ye,ae);m(v)&&p(C),re.__version=z.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function ce(w,v,G){if(v.image.length!==6)return;let C=ct(w,v),F=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+G);let z=n.get(F);if(F.version!==z.__version||C===!0){t.activeTexture(i.TEXTURE0+G);let re=nt.getPrimaries(nt.workingColorSpace),oe=v.colorSpace===zi?null:nt.getPrimaries(v.colorSpace),pe=v.colorSpace===zi||re===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let Ke=v.isCompressedTexture||v.image[0].isCompressedTexture,ae=v.image[0]&&v.image[0].isDataTexture,Te=[];for(let se=0;se<6;se++)!Ke&&!ae?Te[se]=x(v.image[se],!0,s.maxCubemapSize):Te[se]=ae?v.image[se].image:v.image[se],Te[se]=at(v,Te[se]);let Ye=Te[0],$e=r.convert(v.format,v.colorSpace),De=r.convert(v.type),lt=b(v.internalFormat,$e,De,v.colorSpace),et=v.isVideoTexture!==!0,At=z.__version===void 0||C===!0,B=F.dataReady,ve=L(v,Ye);Ge(i.TEXTURE_CUBE_MAP,v);let ee;if(Ke){et&&At&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,lt,Ye.width,Ye.height);for(let se=0;se<6;se++){ee=Te[se].mipmaps;for(let we=0;we<ee.length;we++){let Ee=ee[we];v.format!==bn?$e!==null?et?B&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,we,0,0,Ee.width,Ee.height,$e,Ee.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,we,lt,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):et?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,we,0,0,Ee.width,Ee.height,$e,De,Ee.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,we,lt,Ee.width,Ee.height,0,$e,De,Ee.data)}}}else{if(ee=v.mipmaps,et&&At){ee.length>0&&ve++;let se=Pe(Te[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,lt,se.width,se.height)}for(let se=0;se<6;se++)if(ae){et?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Te[se].width,Te[se].height,$e,De,Te[se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,lt,Te[se].width,Te[se].height,0,$e,De,Te[se].data);for(let we=0;we<ee.length;we++){let Je=ee[we].image[se].image;et?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,we+1,0,0,Je.width,Je.height,$e,De,Je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,we+1,lt,Je.width,Je.height,0,$e,De,Je.data)}}else{et?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,$e,De,Te[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,lt,$e,De,Te[se]);for(let we=0;we<ee.length;we++){let Ee=ee[we];et?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,we+1,0,0,$e,De,Ee.image[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,we+1,lt,$e,De,Ee.image[se])}}}m(v)&&p(i.TEXTURE_CUBE_MAP),z.__version=F.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function Re(w,v,G,C,F,z){let re=r.convert(G.format,G.colorSpace),oe=r.convert(G.type),pe=b(G.internalFormat,re,oe,G.colorSpace),Ke=n.get(v),ae=n.get(G);if(ae.__renderTarget=v,!Ke.__hasExternalTextures){let Te=Math.max(1,v.width>>z),Ye=Math.max(1,v.height>>z);F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?t.texImage3D(F,z,pe,Te,Ye,v.depth,0,re,oe,null):t.texImage2D(F,z,pe,Te,Ye,0,re,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),Ue(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,C,F,ae.__webglTexture,0,xe(v)):(F===i.TEXTURE_2D||F>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&F<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,C,F,ae.__webglTexture,z),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ge(w,v,G){if(i.bindRenderbuffer(i.RENDERBUFFER,w),v.depthBuffer){let C=v.depthTexture,F=C&&C.isDepthTexture?C.type:null,z=_(v.stencilBuffer,F),re=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=xe(v);Ue(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,z,v.width,v.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,z,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,z,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,w)}else{let C=v.textures;for(let F=0;F<C.length;F++){let z=C[F],re=r.convert(z.format,z.colorSpace),oe=r.convert(z.type),pe=b(z.internalFormat,re,oe,z.colorSpace),Ke=xe(v);G&&Ue(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ke,pe,v.width,v.height):Ue(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ke,pe,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,pe,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ze(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let C=n.get(v.depthTexture);C.__renderTarget=v,(!C.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),K(v.depthTexture,0);let F=C.__webglTexture,z=xe(v);if(v.depthTexture.format===cr)Ue(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,F,0,z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,F,0);else if(v.depthTexture.format===mr)Ue(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,F,0,z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,F,0);else throw new Error("Unknown depthTexture format")}function Xe(w){let v=n.get(w),G=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){let C=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),C){let F=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,C.removeEventListener("dispose",F)};C.addEventListener("dispose",F),v.__depthDisposeCallback=F}v.__boundDepthTexture=C}if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ze(v.__webglFramebuffer,w)}else if(G){v.__webglDepthbuffer=[];for(let C=0;C<6;C++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[C]),v.__webglDepthbuffer[C]===void 0)v.__webglDepthbuffer[C]=i.createRenderbuffer(),ge(v.__webglDepthbuffer[C],w,!1);else{let F=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,z=v.__webglDepthbuffer[C];i.bindRenderbuffer(i.RENDERBUFFER,z),i.framebufferRenderbuffer(i.FRAMEBUFFER,F,i.RENDERBUFFER,z)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),ge(v.__webglDepthbuffer,w,!1);else{let C=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,F=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,F),i.framebufferRenderbuffer(i.FRAMEBUFFER,C,i.RENDERBUFFER,F)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function O(w,v,G){let C=n.get(w);v!==void 0&&Re(C.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Xe(w)}function j(w){let v=w.texture,G=n.get(w),C=n.get(v);w.addEventListener("dispose",R);let F=w.textures,z=w.isWebGLCubeRenderTarget===!0,re=F.length>1;if(re||(C.__webglTexture===void 0&&(C.__webglTexture=i.createTexture()),C.__version=v.version,o.memory.textures++),z){G.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(v.mipmaps&&v.mipmaps.length>0){G.__webglFramebuffer[oe]=[];for(let pe=0;pe<v.mipmaps.length;pe++)G.__webglFramebuffer[oe][pe]=i.createFramebuffer()}else G.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){G.__webglFramebuffer=[];for(let oe=0;oe<v.mipmaps.length;oe++)G.__webglFramebuffer[oe]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(re)for(let oe=0,pe=F.length;oe<pe;oe++){let Ke=n.get(F[oe]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&Ue(w)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let oe=0;oe<F.length;oe++){let pe=F[oe];G.__webglColorRenderbuffer[oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[oe]);let Ke=r.convert(pe.format,pe.colorSpace),ae=r.convert(pe.type),Te=b(pe.internalFormat,Ke,ae,pe.colorSpace,w.isXRRenderTarget===!0),Ye=xe(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ye,Te,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,G.__webglColorRenderbuffer[oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),ge(G.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(z){t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture),Ge(i.TEXTURE_CUBE_MAP,v);for(let oe=0;oe<6;oe++)if(v.mipmaps&&v.mipmaps.length>0)for(let pe=0;pe<v.mipmaps.length;pe++)Re(G.__webglFramebuffer[oe][pe],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,pe);else Re(G.__webglFramebuffer[oe],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(v)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){for(let oe=0,pe=F.length;oe<pe;oe++){let Ke=F[oe],ae=n.get(Ke);t.bindTexture(i.TEXTURE_2D,ae.__webglTexture),Ge(i.TEXTURE_2D,Ke),Re(G.__webglFramebuffer,w,Ke,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,0),m(Ke)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(oe=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,C.__webglTexture),Ge(oe,v),v.mipmaps&&v.mipmaps.length>0)for(let pe=0;pe<v.mipmaps.length;pe++)Re(G.__webglFramebuffer[pe],w,v,i.COLOR_ATTACHMENT0,oe,pe);else Re(G.__webglFramebuffer,w,v,i.COLOR_ATTACHMENT0,oe,0);m(v)&&p(oe),t.unbindTexture()}w.depthBuffer&&Xe(w)}function J(w){let v=w.textures;for(let G=0,C=v.length;G<C;G++){let F=v[G];if(m(F)){let z=y(w),re=n.get(F).__webglTexture;t.bindTexture(z,re),p(z),t.unbindTexture()}}}let le=[],I=[];function Ie(w){if(w.samples>0){if(Ue(w)===!1){let v=w.textures,G=w.width,C=w.height,F=i.COLOR_BUFFER_BIT,z=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=n.get(w),oe=v.length>1;if(oe)for(let pe=0;pe<v.length;pe++)t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let pe=0;pe<v.length;pe++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(F|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(F|=i.STENCIL_BUFFER_BIT)),oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,re.__webglColorRenderbuffer[pe]);let Ke=n.get(v[pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ke,0)}i.blitFramebuffer(0,0,G,C,0,0,G,C,F,i.NEAREST),c===!0&&(le.length=0,I.length=0,le.push(i.COLOR_ATTACHMENT0+pe),w.depthBuffer&&w.resolveDepthBuffer===!1&&(le.push(z),I.push(z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,le))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),oe)for(let pe=0;pe<v.length;pe++){t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,re.__webglColorRenderbuffer[pe]);let Ke=n.get(v[pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,Ke,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){let v=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function xe(w){return Math.min(s.maxSamples,w.samples)}function Ue(w){let v=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function be(w){let v=o.render.frame;h.get(w)!==v&&(h.set(w,v),w.update())}function at(w,v){let G=w.colorSpace,C=w.format,F=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||G!==fn&&G!==zi&&(nt.getTransfer(G)===yt?(C!==bn||F!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),v}function Pe(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=W,this.resetTextureUnits=X,this.setTexture2D=K,this.setTexture2DArray=q,this.setTexture3D=ie,this.setTextureCube=Z,this.rebindTextures=O,this.setupRenderTarget=j,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=Ue}function Oy(i,e){function t(n,s=zi){let r,o=nt.getTransfer(s);if(n===xi)return i.UNSIGNED_BYTE;if(n===wh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ah)return i.UNSIGNED_SHORT_5_5_5_1;if(n===vf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===_f)return i.BYTE;if(n===yf)return i.SHORT;if(n===io)return i.UNSIGNED_SHORT;if(n===Th)return i.INT;if(n===Gi)return i.UNSIGNED_INT;if(n===In)return i.FLOAT;if(n===Ln)return i.HALF_FLOAT;if(n===Mf)return i.ALPHA;if(n===bf)return i.RGB;if(n===bn)return i.RGBA;if(n===Ef)return i.LUMINANCE;if(n===Sf)return i.LUMINANCE_ALPHA;if(n===cr)return i.DEPTH_COMPONENT;if(n===mr)return i.DEPTH_STENCIL;if(n===Rh)return i.RED;if(n===qa)return i.RED_INTEGER;if(n===Tf)return i.RG;if(n===Ch)return i.RG_INTEGER;if(n===Ih)return i.RGBA_INTEGER;if(n===pa||n===ma||n===ga||n===xa)if(o===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===pa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===pa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ma)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ga)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fl||n===pl||n===ml||n===gl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===fl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ml)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===gl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xl||n===_l||n===yl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===xl||n===_l)return o===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===yl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===vl||n===Ml||n===bl||n===El||n===Sl||n===Tl||n===wl||n===Al||n===Rl||n===Cl||n===Il||n===Pl||n===Ll||n===Dl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===vl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ml)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===bl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===El)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Sl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Tl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Al)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Rl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Cl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Il)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Pl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ll)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Dl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_a||n===Nl||n===Ul)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===_a)return o===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Nl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ul)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wf||n===Ol||n===Fl||n===Bl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===_a)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ol)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Bl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===pr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Ql=class extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ke=class extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}},Fy={type:"move"},to=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Fy)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ke;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},By=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ky=`
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

}`,eh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Kt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ht({vertexShader:By,fragmentShader:ky,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ne(new Jt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},th=class extends Wi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,x=new eh,m=t.getContextAttributes(),p=null,y=null,b=[],_=[],L=new He,A=null,R=new zt;R.viewport=new pt;let P=new zt;P.viewport=new pt;let E=[R,P],M=new Ql,N=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ce=b[te];return ce===void 0&&(ce=new to,b[te]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(te){let ce=b[te];return ce===void 0&&(ce=new to,b[te]=ce),ce.getGripSpace()},this.getHand=function(te){let ce=b[te];return ce===void 0&&(ce=new to,b[te]=ce),ce.getHandSpace()};function W(te){let ce=_.indexOf(te.inputSource);if(ce===-1)return;let Re=b[ce];Re!==void 0&&(Re.update(te.inputSource,te.frame,l||o),Re.dispatchEvent({type:te.type,data:te.inputSource}))}function V(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",K);for(let te=0;te<b.length;te++){let ce=_[te];ce!==null&&(_[te]=null,b[te].disconnect(ce))}N=null,X=null,x.reset(),e.setRenderTarget(p),f=null,d=null,u=null,s=null,y=null,ct.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(te){l=te},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",V),s.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(L),s.renderState.layers===void 0){let ce={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ce),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new sn(f.framebufferWidth,f.framebufferHeight,{format:bn,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ce=null,Re=null,ge=null;m.depth&&(ge=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=m.stencil?mr:cr,Re=m.stencil?pr:Gi);let ze={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(ze),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new sn(d.textureWidth,d.textureHeight,{format:bn,type:xi,depthTexture:new wa(d.textureWidth,d.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ct.setContext(s),ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function K(te){for(let ce=0;ce<te.removed.length;ce++){let Re=te.removed[ce],ge=_.indexOf(Re);ge>=0&&(_[ge]=null,b[ge].disconnect(Re))}for(let ce=0;ce<te.added.length;ce++){let Re=te.added[ce],ge=_.indexOf(Re);if(ge===-1){for(let Xe=0;Xe<b.length;Xe++)if(Xe>=_.length){_.push(Re),ge=Xe;break}else if(_[Xe]===null){_[Xe]=Re,ge=Xe;break}if(ge===-1)break}let ze=b[ge];ze&&ze.connect(Re)}}let q=new U,ie=new U;function Z(te,ce,Re){q.setFromMatrixPosition(ce.matrixWorld),ie.setFromMatrixPosition(Re.matrixWorld);let ge=q.distanceTo(ie),ze=ce.projectionMatrix.elements,Xe=Re.projectionMatrix.elements,O=ze[14]/(ze[10]-1),j=ze[14]/(ze[10]+1),J=(ze[9]+1)/ze[5],le=(ze[9]-1)/ze[5],I=(ze[8]-1)/ze[0],Ie=(Xe[8]+1)/Xe[0],xe=O*I,Ue=O*Ie,be=ge/(-I+Ie),at=be*-I;if(ce.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(at),te.translateZ(be),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),ze[10]===-1)te.projectionMatrix.copy(ce.projectionMatrix),te.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{let Pe=O+be,w=j+be,v=xe-at,G=Ue+(ge-at),C=J*j/w*Pe,F=le*j/w*Pe;te.projectionMatrix.makePerspective(v,G,C,F,Pe,w),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function me(te,ce){ce===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ce.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;let ce=te.near,Re=te.far;x.texture!==null&&(x.depthNear>0&&(ce=x.depthNear),x.depthFar>0&&(Re=x.depthFar)),M.near=P.near=R.near=ce,M.far=P.far=R.far=Re,(N!==M.near||X!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),N=M.near,X=M.far),R.layers.mask=te.layers.mask|2,P.layers.mask=te.layers.mask|4,M.layers.mask=R.layers.mask|P.layers.mask;let ge=te.parent,ze=M.cameras;me(M,ge);for(let Xe=0;Xe<ze.length;Xe++)me(ze[Xe],ge);ze.length===2?Z(M,R,P):M.projectionMatrix.copy(R.projectionMatrix),_e(te,M,ge)};function _e(te,ce,Re){Re===null?te.matrix.copy(ce.matrixWorld):(te.matrix.copy(Re.matrixWorld),te.matrix.invert(),te.matrix.multiply(ce.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ce.projectionMatrix),te.projectionMatrixInverse.copy(ce.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=_r*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(te){c=te,d!==null&&(d.fixedFoveation=te),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=te)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let Ce=null;function Ge(te,ce){if(h=ce.getViewerPose(l||o),g=ce,h!==null){let Re=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let ge=!1;Re.length!==M.cameras.length&&(M.cameras.length=0,ge=!0);for(let Xe=0;Xe<Re.length;Xe++){let O=Re[Xe],j=null;if(f!==null)j=f.getViewport(O);else{let le=u.getViewSubImage(d,O);j=le.viewport,Xe===0&&(e.setRenderTargetTextures(y,le.colorTexture,d.ignoreDepthValues?void 0:le.depthStencilTexture),e.setRenderTarget(y))}let J=E[Xe];J===void 0&&(J=new zt,J.layers.enable(Xe),J.viewport=new pt,E[Xe]=J),J.matrix.fromArray(O.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(O.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(j.x,j.y,j.width,j.height),Xe===0&&(M.matrix.copy(J.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ge===!0&&M.cameras.push(J)}let ze=s.enabledFeatures;if(ze&&ze.includes("depth-sensing")){let Xe=u.getDepthInformation(Re[0]);Xe&&Xe.isValid&&Xe.texture&&x.init(e,Xe,s.renderState)}}for(let Re=0;Re<b.length;Re++){let ge=_[Re],ze=b[Re];ge!==null&&ze!==void 0&&ze.update(ge,ce,l||o)}Ce&&Ce(te,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),g=null}let ct=new Df;ct.setAnimationLoop(Ge),this.setAnimationLoop=function(te){Ce=te},this.dispose=function(){}}},vs=new En,zy=new qe;function Hy(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Lf(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,b,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,y,b):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=e.get(p),b=y.envMap,_=y.envMapRotation;b&&(m.envMap.value=b,vs.copy(_),vs.x*=-1,vs.y*=-1,vs.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),m.envMapRotation.value.setFromMatrix4(zy.makeRotationFromEuler(vs)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Vy(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,b){let _=b.program;n.uniformBlockBinding(y,_)}function l(y,b){let _=s[y.id];_===void 0&&(g(y),_=h(y),s[y.id]=_,y.addEventListener("dispose",m));let L=b.program;n.updateUBOMapping(y,L);let A=e.render.frame;r[y.id]!==A&&(d(y),r[y.id]=A)}function h(y){let b=u();y.__bindingPointIndex=b;let _=i.createBuffer(),L=y.__size,A=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,L,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,_),_}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let b=s[y.id],_=y.uniforms,L=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let A=0,R=_.length;A<R;A++){let P=Array.isArray(_[A])?_[A]:[_[A]];for(let E=0,M=P.length;E<M;E++){let N=P[E];if(f(N,A,E,L)===!0){let X=N.__offset,W=Array.isArray(N.value)?N.value:[N.value],V=0;for(let K=0;K<W.length;K++){let q=W[K],ie=x(q);typeof q=="number"||typeof q=="boolean"?(N.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,X+V,N.__data)):q.isMatrix3?(N.__data[0]=q.elements[0],N.__data[1]=q.elements[1],N.__data[2]=q.elements[2],N.__data[3]=0,N.__data[4]=q.elements[3],N.__data[5]=q.elements[4],N.__data[6]=q.elements[5],N.__data[7]=0,N.__data[8]=q.elements[6],N.__data[9]=q.elements[7],N.__data[10]=q.elements[8],N.__data[11]=0):(q.toArray(N.__data,V),V+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,b,_,L){let A=y.value,R=b+"_"+_;if(L[R]===void 0)return typeof A=="number"||typeof A=="boolean"?L[R]=A:L[R]=A.clone(),!0;{let P=L[R];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return L[R]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(y){let b=y.uniforms,_=0,L=16;for(let R=0,P=b.length;R<P;R++){let E=Array.isArray(b[R])?b[R]:[b[R]];for(let M=0,N=E.length;M<N;M++){let X=E[M],W=Array.isArray(X.value)?X.value:[X.value];for(let V=0,K=W.length;V<K;V++){let q=W[V],ie=x(q),Z=_%L,me=Z%ie.boundary,_e=Z+me;_+=me,_e!==0&&L-_e<ie.storage&&(_+=L-_e),X.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=_,_+=ie.storage}}}let A=_%L;return A>0&&(_+=L-A),y.__size=_,y.__cache={},this}function x(y){let b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),b}function m(y){let b=y.target;b.removeEventListener("dispose",m);let _=o.indexOf(b.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var Aa=class{constructor(e={}){let{canvas:t=Ym(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,y=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kt,this.toneMapping=Vi,this.toneMappingExposure=1;let _=this,L=!1,A=0,R=0,P=null,E=-1,M=null,N=new pt,X=new pt,W=null,V=new Me(0),K=0,q=t.width,ie=t.height,Z=1,me=null,_e=null,Ce=new pt(0,0,q,ie),Ge=new pt(0,0,q,ie),ct=!1,te=new vr,ce=!1,Re=!1,ge=new qe,ze=new qe,Xe=new U,O=new pt,j={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},J=!1;function le(){return P===null?Z:1}let I=n;function Ie(S,k){return t.getContext(S,k)}try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${gh}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),I===null){let k="webgl2";if(I=Ie(k,S),I===null)throw Ie(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let xe,Ue,be,at,Pe,w,v,G,C,F,z,re,oe,pe,Ke,ae,Te,Ye,$e,De,lt,et,At,B;function ve(){xe=new s_(I),xe.init(),et=new Oy(I,xe),Ue=new jx(I,xe,e,et),be=new Dy(I,xe),Ue.reverseDepthBuffer&&d&&be.buffers.depth.setReversed(!0),at=new a_(I),Pe=new vy,w=new Uy(I,xe,be,Pe,Ue,et,at),v=new e_(_),G=new i_(_),C=new p0(I),At=new Kx(I,C),F=new r_(I,C,at,At),z=new l_(I,F,C,at),$e=new c_(I,Ue,w),ae=new Qx(Pe),re=new yy(_,v,G,xe,Ue,At,ae),oe=new Hy(_,Pe),pe=new by,Ke=new Ry(xe),Ye=new Zx(_,v,G,be,z,f,c),Te=new Py(_,z,Ue),B=new Vy(I,at,Ue,be),De=new Jx(I,xe,at),lt=new o_(I,xe,at),at.programs=re.programs,_.capabilities=Ue,_.extensions=xe,_.properties=Pe,_.renderLists=pe,_.shadowMap=Te,_.state=be,_.info=at}ve();let ee=new th(_,I);this.xr=ee,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let S=xe.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=xe.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(S){S!==void 0&&(Z=S,this.setSize(q,ie,!1))},this.getSize=function(S){return S.set(q,ie)},this.setSize=function(S,k,Y=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=S,ie=k,t.width=Math.floor(S*Z),t.height=Math.floor(k*Z),Y===!0&&(t.style.width=S+"px",t.style.height=k+"px"),this.setViewport(0,0,S,k)},this.getDrawingBufferSize=function(S){return S.set(q*Z,ie*Z).floor()},this.setDrawingBufferSize=function(S,k,Y){q=S,ie=k,Z=Y,t.width=Math.floor(S*Y),t.height=Math.floor(k*Y),this.setViewport(0,0,S,k)},this.getCurrentViewport=function(S){return S.copy(N)},this.getViewport=function(S){return S.copy(Ce)},this.setViewport=function(S,k,Y,$){S.isVector4?Ce.set(S.x,S.y,S.z,S.w):Ce.set(S,k,Y,$),be.viewport(N.copy(Ce).multiplyScalar(Z).round())},this.getScissor=function(S){return S.copy(Ge)},this.setScissor=function(S,k,Y,$){S.isVector4?Ge.set(S.x,S.y,S.z,S.w):Ge.set(S,k,Y,$),be.scissor(X.copy(Ge).multiplyScalar(Z).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(S){be.setScissorTest(ct=S)},this.setOpaqueSort=function(S){me=S},this.setTransparentSort=function(S){_e=S},this.getClearColor=function(S){return S.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor.apply(Ye,arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha.apply(Ye,arguments)},this.clear=function(S=!0,k=!0,Y=!0){let $=0;if(S){let H=!1;if(P!==null){let ue=P.texture.format;H=ue===Ih||ue===Ch||ue===qa}if(H){let ue=P.texture.type,Se=ue===xi||ue===Gi||ue===io||ue===pr||ue===wh||ue===Ah,Oe=Ye.getClearColor(),Fe=Ye.getClearAlpha(),Ze=Oe.r,je=Oe.g,Be=Oe.b;Se?(g[0]=Ze,g[1]=je,g[2]=Be,g[3]=Fe,I.clearBufferuiv(I.COLOR,0,g)):(x[0]=Ze,x[1]=je,x[2]=Be,x[3]=Fe,I.clearBufferiv(I.COLOR,0,x))}else $|=I.COLOR_BUFFER_BIT}k&&($|=I.DEPTH_BUFFER_BIT),Y&&($|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),pe.dispose(),Ke.dispose(),Pe.dispose(),v.dispose(),G.dispose(),z.dispose(),At.dispose(),B.dispose(),re.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",ku),ee.removeEventListener("sessionend",zu),ps.stop()};function se(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let S=at.autoReset,k=Te.enabled,Y=Te.autoUpdate,$=Te.needsUpdate,H=Te.type;ve(),at.autoReset=S,Te.enabled=k,Te.autoUpdate=Y,Te.needsUpdate=$,Te.type=H}function Ee(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Je(S){let k=S.target;k.removeEventListener("dispose",Je),Ft(k)}function Ft(S){on(S),Pe.remove(S)}function on(S){let k=Pe.get(S).programs;k!==void 0&&(k.forEach(function(Y){re.releaseProgram(Y)}),S.isShaderMaterial&&re.releaseShaderCache(S))}this.renderBufferDirect=function(S,k,Y,$,H,ue){k===null&&(k=j);let Se=H.isMesh&&H.matrixWorld.determinant()<0,Oe=Yp(S,k,Y,$,H);be.setMaterial($,Se);let Fe=Y.index,Ze=1;if($.wireframe===!0){if(Fe=F.getWireframeAttribute(Y),Fe===void 0)return;Ze=2}let je=Y.drawRange,Be=Y.attributes.position,ut=je.start*Ze,Rt=(je.start+je.count)*Ze;ue!==null&&(ut=Math.max(ut,ue.start*Ze),Rt=Math.min(Rt,(ue.start+ue.count)*Ze)),Fe!==null?(ut=Math.max(ut,0),Rt=Math.min(Rt,Fe.count)):Be!=null&&(ut=Math.max(ut,0),Rt=Math.min(Rt,Be.count));let It=Rt-ut;if(It<0||It===1/0)return;At.setup(H,$,Oe,Y,Fe);let _n,xt=De;if(Fe!==null&&(_n=C.get(Fe),xt=lt,xt.setIndex(_n)),H.isMesh)$.wireframe===!0?(be.setLineWidth($.wireframeLinewidth*le()),xt.setMode(I.LINES)):xt.setMode(I.TRIANGLES);else if(H.isLine){let Ve=$.linewidth;Ve===void 0&&(Ve=1),be.setLineWidth(Ve*le()),H.isLineSegments?xt.setMode(I.LINES):H.isLineLoop?xt.setMode(I.LINE_LOOP):xt.setMode(I.LINE_STRIP)}else H.isPoints?xt.setMode(I.POINTS):H.isSprite&&xt.setMode(I.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)xt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(xe.get("WEBGL_multi_draw"))xt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Ve=H._multiDrawStarts,ri=H._multiDrawCounts,_t=H._multiDrawCount,Hn=Fe?C.get(Fe).bytesPerElement:1,Gs=Pe.get($).currentProgram.getUniforms();for(let An=0;An<_t;An++)Gs.setValue(I,"_gl_DrawID",An),xt.render(Ve[An]/Hn,ri[An])}else if(H.isInstancedMesh)xt.renderInstances(ut,It,H.count);else if(Y.isInstancedBufferGeometry){let Ve=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,ri=Math.min(Y.instanceCount,Ve);xt.renderInstances(ut,It,ri)}else xt.render(ut,It)};function Mt(S,k,Y){S.transparent===!0&&S.side===$t&&S.forceSinglePass===!1?(S.side=tn,S.needsUpdate=!0,Bo(S,k,Y),S.side=ti,S.needsUpdate=!0,Bo(S,k,Y),S.side=$t):Bo(S,k,Y)}this.compile=function(S,k,Y=null){Y===null&&(Y=S),p=Ke.get(Y),p.init(k),b.push(p),Y.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),S!==Y&&S.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();let $=new Set;return S.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let ue=H.material;if(ue)if(Array.isArray(ue))for(let Se=0;Se<ue.length;Se++){let Oe=ue[Se];Mt(Oe,Y,H),$.add(Oe)}else Mt(ue,Y,H),$.add(ue)}),b.pop(),p=null,$},this.compileAsync=function(S,k,Y=null){let $=this.compile(S,k,Y);return new Promise(H=>{function ue(){if($.forEach(function(Se){Pe.get(Se).currentProgram.isReady()&&$.delete(Se)}),$.size===0){H(S);return}setTimeout(ue,10)}xe.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let zn=null;function si(S){zn&&zn(S)}function ku(){ps.stop()}function zu(){ps.start()}let ps=new Df;ps.setAnimationLoop(si),typeof self<"u"&&ps.setContext(self),this.setAnimationLoop=function(S){zn=S,ee.setAnimationLoop(S),S===null?ps.stop():ps.start()},ee.addEventListener("sessionstart",ku),ee.addEventListener("sessionend",zu),this.render=function(S,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(k),k=ee.getCamera()),S.isScene===!0&&S.onBeforeRender(_,S,k,P),p=Ke.get(S,b.length),p.init(k),b.push(p),ze.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),te.setFromProjectionMatrix(ze),Re=this.localClippingEnabled,ce=ae.init(this.clippingPlanes,Re),m=pe.get(S,y.length),m.init(),y.push(m),ee.enabled===!0&&ee.isPresenting===!0){let ue=_.xr.getDepthSensingMesh();ue!==null&&vc(ue,k,-1/0,_.sortObjects)}vc(S,k,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(me,_e),J=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,J&&Ye.addToRenderList(m,S),this.info.render.frame++,ce===!0&&ae.beginShadows();let Y=p.state.shadowsArray;Te.render(Y,S,k),ce===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();let $=m.opaque,H=m.transmissive;if(p.setupLights(),k.isArrayCamera){let ue=k.cameras;if(H.length>0)for(let Se=0,Oe=ue.length;Se<Oe;Se++){let Fe=ue[Se];Vu($,H,S,Fe)}J&&Ye.render(S);for(let Se=0,Oe=ue.length;Se<Oe;Se++){let Fe=ue[Se];Hu(m,S,Fe,Fe.viewport)}}else H.length>0&&Vu($,H,S,k),J&&Ye.render(S),Hu(m,S,k);P!==null&&(w.updateMultisampleRenderTarget(P),w.updateRenderTargetMipmap(P)),S.isScene===!0&&S.onAfterRender(_,S,k),At.resetDefaultState(),E=-1,M=null,b.pop(),b.length>0?(p=b[b.length-1],ce===!0&&ae.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function vc(S,k,Y,$){if(S.visible===!1)return;if(S.layers.test(k.layers)){if(S.isGroup)Y=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(k);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||te.intersectsSprite(S)){$&&O.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ze);let Se=z.update(S),Oe=S.material;Oe.visible&&m.push(S,Se,Oe,Y,O.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||te.intersectsObject(S))){let Se=z.update(S),Oe=S.material;if($&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),O.copy(S.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),O.copy(Se.boundingSphere.center)),O.applyMatrix4(S.matrixWorld).applyMatrix4(ze)),Array.isArray(Oe)){let Fe=Se.groups;for(let Ze=0,je=Fe.length;Ze<je;Ze++){let Be=Fe[Ze],ut=Oe[Be.materialIndex];ut&&ut.visible&&m.push(S,Se,ut,Y,O.z,Be)}}else Oe.visible&&m.push(S,Se,Oe,Y,O.z,null)}}let ue=S.children;for(let Se=0,Oe=ue.length;Se<Oe;Se++)vc(ue[Se],k,Y,$)}function Hu(S,k,Y,$){let H=S.opaque,ue=S.transmissive,Se=S.transparent;p.setupLightsView(Y),ce===!0&&ae.setGlobalState(_.clippingPlanes,Y),$&&be.viewport(N.copy($)),H.length>0&&Fo(H,k,Y),ue.length>0&&Fo(ue,k,Y),Se.length>0&&Fo(Se,k,Y),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Vu(S,k,Y,$){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new sn(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")||xe.has("EXT_color_buffer_float")?Ln:xi,minFilter:Qn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));let ue=p.state.transmissionRenderTarget[$.id],Se=$.viewport||N;ue.setSize(Se.z,Se.w);let Oe=_.getRenderTarget();_.setRenderTarget(ue),_.getClearColor(V),K=_.getClearAlpha(),K<1&&_.setClearColor(16777215,.5),_.clear(),J&&Ye.render(Y);let Fe=_.toneMapping;_.toneMapping=Vi;let Ze=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),ce===!0&&ae.setGlobalState(_.clippingPlanes,$),Fo(S,Y,$),w.updateMultisampleRenderTarget(ue),w.updateRenderTargetMipmap(ue),xe.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let Be=0,ut=k.length;Be<ut;Be++){let Rt=k[Be],It=Rt.object,_n=Rt.geometry,xt=Rt.material,Ve=Rt.group;if(xt.side===$t&&It.layers.test($.layers)){let ri=xt.side;xt.side=tn,xt.needsUpdate=!0,Gu(It,Y,$,_n,xt,Ve),xt.side=ri,xt.needsUpdate=!0,je=!0}}je===!0&&(w.updateMultisampleRenderTarget(ue),w.updateRenderTargetMipmap(ue))}_.setRenderTarget(Oe),_.setClearColor(V,K),Ze!==void 0&&($.viewport=Ze),_.toneMapping=Fe}function Fo(S,k,Y){let $=k.isScene===!0?k.overrideMaterial:null;for(let H=0,ue=S.length;H<ue;H++){let Se=S[H],Oe=Se.object,Fe=Se.geometry,Ze=$===null?Se.material:$,je=Se.group;Oe.layers.test(Y.layers)&&Gu(Oe,k,Y,Fe,Ze,je)}}function Gu(S,k,Y,$,H,ue){S.onBeforeRender(_,k,Y,$,H,ue),S.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),H.onBeforeRender(_,k,Y,$,S,ue),H.transparent===!0&&H.side===$t&&H.forceSinglePass===!1?(H.side=tn,H.needsUpdate=!0,_.renderBufferDirect(Y,k,$,H,S,ue),H.side=ti,H.needsUpdate=!0,_.renderBufferDirect(Y,k,$,H,S,ue),H.side=$t):_.renderBufferDirect(Y,k,$,H,S,ue),S.onAfterRender(_,k,Y,$,H,ue)}function Bo(S,k,Y){k.isScene!==!0&&(k=j);let $=Pe.get(S),H=p.state.lights,ue=p.state.shadowsArray,Se=H.state.version,Oe=re.getParameters(S,H.state,ue,k,Y),Fe=re.getProgramCacheKey(Oe),Ze=$.programs;$.environment=S.isMeshStandardMaterial?k.environment:null,$.fog=k.fog,$.envMap=(S.isMeshStandardMaterial?G:v).get(S.envMap||$.environment),$.envMapRotation=$.environment!==null&&S.envMap===null?k.environmentRotation:S.envMapRotation,Ze===void 0&&(S.addEventListener("dispose",Je),Ze=new Map,$.programs=Ze);let je=Ze.get(Fe);if(je!==void 0){if($.currentProgram===je&&$.lightsStateVersion===Se)return Xu(S,Oe),je}else Oe.uniforms=re.getUniforms(S),S.onBeforeCompile(Oe,_),je=re.acquireProgram(Oe,Fe),Ze.set(Fe,je),$.uniforms=Oe.uniforms;let Be=$.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Be.clippingPlanes=ae.uniform),Xu(S,Oe),$.needsLights=Zp(S),$.lightsStateVersion=Se,$.needsLights&&(Be.ambientLightColor.value=H.state.ambient,Be.lightProbe.value=H.state.probe,Be.directionalLights.value=H.state.directional,Be.directionalLightShadows.value=H.state.directionalShadow,Be.spotLights.value=H.state.spot,Be.spotLightShadows.value=H.state.spotShadow,Be.rectAreaLights.value=H.state.rectArea,Be.ltc_1.value=H.state.rectAreaLTC1,Be.ltc_2.value=H.state.rectAreaLTC2,Be.pointLights.value=H.state.point,Be.pointLightShadows.value=H.state.pointShadow,Be.hemisphereLights.value=H.state.hemi,Be.directionalShadowMap.value=H.state.directionalShadowMap,Be.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Be.spotShadowMap.value=H.state.spotShadowMap,Be.spotLightMatrix.value=H.state.spotLightMatrix,Be.spotLightMap.value=H.state.spotLightMap,Be.pointShadowMap.value=H.state.pointShadowMap,Be.pointShadowMatrix.value=H.state.pointShadowMatrix),$.currentProgram=je,$.uniformsList=null,je}function Wu(S){if(S.uniformsList===null){let k=S.currentProgram.getUniforms();S.uniformsList=hr.seqWithValue(k.seq,S.uniforms)}return S.uniformsList}function Xu(S,k){let Y=Pe.get(S);Y.outputColorSpace=k.outputColorSpace,Y.batching=k.batching,Y.batchingColor=k.batchingColor,Y.instancing=k.instancing,Y.instancingColor=k.instancingColor,Y.instancingMorph=k.instancingMorph,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}function Yp(S,k,Y,$,H){k.isScene!==!0&&(k=j),w.resetTextureUnits();let ue=k.fog,Se=$.isMeshStandardMaterial?k.environment:null,Oe=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:fn,Fe=($.isMeshStandardMaterial?G:v).get($.envMap||Se),Ze=$.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,je=!!Y.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Be=!!Y.morphAttributes.position,ut=!!Y.morphAttributes.normal,Rt=!!Y.morphAttributes.color,It=Vi;$.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(It=_.toneMapping);let _n=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,xt=_n!==void 0?_n.length:0,Ve=Pe.get($),ri=p.state.lights;if(ce===!0&&(Re===!0||S!==M)){let Un=S===M&&$.id===E;ae.setState($,S,Un)}let _t=!1;$.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==ri.state.version||Ve.outputColorSpace!==Oe||H.isBatchedMesh&&Ve.batching===!1||!H.isBatchedMesh&&Ve.batching===!0||H.isBatchedMesh&&Ve.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ve.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ve.instancing===!1||!H.isInstancedMesh&&Ve.instancing===!0||H.isSkinnedMesh&&Ve.skinning===!1||!H.isSkinnedMesh&&Ve.skinning===!0||H.isInstancedMesh&&Ve.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ve.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ve.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ve.instancingMorph===!1&&H.morphTexture!==null||Ve.envMap!==Fe||$.fog===!0&&Ve.fog!==ue||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==ae.numPlanes||Ve.numIntersection!==ae.numIntersection)||Ve.vertexAlphas!==Ze||Ve.vertexTangents!==je||Ve.morphTargets!==Be||Ve.morphNormals!==ut||Ve.morphColors!==Rt||Ve.toneMapping!==It||Ve.morphTargetsCount!==xt)&&(_t=!0):(_t=!0,Ve.__version=$.version);let Hn=Ve.currentProgram;_t===!0&&(Hn=Bo($,k,H));let Gs=!1,An=!1,kr=!1,Pt=Hn.getUniforms(),Jn=Ve.uniforms;if(be.useProgram(Hn.program)&&(Gs=!0,An=!0,kr=!0),$.id!==E&&(E=$.id,An=!0),Gs||M!==S){be.buffers.depth.getReversed()?(ge.copy(S.projectionMatrix),Zm(ge),Km(ge),Pt.setValue(I,"projectionMatrix",ge)):Pt.setValue(I,"projectionMatrix",S.projectionMatrix),Pt.setValue(I,"viewMatrix",S.matrixWorldInverse);let Li=Pt.map.cameraPosition;Li!==void 0&&Li.setValue(I,Xe.setFromMatrixPosition(S.matrixWorld)),Ue.logarithmicDepthBuffer&&Pt.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Pt.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,An=!0,kr=!0)}if(H.isSkinnedMesh){Pt.setOptional(I,H,"bindMatrix"),Pt.setOptional(I,H,"bindMatrixInverse");let Un=H.skeleton;Un&&(Un.boneTexture===null&&Un.computeBoneTexture(),Pt.setValue(I,"boneTexture",Un.boneTexture,w))}H.isBatchedMesh&&(Pt.setOptional(I,H,"batchingTexture"),Pt.setValue(I,"batchingTexture",H._matricesTexture,w),Pt.setOptional(I,H,"batchingIdTexture"),Pt.setValue(I,"batchingIdTexture",H._indirectTexture,w),Pt.setOptional(I,H,"batchingColorTexture"),H._colorsTexture!==null&&Pt.setValue(I,"batchingColorTexture",H._colorsTexture,w));let zr=Y.morphAttributes;if((zr.position!==void 0||zr.normal!==void 0||zr.color!==void 0)&&$e.update(H,Y,Hn),(An||Ve.receiveShadow!==H.receiveShadow)&&(Ve.receiveShadow=H.receiveShadow,Pt.setValue(I,"receiveShadow",H.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Jn.envMap.value=Fe,Jn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&k.environment!==null&&(Jn.envMapIntensity.value=k.environmentIntensity),An&&(Pt.setValue(I,"toneMappingExposure",_.toneMappingExposure),Ve.needsLights&&$p(Jn,kr),ue&&$.fog===!0&&oe.refreshFogUniforms(Jn,ue),oe.refreshMaterialUniforms(Jn,$,Z,ie,p.state.transmissionRenderTarget[S.id]),hr.upload(I,Wu(Ve),Jn,w)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(hr.upload(I,Wu(Ve),Jn,w),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Pt.setValue(I,"center",H.center),Pt.setValue(I,"modelViewMatrix",H.modelViewMatrix),Pt.setValue(I,"normalMatrix",H.normalMatrix),Pt.setValue(I,"modelMatrix",H.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){let Un=$.uniformsGroups;for(let Li=0,Di=Un.length;Li<Di;Li++){let qu=Un[Li];B.update(qu,Hn),B.bind(qu,Hn)}}return Hn}function $p(S,k){S.ambientLightColor.needsUpdate=k,S.lightProbe.needsUpdate=k,S.directionalLights.needsUpdate=k,S.directionalLightShadows.needsUpdate=k,S.pointLights.needsUpdate=k,S.pointLightShadows.needsUpdate=k,S.spotLights.needsUpdate=k,S.spotLightShadows.needsUpdate=k,S.rectAreaLights.needsUpdate=k,S.hemisphereLights.needsUpdate=k}function Zp(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(S,k,Y){Pe.get(S.texture).__webglTexture=k,Pe.get(S.depthTexture).__webglTexture=Y;let $=Pe.get(S);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=Y===void 0,$.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,k){let Y=Pe.get(S);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(S,k=0,Y=0){P=S,A=k,R=Y;let $=!0,H=null,ue=!1,Se=!1;if(S){let Fe=Pe.get(S);if(Fe.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(I.FRAMEBUFFER,null),$=!1;else if(Fe.__webglFramebuffer===void 0)w.setupRenderTarget(S);else if(Fe.__hasExternalTextures)w.rebindTextures(S,Pe.get(S.texture).__webglTexture,Pe.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Be=S.depthTexture;if(Fe.__boundDepthTexture!==Be){if(Be!==null&&Pe.has(Be)&&(S.width!==Be.image.width||S.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(S)}}let Ze=S.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Se=!0);let je=Pe.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(je[k])?H=je[k][Y]:H=je[k],ue=!0):S.samples>0&&w.useMultisampledRTT(S)===!1?H=Pe.get(S).__webglMultisampledFramebuffer:Array.isArray(je)?H=je[Y]:H=je,N.copy(S.viewport),X.copy(S.scissor),W=S.scissorTest}else N.copy(Ce).multiplyScalar(Z).floor(),X.copy(Ge).multiplyScalar(Z).floor(),W=ct;if(be.bindFramebuffer(I.FRAMEBUFFER,H)&&$&&be.drawBuffers(S,H),be.viewport(N),be.scissor(X),be.setScissorTest(W),ue){let Fe=Pe.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+k,Fe.__webglTexture,Y)}else if(Se){let Fe=Pe.get(S.texture),Ze=k||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Fe.__webglTexture,Y||0,Ze)}E=-1},this.readRenderTargetPixels=function(S,k,Y,$,H,ue,Se){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=Pe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Se!==void 0&&(Oe=Oe[Se]),Oe){be.bindFramebuffer(I.FRAMEBUFFER,Oe);try{let Fe=S.texture,Ze=Fe.format,je=Fe.type;if(!Ue.textureFormatReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ue.textureTypeReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=S.width-$&&Y>=0&&Y<=S.height-H&&I.readPixels(k,Y,$,H,et.convert(Ze),et.convert(je),ue)}finally{let Fe=P!==null?Pe.get(P).__webglFramebuffer:null;be.bindFramebuffer(I.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(S,k,Y,$,H,ue,Se){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=Pe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Se!==void 0&&(Oe=Oe[Se]),Oe){let Fe=S.texture,Ze=Fe.format,je=Fe.type;if(!Ue.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ue.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=S.width-$&&Y>=0&&Y<=S.height-H){be.bindFramebuffer(I.FRAMEBUFFER,Oe);let Be=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Be),I.bufferData(I.PIXEL_PACK_BUFFER,ue.byteLength,I.STREAM_READ),I.readPixels(k,Y,$,H,et.convert(Ze),et.convert(je),0);let ut=P!==null?Pe.get(P).__webglFramebuffer:null;be.bindFramebuffer(I.FRAMEBUFFER,ut);let Rt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await $m(I,Rt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Be),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ue),I.deleteBuffer(Be),I.deleteSync(Rt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,k=null,Y=0){S.isTexture!==!0&&(Kr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,S=arguments[1]);let $=Math.pow(2,-Y),H=Math.floor(S.image.width*$),ue=Math.floor(S.image.height*$),Se=k!==null?k.x:0,Oe=k!==null?k.y:0;w.setTexture2D(S,0),I.copyTexSubImage2D(I.TEXTURE_2D,Y,0,0,Se,Oe,H,ue),be.unbindTexture()},this.copyTextureToTexture=function(S,k,Y=null,$=null,H=0){S.isTexture!==!0&&(Kr("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,S=arguments[1],k=arguments[2],H=arguments[3]||0,Y=null);let ue,Se,Oe,Fe,Ze,je,Be,ut,Rt,It=S.isCompressedTexture?S.mipmaps[H]:S.image;Y!==null?(ue=Y.max.x-Y.min.x,Se=Y.max.y-Y.min.y,Oe=Y.isBox3?Y.max.z-Y.min.z:1,Fe=Y.min.x,Ze=Y.min.y,je=Y.isBox3?Y.min.z:0):(ue=It.width,Se=It.height,Oe=It.depth||1,Fe=0,Ze=0,je=0),$!==null?(Be=$.x,ut=$.y,Rt=$.z):(Be=0,ut=0,Rt=0);let _n=et.convert(k.format),xt=et.convert(k.type),Ve;k.isData3DTexture?(w.setTexture3D(k,0),Ve=I.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(w.setTexture2DArray(k,0),Ve=I.TEXTURE_2D_ARRAY):(w.setTexture2D(k,0),Ve=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment);let ri=I.getParameter(I.UNPACK_ROW_LENGTH),_t=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Hn=I.getParameter(I.UNPACK_SKIP_PIXELS),Gs=I.getParameter(I.UNPACK_SKIP_ROWS),An=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,It.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,It.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Fe),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ze),I.pixelStorei(I.UNPACK_SKIP_IMAGES,je);let kr=S.isDataArrayTexture||S.isData3DTexture,Pt=k.isDataArrayTexture||k.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){let Jn=Pe.get(S),zr=Pe.get(k),Un=Pe.get(Jn.__renderTarget),Li=Pe.get(zr.__renderTarget);be.bindFramebuffer(I.READ_FRAMEBUFFER,Un.__webglFramebuffer),be.bindFramebuffer(I.DRAW_FRAMEBUFFER,Li.__webglFramebuffer);for(let Di=0;Di<Oe;Di++)kr&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Pe.get(S).__webglTexture,H,je+Di),S.isDepthTexture?(Pt&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Pe.get(k).__webglTexture,H,Rt+Di),I.blitFramebuffer(Fe,Ze,ue,Se,Be,ut,ue,Se,I.DEPTH_BUFFER_BIT,I.NEAREST)):Pt?I.copyTexSubImage3D(Ve,H,Be,ut,Rt+Di,Fe,Ze,ue,Se):I.copyTexSubImage2D(Ve,H,Be,ut,Rt+Di,Fe,Ze,ue,Se);be.bindFramebuffer(I.READ_FRAMEBUFFER,null),be.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Pt?S.isDataTexture||S.isData3DTexture?I.texSubImage3D(Ve,H,Be,ut,Rt,ue,Se,Oe,_n,xt,It.data):k.isCompressedArrayTexture?I.compressedTexSubImage3D(Ve,H,Be,ut,Rt,ue,Se,Oe,_n,It.data):I.texSubImage3D(Ve,H,Be,ut,Rt,ue,Se,Oe,_n,xt,It):S.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,H,Be,ut,ue,Se,_n,xt,It.data):S.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,H,Be,ut,It.width,It.height,_n,It.data):I.texSubImage2D(I.TEXTURE_2D,H,Be,ut,ue,Se,_n,xt,It);I.pixelStorei(I.UNPACK_ROW_LENGTH,ri),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,_t),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Hn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Gs),I.pixelStorei(I.UNPACK_SKIP_IMAGES,An),H===0&&k.generateMipmaps&&I.generateMipmap(Ve),be.unbindTexture()},this.copyTextureToTexture3D=function(S,k,Y=null,$=null,H=0){return S.isTexture!==!0&&(Kr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,$=arguments[1]||null,S=arguments[2],k=arguments[3],H=arguments[4]||0),Kr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,k,Y,$,H)},this.initRenderTarget=function(S){Pe.get(S).__webglFramebuffer===void 0&&w.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?w.setTextureCube(S,0):S.isData3DTexture?w.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?w.setTexture2DArray(S,0):w.setTexture2D(S,0),be.unbindTexture()},this.resetState=function(){A=0,R=0,P=null,be.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}},Ra=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Me(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},Ca=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Me(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Cs=class extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},oo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=kl,this.updateRanges=[],this.version=0,this.uuid=qn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},mn=new U,ao=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix4(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyNormalMatrix(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.transformDirection(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Xn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Xn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Xn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Xn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),s=bt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),s=bt(s,this.array),r=bt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Et(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Yd=new U,$d=new pt,Zd=new pt,Gy=new U,Kd=new qe,ra=new U,$c=new nn,Jd=new qe,Zc=new Rs,Ia=class extends ne{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ku,this.bindMatrix=new qe,this.bindMatrixInverse=new qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Zt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ra),this.boundingBox.expandByPoint(ra)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new nn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ra),this.boundingSphere.expandByPoint(ra)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$c.copy(this.boundingSphere),$c.applyMatrix4(s),e.ray.intersectsSphere($c)!==!1&&(Jd.copy(s).invert(),Zc.copy(e.ray).applyMatrix4(Jd),!(this.boundingBox!==null&&Zc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Zc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new pt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ku?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ym?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;$d.fromBufferAttribute(s.attributes.skinIndex,e),Zd.fromBufferAttribute(s.attributes.skinWeight,e),Yd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Zd.getComponent(r);if(o!==0){let a=$d.getComponent(r);Kd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Gy.copy(Yd).applyMatrix4(Kd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},co=class extends Ut{constructor(){super(),this.isBone=!0,this.type="Bone"}},As=class extends Kt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=un,h=un,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},jd=new qe,Wy=new qe,Pa=class i{constructor(e=[],t=[]){this.uuid=qn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new qe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Wy;jd.multiplyMatrices(a,t[r]),jd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new As(t,e,e,bn,In);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new co),this.bones.push(o),this.boneInverses.push(new qe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},Is=class extends Et{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},sr=new qe,Qd=new qe,oa=[],ef=new Zt,Xy=new qe,Xr=new ne,qr=new nn,_i=class extends ne{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Is(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Xy)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Zt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,sr),ef.copy(e.boundingBox).applyMatrix4(sr),this.boundingBox.union(ef)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new nn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,sr),qr.copy(e.boundingSphere).applyMatrix4(sr),this.boundingSphere.union(qr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Xr.geometry=this.geometry,Xr.material=this.material,Xr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qr.copy(this.boundingSphere),qr.applyMatrix4(n),e.ray.intersectsSphere(qr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,sr),Qd.multiplyMatrices(n,sr),Xr.matrixWorld=Qd,Xr.raycast(e,oa);for(let o=0,a=oa.length;o<a;o++){let c=oa[o];c.instanceId=r,c.object=this,t.push(c)}oa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Is(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new As(new Float32Array(s*this.count),s,this.count,Rh,In));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};function Kc(i,e){return i-e}function qy(i,e){return i.z-e.z}function Yy(i,e){return e.z-i.z}var nh=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,s){let r=this.pool,o=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let a=r[this.index];o.push(a),this.index++,a.start=e,a.count=t,a.z=n,a.index=s}reset(){this.list.length=0,this.index=0}},yn=new qe,$y=new Me(1,1,1),Jc=new vr,aa=new Zt,Ms=new nn,Yr=new U,tf=new U,Zy=new U,jc=new nh,ln=new ne,ca=[];function Ky(i,e,t=0){let n=e.itemSize;if(i.isInterleavedBufferAttribute||i.array.constructor!==e.array.constructor){let s=i.count;for(let r=0;r<s;r++)for(let o=0;o<n;o++)e.setComponent(r+t,o,i.getComponent(r,o))}else e.array.set(i.array,t*n);e.needsUpdate=!0}function bs(i,e){if(i.constructor!==e.constructor){let t=Math.min(i.length,e.length);for(let n=0;n<t;n++)e[n]=i[n]}else{let t=Math.min(i.length,e.length);e.set(new i.constructor(i.buffer,0,t))}}var lo=class extends ne{get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}constructor(e,t,n=t*2,s){super(new dt,s),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4),n=new As(t,e,e,bn,In);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Uint32Array(e*e),n=new As(t,e,e,qa,Gi);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Float32Array(e*e*4).fill(1),n=new As(t,e,e,bn,In);n.colorSpace=nt.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){let t=this.geometry,n=this._maxVertexCount,s=this._maxIndexCount;if(this._geometryInitialized===!1){for(let r in e.attributes){let o=e.getAttribute(r),{array:a,itemSize:c,normalized:l}=o,h=new a.constructor(n*c),u=new Et(h,c,l);t.setAttribute(r,u)}if(e.getIndex()!==null){let r=n>65535?new Uint32Array(s):new Uint16Array(s);t.setIndex(new Et(r,1))}this._geometryInitialized=!0}}_validateGeometry(e){let t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(let n in t.attributes){if(!e.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);let s=e.getAttribute(n),r=t.getAttribute(n);if(s.itemSize!==r.itemSize||s.normalized!==r.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zt);let e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,s=t.length;n<s;n++){if(t[n].active===!1)continue;let r=t[n].geometryIndex;this.getMatrixAt(n,yn),this.getBoundingBoxAt(r,aa).applyMatrix4(yn),e.union(aa)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nn);let e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,s=t.length;n<s;n++){if(t[n].active===!1)continue;let r=t[n].geometryIndex;this.getMatrixAt(n,yn),this.getBoundingSphereAt(r,Ms).applyMatrix4(yn),e.union(Ms)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("BatchedMesh: Maximum item count reached.");let n={visible:!0,active:!0,geometryIndex:e},s=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Kc),s=this._availableInstanceIds.shift(),this._instanceInfo[s]=n):(s=this._instanceInfo.length,this._instanceInfo.push(n));let r=this._matricesTexture;yn.identity().toArray(r.image.data,s*16),r.needsUpdate=!0;let o=this._colorsTexture;return o&&($y.toArray(o.image.data,s*4),o.needsUpdate=!0),this._visibilityChanged=!0,s}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);let s={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;s.vertexStart=this._nextVertexStart,s.reservedVertexCount=t===-1?e.getAttribute("position").count:t;let o=e.getIndex();if(o!==null&&(s.indexStart=this._nextIndexStart,s.reservedIndexCount=n===-1?o.count:n),s.indexStart!==-1&&s.indexStart+s.reservedIndexCount>this._maxIndexCount||s.vertexStart+s.reservedVertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");let c;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Kc),c=this._availableGeometryIds.shift(),r[c]=s):(c=this._geometryCount,this._geometryCount++,r.push(s)),this.setGeometryAt(c,e),this._nextIndexStart=s.indexStart+s.reservedIndexCount,this._nextVertexStart=s.vertexStart+s.reservedVertexCount,c}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);let n=this.geometry,s=n.getIndex()!==null,r=n.getIndex(),o=t.getIndex(),a=this._geometryInfo[e];if(s&&o.count>a.reservedIndexCount||t.attributes.position.count>a.reservedVertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");let c=a.vertexStart,l=a.reservedVertexCount;a.vertexCount=t.getAttribute("position").count;for(let h in n.attributes){let u=t.getAttribute(h),d=n.getAttribute(h);Ky(u,d,c);let f=u.itemSize;for(let g=u.count,x=l;g<x;g++){let m=c+g;for(let p=0;p<f;p++)d.setComponent(m,p,0)}d.needsUpdate=!0,d.addUpdateRange(c*f,l*f)}if(s){let h=a.indexStart,u=a.reservedIndexCount;a.indexCount=t.getIndex().count;for(let d=0;d<o.count;d++)r.setX(h+d,c+o.getX(d));for(let d=o.count,f=u;d<f;d++)r.setX(h+d,c);r.needsUpdate=!0,r.addUpdateRange(h,a.reservedIndexCount)}return a.start=s?a.indexStart:a.vertexStart,a.count=s?a.indexCount:a.vertexCount,a.boundingBox=null,t.boundingBox!==null&&(a.boundingBox=t.boundingBox.clone()),a.boundingSphere=null,t.boundingSphere!==null&&(a.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){let t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;let n=this._instanceInfo;for(let s=0,r=n.length;s<r;s++)n[s].geometryIndex===e&&this.deleteInstance(s);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){let t=this._instanceInfo;return e>=t.length||t[e].active===!1?this:(t[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this)}optimize(){let e=0,t=0,n=this._geometryInfo,s=n.map((o,a)=>a).sort((o,a)=>n[o].vertexStart-n[a].vertexStart),r=this.geometry;for(let o=0,a=n.length;o<a;o++){let c=s[o],l=n[c];if(l.active!==!1){if(r.index!==null){if(l.indexStart!==t){let{indexStart:h,vertexStart:u,reservedIndexCount:d}=l,f=r.index,g=f.array,x=e-u;for(let m=h;m<h+d;m++)g[m]=g[m]+x;f.array.copyWithin(t,h,h+d),f.addUpdateRange(t,d),l.indexStart=t}t+=l.reservedIndexCount}if(l.vertexStart!==e){let{vertexStart:h,reservedVertexCount:u}=l,d=r.attributes;for(let f in d){let g=d[f],{array:x,itemSize:m}=g;x.copyWithin(e*m,h*m,(h+u)*m),g.addUpdateRange(e*m,u*m)}l.vertexStart=e}e+=l.reservedVertexCount,l.start=r.index?l.indexStart:l.vertexStart,this._nextIndexStart=r.index?l.indexStart+l.reservedIndexCount:0,this._nextVertexStart=l.vertexStart+l.reservedVertexCount}}return this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;let n=this.geometry,s=this._geometryInfo[e];if(s.boundingBox===null){let r=new Zt,o=n.index,a=n.attributes.position;for(let c=s.start,l=s.start+s.count;c<l;c++){let h=c;o&&(h=o.getX(h)),r.expandByPoint(Yr.fromBufferAttribute(a,h))}s.boundingBox=r}return t.copy(s.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;let n=this.geometry,s=this._geometryInfo[e];if(s.boundingSphere===null){let r=new nn;this.getBoundingBoxAt(e,aa),aa.getCenter(r.center);let o=n.index,a=n.attributes.position,c=0;for(let l=s.start,h=s.start+s.count;l<h;l++){let u=l;o&&(u=o.getX(u)),Yr.fromBufferAttribute(a,u),c=Math.max(c,r.center.distanceToSquared(Yr))}r.radius=Math.sqrt(c),s.boundingSphere=r}return t.copy(s.boundingSphere),t}setMatrixAt(e,t){let n=this._instanceInfo,s=this._matricesTexture,r=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?this:(t.toArray(r,e*16),s.needsUpdate=!0,this)}getMatrixAt(e,t){let n=this._instanceInfo,s=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?null:t.fromArray(s,e*16)}setColorAt(e,t){this._colorsTexture===null&&this._initColorsTexture();let n=this._colorsTexture,s=this._colorsTexture.image.data,r=this._instanceInfo;return e>=r.length||r[e].active===!1?this:(t.toArray(s,e*4),n.needsUpdate=!0,this)}getColorAt(e,t){let n=this._colorsTexture.image.data,s=this._instanceInfo;return e>=s.length||s[e].active===!1?null:t.fromArray(n,e*4)}setVisibleAt(e,t){let n=this._instanceInfo;return e>=n.length||n[e].active===!1||n[e].visible===t?this:(n[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){let t=this._instanceInfo;return e>=t.length||t[e].active===!1?!1:t[e].visible}setGeometryIdAt(e,t){let n=this._instanceInfo,s=this._geometryInfo;return e>=n.length||n[e].active===!1||t>=s.length||s[t].active===!1?null:(n[e].geometryIndex=t,this)}getGeometryIdAt(e){let t=this._instanceInfo;return e>=t.length||t[e].active===!1?-1:t[e].geometryIndex}getGeometryRangeAt(e,t={}){if(e<0||e>=this._geometryCount)return null;let n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){let t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(Kc);t[t.length-1]===n.length;)n.pop(),t.pop();if(e<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);let s=new Int32Array(e),r=new Int32Array(e);bs(this._multiDrawCounts,s),bs(this._multiDrawStarts,r),this._multiDrawCounts=s,this._multiDrawStarts=r,this._maxInstanceCount=e;let o=this._indirectTexture,a=this._matricesTexture,c=this._colorsTexture;o.dispose(),this._initIndirectTexture(),bs(o.image.data,this._indirectTexture.image.data),a.dispose(),this._initMatricesTexture(),bs(a.image.data,this._matricesTexture.image.data),c&&(c.dispose(),this._initColorsTexture(),bs(c.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){let n=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...n.map(a=>a.vertexStart+a.reservedVertexCount))>e)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(c=>c.indexStart+c.reservedIndexCount))>t)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);let r=this.geometry;r.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new dt,this._initializeGeometry(r));let o=this.geometry;r.index&&bs(r.index.array,o.index.array);for(let a in r.attributes)bs(r.attributes[a].array,o.attributes[a].array)}raycast(e,t){let n=this._instanceInfo,s=this._geometryInfo,r=this.matrixWorld,o=this.geometry;ln.material=this.material,ln.geometry.index=o.index,ln.geometry.attributes=o.attributes,ln.geometry.boundingBox===null&&(ln.geometry.boundingBox=new Zt),ln.geometry.boundingSphere===null&&(ln.geometry.boundingSphere=new nn);for(let a=0,c=n.length;a<c;a++){if(!n[a].visible||!n[a].active)continue;let l=n[a].geometryIndex,h=s[l];ln.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(a,ln.matrixWorld).premultiply(r),this.getBoundingBoxAt(l,ln.geometry.boundingBox),this.getBoundingSphereAt(l,ln.geometry.boundingSphere),ln.raycast(e,ca);for(let u=0,d=ca.length;u<d;u++){let f=ca[u];f.object=this,f.batchId=a,t.push(f)}ca.length=0}ln.material=null,ln.geometry.index=null,ln.geometry.attributes={},ln.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(e,t,n,s,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let o=s.getIndex(),a=o===null?1:o.array.BYTES_PER_ELEMENT,c=this._instanceInfo,l=this._multiDrawStarts,h=this._multiDrawCounts,u=this._geometryInfo,d=this.perObjectFrustumCulled,f=this._indirectTexture,g=f.image.data;d&&(yn.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),Jc.setFromProjectionMatrix(yn,e.coordinateSystem));let x=0;if(this.sortObjects){yn.copy(this.matrixWorld).invert(),Yr.setFromMatrixPosition(n.matrixWorld).applyMatrix4(yn),tf.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(yn);for(let y=0,b=c.length;y<b;y++)if(c[y].visible&&c[y].active){let _=c[y].geometryIndex;this.getMatrixAt(y,yn),this.getBoundingSphereAt(_,Ms).applyMatrix4(yn);let L=!1;if(d&&(L=!Jc.intersectsSphere(Ms)),!L){let A=u[_],R=Zy.subVectors(Ms.center,Yr).dot(tf);jc.push(A.start,A.count,R,y)}}let m=jc.list,p=this.customSort;p===null?m.sort(r.transparent?Yy:qy):p.call(this,m,n);for(let y=0,b=m.length;y<b;y++){let _=m[y];l[x]=_.start*a,h[x]=_.count,g[x]=_.index,x++}jc.reset()}else for(let m=0,p=c.length;m<p;m++)if(c[m].visible&&c[m].active){let y=c[m].geometryIndex,b=!1;if(d&&(this.getMatrixAt(m,yn),this.getBoundingSphereAt(y,Ms).applyMatrix4(yn),b=!Jc.intersectsSphere(Ms)),!b){let _=u[y];l[x]=_.start*a,h[x]=_.count,g[x]=m,x++}}f.needsUpdate=!0,this._multiDrawCount=x,this._visibilityChanged=!1}onBeforeShadow(e,t,n,s,r,o){this.onBeforeRender(e,null,s,r,o)}},qi=class extends Sn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},La=new U,Da=new U,nf=new qe,$r=new Rs,la=new nn,Qc=new U,sf=new U,yi=class extends Ut{constructor(e=new dt,t=new qi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)La.fromBufferAttribute(t,s-1),Da.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=La.distanceTo(Da);e.setAttribute("lineDistance",new it(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),la.copy(n.boundingSphere),la.applyMatrix4(s),la.radius+=r,e.ray.intersectsSphere(la)===!1)return;nf.copy(s).invert(),$r.copy(e.ray).applyMatrix4(nf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=l){let p=h.getX(x),y=h.getX(x+1),b=ha(this,e,$r,c,p,y);b&&t.push(b)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(f),p=ha(this,e,$r,c,x,m);p&&t.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=l){let p=ha(this,e,$r,c,x,x+1);p&&t.push(p)}if(this.isLineLoop){let x=ha(this,e,$r,c,g-1,f);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ha(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(La.fromBufferAttribute(o,s),Da.fromBufferAttribute(o,r),t.distanceSqToSegment(La,Da,Qc,sf)>n)return;Qc.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Qc);if(!(c<e.near||c>e.far))return{distance:c,point:sf.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var rf=new U,of=new U,Na=class extends yi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)rf.fromBufferAttribute(t,s),of.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+rf.distanceTo(of);e.setAttribute("lineDistance",new it(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ua=class extends yi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},vi=class extends Sn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},af=new qe,ih=new Rs,ua=new nn,da=new U,Yi=class extends Ut{constructor(e=new dt,t=new vi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(s),ua.radius+=r,e.ray.intersectsSphere(ua)===!1)return;af.copy(s).invert(),ih.copy(e.ray).applyMatrix4(af);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,x=f;g<x;g++){let m=l.getX(g);da.fromBufferAttribute(u,m),cf(da,m,c,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,x=f;g<x;g++)da.fromBufferAttribute(u,g),cf(da,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function cf(i,e,t,n,s,r,o){let a=ih.distanceSqToPoint(i);if(a<t){let c=new U;ih.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Oa=class extends Kt{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var $i=class i extends dt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new U,h=new He;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new it(o,3)),this.setAttribute("normal",new it(a,3)),this.setAttribute("uv",new it(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},qt=class i extends dt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],m=n/2,p=0;y(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new it(u,3)),this.setAttribute("normal",new it(d,3)),this.setAttribute("uv",new it(f,2));function y(){let _=new U,L=new U,A=0,R=(t-e)/n;for(let P=0;P<=r;P++){let E=[],M=P/r,N=M*(t-e)+e;for(let X=0;X<=s;X++){let W=X/s,V=W*c+a,K=Math.sin(V),q=Math.cos(V);L.x=N*K,L.y=-M*n+m,L.z=N*q,u.push(L.x,L.y,L.z),_.set(K,R,q).normalize(),d.push(_.x,_.y,_.z),f.push(W,1-M),E.push(g++)}x.push(E)}for(let P=0;P<s;P++)for(let E=0;E<r;E++){let M=x[E][P],N=x[E+1][P],X=x[E+1][P+1],W=x[E][P+1];(e>0||E!==0)&&(h.push(M,N,W),A+=3),(t>0||E!==r-1)&&(h.push(N,X,W),A+=3)}l.addGroup(p,A,0),p+=A}function b(_){let L=g,A=new He,R=new U,P=0,E=_===!0?e:t,M=_===!0?1:-1;for(let X=1;X<=s;X++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;let N=g;for(let X=0;X<=s;X++){let V=X/s*c+a,K=Math.cos(V),q=Math.sin(V);R.x=E*q,R.y=m*M,R.z=E*K,u.push(R.x,R.y,R.z),d.push(0,M,0),A.x=K*.5+.5,A.y=q*.5*M+.5,f.push(A.x,A.y),g++}for(let X=0;X<s;X++){let W=L+X,V=N+X;_===!0?h.push(V,V+1,W):h.push(V+1,V,W),P+=3}l.addGroup(p,P,_===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Zi=class i extends qt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ho=class i extends dt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new it(r,3)),this.setAttribute("normal",new it(r.slice(),3)),this.setAttribute("uv",new it(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let b=new U,_=new U,L=new U;for(let A=0;A<t.length;A+=3)f(t[A+0],b),f(t[A+1],_),f(t[A+2],L),c(b,_,L,y)}function c(y,b,_,L){let A=L+1,R=[];for(let P=0;P<=A;P++){R[P]=[];let E=y.clone().lerp(_,P/A),M=b.clone().lerp(_,P/A),N=A-P;for(let X=0;X<=N;X++)X===0&&P===A?R[P][X]=E:R[P][X]=E.clone().lerp(M,X/N)}for(let P=0;P<A;P++)for(let E=0;E<2*(A-P)-1;E++){let M=Math.floor(E/2);E%2===0?(d(R[P][M+1]),d(R[P+1][M]),d(R[P][M])):(d(R[P][M+1]),d(R[P+1][M+1]),d(R[P+1][M]))}}function l(y){let b=new U;for(let _=0;_<r.length;_+=3)b.x=r[_+0],b.y=r[_+1],b.z=r[_+2],b.normalize().multiplyScalar(y),r[_+0]=b.x,r[_+1]=b.y,r[_+2]=b.z}function h(){let y=new U;for(let b=0;b<r.length;b+=3){y.x=r[b+0],y.y=r[b+1],y.z=r[b+2];let _=m(y)/2/Math.PI+.5,L=p(y)/Math.PI+.5;o.push(_,1-L)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){let b=o[y+0],_=o[y+2],L=o[y+4],A=Math.max(b,_,L),R=Math.min(b,_,L);A>.9&&R<.1&&(b<.2&&(o[y+0]+=1),_<.2&&(o[y+2]+=1),L<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,b){let _=y*3;b.x=e[_+0],b.y=e[_+1],b.z=e[_+2]}function g(){let y=new U,b=new U,_=new U,L=new U,A=new He,R=new He,P=new He;for(let E=0,M=0;E<r.length;E+=9,M+=6){y.set(r[E+0],r[E+1],r[E+2]),b.set(r[E+3],r[E+4],r[E+5]),_.set(r[E+6],r[E+7],r[E+8]),A.set(o[M+0],o[M+1]),R.set(o[M+2],o[M+3]),P.set(o[M+4],o[M+5]),L.copy(y).add(b).add(_).divideScalar(3);let N=m(L);x(A,M+0,y,N),x(R,M+2,b,N),x(P,M+4,_,N)}}function x(y,b,_,L){L<0&&y.x===1&&(o[b]=y.x-1),_.x===0&&_.z===0&&(o[b]=L/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},Fa=class i extends ho{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var br=class i extends ho{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Ba=class i extends ho{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Ki=class i extends dt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=e,d=(t-e)/s,f=new U,g=new He;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let p=r+m/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<s;x++){let m=x*(n+1);for(let p=0;p<n;p++){let y=p+m,b=y,_=y+n+1,L=y+n+2,A=y+1;a.push(b,_,A),a.push(_,L,A)}}this.setIndex(a),this.setAttribute("position",new it(c,3)),this.setAttribute("normal",new it(l,3)),this.setAttribute("uv",new it(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Mi=class i extends dt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new U,d=new U,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let y=[],b=p/n,_=0;p===0&&o===0?_=.5/t:p===n&&c===Math.PI&&(_=-.5/t);for(let L=0;L<=t;L++){let A=L/t;u.x=-e*Math.cos(s+A*r)*Math.sin(o+b*a),u.y=e*Math.cos(o+b*a),u.z=e*Math.sin(s+A*r)*Math.sin(o+b*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(A+_,1-b),y.push(l++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){let b=h[p][y+1],_=h[p][y],L=h[p+1][y],A=h[p+1][y+1];(p!==0||o>0)&&f.push(b,_,A),(p!==n-1||c<Math.PI)&&f.push(_,L,A)}this.setIndex(f),this.setAttribute("position",new it(g,3)),this.setAttribute("normal",new it(x,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Fn=class i extends dt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new U,u=new U,d=new U;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let x=g/s*r,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(x),u.y=(e+t*Math.cos(m))*Math.sin(x),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let x=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,y=(s+1)*f+g;o.push(x,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new it(a,3)),this.setAttribute("normal",new it(c,3)),this.setAttribute("uv",new it(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var ka=class extends Ht{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},Ae=class extends Sn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ph,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Pn=class extends Ae{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new He(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return hn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Me(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var uo=class extends Sn{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ph,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=_h,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function fa(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Jy(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function jy(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function lf(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function Bf(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var Ji=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},sh=class extends Ji{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ju,endingEnd:Ju}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ju:r=e,a=2*t-n;break;case Qu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ju:o=e,c=2*n-t;break;case Qu:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,y=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,b=(-1-f)*m+(1.5+f)*x+.5*g,_=f*m-f*x;for(let L=0;L!==a;++L)r[L]=p*o[h+L]+y*o[l+L]+b*o[c+L]+_*o[u+L];return r}},rh=class extends Ji{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},oh=class extends Ji{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Bn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=fa(t,this.TimeBufferType),this.values=fa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:fa(e.times,Array),values:fa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new oh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new rh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new sh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case gr:t=this.InterpolantFactoryMethodDiscrete;break;case xr:t=this.InterpolantFactoryMethodLinear;break;case Mc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gr;case this.InterpolantFactoryMethodLinear:return xr;case this.InterpolantFactoryMethodSmooth:return Mc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Jy(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Mc,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let x=t[u+g];if(x!==t[d+g]||x!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=xr;var ji=class extends Bn{constructor(e,t,n){super(e,t,n)}};ji.prototype.ValueTypeName="bool";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=gr;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var za=class extends Bn{};za.prototype.ValueTypeName="color";var bi=class extends Bn{};bi.prototype.ValueTypeName="number";var ah=class extends Ji{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)xn.slerpFlat(r,0,o,l-a,o,l,c);return r}},Ei=class extends Bn{InterpolantFactoryMethodLinear(e){return new ah(this.times,this.values,this.getValueSize(),e)}};Ei.prototype.ValueTypeName="quaternion";Ei.prototype.InterpolantFactoryMethodSmooth=void 0;var Qi=class extends Bn{constructor(e,t,n){super(e,t,n)}};Qi.prototype.ValueTypeName="string";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=gr;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Si=class extends Bn{};Si.prototype.ValueTypeName="vector";var Ha=class{constructor(e="",t=-1,n=[],s=vm){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=qn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(ev(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Bn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=jy(c);c=lf(c,1,h),l=lf(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new bi(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,g,x){if(f.length!==0){let m=[],p=[];Bf(f,m,p,g),m.length!==0&&x.push(new u(d,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(let x in f){let m=[],p=[];for(let y=0;y!==d[g].morphTargets.length;++y){let b=d[g];m.push(b.time),p.push(b.morphTarget===x?1:0)}s.push(new bi(".morphTargetInfluence["+x+"]",m,p))}c=f.length*o}else{let f=".bones["+t[u].name+"]";n(Si,f+".position",d,"pos",s),n(Ei,f+".quaternion",d,"rot",s),n(Si,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Qy(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return bi;case"vector":case"vector2":case"vector3":case"vector4":return Si;case"color":return za;case"quaternion":return Ei;case"bool":case"boolean":return ji;case"string":return Qi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function ev(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Qy(i.type);if(i.times===void 0){let t=[],n=[];Bf(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Hi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},ch=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},tv=new ch,Ti=class{constructor(e){this.manager=e!==void 0?e:tv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ti.DEFAULT_MATERIAL_NAME="__DEFAULT";var ui={},lh=class extends Error{constructor(e,t){super(e),this.response=t}},fo=class extends Ti{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Hi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ui[e]!==void 0){ui[e].push({onLoad:t,onProgress:n,onError:s});return}ui[e]=[],ui[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=ui[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,x=0,m=new ReadableStream({start(p){y();function y(){u.read().then(({done:b,value:_})=>{if(b)p.close();else{x+=_.byteLength;let L=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let A=0,R=h.length;A<R;A++){let P=h[A];P.onProgress&&P.onProgress(L)}p.enqueue(_),y()}},b=>{p.error(b)})}}});return new Response(m)}else throw new lh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Hi.add(e,l);let h=ui[e];delete ui[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=ui[e];if(h===void 0)throw this.manager.itemError(e),l;delete ui[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var hh=class extends Ti{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Hi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=so("img");function c(){h(),Hi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Va=class extends Ti{constructor(e){super(e)}load(e,t,n,s){let r=new Kt,o=new hh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Er=class extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},po=class extends Er{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Me(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},el=new qe,hf=new U,uf=new U,mo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vr,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;hf.setFromMatrixPosition(e.matrixWorld),t.position.copy(hf),uf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(uf),t.updateMatrixWorld(),el.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(el),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(el)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},uh=class extends mo{constructor(){super(new zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=_r*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},es=class extends Er{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new uh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},df=new qe,Zr=new U,tl=new U,dh=class extends mo{constructor(){super(new zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new He(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Zr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Zr),tl.copy(n.position),tl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(tl),n.updateMatrixWorld(),s.makeTranslation(-Zr.x,-Zr.y,-Zr.z),df.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(df)}},Ps=class extends Er{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new dh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},fh=class extends mo{constructor(){super(new Xi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Sr=class extends Er{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new fh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ts=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Ga=class extends Ti{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Hi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Hi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Hi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Hi.add(e,c),r.manager.itemStart(e)}};var Tr=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ff(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=ff();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function ff(){return performance.now()}var Nh="\\[\\]\\.:\\/",nv=new RegExp("["+Nh+"]","g"),Uh="[^"+Nh+"]",iv="[^"+Nh.replace("\\.","")+"]",sv=/((?:WC+[\/:])*)/.source.replace("WC",Uh),rv=/(WCOD+)?/.source.replace("WCOD",iv),ov=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Uh),av=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Uh),cv=new RegExp("^"+sv+rv+ov+av+"$"),lv=["material","materials","bones","map"],ph=class{constructor(e,t,n){let s=n||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ct=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(nv,"")}static parseTrackName(e){let t=cv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);lv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ct.Composite=ph;Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var WM=new Float32Array(1);var pf=new qe,Wa=class{constructor(e,t,n=0,s=1/0){this.ray=new Rs(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ro,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return pf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(pf),this}intersectObject(e,t=!0,n=[]){return mh(e,this,n,t),n.sort(mf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)mh(e[s],this,n,t);return n.sort(mf),n}};function mf(i,e){return i.distance-e.distance}function mh(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)mh(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gh);function _o(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new dt,l=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=kf(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);let g=kf(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function kf(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new Et(o,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<t;g++){let x=h.getComponent(d,g);a.setComponent(d+u,g,x)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function Oh(i,e){if(e===Af)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===xo||e===Ya){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===xo)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Ka=class extends Ti{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Gh(t)}),this.register(function(t){return new Wh(t)}),this.register(function(t){return new Qh(t)}),this.register(function(t){return new eu(t)}),this.register(function(t){return new tu(t)}),this.register(function(t){return new qh(t)}),this.register(function(t){return new Yh(t)}),this.register(function(t){return new $h(t)}),this.register(function(t){return new Zh(t)}),this.register(function(t){return new Vh(t)}),this.register(function(t){return new Kh(t)}),this.register(function(t){return new Xh(t)}),this.register(function(t){return new jh(t)}),this.register(function(t){return new Jh(t)}),this.register(function(t){return new zh(t)}),this.register(function(t){return new nu(t)}),this.register(function(t){return new iu(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=ts.extractUrlBase(e);o=ts.resolveURL(l,this.path)}else o=ts.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new fo(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Wf){try{o[st.KHR_BINARY_GLTF]=new su(e)}catch(u){s&&s(u);return}r=JSON.parse(o[st.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new uu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case st.KHR_MATERIALS_UNLIT:o[u]=new Hh;break;case st.KHR_DRACO_MESH_COMPRESSION:o[u]=new ru(r,this.dracoLoader);break;case st.KHR_TEXTURE_TRANSFORM:o[u]=new ou;break;case st.KHR_MESH_QUANTIZATION:o[u]=new au;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function uv(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var st={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},zh=class{constructor(e){this.parser=e,this.name=st.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Me(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],fn);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Sr(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Ps(h),l.distance=u;break;case"spot":l=new es(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,wi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},Hh=class{constructor(){this.name=st.KHR_MATERIALS_UNLIT}getMaterialType(){return vt}extendParams(e,t,n){let s=[];e.color=new Me(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],fn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,kt))}return Promise.all(s)}},Vh=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Gh=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new He(a,a)}return Promise.all(r)}},Wh=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Xh=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},qh=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Me(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],fn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,kt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Yh=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},$h=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Me().setRGB(a[0],a[1],a[2],fn),Promise.all(r)}},Zh=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Kh=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Me().setRGB(a[0],a[1],a[2],fn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,kt)),Promise.all(r)}},Jh=class{constructor(e){this.parser=e,this.name=st.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},jh=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Qh=class{constructor(e){this.parser=e,this.name=st.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},eu=class{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},tu=class{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},nu=class{constructor(e){this.name=st.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},iu=class{constructor(e){this.name=st.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==kn.TRIANGLES&&l.mode!==kn.TRIANGLE_STRIP&&l.mode!==kn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let g of u){let x=new qe,m=new U,p=new xn,y=new U(1,1,1),b=new _i(g.geometry,g.material,d);for(let _=0;_<d;_++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,_),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,_),c.SCALE&&y.fromBufferAttribute(c.SCALE,_),b.setMatrixAt(_,x.compose(m,p,y));for(let _ in c)if(_==="_COLOR_0"){let L=c[_];b.instanceColor=new Is(L.array,L.itemSize,L.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,c[_]);Ut.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),f.push(b)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Wf="glTF",yo=12,zf={JSON:1313821514,BIN:5130562},su=class{constructor(e){this.name=st.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,yo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Wf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-yo,r=new DataView(e,yo),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===zf.JSON){let l=new Uint8Array(e,yo+o,a);this.content=n.decode(l)}else if(c===zf.BIN){let l=yo+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},ru=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=st.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=lu[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=lu[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Ar[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let x=f.attributes[g],m=c[g];m!==void 0&&(x.normalized=m)}u(f)},a,l,fn,d)})})}},ou=class{constructor(){this.name=st.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},au=class{constructor(){this.name=st.KHR_MESH_QUANTIZATION}},Ja=class extends Ji{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,x=g-l,m=-2*f+3*d,p=f-d,y=1-m,b=p-d+u;for(let _=0;_!==a;_++){let L=o[x+_+a],A=o[x+_+c]*h,R=o[g+_+a],P=o[g+_]*h;r[_]=y*L+b*A+m*R+p*P}return r}},dv=new xn,cu=class extends Ja{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return dv.fromArray(r).normalize().toArray(r),r}},kn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ar={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Hf={9728:un,9729:Mn,9984:Sh,9985:jr,9986:rr,9987:Qn},Vf={33071:vn,33648:no,10497:gi},Fh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},lu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},is={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},fv={CUBICSPLINE:void 0,LINEAR:xr,STEP:gr},Bh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function pv(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ae({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ti})),i.DefaultMaterial}function Ls(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function wi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function mv(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function gv(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function xv(i){let e,t=i.extensions&&i.extensions[st.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+kh(t.attributes):e=i.indices+":"+kh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+kh(i.targets[n]);return e}function kh(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function hu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function _v(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var yv=new qe,uu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new uv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Va(this.options.manager):this.textureLoader=new Ga(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new fo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Ls(r,a,s),wi(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[st.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(ts.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Fh[s.type],a=Ar[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new Et(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=Fh[s.type],l=Ar[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,x,m;if(f&&f!==u){let p=Math.floor(d/f),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,b=t.cache.get(y);b||(x=new l(a,p*f,s.count*f/h),b=new oo(x,f/h),t.cache.add(y,b)),m=new ao(b,c,d%f/h,g)}else a===null?x=new l(s.count*c):x=new l(a,d,s.count*c),m=new Et(x,c,g);if(s.sparse!==void 0){let p=Fh.SCALAR,y=Ar[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,L=new y(o[1],b,s.sparse.count*p),A=new l(o[2],_,s.sparse.count*c);a!==null&&(m=new Et(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,P=L.length;R<P;R++){let E=L[R];if(m.setX(E,A[R*c]),c>=2&&m.setY(E,A[R*c+1]),c>=3&&m.setZ(E,A[R*c+2]),c>=4&&m.setW(E,A[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Hf[d.magFilter]||Mn,h.minFilter=Hf[d.minFilter]||Qn,h.wrapS=Vf[d.wrapS]||gi,h.wrapT=Vf[d.wrapT]||gi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==un&&h.minFilter!==Mn,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){let m=new Kt(x);m.needsUpdate=!0,d(m)}),t.load(ts.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),wi(u,o),u.userData.mimeType=o.mimeType||_v(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[st.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[st.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[st.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new vi,Sn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new qi,Sn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Ae}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[st.KHR_MATERIALS_UNLIT]){let u=s[st.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Me(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],fn),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,kt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=$t);let h=r.alphaMode||Bh.OPAQUE;if(h===Bh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Bh.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==vt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new He(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==vt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==vt){let u=r.emissiveFactor;a.emissive=new Me().setRGB(u[0],u[1],u[2],fn)}return r.emissiveTexture!==void 0&&o!==vt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,kt)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),wi(u,r),t.associations.set(u,{materials:e}),r.extensions&&Ls(s,u,r),u})}createUniqueName(e){let t=Ct.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[st.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Gf(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=xv(l),u=s[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[st.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Gf(new dt,l,t),s[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?pv(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let x=h[f],m=o[f],p,y=l[f];if(m.mode===kn.TRIANGLES||m.mode===kn.TRIANGLE_STRIP||m.mode===kn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Ia(x,y):new ne(x,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===kn.TRIANGLE_STRIP?p.geometry=Oh(p.geometry,Ya):m.mode===kn.TRIANGLE_FAN&&(p.geometry=Oh(p.geometry,xo));else if(m.mode===kn.LINES)p=new Na(x,y);else if(m.mode===kn.LINE_STRIP)p=new yi(x,y);else if(m.mode===kn.LINE_LOOP)p=new Ua(x,y);else if(m.mode===kn.POINTS)p=new Yi(x,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&gv(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),wi(p,r),m.extensions&&Ls(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Ls(s,u[0],r),u[0];let d=new ke;r.extensions&&Ls(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new zt(Cf.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Xi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),wi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let d=new qe;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Pa(a,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],g=s.samplers[f.sampler],x=f.target,m=x.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,y=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",y)),l.push(g),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],x=u[3],m=u[4],p=[];for(let y=0,b=d.length;y<b;y++){let _=d[y],L=f[y],A=g[y],R=x[y],P=m[y];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let E=n._createAnimationTracks(_,L,A,R,P);if(E)for(let M=0;M<E.length;M++)p.push(E[M])}return new Ha(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,yv)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new co:l.length>1?h=new ke:l.length===1?h=l[0]:h=new Ut,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),wi(h,r),r.extensions&&Ls(n,h,r),r.matrix!==void 0){let u=new qe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new ke;n.name&&(r.name=s.createUniqueName(n.name)),wi(r,n),n.extensions&&Ls(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof Sn||d instanceof Kt)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];is[r.path]===is.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(is[r.path]){case is.weights:l=bi;break;case is.rotation:l=Ei;break;case is.position:case is.scale:l=Si;break;default:switch(n.itemSize){case 1:l=bi;break;case 2:case 3:default:l=Si;break}break}let h=s.interpolation!==void 0?fv[s.interpolation]:xr,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){let g=new l(c[d]+"."+is[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=hu(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Ei?cu:Ja;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function vv(i,e,t){let n=e.attributes,s=new Zt;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new U(c[0],c[1],c[2]),new U(l[0],l[1],l[2])),a.normalized){let h=hu(Ar[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new U,c=new U;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let x=hu(Ar[d.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new nn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Gf(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(let o in n){let a=lu[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return nt.workingColorSpace!==fn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${nt.workingColorSpace}" not supported.`),wi(i,e),vv(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?mv(i,e.targets,t):i})}var ja={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Dn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Mv=new Xi(-1,1,1,-1,0,1),du=class extends dt{constructor(){super(),this.setAttribute("position",new it([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new it([0,2,0,0,2,0],2))}},bv=new du,ss=class{constructor(e){this._mesh=new ne(bv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Mv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Qa=class extends Dn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Ht?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ns.clone(e.uniforms),this.material=new Ht({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ss(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var vo=class extends Dn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},ec=class extends Dn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var tc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new He);this._width=n.width,this._height=n.height,t=new sn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ln}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Qa(ja),this.copyPass.material.blending=ei,this.clock=new Tr}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}vo!==void 0&&(o instanceof vo?n=!0:o instanceof ec&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new He);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var nc=class extends Dn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Me}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Xf={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Me(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Rr=class i extends Dn{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new He(e.x,e.y):new He(256,256),this.clearColor=new Me(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new sn(r,o,{type:Ln}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new sn(r,o,{type:Ln});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new sn(r,o,{type:Ln});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=Xf;this.highPassUniforms=ns.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ht({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new He(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=ja;this.copyUniforms=ns.clone(h.uniforms),this.blendMaterial=new Ht({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:dn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Me,this.oldClearAlpha=1,this.basic=new vt,this.fsQuad=new ss(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new He(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Ht({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new He(.5,.5)},direction:{value:new He(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Ht({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Rr.BlurDirectionX=new He(1,0);Rr.BlurDirectionY=new He(0,1);var qf={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var ic=class extends Dn{constructor(){super();let e=qf;this.uniforms=ns.clone(e.uniforms),this.material=new ka({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new ss(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},nt.getTransfer(this._outputColorSpace)===yt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===yh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===vh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Mh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===go?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===bh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Eh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Ne={ctx:null,master:null,music:null,sfxBus:null,nodes:[],bellTimer:0,mode:null,volume:.6,musicOn:!0,init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}try{this.ctx=new(window.AudioContext||window.webkitAudioContext)}catch{return}let i=this.ctx;this.master=i.createGain(),this.master.gain.value=this.volume,this.master.connect(i.destination),this.verb=i.createConvolver(),this.verb.buffer=this._impulse(3.2);let e=i.createGain();e.gain.value=.45,this.verb.connect(e),e.connect(this.master),this.music=i.createGain(),this.music.gain.value=this.musicOn?.32:0,this.music.connect(this.master),this.music.connect(this.verb),this.sfxBus=i.createGain(),this.sfxBus.gain.value=.8,this.sfxBus.connect(this.master);let t=i.createGain();t.gain.value=.25,this.sfxBus.connect(t),t.connect(this.verb)},_impulse(i){let e=this.ctx,t=e.sampleRate*i,n=e.createBuffer(2,t,e.sampleRate);for(let s=0;s<2;s++){let r=n.getChannelData(s);for(let o=0;o<t;o++)r[o]=(Math.random()*2-1)*Math.pow(1-o/t,2.4)}return n},setVolume(i){this.volume=i,this.master&&this.master.gain.setTargetAtTime(i,this.ctx.currentTime,.05)},setMusic(i){this.musicOn=i,this.music&&this.music.gain.setTargetAtTime(i?.32:0,this.ctx.currentTime,.3)},playMusic(i){if(!this.ctx||this.mode===i)return;this.mode=i;let e=this.ctx,t=e.currentTime;for(let l of this.nodes)try{l.g.gain.setTargetAtTime(0,t,.8),l.o.forEach(h=>h.stop(t+4))}catch{}this.nodes=[];let n={menu:[73.42,110,146.83,185,220,329.63],world:[65.41,98,130.81,155.56,196,233.08],boss:[61.74,92.5,123.47,146.83,185,174.61],cantina:[87.31,130.81,174.61,220,261.63,329.63],savannah:[73.42,110,146.83,185,220,277.18]},s=e.createGain();s.gain.value=0,s.gain.setTargetAtTime(1,t,2.5);let r=e.createBiquadFilter();r.type="lowpass",r.frequency.value=i==="boss"?1400:i==="cantina"?1100:700,r.Q.value=3;let o=e.createOscillator();o.frequency.value=.07;let a=e.createGain();a.gain.value=380,o.connect(a),a.connect(r.frequency),o.start(),r.connect(s),s.connect(this.music);let c=[o];if(n[i].forEach((l,h)=>{for(let u of[-7,6]){let d=e.createOscillator();d.type=h<2?"sawtooth":"triangle",d.frequency.value=l,d.detune.value=u+Math.random()*3;let f=e.createGain();f.gain.value=h<2?.05:.04,d.connect(f),f.connect(r),d.start(),c.push(d)}}),i==="boss"){let l=e.createOscillator();l.type="square",l.frequency.value=2.2;let h=e.createGain();h.gain.value=.5,l.connect(h),h.connect(s.gain),l.start(),c.push(l)}this.nodes.push({g:s,o:c})},tick(i){if(!(!this.ctx||!this.musicOn||!this.mode)){if(this.mode==="cantina"){if(this.seqT=(this.seqT||0)-i,this.seqT<=0){this.seqT+=.2777777777777778,this.step=((this.step||0)+1)%16;let e=[87.31,0,0,87.31,0,0,130.81,0,98,0,0,98,0,0,116.54,0],t=[349.23,0,440,523.25,0,440,0,392,349.23,0,293.66,0,349.23,392,0,0];e[this.step]&&this.tone(e[this.step],.35,"triangle",.09,null,this.music),t[this.step]&&Math.random()<.85&&(this.tone(t[this.step],.28,"triangle",.045,null,this.music),this.tone(t[this.step]*2,.12,"sine",.012,null,this.music)),this.step%2===1&&this.noise(.05,.03,7e3,2),this.step%8===4&&this.noise(.12,.06,1800,1)}return}if(this.bellTimer-=i,this.bellTimer<=0){this.bellTimer=2.5+Math.random()*4;let e=this.mode==="menu"?[293.66,369.99,440,554.37,587.33,739.99]:this.mode==="savannah"?[293.66,329.63,369.99,440,493.88,587.33]:[261.63,311.13,392,466.16,523.25],t=e[Math.random()*e.length|0];this.tone(t,3.5,"sine",.05,null,this.music),this.tone(t*2.01,2.5,"sine",.015,null,this.music)}}},tone(i,e,t="sine",n=.2,s=null,r=null,o=0){if(!this.ctx)return;let a=this.ctx,c=a.currentTime+o,l=a.createOscillator(),h=a.createGain();l.type=t,l.frequency.setValueAtTime(i,c),s&&l.frequency.exponentialRampToValueAtTime(s,c+e),h.gain.setValueAtTime(1e-4,c),h.gain.exponentialRampToValueAtTime(n,c+.01),h.gain.exponentialRampToValueAtTime(1e-4,c+e),l.connect(h),h.connect(r||this.sfxBus),l.start(c),l.stop(c+e+.05)},noise(i,e=.2,t=1200,n=1,s=0){if(!this.ctx)return;let r=this.ctx,o=r.currentTime+s,a=Math.max(1,r.sampleRate*i|0),c=r.createBuffer(1,a,r.sampleRate),l=c.getChannelData(0);for(let f=0;f<a;f++)l[f]=Math.random()*2-1;let h=r.createBufferSource();h.buffer=c;let u=r.createBiquadFilter();u.type="bandpass",u.frequency.value=t,u.Q.value=n;let d=r.createGain();d.gain.setValueAtTime(e,o),d.gain.exponentialRampToValueAtTime(1e-4,o+i),h.connect(u),u.connect(d),d.connect(this.sfxBus),h.start(o)},sfx(i){if(this.ctx)switch(i){case"click":this.tone(880,.06,"square",.04),this.tone(1320,.05,"sine",.03,null,null,.03);break;case"hover":this.tone(1600,.03,"sine",.015);break;case"start":this.tone(110,1.8,"sawtooth",.12,55),this.tone(440,1.2,"sine",.08,880),this.noise(1.2,.08,600,.5);break;case"slash":this.noise(.14,.25,2600,.8),this.tone(320,.1,"triangle",.08,140);break;case"heavy":this.noise(.3,.35,900,.6),this.tone(120,.35,"sawtooth",.15,50);break;case"zap":this.tone(1800,.18,"sawtooth",.06,300),this.noise(.12,.12,4e3,2);break;case"lance":this.tone(220,.6,"sawtooth",.12,1800),this.noise(.5,.15,3e3,1);break;case"hit":this.noise(.08,.22,1500,1);break;case"hurt":this.tone(160,.18,"square",.07,80),this.noise(.1,.15,500,1);break;case"heal":[523,659,784,1047].forEach((e,t)=>this.tone(e,.5,"sine",.06,null,null,t*.06));break;case"shield":this.tone(300,.6,"sine",.1,600),this.tone(450,.6,"triangle",.05,900);break;case"blink":this.tone(1200,.25,"sine",.08,200),this.noise(.2,.1,6e3,3);break;case"boom":this.noise(.9,.5,200,.4),this.tone(70,.9,"sine",.3,30);break;case"drone":this.tone(900,.2,"square",.04,1400);break;case"die":this.tone(200,.6,"sawtooth",.08,40);break;case"levelup":[392,523,659,784,1047].forEach((e,t)=>{this.tone(e,.9,"triangle",.08,null,null,t*.09),this.tone(e*2,.6,"sine",.03,null,null,t*.09)});break;case"quest":[659,784,988].forEach((e,t)=>this.tone(e,.7,"sine",.09,null,null,t*.12));break;case"accept":this.tone(523,.3,"sine",.08),this.tone(784,.4,"sine",.08,null,null,.1);break;case"pickup":this.tone(1047,.3,"sine",.07),this.tone(1568,.4,"sine",.05,null,null,.07);break;case"coin":this.tone(1318,.12,"square",.03),this.tone(1760,.2,"square",.03,null,null,.06);break;case"error":this.tone(180,.15,"square",.05);break;case"chat":this.tone(1400,.05,"sine",.02);break;case"death":[330,262,196,131].forEach((e,t)=>this.tone(e,1.2,"triangle",.08,null,null,t*.25));break}}};var fu=[{title:"The Year 2137",tag:"THE WORLD",body:['Ad-Nostra \u2014 "to ours" \u2014 rises from the golden savannah of the African continent: a city of sandstone towers and glass spires, ringed by acacia and grassland that runs to the edge of the sky.',"Ten years have passed since the Catharsis fell at Carax. The war in the stars is over, but its scars reached Earth. A Catharsis beacon-ship lies broken in a crater north of the city, and what it left behind still walks the grasslands.","Ad-Nostra is governed by Croxian Mascar. Its people call themselves the Concord, and the volunteers who defend it are the Ascendants."]},{title:"The Third World War",tag:"2080 \u2013 2095",body:["For fifteen years the old powers tore at each other in the Third World War. Cities burned from the Baltic to the Pacific.","Orion Mascar fought through it. At his side for much of it was his apprentice, Thomas Hawthorne. The two fought together until the Siege of Harbin, in China. After Harbin, Hawthorne made his own path.","In the winter of 2094, in the frozen city of Kaliningrad, with the war still raging, Orion's wife Talina gave birth to a son. They named him Croxian. The war ended the following year."]},{title:"Orion Mascar",tag:"BORN 2069",body:["Born in 2069, Orion Mascar came of age in the Third World War and survived the whole of it. He married Talina Alvarez, and their son Croxian was born in the last winter of the war.","He trained Thomas Hawthorne, and he lived to see what his apprentice became.","In Ad-Nostra his name is tied to one place above all: the Salt Lantern. It was in that cantina that Orion Mascar fought Daniel Brown."]},{title:"Terra Imperia",tag:"THE FACTION",body:["Terra Imperia was the far-right faction built by Thomas Hawthorne after he broke from his old master. It promised order, strength and a single hand on the wheel of the world.","By 2125, Croxian Mascar was one of its members, serving under the man who had once been his father's apprentice.","He did not stay. With the help of a wanderer, Croxian broke away from Terra Imperia. That choice set him on the road to Carax."]},{title:"The Catharsis",tag:"THE ENEMY",body:["In 2127 the Catharsis invaded the Milky Way. At its head was Lord Zark.","The Catharsis did not only conquer. It turned people. Those it took became its weapons, their old loyalties burned out and replaced with its own. Thomas Hawthorne was one of them.","Its fleets reached as far as Earth. When the war ended, one of its beacon-ships fell burning onto the savannah north of Ad-Nostra. The Crater it left still glows crimson at night."]},{title:"Carax",tag:"SAGITTARIUS A* \xB7 2127",body:["Carax is a planet in orbit around Sagittarius A*, the supermassive black hole at the heart of our galaxy.","It was there, in 2127, that the war against the Catharsis was decided. Croxian Mascar stood with the Wanderer, the same wanderer who had helped him leave Terra Imperia. Together they defeated Lord Zark, and the Catharsis-turned Thomas Hawthorne.","Croxian rarely speaks of Carax. When he does, he speaks of the Wanderer, never of himself."]},{title:"Croxian Mascar",tag:"GOVERNOR OF AD-NOSTRA",body:["Born 2094 in Kaliningrad, during the Third World War, to Orion Mascar and Talina Mascar (n\xE9e Alvarez).","Once a soldier of Terra Imperia. He walked away from it, then helped the Wanderer bring down Lord Zark and the Catharsis-turned Thomas Hawthorne at Carax in 2127.","Today he governs Ad-Nostra from Concordia Plaza, beneath a statue raised in his honour against his wishes. He still wears his Carax armour, its seams lit with cyan."]},{title:"The Salt Lantern",tag:"CANTINA \xB7 AD-NOSTRA",body:["Just south of Concordia Plaza stands the Salt Lantern: a whitewashed cantina with a great crystal lantern burning over its door, warm as the savannah at dusk.","It is the oldest place in the city that anyone still drinks in. It is also where Orion Mascar fought Daniel Brown. A plaque marks the spot, and the regulars will happily argue about the rest.","The keeper, Zuri Adeyemi, pours Lantern Ale for any Ascendant with credits. It is said to sharpen the mind."]},{title:"The Remnants",tag:"THREATS",body:["The Catharsis is defeated. What it left behind is not.","On the Scorched Veld to the east, where the beacon-ship's descent set the grass alight, the Hollowed wander: people the Catharsis turned and never released.","On the Echo Plains to the west, its war-drones still hold station around their signal pylons.","And in the Crater to the north, the shards of the beacon have begun to pulse in rhythm. Something of Lord Zark's will is gathering itself in the wreck."]},{title:"Ascendants",tag:"YOU",body:["Ascendants are citizens of Ad-Nostra who have sworn the Governor's Oath to defend the city and its grasslands.","VANGUARDS hold the line in heavy plate. ARCWRIGHTS turn salvaged Catharsis technology into lightning. SHADES move between moments and strike where the Remnants are blind.","Thousands now patrol the savannah. You are the newest of them."]}],Yf=["Croxian Mascar was born in the winter of Kaliningrad in 2094, in the last year of the Third World War.","The Salt Lantern is a sanctuary. Lantern Ale from Zuri Adeyemi grants bonus experience.","Hollowed lose interest if you lead them too far from where they rose.","Shades who strike from Blink deal guaranteed critical damage.","Concordia Plaza is a sanctuary. No Remnant will follow you there.","Quartermaster Ilse Varn sells medkits and weapon tuning. Press 5 to use a medkit.","Thomas Hawthorne was Orion Mascar's apprentice before the Siege of Harbin.","Carax orbits Sagittarius A*, the black hole at the heart of the galaxy.","Echo Drones attack from range. Close the distance, or out-range them as an Arcwright."],Ai={vanguard:{name:"VANGUARD",role:"DEFENDER \xB7 MELEE",icon:"\u26E8",color:"#3ee6ff",hex:4122367,hp:170,en:100,range:3.6,gcd:1,crit:.1,weapon:"blade",desc:"Heavy plate and heavy blades. Vanguards stand where the line must not break, trading blows that would fell anyone else.",abil:[{id:"riven",name:"Riven Strike",icon:"\u2694",cost:0,cd:0,target:!0,desc:"A heavy blade strike.",dmg:18},{id:"slam",name:"Bulwark Slam",icon:"\u25CE",cost:20,cd:6,target:!1,desc:"Strike the ground, damaging all enemies within 6m.",dmg:15,radius:6},{id:"guard",name:"Concord Guard",icon:"\u26E8",cost:25,cd:18,target:!1,desc:"Raise a barrier that absorbs 60 damage for 8s.",shield:60,dur:8},{id:"judge",name:"Judgement",icon:"\u2726",cost:35,cd:12,target:!0,desc:"The Governor's justice, delivered by hand.",dmg:50}]},arcwright:{name:"ARCWRIGHT",role:"CHANNELER \xB7 RANGED",icon:"\u03DF",color:"#b07bff",hex:11566079,hp:120,en:120,range:24,gcd:1,crit:.12,weapon:"staff",desc:"Engineers who learned to turn the Catharsis's own technology against it. Arcwrights strike from afar with salvaged lightning.",abil:[{id:"bolt",name:"Arc Bolt",icon:"\u03DF",cost:0,cd:0,target:!0,desc:"Hurl a bolt of salvaged lightning.",dmg:16,proj:!0},{id:"chain",name:"Chain Surge",icon:"\u2301",cost:25,cd:7,target:!0,desc:"Lightning leaps from the target to up to 3 nearby enemies.",dmg:14,jump:10},{id:"restore",name:"Restore Field",icon:"\u271A",cost:30,cd:20,target:!1,desc:"Restore 45% of your maximum health.",heal:.45},{id:"lance",name:"Overcharge Lance",icon:"\u27B6",cost:40,cd:14,target:!0,desc:"A lance of white-hot plasma.",dmg:62,proj:!0,big:!0}]},shade:{name:"SHADE",role:"STRIKER \xB7 MELEE",icon:"\u25D0",color:"#4dff9a",hex:5111706,hp:135,en:100,range:3.6,gcd:.8,crit:.2,weapon:"daggers",desc:"They move between moments. Shades strike where the Remnants are blind and are gone before the crimson light can find them.",abil:[{id:"cut",name:"Phase Cut",icon:"\u27CB",cost:0,cd:0,target:!0,desc:"A swift, precise cut.",dmg:14},{id:"bleed",name:"Bleed Mark",icon:"\u260D",cost:20,cd:8,target:!0,desc:"Mark the target: 6 damage, then 8 per second for 6s.",dmg:6,dot:8,dur:6},{id:"blink",name:"Blink",icon:"\u21DD",cost:20,cd:12,target:!0,desc:"Step behind the target. Your next attack is a guaranteed critical.",range:22},{id:"flurry",name:"Eclipse Flurry",icon:"\u2738",cost:40,cd:15,target:!0,desc:"Five strikes in a heartbeat, 11 damage each.",dmg:11,hits:5}]}},sc=["#3ee6ff","#e8c46a","#ff2b4a","#4dff9a","#b07bff","#ffffff"],rc=[{title:"The Turned",type:"hollowed",count:6,xp:220,cr:80,zone:"Scorched Veld (east)",obj:"Grant rest to Hollowed on the Scorched Veld",offer:`Ascendant. Welcome to Ad-Nostra.

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

Ten of them, any kind, anywhere. The Concord pays its debts.`,active:"Ten Remnants. Hollowed or drones, it does not matter. Each one is a night of peace for someone out on the grass.",done:"Well done. Rest a while. Have an ale at the Lantern on me, then come back. There is always more to do."}],$f=["I was born in the snow of Kaliningrad, in the last winter of the war. I have never once missed the cold.","My father fought through the whole of the Third World War. When I was young I thought that made him unbreakable.","Thomas Hawthorne was my father's apprentice. Then he was my commander. Then, at Carax, he was the Catharsis. I still do not know which of those men I was fighting.","I wore the colours of Terra Imperia once. I am not proud of it. I am proud that I left.","The Wanderer never asked for anything. Not on Carax, not after. I owe that soul more than a statue.","Go see the Salt Lantern if you have not. My father fought Daniel Brown there. Zuri will tell you it is the best thing that ever happened to her business."],rs={greet:"Welcome to the Salt Lantern, Ascendant. Sit anywhere except the corner table. That one is the Governor's.",fight:`Right there, where the plaque is. That is where Orion Mascar fought Daniel Brown.

Ask ten regulars how it started and you will hear ten different stories. Ask them how it ended and they will all go quiet and order another round.`,gov:`He comes in some evenings, alone. Sits where his father used to sit and orders one glass that he never finishes.

People leave him be. Mostly.`,aleOk:`One Lantern Ale. Brewed with savannah honey and something I will not tell you about.

(+20% experience for 10 minutes)`,aleAgain:`Another? The first one is still working, Ascendant. I will top it up, and the clock starts over.

(+20% experience for 10 minutes)`,aleNo:"Twenty-five credits, Ascendant. The Lantern does not run a tab. Not since the Governor's father, anyway."},oc={title:"MEMORIAL PLAQUE",name:"THE SALT LANTERN",text:`HERE, IN THIS ROOM,
ORION MASCAR FOUGHT DANIEL BROWN.

The Lantern still stands.

Raised by the regulars of the Salt Lantern.`},Zf=["Kaelith","Vex_2137","NovaRook","Seraphyn","Draxx","Ilmatar","LastLegion","Quorra","Ashwalker","Brennic","Zyra_Nyx","Holloway","Corvane","Mirelle","OrbitalOtter","Tavik","Severine","Juno_Arc","Kwame_X","Amara","Tendai"],Kf=["Concord Legion","Savannah Watch","Lantern Regulars","Pale Hunters","Dawnbreakers","",""],Jf=["LFG crater remnant, need 2 more","anyone know where the beacon shards spawn? crater right?","first round at the Salt Lantern is on me tonight","WTS tuned blade, pst","echo plains are packed tonight lol","just saw a giraffe walk past the crater like nothing was happening","Mascar never takes off that armour. respect","shade blink into a drone swarm = instant regret","Concord Legion recruiting, all classes, /w Kaelith","hollowed on the veld respawn SO fast","arcwright chain surge is busted (in a good way)","imagine being on Carax for the final fight. at a BLACK HOLE","pro tip: the plaza is a sanctuary, kite them back if you're low","did the remnant just one-shot me or am i crazy","o7 to everyone who fought in 2127","Ilse Varn's medkits are a scam. i buy 10 a day","anyone else hear the shards humming?? creepy","the sunsets here never get old","there was an argument at the Lantern about Orion vs Daniel Brown again. chairs were thrown","still can't believe the governor used to be Terra Imperia"],jf=["drone over here if anyone needs one","careful, lvl 3 hollowed by the burning brush","need help with the big one in the crater","pulling, stand back","gg","lol that crit"],Qf=["zuri another round please","that's the spot. right there. where orion fought daniel brown","who keeps playing that song","the governor's table is empty tonight","cheers o7"],ep=["The Concord reminds all Ascendants: beacon shards are to be delivered to the Governor's Office, not sold.","The Causeway tram will resume service once the Echo Plains are secured.","Ten years since Carax. Ad-Nostra stands. \u2014 C. Mascar","Herders are advised to keep livestock away from the Crater rim.","Medical stations in Concordia Plaza are open to all Ascendants, free of charge."],tp=["Mascar and the Wanderer took down Lord Zark on Carax. at Sagittarius A*. absolute legend","he was Terra Imperia once, you know. takes guts to walk away from that","my gran says his dad Orion was born in 2069 and never lost a fight. well. maybe one","governor mascar administered my oath personally","born in kaliningrad in the middle of ww3. no wonder he's like that"],pu=["o7","hey {name}!","welcome to Ad-Nostra {name}","yo","hi hi","o/","sawubona!","jambo!"];var We=U,Q=i=>document.getElementById(i),D=(i,e)=>i+Math.random()*(e-i),zs=(i,e)=>Math.floor(D(i,e+1)),ht=i=>i[Math.floor(Math.random()*i.length)],ls=(i,e,t)=>Math.max(e,Math.min(t,i)),wt=(i,e)=>Math.hypot(i.x-e.x,i.z-e.z),as=i=>i.toLocaleString("en-GB"),Vt=i=>String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function mp(i){let e=Q("err");e.textContent=i,e.classList.remove("hidden"),setTimeout(()=>e.classList.add("hidden"),8e3)}window.addEventListener("error",i=>{console.error(i.error||i.message)});var Hs={get(i,e=null){try{let t=localStorage.getItem(i);return t?JSON.parse(t):e}catch{return e}},set(i,e){try{localStorage.setItem(i,JSON.stringify(e))}catch{}}},No="adnostra_save_v1",ot=Object.assign({volume:.6,music:!0,bloom:!0,shadows:!0,sens:1,plates:!0,dynres:!0,fps:!1},Hs.get("adnostra_settings",{}));Ne.volume=ot.volume;Ne.musicOn=ot.music;var Vs=matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0&&!matchMedia("(pointer: fine)").matches;Vs&&document.documentElement.classList.add("touch");var cs=Vs?{pixelRatio:1.5,shadowMap:1024,worldGrass:14e3,menuGrass:4e3}:{pixelRatio:2,shadowMap:2048,worldGrass:36e3,menuGrass:9e3},Fr=Q("scene"),Dt=new Aa({canvas:Fr,antialias:!1,powerPreference:"high-performance"});Dt.setPixelRatio(Math.min(devicePixelRatio,cs.pixelRatio));Dt.setSize(innerWidth,innerHeight);Dt.toneMapping=go;Dt.toneMappingExposure=1.05;Dt.outputColorSpace=kt;Dt.shadowMap.enabled=ot.shadows;Dt.shadowMap.type=xh;Dt.info.autoReset=!1;var Ev=new Mr(Dt);function gp(i){let e=new Cs;return e.add(new ne(new Mi(50,32,16),i.material)),Ev.fromScene(e,.03,.1,100).texture}var Sv=4,ii=new tc(Dt,new sn(innerWidth,innerHeight,{type:Ln,samples:Sv}));ii.setPixelRatio(Dt.getPixelRatio());ii.setSize(innerWidth,innerHeight);var yu=new nc(new Cs,new zt);ii.addPass(yu);var Fs=new Rr(new He(innerWidth/2,innerHeight/2),.85,.55,.72);Fs.enabled=ot.bloom;ii.addPass(Fs);ii.addPass(new ic);var Tv=new Tr;function Au(i,e){yu.scene=i,yu.camera=e;let t=i.userData.post||{strength:.6,radius:.5,threshold:.85,exposure:1};Fs.strength=t.strength,Fs.radius=t.radius,Fs.threshold=t.threshold,Dt.toneMappingExposure=t.exposure,rt.grace=3}var T={mode:"splash",time:0,world:null,P:null,D:null,enemies:[],bots:[],npcs:[],shards:[],proj:[],fx:[],timers:[],floaters:[],props:[],animals:[],herds:[],colliders:[],ui:null,zone:"",autosave:20,chatT:6};function Bt(i,e,t,n=1){let s=document.createElement("canvas");s.width=i,s.height=e,t(s.getContext("2d"),i,e);let r=new Oa(s);return r.colorSpace=kt,r.wrapS=r.wrapT=gi,r.anisotropy=Dt.capabilities.getMaxAnisotropy(),r.repeat.set(n,n),r}var np=null,Ru=()=>np||(np=Bt(64,64,(i,e,t)=>{let n=i.createRadialGradient(e/2,t/2,0,e/2,t/2,e/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.35,"rgba(255,255,255,0.7)"),n.addColorStop(1,"rgba(255,255,255,0)"),i.clearRect(0,0,e,t),i.fillStyle=n,i.fillRect(0,0,e,t)}));function ni(i,e,t,n,s,r=2){for(let o=0;o<n;o++)i.fillStyle=ht(s),i.fillRect(Math.random()*e,Math.random()*t,r*Math.random()+.5,r*Math.random()+.5)}function Mo(i,e,t,n,s,r=1.5){i.strokeStyle=s,i.lineWidth=r;for(let o=0;o<n;o++){let a=Math.random()*e,c=Math.random()*t;i.beginPath(),i.moveTo(a,c);for(let l=0;l<8;l++)a+=D(-30,30),c+=D(-30,30),i.lineTo(a,c);i.stroke()}}var cc=null;async function wv(i){await new Promise((o,a)=>{let c=document.createElement("script");c.src="assets/model.js",c.onload=o,c.onerror=()=>a(new Error("Could not load assets/model.js")),document.head.appendChild(c)}),i(.7);let e=window.MASCAR_GLB_B64;window.MASCAR_GLB_B64=null;let t;try{t=await(await fetch("data:application/octet-stream;base64,"+e)).arrayBuffer()}catch{let a=atob(e),c=new Uint8Array(a.length);for(let l=0;l<a.length;l++)c[l]=a.charCodeAt(l);t=c.buffer}i(.85);let s=(await new Promise((o,a)=>new Ka().parse(t,"",o,a))).scene,r=new Zt().setFromObject(s);s.userData.height=r.max.y-r.min.y,s.traverse(o=>{o.isMesh&&(o.castShadow=!0,o.receiveShadow=!0,o.material&&(o.material.envMapIntensity=1))}),cc=s,i(1)}function Cu(i,e=null){if(!cc){let s=Br({armor:3818062,accent:4122367,visor:4122367,weapon:"none"});return s.group.scale.setScalar(i/1.86),s.group}let t=cc.clone(!0);e&&t.traverse(s=>{if(s.isMesh){let r=e.clone();r.normalMap=s.material.normalMap,s.material=r}}),t.scale.setScalar(i/cc.userData.height);let n=new ke;return n.add(t),n}var ip={};function Tt(i,e){return ip[i]||(ip[i]=e())}var en=(i,e=2.4)=>Tt("glow"+i+e,()=>new Ae({color:i,emissive:i,emissiveIntensity:e,roughness:.4})),Ci=i=>Tt("arm"+i,()=>new Ae({color:i,metalness:.75,roughness:.36})),Av=()=>Tt("dark",()=>new Ae({color:987928,metalness:.4,roughness:.7})),ft={box:new Tn(1,1,1),sph:new Mi(1,16,12),oct:new Ba(1,0),ico:new br(1,0),cyl:new qt(1,1,1,16),rock:new Fa(1,0),ico1:new br(1,1)};function fe(i,e,t,n,s=0,r=0,o=0,a){let c=new ne(ft.box,n);return c.scale.set(i,e,t),c.position.set(s,r,o),c.castShadow=!0,c.receiveShadow=!0,a&&a.add(c),c}function Br({armor:i=2830908,accent:e=4122367,visor:t=4122367,weapon:n="blade",hollow:s=!1}){let r=new ke,o=Ci(i),a=Av(),c=en(e,s?3:2.2),l=en(t,3),h=new ke;h.position.y=.95,r.add(h);let u=[-1,1].map(m=>{let p=new ke;return p.position.set(.13*m,0,0),h.add(p),fe(.17,.5,.2,o,0,-.25,0,p),fe(.15,.45,.17,a,0,-.68,0,p),fe(.18,.1,.28,o,0,-.9,.04,p),p}),d=new ke;h.add(d),fe(.42,.22,.24,a,0,.08,0,d),fe(.52,.42,.3,o,0,.4,0,d),fe(.4,.04,.02,c,0,.36,.16,d),fe(.04,.2,.02,c,0,.5,.16,d),fe(.3,.34,.1,a,0,.42,-.19,d),fe(.04,.26,.02,c,-.08,.42,-.25,d),fe(.04,.26,.02,c,.08,.42,-.25,d);let f=[-1,1].map(m=>{fe(.22,.14,.3,o,.34*m,.62,0,d);let p=new ke;return p.position.set(.34*m,.58,0),d.add(p),fe(.13,.34,.15,a,0,-.17,0,p),fe(.15,.32,.17,o,0,-.46,0,p),s&&fe(.05,.25,.05,c,0,-.72,.04,p),p}),g=new ke;g.position.y=.78,d.add(g),fe(.25,.27,.27,s?a:o,0,.02,0,g),s?(fe(.05,.04,.02,l,-.06,.04,.14,g),fe(.05,.04,.02,l,.06,.04,.14,g)):(fe(.21,.06,.02,l,0,.03,.14,g),fe(.04,.12,.1,o,0,.18,-.02,g));let x=f[1];if(n==="blade"){fe(.05,.16,.05,a,0,-.66,.05,x);let m=fe(.04,1,.11,Ci(9016998),0,-.66,.5,x);m.rotation.x=Math.PI/2;let p=fe(.015,1,.02,c,0,-.66,.5,x);p.rotation.x=Math.PI/2,p.position.y-=.06}if(n==="staff"){let m=fe(.05,1.7,.05,a,0,-.62,.05,x);m.rotation.x=.1;let p=new ne(ft.oct,c);p.scale.setScalar(.12),p.position.set(0,.25,.1),p.userData.keep=!0,x.add(p),r.userData.orb=p}if(n==="daggers")for(let m of f){let p=fe(.03,.45,.07,c,0,-.7,.22,m);p.rotation.x=Math.PI/2.2}return s&&(d.rotation.x=.38,g.rotation.x=-.25,f.forEach(m=>m.scale.y=1.25)),r.traverse(m=>{m.isMesh&&(m.castShadow=!0)}),bp(r),{group:r,legs:u,arms:f,torso:d,head:g,hips:h}}function To(i,e,t,n=0,s=0){let r=Math.sin(t*9)*.75*e;if(i.legs[0].rotation.x=r,i.legs[1].rotation.x=-r,i.arms[0].rotation.x=-r*.6,i.arms[1].rotation.x=r*.6,i.hips.position.y=.95+Math.abs(Math.cos(t*9))*.05*e,n>0){let o=Math.sin((1-n/.3)*Math.PI);i.arms[1].rotation.x=-2.4*o,i.torso.rotation.y=-.4*o}else i.torso.rotation.y*=.8;s>0?(i.arms[0].rotation.z=-2.4+Math.sin(t*8)*.4,i.arms[1].rotation.z=2.4+Math.sin(t*8+1)*.4,i.hips.position.y=.95+Math.abs(Math.sin(t*8))*.12):(i.arms[0].rotation.z*=.8,i.arms[1].rotation.z*=.8)}function Rv(i){let e=new ke,t=new ke;t.position.y=2.6,e.add(t);let n=new ne(ft.oct,en(16722762,3));n.scale.set(.42,.55,.42),t.add(n);let s=new ne(ft.ico,Tt("droneShell",()=>new Ae({color:1909289,metalness:.8,roughness:.3,wireframe:!0})));s.scale.setScalar(.72),t.add(s);let r=new ne(new Fn(.95,.05,6,32),Ci(3752525));r.rotation.x=Math.PI/2,t.add(r);for(let a=0;a<3;a++){let c=fe(.08,.5,.35,Ci(3752525),0,0,0),l=new ke;l.rotation.y=a*2.094,c.position.x=.95,l.add(c),t.add(l)}let o=new ne(ft.sph,en(16769253,4));return o.scale.setScalar(.1),o.position.z=.42,t.add(o),e.traverse(a=>{a.isMesh&&(a.castShadow=!0)}),{group:e,body:t,ring:r,shell:s}}function Cv(){let i=new ke,e=new ke;i.add(e);let t=Tt("obsid",()=>new Ae({color:1312779,metalness:.6,roughness:.25,flatShading:!0})),n=en(16722762,3.2),s=new ne(ft.oct,n);s.scale.set(1.3,2,1.3),s.position.y=4.4,e.add(s);for(let h=0;h<7;h++){let u=new ne(ft.oct,t),d=h/7*Math.PI*2;u.scale.set(.7,D(1.6,2.6),.5),u.position.set(Math.cos(d)*1.35,4.2+D(-.6,.6),Math.sin(d)*1.35),u.rotation.set(D(-.3,.3),-d,.25*Math.cos(d)),e.add(u)}let r=new ne(ft.oct,t);r.scale.set(.8,1.1,.8),r.position.y=7,e.add(r);let o=new ne(ft.sph,en(16765144,5));o.scale.setScalar(.22),o.position.set(0,7.05,.62),e.add(o);let a=[-1,1].map(h=>{let u=new ne(ft.oct,t);return u.scale.set(.5,1.9,.5),u.position.set(.9*h,1.7,0),u.rotation.z=.15*h,e.add(u),u}),c=[-1,1].map(h=>{let u=new ke;u.position.set(2.1*h,5.6,0),e.add(u);let d=new ne(ft.oct,t);d.scale.set(.45,2.4,.45),d.position.y=-2,u.add(d);let f=new ne(ft.oct,n);return f.scale.set(.2,1,.2),f.position.y=-3.6,u.add(f),u}),l=new ke;l.position.y=4.4,e.add(l);for(let h=0;h<9;h++){let u=new ne(ft.oct,h%3?t:n);u.scale.set(.18,.5,.18);let d=h/9*Math.PI*2;u.position.set(Math.cos(d)*3.2,D(-1.5,1.5),Math.sin(d)*3.2),l.add(u)}return i.traverse(h=>{h.isMesh&&(h.castShadow=!0)}),{group:i,body:e,arms:c,legs:a,orbit:l,core:s}}var lc=new We(-.55,.5,-.67).normalize(),Iv=new We(-.18,.07,-.98).normalize(),pc={value:0};function xp(i,e=600,t={}){let n=Object.assign({zen:6129336,mid:13218714,hor:14264440,glow:16761466,clouds:1,stars:0,sunI:1.35},t),s=r=>new Me(r);return new ne(new Mi(e,48,24),new Ht({side:tn,depthWrite:!1,fog:!1,uniforms:{sun:{value:i.clone()},t:{value:0},zen:{value:s(n.zen)},mid:{value:s(n.mid)},hor:{value:s(n.hor)},glow:{value:s(n.glow)},clouds:{value:n.clouds},stars:{value:n.stars},sunI:{value:n.sunI}},vertexShader:"varying vec3 vp; void main(){ vp = position; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`varying vec3 vp; uniform vec3 sun, zen, mid, hor, glow; uniform float t, clouds, stars, sunI;
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
      }`}))}function _p(i,e,t,n){return Bt(512,512,(s,r,o)=>{s.fillStyle=i,s.fillRect(0,0,r,o);for(let a=0;a<9e3;a++){s.strokeStyle=Math.random()<.5?e:t,s.globalAlpha=D(.2,.7),s.lineWidth=D(.5,1.5);let c=Math.random()*r,l=Math.random()*o;s.beginPath(),s.moveTo(c,l),s.lineTo(c+D(-3,3),l-D(3,9)),s.stroke()}s.globalAlpha=1,ni(s,r,o,1500,["rgba(80,55,30,0.5)","rgba(60,40,20,0.4)"],4)},n)}function Iu(i){let e=i.index?i.toNonIndexed():i.clone();for(let t of Object.keys(e.attributes))t!=="position"&&t!=="normal"&&t!=="uv"&&e.deleteAttribute(t);return e.attributes.normal||e.computeVertexNormals(),e.attributes.uv||e.setAttribute("uv",new it(new Float32Array(e.attributes.position.count*2),2)),e.morphAttributes={},e}function Pv(i,e,t){let n=new dt;for(let[s,r]of Object.entries(i.attributes))n.setAttribute(s,new Et(r.array.slice(e*r.itemSize,(e+t)*r.itemSize),r.itemSize));return n}function yp(i,e=250){i.updateMatrixWorld(!0);let t=new Map,n=[];i.traverse(s=>{if(!s.isMesh||s.isInstancedMesh||s.isSkinnedMesh)return;for(let h=s;h;h=h.parent)if(h.userData.dynamic)return;if([].concat(s.material).some(h=>h.transparent||h.isShaderMaterial||h.visible===!1))return;let o=Iu(s.geometry).applyMatrix4(s.matrixWorld);o.computeBoundingSphere();let a=o.boundingSphere.center,c=Math.floor(a.x/e)+","+Math.floor(a.z/e),l=Array.isArray(s.material)?o.groups.map(h=>[Pv(o,h.start,h.count),s.material[h.materialIndex]]):[[o,s.material]];for(let[h,u]of l){if(!u)continue;h.clearGroups();let d=u.uuid+"|"+c+"|"+s.castShadow+"|"+s.receiveShadow;t.has(d)||t.set(d,{m:u,cs:s.castShadow,rs:s.receiveShadow,geos:[]}),t.get(d).geos.push(h)}n.push(s)});for(let s of n)s.removeFromParent();for(let s of t.values()){let r=new ne(_o(s.geos),s.m);r.castShadow=s.cs,r.receiveShadow=s.rs,i.add(r)}return{meshes:n.length,batches:t.size}}var sp=30,Qt={body:null,glow:null,geo:new Map,ids:new Map};function Lv(i){let e=new lo(256,16e4,0,new Ae({vertexColors:!0,metalness:.55,roughness:.45})),t=new lo(192,3e4,0,new vt({vertexColors:!0}));e.castShadow=!0,e.receiveShadow=!0,e.perObjectFrustumCulled=t.perObjectFrustumCulled=!0,e.frustumCulled=t.frustumCulled=!1,i.add(e,t),Object.assign(Qt,{body:e,glow:t})}function Dv(i){let e=i.group;e.updateMatrixWorld(!0);let t=e.matrixWorld.clone().invert(),n=[],s=[],r=[];for(let o of e.children)o!==i.hitbox&&o.traverse(a=>{if(!a.isMesh||!a.visible)return;let c=a.material;if(Array.isArray(c)||c.visible===!1||c.transparent||c.wireframe)return;let l=Iu(a.geometry).applyMatrix4(new qe().multiplyMatrices(t,a.matrixWorld));l.deleteAttribute("uv"),l.clearGroups();let h=c.emissiveIntensity>1&&c.emissive&&c.emissive.getHex()!==0,u=h?c.emissive.clone().multiplyScalar(Math.min(c.emissiveIntensity,3)*.7):c.userData.lodColor!=null?new Me(c.userData.lodColor):(c.color||new Me(8947848)).clone(),d=l.attributes.position.count,f=new Float32Array(d*3);for(let m=0;m<d;m++)f.set([u.r,u.g,u.b],m*3);l.setAttribute("color",new Et(f,3));let g=0,x=l.attributes.position.array;for(let m=0;m<x.length;m+=7)g+=x[m];(h?s:n).push(l),r.push(c.uuid,x.length,g.toFixed(2))});return{key:r.join(","),body:n.length?_o(n):null,glow:s.length?_o(s):null}}function vp(i){if(i.lod=null,!(!Qt.body||!i.rig||i.isBoss||!i.group))try{let e=Dv(i),t=Qt.geo.get(e.key);t||(t={body:e.body&&Qt.body.addGeometry(e.body),glow:e.glow&&Qt.glow.addGeometry(e.glow)},Qt.geo.set(e.key,t)),i.lod={body:t.body!=null?Qt.body.addInstance(t.body):null,glow:t.glow!=null?Qt.glow.addInstance(t.glow):null},i.lodParts=i.group.children.filter(n=>n!==i.hitbox),i.lodNear=!0,Qt.ids.set(i,i.lod),Mp(i,!1)}catch(e){i.lod=null,console.warn("far-LOD skipped for",i.name,e.message)}}function Mp(i,e){i.lod.body!=null&&Qt.body.setVisibleAt(i.lod.body,e),i.lod.glow!=null&&Qt.glow.setVisibleAt(i.lod.glow,e)}var mu=new qe;function Nv(){if(!Qt.body)return;let i=he.cam.position,e=sp*sp,t=new Set;for(let n of[T.enemies,T.bots,T.npcs,T.animals])for(let s of n){if(s.lod===void 0&&vp(s),!s.lod)continue;t.add(s);let r=s.group,o=r.position.distanceToSquared(i)<e,a=r.visible&&r.parent!==null;if(o!==s.lodNear){s.lodNear=o;for(let l of s.lodParts)l.visible=o}let c=!o&&a;Mp(s,c),c&&(mu.compose(r.position,r.quaternion,r.scale),s.lod.body!=null&&Qt.body.setMatrixAt(s.lod.body,mu),s.lod.glow!=null&&Qt.glow.setMatrixAt(s.lod.glow,mu))}for(let[n,s]of Qt.ids)t.has(n)||(s.body!=null&&Qt.body.deleteInstance(s.body),s.glow!=null&&Qt.glow.deleteInstance(s.glow),Qt.ids.delete(n))}function bp(i){i.traverse(e=>{if(e.isMesh)return;let t=new Map;for(let n of e.children)n.isMesh&&!n.userData.keep&&!Array.isArray(n.material)&&n.children.length===0&&(t.has(n.material)||t.set(n.material,[]),t.get(n.material).push(n));for(let[n,s]of t){if(s.length<2)continue;let r=s.map(a=>{a.updateMatrix();let c=Iu(a.geometry).applyMatrix4(a.matrix);return c.clearGroups(),c}),o=new ne(_o(r),n);o.castShadow=!0,o.receiveShadow=s[0].receiveShadow;for(let a of s)e.remove(a);e.add(o)}})}function Ep(i,e,t,n=0,s=0,r=0){let o=[],a=[];for(let _=0;_<5;_++){let L=_/5*Math.PI*2+D(-.3,.3),A=D(.45,.95),R=D(.1,.3),P=.05,E=Math.cos(L),M=Math.sin(L),N=-M*P,X=E*P;o.push(N,0,X,-N,0,-X,E*R,A,M*R),a.push(.55,.55,.55,.55,.55,.55,1.15,1.15,1.15)}let c=new dt;c.setAttribute("position",new it(o,3)),c.setAttribute("color",new it(a,3)),c.computeVertexNormals();let l=new uo({vertexColors:!0,side:$t});l.onBeforeCompile=_=>{_.uniforms.uTime=pc,_.vertexShader=`uniform float uTime;
`+_.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      #ifdef USE_INSTANCING
        float ph = instanceMatrix[3].x * 0.13 + instanceMatrix[3].z * 0.09;
      #else
        float ph = 0.0;
      #endif
      float sw = (sin(uTime * 1.7 + ph) * 0.6 + sin(uTime * 3.1 + ph * 2.0) * 0.25) * 0.16 * position.y;
      transformed.x += sw; transformed.z += sw * 0.6;`)};let h={gold:new Me(14266986),pale:new Me(13222042),burnt:new Me(3814448)},u=new qe,d=new xn,f=new We,g=new We,x=new We(0,1,0),m=new Map,p=0,y=0;for(;p<i&&y<i*6;){y++;let _=n+D(-e,e),L=s+D(-e,e),A=t(_,L);if(!A)continue;d.setFromAxisAngle(x,D(0,6.28));let R=D(.7,1.5);f.set(R,R*D(.8,1.3),R),g.set(_,0,L);let P=r?Math.floor(_/r)+","+Math.floor(L/r):"0";m.has(P)||m.set(P,[]),m.get(P).push([u.compose(g,d,f).clone(),h[A].clone().offsetHSL(D(-.02,.02),D(-.08,.05),D(-.08,.08))]),p++}let b=new ke;b.userData.chunks=[];for(let _ of m.values()){let L=new _i(c,l,_.length);_.forEach(([A,R],P)=>{L.setMatrixAt(P,A),L.setColorAt(P,R)}),L.instanceMatrix.needsUpdate=!0,L.instanceColor&&(L.instanceColor.needsUpdate=!0),L.computeBoundingSphere(),L.receiveShadow=!0,L.frustumCulled=!!r,b.add(L),b.userData.chunks.push(L)}return b}function Uv(i,e,t=190){let n=t*t;for(let s of i.userData.chunks){let r=s.boundingSphere.center;s.visible=(r.x-e.position.x)**2+(r.z-e.position.z)**2<n}}function vu(i){let e=new ke,t=new qt(.1,.22,1,6);t.translate(0,.5,0);let n=new br(1,1),s=new _i(t,new Ae({color:16777215,roughness:.95}),i.length*3),r=new _i(n,new Ae({color:16777215,roughness:.9,flatShading:!0}),i.length*3),o=new qe,a=new xn,c=new En,l=0,h=0,u=new Me(3877405),d=new Me(1906966);for(let f of i){let g=D(3.2,5)*f.s,x=D(-.12,.12);c.set(x,D(0,6),D(-.12,.12)),a.setFromEuler(c),o.compose(new We(f.x,0,f.z),a,new We(f.s,g,f.s)),s.setMatrixAt(l,o),s.setColorAt(l++,f.dead?d:u);for(let m of[-1,1])c.set(0,0,m*D(.5,.8)),a.setFromEuler(c),o.compose(new We(f.x,g*.7,f.z),a,new We(f.s*.6,g*.45,f.s*.6)),s.setMatrixAt(l,o),s.setColorAt(l++,f.dead?d:u);if(!f.dead)for(let m=0;m<3;m++){let p=D(2.2,3.4)*f.s;a.identity(),o.compose(new We(f.x+D(-1.4,1.4)*f.s,g+D(-.2,.5),f.z+D(-1.4,1.4)*f.s),a,new We(p,p*.22,p*D(.8,1.1))),r.setMatrixAt(h,o),r.setColorAt(h++,new Me(5660716).offsetHSL(D(-.03,.03),0,D(-.06,.04)))}}s.count=l,r.count=h;for(let f of[s,r])f.castShadow=!0,f.receiveShadow=!0,f.instanceMatrix.needsUpdate=!0,f.instanceColor&&(f.instanceColor.needsUpdate=!0),e.add(f);return e}function Sp(i=1){let e=new ke,t=Tt("bark",()=>new Ae({color:8218192,roughness:.95,flatShading:!0})),n=D(6,8)*i,s=new ne(new qt(1.1*i,1.7*i,n,9),t);s.position.y=n/2,e.add(s);for(let r=0;r<6;r++){let o=r/6*Math.PI*2,a=new ne(new qt(.12*i,.3*i,2.4*i,5),t);a.position.set(Math.cos(o)*.9*i,n+.7*i,Math.sin(o)*.9*i),a.rotation.set(Math.sin(o)*.7,0,-Math.cos(o)*.7),e.add(a);let c=new ne(ft.ico,Tt("baoLeaf",()=>new Ae({color:6122032,flatShading:!0,roughness:.9})));c.scale.set(1*i,.5*i,1*i),c.position.set(Math.cos(o)*1.8*i,n+1.8*i,Math.sin(o)*1.8*i),e.add(c)}return e.traverse(r=>{r.isMesh&&(r.castShadow=!0,r.receiveShadow=!0)}),e}function Ns(i){let e={sand:{base:"#c9a679",band:"#b38f63",win:"#3a2c20",lit:["#ffcf8a","#ffdca8"],litP:.08,arch:!0},white:{base:"#e2d9c6",band:"#cbbfa6",win:"#3b3631",lit:["#ffd9a0"],litP:.06,arch:!0},terra:{base:"#b56a43",band:"#9a5634",win:"#2c1a12",lit:["#ffc070","#ffe0b0"],litP:.08,arch:!1},glass:{base:"#2a3d52",band:"#1b2734",win:"#34506a",lit:["#bfe6ff","#7fdfff"],litP:.14,glass:!0}}[i],t=4,n=12,s=[];for(let c=0;c<t*n;c++)s.push(Math.random()<e.litP?ht(e.lit):null);let r=c=>(l,h,u)=>{let d=h/t,f=u/n;if(l.fillStyle=c?"#000":e.base,l.fillRect(0,0,h,u),!c){let g=l.createLinearGradient(0,0,0,u);g.addColorStop(0,"rgba(255,255,255,0.05)"),g.addColorStop(1,"rgba(40,20,0,0.12)"),l.fillStyle=g,l.fillRect(0,0,h,u),ni(l,h,u,2500,["rgba(0,0,0,0.05)","rgba(255,255,255,0.05)"],2),l.fillStyle=e.band;for(let x=0;x<n;x++)l.fillRect(0,x*f,h,e.glass?5:4);if(e.glass){l.fillStyle="rgba(0,0,0,0.35)";for(let x=0;x<=t*2;x++)l.fillRect(x*d/2-1.5,0,3,u)}}for(let g=0;g<n;g++)for(let x=0;x<t;x++){let m=s[g*t+x];if(c&&!m)continue;let p=x*d,y=g*f;if(e.glass){if(c)l.fillStyle=m,l.globalAlpha=.8,l.fillRect(p+4,y+8,d-8,f-12),l.globalAlpha=1;else{let R=l.createLinearGradient(p,y,p+d,y+f);R.addColorStop(0,m?"#6f97b8":"#41627f"),R.addColorStop(1,e.win),l.fillStyle=R,l.fillRect(p+4,y+8,d-8,f-12)}continue}let b=d*.36,_=f*.56,L=p+(d-b)/2,A=y+f*.26;c||(l.fillStyle="rgba(60,35,15,0.25)",l.fillRect(L-3,A-3,b+6,_+7)),l.fillStyle=c?m:m?"#80603e":e.win,l.beginPath(),e.arch?(l.moveTo(L,A+_),l.lineTo(L,A+b/2),l.arc(L+b/2,A+b/2,b/2,Math.PI,0),l.lineTo(L+b,A+_),l.closePath()):l.rect(L,A,b,_),l.fill(),c||(l.fillStyle="rgba(255,245,225,0.22)",l.fillRect(L-4,A+_,b+8,3))}},o=Bt(256,512,r(!1)),a=Bt(256,512,r(!0));return new Ae({map:o,emissive:16777215,emissiveMap:a,emissiveIntensity:.6,roughness:e.glass?.22:.88,metalness:e.glass?.6:.02})}function Pu(i,e,t,n){let s=i.attributes.uv,r=[n,n,e,e,e,e];for(let o=0;o<6;o++)for(let a=0;a<4;a++){let c=o*4+a;s.setXY(c,s.getX(c)*r[o]/16,s.getY(c)*(o===2||o===3?n/16:t/48))}}function Tp(i){let e=new vt({color:9203590,fog:!1}),t=new vt({color:15916240,fog:!1}),n=new ne(new Zi(230,150,28,1),e);n.position.set(330,70,-440),i.add(n);let s=new ne(new Zi(62,42,28,1),t);s.position.set(330,124,-440),i.add(s);let r=new vt({color:10121066,fog:!1});for(let o=0;o<9;o++){let a=D(0,Math.PI*2),c=D(470,540);if(Math.abs(a-Math.atan2(-440,330))<.4)continue;let l=new ne(new qt(D(30,70),D(50,90),D(25,55),7),r);l.position.set(Math.cos(a)*c,10,Math.sin(a)*c),i.add(l)}}var Le={scene:new Cs,cam:new zt(32,innerWidth/innerHeight,.1,1200),mascar:null,yaw:0,yawVel:0,drag:!1,mx:0,my:0};function Ov(){let i=Le.scene;i.fog=new Ra(4861478,.0105);let e=xp(Iv,900,{zen:1317432,mid:7225162,hor:15764040,glow:16749896,clouds:.55,stars:.7,sunI:1.25});i.add(e),Le.sky=e,i.environment=gp(e),i.environmentIntensity=.7,i.userData.post={strength:.5,radius:.45,threshold:.92,exposure:1},Tp(i),i.add(new po(16757370,2233871,.5));let t=new es(16769732,130,0,.42,.7,2);t.position.set(3.5,7.5,5.5),t.target.position.set(0,1,0),t.castShadow=!0,t.shadow.mapSize.set(cs.shadowMap/2,cs.shadowMap/2),t.shadow.bias=-2e-4,t.shadow.normalBias=.02,i.add(t,t.target);let n=new es(16747066,260,0,.55,.8,2);n.position.set(2.2,3.2,-6),n.target.position.set(0,1.2,0),i.add(n,n.target);let s=new es(4122367,70,0,.5,.8,2);s.position.set(-4,3,-4),s.target.position.set(0,1.4,0),i.add(s,s.target);let r=new Ps(4122367,2.5,10,2);r.position.set(-1.5,1.2,2.5),i.add(r);let o=new ne(new $i(400,64),new Ae({map:_p("#7a5a34","#4e3820","#a8844e",60),roughness:1}));o.rotation.x=-Math.PI/2,o.receiveShadow=!0,i.add(o),i.add(Ep(cs.menuGrass,60,(V,K)=>{let q=Math.hypot(V,K);return q>3.2&&q<60&&K<8?"gold":null}));let a=new ne(new qt(1.25,1.45,.38,48),new Ae({color:2762274,metalness:.85,roughness:.3}));a.position.y=.19,a.receiveShadow=!0,a.castShadow=!0,i.add(a);let c=new ne(new Fn(1.32,.018,8,96),en(4122367,1.6));c.rotation.x=Math.PI/2,c.position.y=.39,i.add(c);let l=new ne(new Ki(2.2,2.24,96),new vt({color:4122367,transparent:!0,opacity:.28}));l.rotation.x=-Math.PI/2,l.position.y=.02,i.add(l);let h=new ke;h.position.set(0,2.1,-2.6),i.add(h);let u=new qi({color:4122367,transparent:!0,opacity:.35}),d=(V,K=96)=>{let q=[];for(let ie=0;ie<=K;ie++){let Z=ie/K*Math.PI*2;q.push(new We(Math.cos(Z)*V,Math.sin(Z)*V,0))}return new yi(new dt().setFromPoints(q),u)};h.add(d(1.9),d(1.75),d(1.1,6));let f=d(1.75,3);f.rotation.z=Math.PI/2,h.add(f);let g=d(1.75,3);g.rotation.z=-Math.PI/2,h.add(g),Le.sigil=h;let x=[];for(let V=0;V<46;V++){let K=D(-Math.PI,0),q=D(16,140);x.push({x:Math.cos(K)*q,z:Math.sin(K)*q-4,s:D(.9,1.6)})}i.add(vu(x));for(let[V,K,q]of[[-22,-34,1.3],[26,-58,1.6],[-60,-90,1.8]]){let ie=Sp(q);ie.position.set(V,0,K),i.add(ie)}let m=new We(-.39,0,-.92),p=new We(.92,0,-.39),y=(V,K)=>m.clone().multiplyScalar(Math.cos(V*Math.PI/180)*K).addScaledVector(p,Math.sin(V*Math.PI/180)*K),b=[Ns("sand"),Ns("white"),Ns("glass")],_=new Ae({color:15129803,roughness:.6}),L=new Ae({color:10124894,roughness:.9});for(let V=0;V<40;V++){let K=y(D(19,36),D(170,240)),q=D(6,13),ie=D(6,13),Z=D(12,55)*(V%6===0?1.7:1),me=Z>60?b[2]:ht([b[0],b[0],b[1]]),_e=new Tn(q,Z,ie);Pu(_e,q,Z,ie);let Ce=new ne(_e,[me,me,L,L,me,me]);if(Ce.position.set(K.x,Z/2,K.z),i.add(Ce),me!==b[2]&&V%3===0){let Ge=new ne(new Mi(Math.min(q,ie)*.45,16,8,0,Math.PI*2,0,Math.PI/2),_);Ge.position.set(K.x,Z,K.z),i.add(Ge)}}let A=new ke,R=y(-17,135);A.position.set(R.x,0,R.z),i.add(A);let P=en(16722762,1.6),E=new ne(ft.oct,P);E.scale.set(3,14,3),E.position.y=5,E.rotation.z=.35,A.add(E),Le.frags=[];for(let V=0;V<7;V++){let K=new ne(ft.oct,P);K.scale.set(D(.6,1.4),D(2,4),D(.6,1.4)),K.position.set(D(-8,8),D(14,26),D(-3,3)),K.rotation.set(D(0,3),D(0,3),D(0,3)),K.userData.s=D(.1,.4),K.userData.dynamic=!0,A.add(K),Le.frags.push(K)}let M=700,N=new Float32Array(M*3),X=new Float32Array(M*3);for(let V=0;V<M;V++){N[V*3]=D(-14,14),N[V*3+1]=D(0,10),N[V*3+2]=D(-12,6);let K=Math.random()<.8?[1,.75,.4]:[.25,.9,1];X.set(K,V*3)}let W=new dt;W.setAttribute("position",new Et(N,3)),W.setAttribute("color",new Et(X,3)),Le.embers=new Yi(W,new vi({map:Ru(),size:.07,vertexColors:!0,transparent:!0,opacity:.8,blending:dn,depthWrite:!1})),i.add(Le.embers),Le.mascar=Cu(2.05),Le.mascar.position.y=.38,Le.mascar.userData.dynamic=!0,i.add(Le.mascar),Le.onView=y,Le.herd=[];for(let[V,K,q]of[["elephant",-4,62],["elephant",-8,66],["giraffe",-13,70],["giraffe",-17,74],["giraffe",-22,68]]){let ie=V==="giraffe"?Ap():Rp();ie.group.userData.dynamic=!0,i.add(ie.group),Le.herd.push({rig:ie,deg:K,dist:q,phase:D(0,6),speed:V==="giraffe"?1.5:1.2})}Le.birds=Cp(uc(4,y(-6,120).x,y(-6,120).z,14,26,26,34,6,1.6)),i.add(Le.birds),yp(i,400),Le.cam.position.set(1.9,1.75,6.4)}function Fv(i){let e=T.time;pc.value=e,Le.sky.material.uniforms.t.value=e;for(let a of Le.herd){a.deg+=a.speed*i/a.dist*180/Math.PI,a.deg>8&&(a.deg-=38);let c=Le.onView(a.deg,a.dist),l=Le.onView(a.deg+1,a.dist),h=a.rig.group;h.position.set(c.x,0,c.z),h.rotation.y=Math.atan2(l.x-c.x,l.z-c.z),a.phase+=i*a.speed/a.rig.legLen*2.4,a.rig.legs.forEach((u,d)=>{u.rotation.x=Math.sin(a.phase+[0,Math.PI,Math.PI,0][d])*.34}),a.rig.tail.rotation.z=Math.sin(e*2+a.dist)*.3}Ip(Le.birds,e),Le.drag||(Le.yawVel*=.94,Le.yaw+=Le.yawVel,Le.yaw*=.985),Le.mascar&&(Le.mascar.rotation.y=Le.yaw+Math.sin(e*.25)*.18,Le.mascar.children[0].scale.y=Le.mascar.children[0].scale.x*(1+Math.sin(e*1.6)*.003)),Le.sigil.rotation.z=e*.05,Le.sigil.children[3].rotation.z=Math.PI/2-e*.12,Le.sigil.children[4].rotation.z=-Math.PI/2+e*.09;for(let a of Le.frags)a.rotation.y+=a.userData.s*i,a.position.y+=Math.sin(e+a.userData.s*10)*.004;let t=Le.embers.geometry.attributes.position;for(let a=0;a<t.count;a++){let c=t.getY(a)+i*(.08+a%7*.02);c>10&&(c=0),t.setY(a,c),t.setX(a,t.getX(a)+Math.sin(e*.4+a)*.003+i*.05),t.getX(a)>14&&t.setX(a,-14)}t.needsUpdate=!0;let n=Le.cam.aspect<1,s=(n?.5:1.9)+Le.mx*.35,r=(n?1.6:1.75)-Le.my*.2,o=n?6.4+4.5/Le.cam.aspect:6.4;Le.cam.position.x+=(s-Le.cam.position.x)*.04,Le.cam.position.y+=(r-Le.cam.position.y)*.04,Le.cam.position.z+=(o-Le.cam.position.z)*.08,Le.cam.lookAt(n?0:-.85,n?.35:1.22,0)}var he={scene:new Cs,cam:new zt(60,innerWidth/innerHeight,.1,900)},wo={plaza:{name:"CONCORDIA PLAZA",sub:"SANCTUARY \xB7 SEAT OF THE GOVERNOR",safe:!0},causeway:{name:"CONCORD CAUSEWAY",sub:"AD-NOSTRA"},ward:{name:"SPIRE WARD",sub:"AD-NOSTRA"},ashen:{name:"SCORCHED VELD",sub:"LEVEL 1\u20133 \xB7 CONTESTED"},echo:{name:"ECHO PLAINS",sub:"LEVEL 2\u20134 \xB7 CONTESTED"},crater:{name:"THE CATHARSIS CRATER",sub:"LEVEL 4\u20137 \xB7 HOSTILE"},cantina:{name:"THE SALT LANTERN",sub:"CANTINA \xB7 SANCTUARY",safe:!0}},rn={x0:-11,x1:11,z0:46,z1:70,h:6.2},Bv=(i,e)=>i>rn.x0+.3&&i<rn.x1-.3&&e>rn.z0+.3&&e<rn.z1-.3,kv=(i,e)=>Math.abs(i)<17&&e>28&&e<78,mt=new We(0,0,-165);function Zn(i,e){return Bv(i,e)?"cantina":Math.hypot(i,e)<34?"plaza":Math.hypot(i-mt.x,e-mt.z)<72?"crater":i>34&&i<156&&Math.abs(e)<62?"ashen":i<-34&&i>-156&&Math.abs(e)<62?"echo":Math.abs(e)<12||Math.abs(i)<12&&e<0?"causeway":"ward"}function rp(i,e,t){return Math.abs(i)<17+t&&e>28-t&&e<78+t||Math.hypot(i,e)<40+t||Math.abs(e)<12+t||Math.abs(i)<12+t||i>30-t&&i<160+t&&Math.abs(e)<66+t||i<-30+t&&i>-160-t&&Math.abs(e)<66+t||Math.hypot(i-mt.x,e-mt.z)<76+t||Math.hypot(i,e)>232-t}function Nt(i,e,t,n,s=60){T.colliders.push({minX:i-t/2,maxX:i+t/2,minZ:e-n/2,maxZ:e+n/2,h:s})}function zv(){let i=he.scene;i.fog=new Ca(14200450,70,330),i.userData.post={strength:.45,radius:.5,threshold:.95,exposure:.9},i.add(new po(16769208,5914152,.6));let e=new Sr(16766624,2.4);e.castShadow=!0,e.shadow.mapSize.set(cs.shadowMap,cs.shadowMap),Object.assign(e.shadow.camera,{left:-45,right:45,top:45,bottom:-45,near:1,far:300}),e.shadow.camera.updateProjectionMatrix(),e.shadow.bias=-4e-4,e.shadow.normalBias=.03,i.add(e,e.target),he.sun=e;let t=xp(lc,600,{zen:4880564,mid:12170408,hor:14200450,glow:16761466,clouds:1});i.add(t),he.sky=t,i.environment=gp(t),i.environmentIntensity=.55,Tp(i);let n=_p("#9a7440","#6e5028","#c9a160",90),s=new ne(new Jt(600,600),new Ae({map:n,roughness:1}));s.rotation.x=-Math.PI/2,s.receiveShadow=!0,i.add(s);let r=(O,j,J,le,I=.02,Ie={})=>{let xe=new ne(O,new Ae(Object.assign({map:j,roughness:.95,polygonOffset:!0,polygonOffsetFactor:-1-I*10},Ie)));return xe.rotation.x=-Math.PI/2,xe.position.set(J,I,le),xe.receiveShadow=!0,i.add(xe),xe},o=Bt(256,256,(O,j,J)=>{O.fillStyle="#8a5a3a",O.fillRect(0,0,j,J),ni(O,j,J,2500,["#7a4e32","#9c6a46","#6a4229"],3),O.fillStyle="rgba(240,220,180,0.35)",O.fillRect(40,124,170,8)});o.repeat.set(300/14,1),r(new Jt(300,14),o,0,0,.01);let a=Bt(256,256,(O,j,J)=>{O.fillStyle="#8a5a3a",O.fillRect(0,0,j,J),ni(O,j,J,2500,["#7a4e32","#9c6a46","#6a4229"],3),O.fillStyle="rgba(240,220,180,0.35)",O.fillRect(124,40,8,170)});a.repeat.set(1,120/14),r(new Jt(14,120),a,0,-60,.011);let c=Tt("kerb",()=>new Ae({color:14205082,roughness:.9}));for(let O of[-1,1]){for(let j of[-1,1])fe(116,.06,.12,c,j*92,.03,O*7.2,i).castShadow=!1;fe(.12,.06,70,c,O*7.2,.03,-71,i).castShadow=!1}let l={sand:Ns("sand"),white:Ns("white"),terra:Ns("terra"),glass:Ns("glass")},h=new Ae({color:11045478,roughness:.92}),u=new Ae({color:14931384,roughness:.85}),d=new Ae({color:15656144,roughness:.55}),f=en(16724821,3);he.blink=f;let g=(O,j,J,le,I,Ie,xe)=>{let Ue=new Tn(O,j,J);Pu(Ue,O,j,J);let be=new ne(Ue,[xe,xe,h,h,xe,xe]);be.position.set(le,I+j/2,Ie),be.castShadow=be.receiveShadow=!0,i.add(be)},x=(O,j,J,le,I)=>{for(let[Ie,xe,Ue,be]of[[O,.35,0,j/2],[O,.35,0,-j/2],[.35,j,O/2,0],[.35,j,-O/2,0]])fe(Ie,.9,xe,u,J+Ue,le+.45,I+be,i)},m=(O,j,J)=>{let le=D(7,13);fe(.35,le,.35,u,O,j+le/2,J,i);let I=new ne(ft.sph,f);I.scale.setScalar(.35),I.position.set(O,j+le,J),i.add(I)};for(let O=-230;O<=230;O+=20)for(let j=-230;j<=230;j+=20){let J=D(9,15),le=D(9,15),I=O+D(-2,2),Ie=j+D(-2,2);if(rp(I,Ie,Math.max(J,le)/2))continue;let xe=Math.hypot(I,Ie),Ue=D(14,40)+(xe<120?D(0,45):D(0,20));if(Nt(I,Ie,J,le,Ue+3),Ue>58&&Math.random()<.55){let C=D(7,11);g(J,C,le,I,0,Ie,l.sand),x(J,le,I,C,Ie);let F=J*D(.55,.7),z=le*D(.55,.7);g(F,Ue-C,z,I,C,Ie,l.glass),m(I,Ue,Ie);continue}let be=ht([l.sand,l.sand,l.white,l.terra]),at=Ue>34?zs(2,3):1,Pe=0,w=J,v=le,G=Ue;for(let C=0;C<at;C++){let F=C===at-1?G:G*D(.45,.62);g(w,F,v,I,Pe,Ie,be),Pe+=F,G-=F,(C<at-1||be!==l.white)&&x(w,v,I,Pe,Ie),C<at-1&&(w*=D(.62,.8),v*=D(.62,.8))}if(be===l.white&&Math.random()<.7){let C=Math.min(w,v)*.42,F=new ne(new qt(C,C,1.6,20),u);F.position.set(I,Pe+.8,Ie),F.castShadow=!0,i.add(F);let z=new ne(new Mi(C,20,10,0,Math.PI*2,0,Math.PI/2),d);z.position.set(I,Pe+1.6,Ie),z.castShadow=!0,i.add(z)}else Ue>50&&m(I,Pe,Ie)}let p=new ne(new qt(246,246,34,128,1,!0),new Ae({color:11832418,roughness:.95,side:tn}));p.position.y=17,i.add(p);let y=new ne(new Fn(245,.25,6,256),en(15254634,1.6));y.rotation.x=Math.PI/2,y.position.y=33,i.add(y);let b=["AD-NOSTRA","REBUILD \xB7 RENEW \xB7 REMEMBER","CONCORD","ANNO DOMINI 2137","THE SKY IS OURS","ENLIST \xB7 ASCEND"];b.forEach((O,j)=>{let J=Bt(1024,192,(Ie,xe,Ue)=>{Ie.clearRect(0,0,xe,Ue),Ie.strokeStyle=j%2?"#e8c46a":"#3ee6ff",Ie.lineWidth=4,Ie.strokeRect(8,8,xe-16,Ue-16),Ie.fillStyle=j%2?"#e8c46a":"#3ee6ff",Ie.font="bold 84px Bahnschrift, Segoe UI, sans-serif",Ie.textAlign="center",Ie.textBaseline="middle",Ie.fillText(O,xe/2,Ue/2+4)});J.wrapS=J.wrapT=vn;let le=j/b.length*Math.PI*2+.5,I=new ne(new Jt(26,4.9),new vt({map:J,transparent:!0,opacity:.85,side:$t,blending:dn,depthWrite:!1}));I.position.set(Math.cos(le)*46,D(20,30),Math.sin(le)*46),I.lookAt(0,I.position.y,0),i.add(I)});let _=Bt(1024,1024,(O,j,J)=>{O.fillStyle="#b4936c",O.fillRect(0,0,j,J),ni(O,j,J,8e3,["#c0a07a","#a6845e","#c9ab86"]),O.strokeStyle="rgba(90,60,30,0.35)",O.lineWidth=3;for(let le=64;le<512;le+=64)O.beginPath(),O.arc(512,512,le,0,Math.PI*2),O.stroke();for(let le=0;le<32;le++){let I=le/32*Math.PI*2;O.beginPath(),O.moveTo(512+Math.cos(I)*64,512+Math.sin(I)*64),O.lineTo(512+Math.cos(I)*512,512+Math.sin(I)*512),O.stroke()}});r(new $i(34,96),_,0,0,.03,{roughness:.85});for(let[O,j]of[[33.6,.9],[30,.5],[16,.6]]){let J=new ne(new Ki(O-.15,O,128),new vt({color:4122367,transparent:!0,opacity:j}));J.rotation.x=-Math.PI/2,J.position.y=.05,i.add(J)}let L=Ci(2765115);for(let O=0;O<12;O++){let j=O/12*Math.PI*2+Math.PI/12,J=Math.cos(j)*31,le=Math.sin(j)*31;fe(.25,5,.25,L,J,2.5,le,i),fe(.9,.12,.9,en(10480127,3),J,5.05,le,i),Nt(J,le,.5,.5)}let A=new Ae({color:9073240,metalness:.2,roughness:.6});for(let[O,j]of[[5.5,.4],[4.3,.8],[3.2,1.2]]){let J=new ne(new qt(O,O+.2,j,48),A);J.position.set(0,j/2,-12),J.receiveShadow=!0,J.castShadow=!0,i.add(J)}let R=new ne(new Fn(3.25,.03,6,96),en(4122367,4));R.rotation.x=Math.PI/2,R.position.set(0,1.21,-12),i.add(R);let P=fe(9,4,9,A,0,2,-27,i);Nt(0,-27,9,9);let E=Bt(512,128,(O,j,J)=>{O.fillStyle="#c9a85a",O.font="bold 40px Bahnschrift, sans-serif",O.textAlign="center",O.fillText("CARAX \xB7 SAGITTARIUS A*",j/2,52),O.font="28px Bahnschrift, sans-serif",O.fillText("MMCXXVII",j/2,98)});E.wrapS=E.wrapT=vn;let M=new ne(new Jt(6,1.5),new Ae({map:E,transparent:!0,emissive:13215834,emissiveMap:E,emissiveIntensity:.5}));M.position.set(0,2.2,-22.48),i.add(M);let N=Cu(15,new Ae({color:9212828,roughness:.75,metalness:.15}));N.position.set(0,4,-27),i.add(N);let X=new ne(new Fn(7,.12,8,128),en(4122367,3));X.position.set(0,15,-29),X.userData.dynamic=!0,i.add(X),he.halo=X;let W=Bt(512,512,(O,j,J)=>{O.fillStyle="#4a3a2c",O.fillRect(0,0,j,J),ni(O,j,J,9e3,["#3a2e24","#2a221c","#5c4834","#6e5028"],3),Mo(O,j,J,18,"rgba(0,0,0,0.6)",2),Mo(O,j,J,4,"rgba(255,90,40,0.25)",1.5)},8);r(new Jt(124,126),W,95,0,.02);let V=new Ae({color:9072210,roughness:.95}),K=new Ae({color:3024416,roughness:1});for(let O=0;O<46;O++){let j=D(42,150),J=D(-58,58);if(Math.abs(J)<9)continue;let le=Math.random()<.5,I=D(3,11),Ie=D(.8,5.5),xe=D(.6,1.2),Ue=fe(le?xe:I,Ie,le?I:xe,Math.random()<.5?V:K,j,Ie/2,J,i);if(Nt(j,J,le?xe:I,le?I:xe,Ie),Math.random()<.4)for(let be=0;be<4;be++)fe(D(.4,1.4),D(.3,.9),D(.4,1.4),V,j+D(-3,3),.25,J+D(-3,3),i).rotation.set(D(0,1),D(0,3),D(0,1))}he.fires=[];let q=new Ae({color:16742954,emissive:16734746,emissiveIntensity:3,transparent:!0,opacity:.9});for(let O=0;O<12;O++){let j=D(45,148),J=D(-55,55);if(Math.abs(J)<9)continue;let le=new ne(ft.cyl,Ci(3811874));le.scale.set(.45,1,.45),le.position.set(j,.5,J),le.castShadow=!0,i.add(le),Nt(j,J,.9,.9,1.2);let I=new ne(new Zi(.4,1.2,8),q);I.position.set(j,1.5,J),I.userData.dynamic=!0,i.add(I),he.fires.push(I)}let ie=[];for(let O=0;O<22;O++){let j=D(44,150),J=D(-58,58);Math.abs(J)<12||(ie.push({x:j,z:J,s:D(.8,1.3),dead:Math.random()<.7}),Nt(j,J,.7,.7,4))}i.add(vu(ie));let Z=Bt(512,512,(O,j,J)=>{O.fillStyle="#b7a77c",O.fillRect(0,0,j,J),ni(O,j,J,6e3,["#c9bb92","#a39268","#d4c8a2"],2),O.strokeStyle="rgba(255,43,74,0.12)",O.lineWidth=2;for(let le=0;le<=8;le++)O.beginPath(),O.moveTo(le*64,0),O.lineTo(le*64,J),O.stroke(),O.beginPath(),O.moveTo(0,le*64),O.lineTo(j,le*64),O.stroke();Mo(O,j,J,10,"rgba(60,40,20,0.35)")},6);r(new Jt(124,126),Z,-95,0,.02),he.pylons=[];for(let O=0;O<9;O++){let j=D(-148,-48),J=D(-55,55);if(Math.abs(J)<10)continue;let le=new ne(new qt(.35,.7,16,8),Ci(3814448));le.position.set(j,8,J),le.castShadow=!0,i.add(le),Nt(j,J,1.4,1.4);let I=new ne(new Fn(1.6,.08,6,32),en(16722762,3));I.position.set(j,12,J),I.rotation.x=Math.PI/2,i.add(I);let Ie=new ne(ft.oct,en(16722762,4));Ie.scale.setScalar(.5),Ie.position.set(j,16.6,J),i.add(Ie),I.userData.dynamic=Ie.userData.dynamic=!0,he.pylons.push({r:I,top:Ie,ph:D(0,6)})}let me=[];for(let O=0;O<18;O++){let j=D(-150,-44),J=D(-58,58);Math.abs(J)<12||(me.push({x:j,z:J,s:D(.9,1.5)}),Nt(j,J,.7,.7,4))}i.add(vu(me));for(let[O,j,J]of[[-70,-40,1.1],[-132,34,1.3],[-110,-50,.9]]){let le=Sp(J);le.position.set(O,0,j),i.add(le),Nt(O,j,3.2*J,3.2*J,8)}let _e=Bt(1024,1024,(O,j,J)=>{O.fillStyle="#5a2e22",O.fillRect(0,0,j,J),ni(O,j,J,12e3,["#6a3828","#44221a","#7a4430","#2a1610"],3),O.shadowColor="#ff2b4a",O.shadowBlur=8,Mo(O,j,J,26,"rgba(255,43,74,0.55)",2.5),O.shadowBlur=0,Mo(O,j,J,30,"rgba(0,0,0,0.6)",2)});r(new $i(72,96),_e,mt.x,mt.z,.025,{emissive:16777215,emissiveMap:_e,emissiveIntensity:.15});let Ce=new Ae({color:8014388,roughness:.9,flatShading:!0});for(let O=0;O<Math.PI*2;O+=.085){if(Math.abs(O-Math.PI/2)<.2)continue;let j=D(64,74),J=D(3.5,7),le=D(6,16),I=mt.x+Math.cos(O)*j,Ie=mt.z+Math.sin(O)*j,xe=new ne(ft.rock,Ce);xe.scale.set(J*1.25,le*.32,J),xe.position.set(I,le*.1,Ie),xe.rotation.set(D(-.15,.15),D(0,3),D(-.15,.15)),xe.castShadow=!0,xe.receiveShadow=!0,i.add(xe),Nt(I,Ie,J*1.3,J*1.3,le*.6)}for(let O=0;O<26;O++){let j=D(0,Math.PI*2),J=D(18,58),le=mt.x+Math.cos(j)*J,I=mt.z+Math.sin(j)*J;if(I>mt.z+40&&Math.abs(le)<10)continue;let Ie=D(1,2.5),xe=new ne(ft.rock,Ce);xe.scale.set(Ie*1.2,Ie*D(.5,.8),Ie),xe.position.set(le,Ie*.2,I),xe.rotation.set(D(-.4,.4),D(0,3),D(-.4,.4)),xe.castShadow=!0,i.add(xe),Nt(le,I,Ie*1.2,Ie*1.2,3)}let Ge=new ke;Ge.position.set(mt.x,0,mt.z-12),i.add(Ge);let ct=new Ae({color:2753289,emissive:16718396,emissiveIntensity:1.8,roughness:.2,metalness:.3,flatShading:!0}),te=new ne(ft.oct,ct);te.scale.set(5,14,5),te.position.y=4,te.rotation.z=.15,Ge.add(te),te.castShadow=!0,Nt(Ge.position.x,Ge.position.z,8,8);let ce=new Ae({color:1709078,metalness:.7,roughness:.45,flatShading:!0}),Re=new ne(new qt(2.5,5.5,36,8),ce);Re.position.set(7,4,-24),Re.rotation.set(1.32,.25,0),Re.castShadow=!0,Re.receiveShadow=!0,Ge.add(Re);for(let O=0;O<4;O++){let j=new ne(new Fn(3+O*.7,.12,6,8),ct);j.position.set(0,-12+O*7,0),j.rotation.x=Math.PI/2,Re.add(j)}for(let O of[-1,1]){let j=fe(9,.5,5,ce,0,6,0);j.position.set(O*6,6,0),j.rotation.z=O*.4,Re.add(j)}for(let O=0;O<4;O++)Nt(Ge.position.x+7+(O-1.5)*2.2,Ge.position.z-10-O*8,10,9,8);he.frags=[];for(let O=0;O<9;O++){let j=new ne(ft.oct,ct);j.scale.set(D(1,2.5),D(3,7),D(1,2.5));let J=O/9*Math.PI*2;j.userData={a:J,r:D(9,15),y:D(16,30),s:D(.05,.15),dynamic:!0},Ge.add(j),he.frags.push(j)}let ge=1400,ze=new Float32Array(ge*3);for(let O=0;O<ge;O++)ze[O*3]=D(-60,60),ze[O*3+1]=D(0,30),ze[O*3+2]=D(-60,60);let Xe=new dt;Xe.setAttribute("position",new Et(ze,3)),he.ash=new Yi(Xe,new vi({map:Ru(),size:.16,color:16769192,transparent:!0,opacity:.55,depthWrite:!1})),i.add(he.ash),he.grass=Ep(cs.worldGrass,232,(O,j)=>{if(Math.hypot(O,j)>236||!rp(O,j,-2)||kv(O,j)||Math.abs(j)<8||Math.abs(O)<8&&j<0&&j>-120)return null;let J=Zn(O,j);return J==="plaza"?null:J==="crater"?Math.hypot(O-mt.x,j-mt.z)>62&&Math.random()<.3?"burnt":null:J==="ashen"?Math.random()<.6?"burnt":"gold":J==="echo"?"pale":"gold"},0,0,64),i.add(he.grass),he.shieldMesh=new ne(new Mi(1.3,24,16),new vt({color:10480127,transparent:!0,opacity:.18,blending:dn,depthWrite:!1})),he.shieldMesh.visible=!1,i.add(he.shieldMesh),he.targetRing=new ne(new Ki(.9,1.05,48),new vt({color:16722762,transparent:!0,opacity:.9,depthWrite:!1})),he.targetRing.rotation.x=-Math.PI/2,he.targetRing.visible=!1,i.add(he.targetRing),Gv(i),he.birds=Cp([...uc(7,mt.x,mt.z,22,46,30,46,7,1.6),...uc(10,-95,8,12,24,14,20,10,.45),...uc(8,95,-10,12,22,14,20,10,.45)]),i.add(he.birds),he.batch=yp(i,250),Lv(i),aM(),Wv(),cM(),lM(),hM(),nM(),T.world=!0}var Hv=()=>Bt(512,512,(i,e,t)=>{i.fillStyle="#ece5d6",i.fillRect(0,0,e,t),ni(i,e,t,5e3,["rgba(0,0,0,0.035)","rgba(255,255,255,0.08)","rgba(120,90,50,0.05)"],3);let n=i.createLinearGradient(0,t,0,t*.55);n.addColorStop(0,"rgba(150,110,60,0.28)"),n.addColorStop(1,"rgba(150,110,60,0)"),i.fillStyle=n,i.fillRect(0,t*.55,e,t*.45)}),Vv=()=>Bt(512,512,(i,e,t)=>{let s=t/16;for(let r=0;r<16;r++){let o=-D(0,200);for(;o<e;){let a=D(140,260);i.fillStyle=ht(["#6b4527","#5e3c22","#74502e","#634024"]),i.fillRect(o,r*s,a-2,s-2),o+=a}}for(let r=0;r<900;r++)i.fillStyle="rgba(30,15,5,0.18)",i.fillRect(D(0,e),D(0,t),D(8,40),1)},3);function op(i,e,t,n){let s=Bt(i,e,r=>{t&&(r.fillStyle=t,r.fillRect(0,0,i,e));for(let o of n)r.fillStyle=o.c,r.font=o.f,r.textAlign="center",r.textBaseline="middle",r.fillText(o.t,i/2,o.y)});return s.wrapS=s.wrapT=vn,s}function Gv(i){let{x0:e,x1:t,z0:n,z1:s,h:r}=rn,o=.6,a=(e+t)/2,c=(n+s)/2,l=t-e,h=s-n,u=Tt("plaster",()=>new Ae({map:Hv(),roughness:.95})),d=Tt("darkwood",()=>new Ae({color:4073238,roughness:.75})),f=Tt("lightwood",()=>new Ae({color:9067058,roughness:.55})),g=Tt("iron",()=>new Ae({color:2236446,metalness:.7,roughness:.45})),x=Tt("brass",()=>new Ae({color:13213776,metalness:.9,roughness:.3})),m=en(16757575,2.2),p=(C,F,z,re,oe,pe)=>{let Ke=new Tn(C,F,z);Pu(Ke,C,F*3,z);let ae=new ne(Ke,u);ae.position.set(re,oe,pe),ae.castShadow=ae.receiveShadow=!0,i.add(ae)},y=(C,F,z,re,oe,pe,Ke,ae=16)=>{let Te=new ne(new qt(C,F,z,ae),re);return Te.position.set(oe,pe,Ke),Te.castShadow=Te.receiveShadow=!0,i.add(Te),Te},b=Bt(512,512,(C,F,z)=>{C.fillStyle="#b4936c",C.fillRect(0,0,F,z),ni(C,F,z,6e3,["#c0a07a","#a6845e","#c9ab86"]),C.strokeStyle="rgba(80,55,30,0.4)",C.lineWidth=3;for(let re=0;re<=8;re++)C.beginPath(),C.moveTo(re*64,0),C.lineTo(re*64,z),C.stroke(),C.beginPath(),C.moveTo(0,re*64+re%2*16),C.lineTo(F,re*64+re%2*16),C.stroke()},5),_=new ne(new Jt(34,50),new Ae({map:b,roughness:.9,polygonOffset:!0,polygonOffsetFactor:-1.2}));_.rotation.x=-Math.PI/2,_.position.set(0,.022,53),_.receiveShadow=!0,i.add(_);let L=Tt("terracotta",()=>new Ae({color:10768430,roughness:.85})),A=Tt("frond",()=>new Ae({color:5925420,roughness:.85,side:$t}));for(let C of[-1,1]){let F=C*4.4,z=n-1.6;y(.55,.42,.9,L,F,.45,z);let re=y(.1,.16,3.2,Tt("palmTrunk",()=>new Ae({color:7033398,roughness:.95})),F,2.4,z,6);re.rotation.z=C*.06;for(let oe=0;oe<7;oe++){let pe=new ne(new Jt(.5,2.2),A),Ke=oe/7*Math.PI*2;pe.position.set(F+Math.sin(Ke)*.8,3.9,z+Math.cos(Ke)*.8),pe.rotation.set(1.05,Ke,0,"YXZ"),pe.castShadow=!0,i.add(pe)}Nt(F,z,1.1,1.1,2),fe(2.4,.12,.6,f,C*8,.55,n-1.2,i),fe(.12,.5,.5,d,C*8-1,.25,n-1.2,i),fe(.12,.5,.5,d,C*8+1,.25,n-1.2,i)}p(o,r,h+o,e,r/2,c),p(o,r,h+o,t,r/2,c),p(l+o,r,o,a,r/2,s);let R=4.4,P=(l-R)/2;p(P,r,o,e+P/2,r/2,n),p(P,r,o,t-P/2,r/2,n),p(R,2,o,a,r-1,n),Nt(e,c,o,h+o,r+.5),Nt(t,c,o,h+o,r+.5),Nt(a,s,l+o,o,r+.5),Nt(e+P/2,n,P,o,r+.5),Nt(t-P/2,n,P,o,r+.5);for(let C of[-1,1])fe(.3,4.4,.8,d,C*(R/2+.05),2.2,n,i);fe(R+.7,.35,.8,d,a,4.35,n,i);let E=Bt(128,256,(C,F,z)=>{C.fillStyle="#3a2414",C.fillRect(0,0,F,z),C.strokeStyle="#24160b",C.lineWidth=6,C.strokeRect(10,10,F-20,z-20),C.strokeRect(24,30,F-48,z-60),C.fillStyle="#d4a94e";for(let re=40;re<z-30;re+=26)for(let oe of[36,F/2,F-36])C.beginPath(),C.arc(oe,re,4,0,7),C.fill()}),M=new ne(new Tn(2,4.1,.14),new Ae({map:E,roughness:.7}));M.geometry.translate(1,0,0),M.position.set(a-R/2+.1,2.05,n+.25),M.rotation.y=-1.75,M.castShadow=!0,i.add(M);let N=Bt(64,128,(C,F,z)=>{C.fillStyle="#2a1a10",C.fillRect(0,0,F,z),C.fillStyle="#ffc070",C.beginPath(),C.moveTo(8,z-8),C.lineTo(8,30),C.arc(F/2,30,F/2-8,Math.PI,0),C.lineTo(F-8,z-8),C.fill(),C.fillStyle="#2a1a10",C.fillRect(F/2-2,10,4,z-18),C.fillRect(8,z/2,F-16,4)}),X=new Ae({map:N,emissive:16777215,emissiveMap:N,emissiveIntensity:.9,roughness:.4});for(let C of[51,58,65])for(let F of[e,t]){let z=new ne(new Tn(o+.06,2,1.1),X);z.position.set(F,2.8,C),i.add(z)}let W=op(1024,220,"#2a1a10",[{t:"THE SALT LANTERN",y:100,c:"#f0c46a",f:"bold 96px Georgia, serif"},{t:"\xB7 EST. BEFORE ANYONE REMEMBERS \xB7",y:178,c:"#b48a4a",f:"34px Georgia, serif"}]),V=new ne(new Jt(4.6,1),new Ae({map:W,emissive:16777215,emissiveMap:W,emissiveIntensity:.35,roughness:.6}));V.position.set(a,5.25,n-o/2-.03),V.rotation.y=Math.PI,i.add(V),fe(1.4,.5,1.4,u,a,r+.25,n,i);let K=new ke;K.position.set(a,r+.5,n),i.add(K);for(let[C,F]of[[-1,-1],[1,-1],[-1,1],[1,1]])fe(.08,2,.08,g,C*.5,1,F*.5,K);fe(1.2,.12,1.2,g,0,.06,0,K);let q=new ne(new Zi(.95,.7,4),g);q.position.y=2.35,q.rotation.y=Math.PI/4,q.castShadow=!0,K.add(q);let ie=new ne(ft.oct,m);ie.scale.set(.38,.75,.38),ie.position.y=1,ie.userData.dynamic=!0,K.add(ie),he.lanternCrystal=ie;let Z=new ne(new Jt(l,h),new Ae({map:Vv(),roughness:.7,polygonOffset:!0,polygonOffsetFactor:-2}));Z.rotation.x=-Math.PI/2,Z.position.set(a,.035,c),Z.receiveShadow=!0,i.add(Z);let me=Bt(128,512,(C,F,z)=>{C.fillStyle="#7a2a1c",C.fillRect(0,0,F,z),C.strokeStyle="#d9a44e",C.lineWidth=6,C.strokeRect(8,8,F-16,z-16),C.fillStyle="#1d3b4a";for(let re=40;re<z-30;re+=48)C.beginPath(),C.moveTo(F/2,re),C.lineTo(F/2+26,re+20),C.lineTo(F/2,re+40),C.lineTo(F/2-26,re+20),C.fill()}),_e=new ne(new Jt(2.4,7),new Ae({map:me,roughness:1,polygonOffset:!0,polygonOffsetFactor:-3}));_e.rotation.x=-Math.PI/2,_e.position.set(a,.04,n+4),_e.receiveShadow=!0,i.add(_e);let Ce=new ke;Ce.userData.dynamic=!0,i.add(Ce);let Ge=Tt("cantinaRoof",()=>new Ae({color:14274493,roughness:.95})),ct=new ne(new Tn(l+o+.8,.5,h+o+.8),Ge);ct.position.set(a,r+.25,c),Ce.add(ct);for(let[C,F,z,re]of[[l+o+.8,.4,a,s+.6],[.4,h+o+.8,e-.6,c],[.4,h+o+.8,t+.6,c]]){let oe=new ne(new Tn(C,.9,F),Ge);oe.position.set(z,r+.95,re),Ce.add(oe)}Ce.traverse(C=>{C.isMesh&&(C.castShadow=!0,C.receiveShadow=!0)}),he.cantinaRoof={group:Ce,solid:Ge,ghost:new Ae({colorWrite:!1,depthWrite:!1}),inside:!1};for(let C of[49.5,54,58.5,63,67.5])fe(l,.35,.4,d,a,r-.35,C,i);for(let[C,F]of[[-5,54],[5,54],[-5,63],[5,63],[0,58.5]]){fe(.03,1.2,.03,g,C,r-1.1,F,i);let z=new ne(ft.oct,m);z.scale.set(.16,.26,.16),z.position.set(C,r-1.9,F),i.add(z);let re=new ne(new Zi(.2,.18,6),g);re.position.set(C,r-1.6,F),i.add(re)}let te=new Ps(16756838,0,26,1.6);te.position.set(a,r-1.6,c),i.add(te),he.cantinaLight=te;let ce=-2,Re=9.4,ge=66,ze=Re-ce,Xe=(ce+Re)/2;fe(ze,1.1,1,d,Xe,.55,ge,i),fe(ze+.2,.1,1.25,f,Xe,1.15,ge,i);let O=new ne(new qt(.04,.04,ze,8),x);O.rotation.z=Math.PI/2,O.position.set(Xe,.25,ge-.62),i.add(O),Nt(Xe,ge,ze,1,1.4);for(let C of[1.7,2.5,3.3]){fe(10.5,.08,.38,f,4,C,s-.5,i);for(let F=0;F<16;F++){let z=ht([13072930,4160058,8003364,6983592,12098122]),re=Tt("bottle"+z,()=>new Ae({color:z,emissive:z,emissiveIntensity:.35,roughness:.15,metalness:.1})),oe=D(.28,.42),pe=new ne(ft.cyl,re);pe.scale.set(.07,oe,.07),pe.position.set(-.9+F*.62+D(-.1,.1),C+.04+oe/2,s-.5),i.add(pe)}}let j=op(512,256,"#1d211e",[{t:"LANTERN ALE",y:70,c:"#f3ead6",f:"bold 54px Georgia, serif"},{t:"savannah honey \xB7 and something else",y:140,c:"#cfc6b0",f:"italic 28px Georgia, serif"},{t:"25 CREDITS",y:205,c:"#f0c46a",f:"bold 40px Georgia, serif"}]),J=new ne(new Jt(2.6,1.3),new Ae({map:j,roughness:.9}));J.position.set(-.2,4.6,s-o/2-.02),J.rotation.y=Math.PI,i.add(J);for(let[C,F,z]of[[10,.6,67.6],[10,.6,68.9],[10,1.72,68.25]]){let re=y(.55,.55,1.1,Tt("barrel",()=>new Ae({color:6044190,roughness:.8})),C,F,z,14);re.rotation.x=Math.PI/2;for(let oe of[-.35,.35]){let pe=new ne(new Fn(.56,.03,6,20),g);pe.position.set(C,F,z+oe),i.add(pe)}}Nt(10,68.25,1.2,2.6,2.3);let le=Tt("mug",()=>new Ae({color:15260864,roughness:.6})),I=en(13666858,.6),Ie=(C,F)=>{y(.85,.85,.08,f,C,1,F,20),y(.08,.1,.96,d,C,.5,F,8),y(.45,.5,.06,d,C,.03,F,12);for(let z=0;z<3;z++){let re=z/3*Math.PI*2+D(0,1),oe=C+Math.cos(re)*1.3,pe=F+Math.sin(re)*1.3;y(.3,.3,.07,f,oe,.64,pe,12),y(.05,.07,.6,d,oe,.31,pe,6)}for(let z=0;z<zs(1,3);z++){let re=C+D(-.45,.45),oe=F+D(-.45,.45);y(.09,.08,.2,le,re,1.14,oe,10),y(.075,.075,.01,I,re,1.24,oe,10)}Nt(C,F,1.5,1.5,1.2)};Ie(-6,51.5),Ie(6.5,51.5),Ie(-6.5,58.5),Ie(6.5,59);let xe=-8.6,Ue=67.4;fe(1.5,.08,1.1,f,xe,1,Ue,i);for(let[C,F]of[[-.65,-.45],[.65,-.45],[-.65,.45],[.65,.45]])fe(.08,1,.08,d,xe+C,.5,Ue+F,i);let be=new ke;be.position.set(xe-1.15,0,Ue+.9),be.rotation.y=Math.PI*.8,i.add(be),fe(.6,.08,.6,d,0,.62,0,be),fe(.6,.9,.08,d,0,1.1,-.28,be);for(let[C,F]of[[-.25,-.25],[.25,-.25],[-.25,.25],[.25,.25]])fe(.06,.62,.06,d,C,.31,F,be);y(.07,.06,.22,new Ae({color:12573152,transparent:!1,roughness:.05,metalness:.2}),xe+.2,1.15,Ue-.1,12),y(.06,.06,.012,I,xe+.2,1.22,Ue-.1,12),fe(.3,.05,.12,x,xe-.3,1.06,Ue-.3,i),Nt(xe,Ue,1.6,1.2,1.2);let at=Bt(512,512,(C,F,z)=>{let re=C.createRadialGradient(F/2,z/2,40,F/2,z/2,F/2);re.addColorStop(0,"#b98a3e"),re.addColorStop(1,"#6e4a1c"),C.fillStyle=re,C.beginPath(),C.arc(F/2,z/2,F/2,0,7),C.fill(),C.strokeStyle="#e6c27a",C.lineWidth=10,C.beginPath(),C.arc(F/2,z/2,F/2-22,0,7),C.stroke(),C.fillStyle="#2e1d0a",C.textAlign="center",C.textBaseline="middle",C.font="bold 34px Georgia, serif",C.fillText("HERE",F/2,150),C.font="bold 50px Georgia, serif",C.fillText("ORION MASCAR",F/2,210),C.font="italic 34px Georgia, serif",C.fillText("fought",F/2,262),C.font="bold 50px Georgia, serif",C.fillText("DANIEL BROWN",F/2,316),C.font="24px Georgia, serif",C.fillText("THE SALT LANTERN",F/2,390)});at.wrapS=at.wrapT=vn;let Pe={x:.6,z:56},w=new ne(new $i(.75,40),new Ae({map:at,metalness:.75,roughness:.35,polygonOffset:!0,polygonOffsetFactor:-4}));w.rotation.set(-Math.PI/2,0,Math.PI),w.position.set(Pe.x,.05,Pe.z),w.receiveShadow=!0,i.add(w);let v=new ne(new Fn(.76,.035,6,40),x);v.rotation.x=Math.PI/2,v.position.set(Pe.x,.05,Pe.z),i.add(v);let G=new ke;G.position.set(Pe.x+1.6,.3,Pe.z-1.1),G.rotation.set(0,.6,1.45),i.add(G),fe(.6,.07,.6,f,0,.3,0,G),fe(.07,.6,.07,d,0,0,0,G),T.props.push({kind:"prop",id:"plaque",name:"Memorial Plaque",pos:new We(Pe.x,0,Pe.z)})}function Wv(){let i=Br({armor:7031342,accent:16757575,visor:16757575,weapon:"none"}),e=new We(5.5,0,67.9);i.group.position.copy(e),i.group.rotation.y=Math.PI,he.scene.add(i.group);let t={kind:"npc",id:"zuri",name:"Zuri Adeyemi",title:"Keeper of the Salt Lantern",pos:e,group:i.group,rig:i,height:2.1,radius:1,alive:!0};t.plate=Ro("npc",'<div class="n">Zuri Adeyemi</div><div class="g">&lt;Keeper of the Salt Lantern&gt;</div>'),Co(t,1,2,1,1),T.npcs.push(t)}function Nr(i=rs.greet){Pr("KEEPER OF THE SALT LANTERN","ZURI ADEYEMI","",i,T.D.aleT>0?`LANTERN ALE \xB7 ${wp(T.D.aleT)} LEFT`:"",[{label:"LANTERN ALE \xB7 25 CR",gold:!0,fn:Xv},{label:"THE PLAQUE",fn:()=>Nr(rs.fight)},{label:"THE GOVERNOR",fn:()=>Nr(rs.gov)},{label:"LEAVE",fn:Ot}])}var hc={cost:25,secs:600,bonus:.2};function Xv(){let i=T.D;if(i.credits<hc.cost){Ne.sfx("error"),Nr(rs.aleNo);return}let e=i.aleT>0;i.credits-=hc.cost,i.aleT=hc.secs,Ne.sfx("coin"),gt("loot",null,"You drink a Lantern Ale. (+20% experience for 10 minutes)"),Us(T.P.pos,16757575,2.5,.8),Nn(T.P.pos.clone().setY(1.4),16757575,16,1.5),ds(),Nr(e?rs.aleAgain:rs.aleOk)}var wp=i=>`${Math.floor(i/60)}:${String(Math.floor(i%60)).padStart(2,"0")}`;function qv(){Pr(oc.title,oc.name,"",oc.text,"",[{label:"ASK ZURI ABOUT IT",fn:()=>{let i=T.npcs.find(e=>e.id==="zuri");i&&wt(T.P.pos,i.pos)<16?Nr(rs.fight):Ot()}},{label:"CLOSE",fn:Ot}])}var Yv=[[-6,53.2],[-4.3,51.6],[6.5,53.2],[8.2,51.4],[-6.5,60.2],[-4.8,58.4],[6.5,60.7],[4.8,59],[-1.5,64.6],[1.5,64.7],[4.5,64.7],[7.5,64.6]],$v=()=>{let[i,e]=ht(Yv);return new We(i+D(-.3,.3),0,e+D(-.3,.3))},gu=new Map,Ao=(i,e,t=8)=>{let n=i+","+e+","+t;return gu.has(n)||gu.set(n,new qt(i,e,1,t)),gu.get(n)};function mc(i,e,t,n,s,r,o,a,c){let l=new ke;l.position.set(e,t,n),i.add(l);let h=new ne(Ao(r,o),a);if(h.scale.set(1,s,1),h.position.y=-s/2,l.add(h),c){let u=new ne(Ao(o*1.1,o*1.3,6),c);u.scale.set(1,.1,1),u.position.y=-s+.05,l.add(u)}return l}var Lu=()=>Tt("animalDark",()=>new Ae({color:2826780,roughness:.9})),Zv=()=>Tt("giraffe",()=>{let i=Bt(256,256,(t,n,s)=>{t.fillStyle="#eedcb0",t.fillRect(0,0,n,s);let r=6,o=n/r,a=[];for(let c=0;c<=r;c++){a[c]=[];for(let l=0;l<=r;l++)a[c][l]=[l*o+(l%r?D(-o*.28,o*.28):0),c*o+(c%r?D(-o*.28,o*.28):0)]}for(let c=0;c<r;c++)for(let l=0;l<r;l++){let h=[a[c][l],a[c][l+1],a[c+1][l+1],a[c+1][l]],u=h.reduce((d,f)=>[d[0]+f[0]/4,d[1]+f[1]/4],[0,0]);t.fillStyle=ht(["#8b5326","#94592a","#7e4a22"]),t.beginPath(),h.forEach(d=>t.lineTo(u[0]+(d[0]-u[0])*.8,u[1]+(d[1]-u[1])*.8)),t.closePath(),t.fill()}}),e=new Ae({map:i,roughness:.9});return e.userData.lodColor=11039812,e}),ap=i=>Tt(i?"zebraLegs":"zebra",()=>{let e=Bt(256,256,(n,s,r)=>{n.fillStyle="#ece6da",n.fillRect(0,0,s,r),n.fillStyle="#1c1a19";for(let o=0;o<12;o++){let a=o*(i?r:s)/12;if(n.beginPath(),i){for(let c=0;c<=s;c+=8)n.lineTo(c,a+Math.sin(c*.05+o)*3);for(let c=s;c>=0;c-=8)n.lineTo(c,a+9+Math.sin(c*.05+o)*3)}else{for(let c=0;c<=r;c+=8)n.lineTo(a+Math.sin(c*.045+o)*6,c);for(let c=r;c>=0;c-=8)n.lineTo(a+9+Math.sin(c*.045+o+.7)*6,c)}n.closePath(),n.fill()}}),t=new Ae({map:e,roughness:.85});return t.userData.lodColor=9407106,t});function gc(i,e){return i.traverse(t=>{t.isMesh&&(t.castShadow=!0,t.receiveShadow=!0)}),bp(i),e.bodyY=e.body.position.y,e.group=i,e}function Ap(){let i=new ke,e=Zv(),t=Lu(),n=new ke;n.position.y=2.45,i.add(n),fe(.8,.9,1.9,e,0,0,0,n),fe(.72,.62,.55,e,0,.16,.8,n);let s=new ke;s.position.set(0,.35,.95),s.rotation.x=.42,n.add(s),fe(.3,2.4,.42,e,0,1.15,0,s),fe(.06,2.2,.1,t,0,1.15,-.24,s);let r=new ke;r.position.set(0,2.35,.04),r.rotation.x=-.17,s.add(r),fe(.28,.3,.72,e,0,0,.25,r),fe(.2,.2,.2,t,0,-.04,.6,r);for(let c of[-1,1])fe(.06,.26,.06,t,c*.09,.27,-.02,r),fe(.16,.06,.08,e,c*.2,.12,-.05,r);let o=[[-.28,.78],[.28,.78],[-.28,-.78],[.28,-.78]].map(([c,l])=>mc(n,c,-.35,l,2.1,.08,.06,e,t)),a=new ke;return a.position.set(0,.3,-.95),a.rotation.x=-.25,n.add(a),fe(.05,1,.05,t,0,-.5,0,a),gc(i,{body:n,neck:s,head:r,legs:o,tail:a,legLen:2.1,neckRest:.42,neckGraze:.62})}function Rp(){let i=new ke,e=Tt("eleSkin",()=>new Ae({color:8748149,roughness:.95,flatShading:!0})),t=Tt("ivory",()=>new Ae({color:15656658,roughness:.5})),n=Tt("eleToe",()=>new Ae({color:6248531,roughness:.9})),s=new ke;s.position.y=2.15,i.add(s);let r=new ne(ft.ico1,e);r.scale.set(.95,.95,1.45),s.add(r);let o=new ke;o.position.set(0,.35,1.3),s.add(o);let a=new ne(ft.ico1,e);a.scale.set(.62,.7,.6),a.position.set(0,.1,.35),o.add(a);let c=[-1,1].map(x=>{let m=new ke;m.position.set(x*.45,.15,.2),m.rotation.y=x*.25,o.add(m);let p=fe(.07,1.1,.95,e,x*.04,-.05,-.4,m);return p.rotation.z=x*.1,m}),l=[],h=o,u=-.25,d=.85;for(let[x,m]of[[.7,.2],[.65,.15],[.55,.1]]){let p=new ke;p.position.set(0,u,d),h.add(p);let y=new ne(Ao(m,m*.8,8),e);y.scale.set(1,x,1),y.position.y=-x/2,p.add(y),l.push(p),h=p,u=-x,d=0}l[0].rotation.x=.35,l[1].rotation.x=.15;for(let x of[-1,1]){let m=new ne(Ao(.015,.07,6),t);m.scale.set(1,.75,1),m.position.set(x*.25,-.35,.7),m.rotation.x=2.1,o.add(m)}let f=[[-.5,.82],[.5,.82],[-.5,-.82],[.5,-.82]].map(([x,m])=>mc(s,x,-.6,m,1.55,.32,.3,e,n)),g=new ke;return g.position.set(0,.3,-1.4),g.rotation.x=-.15,s.add(g),fe(.06,1,.06,e,0,-.5,0,g),gc(i,{body:s,neck:o,head:a,legs:f,tail:g,ears:c,trunk:l,legLen:1.55,neckRest:0,neckGraze:.22})}function Kv(){let i=new ke,e=ap(!1),t=ap(!0),n=Lu(),s=new ke;s.position.y=1.32,i.add(s),fe(.5,.62,1.35,e,0,0,0,s);let r=new ke;r.position.set(0,.2,.62),r.rotation.x=.55,s.add(r),fe(.2,.78,.38,e,0,.36,0,r),fe(.06,.78,.12,n,0,.38,-.21,r);let o=new ke;o.position.set(0,.75,.04),o.rotation.x=.55,r.add(o),fe(.2,.22,.55,e,0,0,.22,o),fe(.16,.16,.14,n,0,-.02,.5,o);for(let l of[-1,1])fe(.05,.2,.06,e,l*.08,.17,-.02,o);let a=[[-.17,.5],[.17,.5],[-.17,-.5],[.17,-.5]].map(([l,h])=>mc(s,l,-.3,h,1.02,.065,.045,t,n)),c=new ke;return c.position.set(0,.2,-.68),c.rotation.x=-.3,s.add(c),fe(.04,.6,.04,n,0,-.3,0,c),gc(i,{body:s,neck:r,head:o,legs:a,tail:c,legLen:1.02,neckRest:.55,neckGraze:1.95})}function Jv(){let i=new ke,e=Lu(),t=Tt("gazelle",()=>new Ae({color:12089404,roughness:.85})),n=Tt("gazelleBelly",()=>new Ae({color:15722198,roughness:.85})),s=new ke;s.position.y=.98,i.add(s),fe(.32,.36,.85,t,0,0,0,s),fe(.28,.1,.7,n,0,-.16,0,s),fe(.22,.24,.05,n,0,0,-.43,s);let r=new ke;r.position.set(0,.12,.38),r.rotation.x=.5,s.add(r),fe(.13,.5,.2,t,0,.24,0,r);let o=new ke;o.position.set(0,.5,.02),o.rotation.x=.6,r.add(o),fe(.13,.14,.34,t,0,0,.13,o);for(let l of[-1,1]){let h=new ne(Ao(.008,.022,5),e);h.scale.set(1,.4,1),h.position.set(l*.04,.24,-.04),h.rotation.set(-.45,0,l*.18),o.add(h),fe(.04,.14,.08,t,l*.08,.08,-.05,o)}let a=[[-.1,.3],[.1,.3],[-.1,-.3],[.1,-.3]].map(([l,h])=>mc(s,l,-.12,h,.86,.035,.025,t,e)),c=new ke;return c.position.set(0,.1,-.44),c.rotation.x=-.3,s.add(c),fe(.03,.25,.03,e,0,-.12,0,c),gc(i,{body:s,neck:r,head:o,legs:a,tail:c,legLen:.86,neckRest:.5,neckGraze:1.95})}function jv(i,e,t){let n=i.rig,s=i.speed>i.spec.walk*1.6;i.phase+=e*i.speed/n.legLen*(s?1.7:2.4);let r=Math.min(1,i.speed/i.spec.walk)*(s?.75:.36),o=s?[0,.4,Math.PI,Math.PI+.4]:[0,Math.PI,Math.PI,0];n.legs.forEach((c,l)=>{c.rotation.x=Math.sin(i.phase+o[l])*r}),n.body.position.y=n.bodyY+(s?Math.abs(Math.sin(i.phase))*.07*n.legLen:0);let a=i.state==="graze"?n.neckGraze:n.neckRest+Math.sin(t*.6+i.seed)*.04;n.neck.rotation.x+=(a-n.neck.rotation.x)*Math.min(1,e*2),n.tail.rotation.z=Math.sin(t*2.4+i.seed)*.35,n.ears&&(n.ears[0].rotation.y=-.25-Math.max(0,Math.sin(t*1.3+i.seed))*.35,n.ears[1].rotation.y=.25+Math.max(0,Math.sin(t*1.3+i.seed+.5))*.35),n.trunk&&(n.trunk[0].rotation.x=.35+Math.sin(t*.9+i.seed)*.12+(i.state==="graze"?.15:0),n.trunk[2].rotation.x=.25+Math.sin(t*1.4+i.seed)*.3)}var Qv={giraffe:{build:Ap,walk:1.5,run:6.5,flee:0,herd:[3,4],spread:12,r:.9},elephant:{build:Rp,walk:1.2,run:3.5,flee:0,herd:[3,4],spread:10,r:1.4},zebra:{build:Kv,walk:1.4,run:8.5,flee:12,herd:[5,7],spread:9,r:.55},gazelle:{build:Jv,walk:1.2,run:10.5,flee:14,herd:[6,8],spread:9,r:.35}},eM={echo:{x0:-150,x1:-46,z0:-56,z1:56},ashen:{x0:46,x1:150,z0:-56,z1:56}},tM=[["zebra","echo"],["gazelle","echo"],["giraffe","echo"],["elephant","echo"],["gazelle","ashen"],["zebra","ashen"],["giraffe","ashen"]];function nM(){for(let[i,e]of tM){let t=eM[e],n=Qv[i],s={R:t,c:new We(D(t.x0+15,t.x1-15),0,D(t.z0+15,t.z1-15)),to:null,t:0};T.herds.push(s);for(let r=0,o=zs(...n.herd);r<o;r++){let a=n.build(),c={kind:"animal",sp:i,spec:n,rig:a,group:a.group,herd:s,pos:s.c.clone().add(new We(D(-n.spread,n.spread),0,D(-n.spread,n.spread))),yaw:D(0,6.28),wantYaw:void 0,speed:0,phase:D(0,6),seed:D(0,100),state:"graze",t:D(1,8),to:null,fleeT:0,alive:!0};c.group.scale.setScalar(D(.9,1.08)),c.group.position.copy(c.pos),c.group.rotation.y=c.yaw,he.scene.add(c.group),T.animals.push(c),vp(c)}}}function iM(i,e){for(let t of T.animals)t.herd===i.herd&&t.state!=="flee"&&wt(t.pos,i.pos)<18&&(t.state="flee",t.fleeT=D(2.5,4),t.from=e,t.jink=D(-.5,.5))}function sM(i){let e=T.P,t=T.time;for(let n of T.herds){n.t-=i,(n.t<=0||!n.to)&&(n.t=D(25,60),n.to=new We(D(n.R.x0+12,n.R.x1-12),0,D(n.R.z0+12,n.R.z1-12)));let s=n.to.x-n.c.x,r=n.to.z-n.c.z,o=Math.hypot(s,r);o>.5&&(n.c.x+=s/o*.5*i,n.c.z+=r/o*.5*i)}for(let n of T.animals){let s=n.spec,r=wt(n.pos,e.pos);s.flee&&!e.dead&&r<s.flee&&n.state!=="flee"&&iM(n,e.pos);let o=0;n.state==="flee"?(n.fleeT-=i,o=s.run,n.fleeT<=0&&r>s.flee*1.6?(n.state="graze",n.t=D(2,5)):n.wantYaw=Math.atan2(n.pos.x-n.from.x,n.pos.z-n.from.z)+n.jink):n.state==="walk"?(o=s.walk,!n.to||wt(n.pos,n.to)<1?(n.state="graze",n.t=D(4,12)):n.wantYaw=Math.atan2(n.to.x-n.pos.x,n.to.z-n.pos.z)):(n.t-=i)<=0&&(n.state="walk",n.to=n.herd.c.clone().add(new We(D(-s.spread,s.spread),0,D(-s.spread,s.spread))));let a=n.herd.R;if((n.pos.x<a.x0||n.pos.x>a.x1||n.pos.z<a.z0||n.pos.z>a.z1)&&(n.wantYaw=Math.atan2(n.herd.c.x-n.pos.x,n.herd.c.z-n.pos.z)),n.speed+=(o-n.speed)*Math.min(1,i*(n.state==="flee"?4:2)),n.wantYaw!==void 0){let c=n.wantYaw-n.yaw;for(;c>Math.PI;)c-=Math.PI*2;for(;c<-Math.PI;)c+=Math.PI*2;n.yaw+=c*Math.min(1,i*(n.state==="flee"?5:1.6))}n.pos.x+=Math.sin(n.yaw)*n.speed*i,n.pos.z+=Math.cos(n.yaw)*n.speed*i,_c(n.pos,s.r),n.group.position.copy(n.pos),n.group.rotation.y=n.yaw,n.lodNear!==!1&&jv(n,i,t)}}function Cp(i){let e=[],t=[],n=(a,c,l,h)=>{e.push(...a,...c,...l),t.push(h,h,h)};n([0,.06,.45],[-.09,0,0],[.09,0,0],0),n([0,.06,.45],[.09,0,0],[0,.05,-.5],0),n([0,.06,.45],[0,.05,-.5],[-.09,0,0],0);for(let a of[-1,1])n([a*.08,.02,.2],[a*1.3,0,-.15],[a*.08,.02,-.25],1),n([a*1.3,0,-.15],[a*.75,.01,-.4],[a*.08,.02,-.25],1);let s=new dt;s.setAttribute("position",new it(e,3)),s.setAttribute("wing",new it(t,1)),s.computeVertexNormals();let r=new uo({color:2761245,side:$t});r.onBeforeCompile=a=>{a.uniforms.uTime=pc,a.vertexShader=`uniform float uTime;
attribute float wing;
`+a.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      #ifdef USE_INSTANCING
        float ph = instanceMatrix[3].x * 0.37 + instanceMatrix[3].z * 0.21;
        float rate = length(instanceMatrix[0].xyz) < 1.0 ? 11.0 : 4.5;   // small birds flap fast, vultures slow
      #else
        float ph = 0.0; float rate = 5.0;
      #endif
      float glide = 0.2 + 0.8 * step(0.2, sin(uTime * 0.5 + ph));      // soar, then a burst of beats
      transformed.y += wing * abs(position.x) * sin(uTime * rate + ph) * 0.55 * glide;`)};let o=new _i(s,r,i.length);return o.frustumCulled=!1,o.userData.birds=i,o}var cp=new xn,lp=new En(0,0,0,"YXZ"),rM=new qe,oM=new We,hp=new We;function Ip(i,e){i.userData.birds.forEach((t,n)=>{let s=t.ph+e*t.speed/t.r*t.dir;hp.set(t.cx+Math.cos(s)*t.r,t.h+Math.sin(e*.3+t.ph)*1.5,t.cz+Math.sin(s)*t.r),lp.set(0,Math.atan2(-Math.sin(s)*t.dir,Math.cos(s)*t.dir),-.35*t.dir),cp.setFromEuler(lp),i.setMatrixAt(n,rM.compose(hp,cp,oM.setScalar(t.s)))}),i.instanceMatrix.needsUpdate=!0}function uc(i,e,t,n,s,r,o,a,c){return Array.from({length:i},()=>({cx:e+D(-6,6),cz:t+D(-6,6),r:D(n,s),h:D(r,o),speed:a*D(.85,1.15),s:c*D(.85,1.15),ph:D(0,6.28),dir:Math.random()<.5?1:-1}))}function Ro(i,e){let t=document.createElement("div");return t.className="plate "+i,t.innerHTML=e,t.style.display="none",Q("plates").appendChild(t),t}function Co(i,e,t,n,s){let r=new ne(ft.box,new vt({visible:!1}));r.scale.set(e,t,n),r.position.y=s,r.userData.ent=i,i.group.add(r),i.hitbox=r}function aM(){let i=Cu(2.25);i.position.set(0,1.2,-12),he.scene.add(i);let e={kind:"npc",id:"mascar",name:"Croxian Mascar",title:"Governor of Ad-Nostra",pos:new We(0,1.2,-12),group:i,height:2.6,radius:1,alive:!0};e.plate=Ro("npc",'<div class="qm"></div><div class="n">Croxian Mascar</div><div class="g">&lt;Governor of Ad-Nostra&gt;</div>'),Co(e,1.2/i.scale.x,2.4,1.2,1.2),T.npcs.push(e);let t=Br({armor:4865836,accent:15254634,visor:15254634,weapon:"none"});t.group.position.set(13,0,-3),t.group.rotation.y=-Math.PI/2.4,he.scene.add(t.group);let n=fe(1,1.1,3.4,Ci(2765115),11.6,.55,-3,he.scene);Nt(11.6,-3,1,3.4),fe(.05,.05,3.42,en(15254634,1.5),11.08,1.1,-3,he.scene);for(let r=0;r<4;r++)fe(.9,.9,.9,Ci(3814182),14.5+D(-.5,.5),.45+(r>2?.9:0),-4.5+r*.9,he.scene).rotation.y=D(-.3,.3);let s={kind:"npc",id:"ilse",name:"Ilse Varn",title:"Concord Quartermaster",pos:new We(13,0,-3),group:t.group,rig:t,height:2.1,radius:1,alive:!0};s.plate=Ro("npc",'<div class="n">Ilse Varn</div><div class="g">&lt;Concord Quartermaster&gt;</div>'),Co(s,1,2,1,1),T.npcs.push(s)}function Cr(i,e,t,n,s=!1){let r={kind:"enemy",type:i,level:e,spawn:new We(t,0,n),pos:new We(t,0,n),alive:!0,state:"idle",target:null,atkT:D(.5,1.5),wanderT:D(1,6),wanderTo:null,dots:[],tagged:!1,yaw:D(0,6.28),anim:D(0,10),temp:s,move:0},o;i==="hollowed"?(Object.assign(r,{name:e>=4?"Beacon-Bound Hollowed":"Hollowed",maxHp:70+30*e,dmg:5+2.6*e,atkCd:1.7,atkR:2.1,speed:3.4+.25*e,aggroR:13,xp:36+16*e,height:2.15,radius:.55,respawn:16}),o=Br({armor:1774871,accent:16722762,visor:16722762,weapon:"none",hollow:!0}),o.group.scale.setScalar(1+e*.03)):i==="drone"?(Object.assign(r,{name:"Echo Drone",maxHp:55+22*e,dmg:5+2.3*e,atkCd:2.2,atkR:13,speed:4.6,aggroR:16,xp:42+17*e,height:3.5,radius:.85,respawn:18}),o=Rv(e)):(Object.assign(r,{name:"Remnant of the Catharsis",isBoss:!0,maxHp:2600,dmg:24,atkCd:2.3,atkR:4.8,speed:3.3,aggroR:20,xp:950,height:8.4,radius:2.2,respawn:120,slamT:7,phase:0}),o=Cv()),r.rig=o,r.group=o.group,r.hp=r.maxHp,r.group.position.copy(r.pos),he.scene.add(r.group);let a=r.group.scale.x;return Co(r,r.radius*2/a,r.height/a,r.radius*2/a,r.height/2/a),r.plate=Ro("enemy",`<div class="n">${Vt(r.name)} <span style="color:#aaa">${r.level}</span></div><div class="hb"><i></i></div>`),r.plateBar=r.plate.querySelector(".hb i"),T.enemies.push(r),r}function cM(){for(let i=0;i<16;i++){let e=D(44,150),t=D(-56,56);Cr("hollowed",e<75?1:e<115?2:3,e,t)}for(let i=0;i<14;i++){let e=D(-150,-44),t=D(-56,56);Cr("drone",e>-75?2:e>-115?3:4,e,t)}for(let i=0;i<9;i++){let e=D(0,Math.PI*2),t=D(22,56);Cr("hollowed",zs(4,5),mt.x+Math.cos(e)*t,mt.z+Math.sin(e)*t)}for(let i=0;i<4;i++){let e=D(0,Math.PI*2),t=D(20,50);Cr("drone",5,mt.x+Math.cos(e)*t,mt.z+Math.sin(e)*t)}T.boss=Cr("boss",7,mt.x,mt.z+2)}function lM(){let i=new Ae({color:3802640,emissive:16722762,emissiveIntensity:3,flatShading:!0}),e=new vt({color:16722762,transparent:!0,opacity:.25,blending:dn,depthWrite:!1});for(let t=0;t<10;t++){let n=t/10*Math.PI*2+D(-.2,.2),s=D(24,54),r=new ke;r.position.set(mt.x+Math.cos(n)*s,0,mt.z+Math.sin(n)*s);let o=new ne(ft.oct,i);o.scale.set(.3,.6,.3),o.position.y=.9,r.add(o);let a=new ne(new qt(.08,.08,14,6,1,!0),e);a.position.y=7,r.add(a),he.scene.add(r),T.shards.push({kind:"shard",pos:r.position,group:r,crystal:o,active:!0,respawnT:0})}}var xu={ashen:[new We(36,0,0)],echo:[new We(-36,0,0)],crater:[new We(0,0,-38),new We(0,0,-106)],plaza:[],cantina:[new We(0,0,40),new We(0,0,49)]};function os(i){if(i==="cantina")return $v();if(i==="ashen")return new We(D(46,145),0,D(-50,50));if(i==="echo")return new We(D(-145,-46),0,D(-50,50));if(i==="crater"){let s=D(0,Math.PI*2),r=D(12,50);return new We(mt.x+Math.cos(s)*r,0,mt.z+Math.sin(s)*r)}let e=D(0,Math.PI*2),t=D(6,26),n=new We(Math.cos(e)*t,0,Math.sin(e)*t);return n.z<-6&&Math.abs(n.x)<7&&(n.z=4),n}function hM(){let i=Zf.slice().sort(()=>Math.random()-.5).slice(0,14);for(let e of i){let t=ht(Object.keys(Ai)),n=Ai[t],s=Br({armor:ht([2830908,3817290,2764586,3878710,2501688]),accent:n.hex,visor:new Me(ht(sc)).getHex(),weapon:n.weapon}),r={kind:"bot",name:e,cls:t,level:zs(3,18),guild:ht(Kf),rig:s,group:s.group,pos:os("plaza"),alive:!0,hp:260,maxHp:260,state:"idle",path:[],idleT:D(2,20),actT:0,act:"plaza",target:null,atkT:0,yaw:0,move:0,atk:0,danceT:0,height:2.1,radius:.5};r.group.position.copy(r.pos),he.scene.add(r.group),r.plate=Ro("bot",`<div class="n">${Vt(e)}</div>${r.guild?`<div class="g">&lt;${Vt(r.guild)}&gt;</div>`:""}`),Co(r,.9,2,.9,1),Math.random()<.6&&(r.act=ht(["ashen","ashen","echo","echo","crater"]),r.pos.copy(os(r.act)),r.state="hunt",r.actT=D(40,160),r.group.position.copy(r.pos)),T.bots.push(r)}}var Mu=new We(0,0,8);function uM(i,e,t){return{v:1,name:i,cls:e,visor:t,level:1,xp:0,credits:30,medkits:3,wpn:0,arm:0,q:{i:0,st:"available",p:0},aleT:0,kills:0,deaths:0,title:"Ascendant",played:0,completed:0,pos:null,created:Date.now()}}var bu=i=>Math.round(140*Math.pow(i,1.55)),Pi=()=>Ai[T.D.cls],Kn=()=>Math.round(Pi().hp*(1+.1*(T.D.level-1))+18*T.D.arm),ks=()=>Pi().en,xc=()=>(1+.12*(T.D.level-1))*(1+.1*T.D.wpn);function dM(){let i=T.D,e=Pi();T.P&&T.P.group&&(he.scene.remove(T.P.group),T.P.plate?.remove());let t=Br({armor:3094338,accent:e.hex,visor:new Me(i.visor).getHex(),weapon:e.weapon}),n={kind:"player",rig:t,group:t.group,pos:Mu.clone(),vy:0,yaw:Math.PI,alive:!0,dead:!1,hp:Kn(),en:ks(),shield:0,shieldT:0,target:null,gcd:0,cds:{},autoOn:!1,autoT:0,combatT:0,critNext:!1,atk:0,move:0,danceT:0,medT:0,height:2.1,radius:.45};i.pos&&Zn(i.pos[0],i.pos[1])!=="ward"&&n.pos.set(i.pos[0],0,i.pos[1]),n.group.position.copy(n.pos),he.scene.add(n.group),T.P=n,T.cam={yaw:0,pitch:.32,dist:9.5},n.pos.distanceTo(Mu)>1&&(T.cam.yaw=Math.atan2(n.pos.x,n.pos.z)),LM()}function Dr(i,e,t,n=2.2,s=!1){let r=document.createElement("div");r.className="fl"+(s?" crit":""),r.textContent=e,r.style.color=t,Q("floaters").appendChild(r),T.floaters.push({el:r,p:new We(i.x+D(-.4,.4),(i.y||0)+n,i.z+D(-.4,.4)),t:0,life:s?1.4:1.1})}function $n(i){let e=Q("center-msg");e.textContent=i,e.style.opacity=1,clearTimeout($n.t),$n.t=setTimeout(()=>e.style.opacity=0,1300),Ne.sfx("error")}function Ur(i,e,t="",n=""){let s=Q("banner");s.className=n,s.querySelector(".b1").textContent=i,s.querySelector(".b2").textContent=e,s.querySelector(".b3").textContent=t,s.style.opacity=1,clearTimeout(Ur.t),Ur.t=setTimeout(()=>s.style.opacity=0,2800)}function Eu(){let i=Q("vignette");i.style.boxShadow="inset 0 0 160px rgba(255,20,50,.55)",clearTimeout(Eu.t),Eu.t=setTimeout(()=>i.style.boxShadow="inset 0 0 160px rgba(255,20,50,0)",160)}function Ii(i,e,t,n={}){if(!i.alive)return;e=Math.max(1,Math.round(e));let s=T.P;if(i===s){if(s.dead)return;if(s.shield>0){let r=Math.min(s.shield,e);s.shield-=r,e-=r,Dr(s.pos,"ABSORB "+r,"#9fdcff",2.3)}if(s.combatT=6,e<=0)return;s.hp-=e,Dr(s.pos,"-"+e,"#ff5a6e",2.3),Ne.sfx("hurt"),Eu(),s.hp<=0&&fM();return}i.hp-=e,i.kind==="enemy"?(t===s&&(i.tagged=!0,Dr(i.pos,String(e),n.crit?"#ffd166":"#ffffff",i.height*.75+(i.type==="drone"?.6:0),n.crit),Ne.sfx("hit")),(i.state==="idle"||!i.target||!i.target.alive)&&(i.isBoss&&t===s&&i.state==="idle"&&Np(),i.target=t,i.state="chase"),t===s&&i.target&&i.target.kind==="bot"&&Math.random()<.15&&(i.target=s),i.hp<=0&&Pp(i,t)):i.kind==="bot"&&i.hp<=0&&mM(i)}function Pp(i,e){if(i.alive=!1,i.hp=0,i.state="dead",i.deadT=0,i.dots=[],i.target=null,Nn(i.pos.clone().setY(i.height*.5),i.isBoss?16722762:16734830,i.isBoss?120:30,i.isBoss?9:4),Ne.sfx(i.isBoss?"boom":"die"),T.P.target===i&&setTimeout(()=>{T.P.target===i&&hs(null)},600),i.tagged){let t=T.D,n=i.xp,s=t.level-i.level;s>=4?n=Math.round(n*.2):s>=2&&(n=Math.round(n*.6)),Lp(n);let r=i.isBoss?300:zs(2+i.level,6+i.level*3);t.credits+=r,gt("loot",null,`You loot ${r} credits.`),Ne.sfx("coin"),t.kills++,Su(i.isBoss?"boss":i.type,i),Zn(i.pos.x,i.pos.z)==="crater"&&!i.isBoss&&t.q.i===2&&t.q.st==="active"&&Math.random()<.4&&(gt("loot",null,"You loot: [Beacon Shard]"),Su("shard")),Math.random()<.06&&!i.isBoss&&(t.medkits++,gt("loot",null,"You loot: [Concord Medkit]")),i.isBoss&&(gt("world",null,`${t.name} has destroyed the Remnant of the Catharsis!`,"sys"),setTimeout(()=>Bs(ht(T.bots),ht(["GG "+t.name+"!!","legend","WOW","grats "+t.name,"o7 hero"])),1500))}i.isBoss&&(Q("bossbar").classList.add("hidden"),Ne.playMusic("world"))}function Lp(i){let e=T.D,t=T.P;if(!(e.level>=30))for(e.aleT>0&&(i=Math.round(i*(1+hc.bonus))),e.xp+=i,Dr(t.pos,`+${i} XP`,"#c9a3ff",2.8);e.xp>=bu(e.level)&&e.level<30;)e.xp-=bu(e.level),e.level++,t.hp=Kn(),t.en=ks(),Ur("LEVEL UP","LEVEL "+e.level,"YOUR POWER GROWS","lv"),Ne.sfx("levelup"),Us(t.pos,15254634,6,1.2),Nn(t.pos.clone().setY(1),15254634,40,4),gt("sys",null,`Congratulations, you have reached level ${e.level}!`),Math.random()<.6&&setTimeout(()=>Bs(ht(T.bots),ht(["grats!","gz","grats "+e.name,"ding!"])),1200),ds()}function fM(){let i=T.P;i.hp=0,i.dead=!0,i.alive=!1,i.autoOn=!1,T.D.deaths++,Ne.sfx("death"),i.group.rotation.x=-Math.PI/2,i.group.position.y=.3;for(let e of T.enemies)e.target===i&&(e.target=null,e.state="return");Ot(),Q("death").classList.remove("hidden")}function pM(){let i=T.P;i.dead=!1,i.alive=!0,i.hp=Kn(),i.en=ks(),i.pos.copy(Mu),i.group.rotation.x=0,i.shield=0,hs(null),Q("death").classList.add("hidden"),Nn(i.pos.clone().setY(1),4122367,40,3),Ne.sfx("heal"),T.cam.yaw=0}function mM(i){i.alive=!1,i.hp=0,i.state="dead",i.deadT=0,i.target=null,i.group.rotation.x=-Math.PI/2,i.group.position.y=.3;for(let e of T.enemies)e.target===i&&(e.target=null,e.state="return");Math.random()<.3&&setTimeout(()=>gt("zone",i.name,ht(["ugh","rip","that thing hits HARD","brb corpse run","nooo"])),800)}function hs(i){let e=T.P;e.target=i,i||(e.autoOn=!1),Fp(!0)}function gM(i,e=T.P.pos,t=null){let n=null,s=i;for(let r of T.enemies){if(!r.alive||r===t)continue;let o=wt(e,r.pos)-r.radius;o<s&&(s=o,n=r)}return n}function Dp(){let i=T.P,e=T.enemies.filter(n=>n.alive&&wt(i.pos,n.pos)<40).sort((n,s)=>wt(i.pos,n.pos)-wt(i.pos,s.pos));if(!e.length){$n("No enemies nearby");return}let t=e.indexOf(i.target);hs(e[(t+1)%e.length]),i.autoOn=!0}function xM(){let i=T.P;return i.critNext?(i.critNext=!1,!0):Math.random()<Pi().crit}function Yn(i,e,t={}){let n=t.noCrit?!1:xM();Ii(i,e*xc()*(n?1.8:1)*D(.92,1.08),T.P,{crit:n})}function Io(i,e){i.yaw=Math.atan2(e.x-i.pos.x,e.z-i.pos.z)}function Ir(i){let e=T.P;if(!e||e.dead||T.mode!=="world")return;if(i===4)return _M();let t=Pi(),n=t.abil[i];if((e.cds[n.id]||0)>0||e.gcd>0){(e.cds[n.id]||0)>0&&$n("Ability not ready");return}if(e.en<n.cost){$n("Not enough energy");return}let s=e.target;if(n.target){if(!s||!s.alive||s.kind!=="enemy"){if(s=gM((n.range||t.range)+2),!s){$n("No target");return}hs(s)}if(wt(e.pos,s.pos)-s.radius>(n.range||t.range)){$n("Out of range");return}Io(e,s.pos)}e.en-=n.cost,e.cds[n.id]=n.cd,e.gcd=t.gcd,e.combatT=6,s&&(e.autoOn=!0),e.atk=.3;let r=Q("hotbar").children[i];r.classList.remove("flash"),r.offsetWidth,r.classList.add("flash");let o=e.pos.clone().setY(1.4);switch(n.id){case"riven":case"cut":Yn(s,n.dmg),bo(s,t.hex),Ne.sfx("slash");break;case"judge":Yn(s,n.dmg),bo(s,15254634,1.8),Us(s.pos,15254634,3,.4),Ne.sfx("heavy");break;case"slam":{Us(e.pos,t.hex,n.radius,.45),Ne.sfx("heavy");let a=0;for(let c of T.enemies)c.alive&&wt(e.pos,c.pos)-c.radius<n.radius&&(Yn(c,n.dmg),a++);break}case"guard":e.shield=Math.round(n.shield*(1+.1*(T.D.level-1))),e.shieldT=n.dur,Ne.sfx("shield");break;case"bolt":Po(o,s,t.hex,.18,34,()=>Yn(s,n.dmg)),Ne.sfx("zap");break;case"lance":Po(o,s,16777215,.35,42,()=>{Yn(s,n.dmg),Us(s.pos,t.hex,2.5,.3)}),Ne.sfx("lance");break;case"chain":{Yn(s,n.dmg),up(o,s.pos.clone().setY(s.height*.6),t.hex);let a=s,c=[s];for(let l=0;l<3;l++){let h=null,u=n.jump;for(let d of T.enemies){if(!d.alive||c.includes(d))continue;let f=wt(a.pos,d.pos);f<u&&(u=f,h=d)}if(!h)break;c.push(h),up(a.pos.clone().setY(a.height*.6),h.pos.clone().setY(h.height*.6),t.hex),Yn(h,n.dmg*.75),a=h}Ne.sfx("zap");break}case"restore":{let a=Math.round(Kn()*n.heal);e.hp=Math.min(Kn(),e.hp+a),Dr(e.pos,"+"+a,"#4dff9a",2.4),Nn(e.pos.clone().setY(1),5111706,30,2),Us(e.pos,5111706,3,.6),Ne.sfx("heal");break}case"bleed":Yn(s,n.dmg),s.dots.push({dps:n.dot*xc(),t:n.dur,tick:1,src:e}),bo(s,16722762),Ne.sfx("slash");break;case"blink":{Nn(e.pos.clone().setY(1),t.hex,20,2);let a=new We(e.pos.x-s.pos.x,0,e.pos.z-s.pos.z).normalize(),c=s.pos.clone().addScaledVector(a,-(s.radius+1));c.y=0,e.pos.copy(c),_c(e.pos,e.radius),Io(e,s.pos),e.critNext=!0,Nn(e.pos.clone().setY(1),t.hex,20,2),Ne.sfx("blink");break}case"flurry":for(let a=0;a<n.hits;a++)T.timers.push({t:a*.12,fn:()=>{s.alive&&(Yn(s,n.dmg),bo(s,t.hex,.8),Ne.sfx("slash"),e.atk=.2)}});break}}function _M(){let i=T.P,e=T.D;if(i.medT>0){$n("Medkit not ready");return}if(e.medkits<=0){$n("No medkits \u2014 visit Ilse Varn");return}e.medkits--,i.medT=15;let t=Math.round(Kn()*.5);i.hp=Math.min(Kn(),i.hp+t),Dr(i.pos,"+"+t,"#4dff9a",2.4),Nn(i.pos.clone().setY(1),5111706,24,2),Ne.sfx("heal"),Uu()}var fc={ring:new Ki(.85,1,64),half:new Ki(.7,1.3,24,1,0,Math.PI),disc:new $i(1,48)};function Uo(i,e,t){he.scene.add(i),T.fx.push({obj:i,t:0,life:e,update:t})}function Us(i,e,t,n){let s=new ne(fc.ring,new vt({color:e,transparent:!0,opacity:.9,blending:dn,depthWrite:!1,side:$t}));s.rotation.x=-Math.PI/2,s.position.set(i.x,.12,i.z),Uo(s,n,(r,o)=>{let a=.3+o*t;s.scale.set(a,a,a),s.material.opacity=.9*(1-o)})}function bo(i,e,t=1.2){let n=new ne(fc.half,new vt({color:e,transparent:!0,opacity:1,blending:dn,depthWrite:!1,side:$t}));n.position.set(i.pos.x,(i.pos.y||0)+i.height*.55,i.pos.z),n.lookAt(he.cam.position),n.rotateZ(D(-1,1)),Uo(n,.22,(s,r)=>{n.scale.setScalar(t*(.6+r*.6)),n.material.opacity=1-r})}function Nn(i,e,t,n){let s=new dt,r=new Float32Array(t*3),o=[];for(let c=0;c<t;c++)r.set([i.x,i.y,i.z],c*3),o.push(new We(D(-1,1),D(-.2,1.2),D(-1,1)).normalize().multiplyScalar(n*D(.4,1)));s.setAttribute("position",new Et(r,3));let a=new Yi(s,new vi({map:Ru(),color:e,size:.26,transparent:!0,blending:dn,depthWrite:!1}));Uo(a,.9,(c,l,h)=>{let u=s.attributes.position;for(let d=0;d<t;d++)o[d].y-=6*h,u.setXYZ(d,u.getX(d)+o[d].x*h,Math.max(.05,u.getY(d)+o[d].y*h),u.getZ(d)+o[d].z*h);u.needsUpdate=!0,a.material.opacity=1-l})}function up(i,e,t){let n=[i.clone()],s=7;for(let o=1;o<s;o++){let a=i.clone().lerp(e,o/s);a.x+=D(-.4,.4),a.y+=D(-.4,.4),a.z+=D(-.4,.4),n.push(a)}n.push(e.clone());let r=new yi(new dt().setFromPoints(n),new qi({color:t,transparent:!0,blending:dn}));Uo(r,.25,(o,a)=>{r.material.opacity=1-a})}function Po(i,e,t,n,s,r,o=T.P){let a=new ne(ft.sph,new vt({color:t,transparent:!0,blending:dn}));a.scale.setScalar(n),a.position.copy(i),he.scene.add(a);let c=new ne(ft.sph,new vt({color:t,transparent:!0,opacity:.3,blending:dn,depthWrite:!1}));c.scale.setScalar(2.2),a.add(c),T.proj.push({m:a,target:e,speed:s,onHit:r,life:4})}function yM(i,e,t,n){let s=new ne(fc.disc,new vt({color:16722762,transparent:!0,opacity:.2,depthWrite:!1,blending:dn}));s.rotation.x=-Math.PI/2,s.position.set(i.x,.08,i.z),s.scale.setScalar(e);let r=new ne(fc.ring,new vt({color:16722762,transparent:!0,opacity:.9,depthWrite:!1}));s.add(r),Uo(s,t,(o,a)=>{s.material.opacity=.15+.35*a,r.scale.setScalar(a),a>=.999&&!o.done&&(o.done=!0,n())})}function _c(i,e){for(let n of T.colliders){if(i.x+e<n.minX||i.x-e>n.maxX||i.z+e<n.minZ||i.z-e>n.maxZ)continue;let s=i.x+e-n.minX,r=n.maxX-(i.x-e),o=i.z+e-n.minZ,a=n.maxZ-(i.z-e),c=Math.min(s,r,o,a);c===s?i.x-=s:c===r?i.x+=r:c===o?i.z-=o:i.z+=a}let t=Math.hypot(i.x,i.z);t>238&&(i.x*=238/t,i.z*=238/t)}function Os(i,e,t,n,s=.2){let r=e.x-i.pos.x,o=e.z-i.pos.z,a=Math.hypot(r,o);if(a<=s)return i.move=Math.max(0,i.move-n*5),!0;let c=Math.min(a-s,t*n);return i.pos.x+=r/a*c,i.pos.z+=o/a*c,i.yaw=Math.atan2(r,o),i.move=Math.min(1,i.move+n*5),!1}function Lo(i,e,t,n=10){let s=e-i.rotation.y;for(;s>Math.PI;)s-=Math.PI*2;for(;s<-Math.PI;)s+=Math.PI*2;i.rotation.y+=s*Math.min(1,t*n)}var wn={};function vM(i){let e=T.P,t=T.D,n=Pi();t.played+=i,e.gcd=Math.max(0,e.gcd-i),e.medT=Math.max(0,e.medT-i);for(let g in e.cds)e.cds[g]=Math.max(0,e.cds[g]-i);if(e.combatT=Math.max(0,e.combatT-i),e.shieldT>0&&(e.shieldT-=i,e.shieldT<=0&&(e.shield=0)),e.dead){e.group.position.copy(e.pos).setY(.3);return}e.en=Math.min(ks(),e.en+9*i),t.aleT>0&&(t.aleT=Math.max(0,t.aleT-i)),e.combatT<=0&&(e.hp=Math.min(Kn(),e.hp+Kn()*.035*i));let s=document.activeElement===Q("chat-input"),r=0,o=0;!s&&!T.ui&&((wn.KeyW||wn.ArrowUp)&&(o+=1),(wn.KeyS||wn.ArrowDown)&&(o-=1),(wn.KeyA||wn.ArrowLeft)&&(r-=1),(wn.KeyD||wn.ArrowRight)&&(r+=1),Lt.both&&(o=1),St.id!==null&&(r+=St.x,o-=St.y));let a=T.cam.yaw,c=new We(-Math.sin(a),0,-Math.cos(a)),l=new We(Math.cos(a),0,-Math.sin(a)),h=c.multiplyScalar(o).add(l.multiplyScalar(r));if(h.lengthSq()>0){h.normalize();let g=wn.ShiftLeft||wn.ShiftRight||St.mag>.92?10.5:7;e.pos.addScaledVector(h,g*i),e.yaw=Math.atan2(h.x,h.z),e.move=Math.min(1,e.move+i*6),e.danceT=0}else e.move=Math.max(0,e.move-i*6),e.target&&e.target.alive&&e.autoOn&&Io(e,e.target.pos);e.vy-=22*i,e.pos.y+=e.vy*i,e.pos.y<=0&&(e.pos.y=0,e.vy=0),_c(e.pos,e.radius);let d=e.target;e.autoOn&&d&&d.alive&&d.kind==="enemy"&&(e.autoT-=i,e.autoT<=0&&wt(e.pos,d.pos)-d.radius<=n.range&&(e.autoT=2,e.combatT=6,n.range>5?(Po(e.pos.clone().setY(1.4),d,n.hex,.1,30,()=>Yn(d,7)),Ne.sfx("drone")):(Yn(d,7),e.atk=.3,Ne.sfx("slash")))),e.atk=Math.max(0,e.atk-i),e.danceT=Math.max(0,e.danceT-i),e.group.position.copy(e.pos),Lo(e.group,e.yaw+(e.danceT>0?T.time*6:0),i,e.danceT>0?50:12),To(e.rig,e.move,T.time,e.atk,e.danceT),e.rig.group.userData.orb&&(e.rig.group.userData.orb.rotation.y+=i*3),he.shieldMesh.visible=e.shield>0,he.shieldMesh.position.copy(e.pos).setY(1),he.shieldMesh.material.opacity=.12+Math.sin(T.time*6)*.05;let f=Zn(e.pos.x,e.pos.z);if(f!==T.zone){let g=T.zone;T.zone=f;let x=wo[f];Q("zone-name").textContent=x.name,Q("zone-sub").textContent=x.sub,!(g==="causeway"&&f==="ward")&&!(g==="ward"&&f==="causeway")&&Ur(x.safe?"SANCTUARY":"ENTERING",x.name,x.sub),f==="cantina"?Ne.playMusic("cantina"):g==="cantina"&&Ne.playMusic("world")}}function MM(i){let e=T.P;for(let t of T.enemies){if(t.anim+=i,!t.alive){if(t.deadT+=i,t.deadT<2?(t.group.position.y=-t.deadT*(t.type==="drone"?1.3:.8),t.group.rotation.z=Math.min(1.4,t.deadT*2)*(t.type==="drone"?1:.6)):t.group.visible=!1,t.temp&&t.deadT>2.2){he.scene.remove(t.group),t.plate.remove(),t.removed=!0;continue}!t.temp&&t.deadT>t.respawn&&(t.alive=!0,t.hp=t.maxHp,t.pos.copy(t.spawn),t.state="idle",t.tagged=!1,t.phase=0,t.group.visible=!0,t.group.rotation.z=0,t.group.position.y=0,Nn(t.pos.clone().setY(1),16722762,20,2));continue}for(let r of t.dots)r.t-=i,r.tick-=i,r.tick<=0&&(r.tick=1,Ii(t,r.dps,r.src));if(t.dots=t.dots.filter(r=>r.t>0),!t.alive)continue;let n=t.isBoss?40:44,s=wo[Zn(e.pos.x,e.pos.z)].safe;if(t.state==="idle")t.wanderT-=i,t.wanderT<=0&&(t.wanderT=D(3,8),t.wanderTo=t.spawn.clone().add(new We(D(-6,6),0,D(-6,6)))),t.wanderTo?Os(t,t.wanderTo,t.speed*.35,i)&&(t.wanderTo=null):t.move=Math.max(0,t.move-i*4),e.alive&&!s&&wt(e.pos,t.pos)<t.aggroR&&(t.target=e,t.state="chase",t.isBoss&&Np());else if(t.state==="chase"){let r=t.target;if(!r||!r.alive||r===e&&s||wt(t.pos,t.spawn)>n)t.state="return",t.target=null;else{let o=t.atkR+(r.radius||.5),a=wt(t.pos,r.pos)<=o;a?(t.move=Math.max(0,t.move-i*5),Io(t,r.pos)):Os(t,r.pos,t.speed,i,o*.85),t.atkT-=i,a&&t.atkT<=0&&(t.atkT=t.atkCd,t.atk=.3,t.type==="drone"?(Po(t.pos.clone().setY(2.6),r,16722762,.16,18,()=>Ii(r,t.dmg*D(.9,1.1),t),t),r===e&&Ne.sfx("drone")):Ii(r,t.dmg*D(.9,1.1),t)),t.isBoss&&bM(t,i)}}else t.state==="return"&&(t.hp=Math.min(t.maxHp,t.hp+t.maxHp*.25*i),t.dots=[],t.tagged=!1,Os(t,t.spawn,t.speed*1.6,i,.5)&&(t.state="idle",t.hp=t.maxHp,t.isBoss&&(t.phase=0,Q("bossbar").classList.add("hidden"),Ne.playMusic("world"))));for(let r of T.enemies){if(r===t||!r.alive)continue;let o=t.pos.x-r.pos.x,a=t.pos.z-r.pos.z,c=Math.hypot(o,a),l=t.radius+r.radius;c<l&&c>.001&&(t.pos.x+=o/c*(l-c)*.5,t.pos.z+=a/c*(l-c)*.5)}if(t.group.position.set(t.pos.x,0,t.pos.z),Lo(t.group,t.yaw,i,8),t.atk=Math.max(0,(t.atk||0)-i),t.type==="hollowed")To(t.rig,t.move*.8,t.anim*.8,t.atk),t.rig.head.rotation.z=Math.sin(t.anim*1.3)*.15;else if(t.type==="drone")t.rig.body.position.y=2.6+Math.sin(t.anim*2)*.25,t.rig.ring.rotation.z+=i*2,t.rig.shell.rotation.y-=i,t.rig.body.rotation.x=t.move*.25;else{t.rig.orbit.rotation.y+=i*.8,t.rig.body.position.y=Math.sin(t.anim)*.2;let r=t.atk>0?Math.sin((1-t.atk/.3)*Math.PI):0;t.rig.arms[1].rotation.x=-1.6*r,t.rig.arms[0].rotation.x=Math.sin(t.anim*.7)*.1,t.rig.core.rotation.y+=i}}T.enemies=T.enemies.filter(t=>!t.removed)}function Np(){Ne.playMusic("boss"),Q("bossbar").classList.remove("hidden"),gt("zone",null,'The Remnant of the Catharsis: "THE WILL OF ZARK DOES NOT DIE."',"err")}function bM(i,e){if(i.slamT-=e,i.slamT<=0&&i.target){i.slamT=D(7,10);let n=i.target.pos.clone();yM(n,6,1.8,()=>{Ne.sfx("boom"),Us(n,16722762,7,.5),Nn(n.clone().setY(.5),16722762,50,6),T.P.alive&&wt(T.P.pos,n)<6&&Ii(T.P,46,i);for(let s of T.bots)s.alive&&wt(s.pos,n)<6&&Ii(s,46,i)})}let t=i.hp/i.maxHp;if(i.phase===0&&t<.6||i.phase===1&&t<.3){i.phase++,gt("zone",null,'The Remnant of the Catharsis: "RISE. SERVE THE CATHARSIS."',"err"),Ne.sfx("boom");for(let n=0;n<3;n++){let s=D(0,6.28),r=Cr("hollowed",5,i.pos.x+Math.cos(s)*6,i.pos.z+Math.sin(s)*6,!0);r.target=i.target,r.state="chase",Nn(r.pos.clone().setY(1),16722762,30,3)}}}function EM(i){for(let e of T.bots){if(!e.alive){e.deadT+=i,e.deadT>12&&(e.alive=!0,e.hp=e.maxHp,e.pos.copy(os("plaza")),e.group.rotation.x=0,e.state="idle",e.act="plaza",e.idleT=D(5,20),e.path=[]),e.group.position.copy(e.pos).setY(.3);continue}if(e.atk=Math.max(0,e.atk-i),e.danceT=Math.max(0,e.danceT-i),e.state==="idle")e.idleT-=i,(!e.wp||Os(e,e.wp,2.5,i))&&Math.random()<.01&&(e.wp=os("plaza")),Math.random()<8e-4&&(e.danceT=4),e.hp=Math.min(e.maxHp,e.hp+20*i),e.idleT<=0&&(e.act=Math.random()<.25?"cantina":ht(["ashen","ashen","echo","echo","crater","crater"]),e.path=[...xu[e.act],os(e.act)],e.state="travel",e.actT=e.act==="cantina"?D(40,110):D(60,180),e.wp=null);else if(e.state==="travel"){if(!e.path.length){e.state=e.act==="plaza"?"idle":e.act==="cantina"?"lounge":"hunt",e.idleT=D(15,50);continue}Os(e,e.path[0],7,i,1)&&e.path.shift()}else if(e.state==="lounge")e.actT-=i,e.move=Math.max(0,e.move-i*5),Math.random()<.0015&&(e.danceT=2.5),e.actT<=0&&(e.act="plaza",e.path=[...xu.cantina].reverse().concat([os("plaza")]),e.state="travel");else if(e.state==="hunt"){if(e.actT-=i,e.actT<=0){e.act="plaza",e.path=[...xu[Zn(e.pos.x,e.pos.z)==="crater"?"crater":e.pos.x>0?"ashen":"echo"]].reverse().concat([os("plaza")]),e.state="travel",e.target=null;continue}if(!e.target||!e.target.alive){e.target=null;let t=30;for(let n of T.enemies){if(!n.alive||n.isBoss&&Math.random()<.995)continue;let s=wt(e.pos,n.pos);s<t&&Zn(n.pos.x,n.pos.z)===Zn(e.pos.x,e.pos.z)&&(t=s,e.target=n)}e.target||(!e.wp||Os(e,e.wp,5,i))&&(e.wp=os(e.act))}else{let t=e.target,n=Ai[e.cls],s=(n.range>5?14:2.2)+t.radius;if(wt(e.pos,t.pos)>s)Os(e,t.pos,6.5,i,s*.9);else if(e.move=Math.max(0,e.move-i*5),Io(e,t.pos),e.atkT-=i,e.atkT<=0){e.atkT=D(1.4,1.9),e.atk=.3;let r=6+e.level*.7;n.range>5?Po(e.pos.clone().setY(1.4),t,n.hex,.12,30,()=>Ii(t,r,e),e):(Ii(t,r,e),wt(e.pos,T.P.pos)<30&&Math.random()<.5&&bo(t,n.hex,.9))}e.hp<e.maxHp*.3&&Math.random()<.01&&(e.hp=e.maxHp,Nn(e.pos.clone().setY(1),5111706,12,2))}}_c(e.pos,.4),e.group.position.copy(e.pos),Lo(e.group,e.yaw+(e.danceT>0?T.time*6:0),i,e.danceT>0?50:10),To(e.rig,e.move,T.time+e.name.length,e.atk,e.danceT)}}function SM(i){for(let e of T.proj){e.life-=i;let t=e.target;if(!t||!t.alive||e.life<=0){e.dead=!0;continue}let n=t.pos.clone().setY((t.pos.y||0)+(t.type==="drone"?2.6:t.height*.55)),s=e.m.position.distanceTo(n);if(s<.6){e.dead=!0,e.onHit();continue}e.m.position.addScaledVector(n.sub(e.m.position).normalize(),Math.min(s,e.speed*i))}for(let e of T.proj)e.dead&&(he.scene.remove(e.m),e.m.material.dispose());T.proj=T.proj.filter(e=>!e.dead)}function TM(i){for(let e of T.fx){e.t+=i;let t=Math.min(1,e.t/e.life);e.update(e,t,i),e.t>=e.life&&(e.dead=!0,he.scene.remove(e.obj),e.obj.material?.dispose?.(),(e.obj.isPoints||e.obj.isLine)&&e.obj.geometry.dispose())}T.fx=T.fx.filter(e=>!e.dead);for(let e of T.timers)e.t-=i,e.t<=0&&(e.done=!0,e.fn());T.timers=T.timers.filter(e=>!e.done)}function wM(i){for(let e of T.shards){if(!e.active){e.respawnT-=i,e.respawnT<=0&&(e.active=!0,e.group.visible=!0);continue}e.crystal.rotation.y+=i*1.5,e.crystal.position.y=.9+Math.sin(T.time*2+e.pos.x)*.15}}function AM(i){let e=T.time,t=T.P;he.sky.material.uniforms.t.value=e,pc.value=e,sM(i),Ip(he.birds,e),Uv(he.grass,he.cam),Nv(),he.lanternCrystal.rotation.y+=i*.4,he.lanternCrystal.material.emissiveIntensity=2+Math.sin(e*1.7)*.4;let n=T.zone==="cantina",s=he.cantinaRoof;n!==s.inside&&(s.inside=n,s.group.traverse(l=>{l.isMesh&&(l.material=n?s.ghost:s.solid)})),he.cantinaLight.intensity+=((n?30:0)-he.cantinaLight.intensity)*Math.min(1,i*3);let r=T.npcs.find(l=>l.id==="zuri");r&&r.lodNear&&(To(r.rig,0,e),r.rig.arms[1].rotation.x=-1+Math.sin(e*2.6)*.25,r.rig.arms[1].rotation.z=Math.sin(e*1.3)*.3,r.rig.head.rotation.y=wt(t.pos,r.pos)<9?ls(Math.atan2(t.pos.x-r.pos.x,t.pos.z-r.pos.z)-Math.PI,-.8,.8):Math.sin(e*.3)*.3),he.blink.emissiveIntensity=Math.sin(e*3)>.6?4:.3;for(let l of he.fires){let h=.8+Math.random()*.4;l.scale.set(h,.8+Math.random()*.5,h),l.userData.light&&(l.userData.light.intensity=30+Math.random()*20)}for(let l of he.pylons)l.r.rotation.z+=i,l.r.position.y=12+Math.sin(e+l.ph)*1.5,l.top.material.emissiveIntensity=2+Math.sin(e*4+l.ph)*2;for(let l of he.frags){let h=l.userData;h.a+=h.s*i,l.position.set(Math.cos(h.a)*h.r,h.y+Math.sin(e*.5+h.r)*1.2,Math.sin(h.a)*h.r),l.rotation.y+=i*.2}he.halo.rotation.z+=i*.2,he.ash.position.set(Math.floor(t.pos.x/10)*10,0,Math.floor(t.pos.z/10)*10);let o=he.ash.geometry.attributes.position;for(let l=0;l<o.count;l++){let h=o.getY(l)+i*(.1+l%5*.04);h>30&&(h=0),o.setY(l,h),o.setX(l,o.getX(l)+Math.sin(e*.3+l)*.01+i*.08)}o.needsUpdate=!0,he.sun.position.set(t.pos.x+lc.x*120,lc.y*120,t.pos.z+lc.z*120),he.sun.target.position.copy(t.pos);let a=T.npcs[1];To(a.rig,0,e),a.rig.head.rotation.y=Math.sin(e*.4)*.4;let c=T.npcs[0];wt(t.pos,c.pos)<14?Lo(c.group,Math.atan2(t.pos.x-c.pos.x,t.pos.z-c.pos.z),i,2):Lo(c.group,0,i,1)}function RM(i){let e=T.P,t=T.cam,n=e.pos.clone().setY(e.pos.y+1.7),s=new We(Math.sin(t.yaw)*Math.cos(t.pitch),Math.sin(t.pitch),Math.cos(t.yaw)*Math.cos(t.pitch)).multiplyScalar(t.dist).add(n);s.y=Math.max(.6,s.y);let r=T.colliders.filter(o=>o.maxX>Math.min(n.x,s.x)-1&&o.minX<Math.max(n.x,s.x)+1&&o.maxZ>Math.min(n.z,s.z)-1&&o.minZ<Math.max(n.z,s.z)+1);if(r.length){let o=new We().subVectors(s,n).divideScalar(24),a=n.clone();for(let c=0;c<24;c++){a.add(o);let l=!1;for(let h of r)if(a.x>h.minX-.3&&a.x<h.maxX+.3&&a.z>h.minZ-.3&&a.z<h.maxZ+.3&&a.y<h.h){l=!0;break}if(l){a.sub(o),s.copy(a),he.cam.position.lerp(s,.5);break}}}he.cam.position.lerp(s,Math.min(1,i*14)),he.cam.lookAt(n)}function CM(i){vM(i),MM(i),EM(i),SM(i),TM(i),wM(i),AM(i),RM(i);let e=T.P.target;e&&e.alive?(he.targetRing.visible=!0,he.targetRing.position.set(e.pos.x,.1,e.pos.z),he.targetRing.scale.setScalar(e.radius*1.3),he.targetRing.rotation.z+=i):he.targetRing.visible=!1,PM(),DM(),NM(),UM(i),OM(),T.chatT-=i,T.chatT<=0&&(T.chatT=D(6,14),BM()),T.autosave-=i,T.autosave<=0&&(T.autosave=20,ds())}var yc=()=>rc[Math.min(T.D.q.i,rc.length-1)];function Su(i){let e=T.D,t=yc();e.q.st==="active"&&(t.type===i||t.type==="any"&&(i==="hollowed"||i==="drone"))&&(e.q.p=Math.min(t.count,e.q.p+1),gt("sys",null,`${t.obj}: ${e.q.p}/${t.count}`),e.q.p>=t.count&&(e.q.st="ready",Ne.sfx("quest"),Ur("OBJECTIVE COMPLETE",t.title.toUpperCase(),"RETURN TO GOVERNOR MASCAR")),Do())}function _u(i){return i.replace(/\{name\}/g,T.D.name)}function Du(){let i=T.D,e=yc();Ne.sfx("click"),i.q.st==="available"?Pr("GOVERNOR OF AD-NOSTRA","CROXIAN MASCAR",e.title.toUpperCase(),_u(e.offer),`REWARD \xB7 ${e.xp} XP \xB7 ${e.cr} CREDITS`,[{label:"NOT YET",fn:Ot},{label:"ACCEPT",gold:!0,fn:()=>{i.q.st="active",i.q.p=0,Ne.sfx("accept"),gt("sys",null,`Quest accepted: ${e.title}`),Do(),Ot(),ds()}}]):i.q.st==="active"?Pr("GOVERNOR OF AD-NOSTRA","CROXIAN MASCAR",e.title.toUpperCase(),_u(e.active)+`

Progress: ${i.q.p} / ${e.count}`,"",[{label:"ASK ABOUT THE CITY",fn:()=>Pr("GOVERNOR OF AD-NOSTRA","CROXIAN MASCAR","",ht($f),"",[{label:"FAREWELL",fn:Ot}])},{label:"FAREWELL",fn:Ot}]):Pr("GOVERNOR OF AD-NOSTRA","CROXIAN MASCAR",e.title.toUpperCase()+" \u2014 COMPLETE",_u(e.done),`REWARD \xB7 ${e.xp} XP \xB7 ${e.cr} CREDITS`,[{label:"COMPLETE QUEST",gold:!0,fn:()=>{Ne.sfx("quest"),i.credits+=e.cr,Lp(e.xp),i.completed++,gt("sys",null,`Quest complete: ${e.title}. Received ${e.cr} credits.`),i.q.i===3&&(i.title="Hero of Ad-Nostra",gt("gov",null,`By decree of Governor Croxian Mascar, ${i.name} is named Hero of Ad-Nostra.`),Ur("TITLE EARNED","HERO OF AD-NOSTRA","THE CITY WILL REMEMBER")),i.q.i=Math.min(i.q.i+1,rc.length-1),i.q.st="available",i.q.p=0,Do(),ds(),Ot(),setTimeout(Du,450)}}])}function IM(){T.ui="vendor",Q("vendor").classList.remove("hidden"),Ne.sfx("click"),Up()}function Up(){let i=T.D,e=[{name:"Concord Medkit",desc:"Restores 50% health. Press 5 to use.",cost:25,buy:()=>{i.medkits++,Uu()}},{name:`Weapon Tuning \xB7 Rank ${i.wpn+1}`,desc:"+10% damage with all attacks.",cost:120*(i.wpn+1),buy:()=>{i.wpn++}},{name:`Concord Plating \xB7 Rank ${i.arm+1}`,desc:"+18 maximum health.",cost:100*(i.arm+1),buy:()=>{i.arm++}}],t=Q("vendor-items");t.innerHTML="";for(let n of e){let s=document.createElement("div");s.className="vitem",s.innerHTML=`<div><b>${Vt(n.name)}</b><p>${Vt(n.desc)}</p></div>`;let r=document.createElement("button");r.className="btn gold",r.textContent=`\u2B21 ${n.cost}`,r.disabled=i.credits<n.cost,r.onclick=()=>{i.credits<n.cost||(i.credits-=n.cost,n.buy(),Ne.sfx("coin"),gt("loot",null,`Purchased: ${n.name}`),Up(),ds())},s.appendChild(r),t.appendChild(s)}Q("vendor-wallet").textContent=`YOUR CREDITS: \u2B21 ${as(i.credits)} \xB7 MEDKITS: ${i.medkits}`}function Op(){let i=T.P,e=null,t=5;for(let n of T.npcs){let s=wt(i.pos,n.pos);s<t&&(t=s,e=n)}for(let n of T.props){let s=wt(i.pos,n.pos);s<2.2&&s<t&&(t=s,e=n)}for(let n of T.shards){if(!n.active)continue;let s=wt(i.pos,n.pos);s<3&&s<t&&(t=s,e=n)}return e}function Nu(i=Op()){if(!(!i||T.P.dead)){if(i.id==="mascar")Du();else if(i.id==="ilse")IM();else if(i.id==="zuri")Nr();else if(i.id==="plaque")qv();else if(i.kind==="shard"){let e=T.D;e.q.i===2&&e.q.st==="active"?(i.active=!1,i.group.visible=!1,i.respawnT=25,Ne.sfx("pickup"),gt("loot",null,"You recover: [Beacon Shard]"),Nn(i.pos.clone().setY(1),16722762,20,2),Su("shard")):e.q.i<2?$n("The shard hums with crimson light. The Governor should know of this."):$n("You have no reason to take it now.")}}}function PM(){let i=Op(),e=Q("prompt");if(i&&!T.ui&&!T.P.dead){let t=i.kind==="shard"?"Recover Beacon Shard":i.id==="mascar"?"Speak with Governor Mascar":i.id==="zuri"?"Talk to Zuri Adeyemi":i.id==="plaque"?"Read the memorial plaque":"Trade with Ilse Varn";e.innerHTML=`<b>${Vs?"\u25B6":"[E]"}</b> ${t}`,e.classList.remove("hidden")}else e.classList.add("hidden")}var Or=new Map;function jt(i,e){Or.get(i)!==e&&(Or.set(i,e),Q(i).textContent=e)}function Ds(i,e){let t=(ls(e,0,1)*100).toFixed(1)+"%";Or.get(i+"w")!==t&&(Or.set(i+"w",t),Q(i).style.width=t)}function LM(){let i=Q("hotbar");i.innerHTML="",[...Pi().abil,{id:"med",name:"Concord Medkit",icon:"\u271A",cost:0,cd:15,desc:"Restore 50% of your health. Buy more from Ilse Varn."}].forEach((n,s)=>{let r=document.createElement("div");r.className="slot",r.innerHTML=`<span class="k">${s+1}</span>${n.icon}<span class="c"></span><div class="cd" style="height:0"></div><div class="cdt"></div>`,r.onclick=()=>Ir(s),Vs||(r.onmouseenter=o=>{let a=Q("tooltip");a.innerHTML=`<b>${Vt(n.name)}</b>${Vt(n.desc)}<br><i>${n.cost?n.cost+" energy \xB7 ":""}${n.cd?n.cd+"s cooldown":"no cooldown"}${n.dmg?" \xB7 "+Math.round(n.dmg*xc())+" dmg":""}</i>`,a.classList.remove("hidden");let c=r.getBoundingClientRect();a.style.left=c.left-80+"px",a.style.top=c.top-a.offsetHeight-10+"px"}),r.onmouseleave=()=>Q("tooltip").classList.add("hidden"),i.appendChild(r)}),Uu()}function Uu(){let i=Q("hotbar").children[4];i&&(i.querySelector(".c").textContent=T.D.medkits)}function DM(){let i=T.P,e=T.D,t=Pi();jt("p-name",e.name),jt("p-lvl","LV "+e.level),jt("p-title",`${e.title.toUpperCase()} \xB7 ${t.name}`);let n=Kn();Ds("p-hp",i.hp/n),jt("p-hpt",`${Math.ceil(i.hp)} / ${n}`),Ds("p-sh",i.shield/n),Ds("p-en",i.en/ks()),jt("p-ent",`${Math.floor(i.en)} / ${ks()}`);let s=[];i.shield>0&&s.push(`\u26E8 ${i.shield}`),i.critNext&&s.push("\u25D0 CRIT"),i.combatT>0&&s.push("\u2694 COMBAT"),wo[T.zone]?.safe&&s.push("\u2726 SANCTUARY"),e.aleT>0&&s.push(`\u25C8 ALE ${wp(e.aleT)}`);let r=s.map(l=>`<span class="buff">${l}</span>`).join("");Or.get("buffs")!==r&&(Or.set("buffs",r),Q("p-buffs").innerHTML=r);let o=bu(e.level);Ds("xp-fill",e.xp/o),jt("xp-text",e.level>=30?"MAX LEVEL":`LEVEL ${e.level} \xB7 ${as(e.xp)} / ${as(o)} XP`),jt("wallet",`\u2B21 ${as(e.credits)} CR`);let a=Q("hotbar").children,c=t.abil;for(let l=0;l<5;l++){let h=a[l];if(!h)continue;let u,d,f=0;if(l<4){let p=c[l],y=i.cds[p.id]||0;y>=i.gcd?(u=y,d=p.cd||1):(u=i.gcd,d=t.gcd),f=p.cost}else u=i.medT,d=15;let g=u>0?(u/d*100).toFixed(0)+"%":"0";h._h!==g&&(h._h=g,h.children[2].style.height=g);let x=u>1?Math.ceil(u):"";h._t!==x&&(h._t=x,h.children[3].textContent=x);let m=i.en<f||l===4&&e.medkits<=0;h._n!==m&&(h._n=m,h.classList.toggle("noen",m))}Fp(),T.boss&&!Q("bossbar").classList.contains("hidden")&&Ds("boss-hp",T.boss.hp/T.boss.maxHp)}function Fp(i){let e=T.P?.target,t=Q("tframe");if(!e){t.classList.add("hidden");return}t.classList.remove("hidden"),e.kind==="enemy"?(jt("t-name",e.name),jt("t-lvl","LV "+e.level),jt("t-sub",e.isBoss?"ELITE \xB7 REMNANT":e.type==="drone"?"MECHANICAL \xB7 REMNANT":"HOLLOWED \xB7 REMNANT"),Q("t-bar").style.display="",Ds("t-hp",e.hp/e.maxHp),jt("t-hpt",`${Math.max(0,Math.ceil(e.hp))} / ${e.maxHp}`)):e.kind==="bot"?(jt("t-name",e.name),jt("t-lvl","LV "+e.level),jt("t-sub",`${Ai[e.cls].name}${e.guild?" \xB7 "+e.guild.toUpperCase():""}`),Q("t-bar").style.display="",Ds("t-hp",e.hp/e.maxHp),jt("t-hpt","ASCENDANT")):(jt("t-name",e.name),jt("t-lvl",""),jt("t-sub",e.title.toUpperCase()),Q("t-bar").style.display="none")}function Do(){let i=T.D,e=yc(),t=Q("tracker");i.q.st==="available"?t.innerHTML=`<h4>${e.repeat?"REPEATABLE":"NEW QUEST"}</h4><div class="qt">${Vt(e.title)}</div><div class="qo">Speak with Governor Mascar in Concordia Plaza.</div>`:i.q.st==="active"?t.innerHTML=`<h4>QUEST</h4><div class="qt">${Vt(e.title)}</div><div class="qo">\u2022 ${Vt(e.obj)}: ${i.q.p} / ${e.count}</div><div class="qo" style="color:var(--dim)">${Vt(e.zone)}</div>`:t.innerHTML=`<h4>QUEST</h4><div class="qt">${Vt(e.title)}</div><div class="qo done">\u2713 ${Vt(e.obj)}: ${e.count} / ${e.count}</div><div class="qo">Return to Governor Mascar.</div>`}var ac=new We;function Bp(i,e){return ac.set(i.x,(i.y||0)+e,i.z).project(he.cam),ac.z>1?null:[(ac.x*.5+.5)*innerWidth,(-ac.y*.5+.5)*innerHeight]}function NM(){let i=T.P,e=ot.plates,t=[...T.npcs,...T.enemies,...T.bots],n=T.D.q.st==="available"?"!":T.D.q.st==="ready"?"?":"",s=T.npcs[0].plate.firstChild;s.textContent!==n&&(s.textContent=n);for(let r of t){let o=r.plate,a=he.cam.position.distanceTo(r.pos),c=e&&(r.alive||r.kind==="bot")&&a<(r.kind==="npc"?70:r.isBoss?90:50),l=null;if(c&&(l=Bp(r.pos,r.height+.35),c=!!l),!c){o._v!==!1&&(o.style.display="none",o._v=!1);continue}o._v!==!0&&(o.style.display="",o._v=!0);let h=ls(1.25-a/80,.6,1.1);if(o.style.transform=`translate(${l[0].toFixed(1)}px,${l[1].toFixed(1)}px) translate(-50%,-100%) scale(${h.toFixed(2)})`,r.kind==="enemy"){let u=(r.hp/r.maxHp*100).toFixed(0)+"%";r._pw!==u&&(r._pw=u,r.plateBar.style.width=u);let d=i.target===r;r._pt!==d&&(r._pt=d,o.classList.toggle("tgt",d))}}}function UM(i){for(let e of T.floaters){e.t+=i;let t=e.t/e.life,n=Bp(e.p,t*1.4);!n||t>=1?e.el.style.opacity=0:(e.el.style.transform=`translate(${n[0]}px,${n[1]}px) translate(-50%,-50%) scale(${t<.1?1+(.1-t)*5:1})`,e.el.style.opacity=t>.6?(1-t)/.4:1),t>=1&&(e.el.remove(),e.dead=!0)}T.floaters=T.floaters.filter(e=>!e.dead)}var de=Q("minimap").getContext("2d");function OM(){let i=T.P,e=184,t=e/2,n=.85,s=a=>t+(a-i.pos.x)*n,r=a=>t+(a-i.pos.z)*n;de.save(),de.clearRect(0,0,e,e),de.beginPath(),de.arc(t,t,t,0,Math.PI*2),de.clip(),de.fillStyle="#4a3a24",de.fillRect(0,0,e,e),de.fillStyle="rgba(30,20,12,0.45)",de.fillRect(s(34),r(-62),122*n,124*n),de.fillStyle="rgba(220,205,160,0.22)",de.fillRect(s(-156),r(-62),122*n,124*n),de.fillStyle="rgba(140,40,30,0.45)",de.beginPath(),de.arc(s(mt.x),r(mt.z),72*n,0,7),de.fill(),de.fillStyle="rgba(62,230,255,0.12)",de.beginPath(),de.arc(s(0),r(0),34*n,0,7),de.fill(),de.fillStyle="rgba(255,179,71,0.35)",de.fillRect(s(rn.x0),r(rn.z0),(rn.x1-rn.x0)*n,(rn.z1-rn.z0)*n),de.strokeStyle="rgba(255,179,71,0.9)",de.lineWidth=1,de.strokeRect(s(rn.x0),r(rn.z0),(rn.x1-rn.x0)*n,(rn.z1-rn.z0)*n),de.fillStyle="rgba(140,90,58,0.6)",de.fillRect(s(-150),r(-7),300*n,14*n),de.fillRect(s(-7),r(-110),14*n,110*n),de.fillStyle="rgba(220,190,150,0.3)";for(let a of T.colliders){if(Math.abs(a.minX-i.pos.x)>140||Math.abs(a.minZ-i.pos.z)>140)continue;let c=(a.maxX-a.minX)*n;c<2||de.fillRect(s(a.minX),r(a.minZ),c,(a.maxZ-a.minZ)*n)}if(de.strokeStyle="rgba(232,196,106,0.6)",de.lineWidth=2,de.beginPath(),de.arc(s(0),r(0),246*n,0,7),de.stroke(),T.D.q.i===2&&T.D.q.st==="active"){de.fillStyle="#ff6b7f";for(let a of T.shards)a.active&&(de.save(),de.translate(s(a.pos.x),r(a.pos.z)),de.rotate(Math.PI/4),de.fillRect(-2.5,-2.5,5,5),de.restore())}for(let a of T.enemies){if(!a.alive)continue;de.fillStyle=a.isBoss?"#ff2b4a":"#ff5a6e";let c=a.isBoss?5:2.2;de.beginPath(),de.arc(s(a.pos.x),r(a.pos.z),c,0,7),de.fill()}de.fillStyle="#7fe3ff";for(let a of T.bots)a.alive&&(de.beginPath(),de.arc(s(a.pos.x),r(a.pos.z),2.2,0,7),de.fill());de.fillStyle="#e8c46a";for(let a of T.npcs)de.beginPath(),de.arc(s(a.pos.x),r(a.pos.z),3.5,0,7),de.fill();let o=FM();if(o){let a=s(o.x),c=r(o.z),l=a-t,h=c-t,u=Math.hypot(l,h);u>t-10&&(a=t+l/u*(t-10),c=t+h/u*(t-10)),de.fillStyle="#e8c46a",de.save(),de.translate(a,c),de.rotate(Math.PI/4),de.fillRect(-4,-4,8,8),de.restore()}de.save(),de.translate(t,t),de.rotate(-i.group.rotation.y+Math.PI),de.fillStyle="#fff",de.beginPath(),de.moveTo(0,-7),de.lineTo(5,5),de.lineTo(0,2),de.lineTo(-5,5),de.closePath(),de.fill(),de.restore(),de.save(),de.translate(t,t),de.rotate(-T.cam.yaw),de.fillStyle="rgba(255,255,255,0.05)",de.beginPath(),de.moveTo(0,0),de.arc(0,0,70,-Math.PI/2-.55,-Math.PI/2+.55),de.fill(),de.restore(),de.restore(),de.fillStyle="rgba(255,255,255,0.6)",de.font="10px Bahnschrift, sans-serif",de.textAlign="center",de.fillText("N",t,11)}function FM(){let i=T.D,e=yc();return i.q.st!=="active"?T.npcs[0].pos:{hollowed:new We(95,0,0),drone:new We(-95,0,0),shard:mt,boss:mt,any:T.P.pos.x>=0?new We(95,0,0):new We(-95,0,0)}[e.type]}var dp={world:"[World]",zone:"[Zone]",sys:"",gov:"[Governor's Office]",say:"[Say]",loot:"",err:"",whisper:"[Whisper]"};function gt(i,e,t,n){let s=Q("chat-log"),r=document.createElement("div");for(r.className="ch-"+(n||i),r.innerHTML=`${dp[i]?dp[i]+" ":""}${e?`<span class="ch-name">[${Vt(e)}]</span>: `:""}${Vt(t)}`,s.appendChild(r);s.children.length>80;)s.firstChild.remove();s.scrollTop=s.scrollHeight}function Bs(i,e,t="world"){i&&gt(t,i.name,e.replace(/\{name\}/g,T.D.name))}function BM(){let i=Math.random();if(T.zone==="cantina"&&i<.45){let e=T.bots.filter(t=>Zn(t.pos.x,t.pos.z)==="cantina");Bs(e.length?ht(e):ht(T.bots),ht(Qf),"say");return}if(i<.55)Bs(ht(T.bots),ht(Jf));else if(i<.75){let e=T.bots.filter(t=>Zn(t.pos.x,t.pos.z)===T.zone);e.length&&Bs(ht(e),ht(jf),"zone")}else i<.82&&gt("gov",null,ht(ep))}function kM(i){if(i=i.trim(),!i)return;let e=T.D,t=T.P;if(i[0]==="/"){let[r]=i.slice(1).toLowerCase().split(" ");switch(r){case"help":gt("sys",null,"Commands: /who /played /loc /dance /wave /salute /help");break;case"who":{let o=T.bots.slice(0,6).map(a=>`${a.name} (${a.level} ${Ai[a.cls].name.toLowerCase()}, ${wo[Zn(a.pos.x,a.pos.z)].name.toLowerCase()})`);gt("sys",null,`Online: ${o.join(", ")} \u2026and ${as(dc-6)} others.`);break}case"played":{let o=e.played|0;gt("sys",null,`Time played: ${Math.floor(o/3600)}h ${Math.floor(o/60)%60}m ${o%60}s`);break}case"loc":gt("sys",null,`${wo[T.zone].name}: ${t.pos.x.toFixed(0)}, ${(-t.pos.z).toFixed(0)}`);break;case"dance":t.danceT=5,gt("say",null,`${e.name} bursts into dance.`,"sys");break;case"wave":t.atk=.3,gt("say",null,`${e.name} waves.`,"sys"),setTimeout(()=>{let o=T.bots.find(a=>wt(a.pos,t.pos)<20);o&&gt("say",o.name,"o/")},900);break;case"salute":{t.atk=.3;let o=wt(t.pos,T.npcs[0].pos)<15;gt("say",null,o?`${e.name} salutes Governor Mascar.`:`${e.name} salutes.`,"sys"),o&&setTimeout(()=>gt("say","Croxian Mascar",ht(["At ease, Ascendant.","The city sees you.","Stand tall. You have earned it."])),900);break}default:gt("err",null,"Unknown command. Type /help.")}return}gt("world",e.name,i),Ne.sfx("chat");let n=i.toLowerCase(),s=(r,o=D(1,3))=>setTimeout(()=>Bs(ht(T.bots),ht(r)),o*1e3);/\b(hi|hello|hey|yo|sup|o7|o\/|greetings)\b/.test(n)?(s(pu),Math.random()<.5&&s(pu,D(2,4))):/mascar|governor|croxian/.test(n)?s(tp):/catharsis|remnant|monolith/.test(n)?s(["don't say that name too loud","the crater still gives me nightmares","the remnant hits like a tram, bring medkits"]):/lfg|group|party|help/.test(n)?s(["inv me","omw","where at?","sure, what zone"]):n.includes("?")?s(["no idea tbh","ask the governor","check the codex","pretty sure it's north"]):Math.random()<.3&&s(["lol","true","based","real","fr"])}function Pr(i,e,t,n,s,r){T.ui="dialog",Q("vendor").classList.add("hidden"),Q("dlg-who").textContent=i,Q("dlg-name").textContent=e,Q("dlg-q").textContent=t,Q("dlg-text").textContent=n,Q("dlg-rew").textContent=s;let o=Q("dlg-opts");o.innerHTML="";for(let a of r){let c=document.createElement("button");c.className="btn"+(a.gold?" gold":" ghost"),c.textContent=a.label,c.onclick=a.fn,o.appendChild(c)}Q("dialog").classList.remove("hidden")}function Ot(){for(let i of["dialog","vendor","sheet","pause"])Q(i).classList.add("hidden");T.ui=null,Q("tooltip").classList.add("hidden")}function Ou(){let i=T.D,e=T.P,t=Pi();Ot(),T.ui="sheet",Q("sh-name").textContent=i.name.toUpperCase();let n=[["Title",i.title],["Class",t.name],["Level",i.level],["Health",`${Math.ceil(e.hp)} / ${Kn()}`],["Energy",ks()],["Damage bonus",`+${Math.round((xc()-1)*100)}%`],["Critical chance",`${Math.round(t.crit*100)}%`],["Weapon tuning",`Rank ${i.wpn}`],["Concord plating",`Rank ${i.arm}`],["Remnants destroyed",as(i.kills)],["Deaths",i.deaths],["Quests completed",i.completed],["Credits",as(i.credits)],["Realm",Q("realm").value.split(" \xB7 ")[0]]];Q("sheet-rows").innerHTML=n.map(([s,r])=>`<div class="srow"><span>${s.toUpperCase()}</span><b>${Vt(r)}</b></div>`).join(""),Q("sheet").classList.remove("hidden")}function kp(){if(T.ui==="pause"){Ot();return}Ot(),T.ui="pause",Q("pause").classList.remove("hidden")}var Lt={down:-1,sx:0,sy:0,lx:0,ly:0,dragged:!1,both:!1,btns:0};Fr.addEventListener("contextmenu",i=>i.preventDefault());Fr.addEventListener("mousedown",i=>{Ne.init(),Lt.down=i.button,Lt.btns=i.buttons,Lt.sx=Lt.lx=i.clientX,Lt.sy=Lt.ly=i.clientY,Lt.dragged=!1,Lt.both=(i.buttons&3)===3,T.mode==="menu"&&(Le.drag=!0),document.activeElement===Q("chat-input")&&Q("chat-input").blur()});window.addEventListener("mousemove",i=>{let e=i.clientX-Lt.lx,t=i.clientY-Lt.ly;if(Lt.lx=i.clientX,Lt.ly=i.clientY,T.mode==="menu"){Le.mx=i.clientX/innerWidth*2-1,Le.my=i.clientY/innerHeight*2-1,Le.drag&&Lt.down>=0&&(Le.yaw+=e*.01,Le.yawVel=e*.002);return}Lt.down<0||T.mode!=="world"||(Math.abs(i.clientX-Lt.sx)+Math.abs(i.clientY-Lt.sy)>4&&(Lt.dragged=!0),Lt.dragged&&(T.cam.yaw-=e*.006*ot.sens,T.cam.pitch=ls(T.cam.pitch+t*.004*ot.sens,-.1,1.35),Lt.down===2&&T.P&&!T.P.dead&&(T.P.yaw=T.cam.yaw+Math.PI)))});window.addEventListener("mouseup",i=>{if(T.mode==="menu"){Le.drag=!1,Lt.down=-1;return}T.mode==="world"&&i.target===Fr&&!Lt.dragged&&Lt.down===0&&zp(i.clientX,i.clientY),Lt.down=-1,Lt.both=!1});Fr.addEventListener("wheel",i=>{T.mode==="world"&&(T.cam.dist=ls(T.cam.dist+Math.sign(i.deltaY)*1.2,3.5,24))},{passive:!0});var fp=new Wa;function zp(i,e){fp.setFromCamera(new He(i/innerWidth*2-1,-(e/innerHeight)*2+1),he.cam);let t=[...T.enemies.filter(s=>s.alive),...T.bots,...T.npcs].map(s=>s.hitbox),n=fp.intersectObjects(t,!1)[0];if(n){let s=n.object.userData.ent;hs(s),s.kind==="enemy"&&(T.P.autoOn=!0),s.kind==="npc"&&wt(T.P.pos,s.pos)<6&&Nu(s),Ne.sfx("click")}else hs(null)}window.addEventListener("keydown",i=>{if(T.mode==="splash"){T.ready&&Gp();return}let e=Q("chat-input"),t=document.activeElement===e;if(!(document.activeElement&&document.activeElement.tagName==="INPUT"&&!t)){if(T.mode!=="world"){i.code==="Escape"&&pp();return}if(t){i.code==="Enter"||i.key==="Enter"?(kM(e.value),e.value="",e.blur()):i.code==="Escape"&&(e.value="",e.blur());return}if(wn[i.code]=!0,!Q("codex").classList.contains("hidden")||!Q("settings").classList.contains("hidden")){i.code==="Escape"&&pp();return}switch(i.code){case"Enter":i.preventDefault(),e.focus();break;case"Slash":i.preventDefault(),e.focus(),e.value="/";break;case"Escape":T.ui?Ot():T.P.target?hs(null):kp();break;case"Tab":i.preventDefault(),Dp();break;case"Digit1":Ir(0);break;case"Digit2":Ir(1);break;case"Digit3":Ir(2);break;case"Digit4":Ir(3);break;case"Digit5":Ir(4);break;case"KeyE":case"KeyF":if(T.ui==="dialog")break;Nu();break;case"KeyC":T.ui==="sheet"?Ot():Ou();break;case"Space":i.preventDefault(),T.P.pos.y===0&&!T.P.dead&&(T.P.vy=8);break}}});window.addEventListener("keyup",i=>{wn[i.code]=!1});window.addEventListener("blur",()=>{for(let i in wn)wn[i]=!1});var St={id:null,x:0,y:0,mag:0,cx:0,cy:0,r:52},Ri=new Map,Eo=0;function Hp(i){let e=i.clientX-St.cx,t=i.clientY-St.cy,n=Math.hypot(e,t);n>St.r&&(e*=St.r/n,t*=St.r/n),St.x=e/St.r,St.y=t/St.r,St.mag=Math.min(1,n/St.r),St.mag<.15&&(St.x=St.y=0),Q("joy-knob").style.transform=`translate(${e}px, ${t}px)`}function zM(){St.id=null,St.x=St.y=St.mag=0,Q("joy-knob").style.transform="",Q("joy").classList.remove("on")}Q("joy").addEventListener("touchstart",i=>{if(i.preventDefault(),Ne.init(),St.id!==null||T.ui)return;let e=i.changedTouches[0],t=Q("joy").getBoundingClientRect();St.id=e.identifier,St.cx=t.left+t.width/2,St.cy=t.top+t.height/2,St.r=t.width*.4,Q("joy").classList.add("on"),Hp(e)},{passive:!1});window.addEventListener("touchmove",i=>{for(let e of i.changedTouches){if(e.identifier===St.id){Hp(e);continue}let t=Ri.get(e.identifier);if(!t)continue;let n=e.clientX-t.x,s=e.clientY-t.y;if(t.x=e.clientX,t.y=e.clientY,Math.abs(t.x-t.sx)+Math.abs(t.y-t.sy)>10&&(t.moved=!0),T.mode==="menu"){Le.yaw+=n*.01,Le.yawVel=n*.002;continue}T.mode!=="world"||Ri.size>1||(T.cam.yaw-=n*.008*ot.sens,T.cam.pitch=ls(T.cam.pitch+s*.005*ot.sens,-.1,1.35))}if(Ri.size===2&&T.mode==="world"){let[e,t]=[...Ri.values()],n=Math.hypot(e.x-t.x,e.y-t.y);Eo&&(T.cam.dist=ls(T.cam.dist-(n-Eo)*.04,3.5,24)),Eo=n}},{passive:!0});Fr.addEventListener("touchstart",i=>{i.preventDefault(),Ne.init(),document.activeElement===Q("chat-input")&&Q("chat-input").blur();for(let e of i.changedTouches)Ri.set(e.identifier,{x:e.clientX,y:e.clientY,sx:e.clientX,sy:e.clientY,t:performance.now(),moved:!1});T.mode==="menu"&&(Le.drag=!0),Eo=0},{passive:!1});function Vp(i){for(let e of i.changedTouches){if(e.identifier===St.id){zM();continue}let t=Ri.get(e.identifier);t&&(Ri.delete(e.identifier),T.mode==="world"&&!t.moved&&Ri.size===0&&performance.now()-t.t<350&&!T.ui&&zp(e.clientX,e.clientY))}Ri.size===0&&(Le.drag=!1,Eo=0)}window.addEventListener("touchend",Vp);window.addEventListener("touchcancel",Vp);var Oo=(i,e)=>Q(i).addEventListener("pointerdown",t=>{t.preventDefault(),t.stopPropagation(),Ne.init(),e()});Oo("tb-jump",()=>{T.P&&T.P.pos.y===0&&!T.P.dead&&(T.P.vy=8)});Oo("tb-target",()=>Dp());Oo("tb-menu",()=>{T.ui&&T.ui!=="pause"?Ot():kp()});Oo("tb-sheet",()=>{T.ui==="sheet"?Ot():Ou()});Oo("tb-chat",()=>{let i=Q("chat-input");i.classList.add("open"),i.focus()});Q("chat-input").addEventListener("blur",()=>Q("chat-input").classList.remove("open"));Q("prompt").addEventListener("click",()=>{T.ui!=="dialog"&&Nu()});var dc=4812;function us(i){Q(i).classList.remove("hidden")}function pn(i){Q(i).classList.add("hidden")}function pp(){pn("codex"),pn("settings")}function Gp(){if(Vs){let i=document.documentElement;try{let e=i.requestFullscreen&&i.requestFullscreen({navigationUI:"hide"});e&&e.then(()=>screen.orientation?.lock?.("landscape")).catch(()=>{})}catch{}}Ne.init(),Ne.sfx("start"),setTimeout(()=>Ne.playMusic("menu"),300),Q("splash").style.opacity=0,setTimeout(()=>pn("splash"),1e3),T.mode="menu",Fu()}function Fu(){T.mode="menu",Au(Le.scene,Le.cam),pn("hud"),pn("create"),pn("loading"),us("menu");let i=Hs.get(No),e=Q("btn-continue");i?(e.disabled=!1,Q("continue-sub").textContent=`${i.name.toUpperCase()} \xB7 LV ${i.level} ${Ai[i.cls].name}`):(e.disabled=!0,Q("continue-sub").textContent="NO ASCENDANT REGISTERED"),Ne.playMusic("menu")}document.querySelectorAll(".mbtn, .btn").forEach(i=>{i.addEventListener("mouseenter",()=>Ne.sfx("hover")),i.addEventListener("click",()=>Ne.sfx("click"))});Q("btn-continue").onclick=()=>{let i=Hs.get(No);i&&(T.D=i,Xp())};Q("btn-new").onclick=()=>Tu();Q("btn-codex").onclick=()=>Bu();Q("btn-settings").onclick=()=>Wp();Q("btn-quit").onclick=()=>{try{window.close()}catch{}setTimeout(()=>us("farewell"),150)};document.querySelectorAll("[data-close]").forEach(i=>i.onclick=()=>pn(i.dataset.close));Q("codex").addEventListener("mousedown",i=>{i.target.id==="codex"&&pn("codex")});Q("settings").addEventListener("mousedown",i=>{i.target.id==="settings"&&pn("settings")});function Bu(i=0){let e=Q("codex-list");e.innerHTML="",fu.forEach((n,s)=>{let r=document.createElement("li");r.textContent=n.title.toUpperCase(),s===i&&(r.className="on"),r.onclick=()=>{Ne.sfx("click"),Bu(s)},e.appendChild(r)});let t=fu[i];Q("codex-body").innerHTML=`<h3>${Vt(t.title.toUpperCase())}</h3><div class="tag">${Vt(t.tag)}</div>${t.body.map(n=>`<p>${Vt(n)}</p>`).join("")}`,us("codex")}function Wp(){Q("set-volume").value=ot.volume,Q("set-music").checked=ot.music,Q("set-bloom").checked=ot.bloom,Q("set-shadows").checked=ot.shadows,Q("set-sens").value=ot.sens,Q("set-plates").checked=ot.plates,Q("set-dynres").checked=ot.dynres,Q("set-fps").checked=ot.fps,us("settings")}function fs(){Hs.set("adnostra_settings",ot)}Q("set-volume").oninput=i=>{ot.volume=+i.target.value,Ne.setVolume(ot.volume),fs()};Q("set-music").onchange=i=>{ot.music=i.target.checked,Ne.setMusic(ot.music),fs()};Q("set-bloom").onchange=i=>{ot.bloom=i.target.checked,Fs.enabled=ot.bloom,fs()};Q("set-shadows").onchange=i=>{ot.shadows=i.target.checked,Dt.shadowMap.enabled=ot.shadows;for(let e of[Le.scene,he.scene])e.traverse(t=>{t.material&&[].concat(t.material).forEach(n=>n.needsUpdate=!0)});fs()};Q("set-sens").oninput=i=>{ot.sens=+i.target.value,fs()};Q("set-plates").onchange=i=>{ot.plates=i.target.checked,fs()};Q("set-dynres").onchange=i=>{ot.dynres=i.target.checked,rt.level=0,rt.fails=0,wu(),fs()};Q("set-fps").onchange=i=>{ot.fps=i.target.checked,Q("fps").classList.toggle("hidden",!ot.fps),fs()};Q("fps").classList.toggle("hidden",!ot.fps);var Lr={cls:"vanguard",visor:sc[0]};function Tu(){pn("menu"),us("create");let i=Q("classes");i.innerHTML="";for(let[n,s]of Object.entries(Ai)){let r=document.createElement("div");r.className="ccard cut"+(n===Lr.cls?" on":""),r.style.setProperty("--c",s.color),r.innerHTML=`<div class="cico">${s.icon}</div><h3>${s.name}</h3><div class="role">${s.role}</div><p>${Vt(s.desc)}</p>
      <div class="stats"><span>HEALTH <b>${s.hp}</b></span><span>RANGE <b>${s.range>5?"LONG":"MELEE"}</b></span><span>CRIT <b>${Math.round(s.crit*100)}%</b></span></div>
      <ul>${s.abil.map(o=>`<li><span>${o.icon}</span>${Vt(o.name)}</li>`).join("")}</ul>`,r.onclick=()=>{Lr.cls=n,Ne.sfx("click"),Tu()},i.appendChild(r)}let e=Q("swatches");e.innerHTML="";for(let n of sc){let s=document.createElement("div");s.className="sw"+(n===Lr.visor?" on":""),s.style.setProperty("--c",n),s.onclick=()=>{Lr.visor=n,Ne.sfx("click"),Tu()},e.appendChild(s)}let t=Q("cname");t.value||(t.value=ht(["Ardent","Talon","Vesper","Rook","Cassia","Orin","Lyra","Dain","Sorrel","Kestrel"])),Q("overwrite").classList.toggle("hidden",!Hs.get(No))}Q("create-back").onclick=()=>{pn("create"),Fu()};Q("create-go").onclick=()=>{let i=Q("cname").value.trim();if(!/^[A-Za-z0-9_\- ]{2,16}$/.test(i)){Q("cname").style.borderColor="var(--crimson)",setTimeout(()=>Q("cname").style.borderColor="",1200);return}T.D=uM(i,Lr.cls,Lr.visor),Hs.set(No,T.D),Ne.sfx("start"),Xp(!0)};function Xp(i=!1){pn("menu"),pn("create"),us("loading"),Q("load-tip").textContent=ht(Yf);let e=Q("load-bar");e.style.transition="none",e.style.width="0",requestAnimationFrame(()=>{e.style.transition="width 1.6s ease",e.style.width="70%"}),setTimeout(()=>{try{T.world||zv()}catch(t){console.error(t),mp("World failed to build: "+t.message)}dM();for(let t of T.enemies)(t.target===T.P||t.target&&t.target.kind==="player")&&(t.target=null,t.state="return");T.zone="",T.ui=null,Ot(),pn("death"),Q("chat-log").innerHTML="",e.style.width="100%",setTimeout(()=>{pn("loading"),us("hud"),T.mode="world",Au(he.scene,he.cam),Do(),hs(null),he.cam.position.copy(T.P.pos).add(new We(0,6,14)),Ne.playMusic("world"),gt("sys",null,`Welcome to Ad-Nostra, ${T.D.name}. Realm: ${Q("realm").value.split(" \xB7 ")[0]}.`),gt("gov",null,"Anno Domini 2137. Ten years since Carax. The Catharsis is fallen \u2014 but its Remnants endure."),(i||T.D.q.i===0&&T.D.q.st==="available")&&gt("sys",null,`Governor Croxian Mascar awaits you on his dais. Walk up and ${Vs?"tap the prompt":"press E"}.`),setTimeout(()=>Bs(ht(T.bots),`welcome ${T.D.name} o7`),3500)},500)},900)}function HM(){ds(),Ot();for(let i of T.floaters)i.el.remove();T.floaters=[],Fu()}function ds(){!T.D||!T.P||(T.D.pos=[T.P.pos.x,T.P.pos.z],Hs.set(No,T.D))}window.addEventListener("beforeunload",()=>{T.mode==="world"&&ds()});Q("respawn").onclick=pM;Q("vendor-x").onclick=Ot;Q("sheet-x").onclick=Ot;Q("pz-resume").onclick=Ot;Q("pz-sheet").onclick=Ou;Q("pz-codex").onclick=()=>{Ot(),Bu()};Q("pz-settings").onclick=()=>{Ot(),Wp()};Q("pz-exit").onclick=HM;setInterval(()=>{dc=ls(dc+zs(-14,16),4200,5600),Q("online").textContent=as(dc)},3e3);window.addEventListener("resize",()=>{for(let i of[Le.cam,he.cam])i.aspect=innerWidth/innerHeight,i.updateProjectionMatrix();Dt.setSize(innerWidth,innerHeight),ii.setPixelRatio(Dt.getPixelRatio()),ii.setSize(innerWidth,innerHeight),Fs.resolution.set(innerWidth/2,innerHeight/2)});var So=[1,.85,.72,.6],rt={level:0,acc:0,n:0,cool:0,grace:3,fails:0,frames:0,fpsT:0,fps:0},VM=()=>Math.min(devicePixelRatio,cs.pixelRatio);function wu(){let i=VM()*(ot.dynres?So[rt.level]:1);Math.abs(Dt.getPixelRatio()-i)<.01||(Dt.setPixelRatio(i),ii.setPixelRatio(i),ii.setSize(innerWidth,innerHeight))}function GM(i){if(rt.frames++,rt.fpsT+=i,rt.fpsT>=.5&&(rt.fps=rt.frames/rt.fpsT,rt.frames=0,rt.fpsT=0,ot.fps&&(Q("fps").textContent=`${Math.round(rt.fps)} FPS \xB7 ${Math.round(So[ot.dynres?rt.level:0]*100)}% RES \xB7 ${Dt.info.render.calls} DRAWS`)),!ot.dynres||document.hidden||i>2)return;if(rt.grace>0){rt.grace-=i;return}let e=Math.min(i,.1);if(rt.cool=Math.max(0,rt.cool-i),rt.acc+=e,rt.n++,rt.acc<1.5&&rt.n<90)return;let t=rt.acc/rt.n*1e3;rt.acc=0,rt.n=0,t>21&&rt.level<So.length-1?(rt.level=Math.min(So.length-1,rt.level+(t>40?2:1)),rt.fails++,rt.cool=Math.min(60,6*2**rt.fails),wu()):t<17.8&&rt.level>0&&rt.cool<=0&&(rt.level--,rt.cool=4,wu())}function qp(){requestAnimationFrame(qp);let i=Tv.getDelta(),e=Math.min(i,.05);T.time+=e,GM(i),Ne.tick(e);try{T.mode==="world"?CM(e):Fv(e)}catch(t){console.error(t)}Dt.info.reset(),ii.render()}(async function(){let e=Q("splash-bar"),t=Q("splash-status"),n=s=>e.style.width=s*100+"%";n(.1);try{await wv(n),t.textContent="UPLINK ESTABLISHED"}catch(s){console.error(s),t.textContent="GOVERNOR MODEL UNAVAILABLE \u2014 USING FALLBACK",mp(s.message)}Ov(),Au(Le.scene,Le.cam),qp(),setTimeout(()=>{pn("splash-load"),us("splash-press"),T.ready=!0},400),Q("splash").addEventListener("pointerdown",()=>{T.ready&&T.mode==="splash"&&Gp()}),Vs&&(Q("splash-press").textContent="TAP TO BEGIN"),window.__AD=T,window.__ADdbg={W:he,menu:Le,damage:Ii,killEnemy:Pp,talkMascar:Du,updateTracker:Do,stats:()=>({batch:he.batch,res:So[rt.level],calls:Dt.info.render.calls,tris:Dt.info.render.triangles,geos:Dt.info.memory.geometries,tex:Dt.info.memory.textures,pr:Dt.getPixelRatio()})}})();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
