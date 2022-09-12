> Added in [[v3.3.0]]

# General information
> [!warning]
> This feature is still in alpha, and needs more development.
>
>User stories, bugs, issues are all discussed here: https://github.com/obsidian-html/obsidian-html/issues/324

## Enable
As the feature is still in alpha, it is disabled by default.

To enable it, add this to your config:

``` yaml
toggles
  features:
    embedded_search:
      enabled: True
```

Also make sure to install the latest master branch code: [[Install a different version]]. 

> [!note]
> If you do a git pull, go into the root of the cloned repo and run `pip install .`  at least once after each pull so that changes in markdown extensions are processed.

## Search example
This code:

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



# Status of the feature
Note that at the moment, only the links to the notes are outputted. Search results from within the notes will be added soon, but require more work.

The supported queries are also still very basic. See the [[#Supported syntax at the moment]] for what has been implemented already.

Other options are also available out of the box, but not tested yet, and it is not yet clear whether those options align exactly with Obsidians query language. See https://whoosh.readthedocs.io/en/latest/querylang.html for the current implementation. (Minus/plus what is listed below as supported syntax).

If you want your most important usecase to be added first, please make a description of it here: https://github.com/obsidian-html/obsidian-html/issues/324

> [!important]
> The max search results are 20 notes. This will be changed when we can deduce which notes should REALLY be inserted, and which not. Searching on "a" in Obsidian does not return all notes, so it does the same, but the logic behind it is still unclear.


# Supported syntax at the moment
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
-``` query
file:babayaga
-```
```

``` query
file:babayaga
```

## Search for tag
For this to work with whoosh we translate `tag:#<tag>` to `tags:<tag>`.

```
-``` query
tag:#babayaga
-```
```

``` query
tag:#babayaga
```

## Search for path

```
-``` query
path:babayaga
-```
```

``` query
path:babayaga
```


## Exclude syntax
In the example above we also got a note where babayaga was in the filename. If we want to find notes where that term is only in the path, but not also in the filename, we can use `-` as an ANDNOT operator.

```
-``` query
path:babayaga -file:babayaga
-```
```

``` query
path:babayaga -file:babayaga
```


## Search for a phrase
Supported by default, search for an entire phrase, instead of OR-ing keywords together.

```
-``` query
"query with quotes"
-```
```

``` query
"query with quotes"
```

## Standard simple search
Compare that result with the query without quotes around it (implicit OR):

```
-``` query
query without quotes
-```
```

``` query
query without quotes
```

Note that the current implementation filters out common words (limited to English) such as "a" and "for", so the list in the html output will often be a lot shorter than in Obsidian.


--------

Here I link to the test notes so that they are included in the vault.

- [[babayaga in title only]]
- [[bbyg_in_text]]
- [[bbyg_in_tags]]
- [[bbyg in path only]]