---
tags:
- type/configuration
- date/2022-02-12
---
> This is the documentation for [[v3.5.0]] and lower, for documentation for **v4.0.0** and higher, see https://obsidian-html.github.io/v4


## High level
- [[Parsing Obsidian notes to proper markdown]]
- [[Creating a static html website from markdown files]]

## Note selection features
- [[Process All]]
- [[Filtering notes]] (inclusion / exclusion of files and or folders)
- [[Create index from tags]]
- [[Converting just one subfolder in your vault]]

## Basics
| Feature | Short description | Default |
| ------- | ----------------- | ------- |
| [[Include notes]] | The ability to use the `![[note]]` syntax to include a note. | Not toggleable. |
| [[Configuration Options#Simple feature toggles\|Erase comments]] | Remove anything in between `%%` | Enabled |

## HTML features
### Add-ons
These features implement standard Obsidian behavior in the html output.

| Feature | Short description | Default |
| ------- | ----------------- | ------- |
| [[Backlinks]] | Adds the backlinks to the note at the bottom of the note. | Enabed |
| [[Implementing Call-outs\|Call-outs]] | Enable call-outs | Enabled |
| [[Graph view]] | Add graph view at the bottom of the note | Enabled |
| [[Implementing Latex\|Mathjax support]] | Convert mathjax code to formulas | Enabled |
| [[Implementing Mermaid diagrams in HTML output\|Mermaid diagrams]] | Convert mermaid code to diagrams | Enabled |
| [[Styling]] | Enable user to switch between light and dark mode / Choose a different layout. | Enabled |
| [[Side panes]] | *Only for Documentation layout*. Configure side panes and their content. | Enabled |
| [[Styling#Table of Contents\|Table of Contents]] | Add TOC to side-pane instead of in note / add TOC to notes when missing | Enabled |
| [[Tags Page]] | Add a list of tags under each note. Nb: the default preserve_inline_tags setting will create polluted md output! | Enabled |
| [[Slugify html links]] | Have better readable/shareable links by slugifying the html paths | **Disabled** |
| [[Configuration Options#img_alt_text_use_figure\|Add Figcaptions]] | Create a [`<figcaption>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption) for the image when an alt text is set. | Enabled |

### Extras
These features add functionality from popular obsidian plugins, or extra functionality that make sense for websites (such as an RSS feed).

| Feature | Short description | Default |
| ------- | ----------------- | ------- |
| [[Embedded note title]] | Have h1 headers be added to your notes so you have more levels to work with | Enabled |
| [[Folder Notes]] | Open a note when you click on a directory | Enabled |
| [[RSS Feed]] | Output an rss feed. | **Disabled** |
| [[Create Index from Directory Structure]] | Create a homepage based on your directory structure | Enabled, but points to `obs.html/dir_index.html` instead of `index.html` by default. |
| [[Website navigation menu]] | Add shortcuts at the top of the page. | Enabled, but empty list |
| [[Breadcrumbs]] | Add the path to the note at the top of the note | Disabled, but enabled on this website |
| [[Embedded search]] | Parse embedded search blocks (within query fenced code blocks) | **Disabled** |

## Safety
- [[Copy vault to temp dir]]

## Post processing
Transformations to the generated markdown output. This step is done at the very end which means that these post processing transformations have no effect on the html output (if you do the entire conversion step in one go, that is)! Read more here: [[Markdown post processing]]

| Feature | Short description | Default |
| ------- | ----------------- | ------- |
| [[Markdown post processing#md_markdown_callouts\|md_markdown_callouts]] | Convert callouts from obsidian syntax to py block syntax | Disabled |

## Extensability
- [[Configuration Options#Html Custom Inclusions|Custom stylesheet/javascript inclusions]]
- [[Configuration Options#Html Template Path Str|Use custom HTML template]]
- [[Export vault files to html output]]
- [[Writing a custom graph view template]]

## Other
See [[Configuration Options]] for a detailed look at all the configuration options available.