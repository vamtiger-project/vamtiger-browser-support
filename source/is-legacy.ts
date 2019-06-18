import {
    ErrorMessage
} from './types';

const {
    objectAssignNotSupported,
    arrayFromNotSupported,
    destructringAssignmentNotSupported,
    arrowFunctionsNotSupported
} = ErrorMessage;

let legacy: boolean;

export default async function () {
    const isLegacy = legacy === undefined ? await Promise
        .all([
            objectAssign(),
            arrayFrom(),
            destructringAssignment(),
            arrowFunctions()
        ])
        .then(results => results.some(result => !result))
        :
        legacy;

    legacy = isLegacy ? true : false;

    return isLegacy;
}

function objectAssign() {return new Promise((resolve, reject) => {
    let result = false;

    try {
        eval(`Object.assign({result: false}, {result: true}).result`);
    } catch(error) {
        handleError(new Error(objectAssignNotSupported));
    }

    resolve(result);
})}

function arrayFrom() {return new Promise((resolve, reject) => {
    let result = false;

    try {
        eval(`Array.from('1234').length === 4`);
    } catch(error) {
        handleError(new Error(arrayFromNotSupported));
    }

    resolve(result);
})}

function destructringAssignment() {return new Promise((resolve, reject) => {
    let result = false;

    try {
        eval(`
            let object = {
                result: true
            };
            let { result: currentResult } = object;
        `);

        result = true;
    } catch(error) {
        handleError(new Error(destructringAssignmentNotSupported));
    }

    resolve(result);
})}

function arrowFunctions() {return new Promise((resolve, reject) => {
    let result = false;

    try {
        eval(`(() => true)()`);
        result = true;
    } catch(error) {
        handleError(new Error(destructringAssignmentNotSupported));
    }

    resolve(result);
})}

function handleError(error: Error) {
    console.warn(error.name);
    console.warn(error.message);
}