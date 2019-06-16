(function () {
'use strict';

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

var VamtigerBrowserSupport = window.VamtigerBrowserSupport;
var supportFile = SupportFile.elementQuery;
var polyfill = Polyfill.elementQuery;
var params = {
    supportFile: supportFile
};
if (window.hasOwnProperty('EQCSS')) {
    params.supported = true;
}
else {
    params.supported = false;
    params.polyfill = polyfill;
}
VamtigerBrowserSupport(params);

}());
//# sourceMappingURL=vamtiger-element-query-support.js.map
