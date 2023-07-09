---
tags: []
---
# Markdown post processing   
   
In the most common flow, markdown is created from your obsidian notes, and then those markdown files are converted to html pages.   
   
If you want to change the markdown output after this proces is finished you can use post processing features. Any such post processing won't have any effect on the (optional) html output, since the post processing is done at the very end of the conversion step.    
   
You can choose how to post process your output by picking modules. A module will do one specific transformation to your output, such as writing one syntax to another, or adding a prefix or a suffix. You can enable several different modules. These will then be applied one by one to the markdown output.   
   
The post processing modules can be configured here:   
``` yaml
toggles:
  features:
    post_processing: []
```
   
   
An example where one module is enabled   
   
``` yaml
toggles:
  features:
    post_processing:
      - module: md_markdown_callouts
```
   
   
# Apply only post processing   
If you have already some markdown output that you want to apply post processing on, you can configure obsidianhtml to do nothing except the post processing step. At time of writing such a configuration would look like this:   
   
``` yaml
md_folder_path_str:  'output/md'  # path to the folder containing your markdown files
toggles:
  compile_md: False               # don't create md, we already have the files!
  compile_html: False             # we don't need the html output
  no_clean: True                  # do not empty the md and html folders
  features:
    post_processing: 
      - module: md_markdown_callouts
```
   
   
# Available modules   
## md_markdown_callouts   
This module will convert callouts from the [obsidian format](https://help.obsidian.md/How+to/Use+callouts) to the [py block format](https://oprypin.github.io/markdown-callouts/#block-level-syntax).    
As requested and discussed in [https://github.com/obsidian-html/obsidian-html/issues/571](https://github.com/obsidian-html/obsidian-html/issues/571)    
   
You will also find a standalone script in that issue to do the same thing, but without needing to invoke obsidianhtml.   
   
This module is only applied to `*.md` files.   
   
   
   
   
   
