import { createPosterForVsCode } from './messaging';
import { getEditorLineNumber, scrollToRevealSourceLine } from './scroll-sync';
import { getData } from './settings';

const throttle = require('lodash.throttle');

declare var acquireVsCodeApi: any;

const vscode = acquireVsCodeApi();

const messaging = createPosterForVsCode(vscode);

//const configData = getData('data-settings');

window.addEventListener('message', event => {
    const message = event.data;
    if (message.type === 'scroll') {
        console.log('Line : ' + message.line[0][0].line);
        const per = ((message.line[0][0].line - 1) / message.source.lineCount) * 100;
        onUpdateView(per);
    }
});

//IF we want to scroll editor on Preview scroll
/** 
window.addEventListener('scroll', throttle(() => {
    const line = getEditorLineNumber(true);
    if (typeof line === 'number' && !isNaN(line)) {
        messaging.postMessage('revealLine', { line });
    }
}, 100));
*/

const onUpdateView = (() => {
    const doScroll = throttle((line) => {
        scrollToRevealSourceLine(line);
    }, 50);

    return (line) => {
        if (!isNaN(line)) {
            doScroll(line);
        }
    };
})();