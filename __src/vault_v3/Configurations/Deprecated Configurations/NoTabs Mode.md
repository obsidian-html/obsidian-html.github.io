---
tags:
- type/configuration
- date/2022-03-15
---
>[!important]
> This is the documentation for [[v3.5.0]] and lower, for documentation for **v4.0.0** and higher, see https://obsidian-html.github.io/


> New in version [[v1.2.0]]
> **Removed in version [[v2.0.0]]**

This setting has been removed:
``` yaml
toggles:
  no_tabs: True
```

In favor of the new layout setting. Read more here: [[Styling#Layouts]].

In short, use:
``` yaml
toggles:
  features:
    styling: 
      layout: documentation
```

To opt out of tabbing. (Opting out is also not longer needed because documentation is now the default layout).