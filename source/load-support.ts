import { supportTypes } from './types';
import { loadSupport } from './config';
import getSupportUrls from './get-support-urls';
import loadScripts from './load-scripts';
import loadNextSupport from './load-next-support';

const { parallel } = loadSupport;

let index = 0;
let done = false;

export default async function () {
    const { VamtigerBrowserMethod } = window;
    const { loadScript } = VamtigerBrowserMethod;
    const supportType = supportTypes[index];
    const supportUrls = getSupportUrls({ supportType });
    const supportScripts = [] as HTMLScriptElement[];

    let scripts: Promise<typeof supportScripts>;

    if (parallel.has(supportType)) {
        scripts = Promise.all(supportUrls.map(src => loadScript({ src })));

        if (!supportUrls.length) {
            loadNextSupport({ supportType });
        }
    } else if (supportType) {
        scripts = supportUrls.reduce(
            (loadSupport, src) => loadSupport
                .then(() => loadScript({ src }))
                .then(script => supportScripts.push(script) && supportScripts),
            Promise.resolve(supportScripts)
        );
    } else if (!supportType && !done) {
        done = true;

        scripts = loadScripts();
    }

    index++;

    return scripts;
}