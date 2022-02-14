---
tags:
- type/instruction
- date/2022-02-12
---

# Usage
After [[Installation]], we can run obsidian via the commandline like so:
``` bash
obsidianhtml
```

That will give us the following output:
``` init
Could not locate the config file config.yml.
  Please try passing the exact location of it with the `obsidianhtml -i /your/path/to/config.yml` parameter.
  
[Obsidian-html]
- Add -i </path/to/input.yml> to provide config
- Add -v for verbose output
- Add -h to get helptext
- Add -eht <target/path/file.name> to export the html template.
- Add -gc to output all configurable keys and their default values.
```

So we need to input a config file. The minimum config that you need to have obsidianhtml work is the following:

``` yaml
# The first folder that contains all obsidian files
# Use full path or relative path, but don't use ~/
obsidian_folder_path_str: '/path/to/your/vault' 

# The note that will be used as the index.html 
# should be in obsidian_folder_path_str
# Use full path or relative path, but don't use ~/
obsidian_entrypoint_path_str: '/path/to/your/vault/entrypoint.md'
```

Copy the code above into a file called `config.yaml` and fill in the correct paths.

> **Important:** the next step will create a folder called `output` in your current path. Move to a folder where you don't mind a folder being created.

Running again with now the config file as an input. 
(Make sure that you give the correct path to your config file!)

``` bash
obsidianhtml -i config.yaml
```

You might get a lot of warnings if you use external images, or have a lot of notes linked but not created. This is expected, and such warnings can be turned off, if desired, see [[Configuration Options]]. 

If the script output ends with *"Successfully created html code"* then the process should be successful though.

The output will be located in your current directory under `output/md` and `output/html`. 

Now we can run a simple webserver to view the output. 

> Tip: open a new terminal and move to the same folder as where you ran the previous command.

Run:
``` bash
python -m http.server --dir output/html
```

Then open [http://localhost:8000](http://localhost:8000) to view the html site that was created.

## Next steps
- [[Configuration Options]]
- [[Features]]
- [[How to resolve common issues]]
- [[Report Issues & Request features]]