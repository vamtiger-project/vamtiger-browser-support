var index=function(t){"use strict";var e,r,o,n,i,a,s,u,c,l,p,f,d,m,b,y,h,v,g,w;!function(t){var e="object"==typeof global?global:"object"==typeof self?self:"object"==typeof this?this:{};function r(t,r){return t!==e&&("function"==typeof Object.create?Object.defineProperty(t,"__esModule",{value:!0}):t.__esModule=!0),function(e,o){return t[e]=r?r(e,o):o}}"function"==typeof define&&define.amd?define("tslib",["exports"],function(o){t(r(e,r(o)))}):"object"==typeof module&&"object"==typeof module.exports?t(r(e,r(module.exports))):t(r(e))}(function(t){var j=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};e=function(t,e){function r(){this.constructor=t}j(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)},r=Object.assign||function(t){for(var e,r=1,o=arguments.length;r<o;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},o=function(t,e){var r={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(r[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(t);n<o.length;n++)e.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(t,o[n])&&(r[o[n]]=t[o[n]])}return r},n=function(t,e,r,o){var n,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(i<3?n(a):i>3?n(e,r,a):n(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},i=function(t,e){return function(r,o){e(r,o,t)}},a=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(t,e,r,o){return new(r||(r=Promise))(function(n,i){function a(t){try{u(o.next(t))}catch(t){i(t)}}function s(t){try{u(o.throw(t))}catch(t){i(t)}}function u(t){t.done?n(t.value):new r(function(e){e(t.value)}).then(a,s)}u((o=o.apply(t,e||[])).next())})},u=function(t,e){var r,o,n,i,a={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,o&&(n=2&i[0]?o.return:i[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,i[1])).done)return n;switch(o=0,n&&(i=[2&i[0],n.value]),i[0]){case 0:case 1:n=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(n=(n=a.trys).length>0&&n[n.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!n||i[1]>n[0]&&i[1]<n[3])){a.label=i[1];break}if(6===i[0]&&a.label<n[1]){a.label=n[1],n=i;break}if(n&&a.label<n[2]){a.label=n[2],a.ops.push(i);break}n[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],o=0}finally{r=n=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},c=function(t,e){for(var r in t)e.hasOwnProperty(r)||(e[r]=t[r])},l=function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],r=0;return e?e.call(t):{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}}},p=function(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var o,n,i=r.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(o=i.next()).done;)a.push(o.value)}catch(t){n={error:t}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}return a},f=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(p(arguments[e]));return t},d=function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var o=Array(t),n=0;for(e=0;e<r;e++)for(var i=arguments[e],a=0,s=i.length;a<s;a++,n++)o[n]=i[a];return o},m=function(t){return this instanceof m?(this.v=t,this):new m(t)},b=function(t,e,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o,n=r.apply(t,e||[]),i=[];return o={},a("next"),a("throw"),a("return"),o[Symbol.asyncIterator]=function(){return this},o;function a(t){n[t]&&(o[t]=function(e){return new Promise(function(r,o){i.push([t,e,r,o])>1||s(t,e)})})}function s(t,e){try{(r=n[t](e)).value instanceof m?Promise.resolve(r.value.v).then(u,c):l(i[0][2],r)}catch(t){l(i[0][3],t)}var r}function u(t){s("next",t)}function c(t){s("throw",t)}function l(t,e){t(e),i.shift(),i.length&&s(i[0][0],i[0][1])}},y=function(t){var e,r;return e={},o("next"),o("throw",function(t){throw t}),o("return"),e[Symbol.iterator]=function(){return this},e;function o(o,n){e[o]=t[o]?function(e){return(r=!r)?{value:m(t[o](e)),done:"return"===o}:n?n(e):e}:n}},h=function(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,r=t[Symbol.asyncIterator];return r?r.call(t):(t="function"==typeof l?l(t):t[Symbol.iterator](),e={},o("next"),o("throw"),o("return"),e[Symbol.asyncIterator]=function(){return this},e);function o(r){e[r]=t[r]&&function(e){return new Promise(function(o,n){(function(t,e,r,o){Promise.resolve(o).then(function(e){t({value:e,done:r})},e)})(o,n,(e=t[r](e)).done,e.value)})}}},v=function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},g=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e},w=function(t){return t&&t.__esModule?t:{default:t}},t("__extends",e),t("__assign",r),t("__rest",o),t("__decorate",n),t("__param",i),t("__metadata",a),t("__awaiter",s),t("__generator",u),t("__exportStar",c),t("__values",l),t("__read",p),t("__spread",f),t("__spreadArrays",d),t("__await",m),t("__asyncGenerator",b),t("__asyncDelegator",y),t("__asyncValues",h),t("__makeTemplateObject",v),t("__importStar",g),t("__importDefault",w)});var j=Object.freeze({});const _=Object.assign||function(t){for(var e,r=1;r<arguments.length;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t};var S,O,x,P,M,F,B,A,k,I,T,C,E,N,R,J,D;!function(t){t.nothing="",t.build="build",t.vamtiger="vamtiger",t.slash="/",t.jsExtension=".js",t.bashAnd="&&",t.arn="arn",t.sns="sns",t.aws="aws",t.colon=":",t.hyphen="-",t["vamtiger-contact"]="vamtiger-contact",t["5e5164d3"]="5e5164d3",t.cc71="cc71",t["4e5b"]="4e5b",t["9c34"]="9c34",t["042fe735f31c"]="042fe735f31c"}(S||(S={})),function(t){t.usWest2="us-west-2"}(O||(O={})),function(t){t.meta="meta",t.script="script"}(x||(x={})),function(t){t.vamtigerBrowserSupport="vamtiger-browser-support"}(P||(P={})),function(t){t.id="id"}(M||(M={})),function(t){t.baseUrl="baseUrl",t.name="name",t.url="url",t.primary="primary",t.loaded="loaded",t.supported="supported",t.unsupported="unsupported",t.error="error",t.polyfill="polyfill",t.loadCritical="loadCritical",t.load="load",t.wait="wait"}(F||(F={})),function(t){t.botSupport="data-bot-support",t.es2015Support="data-es2015-support",t.elementQuerySupport="data-element-query-support",t.webComponentSupport="data-web-component-support",t.fetchSupport="data-fetch-support",t.awsSupport="data-aws-support",t.contactSupport="data-contact-support"}(B||(B={})),function(t){t.vamtigerBrowserSupportScript='script[src*="vamtiger-browser-support"]',t.vamtigerBrowserMethodJsonJs='[src$="vamtiger-browser-method.js.json.js"]',t.vamtigerBrowserMethodJson='[data-name$="vamtiger-browser-method.js.json"]'}(A||(A={})),function(t){t.vamtigerBrowserMethod="https://vamtiger-project.github.io/vamtiger-browser-method/build/vamtiger-browser-method.js",t.vamtigerBrowserMethodJsonJs="https://vamtiger-project.github.io/vamtiger-browser-method/build/vamtiger-browser-method.js.json.js",t.tsLib="https://cdn.jsdelivr.net/npm/tslib@latest"}(k||(k={})),function(t){t.notBrowser="This is not a web browser",t.noFormForSelector="No Form for Selector",t.noFieldInFormForSelector="No Field in Form for Selector",t.objectAssignNotSupported="Object.assign is not supported",t.arrayFromNotSupported="Array.from is not supported",t.destructringAssignmentNotSupported="Destructuring Assignment is not supported",t.arrowFunctionsNotSupported="Arrow functions are not supported"}(I||(I={})),function(t){t.bundleSource="bundle-source"}(T||(T={})),function(t){t.primary="primary",t.secondary="secondary"}(C||(C={})),function(t){t.loadCritical="loadCritical",t.load="load"}(E||(E={})),function(t){t.innerHTML="innerHTML"}(N||(N={})),function(t){t.touchSupport="vamtigerTouchSupport",t.bot="vamtigerBot",t.legacy="vamtigerLegacy",t.textMode="vamtigerTextMode"}(R||(R={})),function(t){t.elementQuery="vamtiger-element-query-support"}(J||(J={})),function(t){t.elementQuery="https://cdn.jsdelivr.net/npm/eqcss@latest/EQCSS.min.js"}(D||(D={}));_({},S,{365080655670:365080655670}),k.vamtigerBrowserMethod;Object.keys(j).some(function(t){return!self[t]})&&Object.assign(window,j);var L=/bot|google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex|googlebot|google-structured-data-testing-tool|bingbot|linkedinbot|mediapartners-google/i;var Q,q=window.VamtigerBrowserSupport,G=[["https://cdn.jsdelivr.net/npm/es5-shim@latest/es5-shim.min.js","https://cdn.jsdelivr.net/npm/es6-shim@latest/es6-shim.min.js","https://cdn.jsdelivr.net/npm/es6-object-assign/dist/object-assign.min.js"],["https://cdn.jsdelivr.net/npm/babel-polyfill@latest/dist/polyfill.min.js","https://cdn.jsdelivr.net/npm/@babel/standalone@latest/babel.min.js"]],H={supportFile:"vamtiger-bot-support",supported:(Q=navigator.userAgent,!(navigator.webdriver||navigator&&Boolean(Q.match(L)))),chain:!0};return H.supported||(H.polyfillChain=G),q(H),t.supportFile="vamtiger-bot-support",t.polyfillChain=G,t}({});
//# sourceMappingURL=vamtiger-bot-support.js.map
