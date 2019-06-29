import * as AWS from 'aws-sdk';
export declare enum StringConstant {
    nothing = "",
    build = "build",
    vamtiger = "vamtiger",
    slash = "/",
    jsExtension = ".js",
    bashAnd = "&&",
    arn = "arn",
    sns = "sns",
    aws = "aws",
    colon = ":",
    hyphen = "-",
    'vamtiger-contact' = "vamtiger-contact",
    '5e5164d3' = "5e5164d3",
    cc71 = "cc71",
    '4e5b' = "4e5b",
    '9c34' = "9c34",
    '042fe735f31c' = "042fe735f31c"
}
export declare enum Region {
    usWest2 = "us-west-2"
}
export declare enum ElmentName {
    meta = "meta",
    script = "script"
}
export declare enum ElementId {
    vamtigerBrowserSupport = "vamtiger-browser-support"
}
export declare enum ElementAttribute {
    id = "id"
}
export declare enum MetaElementAttribute {
    baseUrl = "baseUrl",
    name = "name",
    url = "url",
    primary = "primary",
    loaded = "loaded",
    supported = "supported",
    unsupported = "unsupported",
    error = "error",
    polyfill = "polyfill",
    loadCritical = "loadCritical",
    load = "load",
    wait = "wait"
}
export declare enum MetaElementBrowserSupportAttribute {
    botSupport = "data-bot-support",
    es2015Support = "data-es2015-support",
    elementQuerySupport = "data-element-query-support",
    webComponentSupport = "data-web-component-support",
    fetchSupport = "data-fetch-support",
    awsSupport = "data-aws-support",
    contactSupport = "data-contact-support"
}
export declare enum Selector {
    vamtigerBrowserSupportScript = "script[src*=\"vamtiger-browser-support\"]",
    vamtigerBrowserMethodJsonJs = "[src$=\"vamtiger-browser-method.js.json.js\"]",
    vamtigerBrowserMethodJson = "[data-name$=\"vamtiger-browser-method.js.json\"]"
}
export declare enum ScriptUrl {
    vamtigerBrowserMethod = "https://vamtiger-project.github.io/vamtiger-browser-method/build/vamtiger-browser-method.js",
    vamtigerBrowserMethodJsonJs = "https://vamtiger-project.github.io/vamtiger-browser-method/build/vamtiger-browser-method.js.json.js"
}
export declare enum ErrorMessage {
    notBrowser = "This is not a web browser",
    noFormForSelector = "No Form for Selector",
    noFieldInFormForSelector = "No Field in Form for Selector",
    objectAssignNotSupported = "Object.assign is not supported",
    arrayFromNotSupported = "Array.from is not supported",
    destructringAssignmentNotSupported = "Destructuring Assignment is not supported",
    arrowFunctionsNotSupported = "Arrow functions are not supported"
}
export declare enum NpmScript {
    bundleSource = "bundle-source"
}
export declare enum SupportType {
    primary = "primary",
    secondary = "secondary"
}
export declare enum LoadOnComplete {
    loadCritical = "loadCritical",
    load = "load"
}
export declare enum VamtigerFormDataSupportFormFieldValue {
    innerHTML = "innerHTML"
}
export declare enum DocumentDataAttribute {
    touchSupport = "vamtigerTouchSupport",
    isBot = "vamtigerIsBot",
    legacy = "vamtigerLegacy",
    textMode = "vamtigerTextMode"
}
export declare enum SupportFile {
    elementQuery = "vamtiger-element-query-support"
}
export declare enum Polyfill {
    elementQuery = "https://cdn.jsdelivr.net/npm/eqcss@latest/EQCSS.min.js"
}
export declare type LoadOnCompleteType = keyof typeof LoadOnComplete;
export declare type Support = keyof typeof MetaElementBrowserSupportAttribute;
export declare type SupportTypeKey = keyof typeof SupportType;
export declare type StringObject = {
    [key: string]: string;
};
export declare type AnyObject = {
    [key: string]: any;
};
export declare type VamtigerSupportFile = 'vamtiger-es2015-support';
export declare type VamtigerFormDataSupportFormFieldValueKey = keyof typeof VamtigerFormDataSupportFormFieldValue;
export declare type VamtigerSupport = {
    [K in VamtigerSupportFile]?: IUpdateBrowserSupport;
};
export declare type VamtigerContactResolve = (response: AWS.SNS.PublishResponse) => void;
export declare type VamtigerContactReject = (error: AWS.AWSError) => void;
export interface ISetBrowserSupportMetaElement {
    support: Support;
    primary?: boolean;
}
export interface IUpdateBrowserSupport {
    supportFile: string;
    supported?: boolean;
    polyfill?: string;
    polyfills?: string[];
    polyfillChain?: string[][];
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
        [ElementId.vamtigerBrowserSupport]: HTMLMetaElement;
        VamtigerBrowserSupport: (params: IUpdateBrowserSupport) => void;
        VamtigerContact: (params: IVamtigerContactParams) => Promise<AWS.SNS.PublishResponse>;
        _VamtigerContact_: (params: any) => void;
        VamtigerForm: (params: IVamtigerFormSupport) => Promise<AnyObject>;
        AWS: typeof AWS;
    }
}
export declare const supportTypes: SupportType[];
export declare const regex: {
    leadingData: RegExp;
    trailingSupport: RegExp;
    supportScript: RegExp;
    distTag: RegExp;
    bot: RegExp;
};
export declare const stringConstant: {
    365080655670: number;
    nothing: StringConstant.nothing;
    build: StringConstant.build;
    vamtiger: StringConstant.vamtiger;
    slash: StringConstant.slash;
    jsExtension: StringConstant.jsExtension;
    bashAnd: StringConstant.bashAnd;
    arn: StringConstant.arn;
    sns: StringConstant.sns;
    aws: StringConstant.aws;
    colon: StringConstant.colon;
    hyphen: StringConstant.hyphen;
    'vamtiger-contact': StringConstant.vamtiger-contact;
    '5e5164d3': StringConstant.5e5164d3;
    cc71: StringConstant.cc71;
    '4e5b': StringConstant.4e5b;
    '9c34': StringConstant.9c34;
    '042fe735f31c': StringConstant.042fe735f31c;
};
export declare const selector: {
    vamtigerBrowserMethod: string;
};
