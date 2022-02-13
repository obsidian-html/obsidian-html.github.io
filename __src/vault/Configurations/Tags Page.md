---
tags:
- feature/parsing_markdown
- date/2022-02-04
---

# Tags
Inline tags are stripped, but frontmatter tags are parsed and added to a site-wide list which can be found under `<sitename>/tags`, see for example: [/tags](/tags).

If you use slashes in your tags, these will be split into different pages (like a tree view).
E.g. adding the following frontyaml at the top of this note:

``` yaml
---
tags:
- feature/parsing_markdown
- date/2022-02-04
---
```

Will result in a page [/tags/feature/](/tags/feature/) which will contain (among others) a link to  `parsing_markdown`, which will link to this note.