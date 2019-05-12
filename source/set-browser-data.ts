import {
    DocumentDataAttribute,
    StringConstant
} from './types';

const { nothing } = StringConstant;

export default async function () {
    const { ontouchstart, document } = window;
    const { body } = document;
    const { dataset } = body;
    const { maxTouchPoints, msMaxTouchPoints } = navigator;
    const touchSupport = (ontouchstart
        || window.hasOwnProperty('DocumentTouch')
        || maxTouchPoints
        || msMaxTouchPoints) ? true : false;

    if (touchSupport) {
        dataset[DocumentDataAttribute.touchSupport] = nothing;
    }
}