!function(){"use strict";var __extends,__assign,__rest,__decorate,__param,__metadata,__awaiter,__generator$1,__exportStar,__values,__read,__spread,__spreadArrays,__await,__asyncGenerator,__asyncDelegator,__asyncValues,__makeTemplateObject,__importStar,__importDefault;!function(t){var e="object"==typeof global?global:"object"==typeof self?self:"object"==typeof this?this:{};function r(t,r){return t!==e&&("function"==typeof Object.create?Object.defineProperty(t,"__esModule",{value:!0}):t.__esModule=!0),function(e,n){return t[e]=r?r(e,n):n}}"function"==typeof define&&define.amd?define("tslib",["exports"],function(n){t(r(e,r(n)))}):"object"==typeof module&&"object"==typeof module.exports?t(r(e,r(module.exports))):t(r(e))}(function(t){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};__extends=function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)},__assign=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},__rest=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r},__decorate=function(t,e,r,n){var o,a=arguments.length,i=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(i=(a<3?o(i):a>3?o(e,r,i):o(e,r))||i);return a>3&&i&&Object.defineProperty(e,r,i),i},__param=function(t,e){return function(r,n){e(r,n,t)}},__metadata=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},__awaiter=function(t,e,r,n){return new(r||(r=Promise))(function(o,a){function i(t){try{p(n.next(t))}catch(t){a(t)}}function s(t){try{p(n.throw(t))}catch(t){a(t)}}function p(t){t.done?o(t.value):new r(function(e){e(t.value)}).then(i,s)}p((n=n.apply(t,e||[])).next())})},__generator$1=function(t,e){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=e.call(t,i)}catch(t){a=[6,t],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}},__exportStar=function(t,e){for(var r in t)e.hasOwnProperty(r)||(e[r]=t[r])},__values=function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],r=0;return e?e.call(t):{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}}},__read=function(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,o,a=r.call(t),i=[];try{for(;(void 0===e||e-- >0)&&!(n=a.next()).done;)i.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return i},__spread=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(__read(arguments[e]));return t},__spreadArrays=function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var n=Array(t),o=0;for(e=0;e<r;e++)for(var a=arguments[e],i=0,s=a.length;i<s;i++,o++)n[o]=a[i];return n},__await=function(t){return this instanceof __await?(this.v=t,this):new __await(t)},__asyncGenerator=function(t,e,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(t,e||[]),a=[];return n={},i("next"),i("throw"),i("return"),n[Symbol.asyncIterator]=function(){return this},n;function i(t){o[t]&&(n[t]=function(e){return new Promise(function(r,n){a.push([t,e,r,n])>1||s(t,e)})})}function s(t,e){try{(r=o[t](e)).value instanceof __await?Promise.resolve(r.value.v).then(p,l):u(a[0][2],r)}catch(t){u(a[0][3],t)}var r}function p(t){s("next",t)}function l(t){s("throw",t)}function u(t,e){t(e),a.shift(),a.length&&s(a[0][0],a[0][1])}},__asyncDelegator=function(t){var e,r;return e={},n("next"),n("throw",function(t){throw t}),n("return"),e[Symbol.iterator]=function(){return this},e;function n(n,o){e[n]=t[n]?function(e){return(r=!r)?{value:__await(t[n](e)),done:"return"===n}:o?o(e):e}:o}},__asyncValues=function(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,r=t[Symbol.asyncIterator];return r?r.call(t):(t="function"==typeof __values?__values(t):t[Symbol.iterator](),e={},n("next"),n("throw"),n("return"),e[Symbol.asyncIterator]=function(){return this},e);function n(r){e[r]=t[r]&&function(e){return new Promise(function(n,o){(function(t,e,r,n){Promise.resolve(n).then(function(e){t({value:e,done:r})},e)})(n,o,(e=t[r](e)).done,e.value)})}}},__makeTemplateObject=function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},__importStar=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e},__importDefault=function(t){return t&&t.__esModule?t:{default:t}},t("__extends",__extends),t("__assign",__assign),t("__rest",__rest),t("__decorate",__decorate),t("__param",__param),t("__metadata",__metadata),t("__awaiter",__awaiter),t("__generator",__generator$1),t("__exportStar",__exportStar),t("__values",__values),t("__read",__read),t("__spread",__spread),t("__spreadArrays",__spreadArrays),t("__await",__await),t("__asyncGenerator",__asyncGenerator),t("__asyncDelegator",__asyncDelegator),t("__asyncValues",__asyncValues),t("__makeTemplateObject",__makeTemplateObject),t("__importStar",__importStar),t("__importDefault",__importDefault)});const __assign$1=Object.assign||function(t){for(var e,r=1;r<arguments.length;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t};function __awaiter$1(t,e,r,n){return new(r||(r=Promise))(function(o,a){function i(t){try{p(n.next(t))}catch(t){a(t)}}function s(t){try{p(n.throw(t))}catch(t){a(t)}}function p(t){t.done?o(t.value):new r(function(e){e(t.value)}).then(i,s)}p((n=n.apply(t,e)).next())})}var StringConstant,Region,ElmentName,ElementId,ElementAttribute,MetaElementAttribute,MetaElementBrowserSupportAttribute,Selector,ScriptUrl,ErrorMessage,NpmScript,SupportType,LoadOnComplete,VamtigerFormDataSupportFormFieldValue,DocumentDataAttribute,SupportFile,Polyfill;!function(t){t.nothing="",t.build="build",t.vamtiger="vamtiger",t.slash="/",t.jsExtension=".js",t.bashAnd="&&",t.arn="arn",t.sns="sns",t.aws="aws",t.colon=":",t.hyphen="-",t["vamtiger-contact"]="vamtiger-contact",t["5e5164d3"]="5e5164d3",t.cc71="cc71",t["4e5b"]="4e5b",t["9c34"]="9c34",t["042fe735f31c"]="042fe735f31c"}(StringConstant||(StringConstant={})),function(t){t.usWest2="us-west-2"}(Region||(Region={})),function(t){t.meta="meta",t.script="script"}(ElmentName||(ElmentName={})),function(t){t.vamtigerBrowserSupport="vamtiger-browser-support"}(ElementId||(ElementId={})),function(t){t.id="id"}(ElementAttribute||(ElementAttribute={})),function(t){t.baseUrl="baseUrl",t.name="name",t.url="url",t.primary="primary",t.loaded="loaded",t.supported="supported",t.unsupported="unsupported",t.error="error",t.polyfill="polyfill",t.loadCritical="loadCritical",t.load="load",t.wait="wait"}(MetaElementAttribute||(MetaElementAttribute={})),function(t){t.botSupport="data-bot-support",t.es2015Support="data-es2015-support",t.elementQuerySupport="data-element-query-support",t.webComponentSupport="data-web-component-support",t.fetchSupport="data-fetch-support",t.awsSupport="data-aws-support",t.contactSupport="data-contact-support"}(MetaElementBrowserSupportAttribute||(MetaElementBrowserSupportAttribute={})),function(t){t.vamtigerBrowserSupportScript='script[src*="vamtiger-browser-support"]',t.vamtigerBrowserMethodJsonJs='[src$="vamtiger-browser-method.js.json.js"]',t.vamtigerBrowserMethodJson='[data-name$="vamtiger-browser-method.js.json"]'}(Selector||(Selector={})),function(t){t.vamtigerBrowserMethod="https://vamtiger-project.github.io/vamtiger-browser-method/build/vamtiger-browser-method.js",t.vamtigerBrowserMethodJsonJs="https://vamtiger-project.github.io/vamtiger-browser-method/build/vamtiger-browser-method.js.json.js",t.tsLib="https://cdn.jsdelivr.net/npm/tslib@latest"}(ScriptUrl||(ScriptUrl={})),function(t){t.notBrowser="This is not a web browser",t.noFormForSelector="No Form for Selector",t.noFieldInFormForSelector="No Field in Form for Selector",t.objectAssignNotSupported="Object.assign is not supported",t.arrayFromNotSupported="Array.from is not supported",t.destructringAssignmentNotSupported="Destructuring Assignment is not supported",t.arrowFunctionsNotSupported="Arrow functions are not supported"}(ErrorMessage||(ErrorMessage={})),function(t){t.bundleSource="bundle-source"}(NpmScript||(NpmScript={})),function(t){t.primary="primary",t.secondary="secondary"}(SupportType||(SupportType={})),function(t){t.loadCritical="loadCritical",t.load="load"}(LoadOnComplete||(LoadOnComplete={})),function(t){t.innerHTML="innerHTML"}(VamtigerFormDataSupportFormFieldValue||(VamtigerFormDataSupportFormFieldValue={})),function(t){t.touchSupport="vamtigerTouchSupport",t.bot="vamtigerBot",t.legacy="vamtigerLegacy",t.textMode="vamtigerTextMode"}(DocumentDataAttribute||(DocumentDataAttribute={})),function(t){t.elementQuery="vamtiger-element-query-support"}(SupportFile||(SupportFile={})),function(t){t.elementQuery="https://cdn.jsdelivr.net/npm/eqcss@latest/EQCSS.min.js"}(Polyfill||(Polyfill={}));var stringConstant=__assign$1({},StringConstant,{365080655670:365080655670}),selector={vamtigerBrowserMethod:'script[src="'+ScriptUrl.vamtigerBrowserMethod+'"]'},slash=StringConstant.slash,nothing=StringConstant.nothing,rootPath;function generateRootPath(){var t=document.head,e=document.body,r=Selector.vamtigerBrowserSupportScript,n=t.querySelector(r)||e.querySelector(r),o=new URL(n.src),a=o.pathname,i=o.origin,s=a.split(slash).filter(function(t){return t.trim()}).filter(function(t,e,r){return e<r.length-1}),p=[i].concat(s).join(slash);return rootPath=p,p}function getRootPath(){return rootPath=rootPath||generateRootPath()}var rootPath$1=getRootPath(),supportFile="vamtiger-web-component-support",polyfill=rootPath$1+"/vamtiger-web-component-polyfill.js",VamtigerBrowserSupport=window.VamtigerBrowserSupport,params={supportFile:supportFile},webComponent='\nconst shadowDomTemplate = document.createElement(\'template\');\n\nshadowDomTemplate.innerHTML = `\n<style>\n    .container {\n        border: 1px solid red;\n    }\n</style>\n\n<div class="container">\n    <slot name="test-slot-1"></slot>\n    <span>\n            VAMTIGER Browser Support\n    </span>\n    <slot name="test-slot-2"></slot>\n</div>\n`\n\nclass VamtigerWebComponentSupport extends HTMLElement {\n    static get observedAttributes() {\n        const observedAttributes = [\n            \'data-'+supportFile+"'\n        ];\n\n        return observedAttributes;\n    }\n\n    constructor() {\n        super();\n        const template = shadowDomTemplate.content.cloneNode(true);\n        const shadowRoot = this.attachShadow({mode: 'open'});\n\n        shadowRoot.appendChild(template);\n    }\n\n    connectedCallback() {\n        this.dataset['vamtigerWebComponentSupportConnectedCallback'] = '';\n    }\n\n    disconnectedCallback() {\n        this.dataset['vamtigerWebComponentSupportDisconnectedCallback'] = '';\n    }\n\n    attributeChangedCallback(attrName, oldValue, newValue) {\n        this.dataset['vamtigerWebComponentSupportOldValue'] = oldValue;\n        this.dataset['vamtigerWebComponentSupportNewValue'] = newValue;\n\n        this.dataset['vamtigerWebComponentSupportAttributeChangedCallback'] = '';\n    }\n}\n\ncustomElements.define('"+supportFile+"', VamtigerWebComponentSupport);\n";function test(){var t=document.body,e=document.createElement(supportFile);return e.innerHTML='\n        <span slot="test-slot-1">\n            Test Slot 1\n        </span>\n        <span>\n            No slot defined\n        </span>\n\n        <span slot="test-slot-2">\n            Test Slot 2\n        </span>\n    ',e.dataset.vamtigerWebComponentSupport="old-value",t.appendChild(e),e.dataset.vamtigerWebComponentSupport="new-value",t.removeChild(e),e.dataset.hasOwnProperty("vamtigerWebComponentSupportConnectedCallback")&&e.dataset.hasOwnProperty("vamtigerWebComponentSupportDisconnectedCallback")&&"old-value"===e.dataset.vamtigerWebComponentSupportOldValue&&e.dataset.vamtigerWebComponentSupportNewValue===e.dataset.vamtigerWebComponentSupport&&2===e.shadowRoot.children.length&&window.hasOwnProperty("HTMLTemplateElement")&&window.hasOwnProperty("HTMLSlotElement")&&!!HTMLElement.prototype.attachShadow}try{eval(webComponent),params.supported=test()}catch(t){params.error=t}params.supported||(params.polyfill=polyfill,params.wait=!0),VamtigerBrowserSupport(params);var params$1={supportFile:supportFile},polyfill$1="https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs/webcomponents-bundle.js";function main(){return __awaiter$1(this,void 0,void 0,function(){var t;return __generator(this,function(e){switch(e.label){case 0:return t=window.VamtigerBrowserMethod,[4,(0,t.loadScript)({src:polyfill$1})];case 1:return e.sent(),[2]}})})}function handleWebComponentsReady(){var t=window.VamtigerBrowserSupport;removeEventListener("WebComponentsReady",handleWebComponentsReady),t(params$1)}function handleError(t){var e=window.VamtigerBrowserSupport;params$1.error=t.message,e(params$1)}addEventListener("WebComponentsReady",handleWebComponentsReady),main().catch(handleError)}();
//# sourceMappingURL=vamtiger-web-component-polyfill.js.map
