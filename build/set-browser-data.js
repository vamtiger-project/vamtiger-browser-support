"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var is_bot_1 = require("./is-bot");
var is_legacy_1 = require("./is-legacy");
var nothing = types_1.StringConstant.nothing;
function default_1() {
    return __awaiter(this, void 0, void 0, function () {
        var ontouchstart, document, documentElement, dataset, maxTouchPoints, msMaxTouchPoints, touchSupport, bot, legacy, attributes;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ontouchstart = window.ontouchstart, document = window.document;
                    documentElement = document.documentElement;
                    dataset = documentElement.dataset;
                    maxTouchPoints = navigator.maxTouchPoints, msMaxTouchPoints = navigator.msMaxTouchPoints;
                    touchSupport = (ontouchstart
                        || window.hasOwnProperty('DocumentTouch')
                        || maxTouchPoints
                        || msMaxTouchPoints) ? true : false;
                    bot = is_bot_1.default();
                    return [4 /*yield*/, is_legacy_1.default()];
                case 1:
                    legacy = _a.sent();
                    attributes = [
                        {
                            key: types_1.DocumentDataAttribute.touchSupport,
                            value: touchSupport
                        },
                        {
                            key: types_1.DocumentDataAttribute.bot,
                            value: bot
                        },
                        {
                            key: types_1.DocumentDataAttribute.legacy,
                            value: legacy
                        },
                        {
                            key: types_1.DocumentDataAttribute.textMode,
                            value: bot
                        },
                    ];
                    attributes.forEach(function (_a) {
                        var key = _a.key, value = _a.value;
                        if (key && value) {
                            dataset[key] = nothing;
                        }
                    });
                    return [2 /*return*/];
            }
        });
    });
}
exports.default = default_1;
//# sourceMappingURL=set-browser-data.js.map