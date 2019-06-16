(function () {
'use strict';

var VamtigerBrowserSupport = window.VamtigerBrowserSupport, AWS = window.AWS;
var supportFile = 'vamtiger-aws-support';
var polyfill = 'https://cdn.jsdelivr.net/npm/aws-sdk@latest/dist/aws-sdk.min.js';
var params = {
    supportFile: supportFile,
    supported: AWS ? true : false
};
if (!params.supported) {
    params.polyfill = polyfill;
}
VamtigerBrowserSupport(params);

}());
//# sourceMappingURL=vamtiger-aws-support.js.map
