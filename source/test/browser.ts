import { setup, run } from 'mocha';
import metaElement from './meta-element';
import browserSupport from './browser-support';

const tests = [
    metaElement,
    browserSupport
];

setup('bdd');

tests.forEach(test => test());

run();