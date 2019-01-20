import {
    MetaElementBrowserSupportAttribute,
    MetaElementAttribute,
    Support ,
    StringConstant,
    StringObject,
    regex,
    SupportType,
    LoadOnComplete,
    LoadOnCompleteType
} from './types';

const { vamtiger, jsExtension } = StringConstant;
const { leadingData } = regex;
const supportKeys = Object.keys(MetaElementBrowserSupportAttribute) as Support[];

export const primarySupport = new Set<string>([
    'es2015Support'
]);

export const supportScript: StringObject = Object.assign({} as StringObject, MetaElementBrowserSupportAttribute);

export const loadSupport = {
    parallel: new Set([
        SupportType.primary,
        SupportType.secondary
    ]),
    series: new Set([

    ])
};

export const supportDone = Array.from(new Set([
    MetaElementAttribute.supported,
    MetaElementAttribute.unsupported
]));

export const loadOnComplete = Array.from(new Set(
    Object.keys(LoadOnComplete) as LoadOnCompleteType[]
))

export const jsonFormatConfig = {
    format: 'json'
};

supportKeys.forEach(key => supportScript[key] = supportScript[key].replace(leadingData, vamtiger) + jsExtension);