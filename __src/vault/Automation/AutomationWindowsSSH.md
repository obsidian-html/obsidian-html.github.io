
---
graph_name: Auto push site using Git on Windows
tags:
- type/automation
- date/2022-02-04
---

# Auto push site to a local webserver on Windows
This is a nice method if your webserver is reachable over SSH from your workstation. Otherwise, I advise using the [[AutomationWindows|Git method]] or something along those lines.

> I did not feel like rewriting this script. This is just here as a reference. Be sure to update all the hardcode values for something that makes sense for your environment.

``` powershell
Function Publish-Obsidian {

	param(
		$PrivateKeyPath = $script:PrivateKeyPath
		$ConfigFilePath = "C:\Users\Installer\Documents\ObsidianServer\configs\devfruits.yml"
	)
	

	$origin = pwd
	
	# Convert Obsidian to HTML
	cd "C:\Users\Installer\Documents\git\obsidian-html"
	python -m obsidianhtml -i $ConfigFilePath
	
	if (-not $?){
		Write-Error "Python script failed. Exited."
		cd $origin
		return $false
	}
	
	# Delete files on the server
	[System.IO.File]::WriteAllLines("$($env:TEMP)\_emptydevfruits.sh", "rm -rf /home/web/www/devfruits/*")
	plink -batch -i $PrivateKeyPath user@webserver -m "$($env:TEMP)\_emptydevfruits.sh"
	
	# Upload new files
	pscp -r -i $PrivateKeyPath C:\Users\Installer\Documents\ObsidianServer\LocalDevfruits\output\html\* user@webserver:/home/web/www/devfruits/
	
	cd $origin
}
```

[[Automate website deployment|Other ways of pushing websites]]
