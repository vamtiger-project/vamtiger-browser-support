"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var chai_1 = require("chai");
var vamtiger_copy_file_1 = require("vamtiger-copy-file");
var vamtiger_get_directory_content_1 = require("vamtiger-get-directory-content");
var buildFolder = path_1.resolve(__dirname, '..');
var testHtmlSource = path_1.resolve(__dirname, '../../source/test/html/test.html');
var testHtmlDestination = path_1.resolve(__dirname, '../index.html');
describe('Generate Test Preview', function () {
    before(function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, vamtiger_copy_file_1.default({
                            source: testHtmlSource,
                            destination: testHtmlDestination
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    });
    it('HTML', function () {
        return __awaiter(this, void 0, void 0, function () {
            var folderContent, Test, test;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, vamtiger_get_directory_content_1.default(buildFolder)
                            .then(function (result) { return new Set(result); })];
                    case 1:
                        folderContent = _a.sent();
                        Test = /** @class */ (function () {
                            function Test() {
                            }
                            Test.prototype.test = function () {
                                console.log();
                            };
                            return Test;
                        }());
                        test = new Test();
                        test.test();
                        chai_1.expect(folderContent.has(path_1.basename(testHtmlDestination))).to.be.true;
                        return [2 /*return*/];
                }
            });
        });
    });
});
//# sourceMappingURL=generate-test-preview.js.map