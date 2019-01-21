import loadScript from '../node_modules/vamtiger-browser-method/source/load-script';
import {
    IUpdateBrowserSupport,
    ElementId,
    StringConstant,
    SupportType,
    SupportTypeKey
} from './types';
import loadNextSupport from './load-next-support';

const { vamtigerBrowserSupport: vamtigerBrowserSupportId } = ElementId;
const { nothing } = StringConstant;
const supportTypes = Object.keys(SupportType) as SupportTypeKey[]

export default async function updateBrowserSupport({ supportFile, supported, polyfill, error, wait }: IUpdateBrowserSupport) {
    const { [vamtigerBrowserSupportId]: vamtigerBrowserSupport  } = window;
    const selector = `[data-url*=${supportFile}]`;
    const metaElement = vamtigerBrowserSupport.querySelector(selector) as HTMLMetaElement;
    const { dataset: data } = metaElement
    const supportType = supportTypes.find(supportType => data.hasOwnProperty(supportType)) as SupportType;

    if (supported) {
        data.supported = nothing;
    } else {
        data.unsupported = nothing;
    }

    if (wait) {
        data.wait = nothing;
    } else {
        delete data.wait;
    }

    if (error) {
        data.error = error;
    }

    if (polyfill) {
        data.polyfill = polyfill;

        loadScript({ src: polyfill })
            .then(() => loadNextSupport({ supportType }))
    } else {
        loadNextSupport({ supportType });
    }
}

window.VamtigerBrowserSupport = updateBrowserSupport;