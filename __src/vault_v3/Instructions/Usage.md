---
tags:
- type/instruction
- date/2022-02-12
---
> This is the documentation for [[v3.5.0]] and lower, for documentation for **v4.0.0** and higher, see https://obsidian-html.github.io/v4

## Introduction
After [[Installation]], we can run obsidian via the commandline like so:

``` bash
obsidianhtml help
```

That will give us the following output:

``` init
obsidianhtml version 3.2.0

Usage: obsidianhtml <command> [arguments...] [command options] [global options]

Commands:
        run             Convert vault using sensible defaults, and run a local webserver to serve it for 
                        development and testing purposes. (Very opinionated). 
                        The generated config.yml can be used in the convert command.

        convert         Just convert your vault to html and or markdown. 
                        Will use provided config exactly as provided.

        export          Used to export packaged resources
        version         Print version cleanly
        help            Show help.

Global options:
        --help, -h      Show help
        -v              Set Verbose mode

(....)
```

This gives a nice overview of what we can do.

For new users, [[Obsidianhtml Run]] was created. This allows you to only pass in the link to the note that will serve as your homepage. If that succeeds you can immediately browse your generated website. This will also create a config.yml for you, which you can use in `obsidian convert`. 

For ObsidianHtml run, see the [[Obsidianhtml Run]] page.


## Basic conversion and required configurations
As opposed to `obsidian run`, the convert command will only convert your vault to md and/or html. 

This mode is the recommended mode for creating a publishing workflow, as you don't need to start a development webserver every time that you want to convert your vault.

When we run `obsidianhtml convert`, it will look for a config file to tell it what to do, where your vault is, and where to save the output.

It will first look in the current folder for `config.yml`, then `config.yaml`, and then it will look for a config.yml file in your appdir. If you have previously ran `obsidianhtml run`, this last location will contain a config.yml file.

So you will either get:

```
No config path given, and none found in default locations.
  Use `obsidianhtml convert -i /target/path/to/config.yml` to provide input.
```

Or it will start the conversion step using the generated config of your last  `obsidian run` result. 

```
No config provided, using config at /home/user/.config/obsidianhtml/config.yml (Default config path)
> COPYING VAULT /home/user/g...
> (...)
```

When you run `obsidianhtml convert -i path/to/config.yml` it will always use that path.

### Building a config file
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

> [!important]- Important: output will be created in your cwd!
> The next step will create a folder called `output` in your current path. Move to a folder where you don't mind a folder being created. Make sure you are not in your vault when running obsidianhtml with these settings, because creating the output folder in your vault will cause errors on subsequent runs.

Running again with now the config file as an input. 
(Make sure that you give the correct path to your config file!)

``` bash
obsidianhtml convert -i config.yaml
```

You might get a lot of warnings if you use external images, or have a lot of notes linked but not created. This is expected, and such warnings can be turned off, if desired, see [[Configuration Options]]. 

> [!Tip]- Tip: verbosity
> Run `obsidianhtml convert -i config.yaml -v` to run in verbose mode to get more detail on what is going on in which note / step of the process.

The output will be located in your current directory under `output/md` and `output/html`. 

Now we can run a simple webserver to view the output. 

> Tip: open a new terminal and move to the same folder as where you ran the previous command.

Run:
``` bash
obsidianhtml serve --directory output/html --port 8000
```

Then open [http://localhost:8000](http://localhost:8000) to view the html site that was created.

Can't get this to work? Please let us know via [[Report Issues & Request features]].

## Deployment configuration
![[Deployment instructions]]

## Further configurations
Add the following settings to your config.yaml to control the behavior of obsidianhtml. 

This section only names the configurations that most often come up when setting up the config for the first time. 

For a high level overview of interesting configurations see [[Styling]], [[Modes]] and [[Features]]. For a full list of all options see [[Configuration Options]].

### Control output location
At the moment the output folder will just be created where ever we call `obsidianhtml` from, to pin down the output location, use an absolute path (starting with `<Driveletter>:/` on Windows, or starting with `/` on Linux/macOs). 

Relative paths are also allowed.

- Make sure that the `md_entrypoint_path_str` is located in `md_folder_path_str`.
- The example paths below are for Windows, for Linux, and example would be `/home/<username>/Documents/Website/<folder>`

``` yaml 
# Input and output path of markdown files
# This can be an absolute or a relative path (relative to the working directory when calling obsidianhtml)
# Use full path or relative path, but don't use ~/
md_folder_path_str:  'C:/Users/<Username>/Documents/Website/md'

# Markdown entrypoint path
# This has to be md_folder_path_str + '/index.md' when toggles/compile_md == True
# This can be an absolute or a relative path (relative to the working directory when calling obsidianhtml)
# Use full path or relative path, but don't use ~/
md_entrypoint_path_str: 'C:/Users/<Username>/Documents/Website/md/index.md'

# Output path of HTML files
# This can be an absolute or a relative path (relative to the working directory when calling obsidianhtml)
# Use full path or relative path, but don't use ~/
html_output_folder_path_str: 'C:/Users/<Username>/Documents/Website/html'
```

### Changing the layout
Read more here [[Styling]].

### Html Custom Inclusions
If you want to edit the style of the website output, you can add in css (and/or javascript) files. Read more here: [[Configuration Options#Html Custom Inclusions|Html Custom Inclusions]].

## Next steps
- [[Features]]
- [[Configuration Options]]
- [[Report Issues & Request features]]
- [[How to resolve common issues]]