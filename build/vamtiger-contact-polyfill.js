(function () {
'use strict';

const __assign = Object.assign || function (target) {
    for (var source, i = 1; i < arguments.length; i++) {
        source = arguments[i];
        for (var prop in source) {
            if (Object.prototype.hasOwnProperty.call(source, prop)) {
                target[prop] = source[prop];
            }
        }
    }
    return target;
};

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
var regex = {
    leadingData: /^data/,
    trailingSupport: /(.*?Support)(Primary)?$/,
    supportScript: /vamtiger(-\w+)+-(support|polyfill)/,
    distTag: /(\d|latest)$/,
    bot: /bot|google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex/i
};
var stringConstant = __assign({}, StringConstant, { 365080655670: 365080655670 });
var selector = {
    vamtigerBrowserMethod: "script[src=\"" + ScriptUrl.vamtigerBrowserMethod + "\"]"
};

var vamtiger = StringConstant.vamtiger, jsExtension = StringConstant.jsExtension;
var leadingData = regex.leadingData;
var supportKeys = Object.keys(MetaElementBrowserSupportAttribute);
var supportScript = __assign({}, MetaElementBrowserSupportAttribute);
var loadSupport = {
    parallel: new Set([
        SupportType.primary,
        SupportType.secondary
    ]),
    series: new Set([])
};
var supportDone = Array.from(new Set([
    MetaElementAttribute.supported,
    MetaElementAttribute.unsupported
]));
var vc = gvc();
supportKeys.forEach(function (key) { return supportScript[key] = supportScript[key].replace(leadingData, vamtiger) + jsExtension; });
function gvc() {
    var a = stringConstant.arn, b = stringConstant.aws, c = stringConstant.sns, e = stringConstant["365080655670"], f = stringConstant["vamtiger-contact"], g = stringConstant.colon, h = stringConstant["5e5164d3"], i = stringConstant.cc71, j = stringConstant["4e5b"], k = stringConstant["9c34"], l = stringConstant["042fe735f31c"], m = stringConstant.hyphen;
    var d = Region.usWest2;
    var z = [
        a,
        b,
        c,
        d,
        e,
        f
    ].join(g);
    var x = [
        d,
        [
            h,
            i,
            j,
            k,
            l
        ].join(m)
    ].join(g);
    var y = {
        z: Array.from(z),
        x: Array.from(x),
        y: Array.from(d)
    };
    return y;
}

var AWS = window.AWS, gvc$1 = window._VamtigerContact_, VamtigerContact = window.VamtigerContact;
var config = AWS.config, SNS = AWS.SNS, Credentials = AWS.CognitoIdentityCredentials;
var origin = location.origin, href = location.href;
var stringify = JSON.stringify;
var _a = gvc$1(vc), x = _a.x, y = _a.y, z = _a.z;
var Subject = "Vamtiger contact: " + href;
var region = y;
var credentials = new Credentials({
    IdentityPoolId: x
});
AWS.config = __assign({}, config, { region: region, credentials: credentials });
var sns = new SNS();
function vamtigerContact(_a, resolve, reject) {
    var subject = _a.subject, template = _a.template;
    var Message = stringify({
        subject: subject,
        template: template,
        origin: href
    });
    var params = {
        Message: Message,
        Subject: Subject,
        TopicArn: z
    };
    sns.publish(params, function (error, response) { return error ? reject(error) : resolve(response); });
}
if (!VamtigerContact) {
    window.VamtigerContact = function (params) { return new Promise(function (resolve, reject) { return vamtigerContact(params, resolve, reject); }); };
}

}());
//# sourceMappingURL=vamtiger-contact-polyfill.js.map
