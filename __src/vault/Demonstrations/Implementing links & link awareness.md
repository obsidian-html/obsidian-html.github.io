---
graph_name: Links
tags: 
- feature/parsing_markdown
- date/2022-02-04
---

# Links
## Obsidian type links
`[[Simple Obsidian-type Link]]` translates to:
[[Simple Obsidian-type Link]]

Aliasing also works, `[[Simple Obsidian-type Link|Same link as before]]`:
[[Simple Obsidian-type Link|Same link as before]]

Linking to specific chapters `[[Long long page#Chapter of interest]]`
[[Long long page#Chapter of interest]]

Linking to another header on the same page: `[[#Proper markdown links]]`
[[#Proper markdown links]]

## Proper markdown links
There is a setting that forces Obsidian to use proper markdown notation. So this is also supported:

`[Proper markdown link](proper%20markdown)`
[Proper markdown link](proper%20markdown.md)
 
 Note that spaces must be encoded in proper markdown links.

## Link awareness
An external links show up the little icon to show it:
[https://github.com/obsidian-html/obsidian-html](https://github.com/obsidian-html/obsidian-html)

When linking to new notes, and not creating them, the link will be replaced with "not_created.html", and the link will be color coded by adding `class="nonexistent-link"` to the a href:

[[In the end I never created this note]]

## Link to non-markdown files
Image files and other non-markdown files local to the given root folder get copied over to the output. Take for example: [textfile.txt](Test%20Pages/textfile.txt).

Note that Obsidian type links will always be appended with .md if this is missing. 

This is the default behavior of Obsidian. You can work around this, but when you do, it is impossible to determine with 100% certainty which file is linked to. 

If you want to link to files that are not markdown, use proper markdown links:
```
[[textfile.txt]] --> [textfile.txt](textfile.txt.md)
[textfile.txt](textfile.txt) --> [textfile.txt](textfile.txt)
```
