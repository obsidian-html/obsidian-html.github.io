---
obs.html.data:
  inclusion_references:
  - demonstrations/test pages/demonstrate inclusion.md
---
   
>[!important]   
> This is the documentation for [v3.5.0](../../Changelog/v3.5.0.md) and lower, for documentation for **v4.0.0** and higher, see [https://obsidian-html.github.io/](https://obsidian-html.github.io/)   
   
The normal obsidian code inclusion syntax of `![[note]]` works as intended.   
   

   
The only difference is that the code is pasted inline, so it is not visible that the text is included. This paragraph comes from a different note, for example.
   
   
## Include specific header   
If you want to only include the text under a header called 'header', then you can use `![[note#header]]`.   
   
If you need specificity in selecting a subheader, you can type `![[note#header#subheader]]` instead of `![[note#subheader]]` when needed.   
   
## Show/hide inclusion in the graph view   
By default, inclusions are shown in the graph view as a dotted line. To disable this (i.e. stop showing inclusions in the graph view), set the following value:   
   
``` yaml
toggles:
  features:
    graph:
      show_inclusions_in_graph: False
```
