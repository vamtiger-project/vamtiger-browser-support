import { IUpdateBrowserSupport } from './types';

const { VamtigerBrowserSupport, fetch } = window;
const supportFile = 'vamtiger-fetch-support';
const polyfill = 'https://unpkg.com/whatwg-fetch/fetch.js';
const params = {
    supportFile,
    supported: fetch ? true : false
} as IUpdateBrowserSupport;

if (!params.supported) {
    params.polyfill = polyfill;
}

VamtigerBrowserSupport(params);