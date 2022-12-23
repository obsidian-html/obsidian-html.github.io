---
my-title: Inline phrases
tags:
- type/test_page
- date/2022-06-07
---
   
# Implementing Dataview   
   
> This feature is still in alpha, [join us on github](https://github.com/obsidian-html/obsidian-html/issues/271) if you want to know more.    
   
``` 
\``` dataview
table version_type
from "Changelog"
sort version_type asc
\```
    
```

``` dataview
table version_type
from "Changelog"
sort version_type asc
```
   
   
```
\``` dataview
table graph_name
from "/"
where graph_name != null
sort graph_name asc
\```
    
```

``` dataview
table graph_name
from "/"
where graph_name != null
sort graph_name asc
```
   
   
# `= this.my-title`   
   
   
Bla