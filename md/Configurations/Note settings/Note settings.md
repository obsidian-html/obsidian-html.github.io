---
{}
---
   
You can set certain values in the [frontmatter](https://help.obsidian.md/Advanced+topics/YAML+front+matter) of a note, which obsidianhtml will respond to.   
   
This note goes through all\* of them   
   
> \*  if I missed any that I added previously let me know via [Report Issues & Request features](../../General%20Information/Report%20Issues%20%26%20Request%20features.md)   
   
## Tags   
### leaf_note   
This setting will make it so that no links are followed on the respective note.   
   
``` yaml
obs.html.tags:
- leaf_note
```
   
   
## graph_name   
See [ graph_name](../../Configurations/Features/Graph%20view.md#overwrite-the-name-of-a-note-in-the-graph-view-). This will overwrite the name that the note shows up as in the graph view.   
   
``` yaml
graph_name: New name
```
