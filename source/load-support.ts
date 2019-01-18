import loadScript from '../node_modules/vamtiger-browser-method/source/load-script';
import { supportTypes, SupportType } from './types';
import { loadSupport } from './config';
import getSupportUrls from './get-support-urls';
import loadScripts from './load-scripts';

const { parallel } = loadSupport;

let index = 0;

export default async function () {
    const supportType = supportTypes[index];
    const supportUrls = getSupportUrls({ supportType });
    const supportScripts = [] as HTMLScriptElement[];

    let scripts: Promise<typeof supportScripts>;

    if (parallel.has(supportType)) {
        scripts = Promise.all(supportUrls.map(src => loadScript({ src })))
    } else if (supportType) {
        scripts = supportUrls.reduce(
            (loadSupport, src) => loadSupport
                .then(() => loadScript({ src }))
                .then(script => supportScripts.push(script) && supportScripts),
            Promise.resolve(supportScripts)
        );
    }

    if (supportType === SupportType.secondary) {
        scripts = scripts.then(
            secondaryScripts => loadScripts().then(tertiaryScripts => secondaryScripts.concat(tertiaryScripts))
        );
    }

    ++index;

    return scripts;
}