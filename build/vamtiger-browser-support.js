!function(){"use strict";var t,e,r,n,o,a,i,u,c,s,l,f,p,d,m,h,y,w,v,b,g,S,_,j,O,P,B,x,E,M,T,A,C,L,k,q;function F(t,e,r,n){return new(r||(r=Promise))(function(o,a){function i(t){try{c(n.next(t))}catch(t){a(t)}}function u(t){try{c(n.throw(t))}catch(t){a(t)}}function c(t){t.done?o(t.value):new r(function(e){e(t.value)}).then(i,u)}c((n=n.apply(t,e)).next())})}!function(t){var e="object"==typeof global?global:"object"==typeof self?self:"object"==typeof this?this:{};function r(t,r){return t!==e&&("function"==typeof Object.create?Object.defineProperty(t,"__esModule",{value:!0}):t.__esModule=!0),function(e,n){return t[e]=r?r(e,n):n}}"function"==typeof define&&define.amd?define("tslib",["exports"],function(n){t(r(e,r(n)))}):"object"==typeof module&&"object"==typeof module.exports?t(r(e,r(module.exports))):t(r(e))}(function(b){var g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};t=function(t,e){function r(){this.constructor=t}g(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)},e=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},r=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&(r[n[o]]=t[n[o]])}return r},n=function(t,e,r,n){var o,a=arguments.length,i=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,r,n);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(i=(a<3?o(i):a>3?o(e,r,i):o(e,r))||i);return a>3&&i&&Object.defineProperty(e,r,i),i},o=function(t,e){return function(r,n){e(r,n,t)}},a=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=function(t,e,r,n){return new(r||(r=Promise))(function(o,a){function i(t){try{c(n.next(t))}catch(t){a(t)}}function u(t){try{c(n.throw(t))}catch(t){a(t)}}function c(t){t.done?o(t.value):new r(function(e){e(t.value)}).then(i,u)}c((n=n.apply(t,e||[])).next())})},u=function(t,e){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=e.call(t,i)}catch(t){a=[6,t],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},c=function(t,e){for(var r in t)e.hasOwnProperty(r)||(e[r]=t[r])},s=function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],r=0;return e?e.call(t):{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}}},l=function(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,o,a=r.call(t),i=[];try{for(;(void 0===e||e-- >0)&&!(n=a.next()).done;)i.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return i},f=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(l(arguments[e]));return t},p=function(t){return this instanceof p?(this.v=t,this):new p(t)},d=function(t,e,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(t,e||[]),a=[];return n={},i("next"),i("throw"),i("return"),n[Symbol.asyncIterator]=function(){return this},n;function i(t){o[t]&&(n[t]=function(e){return new Promise(function(r,n){a.push([t,e,r,n])>1||u(t,e)})})}function u(t,e){try{(r=o[t](e)).value instanceof p?Promise.resolve(r.value.v).then(c,s):l(a[0][2],r)}catch(t){l(a[0][3],t)}var r}function c(t){u("next",t)}function s(t){u("throw",t)}function l(t,e){t(e),a.shift(),a.length&&u(a[0][0],a[0][1])}},m=function(t){var e,r;return e={},n("next"),n("throw",function(t){throw t}),n("return"),e[Symbol.iterator]=function(){return this},e;function n(n,o){e[n]=t[n]?function(e){return(r=!r)?{value:p(t[n](e)),done:"return"===n}:o?o(e):e}:o}},h=function(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,r=t[Symbol.asyncIterator];return r?r.call(t):(t="function"==typeof s?s(t):t[Symbol.iterator](),e={},n("next"),n("throw"),n("return"),e[Symbol.asyncIterator]=function(){return this},e);function n(r){e[r]=t[r]&&function(e){return new Promise(function(n,o){(function(t,e,r,n){Promise.resolve(n).then(function(e){t({value:e,done:r})},e)})(n,o,(e=t[r](e)).done,e.value)})}}},y=function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},w=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e},v=function(t){return t&&t.__esModule?t:{default:t}},b("__extends",t),b("__assign",e),b("__rest",r),b("__decorate",n),b("__param",o),b("__metadata",a),b("__awaiter",i),b("__generator",u),b("__exportStar",c),b("__values",s),b("__read",l),b("__spread",f),b("__await",p),b("__asyncGenerator",d),b("__asyncDelegator",m),b("__asyncValues",h),b("__makeTemplateObject",y),b("__importStar",w),b("__importDefault",v)}),function(t){t.nothing="",t.build="build",t.vamtiger="vamtiger",t.slash="/",t.jsExtension=".js",t.bashAnd="&&",t.arn="arn",t.sns="sns",t.aws="aws",t.colon=":",t.hyphen="-",t["vamtiger-contact"]="vamtiger-contact",t["5e5164d3"]="5e5164d3",t.cc71="cc71",t["4e5b"]="4e5b",t["9c34"]="9c34",t["042fe735f31c"]="042fe735f31c"}(b||(b={})),function(t){t.usWest2="us-west-2"}(g||(g={})),function(t){t.meta="meta",t.script="script"}(S||(S={})),function(t){t.vamtigerBrowserSupport="vamtiger-browser-support"}(_||(_={})),function(t){t.id="id"}(j||(j={})),function(t){t.baseUrl="baseUrl",t.name="name",t.url="url",t.primary="primary",t.loaded="loaded",t.supported="supported",t.unsupported="unsupported",t.error="error",t.polyfill="polyfill",t.loadCritical="loadCritical",t.load="load",t.wait="wait"}(O||(O={})),function(t){t.es2015Support="data-es2015-support",t.elementQuerySupport="data-element-query-support",t.webComponentSupport="data-web-component-support",t.fetchSupport="data-fetch-support",t.awsSupport="data-aws-support",t.contactSupport="data-contact-support"}(P||(P={})),function(t){t.vamtigerBrowserSupportScript='script[src*="vamtiger-browser-support"]',t.vamtigerBrowserMethodJsonJs='[src$="vamtiger-browser-method.js.json.js"]',t.vamtigerBrowserMethodJson='[data-name$="vamtiger-browser-method.js.json"]'}(B||(B={})),function(t){t.vamtigerBrowserMethod="https://cdn.jsdelivr.net/npm/vamtiger-browser-method@latest/build/vamtiger-browser-method.js"}(x||(x={})),function(t){t.notBrowser="This is not a web browser",t.noFormForSelector="No Form for Selector",t.noFieldInFormForSelector="No Field in Form for Selector"}(E||(E={})),function(t){t.bundleSource="bundle-source"}(M||(M={})),function(t){t.primary="primary",t.secondary="secondary"}(T||(T={})),function(t){t.loadCritical="loadCritical",t.load="load"}(A||(A={})),function(t){t.innerHTML="innerHTML"}(C||(C={})),function(t){t.touchSupport="vamtigerTouchSupport"}(L||(L={})),function(t){t.elementQuery="vamtiger-element-query-support"}(k||(k={})),function(t){t.elementQuery="https://cdn.jsdelivr.net/npm/eqcss@latest/EQCSS.min.js"}(q||(q={}));var I,V,R,J,D,H,Q,U,$,N,G,W,z,K,X,Y=Object.keys(T),Z=/^data/,tt=/(.*?Support)(Primary)?$/,et=/(\d|latest)$/,rt=Object.assign(b,{365080655670:365080655670}),nt={vamtigerBrowserMethod:'script[src="'+x.vamtigerBrowserMethod+'"]'},ot=b.vamtiger,at=b.jsExtension,it=Z,ut=Object.keys(P),ct=["https://cdn.jsdelivr.net/npm/vamtiger-browser-method@latest/build/vamtiger-browser-method.js.json.js"],st=new Set(["es2015Support"]),lt=Object.assign({},P),ft={parallel:new Set([T.primary,T.secondary]),series:new Set([])},pt=Array.from(new Set([O.supported,O.unsupported])),dt=Array.from(new Set(Object.keys(A)));I=rt.arn,V=rt.aws,R=rt.sns,J=rt[365080655670],D=rt["vamtiger-contact"],H=rt.colon,Q=rt["5e5164d3"],U=rt.cc71,$=rt["4e5b"],N=rt["9c34"],G=rt["042fe735f31c"],W=rt.hyphen,z=g.usWest2,K=[I,V,R,z,J,D].join(H),X=[z,[Q,U,$,N,G].join(W)].join(H),Array.from(K),Array.from(X),Array.from(z);ut.forEach(function(t){return lt[t]=lt[t].replace(it,ot)+at});var mt=_.vamtigerBrowserSupport;var ht=_.vamtigerBrowserSupport;var yt=ft.parallel,wt=0,vt=!1;function bt(){return F(this,void 0,void 0,function(){var t,e,r,n,o,a;return __generator(this,function(i){return t=window.VamtigerBrowserMethod,e=t.loadScript,r=Y[wt],n=function(t){var e,r=t.supportType,n=window[mt],o=new Set;return Array.from(n.children).forEach(function(t){(e=t.dataset).hasOwnProperty(r)&&o.add(e.url)}),Array.from(o)}({supportType:r}),o=[],yt.has(r)?(a=Promise.all(n.map(function(t){return e({src:t})})),n.length||_t({supportType:r})):r?a=n.reduce(function(t,r){return t.then(function(){return e({src:r})}).then(function(t){return o.push(t)&&o})},Promise.resolve(o)):r||vt||(vt=!0,a=function(){return F(this,void 0,void 0,function(){var t,e,r,n;return __generator(this,function(o){return t=window.VamtigerBrowserMethod,e=t.loadScript,r=window[ht],n=[],[2,dt.map(function(t){return r.dataset[t]}).filter(function(t){return t}).reduce(function(t,r){return t.then(function(){return e({src:r})}).then(function(t){return n.push(t)&&n})},Promise.resolve(n))]})})}()),wt++,[2,a]})})}var gt=_.vamtigerBrowserSupport,St=O.wait;function _t(t){var e=t.supportType,r=window[gt],n="meta[data-"+e+"]",o=Array.from(r.querySelectorAll(n)),a=o.filter(function(t){return pt.some(function(e){return t.dataset.hasOwnProperty(e)})}).filter(function(t){return!t.dataset.hasOwnProperty(St)});o&&o.length===a.length&&bt().catch(console.warn)}var jt=_.vamtigerBrowserSupport,Ot=b.nothing,Pt=Object.keys(T);window.VamtigerBrowserSupport||(window.VamtigerBrowserSupport=function(t){var e=t.supportFile,r=t.supported,n=t.polyfill,o=t.polyfills,a=t.polyfillChain,i=t.error,u=t.wait;return F(this,void 0,void 0,function(){var t,c,s,l,f,p,d,m,h;return __generator(this,function(y){return t=window[jt],window.VamtigerBrowserSupport,c=window.VamtigerBrowserMethod,s=c.loadScript,l=c.loadScripts,f=c.loadScriptsSequentially,p="[data-url*="+e+"]",d=t.querySelector(p),m=d.dataset,h=Pt.find(function(t){return m.hasOwnProperty(t)}),r?m.supported=Ot:m.unsupported=Ot,u?m.wait=Ot:delete m.wait,i&&(m.error=i),n?(m.polyfill=n,s({src:n}).then(function(){return _t({supportType:h})})):a?f(a.map(function(t){return t.map(function(t){return{src:t}})})).then(function(t){return t.forEach(function(t,e){var r=t.src;return m["polyfill-"+(e+1)]=r})}).then(function(){return _t({supportType:h})}):o?l(o.map(function(t){return{src:t}})).then(function(t){return t.forEach(function(t,e){var r=t.src;return m["polyfill-"+(e+1)]=r})}).then(function(){return _t({supportType:h})}):_t({supportType:h}),[2]})})});var Bt=j.id,xt=_.vamtigerBrowserSupport,Et=O.baseUrl,Mt=(P.es2015Support,b.nothing,b.slash),Tt=(b.build,B.vamtigerBrowserSupportScript),At=et;var Ct=_.vamtigerBrowserSupport,Lt=b.slash,kt=b.nothing,qt=S.meta,Ft=tt;var It=_.vamtigerBrowserSupport,Vt=tt;function Rt(){var t=window[It].dataset;Object.keys(t).filter(function(t){return t.match(Vt)}).sort().forEach(function(t){return function(t){var e=t.support,r=window[Ct],n=r.dataset.baseUrl,o=e.match(Ft)||[],a=o[1],i=o[2],u=[n,lt[a]].join(Lt),c=document.createElement(qt);c.dataset.name=a,c.dataset.url=u,i?c.dataset[i.toLowerCase()]=kt:c.dataset[T.secondary]=kt,r.appendChild(c)}({support:t,primary:st.has(t)})})}var Jt=JSON.parse;function Dt(){return F(this,void 0,void 0,function(){var t;return __generator(this,function(e){switch(e.label){case 0:return[4,Promise.all(ct.map(Ht))];case 1:return t=e.sent(),[4,function(){var t=this;return new Promise(function(e,r){return F(t,void 0,void 0,function(){var t,r,n,o,a,i,u,c;return __generator(this,function(s){switch(s.label){case 0:if(t=document.head,r=B.vamtigerBrowserMethodJson,n=document.querySelector(r),o=n&&n.innerHTML,a=o&&Jt(o),i=a&&a.text,u=document.createElement("script"),!i)return[3,5];s.label=1;case 1:return s.trys.push([1,3,,5]),u.dataset.name=x.vamtigerBrowserMethod,u.innerHTML=i,u.addEventListener("error",function(t){return Qt(t)}),t.appendChild(u),[4,Qt()];case 2:return s.sent(),e(),[3,5];case 3:return c=s.sent(),console.warn(c),[4,Qt()];case 4:return s.sent(),[3,5];case 5:return[2]}})})})}()];case 2:return e.sent(),[2,t]}})})}function Ht(t){return new Promise(function(e,r){var n=document.head,o='[src="'+t+'"]',a=n.querySelector(o),i=!a&&document.createElement("script");i?(i.addEventListener("load",function(t){return e(i)}),i.addEventListener("error",r),i.src=t,n.appendChild(i)):a?e(a):e()})}function Qt(t){return new Promise(function(e,r){t&&t.stopPropagation();var n=self.VamtigerBrowserMethod,o=document.head,a=document.querySelector(nt.vamtigerBrowserMethod),i=!n&&!a&&document.createElement("script");i?(i.addEventListener("load",e),i.addEventListener("error",r),o.appendChild(i)):e()})}var Ut=b.nothing;function $t(t){console.warn(t),console.warn(Nt)}var Nt=E.notBrowser;addEventListener("load",function t(e){return F(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return removeEventListener("load",t),[4,Dt()];case 1:return e.sent(),r=document.head,n=r.firstChild,o=document.createElement(S.meta),a=document.querySelector(Tt),i=a.src.split(Mt),u=new Set(i.slice(0,i.length-1)),c=a.src.match(At)&&a.src+"/build"||Array.from(u).join(Mt),o.setAttribute(Bt,xt),a&&Object.assign(o.dataset,a.dataset),o.dataset[Et]=c,r.insertBefore(o,n),Rt(),bt().catch($t),function(){F(this,void 0,void 0,function(){var t,e,r,n,o,a;return __generator(this,function(i){return t=window.ontouchstart,e=window.document,r=e.body,n=r.dataset,o=navigator.maxTouchPoints,a=navigator.msMaxTouchPoints,!!(t||window.hasOwnProperty("DocumentTouch")||o||a)&&(n[L.touchSupport]=Ut),[2]})})}(),[2]}var r,n,o,a,i,u,c})})})}();
//# sourceMappingURL=vamtiger-browser-support.js.map
