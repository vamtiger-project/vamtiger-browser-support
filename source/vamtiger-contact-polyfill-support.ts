const { _VamtigerContact_ } = window;
const nothing = '';

if (!_VamtigerContact_) {
    window._VamtigerContact_ = (params) => Object.keys(params)
        .reduce((currentParams, key) => ({...currentParams, ...{ [key]: params[key].join(nothing)}}), {} as any);
}