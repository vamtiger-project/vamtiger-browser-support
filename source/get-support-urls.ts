import { IGetSupportUrls, ElementId } from './types';

const { vamtigerBrowserSupport: vamtigerBrowserSupportId } = ElementId;

export default function({ supportType }: IGetSupportUrls) {
    const { [vamtigerBrowserSupportId]: vamtigerBrowserSupport  } = window;
    const urls = new Set<string>();
    const elements = Array.from(vamtigerBrowserSupport.children) as HTMLMetaElement[];

    let data: DOMStringMap;

    elements.forEach(element => {
        data = element.dataset;

        if (data.hasOwnProperty(supportType)) {
            urls.add(data.url);
        }
    });

    return Array.from(urls);
}