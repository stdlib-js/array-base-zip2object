// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-arraylike2object@v0.2.1-esm/index.mjs";function t(t,o){var a=r(t),e=r(o);return a.accessorProtocol||e.accessorProtocol?function(r,t){var o,a,e,s,c,n;for(o=r.data,e=r.accessors[0],a=t.data,s=t.accessors[0],c={},n=0;n<o.length;n++)c[e(o,n)]=s(a,n);return c}(a,e):function(r,t){var o,a;for(o={},a=0;a<r.length;a++)o[r[a]]=t[a];return o}(t,o)}export{t as default};
//# sourceMappingURL=index.mjs.map
