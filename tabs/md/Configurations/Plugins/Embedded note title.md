---
tags: []
---
   
> New in [v3.2.0](../../Changelog/v3.2.0.md)   
   
Support for the [embedded note title plugin](https://github.com/mgmeyers/obsidian-embedded-note-titles) is enabled by default.   
   
If necessary it can be disabled through this setting:   
   
``` yaml
toggles:
  features:
    embedded_note_titles:
      enabled: False
```
   
   
When this feature is enabled it will look whether folder `{obsidian_folder_path_str}/.obsidian/plugins/obsidian-embedded-note-titles` exists.    
   
If it does not the feature is disabled anyways, and we continue as normal.   
   
If that folder does exist, obsidianhtml will try to load in the data.json in that folder to load in the plugin settings. If you have never configured the plugin this file will not exist.    
   
Based on the plugin settings it will then add `<embeddedtitle>{title.capitalize()}</embeddedtitle>` at the top of each note, unless the settings tell it not to.   
   
At time of writing all the settings should be implemented except for "daily note title format".   
   
![](../../Resources/img/Pasted%20image%2020220905184629.png)