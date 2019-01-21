import { Selector } from './types';

let origin: string;

function generateOrigin() {
    const { head, body} = document;
    const { vamtigerBrowserSupportScript: selector } = Selector;
    const vamtigerBrowserSupportScript = head.querySelector<HTMLScriptElement>(selector)
        || body.querySelector<HTMLScriptElement>(selector);
    const { origin } = new URL(vamtigerBrowserSupportScript.src);

    return origin;
}

function getOrigin() {
    origin = origin || generateOrigin();

    return origin
};

export default getOrigin;