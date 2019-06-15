import {
    regex
} from './types';

const { bot } = regex;

export default function () {
    const { userAgent } = navigator;
    const isBot = navigator && Boolean(userAgent.match(bot));

    return isBot;
}