import {
    regex
} from './types';

const { bot } = regex;

let log = false

export default function () {
    const { userAgent, webdriver } = navigator;
    const isBot = webdriver || navigator && Boolean(userAgent.match(bot));

    if (!log) {
        console.log('userAgent');
        console.log(userAgent)
        console.log('webdriver');
        console.log(webdriver);
        console.log('isBot');
        console.log(isBot);
    }

    return isBot;
}