import { resolve as resolvePath, parse, dirname, basename } from 'path';
import { expect } from 'chai';
import getFolderContent from 'vamtiger-get-directory-content';
import createFile from 'vamtiger-create-file';
import { regex, StringConstant, NpmScript, AnyObject, StringObject } from '../types'
import { jsonFormatConfig, nodeDependencies as dependencies } from '../config';

const { cwd } = process;
const workingDirectory = cwd();
const format = require('beautify');
const { supportScript } = regex;
const { jsExtension, bashAnd, nothing, space } = StringConstant;
const { bundleSource, copyDependencies } = NpmScript;
const sourceFolder = resolvePath(
    __dirname,
    '../../source'
);
const packageJsonPath = resolvePath(
    dirname(sourceFolder),
    'package.json'
);
const packageJson = require(packageJsonPath) as AnyObject;
const { stringify } = JSON;

let formattedPackageJson: string;
let sourceFiles: string[];
let supportScripts: string[];
let bundleSourceScript: string;
let copyDependenciesScript: string;

describe('Generate Browser', function () {
    before(async function () {
        sourceFiles = await getFolderContent(sourceFolder);

        supportScripts = sourceFiles.filter(sourceFile => sourceFile.match(supportScript));

        bundleSourceScript = supportScripts
            .map(getBundleSourceScript)
            .join(` ${bashAnd} `);

        packageJson.scripts[bundleSource] = bundleSourceScript;

        sortScripts();

        formattedPackageJson = format(
            stringify(packageJson),
            jsonFormatConfig
        );
    });

    it('Support Scripts', supportScriptsTest);
});

async function supportScriptsTest() {
    expect(packageJson.scripts[bundleSource]).to.equal(bundleSourceScript);

    await createFile(packageJsonPath, formattedPackageJson);
}

function getBundleSourceScript(supportScript: string) {
    const { base: sourceFile, name: fileName, ext: sourceExtension } = parse(supportScript);
    const currentBundleSourceScript = `vamtiger-bundle-typescript --relativePath --entryFilePath source/${sourceFile} --bundleFilePath build/${fileName}${jsExtension} --format iife --sourcemap true --copySourceMap --minify`;

    return currentBundleSourceScript;
}

function sortScripts() {
    const scriptNames = Object
        .keys(packageJson.scripts)
        .sort();
    const sortedScripts = {} as StringObject;

    scriptNames.forEach(scriptName => sortedScripts[scriptName] = packageJson.scripts[scriptName]);

    packageJson.scripts = sortedScripts;
}