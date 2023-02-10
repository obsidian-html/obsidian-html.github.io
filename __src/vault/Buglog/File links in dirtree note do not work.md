---
tags:
- type/bug_report
- date/2022-03-11
---

> Fixed in [[v1.1.0]]

### Issue
Using the feature [[Create Index from Directory Structure]], you can navigate your notes by the folder structure on disk. 

This works great, but if you have a non-md link, the javascript gets confused.

### Fix
Starting with [[v1.1.0]], non-md links are tagged as external, and thus avoid the tabulation javascript code that cannot deal with non-md files.


