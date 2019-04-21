import {
    dependencies as urls
} from './config';

export default async function () {
    const dependencies = await Promise.all(urls.map(loadDependency));

    return dependencies;
}

function loadDependency(src: string) {return new Promise((resolve: (script: HTMLScriptElement) => void, reject) => {
    const { head } = document;
    const selector = `[src="${src}"]`;
    const existingScript = head.querySelector<HTMLScriptElement>(selector);
    const script = !existingScript && document.createElement('script');

    if (script) {
        script.addEventListener('load', event => resolve(script));
        script.addEventListener('error', reject);

        script.src = src;

        head.appendChild(script);
    } else {
        resolve(existingScript);
    }
})}