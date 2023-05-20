---
{}
---
# Get File List   
   
[View code](https://github.com/obsidian-html/obsidian-html/blob/master/obsidianhtml/modules/builtin/get_file_list.py)   
   
This module is responsible for getting a first list of files from the [Input folder](../../General%20Information/Concepts/Input%20folder.md).    
   
It uses two globs to control which files are collected:   
   
- `include_glob`   
- `exclude_glob`   
   
First, a list of files is collected that satisfies the `include_glob`, then a list of files is collected that satisfies the `exclude_glob`. Finally, a third list is created that contains all the files present in the first list, but not the second.    
   
This list is written to the [Module data folder](../../Configurations/Modules/Concepts/Module%20data%20folder.md) as `index/files.json`.   
   
This module also creates the `index/markdown_files.json` [modfile](../../Configurations/Modules/Concepts/Module%20file.md), which is the subset of `index/files.json` where the file paths end with `.md`.   
   
Finally, it writes `index/excluded_files.json`, which is a useful overview of files present in the input folder, but excluded by this module.   
   
## Configuration   
### Default configuration   
> Note: this configuration might be outdated. See [Inspect default config](../../Instructions/Inspect%20default%20config.md) or follow the `view code` link at the top of this page, for the most up to date default config.   
   
``` yaml
module_config:
  get_file_list:
    include_glob:
      value: '*'
    exclude_glob:
      value: 
        - ".obsidian/**/*"
        - ".trash/**/*",
        - ".DS_Store/**/*",
        - ".git/**/*",
```
   
   
### Glob syntax   
#### Match folder and everything under it   
``` yaml
".obsidian/**/*"
```
   
   
> [!warning]    
> Note that this will match on **any** folder called `.obsidian` **anywhere** in the input folder!   
   
#### Match specific file   
This will be calculated with the input folder as root.    
   
> [!warning]    
> Note that this works only for files, and files directly under a configured folder, as this method uses `glob.glob` instead of `Path.rglob`, and is thus not recursive!   
   
``` yaml
# specific file
"/Home.md"

# specific folder and files directly under it
"/Log/**"
```
   
   
   
## Further filtering   
These modules are executed by default (at some point) after this module, and allow for further filtering of the notes:   
   
-