---
{}
---
# Filter on Metadata   
   
> [View code](https://github.com/obsidian-html/obsidian-html/blob/master/obsidianhtml/modules/builtin/filter_on_metadata.py)   
   
This module will read the `index/metadata.json` [Module file](../../Configurations/Modules/Concepts/Module%20file.md), provided by [Parse Metadata](../../Configurations/Modules/Parse%20Metadata.md), read every file in that list,    
   
This module will load `index/metadata.json` [Module file](../../Configurations/Modules/Concepts/Module%20file.md), provided by [Parse Metadata](../../Configurations/Modules/Parse%20Metadata.md), which contains a metadata record for each markdown file in the vault (after crude filtering).   
   
It will then test each file's metadata against the `include_on` and `exclude_on` rules, compiling an excluded_files list.   
   
The files `index/files.json` and `index/markdown_files.json` are then updated so that the items in `excluded_files` are removed from them.   
   
## Configuration   
> Note: this configuration might be outdated. See [Inspect default config](../../Instructions/Inspect%20default%20config.md) or follow the `view code` link at the top of this page, for the most up to date default config.   
   
``` yaml
module_config:
  filter_on_metadata:
    include_on: 
      description: What metadata to include notes on. Empty list means True by default.
      value: [[]]
    exclude_on: 
      description: What metadata to exclude on. Empty list means False by default
      value: [[]]
```
   
   
Note the double list. The inner lists will each be tested, rendering a True or False per inner list. If any of the inner lists give True, then the entire statement will be True. Another way to say this is that the inner lists are `OR`ed together.   
   
The inner lists are lists of elements. For an inner list to be rendered as True, every element needs to be rendered as True. Thus, these inner lists function as `AND` statements.   
   
Elements are simple dicts that tell the module what to look for in the metadata. If present, it will be rendered as True.   
   
### Available elements   
The elements available at time of writing are:   
   
``` yaml
# true if: tag with tag_name exists
{'tagged': 'tag_name'}

# true if: metadata key 'key' exists
{'present': 'key'}

# true if: metadata key 'key' exists and its value is true
{'flag': 'key'}

# true if: metadata key 'key' exists and its value equals 'value'
{'equals': ['key', 'value']}
```
   
   
### Structure   
Let's say you want to only include notes that contain both the `publish` and the `blog` tags, you'd configure this as follows:   
   
``` yaml
module_config:
  filter_on_metadata:
    include_on:
      value: [[{'tagged': 'publish'},{'tagged': 'blog'}]] 
```
   
   
If you'd like to publish any note that has tag `publish` OR tag `blog`, you'd configure this instead:   
   
``` yaml
module_config:
  filter_on_metadata:
    include_on:
      value: [[{'tagged': 'publish'}],[{'tagged': 'blog'}]] 
```
   
   
If you'd like to publish any note, except the ones that contain the `private` tag, you'd configure:   
   
``` yaml
module_config:
  filter_on_metadata:
    exclude_on: 
      value: [[{'tagged': 'private'}]] 
```
   
   
And finally, any note tagged with the tag `blog`, unless it is also tagged with `private`:   
   
``` yaml
module_config:
  filter_on_metadata:
    include_on:
      value: [[{'tagged': 'blog'}]] 
    exclude_on:
      value: [[{'tagged': 'private'}]] 
```
   
   
## Examples   
### Get all notes with certain category   
Let's say you have a category system, that does not use tags, like so:   
   
``` md
---
category: blog
--- 
```
   
   
``` md
---
category: diary
--- 
```
   
   
etc.   
   
You can then publish only the notes that have `category: blog` by configuring:   
   
``` yaml
module_config:
  filter_on_metadata:
    include_on:
      value: [[{'equals': ['category', 'blog']}]] 
```
