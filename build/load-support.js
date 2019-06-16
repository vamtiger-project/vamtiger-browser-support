"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var config_1 = require("./config");
var get_support_urls_1 = require("./get-support-urls");
var load_scripts_1 = require("./load-scripts");
var load_next_support_1 = require("./load-next-support");
var parallel = config_1.loadSupport.parallel;
var index = 0;
var done = false;
function default_1() {
    return __awaiter(this, void 0, void 0, function () {
        var VamtigerBrowserMethod, loadScript, supportType, supportUrls, supportScripts, scripts;
        return __generator(this, function (_a) {
            VamtigerBrowserMethod = window.VamtigerBrowserMethod;
            loadScript = VamtigerBrowserMethod.loadScript;
            supportType = types_1.supportTypes[index];
            supportUrls = get_support_urls_1.default({ supportType: supportType });
            supportScripts = [];
            if (parallel.has(supportType)) {
                scripts = Promise.all(supportUrls.map(function (src) { return loadScript({ src: src }); }));
                if (!supportUrls.length) {
                    load_next_support_1.default({ supportType: supportType });
                }
            }
            else if (supportType) {
                scripts = supportUrls.reduce(function (loadSupport, src) { return loadSupport
                    .then(function () { return loadScript({ src: src }); })
                    .then(function (script) { return supportScripts.push(script) && supportScripts; }); }, Promise.resolve(supportScripts));
            }
            else if (!supportType && !done) {
                done = true;
                scripts = load_scripts_1.default();
            }
            index++;
            return [2 /*return*/, scripts];
        });
    });
}
exports.default = default_1;
//# sourceMappingURL=load-support.js.map