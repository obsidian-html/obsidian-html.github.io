---
tags:
- type/configuration
- date/2022-04-17
---

# Website navigation menu
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