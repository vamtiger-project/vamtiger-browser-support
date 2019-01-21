import loadScript from '../node_modules/vamtiger-browser-method/source/load-script';
import { supportFile } from './vamtiger-web-component-support';
import { IUpdateBrowserSupport } from './types';

const { VamtigerBrowserSupport } = window;
const params = { supportFile } as IUpdateBrowserSupport;
const polyfill = 'https://unpkg.com/@webcomponents/webcomponentsjs/webcomponents-bundle.js';

addEventListener('WebComponentsReady', handleWebComponentsReady);

loadScript({ src: polyfill })
    .catch(handleError);

function handleWebComponentsReady() {
    removeEventListener('WebComponentsReady', handleWebComponentsReady);

    VamtigerBrowserSupport(params);
}

function handleError(error: Error) {
    params.error = error.message;

    VamtigerBrowserSupport(params);
}