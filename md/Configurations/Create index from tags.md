---
tags:
- feature/dynamic_index
- date/2022-02-13
---
   
# Create index from tags   
If you want to build an index note on the fly, based on selected tags, you can use this feature.   
   
The configuration options can be found here: [Configuration Options#Create Index From Tags](../Configurations/Configuration%20Options.md#create-index-from-tags)   
   
The basic outline is this:   
   
- Select the tags on which you want to match notes, each tag will get its own header   
- Select the sort order, for which order you want the notes to appear under each header   
- Select the placement of the notes that were matched on the selected tags, but did not have a value for the criterium that you selected for the sort (on top or on bottom).   
   
To enable this setting, [Copy vault to temp dir](../Configurations/Copy%20vault%20to%20temp%20dir.md) must be **enabled**. This is because for this feature to work, it has to create a note in the [obsidian_folder_path](../Configurations/Configuration%20Options.md#obsidian_folder_path_str), and this path will be the user's actual vault when copy vault to temp dir is disabled.   
   
## Example   
You can view an index that is created in this way under [/index_from_tags](/index_from_tags).    
   
> Fun fact: we co-published this version of the website next to the main website using the [Configuration Options#Html Url Prefix](../Configurations/Configuration%20Options.md#html-url-prefix) setting!   
   
## Minimal configuration   
Don't be intimidated by the configuration settings for this feature, in it's minimal form, this would be enough to enable it:   
   
``` yaml
toggles
  features:
    create_index_from_tags:
      enabled: True
      tags: [my_tag, my_other_tag]
```
