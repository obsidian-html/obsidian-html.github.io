---
{}
---
   
>[!warning]   
>The module system currently is still in **alpha**. Any part of the system might still change until further notice, so keep that in mind before diving into the module system.   
   
## Introduction   
Modules are the proposed way [to keep the complexity of ever increasing amounts of features in check](../../Log/Moving%20to%20a%20Module%20system.md). It is my intent to rewrite every chunk of functionality as a module, which will have a clearly defined function, interface, input and output, and thus will be able to be swapped out by a different module that provides the same output but that produces it in a different way.   
   
Built-in modules will also be required to include testing functions.   
   
## Examples   
The module system is currently already in use (in the master branch code) for internal functions of ObsidianHtml.   
   
You can find all the modules, and the code to manage them, in this folder:   
   
- [https://github.com/obsidian-html/obsidian-html/tree/master/obsidianhtml/modules](https://github.com/obsidian-html/obsidian-html/tree/master/obsidianhtml/modules)   
   
The builtin folder contains a number of modules that are currently used:   
   
- [https://github.com/obsidian-html/obsidian-html/tree/master/obsidianhtml/modules](https://github.com/obsidian-html/obsidian-html/tree/master/obsidianhtml/modules)/builtin   
   
## Inputs and outputs   
All the inputs and outputs will be in the form of files. The default format should be pretty printed json, to be able to interoperate with different languages.   
   
One of the first modules to be written will take the given path to the user config, merge it with the default config, and write the merged config as a pretty printed json to either `md_output_folder/obs.html/module_data/config.json`  or `html_output_folder/obs.html/module_data/config.json`, depending on whether compile_html is true.   
   
### The module_data folder   
At the beginning, one folder is chosen that will contain all the in- and output files.    
   
**All** the in- and outputs will be written to that one folder. Subfolders are allowed, so one can choose to write to `html_output_folder/obs.html/module_data/md/...`  and `html_output_folder/obs.html/module_data/html/...` to discern similar outputs at different phases of the compilation.   
   
## Module structure   
A module is any class that extends the `obsidianhtml.modules.ObsidianHtmlModule` abstract base class, e.g.:   
   
``` python
from obsidianhtml.modules import ObsidianHtmlModule
class MyModule(ObsidianHtmlModule):
	pass
```
   
   
## Instantiating of the module   
The module will be instantiated by ObsidianHtml with the following input:   
   
- The parameter `module_data_folder` will be passed in, which is the absolute path in the form of a posix string pointing to the folder that was chosen to hold all the in- and outputs for the various modules.   
- `module_name` will be passed in. This is the name that you give in the `modules` list (see below), and can be considered a dog-tag, or alias. Not be confused with `ObsidianHtmlModule.module_class_name`, which will also be set, and which is the module class's name as defined in the python code (alias for `self.__class__.__name__`).   
- `persistent` (bool) will be passed in, denoting on whether the module object will be stored for later retrieval, or be a one-use instance.   
   
All other input should be read from the module data folder.   
   
### Overwriting the abstract base class's `__init__` method   
You shouldn't, really. Though perhaps there is some very special reason that you need to alter the init method.    
   
When overwriting this method, be sure to follow the same input scheme, and to call the ABC's init function:   
``` python
def __init__(self, **kwargs):
    # my custom code
    self.my_custom_attr = 'placeholder'
    
    # invoke parent's init method 
    super().__init__(**kwargs)
```
   
   
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
   
# Persistence   
## Run the same module multiple times   
For every item in the `module` list, a new object will be created, even when the same module is listed multiple times. So the object of the first run is not the same as the object of the second run. This means that you cannot persist state within the object between runs (unless persistence is explicitly set).   
   
To reuse a module object it has to have `persistent: True` on the first call, and on the second call.   
Take this example:   
   
``` python
from obsidianhtml.modules import ObsidianHtmlModule
class MyModule(ObsidianHtmlModule):
    @property
    def requires(self):
        return ()
    @property
    def provides(self):
        return ()
        
	def run(self):
		self.hi_there = "hi from the second run"
		print("hi from the first run")
	def run2(self):
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
    persistent: True
  - type: custom
    path: '/path/to/module/file.py'
    name: my_module
    method: run2
    persistent: True
```
   
   
Should give:   
   
``` 
hi from the first run
hi from the second run
```
   
   
If you don't set `persistent: True` on the first invocation, the module will not be stored, and thus not retrievable in the second run. If you don't set it at the second run, the module system will create a new module object, as that is the default behavior.   
   
# Metamodules   
These modules apply to the running of other modules. They do not apply to themselves or other metamodules.   
   
They can be either run before running a module, think of a checker module; or after a module, for example a logger. For metamodules that should be run before every module, use `ObsidianHtmlPreModule`, and use `ObsidianHtmlPostModule` for the other case.   
   
Metamodules currently work similar to normal modules, except for:   
   
- `ObsidianHtmlPostModule` will get the following extra inputs to their run method:   
	- `module`: the module object that was just run   
	- `result`: the value that was returned by the module object's run method   
   
To be implemented:   
```
- `ObsidianHtmlPreModule` will get the following extra inputs to their run method:
	- `module`: the module object that will be run
```
   
   
   
# Writing modules & requirements   
## Accessing config values   
You can use `self.gc()` "get config" method to load a key from the config yaml:   
``` python
class MyCustomModule(ObsidianHtmlModule):
	# <provides, requires, alters blocks> ...
	def run(self):
		if self.gc("toggles/compile_md"):
			print("do stuff")
```
   
   
Notice here the slashes, which are used to navigate the config tree elements, e.g.:   
``` yaml
toggles:
  compile_md: true
```
   
   
## Reading and writing modfiles   
   
Any file written into the `module_data_folder` is called a `modfile`. To read such a file from within your own module, see the following examples:   
   
``` python
class MyCustomModule(ObsidianHtmlModule):

	# <provides, requires, alters blocks> ...

	def run(self):
		# write simple file to module_data_folder/test.md
		self.modfile("test.md", "hi there").write()

		# convert to json
		self.modfile("test.json", ['this is', 'a list']).to_json().write()

	def run2(self):
		# retrieve contents with .text()
		print(self.modfile("test.md").read().text())

		# convert contents and retrieve them with .from_json() and .from_yaml()
		print(self.modfile("test.json").read().from_json()
```
   
   
The object returned by `self.modfile()` will do checking upon accessing the modfiles. If a modfile is read but not listed under `self.requires`, then this will lead to an error, and similarly for writing a file.   
   
>[!attention]   
> Any modules that are added in PR's that read/write modfiles with other means than `self.modfile().*.write()` and `self.modfile().read()` will be rejected.   
   
   
## Integration functions   
The module system is here to replace an older system.   
When you write custom modules, you very likely don't need to integrate with the old (`pb`) system. So you can ignore these functions, as long as you implement them (to satisfy the requirements):   
   
``` python
class MyCustomModule(ObsidianHtmlModule):
	# <provides, requires, alters blocks> ...
	# <run methods> ...
    def integrate_load(self, pb):
        pass
    def integrate_save(self, pb):
		pass
```
   
   
The requirement here is pretty clear, you will get an error if you don't implement these.