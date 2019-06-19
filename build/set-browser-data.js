"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var is_bot_1 = require("./is-bot");
var nothing = types_1.StringConstant.nothing;
function default_1() {
    return __awaiter(this, void 0, void 0, function () {
        var ontouchstart, document, body, dataset, maxTouchPoints, msMaxTouchPoints, touchSupport, bot;
        return __generator(this, function (_a) {
            ontouchstart = window.ontouchstart, document = window.document;
            body = document.body;
            dataset = body.dataset;
            maxTouchPoints = navigator.maxTouchPoints, msMaxTouchPoints = navigator.msMaxTouchPoints;
            touchSupport = (ontouchstart
                || window.hasOwnProperty('DocumentTouch')
                || maxTouchPoints
                || msMaxTouchPoints) ? true : false;
            bot = is_bot_1.default();
            if (touchSupport) {
                dataset[types_1.DocumentDataAttribute.touchSupport] = nothing;
            }
            if (bot) {
                console.log("isBot: " + bot);
                dataset[types_1.DocumentDataAttribute.isBot] = nothing;
            }
            return [2 /*return*/];
        });
    });
}
exports.default = default_1;
//# sourceMappingURL=set-browser-data.js.map