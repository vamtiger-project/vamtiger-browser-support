import {
    DocumentDataAttribute,
    StringConstant
} from './types';
import isBot from './is-bot';

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
    const bot = isBot();

    if (touchSupport) {
        dataset[DocumentDataAttribute.touchSupport] = nothing;
    }

    if (bot) {
        console.log(`isBot: ${bot}`);
        dataset[DocumentDataAttribute.isBot] = nothing;
    }
}