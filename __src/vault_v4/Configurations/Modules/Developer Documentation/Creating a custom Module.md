# Introduction
This page will go through the creation of a module that will print hello world, and go through most of the basic motions of modules in the process, such as loading the module, providing configuration to your module, and writing and reading [[Module file|module files]].

You should know that the [[Module Design]] page exists, consult that page if you want to know more details on a subject discussed here.

The module we will be creating will be an [[Built-in versus External modules|external module]], as opposed to a built-in one. The differences are mostly on the point of the python module imports and the way the module is loaded, other than that built-in modules and external modules are built in the same way.

>[!info] Using a language other than Python
>If you want to write a module using a different programming language, you can use the built-in BinaryModule to call your compiled binary. In that case you don't have to write any Python yourself. Read more here: [[Running a binary module]].

# Create a basic module
Let's call our new module 

Let's start with an empty module class and call the module class **CustomModule**. This is the bare minimum that we need to run a module and have it be accepted by ObsidianHtml:

``` python
from obsidianhtml.core.FileObject import FileObject
from obsidianhtml.modules.base_classes import ObsidianHtmlModule


class CustomModule(ObsidianHtmlModule):
	# (1) Required properties
    @property
    def requires(self):
        return tuple([])

    @property
    def provides(self):
        return tuple([])

    @property
    def alters(self):
        return tuple([])

	# (2) Required methods
    def accept(self, module_data_folder):
        return

    def integrate_load(self, pb):
        pass

    def integrate_save(self, pb):
        pass
        
	# (3) Main method
    def run(self):
		 pass
```

