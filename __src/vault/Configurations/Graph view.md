---
graph_name: Graph View
tags:
- date/2022-02-05
- type/configuration
- feature/html_output
- feature/graph_view
---

# Graph view
Click on the button at the bottom of a note to view the graph for the current note.

To be added in the future:
- **Pruning**: Do not show notes that are not connected directly nor indirectly to the current note. Only show all notes in a site-wide view.
- **Site wide view**: Basically a full page view of the graph
- Using the text in the first H1 as a graph_name.

## Configure graph view
The following key can be found in the [example config yaml](https://github.com/dwrolvink/obsidian-html/blob/master/example_config.yml):

``` yaml
features:
  graph_view:
    enabled: True          # Include code to build the graph view per page (default: True)
    coalesce_force: '-200' # How close the nodes will be to eachother.
```

### Overwrite the name of a note in the graph view:
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

