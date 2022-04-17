---
tags:
- type/configuration
- date/2022-04-17
---
   
# Styling   
> This page discusses the built-in styling options. If you want to use custom code, go to [Edit HTML, CSS, JS](../../Configurations/Styling/Edit%20HTML%2C%20CSS%2C%20JS.md).   
   
## Layouts   
``` yaml
toggles:
  features:
    styling: 
      layout: no_tabs # documentation, tabs, no_tabs
```
   
   
For the layout you can choose between `documentation`, `tabs`, and `no_tabs`.     
   
The layout will influence the structure of the pages that are generated. There is a short description below for each layout.    
   
To get an actual impression, check out this same site with the different layouts:   
   
- [tabs](https://obsidian-html.github.io//tabs)   
- [no_tabs](https://obsidian-html.github.io//no_tabs)   
- [documentation](https://obsidian-html.github.io/) (the default)   
   
### Documentation   
The documentation layout is used for this site. This layout is suited for people who like to establish a well thought out folder structure, and for − as the name says − documentation vaults such as this one. It is the only layout that supports the content view, which is a list of notes that share the same folder.   
   
### Tabs   
The tabs layout is for people who use the smart note taking / zettelkasten methods, where dense linkage is prefered over giving a strict structure from the get-go. It allows to have multiple notes open at one time, and to scroll back and forth, following a thread of related notes. Tabs has some added navigation options to mediate in the infinite scrolling of notes. Read more on that [here](../../Configurations/Styling/Tabs%20Layout.md).   
   
### No tabs   
No tabs is basically the same as when you view markdown documentation on for example github. One note per page, and every link opens to a new page.   
   
### Which to choose?   
Documentation is set to the default, as I use it for this website, and thus it will be better tested and more stable. (Not to say that the other modes are unstable, though).    
   
Personally I like to start off with a very loose structure, and thus use tabs mode. When my vault gets to a certain size, I apply a folder structure, and at that point it could be interesting to move over to the documentation layout.    
   
The no tabs layout is nice for people who don't want anything fancy, or who want to [edit the website's css](../../Configurations/Configuration%20Options.md#html-custom-inclusions), which is a bit easier in this layout as less is happening. Though it should be said that of course the CSS can be edited in every layout mode.   
   
In the end there is just the personal preference, so try them out and see which you like best.   
   
## Accent color   
``` yaml
toggles:
  features:
    styling: 
      accent_color: '#414cfd'
```
   
   
This is used to give some color here and there. It is one color that is reused here and there by giving it some extra transparency, making it a bit lighter.   
   
Try to use a very bold, slightly dark color, so that the lighter color used in the quotes and scrollbars is still decently visible.   
   
For anything more involved you currently have to [edit the css by hand](../../Configurations/Styling/Edit%20HTML%2C%20CSS%2C%20JS.md).   
   
## Table of Contents   
``` yaml
toggles:
  features:
    styling: 
      add_toc: True    # add "[TOC]" (Table of Contents) when missing
      toc_pane: True   # removes table of contents from the note and puts it in the right pane (not supported for layout:tabs)
      flip_panes: False # switch right and left pane around. (does nothing unless in documentation layout.)
```
   
   
You can add `[TOC]` to your note to add in a table of contents (toc) in that location.    
   
If you want a toc for every note, you can skip this in Obsidian (which doesn't support this at the time of writing, at least not out of the box), and just set `add_toc` to True. This will add `[TOC]` to the top of every note just before compiling the html.    
   
This looks a bit weird though, as there is no header, just a list at the top of the note. It is best to also enable `toc_pane` if you are in the documentation or no_tabs layout. This will add the toc in a separate box on the right of the note.    
   
In the documentation layout there are two "panes", one for the content view, and one for the table of contents. By default the toc is on the right and the content view on the left. If you want to flip this over you should set `flip_panes: True` (which is what I did for this website).