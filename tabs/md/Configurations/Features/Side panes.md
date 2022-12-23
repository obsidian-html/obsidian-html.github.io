---
tags: []
---
   
> New in [v3.4.0](../../Changelog/v3.4.0.md)   
   
> Only supported in [Documentation Layout](../../Configurations/Styling/Styling.md#documentation)!   
   
When selecting the [documentation layout](../../Configurations/Styling/Styling.md#documentation), you'll get two side panes by default.   
   
These panes can be filled with a directory view, to show notes in the same folder as the current one; the table of contents of the current page; and the output of the [Create index from tags](../../Configurations/Modes/Create%20index%20from%20tags.md) feature.   
   
## Config   
This is the default config for the side panes:   
   
``` yaml
toggles:
  features:
    side_pane:             # only valid for documentation layout
      left_pane:
        enabled: True
	    width: 16rem
        contents: dir_tree # <toc, tag_tree, dir_tree> 
      right_pane:
        enabled: True
        width: 16rem
        contents: toc      # <toc, tag_tree, dir_tree> 
```
   
   
When you set a side pane to `enabled: False`, this will hide the side pane in the output.   
   
The value of `width` will be used as the CSS value for width of the pane, so any valid CSS value can be used here, think `200px`, `10rem`, `20vw`, etc.   
   
### toc   
This will take the table of contents of the current note, if it exists, make it invisible, and copy the contents over to the side pane.   
   
If you don't want to add a table of contents to every note in Obsidian, you can set this setting to add a toc when missing:   
``` yaml
toggles:
  features:
    table_of_contents:
      add_toc_when_missing: True
```
   
   
### dir_tree   
When selecting dir_tree, the output of [Create Index from Directory Structure](../../Configurations/Modes/Create%20Index%20from%20Directory%20Structure.md) is added to the pane.   
   
So when selecting this source, make sure that feature is enabled and configured. Below is a minimal configuration.   
   
``` yaml
toggles:
  features:
    create_index_from_dir_structure:
      enabled: True
      rel_output_path: 'obs.html/dir_index.html'
```
   
   
### tag_tree   
When selecting tag_tree, the output of [Create index from tags](../../Configurations/Modes/Create%20index%20from%20tags.md) is added to the pane.   
   
So when selecting this source, make sure that feature is enabled and configured. Below is an example configuration. Set the  `tags` value to something that makes sense for your vault.   
   
``` yaml
toggles:
  features:
    create_index_from_tags:
      enabled: True
      rel_output_path: 'obs.html/tag_index.html'
      tags:
        - type/automation
        - feature/parsing_markdown
```
   
   
### html_page   
To get the content of a note in your vault and use it as a side pane, you can configure this feature.   
This can be useful if you want total control of the content of a side-pane.   
   
Here is an example of setting the index.html page as the content of the right side pane:   
   
``` yaml
    side_pane:             
      left_pane:
        enabled: True
        width: 16rem
        contents: dir_tree  
      right_pane:
        enabled: True
        width: 16rem
        contents: html_page      
        content_args:   
          rel_path: 'index.html'
          div_selector: '.content'
          strip_sub_divs:
            - '.toc'
```
   
   
#### rel_path   
This setting configures which page to get the content from. This is the path relative to the root of your website.   
   
#### div_selector   
The `div_selector` tells us what content to get from the page. It is, after all, not desirable to get the **whole** page and put that into the side pane.    
   
The div with class "content" encloses the html that comes directly from your note, so this is set as a default. If you want to select another div, then know that `.name` will select for `<div class="name">` and `#name` will select for  `<div id="name">`.   
   
#### strip_sub_divs   
The table of contents div will be a standard part of your note, but this is not generally something you'd want to add to the side pane. This div has thus been selected to be stripped from whatever you capture.   
   
You can add more selectors to this list, or set it to `strip_sub_divs: []` to forgo stripping the toc from the output.   
   
> **Script tags are always stripped from the output**. Because js scripts are not suited for adding multiple times 9/10 times. If you really want to be able to configure script tags to be included, please go to [Report Issues & Request features](../../General%20Information/Report%20Issues%20%26%20Request%20features.md).   
   
#### notes   
   
- Callouts do not work properly yet with `content: html_page`   
   
## Known limits   
   
- It is not supported to set the same content selector twice (so for example dir_tree in both the left and the right pane).   
  - Not sure why anybody would want to, but now you know you shouldn't even try.