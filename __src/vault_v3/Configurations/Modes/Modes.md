---
tags:
- type/configuration
- date/2022-02-14
---
>[!important]
> This is the documentation for [[v3.5.0]] and lower, for documentation for **v4.0.0** and higher, see https://obsidian-html.github.io/


A *mode* is a term used for certain [[Configuration Options|configuration settings]] that alter the note selection and/or the contents of the homepage.

## Entrypoint mode
This is the default. An obsidian ([[Parsing Obsidian notes to proper markdown|or markdown]]) note is selected that functions as the homepage. All the notes linked to by the entrypoint node are parsed, and the notes they link to, and so on and so forth.

In the end the website will only contain notes that are reachable (directly or indirectly) by the starting entrypoint note.

This enables you to only include part of your vault. To be extra secure, you can manually [[Configuration Options#Exclude Subfolders|exclude subfolders]], to be sure personal notes will not be shared publicly. Note that this does not apply to note inclusions. When a note is parsed all the note inclusions will always be processed.

## Process all
This is not so much its own mode, but a modifier for other modes. It enables you to include all files in your vault (sans the [[Configuration Options#Exclude Subfolders|excluded subfolders]]). 

Read more [[Process All]].

## Filtering notes
To only include certain folders, or exclude specific folders, look here: [[Filtering notes]].

## Create index from tags
If you want to dynamically create an index that contains links to notes with certain tags, you can use this mode. Read more: [[Create index from tags]].

A new note is created that contains links to all the notes with the given tags, and the rest of the process is the same as for the [[#Entrypoint mode]].

## Create index from directory structure
If you want to dynamically create an index that contains a folder/filetree based on your html output folder. Read more: [[Create Index from Directory Structure]].

## Relative_path_html
This setting will allow you to compile the website in a way that can be browsed directly from your filesystem (i.e. without running an http server).

This can be useful if you want a basic website for personal use, and don't want to remember to turn on the http server every time.

Read more [[Relative_path_html]].


