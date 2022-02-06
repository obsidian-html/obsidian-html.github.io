---
graph_name: Crawling versus converting all nodes
tags:
- date/2022-02-06
---
   
# Crawling versus converting all nodes   
This package was written with the idea that you give one note that will serve as the homepage. Then all the notes that are linked directly or indirectly by that first note are processed, ignoring what else might still be in your vault.   
   
Now there is a new mode, which will indeed convert all notes. This has become more useful because of the new graph view and tag view features. These can make those notes reachable now.    
   
The default is still to only process what can be reached from the first note. To get all notes converted, add a key under `toggles` in your config yaml, named `process_all` and set it to the value of `True`.    
   
[See the example config for reference](https://github.com/obsidian-html/obsidian-html/blob/ff371c665a78d10a6658dbd8f04b759e0882a858/example_config.yml#L55)