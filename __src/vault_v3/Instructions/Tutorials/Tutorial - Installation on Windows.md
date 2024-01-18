>[!important]
> This is the documentation for [[v3.5.0]] and lower, for documentation for **v4.0.0** and higher, see https://obsidian-html.github.io/

Working with Python on Windows can sometimes be a headache.

This page goes through all the steps to install obsidianhtml on a Windows machine. We will use a virtual environment for this so that you don't pollute your environment.

You can skip this step. You don't need to create a virtualenvironment for obsidianhtml to work on Windows if you have functional Python/Pip installations on the right versions. But if you are having issues with Python, or are following [[Bootstrapping Python on Windows]], then using a venv is a plus.

## Installing and or upgrading python
To install python go to https://www.python.org/downloads/ and click on the big yellow download button. A default installation will do.

> [!note]
> If you are on a system where you are not allowed to install python, follow these instructions: [[Bootstrapping Python on Windows]]

If you already have python installed, run `python --version` and check that your version is at least 3.9. If not, you will need to upgrade. Follow standard instructions on upgrating python for Windows. (Google)

## Create a virtual environment
### Prerequisites
To enter a virtual env, we need to install the virtualenv package using pip. If you have both installed already, you can skip to the next section.

Open powershell and run the following commands:

``` powershell
python -m ensurepip
python -m pip install virtualenv
```

### Create virtualenv
Next we can create a virtualenv. This will appear as a regular folder in the folder where you run the following commands. So move to a location where you don't mind a folder being created. 

Later in this tutorial we will download the example vault, so it might be good to move to a location where you keep your git projects, so they are close together.

``` powershell
python -m venv obsenv
```

Wait patiently for the above command to finish.
When done, you will notice a new folder called `obsenv`.

## Enter virtual env
To enter the virtual env, we need to execute a script that is located in the virtual env folder, like so:
``` powershell
.\obsenv\Scripts\activate.ps1
```

This will add the prefix `(obsenv)` to your prompt, letting you know that you are in the virtual env.

From this moment forward, any python/pip command will work as if you have it installed globally, but will actually use the version from the venv. 

Any pip install commands will only affect your virtualenv. Once you exit the venv and delete the obsenv folder, it will be like you never installed anything at all. This is the major benefit of using venvs.

Run the following command to double check that you are using a python version of 3.9 or higher:

``` powershell
python --version
```

## Exit virtualenv
When we ran the `activate.ps1` script, it loaded a command into our session called `deactivate`, when we run this, we will exit our virtualenv again:

``` powershell
deactivate
```

Don't do this now though, as we have more work to do.

## Install Obsidianhtml
On WIndows we need to use a special command to install pythonnet, as the version that we need is still in a pre-release state.

``` powershell
pip install --pre pythonnet 
```

Then we can install obsidianhtml itself:

``` powershell
pip install obsidianhtml
# test version
obsidianhtml version
```

> See [[Install a different version]] for more options, such as installing the pre-released version of obsidianhtml.


## Use obsidianhtml
### Clone example vault
If you have your own vault, you can start testing with that, but for the sake of this tutorial, I will use an example vault so that you can follow along.

Go to a folder using `cd` where you want to create a new folder, and then use git to clone the example vault repo.

> [!note] 
> If you don't have git installed, you can also go to https://github.com/obsidian-html/example_vault then click the green code button, select Download ZIP, and then unzip the archive to your desired location.

```
git clone https://github.com/obsidian-html/example_vault.git
```

Then move into the cloned folder:

```
cd example_vault
```

## Convert
The main mode of obsidianhtml is `convert`. This command will look for a `config.yml` file in the current folder. It will then use the settings in that file to convert your file to html.

> Alternatively you can pass the path to a config file using `-i path/to/config.yml`. 
> See for more information: [[Usage]]. 

You can create your own config file easily using [[Obsidianhtml Run]]. But for now, you will see that a config.yml already exists in our current folder, so let's use that

```
obsidianhtml convert
```

This should give the following output:
```
(obsenv) PS ~\test_obs\example_vault> obsidianhtml convert
No config provided, using config at C:/Users/User/Documents/test_obs/example_vault/config.yml. (Default config path)
> COPYING VAULT C:\Users\User\Documents\test_obs\example_vault\vault TO C:\Users\ADEF0F~1\AppData\Local\Temp\116\tmpyunxraky
Paths that will be ignored: ['C:/Users/User/Documents/test_obs/example_vault/vault/.obsidian', 'C:/Users/User/Documents/test_obs/example_vault/vault/.trash', 'C:/Users/User/Documents/test_obs/example_vault/vault/.DS_Store', 'C:/Users/User/Documents/test_obs/example_vault/vault/.git']
< COPYING VAULT: Done
> CLEARING OUTPUT FOLDERS
> CREATING OUTPUT FOLDERS
> COMPILING MARKDOWN FROM OBSIDIAN CODE (C:\Users\User\AppData\Local\Temp\116\tmpyunxraky\Home.md)
> COMPILING HTML FROM MARKDOWN CODE (C:\Users\User\Documents\test_obs\example_vault\output\md\index.md)
index.md
        > COMPILING INDEX FROM DIR STRUCTURE (C:\Users\User\Documents\test_obs\example_vault\output\html\obs.html\dir_index.html)
        < COMPILING INDEX FROM DIR STRUCTURE: Done
        > SECOND PASS HTML
        < SECOND PASS HTML: Done
< COMPILING HTML FROM MARKDOWN CODE: Done

You can find your output at:
        md: C:\Users\User\Documents\test_obs\example_vault\output\md
        html: C:\Users\User\Documents\test_obs\example_vault\output\html
```

The most important information for now is that it uses config.yml located at `C:/Users/User/Documents/test_obs/example_vault/config.yml` (first line) and that it outputted our html at `C:\Users\User\Documents\test_obs\example_vault\output\html` (last line).

### Preview site
This compiled html should be served by a webserver. If you are going to publish a website on the world wide web, I highly recommend not to use the method below, but for testing on your own environment this will do nicely.

> [!note] 
> Using a service like https://pages.github.com/ is a nice free way to quickly get a static website up and running. 

I've prepared a script that will start a local webserver at port 8000, using the folder `output/html` as the webroot. Run it like so:

```
python ./serve.py
```

Then open http://localhost:8000/ in your web browser. This should show you a website.

The website is pretty bare bones at the moment, but it serves as a good proof of concept.

