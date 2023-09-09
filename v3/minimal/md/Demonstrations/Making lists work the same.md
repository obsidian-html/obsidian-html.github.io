---
graph_name: Lists
tags:
- feature/parsing_markdown
- date/2022-02-04
---
   
>[!important]   
> This is the documentation for [v3.5.0](../Changelog/v3.5.0.md) and lower, for documentation for **v4.0.0** and higher, see [https://obsidian-html.github.io/](https://obsidian-html.github.io/)   
   
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