!function(){"use strict";var t,e,r,n,o,i,a,c,u,s,l,f,p,d,y,m,b,h,v,w;!function(t){var e="object"==typeof global?global:"object"==typeof self?self:"object"==typeof this?this:{};function r(t,r){return t!==e&&("function"==typeof Object.create?Object.defineProperty(t,"__esModule",{value:!0}):t.__esModule=!0),function(e,n){return t[e]=r?r(e,n):n}}"function"==typeof define&&define.amd?define("tslib",["exports"],function(n){t(r(e,r(n)))}):"object"==typeof module&&"object"==typeof module.exports?t(r(e,r(module.exports))):t(r(e))}(function(g){var _=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};t=function(t,e){function r(){this.constructor=t}_(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)},e=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},r=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r},n=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},o=function(t,e){return function(r,n){e(r,n,t)}},i=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(t,e,r,n){return new(r||(r=Promise))(function(o,i){function a(t){try{u(n.next(t))}catch(t){i(t)}}function c(t){try{u(n.throw(t))}catch(t){i(t)}}function u(t){t.done?o(t.value):new r(function(e){e(t.value)}).then(a,c)}u((n=n.apply(t,e||[])).next())})},c=function(t,e){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},u=function(t,e){for(var r in t)e.hasOwnProperty(r)||(e[r]=t[r])},s=function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],r=0;return e?e.call(t):{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}}},l=function(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,o,i=r.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a},f=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(l(arguments[e]));return t},p=function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var n=Array(t),o=0;for(e=0;e<r;e++)for(var i=arguments[e],a=0,c=i.length;a<c;a++,o++)n[o]=i[a];return n},d=function(t){return this instanceof d?(this.v=t,this):new d(t)},y=function(t,e,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(t,e||[]),i=[];return n={},a("next"),a("throw"),a("return"),n[Symbol.asyncIterator]=function(){return this},n;function a(t){o[t]&&(n[t]=function(e){return new Promise(function(r,n){i.push([t,e,r,n])>1||c(t,e)})})}function c(t,e){try{(r=o[t](e)).value instanceof d?Promise.resolve(r.value.v).then(u,s):l(i[0][2],r)}catch(t){l(i[0][3],t)}var r}function u(t){c("next",t)}function s(t){c("throw",t)}function l(t,e){t(e),i.shift(),i.length&&c(i[0][0],i[0][1])}},m=function(t){var e,r;return e={},n("next"),n("throw",function(t){throw t}),n("return"),e[Symbol.iterator]=function(){return this},e;function n(n,o){e[n]=t[n]?function(e){return(r=!r)?{value:d(t[n](e)),done:"return"===n}:o?o(e):e}:o}},b=function(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,r=t[Symbol.asyncIterator];return r?r.call(t):(t="function"==typeof s?s(t):t[Symbol.iterator](),e={},n("next"),n("throw"),n("return"),e[Symbol.asyncIterator]=function(){return this},e);function n(r){e[r]=t[r]&&function(e){return new Promise(function(n,o){(function(t,e,r,n){Promise.resolve(n).then(function(e){t({value:e,done:r})},e)})(n,o,(e=t[r](e)).done,e.value)})}}},h=function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},v=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e},w=function(t){return t&&t.__esModule?t:{default:t}},g("__extends",t),g("__assign",e),g("__rest",r),g("__decorate",n),g("__param",o),g("__metadata",i),g("__awaiter",a),g("__generator",c),g("__exportStar",u),g("__values",s),g("__read",l),g("__spread",f),g("__spreadArrays",p),g("__await",d),g("__asyncGenerator",y),g("__asyncDelegator",m),g("__asyncValues",b),g("__makeTemplateObject",h),g("__importStar",v),g("__importDefault",w)});const g=Object.assign||function(t){for(var e,r=1;r<arguments.length;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t};var _,j,S,O,x,P,M,I,A,C,F,T,B,E,N,k,J;!function(t){t.nothing="",t.build="build",t.vamtiger="vamtiger",t.slash="/",t.jsExtension=".js",t.bashAnd="&&",t.arn="arn",t.sns="sns",t.aws="aws",t.colon=":",t.hyphen="-",t["vamtiger-contact"]="vamtiger-contact",t["5e5164d3"]="5e5164d3",t.cc71="cc71",t["4e5b"]="4e5b",t["9c34"]="9c34",t["042fe735f31c"]="042fe735f31c"}(_||(_={})),function(t){t.usWest2="us-west-2"}(j||(j={})),function(t){t.meta="meta",t.script="script"}(S||(S={})),function(t){t.vamtigerBrowserSupport="vamtiger-browser-support"}(O||(O={})),function(t){t.id="id"}(x||(x={})),function(t){t.baseUrl="baseUrl",t.name="name",t.url="url",t.primary="primary",t.loaded="loaded",t.supported="supported",t.unsupported="unsupported",t.error="error",t.polyfill="polyfill",t.loadCritical="loadCritical",t.load="load",t.wait="wait"}(P||(P={})),function(t){t.botSupport="data-bot-support",t.es2015Support="data-es2015-support",t.elementQuerySupport="data-element-query-support",t.webComponentSupport="data-web-component-support",t.fetchSupport="data-fetch-support",t.awsSupport="data-aws-support",t.contactSupport="data-contact-support"}(M||(M={})),function(t){t.vamtigerBrowserSupportScript='script[src*="vamtiger-browser-support"]',t.vamtigerBrowserMethodJsonJs='[src$="vamtiger-browser-method.js.json.js"]',t.vamtigerBrowserMethodJson='[data-name$="vamtiger-browser-method.js.json"]'}(I||(I={})),function(t){t.vamtigerBrowserMethod="https://cdn.jsdelivr.net/npm/vamtiger-browser-method@0.107.19/build/vamtiger-browser-method.js",t.vamtigerBrowserMethodJsonJs="https://cdn.jsdelivr.net/npm/vamtiger-browser-method@0.107.19/build/vamtiger-browser-method.js.json.js",t.tsLib="https://cdn.jsdelivr.net/npm/tslib@latest"}(A||(A={})),function(t){t.notBrowser="This is not a web browser",t.noFormForSelector="No Form for Selector",t.noFieldInFormForSelector="No Field in Form for Selector",t.objectAssignNotSupported="Object.assign is not supported",t.arrayFromNotSupported="Array.from is not supported",t.destructringAssignmentNotSupported="Destructuring Assignment is not supported",t.arrowFunctionsNotSupported="Arrow functions are not supported"}(C||(C={})),function(t){t.bundleSource="bundle-source"}(F||(F={})),function(t){t.primary="primary",t.secondary="secondary"}(T||(T={})),function(t){t.loadCritical="loadCritical",t.load="load"}(B||(B={})),function(t){t.innerHTML="innerHTML"}(E||(E={})),function(t){t.touchSupport="vamtigerTouchSupport",t.bot="vamtigerBot",t.legacy="vamtigerLegacy",t.textMode="vamtigerTextMode"}(N||(N={})),function(t){t.elementQuery="vamtiger-element-query-support"}(k||(k={})),function(t){t.elementQuery="https://cdn.jsdelivr.net/npm/eqcss@latest/EQCSS.min.js"}(J||(J={}));var R=g({},_,{365080655670:365080655670}),V=(A.vamtigerBrowserMethod,_.vamtiger),D=_.jsExtension,L=_.nothing,Q=/^data/,q=Object.keys(M),W=g({},M),z=(new Set([T.primary,T.secondary]),new Set([]),P.supported,P.unsupported,function(){var t=R.arn,e=R.aws,r=R.sns,n=R[365080655670],o=R["vamtiger-contact"],i=R.colon,a=R["5e5164d3"],c=R.cc71,u=R["4e5b"],s=R["9c34"],l=R["042fe735f31c"],f=R.hyphen,p=j.usWest2,d=[t,e,r,p,n,o].join(i),y=[p,[a,c,u,s,l].join(f)].join(i);return{z:d.split(L),x:y.split(L),y:p.split(L)}}());q.forEach(function(t){return W[t]=W[t].replace(Q,V)+D});var G=window.AWS,H=window._VamtigerContact_,U=window.VamtigerContact,$=G.config,K=G.SNS,X=G.CognitoIdentityCredentials,Y=(location.origin,location.href),Z=JSON.stringify,tt=H(z),et=tt.x,rt=tt.y,nt=tt.z,ot="Vamtiger contact: "+Y,it=rt,at=new X({IdentityPoolId:et});G.config=g({},$,{region:it,credentials:at});var ct=new K;U||(window.VamtigerContact=function(t){return new Promise(function(e,r){return function(t,e,r){var n=t.subject,o=t.template,i={Message:Z({subject:n,template:o,origin:Y}),Subject:ot,TopicArn:nt};ct.publish(i,function(t,n){return t?r(t):e(n)})}(t,e,r)})})}();
//# sourceMappingURL=vamtiger-contact-polyfill.js.map
