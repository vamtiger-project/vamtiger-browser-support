import { IVamtigerFormSupport, AnyObject } from './types';

const { VamtigerForm } = window;

async function vamtigerForm({ form, field}: IVamtigerFormSupport) {
    const { selector, value, name } = field;
    const data = {} as AnyObject;

    return data;
}

if (!VamtigerForm) {
    window.VamtigerForm = vamtigerForm;
}