"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var load_next_support_1 = require("./load-next-support");
var vamtigerBrowserSupportId = types_1.ElementId.vamtigerBrowserSupport;
var nothing = types_1.StringConstant.nothing;
var supportTypes = Object.keys(types_1.SupportType);
function updateBrowserSupport(_a) {
    var supportFile = _a.supportFile, supported = _a.supported, polyfill = _a.polyfill, polyfills = _a.polyfills, polyfillChain = _a.polyfillChain, error = _a.error, wait = _a.wait;
    return __awaiter(this, void 0, void 0, function () {
        var _b, vamtigerBrowserSupport, VamtigerBrowserSupport, VamtigerBrowserMethod, loadScript, loadScripts, loadScriptsSequentially, selector, metaElement, data, supportType;
        return __generator(this, function (_c) {
            _b = vamtigerBrowserSupportId, vamtigerBrowserSupport = window[_b], VamtigerBrowserSupport = window.VamtigerBrowserSupport, VamtigerBrowserMethod = window.VamtigerBrowserMethod;
            loadScript = VamtigerBrowserMethod.loadScript, loadScripts = VamtigerBrowserMethod.loadScripts, loadScriptsSequentially = VamtigerBrowserMethod.loadScriptsSequentially;
            selector = "[data-url*=" + supportFile + "]";
            metaElement = vamtigerBrowserSupport.querySelector(selector);
            data = metaElement.dataset;
            supportType = supportTypes.find(function (supportType) { return data.hasOwnProperty(supportType); });
            if (supported) {
                data.supported = nothing;
            }
            else {
                data.unsupported = nothing;
            }
            if (wait) {
                data.wait = nothing;
            }
            else {
                delete data.wait;
            }
            if (error) {
                data.error = error;
            }
            if (polyfill) {
                data.polyfill = polyfill;
                loadScript({ src: polyfill })
                    .then(function () { return load_next_support_1.default({ supportType: supportType }); });
            }
            else if (polyfillChain) {
                loadScriptsSequentially(polyfillChain.map(function (srcs) { return srcs.map(function (src) { return ({ src: src }); }); }))
                    .then(function (scripts) { return scripts.forEach(function (_a, index) {
                    var polyfill = _a.src;
                    return data["polyfill-" + (index + 1)] = polyfill;
                }); })
                    .then(function () { return load_next_support_1.default({ supportType: supportType }); });
            }
            else if (polyfills) {
                loadScripts(polyfills.map(function (polyfill) { return ({ src: polyfill }); }))
                    .then(function (scripts) { return scripts.forEach(function (_a, index) {
                    var polyfill = _a.src;
                    return data["polyfill-" + (index + 1)] = polyfill;
                }); })
                    .then(function () { return load_next_support_1.default({ supportType: supportType }); });
            }
            else {
                load_next_support_1.default({ supportType: supportType });
            }
            return [2 /*return*/];
        });
    });
}
exports.default = updateBrowserSupport;
if (!window.VamtigerBrowserSupport) {
    window.VamtigerBrowserSupport = updateBrowserSupport;
}
//# sourceMappingURL=update-browser-support.js.map