import { supportFile } from './vamtiger-web-component-support';
import { IUpdateBrowserSupport } from './types';

const params = { supportFile } as IUpdateBrowserSupport;
const polyfill = 'https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs/webcomponents-bundle.js';

addEventListener('WebComponentsReady', handleWebComponentsReady);

main().catch(handleError);

async function main() {
    const { VamtigerBrowserMethod } = window;
    const { loadScript } = VamtigerBrowserMethod;

    await loadScript({ src: polyfill });
}

function handleWebComponentsReady() {
    const { VamtigerBrowserSupport } = window;

    removeEventListener('WebComponentsReady', handleWebComponentsReady);

    VamtigerBrowserSupport(params);
}

function handleError(error: Error) {
    const { VamtigerBrowserSupport } = window;

    params.error = error.message;

    VamtigerBrowserSupport(params);
}