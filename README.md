# remark-preview

A previewer of Markdown, which internally uses [remark](https://github.com/remarkjs/remark) processor. By default, VSCode uses [markdown-it](https://github.com/markdown-it/markdown-it) to process the markdown.

![Preview](https://github.com/SubratThakur/remark-preview/blob/master/media/main.gif?raw=true)

# README

An extension to preview Markdown using remark processor, with basic slds style.

The extension can be activated in two ways:

Key Bindings:

* Full Preview
    - Linux & Windows: `ctrl+q f`
    - MAC:`cmd+q f`
* Open|Close Preview to the Side
    - Linux & Windows: `ctrl+q s`
    - MAC:`cmd+q s`

* A **Preview** button will be available by default in bottom Status bar.

Configuration:

"remark.preview.showPreviewOptionInMenuBar": false,
"remark.preview.scrollPreviewWithEditor": true,

> If you change it true then the preview button will be shifted to Menu bar.
> `remark.preview.scrollPreviewWithEditor` is to enable / disable sync scroll.

Just press the same key when you want to go back to the original view.

## DETAIL

+ Only activated for markdown file type
