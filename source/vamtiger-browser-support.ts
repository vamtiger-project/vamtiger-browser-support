import * as tslib from '../node_modules/tslib/tslib';
import { ErrorMessage } from './types';
import setMetaElement from './set-meta-element';
import setBrowserSupportMetaElements from'./set-browser-support-meta-elements';
import updateBrowserSupport from './update-browser-support';
import isBrowser from './is-browser';

export default function main() {
    return isBrowser()
        .then(() => Object.assign(window, tslib))
        .then(() => addEventListener('load', handleLoad))
        .then(() => window.VamtigerBrowserSupport = updateBrowserSupport);
}

function handleLoad(event: Event) {
    removeEventListener('load', handleLoad);

    setMetaElement();

    setBrowserSupportMetaElements();
}

function handleError(error: Error) {
    console.warn(error);
    console.warn(notBrowser);
}

const { notBrowser } = ErrorMessage;

main().catch(handleError);