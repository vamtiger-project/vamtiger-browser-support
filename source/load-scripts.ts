import loadScript from 'vamtiger-browser-method/source/load-script';
import { loadOnComplete } from './config';
import { ElementId } from './types';

const { vamtigerBrowserSupport: vamtigerBrowserSupportId } = ElementId;

export default async function () {
    const { [vamtigerBrowserSupportId]: vamtigerBrowserSupport  } = window;
    const scripts = [] as HTMLScriptElement[];
    const supportUrls = loadOnComplete
        .map(key => vamtigerBrowserSupport.dataset[key])
        .filter(url => url);
    const loadScripts = supportUrls.reduce(
        (loadSupport, src) => loadSupport
            .then(() => loadScript({ src }))
            .then(script => scripts.push(script) && scripts),
        Promise.resolve(scripts)
    );

    return loadScripts;
}