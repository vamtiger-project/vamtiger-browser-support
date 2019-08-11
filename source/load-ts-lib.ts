import * as tslib from '../node_modules/tslib/tslib';

const keys = Object.keys(tslib) as (keyof typeof tslib)[];

export default function () {
    keys.forEach(key => !window.hasOwnProperty(key) && Object.assign(window, {[key]: tslib[key]}));
}
