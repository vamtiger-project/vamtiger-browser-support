var index=function(){"use strict";var t,r,e,n,o,a,i,u,c,s,f,l,p,d,y,h,m,w,v,b,S,_,g,j,O,P,x,B,E,T,k,A,C,F;function M(t,r,e,n){return new(e||(e=Promise))(function(o,a){function i(t){try{c(n.next(t))}catch(t){a(t)}}function u(t){try{c(n.throw(t))}catch(t){a(t)}}function c(t){t.done?o(t.value):new e(function(r){r(t.value)}).then(i,u)}c((n=n.apply(t,r)).next())})}!function(t){var r="object"==typeof global?global:"object"==typeof self?self:"object"==typeof this?this:{};function e(t,e){return t!==r&&("function"==typeof Object.create?Object.defineProperty(t,"__esModule",{value:!0}):t.__esModule=!0),function(r,n){return t[r]=e?e(r,n):n}}"function"==typeof define&&define.amd?define("tslib",["exports"],function(n){t(e(r,e(n)))}):"object"==typeof module&&"object"==typeof module.exports?t(e(r,e(module.exports))):t(e(r))}(function(b){var S=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var e in r)r.hasOwnProperty(e)&&(t[e]=r[e])};t=function(t,r){function e(){this.constructor=t}S(t,r),t.prototype=null===r?Object.create(r):(e.prototype=r.prototype,new e)},r=Object.assign||function(t){for(var r,e=1,n=arguments.length;e<n;e++)for(var o in r=arguments[e])Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);return t},e=function(t,r){var e={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&r.indexOf(n)<0&&(e[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)r.indexOf(n[o])<0&&(e[n[o]]=t[n[o]])}return e},n=function(t,r,e,n){var o,a=arguments.length,i=a<3?r:null===n?n=Object.getOwnPropertyDescriptor(r,e):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,r,e,n);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(i=(a<3?o(i):a>3?o(r,e,i):o(r,e))||i);return a>3&&i&&Object.defineProperty(r,e,i),i},o=function(t,r){return function(e,n){r(e,n,t)}},a=function(t,r){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,r)},i=function(t,r,e,n){return new(e||(e=Promise))(function(o,a){function i(t){try{c(n.next(t))}catch(t){a(t)}}function u(t){try{c(n.throw(t))}catch(t){a(t)}}function c(t){t.done?o(t.value):new e(function(r){r(t.value)}).then(i,u)}c((n=n.apply(t,r||[])).next())})},u=function(t,r){var e,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(e)throw new TypeError("Generator is already executing.");for(;i;)try{if(e=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=r.call(t,i)}catch(t){a=[6,t],n=0}finally{e=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},c=function(t,r){for(var e in t)r.hasOwnProperty(e)||(r[e]=t[e])},s=function(t){var r="function"==typeof Symbol&&t[Symbol.iterator],e=0;return r?r.call(t):{next:function(){return t&&e>=t.length&&(t=void 0),{value:t&&t[e++],done:!t}}}},f=function(t,r){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var n,o,a=e.call(t),i=[];try{for(;(void 0===r||r-- >0)&&!(n=a.next()).done;)i.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(e=a.return)&&e.call(a)}finally{if(o)throw o.error}}return i},l=function(){for(var t=[],r=0;r<arguments.length;r++)t=t.concat(f(arguments[r]));return t},p=function(t){return this instanceof p?(this.v=t,this):new p(t)},d=function(t,r,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=e.apply(t,r||[]),a=[];return n={},i("next"),i("throw"),i("return"),n[Symbol.asyncIterator]=function(){return this},n;function i(t){o[t]&&(n[t]=function(r){return new Promise(function(e,n){a.push([t,r,e,n])>1||u(t,r)})})}function u(t,r){try{(e=o[t](r)).value instanceof p?Promise.resolve(e.value.v).then(c,s):f(a[0][2],e)}catch(t){f(a[0][3],t)}var e}function c(t){u("next",t)}function s(t){u("throw",t)}function f(t,r){t(r),a.shift(),a.length&&u(a[0][0],a[0][1])}},y=function(t){var r,e;return r={},n("next"),n("throw",function(t){throw t}),n("return"),r[Symbol.iterator]=function(){return this},r;function n(n,o){r[n]=t[n]?function(r){return(e=!e)?{value:p(t[n](r)),done:"return"===n}:o?o(r):r}:o}},h=function(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,e=t[Symbol.asyncIterator];return e?e.call(t):(t="function"==typeof s?s(t):t[Symbol.iterator](),r={},n("next"),n("throw"),n("return"),r[Symbol.asyncIterator]=function(){return this},r);function n(e){r[e]=t[e]&&function(r){return new Promise(function(n,o){(function(t,r,e,n){Promise.resolve(n).then(function(r){t({value:r,done:e})},r)})(n,o,(r=t[e](r)).done,r.value)})}}},m=function(t,r){return Object.defineProperty?Object.defineProperty(t,"raw",{value:r}):t.raw=r,t},w=function(t){if(t&&t.__esModule)return t;var r={};if(null!=t)for(var e in t)Object.hasOwnProperty.call(t,e)&&(r[e]=t[e]);return r.default=t,r},v=function(t){return t&&t.__esModule?t:{default:t}},b("__extends",t),b("__assign",r),b("__rest",e),b("__decorate",n),b("__param",o),b("__metadata",a),b("__awaiter",i),b("__generator",u),b("__exportStar",c),b("__values",s),b("__read",f),b("__spread",l),b("__await",p),b("__asyncGenerator",d),b("__asyncDelegator",y),b("__asyncValues",h),b("__makeTemplateObject",m),b("__importStar",w),b("__importDefault",v)}),function(t){t.nothing="",t.vamtiger="vamtiger",t.slash="/",t.jsExtension=".js",t.bashAnd="&&",t.arn="arn",t.sns="sns",t.aws="aws",t.colon=":",t.hyphen="-",t["vamtiger-contact"]="vamtiger-contact",t["5e5164d3"]="5e5164d3",t.cc71="cc71",t["4e5b"]="4e5b",t["9c34"]="9c34",t["042fe735f31c"]="042fe735f31c"}(b||(b={})),function(t){t.usWest2="us-west-2"}(S||(S={})),function(t){t.meta="meta",t.script="script"}(_||(_={})),function(t){t.vamtigerBrowserSupport="vamtiger-browser-support"}(g||(g={})),function(t){t.id="id"}(j||(j={})),function(t){t.baseUrl="baseUrl",t.name="name",t.url="url",t.primary="primary",t.loaded="loaded",t.supported="supported",t.unsupported="unsupported",t.error="error",t.polyfill="polyfill",t.loadCritical="loadCritical",t.load="load",t.wait="wait"}(O||(O={})),function(t){t.es2015Support="data-es2015-support",t.elementQuerySupport="data-element-query-support",t.webComponentSupport="data-web-component-support",t.fetchSupport="data-fetch-support",t.awsSupport="data-aws-support",t.contactSupport="data-contact-support"}(P||(P={})),function(t){t.vamtigerBrowserSupportScript='script[src*="vamtiger-browser-support"]'}(x||(x={})),function(t){t.notBrowser="This is not a web browser",t.noFormForSelector="No Form for Selector",t.noFieldInFormForSelector="No Field in Form for Selector"}(B||(B={})),function(t){t.bundleSource="bundle-source"}(E||(E={})),function(t){t.primary="primary",t.secondary="secondary"}(T||(T={})),function(t){t.loadCritical="loadCritical",t.load="load"}(k||(k={})),function(t){t.innerHTML="innerHTML"}(A||(A={})),function(t){t.elementQuery="vamtiger-element-query-support"}(C||(C={})),function(t){t.elementQuery="https://unpkg.com/eqcss/EQCSS.min.js"}(F||(F={}));var q,I,L,V,R,Q,U,D,G,H,N,W,$,z,J,K=Object.keys(T),X=/^data/,Y=/(.*?Support)(Primary)?$/,Z=Object.assign(b,{365080655670:365080655670}),tt=b.vamtiger,rt=b.jsExtension,et=X,nt=Object.keys(P),ot=["https://unpkg.com/vamtiger-browser-method@latest"],at=new Set(["es2015Support"]),it=Object.assign({},P),ut={parallel:new Set([T.primary,T.secondary]),series:new Set([])},ct=Array.from(new Set([O.supported,O.unsupported])),st=Array.from(new Set(Object.keys(k)));q=Z.arn,I=Z.aws,L=Z.sns,V=Z[365080655670],R=Z["vamtiger-contact"],Q=Z.colon,U=Z["5e5164d3"],D=Z.cc71,G=Z["4e5b"],H=Z["9c34"],N=Z["042fe735f31c"],W=Z.hyphen,$=S.usWest2,z=[q,I,L,$,V,R].join(Q),J=[$,[U,D,G,H,N].join(W)].join(Q),Array.from(z),Array.from(J),Array.from($);nt.forEach(function(t){return it[t]=it[t].replace(et,tt)+rt});var ft=g.vamtigerBrowserSupport;var lt=g.vamtigerBrowserSupport;var pt=ut.parallel,dt=0,yt=!1;function ht(){return M(this,void 0,void 0,function(){var t,r,e,n,o,a;return __generator(this,function(i){return t=window.VamtigerBrowserMethod,r=t.loadScript,e=K[dt],n=function(t){var r,e=t.supportType,n=window[ft],o=new Set;return Array.from(n.children).forEach(function(t){(r=t.dataset).hasOwnProperty(e)&&o.add(r.url)}),Array.from(o)}({supportType:e}),o=[],pt.has(e)?(a=Promise.all(n.map(function(t){return r({src:t})})),n.length||vt({supportType:e})):e?a=n.reduce(function(t,e){return t.then(function(){return r({src:e})}).then(function(t){return o.push(t)&&o})},Promise.resolve(o)):e||yt||(yt=!0,a=function(){return M(this,void 0,void 0,function(){var t,r,e,n;return __generator(this,function(o){return t=window.VamtigerBrowserMethod,r=t.loadScript,e=window[lt],n=[],[2,st.map(function(t){return e.dataset[t]}).filter(function(t){return t}).reduce(function(t,e){return t.then(function(){return r({src:e})}).then(function(t){return n.push(t)&&n})},Promise.resolve(n))]})})}()),dt++,[2,a]})})}var mt=g.vamtigerBrowserSupport,wt=O.wait;function vt(t){var r=t.supportType,e=window[mt],n="meta[data-"+r+"]",o=Array.from(e.querySelectorAll(n)),a=o.filter(function(t){return ct.some(function(r){return t.dataset.hasOwnProperty(r)})}).filter(function(t){return!t.dataset.hasOwnProperty(wt)});o&&o.length===a.length&&ht().catch(console.warn)}var bt=g.vamtigerBrowserSupport,St=b.nothing,_t=Object.keys(T);window.VamtigerBrowserSupport||(window.VamtigerBrowserSupport=function(t){var r=t.supportFile,e=t.supported,n=t.polyfill,o=t.polyfills,a=t.polyfillChain,i=t.error,u=t.wait;return M(this,void 0,void 0,function(){var t,c,s,f,l,p,d,y,h;return __generator(this,function(m){return t=window[bt],window.VamtigerBrowserSupport,c=window.VamtigerBrowserMethod,s=c.loadScript,f=c.loadScripts,l=c.loadScriptsSequentially,p="[data-url*="+r+"]",d=t.querySelector(p),y=d.dataset,h=_t.find(function(t){return y.hasOwnProperty(t)}),e?y.supported=St:y.unsupported=St,u?y.wait=St:delete y.wait,i&&(y.error=i),n?(y.polyfill=n,s({src:n}).then(function(){return vt({supportType:h})})):a?l(a.map(function(t){return t.map(function(t){return{src:t}})})).then(function(t){return t.forEach(function(t,r){var e=t.src;return y["polyfill-"+(r+1)]=e})}).then(function(){return vt({supportType:h})}):o?f(o.map(function(t){return{src:t}})).then(function(t){return t.forEach(function(t,r){var e=t.src;return y["polyfill-"+(r+1)]=e})}).then(function(){return vt({supportType:h})}):vt({supportType:h}),[2]})})});var gt=j.id,jt=g.vamtigerBrowserSupport,Ot=O.baseUrl,Pt=(P.es2015Support,b.nothing,b.slash),xt=x.vamtigerBrowserSupportScript;var Bt=g.vamtigerBrowserSupport,Et=b.slash,Tt=b.nothing,kt=_.meta,At=Y;var Ct=g.vamtigerBrowserSupport,Ft=Y;function Mt(){var t=window[Ct].dataset;Object.keys(t).filter(function(t){return t.match(Ft)}).sort().forEach(function(t){return function(t){var r=t.support,e=window[Bt],n=e.dataset.baseUrl,o=r.match(At)||[],a=o[1],i=o[2],u=[n,it[a]].join(Et),c=document.createElement(kt);c.dataset.name=a,c.dataset.url=u,i?c.dataset[i.toLowerCase()]=Tt:c.dataset[T.secondary]=Tt,e.appendChild(c)}({support:t,primary:at.has(t)})})}var qt=function(){return new Promise(function(t,r){!!window.document?t():r()})};function It(t){return new Promise(function(r,e){var n=document.head,o='[src="'+t+'"]',a=n.querySelector(o),i=!a&&document.createElement("script");i?(i.addEventListener("load",function(t){return r(i)}),i.addEventListener("error",e),i.src=t,n.appendChild(i)):a?r(a):r()})}function Lt(){return qt().then(function(){return addEventListener("load",Vt)})}function Vt(t){return M(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return removeEventListener("load",Vt),[4,function(){return M(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return[4,Promise.all(ot.map(It))];case 1:return[2,t.sent()]}})})}()];case 1:return t.sent(),r=document.head,e=r.firstChild,n=document.createElement(_.meta),o=document.querySelector(xt),a=o.src.split(Pt),i=a.slice(0,a.length-1).join(Pt),n.setAttribute(gt,jt),o&&Object.assign(n.dataset,o.dataset),n.dataset[Ot]=i,r.insertBefore(n,e),Mt(),ht().catch(Rt),[2]}var r,e,n,o,a,i})})}function Rt(t){console.warn(t),console.warn(Qt)}var Qt=B.notBrowser;return Lt().catch(Rt),Lt}();
//# sourceMappingURL=vamtiger-browser-support.js.map
