import { IUpdateBrowserSupport } from './types';

const { VamtigerBrowserSupport } = window;
const supportFile = 'vamtiger-element-query-support';
const polyfill = 'https://unpkg.com/eqcss/EQCSS.min.js';
const params = {
    supportFile
} as IUpdateBrowserSupport;

if(window.hasOwnProperty('EQCSS')) {
    params.supported = true;
} else {
    params.supported = false;
    params.polyfill = polyfill;
}

VamtigerBrowserSupport(params);