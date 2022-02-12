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
> Only recently I learned that there used to be a similar package under the same name. That one seems to have been renamed to Oboe. The original was located at https://github.com/kmaasrud/obsidian-html and later https://github.com/kmaasrud/oboe which you find referenced in a lot of places. I would link to it but I can't find an authoritative source, only forks. 
> Anyways: **This is not that package**.

## What does it do?
The Obsidian notes will be converted to standard markdown output. Then, optionally, html output is created based on the standard markdown.

It is also possible to input existing standard markdown to just use the markdown to html functionality.

To convert your notes, you need to point to your notes folder, and to one note that will serve as the index.html page.

By default only notes that are found by following links recursively starting with the entrypoint will be converted. To include all notes in your folder, see the [[Process All]].

It is also possible to [[Create index from tags|create an entrypoint note by matching certain tags]]. If you enable that setting, only the notes that match the tags will be included in the output. (Unless, again, process all is enabled).

## Compatibility
- This application is extensively tested on Linux/OSX, and occasionally tested on Windows.
- Python version 3.9 or higher is required
- Make sure that the `python` command points to `python3`, and not a python2 version.

## Words of thanks
All credit to this site's design goes to Andy Matuschak. I basically [stole his design](https://notes.andymatuschak.org/Evergreen_notes) because I think it is perfect.

## Next up
Take a look at all the [[Features|high level features]] that can be enabled/disabled, or read about all the [[Configuration Options|configuration options]]. Or maybe jump directly to [[Installation]].