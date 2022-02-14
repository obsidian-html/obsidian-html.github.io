---
tags:
- type/configuration
- date/2022-02-14
---
   
# Modes   
A *mode* is a term used for certain [configuration settings](../Configurations/Configuration%20Options.md) that alter the note selection and/or the contents of the homepage.   
   
## Entrypoint mode   
This is the default. An obsidian ([or markdown](../General%20Information/Parsing%20Obsidian%20notes%20to%20proper%20markdown.md)) note is selected that functions as the homepage. All the notes linked to by the entrypoint node are parsed, and the notes they link to, and so on and so forth.   
   
In the end the website will only contain notes that are reachable (directly or indirectly) by the starting entrypoint note.   
   
This enables you to only include part of your vault. To be extra secure, you can manually [exclude subfolders](../Configurations/Configuration%20Options.md#exclude-subfolders), to be sure personal notes will not be shared publicly.   
   
## Process all   
This is not so much its own mode, but a modifier for other modes. It enables you to include all files in your vault (sans the [excluded subfolders](../Configurations/Configuration%20Options.md#exclude-subfolders)).    
   
Read more [Process All](../Configurations/Process%20All.md).   
   
## Create index from tags   
If you want to dynamically create an index that contains links to notes with certain tags, you can use this mode. Read more: [Create index from tags](../Configurations/Create%20index%20from%20tags.md).