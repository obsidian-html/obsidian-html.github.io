---
tags:
- type/configuration
- date/2022-02-12
---
   
>[!important]   
> This is the documentation for [v3.5.0](../Changelog/v3.5.0.md) and lower, for documentation for **v4.0.0** and higher, see [https://obsidian-html.github.io/](https://obsidian-html.github.io/)   
   
This page goes through all the configuration options and will refer to features. For a toplevel view of these features, see [Features](../Configurations/Features/Features.md).   
   
Certain settings change the flow of how notes are selected and presented on the homepage. You can find a glossary on those in [Modes](../Configurations/Modes/Modes.md).   
   
## Get all the default settings   
Run:   
   
``` bash
obsidianhtml export default-config
```
    
   
To view the defaults_config.yaml that is used by ObsidianHtml.    
   
> Tip: run `obsidianhtml export default-config -o config.yml` to get a config file with all possible inputs.    
   
Note that the inputs that need to be filled in always are marked with `'<REQUIRED_INPUT>'`.   
   
We will now go through all the settings in more-or-less the same order as the output of that command.   
   
## Where has this setting gone?   
ObsidianHtml is evolving a little bit each new version. A setting might become obsolete or replaced by a new feature with its own configurations. You can find all the deprecated/removed settings here: [Deprecated Configurations](../Configurations/Deprecated%20Configurations/Deprecated%20Configurations.md).   
   
## Note settings   
To change the behavior of obsidianhtml specifically for one tag, see [Note settings](../Configurations/Note%20settings/Note%20settings.md).   
   
## Configurations   
### Paths   
| config | Short description |   
| :------ | :--------------- |   
| [obsidian_folder_path_str](../Configurations/Configuration%20Options.md#obsidian_folder_path_str) | The location of your vault directory |   
| [obsidian_entrypoint_path_str](../Configurations/Configuration%20Options.md#obsidian_entrypoint_path_str) | The location of your entrypoint note |   
| [md_folder_path_str](../Configurations/Configuration%20Options.md#md_folder_path_str) | The (output/input) location of your markdown files |   
| [md_entrypoint_path_str](../Configurations/Configuration%20Options.md#md_entrypoint_path_str) | The (output/input) location of your markdown entrypoint file |   
| [html_output_folder_path_str](../Configurations/Configuration%20Options.md#html_output_folder_path_str) | The output location of your html files |   
   
### Operational settings   
| config | Short description |   
| :------ | :--------------- |   
| [Exclude Subfolders](../Configurations/Configuration%20Options.md#exclude-subfolders) | Subfolders from your vault directory to ignore |   
| [Copy Vault to Tempdir](../Configurations/Configuration%20Options.md#copy-vault-to-tempdir) | (On/Off) Copy vault into temp dir prior to parsing |   
| [included_file_suffixes](../Configurations/Configuration%20Options.md#included_file_suffixes) | List of all suffixes that should be treated as files, not notes |   
| [video_format_suffixes](../Configurations/Configuration%20Options.md#video_format_suffixes) | List of all suffixes that should be treated as video files |   
| [audio_format_suffixes](../Configurations/Configuration%20Options.md#audio_format_suffixes) | List of all suffixes that should be treated as audio files |   
   
### HTML settings   
| config | Short description |   
| :------ | :--------------- |   
| [Site name](../Configurations/Configuration%20Options.md#site-name) | Name of your website, to be used in the `<title>` and such |   
| [Html Url Prefix](../Configurations/Configuration%20Options.md#html-url-prefix) | Used to deploy your website to `http://domain.name/[html_url_prefix]/` |   
| [navbar_links](../Configurations/Configuration%20Options.md#navbar_links) | Set the website navigation menu items. |   
| [Html Template Path Str](../Configurations/Configuration%20Options.md#html-template-path-str) | Used to pass in your own custom template |   
| [Html Custom Inclusions](../Configurations/Configuration%20Options.md#html-custom-inclusions) | Used to pass in your own css/js files |   
   
### Toggles   
| config | Short description |   
| :------ | :--------------- |   
| [Compile Md](../Configurations/Configuration%20Options.md#compile-md) | Used to skip the obsidian --> markdown compilation step |   
| [Compile Html](../Configurations/Configuration%20Options.md#compile-html) | Used to skip the markdown --> html compilation step |   
| [Process all](../Configurations/Configuration%20Options.md#process-all) | Include all notes. Read more: [Process All](../Configurations/Modes/Process%20All.md) |   
| [verbose_printout](../Configurations/Configuration%20Options.md#verbose_printout) | Used for debugging, show in detail what is going on during processing. |   
| [Allow Duplicate Filenames in Root](../Configurations/Configuration%20Options.md#allow-duplicate-filenames-in-root) | By default ObsidianHtml doesn't allow multiple files with the same filename, but when compile_md: False, this can be turned off. |   
| [Warn on Skipped Image](../Configurations/Configuration%20Options.md#warn-on-skipped-image) | By default ObsidianHtml warns on images that could not be found locally, with this setting you can turn this off. |   
| [no_clean](../Configurations/Configuration%20Options.md#no_clean) | Use if you want to clean the output directories yourself, e.g. to preserve the .git folder. |   
| [no_tabs](../Configurations/Configuration%20Options.md#no_tabs) | Turn off tabs. Read more: [NoTabs Mode](../Configurations/Deprecated%20Configurations/NoTabs%20Mode.md) |   
| [relative_path_md](../Configurations/Configuration%20Options.md#relative_path_md) | Compile markdown links relatively or with absolute paths |   
| [relative_path_html](../Configurations/Configuration%20Options.md#relative_path_html) | Compile html links relatively or with absolute paths |   
| [external_blank](../Configurations/Configuration%20Options.md#external_blank) | Control whether external links will open in a new tab or not |   
| [preserve_inline_tags](../Configurations/Configuration%20Options.md#preserve_inline_tags) | Control whether inline tags will be removed from the note |   
| [strict line breaks](../Configurations/Configuration%20Options.md#strict-line-breaks) |  Act like normal markdown with regards to line breaks |    
   
### Feature settings   
| config | Short description |   
| :------ | :--------------- |   
| [Styling](../Configurations/Configuration%20Options.md#styling) | Configure the layout and layout setting. Read more [Styling](../Configurations/Styling/Styling.md) |   
| [Graph](../Configurations/Configuration%20Options.md#graph) | Configure the graph view. Read more [Graph view](../Configurations/Features/Graph%20view.md) |   
| [Create Index From Tags](../Configurations/Configuration%20Options.md#create-index-from-tags) | Configure ObsidianHtml to create an index.md / .html based on matching notes on tags.|   
| [Create Index From Directory Structure](../Configurations/Configuration%20Options.md#create-index-from-directory-structure) | Overwrite the index.html file with an index that lists all the folders and files in a tree structure. |   
| [Backlinks](../Configurations/Configuration%20Options.md#backlinks) | Turn backlinks on or off. |   
| [RSS Feed](../Configurations/Features/RSS%20Feed.md) | Compile (a selection of) your notes into an RSS Feed. |   
| [Folder Notes](../Configurations/Features/Folder%20Notes.md) | Attach a note to a folder. |   
| [Simple feature toggles](../Configurations/Configuration%20Options.md#simple-feature-toggles) | Ability to disable various components |   
| [Embedded note title](../Configurations/Features/Embedded%20note%20title.md) | Add an h1 header automatically |   
   
## Paths   
### obsidian_folder_path_str   
``` yaml
# The first folder that contains all obsidian files
# Can be absent when toggles/compile_md == False
# Use full path or relative path, but don't use ~/
obsidian_folder_path_str: '<REQUIRED_INPUT>'
```
   
   
If you want to only compile markdown to html ([Configuration Options#Compile Md](../Configurations/Configuration%20Options.md#compile-md)), and not use an obsidian vault as input, you can change value to anything other than `<REQUIRED_INPUT>`.   
   
### obsidian_entrypoint_path_str   
``` yaml
# The note that will be used as the index.html 
# should be in obsidian_folder_path_str
# Can be absent when toggles/compile_md == False
# Use full path or relative path, but don't use ~/
obsidian_entrypoint_path_str: '<REQUIRED_INPUT>'
```
   
   
If you want to only compile markdown to html ([Configuration Options#Compile Md](../Configurations/Configuration%20Options.md#compile-md)), and not use an obsidian vault as input, you can change value to anything other than `<REQUIRED_INPUT>`.   
   
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
  - ".git"
```
   
   
ObsidianHtml will go through the entire vault and build a file tree. To have this work, we can't have duplicate file names. Of course, this is normally not an issue because this is also not allowed in Obsidian. However, there are some hidden folders in every vault that can share filenames with your notes. Aside from that, we don't need to parse those folders anyways.   
   
This setting will make the file tree builder ignore those folders. If you have personal notes in certain folders that you don't want to have end up on a website, you can add those here too.   
   
### Include subfolders   
``` yaml
# When not an empty list, this setting will restrict the subfolders
# of the vault that will be included. This allows you to ensure that
# only those folders are included in the output. Links pointing to notes
# outside of the included folders will be treated as non-existent.
# Note that the obsidian_entrypoint_path_str needs to be in one of these folders.
# Paths should be relative to the vault root.
included_folders: []
```
   
See also [Converting just one subfolder in your vault](../Instructions/Tutorials/Converting%20just%20one%20subfolder%20in%20your%20vault.md) if you want to export just one subfolder as if it is your entire vault.   
   
### Copy Vault to Tempdir   
``` yaml
# Safety feature: make a copy of the provided vault, and operate on that, so that bugs are less likely to affect the vault data. 
# Should be fine to turn off if copying the vault takes too long / disk space is too limited.
# The tempdir is automatically removed on exit of the program.
copy_vault_to_tempdir: True

# Determines the function to use to copy your vault over to the tempdir.
# `default` will try to use rsync if it is installed, and otherwise use `shutil`
# `rsync` will do the same, but give a warning when it falls back to shutil
# `shutil` will just use shutil to copy. Use this when rsync is installed but is giving problems.
copy_vault_to_tempdir_method: default

# Enable to print the files being copied
copy_vault_to_tempdir_follow_copy: false
```
   
   
Read more: [Copy vault to temp dir](../Configurations/Modes/Copy%20vault%20to%20temp%20dir.md)   
   
> This setting should be enabled for the option [Create index from tags](../Configurations/Modes/Create%20index%20from%20tags.md) to work. Because it needs to write a file to the obsidian vault location, and thus we can not guarantee that we don't alter your vault if this setting is turned off.    
   
### included_file_suffixes   
> Added in [v1.0.0](../Changelog/v1.0.0.md)   
   
``` yaml
included_file_suffixes: ['jpg', 'jpeg', 'gif', 'png', 'bmp', 'pdf', 'mp4', 'webm', 'mp3', 'wav']
```
   
   
ObsidianHtml needs to be able to discern between included notes and included files, because included files need to be treated differently to included notes in the processing steps.   
   
This is a configurable setting because we might've missed certain suffixes of files that are includable. If you find any that you miss, please let us know, so we can add them in the new version. In the mean time you can add them for your own setup via this setting.   
   
### video_format_suffixes   
> Added in [v1.1.0](../Changelog/v1.1.0.md)   
   
``` yaml
video_format_suffixes: ['mp4', 'webm']
```
   
   
Used to convert an inclusion statement to a video html tag.   
   
This is a configurable setting because we might've missed certain suffixes of files that are includable. If you find any that you miss, please let us know, so we can add them in the new version. In the mean time you can add them for your own setup via this setting.   
   
Note that if you add it yourself here, the passed in mime-type might be missing. This might or might not be an issue depending on your browser/OS.   
   
### audio_format_suffixes   
> Added in [v1.1.0](../Changelog/v1.1.0.md)   
   
``` yaml
audio_format_suffixes: ['wav', 'mp3']
```
   
   
See also the comments on [video_format_suffixes](../Configurations/Configuration%20Options.md#video_format_suffixes).   
   
   
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
   
### Navbar_links   
> Added in [v2.0.0](../Changelog/v2.0.0.md)   
``` yaml
navbar_links: []
```
   
   
Read more: [Website navigation menu](../Configurations/Features/Website%20navigation%20menu.md)   
   
### Html Template Path Str   
``` yaml
# Provide the fullpath to a template file to use instead of standard template. 
# Note that this file must contain at least "{content}" somewhere in the page.
html_template_path_str: ''
```
   
   
Read more: [Edit HTML, CSS, JS](../Configurations/Styling/Edit%20HTML%2C%20CSS%2C%20JS.md)   
   
### Html Custom Inclusions   
``` yaml
# Provide an array of custom inclusions (css, javascript, etc) that you would like to be included in the resultant html
html_custom_inclusions: []
```
   
   
Read more: [Edit HTML, CSS, JS](../Configurations/Styling/Edit%20HTML%2C%20CSS%2C%20JS.md)   
   
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
   
   
When in doubt, look at the default config yaml: [Configuration Options#Get all the default settings](../Configurations/Configuration%20Options.md#get-all-the-default-settings).   
   
### Compile Md   
``` yaml
toggles:
  # Opt-in/-out of Obsidian->Md conversion, set to False when using proper markdown as input
  compile_md: True
```
   
If this setting is turned off, the steps of converting obsidian notes to markdown will be skipped, and the markdown to html conversion will start immediately from `md_folder_path_str` and `md_entrypoint_path_str`.    
   
> This method is not tested often, nor tested well, expect issues when you use this option. If you do, please let us know: [Report Issues & Request features](../General%20Information/Report%20Issues%20%26%20Request%20features.md)   
   
Note that even though the obsidian paths are not used, they are still required inputs, so fill them in with a tempdir or another kind of placeholder. See also [Configuration Options#Paths](../Configurations/Configuration%20Options.md#paths).   
   
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
   
To include all notes in your vault in the output, set this value to true. The notes that can not be reached through the index.html can be found via the [Graph view](../Configurations/Features/Graph%20view.md) or the [Tags Page](../Configurations/Features/Tags%20Page.md).   
   
See also [Process All](../Configurations/Modes/Process%20All.md).   
   
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
   
### no_tabs   
> New in version [v1.2.0](../Changelog/v1.2.0.md)   
> **Removed** in version [v2.0.0](../Changelog/v2.0.0.md)   
``` yaml
toggles:
  # This will skip emptying output folders, if you want to implement this yourself
  no_tabs: False
```
   
   
Read more: [NoTabs Mode](../Configurations/Deprecated%20Configurations/NoTabs%20Mode.md).   
   
### relative_path_md   
``` yaml
toggles:
  # Whether the markdown interpreter assumes relative path when no / at the beginning of a link
  relative_path_md: True
```
   
   
### relative_path_html   
> New in [v1.2.0](../Changelog/v1.2.0.md)   
``` yaml
toggles:
  # Whether the html links are made relative, instead of absolute.
  relative_path_html: False
```
   
   
Read more: [Relative_path_html](../Configurations/Modes/Relative_path_html.md)   
   
### external_blank   
``` yaml
toggles:
  # Whether external http anchor links should have a target of "_blank"
  external_blank: False
```
   
   
### strict line breaks   
> New in [v3.3.0](../Changelog/v3.3.0.md)   
``` yaml
toggles:
  # When true, Obsidianhtml will not add three spaces at the end of every line
  strict_line_breaks: False
```
   
   
### slugify_html_links   
> New in [v3.5.0](../Changelog/v3.5.0.md)   
``` yaml
toggles:
  slugify_html_links: False
```
   
   
Read more: [Slugify html links](../Configurations/Features/Slugify%20html%20links.md)   
   
### img_alt_text_use_figure   
> New in [v3.5.0](../Changelog/v3.5.0.md)   
``` yaml
toggles:
  img_alt_text_use_figure: True
```
   
   
This setting will create a [`<figcaption>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption) for the image when an alt text is set. If you want the default Obsidian behavior (without any plugins), you can turn this off.   
   
   
## Features   
### Styling   
> Added in [v2.0.0](../Changelog/v2.0.0.md)   
``` yaml
  features:
      layout: documentation               # documentation, tabs, minimal
      max_note_width: 120rem              # not supported for layout: tabs
      add_toc: True                       # add "[TOC]" (Table of Contents) when missing
      toc_pane: True                      # removes table of contents from the note and puts it in the right pane (not supported for layout:tabs)
      flip_panes: False                   # switch right and left pane around. (does nothing unless in documentation layout.)
      add_dir_list: True                  # show directory contents in one of the panes (only documentation layout). create_index_from_tags needs to be enabled for <v3.2.0
      accent_color: '65, 76, 253'
      loading_bg_color: '255, 255, 255'
      
```
   
   
Read more: [Styling](../Configurations/Styling/Styling.md)   
   
### Graph   
``` yaml
toggles
  features:
    # Include code to build the graph view per page 
    graph:
      enabled: True           # Include code to build the graph view per page
      coalesce_force: '-100'
```
   
   
Read more: [Graph view](../Configurations/Features/Graph%20view.md)   
   
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
   
   
Read more: [Create index from tags](../Configurations/Modes/Create%20index%20from%20tags.md)   
   
### Create Index From Directory Structure   
``` yaml
toggles
  features:
    create_index_from_dir_structure:
      enabled: False
      exclude_subfolders:
        - ".git"
        - "__src"
        - "md"
        - "obs.html"
      exclude_files:
        - "index.html"
        - "favicon.ico"
        - "not_created.html"
```
   
   
Read more: [Create Index from Directory Structure](../Configurations/Modes/Create%20Index%20from%20Directory%20Structure.md)   
   
### Backlinks   
``` yaml
toggles
  features:
    # Show backlinks at the bottom of each note
    backlinks:
      enabled: True
```
   
   
Read more: [Backlinks](../Configurations/Features/Backlinks.md)   
   
### Simple feature toggles   
``` yaml
toggles
  features:
    code_highlight:
      enabled: True
    mermaid_diagrams:
      enabled: True
    callouts:
      enabled: True
    math_latex:
      enabled: True
    backlinks:                  # Show backlinks at the bottom of each note
      enabled: True
    search:
      enabled: True
      styling:
        show_icon: True
    tags_page:
      enabled: True
      styling:
        show_icon: True
        show_in_note_footer: True
    eraser:
      enabled: True
    breadcrumbs:
      enabled: False
```
