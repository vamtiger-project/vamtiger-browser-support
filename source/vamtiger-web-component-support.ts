import { IUpdateBrowserSupport } from './types';
import loadScript from '../node_modules/vamtiger-browser-method/source/load-script';

const { VamtigerBrowserSupport } = window;
const supportFile = 'vamtiger-web-component-support';
const polyfill = 'https://unpkg.com/@webcomponents/webcomponentsjs';
const params = {
    supportFile
} as IUpdateBrowserSupport;
const webComponent = `
const shadowDomTemplate = document.createElement('template');

shadowDomTemplate.innerHTML = \`
<style>
    .container {
        border: 1px solid red;
    }
</style>

<div class="container">
    <slot name="test-slot-1"></slot>
    <span>
            VAMTIGER Browser Support
    </span>
    <slot name="test-slot-2"></slot>
</div>
\`

class VamtigerWebComponentSupport extends HTMLElement {
    static get observedAttributes() {
        const observedAttributes = [
            'data-${supportFile}'
        ];

        return observedAttributes;
    }

    constructor() {
        super();
        const template = shadowDomTemplate.content.cloneNode(true);
        const shadowRoot = this.attachShadow({mode: 'open'});

        shadowRoot.appendChild(template);
    }

    connectedCallback() {
        this.dataset['vamtigerWebComponentSupportConnectedCallback'] = '';
    }

    disconnectedCallback() {
        this.dataset['vamtigerWebComponentSupportDisconnectedCallback'] = '';
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        this.dataset['vamtigerWebComponentSupportOldValue'] = oldValue;
        this.dataset['vamtigerWebComponentSupportNewValue'] = newValue;

        this.dataset['vamtigerWebComponentSupportAttributeChangedCallback'] = '';
    }
}

customElements.define('${supportFile}', VamtigerWebComponentSupport);
`;

function test() {
    const { body } = document;
    const customElement = document.createElement(supportFile);

    let result = false;

    customElement.innerHTML = `
        <span slot="test-slot-1">
            Test Slot 1
        </span>
        <span>
            No slot defined
        </span>

        <span slot="test-slot-2">
            Test Slot 2
        </span>
    `;

    customElement.dataset['vamtigerWebComponentSupport'] = 'old-value';

    body.appendChild(customElement);

    customElement.dataset['vamtigerWebComponentSupport'] = 'new-value';

    body.removeChild(customElement);

    result = customElement.dataset.hasOwnProperty('vamtigerWebComponentSupportConnectedCallback')
        && customElement.dataset.hasOwnProperty('vamtigerWebComponentSupportDisconnectedCallback')
        && customElement.dataset['vamtigerWebComponentSupportOldValue'] === 'old-value'
        && customElement.dataset['vamtigerWebComponentSupportNewValue'] === customElement.dataset['vamtigerWebComponentSupport']
        && customElement.shadowRoot.children.length === 2
        && window.hasOwnProperty('HTMLTemplateElement')
        && window.hasOwnProperty('HTMLSlotElement')
        && !!HTMLElement.prototype.attachShadow;

    return result;
}

try {
    eval(webComponent);

    params.supported = test();
} catch(error) {
    params.error = error;
}

if (!params.supported) {
    params.polyfill = polyfill;
}

VamtigerBrowserSupport(params);