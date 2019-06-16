import { MetaElementAttribute, StringObject, SupportType } from './types';
export declare const dependencies: string[];
export declare const botDependencies: string[][];
export declare const primarySupport: Set<string>;
export declare const supportScript: StringObject;
export declare const loadSupport: {
    parallel: Set<SupportType>;
    series: Set<any>;
};
export declare const supportDone: MetaElementAttribute[];
export declare const loadOnComplete: ("load" | "loadCritical")[];
export declare const jsonFormatConfig: {
    format: string;
};
export declare const vc: {
    z: string[];
    x: string[];
    y: string[];
};
