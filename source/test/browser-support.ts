import { expect } from 'chai';
import { ElementId, StringConstant } from '../types';

const { slash } = StringConstant;
const { vamtigerBrowserSupport: vamtigerBrowserSupportId } = ElementId;
const { [vamtigerBrowserSupportId]: vamtigerBrowserSupport } = window;
const metaElements = Array
    .from(vamtigerBrowserSupport.children)
    .sort() as HTMLMetaElement[];
const category = {
    supported: [] as string[],
    unsupported: [] as string[]
};
const categories = Object.keys(category).sort() as (keyof typeof category)[];

export default () => describe('Browser Support Scripts', function () {
    metaElements.forEach(metaElement => {
        const { dataset: data } = metaElement;
        const { url } = data;
        const urlPaths = url.split(slash);
        const script = urlPaths[urlPaths.length - 1];
        const result = metaElement.dataset.hasOwnProperty('supported') && 'supported' || 'unsupported';

        category[result].push(script);
    });

    categories.forEach(currentCategory => describe(currentCategory, function () {
        category[currentCategory].forEach(script => it(script, function () {
            expect(script).to.be.ok;
        }));
    }));
});