"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var types_1 = require("../types");
var slash = types_1.StringConstant.slash;
var vamtigerBrowserSupportId = types_1.ElementId.vamtigerBrowserSupport;
var _a = vamtigerBrowserSupportId, vamtigerBrowserSupport = window[_a];
var metaElements = Array
    .from(vamtigerBrowserSupport.children)
    .sort();
var category = {
    supported: [],
    unsupported: []
};
var categories = Object.keys(category).sort();
exports.default = (function () { return describe('Browser Support Scripts', function () {
    metaElements.forEach(function (metaElement) {
        var data = metaElement.dataset;
        var url = data.url;
        var urlPaths = url.split(slash);
        var script = urlPaths[urlPaths.length - 1];
        var result = metaElement.dataset.hasOwnProperty('supported') && 'supported' || 'unsupported';
        category[result].push(script);
    });
    categories.forEach(function (currentCategory) { return describe(currentCategory, function () {
        category[currentCategory].forEach(function (script) { return it(script, function () {
            chai_1.expect(script).to.be.ok;
        }); });
    }); });
}); });
//# sourceMappingURL=browser-support.js.map