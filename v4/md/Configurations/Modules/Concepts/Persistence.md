---
{}
---
   
Modules are by default removed after they are run. In some cases, the modules need to be stored for later execution.   
   
## Use case examples   
One example is the [Resource Logger](../../../Configurations/Modules/Resource%20Logger.md) module, which is executed after every module execution (as it is configured as a [Meta module](../../../Configurations/Modules/Concepts/Meta%20module.md)). At the very end, it is run as a normal module to output all of the information that it collected. If persistence were off, the collected data would be lost every run, necessitating writes/reads for every module execution, which is a bit excessive.   
   
Another example is the [Copy Vault to Tempdirectory](../../../Configurations/Modules/Copy%20Vault%20to%20Tempdirectory.md) module, which [stashes](../../../Configurations/Modules/Concepts/Stashing.md) the `tempdir` object. This object represents the temporary directory that the module created, and it has a trigger attached to it to clean up the temporary directory once the object goes out of scope. Storing the tempdir object in the module, and then storing the module, ensures that the tempdir object does not go out of scope until we reach the end of the execution of the whole program.   
   
## Configuring persistence   
You can add `persistence: True` to the module listing, e.g.:   
   
``` yaml
module_list:
  preparation:
    - name: html_templater
      description: Prepare and export templates used to create html output.
      persistent: True
```
