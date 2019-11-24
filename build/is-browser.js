"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function () { return new Promise(function (resolve, reject) {
    var document = self.document;
    var isBrowser = document ? true : false;
    (isBrowser) ? resolve() : reject();
}); });
//# sourceMappingURL=is-browser.js.map