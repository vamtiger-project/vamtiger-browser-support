(function () {
'use strict';

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
}

var StringConstant;
(function (StringConstant) {
    StringConstant["nothing"] = "";
    StringConstant["build"] = "build";
    StringConstant["vamtiger"] = "vamtiger";
    StringConstant["slash"] = "/";
    StringConstant["jsExtension"] = ".js";
    StringConstant["bashAnd"] = "&&";
    StringConstant["arn"] = "arn";
    StringConstant["sns"] = "sns";
    StringConstant["aws"] = "aws";
    StringConstant["colon"] = ":";
    StringConstant["hyphen"] = "-";
    StringConstant["vamtiger-contact"] = "vamtiger-contact";
    StringConstant["5e5164d3"] = "5e5164d3";
    StringConstant["cc71"] = "cc71";
    StringConstant["4e5b"] = "4e5b";
    StringConstant["9c34"] = "9c34";
    StringConstant["042fe735f31c"] = "042fe735f31c";
})(StringConstant || (StringConstant = {}));
var Region;
(function (Region) {
    Region["usWest2"] = "us-west-2";
})(Region || (Region = {}));
var ElmentName;
(function (ElmentName) {
    ElmentName["meta"] = "meta";
    ElmentName["script"] = "script";
})(ElmentName || (ElmentName = {}));
var ElementId;
(function (ElementId) {
    ElementId["vamtigerBrowserSupport"] = "vamtiger-browser-support";
})(ElementId || (ElementId = {}));
var ElementAttribute;
(function (ElementAttribute) {
    ElementAttribute["id"] = "id";
})(ElementAttribute || (ElementAttribute = {}));
var MetaElementAttribute;
(function (MetaElementAttribute) {
    MetaElementAttribute["baseUrl"] = "baseUrl";
    MetaElementAttribute["name"] = "name";
    MetaElementAttribute["url"] = "url";
    MetaElementAttribute["primary"] = "primary";
    MetaElementAttribute["loaded"] = "loaded";
    MetaElementAttribute["supported"] = "supported";
    MetaElementAttribute["unsupported"] = "unsupported";
    MetaElementAttribute["error"] = "error";
    MetaElementAttribute["polyfill"] = "polyfill";
    MetaElementAttribute["loadCritical"] = "loadCritical";
    MetaElementAttribute["load"] = "load";
    MetaElementAttribute["wait"] = "wait";
})(MetaElementAttribute || (MetaElementAttribute = {}));
var MetaElementBrowserSupportAttribute;
(function (MetaElementBrowserSupportAttribute) {
    MetaElementBrowserSupportAttribute["botSupport"] = "data-bot-support";
    MetaElementBrowserSupportAttribute["es2015Support"] = "data-es2015-support";
    MetaElementBrowserSupportAttribute["elementQuerySupport"] = "data-element-query-support";
    MetaElementBrowserSupportAttribute["webComponentSupport"] = "data-web-component-support";
    MetaElementBrowserSupportAttribute["fetchSupport"] = "data-fetch-support";
    MetaElementBrowserSupportAttribute["awsSupport"] = "data-aws-support";
    MetaElementBrowserSupportAttribute["contactSupport"] = "data-contact-support";
})(MetaElementBrowserSupportAttribute || (MetaElementBrowserSupportAttribute = {}));
var Selector;
(function (Selector) {
    Selector["vamtigerBrowserSupportScript"] = "script[src*=\"vamtiger-browser-support\"]";
    Selector["vamtigerBrowserMethodJsonJs"] = "[src$=\"vamtiger-browser-method.js.json.js\"]";
    Selector["vamtigerBrowserMethodJson"] = "[data-name$=\"vamtiger-browser-method.js.json\"]";
})(Selector || (Selector = {}));
var ScriptUrl;
(function (ScriptUrl) {
    ScriptUrl["vamtigerBrowserMethod"] = "https://cdn.jsdelivr.net/npm/vamtiger-browser-method@latest/build/vamtiger-browser-method.js";
    ScriptUrl["vamtigerBrowserMethodJsonJs"] = "https://cdn.jsdelivr.net/npm/vamtiger-browser-method@latest/build/vamtiger-browser-method.js.json.js";
})(ScriptUrl || (ScriptUrl = {}));
var ErrorMessage;
(function (ErrorMessage) {
    ErrorMessage["notBrowser"] = "This is not a web browser";
    ErrorMessage["noFormForSelector"] = "No Form for Selector";
    ErrorMessage["noFieldInFormForSelector"] = "No Field in Form for Selector";
})(ErrorMessage || (ErrorMessage = {}));
var NpmScript;
(function (NpmScript) {
    NpmScript["bundleSource"] = "bundle-source";
})(NpmScript || (NpmScript = {}));
var SupportType;
(function (SupportType) {
    SupportType["primary"] = "primary";
    SupportType["secondary"] = "secondary";
})(SupportType || (SupportType = {}));
var LoadOnComplete;
(function (LoadOnComplete) {
    LoadOnComplete["loadCritical"] = "loadCritical";
    LoadOnComplete["load"] = "load";
})(LoadOnComplete || (LoadOnComplete = {}));
var VamtigerFormDataSupportFormFieldValue;
(function (VamtigerFormDataSupportFormFieldValue) {
    VamtigerFormDataSupportFormFieldValue["innerHTML"] = "innerHTML";
})(VamtigerFormDataSupportFormFieldValue || (VamtigerFormDataSupportFormFieldValue = {}));
var DocumentDataAttribute;
(function (DocumentDataAttribute) {
    DocumentDataAttribute["touchSupport"] = "vamtigerTouchSupport";
})(DocumentDataAttribute || (DocumentDataAttribute = {}));
var SupportFile;
(function (SupportFile) {
    SupportFile["elementQuery"] = "vamtiger-element-query-support";
})(SupportFile || (SupportFile = {}));
var Polyfill;
(function (Polyfill) {
    Polyfill["elementQuery"] = "https://cdn.jsdelivr.net/npm/eqcss@latest/EQCSS.min.js";
})(Polyfill || (Polyfill = {}));
var stringConstant = Object.assign(StringConstant, {
    365080655670: 365080655670
});
var selector = {
    vamtigerBrowserMethod: "script[src=\"" + ScriptUrl.vamtigerBrowserMethod + "\"]"
};

var slash = StringConstant.slash, nothing = StringConstant.nothing;
var rootPath;
function generateRootPath() {
    var head = document.head, body = document.body;
    var selector$$1 = Selector.vamtigerBrowserSupportScript;
    var vamtigerBrowserSupportScript = head.querySelector(selector$$1)
        || body.querySelector(selector$$1);
    var _a = new URL(vamtigerBrowserSupportScript.src), pathname = _a.pathname, origin = _a.origin;
    var paths = pathname
        .split(slash)
        .filter(function (path) { return path.trim(); })
        .filter(function (path, index, paths) { return index < paths.length - 1; });
    var currentRootPath = [origin]
        .concat(paths)
        .join(slash);
    rootPath = currentRootPath;
    return currentRootPath;
}
function getRootPath() {
    rootPath = rootPath || generateRootPath();
    return rootPath;
}

var rootPath$1 = getRootPath();
var supportFile = 'vamtiger-web-component-support';
var polyfill = rootPath$1 + "/vamtiger-web-component-polyfill.js";
var VamtigerBrowserSupport = window.VamtigerBrowserSupport;
var params = {
    supportFile: supportFile
};
var webComponent = "\nconst shadowDomTemplate = document.createElement('template');\n\nshadowDomTemplate.innerHTML = `\n<style>\n    .container {\n        border: 1px solid red;\n    }\n</style>\n\n<div class=\"container\">\n    <slot name=\"test-slot-1\"></slot>\n    <span>\n            VAMTIGER Browser Support\n    </span>\n    <slot name=\"test-slot-2\"></slot>\n</div>\n`\n\nclass VamtigerWebComponentSupport extends HTMLElement {\n    static get observedAttributes() {\n        const observedAttributes = [\n            'data-" + supportFile + "'\n        ];\n\n        return observedAttributes;\n    }\n\n    constructor() {\n        super();\n        const template = shadowDomTemplate.content.cloneNode(true);\n        const shadowRoot = this.attachShadow({mode: 'open'});\n\n        shadowRoot.appendChild(template);\n    }\n\n    connectedCallback() {\n        this.dataset['vamtigerWebComponentSupportConnectedCallback'] = '';\n    }\n\n    disconnectedCallback() {\n        this.dataset['vamtigerWebComponentSupportDisconnectedCallback'] = '';\n    }\n\n    attributeChangedCallback(attrName, oldValue, newValue) {\n        this.dataset['vamtigerWebComponentSupportOldValue'] = oldValue;\n        this.dataset['vamtigerWebComponentSupportNewValue'] = newValue;\n\n        this.dataset['vamtigerWebComponentSupportAttributeChangedCallback'] = '';\n    }\n}\n\ncustomElements.define('" + supportFile + "', VamtigerWebComponentSupport);\n";
function test() {
    var body = document.body;
    var customElement = document.createElement(supportFile);
    var result = false;
    customElement.innerHTML = "\n        <span slot=\"test-slot-1\">\n            Test Slot 1\n        </span>\n        <span>\n            No slot defined\n        </span>\n\n        <span slot=\"test-slot-2\">\n            Test Slot 2\n        </span>\n    ";
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
}
catch (error) {
    params.error = error;
}
if (!params.supported) {
    params.polyfill = polyfill;
    params.wait = true;
}
VamtigerBrowserSupport(params);

var params$1 = { supportFile: supportFile };
var polyfill$1 = 'https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs/webcomponents-bundle.js';
addEventListener('WebComponentsReady', handleWebComponentsReady);
main().catch(handleError);
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var VamtigerBrowserMethod, loadScript;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    VamtigerBrowserMethod = window.VamtigerBrowserMethod;
                    loadScript = VamtigerBrowserMethod.loadScript;
                    return [4 /*yield*/, loadScript({ src: polyfill$1 })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function handleWebComponentsReady() {
    var VamtigerBrowserSupport = window.VamtigerBrowserSupport;
    removeEventListener('WebComponentsReady', handleWebComponentsReady);
    VamtigerBrowserSupport(params$1);
}
function handleError(error) {
    var VamtigerBrowserSupport = window.VamtigerBrowserSupport;
    params$1.error = error.message;
    VamtigerBrowserSupport(params$1);
}

}());
//# sourceMappingURL=vamtiger-web-component-polyfill.js.map
