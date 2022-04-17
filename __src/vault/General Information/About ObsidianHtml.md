---
tags:
- type/general_information
- date/2022-02-12
---

# About ObsidianHtml
## Description
ObsidianHtml is an application that can be used to export Obsidian notes to standard markdown and an html based website. 

In fact, this website that you are currently on is directly compiled out of a [vault](https://github.com/obsidian-html/obsidian-html.github.io/tree/main/__src/vault). The compiled markdown can be [found here](https://github.com/obsidian-html/obsidian-html.github.io/blob/main/md/index.md).

> **Important note:** 
>
> Only after naming this project I learned that there used to be a similar package under the same name. That one seems to have been renamed to Oboe. The original was located at https://github.com/kmaasrud/obsidian-html and later https://github.com/kmaasrud/oboe which you find referenced in a lot of places. I would link to it but I can't find an authoritative source, only forks. 
> Anyways: **This is not that package**.

## What does it do?
The Obsidian notes will be converted to standard markdown output. Then, optionally, html output is created based on the standard markdown.

It is also possible to input existing standard markdown to just use the markdown to html functionality.

> See [[Demonstration of Obisidian integration]] for a nice demo of the first part.

To convert your notes, you need to point to your notes folder, and to one note that will serve as the index.html page.

By default only notes that are found by following links recursively starting with the entrypoint will be converted. But if you want to work differently, [[Modes|there are other modes available]].

## Compatibility
- This application is extensively tested on Linux/OSX, and occasionally tested on Windows.
- Python version 3.9 or higher is required
- Make sure that the `python` command points to `python3`, and not a python2 version.

> ObsidianHtml will write a folder to your html output named `obs.html`, if you have a directory in the root of your vault with the same name, there might be issues with the html output.


## Next up
Take a look at all the [[Features|high level features]] that can be enabled/disabled, or read about all the [[Configuration Options|configuration options]]. Or maybe jump directly to [[Installation]].