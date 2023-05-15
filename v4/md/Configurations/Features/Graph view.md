---
graph_name: Graph View
tags:
- date/2022-02-05
- type/configuration
- feature/html_output
- feature/graph_view
---
# Graph View   
   
Click on the button at the bottom of a note to view the graph for the current note. Click on the graph icon in the menu to go to a full page graph view.   
   
In the graph view, clicking on a note will open that note. In the full page view clicking on a note will highlight it, so that you can quickly go through your notes and seeing clearly which are connected to which. Use rightclick in the full page view to open a note.   
   
The graph view works based on a template. [Your own template can be added in](../../Configurations/Styling/Writing%20a%20custom%20graph%20view%20template.md) when you want to customize the look and/or functionality of the graph view. Or you can [Template](#template).   
   
To be added in the future:   
   
- **Pruning**: Do not show notes that are not connected directly nor indirectly to the current note. Only show all notes in a site-wide view.   
- Using the text in the first H1 as a graph_name.   
   
## Configure graph view   
``` yaml
toggles:
  features:
    # Include code to build the graph view per page 
    graph:
      enabled: True           # Include code to build the graph view per page (default: True)
      show_inclusions_in_graph: True
      templates:
        - id: 2d
          name: 2d
          path: builtin<2d>
        - id: 3d
          name: 3d
          path: builtin<3d>
      styling:
        show_icon: True
```
   
   
### (Custom) Template   
There are two default graph view templates that can be used out of the box: 2d and 3d.    
   
Note that the 2d version shows the name of the notes that are connected to the current note, the 3d version only shows it on mouseover, which might be an issue for mobile/tablet users.   
   
If you want to pass in your own custom template, change this value to anything other than 2d/3d, and it will be parsed as a path to the template.    
   
Read more: [Writing a custom graph view template](../../Configurations/Styling/Writing%20a%20custom%20graph%20view%20template.md).   
   
   
### Overwrite the name of a note in the graph view   
   
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
   
   
### Show/hide inclusion in the graph view   
By default, [inclusions](../../Configurations/Features/Include%20notes.md) are shown in the graph view as a dotted line. To disable this (i.e. stop showing inclusions in the graph view), set the following value:   
   
``` yaml
toggles:
  features:
    graph:
      show_inclusions_in_graph: False
```
