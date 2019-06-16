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

const { vamtiger, jsExtension, nothing } = StringConstant;
const { leadingData } = regex;
const supportKeys = Object.keys(MetaElementBrowserSupportAttribute) as Support[];

export const transpileJs = true;

export const dependencies = [
    'https://cdn.jsdelivr.net/npm/es6-object-assign/dist/object-assign-auto.min.js'
] as string[];

export const botDependencies = [
    [
        'https://cdn.jsdelivr.net/npm/es5-shim@latest/es5-shim.min.js',
        'https://cdn.jsdelivr.net/npm/es6-shim@latest/es6-shim.min.js',
        'https://cdn.jsdelivr.net/npm/es6-object-assign/dist/object-assign.min.js'
    ],
    [
        'https://cdn.jsdelivr.net/npm/babel-polyfill@latest/dist/polyfill.min.js',
        'https://cdn.jsdelivr.net/npm/@babel/standalone@latest/babel.min.js'
    ]
];

export const primarySupport = new Set<string>([
    'botSupport',
    'es2015Support'
]);

export const supportScript: StringObject = {
    ...MetaElementBrowserSupportAttribute
};

export const loadSupport = {
    parallel: new Set([
        SupportType.primary,
        SupportType.secondary
    ]),
    series: new Set([

    ])
};

export const supportDone = [
    MetaElementAttribute.supported,
    MetaElementAttribute.unsupported
];

export const loadOnComplete = Object.keys(LoadOnComplete) as LoadOnCompleteType[];

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
        z: z.split(nothing),
        x: x.split(nothing),
        y: d.split(nothing)
    };

    return y;
}