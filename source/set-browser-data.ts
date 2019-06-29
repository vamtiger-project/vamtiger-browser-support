import {
    DocumentDataAttribute,
    StringConstant
} from './types';
import isBot from './is-bot';
import isLegacy from './is-legacy';

const { nothing } = StringConstant;

export default async function () {
    const { ontouchstart, document } = window;
    const { documentElement } = document;
    const { dataset } = documentElement;
    const { maxTouchPoints, msMaxTouchPoints } = navigator;
    const touchSupport = (ontouchstart
        || window.hasOwnProperty('DocumentTouch')
        || maxTouchPoints
        || msMaxTouchPoints) ? true : false;
    const bot = isBot();
    const legacy = await isLegacy();
    const attributes = [
        {
            key: DocumentDataAttribute.touchSupport,
            value: touchSupport
        },
        {
            key: DocumentDataAttribute.isBot,
            value: bot
        },
        {
            key: DocumentDataAttribute.legacy,
            value: legacy
        },
        {
            key: DocumentDataAttribute.textMode,
            value: bot
        },
    ];

    attributes.forEach(({key, value}) => {
        if (key && value) {
            dataset[key] = nothing
        }
    });
}