We will now first concern ourselves with getting the module up and running, for more information on the boilerplate code, see:
- (1) [[Module Design#Required properties]] 
- (2) [[Module Design#Required methods]]

You can also look at the code of the parent class here, which might be elucidating:
- https://github.com/obsidian-html/obsidian-html/blob/master/obsidianhtml/modules/base_classes/obsidianhtml_module.py

Create a new file in your favorite code editor, I will create the file here: `/home/user/custom_module.py`, and use this path in the rest of the walkthrough.

Copy paste the code block above into the new file.

Then, in your file,  change the `run` method to this and save the file:
``` python
def run(self):
    print("hello world")
    exit(0)
```

This will make it very clear to us that our module has run. It also exits the program right after, so that we don't have to worry about all the code that is executed after it.

# Load your module

Create a new config.yml and fill it with this config (change the path to work for your setup):
``` yaml
module_list:
  preparation:
    - name: custom_module
      file: /home/user/custom_module.py
      description: just learning how to make modules
```

What this will do is overwrite the entire default module_list, so that only our own module is executed.

If you run ObsidianHtml now, with this config, e.g. through `python -m obsidianhtml -i ~/test_config.yml`, then you should get this error:

```
AttributeError: module 'custom_module' has no attribute 'export_module_class'
```

This is because we have told ObsidianHtml in which file the module class is located, but not what the class is called. 

We can fix this in one of two ways.

The first option is to add the function that the error talks about, and have it return our class:
``` python
def export_module_class():
	return CustomModule
```

The other is to define the module class name in the config yaml.
``` yaml
module_list:
  preparation:
    - name: custom_module
      module_class: CustomModule
      file: /home/user/custom_module.py
      description: just learning how to make modules
```

Both should fix the error and render:

```
hello world
```

Success!

# Pass in configuration
Maybe other users want to say hello to just their mom, not the entire world. Let's add a configuration setting so that everyone can say hello to whomever they like.

Add the following to your config.yaml:

``` yaml
module_config:
  custom_module:    # should be the same as the value for "name" under module_list
    hello_target:   # name of the config key
      value: 'mom'  
```

And run again.

You should get this result (last line):
```
Exception: Module config key "hello_target" is unknown to module custom_module (CustomModule)
```

Oh no! (j/k, I do this on purpose). 

We still need to configure something in the module class.
Edit your class to include the `define_mod_config_defaults` method, so you get something like the code below:

``` python
class CustomModule(ObsidianHtmlModule):

    def define_mod_config_defaults(self):
        self.mod_config["hello_target"] = {
            "value": 'world',           # default value
            "description": "Who/what to say hello to.",
        }
    # ... rest of class excluded for brevity!
```

And, what we forgot to do before, is to use the value. We can read mod_config values using the built-in `self.value_of()` method.

Edit the run method to look like this:

``` python
class CustomModule(ObsidianHtmlModule):
	# ... rest of class excluded for brevity!
   def run(self):
        print(f'hello {self.value_of("hello_target")}')
        exit(0)
```

Now we finally get:
```
hello mom
```

# Write module output
We can write to the [[Module data folder]] using `self.modfile("file_name.txt", value).write()`.

Read more on reading and writing modfiles here:
- [[Module Design#Reading and writing modfiles]]

Change the `run` method to the following:

``` python
    def run(self):
        # write modfile
        self.modfile("hello.txt", f'hello {self.value_of("hello_target")}').write()

        # print module data folder path
        print(f"module data folder: {self.module_data_folder}")

        # list contents of the module data folder
        import os
        print(os.listdir(self.module_data_folder))
        exit(0)
```

When we run the program again, we get the following error:

```
Exception: ModuleMisConfiguration: Module custom_module writes to hello.txt but this is not reported in self.provides.
```

As we know the module data folder in the module, we could just write directly to this folder, and bypass the `self.modfile()` way of writing files. Though as you can already tell, there are a number of integrations hooked into the modfile object, to ensure that we follow module conventions. 

One of those conventions is that we declare which files we expect to exist when we run the module (`requires`), and which files we provide by running the module (`provides`).

Change the `provides()` method to the following:

``` python
    @property
    def provides(self):
        return tuple(["hello.txt"])
```

When we now run the program again, we get this output:

```
module data folder: output/mod
['hello.txt', 'guid.txt', 'user_config.yml', 'arguments.yml', 'config.yml']
```

You can inspect the contents of this folder and the hello.txt file for yourself.

You can see there are also some other files created.

`arguments.yml` contains all the arguments passed into the program on the commandline, in our case:

```
command: convert
config_path: /home/user/test_config.yml
```

`user_config.yml` just holds the same contents as our passed in test_config.yml. `config.yml` holds the default config merged with the user config, derriving the final config that should be used by the program.

`guid.txt` is used to identify one run from the other. Currently this is only used to clean up certain log files (not created with the current configuration). We can ignore that for now, but know it exists if you ever need this information for your own module.

To read the arguments in our module, change the `run` method to the following:

``` python
    def run(self):
        # read arguments.yml modfile
        arguments = self.modfile("arguments.yml").read().from_yaml()
        print(arguments)
        exit(0)
```

Also update the `requires()` method:

``` python
    @property
    def requires(self):
        return tuple(["arguments.yml"])
```

When we run the program, we get the following:

```
<obsidianhtml.modules.lib.hash_wrap object at 0x7f23b09a9120>
```

Not what you might expect. Both the `.from_json()` and `.from_yaml()` methods will wrap any dict in a hash_wrap object. This is done so that we can pass in the dict to cached functions without getting the "unhashable" error caused by dicts not being hashable. The hash_wrap object is hashable, even though it's just an object containing a dict. 

In most important ways the hash_wrap object behaves the same as a dict, but not the `.__repr__()` function, to make it clear that we are not dealing with an actual dict. This is valuable information when doing more exotic actions with dicts.

To get the actual dict, just call `.unwrap()`:

``` python
    def run(self):
        # read arguments.yml modfile
        arguments = self.modfile("arguments.yml").read().from_yaml()
        print(arguments.unwrap())
        exit(0)
```

> You could also write 
> `arguments = yaml.safe_load(self.modfile("arguments.yml").read().text())`, though that might be a bit verbose.

Now we get:

``` json
{'command': 'convert', 'config_path': '/home/user/test_config.yml'}
```


# Conclusion
That's it for this tutorial for now. You can do the most basic reading/writing and configuring. 

The goal is to to not make basic module function any more complex than this (unless you want to do very complicated things...)

For other topics, look into:
- [[Stashing]]
- [[Persistence]]

And just peruse the built-in modules for what is done there:
- https://github.com/obsidian-html/obsidian-html/tree/master/obsidianhtml/modules/builtin

