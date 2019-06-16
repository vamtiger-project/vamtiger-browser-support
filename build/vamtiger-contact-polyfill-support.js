(function () {
'use strict';

var _VamtigerContact_ = window._VamtigerContact_;
var nothing = '';
if (!_VamtigerContact_) {
    window._VamtigerContact_ = function (params) { return Object.keys(params)
        .reduce(function (currentParams, key) {
        var _a;
        return Object.assign(currentParams, (_a = {}, _a[key] = params[key].join(nothing), _a));
    }, {}); };
}

}());
//# sourceMappingURL=vamtiger-contact-polyfill-support.js.map
