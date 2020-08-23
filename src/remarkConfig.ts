import admonitions from 'remark-admonitions';
import * as html from 'remark-html';
import * as remark from 'remark';

export function markdownCompiler(): any {
    const admonitionsOptions = {};

    return remark()
        .use(html)
        .use(admonitions, admonitionsOptions);
}