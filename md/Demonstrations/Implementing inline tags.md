---
tags:
- date/2022-07-30
- type/test_page
- inline-tag
---
# Implementing inline tags


> New in [v3.1.0](/not_created.md)

You can create an `{_obsidian_pattern_tag_inline-tag}` by typing # and then immediately some text (without a space). This will then be picked up in the list at the bottom of the page, and it will also be a clickable link in the note when you have the following setting configured: 

``` yaml
toggles:
  # Will preserve inline tags. This will give polluted markdown output
  preserve_inline_tags: True
```



