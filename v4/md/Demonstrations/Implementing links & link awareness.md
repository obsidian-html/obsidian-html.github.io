---
graph_name: Links
tags:
- date/2022-02-04
- feature/parsing_markdown
---
   
   
# Links   
## Obsidian type links   
`[[Simple Obsidian-type Link]]` translates to:   
[Simple Obsidian-type Link](../Demonstrations/Test%20pages/Simple%20Obsidian-type%20Link.md)   
   
Aliasing also works, `[[Simple Obsidian-type Link|Same link as before]]`:   
[Same link as before](../Demonstrations/Test%20pages/Simple%20Obsidian-type%20Link.md)   
   
Linking to specific chapters `[[Long long page#Chapter of interest]]`   
[Long long page](../Demonstrations/Test%20pages/Long%20long%20page.md#chapter-of-interest)   
   
Linking to another header on the same page: `[[#Proper markdown links]]`   
[Proper markdown links](#proper-markdown-links)   
   
## Proper markdown links   
There is a setting that forces Obsidian to use proper markdown notation. So this is also supported:   
   
`[Proper markdown link](proper%20markdown)`   
[Proper markdown link](../Demonstrations/Test%20pages/proper%20markdown.md)   
    
 Note that spaces must be encoded in proper markdown links.   
   
## Link awareness   
An external links show up the little icon to show it:   
[https://github.com/obsidian-html/obsidian-html](https://github.com/obsidian-html/obsidian-html)   
   
When linking to new notes, and not creating them, the link will be replaced with "not_created.html", and the link will be color coded by adding `class="nonexistent-link"` to the a href:   
   
[In the end I never created this note](/not_created.md)   
   
## Link to non-markdown files   
Image files and other non-markdown files local to the given root folder get copied over to the output. Take for example: [textfile.txt](../Demonstrations/Test%20pages/textfile.txt).   
   
Note that Obsidian type links will always be appended with .md if this is missing.    
   
This is the default behavior of Obsidian. You can work around this, but when you do, it is impossible to determine with 100% certainty which file is linked to.    
   
If you want to link to files that are not markdown, use proper markdown links:   
```
[[textfile.txt]] --> [textfile.txt](textfile.txt.md)
[textfile.txt](textfile.txt) --> [textfile.txt](textfile.txt)
```
   
