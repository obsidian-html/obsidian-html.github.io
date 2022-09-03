---
tags:
- type/instruction
- date/2022-02-12
---

# Run custom code
These steps describe how to install the requirements and use obsidianhtml from the code, instead of installing it as a package. 

This way you can quickly test changes and/or customize the code to your liking.

For the normal installation process, follow [[Installation]]. If you are asked to install the latest working version, follow [[Install a different version]].

``` bash
# Get the code
# Note that the master branch is work in progress! Code might be broken. 
# Move into a release branch if you want fully tested code instead.
git clone git@github.com:obsidian-html/obsidian-html.git

# Move into folder
cd obsidian-html

# Install all the dependencies of the package, and the package itself.
# You only need to do this once.
pip install .

# Run ObsidianHtml from code (so not via the package)
python -m obsidianhtml -i /path/to/config.yml
```