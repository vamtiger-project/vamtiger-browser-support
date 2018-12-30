import { ElementId, Support, regex } from './types';
import { primarySupport } from './config';
import setBrowserSupportMetaElement from'./set-browser-support-meta-element';

const { vamtigerBrowserSupport: vamtigerBrowserSupportId } = ElementId;
const { trailingSupport } = regex;

export default function () {
    const { [ vamtigerBrowserSupportId ]: vamtigerBrowserSupport } = window;
    const { dataset } = vamtigerBrowserSupport;
    const supportKey = Object
        .keys(dataset)
        .filter(key => key.match(trailingSupport))
        .sort() as Support[];

    supportKey.forEach(support => setBrowserSupportMetaElement({
        support,
        primary: primarySupport.has(support)
    }));
}