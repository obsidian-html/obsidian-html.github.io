---
{}
---
# Obsidianhtml Run   
   
> New in [v3.2.0](/not_created.md).    
   
To help new users to quickly start using obsidianhtml we created the `obsidianhtml run`    
command.   
   
> [!note]   
> obsidianhtml run was added in the latest release [v3.2.0](/not_created.md), and is currently not fully tested yet. If you experience issues, then I ask you to go to [Report Issues & Request features](../General%20Information/Report%20Issues%20%26%20Request%20features.md). In the mean time you can continue with the section below.   
   
## Quickstart   
### Short instructions   
Run   
``` bash
obsidianhtml run -f /absolute/path/to/your/entrypoint_note.md
```
   
   
Then follow the instructions in the terminal. If all is well it will spit out some information and then tell you to open [http://localhost:8888](http://localhost:8888) in your browser. Do so and admire your new website.   
   
When done return to the terminal and press enter to exit obsidianhtml and stop the webserver.   
   
## About   
This is a very opinionated mode, which allows us to do a lot of checking of input, and more importantly: compute sensible defaults. This will give you the highest chance of getting a working config right off the bat.   
   
In the basis you run obsidianhtml run by only providing the path to your note. We advice you to use an absolute path for this.   
   
``` bash
obsidianhtml run -f /home/user/git/obsidian-html.github.io/__src/vault/ObsidianHtml.md
```
   
   
This will then do the following:   
   
- Load in the default config file. These already have sensible defaults, but some will be overwritten in the steps below to work for `obsidianhtml run`.   
- Figure out your vault folder. It does this by starting with the folder that your entrypoint node is in and looking for the folder `.obsidian`, which is present in every vault. If it can't find this folder, it goes one folder up and tries again.   
- Set the config settings for the markdown and html output folders. These will be created as a temporary folder. These folders will not be removed by obsidianhtml at the end, but should be cleaned up by your OS after a restart or when it thinks it is time to clean up temporary folders.   
- Write the compiled config settings to a file called config.yml. This file will be located in an [AppDir folder](https://pypi.org/project/appdirs/) which is a standard location on your OS for applications to store config.    
- Compile your website   
- Start hosting your website at port 8888 using the built-in python `http.server` module.   
- Print out the location to your newly compiled config yaml   
- Print out the instruction to open your browser and navigate to [http://localhost:8888](http://localhost:8888) so that you can view your website.   
   
The process will keep running to keep the webserver alive. Press enter to exit the process and stop the webserver. The webserver will print logs to your terminal so that you can debug any issues.   
   
## Further configuration   
### Get a working config for deploying to a subfolder   
Read more on this subject: [Deployment instructions](../Instructions/Snippets/Deployment%20instructions.md#deploying-to-a-subfolder).   
   
Add the `--subfolder test` setting to get a working config for publishing to e.g. [http://mywebsite.com/test](http://mywebsite.com/test)    
   
Example:   
``` bash
# for http://mywebsite.com/test
obsidianhtml run -f /absolute/path/to/your/entrypoint_note.md --subfolder test

# for http://mywebsite.com/sites/test
obsidianhtml run -f /absolute/path/to/your/entrypoint_note.md --subfolder sites/test
```
   
   
   
### More options   
Run    
``` bash
obsidianhtml help
```
   
   
For more information on the run command.