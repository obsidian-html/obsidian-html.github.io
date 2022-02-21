---
tags:
- type/template
- date/2022-02-21
---
   
# Quickstart   
This page is a very short summary of installation, usage, and configuration options.   
   
## Installation   
First we need to [Install python 3](https://wiki.python.org/moin/BeginnersGuide/Download). If you already have it installed, check the version:   
   
```bash
python --version
```
   
   
If you are running a version below 3.9 then you need to upgrade.   
   
After a clean install of Python, you need to upgrade pip (the python package manager that we use to install ObsidianHtml):   
   
```bash
pip install --upgrade pip
```
   
   
Now we can install ObsidianHtml:   
   
``` bash
pip install obsidianhtml
```
   
   
## Configuration   
Pick a folder where you don't mind a folder being created. Then create a file in this folder named `config.yaml`, and fill it with this content (and fill in the values):   
   
``` yaml
# The first folder that contains all obsidian files
# Use full path or relative path, but don't use ~/
obsidian_folder_path_str: '/path/to/your/vault' 

# The note that will be used as the index.html 
# should be in obsidian_folder_path_str
# Use full path or relative path, but don't use ~/
obsidian_entrypoint_path_str: '/path/to/your/vault/entrypoint.md'
```
   
   
## Run   
Open a terminal (on Windows use Powershell) in the aforementioned folder, and run this command:   
``` bash
obsidianhtml -i config.yaml
```
   
   
This will create the folder `output` in your current folder, containing `output/md` and `output/html` for the proper markdown and the html website respectively.   
   
## Test website   
``` bash
python -m http.server --dir output/html
```
   
   
Then open [http://localhost:8000](http://localhost:8000) to view the html site that was created.   
   
# Next steps   
   
- Read the full notes on [Installation](../Instructions/Installation.md) and [Usage](../Instructions/Usage.md) if you want to know more about these steps.   
- If the conversion works, but you want to change the behavior, check out [Features](../MOCs/Features.md), [Modes](../Configurations/Modes.md), and finally [Configuration Options](../Configurations/Configuration%20Options.md)