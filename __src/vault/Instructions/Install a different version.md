---
tags:
- type/instruction
- date/2022-05-06
---

# Install a different version
When you make a feature request or a bug report, often you'll be asked to check if the latest changes made to the code solve your issues.  These changes won't be in a release yet, so you'll have to install them in a slightly different way.

If you want to clone the git code, make changes, and then run your own custom code, take a look here: [[Run custom code]].

## Install master branch
Run the following command in your terminal. This should remove the installed version and replace it with the version that is under development.

```python
pip install git+https://github.com/obsidian-html/obsidian-html.git
```
