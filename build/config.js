"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var vamtiger = types_1.StringConstant.vamtiger, jsExtension = types_1.StringConstant.jsExtension;
var leadingData = types_1.regex.leadingData;
var supportKeys = Object.keys(types_1.MetaElementBrowserSupportAttribute);
exports.dependencies = [
    'https://cdn.jsdelivr.net/npm/es6-object-assign/dist/object-assign-auto.min.js'
];
exports.primarySupport = new Set([
    'botSupport',
    'es2015Support'
]);
exports.supportScript = Object.assign({}, types_1.MetaElementBrowserSupportAttribute);
exports.loadSupport = {
    parallel: new Set([
        types_1.SupportType.primary,
        types_1.SupportType.secondary
    ]),
    series: new Set([])
};
exports.supportDone = Array.from(new Set([
    types_1.MetaElementAttribute.supported,
    types_1.MetaElementAttribute.unsupported
]));
exports.loadOnComplete = Array.from(new Set(Object.keys(types_1.LoadOnComplete)));
exports.jsonFormatConfig = {
    format: 'json'
};
exports.vc = gvc();
supportKeys.forEach(function (key) { return exports.supportScript[key] = exports.supportScript[key].replace(leadingData, vamtiger) + jsExtension; });
function gvc() {
    var a = types_1.stringConstant.arn, b = types_1.stringConstant.aws, c = types_1.stringConstant.sns, e = types_1.stringConstant["365080655670"], f = types_1.stringConstant["vamtiger-contact"], g = types_1.stringConstant.colon, h = types_1.stringConstant["5e5164d3"], i = types_1.stringConstant.cc71, j = types_1.stringConstant["4e5b"], k = types_1.stringConstant["9c34"], l = types_1.stringConstant["042fe735f31c"], m = types_1.stringConstant.hyphen;
    var d = types_1.Region.usWest2;
    var z = [
        a,
        b,
        c,
        d,
        e,
        f
    ].join(g);
    var x = [
        d,
        [
            h,
            i,
            j,
            k,
            l
        ].join(m)
    ].join(g);
    var y = {
        z: Array.from(z),
        x: Array.from(x),
        y: Array.from(d)
    };
    return y;
}
//# sourceMappingURL=config.js.map