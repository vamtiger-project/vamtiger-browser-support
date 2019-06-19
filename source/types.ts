import * as VamtigerBrowserMethodTypes from 'vamtiger-browser-method/build/types';
import * as AWS from 'aws-sdk';

export enum StringConstant {
    nothing = '',
    build = 'build',
    vamtiger = 'vamtiger',
    slash = '/',
    jsExtension = '.js',
    bashAnd = '&&',
    arn = 'arn',
    sns = 'sns',
    aws = 'aws',
    colon = ':',
    hyphen = '-',
    'vamtiger-contact' = 'vamtiger-contact',
    '5e5164d3' = '5e5164d3',
    cc71 = 'cc71',
    '4e5b' = '4e5b',
    '9c34' = '9c34',
    '042fe735f31c' = '042fe735f31c'
}

export enum Region {
    usWest2= 'us-west-2'
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
    loaded = 'loaded',
    supported = 'supported',
    unsupported = 'unsupported',
    error = 'error',
    polyfill = 'polyfill',
    loadCritical = 'loadCritical',
    load = 'load',
    wait = 'wait'
}

export enum MetaElementBrowserSupportAttribute {
    botSupport = 'data-bot-support',
    es2015Support = 'data-es2015-support',
    elementQuerySupport = 'data-element-query-support',
    webComponentSupport = 'data-web-component-support',
    fetchSupport = 'data-fetch-support',
    awsSupport = 'data-aws-support',
    contactSupport = 'data-contact-support'
}

export enum Selector {
    vamtigerBrowserSupportScript = 'script[src*="vamtiger-browser-support"]',
    vamtigerBrowserMethodJsonJs = '[src$="vamtiger-browser-method.js.json.js"]',
    vamtigerBrowserMethodJson = '[data-name$="vamtiger-browser-method.js.json"]'
}

export enum ScriptUrl {
    vamtigerBrowserMethod = 'https://vamtiger-project.github.io/vamtiger-browser-method/build/vamtiger-browser-method.js',
    vamtigerBrowserMethodJsonJs = 'https://vamtiger-project.github.io/vamtiger-browser-method/build/vamtiger-browser-method.js.json.js'
}

export enum ErrorMessage {
    notBrowser = 'This is not a web browser',
    noFormForSelector = 'No Form for Selector',
    noFieldInFormForSelector = 'No Field in Form for Selector',
    objectAssignNotSupported = 'Object.assign is not supported',
    arrayFromNotSupported = 'Array.from is not supported',
    destructringAssignmentNotSupported = 'Destructuring Assignment is not supported',
    arrowFunctionsNotSupported = 'Arrow functions are not supported'
}

export enum NpmScript {
    bundleSource = 'bundle-source'
}

export enum SupportType {
    primary = 'primary',
    secondary = 'secondary'
}

export enum LoadOnComplete {
    loadCritical = 'loadCritical',
    load = 'load'
}

export enum VamtigerFormDataSupportFormFieldValue {
    innerHTML = 'innerHTML'
}

export enum DocumentDataAttribute {
    touchSupport = 'vamtigerTouchSupport',
    isBot = 'vamtigerIsBot'
}

export enum SupportFile {
    elementQuery = 'vamtiger-element-query-support'
}

export enum Polyfill {
    elementQuery = 'https://cdn.jsdelivr.net/npm/eqcss@latest/EQCSS.min.js'
}

export type LoadOnCompleteType  = keyof typeof LoadOnComplete;

export type Support = keyof typeof MetaElementBrowserSupportAttribute;

export type SupportTypeKey = keyof typeof SupportType;

export type StringObject = {[key: string]: string};

export type AnyObject = {[key: string]: any};

export type VamtigerSupportFile = 'vamtiger-es2015-support';

export type VamtigerFormDataSupportFormFieldValueKey = keyof typeof VamtigerFormDataSupportFormFieldValue;

export type VamtigerSupport =  {
    [K in VamtigerSupportFile]?: IUpdateBrowserSupport;
}

export type VamtigerContactResolve = (response: AWS.SNS.PublishResponse) => void;

export type VamtigerContactReject = (error: AWS.AWSError) => void;

export interface ISetBrowserSupportMetaElement {
    support: Support;
    primary?: boolean;
}

export interface IUpdateBrowserSupport {
    supportFile: string;
    supported?: boolean;
    polyfill?: string;
    polyfills?: string[];
    polyfillChain?: string[][]
    wait?: boolean;
    error?: string;
}

export interface IUpdateBrowserSupportLoadScripts {
    polyfills: IUpdateBrowserSupport['polyfills'];
}

export interface IGetSupportUrls {
    supportType: SupportType;
}

export interface ILoadNextSupport {
    supportType: SupportType;
}

export interface IVamtigerContactParams {
    template: string;
    subject: string;
    origin: string;
}

export interface IVamtigerFormSupport {
    form: string;
    field?: IVamtigerFormSupportFormField;
}

export interface IVamtigerFormSupportFormField {
    selector: string;
    name: string;
    value?: VamtigerFormDataSupportFormFieldValueKey;
}

declare global {
    interface Window extends VamtigerSupport {
        [ElementId.vamtigerBrowserSupport]: HTMLMetaElement,
        VamtigerBrowserSupport: (params: IUpdateBrowserSupport) => void;
        VamtigerContact: (params: IVamtigerContactParams) => Promise<AWS.SNS.PublishResponse>;
        _VamtigerContact_: (params: any) => void;
        VamtigerForm: (params: IVamtigerFormSupport) => Promise<AnyObject>;
        AWS: typeof AWS;
    }
}

export const supportTypes = Object.keys(SupportType) as SupportType[];

export const regex = {
    leadingData: /^data/,
    trailingSupport: /(.*?Support)(Primary)?$/,
    supportScript: /vamtiger(-\w+)+-(support|polyfill)/,
    distTag: /(\d|latest)$/,
    bot: /bot|google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex/i
}

export const stringConstant = {
    ...StringConstant,
    365080655670: 365080655670
};

export const selector = {
    vamtigerBrowserMethod: `script[src="${ScriptUrl.vamtigerBrowserMethod}"]`
}