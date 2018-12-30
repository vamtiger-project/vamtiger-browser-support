const supportFile = 'vamtiger-es2015-support';
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

    ${window[supportFile]}.result = vamtigerEs2015SupportResult;
`;

window[supportFile] = {
    supportFile
}

export default function main() {
    const { VamtigerBrowserSupport } = window;
    const browserSupport = {
        supportFile
    }

    let result: boolean;

    try {
        eval(test);
    } catch(error) {
        window[supportFile].error = error.message;

        VamtigerBrowserSupport(window[supportFile]);

        delete window[supportFile];
    }
}