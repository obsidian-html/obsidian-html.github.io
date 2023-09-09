---
tags: []
---
# Parse Metadata

> [View code](https://github.com/obsidian-html/obsidian-html/blob/master/obsidianhtml/modules/builtin/parse_metadata.py)

This module will read the `index/markdown_files.json` [Module file](../../Configurations/Modules/Concepts/Module%20file.md), provided by [Get File List](../../Configurations/Modules/Get%20File%20List.md), read every file in that list, compile the metadata dict, combining both the frontmatter and the inline tags, and write it to `index/metadata.json`.
