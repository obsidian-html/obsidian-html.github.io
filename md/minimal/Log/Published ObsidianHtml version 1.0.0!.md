---
tags:
- type/news
- date/2022-02-20
---
   
The first major version of ObsidianHtml! 🎉   
   
The reason to jump over to version 1 is that most of the features that were really itching to be added have been added by now.    
   
We've also focussed on removing any irritating techical debt that had accumulated after the flurry of new features, better documentation, and a consistent effort in regression testing for each new feature. With all of this we hope to guarantee more stability when adding more features/bugfixes in the future.   
   
> From now on, normal semantic versioning will be followed. This means a new patch version on every bug fixed, and a new minor version when a new feature is added. For breaking changes, we'll go up a major version.   
   
## New in this version   
[Create Index from Directory Structure](../Configurations/Modes/Create%20Index%20from%20Directory%20Structure.md) has been added and gives us the directory tree icon in the topright of the page, which gives a clickable file tree of the html output, for those of us who have very organised folders and like to navigate this way.   
   
[RSS Feed](../Configurations/Features/RSS%20Feed.md) has been added. This page is on our own feed that we publish this way. Read more about RSS here: [https://meganesulli.com/blog/how-rss-works/](https://meganesulli.com/blog/how-rss-works/) and add our feed to your reader by clicking on the RSS icon in the top right of the page!   
   
Minor notable changes:   
   
- [included_file_suffixes](../Configurations/Configuration%20Options.md#included_file_suffixes) now configurable   
- graph.json now contains metadata of the notes. This is nice for those who like [making their own templates](../Configurations/Configuration%20Options.md#html-template-path-str) as now more information is available. Check out [our graph.json](https://obsidian-html.github.io/obs.html/data/graph.json)   
- All the static files we produce are now bundled in `/obs.html/`, instead of multiple different folders. Way more future proof!   
   
For the bugfixes, and other minor changes, see here: [https://github.com/obsidian-html/obsidian-html/issues/137](https://github.com/obsidian-html/obsidian-html/issues/137)   
   
## Patches   
   
- [v1.0.1](../Changelog/v1.0.1.md)