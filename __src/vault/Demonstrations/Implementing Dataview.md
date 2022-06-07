---
tags:
- type/test_page
- date/2022-06-07
---

# Implementing Dataview

``` dataview
table version_type
from "Changelog"
sort version_type asc
```


``` dataview
table graph_name
from "/"
where graph_name != null
sort graph_name asc
```
