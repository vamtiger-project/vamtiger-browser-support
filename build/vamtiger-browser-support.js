var index=function(){"use strict";var t,e,n,r,o,a,i,u,c,f,s,l,p,y,d,b,m,h,v;!function(t){var e="object"==typeof global?global:"object"==typeof self?self:"object"==typeof this?this:{};function n(t,n){return t!==e&&("function"==typeof Object.create?Object.defineProperty(t,"__esModule",{value:!0}):t.__esModule=!0),function(e,r){return t[e]=n?n(e,r):r}}"function"==typeof define&&define.amd?define("tslib",["exports"],function(r){t(n(e,n(r)))}):"object"==typeof module&&"object"==typeof module.exports?t(n(e,n(module.exports))):t(n(e))}(function(w){var _=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};t=function(t,e){function n(){this.constructor=t}_(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},e=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},n=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&(n[r[o]]=t[r[o]])}return n},r=function(t,e,n,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},o=function(t,e){return function(n,r){e(n,r,t)}},a=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=function(t,e,n,r){return new(n||(n=Promise))(function(o,a){function i(t){try{c(r.next(t))}catch(t){a(t)}}function u(t){try{c(r.throw(t))}catch(t){a(t)}}function c(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(i,u)}c((r=r.apply(t,e||[])).next())})},u=function(t,e){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=e.call(t,i)}catch(t){a=[6,t],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},c=function(t,e){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])},f=function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],n=0;return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}},s=function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,a=n.call(t),i=[];try{for(;(void 0===e||e-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i},l=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(s(arguments[e]));return t},p=function(t){return this instanceof p?(this.v=t,this):new p(t)},y=function(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(t,e||[]),a=[];return r={},i("next"),i("throw"),i("return"),r[Symbol.asyncIterator]=function(){return this},r;function i(t){o[t]&&(r[t]=function(e){return new Promise(function(n,r){a.push([t,e,n,r])>1||u(t,e)})})}function u(t,e){try{(n=o[t](e)).value instanceof p?Promise.resolve(n.value.v).then(c,f):s(a[0][2],n)}catch(t){s(a[0][3],t)}var n}function c(t){u("next",t)}function f(t){u("throw",t)}function s(t,e){t(e),a.shift(),a.length&&u(a[0][0],a[0][1])}},d=function(t){var e,n;return e={},r("next"),r("throw",function(t){throw t}),r("return"),e[Symbol.iterator]=function(){return this},e;function r(r,o){e[r]=t[r]?function(e){return(n=!n)?{value:p(t[r](e)),done:"return"===r}:o?o(e):e}:o}},b=function(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,n=t[Symbol.asyncIterator];return n?n.call(t):(t="function"==typeof f?f(t):t[Symbol.iterator](),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e);function r(n){e[n]=t[n]&&function(e){return new Promise(function(r,o){(function(t,e,n,r){Promise.resolve(r).then(function(e){t({value:e,done:n})},e)})(r,o,(e=t[n](e)).done,e.value)})}}},m=function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},h=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e},v=function(t){return t&&t.__esModule?t:{default:t}},w("__extends",t),w("__assign",e),w("__rest",n),w("__decorate",r),w("__param",o),w("__metadata",a),w("__awaiter",i),w("__generator",u),w("__exportStar",c),w("__values",f),w("__read",s),w("__spread",l),w("__await",p),w("__asyncGenerator",y),w("__asyncDelegator",d),w("__asyncValues",b),w("__makeTemplateObject",m),w("__importStar",h),w("__importDefault",v)});var w,_,g,S,j,O,x,P,E,B=Object.freeze({});!function(t){t.nothing="",t.vamtiger="vamtiger",t.slash="/",t.jsExtension=".js",t.bashAnd="&&"}(w||(w={})),function(t){t.meta="meta",t.script="script"}(_||(_={})),function(t){t.vamtigerBrowserSupport="vamtiger-browser-support"}(g||(g={})),function(t){t.id="id"}(S||(S={})),function(t){t.baseUrl="baseUrl",t.name="name",t.url="url",t.primary="primary",t.loaded="loaded"}(j||(j={})),function(t){t.es2015Support="data-es2015-support",t.elementQuerySupport="data-element-query-support",t.webComponentSupport="data-web-component-support"}(O||(O={})),function(t){t.vamtigerBrowserSupportScript='script[src*="vamtiger-browser-support"]'}(x||(x={})),function(t){t.notBrowser="This is not a web browser"}(P||(P={})),function(t){t.bundleSource="bundle-source"}(E||(E={}));var k=/^data/,I=/support$/i,R=S.id,T=g.vamtigerBrowserSupport,M=j.baseUrl,U=(O.es2015Support,w.nothing),A=w.slash,C=x.vamtigerBrowserSupportScript;var D=w.vamtiger,q=w.jsExtension,G=k,L=Object.keys(O),V=new Set(["es2015Support"]),z=Object.assign({},O);L.forEach(function(t){return z[t]=z[t].replace(G,D)+q});var Q=g.vamtigerBrowserSupport,$=w.slash,F=w.nothing,H=_.meta;var J=g.vamtigerBrowserSupport,K=I;function N(){var t=window[J].dataset;Object.keys(t).filter(function(t){return t.match(K)}).sort().forEach(function(t){return function(t){var e=t.support,n=t.primary,r=window[Q],o=[r.dataset.baseUrl,z[e]].join($),a=document.createElement(H);a.dataset.name=e,a.dataset.url=o,n&&(a.dataset.primary=F),r.appendChild(a)}({support:t,primary:V.has(t)})})}function W(t){console.log(t)}var X=function(){return new Promise(function(t,e){!!window.document?t():e()})};function Y(){return X().then(function(){return Object.assign(window,B)}).then(function(){return addEventListener("load",Z)}).then(function(){return window.VamtigerBrowserSupport=W})}function Z(t){var e,n,r,o,a,i;removeEventListener("load",Z),e=document.head,n=e.firstChild,r=document.createElement(_.meta),o=document.querySelector(C),a=o.src.split(A),i=a.slice(0,a.length-1).join(A),r.setAttribute(R,T),o&&Object.assign(r.dataset,o.dataset),r.dataset.es2015Support=U,r.dataset[M]=i,e.insertBefore(r,n),N()}var tt=P.notBrowser;return Y().catch(function(t){console.warn(t),console.warn(tt)}),Y}();
//# sourceMappingURL=vamtiger-browser-support.js.map
