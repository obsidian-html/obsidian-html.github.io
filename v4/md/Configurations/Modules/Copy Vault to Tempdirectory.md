---
{}
---
   
> [View code](https://github.com/obsidian-html/obsidian-html/blob/master/obsidianhtml/modules/builtin/copy_vault_to_tempdirectory.py)   
   
This module will copy the configured Obsidian vault to a temporary directory and rewrite `paths.json` to use this directory instead of the configured Obsidian vault directory.   
   
Copying your vault to a temporary directory prior to execution is useful to ensure no changes are made in your vault, either by bugs in the code, or by modules that need to write in the vault directory to make certain features possible.   
   
If you have a very large vault, it might make sense to disable this module. It is recommended to use version control on your vault, such as git, or to make a backup prior to running `obsidianhtml convert`, to be able to restore your vault if anything were to go wrong.   
   
## Notes   
This module always needs to be configured as [persistent](../../Configurations/Modules/Concepts/Persistence.md) to ensure the temporary directory object does not go out of scope prematurely.