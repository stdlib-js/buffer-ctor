// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(e){"use strict";var r,t="function"==typeof Object.defineProperty?Object.defineProperty:null,o=Object.defineProperty,n=Object.prototype,u=n.toString,f=n.__defineGetter__,i=n.__defineSetter__,l=n.__lookupGetter__,a=n.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?o:function(e,r,t){var o,c,y,p;if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(l.call(e,r)||a.call(e,r)?(o=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=o):e[r]=t.value),y="get"in t,p="set"in t,c&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&f&&f.call(e,r,t.get),p&&i&&i.call(e,r,t.set),e};var c,y=r,p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),b=Object.prototype.toString,s=Object.prototype.hasOwnProperty,_="function"==typeof Symbol?Symbol.toStringTag:"";c=p&&"symbol"==typeof Symbol.toStringTag?function(e){var r,t,o,n,u;if(null==e)return b.call(e);t=e[_],u=_,r=null!=(n=e)&&s.call(n,u);try{e[_]=void 0}catch(r){return b.call(e)}return o=b.call(e),r?e[_]=t:delete e[_],o}:function(e){return b.call(e)};var d,v=c;d=Array.isArray?Array.isArray:function(e){return"[object Array]"===v(e)};var m=d;function g(e){return null!==e&&"object"==typeof e}var h=function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(r){var t,o;if(!m(r))return!1;if(0===(t=r.length))return!1;for(o=0;o<t;o++)if(!1===e(r[o]))return!1;return!0}}(g);y(g,"isObjectLikeArray",{configurable:!1,enumerable:!1,writable:!1,value:h});var j,w="function"==typeof Buffer?Buffer:null,S=e.Buffer;return j=function(){var e,r;if("function"!=typeof w)return!1;try{e=function(e){return g(e)&&(e._isBuffer||e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e))}(r="function"==typeof w.from?w.from([1,2,3,4]):new w([1,2,3,4]))&&1===r[0]&&2===r[1]&&3===r[2]&&4===r[3]}catch(r){e=!1}return e}()?S:function(){throw new Error(function(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}("08700"))},j},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r(require("buffer")):"function"==typeof define&&define.amd?define(["buffer"],r):(e="undefined"!=typeof globalThis?globalThis:e||self).Buffer=r(e.require$$0);
//# sourceMappingURL=index.js.map
