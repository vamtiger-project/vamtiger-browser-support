!function(){"use strict";var __extends,__assign,__rest,__decorate,__param,__metadata,__awaiter,__generator$1,__exportStar,__values,__read,__spread,__spreadArrays,__await,__asyncGenerator,__asyncDelegator,__asyncValues,__makeTemplateObject,__importStar,__importDefault;!function(t){var e="object"==typeof global?global:"object"==typeof self?self:"object"==typeof this?this:{};function r(t,r){return t!==e&&("function"==typeof Object.create?Object.defineProperty(t,"__esModule",{value:!0}):t.__esModule=!0),function(e,n){return t[e]=r?r(e,n):n}}"function"==typeof define&&define.amd?define("tslib",["exports"],function(n){t(r(e,r(n)))}):"object"==typeof module&&"object"==typeof module.exports?t(r(e,r(module.exports))):t(r(e))}(function(t){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};__extends=function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)},__assign=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},__rest=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r},__decorate=function(t,e,r,n){var o,a=arguments.length,i=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(i=(a<3?o(i):a>3?o(e,r,i):o(e,r))||i);return a>3&&i&&Object.defineProperty(e,r,i),i},__param=function(t,e){return function(r,n){e(r,n,t)}},__metadata=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},__awaiter=function(t,e,r,n){return new(r||(r=Promise))(function(o,a){function i(t){try{u(n.next(t))}catch(t){a(t)}}function s(t){try{u(n.throw(t))}catch(t){a(t)}}function u(t){t.done?o(t.value):new r(function(e){e(t.value)}).then(i,s)}u((n=n.apply(t,e||[])).next())})},__generator$1=function(t,e){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=e.call(t,i)}catch(t){a=[6,t],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}},__exportStar=function(t,e){for(var r in t)e.hasOwnProperty(r)||(e[r]=t[r])},__values=function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],r=0;return e?e.call(t):{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}}},__read=function(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,o,a=r.call(t),i=[];try{for(;(void 0===e||e-- >0)&&!(n=a.next()).done;)i.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return i},__spread=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(__read(arguments[e]));return t},__spreadArrays=function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var n=Array(t),o=0;for(e=0;e<r;e++)for(var a=arguments[e],i=0,s=a.length;i<s;i++,o++)n[o]=a[i];return n},__await=function(t){return this instanceof __await?(this.v=t,this):new __await(t)},__asyncGenerator=function(t,e,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(t,e||[]),a=[];return n={},i("next"),i("throw"),i("return"),n[Symbol.asyncIterator]=function(){return this},n;function i(t){o[t]&&(n[t]=function(e){return new Promise(function(r,n){a.push([t,e,r,n])>1||s(t,e)})})}function s(t,e){try{(r=o[t](e)).value instanceof __await?Promise.resolve(r.value.v).then(u,p):c(a[0][2],r)}catch(t){c(a[0][3],t)}var r}function u(t){s("next",t)}function p(t){s("throw",t)}function c(t,e){t(e),a.shift(),a.length&&s(a[0][0],a[0][1])}},__asyncDelegator=function(t){var e,r;return e={},n("next"),n("throw",function(t){throw t}),n("return"),e[Symbol.iterator]=function(){return this},e;function n(n,o){e[n]=t[n]?function(e){return(r=!r)?{value:__await(t[n](e)),done:"return"===n}:o?o(e):e}:o}},__asyncValues=function(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,r=t[Symbol.asyncIterator];return r?r.call(t):(t="function"==typeof __values?__values(t):t[Symbol.iterator](),e={},n("next"),n("throw"),n("return"),e[Symbol.asyncIterator]=function(){return this},e);function n(r){e[r]=t[r]&&function(e){return new Promise(function(n,o){(function(t,e,r,n){Promise.resolve(n).then(function(e){t({value:e,done:r})},e)})(n,o,(e=t[r](e)).done,e.value)})}}},__makeTemplateObject=function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},__importStar=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e},__importDefault=function(t){return t&&t.__esModule?t:{default:t}},t("__extends",__extends),t("__assign",__assign),t("__rest",__rest),t("__decorate",__decorate),t("__param",__param),t("__metadata",__metadata),t("__awaiter",__awaiter),t("__generator",__generator$1),t("__exportStar",__exportStar),t("__values",__values),t("__read",__read),t("__spread",__spread),t("__spreadArrays",__spreadArrays),t("__await",__await),t("__asyncGenerator",__asyncGenerator),t("__asyncDelegator",__asyncDelegator),t("__asyncValues",__asyncValues),t("__makeTemplateObject",__makeTemplateObject),t("__importStar",__importStar),t("__importDefault",__importDefault)});const __assign$1=Object.assign||function(t){for(var e,r=1;r<arguments.length;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t};function __awaiter$1(t,e,r,n){return new(r||(r=Promise))(function(o,a){function i(t){try{u(n.next(t))}catch(t){a(t)}}function s(t){try{u(n.throw(t))}catch(t){a(t)}}function u(t){t.done?o(t.value):new r(function(e){e(t.value)}).then(i,s)}u((n=n.apply(t,e)).next())})}var StringConstant,Region,ElmentName,ElementId,ElementAttribute,MetaElementAttribute,MetaElementBrowserSupportAttribute,Selector,ScriptUrl,ErrorMessage,NpmScript,SupportType,LoadOnComplete,VamtigerFormDataSupportFormFieldValue,DocumentDataAttribute,SupportFile,Polyfill;!function(t){t.nothing="",t.build="build",t.vamtiger="vamtiger",t.slash="/",t.jsExtension=".js",t.bashAnd="&&",t.arn="arn",t.sns="sns",t.aws="aws",t.colon=":",t.hyphen="-",t["vamtiger-contact"]="vamtiger-contact",t["5e5164d3"]="5e5164d3",t.cc71="cc71",t["4e5b"]="4e5b",t["9c34"]="9c34",t["042fe735f31c"]="042fe735f31c"}(StringConstant||(StringConstant={})),function(t){t.usWest2="us-west-2"}(Region||(Region={})),function(t){t.meta="meta",t.script="script"}(ElmentName||(ElmentName={})),function(t){t.vamtigerBrowserSupport="vamtiger-browser-support"}(ElementId||(ElementId={})),function(t){t.id="id"}(ElementAttribute||(ElementAttribute={})),function(t){t.baseUrl="baseUrl",t.name="name",t.url="url",t.primary="primary",t.loaded="loaded",t.supported="supported",t.unsupported="unsupported",t.error="error",t.polyfill="polyfill",t.loadCritical="loadCritical",t.load="load",t.wait="wait"}(MetaElementAttribute||(MetaElementAttribute={})),function(t){t.botSupport="data-bot-support",t.es2015Support="data-es2015-support",t.elementQuerySupport="data-element-query-support",t.webComponentSupport="data-web-component-support",t.fetchSupport="data-fetch-support",t.awsSupport="data-aws-support",t.contactSupport="data-contact-support"}(MetaElementBrowserSupportAttribute||(MetaElementBrowserSupportAttribute={})),function(t){t.vamtigerBrowserSupportScript='script[src*="vamtiger-browser-support"]',t.vamtigerBrowserMethodJsonJs='[src$="vamtiger-browser-method.js.json.js"]',t.vamtigerBrowserMethodJson='[data-name$="vamtiger-browser-method.js.json"]'}(Selector||(Selector={})),function(t){t.vamtigerBrowserMethod="https://vamtiger-project.github.io/vamtiger-browser-method/build/vamtiger-browser-method.js",t.vamtigerBrowserMethodJsonJs="https://vamtiger-project.github.io/vamtiger-browser-method/build/vamtiger-browser-method.js.json.js"}(ScriptUrl||(ScriptUrl={})),function(t){t.notBrowser="This is not a web browser",t.noFormForSelector="No Form for Selector",t.noFieldInFormForSelector="No Field in Form for Selector",t.objectAssignNotSupported="Object.assign is not supported",t.arrayFromNotSupported="Array.from is not supported",t.destructringAssignmentNotSupported="Destructuring Assignment is not supported",t.arrowFunctionsNotSupported="Arrow functions are not supported"}(ErrorMessage||(ErrorMessage={})),function(t){t.bundleSource="bundle-source"}(NpmScript||(NpmScript={})),function(t){t.primary="primary",t.secondary="secondary"}(SupportType||(SupportType={})),function(t){t.loadCritical="loadCritical",t.load="load"}(LoadOnComplete||(LoadOnComplete={})),function(t){t.innerHTML="innerHTML"}(VamtigerFormDataSupportFormFieldValue||(VamtigerFormDataSupportFormFieldValue={})),function(t){t.touchSupport="vamtigerTouchSupport",t.isBot="vamtigerIsBot"}(DocumentDataAttribute||(DocumentDataAttribute={})),function(t){t.elementQuery="vamtiger-element-query-support"}(SupportFile||(SupportFile={})),function(t){t.elementQuery="https://cdn.jsdelivr.net/npm/eqcss@latest/EQCSS.min.js"}(Polyfill||(Polyfill={}));var supportTypes=Object.keys(SupportType),regex={leadingData:/^data/,trailingSupport:/(.*?Support)(Primary)?$/,supportScript:/vamtiger(-\w+)+-(support|polyfill)/,distTag:/(\d|latest)$/,bot:/bot|google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex|googlebot|google-structured-data-testing-tool|bingbot|linkedinbot|mediapartners-google/i},stringConstant=__assign$1({},StringConstant,{365080655670:365080655670}),selector={vamtigerBrowserMethod:'script[src="'+ScriptUrl.vamtigerBrowserMethod+'"]'},vamtiger=StringConstant.vamtiger,jsExtension=StringConstant.jsExtension,nothing=StringConstant.nothing,leadingData=regex.leadingData,supportKeys=Object.keys(MetaElementBrowserSupportAttribute),dependencies=[],legacyDependencies=[["https://cdn.jsdelivr.net/npm/es5-shim@latest/es5-shim.min.js","https://cdn.jsdelivr.net/npm/es6-object-assign/dist/object-assign.min.js"],["https://cdn.jsdelivr.net/npm/es6-shim@latest/es6-shim.min.js"],["https://cdn.jsdelivr.net/npm/babel-polyfill@latest/dist/polyfill.min.js","https://cdn.jsdelivr.net/npm/@babel/standalone@latest/babel.min.js"]],primarySupport=new Set(["botSupport","es2015Support"]),supportScript=__assign$1({},MetaElementBrowserSupportAttribute),loadSupport={parallel:new Set([SupportType.primary,SupportType.secondary]),series:new Set([])},supportDone=[MetaElementAttribute.supported,MetaElementAttribute.unsupported],loadOnComplete=Object.keys(LoadOnComplete),vc=gvc();function gvc(){var t=stringConstant.arn,e=stringConstant.aws,r=stringConstant.sns,n=stringConstant[365080655670],o=stringConstant["vamtiger-contact"],a=stringConstant.colon,i=stringConstant["5e5164d3"],s=stringConstant.cc71,u=stringConstant["4e5b"],p=stringConstant["9c34"],c=stringConstant["042fe735f31c"],l=stringConstant.hyphen,d=Region.usWest2,m=[t,e,r,d,n,o].join(a),f=[d,[i,s,u,p,c].join(l)].join(a);return{z:m.split(nothing),x:f.split(nothing),y:d.split(nothing)}}supportKeys.forEach(function(t){return supportScript[t]=supportScript[t].replace(leadingData,vamtiger)+jsExtension});var vamtigerBrowserSupportId=ElementId.vamtigerBrowserSupport;function getSupportUrls(t){var e,r=t.supportType,n=window[vamtigerBrowserSupportId],o=new Set;return Array.from(n.children).forEach(function(t){(e=t.dataset).hasOwnProperty(r)&&o.add(e.url)}),Array.from(o)}var vamtigerBrowserSupportId$1=ElementId.vamtigerBrowserSupport;function loadScripts(){return __awaiter$1(this,void 0,void 0,function(){var t,e,r,n,o;return __generator(this,function(a){return t=window.VamtigerBrowserMethod,e=t.loadScript,r=window[vamtigerBrowserSupportId$1],n=[],o=loadOnComplete.map(function(t){return r.dataset[t]}).filter(function(t){return t}),[2,o.reduce(function(t,r){return t.then(function(){return e({src:r})}).then(function(t){return n.push(t)&&n})},Promise.resolve(n))]})})}var parallel=loadSupport.parallel,index=0,done=!1;function loadSupport$1(){return __awaiter$1(this,void 0,void 0,function(){var t,e,r,n,o,a;return __generator(this,function(i){return t=window.VamtigerBrowserMethod,e=t.loadScript,r=supportTypes[index],n=getSupportUrls({supportType:r}),o=[],parallel.has(r)?(a=Promise.all(n.map(function(t){return e({src:t})})),n.length||loadNextSupport({supportType:r})):r?a=n.reduce(function(t,r){return t.then(function(){return e({src:r})}).then(function(t){return o.push(t)&&o})},Promise.resolve(o)):r||done||(done=!0,a=loadScripts()),index++,[2,a]})})}var vamtigerBrowserSupportId$2=ElementId.vamtigerBrowserSupport,wait=MetaElementAttribute.wait;function loadNextSupport(t){var e=t.supportType,r=window[vamtigerBrowserSupportId$2],n="meta[data-"+e+"]",o=Array.from(r.querySelectorAll(n)),a=o.filter(function(t){return supportDone.some(function(e){return t.dataset.hasOwnProperty(e)})}).filter(function(t){return!t.dataset.hasOwnProperty(wait)});o&&o.length===a.length&&loadSupport$1().catch(console.warn)}var vamtigerBrowserSupportId$3=ElementId.vamtigerBrowserSupport,nothing$1=StringConstant.nothing,supportTypes$1=Object.keys(SupportType);function updateBrowserSupport(t){var e=t.supportFile,r=t.supported,n=t.polyfill,o=t.polyfills,a=t.polyfillChain,i=t.error,s=t.wait;return __awaiter$1(this,void 0,void 0,function(){var t,u,p,c,l,d,m,f,g;return __generator(this,function(_){return t=window[vamtigerBrowserSupportId$3],window.VamtigerBrowserSupport,u=window.VamtigerBrowserMethod,p=u.loadScript,c=u.loadScripts,l=u.loadScriptsSequentially,d="[data-url*="+e+"]",m=t.querySelector(d),f=m.dataset,g=supportTypes$1.find(function(t){return f.hasOwnProperty(t)}),r?f.supported=nothing$1:f.unsupported=nothing$1,s?f.wait=nothing$1:delete f.wait,i&&(f.error=i),n?(f.polyfill=n,p({src:n}).then(function(){return loadNextSupport({supportType:g})})):a?l(a.map(function(t){return t.map(function(t){return{src:t}})})).then(function(t){return t.forEach(function(t,e){var r=t.src;return f["polyfill-"+(e+1)]=r})}).then(function(){return loadNextSupport({supportType:g})}):o?c(o.map(function(t){return{src:t}})).then(function(t){return t.forEach(function(t,e){var r=t.src;return f["polyfill-"+(e+1)]=r})}).then(function(){return loadNextSupport({supportType:g})}):loadNextSupport({supportType:g}),[2]})})}window.VamtigerBrowserSupport||(window.VamtigerBrowserSupport=updateBrowserSupport);var id=ElementAttribute.id,vamtigerBrowserSupport=ElementId.vamtigerBrowserSupport,baseUrl=MetaElementAttribute.baseUrl,es2015Support=MetaElementBrowserSupportAttribute.es2015Support,nothing$2=StringConstant.nothing,slash=StringConstant.slash,build=StringConstant.build,selector$1=Selector.vamtigerBrowserSupportScript,distTag=regex.distTag;function setMetaElement(){var t=document.head,e=t.firstChild,r=document.createElement(ElmentName.meta),n=document.querySelector(selector$1),o=n.src.split(slash),a=new Set(o.slice(0,o.length-1)),i=n.src.match(distTag)&&n.src+"/build"||Array.from(a).join(slash);r.setAttribute(id,vamtigerBrowserSupport),n&&Object.keys(n.dataset).forEach(function(t){r.dataset[t]||(r.dataset[t]=n.dataset[t])}),r.dataset[baseUrl]=i,t.insertBefore(r,e)}var vamtigerBrowserSupportId$4=ElementId.vamtigerBrowserSupport,slash$1=StringConstant.slash,nothing$3=StringConstant.nothing,meta=ElmentName.meta,trailingSupport=regex.trailingSupport;function setBrowserSupportMetaElement(t){var e=t.support,r=window[vamtigerBrowserSupportId$4],n=r.dataset.baseUrl,o=e.match(trailingSupport)||[],a=o[1],i=o[2],s=[n,supportScript[a]].join(slash$1),u=document.createElement(meta);u.dataset.name=a,u.dataset.url=s,i?u.dataset[i.toLowerCase()]=nothing$3:u.dataset[SupportType.secondary]=nothing$3,r.appendChild(u)}var vamtigerBrowserSupportId$5=ElementId.vamtigerBrowserSupport,trailingSupport$1=regex.trailingSupport;function setBrowserSupportMetaElements(){var t=window[vamtigerBrowserSupportId$5].dataset;Object.keys(t).filter(function(t){return t.match(trailingSupport$1)}).sort().forEach(function(t){return setBrowserSupportMetaElement({support:t,primary:primarySupport.has(t)})})}var objectAssignNotSupported=ErrorMessage.objectAssignNotSupported,arrayFromNotSupported=ErrorMessage.arrayFromNotSupported,destructringAssignmentNotSupported=ErrorMessage.destructringAssignmentNotSupported,arrowFunctionsNotSupported=ErrorMessage.arrowFunctionsNotSupported,legacy;function isLegacy(){return __awaiter$1(this,void 0,void 0,function(){var t,e;return __generator(this,function(r){switch(r.label){case 0:return void 0!==legacy?[3,2]:[4,Promise.all([objectAssign(),arrayFrom(),destructringAssignment(),arrowFunctions()]).then(function(t){return t.some(function(t){return!t})})];case 1:return e=r.sent(),[3,3];case 2:e=legacy,r.label=3;case 3:return legacy=!!(t=e),[2,t]}})})}function objectAssign(){return new Promise(function(resolve,reject){var result=!1;try{eval("Object.assign({result: false}, {result: true}).result"),result=!0}catch(t){handleError(new Error(objectAssignNotSupported))}resolve(result)})}function arrayFrom(){return new Promise(function(resolve,reject){var result=!1;try{eval("Array.from('1234').length === 4"),result=!0}catch(t){handleError(new Error(arrayFromNotSupported))}resolve(result)})}function destructringAssignment(){return new Promise(function(resolve,reject){var result=!1;try{eval("\n            let object = {\n                result: true\n            };\n            let { result: currentResult } = object;\n        "),result=!0}catch(t){handleError(new Error(destructringAssignmentNotSupported))}resolve(result)})}function arrowFunctions(){return new Promise(function(resolve,reject){var result=!1;try{eval("(() => true)()"),result=!0}catch(t){handleError(new Error(arrowFunctionsNotSupported))}resolve(result)})}function handleError(t){console.warn(t.message)}var parse=JSON.parse;function loadDependencies(){return __awaiter$1(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return[4,loadLegacyDependencies()];case 1:return t.sent(),[4,loadDependencies$1()];case 2:return t.sent(),[2]}})})}function loadLegacyDependencies(){return __awaiter$1(this,void 0,void 0,function(){var t,e;return __generator(this,function(r){switch(r.label){case 0:return[4,isLegacy()];case 1:return t=r.sent(),e=t&&legacyDependencies||[],[4,Promise.all(e.map(function(t){return Promise.all(t.map(function(t){return loadDependency(t).catch(handleError$1)}))}))];case 2:return r.sent(),[2]}})})}function loadDependencies$1(){return __awaiter$1(this,void 0,void 0,function(){var t,e,r;return __generator(this,function(n){switch(n.label){case 0:return[4,isLegacy()];case 1:return t=n.sent(),e=[t&&ScriptUrl.vamtigerBrowserMethod||ScriptUrl.vamtigerBrowserMethodJsonJs].concat(dependencies).filter(function(t){return t}),[4,Promise.all(e.map(loadDependency))];case 2:return r=n.sent(),[4,loadVamtigerBrowserMethod()];case 3:return n.sent(),[2,r]}})})}function loadDependency(t){return new Promise(function(e,r){var n=document.head,o='[src="'+t+'"]',a=n.querySelector(o),i=!a&&document.createElement("script");i?(i.addEventListener("load",function(t){return e(i)}),i.addEventListener("error",r),i.src=t,n.appendChild(i)):a?e(a):e()})}function loadVamtigerBrowserMethod(){var t=this;return new Promise(function(e,r){return __awaiter$1(t,void 0,void 0,function(){var t,r,n,o,a,i,s;return __generator(this,function(u){return t=document.head,r=Selector.vamtigerBrowserMethodJson,n=document.querySelector(r),o=n&&n.innerHTML,a=o&&parse(o),i=a&&a.text,s=document.createElement("script"),i&&(s.dataset.name=ScriptUrl.vamtigerBrowserMethod,s.innerHTML=i,t.appendChild(s)),addEventListener("vamtigerBrowserMethodReady",e),[2]})})})}function handleError$1(t){console.warn(t.name),console.warn(t.message),console.warn(t.stack)}var bot=regex.bot;function isBot(){var t=navigator.userAgent;return navigator.webdriver||navigator&&Boolean(t.match(bot))}var nothing$4=StringConstant.nothing;function setBrowserData(){return __awaiter$1(this,void 0,void 0,function(){var t,e,r,n,o,a,i,s;return __generator(this,function(u){return t=window.ontouchstart,e=window.document,r=e.body,n=r.dataset,o=navigator.maxTouchPoints,a=navigator.msMaxTouchPoints,i=!!(t||window.hasOwnProperty("DocumentTouch")||o||a),s=isBot(),i&&(n[DocumentDataAttribute.touchSupport]=nothing$4),s&&(console.log("isBot: "+s),n[DocumentDataAttribute.isBot]=nothing$4),[2]})})}function handleLoad(t){return __awaiter$1(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return removeEventListener("load",handleLoad),[4,loadDependencies()];case 1:return t.sent(),setMetaElement(),setBrowserSupportMetaElements(),loadSupport$1().catch(handleError$2),setBrowserData(),[2]}})})}function handleError$2(t){console.warn(t),console.warn(notBrowser)}var notBrowser=ErrorMessage.notBrowser;addEventListener("load",handleLoad)}();
//# sourceMappingURL=vamtiger-browser-support.js.map
