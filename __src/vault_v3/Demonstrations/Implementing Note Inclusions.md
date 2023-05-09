---
graph_name: Inclusions
tags:
- feature/parsing_markdown
- date/2022-02-04
---
> This is the documentation for [[v3.5.0]] and lower, for documentation for **v4.0.0** and higher, see https://obsidian-html.github.io/v4


# Note inclusions
Note inclusion in Obsidian allows you to include a note into another note, or just a part of a note in another note. 

It uses the same link syntax as images:
```
![[my note]]
![[my note#only this chapter]]
```

In Obsidian, included content is denoted with a differently colored background. But since we first convert Obsidian notes to markdown, and markdown does not have this capability, we can only include the content inline, so it is not visible that the content comes from another page.

## Full page inclusion
First take a look at what content is in this page: [[Test Inclusion]]. 

This will be included below by writing 
`![[Test Inclusion]]`. To make it clear where the included content begins and ends, we will write:
``` md
==---begin inclusion---==
![[Test Inclusion]]
==---end inclusion---==
```

==---begin inclusion---==
![[Test Inclusion]]
==---end inclusion---==

## Partial code inclusion
With partial code inclusion, we can reference a header, and then only that header and the content of that header is included. The content is read until the first header of the same level (h1 --> h1, h2 --> h2, etc), or lower level, is found. So, including a h1 header that has h2 header under it, will include those headers and their content too.

First take a look at what content is in this page: [[Test inclusion 2]].

Let's say that we only want the second (h2) chapter included. 
This can be done by writing 
`![[Test inclusion 2#Second chapter]]`. To make it clear where the included content begins and ends, we will write:
``` md
==---begin inclusion---==
![[Test inclusion 2#Second chapter]]
==---end inclusion---==
```

==---begin inclusion---==
![[Test inclusion 2#Second chapter]]
==---end inclusion---==



## Repeated hashtag inclusion
``` md
==---begin inclusion---==
![[Configuration Options#Operations#video_format_suffixes]]
==---end inclusion---==
```

==---begin inclusion---==
![[Configuration Options#Operations#video_format_suffixes]]
==---end inclusion---==


%%## Referenced blocks
```
==---begin inclusion---==
![[Installation#^d87747]]
==---end inclusion---==
```

==---begin inclusion---==
![[Installation#^d87747]]
==---end inclusion---==

%%

