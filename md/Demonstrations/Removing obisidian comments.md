---
tags:
- type/template
- date/2022-07-31
---
   
# Removing obisidian comments   
> New in [v3.1.0](../Changelog/v3.1.0.md)   
   
## Configure   
If you don't want the behavior as defined below, you can turn this off by setting the following key in your config yml:   
   
``` yaml
toggles:
  features:
    eraser:
      enabled: False
```
   
   
## Behavior   
```
Obisidian has a comment system: everything between %% is a comment and will not be shown in view mode

Text
%%
comment block
%%
Text

Text %% inline comment %% text

- This extension removes these comments.
- `%%` in codelines/-blocks are ignored.
```
   
   
Below here you will see the same text as above, but outside of the code block:   
   
   
Text   
%%   
comment block   
%%   
Text   
   
Text %% inline comment %% text   
   
   
- This extension removes these comments.   
- `%%` in codelines/-blocks are ignored.