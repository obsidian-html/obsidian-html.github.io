---
tags:
- type/configuration
- date/2022-02-06
---

## Crawling versus converting all nodes
This package was written with the idea that [[Modes#Entrypoint mode|you give one note that will serve as the homepage]]. Then all the notes that are linked directly or indirectly by that first note are processed, ignoring what else might still be in your vault.

Process all is a [[Modes|mode]], which will tell ObsidianHtml to convert and include all notes in the output. 

This has become more useful because of the new [[Graph view]] and [[Tags Page]] features. These can make those notes reachable now. 

See [[Configuration Options#Process all]] for how to enable this setting.
