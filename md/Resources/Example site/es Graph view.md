---
graph_name: Graph View
tags:
- date/2022-02-05
- type/configuration_options
- type/features
---
   
# Graph view   
Click on the button at the bottom of a note to view the graph for the current note.   
   
To be added in the future:   
   
- **Pruning**: Do not show notes that are not connected directly nor indirectly to the current note. Only show all notes in a site-wide view.   
- **Zooming/resizing**: If you have a lot of nodes, this view will be kind of useless, even with pruning.   
- Using the text in the first H1 as a graph_name.   
   
Turn on/off graph view:   
   
- In your config file set `toggles/features/build_graph` to `True` (this is the default).   
   
Overwrite the name of a note in the graph view:   
   
- In your frontmatter, set `graph_name: My new note name`   
   
E.g:   
``` yaml
---
graph_name: Links
tags: 
- type/parsing_markdown
- date/2022-02-04
---
```
   
   
> Note: do not use "" around the graph_name value, the frontmatter module doesn't like that.