!function(){"use strict";var VamtigerBrowserSupport=window.VamtigerBrowserSupport,supportFile="vamtiger-web-component-support",polyfill="https://unpkg.com/@webcomponents/webcomponentsjs/webcomponents-bundle.js",params={supportFile:supportFile},webComponent='\nconst shadowDomTemplate = document.createElement(\'template\');\n\nshadowDomTemplate.innerHTML = `\n<style>\n    .container {\n        border: 1px solid red;\n    }\n</style>\n\n<div class="container">\n    <slot name="test-slot-1"></slot>\n    <span>\n            VAMTIGER Browser Support\n    </span>\n    <slot name="test-slot-2"></slot>\n</div>\n`\n\nclass VamtigerWebComponentSupport extends HTMLElement {\n    static get observedAttributes() {\n        const observedAttributes = [\n            \'data-'+supportFile+"'\n        ];\n\n        return observedAttributes;\n    }\n\n    constructor() {\n        super();\n        const template = shadowDomTemplate.content.cloneNode(true);\n        const shadowRoot = this.attachShadow({mode: 'open'});\n\n        shadowRoot.appendChild(template);\n    }\n\n    connectedCallback() {\n        this.dataset['vamtigerWebComponentSupportConnectedCallback'] = '';\n    }\n\n    disconnectedCallback() {\n        this.dataset['vamtigerWebComponentSupportDisconnectedCallback'] = '';\n    }\n\n    attributeChangedCallback(attrName, oldValue, newValue) {\n        this.dataset['vamtigerWebComponentSupportOldValue'] = oldValue;\n        this.dataset['vamtigerWebComponentSupportNewValue'] = newValue;\n\n        this.dataset['vamtigerWebComponentSupportAttributeChangedCallback'] = '';\n    }\n}\n\ncustomElements.define('"+supportFile+"', VamtigerWebComponentSupport);\n";function test(){var t=document.body,e=document.createElement(supportFile);return e.innerHTML='\n        <span slot="test-slot-1">\n            Test Slot 1\n        </span>\n        <span>\n            No slot defined\n        </span>\n\n        <span slot="test-slot-2">\n            Test Slot 2\n        </span>\n    ',e.dataset.vamtigerWebComponentSupport="old-value",t.appendChild(e),e.dataset.vamtigerWebComponentSupport="new-value",t.removeChild(e),e.dataset.hasOwnProperty("vamtigerWebComponentSupportConnectedCallback")&&e.dataset.hasOwnProperty("vamtigerWebComponentSupportDisconnectedCallback")&&"old-value"===e.dataset.vamtigerWebComponentSupportOldValue&&e.dataset.vamtigerWebComponentSupportNewValue===e.dataset.vamtigerWebComponentSupport&&2===e.shadowRoot.children.length&&window.hasOwnProperty("HTMLTemplateElement")&&window.hasOwnProperty("HTMLSlotElement")&&!!HTMLElement.prototype.attachShadow}try{eval(webComponent),params.supported=test()}catch(t){params.error=t}params.supported||(params.polyfill=polyfill),VamtigerBrowserSupport(params)}();
//# sourceMappingURL=vamtiger-web-component-support.js.map
