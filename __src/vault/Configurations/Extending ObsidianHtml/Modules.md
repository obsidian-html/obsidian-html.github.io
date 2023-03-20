> This feature is still in development. Whatever is written here should be read as a statement of intent, (i.e. architecture to be implemented) not the current state!


## Introduction
Modules are the proposed way to keep the complexity of ever increasing amounts of features in check. It is my intent to rewrite every chunk of functionality as a module, which will have a clearly defined function, interface, input and output, and thus will be able to be swapped out by a different module that provides the same output but that produces it in a different way.

Built-in modules will also be required to include testing functions.

## Inputs and outputs
All the inputs and outputs will be in the form of files. The default format should be pretty printed json, to be able to interoperate with different languages.

One of the first modules to be written will take the given path to the user config, merge it with the default config, and write the merged config as a pretty printed json to either `md_output_folder/obs.html/module_data/config.json`  or `html_output_folder/obs.html/module_data/config.json`, depending on whether compile_html is true.

### The module_data folder
At the beginning, one folder is chosen that will contain all the in- and output files. 

**All** the in- and outputs will be written to that one folder. Subfolders are allowed, so one can choose to write to `html_output_folder/obs.html/module_data/md/...`  and `html_output_folder/obs.html/module_data/html/...` to discern similar outputs at different phases of the compilation.

## Module structure
A module is any class that implements the `obsidianhtml.modules.ObsidianHtmlModule` abstract base class, e.g.:

``` python
from obsidianhtml.modules import ObsidianHtmlModule
class MyModule(ObsidianHtmlModule):
	pass
```

## Instantiating of the module
The module will be instantiated by ObsidianHtml with the following input:
- The parameter `module_data_folder_abs_path_posix_str` will be passed in, which, as the name implies, is the absolute path in the form of a posix string pointing to the folder that was chosen to hold all the in- and outputs for the various modules.
- `module_name` will be passed in. This is the name that you give in the `modules` list (see below), and can be considered a dog-tag, or alias. Not be confused with `ObsidianHtmlModule.module_class_name`, which will also be set, and which is the module class's name as defined in the python code (alias for `self.__class__.__name__`).

All other input should be read from the module data folder. The sys args are of course also available to the module, so these can be used as input as well.

### Overwriting the abstract base class's `__init__` method
You shouldn't, really. Though perhaps there is some very special reason that you need to alter the init method. 

When overwriting this method, be sure to follow the same input scheme, and to call the ABC's init function:
``` python
def __init__(self, module_data_folder_abs_path_posix_str):
    # my custom code
    self.my_custom_attr = 'placeholder'
    
    # invoke parent's init method 
    super().__init__(module_data_folder_abs_path_posix_str)
```

## Using custom modules
The toplevel key called `modules` will contain, in order, all the modules that will be executed. You can find this list in the default config file.

``` yaml
modules:
  - type: built-in
    name: setup
  - type: built-in
    name: put_config
  - type: custom
    path: '/path/to/module/file.py'
    name: my_module
    class: MyModule
  - type: custom
    path: '/path/to/module/file.py'
    name: my_module
    method: run2
```

To add your own module, use `type: custom` and add then the **path** to the file containing your module. 
The **name** parameter is used mostly for logging purposes in the case of custom modules.

When all that you give is the name and the path, ObsidianHtml will try to import and run the function `export_module()` from the given file.

This would work like so:

``` python
from obsidianhtml.modules import ObsidianHtmlModule
class MyModule(ObsidianHtmlModule):
	pass
	
def export_module(**kwargs):
  return MyModule(**kwargs)
```

> Note that the code above will not work as the required functions and properties are not implemented.

