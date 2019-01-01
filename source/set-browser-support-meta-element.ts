import {
    ISetBrowserSupportMetaElement,
    ElementId,
    StringConstant,
    ElmentName,
    MetaElementAttribute,
    regex,
    SupportType
} from './types';
import { supportScript } from './config'

const { vamtigerBrowserSupport: vamtigerBrowserSupportId } = ElementId;
const { slash, nothing } = StringConstant;
const { meta } = ElmentName;
const { trailingSupport } = regex;

export default function ({ support: supportDataKey, primary }: ISetBrowserSupportMetaElement) {
    const { [vamtigerBrowserSupportId]: vamtigerBrowserSupport } = window;
    const { dataset } = vamtigerBrowserSupport;
    const { baseUrl } = dataset;
    const [, support, supportType] = supportDataKey.match(trailingSupport) || [] as string[];
    const currentSupportScript = supportScript[support];
    const scriptUrl = [
        baseUrl,
        currentSupportScript
    ].join(slash);
    const metaElement = document.createElement(meta);

    metaElement.dataset.name = support;

    metaElement.dataset.url = scriptUrl;

    if (supportType) {
        metaElement.dataset[supportType.toLowerCase()] = nothing;
    } else {
        metaElement.dataset[SupportType.secondary] = nothing;
    }

    vamtigerBrowserSupport.appendChild(metaElement);
};