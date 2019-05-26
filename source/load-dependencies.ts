import { IJsonScriptData } from 'vamtiger-browser-method/build/types';
import {
    Selector,
    ScriptUrl
} from './types';
import {
    dependencies as urls,
} from './config';

const { parse } = JSON;

export default async function () {
    const dependencies = await Promise.all(urls.map(loadDependency));

    loanVamtigerBrowserMethod();

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

function loanVamtigerBrowserMethod() {
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
}