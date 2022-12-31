---
tags:
- date/2022-07-31
- type/configuration
---
   
# Export vault files to html output   
> New in [v3.2.0](../../Changelog/v3.2.0.md)   
   
## Configuration   
``` yaml
file_exports:
  - encoding: binary
    src: Resources/Includes/favicon.ico
    dst: favicon.ico
  - encoding: utf-8
    src: Resources/Includes/christmas_snowflakes.js
    dst: obs.html/static/christmas_snowflakes.js
```
   
   
This will export the files in the vault to the html_output_folder.   
   
### Paths   
Source paths are relative to the vault path (as configured in `obsidian_folder_path_str`). When `copy_vault_to_tempdir` is enabled, this will be a temporary directory with the same contents as the folder configured on `obsidian_folder_path_str`.   
   
Dest paths are relative to the folder  `html_output_folder_path_str`.   
   
You can go outside of these folder if you wish by providing absolute paths:   
```
file_exports:
  - encoding: binary
    src: /home/username/Downloads/favicon.ico
    dst: favicon.ico
```
   
   
### Encoding   
The default encoding of `utf-8` can be omitted:   
   
``` yaml
file_exports:
  - src: Resources/Includes/christmas_snowflakes.js
    dst: obs.html/static/christmas_snowflakes.js
```
