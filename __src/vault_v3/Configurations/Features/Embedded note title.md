> This is the documentation for [[v3.5.0]] and lower, for documentation for **v4.0.0** and higher, see https://obsidian-html.github.io/v4

> New in [[v3.2.0]]
> Changed in [[v3.4.0]]

## Change note
In between version 3.2.0 and 3.4.0 Obsidian has added built-in support for embedded titles.
Because of this, embedded titles will be enabled by default. 

Configuration options that were available in [[v3.2.0]] have been stripped because the interaction between the built-in note titles and the plugin have become too complex. 

At the moment you are limited to either enabling or disabling adding of titles,  and hiding the embedded title if the first element of a note is an h1 header. 

If you want more configuration options than is available out of the box, please see [[Report Issues & Request features]] to request it. We will add the options then to the `toggles/features/embedded_note_titles` section, instead of reading out the plugin settings as was the case before [[v3.4.0]].

## Configuration
### Global disable
To disable adding titles all together, set this setting:

``` yaml
toggles:
  features:
    embedded_note_titles:
      enabled: False
```

### Disable on specific note
To disable adding a title in a specific note, see [[Note settings#dont_add_embedded_title]].

### Disable if note already has a title
By default, no title will be added if the first element of the note is an h1 header. To ignore this rule, set this:
``` yaml
toggles:
  features:
    embedded_note_titles:
      enabled: True
      hide_on_h1: False
```