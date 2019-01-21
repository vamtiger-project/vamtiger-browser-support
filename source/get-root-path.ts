import { Selector, StringConstant } from './types';

const { slash, nothing } = StringConstant;

let rootPath: string;

function generateRootPath() {
    const { head, body} = document;
    const { vamtigerBrowserSupportScript: selector } = Selector;
    const vamtigerBrowserSupportScript = head.querySelector<HTMLScriptElement>(selector)
        || body.querySelector<HTMLScriptElement>(selector);
    const { pathname, origin } = new URL(vamtigerBrowserSupportScript.src);
    const paths = pathname
        .split(slash)
        .filter(path => path.trim())
        .filter((path, index, paths) => index < paths.length - 1);
    const currentRootPath = [origin]
        .concat(paths)
        .join(slash);

    rootPath = currentRootPath;

    return currentRootPath;
}

function getRootPath() {
    rootPath = rootPath || generateRootPath();

    return rootPath;
};

export default getRootPath;