import {
    ISetBrowserSupportMetaElement,
    ElementId,
    StringConstant,
    ElmentName,
    MetaElementAttribute
} from './types';
import { supportScript } from './config'

const { vamtigerBrowserSupport: vamtigerBrowserSupportId } = ElementId;
const { slash, nothing } = StringConstant;
const { meta } = ElmentName;


export default function ({ support, primary }: ISetBrowserSupportMetaElement) {
    const { [vamtigerBrowserSupportId]: vamtigerBrowserSupport } = window;
    const { dataset } = vamtigerBrowserSupport;
    const { baseUrl } = dataset;
    const currentSupportScript = supportScript[support];
    const scriptUrl = [
        baseUrl,
        currentSupportScript
    ].join(slash);
    const metaElement = document.createElement(meta);

    metaElement.dataset.name = support;

    metaElement.dataset.url = scriptUrl;

    if (primary) {
        metaElement.dataset.primary = nothing;
    }

    vamtigerBrowserSupport.appendChild(metaElement);
};