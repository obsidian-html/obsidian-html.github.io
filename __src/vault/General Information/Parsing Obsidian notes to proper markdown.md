---
tags:
- feature/parsing_markdown
- type/general_information
- date/2022-02-12
---

The first step in the process is to convert obsidian notes to proper markdown files.

This is mainly done as a separate step so that we can use [python-markdown](https://python-markdown.github.io/) to do most of the html generation for us in the [[Creating a static html website from markdown files|next step]]. But a nice side effect is that you can also use this package to *just* generate markdown.

There are a lot of little details that go into converting Obsidian notes to proper markdown. See the [[Demonstrations|demonstration page]] for all the little things that *should just work* for this package to be worth its salt.

> This step [[Configuration Options#Compile Md|can be skipped]], if you want to convert existing markdown to an html site.
