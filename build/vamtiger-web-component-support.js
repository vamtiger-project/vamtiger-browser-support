var index=function(exports){"use strict";var StringConstant,Region,ElmentName,ElementId,ElementAttribute,MetaElementAttribute,MetaElementBrowserSupportAttribute,Selector,ErrorMessage,NpmScript,SupportType,LoadOnComplete,VamtigerFormDataSupportFormFieldValue,SupportFile,Polyfill;!function(t){t.nothing="",t.build="build",t.vamtiger="vamtiger",t.slash="/",t.jsExtension=".js",t.bashAnd="&&",t.arn="arn",t.sns="sns",t.aws="aws",t.colon=":",t.hyphen="-",t["vamtiger-contact"]="vamtiger-contact",t["5e5164d3"]="5e5164d3",t.cc71="cc71",t["4e5b"]="4e5b",t["9c34"]="9c34",t["042fe735f31c"]="042fe735f31c"}(StringConstant||(StringConstant={})),function(t){t.usWest2="us-west-2"}(Region||(Region={})),function(t){t.meta="meta",t.script="script"}(ElmentName||(ElmentName={})),function(t){t.vamtigerBrowserSupport="vamtiger-browser-support"}(ElementId||(ElementId={})),function(t){t.id="id"}(ElementAttribute||(ElementAttribute={})),function(t){t.baseUrl="baseUrl",t.name="name",t.url="url",t.primary="primary",t.loaded="loaded",t.supported="supported",t.unsupported="unsupported",t.error="error",t.polyfill="polyfill",t.loadCritical="loadCritical",t.load="load",t.wait="wait"}(MetaElementAttribute||(MetaElementAttribute={})),function(t){t.es2015Support="data-es2015-support",t.elementQuerySupport="data-element-query-support",t.webComponentSupport="data-web-component-support",t.fetchSupport="data-fetch-support",t.awsSupport="data-aws-support",t.contactSupport="data-contact-support"}(MetaElementBrowserSupportAttribute||(MetaElementBrowserSupportAttribute={})),function(t){t.vamtigerBrowserSupportScript='script[src*="vamtiger-browser-support"]'}(Selector||(Selector={})),function(t){t.notBrowser="This is not a web browser",t.noFormForSelector="No Form for Selector",t.noFieldInFormForSelector="No Field in Form for Selector"}(ErrorMessage||(ErrorMessage={})),function(t){t.bundleSource="bundle-source"}(NpmScript||(NpmScript={})),function(t){t.primary="primary",t.secondary="secondary"}(SupportType||(SupportType={})),function(t){t.loadCritical="loadCritical",t.load="load"}(LoadOnComplete||(LoadOnComplete={})),function(t){t.innerHTML="innerHTML"}(VamtigerFormDataSupportFormFieldValue||(VamtigerFormDataSupportFormFieldValue={})),function(t){t.elementQuery="vamtiger-element-query-support"}(SupportFile||(SupportFile={})),function(t){t.elementQuery="https://unpkg.com/eqcss/EQCSS.min.js"}(Polyfill||(Polyfill={}));var stringConstant=Object.assign(StringConstant,{365080655670:365080655670}),slash=StringConstant.slash,nothing=StringConstant.nothing,rootPath;function generateRootPath(){var t=document.head,e=document.body,o=Selector.vamtigerBrowserSupportScript,n=t.querySelector(o)||e.querySelector(o),r=new URL(n.src),a=r.pathname,p=r.origin,s=a.split(slash).filter(function(t){return t.trim()}).filter(function(t,e,o){return e<o.length-1}),l=[p].concat(s).join(slash);return rootPath=l,l}function getRootPath(){return rootPath=rootPath||generateRootPath()}var rootPath$1=getRootPath(),supportFile="vamtiger-web-component-support",polyfill=rootPath$1+"/vamtiger-web-component-polyfill.js",VamtigerBrowserSupport=window.VamtigerBrowserSupport,params={supportFile:supportFile},webComponent='\nconst shadowDomTemplate = document.createElement(\'template\');\n\nshadowDomTemplate.innerHTML = `\n<style>\n    .container {\n        border: 1px solid red;\n    }\n</style>\n\n<div class="container">\n    <slot name="test-slot-1"></slot>\n    <span>\n            VAMTIGER Browser Support\n    </span>\n    <slot name="test-slot-2"></slot>\n</div>\n`\n\nclass VamtigerWebComponentSupport extends HTMLElement {\n    static get observedAttributes() {\n        const observedAttributes = [\n            \'data-'+supportFile+"'\n        ];\n\n        return observedAttributes;\n    }\n\n    constructor() {\n        super();\n        const template = shadowDomTemplate.content.cloneNode(true);\n        const shadowRoot = this.attachShadow({mode: 'open'});\n\n        shadowRoot.appendChild(template);\n    }\n\n    connectedCallback() {\n        this.dataset['vamtigerWebComponentSupportConnectedCallback'] = '';\n    }\n\n    disconnectedCallback() {\n        this.dataset['vamtigerWebComponentSupportDisconnectedCallback'] = '';\n    }\n\n    attributeChangedCallback(attrName, oldValue, newValue) {\n        this.dataset['vamtigerWebComponentSupportOldValue'] = oldValue;\n        this.dataset['vamtigerWebComponentSupportNewValue'] = newValue;\n\n        this.dataset['vamtigerWebComponentSupportAttributeChangedCallback'] = '';\n    }\n}\n\ncustomElements.define('"+supportFile+"', VamtigerWebComponentSupport);\n";function test(){var t=document.body,e=document.createElement(supportFile);return e.innerHTML='\n        <span slot="test-slot-1">\n            Test Slot 1\n        </span>\n        <span>\n            No slot defined\n        </span>\n\n        <span slot="test-slot-2">\n            Test Slot 2\n        </span>\n    ',e.dataset.vamtigerWebComponentSupport="old-value",t.appendChild(e),e.dataset.vamtigerWebComponentSupport="new-value",t.removeChild(e),e.dataset.hasOwnProperty("vamtigerWebComponentSupportConnectedCallback")&&e.dataset.hasOwnProperty("vamtigerWebComponentSupportDisconnectedCallback")&&"old-value"===e.dataset.vamtigerWebComponentSupportOldValue&&e.dataset.vamtigerWebComponentSupportNewValue===e.dataset.vamtigerWebComponentSupport&&2===e.shadowRoot.children.length&&window.hasOwnProperty("HTMLTemplateElement")&&window.hasOwnProperty("HTMLSlotElement")&&!!HTMLElement.prototype.attachShadow}try{eval(webComponent),params.supported=test()}catch(t){params.error=t}return params.supported||(params.polyfill=polyfill,params.wait=!0),VamtigerBrowserSupport(params),exports.supportFile=supportFile,exports.polyfill=polyfill,exports}({});
//# sourceMappingURL=vamtiger-web-component-support.js.map
