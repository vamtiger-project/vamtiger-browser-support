const supportFile = 'vamtiger-es2015-support';
const polyfill = 'https://cdn.jsdelivr.net/npm/babel-polyfill@latest/dist/polyfill.min.js';
const test = `
    class VamtigerEs2015Support {
        get result() {
            return true;
        }
    }

    class VamtigerEs2015SupportExtended extends VamtigerEs2015Support {
        constructor() {
            super();
        }
    }

    const vamtigerEs2015Support = new VamtigerEs2015SupportExtended();
    const { result: vamtigerEs2015SupportResult } = vamtigerEs2015Support;

    window['${supportFile}'].supported = vamtigerEs2015SupportResult;
`;

window[supportFile] = {
    supportFile
}

export default function main() {
    const { VamtigerBrowserSupport } = window;

    let result: boolean;

    try {
        eval(test);
    } catch(error) {
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