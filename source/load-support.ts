import loadScript from '../node_modules/vamtiger-browser-method/source/load-script';
import { supportTypes } from './types';
import { loadSupport } from './config';
import getSupportUrls from './get-support-urls';
import loadScripts from './load-scripts';

const { parallel } = loadSupport;

let index = 0;

export default async function () {
    const supportType = supportTypes[index];
    const supportUrls = getSupportUrls({ supportType });
    const supportScripts = [] as HTMLScriptElement[];
    const load = parallel.has(supportType) && Promise.all(supportUrls.map(src => loadScript({ src })))
        || 
        supportType && supportUrls.reduce(
            (loadSupport, src) => loadSupport
                .then(() => loadScript({ src }))
                .then(script => supportScripts.push(script) && supportScripts), 
            Promise.resolve(supportScripts)
        )
        ||
        loadScripts();

    index++;

    return load;
}