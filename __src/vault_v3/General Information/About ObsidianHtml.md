---
tags:
- type/general_information
- date/2022-02-12
---
>[!important]
> This is the documentation for [[v3.5.0]] and lower, for documentation for **v4.0.0** and higher, see https://obsidian-html.github.io/


## Description
ObsidianHtml is an application that can be used to export Obsidian notes to standard markdown and an html based website. 

In fact, this website that you are currently on is directly compiled out of a [vault](https://github.com/obsidian-html/obsidian-html.github.io/tree/main/__src/vault). The compiled markdown can be [found here](https://github.com/obsidian-html/obsidian-html.github.io/blob/main/md/index.md).

The html website output is fully static. Only a simple http webserver is needed to view the website locally, and it can be pushed to static site host platforms like gitpages and cloudflare pages for free. 

The http webserver is needed for features that do client-side javascript calls, but if you turn those off you can even browse the html website via the filesystem ([[Relative_path_html|with the correct settings]]). 

> [!Important note]- Notice: this is not the kmaasrud/obsidian-html package!
>
> Only after naming this project I learned that there used to be a similar package under the same name. That one seems to have been renamed to Oboe. 
> 
> The original was located at https://github.com/kmaasrud/obsidian-html and later https://github.com/kmaasrud/oboe which you find referenced in a lot of places. 
> 
> I would link to it but I can't find an authoritative source, only forks. 
> Anyways: **This is not that package**.

## What does it do?
The Obsidian notes will be converted to standard markdown output. Then, optionally, html output is created based on the standard markdown.

It is also possible to input existing standard markdown to just use the markdown to html functionality. Though truth be told, the main usecase is converting an obsidian vault directly to html. The other usecases are kind of stuck in beta due to lack of interest by users and myself. There are also better options to convert standard markdown to html, such as [Hugo](https://gohugo.io/about/what-is-hugo/) and [MKDocs](https://www.mkdocs.org/).

To convert your notes, you need to point to your notes folder, and to one note that will serve as the index.html page.

By default only notes that are found by following links recursively starting with the entrypoint will be converted. But if you want to work differently, [[Modes|there are other modes available]].

> [!example]
> See [[Demonstrations]] for a nice demo of the first part.

## Compatibility
- Python version 3.9.14 or higher is required
- This application is extensively tested on Linux, regularly tested by users on OSX, and basically never tested on (but intended to be compatible with) Windows.
- The website output is developed and fully tested on Firefox, and occasionally on Chrome, but supported for all modern browsers.

- Make sure that the `python` command points to `python3`, and not a python2 version.

One thing to take note of is that ObsidianHtml will write a folder to your html output named obs.html, if you have a directory in the root of your vault with the same name (however unlikely that is...) there might be issues with the html output.

## Examples
Want to see what others built using ObsidianHtml? Check out some of the websites here: [[Sites using ObsidianHtml]].


## Next up
Take a look at all the [[Features|high level features]] that can be enabled/disabled, or read about all the [[Configuration Options|configuration options]]. Or maybe jump directly to [[Installation]].