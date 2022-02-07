---
graph_name: Tags
tags:
- type/parsing_markdown
- date/2022-02-04
---

# Tags
Inline tags are stripped, but frontmatter tags are parsed and added to a site-wide list which can be found under `<sitename>/tags`, see for example: https://obsidian-html.github.io/tags/

If you use slashes in your tags, these will be split into different pages (like a tree view).
E.g. adding the following frontyaml at the top of this note:

``` yaml
---
tags:
- type/parsing_markdown
- date/2022-02-04
---
```

Will result in a page [https://obsidian-html.github.io/tags/type](https://obsidian-html.github.io/tags/type) which will contain (among others) a link to  `parsing_markdown`, which will link to this note.