import * as tslib from '../node_modules/tslib/tslib';
import { ErrorMessage } from './types';
export * from './update-browser-support';
import setMetaElement from './set-meta-element';
import setBrowserSupportMetaElements from'./set-browser-support-meta-elements';
import isBot from './is-bot';
import loadSupport from './load-support';
import loadDependencies from './load-dependencies';
import setBrowserData from './set-browser-data';

tslib;

async function handleLoad(event: Event) {
    removeEventListener('load', handleLoad);

    if (isBot()) {
        console.log('Bot Detected');
    }

    await loadDependencies();

    setMetaElement();

    setBrowserSupportMetaElements();

    loadSupport().catch(handleError);

    setBrowserData();
}

function handleError(error: Error) {
    console.warn(error);
    console.warn(notBrowser);
}

const { notBrowser } = ErrorMessage;

addEventListener('load', handleLoad);