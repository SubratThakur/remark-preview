/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { getData } from './settings';

/**
 * Attempt to reveal the element for a source line in the editor.
 */
export function scrollToRevealSourceLine(percentage: number) {
	if (percentage) {
		const nextPosition = document.body.scrollHeight * (percentage / 100);
		window.scroll(0, Math.ceil(nextPosition));

		console.log("Move Pixel Based on line percenatge " + Math.ceil(percentage) + " : " + nextPosition + " (Other calculated Percenatge : " + Math.ceil(getVerticalScrollPercentage(document.body)));
	}
	getEditorLineNumber(true);
}

export function getEditorLineNumber(change) {
	if (change) {
		const posPercentage = getVerticalScrollPercentage(document.body);
		const total = getData('data-settings').lineCount;
		const line = Math.ceil((posPercentage / 100) * total);
		console.log("Line Number Based on scroll percentage " + posPercentage + " : " + line);
		return line;
	}
}

function getVerticalScrollPercentage(elm) {
	var p = elm.parentNode,
		pos = ((elm.scrollTop || p.scrollTop) / document.body.scrollHeight) * 100;
	return pos
}
