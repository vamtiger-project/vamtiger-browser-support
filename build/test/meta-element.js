"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var types_1 = require("../types");
var vamtigerBrowserSupportId = types_1.ElementId.vamtigerBrowserSupport;
exports.default = (function () { return describe('Meta Element', function () {
    it('Added to document head', function () {
        return __awaiter(this, void 0, void 0, function () {
            var vamtigerBrowserSupport;
            return __generator(this, function (_a) {
                vamtigerBrowserSupport = document.head.querySelector("[id=" + vamtigerBrowserSupportId + "]");
                chai_1.expect(vamtigerBrowserSupport).to.be.ok;
                return [2 /*return*/];
            });
        });
    });
}); });
//# sourceMappingURL=meta-element.js.map