"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
})(StringConstant = exports.StringConstant || (exports.StringConstant = {}));
var Region;
(function (Region) {
    Region["usWest2"] = "us-west-2";
})(Region = exports.Region || (exports.Region = {}));
var ElmentName;
(function (ElmentName) {
    ElmentName["meta"] = "meta";
    ElmentName["script"] = "script";
})(ElmentName = exports.ElmentName || (exports.ElmentName = {}));
var ElementId;
(function (ElementId) {
    ElementId["vamtigerBrowserSupport"] = "vamtiger-browser-support";
})(ElementId = exports.ElementId || (exports.ElementId = {}));
var ElementAttribute;
(function (ElementAttribute) {
    ElementAttribute["id"] = "id";
})(ElementAttribute = exports.ElementAttribute || (exports.ElementAttribute = {}));
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
})(MetaElementAttribute = exports.MetaElementAttribute || (exports.MetaElementAttribute = {}));
var MetaElementBrowserSupportAttribute;
(function (MetaElementBrowserSupportAttribute) {
    MetaElementBrowserSupportAttribute["botSupport"] = "data-bot-support";
    MetaElementBrowserSupportAttribute["es2015Support"] = "data-es2015-support";
    MetaElementBrowserSupportAttribute["elementQuerySupport"] = "data-element-query-support";
    MetaElementBrowserSupportAttribute["webComponentSupport"] = "data-web-component-support";
    MetaElementBrowserSupportAttribute["fetchSupport"] = "data-fetch-support";
    MetaElementBrowserSupportAttribute["awsSupport"] = "data-aws-support";
    MetaElementBrowserSupportAttribute["contactSupport"] = "data-contact-support";
})(MetaElementBrowserSupportAttribute = exports.MetaElementBrowserSupportAttribute || (exports.MetaElementBrowserSupportAttribute = {}));
var Selector;
(function (Selector) {
    Selector["vamtigerBrowserSupportScript"] = "script[src*=\"vamtiger-browser-support\"]";
    Selector["vamtigerBrowserMethodJsonJs"] = "[src$=\"vamtiger-browser-method.js.json.js\"]";
    Selector["vamtigerBrowserMethodJson"] = "[data-name$=\"vamtiger-browser-method.js.json\"]";
})(Selector = exports.Selector || (exports.Selector = {}));
var ScriptUrl;
(function (ScriptUrl) {
    ScriptUrl["vamtigerBrowserMethod"] = "https://vamtiger-project.github.io/vamtiger-browser-method/build/vamtiger-browser-method.js";
    ScriptUrl["vamtigerBrowserMethodJsonJs"] = "https://vamtiger-project.github.io/vamtiger-browser-method/build/vamtiger-browser-method.js.json.js";
})(ScriptUrl = exports.ScriptUrl || (exports.ScriptUrl = {}));
var ErrorMessage;
(function (ErrorMessage) {
    ErrorMessage["notBrowser"] = "This is not a web browser";
    ErrorMessage["noFormForSelector"] = "No Form for Selector";
    ErrorMessage["noFieldInFormForSelector"] = "No Field in Form for Selector";
    ErrorMessage["objectAssignNotSupported"] = "Object.assign is not supported";
    ErrorMessage["arrayFromNotSupported"] = "Array.from is not supported";
    ErrorMessage["destructringAssignmentNotSupported"] = "Destructuring Assignment is not supported";
    ErrorMessage["arrowFunctionsNotSupported"] = "Arrow functions are not supported";
})(ErrorMessage = exports.ErrorMessage || (exports.ErrorMessage = {}));
var NpmScript;
(function (NpmScript) {
    NpmScript["bundleSource"] = "bundle-source";
})(NpmScript = exports.NpmScript || (exports.NpmScript = {}));
var SupportType;
(function (SupportType) {
    SupportType["primary"] = "primary";
    SupportType["secondary"] = "secondary";
})(SupportType = exports.SupportType || (exports.SupportType = {}));
var LoadOnComplete;
(function (LoadOnComplete) {
    LoadOnComplete["loadCritical"] = "loadCritical";
    LoadOnComplete["load"] = "load";
})(LoadOnComplete = exports.LoadOnComplete || (exports.LoadOnComplete = {}));
var VamtigerFormDataSupportFormFieldValue;
(function (VamtigerFormDataSupportFormFieldValue) {
    VamtigerFormDataSupportFormFieldValue["innerHTML"] = "innerHTML";
})(VamtigerFormDataSupportFormFieldValue = exports.VamtigerFormDataSupportFormFieldValue || (exports.VamtigerFormDataSupportFormFieldValue = {}));
var DocumentDataAttribute;
(function (DocumentDataAttribute) {
    DocumentDataAttribute["touchSupport"] = "vamtigerTouchSupport";
    DocumentDataAttribute["bot"] = "vamtigerBot";
    DocumentDataAttribute["legacy"] = "vamtigerLegacy";
    DocumentDataAttribute["textMode"] = "vamtigerTextMode";
})(DocumentDataAttribute = exports.DocumentDataAttribute || (exports.DocumentDataAttribute = {}));
var SupportFile;
(function (SupportFile) {
    SupportFile["elementQuery"] = "vamtiger-element-query-support";
})(SupportFile = exports.SupportFile || (exports.SupportFile = {}));
var Polyfill;
(function (Polyfill) {
    Polyfill["elementQuery"] = "https://cdn.jsdelivr.net/npm/eqcss@latest/EQCSS.min.js";
})(Polyfill = exports.Polyfill || (exports.Polyfill = {}));
exports.supportTypes = Object.keys(SupportType);
exports.regex = {
    leadingData: /^data/,
    trailingSupport: /(.*?Support)(Primary)?$/,
    supportScript: /vamtiger(-\w+)+-(support|polyfill)/,
    distTag: /(\d|latest)$/,
    bot: /bot|google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex|googlebot|google-structured-data-testing-tool|bingbot|linkedinbot|mediapartners-google/i
};
exports.stringConstant = __assign({}, StringConstant, { 365080655670: 365080655670 });
exports.selector = {
    vamtigerBrowserMethod: "script[src=\"" + ScriptUrl.vamtigerBrowserMethod + "\"]"
};
//# sourceMappingURL=types.js.map