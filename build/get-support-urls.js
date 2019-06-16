"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var vamtigerBrowserSupportId = types_1.ElementId.vamtigerBrowserSupport;
function default_1(_a) {
    var supportType = _a.supportType;
    var _b = vamtigerBrowserSupportId, vamtigerBrowserSupport = window[_b];
    var urls = new Set();
    var elements = Array.from(vamtigerBrowserSupport.children);
    var data;
    elements.forEach(function (element) {
        data = element.dataset;
        if (data.hasOwnProperty(supportType)) {
            urls.add(data.url);
        }
    });
    return Array.from(urls);
}
exports.default = default_1;
//# sourceMappingURL=get-support-urls.js.map