> [View code](https://github.com/obsidian-html/obsidian-html/blob/master/obsidianhtml/modules/builtin/parse_metadata.py)

This module will read the `index/markdown_files.json` [[Module file]], provided by [[Get File List]], read every file in that list, compile the metadata dict, combining both the frontmatter and the inline tags, and write it to `index/metadata.json`.
