---
tags:
- type/bug_report
- date/2022-03-11
---
# Spaces in front of headers allowed by Obsidian but not by ObsidianHtml   
   
> This is the documentation for [v3.5.0](../Changelog/v3.5.0.md) and lower, for documentation for **v4.0.0** and higher, see [https://obsidian-html.github.io/v4](https://obsidian-html.github.io/v4)   
   
   
> Fixed in [v1.1.0](../Changelog/v1.1.0.md)   
   
It's possible in Obsidian to have a space in front of a header tag and still have it display as a header:   
``` md
# is an h1 header
 # is an h1 header too
```
   
   
This is not allowed in proper markdown though. So this leads to the headers not being recognized by python-markdown.   
   
This is technically a user error, but it happened to me, and with the new auto-format feature in edit mode, typo's like this are very hard to spot.    
   
It's not nice if people use this package and are in the dark as to why their headers are not being rendered.     
Besides, if obsidian implements something, obsidianhtml should implement it too, even if it basically means allowing the user to have random spaces in front of their headers. ^131340   
   
It's pretty doable to remove these spaces in these cases and only in these cases. The regex in the code is just `(^\ [\ ]*)(?=#)` (one or more spaces from the beginning of the line immediately followed by a `#` are removed).