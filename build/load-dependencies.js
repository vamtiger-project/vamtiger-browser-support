"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var config_1 = require("./config");
var is_legacy_1 = require("./is-legacy");
var parse = JSON.parse;
function default_1() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, loadLegacyDependencies()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, loadDependencies()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.default = default_1;
function loadLegacyDependencies() {
    return __awaiter(this, void 0, void 0, function () {
        var legacy, urlsGroups;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, is_legacy_1.default()];
                case 1:
                    legacy = _a.sent();
                    urlsGroups = legacy && config_1.legacyDependencies || [];
                    return [4 /*yield*/, Promise.all(urlsGroups.map(function (urls) { return Promise.all(urls.map(function (url) { return loadDependency(url).catch(handleError); })); }))];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function loadDependencies() {
    return __awaiter(this, void 0, void 0, function () {
        var legacy, urls, dependencies;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, is_legacy_1.default()];
                case 1:
                    legacy = _a.sent();
                    urls = [legacy && types_1.ScriptUrl.vamtigerBrowserMethod || types_1.ScriptUrl.vamtigerBrowserMethodJsonJs]
                        .concat(config_1.dependencies)
                        .filter(function (url) { return url; });
                    return [4 /*yield*/, Promise.all(urls.map(loadDependency))];
                case 2:
                    dependencies = _a.sent();
                    return [4 /*yield*/, loadVamtigerBrowserMethod()];
                case 3:
                    _a.sent();
                    return [2 /*return*/, dependencies];
            }
        });
    });
}
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
function loadVamtigerBrowserMethod() {
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
            addEventListener('vamtigerBrowserMethodReady', resolve);
            return [2 /*return*/];
        });
    }); });
}
function handleError(error) {
    console.warn(error.name);
    console.warn(error.message);
    console.warn(error.stack);
}
//# sourceMappingURL=load-dependencies.js.map