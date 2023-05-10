---
{}
---
   
Meta modules are modules that are configured to be run after/before every (normal) module execution.   
Meta modules will not be triggered to run by other meta modules.   
   
Meta modules configured under `meta_modules_post` will be executed after each module execution, and module configured under `meta_modules_pre` (not implemented yet) are configured before every module execution.   
   
There is nothing special about meta modules, other than where they are configured. For example, the [Resource Logger](../../../Configurations/Modules/Resource%20Logger.md) module is executed both as a meta module, and (at the very end) as a normal module.   
   
## Guidelines   
### Metamodules should not alter modfiles   
As meta modules are not triggered by other meta modules, the [Resource Logger](../../../Configurations/Modules/Resource%20Logger.md), which is responsible for logging [Module file](../../../Configurations/Modules/Concepts/Module%20file.md) access, cannot keep track of module files being created/altered by other meta modules.   
   
For this single reason, it is best not to have meta modules alter modfiles or provide modfiles that are integral to other modules.   
   
Writing log or debug output to the module data folder is of course allowed and even encouraged.