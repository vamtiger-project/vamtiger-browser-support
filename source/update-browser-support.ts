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

export default async function updateBrowserSupport({ supportFile, supported, polyfill, polyfills, polyfillChain, error, wait }: IUpdateBrowserSupport) {
    const {
        [vamtigerBrowserSupportId]: vamtigerBrowserSupport,
        VamtigerBrowserSupport,
        VamtigerBrowserMethod
    } = window;
    const {
        loadScript,
        loadScripts,
        loadScriptsSequentially
    } = VamtigerBrowserMethod;
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
    } else if (polyfillChain) {
        loadScriptsSequentially(polyfillChain.map(srcs => srcs.map(src => ({ src }))))
            .then(scripts => scripts.forEach(({ src: polyfill }, index) => data[`polyfill-${index + 1}`] = polyfill))
            .then(() => loadNextSupport({ supportType }));
    } else if (polyfills) {
        loadScripts(polyfills.map(polyfill => ({ src: polyfill })))
            .then(scripts => scripts.forEach(({ src: polyfill }, index) => data[`polyfill-${index + 1}`] = polyfill))
            .then(() => loadNextSupport({ supportType }));
    } else {
        loadNextSupport({ supportType });
    }
}

if (!window.VamtigerBrowserSupport) {
    window.VamtigerBrowserSupport = updateBrowserSupport;
}