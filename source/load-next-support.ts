import { 
    ILoadNextSupport,
    ElementId 
} from './types';
import { supportDone } from './config';
import loadSupport from './load-support';

const { vamtigerBrowserSupport: vamtigerBrowserSupportId } = ElementId

export default function ({ supportType}: ILoadNextSupport) {
    const { [vamtigerBrowserSupportId]: vamtigerBrowserSupport  } = window;
    const supportTypeSelector = `meta[data-${supportType}]`;
    const supportTypeMetaElements = Array.from(vamtigerBrowserSupport.querySelectorAll(supportTypeSelector)) as HTMLMetaElement[];
    const supportTypeMetaElementsDone = supportTypeMetaElements.filter(element => supportDone.some(key => element.dataset.hasOwnProperty(key)));
    const loadNextSupport = supportTypeMetaElements.length && supportTypeMetaElements.length === supportTypeMetaElementsDone.length;

    if (loadNextSupport) {
        loadSupport().catch(console.warn);
    }
}