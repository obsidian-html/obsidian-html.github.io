---
tags:
- date/2022-05-06
- type/instruction
---
   
# Install a different version   
When you make a feature request or a bug report, often you'll be asked to check if the latest changes made to the code solve your issues.  These changes won't be in a release yet, so you'll have to install them in a slightly different way.   
   
If you want to clone the git code, make changes, and then run your own custom code, take a look here: [Run custom code](../Instructions/Run%20custom%20code.md).   
   
## Install master branch   
Run the following command in your terminal. This should remove the installed version and replace it with the version that is under development.   
   
```shell
pip uninstall obsidianhtml
pip install git+https://github.com/obsidian-html/obsidian-html.git
```
   
   
## Install a different branch   
Append the command above with `@branch_name`, for example:   
``` bash
pip uninstall obsidianhtml
pip install git+https://github.com/obsidian-html/obsidian-html.git@shutil_test
```
   
   
We often add a test string so you can double check that you are running the correct code. In the above example (which will probably not exist anymore when you read this), running `obsidianhtml --test` will give:   
```
$ obsidianhtml --test                                                                                                                                   
test 3.2.0 shutil test
```
