---
{}
---
# Converting just one subfolder in your vault   
   
Some users want to export only a subfolder of their vault.   
   
You could use the [included_folders](../../Configurations/Configuration%20Options.md#include-subfolders) setting to only include that one subfolder, but that will give unwanted paths for the [Create Index from Directory Structure](../../Configurations/Modes/Create%20Index%20from%20Directory%20Structure.md) feature (i.e that will show the full paths where probably you don't want that).   
   
The best way to go about exporting just one subfolder, and everything under it is as follows:   
   
- Make sure that all the notes and resources used/linked to in that folder are located somewhere under that folder.   
- Add a folder named `.obsdian` in the root of the folder that you want to use as your "vault"    
   
>[!info]-   
>Obsidian desktop/mobile does not look into subdirectories for `.obsidian`, so this should not have any affect on your usage of Obsidian.      
>    
>Obsidianhtml can look in the `.obsidian` folder for configuration files to inform its own configuration whenever value `auto` (or similar) is configured. You can always change these settings to an explicit value in obsidianhtml, so you never have to make edits in this folder for the configuration of obsidianhtml.   
   
- Create a note that serves as an entrypoint (homepage) in your folder   
- Point to that note in [Obsidianhtml Run](../../Instructions/Obsidianhtml%20Run.md) or better yet, configure `obsidian_entrypoint_path_str` with the path to that note in your config.yml, and use that to run `obsidianhtml convert -i path/to/your/config.yml`   
   
Note that [process_all](../../Configurations/Configuration%20Options.md#process-all) will apply only to the one subfolder (and all its contents) in which you placed the `.obsidian` folder.