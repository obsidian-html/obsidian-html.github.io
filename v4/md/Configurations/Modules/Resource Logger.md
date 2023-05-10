---
{}
---
   
> [View code](https://github.com/obsidian-html/obsidian-html/blob/master/obsidianhtml/modules/builtin/resource_logger.py)   
   
This module keeps track of which module files were created/read/altered by which module. This is useful for getting an overview of which modules contributed to which module file   
   
You can inspect the log, either by opening `log.resources` in the [Module data folder](../../Configurations/Modules/Concepts/Module%20data%20folder.md) after program execution, or by setting `verbosity: debug` in your config.yml, which will print the log to stdout when the modules have all been executed.