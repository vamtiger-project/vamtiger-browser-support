var index=function(t){"use strict";var e,r,n,o,a,i,c,u,s,l,p,f,d,y,m,h,b,v,w,g;!function(t){var e="object"==typeof global?global:"object"==typeof self?self:"object"==typeof this?this:{};function r(t,r){return t!==e&&("function"==typeof Object.create?Object.defineProperty(t,"__esModule",{value:!0}):t.__esModule=!0),function(e,n){return t[e]=r?r(e,n):n}}"function"==typeof define&&define.amd?define("tslib",["exports"],function(n){t(r(e,r(n)))}):"object"==typeof module&&"object"==typeof module.exports?t(r(e,r(module.exports))):t(r(e))}(function(t){var _=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};e=function(t,e){function r(){this.constructor=t}_(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)},r=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},n=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r},o=function(t,e,r,n){var o,a=arguments.length,i=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(a<3?o(i):a>3?o(e,r,i):o(e,r))||i);return a>3&&i&&Object.defineProperty(e,r,i),i},a=function(t,e){return function(r,n){e(r,n,t)}},i=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(t,e,r,n){return new(r||(r=Promise))(function(o,a){function i(t){try{u(n.next(t))}catch(t){a(t)}}function c(t){try{u(n.throw(t))}catch(t){a(t)}}function u(t){t.done?o(t.value):new r(function(e){e(t.value)}).then(i,c)}u((n=n.apply(t,e||[])).next())})},u=function(t,e){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=e.call(t,i)}catch(t){a=[6,t],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},s=function(t,e){for(var r in t)e.hasOwnProperty(r)||(e[r]=t[r])},l=function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],r=0;return e?e.call(t):{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}}},p=function(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,o,a=r.call(t),i=[];try{for(;(void 0===e||e-- >0)&&!(n=a.next()).done;)i.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return i},f=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(p(arguments[e]));return t},d=function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var n=Array(t),o=0;for(e=0;e<r;e++)for(var a=arguments[e],i=0,c=a.length;i<c;i++,o++)n[o]=a[i];return n},y=function(t){return this instanceof y?(this.v=t,this):new y(t)},m=function(t,e,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(t,e||[]),a=[];return n={},i("next"),i("throw"),i("return"),n[Symbol.asyncIterator]=function(){return this},n;function i(t){o[t]&&(n[t]=function(e){return new Promise(function(r,n){a.push([t,e,r,n])>1||c(t,e)})})}function c(t,e){try{(r=o[t](e)).value instanceof y?Promise.resolve(r.value.v).then(u,s):l(a[0][2],r)}catch(t){l(a[0][3],t)}var r}function u(t){c("next",t)}function s(t){c("throw",t)}function l(t,e){t(e),a.shift(),a.length&&c(a[0][0],a[0][1])}},h=function(t){var e,r;return e={},n("next"),n("throw",function(t){throw t}),n("return"),e[Symbol.iterator]=function(){return this},e;function n(n,o){e[n]=t[n]?function(e){return(r=!r)?{value:y(t[n](e)),done:"return"===n}:o?o(e):e}:o}},b=function(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,r=t[Symbol.asyncIterator];return r?r.call(t):(t="function"==typeof l?l(t):t[Symbol.iterator](),e={},n("next"),n("throw"),n("return"),e[Symbol.asyncIterator]=function(){return this},e);function n(r){e[r]=t[r]&&function(e){return new Promise(function(n,o){(function(t,e,r,n){Promise.resolve(n).then(function(e){t({value:e,done:r})},e)})(n,o,(e=t[r](e)).done,e.value)})}}},v=function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},w=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e},g=function(t){return t&&t.__esModule?t:{default:t}},t("__extends",e),t("__assign",r),t("__rest",n),t("__decorate",o),t("__param",a),t("__metadata",i),t("__awaiter",c),t("__generator",u),t("__exportStar",s),t("__values",l),t("__read",p),t("__spread",f),t("__spreadArrays",d),t("__await",y),t("__asyncGenerator",m),t("__asyncDelegator",h),t("__asyncValues",b),t("__makeTemplateObject",v),t("__importStar",w),t("__importDefault",g)});const _=Object.assign||function(t){for(var e,r=1;r<arguments.length;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t};var j,S,O,x,P,M,F,B,A,C,I,T,k,R,E,N,q;!function(t){t.nothing="",t.build="build",t.vamtiger="vamtiger",t.slash="/",t.jsExtension=".js",t.bashAnd="&&",t.arn="arn",t.sns="sns",t.aws="aws",t.colon=":",t.hyphen="-",t.space=" ",t["vamtiger-contact"]="vamtiger-contact",t["5e5164d3"]="5e5164d3",t.cc71="cc71",t["4e5b"]="4e5b",t["9c34"]="9c34",t["042fe735f31c"]="042fe735f31c"}(j||(j={})),function(t){t.usWest2="us-west-2"}(S||(S={})),function(t){t.meta="meta",t.script="script"}(O||(O={})),function(t){t.vamtigerBrowserSupport="vamtiger-browser-support"}(x||(x={})),function(t){t.id="id"}(P||(P={})),function(t){t.baseUrl="baseUrl",t.name="name",t.url="url",t.primary="primary",t.loaded="loaded",t.supported="supported",t.unsupported="unsupported",t.error="error",t.polyfill="polyfill",t.loadCritical="loadCritical",t.load="load",t.wait="wait"}(M||(M={})),function(t){t.botSupport="data-bot-support",t.es2015Support="data-es2015-support",t.elementQuerySupport="data-element-query-support",t.webComponentSupport="data-web-component-support",t.fetchSupport="data-fetch-support",t.awsSupport="data-aws-support",t.contactSupport="data-contact-support"}(F||(F={})),function(t){t.vamtigerBrowserSupportScript='script[src*="vamtiger-browser-support"]',t.vamtigerBrowserMethodJsonJs='[src$="vamtiger-browser-method.js.json.js"]',t.vamtigerBrowserMethodJson='[data-name$="vamtiger-browser-method.js.json"]'}(B||(B={})),function(t){t.vamtigerBrowserMethod="vamtiger-browser-method.js",t.vamtigerBrowserMethodJsonJs="https://cdn.jsdelivr.net/npm/vamtiger-browser-method@0.107.24/build/vamtiger-browser-method.js.json.js",t.tsLib="https://cdn.jsdelivr.net/npm/tslib@latest"}(A||(A={})),function(t){t.notBrowser="This is not a web browser",t.noFormForSelector="No Form for Selector",t.noFieldInFormForSelector="No Field in Form for Selector",t.objectAssignNotSupported="Object.assign is not supported",t.arrayFromNotSupported="Array.from is not supported",t.destructringAssignmentNotSupported="Destructuring Assignment is not supported",t.arrowFunctionsNotSupported="Arrow functions are not supported"}(C||(C={})),function(t){t.bundleSource="bundle-source",t.copyDependencies="copy-dependencies"}(I||(I={})),function(t){t.primary="primary",t.secondary="secondary"}(T||(T={})),function(t){t.loadCritical="loadCritical",t.load="load"}(k||(k={})),function(t){t.innerHTML="innerHTML"}(R||(R={})),function(t){t.touchSupport="vamtigerTouchSupport",t.bot="vamtigerBot",t.legacy="vamtigerLegacy",t.textMode="vamtigerTextMode"}(E||(E={})),function(t){t.elementQuery="vamtiger-element-query-support"}(N||(N={})),function(t){t.elementQuery="https://cdn.jsdelivr.net/npm/eqcss@latest/EQCSS.min.js"}(q||(q={}));_({},j,{365080655670:365080655670}),A.vamtigerBrowserMethod;var D,J=j.slash;j.nothing;var L,Q,U,V,G,H,$,W,z,K=window.VamtigerContact,X=window.VamtigerBrowserSupport,Y=D=D||(L=document.head,Q=document.body,U=B.vamtigerBrowserSupportScript,V=L.querySelector(U)||Q.querySelector(U),G=new URL(V.src),H=G.pathname,$=G.origin,W=H.split(J).filter(function(t){return t.trim()}).filter(function(t,e,r){return e<r.length-1}),z=[$].concat(W).join(J),D=z,z),Z=[["https://cdn.jsdelivr.net/npm/aws-sdk@latest/dist/aws-sdk.min.js",Y+"/vamtiger-contact-polyfill-support.js"],[Y+"/vamtiger-contact-polyfill.js"]],tt={supportFile:"vamtiger-contact-support",supported:!!K,chain:!0};return tt.supported||(tt.polyfillChain=Z),X(tt),t.supportFile="vamtiger-contact-support",t.polyfillChain=Z,t}({});
//# sourceMappingURL=vamtiger-contact-support.js.map
