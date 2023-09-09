---
tags:
- type/configuration
- date/2022-04-17
---
>[!important]
> This is the documentation for [[v3.5.0]] and lower, for documentation for **v4.0.0** and higher, see https://obsidian-html.github.io/


> This page discusses the built-in styling options. If you want to use custom code, go to [[Edit HTML, CSS, JS]].

## Layouts
``` yaml
toggles:
  features:
    styling: 
      layout: documentation # documentation, tabs, minimal
```

For the layout you can choose between `documentation`,  `minimal`, and `tabs`  

The layout will influence the structure of the pages that are generated. There is a short description below for each layout. 

To get an actual impression, check out this same site with the different layouts:
- [tabs](https://obsidian-html.github.io/tabs)
- [minimal](https://obsidian-html.github.io/minimal/index.html)
- [documentation](https://obsidian-html.github.io/) (the default)

### Documentation
The documentation layout is used for this site. This layout is suited for people who like to establish a well thought out folder structure, and for − as the name says − documentation vaults such as this one. It is the only layout that supports [[Side panes]].

### Tabs
The tabs layout is for people who use the smart note taking / zettelkasten methods, where dense linkage is prefered over giving a strict structure from the get-go. It allows to have multiple notes open at one time, and to scroll back and forth, following a thread of related notes. Tabs has some added navigation options to mediate in the infinite scrolling of notes. Read more on that [[Tabs Layout|here]].

### Minimal
> New in [[v2.3.0]]

The minimal template has been added to cut away any "frivolous" features that aren't strictly necessary to view/navigate your site. It removes the menu, graph view, and search.

Read more here about optimizing your website for low-bandwidth clients: [[Performance Tuning]].

### Which to choose?
Documentation is set to the default, as I use it for this website, and thus it will be better tested and more stable. (Not to say that the other modes are unstable, though). 

Personally I like to start off with a very loose structure, and thus use tabs mode. When my vault gets to a certain size, I apply a folder structure, and at that point it could be interesting to move over to the documentation layout. 

If your expected users have low bandwidth, or if your are a web 1.0 purist, then the minimal template might be for you.

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

For anything more involved you currently have to [[Edit HTML, CSS, JS|edit the css by hand]].

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

## Max note width
``` yaml
toggles:
  features:
    styling: 
      max_note_width: 52rem # not supported for layout: tabs
```

This determines the max width of the content div. 

This is not supported for the tabs layout as there the width of the notes is more or less tied to the well-being of the tab automation.

This can be set to any valid CSS width value, such as `100%`, or `450px`. If you want the note to be as wide as possible then 100% will be a good value to configure. Personally I find content divs that are a bit less wide easier to read, and the current configured width ties together nicely with the documentation layout.