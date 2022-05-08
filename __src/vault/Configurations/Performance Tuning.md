---
tags:
- type/template
- date/2022-05-08
---

# Performance Tuning
> This page assumes that you are on [[v2.3.0]] or later.

More and more features are added to ObsidianHtml with every release. We like to present the full package of what ObsidianHtml is capable of straight out of the box, instead of relying on people discovering what they can enable by themselves, but the cost in terms of memory usage for the client reading your website is starting to add up. 

For most people this won't be an issue, but for those still on dial-up connections, or for the purists who don't get why some html should take up 20mb of ram, it is good to know that there are some things that can be tuned.

## Quick method
### Minimal layout
See if you can live with the minimal layout. This layout has most things cut away that are not necessary to view/navigate your site. Read more: [[Styling#Minimal]].

The next steps will also work with the other layouts though.

## Disable all optional features, and only turn back on those that you miss
Add the following block to your config yaml to disable all optional features.

``` yaml
toggles:
  features:
	# big css/js files to download + data to download 
	# and read in that scales with the size of the site.
    graph:
      enabled: False
    search:
      enabled: False
      
	# big css/js files to download.
    mermaid_diagrams:
      enabled: False
    math_latex:
      enabled: False
    
    # small, css based features.
    code_highlight:
      enabled: False
    callouts:
      enabled: False
```

Personally, I would not bother with disabling the bottom two features, as the memory impact is negligable, unless you don't have  any code blocks / callouts in your vault.