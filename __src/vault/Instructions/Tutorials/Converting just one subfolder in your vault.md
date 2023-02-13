Some users want to export only a subfolder of their vault.

You could use the [[Configuration Options#Include subfolders|included_folders]] setting to only include that one subfolder, but that will give unwanted paths for the [[Create Index from Directory Structure]] feature (i.e that will show the full paths where probably you don't want that).

The best way to go about exporting just one subfolder, and everything under it is as follows:

- Make sure that all the notes and resources used/linked to in that folder are located somewhere under that folder.
- Add a folder named `.obsdian` in the root of the folder that you want to use as your "vault"
- Create a note that serves as an entrypoint (homepage) in your folder
- Point to that note in [[Obsidianhtml Run]] or better yet, configure `obsidian_entrypoint_path_str` with the path to that note in your config.yml, and use that to run `obsidianhtml convert -i path/to/your/config.yml`

Note that [[Configuration Options#Process all|process_all]] will apply only to the one subfolder (and all its contents) in which you placed the `.obsidian` folder.


