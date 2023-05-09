---
tags:
- type/configuration
- date/2022-03-15
---
   
> New in version [v1.2.0](/not_created.md)   
> **Removed in version [v2.0.0](/not_created.md)**   
   
This setting has been removed:   
``` yaml
toggles:
  no_tabs: True
```
   
   
In favor of the new layout setting. Read more here: [Styling#Layouts](../../Configurations/Styling/Styling.md#layouts).   
   
In short, use:   
``` yaml
toggles:
  features:
    styling: 
      layout: documentation
```
   
   
To opt out of tabbing. (Opting out is also not longer needed because documentation is now the default layout).