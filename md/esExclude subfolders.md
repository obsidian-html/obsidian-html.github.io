---
tags:
- date/2022-02-05
---
   
# Exclude subfolders   
You can add folders to the `exclude_subfolders` key in the config.yml, to skip parsing these entirely. Each entry should be relative to the root folder, which is set in the same config yaml under `obsidian_folder_path_str`.   
   
This method can be useful for folders that are not a part of your intended output and that have duplicate file names.   
   
See the [example config yaml](https://github.com/obsidian-html/obsidian-html/blob/master/example_config.yml#L43). A common folder is the `.obsidian` folder.   
   
This folder is by default in the yaml, but not in the code, so if you have an older yaml, you should add the `exclude_subfolders` key to it, and add at least the `.obsidian` folder as a list item.