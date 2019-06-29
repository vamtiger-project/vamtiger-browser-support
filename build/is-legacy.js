"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var objectAssignNotSupported = types_1.ErrorMessage.objectAssignNotSupported, arrayFromNotSupported = types_1.ErrorMessage.arrayFromNotSupported, destructringAssignmentNotSupported = types_1.ErrorMessage.destructringAssignmentNotSupported, arrowFunctionsNotSupported = types_1.ErrorMessage.arrowFunctionsNotSupported;
var legacy;
function default_1() {
    return __awaiter(this, void 0, void 0, function () {
        var isLegacy, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(legacy === undefined)) return [3 /*break*/, 2];
                    return [4 /*yield*/, Promise
                            .all([
                            objectAssign(),
                            arrayFrom(),
                            destructringAssignment(),
                            arrowFunctions()
                        ])
                            .then(function (results) { return !results.every(function (result) { return result; }); })];
                case 1:
                    _a = _b.sent();
                    return [3 /*break*/, 3];
                case 2:
                    _a = legacy;
                    _b.label = 3;
                case 3:
                    isLegacy = _a;
                    legacy = isLegacy ? true : false;
                    return [2 /*return*/, legacy];
            }
        });
    });
}
exports.default = default_1;
function objectAssign() {
    return new Promise(function (resolve, reject) {
        var result = false;
        try {
            eval("Object.assign({result: false}, {result: true}).result");
            result = true;
        }
        catch (error) {
            handleError(new Error(objectAssignNotSupported));
        }
        resolve(result);
    });
}
function arrayFrom() {
    return new Promise(function (resolve, reject) {
        var result = false;
        try {
            eval("Array.from('1234').length === 4");
            result = true;
        }
        catch (error) {
            handleError(new Error(arrayFromNotSupported));
        }
        resolve(result);
    });
}
function destructringAssignment() {
    return new Promise(function (resolve, reject) {
        var result = false;
        try {
            eval("\n            let object = {\n                result: true\n            };\n            let { result: currentResult } = object;\n        ");
            result = true;
        }
        catch (error) {
            handleError(new Error(destructringAssignmentNotSupported));
        }
        resolve(result);
    });
}
function arrowFunctions() {
    return new Promise(function (resolve, reject) {
        var result = false;
        try {
            eval("(() => true)()");
            result = true;
        }
        catch (error) {
            handleError(new Error(arrowFunctionsNotSupported));
        }
        resolve(result);
    });
}
function handleError(error) {
    console.warn(error.message);
}
//# sourceMappingURL=is-legacy.js.map