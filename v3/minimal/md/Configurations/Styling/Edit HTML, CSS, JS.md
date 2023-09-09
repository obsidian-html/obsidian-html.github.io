---
tags:
- type/configuration
- type/styling
- date/2022-04-17
---
   
>[!important]   
> This is the documentation for [v3.5.0](../../Changelog/v3.5.0.md) and lower, for documentation for **v4.0.0** and higher, see [https://obsidian-html.github.io/](https://obsidian-html.github.io/)   
   
   
There are currently two ways to edit the html code used to build your website:   
   
   
- Add extra css/js files to the header of a standard template.   
- Pass in your own html template.   
   
## Add extra css/js files   
``` yaml
# Provide an array of custom inclusions (css, javascript, etc) that you would like to be included in the resultant html
html_custom_inclusions: []
```
   
   
Every note gets turned into its own contained html page. If you want to provide an extra css file, or javascript file, then you can add, e.g., the following into the setting, to avoid having to edit every single page after compilation:   
   
``` yaml
html_custom_inclusions:
  - '<link rel="stylesheet" href="/custom.css" />'
  - '<script src="/christmas_snowflakes.js"></script>'
```
   
   
> **N.b.** you'll have to ensure the mentioned files are placed into the html output folder at the correct location; in this case directly in the html output folder. Possible ways to do this are: using [process_all](../../Configurations/Configuration%20Options.md#process-all): True, using the [Export vault files to html output](../../Configurations/Tweaking/Export%20vault%20files%20to%20html%20output.md) feature, or by writing your own script that runs right after you run obsidianhtml.   
   
## Custom template   
If you just want to build your pages yourself entirely, then you can pass in the path to your own template file. Note that you need to have at least `{content}` somewhere in the page.    
   
To fetch the default template, you can run the following to export it, so you can make incremental changes:   
   
``` bash
obsidianhtml export layout -o path/to/output/file.html -l documentation  # <documentation/tabs/minimal>
```
   
   
Use that same output path as the value for html_template_path_str to use it in your runs:   
   
``` yaml
# Provide the fullpath to a template file to use instead of standard template. 
# Note that this file must contain at least "{content}" somewhere in the page.
html_template_path_str: ''
```
