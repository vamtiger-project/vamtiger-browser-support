"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var id = types_1.ElementAttribute.id;
var vamtigerBrowserSupport = types_1.ElementId.vamtigerBrowserSupport;
var baseUrl = types_1.MetaElementAttribute.baseUrl;
var es2015Support = types_1.MetaElementBrowserSupportAttribute.es2015Support;
var nothing = types_1.StringConstant.nothing, slash = types_1.StringConstant.slash, build = types_1.StringConstant.build;
var selector = types_1.Selector.vamtigerBrowserSupportScript;
var distTag = types_1.regex.distTag;
function default_1() {
    var head = document.head;
    var firstChild = head.firstChild;
    var metaElement = document.createElement(types_1.ElmentName.meta);
    var vamtigerBrowserSupportScript = document.querySelector(selector);
    var vamtigerBrowserSupportScriptPaths = vamtigerBrowserSupportScript.src.split(slash);
    var baseUrlPaths = new Set(vamtigerBrowserSupportScriptPaths
        .slice(0, vamtigerBrowserSupportScriptPaths.length - 1));
    var baseUrlPath = vamtigerBrowserSupportScript.src.match(distTag)
        && vamtigerBrowserSupportScript.src + "/build"
        || Array.from(baseUrlPaths).join(slash);
    metaElement.setAttribute(id, vamtigerBrowserSupport);
    vamtigerBrowserSupportScript && Object.keys(vamtigerBrowserSupportScript.dataset).forEach(function (key) {
        if (!metaElement.dataset[key]) {
            metaElement.dataset[key] = vamtigerBrowserSupportScript.dataset[key];
        }
    });
    metaElement.dataset[baseUrl] = baseUrlPath;
    head.insertBefore(metaElement, firstChild);
}
exports.default = default_1;
//# sourceMappingURL=set-meta-element.js.map