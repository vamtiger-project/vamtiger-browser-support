import getRootPath from './get-root-path';
import { IUpdateBrowserSupport } from './types';

const { VamtigerContact, VamtigerBrowserSupport } = window;
const rootPath = getRootPath();
export const supportFile = 'vamtiger-contact-support';
export const polyfillChain = [
    [
        'https://cdn.jsdelivr.net/npm/aws-sdk@latest/dist/aws-sdk.min.js',
        `${rootPath}/vamtiger-contact-polyfill-support.js`
    ],
    [`${rootPath}/vamtiger-contact-polyfill.js`]
];
const params = {
    supportFile,
    supported: VamtigerContact ? true : false,
    chain: true
} as IUpdateBrowserSupport;

if (!params.supported) {
    params.polyfillChain = polyfillChain;
}

VamtigerBrowserSupport(params);