var vc=Object.defineProperty;var _c=(a,e,t)=>e in a?vc(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var Os=(a,e,t)=>_c(a,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ds="165",xc=0,Bs=1,Sc=2,wl=1,yc=2,xn=3,yn=0,wt=1,en=2,In=0,wi=1,ks=2,Gs=3,zs=4,Mc=5,Zn=100,Ec=101,bc=102,Tc=103,wc=104,Ac=200,Cc=201,Rc=202,Pc=203,es=204,ts=205,Uc=206,Lc=207,Dc=208,Ic=209,Fc=210,Nc=211,Oc=212,Bc=213,kc=214,Gc=0,zc=1,Hc=2,qr=3,Vc=4,Wc=5,Xc=6,qc=7,fs=0,Yc=1,jc=2,Fn=0,Kc=1,Jc=2,Zc=3,Qc=4,$c=5,eu=6,tu=7,Al=300,Ri=301,Pi=302,ns=303,is=304,$r=306,rs=1e3,$n=1001,as=1002,qt=1003,nu=1004,gr=1005,Ot=1006,ma=1007,ei=1008,On=1009,iu=1010,ru=1011,Yr=1012,Cl=1013,Ui=1014,Dn=1015,ea=1016,Rl=1017,Pl=1018,Li=1020,au=35902,su=1021,ou=1022,cn=1023,lu=1024,cu=1025,Ai=1026,Di=1027,uu=1028,Ul=1029,hu=1030,Ll=1031,Dl=1033,ga=33776,va=33777,_a=33778,xa=33779,Hs=35840,Vs=35841,Ws=35842,Xs=35843,qs=36196,Ys=37492,js=37496,Ks=37808,Js=37809,Zs=37810,Qs=37811,$s=37812,eo=37813,to=37814,no=37815,io=37816,ro=37817,ao=37818,so=37819,oo=37820,lo=37821,Sa=36492,co=36494,uo=36495,du=36283,ho=36284,fo=36285,po=36286,fu=3200,Il=3201,Fl=0,pu=1,Ln="",sn="srgb",kn="srgb-linear",ps="display-p3",ta="display-p3-linear",jr="linear",rt="srgb",Kr="rec709",Jr="p3",si=7680,mo=519,mu=512,gu=513,vu=514,Nl=515,_u=516,xu=517,Su=518,yu=519,go=35044,vo="300 es",Sn=2e3,Zr=2001;class Fi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const n=r.slice(0);for(let i=0,s=n.length;i<s;i++)n[i].call(this,e);e.target=null}}}const yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ya=Math.PI/180,ss=180/Math.PI;function rr(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(yt[a&255]+yt[a>>8&255]+yt[a>>16&255]+yt[a>>24&255]+"-"+yt[e&255]+yt[e>>8&255]+"-"+yt[e>>16&15|64]+yt[e>>24&255]+"-"+yt[t&63|128]+yt[t>>8&255]+"-"+yt[t>>16&255]+yt[t>>24&255]+yt[r&255]+yt[r>>8&255]+yt[r>>16&255]+yt[r>>24&255]).toLowerCase()}function Dt(a,e,t){return Math.max(e,Math.min(t,a))}function Mu(a,e){return(a%e+e)%e}function Ma(a,e,t){return(1-t)*a+t*e}function Yi(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Lt(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class Je{constructor(e=0,t=0){Je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,n=e.elements;return this.x=n[0]*t+n[3]*r+n[6],this.y=n[1]*t+n[4]*r+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Dt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),n=Math.sin(t),i=this.x-e.x,s=this.y-e.y;return this.x=i*r-s*n+e.x,this.y=i*n+s*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,t,r,n,i,s,o,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,n,i,s,o,l,c)}set(e,t,r,n,i,s,o,l,c){const u=this.elements;return u[0]=e,u[1]=n,u[2]=o,u[3]=t,u[4]=i,u[5]=l,u[6]=r,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,i=this.elements,s=r[0],o=r[3],l=r[6],c=r[1],u=r[4],d=r[7],h=r[2],f=r[5],g=r[8],v=n[0],p=n[3],m=n[6],M=n[1],S=n[4],y=n[7],U=n[2],w=n[5],b=n[8];return i[0]=s*v+o*M+l*U,i[3]=s*p+o*S+l*w,i[6]=s*m+o*y+l*b,i[1]=c*v+u*M+d*U,i[4]=c*p+u*S+d*w,i[7]=c*m+u*y+d*b,i[2]=h*v+f*M+g*U,i[5]=h*p+f*S+g*w,i[8]=h*m+f*y+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*o*c-r*i*u+r*o*l+n*i*c-n*s*l}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*s-o*c,h=o*l-u*i,f=c*i-s*l,g=t*d+r*h+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(n*c-u*r)*v,e[2]=(o*r-n*s)*v,e[3]=h*v,e[4]=(u*t-n*l)*v,e[5]=(n*i-o*t)*v,e[6]=f*v,e[7]=(r*l-c*t)*v,e[8]=(s*t-r*i)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,n,i,s,o){const l=Math.cos(i),c=Math.sin(i);return this.set(r*l,r*c,-r*(l*s+c*o)+s+e,-n*c,n*l,-n*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ea.makeScale(e,t)),this}rotate(e){return this.premultiply(Ea.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ea.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<9;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ea=new qe;function Ol(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Qr(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Eu(){const a=Qr("canvas");return a.style.display="block",a}const _o={};function Bl(a){a in _o||(_o[a]=!0,console.warn(a))}function bu(a,e,t){return new Promise(function(r,n){function i(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:n();break;case a.TIMEOUT_EXPIRED:setTimeout(i,t);break;default:r()}}setTimeout(i,t)})}const xo=new qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),So=new qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),vr={[kn]:{transfer:jr,primaries:Kr,toReference:a=>a,fromReference:a=>a},[sn]:{transfer:rt,primaries:Kr,toReference:a=>a.convertSRGBToLinear(),fromReference:a=>a.convertLinearToSRGB()},[ta]:{transfer:jr,primaries:Jr,toReference:a=>a.applyMatrix3(So),fromReference:a=>a.applyMatrix3(xo)},[ps]:{transfer:rt,primaries:Jr,toReference:a=>a.convertSRGBToLinear().applyMatrix3(So),fromReference:a=>a.applyMatrix3(xo).convertLinearToSRGB()}},Tu=new Set([kn,ta]),et={enabled:!0,_workingColorSpace:kn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(a){if(!Tu.has(a))throw new Error(`Unsupported working color space, "${a}".`);this._workingColorSpace=a},convert:function(a,e,t){if(this.enabled===!1||e===t||!e||!t)return a;const r=vr[e].toReference,n=vr[t].fromReference;return n(r(a))},fromWorkingColorSpace:function(a,e){return this.convert(a,this._workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this._workingColorSpace)},getPrimaries:function(a){return vr[a].primaries},getTransfer:function(a){return a===Ln?jr:vr[a].transfer}};function Ci(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function ba(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let oi;class wu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{oi===void 0&&(oi=Qr("canvas")),oi.width=e.width,oi.height=e.height;const r=oi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=oi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Qr("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const n=r.getImageData(0,0,e.width,e.height),i=n.data;for(let s=0;s<i.length;s++)i[s]=Ci(i[s]/255)*255;return r.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Ci(t[r]/255)*255):t[r]=Ci(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Au=0;class kl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Au++}),this.uuid=rr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},n=this.data;if(n!==null){let i;if(Array.isArray(n)){i=[];for(let s=0,o=n.length;s<o;s++)n[s].isDataTexture?i.push(Ta(n[s].image)):i.push(Ta(n[s]))}else i=Ta(n);r.url=i}return t||(e.images[this.uuid]=r),r}}function Ta(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?wu.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cu=0;class At extends Fi{constructor(e=At.DEFAULT_IMAGE,t=At.DEFAULT_MAPPING,r=$n,n=$n,i=Ot,s=ei,o=cn,l=On,c=At.DEFAULT_ANISOTROPY,u=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cu++}),this.uuid=rr(),this.name="",this.source=new kl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=n,this.magFilter=i,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Al)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rs:e.x=e.x-Math.floor(e.x);break;case $n:e.x=e.x<0?0:1;break;case as:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rs:e.y=e.y-Math.floor(e.y);break;case $n:e.y=e.y<0?0:1;break;case as:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}At.DEFAULT_IMAGE=null;At.DEFAULT_MAPPING=Al;At.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,r=0,n=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,n){return this.x=e,this.y=t,this.z=r,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,i=this.w,s=e.elements;return this.x=s[0]*t+s[4]*r+s[8]*n+s[12]*i,this.y=s[1]*t+s[5]*r+s[9]*n+s[13]*i,this.z=s[2]*t+s[6]*r+s[10]*n+s[14]*i,this.w=s[3]*t+s[7]*r+s[11]*n+s[15]*i,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,n,i;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,y=(f+1)/2,U=(m+1)/2,w=(u+h)/4,b=(d+v)/4,P=(g+p)/4;return S>y&&S>U?S<.01?(r=0,n=.707106781,i=.707106781):(r=Math.sqrt(S),n=w/r,i=b/r):y>U?y<.01?(r=.707106781,n=0,i=.707106781):(n=Math.sqrt(y),r=w/n,i=P/n):U<.01?(r=.707106781,n=.707106781,i=0):(i=Math.sqrt(U),r=b/i,n=P/i),this.set(r,n,i,t),this}let M=Math.sqrt((p-g)*(p-g)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(d-v)/M,this.z=(h-u)/M,this.w=Math.acos((c+f+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ru extends Fi{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const n={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const i=new At(n,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);i.flipY=!1,i.generateMipmaps=r.generateMipmaps,i.internalFormat=r.internalFormat,this.textures=[];const s=r.count;for(let o=0;o<s;o++)this.textures[o]=i.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let n=0,i=this.textures.length;n<i;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,n=e.textures.length;r<n;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new kl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ni extends Ru{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Gl extends At{constructor(e=null,t=1,r=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=qt,this.minFilter=qt,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pu extends At{constructor(e=null,t=1,r=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=qt,this.minFilter=qt,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ar{constructor(e=0,t=0,r=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=n}static slerpFlat(e,t,r,n,i,s,o){let l=r[n+0],c=r[n+1],u=r[n+2],d=r[n+3];const h=i[s+0],f=i[s+1],g=i[s+2],v=i[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(d!==v||l!==h||c!==f||u!==g){let p=1-o;const m=l*h+c*f+u*g+d*v,M=m>=0?1:-1,S=1-m*m;if(S>Number.EPSILON){const U=Math.sqrt(S),w=Math.atan2(U,m*M);p=Math.sin(p*w)/U,o=Math.sin(o*w)/U}const y=o*M;if(l=l*p+h*y,c=c*p+f*y,u=u*p+g*y,d=d*p+v*y,p===1-o){const U=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=U,c*=U,u*=U,d*=U}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,r,n,i,s){const o=r[n],l=r[n+1],c=r[n+2],u=r[n+3],d=i[s],h=i[s+1],f=i[s+2],g=i[s+3];return e[t]=o*g+u*d+l*f-c*h,e[t+1]=l*g+u*h+c*d-o*f,e[t+2]=c*g+u*f+o*h-l*d,e[t+3]=u*g-o*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,n){return this._x=e,this._y=t,this._z=r,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,n=e._y,i=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(r/2),u=o(n/2),d=o(i/2),h=l(r/2),f=l(n/2),g=l(i/2);switch(s){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,n=Math.sin(r);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],n=t[4],i=t[8],s=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=r+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(i-c)*f,this._z=(s-n)*f}else if(r>o&&r>d){const f=2*Math.sqrt(1+r-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(n+s)/f,this._z=(i+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-r-d);this._w=(i-c)/f,this._x=(n+s)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-r-o);this._w=(s-n)/f,this._x=(i+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const n=Math.min(1,t/r);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,n=e._y,i=e._z,s=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=r*u+s*o+n*c-i*l,this._y=n*u+s*l+i*o-r*c,this._z=i*u+s*c+r*l-n*o,this._w=s*u-r*o-n*l-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,n=this._y,i=this._z,s=this._w;let o=s*e._w+r*e._x+n*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=r,this._y=n,this._z=i,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*s+t*this._w,this._x=f*r+t*this._x,this._y=f*n+t*this._y,this._z=f*i+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=s*d+this._w*h,this._x=r*d+this._x*h,this._y=n*d+this._y*h,this._z=i*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),n=Math.sqrt(1-r),i=Math.sqrt(r);return this.set(n*Math.sin(e),n*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class te{constructor(e=0,t=0,r=0){te.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,n=this.z,i=e.elements;return this.x=i[0]*t+i[3]*r+i[6]*n,this.y=i[1]*t+i[4]*r+i[7]*n,this.z=i[2]*t+i[5]*r+i[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,i=e.elements,s=1/(i[3]*t+i[7]*r+i[11]*n+i[15]);return this.x=(i[0]*t+i[4]*r+i[8]*n+i[12])*s,this.y=(i[1]*t+i[5]*r+i[9]*n+i[13])*s,this.z=(i[2]*t+i[6]*r+i[10]*n+i[14])*s,this}applyQuaternion(e){const t=this.x,r=this.y,n=this.z,i=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*n-o*r),u=2*(o*t-i*n),d=2*(i*r-s*t);return this.x=t+l*c+s*d-o*u,this.y=r+l*u+o*c-i*d,this.z=n+l*d+i*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,n=this.z,i=e.elements;return this.x=i[0]*t+i[4]*r+i[8]*n,this.y=i[1]*t+i[5]*r+i[9]*n,this.z=i[2]*t+i[6]*r+i[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,n=e.y,i=e.z,s=t.x,o=t.y,l=t.z;return this.x=n*l-i*o,this.y=i*s-r*l,this.z=r*o-n*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return wa.copy(this).projectOnVector(e),this.sub(wa)}reflect(e){return this.sub(wa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Dt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,n=this.z-e.z;return t*t+r*r+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const n=Math.sin(t)*e;return this.x=n*Math.sin(r),this.y=Math.cos(t)*e,this.z=n*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wa=new te,yo=new ar;class tn{constructor(e=new te(1/0,1/0,1/0),t=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const i=r.getAttribute("position");if(t===!0&&i!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=i.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Zt):Zt.fromBufferAttribute(i,s),Zt.applyMatrix4(e.matrixWorld),this.expandByPoint(Zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_r.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),_r.copy(r.boundingBox)),_r.applyMatrix4(e.matrixWorld),this.union(_r)}const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Zt),Zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ji),xr.subVectors(this.max,ji),li.subVectors(e.a,ji),ci.subVectors(e.b,ji),ui.subVectors(e.c,ji),wn.subVectors(ci,li),An.subVectors(ui,ci),Hn.subVectors(li,ui);let t=[0,-wn.z,wn.y,0,-An.z,An.y,0,-Hn.z,Hn.y,wn.z,0,-wn.x,An.z,0,-An.x,Hn.z,0,-Hn.x,-wn.y,wn.x,0,-An.y,An.x,0,-Hn.y,Hn.x,0];return!Aa(t,li,ci,ui,xr)||(t=[1,0,0,0,1,0,0,0,1],!Aa(t,li,ci,ui,xr))?!1:(Sr.crossVectors(wn,An),t=[Sr.x,Sr.y,Sr.z],Aa(t,li,ci,ui,xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const pn=[new te,new te,new te,new te,new te,new te,new te,new te],Zt=new te,_r=new tn,li=new te,ci=new te,ui=new te,wn=new te,An=new te,Hn=new te,ji=new te,xr=new te,Sr=new te,Vn=new te;function Aa(a,e,t,r,n){for(let i=0,s=a.length-3;i<=s;i+=3){Vn.fromArray(a,i);const o=n.x*Math.abs(Vn.x)+n.y*Math.abs(Vn.y)+n.z*Math.abs(Vn.z),l=e.dot(Vn),c=t.dot(Vn),u=r.dot(Vn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Uu=new tn,Ki=new te,Ca=new te;class na{constructor(e=new te,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Uu.setFromPoints(e).getCenter(r);let n=0;for(let i=0,s=e.length;i<s;i++)n=Math.max(n,r.distanceToSquared(e[i]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ki.subVectors(e,this.center);const t=Ki.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),n=(r-this.radius)*.5;this.center.addScaledVector(Ki,n/r),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ca.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ki.copy(e.center).add(Ca)),this.expandByPoint(Ki.copy(e.center).sub(Ca))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mn=new te,Ra=new te,yr=new te,Cn=new te,Pa=new te,Mr=new te,Ua=new te;class Lu{constructor(e=new te,t=new te(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mn.copy(this.origin).addScaledVector(this.direction,t),mn.distanceToSquared(e))}distanceSqToSegment(e,t,r,n){Ra.copy(e).add(t).multiplyScalar(.5),yr.copy(t).sub(e).normalize(),Cn.copy(this.origin).sub(Ra);const i=e.distanceTo(t)*.5,s=-this.direction.dot(yr),o=Cn.dot(this.direction),l=-Cn.dot(yr),c=Cn.lengthSq(),u=Math.abs(1-s*s);let d,h,f,g;if(u>0)if(d=s*l-o,h=s*o-l,g=i*u,d>=0)if(h>=-g)if(h<=g){const v=1/u;d*=v,h*=v,f=d*(d+s*h+2*o)+h*(s*d+h+2*l)+c}else h=i,d=Math.max(0,-(s*h+o)),f=-d*d+h*(h+2*l)+c;else h=-i,d=Math.max(0,-(s*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-s*i+o)),h=d>0?-i:Math.min(Math.max(-i,-l),i),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-i,-l),i),f=h*(h+2*l)+c):(d=Math.max(0,-(s*i+o)),h=d>0?i:Math.min(Math.max(-i,-l),i),f=-d*d+h*(h+2*l)+c);else h=s>0?-i:i,d=Math.max(0,-(s*h+o)),f=-d*d+h*(h+2*l)+c;return r&&r.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(Ra).addScaledVector(yr,h),f}intersectSphere(e,t){mn.subVectors(e.center,this.origin);const r=mn.dot(this.direction),n=mn.dot(mn)-r*r,i=e.radius*e.radius;if(n>i)return null;const s=Math.sqrt(i-n),o=r-s,l=r+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,n,i,s,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(r=(e.min.x-h.x)*c,n=(e.max.x-h.x)*c):(r=(e.max.x-h.x)*c,n=(e.min.x-h.x)*c),u>=0?(i=(e.min.y-h.y)*u,s=(e.max.y-h.y)*u):(i=(e.max.y-h.y)*u,s=(e.min.y-h.y)*u),r>s||i>n||((i>r||isNaN(r))&&(r=i),(s<n||isNaN(n))&&(n=s),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),r>l||o>n)||((o>r||r!==r)&&(r=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(r>=0?r:n,t)}intersectsBox(e){return this.intersectBox(e,mn)!==null}intersectTriangle(e,t,r,n,i){Pa.subVectors(t,e),Mr.subVectors(r,e),Ua.crossVectors(Pa,Mr);let s=this.direction.dot(Ua),o;if(s>0){if(n)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Cn.subVectors(this.origin,e);const l=o*this.direction.dot(Mr.crossVectors(Cn,Mr));if(l<0)return null;const c=o*this.direction.dot(Pa.cross(Cn));if(c<0||l+c>s)return null;const u=-o*Cn.dot(Ua);return u<0?null:this.at(u/s,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,r,n,i,s,o,l,c,u,d,h,f,g,v,p){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,n,i,s,o,l,c,u,d,h,f,g,v,p)}set(e,t,r,n,i,s,o,l,c,u,d,h,f,g,v,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=r,m[12]=n,m[1]=i,m[5]=s,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,n=1/hi.setFromMatrixColumn(e,0).length(),i=1/hi.setFromMatrixColumn(e,1).length(),s=1/hi.setFromMatrixColumn(e,2).length();return t[0]=r[0]*n,t[1]=r[1]*n,t[2]=r[2]*n,t[3]=0,t[4]=r[4]*i,t[5]=r[5]*i,t[6]=r[6]*i,t[7]=0,t[8]=r[8]*s,t[9]=r[9]*s,t[10]=r[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,n=e.y,i=e.z,s=Math.cos(r),o=Math.sin(r),l=Math.cos(n),c=Math.sin(n),u=Math.cos(i),d=Math.sin(i);if(e.order==="XYZ"){const h=s*u,f=s*d,g=o*u,v=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=h-v*c,t[9]=-o*l,t[2]=v-h*c,t[6]=g+f*c,t[10]=s*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,g=c*u,v=c*d;t[0]=h+v*o,t[4]=g*o-f,t[8]=s*c,t[1]=s*d,t[5]=s*u,t[9]=-o,t[2]=f*o-g,t[6]=v+h*o,t[10]=s*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,g=c*u,v=c*d;t[0]=h-v*o,t[4]=-s*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=s*u,t[9]=v-h*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const h=s*u,f=s*d,g=o*u,v=o*d;t[0]=l*u,t[4]=g*c-f,t[8]=h*c+v,t[1]=l*d,t[5]=v*c+h,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const h=s*l,f=s*c,g=o*l,v=o*c;t[0]=l*u,t[4]=v-h*d,t[8]=g*d+f,t[1]=d,t[5]=s*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+g,t[10]=h-v*d}else if(e.order==="XZY"){const h=s*l,f=s*c,g=o*l,v=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+v,t[5]=s*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*u,t[10]=v*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Du,e,Iu)}lookAt(e,t,r){const n=this.elements;return Ft.subVectors(e,t),Ft.lengthSq()===0&&(Ft.z=1),Ft.normalize(),Rn.crossVectors(r,Ft),Rn.lengthSq()===0&&(Math.abs(r.z)===1?Ft.x+=1e-4:Ft.z+=1e-4,Ft.normalize(),Rn.crossVectors(r,Ft)),Rn.normalize(),Er.crossVectors(Ft,Rn),n[0]=Rn.x,n[4]=Er.x,n[8]=Ft.x,n[1]=Rn.y,n[5]=Er.y,n[9]=Ft.y,n[2]=Rn.z,n[6]=Er.z,n[10]=Ft.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,i=this.elements,s=r[0],o=r[4],l=r[8],c=r[12],u=r[1],d=r[5],h=r[9],f=r[13],g=r[2],v=r[6],p=r[10],m=r[14],M=r[3],S=r[7],y=r[11],U=r[15],w=n[0],b=n[4],P=n[8],E=n[12],x=n[1],L=n[5],R=n[9],I=n[13],N=n[2],H=n[6],k=n[10],Z=n[14],q=n[3],K=n[7],Y=n[11],D=n[15];return i[0]=s*w+o*x+l*N+c*q,i[4]=s*b+o*L+l*H+c*K,i[8]=s*P+o*R+l*k+c*Y,i[12]=s*E+o*I+l*Z+c*D,i[1]=u*w+d*x+h*N+f*q,i[5]=u*b+d*L+h*H+f*K,i[9]=u*P+d*R+h*k+f*Y,i[13]=u*E+d*I+h*Z+f*D,i[2]=g*w+v*x+p*N+m*q,i[6]=g*b+v*L+p*H+m*K,i[10]=g*P+v*R+p*k+m*Y,i[14]=g*E+v*I+p*Z+m*D,i[3]=M*w+S*x+y*N+U*q,i[7]=M*b+S*L+y*H+U*K,i[11]=M*P+S*R+y*k+U*Y,i[15]=M*E+S*I+y*Z+U*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],n=e[8],i=e[12],s=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],v=e[7],p=e[11],m=e[15];return g*(+i*l*d-n*c*d-i*o*h+r*c*h+n*o*f-r*l*f)+v*(+t*l*f-t*c*h+i*s*h-n*s*f+n*c*u-i*l*u)+p*(+t*c*d-t*o*f-i*s*d+r*s*f+i*o*u-r*c*u)+m*(-n*o*u-t*l*d+t*o*h+n*s*d-r*s*h+r*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],v=e[13],p=e[14],m=e[15],M=d*p*c-v*h*c+v*l*f-o*p*f-d*l*m+o*h*m,S=g*h*c-u*p*c-g*l*f+s*p*f+u*l*m-s*h*m,y=u*v*c-g*d*c+g*o*f-s*v*f-u*o*m+s*d*m,U=g*d*l-u*v*l-g*o*h+s*v*h+u*o*p-s*d*p,w=t*M+r*S+n*y+i*U;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return e[0]=M*b,e[1]=(v*h*i-d*p*i-v*n*f+r*p*f+d*n*m-r*h*m)*b,e[2]=(o*p*i-v*l*i+v*n*c-r*p*c-o*n*m+r*l*m)*b,e[3]=(d*l*i-o*h*i-d*n*c+r*h*c+o*n*f-r*l*f)*b,e[4]=S*b,e[5]=(u*p*i-g*h*i+g*n*f-t*p*f-u*n*m+t*h*m)*b,e[6]=(g*l*i-s*p*i-g*n*c+t*p*c+s*n*m-t*l*m)*b,e[7]=(s*h*i-u*l*i+u*n*c-t*h*c-s*n*f+t*l*f)*b,e[8]=y*b,e[9]=(g*d*i-u*v*i-g*r*f+t*v*f+u*r*m-t*d*m)*b,e[10]=(s*v*i-g*o*i+g*r*c-t*v*c-s*r*m+t*o*m)*b,e[11]=(u*o*i-s*d*i-u*r*c+t*d*c+s*r*f-t*o*f)*b,e[12]=U*b,e[13]=(u*v*n-g*d*n+g*r*h-t*v*h-u*r*p+t*d*p)*b,e[14]=(g*o*n-s*v*n-g*r*l+t*v*l+s*r*p-t*o*p)*b,e[15]=(s*d*n-u*o*n+u*r*l-t*d*l-s*r*h+t*o*h)*b,this}scale(e){const t=this.elements,r=e.x,n=e.y,i=e.z;return t[0]*=r,t[4]*=n,t[8]*=i,t[1]*=r,t[5]*=n,t[9]*=i,t[2]*=r,t[6]*=n,t[10]*=i,t[3]*=r,t[7]*=n,t[11]*=i,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,n))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),n=Math.sin(t),i=1-r,s=e.x,o=e.y,l=e.z,c=i*s,u=i*o;return this.set(c*s+r,c*o-n*l,c*l+n*o,0,c*o+n*l,u*o+r,u*l-n*s,0,c*l-n*o,u*l+n*s,i*l*l+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,n,i,s){return this.set(1,r,i,0,e,1,s,0,t,n,1,0,0,0,0,1),this}compose(e,t,r){const n=this.elements,i=t._x,s=t._y,o=t._z,l=t._w,c=i+i,u=s+s,d=o+o,h=i*c,f=i*u,g=i*d,v=s*u,p=s*d,m=o*d,M=l*c,S=l*u,y=l*d,U=r.x,w=r.y,b=r.z;return n[0]=(1-(v+m))*U,n[1]=(f+y)*U,n[2]=(g-S)*U,n[3]=0,n[4]=(f-y)*w,n[5]=(1-(h+m))*w,n[6]=(p+M)*w,n[7]=0,n[8]=(g+S)*b,n[9]=(p-M)*b,n[10]=(1-(h+v))*b,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,r){const n=this.elements;let i=hi.set(n[0],n[1],n[2]).length();const s=hi.set(n[4],n[5],n[6]).length(),o=hi.set(n[8],n[9],n[10]).length();this.determinant()<0&&(i=-i),e.x=n[12],e.y=n[13],e.z=n[14],Qt.copy(this);const c=1/i,u=1/s,d=1/o;return Qt.elements[0]*=c,Qt.elements[1]*=c,Qt.elements[2]*=c,Qt.elements[4]*=u,Qt.elements[5]*=u,Qt.elements[6]*=u,Qt.elements[8]*=d,Qt.elements[9]*=d,Qt.elements[10]*=d,t.setFromRotationMatrix(Qt),r.x=i,r.y=s,r.z=o,this}makePerspective(e,t,r,n,i,s,o=Sn){const l=this.elements,c=2*i/(t-e),u=2*i/(r-n),d=(t+e)/(t-e),h=(r+n)/(r-n);let f,g;if(o===Sn)f=-(s+i)/(s-i),g=-2*s*i/(s-i);else if(o===Zr)f=-s/(s-i),g=-s*i/(s-i);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,r,n,i,s,o=Sn){const l=this.elements,c=1/(t-e),u=1/(r-n),d=1/(s-i),h=(t+e)*c,f=(r+n)*u;let g,v;if(o===Sn)g=(s+i)*d,v=-2*d;else if(o===Zr)g=i*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<16;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const hi=new te,Qt=new lt,Du=new te(0,0,0),Iu=new te(1,1,1),Rn=new te,Er=new te,Ft=new te,Mo=new lt,Eo=new ar;class un{constructor(e=0,t=0,r=0,n=un.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,n=this._order){return this._x=e,this._y=t,this._z=r,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const n=e.elements,i=n[0],s=n[4],o=n[8],l=n[1],c=n[5],u=n[9],d=n[2],h=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(Dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-s,i)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,i),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,i));break;case"ZYX":this._y=Math.asin(-Dt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,i)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,i)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Dt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Mo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mo,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Eo.setFromEuler(this),this.setFromQuaternion(Eo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}un.DEFAULT_ORDER="XYZ";class zl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Fu=0;const bo=new te,di=new ar,gn=new lt,br=new te,Ji=new te,Nu=new te,Ou=new ar,To=new te(1,0,0),wo=new te(0,1,0),Ao=new te(0,0,1),Co={type:"added"},Bu={type:"removed"},fi={type:"childadded",child:null},La={type:"childremoved",child:null};class Et extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DEFAULT_UP.clone();const e=new te,t=new un,r=new ar,n=new te(1,1,1);function i(){r.setFromEuler(t,!1)}function s(){t.setFromQuaternion(r,void 0,!1)}t._onChange(i),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new lt},normalMatrix:{value:new qe}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=Et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return di.setFromAxisAngle(e,t),this.quaternion.multiply(di),this}rotateOnWorldAxis(e,t){return di.setFromAxisAngle(e,t),this.quaternion.premultiply(di),this}rotateX(e){return this.rotateOnAxis(To,e)}rotateY(e){return this.rotateOnAxis(wo,e)}rotateZ(e){return this.rotateOnAxis(Ao,e)}translateOnAxis(e,t){return bo.copy(e).applyQuaternion(this.quaternion),this.position.add(bo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(To,e)}translateY(e){return this.translateOnAxis(wo,e)}translateZ(e){return this.translateOnAxis(Ao,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?br.copy(e):br.set(e,t,r);const n=this.parent;this.updateWorldMatrix(!0,!1),Ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(Ji,br,this.up):gn.lookAt(br,Ji,this.up),this.quaternion.setFromRotationMatrix(gn),n&&(gn.extractRotation(n.matrixWorld),di.setFromRotationMatrix(gn),this.quaternion.premultiply(di.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Co),fi.child=e,this.dispatchEvent(fi),fi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bu),La.child=e,this.dispatchEvent(La),La.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Co),fi.child=e,this.dispatchEvent(fi),fi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,n=this.children.length;r<n;r++){const s=this.children[r].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,e,Nu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,Ou,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,n=t.length;r<n;r++){const i=t[r];(i.matrixWorldAutoUpdate===!0||e===!0)&&i.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let i=0,s=n.length;i<s;i++){const o=n[i];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function i(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=i(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];i(e.shapes,d)}else i(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(i(e.materials,this.material[l]));n.material=o}else n.material=i(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(i(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),d=s(e.shapes),h=s(e.skeletons),f=s(e.animations),g=s(e.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),u.length>0&&(r.images=u),d.length>0&&(r.shapes=d),h.length>0&&(r.skeletons=h),f.length>0&&(r.animations=f),g.length>0&&(r.nodes=g)}return r.object=n,r;function s(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const n=e.children[r];this.add(n.clone())}return this}}Et.DEFAULT_UP=new te(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $t=new te,vn=new te,Da=new te,_n=new te,pi=new te,mi=new te,Ro=new te,Ia=new te,Fa=new te,Na=new te;class ln{constructor(e=new te,t=new te,r=new te){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,n){n.subVectors(r,t),$t.subVectors(e,t),n.cross($t);const i=n.lengthSq();return i>0?n.multiplyScalar(1/Math.sqrt(i)):n.set(0,0,0)}static getBarycoord(e,t,r,n,i){$t.subVectors(n,t),vn.subVectors(r,t),Da.subVectors(e,t);const s=$t.dot($t),o=$t.dot(vn),l=$t.dot(Da),c=vn.dot(vn),u=vn.dot(Da),d=s*c-o*o;if(d===0)return i.set(0,0,0),null;const h=1/d,f=(c*l-o*u)*h,g=(s*u-o*l)*h;return i.set(1-f-g,g,f)}static containsPoint(e,t,r,n){return this.getBarycoord(e,t,r,n,_n)===null?!1:_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getInterpolation(e,t,r,n,i,s,o,l){return this.getBarycoord(e,t,r,n,_n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(i,_n.x),l.addScaledVector(s,_n.y),l.addScaledVector(o,_n.z),l)}static isFrontFacing(e,t,r,n){return $t.subVectors(r,t),vn.subVectors(e,t),$t.cross(vn).dot(n)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,n){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,r,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $t.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),$t.cross(vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ln.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,n,i){return ln.getInterpolation(e,this.a,this.b,this.c,t,r,n,i)}containsPoint(e){return ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,n=this.b,i=this.c;let s,o;pi.subVectors(n,r),mi.subVectors(i,r),Ia.subVectors(e,r);const l=pi.dot(Ia),c=mi.dot(Ia);if(l<=0&&c<=0)return t.copy(r);Fa.subVectors(e,n);const u=pi.dot(Fa),d=mi.dot(Fa);if(u>=0&&d<=u)return t.copy(n);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(r).addScaledVector(pi,s);Na.subVectors(e,i);const f=pi.dot(Na),g=mi.dot(Na);if(g>=0&&f<=g)return t.copy(i);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(r).addScaledVector(mi,o);const p=u*g-f*d;if(p<=0&&d-u>=0&&f-g>=0)return Ro.subVectors(i,n),o=(d-u)/(d-u+(f-g)),t.copy(n).addScaledVector(Ro,o);const m=1/(p+v+h);return s=v*m,o=h*m,t.copy(r).addScaledVector(pi,s).addScaledVector(mi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Hl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pn={h:0,s:0,l:0},Tr={h:0,s:0,l:0};function Oa(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class Ye{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,r,n=et.workingColorSpace){return this.r=e,this.g=t,this.b=r,et.toWorkingColorSpace(this,n),this}setHSL(e,t,r,n=et.workingColorSpace){if(e=Mu(e,1),t=Dt(t,0,1),r=Dt(r,0,1),t===0)this.r=this.g=this.b=r;else{const i=r<=.5?r*(1+t):r+t-r*t,s=2*r-i;this.r=Oa(s,i,e+1/3),this.g=Oa(s,i,e),this.b=Oa(s,i,e-1/3)}return et.toWorkingColorSpace(this,n),this}setStyle(e,t=sn){function r(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let i;const s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=n[1],s=i.length;if(s===3)return this.setRGB(parseInt(i.charAt(0),16)/15,parseInt(i.charAt(1),16)/15,parseInt(i.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(i,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=sn){const r=Hl[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}copyLinearToSRGB(e){return this.r=ba(e.r),this.g=ba(e.g),this.b=ba(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=sn){return et.fromWorkingColorSpace(Mt.copy(this),e),Math.round(Dt(Mt.r*255,0,255))*65536+Math.round(Dt(Mt.g*255,0,255))*256+Math.round(Dt(Mt.b*255,0,255))}getHexString(e=sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(Mt.copy(this),t);const r=Mt.r,n=Mt.g,i=Mt.b,s=Math.max(r,n,i),o=Math.min(r,n,i);let l,c;const u=(o+s)/2;if(o===s)l=0,c=0;else{const d=s-o;switch(c=u<=.5?d/(s+o):d/(2-s-o),s){case r:l=(n-i)/d+(n<i?6:0);break;case n:l=(i-r)/d+2;break;case i:l=(r-n)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(Mt.copy(this),t),e.r=Mt.r,e.g=Mt.g,e.b=Mt.b,e}getStyle(e=sn){et.fromWorkingColorSpace(Mt.copy(this),e);const t=Mt.r,r=Mt.g,n=Mt.b;return e!==sn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(n*255)})`}offsetHSL(e,t,r){return this.getHSL(Pn),this.setHSL(Pn.h+e,Pn.s+t,Pn.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Pn),e.getHSL(Tr);const r=Ma(Pn.h,Tr.h,t),n=Ma(Pn.s,Tr.s,t),i=Ma(Pn.l,Tr.l,t);return this.setHSL(r,n,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,n=this.b,i=e.elements;return this.r=i[0]*t+i[3]*r+i[6]*n,this.g=i[1]*t+i[4]*r+i[7]*n,this.b=i[2]*t+i[5]*r+i[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mt=new Ye;Ye.NAMES=Hl;let ku=0;class sr extends Fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=rr(),this.name="",this.type="Material",this.blending=wi,this.side=yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=es,this.blendDst=ts,this.blendEquation=Zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=si,this.stencilZFail=si,this.stencilZPass=si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(r):n&&n.isVector3&&r&&r.isVector3?n.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==wi&&(r.blending=this.blending),this.side!==yn&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==es&&(r.blendSrc=this.blendSrc),this.blendDst!==ts&&(r.blendDst=this.blendDst),this.blendEquation!==Zn&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==qr&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mo&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==si&&(r.stencilFail=this.stencilFail),this.stencilZFail!==si&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==si&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function n(i){const s=[];for(const o in i){const l=i[o];delete l.metadata,s.push(l)}return s}if(t){const i=n(e.textures),s=n(e.images);i.length>0&&(r.textures=i),s.length>0&&(r.images=s)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const n=t.length;r=new Array(n);for(let i=0;i!==n;++i)r[i]=t[i].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ms extends sr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=fs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ct=new te,wr=new Je;class nn{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=go,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Bl("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let n=0,i=this.itemSize;n<i;n++)this.array[e+n]=t.array[r+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)wr.fromBufferAttribute(this,t),wr.applyMatrix3(e),this.setXY(t,wr.x,wr.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix3(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix4(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)ct.fromBufferAttribute(this,t),ct.applyNormalMatrix(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)ct.fromBufferAttribute(this,t),ct.transformDirection(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Yi(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Lt(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,n){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),r=Lt(r,this.array),n=Lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this}setXYZW(e,t,r,n,i){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),r=Lt(r,this.array),n=Lt(n,this.array),i=Lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==go&&(e.usage=this.usage),e}}class Vl extends nn{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Wl extends nn{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class rn extends nn{constructor(e,t,r){super(new Float32Array(e),t,r)}}let Gu=0;const Vt=new lt,Ba=new Et,gi=new te,Nt=new tn,Zi=new tn,gt=new te;class hn extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gu++}),this.uuid=rr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ol(e)?Wl:Vl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const i=new qe().getNormalMatrix(e);r.applyNormalMatrix(i),r.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vt.makeRotationFromQuaternion(e),this.applyMatrix4(Vt),this}rotateX(e){return Vt.makeRotationX(e),this.applyMatrix4(Vt),this}rotateY(e){return Vt.makeRotationY(e),this.applyMatrix4(Vt),this}rotateZ(e){return Vt.makeRotationZ(e),this.applyMatrix4(Vt),this}translate(e,t,r){return Vt.makeTranslation(e,t,r),this.applyMatrix4(Vt),this}scale(e,t,r){return Vt.makeScale(e,t,r),this.applyMatrix4(Vt),this}lookAt(e){return Ba.lookAt(e),Ba.updateMatrix(),this.applyMatrix4(Ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gi).negate(),this.translate(gi.x,gi.y,gi.z),this}setFromPoints(e){const t=[];for(let r=0,n=e.length;r<n;r++){const i=e[r];t.push(i.x,i.y,i.z||0)}return this.setAttribute("position",new rn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,n=t.length;r<n;r++){const i=t[r];Nt.setFromBufferAttribute(i),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new na);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){const r=this.boundingSphere.center;if(Nt.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const o=t[i];Zi.setFromBufferAttribute(o),this.morphTargetsRelative?(gt.addVectors(Nt.min,Zi.min),Nt.expandByPoint(gt),gt.addVectors(Nt.max,Zi.max),Nt.expandByPoint(gt)):(Nt.expandByPoint(Zi.min),Nt.expandByPoint(Zi.max))}Nt.getCenter(r);let n=0;for(let i=0,s=e.count;i<s;i++)gt.fromBufferAttribute(e,i),n=Math.max(n,r.distanceToSquared(gt));if(t)for(let i=0,s=t.length;i<s;i++){const o=t[i],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)gt.fromBufferAttribute(o,c),l&&(gi.fromBufferAttribute(e,c),gt.add(gi)),n=Math.max(n,r.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,n=t.normal,i=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*r.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<r.count;P++)o[P]=new te,l[P]=new te;const c=new te,u=new te,d=new te,h=new Je,f=new Je,g=new Je,v=new te,p=new te;function m(P,E,x){c.fromBufferAttribute(r,P),u.fromBufferAttribute(r,E),d.fromBufferAttribute(r,x),h.fromBufferAttribute(i,P),f.fromBufferAttribute(i,E),g.fromBufferAttribute(i,x),u.sub(c),d.sub(c),f.sub(h),g.sub(h);const L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(L),p.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(L),o[P].add(v),o[E].add(v),o[x].add(v),l[P].add(p),l[E].add(p),l[x].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let P=0,E=M.length;P<E;++P){const x=M[P],L=x.start,R=x.count;for(let I=L,N=L+R;I<N;I+=3)m(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const S=new te,y=new te,U=new te,w=new te;function b(P){U.fromBufferAttribute(n,P),w.copy(U);const E=o[P];S.copy(E),S.sub(U.multiplyScalar(U.dot(E))).normalize(),y.crossVectors(w,E);const L=y.dot(l[P])<0?-1:1;s.setXYZW(P,S.x,S.y,S.z,L)}for(let P=0,E=M.length;P<E;++P){const x=M[P],L=x.start,R=x.count;for(let I=L,N=L+R;I<N;I+=3)b(e.getX(I+0)),b(e.getX(I+1)),b(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new nn(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let h=0,f=r.count;h<f;h++)r.setXYZ(h,0,0,0);const n=new te,i=new te,s=new te,o=new te,l=new te,c=new te,u=new te,d=new te;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),v=e.getX(h+1),p=e.getX(h+2);n.fromBufferAttribute(t,g),i.fromBufferAttribute(t,v),s.fromBufferAttribute(t,p),u.subVectors(s,i),d.subVectors(n,i),u.cross(d),o.fromBufferAttribute(r,g),l.fromBufferAttribute(r,v),c.fromBufferAttribute(r,p),o.add(u),l.add(u),c.add(u),r.setXYZ(g,o.x,o.y,o.z),r.setXYZ(v,l.x,l.y,l.z),r.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)n.fromBufferAttribute(t,h+0),i.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),u.subVectors(s,i),d.subVectors(n,i),u.cross(d),r.setXYZ(h+0,u.x,u.y,u.z),r.setXYZ(h+1,u.x,u.y,u.z),r.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let f=0,g=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*u;for(let m=0;m<u;m++)h[g++]=c[f++]}return new nn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new hn,r=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,r);t.setAttribute(o,c)}const i=this.morphAttributes;for(const o in i){const l=[],c=i[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,r);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const l in r){const c=r[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let i=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(n[l]=u,i=!0)}i&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const n=e.attributes;for(const c in n){const u=n[c];this.setAttribute(c,u.clone(t))}const i=e.morphAttributes;for(const c in i){const u=[],d=i[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Po=new lt,Wn=new Lu,Ar=new na,Uo=new te,vi=new te,_i=new te,xi=new te,ka=new te,Cr=new te,Rr=new Je,Pr=new Je,Ur=new Je,Lo=new te,Do=new te,Io=new te,Lr=new te,Dr=new te;class xt extends Et{constructor(e=new hn,t=new ms){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const n=t[r[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){const o=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}getVertexPosition(e,t){const r=this.geometry,n=r.attributes.position,i=r.morphAttributes.position,s=r.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(i&&o){Cr.set(0,0,0);for(let l=0,c=i.length;l<c;l++){const u=o[l],d=i[l];u!==0&&(ka.fromBufferAttribute(d,e),s?Cr.addScaledVector(ka,u):Cr.addScaledVector(ka.sub(t),u))}t.add(Cr)}return t}raycast(e,t){const r=this.geometry,n=this.material,i=this.matrixWorld;n!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ar.copy(r.boundingSphere),Ar.applyMatrix4(i),Wn.copy(e.ray).recast(e.near),!(Ar.containsPoint(Wn.origin)===!1&&(Wn.intersectSphere(Ar,Uo)===null||Wn.origin.distanceToSquared(Uo)>(e.far-e.near)**2))&&(Po.copy(i).invert(),Wn.copy(e.ray).applyMatrix4(Po),!(r.boundingBox!==null&&Wn.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Wn)))}_computeIntersections(e,t,r){let n;const i=this.geometry,s=this.material,o=i.index,l=i.attributes.position,c=i.attributes.uv,u=i.attributes.uv1,d=i.attributes.normal,h=i.groups,f=i.drawRange;if(o!==null)if(Array.isArray(s))for(let g=0,v=h.length;g<v;g++){const p=h[g],m=s[p.materialIndex],M=Math.max(p.start,f.start),S=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let y=M,U=S;y<U;y+=3){const w=o.getX(y),b=o.getX(y+1),P=o.getX(y+2);n=Ir(this,m,e,r,c,u,d,w,b,P),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=p.materialIndex,t.push(n))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){const M=o.getX(p),S=o.getX(p+1),y=o.getX(p+2);n=Ir(this,s,e,r,c,u,d,M,S,y),n&&(n.faceIndex=Math.floor(p/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,v=h.length;g<v;g++){const p=h[g],m=s[p.materialIndex],M=Math.max(p.start,f.start),S=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=M,U=S;y<U;y+=3){const w=y,b=y+1,P=y+2;n=Ir(this,m,e,r,c,u,d,w,b,P),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=p.materialIndex,t.push(n))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){const M=p,S=p+1,y=p+2;n=Ir(this,s,e,r,c,u,d,M,S,y),n&&(n.faceIndex=Math.floor(p/3),t.push(n))}}}}function zu(a,e,t,r,n,i,s,o){let l;if(e.side===wt?l=r.intersectTriangle(s,i,n,!0,o):l=r.intersectTriangle(n,i,s,e.side===yn,o),l===null)return null;Dr.copy(o),Dr.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(Dr);return c<t.near||c>t.far?null:{distance:c,point:Dr.clone(),object:a}}function Ir(a,e,t,r,n,i,s,o,l,c){a.getVertexPosition(o,vi),a.getVertexPosition(l,_i),a.getVertexPosition(c,xi);const u=zu(a,e,t,r,vi,_i,xi,Lr);if(u){n&&(Rr.fromBufferAttribute(n,o),Pr.fromBufferAttribute(n,l),Ur.fromBufferAttribute(n,c),u.uv=ln.getInterpolation(Lr,vi,_i,xi,Rr,Pr,Ur,new Je)),i&&(Rr.fromBufferAttribute(i,o),Pr.fromBufferAttribute(i,l),Ur.fromBufferAttribute(i,c),u.uv1=ln.getInterpolation(Lr,vi,_i,xi,Rr,Pr,Ur,new Je)),s&&(Lo.fromBufferAttribute(s,o),Do.fromBufferAttribute(s,l),Io.fromBufferAttribute(s,c),u.normal=ln.getInterpolation(Lr,vi,_i,xi,Lo,Do,Io,new te),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new te,materialIndex:0};ln.getNormal(vi,_i,xi,d.normal),u.face=d}return u}class Nn extends hn{constructor(e=1,t=1,r=1,n=1,i=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:n,heightSegments:i,depthSegments:s};const o=this;n=Math.floor(n),i=Math.floor(i),s=Math.floor(s);const l=[],c=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,r,t,e,s,i,0),g("z","y","x",1,-1,r,t,-e,s,i,1),g("x","z","y",1,1,e,r,t,n,s,2),g("x","z","y",1,-1,e,r,-t,n,s,3),g("x","y","z",1,-1,e,t,r,n,i,4),g("x","y","z",-1,-1,e,t,-r,n,i,5),this.setIndex(l),this.setAttribute("position",new rn(c,3)),this.setAttribute("normal",new rn(u,3)),this.setAttribute("uv",new rn(d,2));function g(v,p,m,M,S,y,U,w,b,P,E){const x=y/b,L=U/P,R=y/2,I=U/2,N=w/2,H=b+1,k=P+1;let Z=0,q=0;const K=new te;for(let Y=0;Y<k;Y++){const D=Y*L-I;for(let V=0;V<H;V++){const ee=V*x-R;K[v]=ee*M,K[p]=D*S,K[m]=N,c.push(K.x,K.y,K.z),K[v]=0,K[p]=0,K[m]=w>0?1:-1,u.push(K.x,K.y,K.z),d.push(V/b),d.push(1-Y/P),Z+=1}}for(let Y=0;Y<P;Y++)for(let D=0;D<b;D++){const V=h+D+H*Y,ee=h+D+H*(Y+1),F=h+(D+1)+H*(Y+1),O=h+(D+1)+H*Y;l.push(V,ee,O),l.push(ee,F,O),q+=6}o.addGroup(f,q,E),f+=q,h+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ii(a){const e={};for(const t in a){e[t]={};for(const r in a[t]){const n=a[t][r];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=n.clone():Array.isArray(n)?e[t][r]=n.slice():e[t][r]=n}}return e}function Tt(a){const e={};for(let t=0;t<a.length;t++){const r=Ii(a[t]);for(const n in r)e[n]=r[n]}return e}function Hu(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function Xl(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const ql={clone:Ii,merge:Tt};var Vu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bn extends sr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vu,this.fragmentShader=Wu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ii(e.uniforms),this.uniformsGroups=Hu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const s=this.uniforms[n].value;s&&s.isTexture?t.uniforms[n]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[n]={type:"m4",value:s.toArray()}:t.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const n in this.extensions)this.extensions[n]===!0&&(r[n]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Yl extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=Sn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Un=new te,Fo=new Je,No=new Je;class Wt extends Yl{constructor(e=50,t=1,r=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ss*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ya*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ss*2*Math.atan(Math.tan(ya*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Un.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Un.x,Un.y).multiplyScalar(-e/Un.z),Un.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Un.x,Un.y).multiplyScalar(-e/Un.z)}getViewSize(e,t){return this.getViewBounds(e,Fo,No),t.subVectors(No,Fo)}setViewOffset(e,t,r,n,i,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=i,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ya*.5*this.fov)/this.zoom,r=2*t,n=this.aspect*r,i=-.5*n;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;i+=s.offsetX*n/l,t-=s.offsetY*r/c,n*=s.width/l,r*=s.height/c}const o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+n,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Si=-90,yi=1;class Xu extends Et{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Wt(Si,yi,e,t);n.layers=this.layers,this.add(n);const i=new Wt(Si,yi,e,t);i.layers=this.layers,this.add(i);const s=new Wt(Si,yi,e,t);s.layers=this.layers,this.add(s);const o=new Wt(Si,yi,e,t);o.layers=this.layers,this.add(o);const l=new Wt(Si,yi,e,t);l.layers=this.layers,this.add(l);const c=new Wt(Si,yi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,n,i,s,o,l]=t;for(const c of t)this.remove(c);if(e===Sn)r.up.set(0,1,0),r.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Zr)r.up.set(0,-1,0),r.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,s,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,n),e.render(t,i),e.setRenderTarget(r,1,n),e.render(t,s),e.setRenderTarget(r,2,n),e.render(t,o),e.setRenderTarget(r,3,n),e.render(t,l),e.setRenderTarget(r,4,n),e.render(t,c),r.texture.generateMipmaps=v,e.setRenderTarget(r,5,n),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,r.texture.needsPMREMUpdate=!0}}class jl extends At{constructor(e,t,r,n,i,s,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ri,super(e,t,r,n,i,s,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qu extends ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},n=[r,r,r,r,r,r];this.texture=new jl(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ot}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Nn(5,5,5),i=new Bn({name:"CubemapFromEquirect",uniforms:Ii(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:wt,blending:In});i.uniforms.tEquirect.value=t;const s=new xt(n,i),o=t.minFilter;return t.minFilter===ei&&(t.minFilter=Ot),new Xu(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,r,n){const i=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,r,n);e.setRenderTarget(i)}}const Ga=new te,Yu=new te,ju=new qe;class Kn{constructor(e=new te(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,n){return this.normal.set(e,t,r),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const n=Ga.subVectors(r,t).cross(Yu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Ga),n=this.normal.dot(r);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const i=-(e.start.dot(this.normal)+this.constant)/n;return i<0||i>1?null:t.copy(e.start).addScaledVector(r,i)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||ju.getNormalMatrix(e),n=this.coplanarPoint(Ga).applyMatrix4(e),i=this.normal.applyMatrix3(r).normalize();return this.constant=-n.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xn=new na,Fr=new te;class gs{constructor(e=new Kn,t=new Kn,r=new Kn,n=new Kn,i=new Kn,s=new Kn){this.planes=[e,t,r,n,i,s]}set(e,t,r,n,i,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(r),o[3].copy(n),o[4].copy(i),o[5].copy(s),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Sn){const r=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],l=n[3],c=n[4],u=n[5],d=n[6],h=n[7],f=n[8],g=n[9],v=n[10],p=n[11],m=n[12],M=n[13],S=n[14],y=n[15];if(r[0].setComponents(l-i,h-c,p-f,y-m).normalize(),r[1].setComponents(l+i,h+c,p+f,y+m).normalize(),r[2].setComponents(l+s,h+u,p+g,y+M).normalize(),r[3].setComponents(l-s,h-u,p-g,y-M).normalize(),r[4].setComponents(l-o,h-d,p-v,y-S).normalize(),t===Sn)r[5].setComponents(l+o,h+d,p+v,y+S).normalize();else if(t===Zr)r[5].setComponents(o,d,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xn)}intersectsSprite(e){return Xn.center.set(0,0,0),Xn.radius=.7071067811865476,Xn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xn)}intersectsSphere(e){const t=this.planes,r=e.center,n=-e.radius;for(let i=0;i<6;i++)if(t[i].distanceToPoint(r)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const n=t[r];if(Fr.x=n.normal.x>0?e.max.x:e.min.x,Fr.y=n.normal.y>0?e.max.y:e.min.y,Fr.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Fr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Kl(){let a=null,e=!1,t=null,r=null;function n(i,s){t(i,s),r=a.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(r=a.requestAnimationFrame(n),e=!0)},stop:function(){a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(i){t=i},setContext:function(i){a=i}}}function Ku(a){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=a.createBuffer();a.bindBuffer(l,h),a.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=a.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=a.HALF_FLOAT:f=a.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=a.SHORT;else if(c instanceof Uint32Array)f=a.UNSIGNED_INT;else if(c instanceof Int32Array)f=a.INT;else if(c instanceof Int8Array)f=a.BYTE;else if(c instanceof Uint8Array)f=a.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function r(o,l,c){const u=l.array,d=l._updateRange,h=l.updateRanges;if(a.bindBuffer(c,o),d.count===-1&&h.length===0&&a.bufferSubData(c,0,u),h.length!==0){for(let f=0,g=h.length;f<g;f++){const v=h[f];a.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}d.count!==-1&&(a.bufferSubData(c,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function i(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(a.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,o,l),c.version=o.version}}return{get:n,remove:i,update:s}}class ii extends hn{constructor(e=1,t=1,r=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:n};const i=e/2,s=t/2,o=Math.floor(r),l=Math.floor(n),c=o+1,u=l+1,d=e/o,h=t/l,f=[],g=[],v=[],p=[];for(let m=0;m<u;m++){const M=m*h-s;for(let S=0;S<c;S++){const y=S*d-i;g.push(y,-M,0),v.push(0,0,1),p.push(S/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){const S=M+c*m,y=M+c*(m+1),U=M+1+c*(m+1),w=M+1+c*m;f.push(S,y,w),f.push(y,U,w)}this.setIndex(f),this.setAttribute("position",new rn(g,3)),this.setAttribute("normal",new rn(v,3)),this.setAttribute("uv",new rn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ii(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ju=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zu=`#ifdef USE_ALPHAHASH
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
#endif`,Qu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$u=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,th=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nh=`#ifdef USE_AOMAP
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
#endif`,ih=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rh=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,ah=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,sh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,oh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ch=`#ifdef USE_IRIDESCENCE
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
#endif`,uh=`#ifdef USE_BUMPMAP
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
#endif`,hh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ph=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_h=`#if defined( USE_COLOR_ALPHA )
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
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,xh=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Sh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yh=`vec3 transformedNormal = objectNormal;
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
#endif`,Mh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Eh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Th=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ah=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Ch=`#ifdef USE_ENVMAP
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
#endif`,Rh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ph=`#ifdef USE_ENVMAP
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
#endif`,Uh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lh=`#ifdef USE_ENVMAP
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
#endif`,Dh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ih=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Oh=`#ifdef USE_GRADIENTMAP
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
}`,Bh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zh=`uniform bool receiveShadow;
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
#endif`,Hh=`#ifdef USE_ENVMAP
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
#endif`,Vh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yh=`PhysicalMaterial material;
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
#endif`,jh=`struct PhysicalMaterial {
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
}`,Kh=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Jh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$h=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ed=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,td=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,id=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ad=`#if defined( USE_POINTS_UV )
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
#endif`,sd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,od=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ld=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ud=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hd=`#ifdef USE_MORPHTARGETS
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
#endif`,dd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,md=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_d=`#ifdef USE_NORMALMAP
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
#endif`,xd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Md=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ed=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,Td=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ad=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ud=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
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
		return shadow;
	}
#endif`,Ld=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Dd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Id=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Fd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nd=`#ifdef USE_SKINNING
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
#endif`,Od=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bd=`#ifdef USE_SKINNING
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
#endif`,kd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hd=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vd=`#ifdef USE_TRANSMISSION
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
#endif`,Wd=`#ifdef USE_TRANSMISSION
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
#endif`,Xd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jd=`uniform sampler2D t2D;
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
}`,Zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$d=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ef=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tf=`#include <common>
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
}`,nf=`#if DEPTH_PACKING == 3200
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
	#endif
}`,rf=`#define DISTANCE
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
}`,af=`#define DISTANCE
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
}`,sf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,of=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lf=`uniform float scale;
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
}`,cf=`uniform vec3 diffuse;
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
}`,uf=`#include <common>
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
}`,hf=`uniform vec3 diffuse;
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
}`,df=`#define LAMBERT
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
}`,ff=`#define LAMBERT
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
}`,pf=`#define MATCAP
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
}`,mf=`#define MATCAP
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
}`,gf=`#define NORMAL
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
}`,vf=`#define NORMAL
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
}`,_f=`#define PHONG
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
}`,xf=`#define PHONG
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
}`,Sf=`#define STANDARD
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
}`,yf=`#define STANDARD
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
}`,Mf=`#define TOON
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
}`,Ef=`#define TOON
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
}`,bf=`uniform float size;
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
}`,Tf=`uniform vec3 diffuse;
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
}`,wf=`#include <common>
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
}`,Af=`uniform vec3 color;
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
}`,Cf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Rf=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:Ju,alphahash_pars_fragment:Zu,alphamap_fragment:Qu,alphamap_pars_fragment:$u,alphatest_fragment:eh,alphatest_pars_fragment:th,aomap_fragment:nh,aomap_pars_fragment:ih,batching_pars_vertex:rh,batching_vertex:ah,begin_vertex:sh,beginnormal_vertex:oh,bsdfs:lh,iridescence_fragment:ch,bumpmap_pars_fragment:uh,clipping_planes_fragment:hh,clipping_planes_pars_fragment:dh,clipping_planes_pars_vertex:fh,clipping_planes_vertex:ph,color_fragment:mh,color_pars_fragment:gh,color_pars_vertex:vh,color_vertex:_h,common:xh,cube_uv_reflection_fragment:Sh,defaultnormal_vertex:yh,displacementmap_pars_vertex:Mh,displacementmap_vertex:Eh,emissivemap_fragment:bh,emissivemap_pars_fragment:Th,colorspace_fragment:wh,colorspace_pars_fragment:Ah,envmap_fragment:Ch,envmap_common_pars_fragment:Rh,envmap_pars_fragment:Ph,envmap_pars_vertex:Uh,envmap_physical_pars_fragment:Hh,envmap_vertex:Lh,fog_vertex:Dh,fog_pars_vertex:Ih,fog_fragment:Fh,fog_pars_fragment:Nh,gradientmap_pars_fragment:Oh,lightmap_pars_fragment:Bh,lights_lambert_fragment:kh,lights_lambert_pars_fragment:Gh,lights_pars_begin:zh,lights_toon_fragment:Vh,lights_toon_pars_fragment:Wh,lights_phong_fragment:Xh,lights_phong_pars_fragment:qh,lights_physical_fragment:Yh,lights_physical_pars_fragment:jh,lights_fragment_begin:Kh,lights_fragment_maps:Jh,lights_fragment_end:Zh,logdepthbuf_fragment:Qh,logdepthbuf_pars_fragment:$h,logdepthbuf_pars_vertex:ed,logdepthbuf_vertex:td,map_fragment:nd,map_pars_fragment:id,map_particle_fragment:rd,map_particle_pars_fragment:ad,metalnessmap_fragment:sd,metalnessmap_pars_fragment:od,morphinstance_vertex:ld,morphcolor_vertex:cd,morphnormal_vertex:ud,morphtarget_pars_vertex:hd,morphtarget_vertex:dd,normal_fragment_begin:fd,normal_fragment_maps:pd,normal_pars_fragment:md,normal_pars_vertex:gd,normal_vertex:vd,normalmap_pars_fragment:_d,clearcoat_normal_fragment_begin:xd,clearcoat_normal_fragment_maps:Sd,clearcoat_pars_fragment:yd,iridescence_pars_fragment:Md,opaque_fragment:Ed,packing:bd,premultiplied_alpha_fragment:Td,project_vertex:wd,dithering_fragment:Ad,dithering_pars_fragment:Cd,roughnessmap_fragment:Rd,roughnessmap_pars_fragment:Pd,shadowmap_pars_fragment:Ud,shadowmap_pars_vertex:Ld,shadowmap_vertex:Dd,shadowmask_pars_fragment:Id,skinbase_vertex:Fd,skinning_pars_vertex:Nd,skinning_vertex:Od,skinnormal_vertex:Bd,specularmap_fragment:kd,specularmap_pars_fragment:Gd,tonemapping_fragment:zd,tonemapping_pars_fragment:Hd,transmission_fragment:Vd,transmission_pars_fragment:Wd,uv_pars_fragment:Xd,uv_pars_vertex:qd,uv_vertex:Yd,worldpos_vertex:jd,background_vert:Kd,background_frag:Jd,backgroundCube_vert:Zd,backgroundCube_frag:Qd,cube_vert:$d,cube_frag:ef,depth_vert:tf,depth_frag:nf,distanceRGBA_vert:rf,distanceRGBA_frag:af,equirect_vert:sf,equirect_frag:of,linedashed_vert:lf,linedashed_frag:cf,meshbasic_vert:uf,meshbasic_frag:hf,meshlambert_vert:df,meshlambert_frag:ff,meshmatcap_vert:pf,meshmatcap_frag:mf,meshnormal_vert:gf,meshnormal_frag:vf,meshphong_vert:_f,meshphong_frag:xf,meshphysical_vert:Sf,meshphysical_frag:yf,meshtoon_vert:Mf,meshtoon_frag:Ef,points_vert:bf,points_frag:Tf,shadow_vert:wf,shadow_frag:Af,sprite_vert:Cf,sprite_frag:Rf},Re={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},on={basic:{uniforms:Tt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Tt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Tt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Tt([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Tt([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Tt([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Tt([Re.points,Re.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Tt([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Tt([Re.common,Re.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Tt([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Tt([Re.sprite,Re.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Tt([Re.common,Re.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Tt([Re.lights,Re.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};on.physical={uniforms:Tt([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Nr={r:0,b:0,g:0},qn=new un,Pf=new lt;function Uf(a,e,t,r,n,i,s){const o=new Ye(0);let l=i===!0?0:1,c,u,d=null,h=0,f=null;function g(M){let S=M.isScene===!0?M.background:null;return S&&S.isTexture&&(S=(M.backgroundBlurriness>0?t:e).get(S)),S}function v(M){let S=!1;const y=g(M);y===null?m(o,l):y&&y.isColor&&(m(y,1),S=!0);const U=a.xr.getEnvironmentBlendMode();U==="additive"?r.buffers.color.setClear(0,0,0,1,s):U==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,s),(a.autoClear||S)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function p(M,S){const y=g(S);y&&(y.isCubeTexture||y.mapping===$r)?(u===void 0&&(u=new xt(new Nn(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:Ii(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:wt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(U,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),qn.copy(S.backgroundRotation),qn.x*=-1,qn.y*=-1,qn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(qn.y*=-1,qn.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Pf.makeRotationFromEuler(qn)),u.material.toneMapped=et.getTransfer(y.colorSpace)!==rt,(d!==y||h!==y.version||f!==a.toneMapping)&&(u.material.needsUpdate=!0,d=y,h=y.version,f=a.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new xt(new ii(2,2),new Bn({name:"BackgroundMaterial",uniforms:Ii(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=et.getTransfer(y.colorSpace)!==rt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||h!==y.version||f!==a.toneMapping)&&(c.material.needsUpdate=!0,d=y,h=y.version,f=a.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,S){M.getRGB(Nr,Xl(a)),r.buffers.color.setClear(Nr.r,Nr.g,Nr.b,S,s)}return{getClearColor:function(){return o},setClearColor:function(M,S=1){o.set(M),l=S,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,m(o,l)},render:v,addToRenderList:p}}function Lf(a,e){const t=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},n=h(null);let i=n,s=!1;function o(x,L,R,I,N){let H=!1;const k=d(I,R,L);i!==k&&(i=k,c(i.object)),H=f(x,I,R,N),H&&g(x,I,R,N),N!==null&&e.update(N,a.ELEMENT_ARRAY_BUFFER),(H||s)&&(s=!1,y(x,L,R,I),N!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return a.createVertexArray()}function c(x){return a.bindVertexArray(x)}function u(x){return a.deleteVertexArray(x)}function d(x,L,R){const I=R.wireframe===!0;let N=r[x.id];N===void 0&&(N={},r[x.id]=N);let H=N[L.id];H===void 0&&(H={},N[L.id]=H);let k=H[I];return k===void 0&&(k=h(l()),H[I]=k),k}function h(x){const L=[],R=[],I=[];for(let N=0;N<t;N++)L[N]=0,R[N]=0,I[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:R,attributeDivisors:I,object:x,attributes:{},index:null}}function f(x,L,R,I){const N=i.attributes,H=L.attributes;let k=0;const Z=R.getAttributes();for(const q in Z)if(Z[q].location>=0){const Y=N[q];let D=H[q];if(D===void 0&&(q==="instanceMatrix"&&x.instanceMatrix&&(D=x.instanceMatrix),q==="instanceColor"&&x.instanceColor&&(D=x.instanceColor)),Y===void 0||Y.attribute!==D||D&&Y.data!==D.data)return!0;k++}return i.attributesNum!==k||i.index!==I}function g(x,L,R,I){const N={},H=L.attributes;let k=0;const Z=R.getAttributes();for(const q in Z)if(Z[q].location>=0){let Y=H[q];Y===void 0&&(q==="instanceMatrix"&&x.instanceMatrix&&(Y=x.instanceMatrix),q==="instanceColor"&&x.instanceColor&&(Y=x.instanceColor));const D={};D.attribute=Y,Y&&Y.data&&(D.data=Y.data),N[q]=D,k++}i.attributes=N,i.attributesNum=k,i.index=I}function v(){const x=i.newAttributes;for(let L=0,R=x.length;L<R;L++)x[L]=0}function p(x){m(x,0)}function m(x,L){const R=i.newAttributes,I=i.enabledAttributes,N=i.attributeDivisors;R[x]=1,I[x]===0&&(a.enableVertexAttribArray(x),I[x]=1),N[x]!==L&&(a.vertexAttribDivisor(x,L),N[x]=L)}function M(){const x=i.newAttributes,L=i.enabledAttributes;for(let R=0,I=L.length;R<I;R++)L[R]!==x[R]&&(a.disableVertexAttribArray(R),L[R]=0)}function S(x,L,R,I,N,H,k){k===!0?a.vertexAttribIPointer(x,L,R,N,H):a.vertexAttribPointer(x,L,R,I,N,H)}function y(x,L,R,I){v();const N=I.attributes,H=R.getAttributes(),k=L.defaultAttributeValues;for(const Z in H){const q=H[Z];if(q.location>=0){let K=N[Z];if(K===void 0&&(Z==="instanceMatrix"&&x.instanceMatrix&&(K=x.instanceMatrix),Z==="instanceColor"&&x.instanceColor&&(K=x.instanceColor)),K!==void 0){const Y=K.normalized,D=K.itemSize,V=e.get(K);if(V===void 0)continue;const ee=V.buffer,F=V.type,O=V.bytesPerElement,$=F===a.INT||F===a.UNSIGNED_INT||K.gpuType===Cl;if(K.isInterleavedBufferAttribute){const z=K.data,ae=z.stride,fe=K.offset;if(z.isInstancedInterleavedBuffer){for(let xe=0;xe<q.locationSize;xe++)m(q.location+xe,z.meshPerAttribute);x.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let xe=0;xe<q.locationSize;xe++)p(q.location+xe);a.bindBuffer(a.ARRAY_BUFFER,ee);for(let xe=0;xe<q.locationSize;xe++)S(q.location+xe,D/q.locationSize,F,Y,ae*O,(fe+D/q.locationSize*xe)*O,$)}else{if(K.isInstancedBufferAttribute){for(let z=0;z<q.locationSize;z++)m(q.location+z,K.meshPerAttribute);x.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let z=0;z<q.locationSize;z++)p(q.location+z);a.bindBuffer(a.ARRAY_BUFFER,ee);for(let z=0;z<q.locationSize;z++)S(q.location+z,D/q.locationSize,F,Y,D*O,D/q.locationSize*z*O,$)}}else if(k!==void 0){const Y=k[Z];if(Y!==void 0)switch(Y.length){case 2:a.vertexAttrib2fv(q.location,Y);break;case 3:a.vertexAttrib3fv(q.location,Y);break;case 4:a.vertexAttrib4fv(q.location,Y);break;default:a.vertexAttrib1fv(q.location,Y)}}}}M()}function U(){P();for(const x in r){const L=r[x];for(const R in L){const I=L[R];for(const N in I)u(I[N].object),delete I[N];delete L[R]}delete r[x]}}function w(x){if(r[x.id]===void 0)return;const L=r[x.id];for(const R in L){const I=L[R];for(const N in I)u(I[N].object),delete I[N];delete L[R]}delete r[x.id]}function b(x){for(const L in r){const R=r[L];if(R[x.id]===void 0)continue;const I=R[x.id];for(const N in I)u(I[N].object),delete I[N];delete R[x.id]}}function P(){E(),s=!0,i!==n&&(i=n,c(i.object))}function E(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:P,resetDefaultState:E,dispose:U,releaseStatesOfGeometry:w,releaseStatesOfProgram:b,initAttributes:v,enableAttribute:p,disableUnusedAttributes:M}}function Df(a,e,t){let r;function n(c){r=c}function i(c,u){a.drawArrays(r,c,u),t.update(u,r,1)}function s(c,u,d){d!==0&&(a.drawArraysInstanced(r,c,u,d),t.update(u,r,d))}function o(c,u,d){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let f=0;f<d;f++)this.render(c[f],u[f]);else{h.multiDrawArraysWEBGL(r,c,0,u,0,d);let f=0;for(let g=0;g<d;g++)f+=u[g];t.update(f,r,1)}}function l(c,u,d,h){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)s(c[g],u[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(r,c,0,u,0,h,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v];for(let v=0;v<h.length;v++)t.update(g,r,h[v])}}this.setMode=n,this.render=i,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function If(a,e,t,r){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(w){return!(w!==cn&&r.convert(w)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const b=w===ea&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==On&&r.convert(w)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Dn&&!b)}function l(w){if(w==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),f=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=a.getParameter(a.MAX_TEXTURE_SIZE),v=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),p=a.getParameter(a.MAX_VERTEX_ATTRIBS),m=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),M=a.getParameter(a.MAX_VARYING_VECTORS),S=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,U=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:i,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:v,maxAttributes:p,maxVertexUniforms:m,maxVaryings:M,maxFragmentUniforms:S,vertexTextures:y,maxSamples:U}}function Ff(a){const e=this;let t=null,r=0,n=!1,i=!1;const s=new Kn,o=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||r!==0||n;return n=h,r=d.length,f},this.beginShadows=function(){i=!0,u(null)},this.endShadows=function(){i=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,m=a.get(d);if(!n||g===null||g.length===0||i&&!p)i?u(null):c();else{const M=i?0:r,S=M*4;let y=m.clippingState||null;l.value=y,y=u(g,h,S,f);for(let U=0;U!==S;++U)y[U]=t[U];m.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function u(d,h,f,g){const v=d!==null?d.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const m=f+v*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let S=0,y=f;S!==v;++S,y+=4)s.copy(d[S]).applyMatrix4(M,o),s.normal.toArray(p,y),p[y+3]=s.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function Nf(a){let e=new WeakMap;function t(s,o){return o===ns?s.mapping=Ri:o===is&&(s.mapping=Pi),s}function r(s){if(s&&s.isTexture){const o=s.mapping;if(o===ns||o===is)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new qu(l.height);return c.fromEquirectangularTexture(a,s),e.set(s,c),s.addEventListener("dispose",n),t(c.texture,s.mapping)}else return null}}return s}function n(s){const o=s.target;o.removeEventListener("dispose",n);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function i(){e=new WeakMap}return{get:r,dispose:i}}class vs extends Yl{constructor(e=-1,t=1,r=1,n=-1,i=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=n,this.near=i,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,n,i,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=i,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let i=r-e,s=r+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=c*this.view.offsetX,s=i+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(i,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ti=4,Oo=[.125,.215,.35,.446,.526,.582],Qn=20,za=new vs,Bo=new Ye;let Ha=null,Va=0,Wa=0,Xa=!1;const Jn=(1+Math.sqrt(5))/2,Mi=1/Jn,ko=[new te(-Jn,Mi,0),new te(Jn,Mi,0),new te(-Mi,0,Jn),new te(Mi,0,Jn),new te(0,Jn,-Mi),new te(0,Jn,Mi),new te(-1,1,-1),new te(1,1,-1),new te(-1,1,1),new te(1,1,1)];class Go{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,n=100){Ha=this._renderer.getRenderTarget(),Va=this._renderer.getActiveCubeFace(),Wa=this._renderer.getActiveMipmapLevel(),Xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,r,n,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ho(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ha,Va,Wa),this._renderer.xr.enabled=Xa,e.scissorTest=!1,Or(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ri||e.mapping===Pi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ha=this._renderer.getRenderTarget(),Va=this._renderer.getActiveCubeFace(),Wa=this._renderer.getActiveMipmapLevel(),Xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:ea,format:cn,colorSpace:kn,depthBuffer:!1},n=zo(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zo(e,t,r);const{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Of(i)),this._blurMaterial=Bf(i,e,t)}return n}_compileMaterial(e){const t=new xt(this._lodPlanes[0],e);this._renderer.compile(t,za)}_sceneToCubeUV(e,t,r,n){const o=new Wt(90,1,t,r),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Bo),u.toneMapping=Fn,u.autoClear=!1;const f=new ms({name:"PMREM.Background",side:wt,depthWrite:!1,depthTest:!1}),g=new xt(new Nn,f);let v=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,v=!0):(f.color.copy(Bo),v=!0);for(let m=0;m<6;m++){const M=m%3;M===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):M===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const S=this._cubeSize;Or(n,M*S,m>2?S:0,S,S),u.setRenderTarget(n),v&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const r=this._renderer,n=e.mapping===Ri||e.mapping===Pi;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ho());const i=n?this._cubemapMaterial:this._equirectMaterial,s=new xt(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;const l=this._cubeSize;Or(t,0,0,3*l,2*l),r.setRenderTarget(t),r.render(s,za)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const n=this._lodPlanes.length;for(let i=1;i<n;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=ko[(n-i-1)%ko.length];this._blur(e,i-1,i,s,o)}t.autoClear=r}_blur(e,t,r,n,i){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,r,n,"latitudinal",i),this._halfBlur(s,e,r,r,n,"longitudinal",i)}_halfBlur(e,t,r,n,i,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new xt(this._lodPlanes[n],c),h=c.uniforms,f=this._sizeLods[r]-1,g=isFinite(i)?Math.PI/(2*f):2*Math.PI/(2*Qn-1),v=i/g,p=isFinite(i)?1+Math.floor(u*v):Qn;p>Qn&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Qn}`);const m=[];let M=0;for(let b=0;b<Qn;++b){const P=b/v,E=Math.exp(-P*P/2);m.push(E),b===0?M+=E:b<p&&(M+=2*E)}for(let b=0;b<m.length;b++)m[b]=m[b]/M;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=s==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:S}=this;h.dTheta.value=g,h.mipInt.value=S-r;const y=this._sizeLods[n],U=3*y*(n>S-Ti?n-S+Ti:0),w=4*(this._cubeSize-y);Or(t,U,w,3*y,2*y),l.setRenderTarget(t),l.render(d,za)}}function Of(a){const e=[],t=[],r=[];let n=a;const i=a-Ti+1+Oo.length;for(let s=0;s<i;s++){const o=Math.pow(2,n);t.push(o);let l=1/o;s>a-Ti?l=Oo[s-a+Ti-1]:s===0&&(l=0),r.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,v=3,p=2,m=1,M=new Float32Array(v*g*f),S=new Float32Array(p*g*f),y=new Float32Array(m*g*f);for(let w=0;w<f;w++){const b=w%3*2/3-1,P=w>2?0:-1,E=[b,P,0,b+2/3,P,0,b+2/3,P+1,0,b,P,0,b+2/3,P+1,0,b,P+1,0];M.set(E,v*g*w),S.set(h,p*g*w);const x=[w,w,w,w,w,w];y.set(x,m*g*w)}const U=new hn;U.setAttribute("position",new nn(M,v)),U.setAttribute("uv",new nn(S,p)),U.setAttribute("faceIndex",new nn(y,m)),e.push(U),n>Ti&&n--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function zo(a,e,t){const r=new ni(a,e,t);return r.texture.mapping=$r,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Or(a,e,t,r,n){a.viewport.set(e,t,r,n),a.scissor.set(e,t,r,n)}function Bf(a,e,t){const r=new Float32Array(Qn),n=new te(0,1,0);return new Bn({name:"SphericalGaussianBlur",defines:{n:Qn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:_s(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function Ho(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_s(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function Vo(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_s(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function _s(){return`

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
	`}function kf(a){let e=new WeakMap,t=null;function r(o){if(o&&o.isTexture){const l=o.mapping,c=l===ns||l===is,u=l===Ri||l===Pi;if(c||u){let d=e.get(o);const h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new Go(a)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&n(f)?(t===null&&(t=new Go(a)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",i),d.texture):null}}}return o}function n(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function i(o){const l=o.target;l.removeEventListener("dispose",i);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:s}}function Gf(a){const e={};function t(r){if(e[r]!==void 0)return e[r];let n;switch(r){case"WEBGL_depth_texture":n=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=a.getExtension(r)}return e[r]=n,n}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const n=t(r);return n===null&&Bl("THREE.WebGLRenderer: "+r+" extension not supported."),n}}}function zf(a,e,t,r){const n={},i=new WeakMap;function s(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const v=h.morphAttributes[g];for(let p=0,m=v.length;p<m;p++)e.remove(v[p])}h.removeEventListener("dispose",s),delete n[h.id];const f=i.get(h);f&&(e.remove(f),i.delete(h)),r.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return n[h.id]===!0||(h.addEventListener("dispose",s),n[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)e.update(h[g],a.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const v=f[g];for(let p=0,m=v.length;p<m;p++)e.update(v[p],a.ARRAY_BUFFER)}}function c(d){const h=[],f=d.index,g=d.attributes.position;let v=0;if(f!==null){const M=f.array;v=f.version;for(let S=0,y=M.length;S<y;S+=3){const U=M[S+0],w=M[S+1],b=M[S+2];h.push(U,w,w,b,b,U)}}else if(g!==void 0){const M=g.array;v=g.version;for(let S=0,y=M.length/3-1;S<y;S+=3){const U=S+0,w=S+1,b=S+2;h.push(U,w,w,b,b,U)}}else return;const p=new(Ol(h)?Wl:Vl)(h,1);p.version=v;const m=i.get(d);m&&e.remove(m),i.set(d,p)}function u(d){const h=i.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return i.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Hf(a,e,t){let r;function n(h){r=h}let i,s;function o(h){i=h.type,s=h.bytesPerElement}function l(h,f){a.drawElements(r,f,i,h*s),t.update(f,r,1)}function c(h,f,g){g!==0&&(a.drawElementsInstanced(r,f,i,h*s,g),t.update(f,r,g))}function u(h,f,g){if(g===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let p=0;p<g;p++)this.render(h[p]/s,f[p]);else{v.multiDrawElementsWEBGL(r,f,0,i,h,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];t.update(p,r,1)}}function d(h,f,g,v){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<h.length;m++)c(h[m]/s,f[m],v[m]);else{p.multiDrawElementsInstancedWEBGL(r,f,0,i,h,0,v,0,g);let m=0;for(let M=0;M<g;M++)m+=f[M];for(let M=0;M<v.length;M++)t.update(m,r,v[M])}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Vf(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(i,s,o){switch(t.calls++,s){case a.TRIANGLES:t.triangles+=o*(i/3);break;case a.LINES:t.lines+=o*(i/2);break;case a.LINE_STRIP:t.lines+=o*(i-1);break;case a.LINE_LOOP:t.lines+=o*i;break;case a.POINTS:t.points+=o*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:r}}function Wf(a,e,t){const r=new WeakMap,n=new ht;function i(s,o,l){const c=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=r.get(o);if(h===void 0||h.count!==d){let x=function(){P.dispose(),r.delete(o),o.removeEventListener("dispose",x)};var f=x;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),v===!0&&(y=2),p===!0&&(y=3);let U=o.attributes.position.count*y,w=1;U>e.maxTextureSize&&(w=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const b=new Float32Array(U*w*4*d),P=new Gl(b,U,w,d);P.type=Dn,P.needsUpdate=!0;const E=y*4;for(let L=0;L<d;L++){const R=m[L],I=M[L],N=S[L],H=U*w*4*L;for(let k=0;k<R.count;k++){const Z=k*E;g===!0&&(n.fromBufferAttribute(R,k),b[H+Z+0]=n.x,b[H+Z+1]=n.y,b[H+Z+2]=n.z,b[H+Z+3]=0),v===!0&&(n.fromBufferAttribute(I,k),b[H+Z+4]=n.x,b[H+Z+5]=n.y,b[H+Z+6]=n.z,b[H+Z+7]=0),p===!0&&(n.fromBufferAttribute(N,k),b[H+Z+8]=n.x,b[H+Z+9]=n.y,b[H+Z+10]=n.z,b[H+Z+11]=N.itemSize===4?n.w:1)}}h={count:d,texture:P,size:new Je(U,w)},r.set(o,h),o.addEventListener("dispose",x)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(a,"morphTexture",s.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(a,"morphTargetBaseInfluence",v),l.getUniforms().setValue(a,"morphTargetInfluences",c)}l.getUniforms().setValue(a,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(a,"morphTargetsTextureSize",h.size)}return{update:i}}function Xf(a,e,t,r){let n=new WeakMap;function i(l){const c=r.render.frame,u=l.geometry,d=e.get(l,u);if(n.get(d)!==c&&(e.update(d),n.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(t.update(l.instanceMatrix,a.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,a.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;n.get(h)!==c&&(h.update(),n.set(h,c))}return d}function s(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:i,dispose:s}}class Jl extends At{constructor(e,t,r,n,i,s,o,l,c,u=Ai){if(u!==Ai&&u!==Di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&u===Ai&&(r=Ui),r===void 0&&u===Di&&(r=Li),super(null,n,i,s,o,l,u,r,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:qt,this.minFilter=l!==void 0?l:qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Zl=new At,Ql=new Jl(1,1);Ql.compareFunction=Nl;const $l=new Gl,ec=new Pu,tc=new jl,Wo=[],Xo=[],qo=new Float32Array(16),Yo=new Float32Array(9),jo=new Float32Array(4);function Ni(a,e,t){const r=a[0];if(r<=0||r>0)return a;const n=e*t;let i=Wo[n];if(i===void 0&&(i=new Float32Array(n),Wo[n]=i),e!==0){r.toArray(i,0);for(let s=1,o=0;s!==e;++s)o+=t,a[s].toArray(i,o)}return i}function dt(a,e){if(a.length!==e.length)return!1;for(let t=0,r=a.length;t<r;t++)if(a[t]!==e[t])return!1;return!0}function ft(a,e){for(let t=0,r=e.length;t<r;t++)a[t]=e[t]}function ia(a,e){let t=Xo[e];t===void 0&&(t=new Int32Array(e),Xo[e]=t);for(let r=0;r!==e;++r)t[r]=a.allocateTextureUnit();return t}function qf(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function Yf(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;a.uniform2fv(this.addr,e),ft(t,e)}}function jf(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;a.uniform3fv(this.addr,e),ft(t,e)}}function Kf(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;a.uniform4fv(this.addr,e),ft(t,e)}}function Jf(a,e){const t=this.cache,r=e.elements;if(r===void 0){if(dt(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,r))return;jo.set(r),a.uniformMatrix2fv(this.addr,!1,jo),ft(t,r)}}function Zf(a,e){const t=this.cache,r=e.elements;if(r===void 0){if(dt(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,r))return;Yo.set(r),a.uniformMatrix3fv(this.addr,!1,Yo),ft(t,r)}}function Qf(a,e){const t=this.cache,r=e.elements;if(r===void 0){if(dt(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,r))return;qo.set(r),a.uniformMatrix4fv(this.addr,!1,qo),ft(t,r)}}function $f(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function ep(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;a.uniform2iv(this.addr,e),ft(t,e)}}function tp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;a.uniform3iv(this.addr,e),ft(t,e)}}function np(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;a.uniform4iv(this.addr,e),ft(t,e)}}function ip(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function rp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;a.uniform2uiv(this.addr,e),ft(t,e)}}function ap(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;a.uniform3uiv(this.addr,e),ft(t,e)}}function sp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;a.uniform4uiv(this.addr,e),ft(t,e)}}function op(a,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(a.uniform1i(this.addr,n),r[0]=n);const i=this.type===a.SAMPLER_2D_SHADOW?Ql:Zl;t.setTexture2D(e||i,n)}function lp(a,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(a.uniform1i(this.addr,n),r[0]=n),t.setTexture3D(e||ec,n)}function cp(a,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(a.uniform1i(this.addr,n),r[0]=n),t.setTextureCube(e||tc,n)}function up(a,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(a.uniform1i(this.addr,n),r[0]=n),t.setTexture2DArray(e||$l,n)}function hp(a){switch(a){case 5126:return qf;case 35664:return Yf;case 35665:return jf;case 35666:return Kf;case 35674:return Jf;case 35675:return Zf;case 35676:return Qf;case 5124:case 35670:return $f;case 35667:case 35671:return ep;case 35668:case 35672:return tp;case 35669:case 35673:return np;case 5125:return ip;case 36294:return rp;case 36295:return ap;case 36296:return sp;case 35678:case 36198:case 36298:case 36306:case 35682:return op;case 35679:case 36299:case 36307:return lp;case 35680:case 36300:case 36308:case 36293:return cp;case 36289:case 36303:case 36311:case 36292:return up}}function dp(a,e){a.uniform1fv(this.addr,e)}function fp(a,e){const t=Ni(e,this.size,2);a.uniform2fv(this.addr,t)}function pp(a,e){const t=Ni(e,this.size,3);a.uniform3fv(this.addr,t)}function mp(a,e){const t=Ni(e,this.size,4);a.uniform4fv(this.addr,t)}function gp(a,e){const t=Ni(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function vp(a,e){const t=Ni(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function _p(a,e){const t=Ni(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function xp(a,e){a.uniform1iv(this.addr,e)}function Sp(a,e){a.uniform2iv(this.addr,e)}function yp(a,e){a.uniform3iv(this.addr,e)}function Mp(a,e){a.uniform4iv(this.addr,e)}function Ep(a,e){a.uniform1uiv(this.addr,e)}function bp(a,e){a.uniform2uiv(this.addr,e)}function Tp(a,e){a.uniform3uiv(this.addr,e)}function wp(a,e){a.uniform4uiv(this.addr,e)}function Ap(a,e,t){const r=this.cache,n=e.length,i=ia(t,n);dt(r,i)||(a.uniform1iv(this.addr,i),ft(r,i));for(let s=0;s!==n;++s)t.setTexture2D(e[s]||Zl,i[s])}function Cp(a,e,t){const r=this.cache,n=e.length,i=ia(t,n);dt(r,i)||(a.uniform1iv(this.addr,i),ft(r,i));for(let s=0;s!==n;++s)t.setTexture3D(e[s]||ec,i[s])}function Rp(a,e,t){const r=this.cache,n=e.length,i=ia(t,n);dt(r,i)||(a.uniform1iv(this.addr,i),ft(r,i));for(let s=0;s!==n;++s)t.setTextureCube(e[s]||tc,i[s])}function Pp(a,e,t){const r=this.cache,n=e.length,i=ia(t,n);dt(r,i)||(a.uniform1iv(this.addr,i),ft(r,i));for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||$l,i[s])}function Up(a){switch(a){case 5126:return dp;case 35664:return fp;case 35665:return pp;case 35666:return mp;case 35674:return gp;case 35675:return vp;case 35676:return _p;case 5124:case 35670:return xp;case 35667:case 35671:return Sp;case 35668:case 35672:return yp;case 35669:case 35673:return Mp;case 5125:return Ep;case 36294:return bp;case 36295:return Tp;case 36296:return wp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ap;case 35679:case 36299:case 36307:return Cp;case 35680:case 36300:case 36308:case 36293:return Rp;case 36289:case 36303:case 36311:case 36292:return Pp}}class Lp{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=hp(t.type)}}class Dp{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Up(t.type)}}class Ip{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const n=this.seq;for(let i=0,s=n.length;i!==s;++i){const o=n[i];o.setValue(e,t[o.id],r)}}}const qa=/(\w+)(\])?(\[|\.)?/g;function Ko(a,e){a.seq.push(e),a.map[e.id]=e}function Fp(a,e,t){const r=a.name,n=r.length;for(qa.lastIndex=0;;){const i=qa.exec(r),s=qa.lastIndex;let o=i[1];const l=i[2]==="]",c=i[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===n){Ko(t,c===void 0?new Lp(o,a,e):new Dp(o,a,e));break}else{let d=t.map[o];d===void 0&&(d=new Ip(o),Ko(t,d)),t=d}}}class Hr{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<r;++n){const i=e.getActiveUniform(t,n),s=e.getUniformLocation(t,i.name);Fp(i,s,this)}}setValue(e,t,r,n){const i=this.map[t];i!==void 0&&i.setValue(e,r,n)}setOptional(e,t,r){const n=t[r];n!==void 0&&this.setValue(e,r,n)}static upload(e,t,r,n){for(let i=0,s=t.length;i!==s;++i){const o=t[i],l=r[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){const r=[];for(let n=0,i=e.length;n!==i;++n){const s=e[n];s.id in t&&r.push(s)}return r}}function Jo(a,e,t){const r=a.createShader(e);return a.shaderSource(r,t),a.compileShader(r),r}const Np=37297;let Op=0;function Bp(a,e){const t=a.split(`
`),r=[],n=Math.max(e-6,0),i=Math.min(e+6,t.length);for(let s=n;s<i;s++){const o=s+1;r.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return r.join(`
`)}function kp(a){const e=et.getPrimaries(et.workingColorSpace),t=et.getPrimaries(a);let r;switch(e===t?r="":e===Jr&&t===Kr?r="LinearDisplayP3ToLinearSRGB":e===Kr&&t===Jr&&(r="LinearSRGBToLinearDisplayP3"),a){case kn:case ta:return[r,"LinearTransferOETF"];case sn:case ps:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",a),[r,"LinearTransferOETF"]}}function Zo(a,e,t){const r=a.getShaderParameter(e,a.COMPILE_STATUS),n=a.getShaderInfoLog(e).trim();if(r&&n==="")return"";const i=/ERROR: 0:(\d+)/.exec(n);if(i){const s=parseInt(i[1]);return t.toUpperCase()+`

`+n+`

`+Bp(a.getShaderSource(e),s)}else return n}function Gp(a,e){const t=kp(e);return`vec4 ${a}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function zp(a,e){let t;switch(e){case Kc:t="Linear";break;case Jc:t="Reinhard";break;case Zc:t="OptimizedCineon";break;case Qc:t="ACESFilmic";break;case eu:t="AgX";break;case tu:t="Neutral";break;case $c:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Hp(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($i).join(`
`)}function Vp(a){const e=[];for(const t in a){const r=a[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function Wp(a,e){const t={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let n=0;n<r;n++){const i=a.getActiveAttrib(e,n),s=i.name;let o=1;i.type===a.FLOAT_MAT2&&(o=2),i.type===a.FLOAT_MAT3&&(o=3),i.type===a.FLOAT_MAT4&&(o=4),t[s]={type:i.type,location:a.getAttribLocation(e,s),locationSize:o}}return t}function $i(a){return a!==""}function Qo(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $o(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Xp=/^[ \t]*#include +<([\w\d./]+)>/gm;function os(a){return a.replace(Xp,Yp)}const qp=new Map;function Yp(a,e){let t=Xe[e];if(t===void 0){const r=qp.get(e);if(r!==void 0)t=Xe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return os(t)}const jp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function el(a){return a.replace(jp,Kp)}function Kp(a,e,t,r){let n="";for(let i=parseInt(e);i<parseInt(t);i++)n+=r.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return n}function tl(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Jp(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===wl?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===yc?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===xn&&(e="SHADOWMAP_TYPE_VSM"),e}function Zp(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Ri:case Pi:e="ENVMAP_TYPE_CUBE";break;case $r:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Qp(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Pi:e="ENVMAP_MODE_REFRACTION";break}return e}function $p(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case fs:e="ENVMAP_BLENDING_MULTIPLY";break;case Yc:e="ENVMAP_BLENDING_MIX";break;case jc:e="ENVMAP_BLENDING_ADD";break}return e}function em(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function tm(a,e,t,r){const n=a.getContext(),i=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=Jp(t),c=Zp(t),u=Qp(t),d=$p(t),h=em(t),f=Hp(t),g=Vp(i),v=n.createProgram();let p,m,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter($i).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter($i).join(`
`),m.length>0&&(m+=`
`)):(p=[tl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($i).join(`
`),m=[tl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fn?"#define TONE_MAPPING":"",t.toneMapping!==Fn?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Fn?zp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,Gp("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($i).join(`
`)),s=os(s),s=Qo(s,t),s=$o(s,t),o=os(o),o=Qo(o,t),o=$o(o,t),s=el(s),o=el(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===vo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=M+p+s,y=M+m+o,U=Jo(n,n.VERTEX_SHADER,S),w=Jo(n,n.FRAGMENT_SHADER,y);n.attachShader(v,U),n.attachShader(v,w),t.index0AttributeName!==void 0?n.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v);function b(L){if(a.debug.checkShaderErrors){const R=n.getProgramInfoLog(v).trim(),I=n.getShaderInfoLog(U).trim(),N=n.getShaderInfoLog(w).trim();let H=!0,k=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if(H=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(n,v,U,w);else{const Z=Zo(n,U,"vertex"),q=Zo(n,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+R+`
`+Z+`
`+q)}else R!==""?console.warn("THREE.WebGLProgram: Program Info Log:",R):(I===""||N==="")&&(k=!1);k&&(L.diagnostics={runnable:H,programLog:R,vertexShader:{log:I,prefix:p},fragmentShader:{log:N,prefix:m}})}n.deleteShader(U),n.deleteShader(w),P=new Hr(n,v),E=Wp(n,v)}let P;this.getUniforms=function(){return P===void 0&&b(this),P};let E;this.getAttributes=function(){return E===void 0&&b(this),E};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=n.getProgramParameter(v,Np)),x},this.destroy=function(){r.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Op++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=U,this.fragmentShader=w,this}let nm=0;class im{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,n=this._getShaderStage(t),i=this._getShaderStage(r),s=this._getShaderCacheForMaterial(e);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new rm(e),t.set(e,r)),r}}class rm{constructor(e){this.id=nm++,this.code=e,this.usedTimes=0}}function am(a,e,t,r,n,i,s){const o=new zl,l=new im,c=new Set,u=[],d=n.logarithmicDepthBuffer,h=n.vertexTextures;let f=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return c.add(E),E===0?"uv":`uv${E}`}function p(E,x,L,R,I){const N=R.fog,H=I.geometry,k=E.isMeshStandardMaterial?R.environment:null,Z=(E.isMeshStandardMaterial?t:e).get(E.envMap||k),q=Z&&Z.mapping===$r?Z.image.height:null,K=g[E.type];E.precision!==null&&(f=n.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const Y=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,D=Y!==void 0?Y.length:0;let V=0;H.morphAttributes.position!==void 0&&(V=1),H.morphAttributes.normal!==void 0&&(V=2),H.morphAttributes.color!==void 0&&(V=3);let ee,F,O,$;if(K){const De=on[K];ee=De.vertexShader,F=De.fragmentShader}else ee=E.vertexShader,F=E.fragmentShader,l.update(E),O=l.getVertexShaderID(E),$=l.getFragmentShaderID(E);const z=a.getRenderTarget(),ae=I.isInstancedMesh===!0,fe=I.isBatchedMesh===!0,xe=!!E.map,C=!!E.matcap,le=!!Z,Ce=!!E.aoMap,Le=!!E.lightMap,ge=!!E.bumpMap,be=!!E.normalMap,Te=!!E.displacementMap,ue=!!E.emissiveMap,Ae=!!E.metalnessMap,A=!!E.roughnessMap,_=E.anisotropy>0,G=E.clearcoat>0,X=E.dispersion>0,ne=E.iridescence>0,Q=E.sheen>0,we=E.transmission>0,oe=_&&!!E.anisotropyMap,ce=G&&!!E.clearcoatMap,Me=G&&!!E.clearcoatNormalMap,he=G&&!!E.clearcoatRoughnessMap,Se=ne&&!!E.iridescenceMap,Ne=ne&&!!E.iridescenceThicknessMap,ye=Q&&!!E.sheenColorMap,de=Q&&!!E.sheenRoughnessMap,me=!!E.specularMap,Ie=!!E.specularColorMap,He=!!E.specularIntensityMap,B=we&&!!E.transmissionMap,ve=we&&!!E.thicknessMap,J=!!E.gradientMap,se=!!E.alphaMap,_e=E.alphaTest>0,Pe=!!E.alphaHash,Fe=!!E.extensions;let We=Fn;E.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(We=a.toneMapping);const Ve={shaderID:K,shaderType:E.type,shaderName:E.name,vertexShader:ee,fragmentShader:F,defines:E.defines,customVertexShaderID:O,customFragmentShaderID:$,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:fe,batchingColor:fe&&I._colorsTexture!==null,instancing:ae,instancingColor:ae&&I.instanceColor!==null,instancingMorph:ae&&I.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:z===null?a.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:kn,alphaToCoverage:!!E.alphaToCoverage,map:xe,matcap:C,envMap:le,envMapMode:le&&Z.mapping,envMapCubeUVHeight:q,aoMap:Ce,lightMap:Le,bumpMap:ge,normalMap:be,displacementMap:h&&Te,emissiveMap:ue,normalMapObjectSpace:be&&E.normalMapType===pu,normalMapTangentSpace:be&&E.normalMapType===Fl,metalnessMap:Ae,roughnessMap:A,anisotropy:_,anisotropyMap:oe,clearcoat:G,clearcoatMap:ce,clearcoatNormalMap:Me,clearcoatRoughnessMap:he,dispersion:X,iridescence:ne,iridescenceMap:Se,iridescenceThicknessMap:Ne,sheen:Q,sheenColorMap:ye,sheenRoughnessMap:de,specularMap:me,specularColorMap:Ie,specularIntensityMap:He,transmission:we,transmissionMap:B,thicknessMap:ve,gradientMap:J,opaque:E.transparent===!1&&E.blending===wi&&E.alphaToCoverage===!1,alphaMap:se,alphaTest:_e,alphaHash:Pe,combine:E.combine,mapUv:xe&&v(E.map.channel),aoMapUv:Ce&&v(E.aoMap.channel),lightMapUv:Le&&v(E.lightMap.channel),bumpMapUv:ge&&v(E.bumpMap.channel),normalMapUv:be&&v(E.normalMap.channel),displacementMapUv:Te&&v(E.displacementMap.channel),emissiveMapUv:ue&&v(E.emissiveMap.channel),metalnessMapUv:Ae&&v(E.metalnessMap.channel),roughnessMapUv:A&&v(E.roughnessMap.channel),anisotropyMapUv:oe&&v(E.anisotropyMap.channel),clearcoatMapUv:ce&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:Me&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:de&&v(E.sheenRoughnessMap.channel),specularMapUv:me&&v(E.specularMap.channel),specularColorMapUv:Ie&&v(E.specularColorMap.channel),specularIntensityMapUv:He&&v(E.specularIntensityMap.channel),transmissionMapUv:B&&v(E.transmissionMap.channel),thicknessMapUv:ve&&v(E.thicknessMap.channel),alphaMapUv:se&&v(E.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(be||_),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!H.attributes.uv&&(xe||se),fog:!!N,useFog:E.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:I.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:V,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:E.dithering,shadowMapEnabled:a.shadowMap.enabled&&L.length>0,shadowMapType:a.shadowMap.type,toneMapping:We,decodeVideoTexture:xe&&E.map.isVideoTexture===!0&&et.getTransfer(E.map.colorSpace)===rt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===en,flipSided:E.side===wt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Fe&&E.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Fe&&E.extensions.multiDraw===!0&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ve.vertexUv1s=c.has(1),Ve.vertexUv2s=c.has(2),Ve.vertexUv3s=c.has(3),c.clear(),Ve}function m(E){const x=[];if(E.shaderID?x.push(E.shaderID):(x.push(E.customVertexShaderID),x.push(E.customFragmentShaderID)),E.defines!==void 0)for(const L in E.defines)x.push(L),x.push(E.defines[L]);return E.isRawShaderMaterial===!1&&(M(x,E),S(x,E),x.push(a.outputColorSpace)),x.push(E.customProgramCacheKey),x.join()}function M(E,x){E.push(x.precision),E.push(x.outputColorSpace),E.push(x.envMapMode),E.push(x.envMapCubeUVHeight),E.push(x.mapUv),E.push(x.alphaMapUv),E.push(x.lightMapUv),E.push(x.aoMapUv),E.push(x.bumpMapUv),E.push(x.normalMapUv),E.push(x.displacementMapUv),E.push(x.emissiveMapUv),E.push(x.metalnessMapUv),E.push(x.roughnessMapUv),E.push(x.anisotropyMapUv),E.push(x.clearcoatMapUv),E.push(x.clearcoatNormalMapUv),E.push(x.clearcoatRoughnessMapUv),E.push(x.iridescenceMapUv),E.push(x.iridescenceThicknessMapUv),E.push(x.sheenColorMapUv),E.push(x.sheenRoughnessMapUv),E.push(x.specularMapUv),E.push(x.specularColorMapUv),E.push(x.specularIntensityMapUv),E.push(x.transmissionMapUv),E.push(x.thicknessMapUv),E.push(x.combine),E.push(x.fogExp2),E.push(x.sizeAttenuation),E.push(x.morphTargetsCount),E.push(x.morphAttributeCount),E.push(x.numDirLights),E.push(x.numPointLights),E.push(x.numSpotLights),E.push(x.numSpotLightMaps),E.push(x.numHemiLights),E.push(x.numRectAreaLights),E.push(x.numDirLightShadows),E.push(x.numPointLightShadows),E.push(x.numSpotLightShadows),E.push(x.numSpotLightShadowsWithMaps),E.push(x.numLightProbes),E.push(x.shadowMapType),E.push(x.toneMapping),E.push(x.numClippingPlanes),E.push(x.numClipIntersection),E.push(x.depthPacking)}function S(E,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.skinning&&o.enable(4),x.morphTargets&&o.enable(5),x.morphNormals&&o.enable(6),x.morphColors&&o.enable(7),x.premultipliedAlpha&&o.enable(8),x.shadowMapEnabled&&o.enable(9),x.doubleSided&&o.enable(10),x.flipSided&&o.enable(11),x.useDepthPacking&&o.enable(12),x.dithering&&o.enable(13),x.transmission&&o.enable(14),x.sheen&&o.enable(15),x.opaque&&o.enable(16),x.pointsUvs&&o.enable(17),x.decodeVideoTexture&&o.enable(18),x.alphaToCoverage&&o.enable(19),E.push(o.mask)}function y(E){const x=g[E.type];let L;if(x){const R=on[x];L=ql.clone(R.uniforms)}else L=E.uniforms;return L}function U(E,x){let L;for(let R=0,I=u.length;R<I;R++){const N=u[R];if(N.cacheKey===x){L=N,++L.usedTimes;break}}return L===void 0&&(L=new tm(a,x,E,i),u.push(L)),L}function w(E){if(--E.usedTimes===0){const x=u.indexOf(E);u[x]=u[u.length-1],u.pop(),E.destroy()}}function b(E){l.remove(E)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:y,acquireProgram:U,releaseProgram:w,releaseShaderCache:b,programs:u,dispose:P}}function sm(){let a=new WeakMap;function e(i){let s=a.get(i);return s===void 0&&(s={},a.set(i,s)),s}function t(i){a.delete(i)}function r(i,s,o){a.get(i)[s]=o}function n(){a=new WeakMap}return{get:e,remove:t,update:r,dispose:n}}function om(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function nl(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function il(){const a=[];let e=0;const t=[],r=[],n=[];function i(){e=0,t.length=0,r.length=0,n.length=0}function s(d,h,f,g,v,p){let m=a[e];return m===void 0?(m={id:d.id,object:d,geometry:h,material:f,groupOrder:g,renderOrder:d.renderOrder,z:v,group:p},a[e]=m):(m.id=d.id,m.object=d,m.geometry=h,m.material=f,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=v,m.group=p),e++,m}function o(d,h,f,g,v,p){const m=s(d,h,f,g,v,p);f.transmission>0?r.push(m):f.transparent===!0?n.push(m):t.push(m)}function l(d,h,f,g,v,p){const m=s(d,h,f,g,v,p);f.transmission>0?r.unshift(m):f.transparent===!0?n.unshift(m):t.unshift(m)}function c(d,h){t.length>1&&t.sort(d||om),r.length>1&&r.sort(h||nl),n.length>1&&n.sort(h||nl)}function u(){for(let d=e,h=a.length;d<h;d++){const f=a[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:r,transparent:n,init:i,push:o,unshift:l,finish:u,sort:c}}function lm(){let a=new WeakMap;function e(r,n){const i=a.get(r);let s;return i===void 0?(s=new il,a.set(r,[s])):n>=i.length?(s=new il,i.push(s)):s=i[n],s}function t(){a=new WeakMap}return{get:e,dispose:t}}function cm(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new te,color:new Ye};break;case"SpotLight":t={position:new te,direction:new te,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new te,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new te,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new te,halfWidth:new te,halfHeight:new te};break}return a[e.id]=t,t}}}function um(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let hm=0;function dm(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function fm(a){const e=new cm,t=um(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new te);const n=new te,i=new lt,s=new lt;function o(c){let u=0,d=0,h=0;for(let E=0;E<9;E++)r.probe[E].set(0,0,0);let f=0,g=0,v=0,p=0,m=0,M=0,S=0,y=0,U=0,w=0,b=0;c.sort(dm);for(let E=0,x=c.length;E<x;E++){const L=c[E],R=L.color,I=L.intensity,N=L.distance,H=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=R.r*I,d+=R.g*I,h+=R.b*I;else if(L.isLightProbe){for(let k=0;k<9;k++)r.probe[k].addScaledVector(L.sh.coefficients[k],I);b++}else if(L.isDirectionalLight){const k=e.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Z=L.shadow,q=t.get(L);q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,r.directionalShadow[f]=q,r.directionalShadowMap[f]=H,r.directionalShadowMatrix[f]=L.shadow.matrix,M++}r.directional[f]=k,f++}else if(L.isSpotLight){const k=e.get(L);k.position.setFromMatrixPosition(L.matrixWorld),k.color.copy(R).multiplyScalar(I),k.distance=N,k.coneCos=Math.cos(L.angle),k.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),k.decay=L.decay,r.spot[v]=k;const Z=L.shadow;if(L.map&&(r.spotLightMap[U]=L.map,U++,Z.updateMatrices(L),L.castShadow&&w++),r.spotLightMatrix[v]=Z.matrix,L.castShadow){const q=t.get(L);q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,r.spotShadow[v]=q,r.spotShadowMap[v]=H,y++}v++}else if(L.isRectAreaLight){const k=e.get(L);k.color.copy(R).multiplyScalar(I),k.halfWidth.set(L.width*.5,0,0),k.halfHeight.set(0,L.height*.5,0),r.rectArea[p]=k,p++}else if(L.isPointLight){const k=e.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),k.distance=L.distance,k.decay=L.decay,L.castShadow){const Z=L.shadow,q=t.get(L);q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,q.shadowCameraNear=Z.camera.near,q.shadowCameraFar=Z.camera.far,r.pointShadow[g]=q,r.pointShadowMap[g]=H,r.pointShadowMatrix[g]=L.shadow.matrix,S++}r.point[g]=k,g++}else if(L.isHemisphereLight){const k=e.get(L);k.skyColor.copy(L.color).multiplyScalar(I),k.groundColor.copy(L.groundColor).multiplyScalar(I),r.hemi[m]=k,m++}}p>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_FLOAT_1,r.rectAreaLTC2=Re.LTC_FLOAT_2):(r.rectAreaLTC1=Re.LTC_HALF_1,r.rectAreaLTC2=Re.LTC_HALF_2)),r.ambient[0]=u,r.ambient[1]=d,r.ambient[2]=h;const P=r.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==p||P.hemiLength!==m||P.numDirectionalShadows!==M||P.numPointShadows!==S||P.numSpotShadows!==y||P.numSpotMaps!==U||P.numLightProbes!==b)&&(r.directional.length=f,r.spot.length=v,r.rectArea.length=p,r.point.length=g,r.hemi.length=m,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=y,r.spotShadowMap.length=y,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=y+U-w,r.spotLightMap.length=U,r.numSpotLightShadowsWithMaps=w,r.numLightProbes=b,P.directionalLength=f,P.pointLength=g,P.spotLength=v,P.rectAreaLength=p,P.hemiLength=m,P.numDirectionalShadows=M,P.numPointShadows=S,P.numSpotShadows=y,P.numSpotMaps=U,P.numLightProbes=b,r.version=hm++)}function l(c,u){let d=0,h=0,f=0,g=0,v=0;const p=u.matrixWorldInverse;for(let m=0,M=c.length;m<M;m++){const S=c[m];if(S.isDirectionalLight){const y=r.directional[d];y.direction.setFromMatrixPosition(S.matrixWorld),n.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(p),d++}else if(S.isSpotLight){const y=r.spot[f];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(S.matrixWorld),n.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(p),f++}else if(S.isRectAreaLight){const y=r.rectArea[g];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(p),s.identity(),i.copy(S.matrixWorld),i.premultiply(p),s.extractRotation(i),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(s),y.halfHeight.applyMatrix4(s),g++}else if(S.isPointLight){const y=r.point[h];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(p),h++}else if(S.isHemisphereLight){const y=r.hemi[v];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(p),v++}}}return{setup:o,setupView:l,state:r}}function rl(a){const e=new fm(a),t=[],r=[];function n(u){c.camera=u,t.length=0,r.length=0}function i(u){t.push(u)}function s(u){r.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:i,pushShadow:s}}function pm(a){let e=new WeakMap;function t(n,i=0){const s=e.get(n);let o;return s===void 0?(o=new rl(a),e.set(n,[o])):i>=s.length?(o=new rl(a),s.push(o)):o=s[i],o}function r(){e=new WeakMap}return{get:t,dispose:r}}class nc extends sr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ic extends sr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const mm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gm=`uniform sampler2D shadow_pass;
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
}`;function vm(a,e,t){let r=new gs;const n=new Je,i=new Je,s=new ht,o=new nc({depthPacking:Il}),l=new ic,c={},u=t.maxTextureSize,d={[yn]:wt,[wt]:yn,[en]:en},h=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:mm,fragmentShader:gm}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new hn;g.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new xt(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wl;let m=this.type;this.render=function(w,b,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const E=a.getRenderTarget(),x=a.getActiveCubeFace(),L=a.getActiveMipmapLevel(),R=a.state;R.setBlending(In),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const I=m!==xn&&this.type===xn,N=m===xn&&this.type!==xn;for(let H=0,k=w.length;H<k;H++){const Z=w[H],q=Z.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;n.copy(q.mapSize);const K=q.getFrameExtents();if(n.multiply(K),i.copy(q.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(i.x=Math.floor(u/K.x),n.x=i.x*K.x,q.mapSize.x=i.x),n.y>u&&(i.y=Math.floor(u/K.y),n.y=i.y*K.y,q.mapSize.y=i.y)),q.map===null||I===!0||N===!0){const D=this.type!==xn?{minFilter:qt,magFilter:qt}:{};q.map!==null&&q.map.dispose(),q.map=new ni(n.x,n.y,D),q.map.texture.name=Z.name+".shadowMap",q.camera.updateProjectionMatrix()}a.setRenderTarget(q.map),a.clear();const Y=q.getViewportCount();for(let D=0;D<Y;D++){const V=q.getViewport(D);s.set(i.x*V.x,i.y*V.y,i.x*V.z,i.y*V.w),R.viewport(s),q.updateMatrices(Z,D),r=q.getFrustum(),y(b,P,q.camera,Z,this.type)}q.isPointLightShadow!==!0&&this.type===xn&&M(q,P),q.needsUpdate=!1}m=this.type,p.needsUpdate=!1,a.setRenderTarget(E,x,L)};function M(w,b){const P=e.update(v);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ni(n.x,n.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,a.setRenderTarget(w.mapPass),a.clear(),a.renderBufferDirect(b,null,P,h,v,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,a.setRenderTarget(w.map),a.clear(),a.renderBufferDirect(b,null,P,f,v,null)}function S(w,b,P,E){let x=null;const L=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)x=L;else if(x=P.isPointLight===!0?l:o,a.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const R=x.uuid,I=b.uuid;let N=c[R];N===void 0&&(N={},c[R]=N);let H=N[I];H===void 0&&(H=x.clone(),N[I]=H,b.addEventListener("dispose",U)),x=H}if(x.visible=b.visible,x.wireframe=b.wireframe,E===xn?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:d[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const R=a.properties.get(x);R.light=P}return x}function y(w,b,P,E,x){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===xn)&&(!w.frustumCulled||r.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const I=e.update(w),N=w.material;if(Array.isArray(N)){const H=I.groups;for(let k=0,Z=H.length;k<Z;k++){const q=H[k],K=N[q.materialIndex];if(K&&K.visible){const Y=S(w,K,E,x);w.onBeforeShadow(a,w,b,P,I,Y,q),a.renderBufferDirect(P,null,I,Y,w,q),w.onAfterShadow(a,w,b,P,I,Y,q)}}}else if(N.visible){const H=S(w,N,E,x);w.onBeforeShadow(a,w,b,P,I,H,null),a.renderBufferDirect(P,null,I,H,w,null),w.onAfterShadow(a,w,b,P,I,H,null)}}const R=w.children;for(let I=0,N=R.length;I<N;I++)y(R[I],b,P,E,x)}function U(w){w.target.removeEventListener("dispose",U);for(const P in c){const E=c[P],x=w.target.uuid;x in E&&(E[x].dispose(),delete E[x])}}}function _m(a){function e(){let B=!1;const ve=new ht;let J=null;const se=new ht(0,0,0,0);return{setMask:function(_e){J!==_e&&!B&&(a.colorMask(_e,_e,_e,_e),J=_e)},setLocked:function(_e){B=_e},setClear:function(_e,Pe,Fe,We,Ve){Ve===!0&&(_e*=We,Pe*=We,Fe*=We),ve.set(_e,Pe,Fe,We),se.equals(ve)===!1&&(a.clearColor(_e,Pe,Fe,We),se.copy(ve))},reset:function(){B=!1,J=null,se.set(-1,0,0,0)}}}function t(){let B=!1,ve=null,J=null,se=null;return{setTest:function(_e){_e?$(a.DEPTH_TEST):z(a.DEPTH_TEST)},setMask:function(_e){ve!==_e&&!B&&(a.depthMask(_e),ve=_e)},setFunc:function(_e){if(J!==_e){switch(_e){case Gc:a.depthFunc(a.NEVER);break;case zc:a.depthFunc(a.ALWAYS);break;case Hc:a.depthFunc(a.LESS);break;case qr:a.depthFunc(a.LEQUAL);break;case Vc:a.depthFunc(a.EQUAL);break;case Wc:a.depthFunc(a.GEQUAL);break;case Xc:a.depthFunc(a.GREATER);break;case qc:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}J=_e}},setLocked:function(_e){B=_e},setClear:function(_e){se!==_e&&(a.clearDepth(_e),se=_e)},reset:function(){B=!1,ve=null,J=null,se=null}}}function r(){let B=!1,ve=null,J=null,se=null,_e=null,Pe=null,Fe=null,We=null,Ve=null;return{setTest:function(De){B||(De?$(a.STENCIL_TEST):z(a.STENCIL_TEST))},setMask:function(De){ve!==De&&!B&&(a.stencilMask(De),ve=De)},setFunc:function(De,Ze,nt){(J!==De||se!==Ze||_e!==nt)&&(a.stencilFunc(De,Ze,nt),J=De,se=Ze,_e=nt)},setOp:function(De,Ze,nt){(Pe!==De||Fe!==Ze||We!==nt)&&(a.stencilOp(De,Ze,nt),Pe=De,Fe=Ze,We=nt)},setLocked:function(De){B=De},setClear:function(De){Ve!==De&&(a.clearStencil(De),Ve=De)},reset:function(){B=!1,ve=null,J=null,se=null,_e=null,Pe=null,Fe=null,We=null,Ve=null}}}const n=new e,i=new t,s=new r,o=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,h=[],f=null,g=!1,v=null,p=null,m=null,M=null,S=null,y=null,U=null,w=new Ye(0,0,0),b=0,P=!1,E=null,x=null,L=null,R=null,I=null;const N=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,k=0;const Z=a.getParameter(a.VERSION);Z.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(Z)[1]),H=k>=1):Z.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),H=k>=2);let q=null,K={};const Y=a.getParameter(a.SCISSOR_BOX),D=a.getParameter(a.VIEWPORT),V=new ht().fromArray(Y),ee=new ht().fromArray(D);function F(B,ve,J,se){const _e=new Uint8Array(4),Pe=a.createTexture();a.bindTexture(B,Pe),a.texParameteri(B,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(B,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Fe=0;Fe<J;Fe++)B===a.TEXTURE_3D||B===a.TEXTURE_2D_ARRAY?a.texImage3D(ve,0,a.RGBA,1,1,se,0,a.RGBA,a.UNSIGNED_BYTE,_e):a.texImage2D(ve+Fe,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,_e);return Pe}const O={};O[a.TEXTURE_2D]=F(a.TEXTURE_2D,a.TEXTURE_2D,1),O[a.TEXTURE_CUBE_MAP]=F(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),O[a.TEXTURE_2D_ARRAY]=F(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),O[a.TEXTURE_3D]=F(a.TEXTURE_3D,a.TEXTURE_3D,1,1),n.setClear(0,0,0,1),i.setClear(1),s.setClear(0),$(a.DEPTH_TEST),i.setFunc(qr),ge(!1),be(Bs),$(a.CULL_FACE),Ce(In);function $(B){c[B]!==!0&&(a.enable(B),c[B]=!0)}function z(B){c[B]!==!1&&(a.disable(B),c[B]=!1)}function ae(B,ve){return u[B]!==ve?(a.bindFramebuffer(B,ve),u[B]=ve,B===a.DRAW_FRAMEBUFFER&&(u[a.FRAMEBUFFER]=ve),B===a.FRAMEBUFFER&&(u[a.DRAW_FRAMEBUFFER]=ve),!0):!1}function fe(B,ve){let J=h,se=!1;if(B){J=d.get(ve),J===void 0&&(J=[],d.set(ve,J));const _e=B.textures;if(J.length!==_e.length||J[0]!==a.COLOR_ATTACHMENT0){for(let Pe=0,Fe=_e.length;Pe<Fe;Pe++)J[Pe]=a.COLOR_ATTACHMENT0+Pe;J.length=_e.length,se=!0}}else J[0]!==a.BACK&&(J[0]=a.BACK,se=!0);se&&a.drawBuffers(J)}function xe(B){return f!==B?(a.useProgram(B),f=B,!0):!1}const C={[Zn]:a.FUNC_ADD,[Ec]:a.FUNC_SUBTRACT,[bc]:a.FUNC_REVERSE_SUBTRACT};C[Tc]=a.MIN,C[wc]=a.MAX;const le={[Ac]:a.ZERO,[Cc]:a.ONE,[Rc]:a.SRC_COLOR,[es]:a.SRC_ALPHA,[Fc]:a.SRC_ALPHA_SATURATE,[Dc]:a.DST_COLOR,[Uc]:a.DST_ALPHA,[Pc]:a.ONE_MINUS_SRC_COLOR,[ts]:a.ONE_MINUS_SRC_ALPHA,[Ic]:a.ONE_MINUS_DST_COLOR,[Lc]:a.ONE_MINUS_DST_ALPHA,[Nc]:a.CONSTANT_COLOR,[Oc]:a.ONE_MINUS_CONSTANT_COLOR,[Bc]:a.CONSTANT_ALPHA,[kc]:a.ONE_MINUS_CONSTANT_ALPHA};function Ce(B,ve,J,se,_e,Pe,Fe,We,Ve,De){if(B===In){g===!0&&(z(a.BLEND),g=!1);return}if(g===!1&&($(a.BLEND),g=!0),B!==Mc){if(B!==v||De!==P){if((p!==Zn||S!==Zn)&&(a.blendEquation(a.FUNC_ADD),p=Zn,S=Zn),De)switch(B){case wi:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case ks:a.blendFunc(a.ONE,a.ONE);break;case Gs:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case zs:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case wi:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case ks:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case Gs:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case zs:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}m=null,M=null,y=null,U=null,w.set(0,0,0),b=0,v=B,P=De}return}_e=_e||ve,Pe=Pe||J,Fe=Fe||se,(ve!==p||_e!==S)&&(a.blendEquationSeparate(C[ve],C[_e]),p=ve,S=_e),(J!==m||se!==M||Pe!==y||Fe!==U)&&(a.blendFuncSeparate(le[J],le[se],le[Pe],le[Fe]),m=J,M=se,y=Pe,U=Fe),(We.equals(w)===!1||Ve!==b)&&(a.blendColor(We.r,We.g,We.b,Ve),w.copy(We),b=Ve),v=B,P=!1}function Le(B,ve){B.side===en?z(a.CULL_FACE):$(a.CULL_FACE);let J=B.side===wt;ve&&(J=!J),ge(J),B.blending===wi&&B.transparent===!1?Ce(In):Ce(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),i.setFunc(B.depthFunc),i.setTest(B.depthTest),i.setMask(B.depthWrite),n.setMask(B.colorWrite);const se=B.stencilWrite;s.setTest(se),se&&(s.setMask(B.stencilWriteMask),s.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),s.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ue(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?$(a.SAMPLE_ALPHA_TO_COVERAGE):z(a.SAMPLE_ALPHA_TO_COVERAGE)}function ge(B){E!==B&&(B?a.frontFace(a.CW):a.frontFace(a.CCW),E=B)}function be(B){B!==xc?($(a.CULL_FACE),B!==x&&(B===Bs?a.cullFace(a.BACK):B===Sc?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):z(a.CULL_FACE),x=B}function Te(B){B!==L&&(H&&a.lineWidth(B),L=B)}function ue(B,ve,J){B?($(a.POLYGON_OFFSET_FILL),(R!==ve||I!==J)&&(a.polygonOffset(ve,J),R=ve,I=J)):z(a.POLYGON_OFFSET_FILL)}function Ae(B){B?$(a.SCISSOR_TEST):z(a.SCISSOR_TEST)}function A(B){B===void 0&&(B=a.TEXTURE0+N-1),q!==B&&(a.activeTexture(B),q=B)}function _(B,ve,J){J===void 0&&(q===null?J=a.TEXTURE0+N-1:J=q);let se=K[J];se===void 0&&(se={type:void 0,texture:void 0},K[J]=se),(se.type!==B||se.texture!==ve)&&(q!==J&&(a.activeTexture(J),q=J),a.bindTexture(B,ve||O[B]),se.type=B,se.texture=ve)}function G(){const B=K[q];B!==void 0&&B.type!==void 0&&(a.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function X(){try{a.compressedTexImage2D.apply(a,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ne(){try{a.compressedTexImage3D.apply(a,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Q(){try{a.texSubImage2D.apply(a,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function we(){try{a.texSubImage3D.apply(a,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function oe(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ce(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Me(){try{a.texStorage2D.apply(a,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function he(){try{a.texStorage3D.apply(a,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Se(){try{a.texImage2D.apply(a,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ne(){try{a.texImage3D.apply(a,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ye(B){V.equals(B)===!1&&(a.scissor(B.x,B.y,B.z,B.w),V.copy(B))}function de(B){ee.equals(B)===!1&&(a.viewport(B.x,B.y,B.z,B.w),ee.copy(B))}function me(B,ve){let J=l.get(ve);J===void 0&&(J=new WeakMap,l.set(ve,J));let se=J.get(B);se===void 0&&(se=a.getUniformBlockIndex(ve,B.name),J.set(B,se))}function Ie(B,ve){const se=l.get(ve).get(B);o.get(ve)!==se&&(a.uniformBlockBinding(ve,se,B.__bindingPointIndex),o.set(ve,se))}function He(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),c={},q=null,K={},u={},d=new WeakMap,h=[],f=null,g=!1,v=null,p=null,m=null,M=null,S=null,y=null,U=null,w=new Ye(0,0,0),b=0,P=!1,E=null,x=null,L=null,R=null,I=null,V.set(0,0,a.canvas.width,a.canvas.height),ee.set(0,0,a.canvas.width,a.canvas.height),n.reset(),i.reset(),s.reset()}return{buffers:{color:n,depth:i,stencil:s},enable:$,disable:z,bindFramebuffer:ae,drawBuffers:fe,useProgram:xe,setBlending:Ce,setMaterial:Le,setFlipSided:ge,setCullFace:be,setLineWidth:Te,setPolygonOffset:ue,setScissorTest:Ae,activeTexture:A,bindTexture:_,unbindTexture:G,compressedTexImage2D:X,compressedTexImage3D:ne,texImage2D:Se,texImage3D:Ne,updateUBOMapping:me,uniformBlockBinding:Ie,texStorage2D:Me,texStorage3D:he,texSubImage2D:Q,texSubImage3D:we,compressedTexSubImage2D:oe,compressedTexSubImage3D:ce,scissor:ye,viewport:de,reset:He}}function xm(a,e,t,r,n,i,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Je,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,_){return f?new OffscreenCanvas(A,_):Qr("canvas")}function v(A,_,G){let X=1;const ne=Ae(A);if((ne.width>G||ne.height>G)&&(X=G/Math.max(ne.width,ne.height)),X<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Q=Math.floor(X*ne.width),we=Math.floor(X*ne.height);d===void 0&&(d=g(Q,we));const oe=_?g(Q,we):d;return oe.width=Q,oe.height=we,oe.getContext("2d").drawImage(A,0,0,Q,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+Q+"x"+we+")."),oe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),A;return A}function p(A){return A.generateMipmaps&&A.minFilter!==qt&&A.minFilter!==Ot}function m(A){a.generateMipmap(A)}function M(A,_,G,X,ne=!1){if(A!==null){if(a[A]!==void 0)return a[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Q=_;if(_===a.RED&&(G===a.FLOAT&&(Q=a.R32F),G===a.HALF_FLOAT&&(Q=a.R16F),G===a.UNSIGNED_BYTE&&(Q=a.R8)),_===a.RED_INTEGER&&(G===a.UNSIGNED_BYTE&&(Q=a.R8UI),G===a.UNSIGNED_SHORT&&(Q=a.R16UI),G===a.UNSIGNED_INT&&(Q=a.R32UI),G===a.BYTE&&(Q=a.R8I),G===a.SHORT&&(Q=a.R16I),G===a.INT&&(Q=a.R32I)),_===a.RG&&(G===a.FLOAT&&(Q=a.RG32F),G===a.HALF_FLOAT&&(Q=a.RG16F),G===a.UNSIGNED_BYTE&&(Q=a.RG8)),_===a.RG_INTEGER&&(G===a.UNSIGNED_BYTE&&(Q=a.RG8UI),G===a.UNSIGNED_SHORT&&(Q=a.RG16UI),G===a.UNSIGNED_INT&&(Q=a.RG32UI),G===a.BYTE&&(Q=a.RG8I),G===a.SHORT&&(Q=a.RG16I),G===a.INT&&(Q=a.RG32I)),_===a.RGB&&G===a.UNSIGNED_INT_5_9_9_9_REV&&(Q=a.RGB9_E5),_===a.RGBA){const we=ne?jr:et.getTransfer(X);G===a.FLOAT&&(Q=a.RGBA32F),G===a.HALF_FLOAT&&(Q=a.RGBA16F),G===a.UNSIGNED_BYTE&&(Q=we===rt?a.SRGB8_ALPHA8:a.RGBA8),G===a.UNSIGNED_SHORT_4_4_4_4&&(Q=a.RGBA4),G===a.UNSIGNED_SHORT_5_5_5_1&&(Q=a.RGB5_A1)}return(Q===a.R16F||Q===a.R32F||Q===a.RG16F||Q===a.RG32F||Q===a.RGBA16F||Q===a.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function S(A,_){let G;return A?_===null||_===Ui||_===Li?G=a.DEPTH24_STENCIL8:_===Dn?G=a.DEPTH32F_STENCIL8:_===Yr&&(G=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Ui||_===Li?G=a.DEPTH_COMPONENT24:_===Dn?G=a.DEPTH_COMPONENT32F:_===Yr&&(G=a.DEPTH_COMPONENT16),G}function y(A,_){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==qt&&A.minFilter!==Ot?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function U(A){const _=A.target;_.removeEventListener("dispose",U),b(_),_.isVideoTexture&&u.delete(_)}function w(A){const _=A.target;_.removeEventListener("dispose",w),E(_)}function b(A){const _=r.get(A);if(_.__webglInit===void 0)return;const G=A.source,X=h.get(G);if(X){const ne=X[_.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&P(A),Object.keys(X).length===0&&h.delete(G)}r.remove(A)}function P(A){const _=r.get(A);a.deleteTexture(_.__webglTexture);const G=A.source,X=h.get(G);delete X[_.__cacheKey],s.memory.textures--}function E(A){const _=r.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(_.__webglFramebuffer[X]))for(let ne=0;ne<_.__webglFramebuffer[X].length;ne++)a.deleteFramebuffer(_.__webglFramebuffer[X][ne]);else a.deleteFramebuffer(_.__webglFramebuffer[X]);_.__webglDepthbuffer&&a.deleteRenderbuffer(_.__webglDepthbuffer[X])}else{if(Array.isArray(_.__webglFramebuffer))for(let X=0;X<_.__webglFramebuffer.length;X++)a.deleteFramebuffer(_.__webglFramebuffer[X]);else a.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&a.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&a.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let X=0;X<_.__webglColorRenderbuffer.length;X++)_.__webglColorRenderbuffer[X]&&a.deleteRenderbuffer(_.__webglColorRenderbuffer[X]);_.__webglDepthRenderbuffer&&a.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const G=A.textures;for(let X=0,ne=G.length;X<ne;X++){const Q=r.get(G[X]);Q.__webglTexture&&(a.deleteTexture(Q.__webglTexture),s.memory.textures--),r.remove(G[X])}r.remove(A)}let x=0;function L(){x=0}function R(){const A=x;return A>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+n.maxTextures),x+=1,A}function I(A){const _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function N(A,_){const G=r.get(A);if(A.isVideoTexture&&Te(A),A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){const X=A.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(G,A,_);return}}t.bindTexture(a.TEXTURE_2D,G.__webglTexture,a.TEXTURE0+_)}function H(A,_){const G=r.get(A);if(A.version>0&&G.__version!==A.version){ee(G,A,_);return}t.bindTexture(a.TEXTURE_2D_ARRAY,G.__webglTexture,a.TEXTURE0+_)}function k(A,_){const G=r.get(A);if(A.version>0&&G.__version!==A.version){ee(G,A,_);return}t.bindTexture(a.TEXTURE_3D,G.__webglTexture,a.TEXTURE0+_)}function Z(A,_){const G=r.get(A);if(A.version>0&&G.__version!==A.version){F(G,A,_);return}t.bindTexture(a.TEXTURE_CUBE_MAP,G.__webglTexture,a.TEXTURE0+_)}const q={[rs]:a.REPEAT,[$n]:a.CLAMP_TO_EDGE,[as]:a.MIRRORED_REPEAT},K={[qt]:a.NEAREST,[nu]:a.NEAREST_MIPMAP_NEAREST,[gr]:a.NEAREST_MIPMAP_LINEAR,[Ot]:a.LINEAR,[ma]:a.LINEAR_MIPMAP_NEAREST,[ei]:a.LINEAR_MIPMAP_LINEAR},Y={[mu]:a.NEVER,[yu]:a.ALWAYS,[gu]:a.LESS,[Nl]:a.LEQUAL,[vu]:a.EQUAL,[Su]:a.GEQUAL,[_u]:a.GREATER,[xu]:a.NOTEQUAL};function D(A,_){if(_.type===Dn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Ot||_.magFilter===ma||_.magFilter===gr||_.magFilter===ei||_.minFilter===Ot||_.minFilter===ma||_.minFilter===gr||_.minFilter===ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(A,a.TEXTURE_WRAP_S,q[_.wrapS]),a.texParameteri(A,a.TEXTURE_WRAP_T,q[_.wrapT]),(A===a.TEXTURE_3D||A===a.TEXTURE_2D_ARRAY)&&a.texParameteri(A,a.TEXTURE_WRAP_R,q[_.wrapR]),a.texParameteri(A,a.TEXTURE_MAG_FILTER,K[_.magFilter]),a.texParameteri(A,a.TEXTURE_MIN_FILTER,K[_.minFilter]),_.compareFunction&&(a.texParameteri(A,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(A,a.TEXTURE_COMPARE_FUNC,Y[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===qt||_.minFilter!==gr&&_.minFilter!==ei||_.type===Dn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||r.get(_).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");a.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,n.getMaxAnisotropy())),r.get(_).__currentAnisotropy=_.anisotropy}}}function V(A,_){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",U));const X=_.source;let ne=h.get(X);ne===void 0&&(ne={},h.set(X,ne));const Q=I(_);if(Q!==A.__cacheKey){ne[Q]===void 0&&(ne[Q]={texture:a.createTexture(),usedTimes:0},s.memory.textures++,G=!0),ne[Q].usedTimes++;const we=ne[A.__cacheKey];we!==void 0&&(ne[A.__cacheKey].usedTimes--,we.usedTimes===0&&P(_)),A.__cacheKey=Q,A.__webglTexture=ne[Q].texture}return G}function ee(A,_,G){let X=a.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(X=a.TEXTURE_2D_ARRAY),_.isData3DTexture&&(X=a.TEXTURE_3D);const ne=V(A,_),Q=_.source;t.bindTexture(X,A.__webglTexture,a.TEXTURE0+G);const we=r.get(Q);if(Q.version!==we.__version||ne===!0){t.activeTexture(a.TEXTURE0+G);const oe=et.getPrimaries(et.workingColorSpace),ce=_.colorSpace===Ln?null:et.getPrimaries(_.colorSpace),Me=_.colorSpace===Ln||oe===ce?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,_.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,_.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let he=v(_.image,!1,n.maxTextureSize);he=ue(_,he);const Se=i.convert(_.format,_.colorSpace),Ne=i.convert(_.type);let ye=M(_.internalFormat,Se,Ne,_.colorSpace,_.isVideoTexture);D(X,_);let de;const me=_.mipmaps,Ie=_.isVideoTexture!==!0,He=we.__version===void 0||ne===!0,B=Q.dataReady,ve=y(_,he);if(_.isDepthTexture)ye=S(_.format===Di,_.type),He&&(Ie?t.texStorage2D(a.TEXTURE_2D,1,ye,he.width,he.height):t.texImage2D(a.TEXTURE_2D,0,ye,he.width,he.height,0,Se,Ne,null));else if(_.isDataTexture)if(me.length>0){Ie&&He&&t.texStorage2D(a.TEXTURE_2D,ve,ye,me[0].width,me[0].height);for(let J=0,se=me.length;J<se;J++)de=me[J],Ie?B&&t.texSubImage2D(a.TEXTURE_2D,J,0,0,de.width,de.height,Se,Ne,de.data):t.texImage2D(a.TEXTURE_2D,J,ye,de.width,de.height,0,Se,Ne,de.data);_.generateMipmaps=!1}else Ie?(He&&t.texStorage2D(a.TEXTURE_2D,ve,ye,he.width,he.height),B&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,he.width,he.height,Se,Ne,he.data)):t.texImage2D(a.TEXTURE_2D,0,ye,he.width,he.height,0,Se,Ne,he.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ie&&He&&t.texStorage3D(a.TEXTURE_2D_ARRAY,ve,ye,me[0].width,me[0].height,he.depth);for(let J=0,se=me.length;J<se;J++)if(de=me[J],_.format!==cn)if(Se!==null)if(Ie){if(B)if(_.layerUpdates.size>0){for(const _e of _.layerUpdates){const Pe=de.width*de.height;t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,J,0,0,_e,de.width,de.height,1,Se,de.data.slice(Pe*_e,Pe*(_e+1)),0,0)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,J,0,0,0,de.width,de.height,he.depth,Se,de.data,0,0)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,J,ye,de.width,de.height,he.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?B&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,J,0,0,0,de.width,de.height,he.depth,Se,Ne,de.data):t.texImage3D(a.TEXTURE_2D_ARRAY,J,ye,de.width,de.height,he.depth,0,Se,Ne,de.data)}else{Ie&&He&&t.texStorage2D(a.TEXTURE_2D,ve,ye,me[0].width,me[0].height);for(let J=0,se=me.length;J<se;J++)de=me[J],_.format!==cn?Se!==null?Ie?B&&t.compressedTexSubImage2D(a.TEXTURE_2D,J,0,0,de.width,de.height,Se,de.data):t.compressedTexImage2D(a.TEXTURE_2D,J,ye,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?B&&t.texSubImage2D(a.TEXTURE_2D,J,0,0,de.width,de.height,Se,Ne,de.data):t.texImage2D(a.TEXTURE_2D,J,ye,de.width,de.height,0,Se,Ne,de.data)}else if(_.isDataArrayTexture)if(Ie){if(He&&t.texStorage3D(a.TEXTURE_2D_ARRAY,ve,ye,he.width,he.height,he.depth),B)if(_.layerUpdates.size>0){let J;switch(Ne){case a.UNSIGNED_BYTE:switch(Se){case a.ALPHA:J=1;break;case a.LUMINANCE:J=1;break;case a.LUMINANCE_ALPHA:J=2;break;case a.RGB:J=3;break;case a.RGBA:J=4;break;default:throw new Error(`Unknown texel size for format ${Se}.`)}break;case a.UNSIGNED_SHORT_4_4_4_4:case a.UNSIGNED_SHORT_5_5_5_1:case a.UNSIGNED_SHORT_5_6_5:J=1;break;default:throw new Error(`Unknown texel size for type ${Ne}.`)}const se=he.width*he.height*J;for(const _e of _.layerUpdates)t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,_e,he.width,he.height,1,Se,Ne,he.data.slice(se*_e,se*(_e+1)));_.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Se,Ne,he.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,ye,he.width,he.height,he.depth,0,Se,Ne,he.data);else if(_.isData3DTexture)Ie?(He&&t.texStorage3D(a.TEXTURE_3D,ve,ye,he.width,he.height,he.depth),B&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Se,Ne,he.data)):t.texImage3D(a.TEXTURE_3D,0,ye,he.width,he.height,he.depth,0,Se,Ne,he.data);else if(_.isFramebufferTexture){if(He)if(Ie)t.texStorage2D(a.TEXTURE_2D,ve,ye,he.width,he.height);else{let J=he.width,se=he.height;for(let _e=0;_e<ve;_e++)t.texImage2D(a.TEXTURE_2D,_e,ye,J,se,0,Se,Ne,null),J>>=1,se>>=1}}else if(me.length>0){if(Ie&&He){const J=Ae(me[0]);t.texStorage2D(a.TEXTURE_2D,ve,ye,J.width,J.height)}for(let J=0,se=me.length;J<se;J++)de=me[J],Ie?B&&t.texSubImage2D(a.TEXTURE_2D,J,0,0,Se,Ne,de):t.texImage2D(a.TEXTURE_2D,J,ye,Se,Ne,de);_.generateMipmaps=!1}else if(Ie){if(He){const J=Ae(he);t.texStorage2D(a.TEXTURE_2D,ve,ye,J.width,J.height)}B&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,Se,Ne,he)}else t.texImage2D(a.TEXTURE_2D,0,ye,Se,Ne,he);p(_)&&m(X),we.__version=Q.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function F(A,_,G){if(_.image.length!==6)return;const X=V(A,_),ne=_.source;t.bindTexture(a.TEXTURE_CUBE_MAP,A.__webglTexture,a.TEXTURE0+G);const Q=r.get(ne);if(ne.version!==Q.__version||X===!0){t.activeTexture(a.TEXTURE0+G);const we=et.getPrimaries(et.workingColorSpace),oe=_.colorSpace===Ln?null:et.getPrimaries(_.colorSpace),ce=_.colorSpace===Ln||we===oe?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,_.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,_.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const Me=_.isCompressedTexture||_.image[0].isCompressedTexture,he=_.image[0]&&_.image[0].isDataTexture,Se=[];for(let se=0;se<6;se++)!Me&&!he?Se[se]=v(_.image[se],!0,n.maxCubemapSize):Se[se]=he?_.image[se].image:_.image[se],Se[se]=ue(_,Se[se]);const Ne=Se[0],ye=i.convert(_.format,_.colorSpace),de=i.convert(_.type),me=M(_.internalFormat,ye,de,_.colorSpace),Ie=_.isVideoTexture!==!0,He=Q.__version===void 0||X===!0,B=ne.dataReady;let ve=y(_,Ne);D(a.TEXTURE_CUBE_MAP,_);let J;if(Me){Ie&&He&&t.texStorage2D(a.TEXTURE_CUBE_MAP,ve,me,Ne.width,Ne.height);for(let se=0;se<6;se++){J=Se[se].mipmaps;for(let _e=0;_e<J.length;_e++){const Pe=J[_e];_.format!==cn?ye!==null?Ie?B&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,_e,0,0,Pe.width,Pe.height,ye,Pe.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,_e,me,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?B&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,_e,0,0,Pe.width,Pe.height,ye,de,Pe.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,_e,me,Pe.width,Pe.height,0,ye,de,Pe.data)}}}else{if(J=_.mipmaps,Ie&&He){J.length>0&&ve++;const se=Ae(Se[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,ve,me,se.width,se.height)}for(let se=0;se<6;se++)if(he){Ie?B&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Se[se].width,Se[se].height,ye,de,Se[se].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,me,Se[se].width,Se[se].height,0,ye,de,Se[se].data);for(let _e=0;_e<J.length;_e++){const Fe=J[_e].image[se].image;Ie?B&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,_e+1,0,0,Fe.width,Fe.height,ye,de,Fe.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,_e+1,me,Fe.width,Fe.height,0,ye,de,Fe.data)}}else{Ie?B&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ye,de,Se[se]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,me,ye,de,Se[se]);for(let _e=0;_e<J.length;_e++){const Pe=J[_e];Ie?B&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,_e+1,0,0,ye,de,Pe.image[se]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+se,_e+1,me,ye,de,Pe.image[se])}}}p(_)&&m(a.TEXTURE_CUBE_MAP),Q.__version=ne.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function O(A,_,G,X,ne,Q){const we=i.convert(G.format,G.colorSpace),oe=i.convert(G.type),ce=M(G.internalFormat,we,oe,G.colorSpace);if(!r.get(_).__hasExternalTextures){const he=Math.max(1,_.width>>Q),Se=Math.max(1,_.height>>Q);ne===a.TEXTURE_3D||ne===a.TEXTURE_2D_ARRAY?t.texImage3D(ne,Q,ce,he,Se,_.depth,0,we,oe,null):t.texImage2D(ne,Q,ce,he,Se,0,we,oe,null)}t.bindFramebuffer(a.FRAMEBUFFER,A),be(_)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,X,ne,r.get(G).__webglTexture,0,ge(_)):(ne===a.TEXTURE_2D||ne>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,X,ne,r.get(G).__webglTexture,Q),t.bindFramebuffer(a.FRAMEBUFFER,null)}function $(A,_,G){if(a.bindRenderbuffer(a.RENDERBUFFER,A),_.depthBuffer){const X=_.depthTexture,ne=X&&X.isDepthTexture?X.type:null,Q=S(_.stencilBuffer,ne),we=_.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,oe=ge(_);be(_)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,oe,Q,_.width,_.height):G?a.renderbufferStorageMultisample(a.RENDERBUFFER,oe,Q,_.width,_.height):a.renderbufferStorage(a.RENDERBUFFER,Q,_.width,_.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,we,a.RENDERBUFFER,A)}else{const X=_.textures;for(let ne=0;ne<X.length;ne++){const Q=X[ne],we=i.convert(Q.format,Q.colorSpace),oe=i.convert(Q.type),ce=M(Q.internalFormat,we,oe,Q.colorSpace),Me=ge(_);G&&be(_)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,Me,ce,_.width,_.height):be(_)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Me,ce,_.width,_.height):a.renderbufferStorage(a.RENDERBUFFER,ce,_.width,_.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function z(A,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(a.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),N(_.depthTexture,0);const X=r.get(_.depthTexture).__webglTexture,ne=ge(_);if(_.depthTexture.format===Ai)be(_)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,X,0,ne):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,X,0);else if(_.depthTexture.format===Di)be(_)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,X,0,ne):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,X,0);else throw new Error("Unknown depthTexture format")}function ae(A){const _=r.get(A),G=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!_.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");z(_.__webglFramebuffer,A)}else if(G){_.__webglDepthbuffer=[];for(let X=0;X<6;X++)t.bindFramebuffer(a.FRAMEBUFFER,_.__webglFramebuffer[X]),_.__webglDepthbuffer[X]=a.createRenderbuffer(),$(_.__webglDepthbuffer[X],A,!1)}else t.bindFramebuffer(a.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=a.createRenderbuffer(),$(_.__webglDepthbuffer,A,!1);t.bindFramebuffer(a.FRAMEBUFFER,null)}function fe(A,_,G){const X=r.get(A);_!==void 0&&O(X.__webglFramebuffer,A,A.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),G!==void 0&&ae(A)}function xe(A){const _=A.texture,G=r.get(A),X=r.get(_);A.addEventListener("dispose",w);const ne=A.textures,Q=A.isWebGLCubeRenderTarget===!0,we=ne.length>1;if(we||(X.__webglTexture===void 0&&(X.__webglTexture=a.createTexture()),X.__version=_.version,s.memory.textures++),Q){G.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(_.mipmaps&&_.mipmaps.length>0){G.__webglFramebuffer[oe]=[];for(let ce=0;ce<_.mipmaps.length;ce++)G.__webglFramebuffer[oe][ce]=a.createFramebuffer()}else G.__webglFramebuffer[oe]=a.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){G.__webglFramebuffer=[];for(let oe=0;oe<_.mipmaps.length;oe++)G.__webglFramebuffer[oe]=a.createFramebuffer()}else G.__webglFramebuffer=a.createFramebuffer();if(we)for(let oe=0,ce=ne.length;oe<ce;oe++){const Me=r.get(ne[oe]);Me.__webglTexture===void 0&&(Me.__webglTexture=a.createTexture(),s.memory.textures++)}if(A.samples>0&&be(A)===!1){G.__webglMultisampledFramebuffer=a.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let oe=0;oe<ne.length;oe++){const ce=ne[oe];G.__webglColorRenderbuffer[oe]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,G.__webglColorRenderbuffer[oe]);const Me=i.convert(ce.format,ce.colorSpace),he=i.convert(ce.type),Se=M(ce.internalFormat,Me,he,ce.colorSpace,A.isXRRenderTarget===!0),Ne=ge(A);a.renderbufferStorageMultisample(a.RENDERBUFFER,Ne,Se,A.width,A.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+oe,a.RENDERBUFFER,G.__webglColorRenderbuffer[oe])}a.bindRenderbuffer(a.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=a.createRenderbuffer(),$(G.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(Q){t.bindTexture(a.TEXTURE_CUBE_MAP,X.__webglTexture),D(a.TEXTURE_CUBE_MAP,_);for(let oe=0;oe<6;oe++)if(_.mipmaps&&_.mipmaps.length>0)for(let ce=0;ce<_.mipmaps.length;ce++)O(G.__webglFramebuffer[oe][ce],A,_,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ce);else O(G.__webglFramebuffer[oe],A,_,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);p(_)&&m(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let oe=0,ce=ne.length;oe<ce;oe++){const Me=ne[oe],he=r.get(Me);t.bindTexture(a.TEXTURE_2D,he.__webglTexture),D(a.TEXTURE_2D,Me),O(G.__webglFramebuffer,A,Me,a.COLOR_ATTACHMENT0+oe,a.TEXTURE_2D,0),p(Me)&&m(a.TEXTURE_2D)}t.unbindTexture()}else{let oe=a.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(oe=A.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(oe,X.__webglTexture),D(oe,_),_.mipmaps&&_.mipmaps.length>0)for(let ce=0;ce<_.mipmaps.length;ce++)O(G.__webglFramebuffer[ce],A,_,a.COLOR_ATTACHMENT0,oe,ce);else O(G.__webglFramebuffer,A,_,a.COLOR_ATTACHMENT0,oe,0);p(_)&&m(oe),t.unbindTexture()}A.depthBuffer&&ae(A)}function C(A){const _=A.textures;for(let G=0,X=_.length;G<X;G++){const ne=_[G];if(p(ne)){const Q=A.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:a.TEXTURE_2D,we=r.get(ne).__webglTexture;t.bindTexture(Q,we),m(Q),t.unbindTexture()}}}const le=[],Ce=[];function Le(A){if(A.samples>0){if(be(A)===!1){const _=A.textures,G=A.width,X=A.height;let ne=a.COLOR_BUFFER_BIT;const Q=A.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,we=r.get(A),oe=_.length>1;if(oe)for(let ce=0;ce<_.length;ce++)t.bindFramebuffer(a.FRAMEBUFFER,we.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ce,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,we.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+ce,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let ce=0;ce<_.length;ce++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ne|=a.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ne|=a.STENCIL_BUFFER_BIT)),oe){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,we.__webglColorRenderbuffer[ce]);const Me=r.get(_[ce]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Me,0)}a.blitFramebuffer(0,0,G,X,0,0,G,X,ne,a.NEAREST),l===!0&&(le.length=0,Ce.length=0,le.push(a.COLOR_ATTACHMENT0+ce),A.depthBuffer&&A.resolveDepthBuffer===!1&&(le.push(Q),Ce.push(Q),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,Ce)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,le))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),oe)for(let ce=0;ce<_.length;ce++){t.bindFramebuffer(a.FRAMEBUFFER,we.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ce,a.RENDERBUFFER,we.__webglColorRenderbuffer[ce]);const Me=r.get(_[ce]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,we.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+ce,a.TEXTURE_2D,Me,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const _=A.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[_])}}}function ge(A){return Math.min(n.maxSamples,A.samples)}function be(A){const _=r.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Te(A){const _=s.render.frame;u.get(A)!==_&&(u.set(A,_),A.update())}function ue(A,_){const G=A.colorSpace,X=A.format,ne=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==kn&&G!==Ln&&(et.getTransfer(G)===rt?(X!==cn||ne!==On)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),_}function Ae(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=R,this.resetTextureUnits=L,this.setTexture2D=N,this.setTexture2DArray=H,this.setTexture3D=k,this.setTextureCube=Z,this.rebindTextures=fe,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=C,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=O,this.useMultisampledRTT=be}function Sm(a,e){function t(r,n=Ln){let i;const s=et.getTransfer(n);if(r===On)return a.UNSIGNED_BYTE;if(r===Rl)return a.UNSIGNED_SHORT_4_4_4_4;if(r===Pl)return a.UNSIGNED_SHORT_5_5_5_1;if(r===au)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===iu)return a.BYTE;if(r===ru)return a.SHORT;if(r===Yr)return a.UNSIGNED_SHORT;if(r===Cl)return a.INT;if(r===Ui)return a.UNSIGNED_INT;if(r===Dn)return a.FLOAT;if(r===ea)return a.HALF_FLOAT;if(r===su)return a.ALPHA;if(r===ou)return a.RGB;if(r===cn)return a.RGBA;if(r===lu)return a.LUMINANCE;if(r===cu)return a.LUMINANCE_ALPHA;if(r===Ai)return a.DEPTH_COMPONENT;if(r===Di)return a.DEPTH_STENCIL;if(r===uu)return a.RED;if(r===Ul)return a.RED_INTEGER;if(r===hu)return a.RG;if(r===Ll)return a.RG_INTEGER;if(r===Dl)return a.RGBA_INTEGER;if(r===ga||r===va||r===_a||r===xa)if(s===rt)if(i=e.get("WEBGL_compressed_texture_s3tc_srgb"),i!==null){if(r===ga)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===va)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===_a)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===xa)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=e.get("WEBGL_compressed_texture_s3tc"),i!==null){if(r===ga)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===va)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===_a)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===xa)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Hs||r===Vs||r===Ws||r===Xs)if(i=e.get("WEBGL_compressed_texture_pvrtc"),i!==null){if(r===Hs)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Vs)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ws)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Xs)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===qs||r===Ys||r===js)if(i=e.get("WEBGL_compressed_texture_etc"),i!==null){if(r===qs||r===Ys)return s===rt?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(r===js)return s===rt?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ks||r===Js||r===Zs||r===Qs||r===$s||r===eo||r===to||r===no||r===io||r===ro||r===ao||r===so||r===oo||r===lo)if(i=e.get("WEBGL_compressed_texture_astc"),i!==null){if(r===Ks)return s===rt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Js)return s===rt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Zs)return s===rt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Qs)return s===rt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===$s)return s===rt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===eo)return s===rt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===to)return s===rt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===no)return s===rt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===io)return s===rt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ro)return s===rt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ao)return s===rt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===so)return s===rt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===oo)return s===rt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===lo)return s===rt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Sa||r===co||r===uo)if(i=e.get("EXT_texture_compression_bptc"),i!==null){if(r===Sa)return s===rt?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===co)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===uo)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===du||r===ho||r===fo||r===po)if(i=e.get("EXT_texture_compression_rgtc"),i!==null){if(r===Sa)return i.COMPRESSED_RED_RGTC1_EXT;if(r===ho)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===fo)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===po)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Li?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:t}}class ym extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Br extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mm={type:"move"};class Ya{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Br,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Br,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Br,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let n=null,i=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,r),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,r),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,r),n===null&&i!==null&&(n=i),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mm)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=i!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Br;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Em=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bm=`
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

}`;class Tm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const n=new At,i=e.properties.get(n);i.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Bn({vertexShader:Em,fragmentShader:bm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xt(new ii(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class wm extends Fi{constructor(e,t){super();const r=this;let n=null,i=1,s=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null;const v=new Tm,p=t.getContextAttributes();let m=null,M=null;const S=[],y=[],U=new Je;let w=null;const b=new Wt;b.layers.enable(1),b.viewport=new ht;const P=new Wt;P.layers.enable(2),P.viewport=new ht;const E=[b,P],x=new ym;x.layers.enable(1),x.layers.enable(2);let L=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let O=S[F];return O===void 0&&(O=new Ya,S[F]=O),O.getTargetRaySpace()},this.getControllerGrip=function(F){let O=S[F];return O===void 0&&(O=new Ya,S[F]=O),O.getGripSpace()},this.getHand=function(F){let O=S[F];return O===void 0&&(O=new Ya,S[F]=O),O.getHandSpace()};function I(F){const O=y.indexOf(F.inputSource);if(O===-1)return;const $=S[O];$!==void 0&&($.update(F.inputSource,F.frame,c||s),$.dispatchEvent({type:F.type,data:F.inputSource}))}function N(){n.removeEventListener("select",I),n.removeEventListener("selectstart",I),n.removeEventListener("selectend",I),n.removeEventListener("squeeze",I),n.removeEventListener("squeezestart",I),n.removeEventListener("squeezeend",I),n.removeEventListener("end",N),n.removeEventListener("inputsourceschange",H);for(let F=0;F<S.length;F++){const O=y[F];O!==null&&(y[F]=null,S[F].disconnect(O))}L=null,R=null,v.reset(),e.setRenderTarget(m),f=null,h=null,d=null,n=null,M=null,ee.stop(),r.isPresenting=!1,e.setPixelRatio(w),e.setSize(U.width,U.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){i=F,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){o=F,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(F){if(n=F,n!==null){if(m=e.getRenderTarget(),n.addEventListener("select",I),n.addEventListener("selectstart",I),n.addEventListener("selectend",I),n.addEventListener("squeeze",I),n.addEventListener("squeezestart",I),n.addEventListener("squeezeend",I),n.addEventListener("end",N),n.addEventListener("inputsourceschange",H),p.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(U),n.renderState.layers===void 0){const O={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(n,t,O),n.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new ni(f.framebufferWidth,f.framebufferHeight,{format:cn,type:On,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let O=null,$=null,z=null;p.depth&&(z=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,O=p.stencil?Di:Ai,$=p.stencil?Li:Ui);const ae={colorFormat:t.RGBA8,depthFormat:z,scaleFactor:i};d=new XRWebGLBinding(n,t),h=d.createProjectionLayer(ae),n.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new ni(h.textureWidth,h.textureHeight,{format:cn,type:On,depthTexture:new Jl(h.textureWidth,h.textureHeight,$,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await n.requestReferenceSpace(o),ee.setContext(n),ee.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function H(F){for(let O=0;O<F.removed.length;O++){const $=F.removed[O],z=y.indexOf($);z>=0&&(y[z]=null,S[z].disconnect($))}for(let O=0;O<F.added.length;O++){const $=F.added[O];let z=y.indexOf($);if(z===-1){for(let fe=0;fe<S.length;fe++)if(fe>=y.length){y.push($),z=fe;break}else if(y[fe]===null){y[fe]=$,z=fe;break}if(z===-1)break}const ae=S[z];ae&&ae.connect($)}}const k=new te,Z=new te;function q(F,O,$){k.setFromMatrixPosition(O.matrixWorld),Z.setFromMatrixPosition($.matrixWorld);const z=k.distanceTo(Z),ae=O.projectionMatrix.elements,fe=$.projectionMatrix.elements,xe=ae[14]/(ae[10]-1),C=ae[14]/(ae[10]+1),le=(ae[9]+1)/ae[5],Ce=(ae[9]-1)/ae[5],Le=(ae[8]-1)/ae[0],ge=(fe[8]+1)/fe[0],be=xe*Le,Te=xe*ge,ue=z/(-Le+ge),Ae=ue*-Le;O.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(Ae),F.translateZ(ue),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const A=xe+ue,_=C+ue,G=be-Ae,X=Te+(z-Ae),ne=le*C/_*A,Q=Ce*C/_*A;F.projectionMatrix.makePerspective(G,X,ne,Q,A,_),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}function K(F,O){O===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(O.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(n===null)return;v.texture!==null&&(F.near=v.depthNear,F.far=v.depthFar),x.near=P.near=b.near=F.near,x.far=P.far=b.far=F.far,(L!==x.near||R!==x.far)&&(n.updateRenderState({depthNear:x.near,depthFar:x.far}),L=x.near,R=x.far,b.near=L,b.far=R,P.near=L,P.far=R,b.updateProjectionMatrix(),P.updateProjectionMatrix(),F.updateProjectionMatrix());const O=F.parent,$=x.cameras;K(x,O);for(let z=0;z<$.length;z++)K($[z],O);$.length===2?q(x,b,P):x.projectionMatrix.copy(b.projectionMatrix),Y(F,x,O)};function Y(F,O,$){$===null?F.matrix.copy(O.matrixWorld):(F.matrix.copy($.matrixWorld),F.matrix.invert(),F.matrix.multiply(O.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(O.projectionMatrix),F.projectionMatrixInverse.copy(O.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=ss*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(F){l=F,h!==null&&(h.fixedFoveation=F),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=F)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let D=null;function V(F,O){if(u=O.getViewerPose(c||s),g=O,u!==null){const $=u.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let z=!1;$.length!==x.cameras.length&&(x.cameras.length=0,z=!0);for(let fe=0;fe<$.length;fe++){const xe=$[fe];let C=null;if(f!==null)C=f.getViewport(xe);else{const Ce=d.getViewSubImage(h,xe);C=Ce.viewport,fe===0&&(e.setRenderTargetTextures(M,Ce.colorTexture,h.ignoreDepthValues?void 0:Ce.depthStencilTexture),e.setRenderTarget(M))}let le=E[fe];le===void 0&&(le=new Wt,le.layers.enable(fe),le.viewport=new ht,E[fe]=le),le.matrix.fromArray(xe.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(xe.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(C.x,C.y,C.width,C.height),fe===0&&(x.matrix.copy(le.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),z===!0&&x.cameras.push(le)}const ae=n.enabledFeatures;if(ae&&ae.includes("depth-sensing")){const fe=d.getDepthInformation($[0]);fe&&fe.isValid&&fe.texture&&v.init(e,fe,n.renderState)}}for(let $=0;$<S.length;$++){const z=y[$],ae=S[$];z!==null&&ae!==void 0&&ae.update(z,O,c||s)}D&&D(F,O),O.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:O}),g=null}const ee=new Kl;ee.setAnimationLoop(V),this.setAnimationLoop=function(F){D=F},this.dispose=function(){}}}const Yn=new un,Am=new lt;function Cm(a,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function r(p,m){m.color.getRGB(p.fogColor.value,Xl(a)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,M,S,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?i(p,m):m.isMeshToonMaterial?(i(p,m),d(p,m)):m.isMeshPhongMaterial?(i(p,m),u(p,m)):m.isMeshStandardMaterial?(i(p,m),h(p,m),m.isMeshPhysicalMaterial&&f(p,m,y)):m.isMeshMatcapMaterial?(i(p,m),g(p,m)):m.isMeshDepthMaterial?i(p,m):m.isMeshDistanceMaterial?(i(p,m),v(p,m)):m.isMeshNormalMaterial?i(p,m):m.isLineBasicMaterial?(s(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,M,S):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===wt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===wt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const M=e.get(m),S=M.envMap,y=M.envMapRotation;S&&(p.envMap.value=S,Yn.copy(y),Yn.x*=-1,Yn.y*=-1,Yn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Yn.y*=-1,Yn.z*=-1),p.envMapRotation.value.setFromMatrix4(Am.makeRotationFromEuler(Yn)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function s(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,M,S){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=S*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,M){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===wt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const M=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:n}}function Rm(a,e,t,r){let n={},i={},s=[];const o=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,S){const y=S.program;r.uniformBlockBinding(M,y)}function c(M,S){let y=n[M.id];y===void 0&&(g(M),y=u(M),n[M.id]=y,M.addEventListener("dispose",p));const U=S.program;r.updateUBOMapping(M,U);const w=e.render.frame;i[M.id]!==w&&(h(M),i[M.id]=w)}function u(M){const S=d();M.__bindingPointIndex=S;const y=a.createBuffer(),U=M.__size,w=M.usage;return a.bindBuffer(a.UNIFORM_BUFFER,y),a.bufferData(a.UNIFORM_BUFFER,U,w),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,S,y),y}function d(){for(let M=0;M<o;M++)if(s.indexOf(M)===-1)return s.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const S=n[M.id],y=M.uniforms,U=M.__cache;a.bindBuffer(a.UNIFORM_BUFFER,S);for(let w=0,b=y.length;w<b;w++){const P=Array.isArray(y[w])?y[w]:[y[w]];for(let E=0,x=P.length;E<x;E++){const L=P[E];if(f(L,w,E,U)===!0){const R=L.__offset,I=Array.isArray(L.value)?L.value:[L.value];let N=0;for(let H=0;H<I.length;H++){const k=I[H],Z=v(k);typeof k=="number"||typeof k=="boolean"?(L.__data[0]=k,a.bufferSubData(a.UNIFORM_BUFFER,R+N,L.__data)):k.isMatrix3?(L.__data[0]=k.elements[0],L.__data[1]=k.elements[1],L.__data[2]=k.elements[2],L.__data[3]=0,L.__data[4]=k.elements[3],L.__data[5]=k.elements[4],L.__data[6]=k.elements[5],L.__data[7]=0,L.__data[8]=k.elements[6],L.__data[9]=k.elements[7],L.__data[10]=k.elements[8],L.__data[11]=0):(k.toArray(L.__data,N),N+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,R,L.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function f(M,S,y,U){const w=M.value,b=S+"_"+y;if(U[b]===void 0)return typeof w=="number"||typeof w=="boolean"?U[b]=w:U[b]=w.clone(),!0;{const P=U[b];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return U[b]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function g(M){const S=M.uniforms;let y=0;const U=16;for(let b=0,P=S.length;b<P;b++){const E=Array.isArray(S[b])?S[b]:[S[b]];for(let x=0,L=E.length;x<L;x++){const R=E[x],I=Array.isArray(R.value)?R.value:[R.value];for(let N=0,H=I.length;N<H;N++){const k=I[N],Z=v(k),q=y%U;q!==0&&U-q<Z.boundary&&(y+=U-q),R.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=y,y+=Z.storage}}}const w=y%U;return w>0&&(y+=U-w),M.__size=y,M.__cache={},this}function v(M){const S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),S}function p(M){const S=M.target;S.removeEventListener("dispose",p);const y=s.indexOf(S.__bindingPointIndex);s.splice(y,1),a.deleteBuffer(n[S.id]),delete n[S.id],delete i[S.id]}function m(){for(const M in n)a.deleteBuffer(n[M]);s=[],n={},i={}}return{bind:l,update:c,dispose:m}}class Pm{constructor(e={}){const{canvas:t=Eu(),context:r=null,depth:n=!0,stencil:i=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=r.getContextAttributes().alpha}else h=s;const f=new Uint32Array(4),g=new Int32Array(4);let v=null,p=null;const m=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=sn,this.toneMapping=Fn,this.toneMappingExposure=1;const S=this;let y=!1,U=0,w=0,b=null,P=-1,E=null;const x=new ht,L=new ht;let R=null;const I=new Ye(0);let N=0,H=t.width,k=t.height,Z=1,q=null,K=null;const Y=new ht(0,0,H,k),D=new ht(0,0,H,k);let V=!1;const ee=new gs;let F=!1,O=!1;const $=new lt,z=new te,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let fe=!1;function xe(){return b===null?Z:1}let C=r;function le(T,W){return t.getContext(T,W)}try{const T={alpha:!0,depth:n,stencil:i,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ds}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",J,!1),t.addEventListener("webglcontextcreationerror",se,!1),C===null){const W="webgl2";if(C=le(W,T),C===null)throw le(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ce,Le,ge,be,Te,ue,Ae,A,_,G,X,ne,Q,we,oe,ce,Me,he,Se,Ne,ye,de,me,Ie;function He(){Ce=new Gf(C),Ce.init(),de=new Sm(C,Ce),Le=new If(C,Ce,e,de),ge=new _m(C),be=new Vf(C),Te=new sm,ue=new xm(C,Ce,ge,Te,Le,de,be),Ae=new Nf(S),A=new kf(S),_=new Ku(C),me=new Lf(C,_),G=new zf(C,_,be,me),X=new Xf(C,G,_,be),Se=new Wf(C,Le,ue),ce=new Ff(Te),ne=new am(S,Ae,A,Ce,Le,me,ce),Q=new Cm(S,Te),we=new lm,oe=new pm(Ce),he=new Uf(S,Ae,A,ge,X,h,l),Me=new vm(S,X,Le),Ie=new Rm(C,be,Le,ge),Ne=new Df(C,Ce,be),ye=new Hf(C,Ce,be),be.programs=ne.programs,S.capabilities=Le,S.extensions=Ce,S.properties=Te,S.renderLists=we,S.shadowMap=Me,S.state=ge,S.info=be}He();const B=new wm(S,C);this.xr=B,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const T=Ce.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ce.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(T){T!==void 0&&(Z=T,this.setSize(H,k,!1))},this.getSize=function(T){return T.set(H,k)},this.setSize=function(T,W,ie=!0){if(B.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=T,k=W,t.width=Math.floor(T*Z),t.height=Math.floor(W*Z),ie===!0&&(t.style.width=T+"px",t.style.height=W+"px"),this.setViewport(0,0,T,W)},this.getDrawingBufferSize=function(T){return T.set(H*Z,k*Z).floor()},this.setDrawingBufferSize=function(T,W,ie){H=T,k=W,Z=ie,t.width=Math.floor(T*ie),t.height=Math.floor(W*ie),this.setViewport(0,0,T,W)},this.getCurrentViewport=function(T){return T.copy(x)},this.getViewport=function(T){return T.copy(Y)},this.setViewport=function(T,W,ie,re){T.isVector4?Y.set(T.x,T.y,T.z,T.w):Y.set(T,W,ie,re),ge.viewport(x.copy(Y).multiplyScalar(Z).round())},this.getScissor=function(T){return T.copy(D)},this.setScissor=function(T,W,ie,re){T.isVector4?D.set(T.x,T.y,T.z,T.w):D.set(T,W,ie,re),ge.scissor(L.copy(D).multiplyScalar(Z).round())},this.getScissorTest=function(){return V},this.setScissorTest=function(T){ge.setScissorTest(V=T)},this.setOpaqueSort=function(T){q=T},this.setTransparentSort=function(T){K=T},this.getClearColor=function(T){return T.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor.apply(he,arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha.apply(he,arguments)},this.clear=function(T=!0,W=!0,ie=!0){let re=0;if(T){let j=!1;if(b!==null){const Ee=b.texture.format;j=Ee===Dl||Ee===Ll||Ee===Ul}if(j){const Ee=b.texture.type,Ue=Ee===On||Ee===Ui||Ee===Yr||Ee===Li||Ee===Rl||Ee===Pl,Oe=he.getClearColor(),Be=he.getClearAlpha(),pe=Oe.r,Ge=Oe.g,ze=Oe.b;Ue?(f[0]=pe,f[1]=Ge,f[2]=ze,f[3]=Be,C.clearBufferuiv(C.COLOR,0,f)):(g[0]=pe,g[1]=Ge,g[2]=ze,g[3]=Be,C.clearBufferiv(C.COLOR,0,g))}else re|=C.COLOR_BUFFER_BIT}W&&(re|=C.DEPTH_BUFFER_BIT),ie&&(re|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",J,!1),t.removeEventListener("webglcontextcreationerror",se,!1),we.dispose(),oe.dispose(),Te.dispose(),Ae.dispose(),A.dispose(),X.dispose(),me.dispose(),Ie.dispose(),ne.dispose(),B.dispose(),B.removeEventListener("sessionstart",Ze),B.removeEventListener("sessionend",nt),at.stop()};function ve(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function J(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const T=be.autoReset,W=Me.enabled,ie=Me.autoUpdate,re=Me.needsUpdate,j=Me.type;He(),be.autoReset=T,Me.enabled=W,Me.autoUpdate=ie,Me.needsUpdate=re,Me.type=j}function se(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function _e(T){const W=T.target;W.removeEventListener("dispose",_e),Pe(W)}function Pe(T){Fe(T),Te.remove(T)}function Fe(T){const W=Te.get(T).programs;W!==void 0&&(W.forEach(function(ie){ne.releaseProgram(ie)}),T.isShaderMaterial&&ne.releaseShaderCache(T))}this.renderBufferDirect=function(T,W,ie,re,j,Ee){W===null&&(W=ae);const Ue=j.isMesh&&j.matrixWorld.determinant()<0,Oe=dn(T,W,ie,re,j);ge.setMaterial(re,Ue);let Be=ie.index,pe=1;if(re.wireframe===!0){if(Be=G.getWireframeAttribute(ie),Be===void 0)return;pe=2}const Ge=ie.drawRange,ze=ie.attributes.position;let Ke=Ge.start*pe,tt=(Ge.start+Ge.count)*pe;Ee!==null&&(Ke=Math.max(Ke,Ee.start*pe),tt=Math.min(tt,(Ee.start+Ee.count)*pe)),Be!==null?(Ke=Math.max(Ke,0),tt=Math.min(tt,Be.count)):ze!=null&&(Ke=Math.max(Ke,0),tt=Math.min(tt,ze.count));const it=tt-Ke;if(it<0||it===1/0)return;me.setup(j,re,Oe,ie,Be);let vt,Qe=Ne;if(Be!==null&&(vt=_.get(Be),Qe=ye,Qe.setIndex(vt)),j.isMesh)re.wireframe===!0?(ge.setLineWidth(re.wireframeLinewidth*xe()),Qe.setMode(C.LINES)):Qe.setMode(C.TRIANGLES);else if(j.isLine){let ke=re.linewidth;ke===void 0&&(ke=1),ge.setLineWidth(ke*xe()),j.isLineSegments?Qe.setMode(C.LINES):j.isLineLoop?Qe.setMode(C.LINE_LOOP):Qe.setMode(C.LINE_STRIP)}else j.isPoints?Qe.setMode(C.POINTS):j.isSprite&&Qe.setMode(C.TRIANGLES);if(j.isBatchedMesh)j._multiDrawInstances!==null?Qe.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances):Qe.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else if(j.isInstancedMesh)Qe.renderInstances(Ke,it,j.count);else if(ie.isInstancedBufferGeometry){const ke=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,mt=Math.min(ie.instanceCount,ke);Qe.renderInstances(Ke,it,mt)}else Qe.render(Ke,it)};function We(T,W,ie){T.transparent===!0&&T.side===en&&T.forceSinglePass===!1?(T.side=wt,T.needsUpdate=!0,kt(T,W,ie),T.side=yn,T.needsUpdate=!0,kt(T,W,ie),T.side=en):kt(T,W,ie)}this.compile=function(T,W,ie=null){ie===null&&(ie=T),p=oe.get(ie),p.init(W),M.push(p),ie.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(p.pushLight(j),j.castShadow&&p.pushShadow(j))}),T!==ie&&T.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(p.pushLight(j),j.castShadow&&p.pushShadow(j))}),p.setupLights();const re=new Set;return T.traverse(function(j){const Ee=j.material;if(Ee)if(Array.isArray(Ee))for(let Ue=0;Ue<Ee.length;Ue++){const Oe=Ee[Ue];We(Oe,ie,j),re.add(Oe)}else We(Ee,ie,j),re.add(Ee)}),M.pop(),p=null,re},this.compileAsync=function(T,W,ie=null){const re=this.compile(T,W,ie);return new Promise(j=>{function Ee(){if(re.forEach(function(Ue){Te.get(Ue).currentProgram.isReady()&&re.delete(Ue)}),re.size===0){j(T);return}setTimeout(Ee,10)}Ce.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Ve=null;function De(T){Ve&&Ve(T)}function Ze(){at.stop()}function nt(){at.start()}const at=new Kl;at.setAnimationLoop(De),typeof self<"u"&&at.setContext(self),this.setAnimationLoop=function(T){Ve=T,B.setAnimationLoop(T),T===null?at.stop():at.start()},B.addEventListener("sessionstart",Ze),B.addEventListener("sessionend",nt),this.render=function(T,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),B.enabled===!0&&B.isPresenting===!0&&(B.cameraAutoUpdate===!0&&B.updateCamera(W),W=B.getCamera()),T.isScene===!0&&T.onBeforeRender(S,T,W,b),p=oe.get(T,M.length),p.init(W),M.push(p),$.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),ee.setFromProjectionMatrix($),O=this.localClippingEnabled,F=ce.init(this.clippingPlanes,O),v=we.get(T,m.length),v.init(),m.push(v),B.enabled===!0&&B.isPresenting===!0){const Ee=S.xr.getDepthSensingMesh();Ee!==null&&st(Ee,W,-1/0,S.sortObjects)}st(T,W,0,S.sortObjects),v.finish(),S.sortObjects===!0&&v.sort(q,K),fe=B.enabled===!1||B.isPresenting===!1||B.hasDepthSensing()===!1,fe&&he.addToRenderList(v,T),this.info.render.frame++,F===!0&&ce.beginShadows();const ie=p.state.shadowsArray;Me.render(ie,T,W),F===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=v.opaque,j=v.transmissive;if(p.setupLights(),W.isArrayCamera){const Ee=W.cameras;if(j.length>0)for(let Ue=0,Oe=Ee.length;Ue<Oe;Ue++){const Be=Ee[Ue];Yt(re,j,T,Be)}fe&&he.render(T);for(let Ue=0,Oe=Ee.length;Ue<Oe;Ue++){const Be=Ee[Ue];Ct(v,T,Be,Be.viewport)}}else j.length>0&&Yt(re,j,T,W),fe&&he.render(T),Ct(v,T,W);b!==null&&(ue.updateMultisampleRenderTarget(b),ue.updateRenderTargetMipmap(b)),T.isScene===!0&&T.onAfterRender(S,T,W),me.resetDefaultState(),P=-1,E=null,M.pop(),M.length>0?(p=M[M.length-1],F===!0&&ce.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function st(T,W,ie,re){if(T.visible===!1)return;if(T.layers.test(W.layers)){if(T.isGroup)ie=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(W);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ee.intersectsSprite(T)){re&&z.setFromMatrixPosition(T.matrixWorld).applyMatrix4($);const Ue=X.update(T),Oe=T.material;Oe.visible&&v.push(T,Ue,Oe,ie,z.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ee.intersectsObject(T))){const Ue=X.update(T),Oe=T.material;if(re&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),z.copy(T.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),z.copy(Ue.boundingSphere.center)),z.applyMatrix4(T.matrixWorld).applyMatrix4($)),Array.isArray(Oe)){const Be=Ue.groups;for(let pe=0,Ge=Be.length;pe<Ge;pe++){const ze=Be[pe],Ke=Oe[ze.materialIndex];Ke&&Ke.visible&&v.push(T,Ue,Ke,ie,z.z,ze)}}else Oe.visible&&v.push(T,Ue,Oe,ie,z.z,null)}}const Ee=T.children;for(let Ue=0,Oe=Ee.length;Ue<Oe;Ue++)st(Ee[Ue],W,ie,re)}function Ct(T,W,ie,re){const j=T.opaque,Ee=T.transmissive,Ue=T.transparent;p.setupLightsView(ie),F===!0&&ce.setGlobalState(S.clippingPlanes,ie),re&&ge.viewport(x.copy(re)),j.length>0&&Rt(j,W,ie),Ee.length>0&&Rt(Ee,W,ie),Ue.length>0&&Rt(Ue,W,ie),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Yt(T,W,ie,re){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[re.id]===void 0&&(p.state.transmissionRenderTarget[re.id]=new ni(1,1,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")||Ce.has("EXT_color_buffer_float")?ea:On,minFilter:ei,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const Ee=p.state.transmissionRenderTarget[re.id],Ue=re.viewport||x;Ee.setSize(Ue.z,Ue.w);const Oe=S.getRenderTarget();S.setRenderTarget(Ee),S.getClearColor(I),N=S.getClearAlpha(),N<1&&S.setClearColor(16777215,.5),fe?he.render(ie):S.clear();const Be=S.toneMapping;S.toneMapping=Fn;const pe=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),p.setupLightsView(re),F===!0&&ce.setGlobalState(S.clippingPlanes,re),Rt(T,ie,re),ue.updateMultisampleRenderTarget(Ee),ue.updateRenderTargetMipmap(Ee),Ce.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let ze=0,Ke=W.length;ze<Ke;ze++){const tt=W[ze],it=tt.object,vt=tt.geometry,Qe=tt.material,ke=tt.group;if(Qe.side===en&&it.layers.test(re.layers)){const mt=Qe.side;Qe.side=wt,Qe.needsUpdate=!0,jt(it,ie,re,vt,Qe,ke),Qe.side=mt,Qe.needsUpdate=!0,Ge=!0}}Ge===!0&&(ue.updateMultisampleRenderTarget(Ee),ue.updateRenderTargetMipmap(Ee))}S.setRenderTarget(Oe),S.setClearColor(I,N),pe!==void 0&&(re.viewport=pe),S.toneMapping=Be}function Rt(T,W,ie){const re=W.isScene===!0?W.overrideMaterial:null;for(let j=0,Ee=T.length;j<Ee;j++){const Ue=T[j],Oe=Ue.object,Be=Ue.geometry,pe=re===null?Ue.material:re,Ge=Ue.group;Oe.layers.test(ie.layers)&&jt(Oe,W,ie,Be,pe,Ge)}}function jt(T,W,ie,re,j,Ee){T.onBeforeRender(S,W,ie,re,j,Ee),T.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),j.onBeforeRender(S,W,ie,re,T,Ee),j.transparent===!0&&j.side===en&&j.forceSinglePass===!1?(j.side=wt,j.needsUpdate=!0,S.renderBufferDirect(ie,W,re,j,T,Ee),j.side=yn,j.needsUpdate=!0,S.renderBufferDirect(ie,W,re,j,T,Ee),j.side=en):S.renderBufferDirect(ie,W,re,j,T,Ee),T.onAfterRender(S,W,ie,re,j,Ee)}function kt(T,W,ie){W.isScene!==!0&&(W=ae);const re=Te.get(T),j=p.state.lights,Ee=p.state.shadowsArray,Ue=j.state.version,Oe=ne.getParameters(T,j.state,Ee,W,ie),Be=ne.getProgramCacheKey(Oe);let pe=re.programs;re.environment=T.isMeshStandardMaterial?W.environment:null,re.fog=W.fog,re.envMap=(T.isMeshStandardMaterial?A:Ae).get(T.envMap||re.environment),re.envMapRotation=re.environment!==null&&T.envMap===null?W.environmentRotation:T.envMapRotation,pe===void 0&&(T.addEventListener("dispose",_e),pe=new Map,re.programs=pe);let Ge=pe.get(Be);if(Ge!==void 0){if(re.currentProgram===Ge&&re.lightsStateVersion===Ue)return pt(T,Oe),Ge}else Oe.uniforms=ne.getUniforms(T),T.onBuild(ie,Oe,S),T.onBeforeCompile(Oe,S),Ge=ne.acquireProgram(Oe,Be),pe.set(Be,Ge),re.uniforms=Oe.uniforms;const ze=re.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ze.clippingPlanes=ce.uniform),pt(T,Oe),re.needsLights=Bi(T),re.lightsStateVersion=Ue,re.needsLights&&(ze.ambientLightColor.value=j.state.ambient,ze.lightProbe.value=j.state.probe,ze.directionalLights.value=j.state.directional,ze.directionalLightShadows.value=j.state.directionalShadow,ze.spotLights.value=j.state.spot,ze.spotLightShadows.value=j.state.spotShadow,ze.rectAreaLights.value=j.state.rectArea,ze.ltc_1.value=j.state.rectAreaLTC1,ze.ltc_2.value=j.state.rectAreaLTC2,ze.pointLights.value=j.state.point,ze.pointLightShadows.value=j.state.pointShadow,ze.hemisphereLights.value=j.state.hemi,ze.directionalShadowMap.value=j.state.directionalShadowMap,ze.directionalShadowMatrix.value=j.state.directionalShadowMatrix,ze.spotShadowMap.value=j.state.spotShadowMap,ze.spotLightMatrix.value=j.state.spotLightMatrix,ze.spotLightMap.value=j.state.spotLightMap,ze.pointShadowMap.value=j.state.pointShadowMap,ze.pointShadowMatrix.value=j.state.pointShadowMatrix),re.currentProgram=Ge,re.uniformsList=null,Ge}function Gt(T){if(T.uniformsList===null){const W=T.currentProgram.getUniforms();T.uniformsList=Hr.seqWithValue(W.seq,T.uniforms)}return T.uniformsList}function pt(T,W){const ie=Te.get(T);ie.outputColorSpace=W.outputColorSpace,ie.batching=W.batching,ie.batchingColor=W.batchingColor,ie.instancing=W.instancing,ie.instancingColor=W.instancingColor,ie.instancingMorph=W.instancingMorph,ie.skinning=W.skinning,ie.morphTargets=W.morphTargets,ie.morphNormals=W.morphNormals,ie.morphColors=W.morphColors,ie.morphTargetsCount=W.morphTargetsCount,ie.numClippingPlanes=W.numClippingPlanes,ie.numIntersection=W.numClipIntersection,ie.vertexAlphas=W.vertexAlphas,ie.vertexTangents=W.vertexTangents,ie.toneMapping=W.toneMapping}function dn(T,W,ie,re,j){W.isScene!==!0&&(W=ae),ue.resetTextureUnits();const Ee=W.fog,Ue=re.isMeshStandardMaterial?W.environment:null,Oe=b===null?S.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:kn,Be=(re.isMeshStandardMaterial?A:Ae).get(re.envMap||Ue),pe=re.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,Ge=!!ie.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),ze=!!ie.morphAttributes.position,Ke=!!ie.morphAttributes.normal,tt=!!ie.morphAttributes.color;let it=Fn;re.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(it=S.toneMapping);const vt=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Qe=vt!==void 0?vt.length:0,ke=Te.get(re),mt=p.state.lights;if(F===!0&&(O===!0||T!==E)){const St=T===E&&re.id===P;ce.setState(re,T,St)}let $e=!1;re.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==mt.state.version||ke.outputColorSpace!==Oe||j.isBatchedMesh&&ke.batching===!1||!j.isBatchedMesh&&ke.batching===!0||j.isBatchedMesh&&ke.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&ke.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&ke.instancing===!1||!j.isInstancedMesh&&ke.instancing===!0||j.isSkinnedMesh&&ke.skinning===!1||!j.isSkinnedMesh&&ke.skinning===!0||j.isInstancedMesh&&ke.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&ke.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&ke.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&ke.instancingMorph===!1&&j.morphTexture!==null||ke.envMap!==Be||re.fog===!0&&ke.fog!==Ee||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==ce.numPlanes||ke.numIntersection!==ce.numIntersection)||ke.vertexAlphas!==pe||ke.vertexTangents!==Ge||ke.morphTargets!==ze||ke.morphNormals!==Ke||ke.morphColors!==tt||ke.toneMapping!==it||ke.morphTargetsCount!==Qe)&&($e=!0):($e=!0,ke.__version=re.version);let zt=ke.currentProgram;$e===!0&&(zt=kt(re,W,j));let En=!1,an=!1,fn=!1;const ot=zt.getUniforms(),bt=ke.uniforms;if(ge.useProgram(zt.program)&&(En=!0,an=!0,fn=!0),re.id!==P&&(P=re.id,an=!0),En||E!==T){ot.setValue(C,"projectionMatrix",T.projectionMatrix),ot.setValue(C,"viewMatrix",T.matrixWorldInverse);const St=ot.map.cameraPosition;St!==void 0&&St.setValue(C,z.setFromMatrixPosition(T.matrixWorld)),Le.logarithmicDepthBuffer&&ot.setValue(C,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&ot.setValue(C,"isOrthographic",T.isOrthographicCamera===!0),E!==T&&(E=T,an=!0,fn=!0)}if(j.isSkinnedMesh){ot.setOptional(C,j,"bindMatrix"),ot.setOptional(C,j,"bindMatrixInverse");const St=j.skeleton;St&&(St.boneTexture===null&&St.computeBoneTexture(),ot.setValue(C,"boneTexture",St.boneTexture,ue))}j.isBatchedMesh&&(ot.setOptional(C,j,"batchingTexture"),ot.setValue(C,"batchingTexture",j._matricesTexture,ue),ot.setOptional(C,j,"batchingColorTexture"),j._colorsTexture!==null&&ot.setValue(C,"batchingColorTexture",j._colorsTexture,ue));const Gn=ie.morphAttributes;if((Gn.position!==void 0||Gn.normal!==void 0||Gn.color!==void 0)&&Se.update(j,ie,zt),(an||ke.receiveShadow!==j.receiveShadow)&&(ke.receiveShadow=j.receiveShadow,ot.setValue(C,"receiveShadow",j.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(bt.envMap.value=Be,bt.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&W.environment!==null&&(bt.envMapIntensity.value=W.environmentIntensity),an&&(ot.setValue(C,"toneMappingExposure",S.toneMappingExposure),ke.needsLights&&or(bt,fn),Ee&&re.fog===!0&&Q.refreshFogUniforms(bt,Ee),Q.refreshMaterialUniforms(bt,re,Z,k,p.state.transmissionRenderTarget[T.id]),Hr.upload(C,Gt(ke),bt,ue)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Hr.upload(C,Gt(ke),bt,ue),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&ot.setValue(C,"center",j.center),ot.setValue(C,"modelViewMatrix",j.modelViewMatrix),ot.setValue(C,"normalMatrix",j.normalMatrix),ot.setValue(C,"modelMatrix",j.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const St=re.uniformsGroups;for(let zn=0,Ht=St.length;zn<Ht;zn++){const lr=St[zn];Ie.update(lr,zt),Ie.bind(lr,zt)}}return zt}function or(T,W){T.ambientLightColor.needsUpdate=W,T.lightProbe.needsUpdate=W,T.directionalLights.needsUpdate=W,T.directionalLightShadows.needsUpdate=W,T.pointLights.needsUpdate=W,T.pointLightShadows.needsUpdate=W,T.spotLights.needsUpdate=W,T.spotLightShadows.needsUpdate=W,T.rectAreaLights.needsUpdate=W,T.hemisphereLights.needsUpdate=W}function Bi(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(T,W,ie){Te.get(T.texture).__webglTexture=W,Te.get(T.depthTexture).__webglTexture=ie;const re=Te.get(T);re.__hasExternalTextures=!0,re.__autoAllocateDepthBuffer=ie===void 0,re.__autoAllocateDepthBuffer||Ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),re.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,W){const ie=Te.get(T);ie.__webglFramebuffer=W,ie.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(T,W=0,ie=0){b=T,U=W,w=ie;let re=!0,j=null,Ee=!1,Ue=!1;if(T){const Be=Te.get(T);Be.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(C.FRAMEBUFFER,null),re=!1):Be.__webglFramebuffer===void 0?ue.setupRenderTarget(T):Be.__hasExternalTextures&&ue.rebindTextures(T,Te.get(T.texture).__webglTexture,Te.get(T.depthTexture).__webglTexture);const pe=T.texture;(pe.isData3DTexture||pe.isDataArrayTexture||pe.isCompressedArrayTexture)&&(Ue=!0);const Ge=Te.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ge[W])?j=Ge[W][ie]:j=Ge[W],Ee=!0):T.samples>0&&ue.useMultisampledRTT(T)===!1?j=Te.get(T).__webglMultisampledFramebuffer:Array.isArray(Ge)?j=Ge[ie]:j=Ge,x.copy(T.viewport),L.copy(T.scissor),R=T.scissorTest}else x.copy(Y).multiplyScalar(Z).floor(),L.copy(D).multiplyScalar(Z).floor(),R=V;if(ge.bindFramebuffer(C.FRAMEBUFFER,j)&&re&&ge.drawBuffers(T,j),ge.viewport(x),ge.scissor(L),ge.setScissorTest(R),Ee){const Be=Te.get(T.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+W,Be.__webglTexture,ie)}else if(Ue){const Be=Te.get(T.texture),pe=W||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Be.__webglTexture,ie||0,pe)}P=-1},this.readRenderTargetPixels=function(T,W,ie,re,j,Ee,Ue){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=Te.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ue!==void 0&&(Oe=Oe[Ue]),Oe){ge.bindFramebuffer(C.FRAMEBUFFER,Oe);try{const Be=T.texture,pe=Be.format,Ge=Be.type;if(!Le.textureFormatReadable(pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=T.width-re&&ie>=0&&ie<=T.height-j&&C.readPixels(W,ie,re,j,de.convert(pe),de.convert(Ge),Ee)}finally{const Be=b!==null?Te.get(b).__webglFramebuffer:null;ge.bindFramebuffer(C.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(T,W,ie,re,j,Ee,Ue){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=Te.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ue!==void 0&&(Oe=Oe[Ue]),Oe){ge.bindFramebuffer(C.FRAMEBUFFER,Oe);try{const Be=T.texture,pe=Be.format,Ge=Be.type;if(!Le.textureFormatReadable(pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=T.width-re&&ie>=0&&ie<=T.height-j){const ze=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,ze),C.bufferData(C.PIXEL_PACK_BUFFER,Ee.byteLength,C.STREAM_READ),C.readPixels(W,ie,re,j,de.convert(pe),de.convert(Ge),0),C.flush();const Ke=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);await bu(C,Ke,4);try{C.bindBuffer(C.PIXEL_PACK_BUFFER,ze),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Ee)}finally{C.deleteBuffer(ze),C.deleteSync(Ke)}return Ee}}finally{const Be=b!==null?Te.get(b).__webglFramebuffer:null;ge.bindFramebuffer(C.FRAMEBUFFER,Be)}}},this.copyFramebufferToTexture=function(T,W=null,ie=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,T=arguments[1]);const re=Math.pow(2,-ie),j=Math.floor(T.image.width*re),Ee=Math.floor(T.image.height*re),Ue=W!==null?W.x:0,Oe=W!==null?W.y:0;ue.setTexture2D(T,0),C.copyTexSubImage2D(C.TEXTURE_2D,ie,0,0,Ue,Oe,j,Ee),ge.unbindTexture()},this.copyTextureToTexture=function(T,W,ie=null,re=null,j=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),re=arguments[0]||null,T=arguments[1],W=arguments[2],j=arguments[3]||0,ie=null);let Ee,Ue,Oe,Be,pe,Ge;ie!==null?(Ee=ie.max.x-ie.min.x,Ue=ie.max.y-ie.min.y,Oe=ie.min.x,Be=ie.min.y):(Ee=T.image.width,Ue=T.image.height,Oe=0,Be=0),re!==null?(pe=re.x,Ge=re.y):(pe=0,Ge=0);const ze=de.convert(W.format),Ke=de.convert(W.type);ue.setTexture2D(W,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,W.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,W.unpackAlignment);const tt=C.getParameter(C.UNPACK_ROW_LENGTH),it=C.getParameter(C.UNPACK_IMAGE_HEIGHT),vt=C.getParameter(C.UNPACK_SKIP_PIXELS),Qe=C.getParameter(C.UNPACK_SKIP_ROWS),ke=C.getParameter(C.UNPACK_SKIP_IMAGES),mt=T.isCompressedTexture?T.mipmaps[j]:T.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,mt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,mt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Oe),C.pixelStorei(C.UNPACK_SKIP_ROWS,Be),T.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,j,pe,Ge,Ee,Ue,ze,Ke,mt.data):T.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,j,pe,Ge,mt.width,mt.height,ze,mt.data):C.texSubImage2D(C.TEXTURE_2D,j,pe,Ge,ze,Ke,mt),C.pixelStorei(C.UNPACK_ROW_LENGTH,tt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,it),C.pixelStorei(C.UNPACK_SKIP_PIXELS,vt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Qe),C.pixelStorei(C.UNPACK_SKIP_IMAGES,ke),j===0&&W.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),ge.unbindTexture()},this.copyTextureToTexture3D=function(T,W,ie=null,re=null,j=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ie=arguments[0]||null,re=arguments[1]||null,T=arguments[2],W=arguments[3],j=arguments[4]||0);let Ee,Ue,Oe,Be,pe,Ge,ze,Ke,tt;const it=T.isCompressedTexture?T.mipmaps[j]:T.image;ie!==null?(Ee=ie.max.x-ie.min.x,Ue=ie.max.y-ie.min.y,Oe=ie.max.z-ie.min.z,Be=ie.min.x,pe=ie.min.y,Ge=ie.min.z):(Ee=it.width,Ue=it.height,Oe=it.depth,Be=0,pe=0,Ge=0),re!==null?(ze=re.x,Ke=re.y,tt=re.z):(ze=0,Ke=0,tt=0);const vt=de.convert(W.format),Qe=de.convert(W.type);let ke;if(W.isData3DTexture)ue.setTexture3D(W,0),ke=C.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)ue.setTexture2DArray(W,0),ke=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,W.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,W.unpackAlignment);const mt=C.getParameter(C.UNPACK_ROW_LENGTH),$e=C.getParameter(C.UNPACK_IMAGE_HEIGHT),zt=C.getParameter(C.UNPACK_SKIP_PIXELS),En=C.getParameter(C.UNPACK_SKIP_ROWS),an=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,it.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,it.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Be),C.pixelStorei(C.UNPACK_SKIP_ROWS,pe),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ge),T.isDataTexture||T.isData3DTexture?C.texSubImage3D(ke,j,ze,Ke,tt,Ee,Ue,Oe,vt,Qe,it.data):W.isCompressedArrayTexture?C.compressedTexSubImage3D(ke,j,ze,Ke,tt,Ee,Ue,Oe,vt,it.data):C.texSubImage3D(ke,j,ze,Ke,tt,Ee,Ue,Oe,vt,Qe,it),C.pixelStorei(C.UNPACK_ROW_LENGTH,mt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,$e),C.pixelStorei(C.UNPACK_SKIP_PIXELS,zt),C.pixelStorei(C.UNPACK_SKIP_ROWS,En),C.pixelStorei(C.UNPACK_SKIP_IMAGES,an),j===0&&W.generateMipmaps&&C.generateMipmap(ke),ge.unbindTexture()},this.initRenderTarget=function(T){Te.get(T).__webglFramebuffer===void 0&&ue.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ue.setTextureCube(T,0):T.isData3DTexture?ue.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ue.setTexture2DArray(T,0):ue.setTexture2D(T,0),ge.unbindTexture()},this.resetState=function(){U=0,w=0,b=null,ge.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ps?"display-p3":"srgb",t.unpackColorSpace=et.workingColorSpace===ta?"display-p3":"srgb"}}class al extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Um extends nn{constructor(e,t,r,n=1){super(e,t,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class xs extends hn{constructor(e=1,t=32,r=16,n=0,i=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:n,phiLength:i,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const l=Math.min(s+o,Math.PI);let c=0;const u=[],d=new te,h=new te,f=[],g=[],v=[],p=[];for(let m=0;m<=r;m++){const M=[],S=m/r;let y=0;m===0&&s===0?y=.5/t:m===r&&l===Math.PI&&(y=-.5/t);for(let U=0;U<=t;U++){const w=U/t;d.x=-e*Math.cos(n+w*i)*Math.sin(s+S*o),d.y=e*Math.cos(s+S*o),d.z=e*Math.sin(n+w*i)*Math.sin(s+S*o),g.push(d.x,d.y,d.z),h.copy(d).normalize(),v.push(h.x,h.y,h.z),p.push(w+y,1-S),M.push(c++)}u.push(M)}for(let m=0;m<r;m++)for(let M=0;M<t;M++){const S=u[m][M+1],y=u[m][M],U=u[m+1][M],w=u[m+1][M+1];(m!==0||s>0)&&f.push(S,y,w),(m!==r-1||l<Math.PI)&&f.push(y,U,w)}this.setIndex(f),this.setAttribute("position",new rn(g,3)),this.setAttribute("normal",new rn(v,3)),this.setAttribute("uv",new rn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ja extends sr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fl,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=fs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class rc extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ka=new lt,sl=new te,ol=new te;class Lm{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gs,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;sl.setFromMatrixPosition(e.matrixWorld),t.position.copy(sl),ol.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ol),t.updateMatrixWorld(),Ka.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ka),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Ka)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Dm extends Lm{constructor(){super(new vs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Im extends rc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new Dm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Fm extends rc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Nm extends hn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ds}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ds);class ll{static isWebGLAvailable(){try{const e=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(e.getContext("webgl")||e.getContext("experimental-webgl")))}catch{return!1}}static isWebGL2Available(){try{const e=document.createElement("canvas");return!!(window.WebGL2RenderingContext&&e.getContext("webgl2"))}catch{return!1}}static isColorSpaceAvailable(e){try{const t=document.createElement("canvas"),r=window.WebGL2RenderingContext&&t.getContext("webgl2");return r.drawingBufferColorSpace=e,r.drawingBufferColorSpace===e}catch{return!1}}static getWebGLErrorMessage(){return this.getErrorMessage(1)}static getWebGL2ErrorMessage(){return this.getErrorMessage(2)}static getErrorMessage(e){const t={1:"WebGL",2:"WebGL 2"},r={1:window.WebGLRenderingContext,2:window.WebGL2RenderingContext};let n='Your $0 does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">$1</a>';const i=document.createElement("div");return i.id="webglmessage",i.style.fontFamily="monospace",i.style.fontSize="13px",i.style.fontWeight="normal",i.style.textAlign="center",i.style.background="#fff",i.style.color="#000",i.style.padding="1.5em",i.style.width="400px",i.style.margin="5em auto 0",r[e]?n=n.replace("$0","graphics card"):n=n.replace("$0","browser"),n=n.replace("$1",t[e]),i.innerHTML=n,i}}function Om(){var a=Object.create(null);function e(n,i){var s=n.id,o=n.name,l=n.dependencies;l===void 0&&(l=[]);var c=n.init;c===void 0&&(c=function(){});var u=n.getTransferables;if(u===void 0&&(u=null),!a[s])try{l=l.map(function(h){return h&&h.isWorkerModule&&(e(h,function(f){if(f instanceof Error)throw f}),h=a[h.id].value),h}),c=r("<"+o+">.init",c),u&&(u=r("<"+o+">.getTransferables",u));var d=null;typeof c=="function"?d=c.apply(void 0,l):console.error("worker module init function failed to rehydrate"),a[s]={id:s,value:d,getTransferables:u},i(d)}catch(h){h&&h.noLog||console.error(h),i(h)}}function t(n,i){var s,o=n.id,l=n.args;(!a[o]||typeof a[o].value!="function")&&i(new Error("Worker module "+o+": not found or its 'init' did not return a function"));try{var c=(s=a[o]).value.apply(s,l);c&&typeof c.then=="function"?c.then(u,function(d){return i(d instanceof Error?d:new Error(""+d))}):u(c)}catch(d){i(d)}function u(d){try{var h=a[o].getTransferables&&a[o].getTransferables(d);(!h||!Array.isArray(h)||!h.length)&&(h=void 0),i(d,h)}catch(f){console.error(f),i(f)}}}function r(n,i){var s=void 0;self.troikaDefine=function(l){return s=l};var o=URL.createObjectURL(new Blob(["/** "+n.replace(/\*/g,"")+` **/

troikaDefine(
`+i+`
)`],{type:"application/javascript"}));try{importScripts(o)}catch(l){console.error(l)}return URL.revokeObjectURL(o),delete self.troikaDefine,s}self.addEventListener("message",function(n){var i=n.data,s=i.messageId,o=i.action,l=i.data;try{o==="registerModule"&&e(l,function(c){c instanceof Error?postMessage({messageId:s,success:!1,error:c.message}):postMessage({messageId:s,success:!0,result:{isCallable:typeof c=="function"}})}),o==="callModule"&&t(l,function(c,u){c instanceof Error?postMessage({messageId:s,success:!1,error:c.message}):postMessage({messageId:s,success:!0,result:c},u||void 0)})}catch(c){postMessage({messageId:s,success:!1,error:c.stack})}})}function Bm(a){var e=function(){for(var t=[],r=arguments.length;r--;)t[r]=arguments[r];return e._getInitResult().then(function(n){if(typeof n=="function")return n.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=a.dependencies,r=a.init;t=Array.isArray(t)?t.map(function(i){return i&&i._getInitResult?i._getInitResult():i}):[];var n=Promise.all(t).then(function(i){return r.apply(null,i)});return e._getInitResult=function(){return n},n},e}var ac=function(){var a=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),a=!0}catch(t){typeof process<"u",console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return ac=function(){return a},a},km=0,Gm=0,Ja=!1,tr=Object.create(null),nr=Object.create(null),ls=Object.create(null);function Oi(a){if((!a||typeof a.init!="function")&&!Ja)throw new Error("requires `options.init` function");var e=a.dependencies,t=a.init,r=a.getTransferables,n=a.workerId;if(!ac())return Bm(a);n==null&&(n="#default");var i="workerModule"+ ++km,s=a.name||i,o=null;e=e&&e.map(function(c){return typeof c=="function"&&!c.workerModuleData&&(Ja=!0,c=Oi({workerId:n,name:"<"+s+"> function dependency: "+c.name,init:`function(){return (
`+Vr(c)+`
)}`}),Ja=!1),c&&c.workerModuleData&&(c=c.workerModuleData),c});function l(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];if(!o){o=cl(n,"registerModule",l.workerModuleData);var d=function(){o=null,nr[n].delete(d)};(nr[n]||(nr[n]=new Set)).add(d)}return o.then(function(h){var f=h.isCallable;if(f)return cl(n,"callModule",{id:i,args:c});throw new Error("Worker module function was called but `init` did not return a callable function")})}return l.workerModuleData={isWorkerModule:!0,id:i,name:s,dependencies:e,init:Vr(t),getTransferables:r&&Vr(r)},l}function zm(a){nr[a]&&nr[a].forEach(function(e){e()}),tr[a]&&(tr[a].terminate(),delete tr[a])}function Vr(a){var e=a.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function Hm(a){var e=tr[a];if(!e){var t=Vr(Om);e=tr[a]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+a.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(r){var n=r.data,i=n.messageId,s=ls[i];if(!s)throw new Error("WorkerModule response with empty or unknown messageId");delete ls[i],s(n)}}return e}function cl(a,e,t){return new Promise(function(r,n){var i=++Gm;ls[i]=function(s){s.success?r(s.result):n(new Error("Error in worker "+e+" call: "+s.error))},Hm(a).postMessage({messageId:i,action:e,data:t})})}function sc(){var a=function(e){function t(K,Y,D,V,ee,F,O,$){var z=1-O;$.x=z*z*K+2*z*O*D+O*O*ee,$.y=z*z*Y+2*z*O*V+O*O*F}function r(K,Y,D,V,ee,F,O,$,z,ae){var fe=1-z;ae.x=fe*fe*fe*K+3*fe*fe*z*D+3*fe*z*z*ee+z*z*z*O,ae.y=fe*fe*fe*Y+3*fe*fe*z*V+3*fe*z*z*F+z*z*z*$}function n(K,Y){for(var D=/([MLQCZ])([^MLQCZ]*)/g,V,ee,F,O,$;V=D.exec(K);){var z=V[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(ae){return parseFloat(ae)});switch(V[1]){case"M":O=ee=z[0],$=F=z[1];break;case"L":(z[0]!==O||z[1]!==$)&&Y("L",O,$,O=z[0],$=z[1]);break;case"Q":{Y("Q",O,$,O=z[2],$=z[3],z[0],z[1]);break}case"C":{Y("C",O,$,O=z[4],$=z[5],z[0],z[1],z[2],z[3]);break}case"Z":(O!==ee||$!==F)&&Y("L",O,$,ee,F);break}}}function i(K,Y,D){D===void 0&&(D=16);var V={x:0,y:0};n(K,function(ee,F,O,$,z,ae,fe,xe,C){switch(ee){case"L":Y(F,O,$,z);break;case"Q":{for(var le=F,Ce=O,Le=1;Le<D;Le++)t(F,O,ae,fe,$,z,Le/(D-1),V),Y(le,Ce,V.x,V.y),le=V.x,Ce=V.y;break}case"C":{for(var ge=F,be=O,Te=1;Te<D;Te++)r(F,O,ae,fe,xe,C,$,z,Te/(D-1),V),Y(ge,be,V.x,V.y),ge=V.x,be=V.y;break}}})}var s="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",o="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",l=new WeakMap,c={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function u(K,Y){var D=K.getContext?K.getContext("webgl",c):K,V=l.get(D);if(!V){let ge=function(_){var G=F[_];if(!G&&(G=F[_]=D.getExtension(_),!G))throw new Error(_+" not supported");return G},be=function(_,G){var X=D.createShader(G);return D.shaderSource(X,_),D.compileShader(X),X},Te=function(_,G,X,ne){if(!O[_]){var Q={},we={},oe=D.createProgram();D.attachShader(oe,be(G,D.VERTEX_SHADER)),D.attachShader(oe,be(X,D.FRAGMENT_SHADER)),D.linkProgram(oe),O[_]={program:oe,transaction:function(Me){D.useProgram(oe),Me({setUniform:function(Se,Ne){for(var ye=[],de=arguments.length-2;de-- >0;)ye[de]=arguments[de+2];var me=we[Ne]||(we[Ne]=D.getUniformLocation(oe,Ne));D["uniform"+Se].apply(D,[me].concat(ye))},setAttribute:function(Se,Ne,ye,de,me){var Ie=Q[Se];Ie||(Ie=Q[Se]={buf:D.createBuffer(),loc:D.getAttribLocation(oe,Se),data:null}),D.bindBuffer(D.ARRAY_BUFFER,Ie.buf),D.vertexAttribPointer(Ie.loc,Ne,D.FLOAT,!1,0,0),D.enableVertexAttribArray(Ie.loc),ee?D.vertexAttribDivisor(Ie.loc,de):ge("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(Ie.loc,de),me!==Ie.data&&(D.bufferData(D.ARRAY_BUFFER,me,ye),Ie.data=me)}})}}}O[_].transaction(ne)},ue=function(_,G){z++;try{D.activeTexture(D.TEXTURE0+z);var X=$[_];X||(X=$[_]=D.createTexture(),D.bindTexture(D.TEXTURE_2D,X),D.texParameteri(D.TEXTURE_2D,D.TEXTURE_MIN_FILTER,D.NEAREST),D.texParameteri(D.TEXTURE_2D,D.TEXTURE_MAG_FILTER,D.NEAREST)),D.bindTexture(D.TEXTURE_2D,X),G(X,z)}finally{z--}},Ae=function(_,G,X){var ne=D.createFramebuffer();ae.push(ne),D.bindFramebuffer(D.FRAMEBUFFER,ne),D.activeTexture(D.TEXTURE0+G),D.bindTexture(D.TEXTURE_2D,_),D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,_,0);try{X(ne)}finally{D.deleteFramebuffer(ne),D.bindFramebuffer(D.FRAMEBUFFER,ae[--ae.length-1]||null)}},A=function(){F={},O={},$={},z=-1,ae.length=0};var fe=ge,xe=be,C=Te,le=ue,Ce=Ae,Le=A,ee=typeof WebGL2RenderingContext<"u"&&D instanceof WebGL2RenderingContext,F={},O={},$={},z=-1,ae=[];D.canvas.addEventListener("webglcontextlost",function(_){A(),_.preventDefault()},!1),l.set(D,V={gl:D,isWebGL2:ee,getExtension:ge,withProgram:Te,withTexture:ue,withTextureFramebuffer:Ae,handleContextLoss:A})}Y(V)}function d(K,Y,D,V,ee,F,O,$){O===void 0&&(O=15),$===void 0&&($=null),u(K,function(z){var ae=z.gl,fe=z.withProgram,xe=z.withTexture;xe("copy",function(C,le){ae.texImage2D(ae.TEXTURE_2D,0,ae.RGBA,ee,F,0,ae.RGBA,ae.UNSIGNED_BYTE,Y),fe("copy",s,o,function(Ce){var Le=Ce.setUniform,ge=Ce.setAttribute;ge("aUV",2,ae.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),Le("1i","image",le),ae.bindFramebuffer(ae.FRAMEBUFFER,$||null),ae.disable(ae.BLEND),ae.colorMask(O&8,O&4,O&2,O&1),ae.viewport(D,V,ee,F),ae.scissor(D,V,ee,F),ae.drawArrays(ae.TRIANGLES,0,3)})})})}function h(K,Y,D){var V=K.width,ee=K.height;u(K,function(F){var O=F.gl,$=new Uint8Array(V*ee*4);O.readPixels(0,0,V,ee,O.RGBA,O.UNSIGNED_BYTE,$),K.width=Y,K.height=D,d(O,$,0,0,V,ee)})}var f=Object.freeze({__proto__:null,withWebGLContext:u,renderImageData:d,resizeWebGLCanvasWithoutClearing:h});function g(K,Y,D,V,ee,F){F===void 0&&(F=1);var O=new Uint8Array(K*Y),$=V[2]-V[0],z=V[3]-V[1],ae=[];i(D,function(ge,be,Te,ue){ae.push({x1:ge,y1:be,x2:Te,y2:ue,minX:Math.min(ge,Te),minY:Math.min(be,ue),maxX:Math.max(ge,Te),maxY:Math.max(be,ue)})}),ae.sort(function(ge,be){return ge.maxX-be.maxX});for(var fe=0;fe<K;fe++)for(var xe=0;xe<Y;xe++){var C=Ce(V[0]+$*(fe+.5)/K,V[1]+z*(xe+.5)/Y),le=Math.pow(1-Math.abs(C)/ee,F)/2;C<0&&(le=1-le),le=Math.max(0,Math.min(255,Math.round(le*255))),O[xe*K+fe]=le}return O;function Ce(ge,be){for(var Te=1/0,ue=1/0,Ae=ae.length;Ae--;){var A=ae[Ae];if(A.maxX+ue<=ge)break;if(ge+ue>A.minX&&be-ue<A.maxY&&be+ue>A.minY){var _=m(ge,be,A.x1,A.y1,A.x2,A.y2);_<Te&&(Te=_,ue=Math.sqrt(Te))}}return Le(ge,be)&&(ue=-ue),ue}function Le(ge,be){for(var Te=0,ue=ae.length;ue--;){var Ae=ae[ue];if(Ae.maxX<=ge)break;var A=Ae.y1>be!=Ae.y2>be&&ge<(Ae.x2-Ae.x1)*(be-Ae.y1)/(Ae.y2-Ae.y1)+Ae.x1;A&&(Te+=Ae.y1<Ae.y2?1:-1)}return Te!==0}}function v(K,Y,D,V,ee,F,O,$,z,ae){F===void 0&&(F=1),$===void 0&&($=0),z===void 0&&(z=0),ae===void 0&&(ae=0),p(K,Y,D,V,ee,F,O,null,$,z,ae)}function p(K,Y,D,V,ee,F,O,$,z,ae,fe){F===void 0&&(F=1),z===void 0&&(z=0),ae===void 0&&(ae=0),fe===void 0&&(fe=0);for(var xe=g(K,Y,D,V,ee,F),C=new Uint8Array(xe.length*4),le=0;le<xe.length;le++)C[le*4+fe]=xe[le];d(O,C,z,ae,K,Y,1<<3-fe,$)}function m(K,Y,D,V,ee,F){var O=ee-D,$=F-V,z=O*O+$*$,ae=z?Math.max(0,Math.min(1,((K-D)*O+(Y-V)*$)/z)):0,fe=K-(D+ae*O),xe=Y-(V+ae*$);return fe*fe+xe*xe}var M=Object.freeze({__proto__:null,generate:g,generateIntoCanvas:v,generateIntoFramebuffer:p}),S="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",y="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",U="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",w=new Float32Array([0,0,2,0,0,2]),b=null,P=!1,E={},x=new WeakMap;function L(K){if(!P&&!H(K))throw new Error("WebGL generation not supported")}function R(K,Y,D,V,ee,F,O){if(F===void 0&&(F=1),O===void 0&&(O=null),!O&&(O=b,!O)){var $=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!$)throw new Error("OffscreenCanvas or DOM canvas not supported");O=b=$.getContext("webgl",{depth:!1})}L(O);var z=new Uint8Array(K*Y*4);u(O,function(C){var le=C.gl,Ce=C.withTexture,Le=C.withTextureFramebuffer;Ce("readable",function(ge,be){le.texImage2D(le.TEXTURE_2D,0,le.RGBA,K,Y,0,le.RGBA,le.UNSIGNED_BYTE,null),Le(ge,be,function(Te){N(K,Y,D,V,ee,F,le,Te,0,0,0),le.readPixels(0,0,K,Y,le.RGBA,le.UNSIGNED_BYTE,z)})})});for(var ae=new Uint8Array(K*Y),fe=0,xe=0;fe<z.length;fe+=4)ae[xe++]=z[fe];return ae}function I(K,Y,D,V,ee,F,O,$,z,ae){F===void 0&&(F=1),$===void 0&&($=0),z===void 0&&(z=0),ae===void 0&&(ae=0),N(K,Y,D,V,ee,F,O,null,$,z,ae)}function N(K,Y,D,V,ee,F,O,$,z,ae,fe){F===void 0&&(F=1),z===void 0&&(z=0),ae===void 0&&(ae=0),fe===void 0&&(fe=0),L(O);var xe=[];i(D,function(C,le,Ce,Le){xe.push(C,le,Ce,Le)}),xe=new Float32Array(xe),u(O,function(C){var le=C.gl,Ce=C.isWebGL2,Le=C.getExtension,ge=C.withProgram,be=C.withTexture,Te=C.withTextureFramebuffer,ue=C.handleContextLoss;if(be("rawDistances",function(Ae,A){(K!==Ae._lastWidth||Y!==Ae._lastHeight)&&le.texImage2D(le.TEXTURE_2D,0,le.RGBA,Ae._lastWidth=K,Ae._lastHeight=Y,0,le.RGBA,le.UNSIGNED_BYTE,null),ge("main",S,y,function(_){var G=_.setAttribute,X=_.setUniform,ne=!Ce&&Le("ANGLE_instanced_arrays"),Q=!Ce&&Le("EXT_blend_minmax");G("aUV",2,le.STATIC_DRAW,0,w),G("aLineSegment",4,le.DYNAMIC_DRAW,1,xe),X.apply(void 0,["4f","uGlyphBounds"].concat(V)),X("1f","uMaxDistance",ee),X("1f","uExponent",F),Te(Ae,A,function(we){le.enable(le.BLEND),le.colorMask(!0,!0,!0,!0),le.viewport(0,0,K,Y),le.scissor(0,0,K,Y),le.blendFunc(le.ONE,le.ONE),le.blendEquationSeparate(le.FUNC_ADD,Ce?le.MAX:Q.MAX_EXT),le.clear(le.COLOR_BUFFER_BIT),Ce?le.drawArraysInstanced(le.TRIANGLES,0,3,xe.length/4):ne.drawArraysInstancedANGLE(le.TRIANGLES,0,3,xe.length/4)})}),ge("post",s,U,function(_){_.setAttribute("aUV",2,le.STATIC_DRAW,0,w),_.setUniform("1i","tex",A),le.bindFramebuffer(le.FRAMEBUFFER,$),le.disable(le.BLEND),le.colorMask(fe===0,fe===1,fe===2,fe===3),le.viewport(z,ae,K,Y),le.scissor(z,ae,K,Y),le.drawArrays(le.TRIANGLES,0,3)})}),le.isContextLost())throw ue(),new Error("webgl context lost")})}function H(K){var Y=!K||K===b?E:K.canvas||K,D=x.get(Y);if(D===void 0){P=!0;var V=null;try{var ee=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],F=R(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,K);D=F&&ee.length===F.length&&F.every(function(O,$){return O===ee[$]}),D||(V="bad trial run results",console.info(ee,F))}catch(O){D=!1,V=O.message}V&&console.warn("WebGL SDF generation not supported:",V),P=!1,x.set(Y,D)}return D}var k=Object.freeze({__proto__:null,generate:R,generateIntoCanvas:I,generateIntoFramebuffer:N,isSupported:H});function Z(K,Y,D,V,ee,F){ee===void 0&&(ee=Math.max(V[2]-V[0],V[3]-V[1])/2),F===void 0&&(F=1);try{return R.apply(k,arguments)}catch(O){return console.info("WebGL SDF generation failed, falling back to JS",O),g.apply(M,arguments)}}function q(K,Y,D,V,ee,F,O,$,z,ae){ee===void 0&&(ee=Math.max(V[2]-V[0],V[3]-V[1])/2),F===void 0&&(F=1),$===void 0&&($=0),z===void 0&&(z=0),ae===void 0&&(ae=0);try{return I.apply(k,arguments)}catch(fe){return console.info("WebGL SDF generation failed, falling back to JS",fe),v.apply(M,arguments)}}return e.forEachPathCommand=n,e.generate=Z,e.generateIntoCanvas=q,e.javascript=M,e.pathToLineSegments=i,e.webgl=k,e.webglUtils=f,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return a}function Vm(){var a=function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},r={},n={};r.L=1,n[1]="L",Object.keys(t).forEach(function(ue,Ae){r[ue]=1<<Ae+1,n[r[ue]]=ue}),Object.freeze(r);var i=r.LRI|r.RLI|r.FSI,s=r.L|r.R|r.AL,o=r.B|r.S|r.WS|r.ON|r.FSI|r.LRI|r.RLI|r.PDI,l=r.BN|r.RLE|r.LRE|r.RLO|r.LRO|r.PDF,c=r.S|r.WS|r.B|i|r.PDI|l,u=null;function d(){if(!u){u=new Map;var ue=function(A){if(t.hasOwnProperty(A)){var _=0;t[A].split(",").forEach(function(G){var X=G.split("+"),ne=X[0],Q=X[1];ne=parseInt(ne,36),Q=Q?parseInt(Q,36):0,u.set(_+=ne,r[A]);for(var we=0;we<Q;we++)u.set(++_,r[A])})}};for(var Ae in t)ue(Ae)}}function h(ue){return d(),u.get(ue.codePointAt(0))||r.L}function f(ue){return n[h(ue)]}var g={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function v(ue,Ae){var A=36,_=0,G=new Map,X=Ae&&new Map,ne;return ue.split(",").forEach(function Q(we){if(we.indexOf("+")!==-1)for(var oe=+we;oe--;)Q(ne);else{ne=we;var ce=we.split(">"),Me=ce[0],he=ce[1];Me=String.fromCodePoint(_+=parseInt(Me,A)),he=String.fromCodePoint(_+=parseInt(he,A)),G.set(Me,he),Ae&&X.set(he,Me)}}),{map:G,reverseMap:X}}var p,m,M;function S(){if(!p){var ue=v(g.pairs,!0),Ae=ue.map,A=ue.reverseMap;p=Ae,m=A,M=v(g.canonical,!1).map}}function y(ue){return S(),p.get(ue)||null}function U(ue){return S(),m.get(ue)||null}function w(ue){return S(),M.get(ue)||null}var b=r.L,P=r.R,E=r.EN,x=r.ES,L=r.ET,R=r.AN,I=r.CS,N=r.B,H=r.S,k=r.ON,Z=r.BN,q=r.NSM,K=r.AL,Y=r.LRO,D=r.RLO,V=r.LRE,ee=r.RLE,F=r.PDF,O=r.LRI,$=r.RLI,z=r.FSI,ae=r.PDI;function fe(ue,Ae){for(var A=125,_=new Uint32Array(ue.length),G=0;G<ue.length;G++)_[G]=h(ue[G]);var X=new Map;function ne(Pt,Jt){var Ut=_[Pt];_[Pt]=Jt,X.set(Ut,X.get(Ut)-1),Ut&o&&X.set(o,X.get(o)-1),X.set(Jt,(X.get(Jt)||0)+1),Jt&o&&X.set(o,(X.get(o)||0)+1)}for(var Q=new Uint8Array(ue.length),we=new Map,oe=[],ce=null,Me=0;Me<ue.length;Me++)ce||oe.push(ce={start:Me,end:ue.length-1,level:Ae==="rtl"?1:Ae==="ltr"?0:Fs(Me,!1)}),_[Me]&N&&(ce.end=Me,ce=null);for(var he=ee|V|D|Y|i|ae|F|N,Se=function(Pt){return Pt+(Pt&1?1:2)},Ne=function(Pt){return Pt+(Pt&1?2:1)},ye=0;ye<oe.length;ye++){ce=oe[ye];var de=[{_level:ce.level,_override:0,_isolate:0}],me=void 0,Ie=0,He=0,B=0;X.clear();for(var ve=ce.start;ve<=ce.end;ve++){var J=_[ve];if(me=de[de.length-1],X.set(J,(X.get(J)||0)+1),J&o&&X.set(o,(X.get(o)||0)+1),J&he)if(J&(ee|V)){Q[ve]=me._level;var se=(J===ee?Ne:Se)(me._level);se<=A&&!Ie&&!He?de.push({_level:se,_override:0,_isolate:0}):Ie||He++}else if(J&(D|Y)){Q[ve]=me._level;var _e=(J===D?Ne:Se)(me._level);_e<=A&&!Ie&&!He?de.push({_level:_e,_override:J&D?P:b,_isolate:0}):Ie||He++}else if(J&i){J&z&&(J=Fs(ve+1,!0)===1?$:O),Q[ve]=me._level,me._override&&ne(ve,me._override);var Pe=(J===$?Ne:Se)(me._level);Pe<=A&&Ie===0&&He===0?(B++,de.push({_level:Pe,_override:0,_isolate:1,_isolInitIndex:ve})):Ie++}else if(J&ae){if(Ie>0)Ie--;else if(B>0){for(He=0;!de[de.length-1]._isolate;)de.pop();var Fe=de[de.length-1]._isolInitIndex;Fe!=null&&(we.set(Fe,ve),we.set(ve,Fe)),de.pop(),B--}me=de[de.length-1],Q[ve]=me._level,me._override&&ne(ve,me._override)}else J&F?(Ie===0&&(He>0?He--:!me._isolate&&de.length>1&&(de.pop(),me=de[de.length-1])),Q[ve]=me._level):J&N&&(Q[ve]=ce.level);else Q[ve]=me._level,me._override&&J!==Z&&ne(ve,me._override)}for(var We=[],Ve=null,De=ce.start;De<=ce.end;De++){var Ze=_[De];if(!(Ze&l)){var nt=Q[De],at=Ze&i,st=Ze===ae;Ve&&nt===Ve._level?(Ve._end=De,Ve._endsWithIsolInit=at):We.push(Ve={_start:De,_end:De,_level:nt,_startsWithPDI:st,_endsWithIsolInit:at})}}for(var Ct=[],Yt=0;Yt<We.length;Yt++){var Rt=We[Yt];if(!Rt._startsWithPDI||Rt._startsWithPDI&&!we.has(Rt._start)){for(var jt=[Ve=Rt],kt=void 0;Ve&&Ve._endsWithIsolInit&&(kt=we.get(Ve._end))!=null;)for(var Gt=Yt+1;Gt<We.length;Gt++)if(We[Gt]._start===kt){jt.push(Ve=We[Gt]);break}for(var pt=[],dn=0;dn<jt.length;dn++)for(var or=jt[dn],Bi=or._start;Bi<=or._end;Bi++)pt.push(Bi);for(var T=Q[pt[0]],W=ce.level,ie=pt[0]-1;ie>=0;ie--)if(!(_[ie]&l)){W=Q[ie];break}var re=pt[pt.length-1],j=Q[re],Ee=ce.level;if(!(_[re]&i)){for(var Ue=re+1;Ue<=ce.end;Ue++)if(!(_[Ue]&l)){Ee=Q[Ue];break}}Ct.push({_seqIndices:pt,_sosType:Math.max(W,T)%2?P:b,_eosType:Math.max(Ee,j)%2?P:b})}}for(var Oe=0;Oe<Ct.length;Oe++){var Be=Ct[Oe],pe=Be._seqIndices,Ge=Be._sosType,ze=Be._eosType,Ke=Q[pe[0]]&1?P:b;if(X.get(q))for(var tt=0;tt<pe.length;tt++){var it=pe[tt];if(_[it]&q){for(var vt=Ge,Qe=tt-1;Qe>=0;Qe--)if(!(_[pe[Qe]]&l)){vt=_[pe[Qe]];break}ne(it,vt&(i|ae)?k:vt)}}if(X.get(E))for(var ke=0;ke<pe.length;ke++){var mt=pe[ke];if(_[mt]&E)for(var $e=ke-1;$e>=-1;$e--){var zt=$e===-1?Ge:_[pe[$e]];if(zt&s){zt===K&&ne(mt,R);break}}}if(X.get(K))for(var En=0;En<pe.length;En++){var an=pe[En];_[an]&K&&ne(an,P)}if(X.get(x)||X.get(I))for(var fn=1;fn<pe.length-1;fn++){var ot=pe[fn];if(_[ot]&(x|I)){for(var bt=0,Gn=0,St=fn-1;St>=0&&(bt=_[pe[St]],!!(bt&l));St--);for(var zn=fn+1;zn<pe.length&&(Gn=_[pe[zn]],!!(Gn&l));zn++);bt===Gn&&(_[ot]===x?bt===E:bt&(E|R))&&ne(ot,bt)}}if(X.get(E))for(var Ht=0;Ht<pe.length;Ht++){var lr=pe[Ht];if(_[lr]&E){for(var cr=Ht-1;cr>=0&&_[pe[cr]]&(L|l);cr--)ne(pe[cr],E);for(Ht++;Ht<pe.length&&_[pe[Ht]]&(L|l|E);Ht++)_[pe[Ht]]!==E&&ne(pe[Ht],E)}}if(X.get(L)||X.get(x)||X.get(I))for(var ki=0;ki<pe.length;ki++){var Ms=pe[ki];if(_[Ms]&(L|x|I)){ne(Ms,k);for(var ur=ki-1;ur>=0&&_[pe[ur]]&l;ur--)ne(pe[ur],k);for(var hr=ki+1;hr<pe.length&&_[pe[hr]]&l;hr++)ne(pe[hr],k)}}if(X.get(E))for(var aa=0,Es=Ge;aa<pe.length;aa++){var bs=pe[aa],sa=_[bs];sa&E?Es===b&&ne(bs,b):sa&s&&(Es=sa)}if(X.get(o)){var Gi=P|E|R,Ts=Gi|b,dr=[];{for(var ri=[],ai=0;ai<pe.length;ai++)if(_[pe[ai]]&o){var zi=ue[pe[ai]],ws=void 0;if(y(zi)!==null)if(ri.length<63)ri.push({char:zi,seqIndex:ai});else break;else if((ws=U(zi))!==null)for(var Hi=ri.length-1;Hi>=0;Hi--){var oa=ri[Hi].char;if(oa===ws||oa===U(w(zi))||y(w(oa))===zi){dr.push([ri[Hi].seqIndex,ai]),ri.length=Hi;break}}}dr.sort(function(Pt,Jt){return Pt[0]-Jt[0]})}for(var la=0;la<dr.length;la++){for(var As=dr[la],fr=As[0],ca=As[1],Cs=!1,Kt=0,ua=fr+1;ua<ca;ua++){var Rs=pe[ua];if(_[Rs]&Ts){Cs=!0;var Ps=_[Rs]&Gi?P:b;if(Ps===Ke){Kt=Ps;break}}}if(Cs&&!Kt){Kt=Ge;for(var ha=fr-1;ha>=0;ha--){var Us=pe[ha];if(_[Us]&Ts){var Ls=_[Us]&Gi?P:b;Ls!==Ke?Kt=Ls:Kt=Ke;break}}}if(Kt){if(_[pe[fr]]=_[pe[ca]]=Kt,Kt!==Ke){for(var Vi=fr+1;Vi<pe.length;Vi++)if(!(_[pe[Vi]]&l)){h(ue[pe[Vi]])&q&&(_[pe[Vi]]=Kt);break}}if(Kt!==Ke){for(var Wi=ca+1;Wi<pe.length;Wi++)if(!(_[pe[Wi]]&l)){h(ue[pe[Wi]])&q&&(_[pe[Wi]]=Kt);break}}}}for(var bn=0;bn<pe.length;bn++)if(_[pe[bn]]&o){for(var Ds=bn,da=bn,fa=Ge,Xi=bn-1;Xi>=0;Xi--)if(_[pe[Xi]]&l)Ds=Xi;else{fa=_[pe[Xi]]&Gi?P:b;break}for(var Is=ze,qi=bn+1;qi<pe.length;qi++)if(_[pe[qi]]&(o|l))da=qi;else{Is=_[pe[qi]]&Gi?P:b;break}for(var pa=Ds;pa<=da;pa++)_[pe[pa]]=fa===Is?fa:Ke;bn=da}}}for(var It=ce.start;It<=ce.end;It++){var mc=Q[It],pr=_[It];if(mc&1?pr&(b|E|R)&&Q[It]++:pr&P?Q[It]++:pr&(R|E)&&(Q[It]+=2),pr&l&&(Q[It]=It===0?ce.level:Q[It-1]),It===ce.end||h(ue[It])&(H|N))for(var mr=It;mr>=0&&h(ue[mr])&c;mr--)Q[mr]=ce.level}}return{levels:Q,paragraphs:oe};function Fs(Pt,Jt){for(var Ut=Pt;Ut<ue.length;Ut++){var Tn=_[Ut];if(Tn&(P|K))return 1;if(Tn&(N|b)||Jt&&Tn===ae)return 0;if(Tn&i){var Ns=gc(Ut);Ut=Ns===-1?ue.length:Ns}}return 0}function gc(Pt){for(var Jt=1,Ut=Pt+1;Ut<ue.length;Ut++){var Tn=_[Ut];if(Tn&N)break;if(Tn&ae){if(--Jt===0)return Ut}else Tn&i&&Jt++}return-1}}var xe="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",C;function le(){if(!C){var ue=v(xe,!0),Ae=ue.map,A=ue.reverseMap;A.forEach(function(_,G){Ae.set(G,_)}),C=Ae}}function Ce(ue){return le(),C.get(ue)||null}function Le(ue,Ae,A,_){var G=ue.length;A=Math.max(0,A==null?0:+A),_=Math.min(G-1,_==null?G-1:+_);for(var X=new Map,ne=A;ne<=_;ne++)if(Ae[ne]&1){var Q=Ce(ue[ne]);Q!==null&&X.set(ne,Q)}return X}function ge(ue,Ae,A,_){var G=ue.length;A=Math.max(0,A==null?0:+A),_=Math.min(G-1,_==null?G-1:+_);var X=[];return Ae.paragraphs.forEach(function(ne){var Q=Math.max(A,ne.start),we=Math.min(_,ne.end);if(Q<we){for(var oe=Ae.levels.slice(Q,we+1),ce=we;ce>=Q&&h(ue[ce])&c;ce--)oe[ce]=ne.level;for(var Me=ne.level,he=1/0,Se=0;Se<oe.length;Se++){var Ne=oe[Se];Ne>Me&&(Me=Ne),Ne<he&&(he=Ne|1)}for(var ye=Me;ye>=he;ye--)for(var de=0;de<oe.length;de++)if(oe[de]>=ye){for(var me=de;de+1<oe.length&&oe[de+1]>=ye;)de++;de>me&&X.push([me+Q,de+Q])}}}),X}function be(ue,Ae,A,_){var G=Te(ue,Ae,A,_),X=[].concat(ue);return G.forEach(function(ne,Q){X[Q]=(Ae.levels[ne]&1?Ce(ue[ne]):null)||ue[ne]}),X.join("")}function Te(ue,Ae,A,_){for(var G=ge(ue,Ae,A,_),X=[],ne=0;ne<ue.length;ne++)X[ne]=ne;return G.forEach(function(Q){for(var we=Q[0],oe=Q[1],ce=X.slice(we,oe+1),Me=ce.length;Me--;)X[oe-Me]=ce[Me]}),X}return e.closingToOpeningBracket=U,e.getBidiCharType=h,e.getBidiCharTypeName=f,e.getCanonicalBracket=w,e.getEmbeddingLevels=fe,e.getMirroredCharacter=Ce,e.getMirroredCharactersMap=Le,e.getReorderSegments=ge,e.getReorderedIndices=Te,e.getReorderedString=be,e.openingToClosingBracket=y,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return a}const oc=/\bvoid\s+main\s*\(\s*\)\s*{/g;function cs(a){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(r,n){let i=Xe[n];return i?cs(i):r}return a.replace(e,t)}const _t=[];for(let a=0;a<256;a++)_t[a]=(a<16?"0":"")+a.toString(16);function Wm(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(_t[a&255]+_t[a>>8&255]+_t[a>>16&255]+_t[a>>24&255]+"-"+_t[e&255]+_t[e>>8&255]+"-"+_t[e>>16&15|64]+_t[e>>24&255]+"-"+_t[t&63|128]+_t[t>>8&255]+"-"+_t[t>>16&255]+_t[t>>24&255]+_t[r&255]+_t[r>>8&255]+_t[r>>16&255]+_t[r>>24&255]).toUpperCase()}const jn=Object.assign||function(){let a=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let r=arguments[e];if(r)for(let n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])}return a},Xm=Date.now(),ul=new WeakMap,hl=new Map;let qm=1e10;function us(a,e){const t=Jm(e);let r=ul.get(a);if(r||ul.set(a,r=Object.create(null)),r[t])return new r[t];const n=`_onBeforeCompile${t}`,i=function(c,u){a.onBeforeCompile.call(this,c,u);const d=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let h=hl[d];if(!h){const f=Ym(this,c,e,t);h=hl[d]=f}c.vertexShader=h.vertexShader,c.fragmentShader=h.fragmentShader,jn(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-Xm}}),this[n]&&this[n](c)},s=function(){return o(e.chained?a:a.clone())},o=function(c){const u=Object.create(c,l);return Object.defineProperty(u,"baseMaterial",{value:a}),Object.defineProperty(u,"id",{value:qm++}),u.uuid=Wm(),u.uniforms=jn({},c.uniforms,e.uniforms),u.defines=jn({},c.defines,e.defines),u.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",u.extensions=jn({},c.extensions,e.extensions),u._listeners=void 0,u},l={constructor:{value:s},isDerivedMaterial:{value:!0},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return a.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return i},set(c){this[n]=c}},copy:{writable:!0,configurable:!0,value:function(c){return a.copy.call(this,c),!a.isShaderMaterial&&!a.isDerivedMaterial&&(jn(this.extensions,c.extensions),jn(this.defines,c.defines),jn(this.uniforms,ql.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new a.constructor;return o(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=us(a.isDerivedMaterial?a.getDepthMaterial():new nc({depthPacking:Il}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=us(a.isDerivedMaterial?a.getDistanceMaterial():new ic,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:u}=this;c&&c.dispose(),u&&u.dispose(),a.dispose.call(this)}}};return r[t]=s,new s}function Ym(a,{vertexShader:e,fragmentShader:t},r,n){let{vertexDefs:i,vertexMainIntro:s,vertexMainOutro:o,vertexTransform:l,fragmentDefs:c,fragmentMainIntro:u,fragmentMainOutro:d,fragmentColorTransform:h,customRewriter:f,timeUniform:g}=r;if(i=i||"",s=s||"",o=o||"",c=c||"",u=u||"",d=d||"",(l||f)&&(e=cs(e)),(h||f)&&(t=t.replace(/^[ \t]*#include <((?:tonemapping|encodings|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),t=cs(t)),f){let v=f({vertexShader:e,fragmentShader:t});e=v.vertexShader,t=v.fragmentShader}if(h){let v=[];t=t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,p=>(v.push(p),"")),d=`${h}
${v.join(`
`)}
${d}`}if(g){const v=`
uniform float ${g};
`;i=v+i,c=v+c}return l&&(e=`vec3 troika_position_${n};
vec3 troika_normal_${n};
vec2 troika_uv_${n};
${e}
`,i=`${i}
void troikaVertexTransform${n}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${l}
}
`,s=`
troika_position_${n} = vec3(position);
troika_normal_${n} = vec3(normal);
troika_uv_${n} = vec2(uv);
troikaVertexTransform${n}(troika_position_${n}, troika_normal_${n}, troika_uv_${n});
${s}
`,e=e.replace(/\b(position|normal|uv)\b/g,(v,p,m,M)=>/\battribute\s+vec[23]\s+$/.test(M.substr(0,m))?p:`troika_${p}_${n}`),a.map&&a.map.channel>0||(e=e.replace(/\bMAP_UV\b/g,`troika_uv_${n}`))),e=dl(e,n,i,s,o),t=dl(t,n,c,u,d),{vertexShader:e,fragmentShader:t}}function dl(a,e,t,r,n){return(r||n||t)&&(a=a.replace(oc,`
${t}
void troikaOrigMain${e}() {`),a+=`
void main() {
  ${r}
  troikaOrigMain${e}();
  ${n}
}`),a}function jm(a,e){return a==="uniforms"?void 0:typeof e=="function"?e.toString():e}let Km=0;const fl=new Map;function Jm(a){const e=JSON.stringify(a,jm);let t=fl.get(e);return t==null&&fl.set(e,t=++Km),t}/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/function Zm(){return typeof window>"u"&&(self.window=self),function(a){var e={parse:function(n){var i=e._bin,s=new Uint8Array(n);if(i.readASCII(s,0,4)=="ttcf"){var o=4;i.readUshort(s,o),o+=2,i.readUshort(s,o),o+=2;var l=i.readUint(s,o);o+=4;for(var c=[],u=0;u<l;u++){var d=i.readUint(s,o);o+=4,c.push(e._readFont(s,d))}return c}return[e._readFont(s,0)]},_readFont:function(n,i){var s=e._bin,o=i;s.readFixed(n,i),i+=4;var l=s.readUshort(n,i);i+=2,s.readUshort(n,i),i+=2,s.readUshort(n,i),i+=2,s.readUshort(n,i),i+=2;for(var c=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GDEF","GPOS","GSUB","SVG "],u={_data:n,_offset:o},d={},h=0;h<l;h++){var f=s.readASCII(n,i,4);i+=4,s.readUint(n,i),i+=4;var g=s.readUint(n,i);i+=4;var v=s.readUint(n,i);i+=4,d[f]={offset:g,length:v}}for(h=0;h<c.length;h++){var p=c[h];d[p]&&(u[p.trim()]=e[p.trim()].parse(n,d[p].offset,d[p].length,u))}return u},_tabOffset:function(n,i,s){for(var o=e._bin,l=o.readUshort(n,s+4),c=s+12,u=0;u<l;u++){var d=o.readASCII(n,c,4);c+=4,o.readUint(n,c),c+=4;var h=o.readUint(n,c);if(c+=4,o.readUint(n,c),c+=4,d==i)return h}return 0}};e._bin={readFixed:function(n,i){return(n[i]<<8|n[i+1])+(n[i+2]<<8|n[i+3])/65540},readF2dot14:function(n,i){return e._bin.readShort(n,i)/16384},readInt:function(n,i){return e._bin._view(n).getInt32(i)},readInt8:function(n,i){return e._bin._view(n).getInt8(i)},readShort:function(n,i){return e._bin._view(n).getInt16(i)},readUshort:function(n,i){return e._bin._view(n).getUint16(i)},readUshorts:function(n,i,s){for(var o=[],l=0;l<s;l++)o.push(e._bin.readUshort(n,i+2*l));return o},readUint:function(n,i){return e._bin._view(n).getUint32(i)},readUint64:function(n,i){return 4294967296*e._bin.readUint(n,i)+e._bin.readUint(n,i+4)},readASCII:function(n,i,s){for(var o="",l=0;l<s;l++)o+=String.fromCharCode(n[i+l]);return o},readUnicode:function(n,i,s){for(var o="",l=0;l<s;l++){var c=n[i++]<<8|n[i++];o+=String.fromCharCode(c)}return o},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(n,i,s){var o=e._bin._tdec;return o&&i==0&&s==n.length?o.decode(n):e._bin.readASCII(n,i,s)},readBytes:function(n,i,s){for(var o=[],l=0;l<s;l++)o.push(n[i+l]);return o},readASCIIArray:function(n,i,s){for(var o=[],l=0;l<s;l++)o.push(String.fromCharCode(n[i+l]));return o},_view:function(n){return n._dataView||(n._dataView=n.buffer?new DataView(n.buffer,n.byteOffset,n.byteLength):new DataView(new Uint8Array(n).buffer))}},e._lctf={},e._lctf.parse=function(n,i,s,o,l){var c=e._bin,u={},d=i;c.readFixed(n,i),i+=4;var h=c.readUshort(n,i);i+=2;var f=c.readUshort(n,i);i+=2;var g=c.readUshort(n,i);return i+=2,u.scriptList=e._lctf.readScriptList(n,d+h),u.featureList=e._lctf.readFeatureList(n,d+f),u.lookupList=e._lctf.readLookupList(n,d+g,l),u},e._lctf.readLookupList=function(n,i,s){var o=e._bin,l=i,c=[],u=o.readUshort(n,i);i+=2;for(var d=0;d<u;d++){var h=o.readUshort(n,i);i+=2;var f=e._lctf.readLookupTable(n,l+h,s);c.push(f)}return c},e._lctf.readLookupTable=function(n,i,s){var o=e._bin,l=i,c={tabs:[]};c.ltype=o.readUshort(n,i),i+=2,c.flag=o.readUshort(n,i),i+=2;var u=o.readUshort(n,i);i+=2;for(var d=c.ltype,h=0;h<u;h++){var f=o.readUshort(n,i);i+=2;var g=s(n,d,l+f,c);c.tabs.push(g)}return c},e._lctf.numOfOnes=function(n){for(var i=0,s=0;s<32;s++)n>>>s&1&&i++;return i},e._lctf.readClassDef=function(n,i){var s=e._bin,o=[],l=s.readUshort(n,i);if(i+=2,l==1){var c=s.readUshort(n,i);i+=2;var u=s.readUshort(n,i);i+=2;for(var d=0;d<u;d++)o.push(c+d),o.push(c+d),o.push(s.readUshort(n,i)),i+=2}if(l==2){var h=s.readUshort(n,i);for(i+=2,d=0;d<h;d++)o.push(s.readUshort(n,i)),i+=2,o.push(s.readUshort(n,i)),i+=2,o.push(s.readUshort(n,i)),i+=2}return o},e._lctf.getInterval=function(n,i){for(var s=0;s<n.length;s+=3){var o=n[s],l=n[s+1];if(n[s+2],o<=i&&i<=l)return s}return-1},e._lctf.readCoverage=function(n,i){var s=e._bin,o={};o.fmt=s.readUshort(n,i),i+=2;var l=s.readUshort(n,i);return i+=2,o.fmt==1&&(o.tab=s.readUshorts(n,i,l)),o.fmt==2&&(o.tab=s.readUshorts(n,i,3*l)),o},e._lctf.coverageIndex=function(n,i){var s=n.tab;if(n.fmt==1)return s.indexOf(i);if(n.fmt==2){var o=e._lctf.getInterval(s,i);if(o!=-1)return s[o+2]+(i-s[o])}return-1},e._lctf.readFeatureList=function(n,i){var s=e._bin,o=i,l=[],c=s.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var d=s.readASCII(n,i,4);i+=4;var h=s.readUshort(n,i);i+=2;var f=e._lctf.readFeatureTable(n,o+h);f.tag=d.trim(),l.push(f)}return l},e._lctf.readFeatureTable=function(n,i){var s=e._bin,o=i,l={},c=s.readUshort(n,i);i+=2,c>0&&(l.featureParams=o+c);var u=s.readUshort(n,i);i+=2,l.tab=[];for(var d=0;d<u;d++)l.tab.push(s.readUshort(n,i+2*d));return l},e._lctf.readScriptList=function(n,i){var s=e._bin,o=i,l={},c=s.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var d=s.readASCII(n,i,4);i+=4;var h=s.readUshort(n,i);i+=2,l[d.trim()]=e._lctf.readScriptTable(n,o+h)}return l},e._lctf.readScriptTable=function(n,i){var s=e._bin,o=i,l={},c=s.readUshort(n,i);i+=2,c>0&&(l.default=e._lctf.readLangSysTable(n,o+c));var u=s.readUshort(n,i);i+=2;for(var d=0;d<u;d++){var h=s.readASCII(n,i,4);i+=4;var f=s.readUshort(n,i);i+=2,l[h.trim()]=e._lctf.readLangSysTable(n,o+f)}return l},e._lctf.readLangSysTable=function(n,i){var s=e._bin,o={};s.readUshort(n,i),i+=2,o.reqFeature=s.readUshort(n,i),i+=2;var l=s.readUshort(n,i);return i+=2,o.features=s.readUshorts(n,i,l),o},e.CFF={},e.CFF.parse=function(n,i,s){var o=e._bin;(n=new Uint8Array(n.buffer,i,s))[i=0],n[++i],n[++i],n[++i],i++;var l=[];i=e.CFF.readIndex(n,i,l);for(var c=[],u=0;u<l.length-1;u++)c.push(o.readASCII(n,i+l[u],l[u+1]-l[u]));i+=l[l.length-1];var d=[];i=e.CFF.readIndex(n,i,d);var h=[];for(u=0;u<d.length-1;u++)h.push(e.CFF.readDict(n,i+d[u],i+d[u+1]));i+=d[d.length-1];var f=h[0],g=[];i=e.CFF.readIndex(n,i,g);var v=[];for(u=0;u<g.length-1;u++)v.push(o.readASCII(n,i+g[u],g[u+1]-g[u]));if(i+=g[g.length-1],e.CFF.readSubrs(n,i,f),f.CharStrings){i=f.CharStrings,g=[],i=e.CFF.readIndex(n,i,g);var p=[];for(u=0;u<g.length-1;u++)p.push(o.readBytes(n,i+g[u],g[u+1]-g[u]));f.CharStrings=p}if(f.ROS){i=f.FDArray;var m=[];for(i=e.CFF.readIndex(n,i,m),f.FDArray=[],u=0;u<m.length-1;u++){var M=e.CFF.readDict(n,i+m[u],i+m[u+1]);e.CFF._readFDict(n,M,v),f.FDArray.push(M)}i+=m[m.length-1],i=f.FDSelect,f.FDSelect=[];var S=n[i];if(i++,S!=3)throw S;var y=o.readUshort(n,i);for(i+=2,u=0;u<y+1;u++)f.FDSelect.push(o.readUshort(n,i),n[i+2]),i+=3}return f.Encoding&&(f.Encoding=e.CFF.readEncoding(n,f.Encoding,f.CharStrings.length)),f.charset&&(f.charset=e.CFF.readCharset(n,f.charset,f.CharStrings.length)),e.CFF._readFDict(n,f,v),f},e.CFF._readFDict=function(n,i,s){var o;for(var l in i.Private&&(o=i.Private[1],i.Private=e.CFF.readDict(n,o,o+i.Private[0]),i.Private.Subrs&&e.CFF.readSubrs(n,o+i.Private.Subrs,i.Private)),i)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(l)!=-1&&(i[l]=s[i[l]-426+35])},e.CFF.readSubrs=function(n,i,s){var o=e._bin,l=[];i=e.CFF.readIndex(n,i,l);var c,u=l.length;c=u<1240?107:u<33900?1131:32768,s.Bias=c,s.Subrs=[];for(var d=0;d<l.length-1;d++)s.Subrs.push(o.readBytes(n,i+l[d],l[d+1]-l[d]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(n,i){for(var s=0;s<n.charset.length;s++)if(n.charset[s]==i)return s;return-1},e.CFF.glyphBySE=function(n,i){return i<0||i>255?-1:e.CFF.glyphByUnicode(n,e.CFF.tableSE[i])},e.CFF.readEncoding=function(n,i,s){e._bin;var o=[".notdef"],l=n[i];if(i++,l!=0)throw"error: unknown encoding format: "+l;var c=n[i];i++;for(var u=0;u<c;u++)o.push(n[i+u]);return o},e.CFF.readCharset=function(n,i,s){var o=e._bin,l=[".notdef"],c=n[i];if(i++,c==0)for(var u=0;u<s;u++){var d=o.readUshort(n,i);i+=2,l.push(d)}else{if(c!=1&&c!=2)throw"error: format: "+c;for(;l.length<s;){d=o.readUshort(n,i),i+=2;var h=0;for(c==1?(h=n[i],i++):(h=o.readUshort(n,i),i+=2),u=0;u<=h;u++)l.push(d),d++}}return l},e.CFF.readIndex=function(n,i,s){var o=e._bin,l=o.readUshort(n,i)+1,c=n[i+=2];if(i++,c==1)for(var u=0;u<l;u++)s.push(n[i+u]);else if(c==2)for(u=0;u<l;u++)s.push(o.readUshort(n,i+2*u));else if(c==3)for(u=0;u<l;u++)s.push(16777215&o.readUint(n,i+3*u-1));else if(l!=1)throw"unsupported offset size: "+c+", count: "+l;return(i+=l*c)-1},e.CFF.getCharString=function(n,i,s){var o=e._bin,l=n[i],c=n[i+1];n[i+2],n[i+3],n[i+4];var u=1,d=null,h=null;l<=20&&(d=l,u=1),l==12&&(d=100*l+c,u=2),21<=l&&l<=27&&(d=l,u=1),l==28&&(h=o.readShort(n,i+1),u=3),29<=l&&l<=31&&(d=l,u=1),32<=l&&l<=246&&(h=l-139,u=1),247<=l&&l<=250&&(h=256*(l-247)+c+108,u=2),251<=l&&l<=254&&(h=256*-(l-251)-c-108,u=2),l==255&&(h=o.readInt(n,i+1)/65535,u=5),s.val=h??"o"+d,s.size=u},e.CFF.readCharString=function(n,i,s){for(var o=i+s,l=e._bin,c=[];i<o;){var u=n[i],d=n[i+1];n[i+2],n[i+3],n[i+4];var h=1,f=null,g=null;u<=20&&(f=u,h=1),u==12&&(f=100*u+d,h=2),u!=19&&u!=20||(f=u,h=2),21<=u&&u<=27&&(f=u,h=1),u==28&&(g=l.readShort(n,i+1),h=3),29<=u&&u<=31&&(f=u,h=1),32<=u&&u<=246&&(g=u-139,h=1),247<=u&&u<=250&&(g=256*(u-247)+d+108,h=2),251<=u&&u<=254&&(g=256*-(u-251)-d-108,h=2),u==255&&(g=l.readInt(n,i+1)/65535,h=5),c.push(g??"o"+f),i+=h}return c},e.CFF.readDict=function(n,i,s){for(var o=e._bin,l={},c=[];i<s;){var u=n[i],d=n[i+1];n[i+2],n[i+3],n[i+4];var h=1,f=null,g=null;if(u==28&&(g=o.readShort(n,i+1),h=3),u==29&&(g=o.readInt(n,i+1),h=5),32<=u&&u<=246&&(g=u-139,h=1),247<=u&&u<=250&&(g=256*(u-247)+d+108,h=2),251<=u&&u<=254&&(g=256*-(u-251)-d-108,h=2),u==255)throw g=o.readInt(n,i+1)/65535,h=5,"unknown number";if(u==30){var v=[];for(h=1;;){var p=n[i+h];h++;var m=p>>4,M=15&p;if(m!=15&&v.push(m),M!=15&&v.push(M),M==15)break}for(var S="",y=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],U=0;U<v.length;U++)S+=y[v[U]];g=parseFloat(S)}u<=21&&(f=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][u],h=1,u==12&&(f=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][d],h=2)),f!=null?(l[f]=c.length==1?c[0]:c,c=[]):c.push(g),i+=h}return l},e.cmap={},e.cmap.parse=function(n,i,s){n=new Uint8Array(n.buffer,i,s),i=0;var o=e._bin,l={};o.readUshort(n,i),i+=2;var c=o.readUshort(n,i);i+=2;var u=[];l.tables=[];for(var d=0;d<c;d++){var h=o.readUshort(n,i);i+=2;var f=o.readUshort(n,i);i+=2;var g=o.readUint(n,i);i+=4;var v="p"+h+"e"+f,p=u.indexOf(g);if(p==-1){var m;p=l.tables.length,u.push(g);var M=o.readUshort(n,g);M==0?m=e.cmap.parse0(n,g):M==4?m=e.cmap.parse4(n,g):M==6?m=e.cmap.parse6(n,g):M==12?m=e.cmap.parse12(n,g):console.debug("unknown format: "+M,h,f,g),l.tables.push(m)}if(l[v]!=null)throw"multiple tables for one platform+encoding";l[v]=p}return l},e.cmap.parse0=function(n,i){var s=e._bin,o={};o.format=s.readUshort(n,i),i+=2;var l=s.readUshort(n,i);i+=2,s.readUshort(n,i),i+=2,o.map=[];for(var c=0;c<l-6;c++)o.map.push(n[i+c]);return o},e.cmap.parse4=function(n,i){var s=e._bin,o=i,l={};l.format=s.readUshort(n,i),i+=2;var c=s.readUshort(n,i);i+=2,s.readUshort(n,i),i+=2;var u=s.readUshort(n,i);i+=2;var d=u/2;l.searchRange=s.readUshort(n,i),i+=2,l.entrySelector=s.readUshort(n,i),i+=2,l.rangeShift=s.readUshort(n,i),i+=2,l.endCount=s.readUshorts(n,i,d),i+=2*d,i+=2,l.startCount=s.readUshorts(n,i,d),i+=2*d,l.idDelta=[];for(var h=0;h<d;h++)l.idDelta.push(s.readShort(n,i)),i+=2;for(l.idRangeOffset=s.readUshorts(n,i,d),i+=2*d,l.glyphIdArray=[];i<o+c;)l.glyphIdArray.push(s.readUshort(n,i)),i+=2;return l},e.cmap.parse6=function(n,i){var s=e._bin,o={};o.format=s.readUshort(n,i),i+=2,s.readUshort(n,i),i+=2,s.readUshort(n,i),i+=2,o.firstCode=s.readUshort(n,i),i+=2;var l=s.readUshort(n,i);i+=2,o.glyphIdArray=[];for(var c=0;c<l;c++)o.glyphIdArray.push(s.readUshort(n,i)),i+=2;return o},e.cmap.parse12=function(n,i){var s=e._bin,o={};o.format=s.readUshort(n,i),i+=2,i+=2,s.readUint(n,i),i+=4,s.readUint(n,i),i+=4;var l=s.readUint(n,i);i+=4,o.groups=[];for(var c=0;c<l;c++){var u=i+12*c,d=s.readUint(n,u+0),h=s.readUint(n,u+4),f=s.readUint(n,u+8);o.groups.push([d,h,f])}return o},e.glyf={},e.glyf.parse=function(n,i,s,o){for(var l=[],c=0;c<o.maxp.numGlyphs;c++)l.push(null);return l},e.glyf._parseGlyf=function(n,i){var s=e._bin,o=n._data,l=e._tabOffset(o,"glyf",n._offset)+n.loca[i];if(n.loca[i]==n.loca[i+1])return null;var c={};if(c.noc=s.readShort(o,l),l+=2,c.xMin=s.readShort(o,l),l+=2,c.yMin=s.readShort(o,l),l+=2,c.xMax=s.readShort(o,l),l+=2,c.yMax=s.readShort(o,l),l+=2,c.xMin>=c.xMax||c.yMin>=c.yMax)return null;if(c.noc>0){c.endPts=[];for(var u=0;u<c.noc;u++)c.endPts.push(s.readUshort(o,l)),l+=2;var d=s.readUshort(o,l);if(l+=2,o.length-l<d)return null;c.instructions=s.readBytes(o,l,d),l+=d;var h=c.endPts[c.noc-1]+1;for(c.flags=[],u=0;u<h;u++){var f=o[l];if(l++,c.flags.push(f),(8&f)!=0){var g=o[l];l++;for(var v=0;v<g;v++)c.flags.push(f),u++}}for(c.xs=[],u=0;u<h;u++){var p=(2&c.flags[u])!=0,m=(16&c.flags[u])!=0;p?(c.xs.push(m?o[l]:-o[l]),l++):m?c.xs.push(0):(c.xs.push(s.readShort(o,l)),l+=2)}for(c.ys=[],u=0;u<h;u++)p=(4&c.flags[u])!=0,m=(32&c.flags[u])!=0,p?(c.ys.push(m?o[l]:-o[l]),l++):m?c.ys.push(0):(c.ys.push(s.readShort(o,l)),l+=2);var M=0,S=0;for(u=0;u<h;u++)M+=c.xs[u],S+=c.ys[u],c.xs[u]=M,c.ys[u]=S}else{var y;c.parts=[];do{y=s.readUshort(o,l),l+=2;var U={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(c.parts.push(U),U.glyphIndex=s.readUshort(o,l),l+=2,1&y){var w=s.readShort(o,l);l+=2;var b=s.readShort(o,l);l+=2}else w=s.readInt8(o,l),l++,b=s.readInt8(o,l),l++;2&y?(U.m.tx=w,U.m.ty=b):(U.p1=w,U.p2=b),8&y?(U.m.a=U.m.d=s.readF2dot14(o,l),l+=2):64&y?(U.m.a=s.readF2dot14(o,l),l+=2,U.m.d=s.readF2dot14(o,l),l+=2):128&y&&(U.m.a=s.readF2dot14(o,l),l+=2,U.m.b=s.readF2dot14(o,l),l+=2,U.m.c=s.readF2dot14(o,l),l+=2,U.m.d=s.readF2dot14(o,l),l+=2)}while(32&y);if(256&y){var P=s.readUshort(o,l);for(l+=2,c.instr=[],u=0;u<P;u++)c.instr.push(o[l]),l++}}return c},e.GDEF={},e.GDEF.parse=function(n,i,s,o){var l=i;i+=4;var c=e._bin.readUshort(n,i);return{glyphClassDef:c===0?null:e._lctf.readClassDef(n,l+c)}},e.GPOS={},e.GPOS.parse=function(n,i,s,o){return e._lctf.parse(n,i,s,o,e.GPOS.subt)},e.GPOS.subt=function(n,i,s,o){var l=e._bin,c=s,u={};if(u.fmt=l.readUshort(n,s),s+=2,i==1||i==2||i==3||i==7||i==8&&u.fmt<=2){var d=l.readUshort(n,s);s+=2,u.coverage=e._lctf.readCoverage(n,d+c)}if(i==1&&u.fmt==1){var h=l.readUshort(n,s);s+=2,h!=0&&(u.pos=e.GPOS.readValueRecord(n,s,h))}else if(i==2&&u.fmt>=1&&u.fmt<=2){h=l.readUshort(n,s),s+=2;var f=l.readUshort(n,s);s+=2;var g=e._lctf.numOfOnes(h),v=e._lctf.numOfOnes(f);if(u.fmt==1){u.pairsets=[];var p=l.readUshort(n,s);s+=2;for(var m=0;m<p;m++){var M=c+l.readUshort(n,s);s+=2;var S=l.readUshort(n,M);M+=2;for(var y=[],U=0;U<S;U++){var w=l.readUshort(n,M);M+=2,h!=0&&(R=e.GPOS.readValueRecord(n,M,h),M+=2*g),f!=0&&(I=e.GPOS.readValueRecord(n,M,f),M+=2*v),y.push({gid2:w,val1:R,val2:I})}u.pairsets.push(y)}}if(u.fmt==2){var b=l.readUshort(n,s);s+=2;var P=l.readUshort(n,s);s+=2;var E=l.readUshort(n,s);s+=2;var x=l.readUshort(n,s);for(s+=2,u.classDef1=e._lctf.readClassDef(n,c+b),u.classDef2=e._lctf.readClassDef(n,c+P),u.matrix=[],m=0;m<E;m++){var L=[];for(U=0;U<x;U++){var R=null,I=null;h!=0&&(R=e.GPOS.readValueRecord(n,s,h),s+=2*g),f!=0&&(I=e.GPOS.readValueRecord(n,s,f),s+=2*v),L.push({val1:R,val2:I})}u.matrix.push(L)}}}else if(i==4&&u.fmt==1)u.markCoverage=e._lctf.readCoverage(n,l.readUshort(n,s)+c),u.baseCoverage=e._lctf.readCoverage(n,l.readUshort(n,s+2)+c),u.markClassCount=l.readUshort(n,s+4),u.markArray=e.GPOS.readMarkArray(n,l.readUshort(n,s+6)+c),u.baseArray=e.GPOS.readBaseArray(n,l.readUshort(n,s+8)+c,u.markClassCount);else if(i==6&&u.fmt==1)u.mark1Coverage=e._lctf.readCoverage(n,l.readUshort(n,s)+c),u.mark2Coverage=e._lctf.readCoverage(n,l.readUshort(n,s+2)+c),u.markClassCount=l.readUshort(n,s+4),u.mark1Array=e.GPOS.readMarkArray(n,l.readUshort(n,s+6)+c),u.mark2Array=e.GPOS.readBaseArray(n,l.readUshort(n,s+8)+c,u.markClassCount);else{if(i==9&&u.fmt==1){var N=l.readUshort(n,s);s+=2;var H=l.readUint(n,s);if(s+=4,o.ltype==9)o.ltype=N;else if(o.ltype!=N)throw"invalid extension substitution";return e.GPOS.subt(n,o.ltype,c+H)}console.debug("unsupported GPOS table LookupType",i,"format",u.fmt)}return u},e.GPOS.readValueRecord=function(n,i,s){var o=e._bin,l=[];return l.push(1&s?o.readShort(n,i):0),i+=1&s?2:0,l.push(2&s?o.readShort(n,i):0),i+=2&s?2:0,l.push(4&s?o.readShort(n,i):0),i+=4&s?2:0,l.push(8&s?o.readShort(n,i):0),i+=8&s?2:0,l},e.GPOS.readBaseArray=function(n,i,s){var o=e._bin,l=[],c=i,u=o.readUshort(n,i);i+=2;for(var d=0;d<u;d++){for(var h=[],f=0;f<s;f++)h.push(e.GPOS.readAnchorRecord(n,c+o.readUshort(n,i))),i+=2;l.push(h)}return l},e.GPOS.readMarkArray=function(n,i){var s=e._bin,o=[],l=i,c=s.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var d=e.GPOS.readAnchorRecord(n,s.readUshort(n,i+2)+l);d.markClass=s.readUshort(n,i),o.push(d),i+=4}return o},e.GPOS.readAnchorRecord=function(n,i){var s=e._bin,o={};return o.fmt=s.readUshort(n,i),o.x=s.readShort(n,i+2),o.y=s.readShort(n,i+4),o},e.GSUB={},e.GSUB.parse=function(n,i,s,o){return e._lctf.parse(n,i,s,o,e.GSUB.subt)},e.GSUB.subt=function(n,i,s,o){var l=e._bin,c=s,u={};if(u.fmt=l.readUshort(n,s),s+=2,i!=1&&i!=2&&i!=4&&i!=5&&i!=6)return null;if(i==1||i==2||i==4||i==5&&u.fmt<=2||i==6&&u.fmt<=2){var d=l.readUshort(n,s);s+=2,u.coverage=e._lctf.readCoverage(n,c+d)}if(i==1&&u.fmt>=1&&u.fmt<=2){if(u.fmt==1)u.delta=l.readShort(n,s),s+=2;else if(u.fmt==2){var h=l.readUshort(n,s);s+=2,u.newg=l.readUshorts(n,s,h),s+=2*u.newg.length}}else if(i==2&&u.fmt==1){h=l.readUshort(n,s),s+=2,u.seqs=[];for(var f=0;f<h;f++){var g=l.readUshort(n,s)+c;s+=2;var v=l.readUshort(n,g);u.seqs.push(l.readUshorts(n,g+2,v))}}else if(i==4)for(u.vals=[],h=l.readUshort(n,s),s+=2,f=0;f<h;f++){var p=l.readUshort(n,s);s+=2,u.vals.push(e.GSUB.readLigatureSet(n,c+p))}else if(i==5&&u.fmt==2){if(u.fmt==2){var m=l.readUshort(n,s);s+=2,u.cDef=e._lctf.readClassDef(n,c+m),u.scset=[];var M=l.readUshort(n,s);for(s+=2,f=0;f<M;f++){var S=l.readUshort(n,s);s+=2,u.scset.push(S==0?null:e.GSUB.readSubClassSet(n,c+S))}}}else if(i==6&&u.fmt==3){if(u.fmt==3){for(f=0;f<3;f++){h=l.readUshort(n,s),s+=2;for(var y=[],U=0;U<h;U++)y.push(e._lctf.readCoverage(n,c+l.readUshort(n,s+2*U)));s+=2*h,f==0&&(u.backCvg=y),f==1&&(u.inptCvg=y),f==2&&(u.ahedCvg=y)}h=l.readUshort(n,s),s+=2,u.lookupRec=e.GSUB.readSubstLookupRecords(n,s,h)}}else{if(i==7&&u.fmt==1){var w=l.readUshort(n,s);s+=2;var b=l.readUint(n,s);if(s+=4,o.ltype==9)o.ltype=w;else if(o.ltype!=w)throw"invalid extension substitution";return e.GSUB.subt(n,o.ltype,c+b)}console.debug("unsupported GSUB table LookupType",i,"format",u.fmt)}return u},e.GSUB.readSubClassSet=function(n,i){var s=e._bin.readUshort,o=i,l=[],c=s(n,i);i+=2;for(var u=0;u<c;u++){var d=s(n,i);i+=2,l.push(e.GSUB.readSubClassRule(n,o+d))}return l},e.GSUB.readSubClassRule=function(n,i){var s=e._bin.readUshort,o={},l=s(n,i),c=s(n,i+=2);i+=2,o.input=[];for(var u=0;u<l-1;u++)o.input.push(s(n,i)),i+=2;return o.substLookupRecords=e.GSUB.readSubstLookupRecords(n,i,c),o},e.GSUB.readSubstLookupRecords=function(n,i,s){for(var o=e._bin.readUshort,l=[],c=0;c<s;c++)l.push(o(n,i),o(n,i+2)),i+=4;return l},e.GSUB.readChainSubClassSet=function(n,i){var s=e._bin,o=i,l=[],c=s.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var d=s.readUshort(n,i);i+=2,l.push(e.GSUB.readChainSubClassRule(n,o+d))}return l},e.GSUB.readChainSubClassRule=function(n,i){for(var s=e._bin,o={},l=["backtrack","input","lookahead"],c=0;c<l.length;c++){var u=s.readUshort(n,i);i+=2,c==1&&u--,o[l[c]]=s.readUshorts(n,i,u),i+=2*o[l[c]].length}return u=s.readUshort(n,i),i+=2,o.subst=s.readUshorts(n,i,2*u),i+=2*o.subst.length,o},e.GSUB.readLigatureSet=function(n,i){var s=e._bin,o=i,l=[],c=s.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var d=s.readUshort(n,i);i+=2,l.push(e.GSUB.readLigature(n,o+d))}return l},e.GSUB.readLigature=function(n,i){var s=e._bin,o={chain:[]};o.nglyph=s.readUshort(n,i),i+=2;var l=s.readUshort(n,i);i+=2;for(var c=0;c<l-1;c++)o.chain.push(s.readUshort(n,i)),i+=2;return o},e.head={},e.head.parse=function(n,i,s){var o=e._bin,l={};return o.readFixed(n,i),i+=4,l.fontRevision=o.readFixed(n,i),i+=4,o.readUint(n,i),i+=4,o.readUint(n,i),i+=4,l.flags=o.readUshort(n,i),i+=2,l.unitsPerEm=o.readUshort(n,i),i+=2,l.created=o.readUint64(n,i),i+=8,l.modified=o.readUint64(n,i),i+=8,l.xMin=o.readShort(n,i),i+=2,l.yMin=o.readShort(n,i),i+=2,l.xMax=o.readShort(n,i),i+=2,l.yMax=o.readShort(n,i),i+=2,l.macStyle=o.readUshort(n,i),i+=2,l.lowestRecPPEM=o.readUshort(n,i),i+=2,l.fontDirectionHint=o.readShort(n,i),i+=2,l.indexToLocFormat=o.readShort(n,i),i+=2,l.glyphDataFormat=o.readShort(n,i),i+=2,l},e.hhea={},e.hhea.parse=function(n,i,s){var o=e._bin,l={};return o.readFixed(n,i),i+=4,l.ascender=o.readShort(n,i),i+=2,l.descender=o.readShort(n,i),i+=2,l.lineGap=o.readShort(n,i),i+=2,l.advanceWidthMax=o.readUshort(n,i),i+=2,l.minLeftSideBearing=o.readShort(n,i),i+=2,l.minRightSideBearing=o.readShort(n,i),i+=2,l.xMaxExtent=o.readShort(n,i),i+=2,l.caretSlopeRise=o.readShort(n,i),i+=2,l.caretSlopeRun=o.readShort(n,i),i+=2,l.caretOffset=o.readShort(n,i),i+=2,i+=8,l.metricDataFormat=o.readShort(n,i),i+=2,l.numberOfHMetrics=o.readUshort(n,i),i+=2,l},e.hmtx={},e.hmtx.parse=function(n,i,s,o){for(var l=e._bin,c={aWidth:[],lsBearing:[]},u=0,d=0,h=0;h<o.maxp.numGlyphs;h++)h<o.hhea.numberOfHMetrics&&(u=l.readUshort(n,i),i+=2,d=l.readShort(n,i),i+=2),c.aWidth.push(u),c.lsBearing.push(d);return c},e.kern={},e.kern.parse=function(n,i,s,o){var l=e._bin,c=l.readUshort(n,i);if(i+=2,c==1)return e.kern.parseV1(n,i-2,s,o);var u=l.readUshort(n,i);i+=2;for(var d={glyph1:[],rval:[]},h=0;h<u;h++){i+=2,s=l.readUshort(n,i),i+=2;var f=l.readUshort(n,i);i+=2;var g=f>>>8;if((g&=15)!=0)throw"unknown kern table format: "+g;i=e.kern.readFormat0(n,i,d)}return d},e.kern.parseV1=function(n,i,s,o){var l=e._bin;l.readFixed(n,i),i+=4;var c=l.readUint(n,i);i+=4;for(var u={glyph1:[],rval:[]},d=0;d<c;d++){l.readUint(n,i),i+=4;var h=l.readUshort(n,i);i+=2,l.readUshort(n,i),i+=2;var f=h>>>8;if((f&=15)!=0)throw"unknown kern table format: "+f;i=e.kern.readFormat0(n,i,u)}return u},e.kern.readFormat0=function(n,i,s){var o=e._bin,l=-1,c=o.readUshort(n,i);i+=2,o.readUshort(n,i),i+=2,o.readUshort(n,i),i+=2,o.readUshort(n,i),i+=2;for(var u=0;u<c;u++){var d=o.readUshort(n,i);i+=2;var h=o.readUshort(n,i);i+=2;var f=o.readShort(n,i);i+=2,d!=l&&(s.glyph1.push(d),s.rval.push({glyph2:[],vals:[]}));var g=s.rval[s.rval.length-1];g.glyph2.push(h),g.vals.push(f),l=d}return i},e.loca={},e.loca.parse=function(n,i,s,o){var l=e._bin,c=[],u=o.head.indexToLocFormat,d=o.maxp.numGlyphs+1;if(u==0)for(var h=0;h<d;h++)c.push(l.readUshort(n,i+(h<<1))<<1);if(u==1)for(h=0;h<d;h++)c.push(l.readUint(n,i+(h<<2)));return c},e.maxp={},e.maxp.parse=function(n,i,s){var o=e._bin,l={},c=o.readUint(n,i);return i+=4,l.numGlyphs=o.readUshort(n,i),i+=2,c==65536&&(l.maxPoints=o.readUshort(n,i),i+=2,l.maxContours=o.readUshort(n,i),i+=2,l.maxCompositePoints=o.readUshort(n,i),i+=2,l.maxCompositeContours=o.readUshort(n,i),i+=2,l.maxZones=o.readUshort(n,i),i+=2,l.maxTwilightPoints=o.readUshort(n,i),i+=2,l.maxStorage=o.readUshort(n,i),i+=2,l.maxFunctionDefs=o.readUshort(n,i),i+=2,l.maxInstructionDefs=o.readUshort(n,i),i+=2,l.maxStackElements=o.readUshort(n,i),i+=2,l.maxSizeOfInstructions=o.readUshort(n,i),i+=2,l.maxComponentElements=o.readUshort(n,i),i+=2,l.maxComponentDepth=o.readUshort(n,i),i+=2),l},e.name={},e.name.parse=function(n,i,s){var o=e._bin,l={};o.readUshort(n,i),i+=2;var c=o.readUshort(n,i);i+=2,o.readUshort(n,i);for(var u,d=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],h=i+=2,f=0;f<c;f++){var g=o.readUshort(n,i);i+=2;var v=o.readUshort(n,i);i+=2;var p=o.readUshort(n,i);i+=2;var m=o.readUshort(n,i);i+=2;var M=o.readUshort(n,i);i+=2;var S=o.readUshort(n,i);i+=2;var y,U=d[m],w=h+12*c+S;if(g==0)y=o.readUnicode(n,w,M/2);else if(g==3&&v==0)y=o.readUnicode(n,w,M/2);else if(v==0)y=o.readASCII(n,w,M);else if(v==1)y=o.readUnicode(n,w,M/2);else if(v==3)y=o.readUnicode(n,w,M/2);else{if(g!=1)throw"unknown encoding "+v+", platformID: "+g;y=o.readASCII(n,w,M),console.debug("reading unknown MAC encoding "+v+" as ASCII")}var b="p"+g+","+p.toString(16);l[b]==null&&(l[b]={}),l[b][U!==void 0?U:m]=y,l[b]._lang=p}for(var P in l)if(l[P].postScriptName!=null&&l[P]._lang==1033)return l[P];for(var P in l)if(l[P].postScriptName!=null&&l[P]._lang==0)return l[P];for(var P in l)if(l[P].postScriptName!=null&&l[P]._lang==3084)return l[P];for(var P in l)if(l[P].postScriptName!=null)return l[P];for(var P in l){u=P;break}return console.debug("returning name table with languageID "+l[u]._lang),l[u]},e["OS/2"]={},e["OS/2"].parse=function(n,i,s){var o=e._bin.readUshort(n,i);i+=2;var l={};if(o==0)e["OS/2"].version0(n,i,l);else if(o==1)e["OS/2"].version1(n,i,l);else if(o==2||o==3||o==4)e["OS/2"].version2(n,i,l);else{if(o!=5)throw"unknown OS/2 table version: "+o;e["OS/2"].version5(n,i,l)}return l},e["OS/2"].version0=function(n,i,s){var o=e._bin;return s.xAvgCharWidth=o.readShort(n,i),i+=2,s.usWeightClass=o.readUshort(n,i),i+=2,s.usWidthClass=o.readUshort(n,i),i+=2,s.fsType=o.readUshort(n,i),i+=2,s.ySubscriptXSize=o.readShort(n,i),i+=2,s.ySubscriptYSize=o.readShort(n,i),i+=2,s.ySubscriptXOffset=o.readShort(n,i),i+=2,s.ySubscriptYOffset=o.readShort(n,i),i+=2,s.ySuperscriptXSize=o.readShort(n,i),i+=2,s.ySuperscriptYSize=o.readShort(n,i),i+=2,s.ySuperscriptXOffset=o.readShort(n,i),i+=2,s.ySuperscriptYOffset=o.readShort(n,i),i+=2,s.yStrikeoutSize=o.readShort(n,i),i+=2,s.yStrikeoutPosition=o.readShort(n,i),i+=2,s.sFamilyClass=o.readShort(n,i),i+=2,s.panose=o.readBytes(n,i,10),i+=10,s.ulUnicodeRange1=o.readUint(n,i),i+=4,s.ulUnicodeRange2=o.readUint(n,i),i+=4,s.ulUnicodeRange3=o.readUint(n,i),i+=4,s.ulUnicodeRange4=o.readUint(n,i),i+=4,s.achVendID=[o.readInt8(n,i),o.readInt8(n,i+1),o.readInt8(n,i+2),o.readInt8(n,i+3)],i+=4,s.fsSelection=o.readUshort(n,i),i+=2,s.usFirstCharIndex=o.readUshort(n,i),i+=2,s.usLastCharIndex=o.readUshort(n,i),i+=2,s.sTypoAscender=o.readShort(n,i),i+=2,s.sTypoDescender=o.readShort(n,i),i+=2,s.sTypoLineGap=o.readShort(n,i),i+=2,s.usWinAscent=o.readUshort(n,i),i+=2,s.usWinDescent=o.readUshort(n,i),i+=2},e["OS/2"].version1=function(n,i,s){var o=e._bin;return i=e["OS/2"].version0(n,i,s),s.ulCodePageRange1=o.readUint(n,i),i+=4,s.ulCodePageRange2=o.readUint(n,i),i+=4},e["OS/2"].version2=function(n,i,s){var o=e._bin;return i=e["OS/2"].version1(n,i,s),s.sxHeight=o.readShort(n,i),i+=2,s.sCapHeight=o.readShort(n,i),i+=2,s.usDefault=o.readUshort(n,i),i+=2,s.usBreak=o.readUshort(n,i),i+=2,s.usMaxContext=o.readUshort(n,i),i+=2},e["OS/2"].version5=function(n,i,s){var o=e._bin;return i=e["OS/2"].version2(n,i,s),s.usLowerOpticalPointSize=o.readUshort(n,i),i+=2,s.usUpperOpticalPointSize=o.readUshort(n,i),i+=2},e.post={},e.post.parse=function(n,i,s){var o=e._bin,l={};return l.version=o.readFixed(n,i),i+=4,l.italicAngle=o.readFixed(n,i),i+=4,l.underlinePosition=o.readShort(n,i),i+=2,l.underlineThickness=o.readShort(n,i),i+=2,l},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(n,i){var s=n.cmap,o=-1;if(s.p0e4!=null?o=s.p0e4:s.p3e1!=null?o=s.p3e1:s.p1e0!=null?o=s.p1e0:s.p0e3!=null&&(o=s.p0e3),o==-1)throw"no familiar platform and encoding!";var l=s.tables[o];if(l.format==0)return i>=l.map.length?0:l.map[i];if(l.format==4){for(var c=-1,u=0;u<l.endCount.length;u++)if(i<=l.endCount[u]){c=u;break}return c==-1||l.startCount[c]>i?0:65535&(l.idRangeOffset[c]!=0?l.glyphIdArray[i-l.startCount[c]+(l.idRangeOffset[c]>>1)-(l.idRangeOffset.length-c)]:i+l.idDelta[c])}if(l.format==12){if(i>l.groups[l.groups.length-1][1])return 0;for(u=0;u<l.groups.length;u++){var d=l.groups[u];if(d[0]<=i&&i<=d[1])return d[2]+(i-d[0])}return 0}throw"unknown cmap table format "+l.format},e.U.glyphToPath=function(n,i){var s={cmds:[],crds:[]};if(n.SVG&&n.SVG.entries[i]){var o=n.SVG.entries[i];return o==null?s:(typeof o=="string"&&(o=e.SVG.toPath(o),n.SVG.entries[i]=o),o)}if(n.CFF){var l={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:n.CFF.Private?n.CFF.Private.defaultWidthX:0,open:!1},c=n.CFF,u=n.CFF.Private;if(c.ROS){for(var d=0;c.FDSelect[d+2]<=i;)d+=2;u=c.FDArray[c.FDSelect[d+1]].Private}e.U._drawCFF(n.CFF.CharStrings[i],l,c,u,s)}else n.glyf&&e.U._drawGlyf(i,n,s);return s},e.U._drawGlyf=function(n,i,s){var o=i.glyf[n];o==null&&(o=i.glyf[n]=e.glyf._parseGlyf(i,n)),o!=null&&(o.noc>-1?e.U._simpleGlyph(o,s):e.U._compoGlyph(o,i,s))},e.U._simpleGlyph=function(n,i){for(var s=0;s<n.noc;s++){for(var o=s==0?0:n.endPts[s-1]+1,l=n.endPts[s],c=o;c<=l;c++){var u=c==o?l:c-1,d=c==l?o:c+1,h=1&n.flags[c],f=1&n.flags[u],g=1&n.flags[d],v=n.xs[c],p=n.ys[c];if(c==o)if(h){if(!f){e.U.P.moveTo(i,v,p);continue}e.U.P.moveTo(i,n.xs[u],n.ys[u])}else f?e.U.P.moveTo(i,n.xs[u],n.ys[u]):e.U.P.moveTo(i,(n.xs[u]+v)/2,(n.ys[u]+p)/2);h?f&&e.U.P.lineTo(i,v,p):g?e.U.P.qcurveTo(i,v,p,n.xs[d],n.ys[d]):e.U.P.qcurveTo(i,v,p,(v+n.xs[d])/2,(p+n.ys[d])/2)}e.U.P.closePath(i)}},e.U._compoGlyph=function(n,i,s){for(var o=0;o<n.parts.length;o++){var l={cmds:[],crds:[]},c=n.parts[o];e.U._drawGlyf(c.glyphIndex,i,l);for(var u=c.m,d=0;d<l.crds.length;d+=2){var h=l.crds[d],f=l.crds[d+1];s.crds.push(h*u.a+f*u.b+u.tx),s.crds.push(h*u.c+f*u.d+u.ty)}for(d=0;d<l.cmds.length;d++)s.cmds.push(l.cmds[d])}},e.U._getGlyphClass=function(n,i){var s=e._lctf.getInterval(i,n);return s==-1?0:i[s+2]},e.U._applySubs=function(n,i,s,o){for(var l=n.length-i-1,c=0;c<s.tabs.length;c++)if(s.tabs[c]!=null){var u,d=s.tabs[c];if(!d.coverage||(u=e._lctf.coverageIndex(d.coverage,n[i]))!=-1){if(s.ltype==1)n[i],d.fmt==1?n[i]=n[i]+d.delta:n[i]=d.newg[u];else if(s.ltype==4)for(var h=d.vals[u],f=0;f<h.length;f++){var g=h[f],v=g.chain.length;if(!(v>l)){for(var p=!0,m=0,M=0;M<v;M++){for(;n[i+m+(1+M)]==-1;)m++;g.chain[M]!=n[i+m+(1+M)]&&(p=!1)}if(p){for(n[i]=g.nglyph,M=0;M<v+m;M++)n[i+M+1]=-1;break}}}else if(s.ltype==5&&d.fmt==2)for(var S=e._lctf.getInterval(d.cDef,n[i]),y=d.cDef[S+2],U=d.scset[y],w=0;w<U.length;w++){var b=U[w],P=b.input;if(!(P.length>l)){for(p=!0,M=0;M<P.length;M++){var E=e._lctf.getInterval(d.cDef,n[i+1+M]);if(S==-1&&d.cDef[E+2]!=P[M]){p=!1;break}}if(p){var x=b.substLookupRecords;for(f=0;f<x.length;f+=2)x[f],x[f+1]}}}else if(s.ltype==6&&d.fmt==3){if(!e.U._glsCovered(n,d.backCvg,i-d.backCvg.length)||!e.U._glsCovered(n,d.inptCvg,i)||!e.U._glsCovered(n,d.ahedCvg,i+d.inptCvg.length))continue;var L=d.lookupRec;for(w=0;w<L.length;w+=2){S=L[w];var R=o[L[w+1]];e.U._applySubs(n,i+S,R,o)}}}}},e.U._glsCovered=function(n,i,s){for(var o=0;o<i.length;o++)if(e._lctf.coverageIndex(i[o],n[s+o])==-1)return!1;return!0},e.U.glyphsToPath=function(n,i,s){for(var o={cmds:[],crds:[]},l=0,c=0;c<i.length;c++){var u=i[c];if(u!=-1){for(var d=c<i.length-1&&i[c+1]!=-1?i[c+1]:0,h=e.U.glyphToPath(n,u),f=0;f<h.crds.length;f+=2)o.crds.push(h.crds[f]+l),o.crds.push(h.crds[f+1]);for(s&&o.cmds.push(s),f=0;f<h.cmds.length;f++)o.cmds.push(h.cmds[f]);s&&o.cmds.push("X"),l+=n.hmtx.aWidth[u],c<i.length-1&&(l+=e.U.getPairAdjustment(n,u,d))}}return o},e.U.P={},e.U.P.moveTo=function(n,i,s){n.cmds.push("M"),n.crds.push(i,s)},e.U.P.lineTo=function(n,i,s){n.cmds.push("L"),n.crds.push(i,s)},e.U.P.curveTo=function(n,i,s,o,l,c,u){n.cmds.push("C"),n.crds.push(i,s,o,l,c,u)},e.U.P.qcurveTo=function(n,i,s,o,l){n.cmds.push("Q"),n.crds.push(i,s,o,l)},e.U.P.closePath=function(n){n.cmds.push("Z")},e.U._drawCFF=function(n,i,s,o,l){for(var c=i.stack,u=i.nStems,d=i.haveWidth,h=i.width,f=i.open,g=0,v=i.x,p=i.y,m=0,M=0,S=0,y=0,U=0,w=0,b=0,P=0,E=0,x=0,L={val:0,size:0};g<n.length;){e.CFF.getCharString(n,g,L);var R=L.val;if(g+=L.size,R=="o1"||R=="o18")c.length%2!=0&&!d&&(h=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,d=!0;else if(R=="o3"||R=="o23")c.length%2!=0&&!d&&(h=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,d=!0;else if(R=="o4")c.length>1&&!d&&(h=c.shift()+o.nominalWidthX,d=!0),f&&e.U.P.closePath(l),p+=c.pop(),e.U.P.moveTo(l,v,p),f=!0;else if(R=="o5")for(;c.length>0;)v+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,v,p);else if(R=="o6"||R=="o7")for(var I=c.length,N=R=="o6",H=0;H<I;H++){var k=c.shift();N?v+=k:p+=k,N=!N,e.U.P.lineTo(l,v,p)}else if(R=="o8"||R=="o24"){I=c.length;for(var Z=0;Z+6<=I;)m=v+c.shift(),M=p+c.shift(),S=m+c.shift(),y=M+c.shift(),v=S+c.shift(),p=y+c.shift(),e.U.P.curveTo(l,m,M,S,y,v,p),Z+=6;R=="o24"&&(v+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,v,p))}else{if(R=="o11")break;if(R=="o1234"||R=="o1235"||R=="o1236"||R=="o1237")R=="o1234"&&(M=p,S=(m=v+c.shift())+c.shift(),x=y=M+c.shift(),w=y,P=p,v=(b=(U=(E=S+c.shift())+c.shift())+c.shift())+c.shift(),e.U.P.curveTo(l,m,M,S,y,E,x),e.U.P.curveTo(l,U,w,b,P,v,p)),R=="o1235"&&(m=v+c.shift(),M=p+c.shift(),S=m+c.shift(),y=M+c.shift(),E=S+c.shift(),x=y+c.shift(),U=E+c.shift(),w=x+c.shift(),b=U+c.shift(),P=w+c.shift(),v=b+c.shift(),p=P+c.shift(),c.shift(),e.U.P.curveTo(l,m,M,S,y,E,x),e.U.P.curveTo(l,U,w,b,P,v,p)),R=="o1236"&&(m=v+c.shift(),M=p+c.shift(),S=m+c.shift(),x=y=M+c.shift(),w=y,b=(U=(E=S+c.shift())+c.shift())+c.shift(),P=w+c.shift(),v=b+c.shift(),e.U.P.curveTo(l,m,M,S,y,E,x),e.U.P.curveTo(l,U,w,b,P,v,p)),R=="o1237"&&(m=v+c.shift(),M=p+c.shift(),S=m+c.shift(),y=M+c.shift(),E=S+c.shift(),x=y+c.shift(),U=E+c.shift(),w=x+c.shift(),b=U+c.shift(),P=w+c.shift(),Math.abs(b-v)>Math.abs(P-p)?v=b+c.shift():p=P+c.shift(),e.U.P.curveTo(l,m,M,S,y,E,x),e.U.P.curveTo(l,U,w,b,P,v,p));else if(R=="o14"){if(c.length>0&&!d&&(h=c.shift()+s.nominalWidthX,d=!0),c.length==4){var q=c.shift(),K=c.shift(),Y=c.shift(),D=c.shift(),V=e.CFF.glyphBySE(s,Y),ee=e.CFF.glyphBySE(s,D);e.U._drawCFF(s.CharStrings[V],i,s,o,l),i.x=q,i.y=K,e.U._drawCFF(s.CharStrings[ee],i,s,o,l)}f&&(e.U.P.closePath(l),f=!1)}else if(R=="o19"||R=="o20")c.length%2!=0&&!d&&(h=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,d=!0,g+=u+7>>3;else if(R=="o21")c.length>2&&!d&&(h=c.shift()+o.nominalWidthX,d=!0),p+=c.pop(),v+=c.pop(),f&&e.U.P.closePath(l),e.U.P.moveTo(l,v,p),f=!0;else if(R=="o22")c.length>1&&!d&&(h=c.shift()+o.nominalWidthX,d=!0),v+=c.pop(),f&&e.U.P.closePath(l),e.U.P.moveTo(l,v,p),f=!0;else if(R=="o25"){for(;c.length>6;)v+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,v,p);m=v+c.shift(),M=p+c.shift(),S=m+c.shift(),y=M+c.shift(),v=S+c.shift(),p=y+c.shift(),e.U.P.curveTo(l,m,M,S,y,v,p)}else if(R=="o26")for(c.length%2&&(v+=c.shift());c.length>0;)m=v,M=p+c.shift(),v=S=m+c.shift(),p=(y=M+c.shift())+c.shift(),e.U.P.curveTo(l,m,M,S,y,v,p);else if(R=="o27")for(c.length%2&&(p+=c.shift());c.length>0;)M=p,S=(m=v+c.shift())+c.shift(),y=M+c.shift(),v=S+c.shift(),p=y,e.U.P.curveTo(l,m,M,S,y,v,p);else if(R=="o10"||R=="o29"){var F=R=="o10"?o:s;if(c.length==0)console.debug("error: empty stack");else{var O=c.pop(),$=F.Subrs[O+F.Bias];i.x=v,i.y=p,i.nStems=u,i.haveWidth=d,i.width=h,i.open=f,e.U._drawCFF($,i,s,o,l),v=i.x,p=i.y,u=i.nStems,d=i.haveWidth,h=i.width,f=i.open}}else if(R=="o30"||R=="o31"){var z=c.length,ae=(Z=0,R=="o31");for(Z+=z-(I=-3&z);Z<I;)ae?(M=p,S=(m=v+c.shift())+c.shift(),p=(y=M+c.shift())+c.shift(),I-Z==5?(v=S+c.shift(),Z++):v=S,ae=!1):(m=v,M=p+c.shift(),S=m+c.shift(),y=M+c.shift(),v=S+c.shift(),I-Z==5?(p=y+c.shift(),Z++):p=y,ae=!0),e.U.P.curveTo(l,m,M,S,y,v,p),Z+=4}else{if((R+"").charAt(0)=="o")throw console.debug("Unknown operation: "+R,n),R;c.push(R)}}}i.x=v,i.y=p,i.nStems=u,i.haveWidth=d,i.width=h,i.open=f};var t=e,r={Typr:t};return a.Typr=t,a.default=r,Object.defineProperty(a,"__esModule",{value:!0}),a}({}).Typr}/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/function Qm(){return function(a){var e=Uint8Array,t=Uint16Array,r=Uint32Array,n=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),s=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),o=function(R,I){for(var N=new t(31),H=0;H<31;++H)N[H]=I+=1<<R[H-1];var k=new r(N[30]);for(H=1;H<30;++H)for(var Z=N[H];Z<N[H+1];++Z)k[Z]=Z-N[H]<<5|H;return[N,k]},l=o(n,2),c=l[0],u=l[1];c[28]=258,u[258]=28;for(var d=o(i,0)[0],h=new t(32768),f=0;f<32768;++f){var g=(43690&f)>>>1|(21845&f)<<1;g=(61680&(g=(52428&g)>>>2|(13107&g)<<2))>>>4|(3855&g)<<4,h[f]=((65280&g)>>>8|(255&g)<<8)>>>1}var v=function(R,I,N){for(var H=R.length,k=0,Z=new t(I);k<H;++k)++Z[R[k]-1];var q,K=new t(I);for(k=0;k<I;++k)K[k]=K[k-1]+Z[k-1]<<1;{q=new t(1<<I);var Y=15-I;for(k=0;k<H;++k)if(R[k])for(var D=k<<4|R[k],V=I-R[k],ee=K[R[k]-1]++<<V,F=ee|(1<<V)-1;ee<=F;++ee)q[h[ee]>>>Y]=D}return q},p=new e(288);for(f=0;f<144;++f)p[f]=8;for(f=144;f<256;++f)p[f]=9;for(f=256;f<280;++f)p[f]=7;for(f=280;f<288;++f)p[f]=8;var m=new e(32);for(f=0;f<32;++f)m[f]=5;var M=v(p,9),S=v(m,5),y=function(R){for(var I=R[0],N=1;N<R.length;++N)R[N]>I&&(I=R[N]);return I},U=function(R,I,N){var H=I/8|0;return(R[H]|R[H+1]<<8)>>(7&I)&N},w=function(R,I){var N=I/8|0;return(R[N]|R[N+1]<<8|R[N+2]<<16)>>(7&I)},b=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],P=function(R,I,N){var H=new Error(I||b[R]);if(H.code=R,Error.captureStackTrace&&Error.captureStackTrace(H,P),!N)throw H;return H},E=function(R,I,N){var H=R.length;if(!H||N&&!N.l&&H<5)return I||new e(0);var k=!I||N,Z=!N||N.i;N||(N={}),I||(I=new e(3*H));var q,K=function(me){var Ie=I.length;if(me>Ie){var He=new e(Math.max(2*Ie,me));He.set(I),I=He}},Y=N.f||0,D=N.p||0,V=N.b||0,ee=N.l,F=N.d,O=N.m,$=N.n,z=8*H;do{if(!ee){N.f=Y=U(R,D,1);var ae=U(R,D+1,3);if(D+=3,!ae){var fe=R[(A=((q=D)/8|0)+(7&q&&1)+4)-4]|R[A-3]<<8,xe=A+fe;if(xe>H){Z&&P(0);break}k&&K(V+fe),I.set(R.subarray(A,xe),V),N.b=V+=fe,N.p=D=8*xe;continue}if(ae==1)ee=M,F=S,O=9,$=5;else if(ae==2){var C=U(R,D,31)+257,le=U(R,D+10,15)+4,Ce=C+U(R,D+5,31)+1;D+=14;for(var Le=new e(Ce),ge=new e(19),be=0;be<le;++be)ge[s[be]]=U(R,D+3*be,7);D+=3*le;var Te=y(ge),ue=(1<<Te)-1,Ae=v(ge,Te);for(be=0;be<Ce;){var A,_=Ae[U(R,D,ue)];if(D+=15&_,(A=_>>>4)<16)Le[be++]=A;else{var G=0,X=0;for(A==16?(X=3+U(R,D,3),D+=2,G=Le[be-1]):A==17?(X=3+U(R,D,7),D+=3):A==18&&(X=11+U(R,D,127),D+=7);X--;)Le[be++]=G}}var ne=Le.subarray(0,C),Q=Le.subarray(C);O=y(ne),$=y(Q),ee=v(ne,O),F=v(Q,$)}else P(1);if(D>z){Z&&P(0);break}}k&&K(V+131072);for(var we=(1<<O)-1,oe=(1<<$)-1,ce=D;;ce=D){var Me=(G=ee[w(R,D)&we])>>>4;if((D+=15&G)>z){Z&&P(0);break}if(G||P(2),Me<256)I[V++]=Me;else{if(Me==256){ce=D,ee=null;break}var he=Me-254;if(Me>264){var Se=n[be=Me-257];he=U(R,D,(1<<Se)-1)+c[be],D+=Se}var Ne=F[w(R,D)&oe],ye=Ne>>>4;if(Ne||P(3),D+=15&Ne,Q=d[ye],ye>3&&(Se=i[ye],Q+=w(R,D)&(1<<Se)-1,D+=Se),D>z){Z&&P(0);break}k&&K(V+131072);for(var de=V+he;V<de;V+=4)I[V]=I[V-Q],I[V+1]=I[V+1-Q],I[V+2]=I[V+2-Q],I[V+3]=I[V+3-Q];V=de}}N.l=ee,N.p=ce,N.b=V,ee&&(Y=1,N.m=O,N.d=F,N.n=$)}while(!Y);return V==I.length?I:function(me,Ie,He){(He==null||He>me.length)&&(He=me.length);var B=new(me instanceof t?t:me instanceof r?r:e)(He-Ie);return B.set(me.subarray(Ie,He)),B}(I,0,V)},x=new e(0),L=typeof TextDecoder<"u"&&new TextDecoder;try{L.decode(x,{stream:!0})}catch{}return a.convert_streams=function(R){var I=new DataView(R),N=0;function H(){var C=I.getUint16(N);return N+=2,C}function k(){var C=I.getUint32(N);return N+=4,C}function Z(C){fe.setUint16(xe,C),xe+=2}function q(C){fe.setUint32(xe,C),xe+=4}for(var K={signature:k(),flavor:k(),length:k(),numTables:H(),reserved:H(),totalSfntSize:k(),majorVersion:H(),minorVersion:H(),metaOffset:k(),metaLength:k(),metaOrigLength:k(),privOffset:k(),privLength:k()},Y=0;Math.pow(2,Y)<=K.numTables;)Y++;Y--;for(var D=16*Math.pow(2,Y),V=16*K.numTables-D,ee=12,F=[],O=0;O<K.numTables;O++)F.push({tag:k(),offset:k(),compLength:k(),origLength:k(),origChecksum:k()}),ee+=16;var $,z=new Uint8Array(12+16*F.length+F.reduce(function(C,le){return C+le.origLength+4},0)),ae=z.buffer,fe=new DataView(ae),xe=0;return q(K.flavor),Z(K.numTables),Z(D),Z(Y),Z(V),F.forEach(function(C){q(C.tag),q(C.origChecksum),q(ee),q(C.origLength),C.outOffset=ee,(ee+=C.origLength)%4!=0&&(ee+=4-ee%4)}),F.forEach(function(C){var le,Ce=R.slice(C.offset,C.offset+C.compLength);if(C.compLength!=C.origLength){var Le=new Uint8Array(C.origLength);le=new Uint8Array(Ce,2),E(le,Le)}else Le=new Uint8Array(Ce);z.set(Le,C.outOffset);var ge=0;(ee=C.outOffset+C.origLength)%4!=0&&(ge=4-ee%4),z.set(new Uint8Array(ge).buffer,C.outOffset+C.origLength),$=ee+ge}),ae.slice(0,$)},Object.defineProperty(a,"__esModule",{value:!0}),a}({}).convert_streams}function $m(a,e){const t={M:2,L:2,Q:4,C:6,Z:0},r={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},n=1,i=2,s=4,o=8,l=16,c=32;let u;function d(b){if(!u){const P={R:i,L:n,D:s,C:l,U:c,T:o};u=new Map;for(let E in r){let x=0;r[E].split(",").forEach(L=>{let[R,I]=L.split("+");R=parseInt(R,36),I=I?parseInt(I,36):0,u.set(x+=R,P[E]);for(let N=I;N--;)u.set(++x,P[E])})}}return u.get(b)||c}const h=1,f=2,g=3,v=4,p=[null,"isol","init","fina","medi"];function m(b){const P=new Uint8Array(b.length);let E=c,x=h,L=-1;for(let R=0;R<b.length;R++){const I=b.codePointAt(R);let N=d(I)|0,H=h;N&o||(E&(n|s|l)?N&(i|s|l)?(H=g,(x===h||x===g)&&P[L]++):N&(n|c)&&(x===f||x===v)&&P[L]--:E&(i|c)&&(x===f||x===v)&&P[L]--,x=P[R]=H,E=N,L=R,I>65535&&R++)}return P}function M(b,P){const E=[];for(let L=0;L<P.length;L++){const R=P.codePointAt(L);R>65535&&L++,E.push(a.U.codeToGlyph(b,R))}const x=b.GSUB;if(x){const{lookupList:L,featureList:R}=x;let I;const N=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/,H=[];R.forEach(k=>{if(N.test(k.tag))for(let Z=0;Z<k.tab.length;Z++){if(H[k.tab[Z]])continue;H[k.tab[Z]]=!0;const q=L[k.tab[Z]],K=/^(isol|init|fina|medi)$/.test(k.tag);K&&!I&&(I=m(P));for(let Y=0;Y<E.length;Y++)(!I||!K||p[I[Y]]===k.tag)&&a.U._applySubs(E,Y,q,L)}})}return E}function S(b,P){const E=new Int16Array(P.length*3);let x=0;for(;x<P.length;x++){const N=P[x];if(N===-1)continue;E[x*3+2]=b.hmtx.aWidth[N];const H=b.GPOS;if(H){const k=H.lookupList;for(let Z=0;Z<k.length;Z++){const q=k[Z];for(let K=0;K<q.tabs.length;K++){const Y=q.tabs[K];if(q.ltype===1){if(a._lctf.coverageIndex(Y.coverage,N)!==-1&&Y.pos){I(Y.pos,x);break}}else if(q.ltype===2){let D=null,V=L();if(V!==-1){const ee=a._lctf.coverageIndex(Y.coverage,P[V]);if(ee!==-1){if(Y.fmt===1){const F=Y.pairsets[ee];for(let O=0;O<F.length;O++)F[O].gid2===N&&(D=F[O])}else if(Y.fmt===2){const F=a.U._getGlyphClass(P[V],Y.classDef1),O=a.U._getGlyphClass(N,Y.classDef2);D=Y.matrix[F][O]}if(D){D.val1&&I(D.val1,V),D.val2&&I(D.val2,x);break}}}}else if(q.ltype===4){const D=a._lctf.coverageIndex(Y.markCoverage,N);if(D!==-1){const V=L(R),ee=V===-1?-1:a._lctf.coverageIndex(Y.baseCoverage,P[V]);if(ee!==-1){const F=Y.markArray[D],O=Y.baseArray[ee][F.markClass];E[x*3]=O.x-F.x+E[V*3]-E[V*3+2],E[x*3+1]=O.y-F.y+E[V*3+1];break}}}else if(q.ltype===6){const D=a._lctf.coverageIndex(Y.mark1Coverage,N);if(D!==-1){const V=L();if(V!==-1){const ee=P[V];if(y(b,ee)===3){const F=a._lctf.coverageIndex(Y.mark2Coverage,ee);if(F!==-1){const O=Y.mark1Array[D],$=Y.mark2Array[F][O.markClass];E[x*3]=$.x-O.x+E[V*3]-E[V*3+2],E[x*3+1]=$.y-O.y+E[V*3+1];break}}}}}}}}else if(b.kern&&!b.cff){const k=L();if(k!==-1){const Z=b.kern.glyph1.indexOf(P[k]);if(Z!==-1){const q=b.kern.rval[Z].glyph2.indexOf(N);q!==-1&&(E[k*3+2]+=b.kern.rval[Z].vals[q])}}}}return E;function L(N){for(let H=x-1;H>=0;H--)if(P[H]!==-1&&(!N||N(P[H])))return H;return-1}function R(N){return y(b,N)===1}function I(N,H){for(let k=0;k<3;k++)E[H*3+k]+=N[k]||0}}function y(b,P){const E=b.GDEF&&b.GDEF.glyphClassDef;return E?a.U._getGlyphClass(P,E):0}function U(...b){for(let P=0;P<b.length;P++)if(typeof b[P]=="number")return b[P]}function w(b){const P=Object.create(null),E=b["OS/2"],x=b.hhea,L=b.head.unitsPerEm,R=U(E&&E.sTypoAscender,x&&x.ascender,L),I={unitsPerEm:L,ascender:R,descender:U(E&&E.sTypoDescender,x&&x.descender,0),capHeight:U(E&&E.sCapHeight,R),xHeight:U(E&&E.sxHeight,R),lineGap:U(E&&E.sTypoLineGap,x&&x.lineGap),supportsCodePoint(N){return a.U.codeToGlyph(b,N)>0},forEachGlyph(N,H,k,Z){let q=0;const K=1/I.unitsPerEm*H,Y=M(b,N);let D=0;const V=S(b,Y);return Y.forEach((ee,F)=>{if(ee!==-1){let O=P[ee];if(!O){const{cmds:$,crds:z}=a.U.glyphToPath(b,ee);let ae="",fe=0;for(let Le=0,ge=$.length;Le<ge;Le++){const be=t[$[Le]];ae+=$[Le];for(let Te=1;Te<=be;Te++)ae+=(Te>1?",":"")+z[fe++]}let xe,C,le,Ce;if(z.length){xe=C=1/0,le=Ce=-1/0;for(let Le=0,ge=z.length;Le<ge;Le+=2){let be=z[Le],Te=z[Le+1];be<xe&&(xe=be),Te<C&&(C=Te),be>le&&(le=be),Te>Ce&&(Ce=Te)}}else xe=le=C=Ce=0;O=P[ee]={index:ee,advanceWidth:b.hmtx.aWidth[ee],xMin:xe,yMin:C,xMax:le,yMax:Ce,path:ae}}Z.call(null,O,q+V[F*3]*K,V[F*3+1]*K,D),q+=V[F*3+2]*K,k&&(q+=k*H)}D+=N.codePointAt(D)>65535?2:1}),q}};return I}return function(P){const E=new Uint8Array(P,0,4),x=a._bin.readASCII(E,0,4);if(x==="wOFF")P=e(P);else if(x==="wOF2")throw new Error("woff2 fonts not supported");return w(a.parse(P)[0])}}const eg=Oi({name:"Typr Font Parser",dependencies:[Zm,Qm,$m],init(a,e,t){const r=a(),n=e();return t(r,n)}});/*!
Custom bundle of @unicode-font-resolver/client v1.0.2 (https://github.com/lojjic/unicode-font-resolver)
for use in Troika text rendering. 
Original MIT license applies
*/function tg(){return function(a){var e=function(){this.buckets=new Map};e.prototype.add=function(S){var y=S>>5;this.buckets.set(y,(this.buckets.get(y)||0)|1<<(31&S))},e.prototype.has=function(S){var y=this.buckets.get(S>>5);return y!==void 0&&(y&1<<(31&S))!=0},e.prototype.serialize=function(){var S=[];return this.buckets.forEach(function(y,U){S.push((+U).toString(36)+":"+y.toString(36))}),S.join(",")},e.prototype.deserialize=function(S){var y=this;this.buckets.clear(),S.split(",").forEach(function(U){var w=U.split(":");y.buckets.set(parseInt(w[0],36),parseInt(w[1],36))})};var t=Math.pow(2,8),r=t-1,n=~r;function i(S){var y=function(w){return w&n}(S).toString(16),U=function(w){return(w&n)+t-1}(S).toString(16);return"codepoint-index/plane"+(S>>16)+"/"+y+"-"+U+".json"}function s(S,y){var U=S&r,w=y.codePointAt(U/6|0);return((w=(w||48)-48)&1<<U%6)!=0}function o(S,y){var U;(U=S,U.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map(function(w){return w.split("-").map(function(b){return parseInt(b.trim(),16)})})).forEach(function(w){var b=w[0],P=w[1];P===void 0&&(P=b),y(b,P)})}function l(S,y){o(S,function(U,w){for(var b=U;b<=w;b++)y(b)})}var c={},u={},d=new WeakMap,h="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";function f(S){var y=d.get(S);return y||(y=new e,l(S.ranges,function(U){return y.add(U)}),d.set(S,y)),y}var g,v=new Map;function p(S,y,U){return S[y]?y:S[U]?U:function(w){for(var b in w)return b}(S)}function m(S,y){var U=y;if(!S.includes(U)){U=1/0;for(var w=0;w<S.length;w++)Math.abs(S[w]-y)<Math.abs(U-y)&&(U=S[w])}return U}function M(S){return g||(g=new Set,l("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",function(y){g.add(y)})),g.has(S)}return a.CodePointSet=e,a.clearCache=function(){c={},u={}},a.getFontsForString=function(S,y){y===void 0&&(y={});var U,w=y.lang;w===void 0&&(w=new RegExp("\\p{Script=Hangul}","u").test(U=S)?"ko":new RegExp("\\p{Script=Hiragana}|\\p{Script=Katakana}","u").test(U)?"ja":"en");var b=y.category;b===void 0&&(b="sans-serif");var P=y.style;P===void 0&&(P="normal");var E=y.weight;E===void 0&&(E=400);var x=(y.dataUrl||h).replace(/\/$/g,""),L=new Map,R=new Uint8Array(S.length),I={},N={},H=new Array(S.length),k=new Map,Z=!1;function q(D){var V=v.get(D);return V||(V=fetch(x+"/"+D).then(function(ee){if(!ee.ok)throw new Error(ee.statusText);return ee.json().then(function(F){if(!Array.isArray(F)||F[0]!==1)throw new Error("Incorrect schema version; need 1, got "+F[0]);return F[1]})}).catch(function(ee){if(x!==h)return Z||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+x+'", trying default CDN. '+ee.message),Z=!0),x=h,v.delete(D),q(D);throw ee}),v.set(D,V)),V}for(var K=function(D){var V=S.codePointAt(D),ee=i(V);H[D]=ee,c[ee]||k.has(ee)||k.set(ee,q(ee).then(function(F){c[ee]=F})),V>65535&&(D++,Y=D)},Y=0;Y<S.length;Y++)K(Y);return Promise.all(k.values()).then(function(){k.clear();for(var D=function(ee){var F=S.codePointAt(ee),O=null,$=c[H[ee]],z=void 0;for(var ae in $){var fe=N[ae];if(fe===void 0&&(fe=N[ae]=new RegExp(ae).test(w||"en")),fe){for(var xe in z=ae,$[ae])if(s(F,$[ae][xe])){O=xe;break}break}}if(!O){e:for(var C in $)if(C!==z){for(var le in $[C])if(s(F,$[C][le])){O=le;break e}}}O||(console.debug("No font coverage for U+"+F.toString(16)),O="latin"),H[ee]=O,u[O]||k.has(O)||k.set(O,q("font-meta/"+O+".json").then(function(Ce){u[O]=Ce})),F>65535&&(ee++,V=ee)},V=0;V<S.length;V++)D(V);return Promise.all(k.values())}).then(function(){for(var D,V=null,ee=0;ee<S.length;ee++){var F=S.codePointAt(ee);if(V&&(M(F)||f(V).has(F)))R[ee]=R[ee-1];else{V=u[H[ee]];var O=I[V.id];if(!O){var $=V.typeforms,z=p($,b,"sans-serif"),ae=p($[z],P,"normal"),fe=m((D=$[z])===null||D===void 0?void 0:D[ae],E);O=I[V.id]=x+"/font-files/"+V.id+"/"+z+"."+ae+"."+fe+".woff"}var xe=L.get(O);xe==null&&(xe=L.size,L.set(O,xe)),R[ee]=xe}F>65535&&(ee++,R[ee]=R[ee-1])}return{fontUrls:Array.from(L.keys()),chars:R}})},Object.defineProperty(a,"__esModule",{value:!0}),a}({})}function ng(a,e){const t=Object.create(null),r=Object.create(null);function n(s,o){const l=c=>{console.error(`Failure loading font ${s}`,c)};try{const c=new XMLHttpRequest;c.open("get",s,!0),c.responseType="arraybuffer",c.onload=function(){if(c.status>=400)l(new Error(c.statusText));else if(c.status>0)try{const u=a(c.response);u.src=s,o(u)}catch(u){l(u)}},c.onerror=l,c.send()}catch(c){l(c)}}function i(s,o){let l=t[s];l?o(l):r[s]?r[s].push(o):(r[s]=[o],n(s,c=>{c.src=s,t[s]=c,r[s].forEach(u=>u(c)),delete r[s]}))}return function(s,o,{lang:l,fonts:c=[],style:u="normal",weight:d="normal",unicodeFontsURL:h}={}){const f=new Uint8Array(s.length),g=[];s.length||M();const v=new Map,p=[];if(u!=="italic"&&(u="normal"),typeof d!="number"&&(d=d==="bold"?700:400),c&&!Array.isArray(c)&&(c=[c]),c=c.slice().filter(y=>!y.lang||y.lang.test(l)).reverse(),c.length){let b=0;(function P(E=0){for(let x=E,L=s.length;x<L;x++){const R=s.codePointAt(x);if(b===1&&g[f[x-1]].supportsCodePoint(R)||/\s/.test(s[x]))f[x]=f[x-1],b===2&&(p[p.length-1][1]=x);else for(let I=f[x],N=c.length;I<=N;I++)if(I===N){const H=b===2?p[p.length-1]:p[p.length]=[x,x];H[1]=x,b=2}else{f[x]=I;const{src:H,unicodeRange:k}=c[I];if(!k||S(R,k)){const Z=t[H];if(!Z){i(H,()=>{P(x)});return}if(Z.supportsCodePoint(R)){let q=v.get(Z);typeof q!="number"&&(q=g.length,g.push(Z),v.set(Z,q)),f[x]=q,b=1;break}}}R>65535&&x+1<L&&(f[x+1]=f[x],x++,b===2&&(p[p.length-1][1]=x))}m()})()}else p.push([0,s.length-1]),m();function m(){if(p.length){const y=p.map(U=>s.substring(U[0],U[1]+1)).join(`
`);e.getFontsForString(y,{lang:l||void 0,style:u,weight:d,dataUrl:h}).then(({fontUrls:U,chars:w})=>{const b=g.length;let P=0;p.forEach(x=>{for(let L=0,R=x[1]-x[0];L<=R;L++)f[x[0]+L]=w[P++]+b;P++});let E=0;U.forEach((x,L)=>{i(x,R=>{g[L+b]=R,++E===U.length&&M()})})})}else M()}function M(){o({chars:f,fonts:g})}function S(y,U){for(let w=0;w<U.length;w++){const[b,P=b]=U[w];if(b<=y&&y<=P)return!0}return!1}}}const ig=Oi({name:"FontResolver",dependencies:[ng,eg,tg],init(a,e,t){return a(e,t())}});function rg(a,e){const r=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,n="[^\\S\\u00A0]",i=new RegExp(`${n}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function s({text:g,lang:v,fonts:p,style:m,weight:M,preResolvedFonts:S,unicodeFontsURL:y},U){const w=({chars:b,fonts:P})=>{let E,x;const L=[];for(let R=0;R<b.length;R++)b[R]!==x?(x=b[R],L.push(E={start:R,end:R,fontObj:P[b[R]]})):E.end=R;U(L)};S?w(S):a(g,w,{lang:v,fonts:p,style:m,weight:M,unicodeFontsURL:y})}function o({text:g="",font:v,lang:p,sdfGlyphSize:m=64,fontSize:M=400,fontWeight:S=1,fontStyle:y="normal",letterSpacing:U=0,lineHeight:w="normal",maxWidth:b=1/0,direction:P,textAlign:E="left",textIndent:x=0,whiteSpace:L="normal",overflowWrap:R="normal",anchorX:I=0,anchorY:N=0,metricsOnly:H=!1,unicodeFontsURL:k,preResolvedFonts:Z=null,includeCaretPositions:q=!1,chunkedBoundsSize:K=8192,colorRanges:Y=null},D){const V=d(),ee={fontLoad:0,typesetting:0};g.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),g=g.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),M=+M,U=+U,b=+b,w=w||"normal",x=+x,s({text:g,lang:p,style:y,weight:S,fonts:typeof v=="string"?[{src:v}]:v,unicodeFontsURL:k,preResolvedFonts:Z},F=>{ee.fontLoad=d()-V;const O=isFinite(b);let $=null,z=null,ae=null,fe=null,xe=null,C=null,le=null,Ce=null,Le=0,ge=0,be=L!=="nowrap";const Te=new Map,ue=d();let Ae=x,A=0,_=new h;const G=[_];F.forEach(oe=>{const{fontObj:ce}=oe,{ascender:Me,descender:he,unitsPerEm:Se,lineGap:Ne,capHeight:ye,xHeight:de}=ce;let me=Te.get(ce);if(!me){const J=M/Se,se=w==="normal"?(Me-he+Ne)*J:w*M,_e=(se-(Me-he)*J)/2,Pe=Math.min(se,(Me-he)*J),Fe=(Me+he)/2*J+Pe/2;me={index:Te.size,src:ce.src,fontObj:ce,fontSizeMult:J,unitsPerEm:Se,ascender:Me*J,descender:he*J,capHeight:ye*J,xHeight:de*J,lineHeight:se,baseline:-_e-Me*J,caretTop:Fe,caretBottom:Fe-Pe},Te.set(ce,me)}const{fontSizeMult:Ie}=me,He=g.slice(oe.start,oe.end+1);let B,ve;ce.forEachGlyph(He,M,U,(J,se,_e,Pe)=>{se+=A,Pe+=oe.start,B=se,ve=J;const Fe=g.charAt(Pe),We=J.advanceWidth*Ie,Ve=_.count;let De;if("isEmpty"in J||(J.isWhitespace=!!Fe&&new RegExp(n).test(Fe),J.canBreakAfter=!!Fe&&i.test(Fe),J.isEmpty=J.xMin===J.xMax||J.yMin===J.yMax||r.test(Fe)),!J.isWhitespace&&!J.isEmpty&&ge++,be&&O&&!J.isWhitespace&&se+We+Ae>b&&Ve){if(_.glyphAt(Ve-1).glyphObj.canBreakAfter)De=new h,Ae=-se;else for(let nt=Ve;nt--;)if(nt===0&&R==="break-word"){De=new h,Ae=-se;break}else if(_.glyphAt(nt).glyphObj.canBreakAfter){De=_.splitAt(nt+1);const at=De.glyphAt(0).x;Ae-=at;for(let st=De.count;st--;)De.glyphAt(st).x-=at;break}De&&(_.isSoftWrapped=!0,_=De,G.push(_),Le=b)}let Ze=_.glyphAt(_.count);Ze.glyphObj=J,Ze.x=se+Ae,Ze.y=_e,Ze.width=We,Ze.charIndex=Pe,Ze.fontData=me,Fe===`
`&&(_=new h,G.push(_),Ae=-(se+We+U*M)+x)}),A=B+ve.advanceWidth*Ie+U*M});let X=0;G.forEach(oe=>{let ce=!0;for(let Me=oe.count;Me--;){const he=oe.glyphAt(Me);ce&&!he.glyphObj.isWhitespace&&(oe.width=he.x+he.width,oe.width>Le&&(Le=oe.width),ce=!1);let{lineHeight:Se,capHeight:Ne,xHeight:ye,baseline:de}=he.fontData;Se>oe.lineHeight&&(oe.lineHeight=Se);const me=de-oe.baseline;me<0&&(oe.baseline+=me,oe.cap+=me,oe.ex+=me),oe.cap=Math.max(oe.cap,oe.baseline+Ne),oe.ex=Math.max(oe.ex,oe.baseline+ye)}oe.baseline-=X,oe.cap-=X,oe.ex-=X,X+=oe.lineHeight});let ne=0,Q=0;if(I&&(typeof I=="number"?ne=-I:typeof I=="string"&&(ne=-Le*(I==="left"?0:I==="center"?.5:I==="right"?1:c(I)))),N&&(typeof N=="number"?Q=-N:typeof N=="string"&&(Q=N==="top"?0:N==="top-baseline"?-G[0].baseline:N==="top-cap"?-G[0].cap:N==="top-ex"?-G[0].ex:N==="middle"?X/2:N==="bottom"?X:N==="bottom-baseline"?-G[G.length-1].baseline:c(N)*X)),!H){const oe=e.getEmbeddingLevels(g,P);$=new Uint16Array(ge),z=new Uint8Array(ge),ae=new Float32Array(ge*2),fe={},le=[1/0,1/0,-1/0,-1/0],Ce=[],q&&(C=new Float32Array(g.length*4)),Y&&(xe=new Uint8Array(ge*3));let ce=0,Me=-1,he=-1,Se,Ne;if(G.forEach((ye,de)=>{let{count:me,width:Ie}=ye;if(me>0){let He=0;for(let Pe=me;Pe--&&ye.glyphAt(Pe).glyphObj.isWhitespace;)He++;let B=0,ve=0;if(E==="center")B=(Le-Ie)/2;else if(E==="right")B=Le-Ie;else if(E==="justify"&&ye.isSoftWrapped){let Pe=0;for(let Fe=me-He;Fe--;)ye.glyphAt(Fe).glyphObj.isWhitespace&&Pe++;ve=(Le-Ie)/Pe}if(ve||B){let Pe=0;for(let Fe=0;Fe<me;Fe++){let We=ye.glyphAt(Fe);const Ve=We.glyphObj;We.x+=B+Pe,ve!==0&&Ve.isWhitespace&&Fe<me-He&&(Pe+=ve,We.width+=ve)}}const J=e.getReorderSegments(g,oe,ye.glyphAt(0).charIndex,ye.glyphAt(ye.count-1).charIndex);for(let Pe=0;Pe<J.length;Pe++){const[Fe,We]=J[Pe];let Ve=1/0,De=-1/0;for(let Ze=0;Ze<me;Ze++)if(ye.glyphAt(Ze).charIndex>=Fe){let nt=Ze,at=Ze;for(;at<me;at++){let st=ye.glyphAt(at);if(st.charIndex>We)break;at<me-He&&(Ve=Math.min(Ve,st.x),De=Math.max(De,st.x+st.width))}for(let st=nt;st<at;st++){const Ct=ye.glyphAt(st);Ct.x=De-(Ct.x+Ct.width-Ve)}break}}let se;const _e=Pe=>se=Pe;for(let Pe=0;Pe<me;Pe++){const Fe=ye.glyphAt(Pe);se=Fe.glyphObj;const We=se.index,Ve=oe.levels[Fe.charIndex]&1;if(Ve){const De=e.getMirroredCharacter(g[Fe.charIndex]);De&&Fe.fontData.fontObj.forEachGlyph(De,0,0,_e)}if(q){const{charIndex:De,fontData:Ze}=Fe,nt=Fe.x+ne,at=Fe.x+Fe.width+ne;C[De*4]=Ve?at:nt,C[De*4+1]=Ve?nt:at,C[De*4+2]=ye.baseline+Ze.caretBottom+Q,C[De*4+3]=ye.baseline+Ze.caretTop+Q;const st=De-Me;st>1&&u(C,Me,st),Me=De}if(Y){const{charIndex:De}=Fe;for(;De>he;)he++,Y.hasOwnProperty(he)&&(Ne=Y[he])}if(!se.isWhitespace&&!se.isEmpty){const De=ce++,{fontSizeMult:Ze,src:nt,index:at}=Fe.fontData,st=fe[nt]||(fe[nt]={});st[We]||(st[We]={path:se.path,pathBounds:[se.xMin,se.yMin,se.xMax,se.yMax]});const Ct=Fe.x+ne,Yt=Fe.y+ye.baseline+Q;ae[De*2]=Ct,ae[De*2+1]=Yt;const Rt=Ct+se.xMin*Ze,jt=Yt+se.yMin*Ze,kt=Ct+se.xMax*Ze,Gt=Yt+se.yMax*Ze;Rt<le[0]&&(le[0]=Rt),jt<le[1]&&(le[1]=jt),kt>le[2]&&(le[2]=kt),Gt>le[3]&&(le[3]=Gt),De%K===0&&(Se={start:De,end:De,rect:[1/0,1/0,-1/0,-1/0]},Ce.push(Se)),Se.end++;const pt=Se.rect;if(Rt<pt[0]&&(pt[0]=Rt),jt<pt[1]&&(pt[1]=jt),kt>pt[2]&&(pt[2]=kt),Gt>pt[3]&&(pt[3]=Gt),$[De]=We,z[De]=at,Y){const dn=De*3;xe[dn]=Ne>>16&255,xe[dn+1]=Ne>>8&255,xe[dn+2]=Ne&255}}}}}),C){const ye=g.length-Me;ye>1&&u(C,Me,ye)}}const we=[];Te.forEach(({index:oe,src:ce,unitsPerEm:Me,ascender:he,descender:Se,lineHeight:Ne,capHeight:ye,xHeight:de})=>{we[oe]={src:ce,unitsPerEm:Me,ascender:he,descender:Se,lineHeight:Ne,capHeight:ye,xHeight:de}}),ee.typesetting=d()-ue,D({glyphIds:$,glyphFontIndices:z,glyphPositions:ae,glyphData:fe,fontData:we,caretPositions:C,glyphColors:xe,chunkedBounds:Ce,fontSize:M,topBaseline:Q+G[0].baseline,blockBounds:[ne,Q-X,ne+Le,Q],visibleBounds:le,timings:ee})})}function l(g,v){o({...g,metricsOnly:!0},p=>{const[m,M,S,y]=p.blockBounds;v({width:S-m,height:y-M})})}function c(g){let v=g.match(/^([\d.]+)%$/),p=v?parseFloat(v[1]):NaN;return isNaN(p)?0:p/100}function u(g,v,p){const m=g[v*4],M=g[v*4+1],S=g[v*4+2],y=g[v*4+3],U=(M-m)/p;for(let w=0;w<p;w++){const b=(v+w)*4;g[b]=m+U*w,g[b+1]=m+U*(w+1),g[b+2]=S,g[b+3]=y}}function d(){return(self.performance||Date).now()}function h(){this.data=[]}const f=["glyphObj","x","y","width","charIndex","fontData"];return h.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/f.length)},glyphAt(g){let v=h.flyweight;return v.data=this.data,v.index=g,v},splitAt(g){let v=new h;return v.data=this.data.splice(g*f.length),v}},h.flyweight=f.reduce((g,v,p,m)=>(Object.defineProperty(g,v,{get(){return this.data[this.index*f.length+p]},set(M){this.data[this.index*f.length+p]=M}}),g),{data:null,index:0}),{typeset:o,measure:l}}const ti=()=>(self.performance||Date).now(),ra=sc();let pl;function ag(a,e,t,r,n,i,s,o,l,c,u=!0){return u?og(a,e,t,r,n,i,s,o,l,c).then(null,d=>(pl||(console.warn("WebGL SDF generation failed, falling back to JS",d),pl=!0),gl(a,e,t,r,n,i,s,o,l,c))):gl(a,e,t,r,n,i,s,o,l,c)}const Wr=[],sg=5;let hs=0;function lc(){const a=ti();for(;Wr.length&&ti()-a<sg;)Wr.shift()();hs=Wr.length?setTimeout(lc,0):0}const og=(...a)=>new Promise((e,t)=>{Wr.push(()=>{const r=ti();try{ra.webgl.generateIntoCanvas(...a),e({timing:ti()-r})}catch(n){t(n)}}),hs||(hs=setTimeout(lc,0))}),lg=4,cg=2e3,ml={};let ug=0;function gl(a,e,t,r,n,i,s,o,l,c){const u="TroikaTextSDFGenerator_JS_"+ug++%lg;let d=ml[u];return d||(d=ml[u]={workerModule:Oi({name:u,workerId:u,dependencies:[sc,ti],init(h,f){const g=h().javascript.generate;return function(...v){const p=f();return{textureData:g(...v),timing:f()-p}}},getTransferables(h){return[h.textureData.buffer]}}),requests:0,idleTimer:null}),d.requests++,clearTimeout(d.idleTimer),d.workerModule(a,e,t,r,n,i).then(({textureData:h,timing:f})=>{const g=ti(),v=new Uint8Array(h.length*4);for(let p=0;p<h.length;p++)v[p*4+c]=h[p];return ra.webglUtils.renderImageData(s,v,o,l,a,e,1<<3-c),f+=ti()-g,--d.requests===0&&(d.idleTimer=setTimeout(()=>{zm(u)},cg)),{timing:f}})}function hg(a){a._warm||(ra.webgl.isSupported(a),a._warm=!0)}const dg=ra.webglUtils.resizeWebGLCanvasWithoutClearing,bi={defaultFontURL:null,unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},fg=new Ye;function Ei(){return(self.performance||Date).now()}const vl=Object.create(null);function pg(a,e){a=gg({},a);const t=Ei(),{defaultFontURL:r}=bi,n=[];if(r&&n.push({label:"default",src:_l(r)}),a.font&&n.push({label:"user",src:_l(a.font)}),a.font=n,a.text=""+a.text,a.sdfGlyphSize=a.sdfGlyphSize||bi.sdfGlyphSize,a.unicodeFontsURL=a.unicodeFontsURL||bi.unicodeFontsURL,a.colorRanges!=null){let h={};for(let f in a.colorRanges)if(a.colorRanges.hasOwnProperty(f)){let g=a.colorRanges[f];typeof g!="number"&&(g=fg.set(g).getHex()),h[f]=g}a.colorRanges=h}Object.freeze(a);const{textureWidth:i,sdfExponent:s}=bi,{sdfGlyphSize:o}=a,l=i/o*4;let c=vl[o];if(!c){const h=document.createElement("canvas");h.width=i,h.height=o*256/l,c=vl[o]={glyphCount:0,sdfGlyphSize:o,sdfCanvas:h,sdfTexture:new At(h,void 0,void 0,void 0,Ot,Ot),contextLost:!1,glyphsByFont:new Map},c.sdfTexture.generateMipmaps=!1,mg(c)}const{sdfTexture:u,sdfCanvas:d}=c;_g(a).then(h=>{const{glyphIds:f,glyphFontIndices:g,fontData:v,glyphPositions:p,fontSize:m,timings:M}=h,S=[],y=new Float32Array(f.length*4);let U=0,w=0;const b=Ei(),P=v.map(I=>{let N=c.glyphsByFont.get(I.src);return N||c.glyphsByFont.set(I.src,N=new Map),N});f.forEach((I,N)=>{const H=g[N],{src:k,unitsPerEm:Z}=v[H];let q=P[H].get(I);if(!q){const{path:ee,pathBounds:F}=h.glyphData[k][I],O=Math.max(F[2]-F[0],F[3]-F[1])/o*(bi.sdfMargin*o+.5),$=c.glyphCount++,z=[F[0]-O,F[1]-O,F[2]+O,F[3]+O];P[H].set(I,q={path:ee,atlasIndex:$,sdfViewBox:z}),S.push(q)}const{sdfViewBox:K}=q,Y=p[w++],D=p[w++],V=m/Z;y[U++]=Y+K[0]*V,y[U++]=D+K[1]*V,y[U++]=Y+K[2]*V,y[U++]=D+K[3]*V,f[N]=q.atlasIndex}),M.quads=(M.quads||0)+(Ei()-b);const E=Ei();M.sdf={};const x=d.height,L=Math.ceil(c.glyphCount/l),R=Math.pow(2,Math.ceil(Math.log2(L*o)));R>x&&(console.info(`Increasing SDF texture size ${x}->${R}`),dg(d,i,R),u.dispose()),Promise.all(S.map(I=>cc(I,c,a.gpuAccelerateSDF).then(({timing:N})=>{M.sdf[I.atlasIndex]=N}))).then(()=>{S.length&&!c.contextLost&&(uc(c),u.needsUpdate=!0),M.sdfTotal=Ei()-E,M.total=Ei()-t,e(Object.freeze({parameters:a,sdfTexture:u,sdfGlyphSize:o,sdfExponent:s,glyphBounds:y,glyphAtlasIndices:f,glyphColors:h.glyphColors,caretPositions:h.caretPositions,chunkedBounds:h.chunkedBounds,ascender:h.ascender,descender:h.descender,lineHeight:h.lineHeight,capHeight:h.capHeight,xHeight:h.xHeight,topBaseline:h.topBaseline,blockBounds:h.blockBounds,visibleBounds:h.visibleBounds,timings:h.timings}))})}),Promise.resolve().then(()=>{c.contextLost||hg(d)})}function cc({path:a,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:r,sdfCanvas:n,contextLost:i},s){if(i)return Promise.resolve({timing:-1});const{textureWidth:o,sdfExponent:l}=bi,c=Math.max(t[2]-t[0],t[3]-t[1]),u=Math.floor(e/4),d=u%(o/r)*r,h=Math.floor(u/(o/r))*r,f=e%4;return ag(r,r,a,t,c,l,n,d,h,f,s)}function mg(a){const e=a.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),a.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),a.contextLost=!1;const r=[];a.glyphsByFont.forEach(n=>{n.forEach(i=>{r.push(cc(i,a,!0))})}),Promise.all(r).then(()=>{uc(a),a.sdfTexture.needsUpdate=!0})})}function gg(a,e){for(let t in e)e.hasOwnProperty(t)&&(a[t]=e[t]);return a}let kr;function _l(a){return kr||(kr=typeof document>"u"?{}:document.createElement("a")),kr.href=a,kr.href}function uc(a){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=a,{width:r,height:n}=e,i=a.sdfCanvas.getContext("webgl");let s=t.image.data;(!s||s.length!==r*n*4)&&(s=new Uint8Array(r*n*4),t.image={width:r,height:n,data:s},t.flipY=!1,t.isDataTexture=!0),i.readPixels(0,0,r,n,i.RGBA,i.UNSIGNED_BYTE,s)}}const vg=Oi({name:"Typesetter",dependencies:[rg,ig,Vm],init(a,e,t){return a(e,t())}}),_g=Oi({name:"Typesetter",dependencies:[vg],init(a){return function(e){return new Promise(t=>{a.typeset(e,t)})}},getTransferables(a){const e=[];for(let t in a)a[t]&&a[t].buffer&&e.push(a[t].buffer);return e}}),xl={};function xg(a){let e=xl[a];if(!e){const t=new ii(1,1,a,a),r=t.clone(),n=t.attributes,i=r.attributes,s=new hn,o=n.uv.count;for(let l=0;l<o;l++)i.position.array[l*3]*=-1,i.normal.array[l*3+2]*=-1;["position","normal","uv"].forEach(l=>{s.setAttribute(l,new rn([...n[l].array,...i[l].array],n[l].itemSize))}),s.setIndex([...t.index.array,...r.index.array.map(l=>l+o)]),s.translate(.5,.5,0),e=xl[a]=s}return e}const Sg="aTroikaGlyphBounds",Sl="aTroikaGlyphIndex",yg="aTroikaGlyphColor";class Mg extends Nm{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new na,this.boundingBox=new tn}computeBoundingSphere(){}computeBoundingBox(){}setSide(e){const t=this.getIndex().count;this.setDrawRange(e===wt?t/2:0,e===en?t:t/2)}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!="number"||e<1)&&(e=1);let t=xg(e);["position","normal","uv"].forEach(r=>{this.attributes[r]=t.attributes[r].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,r,n,i){Za(this,Sg,e,4),Za(this,Sl,t,1),Za(this,yg,i,3),this._blockBounds=r,this._chunkedBounds=n,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){const e=this._blockBounds;if(e){const{curveRadius:t,boundingBox:r}=this;if(t){const{PI:n,floor:i,min:s,max:o,sin:l,cos:c}=Math,u=n/2,d=n*2,h=Math.abs(t),f=e[0]/h,g=e[2]/h,v=i((f+u)/d)!==i((g+u)/d)?-h:s(l(f)*h,l(g)*h),p=i((f-u)/d)!==i((g-u)/d)?h:o(l(f)*h,l(g)*h),m=i((f+n)/d)!==i((g+n)/d)?h*2:o(h-c(f)*h,h-c(g)*h);r.min.set(v,e[1],t<0?-m:0),r.max.set(p,e[3],t<0?0:m)}else r.min.set(e[0],e[1],0),r.max.set(e[2],e[3],0);r.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(Sl).count,r=this._chunkedBounds;if(r)for(let n=r.length;n--;){t=r[n].end;let i=r[n].rect;if(i[1]<e.w&&i[3]>e.y&&i[0]<e.z&&i[2]>e.x)break}this.instanceCount=t}}function Za(a,e,t,r){const n=a.getAttribute(e);t?n&&n.array.length===t.length?(n.array.set(t),n.needsUpdate=!0):(a.setAttribute(e,new Um(t,r)),delete a._maxInstanceCount,a.dispose()):n&&a.deleteAttribute(e)}const Eg=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaDistanceOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,bg=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaDistanceOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaDistanceOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,Tg=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaDistanceOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaOutlineOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,wg=`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaDistanceOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;function Ag(a){const e=us(a,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new Je},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new ht(0,0,0,0)},uTroikaClipRect:{value:new ht(0,0,0,0)},uTroikaDistanceOffset:{value:0},uTroikaOutlineOpacity:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new Je},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new Ye},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new qe},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:Eg,vertexTransform:bg,fragmentDefs:Tg,fragmentColorTransform:wg,customRewriter({vertexShader:t,fragmentShader:r}){let n=/\buniform\s+vec3\s+diffuse\b/;return n.test(r)&&(r=r.replace(n,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),n.test(t)||(t=t.replace(oc,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:r}}});return e.transparent=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const Ss=new ms({color:16777215,side:en,transparent:!0}),yl=8421504,Ml=new lt,Gr=new te,Qa=new te,Qi=[],Cg=new te,$a="+x+y";function El(a){return Array.isArray(a)?a[0]:a}let hc=()=>{const a=new xt(new ii(1,1),Ss);return hc=()=>a,a},dc=()=>{const a=new xt(new ii(1,1,32,1),Ss);return dc=()=>a,a};const Rg={type:"syncstart"},Pg={type:"synccomplete"},fc=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],Ug=fc.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class Xr extends xt{constructor(){const e=new Mg;super(e,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang=null,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=yl,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=$a,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent(Rg),pg({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);const r=this._queuedSyncs;r&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{r.forEach(n=>n&&n())})),this.dispatchEvent(Pg),e&&e()})))}onBeforeRender(e,t,r,n,i,s){this.sync(),i.isTroikaTextMaterial&&this._prepareForRender(i),i._hadOwnSide=i.hasOwnProperty("side"),this.geometry.setSide(i._actualSide=i.side),i.side=yn}onAfterRender(e,t,r,n,i,s){i._hadOwnSide?i.side=i._actualSide:delete i.side}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}get material(){let e=this._derivedMaterial;const t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=Ss.clone());if((!e||e.baseMaterial!==t)&&(e=this._derivedMaterial=Ag(t),t.addEventListener("dispose",function r(){t.removeEventListener("dispose",r),e.dispose()})),this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY){let r=e._outlineMtl;return r||(r=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),r.isTextOutlineMaterial=!0,r.depthWrite=!1,r.map=null,e.addEventListener("dispose",function n(){e.removeEventListener("dispose",n),r.dispose()})),[r,e]}else return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return El(this.material).getDepthMaterial()}get customDistanceMaterial(){return El(this.material).getDistanceMaterial()}_prepareForRender(e){const t=e.isTextOutlineMaterial,r=e.uniforms,n=this.textRenderInfo;if(n){const{sdfTexture:o,blockBounds:l}=n;r.uTroikaSDFTexture.value=o,r.uTroikaSDFTextureSize.value.set(o.image.width,o.image.height),r.uTroikaSDFGlyphSize.value=n.sdfGlyphSize,r.uTroikaSDFExponent.value=n.sdfExponent,r.uTroikaTotalBounds.value.fromArray(l),r.uTroikaUseGlyphColors.value=!t&&!!n.glyphColors;let c=0,u=0,d=0,h,f,g,v=0,p=0;if(t){let{outlineWidth:M,outlineOffsetX:S,outlineOffsetY:y,outlineBlur:U,outlineOpacity:w}=this;c=this._parsePercent(M)||0,u=Math.max(0,this._parsePercent(U)||0),h=w,v=this._parsePercent(S)||0,p=this._parsePercent(y)||0}else d=Math.max(0,this._parsePercent(this.strokeWidth)||0),d&&(g=this.strokeColor,r.uTroikaStrokeColor.value.set(g??yl),f=this.strokeOpacity,f==null&&(f=1)),h=this.fillOpacity;r.uTroikaDistanceOffset.value=c,r.uTroikaPositionOffset.value.set(v,p),r.uTroikaBlurRadius.value=u,r.uTroikaStrokeWidth.value=d,r.uTroikaStrokeOpacity.value=f,r.uTroikaFillOpacity.value=h??1,r.uTroikaCurveRadius.value=this.curveRadius||0;let m=this.clipRect;if(m&&Array.isArray(m)&&m.length===4)r.uTroikaClipRect.value.fromArray(m);else{const M=(this.fontSize||.1)*100;r.uTroikaClipRect.value.set(l[0]-M,l[1]-M,l[2]+M,l[3]+M)}this.geometry.applyClipRect(r.uTroikaClipRect.value)}r.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;const i=t?this.outlineColor||0:this.color;if(i==null)delete e.color;else{const o=e.hasOwnProperty("color")?e.color:e.color=new Ye;(i!==o._input||typeof i=="object")&&o.set(o._input=i)}let s=this.orientation||$a;if(s!==e._orientation){let o=r.uTroikaOrient.value;s=s.replace(/[^-+xyz]/g,"");let l=s!==$a&&s.match(/^([-+])([xyz])([-+])([xyz])$/);if(l){let[,c,u,d,h]=l;Gr.set(0,0,0)[u]=c==="-"?1:-1,Qa.set(0,0,0)[h]=d==="-"?-1:1,Ml.lookAt(Cg,Gr.cross(Qa),Qa),o.setFromMatrix4(Ml)}else o.identity();e._orientation=s}}_parsePercent(e){if(typeof e=="string"){let t=e.match(/^(-?[\d.]+)%$/),r=t?parseFloat(t[1]):NaN;e=(isNaN(r)?0:r/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new Je){t.copy(e);const r=this.curveRadius;return r&&(t.x=Math.atan2(e.x,Math.abs(r)-Math.abs(e.z))*Math.abs(r)),t}worldPositionToTextCoords(e,t=new Je){return Gr.copy(e),this.localPositionToTextCoords(this.worldToLocal(Gr),t)}raycast(e,t){const{textRenderInfo:r,curveRadius:n}=this;if(r){const i=r.blockBounds,s=n?dc():hc(),o=s.geometry,{position:l,uv:c}=o.attributes;for(let u=0;u<c.count;u++){let d=i[0]+c.getX(u)*(i[2]-i[0]);const h=i[1]+c.getY(u)*(i[3]-i[1]);let f=0;n&&(f=n-Math.cos(d/n)*n,d=Math.sin(d/n)*n),l.setXYZ(u,d,h,f)}o.boundingSphere=this.geometry.boundingSphere,o.boundingBox=this.geometry.boundingBox,s.matrixWorld=this.matrixWorld,s.material.side=this.material.side,Qi.length=0,s.raycast(e,Qi);for(let u=0;u<Qi.length;u++)Qi[u].object=this,t.push(Qi[u])}}copy(e){const t=this.geometry;return super.copy(e),this.geometry=t,Ug.forEach(r=>{this[r]=e[r]}),this}clone(){return new this.constructor().copy(this)}}fc.forEach(a=>{const e="_private_"+a;Object.defineProperty(Xr.prototype,a,{get(){return this[e]},set(t){t!==this[e]&&(this[e]=t,this._needsSync=!0)}})});const ut=class ut{constructor(){if(!ut.instance)ut.instance=this,ut.instance.startAnimate(),ut.instance.enterView();else return ut.instance.startAnimate(),ut.instance;if(ll.isWebGL2Available())console.log("WebGL2 is available");else{const e=ll.getWebGL2ErrorMessage();document.getElementById("container").appendChild(e)}this.handleKeyPresses(),this.joinGame()}enterView(){this.container=document.querySelector("pong"),this.scene=new al,this.waitingScene=new al,this.waitingForPlayers=!0,this.menuSetup(),this.setupUI(),this.createCubes(),this.createBorders(),this.setupLighting(),this.setupCamera(),this.setupRenderer(),this.setupBall(),this.animate()}menuSetup(){this.menuCam=new Wt(75,window.innerWidth/window.innerHeight,.1,1e3),this.startButton=new Xr,this.startButton.text="Awaiting Players...",this.startButton.font="static/js/views/gameCanvas/fonts/Tiny5-Regular.ttf",this.startButton.fontSize=50,this.startButton.position.x=-1,this.startButton.position.y=0,this.startButton.color=0,this.menuCam.position.z=550,this.menuCam.position.x=180,this.waitingScene.add(this.menuCam,this.startButton)}joinGame(){let e=sessionStorage.getItem("match_id"),t=sessionStorage.getItem("room_name");console.log("joinGame()"),console.log(e),console.log(t),e?this.socket=new WebSocket(`ws://localhost:8000/ws/game/${t}/?token=${sessionStorage.getItem("access")}&match_id=${e}`):this.socket=new WebSocket(`ws://localhost:8000/ws/game/${t}/?token=${sessionStorage.getItem("access")}`),this.socket.onerror=function(r){console.error("WebSocket Error:",r)},this.socket.onopen=function(){console.log("WebSocket connection established.")},this.socket.onmessage=function(r){if(ut.instance.waitingForPlayers=!1,ut.instance.message=JSON.parse(r.data),ut.instance.message.winner){ut.instance.stopAnimate();const n=sessionStorage.getItem("userId");console.log("My ID:",n,"Winner ID:",ut.instance.message.winner);return}ut.instance.collisionChecking(),ut.instance.updateUI(),ut.instance.updatePositions(),ut.instance.renderer.render(ut.instance.scene,ut.instance.camera)},this.socket.onclose=function(){console.log("POng WebSocket connection closed.")}}updateUI(){this.p1Score.text=`P1: ${this.message[1].score}`,this.p2Score.text=`P2: ${this.message[2].score}`}setupUI(){this.p1Score=new Xr,this.p2Score=new Xr,this.p1Score.font="static/js/views/gameCanvas/fonts/Tiny5-Regular.ttf",this.p1Score.fontSize=15,this.p1Score.position.x=10,this.p1Score.color=0,this.p2Score.font="static/js/views/gameCanvas/fonts/Tiny5-Regular.ttf",this.p2Score.fontSize=15,this.p2Score.position.x=160,this.p2Score.color=0,this.scene.add(this.p1Score,this.p2Score)}createCubes(){this.geometry=new Nn(5,15,2),this.material=new ja({color:11446935}),this.cube=new xt(this.geometry,this.material),this.cube.position.x=10,this.cube.castShadow=!0,this.cube.receiveShadow=!0,this.cube1Bounds=new tn(new te,new te),this.cube1Bounds.setFromObject(this.cube),this.geometry2=new Nn(5,15,2),this.cube2=new xt(this.geometry2,this.material),this.cube2.position.x=190,this.cube2.castShadow=!0,this.cube2.receiveShadow=!0,this.cube2Bounds=new tn(new te,new te),this.cube2Bounds.setFromObject(this.cube2),this.scene.add(this.cube,this.cube2)}createBorders(){this.borderGeo=new Nn(200,2,2),this.borderMaterial=new ja({color:11446935}),this.border=new xt(this.borderGeo,this.borderMaterial),this.border2=new xt(this.borderGeo,this.borderMaterial),this.border.position.x=100,this.border.position.y=0,this.border.position.z=0,this.border2.position.x=100,this.border2.position.y=150,this.border2.position.z=0,this.borderBounds=new tn(new te,new te),this.borderBounds.setFromObject(this.border),this.border2Bounds=new tn(new te,new te),this.border2Bounds.setFromObject(this.border2),this.scene.add(this.border,this.border2)}setupLighting(){this.ambientLight=new Fm(16777215,.4),this.directionalLight=new Im(16777215,.6),this.directionalLight.position.set(200,500,300),this.scene.add(this.directionalLight,this.ambientLight)}setupBall(){this.geometry5=new xs(2,32,32),this.material=new ja({color:11446935}),this.ball=new xt(this.geometry5,this.material),this.ball.position.x=0,this.ball.position.y=0,this.ball.position.z=0,this.ballBounds=new tn(new te,new te),this.ballBounds.setFromObject(this.ball),this.ball.castShadow=!0,this.ball.receiveShadow=!0,this.scene.add(this.ball)}setupCamera(){this.aspectRatio=window.innerWidth/window.innerHeight,this.cameraWidth=350,this.cameraHeight=this.cameraWidth/this.aspectRatio,this.camera=new vs(this.cameraWidth/-2,this.cameraWidth/2,this.cameraHeight/2,this.cameraHeight/-2,0,1e5),this.camera.position.set(100,75,100),this.camera.lookAt(100,75,0)}setupRenderer(){this.renderer=new Pm,this.renderer.setSize(window.innerWidth/1.3,window.innerHeight/1.3),this.renderer.setClearColor(13091497,1),this.renderer.shadowMap.enabled=!0,this.renderer.setPixelRatio(window.devicePixelRatio),document.body.appendChild(this.renderer.domElement)}handleKeyPresses(){document.addEventListener("click",e=>{console.log(e.clientX,e.clientY)}),document.addEventListener("keydown",e=>{switch(e.key){case"w":this.socket.send(JSON.stringify({cmd:"move",cmd_args:"up"}));break;case"s":this.socket.send(JSON.stringify({cmd:"move",cmd_args:"down"}));break;case"ArrowUp":this.socket.send(JSON.stringify({cmd:"move",cmd_args:"up"}));break;case"ArrowDown":this.socket.send(JSON.stringify({cmd:"move",cmd_args:"down"}));break;case"p":this.camera.position.set(0,200,0),this.camera.lookAt(0,0,0);break;case"o":this.camera.position.set(100,200,200),this.camera.lookAt(0,2,0);break;case"i":this.camera.position.set(0,0,0),this.camera.lookAt(0,0,0);break}})}cubeFlash(){this.cube.material.transparent=!0,this.cube.material.opacity=.5,this.cube.material.color=new Ye(Math.random()*16777215)}sphereFlash(){this.ball.material.transparent=!0,this.ball.material.opacity=.5,this.ball.material.color=new Ye(Math.random()*16777215)}collisionChecking(){this.cube1Bounds.copy(this.cube.geometry.boundingBox).applyMatrix4(this.cube.matrixWorld),this.cube2Bounds.copy(this.cube2.geometry.boundingBox).applyMatrix4(this.cube2.matrixWorld),this.ballBounds.copy(this.ball.geometry.boundingBox).applyMatrix4(this.ball.matrixWorld),this.cube1Bounds.intersectsBox(this.borderBounds)||this.cube1Bounds.intersectsBox(this.border2Bounds)||this.cube2Bounds.intersectsBox(this.borderBounds)||this.cube2Bounds.intersectsBox(this.border2Bounds)||this.ballBounds.intersectsBox(this.cube1Bounds)||this.ballBounds.intersectsBox(this.cube2Bounds)?this.cubeFlash():(this.cube.material.opacity=1,this.cube.material.color=new Ye(11446935)),this.ballBounds.intersectsBox(this.cube1Bounds)||this.ballBounds.intersectsBox(this.cube2Bounds)?this.sphereFlash():(this.ball.material.opacity=1,this.ball.material.color=new Ye(11446935))}updatePositions(){this.cube.position.y=this.message[1].y,this.cube2.position.y=this.message[2].y,this.ball.position.y=this.message.ball.y,this.cube.position.x=this.message[1].x,this.cube2.position.x=this.message[2].x,this.ball.position.x=this.message.ball.x}animate(){this.isAnimating&&(requestAnimationFrame(()=>this.animate()),this.waitingForPlayers==!0&&this.renderer.render(this.waitingScene,this.menuCam),window.addEventListener("resize",()=>{window.innerWidth>window.innerHeight&&(this.camera.aspectRatio=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth/1.3,window.innerHeight/1.3))},!1))}startAnimate(){this.isAnimating=!0}stopAnimate(){this.isAnimating=!1}};Os(ut,"instance");let ir=ut;class je{constructor(e){this.params=e}setTitle(e){document.title=e}async getHtml(){return""}async dismount(){return""}clearView(){const e=document.querySelector("main");e.innerHTML=""}updateView(...e){const t=document.querySelector("main");document.querySelector("canvas"),t.innerHTML="",e.forEach(r=>{r&&t.appendChild(r)}),document.dispatchEvent(new CustomEvent("viewUpdated"))}createHeader(e,t,r){const n=document.createElement(r);return n.textContent=t,n.setAttribute("lang-key",e),n}createParagraph(e,t){const r=document.createElement("p");return r.textContent=t,r.setAttribute("lang-key",e),r}createTestParagraph(e){const t=document.createElement("p");return t.textContent="ei vieläkään",t.setAttribute("lang-key",e),t.className="p",t}createLink(e,t,r){const n=document.createElement("a");return n.textContent=t,n.href=r,n.dataset.link=!0,n.setAttribute("lang-key",e),n}createAnchor(e,t){const r=document.createElement("a");return r.textContent=t,r.setAttribute("lang-key",e),r}createForm(e){const t=document.createElement("form");return t.classList.add(e),t}createButton(e,t,r){const n=document.createElement("button");return n.classList.add(t,"button"),n.setAttribute("lang-key",e),n.textContent=r,n}createLanguageButton(e,t,r){const n=document.createElement("button");return n.classList.add(t,"button"),n.textContent=r,n.setAttribute("language",e),n.setAttribute("lang-toggle",""),n}async fetchJsonData(e){try{const t=await fetch("https://localhost:8443/api"+e,{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+sessionStorage.getItem("access")}});if(!t.ok)throw new Error(`HTTP error status: ${t.status}`);return await t.json()}catch(t){return console.error("Failed to fetch JSON data:",t),null}}static async fetchWithJson(e,t,r){try{let n;if(t==="GET"?n=await fetch("https://localhost:8443/api"+e,{method:t,headers:{"Content-Type":"application/json",Authorization:"Bearer "+sessionStorage.getItem("access")}}):n=await fetch("https://localhost:8443/api"+e,{method:t,headers:{"Content-Type":"application/json",Authorization:"Bearer "+sessionStorage.getItem("access")},body:JSON.stringify(r)}),!n.ok)throw new Error(`HTTP error status: ${n.status}`);return await n.json()}catch(n){return console.error(`Error during fetch request to ${e}:`,n),alert("An error occurred. Please try again."),null}}createGame(e){const t=document.createElement("div");t.id=e,t.classList.add(e);const r=new ir;return document.body.appendChild(t),t.appendChild(r.renderer.domElement),t}}class Lg extends je{constructor(e){super(e),this.setTitle("Dashboard")}async getHtml(){const e=this.createHeader("header","Welcome to Pong game!","h1"),t=this.createParagraph("welcome","You are successfully running a Pong game."),r=this.createLink("onevsone","Start a one-vs-one game","/one-vs-one"),n=this.createLink("tournament","Start your tournament","/tournaments"),i=this.createLink("friends","Checkout how your friends are doing","/friends");window.localStorage.setItem("page","Dashboard"),this.updateView(e,t,r,n,i)}}class Dg extends je{constructor(e){super(e),this.setTitle("One-vs-one")}searchTranslations(e){const t=window.localStorage.getItem("language")||"english";return((window.translations||{})[t]||{})[e]}async handleInvite(e){console.log("Invite player:",e)}createPlayerItem(e){console.log("Friend:",e);const t=document.createElement("div");t.classList.add("list-group-item","friend");const r=document.createElement("img");r.src=e.avatar?"http://localhost:8000"+e.avatar.image:null,r.alt=`${e.username}'s avatar`,t.appendChild(r);const n=document.createElement("div");n.classList.add("status"),e.online&&typeof e.online.is_online<"u"?n.style.backgroundColor=e.online.is_online?"green":"gray":n.style.backgroundColor="gray",t.appendChild(n);const i=document.createElement("div");i.setAttribute("lang-key",""),i.classList.add("actions");const s=this.createButton("invite-button","btn",this.searchTranslations("invite-button"));return s.addEventListener("click",()=>this.handleInvite(e.id)),i.appendChild(s),t.appendChild(i),t}async handleFind(e){e.preventDefault();const t=e.target.name.value;console.log(`Player Name: ${t}`);const r=await je.fetchWithJson(`/user/search/?username=${t}`,"GET");console.log(r);const n=this.createPlayerItem(r);this.updateView(n)}async handleCreateGame(){console.log("Create Game"),Bt("/create-game")}async handleInvites(){console.log("Invites"),Bt("/game-invites")}async getHtml(){window.localStorage.setItem("page","OneVsOne"),await Mn("OneVsOne");const e=this.createButton("create","btn",this.searchTranslations("createGame"));e.addEventListener("click",()=>{this.handleCreateGame()});const t=this.createButton("invites","btn",this.searchTranslations("invites"));t.addEventListener("click",()=>{this.handleInvites()}),this.updateView(e,t)}}const Xt=(a,e,t,r)=>{const n=document.createElement("div");n.classList.add("input-group");const i=document.createElement("label");i.textContent=e,i.setAttribute("for",t),i.setAttribute("lang-key",a);const s=document.createElement("input");return s.setAttribute("type",r),s.setAttribute("id",t),s.setAttribute("name",t),s.setAttribute("lang-key",a),s.classList.add("form-control"),n.appendChild(i),n.appendChild(s),n};class Ig extends je{constructor(e){super(e),this.setTitle("Tournaments")}async handleCreate(e){e.preventDefault();const t=e.target.name.value;console.log(`Tournament Name: ${t}`);const r=new Headers;r.append("Authorization","Bearer "+sessionStorage.getItem("access")),r.append("Content-Type","application/json");const i={method:"POST",headers:r,body:JSON.stringify({name:t}),redirect:"follow"};fetch("http://localhost:8000/api/tournaments/",i).then(s=>s.json()).then(s=>{sessionStorage.setItem("tournamentId",s.id),Bt("/tournament")}).catch(s=>console.error(s))}createTournamentItem(e){console.log("tournament:",e);const t=document.createElement("div");t.classList.add("list-group-item","flex","space-between");const r=this.createParagraph("_",e.name);t.appendChild(r);const n=this.createParagraph("participant-num",`${e.participants.length}/4`);return n.classList.add("flex"),t.appendChild(n),t.addEventListener("click",i=>{sessionStorage.setItem("tournamentId",e.id),Bt("/tournament")}),t}createListElement(e){const t=document.createElement("li");return t.appendChild(this.createTournamentItem(e)),t}async getHtml(){window.localStorage.setItem("page","Tournaments"),await Mn("Tournament");const e=this.createHeader("header","Tournaments","h2"),t=this.createForm("tournamentform"),r=this.createParagraph("create-tournament","Create a new tournament"),n=Xt("name","Name","name","text"),i=this.createButton("create","create","Create");t.appendChild(r),t.appendChild(n),t.appendChild(i),t.addEventListener("submit",this.handleCreate.bind(this));const s=await je.fetchWithJson("/tournaments/","GET");if(s&&s.length>0){const o=document.createElement("div");o.classList.add("tournaments");const l=this.createParagraph("join-tournament","Join a tournament");o.appendChild(l);const c=document.createElement("ul");o.appendChild(c),s.forEach(u=>{c.appendChild(this.createListElement(u))}),this.updateView(e,t,o);return}this.updateView(e,t)}}class Fg extends je{constructor(e){super(e),this.setTitle("Tournament"),this.socket=null,this.participantsList=null}async handleStartButton(e){this.socket.send(JSON.stringify({cmd:"start"}))}socketOnMessageHandler(e){let t=JSON.parse(e.data);if(t.winner){console.log("winner"),console.log(t.winner),alert(`Winner: ${t.winner.username}`),sessionStorage.removeItem("tournamentId"),this.socket.close();return}const r=/(\w+) joined the tournament/,n=/(\w+) left the tournament/;if(JSON.stringify(t).match(r)||JSON.stringify(t).match(n)){this.updateParticipantsList();return}t.match_id==null||t.room_name==null||(sessionStorage.setItem("match_id",t.match_id),sessionStorage.setItem("room_name",t.room_name),Bt("/play"))}async handleJoin(e){console.log(`Join Tournament Name: ${e}`);const t=`ws://localhost:8000/ws/tournament/${e}/?token=${sessionStorage.getItem("access")}`;console.log("Tournaments.js: getHtml()"),console.log(this.socket),this.socket===null&&(this.socket=new WebSocket(t),this.socket.onerror=function(r){console.error("WebSocket Error:",r)},this.socket.onopen=function(){console.log("Tournament WebSocket connection established.")},this.socket.onmessage=this.socketOnMessageHandler.bind(this),this.socket.onclose=function(r){r.wasClean?console.log(`[close] Connection closed cleanly, code=${r.code} reason=${r.reason}`):console.error("[close] Connection died")})}createPlayerItem(e){console.log("player:",e);const t=document.createElement("div");t.classList.add("list-group-item","flex","align-items-end");const r=document.createElement("img");r.src=e.avatar?"http://localhost:8000"+e.avatar.image:null,r.alt=`${e.username}'s avatar`,t.appendChild(r);const n=document.createElement("a");n.textContent=e.username,t.appendChild(n);const i=document.createElement("div");return i.classList.add("status"),e.online&&typeof e.online.is_online<"u"?i.style.backgroundColor=e.online.is_online?"green":"gray":i.style.backgroundColor="gray",t.appendChild(i),t}createListElement(e){const t=document.createElement("li");return t.appendChild(this.createPlayerItem(e)),t}async updateParticipantsList(){const e=await je.fetchWithJson(`/tournaments/${sessionStorage.getItem("tournamentId")}/`,"GET");console.log(e),e.participants&&(this.participantsList.innerHTML="",e.participants.forEach(t=>{this.participantsList.appendChild(this.createListElement(t))}))}async loadPage(){const e=await je.fetchWithJson(`/tournaments/${sessionStorage.getItem("tournamentId")}/`,"GET");if(!e.id){console.error(e.error);return}const t=this.createHeader("h2",e.name,"h2"),r=document.createElement("div");r.classList.add("participants");const n=this.createParagraph("participants","Participants");r.appendChild(n),this.participantsList=document.createElement("ul"),r.appendChild(this.participantsList),await this.updateParticipantsList();const i=this.createButton("start","btn","Start");i.addEventListener("click",this.handleStartButton.bind(this)),this.updateView(t,r,i)}async getHtml(){if(window.localStorage.setItem("page","Tournament"),await Mn("Tournament"),!sessionStorage.getItem("tournamentId")){alert("No tournament selected");return}await this.handleJoin(sessionStorage.getItem("tournamentId")),await this.loadPage()}async dismount(){console.log("Tournament dismount")}}class Ng extends je{constructor(e){super(e)}async sendFriendRequest(e){const t=await je.fetchWithJson("/friends/send_request/","POST",{friend:e});console.log(t),alert(t?"Friend request sent!":"Failed to send friend request.")}async acceptFriendRequest(e,t){const r=await je.fetchWithJson(`/friends/${t}/accept_request/`,"POST",{from_user:e});console.log(r),alert(r?"Friend request accepted!":"Failed to accept friend request.")}async ignoreFriendRequest(e,t){const r=await je.fetchWithJson(`/friends/${t}/reject_request/`,"POST",{from_user:e});console.log(r),alert(r?"Friend request ignored.":"Failed to ignore friend request.")}}function er(a,e={}){const t=window.localStorage.getItem("language")||"english";let i=((window.translations||{})[t]||{})[a]||a;for(const s in e){const o=e[s],l=new RegExp(`{${s}}`,"g");i=i.replace(l,o)}return i}class Og extends je{constructor(e){super(e),this.setTitle("Friends"),window.addEventListener("popstate",this.handlePopState.bind(this)),this.friendRequest=new Ng,this.params=e,this.friends=[]}async getHtml(){window.localStorage.setItem("page","Friends"),await Mn("Friends");const e=this.createHeader("Friends","Friends","h1"),t=document.createElement("div");t.className="list-group";const r=document.createElement("input");r.setAttribute("lang-key","searchForFriends"),r.textContent=this.searchTranslations("searchForFriends"),r.setAttribute("placeholder",r.textContent),r.className="form-control";const n=this.createButton("search","btn","Search");n.classList.add("btn-primary"),n.addEventListener("click",()=>{history.pushState({view:"search",query:r.value},"Search Friends","#search"),this.searchFriend(r.value)});const i=document.createElement("span");i.classList.add("inbox-icon"),i.innerHTML='<i class="fas fa-envelope"></i>',i.addEventListener("click",()=>{history.pushState({view:"friendRequests"},"Friend Requests","#friend-requests"),this.showFriendRequests()});const s=document.createElement("div");s.classList.add("icon-container"),s.appendChild(i);const o=await this.fetchJsonData("/friends/list/");o.friends.forEach(l=>{l.accepted=!0}),this.friends=o,o?(this.createFriendsList(o,t),this.updateView(e,s,t,r,n)):this.updateView(e,s,r,n),this.checkIfRequests(),this.params.view&&this.params.view==="friends"&&this.params.username&&this.navigateToFriendsProfileByusername(this.params.username)}searchTranslations(e){const t=window.localStorage.getItem("language")||"english";return((window.translations||{})[t]||{})[e]}createFriendsList(e,t){console.log("data:",e),console.log(e.friends),e&&e.friends&&e.friends.length>0&&e.friends.forEach(r=>{t.appendChild(this.createFriendItem(r))})}async checkIfRequests(){const e=await this.fetchJsonData("/friends/list_request/"),t=document.querySelector(".inbox-icon");if(document.querySelector(".inbox-icon")||await this.getHtml(),!t){console.error("inboxIcon element not found in the DOM.");return}if(e&&e["Pending Friend request"]){const r=document.createElement("span");r.classList.add("red-dot"),t.appendChild(r)}else console.log("No pending requests found")}async searchFriend(e){const t=await fetch(`https://localhost:8443/api/user/search/?username=${e}`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+sessionStorage.getItem("access")}});document.querySelector(".list-group")||await this.getHtml();const r=document.querySelector(".list-group");if(!r){console.error("friendsList element not found in the DOM.");return}r.innerHTML="";const n=await t.json();if(console.log(n),n)r.appendChild(this.createFriendItem(n));else{const i=this.createParagraph("no-user-found",`No Such User Found: ${e}`);r.appendChild(i)}}async showFriendRequests(){const e=await this.fetchJsonData("/friends/list_request/"),t=document.createElement("div");if(t.className="list-group",e&&e["Pending Friend request"])e["Pending Friend request"].forEach(n=>{const i=this.createRequestItem(n);i||console.error("Request item creation failed for:",n),t.appendChild(i)});else{const n=this.createParagraph("no-request","You have no friend requests");t.appendChild(n)}this.updateView(this.createHeader("Friend-Requests","Friend Requests","h1"),t);const r=document.querySelector(".inbox-icon .red-dot");r&&r.remove()}createFriendItem(e){console.log("Friend:",e);const t=document.createElement("div");t.classList.add("list-group-item","friend");const r=document.createElement("img");r.src=e.avatar?"http://localhost:8000"+e.avatar.image:null,r.alt=`${e.username}'s avatar`,t.appendChild(r);const n=document.createElement("a");n.textContent=e.username,n.href=`#friends/${e.username}`,n.addEventListener("click",o=>{o.preventDefault(),this.navigateToFriendsProfile(e.username)}),t.appendChild(n);const i=document.createElement("div");i.classList.add("status"),e.is_online&&typeof e.is_online<"u"?i.style.backgroundColor=e.is_online?"green":"gray":i.style.backgroundColor="gray",t.appendChild(i);const s=this.createActions(e);return t.appendChild(s),t}createActions(e,t){const r=document.createElement("div");if(r.setAttribute("lang-key",""),r.classList.add("actions"),console.log("createActions:Friend:",e),e.accepted===!1){let n=this.searchTranslations("accept-button");const i=this.createButton("accept-button","btn",n);i.addEventListener("click",()=>this.friendRequest.acceptFriendRequest(e.username,t)),r.appendChild(i);let s=this.searchTranslations("ignore-button");const o=this.createButton("ignore-button","btn",s);o.addEventListener("click",()=>this.friendRequest.ignoreFriendRequest(e.username,t)),r.appendChild(o)}else if(e.accepted===void 0){let n=this.searchTranslations("request-button");const i=this.createButton("request-button","request-btn",n);i.addEventListener("click",()=>this.friendRequest.sendFriendRequest(e.username)),r.appendChild(i)}return r}createRequestItem(e){const t=document.createElement("div");t.classList.add("list-group-item","friend"),console.log("Request:",e),console.log(e);const r=document.createElement("img");r.src=e.from_user.avatar?"http://localhost:8000"+e.from_user.avatar.image:null,r.alt=`${e.from_user}'s avatar`,t.appendChild(r);const n=document.createElement("a");n.textContent=e.from_user.username,n.href=`#friends/${e.from_user.username}`,n.addEventListener("click",o=>{o.preventDefault(),this.navigateToFriendsProfile(e.from_user.username)}),t.appendChild(n);const i=document.createElement("div");i.classList.add("status"),e.from_user.online&&typeof e.from_user.online.is_online<"u"?i.style.backgroundColor=e.from_user.online.is_online?"green":"gray":i.style.backgroundColor="gray",t.appendChild(i);const s=this.createActions(e,e.id);return t.appendChild(s),t}navigateToFriendsProfile(e){history.pushState({view:"profile",friendusername:e},"Friend Profile",`#friends/${e}`);const t=this.getFriendByusername(e);t&&this.showFriendsProfile(t)}showFriendsProfile(e){this.clearView();const t=this.createHeader("Friends","Friends","h1"),r=document.createElement("div");r.classList.add("profile");const n=this.createHeader("Friends-name",`${e.username}`,"h3"),i=document.createElement("img");i.src=e.profile.avatar,i.alt=`${e.username}'s avatar`;const s=document.createElement("div");s.classList.add("online-status");const o=document.createElement("div");o.classList.add("status"),o.style.backgroundColor=e.profile.online?"green":"gray";const l=document.createElement("span"),c=e.profile.online?er("yes"):er("no");l.textContent=er("online-status",{status:c}),s.appendChild(l),s.appendChild(o);const u=e.wins,d=e.loses,h=er("game-history",{wins:u,loss:d}),f=document.createElement("p");f.textContent=h,r.appendChild(n),r.appendChild(i),r.appendChild(s),r.appendChild(f);const g=this.createActions(e);r.appendChild(g),this.updateView(t,r)}handlePopState(e){const t=e.state;if(t){if(t.view==="search")this.searchFriend(t.query);else if(t.view==="friendRequests")this.showFriendRequests();else if(t.view==="profile"){const r=t.friendUsername,n=this.getFriendByUsername(r);n&&this.navigateToFriendsProfile(n.username)}}else this.getHtml()}getFriendByusername(e){return this.friends.find(t=>t.username==e)}}class Bg extends je{constructor(e){super(e),this.setTitle("Pong")}async getHtml(){const e=this.createHeader("header","S U P E R P O N G C H A M P","h1"),t=this.createAnchor("onevs-button","onevsone");t.href="/one-vs-one",t.setAttribute("data-link",""),t.setAttribute("id","onevs-button"),t.classList.add("pongpage-reroute-button");const r=this.createAnchor("tournaments-button","tournaments");r.href="/tournaments",r.setAttribute("data-link",""),r.setAttribute("id","tournaments-button"),r.classList.add("pongpage-reroute-button");const n=this.createParagraph("You are successfully running a Super Pongchamp game.");window.localStorage.setItem("page","Pong"),this.updateView(e,t,r,n)}}window.isLoggedIn=!1;console.log(`Initial state: ${window.isLoggedIn}`);class bl extends je{constructor(e){super(e),this.setTitle("Login")}async getHtml(){const e=this.createHeader("log-in","Log In","h1");e.classList.add("text-center");const t=this.createForm("loginform"),r=Xt("username","Username","username","text"),n=Xt("password","Password","password","password"),i=this.createButton("log-in","Login");t.appendChild(r),t.appendChild(n),t.appendChild(i);const s=this.createParagraph("register","Don't have an account?");s.classList.add("inline");const o=this.createAnchor("register-link","Register here");o.href="/register",o.setAttribute("data-link",""),o.setAttribute("id","register-link"),o.classList.add("inline-link-spaced"),t.addEventListener("submit",this.handleFormSubmit.bind(this)),window.localStorage.setItem("page","Login"),this.updateView(e,t,s,o)}async handleFormSubmit(e){e.preventDefault();const t=e.target.username.value,r=e.target.password.value,n={username:t,password:r};try{const i=await fetch("https://localhost:8443/api/token/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!i.ok){let o="Unknown error occurred. Please try again.";try{const l=await i.json();o=l.detail||l.message||o}catch{o="Unable to parse error response."}alert(`Login failed: ${o}`);return}const s=await i.json();if(s.access){sessionStorage.setItem("access",s.access),sessionStorage.setItem("refresh",s.refresh),sessionStorage.setItem("isLoggedIn","true");const o=await je.fetchWithJson("/user/","GET",null);o&&o.id&&sessionStorage.setItem("userId",o.id),window.isLoggedIn=!0,alert("Login successful!"),document.dispatchEvent(new CustomEvent("loginSuccess",{detail:{path:"/dashboard"}}))}else console.error("Login failed:",s.message)}catch(i){console.error("There was a problem with the fetch operation:",i),alert("There was a problem with the login operation. Please try again.")}console.log("https://localhost:8443/api")}}class kg extends je{constructor(e){super(e),this.setTitle("Register")}async getHtml(){const e=this.createHeader("register","Register","h1");e.classList.add("text-center");const t=this.createForm("registerform"),r=Xt("username","Username","username","text"),n=Xt("password","Password","password","password"),i=Xt("confirm-password","Confirm password","confirm-password","password"),s=this.createParagraph("password-requirements","Password needs to have at least 8 letters, one character, one number, and one special character.");s.classList.add("password-requirements");const o=document.createElement("input");o.setAttribute("type","checkbox"),o.setAttribute("id","checkbox"),o.classList.add("inline");const l=this.createAnchor("privacy","I have read and agree to the Pong sites ");l.classList.add("inline");const c=this.createLink("privacy-link","PRIVACY POLICY","/privacypolicy");c.classList.add("inline-link"),c.setAttribute("privacy-link",""),c.setAttribute("id","privacy-link");const u=this.createParagraph("paragraph"),d=this.createButton("register-button","Register");u.appendChild(d),t.appendChild(r),t.appendChild(n),t.appendChild(s),t.appendChild(i),t.appendChild(o),t.appendChild(l),t.appendChild(c),t.appendChild(u);const h=this.createParagraph("login","Already have an account?");h.classList.add("inline");const f=this.createLink("login-link","Log in here","/login");f.setAttribute("data-link",""),f.setAttribute("id","log-in-link"),f.classList.add("inline-link-spaced"),t.addEventListener("submit",this.handleFormSubmit.bind(this)),window.localStorage.setItem("page","Register"),this.updateView(e,t,h,f)}async handleFormSubmit(e){if(e.preventDefault(),document.getElementById("checkbox").checked==!1)alert("To register, please read and agree to our Privacy Policy");else{const r=e.target.username.value,n=e.target.password.value,i=e.target["confirm-password"].value;if(!r||!n||!i){alert("Please fill in all required fields.");return}if(n!==i){alert("Passwords do not match!");return}if(/\s/.test(r)){alert("Username should not contain spaces.");return}if(/\s/.test(n)){alert("Password should not contain spaces.");return}if(!/[^a-zA-Z0-9]/.test(n)){alert("Password must contain at least one special character.");return}const o={username:r,password:n,confirm_password:i};try{const l=await fetch("https://localhost:8443/api/user/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});if(!l.ok){const u=await l.json();let d;u.username&&u.username.length>0?d=u.username[0]:u.password&&u.password.length>0?d=u.password[0]:d="Unknown error",alert(d==="This field must be unique."?"Registration failed: Username already exists!":`Registration failed: ${d}`);return}const c=await l.json();alert("Successfully registered!"),document.dispatchEvent(new CustomEvent("registrationSuccess"))}catch(l){console.error("There was a problem with the fetch operation:",l),alert("There was a problem with the registration process. Please try again.")}}}}class Gg extends je{constructor(e){super(e),this.setTitle("Match History")}async getHtml(){window.localStorage.setItem("page","MatchHistory"),await Mn("MatchHistory");const e=this.createHeader("header","Match History","h1");let t;try{t=await this.createMatchHistory(`/matches/player/${sessionStorage.getItem("userId")}/`)}catch(r){console.error("Failed to create match history table:",r),t=this.createParagraph("error","Failed to load match history.")}this.updateView(e,t)}async createMatchHistory(e){let t;try{t=await je.fetchWithJson(e,"GET")}catch(l){console.error("Error fetching or parsing JSON data:",l);return}if(!Array.isArray(t)||t.length===0)return this.createParagraph("no-match","No match history to be found");const r=document.createElement("table");r.classList.add("match-history-table");const n=document.createElement("thead"),i=document.createElement("tr");["Player 1","Player 2","Winner","Score","Date"].forEach(l=>{const c=document.createElement("th");c.textContent=l,i.appendChild(c)}),n.appendChild(i),r.appendChild(n);const o=document.createElement("tbody");return t.forEach(l=>{const c=document.createElement("tr"),u=document.createElement("td");u.textContent=l.player1.username,c.appendChild(u);const d=document.createElement("td");d.textContent=l.player2.username,c.appendChild(d);const h=document.createElement("td");h.textContent=l.winner.username,c.appendChild(h);const f=document.createElement("td");f.textContent=`${l.player1_score} - ${l.player2_score}`,c.appendChild(f);const g=document.createElement("td"),v=new Date(l.date);g.textContent=isNaN(v.getTime())?"Invalid Date":v.toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric"}),c.appendChild(g),o.appendChild(c)}),r.appendChild(o),r}}class zg extends je{constructor(e){super(e),this.setTitle("Profile")}async getHtml(){window.localStorage.setItem("page","Profile"),await Mn("Profile");const e=this.createHeader("header","Profile","h1"),t=await je.fetchWithJson("/user/","GET"),r=await je.fetchWithJson("/profile/avatar/","GET"),n=await je.fetchWithJson(`/matches/stats/${sessionStorage.getItem("userId")}`,"GET");if(t==null||r==null||n==null){alert("An error occurred while fetching user data");return}let i={username:t.username,avatar:r.image,wins:n.Stats.wins,loses:n.Stats.loses};const s=this.showProfile(i),o=this.createLink("link2","Change settings from here","/settings"),l=this.createLink("link3","View Match History","/matchhistory");this.updateView(e,s,l,o)}showProfile(e){const t=document.createElement("div");t.classList.add("profile");const r=this.createHeader("myProfile",`${e.username}`,"h3"),n=document.createElement("img");n.src=e.avatar,n.alt=`${e.username}'s avatar`;const i=e.wins,s=e.loses,o=er("game-history",{wins:i,loss:s}),l=document.createElement("p");l.textContent=o;let c;return i>s?c=this.createParagraph("winmsg","Amazing! You are doing great"):i<s?c=this.createParagraph("lossmsg","Shall we play more to get some wins?"):(c=this.createParagraph("tiemsg","We are even steven. Let's play some more!"),c.classList.add("msofd")),c.classList.add("msofd"),t.appendChild(r),t.appendChild(n),t.appendChild(l),t.appendChild(c),t}}class Hg extends je{constructor(e){super(e),this.setTitle("Settings"),this.avatarUrl=""}async getHtml(){const e=this.createHeader("header","Update user information","h2");e.classList.add("text-center");const t=this.createForm("change-username"),r=this.createParagraph("change-user","Change username"),n=Xt("username","Username","username","text"),i=Xt("password","Password","password","password"),s=this.createButton("savebutton","save","save");t.appendChild(r),t.appendChild(n),t.appendChild(i),t.appendChild(s),t.addEventListener("submit",this.handleUsernameChange.bind(this));const o=this.createForm("change-password"),l=this.createParagraph("change-pw","Change password"),c=Xt("currentpassword","Current Password","currentpassword","password"),u=Xt("newpassword","New Password","newpassword","password"),d=Xt("password-again","Confirm password","confirmpassword","password"),h=this.createButton("savebutton","save","save");o.appendChild(l),o.appendChild(c),o.appendChild(u),o.appendChild(d),o.appendChild(h),o.addEventListener("submit",this.handlePasswordChange.bind(this));const f=document.createElement("select");f.setAttribute("id","languageSelect"),f.classList.add("translations");const g=document.createElement("option");g.selected="Language",g.setAttribute("lang-key","language"),f.appendChild(g),["English","Finnish","Swedish"].forEach(m=>{const M=document.createElement("option");M.text=m,M.setAttribute("lang-key",m),f.appendChild(M)}),f&&f.addEventListener("change",m=>{const S=m.target.value.toLowerCase();window.localStorage.setItem("language",S),document.dispatchEvent(new CustomEvent("viewUpdated"))});const v=this.createButton("deletebutton","delete","delete account");v.addEventListener("click",async m=>{m.preventDefault(),window.confirm("Are you sure you want to delete the Pong account?")==!0&&((await fetch(`https://localhost:8443/api/user/${sessionStorage.getItem("userId")}/`,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer "+sessionStorage.getItem("access")}})).ok?(sessionStorage.setItem("isLoggedIn","false"),sessionStorage.removeItem("access"),sessionStorage.removeItem("refresh"),sessionStorage.removeItem("userId"),location.reload()):alert("Failed to delete account"))});const p=this.fileInputField("update-avatar","avatar");window.localStorage.setItem("page","Settings"),this.updateView(e,p,t,o,f,v),await this.fetchAvatar()}async fetchAvatar(){try{const e=await je.fetchWithJson("/profile/avatar/");e&&e.image?(this.avatarUrl=e.image,console.log(this.avatarUrl),this.updateAvatarDisplay()):console.error("Profile data or avatar URL is missing")}catch{console.error("Error in fetching avatar")}}updateAvatarDisplay(){const e=document.querySelector(".avatar");e?e.style.backgroundImage=`url(${this.avatarUrl})`:console.error("Avatar element not found")}fileInputField(e,t){const r=document.createElement("div");r.classList.add("avatar-container");const n=document.createElement("div");n.classList.add("avatar");const i=document.createElement("label");i.classList.add("avatar-label"),r.appendChild(i);const s=document.createElement("input");s.setAttribute("type","file"),s.setAttribute("id",t),s.setAttribute("name",t),s.classList.add("avatar-input"),s.style.display="none",s.addEventListener("change",this.handleAvatarUpload.bind(this));const o=this.createButton("uploadbutton","Upload","Upload Avatar");return o.addEventListener("click",()=>s.click()),r.appendChild(n),r.appendChild(o),r.appendChild(s),r}async handleAvatarUpload(e){const t=e.target.files[0];if(!t)return;const r=new FormData;r.append("image",t);try{const n=await fetch("https://localhost:8443/api/profile/avatar/",{method:"POST",headers:{Authorization:"Bearer "+sessionStorage.getItem("access")},body:r});if(!n.ok){let s="Unknown error occurred. Please try again.";try{const o=await n.json();s=o.detail||o.message||s}catch{s="Unable to parse error response."}alert(`Uploading avatar failed: ${s}`);return}const i=await n.json();console.log(i),this.avatarUrl=i.image,this.updateAvatarDisplay()}catch(n){console.error("There was a problem with the file upload operation:",n)}}async handleUsernameChange(e){e.preventDefault();const t=e.target.username.value,r=e.target.password.value,n={username:t,password:r,confirm_password:r},i=await je.fetchWithJson(`/user/${sessionStorage.getItem("userId")}/`,"PUT",n);console.log(i),i&&i.id&&(sessionStorage.setItem("isLoggedIn","false"),sessionStorage.removeItem("access"),sessionStorage.removeItem("refresh"),sessionStorage.removeItem("userId"),location.reload())}async handlePasswordChange(e){e.preventDefault();const t=e.target.currentpassword.value,r=e.target.newpassword.value,n=e.target.confirmpassword.value;if(r!==n){alert("Passwords do not match!");return}const i={password:t,new_password:r,confirm_new_password:n},s=await je.fetchWithJson(`/user/${sessionStorage.getItem("userId")}/`,"PATCH",i);console.log(s),s&&s.success&&(sessionStorage.setItem("isLoggedIn","false"),sessionStorage.removeItem("access"),sessionStorage.removeItem("refresh"),sessionStorage.removeItem("userId"),location.reload())}}class Vg extends je{constructor(e){super(e),this.setTitle("Privacy Policy")}async getHtml(){const e=document.createElement("div");e.classList.add("container");const t=this.createHeader("header","Privacy Policy","h2"),r=this.createParagraph("policy"),n=this.createParagraph(),i=this.createParagraph("policy2"),s=this.createParagraph("policy3"),o=this.createParagraph("policy4");n.appendChild(i),n.appendChild(s),n.appendChild(o);const l=this.createParagraph("gdpr","This is the privacy policy");l.classList.add("gdpr-intro");const c=this.createParagraph("gdpr-requests");c.classList.add("gdpr-requests");const u=this.createParagraph("request2"),d=this.createParagraph("request3"),h=this.createParagraph("request4"),f=this.createParagraph("request5"),g=this.createParagraph("request6"),v=this.createParagraph("policy7");c.appendChild(u),c.appendChild(d),c.appendChild(h),c.appendChild(f),c.appendChild(g),c.appendChild(v);const p=this.createParagraph("policy5","This is the privacy policy");e.appendChild(t),e.appendChild(r),e.appendChild(n),e.appendChild(l),e.appendChild(c),e.appendChild(p),window.localStorage.setItem("page","PrivacyPolicy"),this.updateView(e)}}class Wg extends je{constructor(e){super(e),this.setTitle("Create game")}searchTranslations(e){const t=window.localStorage.getItem("language")||"english";return((window.translations||{})[t]||{})[e]}createPlayerItem(e){console.log("Player:",e);const t=document.createElement("div");t.classList.add("list-group-item","friend");const r=document.createElement("img");r.src=e.avatar?"http://localhost:8000"+e.avatar.image:null,r.alt=`${e.username}'s avatar`,t.appendChild(r);const n=document.createElement("a");n.textContent=e.username,t.appendChild(n);const i=document.createElement("div");i.classList.add("status"),e.online&&typeof e.online.is_online<"u"?i.style.backgroundColor=e.online.is_online?"green":"gray":i.style.backgroundColor="gray",t.appendChild(i);const s=document.createElement("div");s.setAttribute("lang-key",""),s.classList.add("actions");const o=this.createButton("invite-button","btn",this.searchTranslations("invite-button"));return o.addEventListener("click",()=>this.handleInvite(e.username)),s.appendChild(o),t.appendChild(s),t}async handleFind(e){e.preventDefault();const t=e.target.name.value;console.log(`Player Name: ${t}`);const r=await je.fetchWithJson(`/user/search/?username=${t}`,"GET");if(console.log(r),r.detail==="User not found."){alert("Failed to find player");return}const n=this.createPlayerItem(r);this.updateView(n)}async createRoom(){const e=await je.fetchWithJson("/rooms/create_room/","POST",{});console.log(e),e||alert("Failed to create room"),sessionStorage.removeItem("match_id"),sessionStorage.setItem("room_name",e.id)}async handleInvite(e){await this.createRoom(),console.log("Invite player:",e);const t=await je.fetchWithJson("/rooms/one_vs_one_invitation/","POST",{guest:e});console.log(t),t||alert("Failed to invite player"),Bt("/play")}async getHtml(){window.localStorage.setItem("page","CreateGame"),await Mn("CreateGame");const e=this.createForm("tournamentform"),t=Xt("name","Name","name","text"),r=this.createButton("find","find",this.searchTranslations("findPlayers"));e.appendChild(t),e.appendChild(r),e.addEventListener("submit",this.handleFind.bind(this));const n=await je.fetchWithJson("/rooms/","GET",{});if(n&&n.id){const i=this.createButton("exit-room","exit-room",this.searchTranslations("exit-room"));i.addEventListener("click",async()=>{const s=await fetch(`https://localhost:8443/api/rooms/${n.id}/delete/`,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer "+sessionStorage.getItem("access")}});console.log(s),s.status!==204&&alert("Failed to exit room"),location.reload()}),this.updateView(i);return}this.updateView(e)}async dismount(){console.log("Dismounting CreateGame")}}class Xg extends je{constructor(e){super(e),this.setTitle("Game invites")}searchTranslations(e){const t=window.localStorage.getItem("language")||"english";return((window.translations||{})[t]||{})[e]}async handleAccept(e,t){console.log("Accept player:",t);try{const r=await je.fetchWithJson(`/rooms/${e}/accept_request/`,"POST",{from_user:t});console.log(r),sessionStorage.removeItem("match_id"),sessionStorage.setItem("room_name",r.Room.id),Bt("/play")}catch(r){console.error("Error accepting invite:",r)}}async handleDecline(e,t){console.log("Decline player:",t);const r=await je.fetchWithJson(`/rooms/${e}/reject_request/`,"POST",{from_user:t});console.log(r),location.reload()}createInviteItem(e){console.log("Invite:",e);const t=document.createElement("div");t.classList.add("list-group-item","invite");const r=document.createElement("img");r.src=e.from_user.avatar?"http://localhost:8000"+e.from_user.avatar.image:null,r.alt=`${e.from_user.username}'s avatar`,t.appendChild(r);const n=document.createElement("a");n.textContent=e.from_user.username,t.appendChild(n);const i=document.createElement("div");i.classList.add("status"),e.from_user.online&&typeof e.from_user.online.is_online<"u"?i.style.backgroundColor=e.from_user.online.is_online?"green":"gray":i.style.backgroundColor="gray",t.appendChild(i);const s=document.createElement("div");s.setAttribute("lang-key",""),s.classList.add("actions");const o=this.createButton("accept-button","btn",this.searchTranslations("accept-button"));o.addEventListener("click",()=>this.handleAccept(e.id,e.from_user.username)),s.appendChild(o);const l=this.createButton("decline-button","btn",this.searchTranslations("decline-button"));return l.addEventListener("click",()=>this.handleDecline(e.id,e.from_user.username)),s.appendChild(l),t.appendChild(s),t}createInviteList(e,t){e&&e["Pending Friend request"]&&e["Pending Friend request"].length>0&&e["Pending Friend request"].forEach(r=>{t.appendChild(this.createInviteItem(r))})}async getHtml(){window.localStorage.setItem("page","GameInvites"),await Mn("GameInvites");const e=await je.fetchWithJson("/rooms/list_request/","GET");console.log(e);const t=document.createElement("div");t.className="list-group",this.createInviteList(e,t),this.updateView(t)}}class qg extends je{constructor(e){super(e),this.setTitle("Play"),this.gameDiv=null}searchTranslations(e){const t=window.localStorage.getItem("language")||"english";return((window.translations||{})[t]||{})[e]}async getHtml(){window.localStorage.setItem("page","CreateGame"),await Mn("CreateGame"),sessionStorage.getItem("room_name")||alert("No room name found"),this.gameDiv=this.createGame("pong"),this.updateView(this.gameDiv)}async dismount(){console.log("Dismounting Play");const e=document.querySelector("canvas");e&&ir.instance&&(console.log("canvas remove"),e.remove(),delete ir.instance)}}const Yg=a=>new RegExp("^"+a.replace(/\//g,"\\/").replace(/:\w+/g,"(.+)")+"$"),jg=a=>{const e=a.result.slice(1),t=Array.from(a.route.path.matchAll(/:(\w+)/g)).map(r=>r[1]);return Object.fromEntries(t.map((r,n)=>[r,e[n]]))},Kg=()=>{const e=location.hash.slice(1).split("/"),t={};return e.length>1&&(t.view=e[0],t.id=e[1]),t},Bt=a=>{history.pushState(null,null,a),ys()};let pc=!1,zr=null;const ys=async()=>{const a=[{path:"/",view:bl},{path:"/login",view:bl},{path:"/privacypolicy",view:Vg},{path:"/register",view:kg},{path:"/dashboard",view:Lg,authRequired:!0},{path:"/matchhistory",view:Gg,authRequired:!0},{path:"/one-vs-one",view:Dg,authRequired:!0},{path:"/create-game",view:Wg,authRequired:!0},{path:"/game-invites",view:Xg,authRequired:!0},{path:"/tournament",view:Fg,authRequired:!0},{path:"/tournaments",view:Ig,authRequired:!0},{path:"/pong",view:Bg,authRequired:!0},{path:"/friends",view:Og,authRequired:!0},{path:"/profile",view:zg,authRequired:!0},{path:"/settings",view:Hg,authRequired:!0},{path:"/play",view:qg,authRequired:!0}];let t=a.map(i=>({route:i,result:location.pathname.match(Yg(i.path))})).find(i=>i.result!==null);t||(t={route:a[0],result:[location.pathname]});const r=sessionStorage.getItem("isLoggedIn")==="true";if(r&&(t.route.path==="/login"||t.route.path==="/")){Bt("/dashboard");return}if(r&&!pc&&Zg(),t.route.authRequired&&!r){console.log(`Access to ${t.route.path} is restricted.`),Bt("/login");return}if(t.route.path==="/play"&&!sessionStorage.getItem("room_name")){console.log("No room name found"),Bt("/create-game");return}const n=Kg();n.view&&t.route.path==="/friends"&&t.result.push(n),zr&&await zr.dismount(),zr=new t.route.view(jg(t)),await zr.getHtml()},Mn=async a=>{window.localStorage.getItem("language");try{const t=await(await fetch(`./static/translations/${a}.json`)).json();window.translations||(window.translations={}),window.translations=t,console.log("Translations loaded for page:",a,window.translations)}catch(e){console.error("Error loading translation file:",e)}};window.onload=async()=>{window.localStorage.getItem("language")==null&&window.localStorage.setItem("language","english")};window.addEventListener("popstate",ys);document.addEventListener("viewUpdated",()=>{if(localStorage.getItem("language")==="language")return;const a=window.localStorage.getItem("page");Tl("index"),Tl(a)});function Tl(a){let e;fetch("./static/translations/"+a+".json").then(t=>t.text()).then(t=>{e=JSON.parse(t);const r=window.localStorage.getItem("language"),n=e[r];Jg(n)})}function Jg(a){document.querySelectorAll("[lang-key]").forEach(t=>{const r=t.getAttribute("lang-key");a[r]&&(t.textContent=a[r])})}document.addEventListener("DOMContentLoaded",()=>{document.body.addEventListener("click",async a=>{a.target.matches("[privacy-link]")?(a.preventDefault(),window.open(a.target.href)):a.target.matches("[data-link]")?(a.preventDefault(),Bt(a.target.href)):a.target.matches("[lang-toggle]")&&document.body.addEventListener("change",e=>{if(e.target.matches("[lang-toggle]")){const t=e.target.value;if(t){const r=t.toLowerCase();window.localStorage.setItem("language",r),document.dispatchEvent(new CustomEvent("viewUpdated"))}}})}),document.addEventListener("registrationSuccess",()=>{Bt("/login")}),document.addEventListener("loginSuccess",a=>{Bt(a.detail.path)}),ys()});const Zg=()=>{const a=new WebSocket(`ws://localhost:8000/ws/online_status/?token=${sessionStorage.getItem("access")}`);a.onerror=function(e){console.error("Online WebSocket Error:",e)},a.onopen=function(){console.log("Online WebSocket connection established.")},a.onclose=function(e){console.log("Online WebSocket connection closed:",e)},pc=!0};
