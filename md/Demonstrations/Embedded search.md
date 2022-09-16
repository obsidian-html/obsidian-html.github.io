---
{}
---
   
> Added in [v3.3.0](../Changelog/v3.3.0.md)   
   
# General information   
> [!warning]   
> This feature is still in alpha, and needs more development.   
>   
>User stories, bugs, issues are all discussed here: [https://github.com/obsidian-html/obsidian-html/issues/324](https://github.com/obsidian-html/obsidian-html/issues/324)   
   
This feature implements the `query` code blocks functionality of Obsidian, with which we can embed search results into the note. See also [https://help.obsidian.md/Plugins/Search](https://help.obsidian.md/Plugins/Search)   
   
## Status of the feature   
Not all search functionality of [obsidian embbeded search](https://help.obsidian.md/Plugins/Search) has been implemented yet. See the [Supported syntax at the moment](#supported-syntax-at-the-moment) for what has been implemented already.   
   
If you want your most important usecase to be added first, please make a description of it here: [https://github.com/obsidian-html/obsidian-html/issues/324](https://github.com/obsidian-html/obsidian-html/issues/324)   
   
> [!important]   
> The max search results are 20 notes. This will be changed when we can deduce which notes should REALLY be inserted, and which not. Searching on "a" in Obsidian does not return all notes, so it does the same, but the logic behind it is still unclear.   
   
### Whoosh   
We use Whoosh as a search engine for obsidianhtml.See [https://whoosh.readthedocs.io/en/latest/querylang.html](https://whoosh.readthedocs.io/en/latest/querylang.html) for how that syntax works. A large part of implementing Obsidian's search syntax will be to configure Whoosh correctly. Where needed a user provided query from a note will be rewritten so that whoosh gives the desired result.   
   
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
   
   
# Supported syntax at the moment   
## Query versus query list   
Write `query list` instead of `query` if you want to only print out links to notes (no matches).   
See also [Search example](#search-example), where the two are compared.   
   
I will use `query list` in these examples where seeing the matches/tags is not important.   
   
## Search for keyword   
This will search in `["content", "title", "path", "file", "tags"]`   
   
```
-``` query
babayaga
-```
   
```


``` query
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
   
   
## Search for tags   
To search in the list of tags, and not in the note content, or title, use this syntax:   
   
```
tag:<tag>
```
   
   
Note the absence of a `#`.   
   
An example:   
   
```
-``` query
tag:babayaga
-```
   
```

``` query
tag:babayaga
```
   
   
### Search for a specific tag   
If you are looking for a specific tag, do add the `#`   
   
See how both queries below only return their exact results:   
   
```
-``` query
tag:#babayaga
-```
   
```

``` query
tag:#babayaga
```
   
   
```
-``` query
tag:#bla/babayaga
-```
   
```

``` query
tag:#bla/babayaga
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