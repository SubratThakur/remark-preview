'use strict';
import * as vscode from 'vscode';
import Preview from './Preview';
import StatusBarItem from './StatusBarItem';

export function activate(context: vscode.ExtensionContext) {
    let preview = new Preview(context);
    let statusBarItem = new StatusBarItem(context, preview);
    statusBarItem.updateStatusbar();

    // Subscribe so that the statusBarItem gets updated
    let disposableStatusBar = vscode.window.onDidChangeActiveTextEditor(statusBarItem.updateStatusbar, statusBarItem, context.subscriptions);

    let disposableSidePreview = vscode.commands.registerCommand('remark.sidePreview', async () => {

        await preview.initMarkdownPreview(vscode.ViewColumn.Two);

    });

    let disposableStandalonePreview = vscode.commands.registerCommand('remark.fullPreview', async () => {

        await preview.initMarkdownPreview(vscode.ViewColumn.One);

    });

    // push to subscriptions list so that they are disposed automatically
    // HTML Preview:
    context.subscriptions.push(disposableSidePreview);
    context.subscriptions.push(disposableStandalonePreview);
    context.subscriptions.push(disposableStatusBar);

}

// This method is called when extension is deactivated
export function deactivate() {

}




