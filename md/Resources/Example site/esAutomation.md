---
tags:
- type/automation
- date/2022-02-04
---
   
# Automate website deployment   
If you have a website hosted based on an obsidian project like I do, it can be useful to create some scripting to automate pushing to your webserver.   
   
> Note that these scripts are a starting point, and may not comply to the most up to date security considerations or other best practices!   
   
## Using a git repo as an intermediate   
The scripts below empty an *existing* git repo folder, skipping the `README.md` file and `.git` directory. The script will then generate the html code an put it in your repo, commit and push.    
   
This will update your git repo with the updated code for your website. This is all the script does.    
   
As a next step, configure a process on your webserver that periodically pulls the git repo, or configure a pipeline to start running on a git push to get this git code deployed on your server.    
   
   
- [Auto push using git (Linux)](../../Resources/Example%20site/esAutomationLinuxGit.md)   
- [Auto push using git (Windows)](../../Resources/Example%20site/esAutomationWindows.md)   
   
## Pushing directly to a local webserver   
This is a nice method if your webserver is reachable over SSH from your workstation. Otherwise, I advise using the Git method or something along those lines.   
   
   
- [Auto push to local webserver (Linux)](../../Resources/Example%20site/esAutomationLinuxSSH.md)   
- [Auto push to local webserver (Windows)](../../Resources/Example%20site/esAutomationWindowsSSH.md)