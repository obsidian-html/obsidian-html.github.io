---
tags:
- type/test_page
- date/2022-07-30
- inline-tag
---
# Implementing inline tags   
   
> This is the documentation for [v3.5.0](../Changelog/v3.5.0.md) and lower, for documentation for **v4.0.0** and higher, see [https://obsidian-html.github.io/v4](https://obsidian-html.github.io/v4)   
   
> New in [v3.1.0](../Changelog/v3.1.0.md)   
   
You can create an `{_obsidian_pattern_tag_inline-tag}` by typing # and then immediately some text (without a space). This will then be picked up in the list at the bottom of the page, and it will also be a clickable link in the note when you have the following setting configured:    
   
``` yaml
toggles:
  # Will preserve inline tags. This will give polluted markdown output
  preserve_inline_tags: True
```
