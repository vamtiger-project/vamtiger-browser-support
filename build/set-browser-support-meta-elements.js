"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var config_1 = require("./config");
var set_browser_support_meta_element_1 = require("./set-browser-support-meta-element");
var vamtigerBrowserSupportId = types_1.ElementId.vamtigerBrowserSupport;
var trailingSupport = types_1.regex.trailingSupport;
function default_1() {
    var _a = vamtigerBrowserSupportId, vamtigerBrowserSupport = window[_a];
    var dataset = vamtigerBrowserSupport.dataset;
    var supportKey = Object
        .keys(dataset)
        .filter(function (key) { return key.match(trailingSupport); })
        .sort();
    supportKey.forEach(function (support) { return set_browser_support_meta_element_1.default({
        support: support,
        primary: config_1.primarySupport.has(support)
    }); });
}
exports.default = default_1;
//# sourceMappingURL=set-browser-support-meta-elements.js.map