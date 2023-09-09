---
tags:
- type/configuration
- date/2022-02-06
---
   
> This is the documentation for [v3.5.0](../../Changelog/v3.5.0.md) and lower, for documentation for **v4.0.0** and higher, see [https://obsidian-html.github.io/v4](https://obsidian-html.github.io/v4)   
   
   
## Crawling versus converting all nodes   
This package was written with the idea that [you give one note that will serve as the homepage](../../Configurations/Modes/Modes.md#entrypoint-mode). Then all the notes that are linked directly or indirectly by that first note are processed, ignoring what else might still be in your vault.   
   
Process all is a [mode](../../Configurations/Modes/Modes.md), which will tell ObsidianHtml to convert and include all notes in the output.    
   
This has become more useful because of the new [Graph view](../../Configurations/Features/Graph%20view.md) and [Tags Page](../../Configurations/Features/Tags%20Page.md) features. These can make those notes reachable now.    
   
See [Configuration Options#Process all](../../Configurations/Configuration%20Options.md#process-all) for how to enable this setting.