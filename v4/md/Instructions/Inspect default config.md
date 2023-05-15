---
{}
---
# Inspect default config   
   
The default config as defined on this site might differ from the default config in your version of Obsidian. This can be because you are using an older version, or because the documentation has become outdated.   
   
This site will always track the config as configured in the master brach on github. Thus, the config might deviate from the latest pip package. This is done so that documentation can be done while developing, which greatly reduces the effort of keeping up to date documentation.   
   
To get the default config used by your installation of ObsidianHtml, run:   
   
``` bash
obsidianhtml export default-config
```
    
   
> Tip: run `obsidianhtml export default-config -o config.yml` to get a config file with all possible inputs.    
   
Note that the inputs that need to be filled in always are marked with `'<REQUIRED_INPUT>'`.