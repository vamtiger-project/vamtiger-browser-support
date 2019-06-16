"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./config");
var types_1 = require("./types");
var vamtigerBrowserSupportId = types_1.ElementId.vamtigerBrowserSupport;
function default_1() {
    return __awaiter(this, void 0, void 0, function () {
        var VamtigerBrowserMethod, loadScript, _a, vamtigerBrowserSupport, scripts, supportUrls, loadScripts;
        return __generator(this, function (_b) {
            VamtigerBrowserMethod = window.VamtigerBrowserMethod;
            loadScript = VamtigerBrowserMethod.loadScript;
            _a = vamtigerBrowserSupportId, vamtigerBrowserSupport = window[_a];
            scripts = [];
            supportUrls = config_1.loadOnComplete
                .map(function (key) { return vamtigerBrowserSupport.dataset[key]; })
                .filter(function (url) { return url; });
            loadScripts = supportUrls.reduce(function (loadSupport, src) { return loadSupport
                .then(function () { return loadScript({ src: src }); })
                .then(function (script) { return scripts.push(script) && scripts; }); }, Promise.resolve(scripts));
            return [2 /*return*/, loadScripts];
        });
    });
}
exports.default = default_1;
//# sourceMappingURL=load-scripts.js.map