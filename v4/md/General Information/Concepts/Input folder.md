---
tags: []
---
# Input folder   
   
The input folder is the folder that is configured (or calculated) that contains the files to be converted. In normal operation, this will be the same folder as the Obsidian vault. When setting `toggles/convert_md: False`, this will be the configured markdown folder.   
   
When using module [Copy Vault to Tempdirectory](../../Configurations/Modules/Copy%20Vault%20to%20Tempdirectory.md) and `toggles/convert_md: True`, this folder will be `<obsidian AppDir/tempdir`, which will contain a copy of the vault.