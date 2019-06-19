"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var bot = types_1.regex.bot;
var log = false;
function default_1() {
    var userAgent = navigator.userAgent, webdriver = navigator.webdriver;
    var isBot = webdriver || navigator && Boolean(userAgent.match(bot));
    return isBot;
}
exports.default = default_1;
//# sourceMappingURL=is-bot.js.map