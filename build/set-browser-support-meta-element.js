"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var config_1 = require("./config");
var vamtigerBrowserSupportId = types_1.ElementId.vamtigerBrowserSupport;
var slash = types_1.StringConstant.slash, nothing = types_1.StringConstant.nothing;
var meta = types_1.ElmentName.meta;
var trailingSupport = types_1.regex.trailingSupport;
function default_1(_a) {
    var supportDataKey = _a.support;
    var _b = vamtigerBrowserSupportId, vamtigerBrowserSupport = window[_b];
    var dataset = vamtigerBrowserSupport.dataset;
    var baseUrl = dataset.baseUrl;
    var _c = supportDataKey.match(trailingSupport) || [], support = _c[1], supportType = _c[2];
    var currentSupportScript = config_1.supportScript[support];
    var scriptUrl = [
        baseUrl,
        currentSupportScript
    ].join(slash);
    var metaElement = document.createElement(meta);
    metaElement.dataset.name = support;
    metaElement.dataset.url = scriptUrl;
    if (supportType) {
        metaElement.dataset[supportType.toLowerCase()] = nothing;
    }
    else {
        metaElement.dataset[types_1.SupportType.secondary] = nothing;
    }
    vamtigerBrowserSupport.appendChild(metaElement);
}
exports.default = default_1;
;
//# sourceMappingURL=set-browser-support-meta-element.js.map