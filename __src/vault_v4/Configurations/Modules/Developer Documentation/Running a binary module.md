# Introduction
If you want to write your module in another language, then you can use the binary module interface.

This page explains how this interface works.

# Configuration
## Configure your module
Binary modules make use of the `BinaryModule` module class to act as a shim between ObsidianHtml and your binary.

Here is an example of a binary being configured as a module:
``` yaml
module_list:
  preparation:
	# other modules excluded for brevity
	# (...)

    - name: get_file_list
      description: 
        - Basic file listing based on include_folder/exclude_glob combination
        - Further filtering can be done in further modules

	# binary modules can only run AFTER load_paths!
	# (otherwise the paths.json file is not yet present)
    - name: rust_example_module   
      description: Does nothing, just tests the Binary module
      binary: /home/user/git/rust/obshtml-example/target/release/obshtml-example
      #persistent: True # optional parameter
```

Note that for the binary we use config key `binary`, and not `file` as for external python modules.

To pass in `options` to your binary, use `module_config` like normal:

``` yaml
module_config: 
  rust_example_module:
    b: "rust_example_module"
```

Note that your module is itself responsible for getting this config. It will get the path to the [[Module data folder]] and a unique run id (more on that later). 

> If you use the [rust module library](https://github.com/dwrolvink/obshtml-rust/) this fetching of options will be done for you as you instantiate the `ObsidianModule` struct.

# Invocation
## Unique id
First off, note that the module can not distinguish between multiple invocations of the same binary by just the module data folder path. This is why it also gets a unique id when called, when loading the contents of `modfolder/instances/{{unique_id}}.json`, information such as persistence and module name (here: "rust_example_module") will be found.

Take this example:

``` yaml
module_config: 
  rust_example_module:
    b: "serious stuff"
  hello:
    b: "hello there"
```

and 

``` yaml
module_list:
  preparation:
	# other modules excluded for brevity
	# (...)
	
    - name: rust_example_module   
      description: Does nothing, just tests the Binary module
      binary: /home/user/git/rust/obshtml-example/target/release/obshtml-example

    - name: hello   
      description: Does nothing, just tests the Binary module
      binary: /home/user/git/rust/obshtml-example/target/release/obshtml-example
```

If the module prints `{module_name} - {option["b"]}`, then this will print out, in sequence:

```
[    Debug    ]   rust_example_module - serious stuff
[    Debug    ]   hello - hello there
```


## Accept
Before a module is run, it must "accept". This can be based on settings in the config.yml file, or the presence of other modfiles.

The invocation for accept is:
```
$BINARY_PATH accept $MODULE_DATA_FOLDER $UNIQUE_INSTANCE_ID
```

E.g.:
```
[ DEBUG ] * running: /home/user/git/rust/obshtml-example/target/release/obshtml-example accept /home/user/git/obsidian-html/output/mod 2023-05-26T23:26:26.259320_BinaryModule_rust_example_module
```

The accept module **must** return, via stdout, valid JSON in this form:
```
{
  "result": true
}
```

Extra values are allowed but currently ignored. Whitespace is irrelevant.

> As the json is read from stdout, you need to print debug info only to stderr. If you want to notify failure of your binary, use an exit code other than 0.

# Run
Run is invoked identically to accept. Output is not used at the moment, but it is parsed, and will create an error if invalid json is outputted to stdout. (Run uses the same method as accept to run the binary).

In the future, the output of the run method may be used to communicate between ObsidianHtml and the binary, but probably the instance file will be used to communicate (undecided).