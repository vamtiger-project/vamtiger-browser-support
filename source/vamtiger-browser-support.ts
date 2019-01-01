export * from '../node_modules/vamtiger-browser-method/source/load-ts-lib';
export * from './update-browser-support';
import setMetaElement from './set-meta-element';
import setBrowserSupportMetaElements from'./set-browser-support-meta-elements';
import isBrowser from './is-browser';
import loadSupport from './load-support';
import { ErrorMessage } from './types';

export default function main() {
    return isBrowser()
        .then(() => addEventListener('load', handleLoad));
}

function handleLoad(event: Event) {
    removeEventListener('load', handleLoad);

    setMetaElement();

    setBrowserSupportMetaElements();

    loadSupport().catch(handleError);
}

function handleError(error: Error) {
    console.warn(error);
    console.warn(notBrowser);
}

const { notBrowser } = ErrorMessage;

main().catch(handleError);