---
tags:
- type/instruction
- date/2022-02-21
---
   
# Quickstart   
This page is a very short summary of installation, usage, and configuration options.   
   
## Installation   
> Full installation instructions: [Installation](../Instructions/Installation.md)   
   
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
   
> [!caution]- Caution: don't run this command **in** your vault!   
> **Do not** run this command in your vault, as it will create the output in your vault, which will cause a DuplicateFileName error on subsequent runs!    
   
If you place your config in your vault, then go a folder up and run `obsidianhtml -i <vault folder name>/config.yaml`. Alternatively, add the following settings to your config.yml to control the output location (adjust the paths to make sense for your environment):   
   
``` yaml
# Input and output path of markdown files
# This can be an absolute or a relative path (relative to the working directory when calling obsidianhtml)
# Use full path or relative path, but don't use ~/
md_folder_path_str:  'C:/Users/Username/Documents/Website/md'

# Markdown entrypoint path
# This has to be md_folder_path_str + '/index.md' when toggles/compile_md == True
# This can be an absolute or a relative path (relative to the working directory when calling obsidianhtml)
# Use full path or relative path, but don't use ~/
md_entrypoint_path_str: 'C:/Users/Username/Documents/Website/md/index.md'

# Output path of HTML files
# This can be an absolute or a relative path (relative to the working directory when calling obsidianhtml)
# Use full path or relative path, but don't use ~/
html_output_folder_path_str: 'C:/Users/Username/Documents/Website/html'
```
   
   
## Test website   
``` bash
python -m http.server --dir output/html
```
   
   
Then open [http://localhost:8000](http://localhost:8000) to view the html site that was created.   
   
# Next steps   
   
- Read the full notes on [Installation](../Instructions/Installation.md) and [Usage](../Instructions/Usage.md) if you want to know more about these steps.   
- If the conversion works, but you want to change the behavior, check out [Features](../Configurations/Features.md), [Modes](../Configurations/Modes.md), and finally [Configuration Options](../Configurations/Configuration%20Options.md)