---
tags:
- date/2022-02-14
- type/configuration
---
   
# Modes   
A *mode* is a term used for certain [configuration settings](../../Configurations/Configuration%20Options.md) that alter the note selection and/or the contents of the homepage.   
   
## Entrypoint mode   
This is the default. An obsidian ([or markdown](../../General%20Information/Parsing%20Obsidian%20notes%20to%20proper%20markdown.md)) note is selected that functions as the homepage. All the notes linked to by the entrypoint node are parsed, and the notes they link to, and so on and so forth.   
   
In the end the website will only contain notes that are reachable (directly or indirectly) by the starting entrypoint note.   
   
This enables you to only include part of your vault. To be extra secure, you can manually [exclude subfolders](../../Configurations/Configuration%20Options.md#exclude-subfolders), to be sure personal notes will not be shared publicly. Note that this does not apply to note inclusions. When a note is parsed all the note inclusions will always be processed.   
   
## Process all   
This is not so much its own mode, but a modifier for other modes. It enables you to include all files in your vault (sans the [excluded subfolders](../../Configurations/Configuration%20Options.md#exclude-subfolders)).    
   
Read more [Process All](../../Configurations/Modes/Process%20All.md).   
   
## Filtering notes   
To only include certain folders, or exclude specific folders, look here: [Filtering notes](../../Configurations/Modes/Filtering%20notes.md).   
   
## Create index from tags   
If you want to dynamically create an index that contains links to notes with certain tags, you can use this mode. Read more: [Create index from tags](../../Configurations/Modes/Create%20index%20from%20tags.md).   
   
A new note is created that contains links to all the notes with the given tags, and the rest of the process is the same as for the [Entrypoint mode](#entrypoint-mode).   
   
## Create index from directory structure   
If you want to dynamically create an index that contains a folder/filetree based on your html output folder. Read more: [Create Index from Directory Structure](../../Configurations/Modes/Create%20Index%20from%20Directory%20Structure.md).   
   
## Relative_path_html   
This setting will allow you to compile the website in a way that can be browsed directly from your filesystem (i.e. without running an http server).   
   
This can be useful if you want a basic website for personal use, and don't want to remember to turn on the http server every time.   
   
Read more [Relative_path_html](../../Configurations/Modes/Relative_path_html.md).