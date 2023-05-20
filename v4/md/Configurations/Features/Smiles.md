---
{}
---
# Smiles   
   
> New in [v4.0.0](../../Changelog/v4.0.0.md)   
   
This feature recreates the functionality (as best we can) of the Obsidian module: [https://github.com/Acylation/obsidian-chem](https://github.com/Acylation/obsidian-chem)   
   
It uses the same package to achieve this, [https://github.com/reymond-group/smilesDrawer](https://github.com/reymond-group/smilesDrawer)   
   
>[!note]   
>This feature is disabled by default, because it is a pretty niche feature, you will have to apply the configuration below to enable it.   
   
## Configuration   
   
``` yaml
toggles:
  features:
    smiles:
      enabled: True
      theme: dark       # dark, light, oldschool, oldschool-dark, solarized, solarized-dark, matrix, github, carbon, cyberpunk, gruvbox, gruvbox-dark
      width: 100%       # XXX%, XXXpx, XXX 
      height: 200px     # XXX%, XXXpx, XXX
```
