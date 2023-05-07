---
graph_name: Automate website deployment 
tags:
- type/automation
- date/2022-02-04
---

If you have a website hosted based on an obsidian project like I do, it can be useful to create some scripting to automate pushing to your webserver.

> Note that these scripts are a starting point, and may not comply to the most up to date security considerations or other best practices!

## Using a git repo as an intermediate
The scripts below empty an *existing* git repo folder, skipping the `README.md` file and `.git` directory. The script will then generate the html code an put it in your repo, commit and push. 

This will update your git repo with the updated code for your website. This is all the script does. 

As a next step, configure a process on your webserver that periodically pulls the git repo, or configure a pipeline to start running on a git push to get this git code deployed on your server. 

- [[AutomationLinuxGit|Auto push using git (Linux)]]
- [[AutomationWindows|Auto push using git (Windows)]]

## Pushing directly to a local webserver
This is a nice method if your webserver is reachable over SSH from your workstation. Otherwise, I advise using the Git method or something along those lines.

- [[AutomationLinuxSSH|Auto push to local webserver (Linux)]]
- [[AutomationWindowsSSH|Auto push to local webserver (Windows)]]

## Using Github Pages
Use either Obsidian Git plugin or the method mentioned above to sync your vault to GitHub.
Create a new branch, e.g. gh-pages for storing the HTML files.

Go to actions, and create a workflow. We will use this workflow to generate HTML files using ObsidianHTML and publish them to your gh-pages branch. Name the file something suitable like generate.yml.

Enter the following below configuration for the workflow. If your main branch is master or something else, make the right adjustments. If your are using a different branch name for publishing, then make change that too under the Publish to Github Pages job.

This workflow also uses the development edition of Obsidian HTML, if you want to stick to the stable version, change `pip install git+https://github.com/obsidian-html/obsidian-html` to `pip install obsidian-html` under the Install dependencies and run build job.

```yaml
name: Publish to gh-pages branch

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    name: Build and Push
    steps:
      - name: Checkout main
        uses: actions/checkout@v3
        with:
          ref: main
          path: clone-path
    
      - name: Install dependencies and run build
        run: |
          cd ${{ github.workspace }}
          pip install --upgrade pip
          pip install git+https://github.com/obsidian-html/obsidian-html
          obsidianhtml convert -i clone-path/config.yaml -v
          touch html/.nojekyll
    
      - name: Publish to Github Pages
        uses: s0/git-publish-subdir-action@develop
        env:
          REPO: self
          BRANCH: gh-pages # The branch name where you want to push the assets
          FOLDER: html # The directory where your assets are generated
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }} # GitHub will automatically add this - you don't need to bother getting a token
          MESSAGE: "Build: ({sha}) {msg}" # The commit message
```

Now, go to your repository settings > Pages > Build and Deployment. Choose 'Deploy from a branch' as source, and select gh-pages as the branch.

From now, on every push to GitHub, the workflow will create the HTML pages and publish them.
