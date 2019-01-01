import { expect } from 'chai';
import { ElementId } from '../types';

const { vamtigerBrowserSupport: vamtigerBrowserSupportId } = ElementId;

export default () => describe('Meta Element', function () {
    it('Added to document head', async function () {
        const vamtigerBrowserSupport = document.head.querySelector(`[id=${vamtigerBrowserSupportId}]`);

        expect(vamtigerBrowserSupport).to.be.ok;
    });
});