var index = (function () {
'use strict';

var supportFile = 'vamtiger-es2015-support';
var polyfill = 'https://cdn.jsdelivr.net/npm/babel-polyfill@latest/dist/polyfill.min.js';
var test = "\n    class VamtigerEs2015Support {\n        get result() {\n            return true;\n        }\n    }\n\n    class VamtigerEs2015SupportExtended extends VamtigerEs2015Support {\n        constructor() {\n            super();\n        }\n    }\n\n    const vamtigerEs2015Support = new VamtigerEs2015SupportExtended();\n    const { result: vamtigerEs2015SupportResult } = vamtigerEs2015Support;\n\n    window['" + supportFile + "'].supported = vamtigerEs2015SupportResult;\n";
window[supportFile] = {
    supportFile: supportFile
};
function main() {
    var VamtigerBrowserSupport = window.VamtigerBrowserSupport;
    try {
        eval(test);
    }
    catch (error) {
        window[supportFile].supported = false;
        window[supportFile].error = error.message;
    }
    if (!window[supportFile].supported) {
        window[supportFile].polyfill = polyfill;
    }
    VamtigerBrowserSupport(window[supportFile]);
    delete window[supportFile];
}
main();

return main;

}());
//# sourceMappingURL=vamtiger-es2015-support.js.map
