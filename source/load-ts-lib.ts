import * as tslib from '../node_modules/tslib/tslib';

const keys = Object.keys(tslib) as (keyof typeof tslib)[];

export default function () {
    keys.forEach(key => !self.hasOwnProperty(key) && Object.assign(self, {[key]: tslib[key]}));
}