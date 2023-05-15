---
tags:
- type/instruction
- date/2022-02-21
---
# Quickstart   
   
> This is the documentation for [v3.5.0](../Changelog/v3.5.0.md) and lower, for documentation for **v4.0.0** and higher, see [https://obsidian-html.github.io/v4](https://obsidian-html.github.io/v4)   
   
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
   
   
   
When running on Windows,  also run:   
   
```bash
pip install --pre pythonnet
```
   
For more information: [Installation#On Windows](../Instructions/Installation.md#on-windows).   
   
   
Now we can install ObsidianHtml:   
   
``` bash
pip install obsidianhtml
```
   
   
## Run   
> New in [v3.2.0](../Changelog/v3.2.0.md).    
   
To hit the ground running you can use `obsidianhtml run`. This way you only have to provide the path to a note that will serve as your homepage. (Parts of) the rest of your vault will be included by following the links on your entrypoint note. The vault is then converted to html and the website is hosted on [http://localhost:8888](http://localhost:8888)   
   
Read more: [Obsidianhtml Run](../Instructions/Obsidianhtml%20Run.md)   
   
When this works, or you want more configuration settings out of the box, you can skip this section and continue with the next section.   
   

### Short instructions   
Run   
``` bash
obsidianhtml run -f /absolute/path/to/your/entrypoint_note.md
```

   
   
Then follow the instructions in the terminal. If all is well it will spit out some information and then tell you to open [http://localhost:8888](http://localhost:8888) in your browser. Do so and admire your new website.   
   
When done return to the terminal and press enter to exit obsidianhtml and stop the webserver.   
   
   
   
If you are happy with the result, you can take the path to your generated config yaml in the steps below as a starting point. Follow the instructions at [Convert vault](#convert-vault) to just convert your vault to html (and or markdown) and forgo running the integrated webserver.   
   
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
   
   
## Convert vault   
Open a terminal (on Windows use Powershell) in the aforementioned folder, and run this command:   
``` bash
obsidianhtml convert -i config.yaml
```
   
   
This will create the folder `output` in your current folder, containing `output/md` and `output/html` for the proper markdown and the html website respectively.   
   
> [!caution]- Caution: don't run this command **in** your vault!   
> **Do not** run this command in your vault, as it will create the output in your vault, which can confuse Obsidian and causes issues in ObsidianHtml in later runs!   
   
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
obsidianhtml serve --directory output/html --port 8000
```
   
   
Then open [http://localhost:8000](http://localhost:8000) to view the html site that was created.   
   
## Deployment configuration   

# Deployment instructions   
   
> This is the documentation for [v3.5.0](../Changelog/v3.5.0.md) and lower, for documentation for **v4.0.0** and higher, see [https://obsidian-html.github.io/v4](https://obsidian-html.github.io/v4)   
   
By default the configuration allows for running the website as  [http://localhost:8000](http://localhost:8000),  [https://mywebsite.com/,](https://mywebsite.com/,) [https://my-account.github.io/,](https://my-account.github.io/,) etc.   
   
All those urls have in common that they are in the root of the domain. An example where this is not the case is:  [https://mywebsite.com/subfolder/.](https://mywebsite.com/subfolder/.)   
   
#### Deploying to a subfolder   
To make your website work for [https://mywebsite.com/subfolder/](https://mywebsite.com/subfolder/) you should add this setting:   
   
``` yaml
# Use when deploying to https://mydomain.com/html_prefix/ instead of https://mydomain.com/
# use '/html_prefix' (prepend slash, no slash at the end)
html_url_prefix: '/subfolder'
```
   
   
This will add `/subfolder` to every link in the html output.   
   
> [!note]   
> When you use this setting,  testing locally will give issues. Be sure to put your html output in a folder called `subfolder` (in this example), then go to the folder in which this folder is located and run `python -m http.server` then go to [http://localhost:8000/subfolder](http://localhost:8000/subfolder) instead of [http://localhost:8000/](http://localhost:8000/)   
   
#### Viewing your website without a webserver   
If you don't want to deploy a website on the world wide web, nor want to start a local webserver everytime someone wants to view your website, you can configure Obsidianhtml such that you can just open the index.html in your browser directly from your filesystem.   
   
Note that this will break the graph view and the search function, so these should be disabled.    
   
For this to work we need to make sure that all the links in a page are relative to that page, this can be done by configuring this setting: [Relative_path_html](../Configurations/Modes/Relative_path_html.md)
   
   
# Next steps   
   
- Read the full notes on [Installation](../Instructions/Installation.md) and [Usage](../Instructions/Usage.md) if you want to know more about these steps.   
- If the conversion works, but you want to change the behavior, check out [Features](../Configurations/Features/Features.md), [Modes](../Configurations/Modes/Modes.md), and finally [Configuration Options](../Configurations/Configuration%20Options.md)