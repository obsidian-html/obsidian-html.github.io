You can set certain values in the [frontmatter](https://help.obsidian.md/Advanced+topics/YAML+front+matter) of a note, which obsidianhtml will respond to.

This note goes through all\* of them

> \*  if I missed any that I added previously let me know via [[Report Issues & Request features]]

## Tags
### leaf_note
This setting will make it so that no links are followed on the respective note.

``` yaml
obs.html.tags:
- leaf_note
```

## graph_name
See [[Graph view#Overwrite the name of a note in the graph view | graph_name]]. This will overwrite the name that the note shows up as in the graph view.

``` yaml
graph_name: New name
```

