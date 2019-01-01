import { 
    ElementId, 
    ElmentName, 
    ElementAttribute, 
    MetaElementAttribute,
    MetaElementBrowserSupportAttribute,
    StringConstant,
    Selector
} from './types';

const { id } = ElementAttribute;
const { vamtigerBrowserSupport } = ElementId;
const { baseUrl } = MetaElementAttribute;
const { es2015Support }  = MetaElementBrowserSupportAttribute;
const { nothing, slash } = StringConstant;
const { vamtigerBrowserSupportScript: selector } = Selector;

export default function () {
    const { head } = document;
    const { firstChild } = head;
    const metaElement = document.createElement(ElmentName.meta);
    const vamtigerBrowserSupportScript = document.querySelector(selector) as HTMLScriptElement;
    const vamtigerBrowserSupportScriptPaths = vamtigerBrowserSupportScript.src.split(slash);
    const baseUrlPath = vamtigerBrowserSupportScriptPaths
        .slice(0, vamtigerBrowserSupportScriptPaths.length - 1)
        .join(slash);

    metaElement.setAttribute(id, vamtigerBrowserSupport);

    vamtigerBrowserSupportScript && Object.assign(metaElement.dataset,vamtigerBrowserSupportScript.dataset);

    metaElement.dataset[baseUrl] = baseUrlPath;

    head.insertBefore(metaElement, firstChild);
}