---
tags:
- date/2022-02-04
- feature/parsing_markdown
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