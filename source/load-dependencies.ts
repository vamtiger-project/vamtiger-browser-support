import { IJsonScriptData } from 'vamtiger-browser-method/build/types';
import {
    Selector,
    selector,
    ScriptUrl
} from './types';
import {
    dependencies as dependencyUrls,
    legacyDependencies
} from './config';
import isLegacy from './is-legacy';

const { parse } = JSON;

export default async function() {
    await loadLegacyDependencies();
    await loadDependencies();
}

async function loadLegacyDependencies() {
    const legacy = await isLegacy();
    const urlsGroups = legacy && legacyDependencies || [];

    await Promise.all(urlsGroups.map(urls => Promise.all(urls.map(url => loadDependency(url).catch(handleError)))));
}

async function loadDependencies() {
    const legacy = await isLegacy();
    const urls = ([legacy && ScriptUrl.vamtigerBrowserMethod || ScriptUrl.vamtigerBrowserMethodJsonJs] as string [])
        .concat(dependencyUrls)
        .filter(url => url);
    const dependencies = await loadDependency(ScriptUrl.tsLib)
        .then(() => Promise.all(urls.map(loadDependency)));

    await loadVamtigerBrowserMethod();

    return dependencies;
}

export function loadDependency(src: string) {return new Promise((resolve: (script?: HTMLScriptElement) => void, reject) => {
    const { head } = document;
    const selector = `[src="${src}"]`;
    const existingScript = head.querySelector<HTMLScriptElement>(selector);
    const script = !existingScript && document.createElement('script');

    if (script) {
        script.addEventListener('load', event => resolve(script));
        script.addEventListener('error', reject);

        script.src = src;

        head.appendChild(script);
    } else if (existingScript) {
        resolve(existingScript);
    } else {
        resolve();
    }
})}

function loadVamtigerBrowserMethod() {return new Promise(async (resolve, reject) => {
    const { head } = document;
    const selector = Selector.vamtigerBrowserMethodJson;
    const script = document.querySelector<HTMLScriptElement>(selector);
    const jsonText = script && script.innerHTML;
    const data = jsonText && parse(jsonText) as IJsonScriptData;
    const js = data && data.text;
    const vamtigerBrowserMethodScript = document.createElement('script');

    if (js) {
        vamtigerBrowserMethodScript.dataset.name = ScriptUrl.vamtigerBrowserMethod;
        vamtigerBrowserMethodScript.innerHTML = js;

        head.appendChild(vamtigerBrowserMethodScript);
    }

    addEventListener('vamtigerBrowserMethodReady', resolve);
})}

function handleError(error: Error) {
    console.warn(error.name);
    console.warn(error.message);
    console.warn(error.stack);
}