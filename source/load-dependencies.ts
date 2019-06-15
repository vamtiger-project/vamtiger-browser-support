import { IJsonScriptData } from 'vamtiger-browser-method/build/types';
import {
    Selector,
    selector,
    ScriptUrl
} from './types';
import {
    dependencies as urls,
} from './config';

const { parse } = JSON;

export default async function () {
    const dependencies = await Promise.all(urls.map(loadDependency));

    await loanVamtigerBrowserMethod();

    return dependencies;
}

function loadDependency(src: string) {return new Promise((resolve: (script?: HTMLScriptElement) => void, reject) => {
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

function loanVamtigerBrowserMethod() {return new Promise(async (resolve, reject) => {
    const { head } = document;
    const selector = Selector.vamtigerBrowserMethodJson;
    const script = document.querySelector<HTMLScriptElement>(selector);
    const jsonText = script && script.innerHTML;
    const data = jsonText && parse(jsonText) as IJsonScriptData;
    const js = data && data.text;
    const vamtigerBrowserMethodScript = document.createElement('script');

    if (js) {
        try {
            vamtigerBrowserMethodScript.dataset.name = ScriptUrl.vamtigerBrowserMethod;
            vamtigerBrowserMethodScript.innerHTML = js;

            vamtigerBrowserMethodScript.addEventListener('error', (event) => loadVamtigerBrowserMethodScript(event));

            head.appendChild(vamtigerBrowserMethodScript);

            await loadVamtigerBrowserMethodScript();

            resolve();
        } catch(error) {
            console.warn(error);

            await loadVamtigerBrowserMethodScript();
        }
    }
})}

function loadVamtigerBrowserMethodScript(event?: ErrorEvent) {return new Promise((resolve, reject) => {
    event && event.stopPropagation();
    const { VamtigerBrowserMethod } = self;
    const { head } = document;
    const existingScript = document.querySelector<HTMLScriptElement>(selector.vamtigerBrowserMethod);
    const script = !VamtigerBrowserMethod && !existingScript && document.createElement('script');

    if (script) {
        script.addEventListener('load', resolve);
        script.addEventListener('error', reject);

        head.appendChild(script);
    } else {
        resolve();
    }
})}
