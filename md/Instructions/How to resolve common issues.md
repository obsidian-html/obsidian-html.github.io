---
tags:
- type/template
- date/2022-03-10
---
   
# How to resolve common issues   
## Links in included notes do not work / show up as external   
> Applies to versions: 1.0.2 and earlier   
   
This should be resolved by the setting:   
``` yaml
toggles:
  relative_path_md: False
```
   
   
Note that this will break the links in the markdown output on some markdown viewers (such as gitlab and vscode preview mode).    
   
> If you need both the markdown output and the html output, then consider compiling twice, where the one with this setting points to a different markdown folder.   
   
This trade-off should be mitigated  once this activity is merged: [https://github.com/obsidian-html/obsidian-html/issues/179](https://github.com/obsidian-html/obsidian-html/issues/179)