---
graph_name: Auto push site using Git on Windows
tags:
- type/automation
- date/2022-02-04
---


# Auto push site using Git on Windows
> I did not feel like rewriting this script. This is just here as a reference. Be sure to update all the hardcode values for something that makes sense for your environment.

```powershell
Function Publish-ObsidianExample {

	param(
		[switch]$NoPush
	)
	
	$origin = pwd
	
	# Remove all files in repo except .git/ and README.md
	cd 'C:\Users\Installer\Documents\git\obsidian-html.github.io'
	
	if (-not $?){
		Write-Error "Could not cd to target dir. Excited"
		cd $origin
		return $false
	}
	
	# remove all dirs except for .git
	$dirs = Get-ChildItem -Directory
	foreach ($dir in $dirs){
		if ($dir.Name -eq '.git'){
			continue
		}
		$dir | Remove-Item -Recurse -Force
	}
	
	# remove all files in root except for README.md
	$files = Get-ChildItem -File
	foreach ($file in $files){
		if ($file.Name -eq 'README.md'){
			continue
		}
		$file | Remove-Item
	}
	
	# Convert Obsidian to HTML
	cd "C:\Users\Installer\Documents\git\obsidian-html"
	python -m obsidianhtml -i "C:\Users\Installer\Documents\ObsidianServer\configs\obsidian_example.yml"
	
	if (-not $?){
		Write-Error "Python script failed. Exited."
		cd $origin
		return $false
	}
	
	# Git push
	if ($NoPush -eq $false){
		cd 'C:\Users\Installer\Documents\git\obsidian-html.github.io'
		git add . --all
		git commit -m "autopush"
		git push
	}
	
	cd $origin
}

```


