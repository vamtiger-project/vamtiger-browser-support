export default () => new Promise((resolve, reject) => {
    const { document } = self;
    const isBrowser = document ? true : false;

    (isBrowser) ? resolve() : reject();
})