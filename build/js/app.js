!function(){"use strict";var n={3211:function(n,e,t){var r=t(8480),o=t.n(r),i=t(1781),u=t.n(i),c=t(6514),f=t(5108);c.types.register(u().type),c.types.defaultType=u().type;var l=new ReconnectingWebSocket("wss://chilifrog.epfl.ch",null,{minConnectionDelay:1}),a=new c.Connection(l);window.R=o(),window.c=a,f.log("Roam/Inter loaded")}},e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={id:r,loaded:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}t.m=n,t.x=function(){},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,{a:e}),e},t.d=function(n,e){for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.nmd=function(n){return n.paths=[],n.children||(n.children=[]),n},function(){var n={143:0},e=[[3211,531]],r=function(){},o=function(o,i){for(var u,c,f=i[0],l=i[1],a=i[2],p=i[3],s=0,d=[];s<f.length;s++)c=f[s],t.o(n,c)&&n[c]&&d.push(n[c][0]),n[c]=0;for(u in l)t.o(l,u)&&(t.m[u]=l[u]);for(a&&a(t),o&&o(i);d.length;)d.shift()();return p&&e.push.apply(e,p),r()},i=self.webpackChunkwebpack_starter=self.webpackChunkwebpack_starter||[];function u(){for(var r,o=0;o<e.length;o++){for(var i=e[o],u=!0,c=1;c<i.length;c++){var f=i[c];0!==n[f]&&(u=!1)}u&&(e.splice(o--,1),r=t(t.s=i[0]))}return 0===e.length&&(t.x(),t.x=function(){}),r}i.forEach(o.bind(null,0)),i.push=o.bind(null,i.push.bind(i));var c=t.x;t.x=function(){return t.x=c||function(){},(r=u)()}}(),t.x()}();
//# sourceMappingURL=app.js.map