# Introduction
This page lists issues that have a simple solution (not requiring a code change to get working), and known limitations with using ObsidianHtml.

> This page is still in build up, more will be added when they pop up.

# Limitations
## Note name limitations
### You can't have a note named index/Index in the root of your vault, if it is not the entrypoint
The note that is listed as the [[Entrypoint]] will be renamed to `index.md` and by extension `index.html`. 

Having a note named `index.md` or `Index.md` will cause either that note or the entrypoint to be overwritten by the other, so naming a note `index.md` in the root of your vault is not supported.

If you have notes in subfolders, then you can get this working with a workaround.
Let's say you have a note located at `Blog/index.md`. You have another note with this content:
``` md
Go to my blog: [[index]]
```

Then in your website, this will create a link to the homepage, not `Blog/index.md`.
To fix this, change the link to be more specific:

``` md
Go to my blog: [[Blog/index]]
```







