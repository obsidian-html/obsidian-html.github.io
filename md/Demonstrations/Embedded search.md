---
{}
---
   
> Added in [v3.3.0](../Changelog/v3.3.0.md)   
   
# General information   
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
   
```
-``` query
convert automation webserver ssh
-```
   
```

> Remove the dashes in front of the backticks, they are only there to avoid the query being processed in the example code.

Gives this block:

``` query
convert automation webserver ssh
```
   
   
We aim to get these result as close as possible to what Obsidian gives .   
   
### Just links   
Getting all those matches is nice for yourself, but for other people browsing your sites, perhaps only a list of links would be better, you can do this by writing `query list` instead of the normal `query`.   
   
This code:   
   
``` 
-``` query list
convert automation webserver ssh
-```
   
```

> Remove the dashes in front of the backticks, they are only there to avoid the query being processed in the example code.

Gives this block:

``` query list
convert automation webserver ssh
```
   
   
I will use this format in the other examples where we only care which notes are returned, and not what the matches exactly are.   
   
# Status of the feature   
Note that at the moment, only the links to the notes are outputted. Search results from within the notes will be added soon, but require more work.   
   
The supported queries are also still very basic. See the [Supported syntax at the moment](#supported-syntax-at-the-moment) for what has been implemented already.   
   
Other options are also available out of the box, but not tested yet, and it is not yet clear whether those options align exactly with Obsidians query language. See [https://whoosh.readthedocs.io/en/latest/querylang.html](https://whoosh.readthedocs.io/en/latest/querylang.html) for the current implementation. (Minus/plus what is listed below as supported syntax).   
   
If you want your most important usecase to be added first, please make a description of it here: [https://github.com/obsidian-html/obsidian-html/issues/324](https://github.com/obsidian-html/obsidian-html/issues/324)   
   
> [!important]   
> The max search results are 20 notes. This will be changed when we can deduce which notes should REALLY be inserted, and which not. Searching on "a" in Obsidian does not return all notes, so it does the same, but the logic behind it is still unclear.   
   
   
# Supported syntax at the moment   
## Search for keyword   
This will search in `["content", "title", "path", "file", "tags"]`   
   
```
-``` query list
babayaga
-```
   
```


``` query list
babayaga
```
   
   
## Search only in note name (file)   
```
-``` query list
file:babayaga
-```
   
```

``` query list
file:babayaga
```
   
   
## Search for tag   
For this to work with whoosh we translate `tag:#<tag>` to `tags:<tag>`.   
   
```
-``` query list
tag:#babayaga
-```
   
```

``` query list
tag:#babayaga
```
   
   
## Search for path   
   
```
-``` query list
path:babayaga
-```
   
```

``` query list
path:babayaga
```
   
   
   
## Exclude syntax   
In the example above we also got a note where babayaga was in the filename. If we want to find notes where that term is only in the path, but not also in the filename, we can use `-` as an ANDNOT operator.   
   
```
-``` query list
path:babayaga -file:babayaga
-```
   
```

``` query list
path:babayaga -file:babayaga
```
   
   
   
## Search for a phrase   
Supported by default, search for an entire phrase, instead of OR-ing keywords together.   
   
```
-``` query list
"query with quotes"
-```
   
```

``` query list
"query with quotes"
```
   
   
## Standard simple search   
Compare that result with the query without quotes around it (implicit OR):   
   
```
-``` query list
query without quotes
-```
   
```

``` query list
query without quotes
```
   
   
Note that the current implementation filters out common words (limited to English) such as "a" and "for", so the list in the html output will often be a lot shorter than in Obsidian.   
   
   
   
--------   
   
Here I link to the test notes so that they are included in the vault.   
   
   
- [babayaga in title only](../Resources/test_pages/embedded_search/babayaga%20in%20title%20only.md)   
- [bbyg_in_text](../Resources/test_pages/embedded_search/bbyg_in_text.md)   
- [bbyg_in_tags](../Resources/test_pages/embedded_search/bbyg_in_tags.md)   
- [bbyg in path only](../Resources/test_pages/embedded_search/babayaga/bbyg%20in%20path%20only.md)