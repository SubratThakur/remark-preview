export function getData(key: string) {
    const element = document.getElementById('vscode-html-preview-data');
    if (element) {
        const data = element.getAttribute(key);
        if (data) {
            return JSON.parse(data);
        }
    }

    throw new Error(`Could not load data for ${key}`);
}