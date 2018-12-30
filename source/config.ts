import { 
    MetaElementBrowserSupportAttribute, 
    Support ,
    StringConstant,
    StringObject,
    regex
} from './types';

const { vamtiger, jsExtension } = StringConstant;
const { leadingData } = regex; 
const supportKeys = Object.keys(MetaElementBrowserSupportAttribute) as Support[];

export const primarySupport = new Set<string>([
    'es2015Support'
]);

export const supportScript: StringObject = Object.assign({} as StringObject, MetaElementBrowserSupportAttribute);

export const jsonFormatConfig = {
    format: 'json'
};

supportKeys.forEach(key => supportScript[key] = supportScript[key].replace(leadingData, vamtiger) + jsExtension);