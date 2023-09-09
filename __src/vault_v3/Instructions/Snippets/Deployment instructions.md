---
tags:
- type/template
- date/2022-09-04
---
>[!important]
> This is the documentation for [[v3.5.0]] and lower, for documentation for **v4.0.0** and higher, see https://obsidian-html.github.io/

By default the configuration allows for running the website as  [http://localhost:8000](http://localhost:8000),  https://mywebsite.com/, https://my-account.github.io/, etc.

All those urls have in common that they are in the root of the domain. An example where this is not the case is:  https://mywebsite.com/subfolder/.

#### Deploying to a subfolder
To make your website work for https://mywebsite.com/subfolder/ you should add this setting:

``` yaml
# Use when deploying to https://mydomain.com/html_prefix/ instead of https://mydomain.com/
# use '/html_prefix' (prepend slash, no slash at the end)
html_url_prefix: '/subfolder'
```

This will add `/subfolder` to every link in the html output.

> [!note]
> When you use this setting,  testing locally will give issues. Be sure to put your html output in a folder called `subfolder` (in this example), then go to the folder in which this folder is located and run `python -m http.server` then go to http://localhost:8000/subfolder instead of http://localhost:8000/

#### Viewing your website without a webserver
If you don't want to deploy a website on the world wide web, nor want to start a local webserver everytime someone wants to view your website, you can configure Obsidianhtml such that you can just open the index.html in your browser directly from your filesystem.

Note that this will break the graph view and the search function, so these should be disabled. 

For this to work we need to make sure that all the links in a page are relative to that page, this can be done by configuring this setting: [[Relative_path_html]]