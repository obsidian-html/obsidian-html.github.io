---
tags:
- type/instruction
- date/2022-02-12
---

# Installation
## Prerequisites
Before starting installation, make sure that you have Python installed (version 3.9 or more recent).

Pip is a package manager, installed along with Python, that we use to install ObsidianHtml and all its dependencies. Often you need to update pip after installing Python to have it work.

Do this by executing the following command:
``` bash
pip install --upgrade pip
```

### On Windows
Windows needs pythonnet to be installed. You should be able to do this by running this command:
``` bash
pip install --pre pythonnet
```

> In the future the `--pre` might become obsolete.

If this doesn't work consult https://stackoverflow.com/questions/67418533/how-to-fix-error-during-pythonnet-installation/67418773#67418773 **and** please let us know: [[Report Issues & Request features]] so that we can improve this instruction.

## Installation
You can choose to install ObsidianHtml via the official PyPi package, or opt to use the latest build. 

The latest build will have more features / bugs fixed, but will often also have more new bugs. We advice to use the latest published version, and only opt for the most recent version if you run into problems. 

### Latest published version
``` bash
pip install obsidianhtml
```

### Most recent build
``` bash
pip install git+https://github.com/obsidian-html/obsidian-html
```

### For developers
If you want to easily edit the code and run that, [[Run custom code|follow these instructions]].

# Uninstall
To uninstall, run:
``` bash
pip uninstall obsidianhtml
```