The `**kwargs` parameter is there for future development options. Currently there is only one input that will be given, see [[#Instantiating of the module]]. Currently no other arguments are given (nor planned to be given) to the export_module function. 

When the **class** key is set, ObsidianHtml will not import and run `export_module()`  but just directly import and then instantiate the class itself. This can be useful if you want to combine multiple classes in one file.

The last key for now is **method**. When empty, the value will be `run`. 

## Required methods
### run()
The module is expected to implement at the very least the `run()` method. This method is supposed to execute the main module code.

The method is supposed to return nothing. If it does, this is considered a failure. Currently this will just be logged and the program will continue. The provided resources will be marked as failed, thus blocking any modules reliant on it downstream.

## Required properties
Properties that are required are always implemented as `@property` annotated methods.

### requires()
Should return a tuple of relative paths (posix strings) of the files that are expected to exist before the module is executed.

Empty tuples are returned when no input is required.

### provides()
Should return a tuple of relative paths (posix strings) of the files that are expected to exist before the module is executed.

Empty tuples are returned when no output is written.

### alters()
Should return a tuple of strings that denote what resources are altered by the module. Valid values are listed as:
- `"md_output_notes"`
	- The module writes in the markdown output folder, altering the content of the notes.
	- If the module writes in the md folder, but does not touch the notes themselves, then use `"md_misc"`
- `"html_output_notes"`
	- The module writes in the html output folder, altering the content of the notes.
	- If the module writes in the html folder, but does not touch the notes themselves, then use `"html_misc"`
- `"vault_notes"`
	- The module writes in the Obsidian vault.
	- Modules with this setting are disallowed unless `copy_vault_to_tempdir: True`
		- This disallow can be overwritten by adding `toggles/unsafe: True` to the config.yaml
	- If the module writes in the vault, but does not touch the notes themselves, then use `"vault_misc"`

Note that you don't need to specify whether the module writes in the module data folder, as this is apparent from the `ObsidianHtmlModule.provides` value.


## The requires, provides, alters attributes
Optionally, the module can list the inputs it expects in the `ObsidianHtmlModule.requires` tuple object, and list the outputs it provides in the `ObsidianHtmlModule.provides` tuple object.

If a module alters an existing file, you can list the file in both the `ObsidianHtmlModule.requires` and the `ObsidianHtmlModule.provides`. In fact, whenever a module is called that has an output with the same name as an existing output, the action will be logged as an `alter` action. E.g.:

```
ModuleA created [config.json]
ModuleB used config.json; created [tags.json, nodes.json] and altered [config.json]
```

Such a log will surely prove invaluable for following all the cross-interactions between modules and their input/outputs.

## State of resources
Resources are the files that can be required or provided. 

We keep track of them in a dict. The path of the resource relative to the module_data folder is the key. The value is an instance of the `ResourceListing` dataclass. 

If a resource is not in the dict it is seen as "absent", even if the resource is present in the folder, somehow.

If a module fails, all the resources that it states it provides are marked as failed too, even if they were previously absent.  Failed resources are denoted as such with the state: `"failed"`.

Modules will not be run if the required resources are absent or in `"failed"` state.

Succesfully created resources are denoted as `"present"`.

## Run the same module multiple times
For every item in the `module` list, a new object will be created, even when the same module is listed multiple times. So the object of the first run is not the same as the object of the second run. This means that you cannot persist state within the object between runs.

It still can be useful though to have multiple run() methods combined into one module, for when one kind of functionality needs to be split up over various stages.

You can explicitly set the **method**  to have two separate functions for the first and the n-th run:

``` python
from obsidianhtml.modules import ObsidianHtmlModule
class MyModule(ObsidianHtmlModule):
    @property
    def requires(self):
        return ()
    @property
    def provides(self):
        return ()
        
	def run(self, module_data_folder_abs_path_posix_str):
		self.hi_there = "hi from the second run"
		print("hi from the first run")
	def run2(self, module_data_folder_abs_path_posix_str):
		print(self.hi_there)
	
def export_module(**kwargs):
  return MyModule(**kwargs)
```

With 

``` yaml
modules:
  - type: custom
    path: '/path/to/module/file.py'
    name: my_module
  - type: custom
    path: '/path/to/module/file.py'
    name: my_module
    method: run2
```

Should give:

``` 
hi from the first run
hi from the second run
```


# Metamodules
These modules apply to the running of other modules. They do not apply to themselves or other metamodules.

They can be either run before running a module, think of a checker module; or after a module, for example a logger. For metamodules that should be run before every module, use `ObsidianHtmlPreModule`, and use `ObsidianHtmlPostModule` for the other case.

Metamodules currently work similar to normal modules, except for:
- They only have the `provides` property, not the requires and alters properties.
- `ObsidianHtmlPreModule` will get the following extra inputs to their run method:
	- `module`: the module object that was just run
	- `result`: the value that was returned by the module object's run method
- `ObsidianHtmlPostModule` will get the following extra inputs to their run method:
	- `module`: the module object that was just run
	- `result`: the value that was returned by the module object's run method


# Persistence
By default a module will be instantiated every time is it listed in the modules / meta_modules list. You can override this by setting `ObsidianHtmlModule.persistent = True`. This is especially useful for metamodules that need to keep state, as otherwise you'd need to read+write data for every module in the list.

