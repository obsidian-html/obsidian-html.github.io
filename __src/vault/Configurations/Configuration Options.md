---
tags:
- type/configuration
- date/2022-02-12
---

# Configuration Options
This page goes through all the configuration options and will refer to features. For a toplevel view of these features, see [[Features]].

Certain settings change the flow of how notes are selected and presented on the homepage. You can find a glossary on those in [[Modes]].

## Get all the default settings
Run:

``` bash
obsidianhtml -gc
``` 

To view the defaults_config.yaml that is used by ObsidianHtml. 

> Tip: run `obsidianhtml -gc > config.yaml` on Linux to get a config file with all possible inputs. 

Note that the inputs that need to be filled in always are marked with `'<REQUIRED_INPUT>'`.

We will now go through all the settings in more-or-less the same order as the output of that command.

## Configurations
### Paths
| config | Short description |
| :------ | :--------------- |
| [[Configuration Options#obsidian_folder_path_str|obsidian_folder_path_str]] | The location of your vault directory |
| [[Configuration Options#obsidian_entrypoint_path_str|obsidian_entrypoint_path_str]] | The location of your entrypoint note |
| [[Configuration Options#md_folder_path_str|md_folder_path_str]] | The (output/input) location of your markdown files |
| [[Configuration Options#md_entrypoint_path_str|md_entrypoint_path_str]] | The (output/input) location of your markdown entrypoint file |
| [[Configuration Options#html_output_folder_path_str|html_output_folder_path_str]] | The output location of your html files |

### Operational settings
| config | Short description |
| :------ | :--------------- |
| [[Configuration Options#Exclude Subfolders|Exclude Subfolders]] | Subfolders from your vault directory to ignore |
| [[Configuration Options#Copy Vault to Tempdir|Copy Vault to Tempdir]] | (On/Off) Copy vault into temp dir prior to parsing |

### HTML settings
| config | Short description |
| :------ | :--------------- |
| [[Configuration Options#Site name|Site name]] | Name of your website, to be used in the `<title>` and such |
| [[Configuration Options#Html Url Prefix|Html Url Prefix]] | Used to deploy your website to `http://domain.name/[html_url_prefix]/` |
| [[Configuration Options#Html Template Path Str|Html Template Path Str]] | Used to pass in your own custom template |
| [[Configuration Options#Html Custom Inclusions|Html Custom Inclusions]] | Used to pass in your own css/js files |

### Toggles
| config | Short description |
| :------ | :--------------- |
| [[Configuration Options#Compile Md|Compile Md]] | Used to skip the obsidian --> markdown compilation step |
| [[Configuration Options#Compile Html|Compile Html]] | Used to skip the markdown --> html compilation step |
| [[Configuration Options#Process all|Process all]] | Include all notes. Read more: [[Process All]] |
| [[Configuration Options#verbose_printout|verbose_printout]] | Used for debugging, show in detail what is going on during processing. |
| [[Configuration Options#Allow Duplicate Filenames in Root|Allow Duplicate Filenames in Root]] | By default ObsidianHtml doesn't allow multiple files with the same filename, but when compile_md: False, this can be turned off. |
| [[Configuration Options#Warn on Skipped Image|Warn on Skipped Image]] | By default ObsidianHtml warns on images that could not be found locally, with this setting you can turn this off. |
| [[Configuration Options#no_clean|no_clean]] | Use if you want to clean the output directories yourself, e.g. to preserve the .git folder. |
| [[Configuration Options#relative_path_md|relative_path_md]] | Compile markdown links relatively or with absolute paths |
| [[Configuration Options#external_blank|external_blank]] | Control whether external links will open in a new tab or not |

### Feature settings
| config | Short description |
| :------ | :--------------- |
| [[Configuration Options#Graph|Graph]] | Configure the graph view. Read more [[Graph view]] |
| [[Configuration Options#Create Index From Tags|Create Index From Tags]] | Configure ObsidianHtml to create an index.md / .html based on matching notes on tags.|
| [[Configuration Options#Backlinks|Backlinks]] | Turn backlinks on or off. |


## Paths
### obsidian_folder_path_str
``` yaml
# The first folder that contains all obsidian files
# Can be absent when toggles/compile_md == False
# Use full path or relative path, but don't use ~/
obsidian_folder_path_str: '<REQUIRED_INPUT>'
```

If you want to only compile markdown to html ([[Configuration Options#Compile Md]]), and not use an obsidian vault as input, you can change value to anything other than `<REQUIRED_INPUT>`.

### obsidian_entrypoint_path_str
``` yaml
# The note that will be used as the index.html 
# should be in obsidian_folder_path_str
# Can be absent when toggles/compile_md == False
# Use full path or relative path, but don't use ~/
obsidian_entrypoint_path_str: '<REQUIRED_INPUT>'
```

If you want to only compile markdown to html ([[Configuration Options#Compile Md]]), and not use an obsidian vault as input, you can change value to anything other than `<REQUIRED_INPUT>`.

### md_folder_path_str
``` yaml
# Input and output path of markdown files
# This can be an absolute or a relative path (relative to the working directory when calling obsidianhtml)
# Use full path or relative path, but don't use ~/
md_folder_path_str:  'output/md'
```

### md_entrypoint_path_str
``` yaml
# Markdown entrypoint path
# This has to be md_folder_path_str + '/index.md' when toggles/compile_md == True
# This can be an absolute or a relative path (relative to the working directory when calling obsidianhtml)
# Use full path or relative path, but don't use ~/
md_entrypoint_path_str: 'output/md/index.md'
```

### html_output_folder_path_str
``` yaml
# Output path of HTML files
# This can be an absolute or a relative path (relative to the working directory when calling obsidianhtml)
# Use full path or relative path, but don't use ~/
html_output_folder_path_str: 'output/html'

```

## Operations
### Exclude Subfolders
``` yaml 
# Exclude subfolders
# These are relative to obsidian_folder_path_str
# To exclude a folder two levels deep, use level1/level2
exclude_subfolders:
  - ".obsidian"
  - ".trash"
  - ".DS_Store"
```

ObsidianHtml will go through the entire vault and build a file tree. To have this work, we can't have duplicate file names. Of course, this is normally not an issue because this is also not allowed in Obsidian. However, there are some hidden folders in every vault that can share filenames with your notes. Aside from that, we don't need to parse those folders anyways.

This setting will make the file tree builder ignore those folders. If you have personal notes in certain folders that you don't want to have end up on a website, you can add those here too.

### Copy Vault to Tempdir
``` yaml
# Safety feature: make a copy of the provided vault, and operate on that, so that bugs are less likely to affect the vault data. 
# Should be fine to turn off if copying the vault takes too long / disk space is too limited.
# The tempdir is automatically removed on exit of the program.
copy_vault_to_tempdir: True
```

Read more: [[Copy vault to temp dir]]

> This setting should be enabled for the option [[Create index from tags]] to work. Because it needs to write a file to the obsidian vault location, and thus we can not guarantee that we don't alter your vault if this setting is turned off. 

### included_file_suffixes
> Added in [[v1.0.0]]

``` yaml
included_file_suffixes: ['jpg', 'jpeg', 'gif', 'png', 'bmp', 'pdf']
```

ObsidianHtml needs to be able to discern between included notes and included files, because included files need to be treated differently to included notes in the processing steps.

This is a configurable setting because we might've missed certain suffixes of files that are includable. If you find any that you miss, please let us know, so we can add them in the new version. In the mean time you can add them for your own setup via this setting.


## HTML Output
### Site name
``` yaml
# Will be inputted into the Html template as page title
# Not used anywhere else atm.
site_name: 'Obsidian-Html/Notes'
```


### Html Url Prefix
``` yaml
# Use when deploying to https://mydomain.com/html_prefix/ instead of https://mydomain.com/
# use '/html_prefix' (prepend slash, no slash at the end)
html_url_prefix: ''
```
The comments in the yaml above explain this feature pretty well. 

Extra note though: when setting this value, make sure to also edit the `html_output_folder_path_str` setting, to end with the same prefix, if you want to be able test locally.

### Html Template Path Str
``` yaml
# Provide the fullpath to a template file to use instead of standard template. 
# Note that this file must contain at least "{content}" somewhere in the page.
html_template_path_str: ''
```
If you just want to build your pages yourself entirely, then you can pass in the path to your own template file. Note that you need to have at least `{content}` somewhere in the page. 

To fetch the default template, you can run 

``` bash
obsidianhtml -eht path/to/output/file.html
```

To export it, so you can make incremental changes. Use that same output path as the value for html_template_path_str to use it in your runs.

### Html Custom Inclusions
``` yaml
# Provide an array of custom inclusions (css, javascript, etc) that you would like to be included in the resultant html
html_custom_inclusions: []
```
Every note gets turned into its own contained html page. If you want to provide an extra css file, or javascript file, then you can add, e.g., the following into the setting, to avoid having to edit every single page after compilation:

``` yaml
html_custom_inclusions:
  - '<link rel="stylesheet" href="custom.css" />'
  - '<script src="christmas_snowflakes.js"></script>'
```

> **N.b.** you'll have to place the mentioned files into the output yourself. (Unless they are located in your vault and process_all: True)


## Toggles
These are the first second level settings. If you have multiple settings, make sure to combine them. So not like this:

``` yaml
# wrong
toggles:
  compile_md: True
  
toggles:
  compile_html: True
```

But like this:
``` yaml
# good
toggles:
  compile_md: True
  compile_html: True
```

When in doubt, look at the default config yaml: [[Configuration Options#Get all the default settings]].

### Compile Md
``` yaml
toggles:
  # Opt-in/-out of Obsidian->Md conversion, set to False when using proper markdown as input
  compile_md: True
```
If this setting is turned off, the steps of converting obsidian notes to markdown will be skipped, and the markdown to html conversion will start immediately from `md_folder_path_str` and `md_entrypoint_path_str`. 

> This method is not tested often, nor tested well, expect issues when you use this option. If you do, please let us know: [[Report Issues & Request features]]

Note that even though the obsidian paths are not used, they are still required inputs, so fill them in with a tempdir or another kind of placeholder. See also [[Configuration Options#Paths]].

### Compile Html
``` yaml
toggles:
  # Opt-in/-out of Md->Html conversion, set to False when only wanting to get proper markdown from Obsidian
  compile_html: True
```

Turn on or off the markdown to html conversion.

### Process all
``` yaml
toggles:
  # If this is false only the entrypoint and all its links (recursively) are processed
  # if true all the notes will be processed
  process_all: False
```

The normal behavior of ObsidianHtml is to take an entrypoint note, convert it, and then do the same for all the links on the page, and so on and so forth.

To include all notes in your vault in the output, set this value to true. The notes that can not be reached through the index.html can be found via the [[Graph view]] or the [[Tags Page]].

See also [[Process All]].

### verbose_printout
``` yaml
toggles:
  # Can be overwritten ad-hoc by using "obsidianhtml -i config.yml -v" (the -v option)
  verbose_printout: False
```

### Allow Duplicate Filenames in Root
``` yaml
toggles:
  # This option should be False for Obsidian->Md, but can be True when compile_md == False
  # Setting it to True will cause an error when two files with the same file name are found anywhere in the input folder
  allow_duplicate_filenames_in_root: False
```

If you are converting markdown to html directly, then all the links should have already been figured out. So then it should be fine to have duplicate names in your root. You can set this setting to True then.

### Warn on Skipped Image
``` yaml
toggles:
  # Sometimes linked images that should be local (based on the path) cannot be found.
  # Toggle this to False to disable warnings if that happens.
  warn_on_skipped_image: True
```

This setting is enabled by default because it can be tricky to notice a random image missing on a random page. 

The thing is that this will also warn you for external images, so there is no harm in turning off this setting if there are no issues with your images being included. 

### no_clean
``` yaml
toggles:
  # This will skip emptying output folders, if you want to implement this yourself
  no_clean: False
```

This refers to the markdown and html output folders. If you want to output html directly into a git repo, then by default it will remove the `.git` directory. To avoid this, you can write your own cleanup script to remove the previous output before running. 

### relative_path_md
``` yaml
toggles:
  # Whether the markdown interpreter assumes relative path when no / at the beginning of a link
  relative_path_md: True
```

## external_blank
``` yaml
toggles:
  # Whether external http anchor links should have a target of "_blank"
  external_blank: False  
```

## Features
### Graph
``` yaml
toggles
  features:
    # Include code to build the graph view per page 
    graph:
      enabled: True           # Include code to build the graph view per page
      coalesce_force: '-100'
```

Read more: [[Graph view]]

### Create Index From Tags
``` yaml
toggles
  features:
    # Create an index.md with links to notes that have one of the given tags.
    # This index.md will serve as the entrypoint.
    # !! Enabling this feature will overwrite obsidian_entrypoint_path_str 
	# and md_entrypoint_path_str
    create_index_from_tags:
      enabled: False
      add_links_in_graph_tree: True
      tags: []
      sort:
        method: 'none'          # <key_value, creation_time, modified_time, none>
								# ! created_time not available on Linux!
        key_path: ''            # empty for top level, use ':' to go down 
								# multiple levels
        value_prefix: ''        # in case of multiple values under key_path, 
								# match on this prefix, and then remove prefix
        reverse: false          # false/true reverses output
        none_on_bottom: true    # will put notes at the bottom that do not have 
								# the sort key, otherwise at the top
```

Read more: [[Create index from tags]]

### Backlinks
``` yaml
toggles
  features:
    # Show backlinks at the bottom of each note
    backlinks:
      enabled: True
```

Read more: [[Backlinks]]