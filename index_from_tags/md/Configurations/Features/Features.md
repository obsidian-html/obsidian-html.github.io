---
tags:
- type/configuration
- date/2022-02-12
---
# Features   
   
> This is the documentation for [v3.5.0](../../Changelog/v3.5.0.md) and lower, for documentation for **v4.0.0** and higher, see [https://obsidian-html.github.io/v4](https://obsidian-html.github.io/v4)   
   
   
## High level   
   
- [Parsing Obsidian notes to proper markdown](../../General%20Information/Parsing%20Obsidian%20notes%20to%20proper%20markdown.md)   
- [Creating a static html website from markdown files](../../General%20Information/Creating%20a%20static%20html%20website%20from%20markdown%20files.md)   
   
## Note selection features   
   
- [Process All](../../Configurations/Modes/Process%20All.md)   
- [Filtering notes](../../Configurations/Modes/Filtering%20notes.md) (inclusion / exclusion of files and or folders)   
- [Create index from tags](../../Configurations/Modes/Create%20index%20from%20tags.md)   
- [Converting just one subfolder in your vault](../../Instructions/Tutorials/Converting%20just%20one%20subfolder%20in%20your%20vault.md)   
   
## Basics   
| Feature | Short description | Default |   
| ------- | ----------------- | ------- |   
| [Include notes](../../Configurations/Features/Include%20notes.md) | The ability to use the `![[note]]` syntax to include a note. | Not toggleable. |   
| [Erase comments](../../Configurations/Configuration%20Options.md#simple-feature-toggles) | Remove anything in between `%%` | Enabled |   
   
## HTML features   
### Add-ons   
These features implement standard Obsidian behavior in the html output.   
   
| Feature | Short description | Default |   
| ------- | ----------------- | ------- |   
| [Backlinks](../../Configurations/Features/Backlinks.md) | Adds the backlinks to the note at the bottom of the note. | Enabed |   
| [Call-outs](../../Demonstrations/Implementing%20Call-outs.md) | Enable call-outs | Enabled |   
| [Graph view](../../Configurations/Features/Graph%20view.md) | Add graph view at the bottom of the note | Enabled |   
| [Mathjax support](../../Demonstrations/Implementing%20Latex.md) | Convert mathjax code to formulas | Enabled |   
| [Mermaid diagrams](../../Demonstrations/Implementing%20Mermaid%20diagrams%20in%20HTML%20output.md) | Convert mermaid code to diagrams | Enabled |   
| [Styling](../../Configurations/Styling/Styling.md) | Enable user to switch between light and dark mode / Choose a different layout. | Enabled |   
| [Side panes](../../Configurations/Features/Side%20panes.md) | *Only for Documentation layout*. Configure side panes and their content. | Enabled |   
| [Table of Contents](../../Configurations/Styling/Styling.md#table-of-contents) | Add TOC to side-pane instead of in note / add TOC to notes when missing | Enabled |   
| [Tags Page](../../Configurations/Features/Tags%20Page.md) | Add a list of tags under each note. Nb: the default preserve_inline_tags setting will create polluted md output! | Enabled |   
| [Slugify html links](../../Configurations/Features/Slugify%20html%20links.md) | Have better readable/shareable links by slugifying the html paths | **Disabled** |   
| [Add Figcaptions](../../Configurations/Configuration%20Options.md#img_alt_text_use_figure) | Create a [`<figcaption>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption) for the image when an alt text is set. | Enabled |   
   
### Extras   
These features add functionality from popular obsidian plugins, or extra functionality that make sense for websites (such as an RSS feed).   
   
| Feature | Short description | Default |   
| ------- | ----------------- | ------- |   
| [Embedded note title](../../Configurations/Features/Embedded%20note%20title.md) | Have h1 headers be added to your notes so you have more levels to work with | Enabled |   
| [Folder Notes](../../Configurations/Features/Folder%20Notes.md) | Open a note when you click on a directory | Enabled |   
| [RSS Feed](../../Configurations/Features/RSS%20Feed.md) | Output an rss feed. | **Disabled** |   
| [Create Index from Directory Structure](../../Configurations/Modes/Create%20Index%20from%20Directory%20Structure.md) | Create a homepage based on your directory structure | Enabled, but points to `obs.html/dir_index.html` instead of `index.html` by default. |   
| [Website navigation menu](../../Configurations/Features/Website%20navigation%20menu.md) | Add shortcuts at the top of the page. | Enabled, but empty list |   
| [Breadcrumbs](../../Configurations/Features/Breadcrumbs.md) | Add the path to the note at the top of the note | Disabled, but enabled on this website |   
| [Embedded search](../../Demonstrations/Embedded%20search.md) | Parse embedded search blocks (within query fenced code blocks) | **Disabled** |   
   
## Safety   
   
- [Copy vault to temp dir](../../Configurations/Modes/Copy%20vault%20to%20temp%20dir.md)   
   
## Post processing   
Transformations to the generated markdown output. This step is done at the very end which means that these post processing transformations have no effect on the html output (if you do the entire conversion step in one go, that is)! Read more here: [Markdown post processing](../../Configurations/Features/Markdown%20post%20processing.md)   
   
| Feature | Short description | Default |   
| ------- | ----------------- | ------- |   
| [md_markdown_callouts](../../Configurations/Features/Markdown%20post%20processing.md#md_markdown_callouts) | Convert callouts from obsidian syntax to py block syntax | Disabled |   
   
## Extensability   
   
- [Custom stylesheet/javascript inclusions](../../Configurations/Configuration%20Options.md#html-custom-inclusions)   
- [Use custom HTML template](../../Configurations/Configuration%20Options.md#html-template-path-str)   
- [Export vault files to html output](../../Configurations/Tweaking/Export%20vault%20files%20to%20html%20output.md)   
- [Writing a custom graph view template](../../Configurations/Styling/Writing%20a%20custom%20graph%20view%20template.md)   
   
## Other   
See [Configuration Options](../../Configurations/Configuration%20Options.md) for a detailed look at all the configuration options available.