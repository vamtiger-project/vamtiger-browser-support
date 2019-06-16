"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var slash = types_1.StringConstant.slash, nothing = types_1.StringConstant.nothing;
var rootPath;
function generateRootPath() {
    var head = document.head, body = document.body;
    var selector = types_1.Selector.vamtigerBrowserSupportScript;
    var vamtigerBrowserSupportScript = head.querySelector(selector)
        || body.querySelector(selector);
    var _a = new URL(vamtigerBrowserSupportScript.src), pathname = _a.pathname, origin = _a.origin;
    var paths = pathname
        .split(slash)
        .filter(function (path) { return path.trim(); })
        .filter(function (path, index, paths) { return index < paths.length - 1; });
    var currentRootPath = [origin]
        .concat(paths)
        .join(slash);
    rootPath = currentRootPath;
    return currentRootPath;
}
function getRootPath() {
    rootPath = rootPath || generateRootPath();
    return rootPath;
}
;
exports.default = getRootPath;
//# sourceMappingURL=get-root-path.js.map