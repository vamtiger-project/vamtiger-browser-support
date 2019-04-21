import {
    ElementId,
    ElmentName,
    ElementAttribute,
    MetaElementAttribute,
    MetaElementBrowserSupportAttribute,
    StringConstant,
    Selector,
    regex
} from './types';

const { id } = ElementAttribute;
const { vamtigerBrowserSupport } = ElementId;
const { baseUrl } = MetaElementAttribute;
const { es2015Support }  = MetaElementBrowserSupportAttribute;
const { nothing, slash, build } = StringConstant;
const { vamtigerBrowserSupportScript: selector } = Selector;
const { distTag } = regex;

export default function () {
    const { head } = document;
    const { firstChild } = head;
    const metaElement = document.createElement(ElmentName.meta);
    const vamtigerBrowserSupportScript = document.querySelector(selector) as HTMLScriptElement;
    const vamtigerBrowserSupportScriptPaths = vamtigerBrowserSupportScript.src.split(slash);
    const baseUrlPaths = new Set(vamtigerBrowserSupportScriptPaths
        .slice(0, vamtigerBrowserSupportScriptPaths.length - 1));
    const baseUrlPath = vamtigerBrowserSupportScript.src.match(distTag)
        && `${vamtigerBrowserSupportScript.src}/build`
        || Array.from(baseUrlPaths).join(slash);

    metaElement.setAttribute(id, vamtigerBrowserSupport);

    vamtigerBrowserSupportScript && Object.assign(metaElement.dataset,vamtigerBrowserSupportScript.dataset);

    metaElement.dataset[baseUrl] = baseUrlPath;

    head.insertBefore(metaElement, firstChild);
}