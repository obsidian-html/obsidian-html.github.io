---
graph_name: Auto push site using Git on Linux
tags:
- type/automation
- date/2022-02-04
---
> This is the documentation for [[v3.5.0]] and lower, for documentation for **v4.0.0** and higher, see https://obsidian-html.github.io/v4


# Auto push site using Git on Linux

``` bash
# Config
git_output="/home/user/git/obsidian-html.github.io"
obsidian_folder="/home/user/git/obsidian-html"

# Move to output folder and make sure it is up to date
cd $git_output
git pull

# Remove all files except .git/ and README.md
echo "Will delete previous output:"
find . ! -path "./.git/*" ! -name ".git" ! -name README.md
echo "Continue? (y/n)"
read yn

if [ "$yn" != "y" ]; then
	echo "Aborted"
	exit 0
fi

find . ! -path "./.git/*" ! -name ".git" ! -name README.md -delete

  
# Convert Obsidian to HTML
cd $obsidian_folder
python -m obsidianhtml -i local_configs/example_site.yml
# ^ the config file will output the html to $git_output

if [ $? -ne 0 ]; then
	echo "Python script failed. Exited."
	exit 1
else
	echo "Successfully created html code"
fi

# Push changes
cd $git_output
mv html/* ./
rm -rf html/

git add . --all
git commit -m "autopush"
git push
```

