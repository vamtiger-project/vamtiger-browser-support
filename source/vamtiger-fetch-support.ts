import { IUpdateBrowserSupport } from './types';

const { VamtigerBrowserSupport, fetch } = window;
const supportFile = 'vamtiger-fetch-support';
const polyfill = 'https://cdn.jsdelivr.net/npm/whatwg-fetch@latest/fetch.js';
const params = {
    supportFile,
    supported: fetch ? true : false
} as IUpdateBrowserSupport;

if (!params.supported) {
    params.polyfill = polyfill;
}

VamtigerBrowserSupport(params);