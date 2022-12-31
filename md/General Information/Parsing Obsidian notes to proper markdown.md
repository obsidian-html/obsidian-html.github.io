---
tags:
- feature/parsing_markdown
- type/general_information
- date/2022-02-12
---
   
# Parsing Obsidian notes to proper markdown   
The first step in the process is to convert obsidian notes to proper markdown files.   
   
   
This is mainly done as a separate step so that we can use [python-markdown](https://python-markdown.github.io/) to do most of the html generation for us in the [next step](../General%20Information/Creating%20a%20static%20html%20website%20from%20markdown%20files.md). But a nice side effect is that you can also use this package to *just* generate markdown.   
   
There are a lot of little details that go into converting Obsidian notes to proper markdown. See the [demonstration page](../Demonstrations/Demonstrations.md) for all the little things that *should just work* for this package to be worth its salt.   
   
> This step [can be skipped](../Configurations/Configuration%20Options.md#compile-md), if you want to convert existing markdown to an html site.