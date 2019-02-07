import { IUpdateBrowserSupport } from './types';

const { VamtigerBrowserSupport, AWS } = window;
const supportFile = 'vamtiger-aws-support';
const polyfill = 'https://unpkg.com/aws-sdk@latest/dist/aws-sdk.min.js';
const params = {
    supportFile,
    supported: AWS ? true : false
} as IUpdateBrowserSupport;

if (!params.supported) {
    params.polyfill = polyfill;
}

VamtigerBrowserSupport(params);