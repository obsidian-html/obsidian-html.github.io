---
tags: []
---
# Slugify html links

>New in [v3.5.0](/not_created.md)

If you have a lot of capital letters, spaces, and other special characters in your note names, then the html links that are generated can be a bit hard on the eyes.

For this purpose, you can enable the setting `toggles/slugify_html_links`.

By default this setting is off. Setting this to true will make better readable links as it will replace all the spaces and special characters with dashes, and make everything lowercase. 

## Important notes before you enable

- Enabling this feature might cause different notes to **end up with the same file name**, see also [Possibility for clobbering](#possibility-for-clobbering).
- Enabling this feature will have an impact on the folder names of the [Create Index from Directory Structure](../../Configurations/Modes/Create%20Index%20from%20Directory%20Structure.md) feature, i.e. they will be slugified too. This does not happen for the notes themself.
- Since enabling this feature will change the links of the pages and paths of the html output files, you might have to reconfigure some settings
	- The [Configuration Options](../../Configurations/Configuration%20Options.md#navbar_links) setting will automatically convert the links set there to their slugified forms, so these will not have to be reconfigured.

# Enable
Add this to your config yaml:
``` yaml
toggles:
  slugify_html_links: True
```



# Possibility for clobbering
The way the link rewrite works is thus:

- Replace non ascii letters with their ascii counter parts
	- e.g. `žlutý → zluty`
- Make all letters lowercase
- Replace all special chars that are not allowed (anything that is not: `a-zA-Z0-9\s-/\.`) with a space
- Collapse multiple spaces into 1
	- e.g. `"a     b" → "a b"`
- Spaces at the beginning and end are stripped
- Replace spaces with a dash

It should be clear that it is possible to have two notes in Obsidian with very similar paths that will end up with the same paths through this rewrite. This will cause undefined behavior, but most probably the note that is processed later will overwrite the earlier note.

A kind of use that would have many issues with this, is naming notes like so:

- `📚 Why ObsidianHtml is buggy but still great`
- `✒️ Why ObsidianHtml is buggy but still great`

Where an emoticon is used to differentiate between a source note, a seedling note, etc. Because all of these will be converted into:

- `why-obsidianhtml-is-buggy-but-still-great`

So if you manage your vault in this way, this feature is not recommended in its current form.