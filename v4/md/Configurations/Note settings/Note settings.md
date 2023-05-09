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
   
   
### no_tags_footer   
This setting will make it so that no tags footer is placed at the bottom of the note. See also [Tags Page#Tags list in note](../../Configurations/Features/Tags%20Page.md#tags-list-in-note)   
   
``` yaml
obs.html.tags:
- no_tags_footer
```
   
   
### dont_add_toc   
This setting will negate the global setting of `toggles/features/table_of_contents/add_toc_when_missing`   
   
``` yaml
obs.html.tags:
- dont_add_toc
```
   
   
### dont_add_embedded_title   
This setting will negate the global setting of `toggles/features/table_of_contents/add_toc_when_missing`   
   
``` yaml
obs.html.tags:
- dont_add_embedded_title
```
   
   
   
   
## graph_name   
See [ graph_name](../../Configurations/Features/Graph%20view.md#overwrite-the-name-of-a-note-in-the-graph-view-). This will overwrite the name that the note shows up as in the graph view.   
   
``` yaml
graph_name: New name
```
