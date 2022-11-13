> This instruction is valid from version [[v3.4.0]] onwards. 

# Introduction
If you don't want to export your entire vault, then there are options to set inclusion and or exclusion.
This is controlled by these settings:

- `included_folders`
- `exclude_subfolders`

By default, `included_folders` is set to an empty list, and consequently ignored. 
When setting values only the files in the configured folders will be added to the file tree, and thus nothing outside of those folders is exported.

If you want to export all folders, **except** for one or multiple folders, then you should set `exclude_subfolders`. 

You can also combine both settings. This will start with finding all the files in **only** the included folders, and then not adding any files that are excluded.

# included_folders
- All paths are relative to the root of the vault
- No slash in the beginning is neccessary
- No glob patterns supported
- Should be a list, so:
``` yaml
included_folders: my_folder # wrong!
included_folders:
  - my_folder               # correct
```

# exclude_glob
- Each line is handled as a glob pattern
- Starting a line with a slash will make the line match a specific folder
- Not starting a line with a slash will exclude every folder whose name matches the line
- Should be a list, so:
``` yaml
exclude_glob: stuff # wrong!
exclude_glob:
  - /private_notes
  - stuff                 # correct
```

# Examples
Given the following folder structure:
```
/path/to/vault/
  a/
    stuff/
      equations.pdf
      picture.jpg
    a_note.md
  b/
    stuff/
      book.pdf
    b_note.md
  c/
    c_note.md
  home.md
```

We will go through some usecases and provide the correct configurations.

## Include only folder /a
``` yaml
# we need to set the entrypoint to a note in the /a folder
obsidian_entrypoint_path_str: '/path/to/vault/a/a_note.md'

included_folders:
  - a
```

Leads to

```
/path/to/output/md/
  a/
    stuff/
      equations.pdf
      picture.jpg
  index.md
```

> Note that /a/a_note.md has been renamed to /index.md!

## Include everything except for /b (i.e. exclude /b)
``` yaml
# we need to set the entrypoint to a note in the /a folder
obsidian_entrypoint_path_str: '/path/to/vault/home.md'

exclude_glob:
  - /b
```

Leads to

```
/path/to/output/md/
  a/
    stuff/
      equations.pdf
      picture.jpg
    a_note.md
  c/
    c_note.md
  index.md
```

## Exclude all `stuff` folders
``` yaml
# we need to set the entrypoint to a note in the /a folder
obsidian_entrypoint_path_str: '/path/to/vault/home.md'

exclude_glob:
  - stuff
```

Leads to

```
/path/to/output/md/
  a/
    a_note.md
  b/
    b_note.md
  c/
    c_note.md
  index.md
```


## Exclude all \*.pdf files
``` yaml
# we need to set the entrypoint to a note in the /a folder
obsidian_entrypoint_path_str: '/path/to/vault/home.md'

exclude_glob:
  - *.pdf
```

Leads to

```
/path/to/output/md/
  a/
    stuff/
      picture.jpg
    a_note.md
  b/
    stuff/<empty, so not created>
    b_note.md
  c/
    c_note.md
  index.md
```

