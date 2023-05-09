---
tags:
- type/bug_report
- date/2022-03-11
---

> Applies to versions: [[v1.0.2]] and earlier
> Fixed in version [[v1.1.0]]

### Issue
If a note contains a link, and this note is included in another note, that is at a different folder depth, then the relative links in the markdown output are not corrected.

### tl;dr
Just upgrade to [[v1.1.0]], it is fixed there

### Workaround for earlier versions
The workaround should be to set relative_path_md to false, forcing absolute paths in the markdown output. But this workaround did not work for version [[v1.0.1]] and lower due to a bug, this workaround is valid only for version [[v1.0.2]].

Though succesful in avoiding this bug, this setting would make the markdown output not navigable in certain markdown readers, such as gitlab and vs code preview mode.

### Fix
This issue is fixed starting from version [[v1.1.0]], as there the code for getting the included note code is aware of the page depth of the calling note, allowing for the links to be generated correctly from the get go.

### DoD
A regression test has been added for this usecase.

