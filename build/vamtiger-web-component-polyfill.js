!function(){"use strict";var ScriptType,ScriptAttribute,ErrorMessage,StringConstant,LinkRel,LoadScriptElement,Selector;!function(e){e.jsonld="application/ld+json"}(ScriptType||(ScriptType={})),function(e){e.type="type"}(ScriptAttribute||(ScriptAttribute={})),function(e){e.failedToLoadScript="Failed to load script",e.windowPropertyNotSet="Window property not set",e.unsupportedFeature="Unsupported feature",e.customElementAreadyDefined="Custom element already defined"}(ErrorMessage||(ErrorMessage={})),function(e){e.slash="/"}(StringConstant||(StringConstant={})),function(e){e.stylesheet="stylesheet"}(LinkRel||(LinkRel={})),function(e){e.script="script",e.link="link",e.style="style"}(LoadScriptElement||(LoadScriptElement={})),function(e){e.lastStylesheet="style:last-of-type",e.webcomponentsjs='script[src*="@webcomponents/webcomponentsjs"]'}(Selector||(Selector={}));var failedToLoadScript=ErrorMessage.failedToLoadScript,stylesheet=LinkRel.stylesheet,scriptElement=LoadScriptElement.script,link=LoadScriptElement.link,style=LoadScriptElement.style,loadScript=function(e){return new Promise(function(t,n){var r=document.head,o=document.body,a=e,s=a.js,p=a.name,i=a.jsonld,l=e.src,m=e,c=m.css,d=m.name,u=e.href,S=e.hasOwnProperty("src")||e.hasOwnProperty("href"),b=(s||l)&&scriptElement||c&&style||u&&link,h=l&&'script[src="'+l+'"]'||u&&'link[href="'+u+'"]'||s&&p&&'script[data-name="'+p+'"]'||c&&d&&'style[data-name="'+d+'"]',w=r.querySelector(h)||o.querySelector(h),y=h&&b&&document.createElement(b);y instanceof HTMLScriptElement?l?y.src=l:s&&(y.innerHTML=s,y.dataset.name=p,i&&y.setAttribute(ScriptAttribute.type,ScriptType.jsonld)):y instanceof HTMLLinkElement?(y.rel=stylesheet,y.href=u):y instanceof HTMLStyleElement&&(y.innerHTML=c,y.dataset.name=d),w?t(w):y&&(r.appendChild(y),S?(y.addEventListener("load",function e(n){y&&(y.removeEventListener("load",e),t(y))}),y.addEventListener("error",function e(t){y&&y.removeEventListener("error",e);console.error(t);n(new Error(""+failedToLoadScript))})):t(y))})},StringConstant$1,ElmentName,ElementId,ElementAttribute,MetaElementAttribute,MetaElementBrowserSupportAttribute,Selector$1,ErrorMessage$1,NpmScript,SupportType,LoadOnComplete;!function(e){e.nothing="",e.vamtiger="vamtiger",e.slash="/",e.jsExtension=".js",e.bashAnd="&&"}(StringConstant$1||(StringConstant$1={})),function(e){e.meta="meta",e.script="script"}(ElmentName||(ElmentName={})),function(e){e.vamtigerBrowserSupport="vamtiger-browser-support"}(ElementId||(ElementId={})),function(e){e.id="id"}(ElementAttribute||(ElementAttribute={})),function(e){e.baseUrl="baseUrl",e.name="name",e.url="url",e.primary="primary",e.loaded="loaded",e.supported="supported",e.unsupported="unsupported",e.error="error",e.polyfill="polyfill",e.loadCritical="loadCritical",e.load="load",e.wait="wait"}(MetaElementAttribute||(MetaElementAttribute={})),function(e){e.es2015Support="data-es2015-support",e.elementQuerySupport="data-element-query-support",e.webComponentSupport="data-web-component-support",e.fetchSupport="data-fetch-support"}(MetaElementBrowserSupportAttribute||(MetaElementBrowserSupportAttribute={})),(Selector$1||(Selector$1={})).vamtigerBrowserSupportScript='script[src*="vamtiger-browser-support"]',(ErrorMessage$1||(ErrorMessage$1={})).notBrowser="This is not a web browser",function(e){e.bundleSource="bundle-source"}(NpmScript||(NpmScript={})),function(e){e.primary="primary",e.secondary="secondary"}(SupportType||(SupportType={})),function(e){e.loadCritical="loadCritical",e.load="load"}(LoadOnComplete||(LoadOnComplete={}));var slash=StringConstant$1.slash,nothing=StringConstant$1.nothing,rootPath;function generateRootPath(){var e=document.head,t=document.body,n=Selector$1.vamtigerBrowserSupportScript,r=e.querySelector(n)||t.querySelector(n),o=new URL(r.src),a=o.pathname,s=o.origin,p=a.split(slash).filter(function(e){return e.trim()}).filter(function(e,t,n){return t<n.length-1}),i=[s].concat(p).join(slash);return rootPath=i,i}function getRootPath(){return rootPath=rootPath||generateRootPath()}var rootPath$1=getRootPath(),supportFile="vamtiger-web-component-support",polyfill=rootPath$1+"/vamtiger-web-component-polyfill.js",VamtigerBrowserSupport=window.VamtigerBrowserSupport,params={supportFile:supportFile},webComponent='\nconst shadowDomTemplate = document.createElement(\'template\');\n\nshadowDomTemplate.innerHTML = `\n<style>\n    .container {\n        border: 1px solid red;\n    }\n</style>\n\n<div class="container">\n    <slot name="test-slot-1"></slot>\n    <span>\n            VAMTIGER Browser Support\n    </span>\n    <slot name="test-slot-2"></slot>\n</div>\n`\n\nclass VamtigerWebComponentSupport extends HTMLElement {\n    static get observedAttributes() {\n        const observedAttributes = [\n            \'data-'+supportFile+"'\n        ];\n\n        return observedAttributes;\n    }\n\n    constructor() {\n        super();\n        const template = shadowDomTemplate.content.cloneNode(true);\n        const shadowRoot = this.attachShadow({mode: 'open'});\n\n        shadowRoot.appendChild(template);\n    }\n\n    connectedCallback() {\n        this.dataset['vamtigerWebComponentSupportConnectedCallback'] = '';\n    }\n\n    disconnectedCallback() {\n        this.dataset['vamtigerWebComponentSupportDisconnectedCallback'] = '';\n    }\n\n    attributeChangedCallback(attrName, oldValue, newValue) {\n        this.dataset['vamtigerWebComponentSupportOldValue'] = oldValue;\n        this.dataset['vamtigerWebComponentSupportNewValue'] = newValue;\n\n        this.dataset['vamtigerWebComponentSupportAttributeChangedCallback'] = '';\n    }\n}\n\ncustomElements.define('"+supportFile+"', VamtigerWebComponentSupport);\n";function test(){var e=document.body,t=document.createElement(supportFile);return t.innerHTML='\n        <span slot="test-slot-1">\n            Test Slot 1\n        </span>\n        <span>\n            No slot defined\n        </span>\n\n        <span slot="test-slot-2">\n            Test Slot 2\n        </span>\n    ',t.dataset.vamtigerWebComponentSupport="old-value",e.appendChild(t),t.dataset.vamtigerWebComponentSupport="new-value",e.removeChild(t),t.dataset.hasOwnProperty("vamtigerWebComponentSupportConnectedCallback")&&t.dataset.hasOwnProperty("vamtigerWebComponentSupportDisconnectedCallback")&&"old-value"===t.dataset.vamtigerWebComponentSupportOldValue&&t.dataset.vamtigerWebComponentSupportNewValue===t.dataset.vamtigerWebComponentSupport&&2===t.shadowRoot.children.length&&window.hasOwnProperty("HTMLTemplateElement")&&window.hasOwnProperty("HTMLSlotElement")&&!!HTMLElement.prototype.attachShadow}try{eval(webComponent),params.supported=test()}catch(e){params.error=e}params.supported||(params.polyfill=polyfill,params.wait=!0),VamtigerBrowserSupport(params);var VamtigerBrowserSupport$1=window.VamtigerBrowserSupport,params$1={supportFile:supportFile},polyfill$1="https://unpkg.com/@webcomponents/webcomponentsjs/webcomponents-bundle.js";function handleWebComponentsReady(){removeEventListener("WebComponentsReady",handleWebComponentsReady),VamtigerBrowserSupport$1(params$1)}function handleError(e){params$1.error=e.message,VamtigerBrowserSupport$1(params$1)}addEventListener("WebComponentsReady",handleWebComponentsReady),loadScript({src:polyfill$1}).catch(handleError)}();
//# sourceMappingURL=vamtiger-web-component-polyfill.js.map
