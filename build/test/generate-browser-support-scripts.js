"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var chai_1 = require("chai");
var vamtiger_get_directory_content_1 = require("vamtiger-get-directory-content");
var vamtiger_create_file_1 = require("vamtiger-create-file");
var types_1 = require("../types");
var config_1 = require("../config");
var format = require('beautify');
var supportScript = types_1.regex.supportScript;
var jsExtension = types_1.StringConstant.jsExtension, bashAnd = types_1.StringConstant.bashAnd;
var bundleSource = types_1.NpmScript.bundleSource;
var sourceFolder = path_1.resolve(__dirname, '../../source');
var packageJsonPath = path_1.resolve(path_1.dirname(sourceFolder), 'package.json');
var packageJson = require(packageJsonPath);
var stringify = JSON.stringify;
var formattedPackageJson;
var sourceFiles;
var supportScripts;
var bundleSourceScript;
describe('Generate Browser', function () {
    before(function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, vamtiger_get_directory_content_1.default(sourceFolder)];
                    case 1:
                        sourceFiles = _a.sent();
                        supportScripts = sourceFiles.filter(function (sourceFile) { return sourceFile.match(supportScript); });
                        bundleSourceScript = supportScripts
                            .map(getBundleSourceScript)
                            .join(" " + bashAnd + " ");
                        packageJson.scripts[bundleSource] = bundleSourceScript;
                        sortScripts();
                        formattedPackageJson = format(stringify(packageJson), config_1.jsonFormatConfig);
                        return [2 /*return*/];
                }
            });
        });
    });
    it('Support Scripts', test);
});
function test() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    chai_1.expect(packageJson.scripts[bundleSource]).to.equal(bundleSourceScript);
                    return [4 /*yield*/, vamtiger_create_file_1.default(packageJsonPath, formattedPackageJson)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function getBundleSourceScript(supportScript) {
    var _a = path_1.parse(supportScript), sourceFile = _a.base, fileName = _a.name, sourceExtension = _a.ext;
    var currentBundleSourceScript = "vamtiger-bundle-typescript --relativePath --entryFilePath source/" + sourceFile + " --bundleFilePath build/" + fileName + jsExtension + " --format iife --sourcemap true --copySourceMap";
    return currentBundleSourceScript;
}
function sortScripts() {
    var scriptNames = Object
        .keys(packageJson.scripts)
        .sort();
    var sortedScripts = {};
    scriptNames.forEach(function (scriptName) { return sortedScripts[scriptName] = packageJson.scripts[scriptName]; });
    packageJson.scripts = sortedScripts;
}
//# sourceMappingURL=generate-browser-support-scripts.js.map