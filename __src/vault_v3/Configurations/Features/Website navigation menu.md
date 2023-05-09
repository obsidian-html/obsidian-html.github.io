---
tags:
- type/configuration
- date/2022-04-17
---
> This is the documentation for [[v3.5.0]] and lower, for documentation for **v4.0.0** and higher, see https://obsidian-html.github.io/v4

> New in [[v2.0.0]]

``` yaml
navbar_links: []  
```

You can set this configuration to add links to notes at the top of the page. 

This is the config used for this website:

``` yaml
navbar_links:
  - name: Home
    link: index.html
  - name: About
    link: General Information/About ObsidianHtml.html  
  - name: Quickstart
    link: Instructions/Quickstart.html
  - name: Styling
    link: Configurations/Styling/Styling.html    
  - name: Modes
    link: Configurations/Modes.html
  - name: Features
    link: Configurations/Features.html
  - name: Configurations
    link: Configurations/Configuration Options.html
  - name: News
    link: News.html    
```

Make sure to use the full relative path to the note as measured from your webroot (so exclude the [[Configuration Options#Html Url Prefix|prefix]]).

## External links in the website navigation menu
> New in [[v3.1.0]]

If you want to link to a different website, then you should add `type: external` to the link item, e.g.

``` yaml
navbar_links:
  - name: Home
    link: index.html
  - name: Code
    link: https://github.com/obsidian-html/obsidian-html
    type: external    
```