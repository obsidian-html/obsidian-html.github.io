---
tags:
- feature/parsing_markdown
- date/2022-02-04
---

# Lists
No newline is needed in between paragraphs and lists. This is standard in Obsidian. The fix is implemented by adding in the newline for the generated markdown.

``` md
Textblock
- List item
```

Is converted to:
``` md
Textblock

- List item
```

_Example_: 

Textblock
- List item