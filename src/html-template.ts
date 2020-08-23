import * as vscode from 'vscode';
import * as path from 'path';

export const htmlTemplate = (context, panel, html, fileName) => {

    const nonce = getNonce();
    return `<!doctype html>
            <html lang="en">
            <head>
                <meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src ${panel.webview.cspSource} 'self' 'unsafe-inline'; script-src 'nonce-${nonce}'; style-src ${panel.webview.cspSource} 'self' 'unsafe-inline'; font-src ${panel.webview.cspSource}">

                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
                <meta id="vscode-html-preview-data" data-settings="${JSON.stringify(getInitialState()).replace(/"/g, '&quot;')}">
                <script nonce="${nonce}" src="${getDynamicContentPath(context, panel, 'assets/js/main.js')}"></script>
                <script nonce="${nonce}" src="${getDynamicContentPath(context, panel, 'assets/js/index.js')}"></script>
                <link rel="stylesheet" type="text/css" href="${getDynamicContentPath(context, panel, 'assets/css/slds.css')}">
                <link rel="stylesheet" type="text/css" href="${getDynamicContentPath(context, panel, 'assets/css/main.css')}">
                <link rel="stylesheet" type="text/css" href="${getDynamicContentPath(context, panel, 'assets/css/admonitions.css')}">
            </head>
            <body class="code-line" style="background-color: white;">
                <header class="slds-builder-header" style="position: fixed;width: 100%;top: 0;left: 0;z-index: 100;">
                    <div class="slds-builder-header__item" style="width: 1000px; margin: 0 auto;">
                        <div class="slds-builder-header__item-label slds-media slds-media_center">
                            <div class="slds-media__body">
                                <h1>
                                    <a href="" class="slds-page-header__title slds-truncate" title="CCX Documentation"
                                        style="color: white">CCX Documentation</a>
                                </h1>
                            </div>
                        </div>
                    </div>
                </header>
                <main class="content home">
                    <section style="padding-top: 50px;">
                        <body data-gr-c-s-loaded="true">
                            <div class="slds-p-around--small slds-container--small">
                                <article>
                                ${html}     
                                </article>
                            </div>
                        </body>
                    </section>
                </main>
            </body>
        </html>`
};

function getInitialState() {
    return {
        source: vscode.window.activeTextEditor.document.uri.toString(),
        visibleRange: vscode.window.activeTextEditor.visibleRanges,
        lineCount: vscode.window.activeTextEditor.document.lineCount,
    };
}
function getDynamicContentPath(context, panel, filepath) {
    const onDiskPath = vscode.Uri.file(path.join(context.extensionPath, filepath))
    const styleSrc = panel.webview.asWebviewUri(onDiskPath);
    return styleSrc
}

function getNonce() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 32; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}