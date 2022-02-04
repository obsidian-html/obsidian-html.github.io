---
tags:
- date/2022-02-04
---
   
# Auto push site to a local webserver on Windows   
This is a nice method if your webserver is reachable over SSH from your workstation. Otherwise, I advise using the [Git method](esAutomationWindows.md) or something along those lines.   
   
> I did not feel like rewriting this script. This is just here as a reference. Be sure to update all the hardcode values for something that makes sense for your environment.   
   
``` powershell
Function Publish-Obsidian {

	param(
		$Entrypoint = "C:\Users\Installer\OneDrive\Obsidian\Notes\Devfruits Notes.md",
		$RootFolder = "C:\Users\Installer\OneDrive\Obsidian\Notes\",
		$OutputMdFolder = "C:\Users\Installer\Documents\git\obsidian-html\output\md",
		$OutputHtmlFolder = "C:\Users\Installer\Documents\git\obsidian-html\output\html\",
		$SiteName = 'Devfruits/Notes',
		$HtmlUrlPrefix = '',
		$PrivateKeyPath = $script:PrivateKeyPath
	)
	

	$origin = pwd
	
	# Convert Obsidian to HTML
	cd "C:\Users\Installer\Documents\git\obsidian-html"
	python -m obsidianhtml -i "C:\Users\Installer\Documents\ObsidianServer\configs\devfruits.yml"
	
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
   
   
[Other ways of pushing websites](esAutomation.md)