!function(){"use strict";const __assign=Object.assign||function(t){for(var e,r=1;r<arguments.length;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t};function __awaiter(t,e,r,n){return new(r||(r=Promise))(function(o,a){function s(t){try{u(n.next(t))}catch(t){a(t)}}function i(t){try{u(n.throw(t))}catch(t){a(t)}}function u(t){t.done?o(t.value):new r(function(e){e(t.value)}).then(s,i)}u((n=n.apply(t,e)).next())})}var StringConstant,Region,ElmentName,ElementId,ElementAttribute,MetaElementAttribute,MetaElementBrowserSupportAttribute,Selector,ScriptUrl,ErrorMessage,NpmScript,SupportType,LoadOnComplete,VamtigerFormDataSupportFormFieldValue,DocumentDataAttribute,SupportFile,Polyfill;!function(t){t.nothing="",t.build="build",t.vamtiger="vamtiger",t.slash="/",t.jsExtension=".js",t.bashAnd="&&",t.arn="arn",t.sns="sns",t.aws="aws",t.colon=":",t.hyphen="-",t["vamtiger-contact"]="vamtiger-contact",t["5e5164d3"]="5e5164d3",t.cc71="cc71",t["4e5b"]="4e5b",t["9c34"]="9c34",t["042fe735f31c"]="042fe735f31c"}(StringConstant||(StringConstant={})),function(t){t.usWest2="us-west-2"}(Region||(Region={})),function(t){t.meta="meta",t.script="script"}(ElmentName||(ElmentName={})),function(t){t.vamtigerBrowserSupport="vamtiger-browser-support"}(ElementId||(ElementId={})),function(t){t.id="id"}(ElementAttribute||(ElementAttribute={})),function(t){t.baseUrl="baseUrl",t.name="name",t.url="url",t.primary="primary",t.loaded="loaded",t.supported="supported",t.unsupported="unsupported",t.error="error",t.polyfill="polyfill",t.loadCritical="loadCritical",t.load="load",t.wait="wait"}(MetaElementAttribute||(MetaElementAttribute={})),function(t){t.botSupport="data-bot-support",t.es2015Support="data-es2015-support",t.elementQuerySupport="data-element-query-support",t.webComponentSupport="data-web-component-support",t.fetchSupport="data-fetch-support",t.awsSupport="data-aws-support",t.contactSupport="data-contact-support"}(MetaElementBrowserSupportAttribute||(MetaElementBrowserSupportAttribute={})),function(t){t.vamtigerBrowserSupportScript='script[src*="vamtiger-browser-support"]',t.vamtigerBrowserMethodJsonJs='[src$="vamtiger-browser-method.js.json.js"]',t.vamtigerBrowserMethodJson='[data-name$="vamtiger-browser-method.js.json"]'}(Selector||(Selector={})),function(t){t.vamtigerBrowserMethod="https://vamtiger-project.github.io/vamtiger-browser-method/build/vamtiger-browser-method.js",t.vamtigerBrowserMethodJsonJs="https://vamtiger-project.github.io/vamtiger-browser-method/build/vamtiger-browser-method.js.json.js",t.tsLib="https://cdn.jsdelivr.net/npm/tslib@latest"}(ScriptUrl||(ScriptUrl={})),function(t){t.notBrowser="This is not a web browser",t.noFormForSelector="No Form for Selector",t.noFieldInFormForSelector="No Field in Form for Selector",t.objectAssignNotSupported="Object.assign is not supported",t.arrayFromNotSupported="Array.from is not supported",t.destructringAssignmentNotSupported="Destructuring Assignment is not supported",t.arrowFunctionsNotSupported="Arrow functions are not supported"}(ErrorMessage||(ErrorMessage={})),function(t){t.bundleSource="bundle-source"}(NpmScript||(NpmScript={})),function(t){t.primary="primary",t.secondary="secondary"}(SupportType||(SupportType={})),function(t){t.loadCritical="loadCritical",t.load="load"}(LoadOnComplete||(LoadOnComplete={})),function(t){t.innerHTML="innerHTML"}(VamtigerFormDataSupportFormFieldValue||(VamtigerFormDataSupportFormFieldValue={})),function(t){t.touchSupport="vamtigerTouchSupport",t.bot="vamtigerBot",t.legacy="vamtigerLegacy",t.textMode="vamtigerTextMode"}(DocumentDataAttribute||(DocumentDataAttribute={})),function(t){t.elementQuery="vamtiger-element-query-support"}(SupportFile||(SupportFile={})),function(t){t.elementQuery="https://cdn.jsdelivr.net/npm/eqcss@latest/EQCSS.min.js"}(Polyfill||(Polyfill={}));var supportTypes=Object.keys(SupportType),regex={leadingData:/^data/,trailingSupport:/(.*?Support)(Primary)?$/,supportScript:/vamtiger(-\w+)+-(support|polyfill)/,distTag:/(\d|latest)$/,bot:/bot|google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex|googlebot|google-structured-data-testing-tool|bingbot|linkedinbot|mediapartners-google/i},stringConstant=__assign({},StringConstant,{365080655670:365080655670}),selector={vamtigerBrowserMethod:'script[src="'+ScriptUrl.vamtigerBrowserMethod+'"]'},vamtiger=StringConstant.vamtiger,jsExtension=StringConstant.jsExtension,nothing=StringConstant.nothing,leadingData=regex.leadingData,supportKeys=Object.keys(MetaElementBrowserSupportAttribute),dependencies=[],legacyDependencies=[["https://cdn.jsdelivr.net/npm/es5-shim@latest/es5-shim.min.js","https://cdn.jsdelivr.net/npm/es6-object-assign/dist/object-assign.min.js"],["https://cdn.jsdelivr.net/npm/es6-shim@latest/es6-shim.min.js"],["https://cdn.jsdelivr.net/npm/babel-polyfill@latest/dist/polyfill.min.js","https://cdn.jsdelivr.net/npm/@babel/standalone@latest/babel.min.js"]],primarySupport=new Set(["botSupport","es2015Support"]),supportScript=__assign({},MetaElementBrowserSupportAttribute),loadSupport={parallel:new Set([SupportType.primary,SupportType.secondary]),series:new Set([])},supportDone=[MetaElementAttribute.supported,MetaElementAttribute.unsupported],loadOnComplete=Object.keys(LoadOnComplete),vc=gvc();function gvc(){var t=stringConstant.arn,e=stringConstant.aws,r=stringConstant.sns,n=stringConstant[365080655670],o=stringConstant["vamtiger-contact"],a=stringConstant.colon,s=stringConstant["5e5164d3"],i=stringConstant.cc71,u=stringConstant["4e5b"],p=stringConstant["9c34"],c=stringConstant["042fe735f31c"],l=stringConstant.hyphen,d=Region.usWest2,m=[t,e,r,d,n,o].join(a),g=[d,[s,i,u,p,c].join(l)].join(a);return{z:m.split(nothing),x:g.split(nothing),y:d.split(nothing)}}supportKeys.forEach(function(t){return supportScript[t]=supportScript[t].replace(leadingData,vamtiger)+jsExtension});var vamtigerBrowserSupportId=ElementId.vamtigerBrowserSupport;function getSupportUrls(t){var e,r=t.supportType,n=window[vamtigerBrowserSupportId],o=new Set;return Array.from(n.children).forEach(function(t){(e=t.dataset).hasOwnProperty(r)&&o.add(e.url)}),Array.from(o)}var vamtigerBrowserSupportId$1=ElementId.vamtigerBrowserSupport;function loadScripts(){return __awaiter(this,void 0,void 0,function(){var t,e,r,n,o;return __generator(this,function(a){return t=window.VamtigerBrowserMethod,e=t.loadScript,r=window[vamtigerBrowserSupportId$1],n=[],o=loadOnComplete.map(function(t){return r.dataset[t]}).filter(function(t){return t}),[2,o.reduce(function(t,r){return t.then(function(){return e({src:r})}).then(function(t){return n.push(t)&&n})},Promise.resolve(n))]})})}var parallel=loadSupport.parallel,index=0,done=!1;function loadSupport$1(){return __awaiter(this,void 0,void 0,function(){var t,e,r,n,o,a;return __generator(this,function(s){return t=window.VamtigerBrowserMethod,e=t.loadScript,r=supportTypes[index],n=getSupportUrls({supportType:r}),o=[],parallel.has(r)?(a=Promise.all(n.map(function(t){return e({src:t})})),n.length||loadNextSupport({supportType:r})):r?a=n.reduce(function(t,r){return t.then(function(){return e({src:r})}).then(function(t){return o.push(t)&&o})},Promise.resolve(o)):r||done||(done=!0,a=loadScripts()),index++,[2,a]})})}var vamtigerBrowserSupportId$2=ElementId.vamtigerBrowserSupport,wait=MetaElementAttribute.wait;function loadNextSupport(t){var e=t.supportType,r=window[vamtigerBrowserSupportId$2],n="meta[data-"+e+"]",o=Array.from(r.querySelectorAll(n)),a=o.filter(function(t){return supportDone.some(function(e){return t.dataset.hasOwnProperty(e)})}).filter(function(t){return!t.dataset.hasOwnProperty(wait)});o&&o.length===a.length&&loadSupport$1().catch(console.warn)}var vamtigerBrowserSupportId$3=ElementId.vamtigerBrowserSupport,nothing$1=StringConstant.nothing,supportTypes$1=Object.keys(SupportType);function updateBrowserSupport(t){var e=t.supportFile,r=t.supported,n=t.polyfill,o=t.polyfills,a=t.polyfillChain,s=t.error,i=t.wait;return __awaiter(this,void 0,void 0,function(){var t,u,p,c,l,d,m,g,h;return __generator(this,function(w){return t=window[vamtigerBrowserSupportId$3],window.VamtigerBrowserSupport,u=window.VamtigerBrowserMethod,p=u.loadScript,c=u.loadScripts,l=u.loadScriptsSequentially,d="[data-url*="+e+"]",m=t.querySelector(d),g=m.dataset,h=supportTypes$1.find(function(t){return g.hasOwnProperty(t)}),r?g.supported=nothing$1:g.unsupported=nothing$1,i?g.wait=nothing$1:delete g.wait,s&&(g.error=s),n?(g.polyfill=n,p({src:n}).then(function(){return loadNextSupport({supportType:h})})):a?l(a.map(function(t){return t.map(function(t){return{src:t}})})).then(function(t){return t.forEach(function(t,e){var r=t.src;return g["polyfill-"+(e+1)]=r})}).then(function(){return loadNextSupport({supportType:h})}):o?c(o.map(function(t){return{src:t}})).then(function(t){return t.forEach(function(t,e){var r=t.src;return g["polyfill-"+(e+1)]=r})}).then(function(){return loadNextSupport({supportType:h})}):loadNextSupport({supportType:h}),[2]})})}window.VamtigerBrowserSupport||(window.VamtigerBrowserSupport=updateBrowserSupport);var id=ElementAttribute.id,vamtigerBrowserSupport=ElementId.vamtigerBrowserSupport,baseUrl=MetaElementAttribute.baseUrl,es2015Support=MetaElementBrowserSupportAttribute.es2015Support,nothing$2=StringConstant.nothing,slash=StringConstant.slash,build=StringConstant.build,selector$1=Selector.vamtigerBrowserSupportScript,distTag=regex.distTag;function setMetaElement(){var t=document.head,e=t.firstChild,r=document.createElement(ElmentName.meta),n=document.querySelector(selector$1),o=n.src.split(slash),a=new Set(o.slice(0,o.length-1)),s=n.src.match(distTag)&&n.src+"/build"||Array.from(a).join(slash);r.setAttribute(id,vamtigerBrowserSupport),n&&Object.keys(n.dataset).forEach(function(t){r.dataset[t]||(r.dataset[t]=n.dataset[t])}),r.dataset[baseUrl]=s,t.insertBefore(r,e)}var vamtigerBrowserSupportId$4=ElementId.vamtigerBrowserSupport,slash$1=StringConstant.slash,nothing$3=StringConstant.nothing,meta=ElmentName.meta,trailingSupport=regex.trailingSupport;function setBrowserSupportMetaElement(t){var e=t.support,r=window[vamtigerBrowserSupportId$4],n=r.dataset.baseUrl,o=e.match(trailingSupport)||[],a=o[1],s=o[2],i=[n,supportScript[a]].join(slash$1),u=document.createElement(meta);u.dataset.name=a,u.dataset.url=i,s?u.dataset[s.toLowerCase()]=nothing$3:u.dataset[SupportType.secondary]=nothing$3,r.appendChild(u)}var vamtigerBrowserSupportId$5=ElementId.vamtigerBrowserSupport,trailingSupport$1=regex.trailingSupport;function setBrowserSupportMetaElements(){var t=window[vamtigerBrowserSupportId$5].dataset;Object.keys(t).filter(function(t){return t.match(trailingSupport$1)}).sort().forEach(function(t){return setBrowserSupportMetaElement({support:t,primary:primarySupport.has(t)})})}var objectAssignNotSupported=ErrorMessage.objectAssignNotSupported,arrayFromNotSupported=ErrorMessage.arrayFromNotSupported,destructringAssignmentNotSupported=ErrorMessage.destructringAssignmentNotSupported,arrowFunctionsNotSupported=ErrorMessage.arrowFunctionsNotSupported,legacy;function isLegacy(){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(e){switch(e.label){case 0:return void 0!==legacy?[3,2]:[4,Promise.all([objectAssign(),arrayFrom(),destructringAssignment(),arrowFunctions()]).then(function(t){return!t.every(function(t){return t})})];case 1:return t=e.sent(),[3,3];case 2:t=legacy,e.label=3;case 3:return[2,legacy=!!t]}})})}function objectAssign(){return new Promise(function(resolve,reject){var result=!1;try{eval("Object.assign({result: false}, {result: true}).result"),result=!0}catch(t){handleError(new Error(objectAssignNotSupported))}resolve(result)})}function arrayFrom(){return new Promise(function(resolve,reject){var result=!1;try{eval("Array.from('1234').length === 4"),result=!0}catch(t){handleError(new Error(arrayFromNotSupported))}resolve(result)})}function destructringAssignment(){return new Promise(function(resolve,reject){var result=!1;try{eval("\n            let object = {\n                result: true\n            };\n            let { result: currentResult } = object;\n        "),result=!0}catch(t){handleError(new Error(destructringAssignmentNotSupported))}resolve(result)})}function arrowFunctions(){return new Promise(function(resolve,reject){var result=!1;try{eval("(() => true)()"),result=!0}catch(t){handleError(new Error(arrowFunctionsNotSupported))}resolve(result)})}function handleError(t){console.warn(t.message)}var parse=JSON.parse;function loadDependencies(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return[4,loadLegacyDependencies()];case 1:return t.sent(),[4,loadDependencies$1()];case 2:return t.sent(),[2]}})})}function loadLegacyDependencies(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(r){switch(r.label){case 0:return[4,isLegacy()];case 1:return t=r.sent(),e=t&&legacyDependencies||[],[4,Promise.all(e.map(function(t){return Promise.all(t.map(function(t){return loadDependency(t).catch(handleError$1)}))}))];case 2:return r.sent(),[2]}})})}function loadDependencies$1(){return __awaiter(this,void 0,void 0,function(){var t,e,r;return __generator(this,function(n){switch(n.label){case 0:return[4,isLegacy()];case 1:return t=n.sent(),e=[t&&ScriptUrl.vamtigerBrowserMethod||ScriptUrl.vamtigerBrowserMethodJsonJs].concat(dependencies).filter(function(t){return t}),[4,Promise.all(e.map(loadDependency))];case 2:return r=n.sent(),[4,loadVamtigerBrowserMethod()];case 3:return n.sent(),[2,r]}})})}function loadDependency(t){return new Promise(function(e,r){var n=document.head,o='[src="'+t+'"]',a=n.querySelector(o),s=!a&&document.createElement("script");s?(s.addEventListener("load",function(t){return e(s)}),s.addEventListener("error",r),s.src=t,n.appendChild(s)):a?e(a):e()})}function loadVamtigerBrowserMethod(){var t=this;return new Promise(function(e,r){return __awaiter(t,void 0,void 0,function(){var t,r,n,o,a,s,i;return __generator(this,function(u){return t=document.head,r=Selector.vamtigerBrowserMethodJson,n=document.querySelector(r),o=n&&n.innerHTML,a=o&&parse(o),s=a&&a.text,i=document.createElement("script"),s&&(i.dataset.name=ScriptUrl.vamtigerBrowserMethod,i.innerHTML=s,t.appendChild(i)),addEventListener("vamtigerBrowserMethodReady",e),[2]})})})}function handleError$1(t){console.warn(t.name),console.warn(t.message),console.warn(t.stack)}var bot=regex.bot;function isBot(){var t=navigator.userAgent;return navigator.webdriver||navigator&&Boolean(t.match(bot))}var nothing$4=StringConstant.nothing;function setBrowserData(){return __awaiter(this,void 0,void 0,function(){var t,e,r,n,o,a,s,i,u;return __generator(this,function(p){switch(p.label){case 0:return t=window.ontouchstart,e=window.document,r=e.documentElement,n=r.dataset,o=navigator.maxTouchPoints,a=navigator.msMaxTouchPoints,s=!!(t||window.hasOwnProperty("DocumentTouch")||o||a),i=isBot(),[4,isLegacy()];case 1:return u=p.sent(),[{key:DocumentDataAttribute.touchSupport,value:s},{key:DocumentDataAttribute.bot,value:i},{key:DocumentDataAttribute.legacy,value:u},{key:DocumentDataAttribute.textMode,value:i}].forEach(function(t){var e=t.key,r=t.value;e&&r&&(n[e]=nothing$4)}),[2]}})})}function handleLoad(t){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return removeEventListener("load",handleLoad),[4,loadDependencies()];case 1:return t.sent(),setMetaElement(),setBrowserSupportMetaElements(),loadSupport$1().catch(handleError$2),setBrowserData(),[2]}})})}function handleError$2(t){console.warn(t),console.warn(notBrowser)}var notBrowser=ErrorMessage.notBrowser;addEventListener("load",handleLoad)}();
//# sourceMappingURL=vamtiger-browser-support.js.map
