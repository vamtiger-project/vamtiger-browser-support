import { IJsonScriptData } from 'vamtiger-browser-method/build/types';
import {
    Selector,
    selector,
    ScriptUrl
} from './types';
import {
    dependencies as dependencyUrls,
    botDependencies
} from './config';
import isBot from './is-bot';

const { parse } = JSON;

export default async function() {
    await loadBotDependencies();
    await loadDependencies();
}

async function loadBotDependencies() {
    const urlsGroups = isBot() && botDependencies || [];

    await Promise.all(urlsGroups.map(urls => Promise.all(urls.map(loadDependency))));
}

async function loadDependencies() {
    const urls = ([isBot() && ScriptUrl.vamtigerBrowserMethod || ScriptUrl.vamtigerBrowserMethodJsonJs] as string [])
        .concat(dependencyUrls)
        .filter(url => url);
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
        vamtigerBrowserMethodScript.dataset.name = ScriptUrl.vamtigerBrowserMethod;
        vamtigerBrowserMethodScript.innerHTML = js;

        head.appendChild(vamtigerBrowserMethodScript);
    }

    resolve();
})}
