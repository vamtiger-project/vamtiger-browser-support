import {
    ILoadNextSupport,
    ElementId,
    MetaElementAttribute
} from './types';
import { supportDone } from './config';
import loadSupport from './load-support';

const { vamtigerBrowserSupport: vamtigerBrowserSupportId } = ElementId;
const { wait } = MetaElementAttribute;

export default function ({ supportType}: ILoadNextSupport) {
    const { [vamtigerBrowserSupportId]: vamtigerBrowserSupport  } = window;
    const supportTypeSelector = `meta[data-${supportType}]`;
    const supportTypeMetaElements = Array.from(vamtigerBrowserSupport.querySelectorAll(supportTypeSelector)) as HTMLMetaElement[];
    const supportTypeMetaElementsDone = supportTypeMetaElements
        .filter(element => supportDone.some(key => element.dataset.hasOwnProperty(key)))
        .filter(element => !element.dataset.hasOwnProperty(wait));
    const loadNextSupport = supportTypeMetaElements && supportTypeMetaElements.length === supportTypeMetaElementsDone.length;

    if (loadNextSupport) {
        loadSupport().catch(console.warn);
    }
}