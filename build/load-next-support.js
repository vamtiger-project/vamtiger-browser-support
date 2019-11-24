"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var config_1 = require("./config");
var load_support_1 = require("./load-support");
var vamtigerBrowserSupportId = types_1.ElementId.vamtigerBrowserSupport;
var wait = types_1.MetaElementAttribute.wait;
function default_1(_a) {
    var supportType = _a.supportType;
    var _b = vamtigerBrowserSupportId, vamtigerBrowserSupport = window[_b];
    var supportTypeSelector = "meta[data-" + supportType + "]";
    var supportTypeMetaElements = Array.from(vamtigerBrowserSupport.querySelectorAll(supportTypeSelector));
    var supportTypeMetaElementsDone = supportTypeMetaElements
        .filter(function (element) { return config_1.supportDone.some(function (key) { return element.dataset.hasOwnProperty(key); }); })
        .filter(function (element) { return !element.dataset.hasOwnProperty(wait); });
    var loadNextSupport = supportTypeMetaElements && supportTypeMetaElements.length === supportTypeMetaElementsDone.length;
    if (loadNextSupport) {
        load_support_1.default().catch(console.warn);
    }
}
exports.default = default_1;
//# sourceMappingURL=load-next-support.js.map