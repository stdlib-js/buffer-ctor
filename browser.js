// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).Buffer=r()}(this,(function(){"use strict";function t(t){var r=t.default;if("function"==typeof r){var e=function(){return r.apply(this,arguments)};e.prototype=r.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(t).forEach((function(r){var n=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:function(){return t[r]}})})),e}var r="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e=[],n=[],i="undefined"!=typeof Uint8Array?Uint8Array:Array,o=!1;function f(){o=!0;for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r=0,i=t.length;r<i;++r)e[r]=t[r],n[t.charCodeAt(r)]=r;n["-".charCodeAt(0)]=62,n["_".charCodeAt(0)]=63}function u(t,r,n){for(var i,o,f=[],u=r;u<n;u+=3)i=(t[u]<<16)+(t[u+1]<<8)+t[u+2],f.push(e[(o=i)>>18&63]+e[o>>12&63]+e[o>>6&63]+e[63&o]);return f.join("")}function s(t){var r;o||f();for(var n=t.length,i=n%3,s="",h=[],a=16383,c=0,l=n-i;c<l;c+=a)h.push(u(t,c,c+a>l?l:c+a));return 1===i?(r=t[n-1],s+=e[r>>2],s+=e[r<<4&63],s+="=="):2===i&&(r=(t[n-2]<<8)+t[n-1],s+=e[r>>10],s+=e[r>>4&63],s+=e[r<<2&63],s+="="),h.push(s),h.join("")}function h(t,r,e,n,i){var o,f,u=8*i-n-1,s=(1<<u)-1,h=s>>1,a=-7,c=e?i-1:0,l=e?-1:1,p=t[r+c];for(c+=l,o=p&(1<<-a)-1,p>>=-a,a+=u;a>0;o=256*o+t[r+c],c+=l,a-=8);for(f=o&(1<<-a)-1,o>>=-a,a+=n;a>0;f=256*f+t[r+c],c+=l,a-=8);if(0===o)o=1-h;else{if(o===s)return f?NaN:1/0*(p?-1:1);f+=Math.pow(2,n),o-=h}return(p?-1:1)*f*Math.pow(2,o-n)}function a(t,r,e,n,i,o){var f,u,s,h=8*o-i-1,a=(1<<h)-1,c=a>>1,l=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:o-1,g=n?1:-1,y=r<0||0===r&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(u=isNaN(r)?1:0,f=a):(f=Math.floor(Math.log(r)/Math.LN2),r*(s=Math.pow(2,-f))<1&&(f--,s*=2),(r+=f+c>=1?l/s:l*Math.pow(2,1-c))*s>=2&&(f++,s/=2),f+c>=a?(u=0,f=a):f+c>=1?(u=(r*s-1)*Math.pow(2,i),f+=c):(u=r*Math.pow(2,c-1)*Math.pow(2,i),f=0));i>=8;t[e+p]=255&u,p+=g,u/=256,i-=8);for(f=f<<i|u,h+=i;h>0;t[e+p]=255&f,p+=g,f/=256,h-=8);t[e+p-g]|=128*y}var c={}.toString,l=Array.isArray||function(t){return"[object Array]"==c.call(t)};w.TYPED_ARRAY_SUPPORT=void 0===r.TYPED_ARRAY_SUPPORT||r.TYPED_ARRAY_SUPPORT;var p=g();function g(){return w.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function y(t,r){if(g()<r)throw new RangeError("Invalid typed array length");return w.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(r)).__proto__=w.prototype:(null===t&&(t=new w(r)),t.length=r),t}function w(t,r,e){if(!(w.TYPED_ARRAY_SUPPORT||this instanceof w))return new w(t,r,e);if("number"==typeof t){if("string"==typeof r)throw new Error("If encoding is specified then the first argument must be a string");return E(this,t)}return d(this,t,r,e)}function d(t,r,e,n){if("number"==typeof r)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&r instanceof ArrayBuffer?function(t,r,e,n){if(r.byteLength,e<0||r.byteLength<e)throw new RangeError("'offset' is out of bounds");if(r.byteLength<e+(n||0))throw new RangeError("'length' is out of bounds");r=void 0===e&&void 0===n?new Uint8Array(r):void 0===n?new Uint8Array(r,e):new Uint8Array(r,e,n);w.TYPED_ARRAY_SUPPORT?(t=r).__proto__=w.prototype:t=A(t,r);return t}(t,r,e,n):"string"==typeof r?function(t,r,e){"string"==typeof e&&""!==e||(e="utf8");if(!w.isEncoding(e))throw new TypeError('"encoding" must be a valid string encoding');var n=0|_(r,e),i=(t=y(t,n)).write(r,e);i!==n&&(t=t.slice(0,i));return t}(t,r,e):function(t,r){if(R(r)){var e=0|b(r.length);return 0===(t=y(t,e)).length||r.copy(t,0,0,e),t}if(r){if("undefined"!=typeof ArrayBuffer&&r.buffer instanceof ArrayBuffer||"length"in r)return"number"!=typeof r.length||(n=r.length)!=n?y(t,0):A(t,r);if("Buffer"===r.type&&l(r.data))return A(t,r.data)}var n;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,r)}function v(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function E(t,r){if(v(r),t=y(t,r<0?0:0|b(r)),!w.TYPED_ARRAY_SUPPORT)for(var e=0;e<r;++e)t[e]=0;return t}function A(t,r){var e=r.length<0?0:0|b(r.length);t=y(t,e);for(var n=0;n<e;n+=1)t[n]=255&r[n];return t}function b(t){if(t>=g())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+g().toString(16)+" bytes");return 0|t}function R(t){return!(null==t||!t._isBuffer)}function _(t,r){if(R(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var e=t.length;if(0===e)return 0;for(var n=!1;;)switch(r){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":case void 0:return Q(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*e;case"hex":return e>>>1;case"base64":return W(t).length;default:if(n)return Q(t).length;r=(""+r).toLowerCase(),n=!0}}function m(t,r,e){var n=!1;if((void 0===r||r<0)&&(r=0),r>this.length)return"";if((void 0===e||e>this.length)&&(e=this.length),e<=0)return"";if((e>>>=0)<=(r>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return N(this,r,e);case"utf8":case"utf-8":return L(this,r,e);case"ascii":return x(this,r,e);case"latin1":case"binary":return k(this,r,e);case"base64":return M(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return j(this,r,e);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function P(t,r,e){var n=t[r];t[r]=t[e],t[e]=n}function T(t,r,e,n,i){if(0===t.length)return-1;if("string"==typeof e?(n=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,isNaN(e)&&(e=i?0:t.length-1),e<0&&(e=t.length+e),e>=t.length){if(i)return-1;e=t.length-1}else if(e<0){if(!i)return-1;e=0}if("string"==typeof r&&(r=w.from(r,n)),R(r))return 0===r.length?-1:U(t,r,e,n,i);if("number"==typeof r)return r&=255,w.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,r,e):Uint8Array.prototype.lastIndexOf.call(t,r,e):U(t,[r],e,n,i);throw new TypeError("val must be string, number or Buffer")}function U(t,r,e,n,i){var o,f=1,u=t.length,s=r.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||r.length<2)return-1;f=2,u/=2,s/=2,e/=2}function h(t,r){return 1===f?t[r]:t.readUInt16BE(r*f)}if(i){var a=-1;for(o=e;o<u;o++)if(h(t,o)===h(r,-1===a?0:o-a)){if(-1===a&&(a=o),o-a+1===s)return a*f}else-1!==a&&(o-=o-a),a=-1}else for(e+s>u&&(e=u-s),o=e;o>=0;o--){for(var c=!0,l=0;l<s;l++)if(h(t,o+l)!==h(r,l)){c=!1;break}if(c)return o}return-1}function B(t,r,e,n){e=Number(e)||0;var i=t.length-e;n?(n=Number(n))>i&&(n=i):n=i;var o=r.length;if(o%2!=0)throw new TypeError("Invalid hex string");n>o/2&&(n=o/2);for(var f=0;f<n;++f){var u=parseInt(r.substr(2*f,2),16);if(isNaN(u))return f;t[e+f]=u}return f}function S(t,r,e,n){return $(Q(r,t.length-e),t,e,n)}function Y(t,r,e,n){return $(function(t){for(var r=[],e=0;e<t.length;++e)r.push(255&t.charCodeAt(e));return r}(r),t,e,n)}function I(t,r,e,n){return Y(t,r,e,n)}function O(t,r,e,n){return $(W(r),t,e,n)}function C(t,r,e,n){return $(function(t,r){for(var e,n,i,o=[],f=0;f<t.length&&!((r-=2)<0);++f)n=(e=t.charCodeAt(f))>>8,i=e%256,o.push(i),o.push(n);return o}(r,t.length-e),t,e,n)}function M(t,r,e){return 0===r&&e===t.length?s(t):s(t.slice(r,e))}function L(t,r,e){e=Math.min(t.length,e);for(var n=[],i=r;i<e;){var o,f,u,s,h=t[i],a=null,c=h>239?4:h>223?3:h>191?2:1;if(i+c<=e)switch(c){case 1:h<128&&(a=h);break;case 2:128==(192&(o=t[i+1]))&&(s=(31&h)<<6|63&o)>127&&(a=s);break;case 3:o=t[i+1],f=t[i+2],128==(192&o)&&128==(192&f)&&(s=(15&h)<<12|(63&o)<<6|63&f)>2047&&(s<55296||s>57343)&&(a=s);break;case 4:o=t[i+1],f=t[i+2],u=t[i+3],128==(192&o)&&128==(192&f)&&128==(192&u)&&(s=(15&h)<<18|(63&o)<<12|(63&f)<<6|63&u)>65535&&s<1114112&&(a=s)}null===a?(a=65533,c=1):a>65535&&(a-=65536,n.push(a>>>10&1023|55296),a=56320|1023&a),n.push(a),i+=c}return function(t){var r=t.length;if(r<=D)return String.fromCharCode.apply(String,t);var e="",n=0;for(;n<r;)e+=String.fromCharCode.apply(String,t.slice(n,n+=D));return e}(n)}w.poolSize=8192,w._augment=function(t){return t.__proto__=w.prototype,t},w.from=function(t,r,e){return d(null,t,r,e)},w.TYPED_ARRAY_SUPPORT&&(w.prototype.__proto__=Uint8Array.prototype,w.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&w[Symbol.species]),w.alloc=function(t,r,e){return function(t,r,e,n){return v(r),r<=0?y(t,r):void 0!==e?"string"==typeof n?y(t,r).fill(e,n):y(t,r).fill(e):y(t,r)}(null,t,r,e)},w.allocUnsafe=function(t){return E(null,t)},w.allocUnsafeSlow=function(t){return E(null,t)},w.isBuffer=tt,w.compare=function(t,r){if(!R(t)||!R(r))throw new TypeError("Arguments must be Buffers");if(t===r)return 0;for(var e=t.length,n=r.length,i=0,o=Math.min(e,n);i<o;++i)if(t[i]!==r[i]){e=t[i],n=r[i];break}return e<n?-1:n<e?1:0},w.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},w.concat=function(t,r){if(!l(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return w.alloc(0);var e;if(void 0===r)for(r=0,e=0;e<t.length;++e)r+=t[e].length;var n=w.allocUnsafe(r),i=0;for(e=0;e<t.length;++e){var o=t[e];if(!R(o))throw new TypeError('"list" argument must be an Array of Buffers');o.copy(n,i),i+=o.length}return n},w.byteLength=_,w.prototype._isBuffer=!0,w.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<t;r+=2)P(this,r,r+1);return this},w.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<t;r+=4)P(this,r,r+3),P(this,r+1,r+2);return this},w.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<t;r+=8)P(this,r,r+7),P(this,r+1,r+6),P(this,r+2,r+5),P(this,r+3,r+4);return this},w.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?L(this,0,t):m.apply(this,arguments)},w.prototype.equals=function(t){if(!R(t))throw new TypeError("Argument must be a Buffer");return this===t||0===w.compare(this,t)},w.prototype.inspect=function(){var t="";return this.length>0&&(t=this.toString("hex",0,50).match(/.{2}/g).join(" "),this.length>50&&(t+=" ... ")),"<Buffer "+t+">"},w.prototype.compare=function(t,r,e,n,i){if(!R(t))throw new TypeError("Argument must be a Buffer");if(void 0===r&&(r=0),void 0===e&&(e=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),r<0||e>t.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&r>=e)return 0;if(n>=i)return-1;if(r>=e)return 1;if(this===t)return 0;for(var o=(i>>>=0)-(n>>>=0),f=(e>>>=0)-(r>>>=0),u=Math.min(o,f),s=this.slice(n,i),h=t.slice(r,e),a=0;a<u;++a)if(s[a]!==h[a]){o=s[a],f=h[a];break}return o<f?-1:f<o?1:0},w.prototype.includes=function(t,r,e){return-1!==this.indexOf(t,r,e)},w.prototype.indexOf=function(t,r,e){return T(this,t,r,e,!0)},w.prototype.lastIndexOf=function(t,r,e){return T(this,t,r,e,!1)},w.prototype.write=function(t,r,e,n){if(void 0===r)n="utf8",e=this.length,r=0;else if(void 0===e&&"string"==typeof r)n=r,e=this.length,r=0;else{if(!isFinite(r))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");r|=0,isFinite(e)?(e|=0,void 0===n&&(n="utf8")):(n=e,e=void 0)}var i=this.length-r;if((void 0===e||e>i)&&(e=i),t.length>0&&(e<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var o=!1;;)switch(n){case"hex":return B(this,t,r,e);case"utf8":case"utf-8":return S(this,t,r,e);case"ascii":return Y(this,t,r,e);case"latin1":case"binary":return I(this,t,r,e);case"base64":return O(this,t,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return C(this,t,r,e);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},w.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var D=4096;function x(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(127&t[i]);return n}function k(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(t[i]);return n}function N(t,r,e){var n=t.length;(!r||r<0)&&(r=0),(!e||e<0||e>n)&&(e=n);for(var i="",o=r;o<e;++o)i+=K(t[o]);return i}function j(t,r,e){for(var n=t.slice(r,e),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function z(t,r,e){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+r>e)throw new RangeError("Trying to access beyond buffer length")}function F(t,r,e,n,i,o){if(!R(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>i||r<o)throw new RangeError('"value" argument is out of bounds');if(e+n>t.length)throw new RangeError("Index out of range")}function V(t,r,e,n){r<0&&(r=65535+r+1);for(var i=0,o=Math.min(t.length-e,2);i<o;++i)t[e+i]=(r&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function q(t,r,e,n){r<0&&(r=4294967295+r+1);for(var i=0,o=Math.min(t.length-e,4);i<o;++i)t[e+i]=r>>>8*(n?i:3-i)&255}function J(t,r,e,n,i,o){if(e+n>t.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function X(t,r,e,n,i){return i||J(t,0,e,4),a(t,r,e,n,23,4),e+4}function Z(t,r,e,n,i){return i||J(t,0,e,8),a(t,r,e,n,52,8),e+8}w.prototype.slice=function(t,r){var e,n=this.length;if((t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(r=void 0===r?n:~~r)<0?(r+=n)<0&&(r=0):r>n&&(r=n),r<t&&(r=t),w.TYPED_ARRAY_SUPPORT)(e=this.subarray(t,r)).__proto__=w.prototype;else{var i=r-t;e=new w(i,void 0);for(var o=0;o<i;++o)e[o]=this[o+t]}return e},w.prototype.readUIntLE=function(t,r,e){t|=0,r|=0,e||z(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return n},w.prototype.readUIntBE=function(t,r,e){t|=0,r|=0,e||z(t,r,this.length);for(var n=this[t+--r],i=1;r>0&&(i*=256);)n+=this[t+--r]*i;return n},w.prototype.readUInt8=function(t,r){return r||z(t,1,this.length),this[t]},w.prototype.readUInt16LE=function(t,r){return r||z(t,2,this.length),this[t]|this[t+1]<<8},w.prototype.readUInt16BE=function(t,r){return r||z(t,2,this.length),this[t]<<8|this[t+1]},w.prototype.readUInt32LE=function(t,r){return r||z(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},w.prototype.readUInt32BE=function(t,r){return r||z(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},w.prototype.readIntLE=function(t,r,e){t|=0,r|=0,e||z(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*r)),n},w.prototype.readIntBE=function(t,r,e){t|=0,r|=0,e||z(t,r,this.length);for(var n=r,i=1,o=this[t+--n];n>0&&(i*=256);)o+=this[t+--n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*r)),o},w.prototype.readInt8=function(t,r){return r||z(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},w.prototype.readInt16LE=function(t,r){r||z(t,2,this.length);var e=this[t]|this[t+1]<<8;return 32768&e?4294901760|e:e},w.prototype.readInt16BE=function(t,r){r||z(t,2,this.length);var e=this[t+1]|this[t]<<8;return 32768&e?4294901760|e:e},w.prototype.readInt32LE=function(t,r){return r||z(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},w.prototype.readInt32BE=function(t,r){return r||z(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},w.prototype.readFloatLE=function(t,r){return r||z(t,4,this.length),h(this,t,!0,23,4)},w.prototype.readFloatBE=function(t,r){return r||z(t,4,this.length),h(this,t,!1,23,4)},w.prototype.readDoubleLE=function(t,r){return r||z(t,8,this.length),h(this,t,!0,52,8)},w.prototype.readDoubleBE=function(t,r){return r||z(t,8,this.length),h(this,t,!1,52,8)},w.prototype.writeUIntLE=function(t,r,e,n){(t=+t,r|=0,e|=0,n)||F(this,t,r,e,Math.pow(2,8*e)-1,0);var i=1,o=0;for(this[r]=255&t;++o<e&&(i*=256);)this[r+o]=t/i&255;return r+e},w.prototype.writeUIntBE=function(t,r,e,n){(t=+t,r|=0,e|=0,n)||F(this,t,r,e,Math.pow(2,8*e)-1,0);var i=e-1,o=1;for(this[r+i]=255&t;--i>=0&&(o*=256);)this[r+i]=t/o&255;return r+e},w.prototype.writeUInt8=function(t,r,e){return t=+t,r|=0,e||F(this,t,r,1,255,0),w.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[r]=255&t,r+1},w.prototype.writeUInt16LE=function(t,r,e){return t=+t,r|=0,e||F(this,t,r,2,65535,0),w.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):V(this,t,r,!0),r+2},w.prototype.writeUInt16BE=function(t,r,e){return t=+t,r|=0,e||F(this,t,r,2,65535,0),w.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):V(this,t,r,!1),r+2},w.prototype.writeUInt32LE=function(t,r,e){return t=+t,r|=0,e||F(this,t,r,4,4294967295,0),w.TYPED_ARRAY_SUPPORT?(this[r+3]=t>>>24,this[r+2]=t>>>16,this[r+1]=t>>>8,this[r]=255&t):q(this,t,r,!0),r+4},w.prototype.writeUInt32BE=function(t,r,e){return t=+t,r|=0,e||F(this,t,r,4,4294967295,0),w.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):q(this,t,r,!1),r+4},w.prototype.writeIntLE=function(t,r,e,n){if(t=+t,r|=0,!n){var i=Math.pow(2,8*e-1);F(this,t,r,e,i-1,-i)}var o=0,f=1,u=0;for(this[r]=255&t;++o<e&&(f*=256);)t<0&&0===u&&0!==this[r+o-1]&&(u=1),this[r+o]=(t/f>>0)-u&255;return r+e},w.prototype.writeIntBE=function(t,r,e,n){if(t=+t,r|=0,!n){var i=Math.pow(2,8*e-1);F(this,t,r,e,i-1,-i)}var o=e-1,f=1,u=0;for(this[r+o]=255&t;--o>=0&&(f*=256);)t<0&&0===u&&0!==this[r+o+1]&&(u=1),this[r+o]=(t/f>>0)-u&255;return r+e},w.prototype.writeInt8=function(t,r,e){return t=+t,r|=0,e||F(this,t,r,1,127,-128),w.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[r]=255&t,r+1},w.prototype.writeInt16LE=function(t,r,e){return t=+t,r|=0,e||F(this,t,r,2,32767,-32768),w.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):V(this,t,r,!0),r+2},w.prototype.writeInt16BE=function(t,r,e){return t=+t,r|=0,e||F(this,t,r,2,32767,-32768),w.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):V(this,t,r,!1),r+2},w.prototype.writeInt32LE=function(t,r,e){return t=+t,r|=0,e||F(this,t,r,4,2147483647,-2147483648),w.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8,this[r+2]=t>>>16,this[r+3]=t>>>24):q(this,t,r,!0),r+4},w.prototype.writeInt32BE=function(t,r,e){return t=+t,r|=0,e||F(this,t,r,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),w.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):q(this,t,r,!1),r+4},w.prototype.writeFloatLE=function(t,r,e){return X(this,t,r,!0,e)},w.prototype.writeFloatBE=function(t,r,e){return X(this,t,r,!1,e)},w.prototype.writeDoubleLE=function(t,r,e){return Z(this,t,r,!0,e)},w.prototype.writeDoubleBE=function(t,r,e){return Z(this,t,r,!1,e)},w.prototype.copy=function(t,r,e,n){if(e||(e=0),n||0===n||(n=this.length),r>=t.length&&(r=t.length),r||(r=0),n>0&&n<e&&(n=e),n===e)return 0;if(0===t.length||0===this.length)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(e<0||e>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-r<n-e&&(n=t.length-r+e);var i,o=n-e;if(this===t&&e<r&&r<n)for(i=o-1;i>=0;--i)t[i+r]=this[i+e];else if(o<1e3||!w.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)t[i+r]=this[i+e];else Uint8Array.prototype.set.call(t,this.subarray(e,e+o),r);return o},w.prototype.fill=function(t,r,e,n){if("string"==typeof t){if("string"==typeof r?(n=r,r=0,e=this.length):"string"==typeof e&&(n=e,e=this.length),1===t.length){var i=t.charCodeAt(0);i<256&&(t=i)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!w.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t&=255);if(r<0||this.length<r||this.length<e)throw new RangeError("Out of range index");if(e<=r)return this;var o;if(r>>>=0,e=void 0===e?this.length:e>>>0,t||(t=0),"number"==typeof t)for(o=r;o<e;++o)this[o]=t;else{var f=R(t)?t:Q(new w(t,n).toString()),u=f.length;for(o=0;o<e-r;++o)this[o+r]=f[o%u]}return this};var G,H=/[^+\/0-9A-Za-z-_]/g;function K(t){return t<16?"0"+t.toString(16):t.toString(16)}function Q(t,r){var e;r=r||1/0;for(var n=t.length,i=null,o=[],f=0;f<n;++f){if((e=t.charCodeAt(f))>55295&&e<57344){if(!i){if(e>56319){(r-=3)>-1&&o.push(239,191,189);continue}if(f+1===n){(r-=3)>-1&&o.push(239,191,189);continue}i=e;continue}if(e<56320){(r-=3)>-1&&o.push(239,191,189),i=e;continue}e=65536+(i-55296<<10|e-56320)}else i&&(r-=3)>-1&&o.push(239,191,189);if(i=null,e<128){if((r-=1)<0)break;o.push(e)}else if(e<2048){if((r-=2)<0)break;o.push(e>>6|192,63&e|128)}else if(e<65536){if((r-=3)<0)break;o.push(e>>12|224,e>>6&63|128,63&e|128)}else{if(!(e<1114112))throw new Error("Invalid code point");if((r-=4)<0)break;o.push(e>>18|240,e>>12&63|128,e>>6&63|128,63&e|128)}}return o}function W(t){return function(t){var r,e,u,s,h,a;o||f();var c=t.length;if(c%4>0)throw new Error("Invalid string. Length must be a multiple of 4");h="="===t[c-2]?2:"="===t[c-1]?1:0,a=new i(3*c/4-h),u=h>0?c-4:c;var l=0;for(r=0,e=0;r<u;r+=4,e+=3)s=n[t.charCodeAt(r)]<<18|n[t.charCodeAt(r+1)]<<12|n[t.charCodeAt(r+2)]<<6|n[t.charCodeAt(r+3)],a[l++]=s>>16&255,a[l++]=s>>8&255,a[l++]=255&s;return 2===h?(s=n[t.charCodeAt(r)]<<2|n[t.charCodeAt(r+1)]>>4,a[l++]=255&s):1===h&&(s=n[t.charCodeAt(r)]<<10|n[t.charCodeAt(r+1)]<<4|n[t.charCodeAt(r+2)]>>2,a[l++]=s>>8&255,a[l++]=255&s),a}(function(t){if((t=function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}(t).replace(H,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function $(t,r,e,n){for(var i=0;i<n&&!(i+e>=r.length||i>=t.length);++i)r[i+e]=t[i];return i}function tt(t){return null!=t&&(!!t._isBuffer||rt(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&rt(t.slice(0,0))}(t))}function rt(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}return t(Object.freeze({__proto__:null,Buffer:w,INSPECT_MAX_BYTES:50,SlowBuffer:function(t){return+t!=t&&(t=0),w.alloc(+t)},isBuffer:tt,kMaxLength:p})).Buffer,G=function(){throw new Error(function(){var t,r=arguments,e="https://stdlib.io/e/"+r[0]+"?";for(t=1;t<r.length;t++)e+="&arg[]="+encodeURIComponent(r[t]);return e}("08700"))},G}));
//# sourceMappingURL=browser.js.map
