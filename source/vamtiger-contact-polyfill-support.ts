const nothing = '';

window._VamtigerContact_ = (params) => Object.keys(params)
    .reduce((currentParams, key) => Object.assign(currentParams, { [key]: params[key].join(nothing)}), {} as any);