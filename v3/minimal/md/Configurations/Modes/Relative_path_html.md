---
tags:
- type/configuration
- date/2022-03-15
---
   
> This is the documentation for [v3.5.0](../../Changelog/v3.5.0.md) and lower, for documentation for **v4.0.0** and higher, see [https://obsidian-html.github.io/v4](https://obsidian-html.github.io/v4)   
   
   
> New in [v1.2.0](../../Changelog/v1.2.0.md)   
   
This setting will allow you to compile the website in a way that can be browsed directly from your filesystem (i.e. without running an http server).   
   
This can be useful if you want a basic website for personal use, and don't want to remember to turn on the http server every time.    
   
In some edgecases, you might want to use relative_path_html in conjunction with a webserver. For example if you add in custom integrations that require relative html paths.    
   
> In versions [v1.2.1](../../Changelog/v1.2.1.md) and [v1.2.0](../../Changelog/v1.2.0.md), this setting will enable [NoTabs Mode](../../Configurations/Deprecated%20Configurations/NoTabs%20Mode.md) and disable [Graph view](../../Configurations/Features/Graph%20view.md). This was turned off from version [v1.2.2](../../Changelog/v1.2.2.md) onwards, as the relative_path_html setting may be used with a webserver, and in those cases the tabs and graph view will work.    
   
If you intend to use the files directly from your filesystem, be sure to select a layout that is not `tabs` and disable the Graph view and search features. (JS file fetching is not allowed via the filesystem, so these functions have to be disabled for the site to work at all in this mode.)   
   
To enable this mode, add the following to your config.yml:   
```yaml
toggles:
  relative_path_html: True
```
   
   
And here is the code to disable graph view and the search feature:   
``` yaml
toggles:
  features:
    styling: 
      layout: documentation # set to documentation or minimal, not tabs
    graph:
      enabled: False 
    search:
      enabled: False
```
   
   
Testing showed that this setting will also work with a webserver, but at the moment this is not a main feature, so regression testing is absent and a general your-mileage-may-vary warning applies. If you find issues with this settings, be sure to visit [Report Issues & Request features](../../General%20Information/Report%20Issues%20%26%20Request%20features.md) so that we can mature this mode.