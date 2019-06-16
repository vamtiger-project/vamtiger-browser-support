import { IUpdateBrowserSupport } from './types';
import isBot from './is-bot';

const { VamtigerBrowserSupport } = window;
export const supportFile = 'vamtiger-bot-support';
export const polyfillChain = [
    [
        'https://cdn.jsdelivr.net/npm/es6-object-assign/dist/object-assign-auto.min.js',
        'https://cdn.jsdelivr.net/npm/babel-polyfill@latest/dist/polyfill.min.js',
        'https://cdn.jsdelivr.net/npm/@babel/standalone@latest/babel.min.js'
    ]
];
const params = {
    supportFile,
    supported: !isBot(),
    chain: true
} as IUpdateBrowserSupport;

if (!params.supported) {
    params.polyfillChain = polyfillChain;
}

VamtigerBrowserSupport(params);