"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var config_1 = require("./config");
var is_bot_1 = require("./is-bot");
var parse = JSON.parse;
function default_1() {
    return __awaiter(this, void 0, void 0, function () {
        var urls, dependencies;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    urls = [is_bot_1.default() && types_1.ScriptUrl.vamtigerBrowserMethod || types_1.ScriptUrl.vamtigerBrowserMethodJsonJs]
                        .concat(config_1.dependencies)
                        .filter(function (url) { return url; });
                    return [4 /*yield*/, Promise.all(urls.map(loadDependency))];
                case 1:
                    dependencies = _a.sent();
                    return [4 /*yield*/, loanVamtigerBrowserMethod()];
                case 2:
                    _a.sent();
                    return [2 /*return*/, dependencies];
            }
        });
    });
}
exports.default = default_1;
function loadDependency(src) {
    return new Promise(function (resolve, reject) {
        var head = document.head;
        var selector = "[src=\"" + src + "\"]";
        var existingScript = head.querySelector(selector);
        var script = !existingScript && document.createElement('script');
        if (script) {
            script.addEventListener('load', function (event) { return resolve(script); });
            script.addEventListener('error', reject);
            script.src = src;
            head.appendChild(script);
        }
        else if (existingScript) {
            resolve(existingScript);
        }
        else {
            resolve();
        }
    });
}
function loanVamtigerBrowserMethod() {
    var _this = this;
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var head, selector, script, jsonText, data, js, vamtigerBrowserMethodScript;
        return __generator(this, function (_a) {
            head = document.head;
            selector = types_1.Selector.vamtigerBrowserMethodJson;
            script = document.querySelector(selector);
            jsonText = script && script.innerHTML;
            data = jsonText && parse(jsonText);
            js = data && data.text;
            vamtigerBrowserMethodScript = document.createElement('script');
            if (js) {
                vamtigerBrowserMethodScript.dataset.name = types_1.ScriptUrl.vamtigerBrowserMethod;
                vamtigerBrowserMethodScript.innerHTML = js;
                head.appendChild(vamtigerBrowserMethodScript);
            }
            resolve();
            return [2 /*return*/];
        });
    }); });
}
//# sourceMappingURL=load-dependencies.js.map