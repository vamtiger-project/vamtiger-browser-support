(function () {
'use strict';

var VamtigerBrowserSupport = window.VamtigerBrowserSupport, fetch = window.fetch;
var supportFile = 'vamtiger-fetch-support';
var polyfill = 'https://cdn.jsdelivr.net/npm/whatwg-fetch@latest/fetch.js';
var params = {
    supportFile: supportFile,
    supported: fetch ? true : false
};
if (!params.supported) {
    params.polyfill = polyfill;
}
VamtigerBrowserSupport(params);

}());
//# sourceMappingURL=vamtiger-fetch-support.js.map
