---
tags:
- type/automation
- date/2022-02-04
---
   
# Auto push site to a local webserver on Linux   
This is a nice method if your webserver is reachable over SSH from your workstation. Otherwise, I advise using th [Git method](../../Resources/Example%20site/esAutomationLinuxGit.md) or something along those lines.   
   
``` bash
# Config
obsidian_folder="/home/user/git/obsidian-html"
output_folder="/home/user/git/obsidian-html/local_output"

config_file="/home/user/git/obsidian-html/local_configs/devfruits.yml"

target="user@webserver"
web_folder="/home/web/www/devfruits"

# Convert Obsidian to HTML
cd $obsidian_folder
python -m obsidianhtml -i $config_file

if [ $? -ne 0 ]; then
	echo "Python script failed. Exited."
	cd $origin
	exit 1
else
	echo "Successfully created html code"
fi

# Remove previous files
ssh $target rm -rf "$web_folder/*"

# Upload new files
scp -r "$output_folder/html/*" "$web_folder/"
```
   
   
[Other ways of pushing websites](../../Resources/Example%20site/esAutomation.md)