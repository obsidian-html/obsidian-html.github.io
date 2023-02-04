---
{}
---
   
A conversion in which we take a markdown wiki as input, instead of it being the result of a vault being converted to markdown ([note --> html](../../General%20Information/Snippets/note%20--%3E%20html.md)).   
   
When you add this setting, obsidianhtml will work in this manner:   
   
``` yaml
toggles:
  # Opt-in/-out of Obsidian->Md conversion, set to False when using proper markdown as input
  compile_md: False
```
   
   
When you do, make sure that the following settings are correct:   
   
``` yaml
# Input and output path of markdown files
# This can be an absolute or a relative path (relative to the working directory when calling obsidianhtml)
# Use full path or relative path, but don't use ~/
md_folder_path_str:  'path/to/md'

# Markdown entrypoint path
# This has to be md_folder_path_str + '/index.md' when toggles/compile_md == True
# This can be an absolute or a relative path (relative to the working directory when calling obsidianhtml)
# Use full path or relative path, but don't use ~/
md_entrypoint_path_str: 'path/to/md/index.md'
```
   
   
You might also be interested in:   
   
``` yaml
# Used to strip the http url hostpart of a link to get a relative link
# e.g. for value "https://git.com/user/repo/-/wikis/mywiki/" then:
#   "https://git.com/user/repo/-/wikis/mywiki/folder/markdown.md" --> /folder/markdown.md
md_source_host_urls: []

toggles:
  # gitlab is case insensitive, this setting should be true when converting a wiki from that source
  # note that this does not impact the output, Hello.md will be written to Hello.html
  force_filename_to_lowercase: False
```
