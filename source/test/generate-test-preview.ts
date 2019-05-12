import { resolve as resolvePath, basename } from 'path';
import { expect } from 'chai';
import copyFile from 'vamtiger-copy-file';
import getFolderContent from 'vamtiger-get-directory-content';

const buildFolder = resolvePath(
    __dirname,
    '..'
);
const testHtmlSource = resolvePath(
    __dirname,
    '../../source/test/html/test.html'
);
const testHtmlDestination = resolvePath(
    __dirname,
    '../index.html'
);

describe('Generate Test Preview', function () {
    before(async function () {
        await copyFile({
            source: testHtmlSource,
            destination: testHtmlDestination
        });
    });

    it('HTML', async function() {
        const folderContent = await getFolderContent(buildFolder)
            .then(result => new Set(result));

        class Test {
            test() {
                console.log();
            }
        }

        const test = new Test();
        test.test();

        expect(folderContent.has(basename(testHtmlDestination))).to.be.true;
    })
})