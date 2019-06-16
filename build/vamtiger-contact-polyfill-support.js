(function () {
'use strict';

const __assign = Object.assign || function (target) {
    for (var source, i = 1; i < arguments.length; i++) {
        source = arguments[i];
        for (var prop in source) {
            if (Object.prototype.hasOwnProperty.call(source, prop)) {
                target[prop] = source[prop];
            }
        }
    }
    return target;
};

var _VamtigerContact_ = window._VamtigerContact_;
var nothing = '';
if (!_VamtigerContact_) {
    window._VamtigerContact_ = function (params) { return Object.keys(params)
        .reduce(function (currentParams, key) {
        var _a;
        return (__assign({}, currentParams, (_a = {}, _a[key] = params[key].join(nothing), _a)));
    }, {}); };
}

}());
//# sourceMappingURL=vamtiger-contact-polyfill-support.js.map
