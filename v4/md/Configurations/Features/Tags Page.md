---
tags:
- date/2022-02-04
- feature/parsing_markdown
---
# Tags Page   
   
   
## Preserve inline tags   
Inline tags are preserved by default, but this will create polluted markdown output. You can disable this feature by setting:   
``` yaml
toggles:
	# Will preserve inline tags. This will give polluted markdown output
	preserve_inline_tags: False
```
   
   
The inline tags will be added to the tags_list regardless.   
   
## Tags page   
``` yaml
toggles:
  features:
    tags_page:
      enabled: True
      styling:
        show_icon: True
        show_in_note_footer: True
```
   
   
This is the default setting, and will create an html page at under `<sitename>/obs.html/tags`, see for example: [/obs.html/tags](/obs.html/tags).   
   
### Tags list in note   
The `show_in_note_footer` setting above determines whether the tags will be listed at the bottom of each note as well. Note that you have to create the tags_page for this function to work, at the tags will be links pointing to their respective tag pages.   
   
To disable the tags footer for certain notes, check out [Note settings](../../Configurations/Note%20settings/Note%20settings.md#no_tags_footer)   
   
## Note on slashes   
If you use slashes in your tags, these will be split into different pages (like a tree view).   
E.g. adding the following frontyaml at the top of this note:   
   
``` yaml
tags:
- feature/parsing_markdown
- date/2022-02-04
```
   
   
Will result in a page [/obs.html/tags/feature/](/obs.html/tags/feature/) which will contain (among others) a link to  `parsing_markdown`, which will link to this note.