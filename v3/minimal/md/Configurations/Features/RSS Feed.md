---
tags:
- feature/rss
- date/2022-02-17
---
   
>[!important]   
> This is the documentation for [v3.5.0](../../Changelog/v3.5.0.md) and lower, for documentation for **v4.0.0** and higher, see [https://obsidian-html.github.io/](https://obsidian-html.github.io/)   
   
   
> New in [v1.0.0](../../Changelog/v1.0.0.md)   
   
## Introduction   
The RSS feed feature creates [an RSS feed](https://meganesulli.com/blog/how-rss-works/) out of (a selection of) your notes. You can find our RSS feed by clicking the feed button in the topright of the screen.   
   
This feed can be added to an RSS reader. One that I like, and use to test this feature is [Smart-RSS](https://github.com/SmartRSS/Smart-RSS).   
   
## Configuration   
### Introduction   
The default configuration is shown below.   
   
```yaml 
    rss:
      enabled: False
      host_root: 'https://localhost:8000/'
      styling: 
        show_icon: True
      channel: 
        title: 'Notes'
        website_link: '<https://your website.com>'
        description: '<your description>'
        language_code: 'en-us'
        managing_editor: 'n/a'
        web_master: 'n/a'
      items:
        selector: 
          match_keys: []
          exclude_keys: []
          include_subfolders: []
          exclude_subfolders: ['.git','obs.html']
          exclude_files: ['not_created.html', 'index.html']
        description:
          selectors:
            - ['yaml','rss:description']
            - ['first-paragraphs', 2, '<br/><br/>']
            - ['first-header', 1]
        title: 
          selectors: 
            - ['yaml','rss:title']
            - ['first-header', 1]
            - ['path', ['parent',1], '/ ', ['stem']]
        publish_date: 
          selectors: 
            - ['yaml','rss:publish_date']
            - ['yaml_strip','tags',['date/']]
          iso_formatted: True
          format_string: ''
```
   
   
You can find the RSS config used by this website here (search on rss):  [https://github.com/obsidian-html/obsidian-html.github.io/blob/main/__src/config.yml](https://github.com/obsidian-html/obsidian-html.github.io/blob/main/__src/config.yml)   
   
Note that:   
   
- The feature is disabled by default   
   
There are a couple of values that you *have* to fill in yourself if you want to enable this feature, i.e.:   
   
- rss/channel/website_link   
- rss/channel/description   
   
The following values are optional, but recommended:   
   
- rss/channel/managing_editor    
- rss/channel/web_master   
   
You might also want to look into [Match keys](#match-keys) and [include_subfolders](#include_subfolders) for your first configuration settings.   
   
Also make sure that the notes that you include have a publish date set in the frontmatter yaml. E.g.:   
   
``` yaml
---
# Will be matched first
rss:
  publish_date: 2022-03-04
  
# Matched second, if first is absent
# I have this one in my template, so it exists everywhere
tags:
 - date/2022-03-04
```
   
   
## Top level configuration   
### Enabled    
_Allowed values: True, False_   
This setting turns on/off the feature entirely   
   
### Host Root   
_Allowed values: any string_   
This is used to build the links to your notes. Should be your website address + possible [subfolder](../../Configurations/Configuration%20Options.md#html-url-prefix). In our case: [https://obsidian-html.github.io/](https://obsidian-html.github.io/)   
   
> Note: we've compiled our site twice, once to [https://obsidian-html.github.io/index_from_tags/](https://obsidian-html.github.io/index_from_tags/) in that case, that url is the **host_root**.   
   
## Styling configuration   
### show_icon   
_Allowed values: True, False_   
You might want to enable the RSS feed, but not show the RSS icon in the topright of the page, you can turn it off here.    
   
## Channel configuration   
This section fills in the channel section of the RSS feed. You can find all the settings that are possible here: [https://validator.w3.org/feed/docs/rss2.html#requiredChannelElements](https://validator.w3.org/feed/docs/rss2.html#requiredChannelElements)    
   
Note that we only implement the values that you can find in this section, more might be added in the future. Reach out via [Report Issues & Request features](../../General%20Information/Report%20Issues%20%26%20Request%20features.md) if you miss any values that you'd like to include in your RSS feed.   
   
## Items configuration   
This section is mostly selection settings: where to find the notes that you want to include, what to include/exclude them on, and how to determine the title, description, and publish date.   
   
### Selector   
```yaml 
match_keys: [['yaml','tags',['type/news']]]
exclude_keys: []
include_subfolders: []
exclude_subfolders: ['.git', 'obs.html']
exclude_files: ['not_created.html', 'index.html']
```
   
   
#### Match keys   
> This value accepts lists of [Selector functions](#selector-functions)   
   
This setting allows you to only include notes that have a certain key in the frontmatter yaml.   
   
   
- This is a list of lists. Each element in the main list is a selector. The first value in the selector list is the function name.    
- At the moment only the [yaml](#yaml) function is implemented for this setting.   
- If any of the given functions return true, then the item is selected.   
   
```yaml 
# will select any notes that have "news: " in the frontmatter
match_keys: [['yaml','news',['']]]

# will select any notes that have any tag that starts with 'news/'
match_keys: [['yaml','tags',['news/']]]
```
   
   
#### exclude_keys   
> This value accepts lists of [Selector functions](#selector-functions)   
   
   
- Same as [Match keys](#match-keys), but will exclude notes   
- If a note matches on both match_key and exclude_key, the note will not be included.   
   
#### include_subfolders   
   
- If this value is an empty list, all the folders will be searched for notes   
- If not an empty list, only the subfolders will be searched for notes   
- The path should be given relative to the root of the html output folder   
   
#### exclude_subfolders   
   
- Same as [include_subfolders](#include_subfolders) but in reverse   
- If the same folder is in both include_subfolders and exclude_subfolders, then it won't be parsed.   
   
#### exclude_files   
   
- Same as [exclude_subfolders](#exclude_subfolders), but for filenames   
- **Note**: this should be filenames, not file paths!   
   
### Description/Title   
#### selectors   
   
- List of any number of [Selector functions](#selector-functions)   
   
### Publish_date   
#### Selectors   
   
- List of any number of [Selector functions](#selector-functions)   
   
#### iso_formatted   
Whether the string that is selected is iso formatted. This information is used to parse the date into a dateobject, in order to get to the correct RSS date string.   
   
   
- If true, the format_string setting will be ignored.    
   
#### format_string   
Format string to be used to parse publish date string into date object if `iso_formatted: False`.    
   
You can find how to build a datestring that matches your date here: [https://docs.python.org/3/library/datetime.html#strftime-and-strptime-behavior](https://docs.python.org/3/library/datetime.html#strftime-and-strptime-behavior)   
   
Example using datestring for iso formatted date (normally you'd just use iso_formatted: true for this):   
```yaml
publish_date: 
  selectors: 
	- ['yaml','rss:publish_date']
	- ['yaml_strip','tags',['date/']]
  iso_formatted: False
  format_string: '%Y-%m-%d'
```
   
   
   
# Selector functions   
Some configuration items can be set using a selector.    
   
   
- A selector is always a list where the first item is the name of the selector function.    
- The rest of the values are argument to the selector function and are thus different for each selector function.   
- Any configuration item that can be set by a selector function can *only* be set by a selector function, and will always only accept a *list* of selector functions. I.e.:   
   
```yaml
# passing one selector 
selectors: [['selector1', 'arg1']]

# passing two selectors
selectors: [['selector1', 'arg1'], ['selector2', 'arg2']]

# same as above, but using expanded notation
selectors:
  - ['selector1', 'arg1']
  - ['selector2', 'arg2']

# passing no selectors (where applicable)
selectors: []

# wrong, passing selector without surrounding list
# will cause an error
selectors: ['selector1', 'arg1']
```
   
   
The fact that we always pass in a list allows us to define fallbacks, e.g.:   
   
- "I want the title to be based on the yaml key rss:title, but take the value of the first h1 if that key is not found"   
   
## yaml   
This selector allows us to match items on the presence of either a key, or a list value under a key. It also allows us to set a string value for e.g. the description or title, based on the value of a key (or a list item under a key).   
   
``` yaml
# select notes that have the rss_desc key in the yaml frontmatter
# return the value of the key
['yaml', 'rss_desc']

# select notes that have a list element in the list under the key tags
# that starts with 'type/news', return the list element
['yaml', 'tags', 'type/news']
```
   
   
Some pointers:   
   
   
- If used to select notes (boolean), any returned value will result in a selection *(or deselection, in case of exclude configurations).*    
- If used to select a value, like in the selector for a title, then that title will become that returned value.   
- If the second argument is given (the prefix value), the value under the key is assumed to be a list. If this is not the case, then an empty string is returned.   
- If the second argument is not given, the value at the key location is returned as a string, regardless of data type.    
- If the given key is not found, then an empty string is returned.   
   
### Tree navigation   
It's possible to select a key several levels down by using `:` as a delimiter.    
   
Let's say you have this frontmatter:   
``` yaml
---
rss:
  title: 'My custom title for this note'
---
```
   
   
then the yaml selector for this looks like this:   
   
``` yaml
['yaml', 'rss:title']
```
   
   
### yaml_strip   
If you want to get the string value of a list item, for example the tag `date/<date>`, given:   
``` yaml
tags:
  - date/2022-01-24
```
   
   
Then you'd want to strip the given prefix, to only get back the "2022-01-24".    
   
This can be done by renaming the selector function from `yaml` to `yaml_strip`. The function will work the same as described in this section, the only change is that it will strip the prefix off of matched list values.   
   
``` yaml
['yaml_strip', 'tags', ['date/']]
```
   
   
## first-paragraphs   
Parses the html, finds all paragraph elements, and then returns a string that is the innerHtml of the first paragraph, plus how many extra are selected.   
   
```yaml
# return the innerHtml of the first and the second paragraph on the page,
# as a string, separated by two line breaks
selector: ['first-paragraphs', 2, '<br/><br/>']
```
   
   
If no paragraphs are present then an empty string is returned, if less paragraphs are present than configured, it will combine all the paragraphs up until that point and return that.   
   
## first-header   
   
```yaml
# Get the first H1 header, and return the inner html
selector: ['first-header', 1]
```
