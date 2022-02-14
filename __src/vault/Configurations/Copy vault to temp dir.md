---
tags:
- feature/safety
- date/2022-02-13
---

# Copy vault to temp dir
We try to not have bugs, but sometimes we just can't help ourselves. I think everyone would agree that the only thing that we should guarantee is that we don't touch your vault files. To help assure that, ObsidianHtml will make a copy of your entire vault to a temporary directory and work from out of that folder. 

This is an optional setting, and if you have severe file storage problems, or an enormous vault that takes very long to copy, then you can turn this setting off. Though we advise you to make a backup yourself the first couple of times that you use ObsidianHtml, or when you update ObsidianHtml to a new version. 

> This setting should be enabled for the option [[Create index from tags]] to work. Because it needs to write a file to the obsidian vault location, and thus we can not guarantee that we don't alter your vault if this setting is turned off. 

The temporary dir will be removed once ObisidianHtml is done running. This should even happen if the program hit an error. If this does not happen reliably, please [[Report Issues & Request features|report it as an issue]].

See config options: [[Configuration Options#Copy Vault to Tempdir]]