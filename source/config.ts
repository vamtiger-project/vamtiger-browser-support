import {
    MetaElementBrowserSupportAttribute,
    MetaElementAttribute,
    Support ,
    StringConstant,
    StringObject,
    regex,
    SupportType,
    LoadOnComplete,
    LoadOnCompleteType,
    stringConstant,
    Region
} from './types';

const { vamtiger, jsExtension } = StringConstant;
const { leadingData } = regex;
const supportKeys = Object.keys(MetaElementBrowserSupportAttribute) as Support[];

export const dependencies = [
    'https://cdn.jsdelivr.net/npm/es6-object-assign/dist/object-assign-auto.min.js'
] as string[];

export const primarySupport = new Set<string>([
    'botSupport',
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

export const vc = gvc();

supportKeys.forEach(key => supportScript[key] = supportScript[key].replace(leadingData, vamtiger) + jsExtension);

function gvc() {
    const {
        arn: a,
        aws: b,
        sns: c,
        '365080655670': e,
        'vamtiger-contact': f,
        colon: g,
        '5e5164d3': h,
        cc71: i,
        '4e5b': j,
        '9c34': k,
        '042fe735f31c': l,
        hyphen: m
    } = stringConstant;
    const { usWest2: d } = Region;
    const z = [
        a,
        b,
        c,
        d,
        e,
        f
    ].join(g)
    const x = [
        d,
        [
            h,
            i,
            j,
            k,
            l
        ].join(m)
    ].join(g);
    const y = {
        z: Array.from(z),
        x: Array.from(x),
        y: Array.from(d)
    };

    return y;
}