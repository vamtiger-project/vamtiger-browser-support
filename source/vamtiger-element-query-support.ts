import {
    IUpdateBrowserSupport,
    SupportFile,
    Polyfill
} from './types';

const { VamtigerBrowserSupport } = window;
const supportFile = SupportFile.elementQuery;
const polyfill = Polyfill.elementQuery;
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