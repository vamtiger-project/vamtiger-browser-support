var index=function(){"use strict";var StringConstant,Region,ElmentName,ElementId,ElementAttribute,MetaElementAttribute,MetaElementBrowserSupportAttribute,Selector,ScriptUrl,ErrorMessage,NpmScript,SupportType,LoadOnComplete,VamtigerFormDataSupportFormFieldValue,DocumentDataAttribute,SupportFile,Polyfill;!function(t){t.nothing="",t.build="build",t.vamtiger="vamtiger",t.slash="/",t.jsExtension=".js",t.bashAnd="&&",t.arn="arn",t.sns="sns",t.aws="aws",t.colon=":",t.hyphen="-",t["vamtiger-contact"]="vamtiger-contact",t["5e5164d3"]="5e5164d3",t.cc71="cc71",t["4e5b"]="4e5b",t["9c34"]="9c34",t["042fe735f31c"]="042fe735f31c"}(StringConstant||(StringConstant={})),function(t){t.usWest2="us-west-2"}(Region||(Region={})),function(t){t.meta="meta",t.script="script"}(ElmentName||(ElmentName={})),function(t){t.vamtigerBrowserSupport="vamtiger-browser-support"}(ElementId||(ElementId={})),function(t){t.id="id"}(ElementAttribute||(ElementAttribute={})),function(t){t.baseUrl="baseUrl",t.name="name",t.url="url",t.primary="primary",t.loaded="loaded",t.supported="supported",t.unsupported="unsupported",t.error="error",t.polyfill="polyfill",t.loadCritical="loadCritical",t.load="load",t.wait="wait"}(MetaElementAttribute||(MetaElementAttribute={})),function(t){t.es2015Support="data-es2015-support",t.elementQuerySupport="data-element-query-support",t.webComponentSupport="data-web-component-support",t.fetchSupport="data-fetch-support",t.awsSupport="data-aws-support",t.contactSupport="data-contact-support"}(MetaElementBrowserSupportAttribute||(MetaElementBrowserSupportAttribute={})),function(t){t.vamtigerBrowserSupportScript='script[src*="vamtiger-browser-support"]',t.vamtigerBrowserMethodJsonJs='[src$="vamtiger-browser-method.js.json.js"]',t.vamtigerBrowserMethodJson='[data-name$="vamtiger-browser-method.js.json"]'}(Selector||(Selector={})),function(t){t.vamtigerBrowserMethod="https://cdn.jsdelivr.net/npm/vamtiger-browser-method@latest/build/vamtiger-browser-method.js",t.vamtigerBrowserMethodJsonJs="https://cdn.jsdelivr.net/npm/vamtiger-browser-method@latest/build/vamtiger-browser-method.js.json.js"}(ScriptUrl||(ScriptUrl={})),function(t){t.notBrowser="This is not a web browser",t.noFormForSelector="No Form for Selector",t.noFieldInFormForSelector="No Field in Form for Selector"}(ErrorMessage||(ErrorMessage={})),function(t){t.bundleSource="bundle-source"}(NpmScript||(NpmScript={})),function(t){t.primary="primary",t.secondary="secondary"}(SupportType||(SupportType={})),function(t){t.loadCritical="loadCritical",t.load="load"}(LoadOnComplete||(LoadOnComplete={})),function(t){t.innerHTML="innerHTML"}(VamtigerFormDataSupportFormFieldValue||(VamtigerFormDataSupportFormFieldValue={})),function(t){t.touchSupport="vamtigerTouchSupport"}(DocumentDataAttribute||(DocumentDataAttribute={})),function(t){t.elementQuery="vamtiger-element-query-support"}(SupportFile||(SupportFile={})),function(t){t.elementQuery="https://cdn.jsdelivr.net/npm/eqcss@latest/EQCSS.min.js"}(Polyfill||(Polyfill={}));var regex={leadingData:/^data/,trailingSupport:/(.*?Support)(Primary)?$/,supportScript:/vamtiger(-\w+)+-(support|polyfill)/,distTag:/(\d|latest)$/,bot:/bot|google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex/i},stringConstant=Object.assign(StringConstant,{365080655670:365080655670}),selector={vamtigerBrowserMethod:'script[src="'+ScriptUrl.vamtigerBrowserMethod+'"]'},bot=regex.bot;function isBot(){var t=navigator.userAgent;return navigator&&Boolean(t.match(bot))}var supportFile="vamtiger-es2015-support",polyfill="https://cdn.jsdelivr.net/npm/babel-polyfill@latest/dist/polyfill.min.js",test="\n    class VamtigerEs2015Support {\n        get result() {\n            return true;\n        }\n    }\n\n    class VamtigerEs2015SupportExtended extends VamtigerEs2015Support {\n        constructor() {\n            super();\n        }\n    }\n\n    const vamtigerEs2015Support = new VamtigerEs2015SupportExtended();\n    const { result: vamtigerEs2015SupportResult } = vamtigerEs2015Support;\n\n    window['"+supportFile+"'].supported = vamtigerEs2015SupportResult;\n";function main(){var VamtigerBrowserSupport=window.VamtigerBrowserSupport,userAgent=navigator.userAgent;try{eval(test)}catch(t){window[supportFile].supported=!1,window[supportFile].error=t.message}isBot()&&(window[supportFile].supported=!1,console.log(userAgent)),window[supportFile].supported||(window[supportFile].polyfill=polyfill),VamtigerBrowserSupport(window[supportFile]),delete window[supportFile]}return window[supportFile]={supportFile:supportFile},main(),main}();
//# sourceMappingURL=vamtiger-es2015-support.js.map
