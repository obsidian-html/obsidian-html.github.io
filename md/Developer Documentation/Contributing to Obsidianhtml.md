---
tags: []
---
# Contributing to Obsidianhtml

This is as easy as creating a pull request (PR) in github. Google or ask in [Discussions](https://github.com/obsidian-html/obsidian-html/discussions) on how best to do this if you are not sure.

When writing code I ask you to keep in mind the code standards as described below. 

# Developer documentations

- [Install a different version](../Instructions/Install%20a%20different%20version.md)
- [Module Design](../Configurations/Modules/Developer%20Documentation/Module%20Design.md)

# Standards
## Code preparation prior to creating PR's

### Run `black`
To avoid contributions being hard to review because of a lot of typographic/formatting changes that do not relate to the change itself, it would be nice if we could enforce one consistent formatting scheme.

This is done by running [black](https://black.readthedocs.io/en/stable/index.html) right before committing your changes. See for more info on how you can install this and how you should run it: [https://github.com/obsidian-html/obsidian-html/blob/master/docs/developer_docs.md](https://github.com/obsidian-html/obsidian-html/blob/master/docs/developer_docs.md)

### Run `ruff`
Not mandatory, but a nice thing to do to check your work. This step will show you any obvious issues with the code base as you have it. These can be issues created by others, so only look at the issues that pertain to your changes.

This is done by running [ruff](https://beta.ruff.rs/docs/). Though you can also use pylint, or whatever linter you want. 

> As I run ruff pretty often, you are less likely to find a bunch of issues that have nothing to do with your changes, as I try to keep the output free of issues by refactors and/or adding ignore statement to the `pyproject.toml`.

See for more info on how you can install this and how you should run it: [https://github.com/obsidian-html/obsidian-html/blob/master/docs/developer_docs.md](https://github.com/obsidian-html/obsidian-html/blob/master/docs/developer_docs.md)
