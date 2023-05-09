> This is the documentation for [[v3.5.0]] and lower, for documentation for **v4.0.0** and higher, see https://obsidian-html.github.io/v4

On some systems, you might have permissions to run python, and to install to your homedir, but standard python installations are prohibited by system policies.

In that case you can manually install python by just downloading the package and using it to create a virtual environment.

These instructions are listed on this page.

## Get package
- Go to https://www.nuget.org/packages/python and click download package.
- Change the extension of the downloaded file to `.zip` and unzip the archive so that you get a folder like `C:\Users\User\Downloads\python-3.10.7`.
- Open a terminal (powershell), and run the following command to test functionality. Make sure to change the path so that it is correct for your situation (and do so for all the following commands):

``` powershell
C:\Users\User\Downloads\python-3.10.7\python.exe --version
```

## Ensure pip and install virtualenv
Pip will be preinstalled in this package, but will not function correctly. This is resolved by running ensure pip:

``` powershell
C:\Users\User\Downloads\python-3.10.7\python.exe -m ensurepip
```

As we are going to create a virtual environment, we need to use pip to install the virtualenv package.

``` powershell
C:\Users\User\Downloads\python-3.10.7\python.exe -m pip install virtualenv
```

## Create virtualenv
We are now going to create a virtualenv. This will result in a new folder in the folder that we are in currently, so use `cd` to move to a folder where you want this to be created. 

Later, we are also going to download an example vault to test obsidianhtml, and it can be nice to have the two folders next to eachother, so consider moving to a folder at a place where you keep your git projects.

The following command will create a folder called `obsenv`:

``` powershell
C:\Users\User\Downloads\python-3.10.7\python.exe -m venv obsenv
```

Wait patiently for it to finish. 

## Enter virtual env and Install obsidianhtml
The rest of the instruction will now be the same as when you installed python the normal way. Go back to [[Tutorial - Installation on Windows]] and continue with the `Enter virtualenv` section.

Note that when you enter the venv, you will no longer have to use the long path to the python.exe, as the venv will load the path to its own python executable.