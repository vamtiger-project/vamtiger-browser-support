export enum StringConstant {
    nothing = '',
    vamtiger = 'vamtiger',
    slash = '/',
    jsExtension = '.js',
    bashAnd = '&&'
}

export enum ElmentName {
    meta = 'meta',
    script = 'script'
}

export enum ElementId {
    vamtigerBrowserSupport = 'vamtiger-browser-support'
}

export enum ElementAttribute {
    id = 'id'
}

export enum MetaElementAttribute {
    baseUrl = 'baseUrl',
    name = 'name',
    url = 'url',
    primary = 'primary',
    loaded = 'loaded'
}

export enum MetaElementBrowserSupportAttribute {
    es2015Support = 'data-es2015-support',
    elementQuerySupport = 'data-element-query-support',
    webComponentSupport = 'data-web-component-support'
}

export enum Selector {
    vamtigerBrowserSupportScript = 'script[src*="vamtiger-browser-support"]'
}

export enum ErrorMessage {
    notBrowser = 'This is not a web browser'
}

export enum NpmScript {
    bundleSource = 'bundle-source'
}

export type Support = keyof typeof MetaElementBrowserSupportAttribute;

export type StringObject = {[key: string]: string};

export type AnyObject = {[key: string]: any};

export type VamtigerSupportFile = 'vamtiger-es2015-support';

export interface ISetBrowserSupportMetaElement {
    support: Support;
    primary?: boolean
}

export interface IUpdateBrowserSupport {
    supportFile: string;
    result?: boolean;
    error?: string;
}

export type VamtigerSupport =  {
    [K in VamtigerSupportFile]?: IUpdateBrowserSupport;
}

declare global {
    interface Window extends VamtigerSupport {
        [ElementId.vamtigerBrowserSupport]: HTMLMetaElement,
        VamtigerBrowserSupport: (params: IUpdateBrowserSupport) => void;
    }
}

export const regex = {
    leadingData: /^data/,
    trailingSupport: /support$/i,
    supportScript: /vamtiger(-\w+)+-support/
}