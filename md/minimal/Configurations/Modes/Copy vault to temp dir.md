---
tags:
- feature/safety
- date/2022-02-13
---
   
> This is the documentation for [v3.5.0](../../Changelog/v3.5.0.md) and lower, for documentation for **v4.0.0** and higher, see [https://obsidian-html.github.io/v4](https://obsidian-html.github.io/v4)   
   
   
We try to not have bugs, but sometimes we just can't help ourselves. I think everyone would agree that the only thing that we should guarantee is that we don't touch your vault files. To help assure that, ObsidianHtml will make a copy of your entire vault to a temporary directory and work from out of that folder.    
   
This is the default behavior,  but an optional setting, and if you have severe file storage problems, or an enormous vault that takes very long to copy, then you can turn this setting off. Though we advise you to make a backup yourself the first couple of times that you use ObsidianHtml, or when you update ObsidianHtml to a new version.    
   
> This setting should be enabled for the option [Create index from tags](../../Configurations/Modes/Create%20index%20from%20tags.md) to work. Because it needs to write a file to the obsidian vault location, and thus we can not guarantee that we don't alter your vault if this setting is turned off.    
   
The temporary dir will be removed once ObisidianHtml is done running. This should even happen if the program hit an error. If this does not happen reliably, please [report it as an issue](../../General%20Information/Report%20Issues%20%26%20Request%20features.md).   
   
See config options: [Configuration Options#Copy Vault to Tempdir](../../Configurations/Configuration%20Options.md#copy-vault-to-tempdir)   
   
## Exclude subfolders   
> New in [v3.2.0](../../Changelog/v3.2.0.md)   
   
The copy method will exclude the subfolders set under [exclude_subfolders](../../Configurations/Configuration%20Options.md#exclude-subfolders).   
   
## Copy methods   
### History   
We started out with a simple `distutils.dir_util.copy_tree()` call, which is kind of a defacto standard in Python if you go by stackoverflow. This turned out to give errors in macos, so the function was copied into our code and edited to work on macos without errors. This function uses `shutil.copy()` calls in a recursive fashion to copy over all your files to a temporary directory.   
   
This turned out to be slow in some circumstances though, such as when copying from one filesystem/drive to another in macos. It also wasn't without errors. This lead to adding a new copy function that uses the system binary `rsync`. This turned out to be way quicker on Linux compared to the old method. Causing it to be selected as the default for systems that have it installed.   
   
### Settings   
> New in [v3.2.0](../../Changelog/v3.2.0.md)   
   
The default setting is as follows:   
``` yaml
# Determines the function to use to copy your vault over to the tempdir.
# `default` will try to use rsync if it is installed, and otherwise use `shutil`
# `rsync` will do the same, but give a warning when it falls back to shutil
# `shutil` will just use shutil to copy. Use this when rsync is installed but is giving problems.
copy_vault_to_tempdir_method: default
```
   
   
As the comments are saying: any configuration will try to use rsync and fallback to shutil when rsync is not found, except for when you configure `copy_vault_to_tempdir_method: shutil`.   
   
## Verbosity   
> New in [v3.2.0](../../Changelog/v3.2.0.md)   
   
You can enable the copy method to print out the files it copies by setting this setting:   
``` yaml
# Enable to print the files being copied
copy_vault_to_tempdir_follow_copy: True
```
   
   
Note that this defaults to False and is not affected by the [global verbosity setting](../../Configurations/Configuration%20Options.md#verbose_printout).