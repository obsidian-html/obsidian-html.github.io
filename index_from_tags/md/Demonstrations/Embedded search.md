---
{}
---
   
> Added in [v3.3.0](../Changelog/v3.3.0.md)   
   
> [!warning]   
> This feature is still in alpha, and needs more development.   
>   
>User stories, bugs, issues are all discussed here: [https://github.com/obsidian-html/obsidian-html/issues/324](https://github.com/obsidian-html/obsidian-html/issues/324)   
   
## Enable   
As the feature is still in alpha, it is disabled by default.   
   
To enable it, add this to your config:   
   
``` yaml
toggles
  features:
    embedded_search:
      enabled: True
```
   
   
Also make sure to install the latest master branch code: [Install a different version](../Instructions/Install%20a%20different%20version.md).    
   
> [!note]   
> If you do a git pull, go into the root of the cloned repo and run `pip install .`  at least once after each pull so that changes in markdown extensions are processed.   
   
## Search example   
This code:   
   
``` 
-``` query
convert automation webserver ssh
-```
   
```

Gives this block:

``` query
convert automation webserver ssh
```
   
   
Note that at the moment, only the links to the notes are outputted. Search results from within the notes will be added soon, but require more work.   
   
The supported queries are also still very basic. You can search for a single keyword, or for multiple keywords (ANDed toghether).    
   
Other options are also available out of the box, but not tested yet, and it is not yet clear whether those options align exactly with Obsidians query language. See [https://whoosh.readthedocs.io/en/latest/querylang.html](https://whoosh.readthedocs.io/en/latest/querylang.html) for the current implementation.   
   
If you want your most important usecase to be added first, please make a description of it here: [https://github.com/obsidian-html/obsidian-html/issues/324](https://github.com/obsidian-html/obsidian-html/issues/324)