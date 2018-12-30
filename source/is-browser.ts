export default () => new Promise((resolve, reject) => {
    const { document } = window;
    const isBrowser = document ? true : false;

    (isBrowser) ? resolve() : reject();
})