"use strict";var d=function(t,r){return function(){return r||t((r={exports:{}}).exports,r),r.exports}};var u=d(function(h,i){
var v=require('@stdlib/array-base-arraylike2object/dist');function f(t,r){var o,a,n,s,e,c;for(o=t.data,n=t.accessors[0],a=r.data,s=r.accessors[0],e={},c=0;c<o.length;c++)e[n(o,c)]=s(a,c);return e}function g(t,r){var o,a;for(o={},a=0;a<t.length;a++)o[t[a]]=r[a];return o}function l(t,r){var o=v(t),a=v(r);return o.accessorProtocol||a.accessorProtocol?f(o,a):g(t,r)}i.exports=l
});var x=u();module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
