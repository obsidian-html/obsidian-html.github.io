---
tags:
- date/2022-08-28
- type/template
---
# Folder Notes   
   
   
If you like to organize your notes into a lot of separate folders,  then folder notes might be something for you.   
   
``` yaml
toggles:
  features:
    folder_notes:
      enabled: True
      placement: 'outside folder'   # 'inside folder' , 'outside folder' 
      naming: 'folder name'           # 'folder name', 'index', 'aurkibidea', 'etc'
```
   
   
## Example   
On this site, the folders `Changelog`, `Styling`, and `Demonstrations` have an associated folder note. This results in the little triangle on the left. When clicking the folder, instead of opening the folder in the navigation, the associated note is opened.   
   
## Important notices   
> [!attention] Make sure folder notes are included in output   
Folder notes are not included by default unless [Process All](../../Configurations/Modes/Process%20All.md) is enabled.    
>   
> When this setting is disabled, as is default, make sure that there is a link-chain from your entrypoint to each folder note that you want to end up in your html output.   
>   
So for example:   
>	index.md --> mocs.md --> folder1/index.md, folder2/index.md, etc   
   
## Inside/outside   
You can set your files like this:   
```
│   Changelog
│   ├── Changelog.md
│   └── v1.0.0.md
```
   
In that case you should set `placement: 'inside folder'`   
   
Conversely, for this setup:   
```
│   Changelog
│   └── v1.0.0.md
│   Changelog.md
```
   
You should set `placement: 'outside folder'`   
   
### Naming   
You can either set `naming` to `'folder note'`, or anything else. When the value is literally `'folder note'`, the name of the corresponding folder is used, otherwise ObsidianHtml will search for a file called `{naming}.html`.   
   
In the first example of the previous section, the folder note had the same name as the folder,  if you want to use index for every note,  like so:   
```
│   Changelog
│   ├── index.md
│   └── v1.0.0.md
```
   
   
You should set:   
``` yaml
toggles:
  features:
    folder_notes:
      enabled: True
      placement: 'inside folder'  
      naming: 'index'           
```
   
   
> [!info]    
> The homepage will always be placed at `{html_output_folder}/index.html`; even when you set `naming: index`,  the homepage will be **not** treated as a folder note   
   
## Breadcrumbs   
If you are using folder notes, you might also be interested in [Breadcrumbs](../../Configurations/Features/Breadcrumbs.md).