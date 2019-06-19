import {
    regex
} from './types';

const { bot } = regex;

let log = false

export default function () {
    const { userAgent, webdriver } = navigator;
    const isBot = webdriver || navigator && Boolean(userAgent.match(bot));

    return isBot;
}