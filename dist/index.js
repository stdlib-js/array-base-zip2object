"use strict";var d=function(o,r){return function(){try{return r||o((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var u=d(function(h,i){
var v=require('@stdlib/array-base-arraylike2object/dist');function f(o,r){var a,t,n,s,e,c;for(a=o.data,n=o.accessors[0],t=r.data,s=r.accessors[0],e={},c=0;c<a.length;c++)e[n(a,c)]=s(t,c);return e}function g(o,r){var a,t;for(a={},t=0;t<o.length;t++)a[o[t]]=r[t];return a}function l(o,r){var a=v(o),t=v(r);return a.accessorProtocol||t.accessorProtocol?f(a,t):g(o,r)}i.exports=l
});var x=u();module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
