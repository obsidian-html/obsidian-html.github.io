---
tags:
- type/instruction
- date/2022-02-12
---
   
# Usage   
## Basic usage and required configurations   
After [Installation](../Instructions/Installation.md), we can run obsidian via the commandline like so:   
``` bash
obsidianhtml
```
   
   
That will give us the following output:   
``` init
Could not locate the config file config.yml.
  Please try passing the exact location of it with the `obsidianhtml -i /your/path/to/config.yml` parameter.
  
[Obsidian-html]
- Add -i </path/to/input.yml> to provide config
- Add -v for verbose output
- Add -h to get helptext
- Add -eht <target/path/file.name> to export the html template.
- Add -gc to output all configurable keys and their default values.
```
   
   
So we need to input a config file. The minimum config that you need to have obsidianhtml work is the following:   
   
``` yaml
# The first folder that contains all obsidian files
# Use full path or relative path, but don't use ~/
obsidian_folder_path_str: '/path/to/your/vault' 

# The note that will be used as the index.html 
# should be in obsidian_folder_path_str
# Use full path or relative path, but don't use ~/
obsidian_entrypoint_path_str: '/path/to/your/vault/entrypoint.md'
```
   
   
Copy the code above into a file called `config.yaml` and fill in the correct paths.   
   
> [!important]- Important: output will be created in your cwd!   
> The next step will create a folder called `output` in your current path. Move to a folder where you don't mind a folder being created. Make sure you are not in your vault when running obsidianhtml with these settings, because creating the output folder in your vault will cause errors on subsequent runs.   
   
Running again with now the config file as an input.    
(Make sure that you give the correct path to your config file!)   
   
``` bash
obsidianhtml -i config.yaml
```
   
   
You might get a lot of warnings if you use external images, or have a lot of notes linked but not created. This is expected, and such warnings can be turned off, if desired, see [Configuration Options](../Configurations/Configuration%20Options.md).    
   
> [!Tip]- Tip: verbosity   
> Run `obsidianhtml -i config.yaml -v` to run in verbose mode to get more detail on what is going on in which note / step of the process.   
   
The output will be located in your current directory under `output/md` and `output/html`.    
   
Now we can run a simple webserver to view the output.    
   
> Tip: open a new terminal and move to the same folder as where you ran the previous command.   
   
Run:   
``` bash
python -m http.server --dir output/html
```
   
   
Then open [http://localhost:8000](http://localhost:8000) to view the html site that was created.   
   
Can't get this to work? Please let us know via [Report Issues & Request features](../General%20Information/Report%20Issues%20%26%20Request%20features.md).   
   
## Deployment configuration   
   
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
   
For this to work we need to make sure that all the links in a page are relative to that page, this can be done by configuring this setting: [Relative_path_html](../Configurations/Relative_path_html.md)
   
   
## Further configurations   
Add the following settings to your config.yaml to control the behavior of obsidianhtml.    
   
This section only names the configurations that most often come up when setting up the config for the first time.    
   
For a high level overview of interesting configurations see [Styling](../Configurations/Styling/Styling.md), [Modes](../Configurations/Modes.md) and [Features](../Configurations/Features.md). For a full list of all options see [Configuration Options](../Configurations/Configuration%20Options.md).   
   
### Control output location   
At the moment the output folder will just be created where ever we call `obsidianhtml` from, to pin down the output location, use an absolute path (starting with `<Driveletter>:/` on Windows, or starting with `/` on Linux/macOs).    
   
Relative paths are also allowed.   
   
   
- Make sure that the `md_entrypoint_path_str` is located in `md_folder_path_str`.   
- The example paths below are for Windows, for Linux, and example would be `/home/<username>/Documents/Website/<folder>`   
   
``` yaml 
# Input and output path of markdown files
# This can be an absolute or a relative path (relative to the working directory when calling obsidianhtml)
# Use full path or relative path, but don't use ~/
md_folder_path_str:  'C:/Users/<Username>/Documents/Website/md'

# Markdown entrypoint path
# This has to be md_folder_path_str + '/index.md' when toggles/compile_md == True
# This can be an absolute or a relative path (relative to the working directory when calling obsidianhtml)
# Use full path or relative path, but don't use ~/
md_entrypoint_path_str: 'C:/Users/<Username>/Documents/Website/md/index.md'

# Output path of HTML files
# This can be an absolute or a relative path (relative to the working directory when calling obsidianhtml)
# Use full path or relative path, but don't use ~/
html_output_folder_path_str: 'C:/Users/<Username>/Documents/Website/html'
```
   
   
### Changing the layout   
Read more here [Styling](../Configurations/Styling/Styling.md).   
   
### Html Custom Inclusions   
If you want to edit the style of the website output, you can add in css (and/or javascript) files. Read more here: [Html Custom Inclusions](../Configurations/Configuration%20Options.md#html-custom-inclusions).   
   
## Next steps   
   
- [Features](../Configurations/Features.md)   
- [Configuration Options](../Configurations/Configuration%20Options.md)   
- [Report Issues & Request features](../General%20Information/Report%20Issues%20%26%20Request%20features.md)   
- [How to resolve common issues](/not_created.md)