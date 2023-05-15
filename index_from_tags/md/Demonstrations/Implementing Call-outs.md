---
tags:
- feature/html_output
- type/configuration
- date/2022-04-26
---
# Implementing Call-outs   
   
> This is the documentation for [v3.5.0](../Changelog/v3.5.0.md) and lower, for documentation for **v4.0.0** and higher, see [https://obsidian-html.github.io/v4](https://obsidian-html.github.io/v4)   
   
   
> Added in [v2.1.0](../Changelog/v2.1.0.md)   
   
Call-outs are a way to have a bit more flavor than the standard blockquote. They can also fold in, allowing you to tuck away long-winded examples to a collapsible section.   
   
This feature is implemented as good as perfectly from Obsidian, so look [over there](https://help.obsidian.md/How+to/Use+callouts) also for configuration information.   
   
This page will service mostly as a demonstration and to show the style that we use (which at the time of writing is pretty much exactly the same as the dark theme on Obsidian).   
   
## Configurations   
### Normal note   
``` markdown
> [!note]
> This is a note block
```
   
   
> [!note]   
> This is a note block   
   
### Folded note   
``` markdown
> [!note]- Folded
> This is a folded note block. It is closed by default.

> [!note]+ Unfolded, but foldable
> This is a folded note block. It is unfolded by default.
```
   
   
> [!note]- Folded   
> This is a folded note block. It is closed by default.   
   
> [!note]+ Unfolded, but foldable   
> This is a folded note block. It is unfolded by default.   
   
### Custom title   
``` markdown
> [!note]- Custom callout title
> This is a folded note block with a custom title
```
   
> [!note]- Custom callout title   
> This is a folded note block with a custom title   
   
### Multi paragraph   
Continue the block with a `>`, like so:   
``` markdown
> [!note]
> This is a note block.
>
> It has two paragraphs.
```
   
> [!note]   
> This is a note block.   
>   
> It has two paragraphs.   
   
   
## Single line call-outs   
```
> [!warning] This is just a warning. No content
```
   
   
> [!warning] This is just a warning. No content   
   
   
   
## Types   
   
- Instead of `[!note]` you can use any other name   
- If a type is not known it will get the styling of the note callout type (unless you have added your own css).   
   
> [!info]-    
> This is an info block   
   
> [!note]-    
> This is a note block [link](brtdar)   
   
> [!abstract]-    
> This is an abstract block   
   
> [!summary]-    
> This is a summary block   
   
> [!tldr]-    
> This is a tldr block   
   
> [!todo]-    
> This is a todo block   
   
> [!tip]-    
> This is a tip block   
   
> [!important]-    
> This is a important block   
   
> [!success]-    
> This is a success block   
   
> [!check]-    
> This is a check block   
   
> [!done]-    
> This is a done block   
   
> [!question]-    
> This is a question block   
   
> [!help]-    
> This is a help block   
   
> [!faq]-    
> This is a faq block   
   
> [!warning]-    
> This is a warning block   
   
> [!caution]-    
> This is a caution block   
   
> [!attention]-    
> This is a attention block   
   
> [!failure]-    
> This is a failure block   
   
> [!fail]-    
> This is a fail block   
   
> [!missing]-    
> This is a missing block   
   
> [!danger]-    
> This is a danger block   
   
> [!error]-    
> This is a error block   
   
> [!bug]-    
> This is a bug block   
   
> [!example]-    
> This is a example block   
   
> [!quote]-    
> This is a quote block   
   
> [!cite]-    
> This is a cite block