---
tags:
- type/configuration
- date/2022-03-15
---

# Relative_path_html
> New in [[v1.2.0]]

*This setting will allow you to compile the website in a way that can be browsed directly from your filesystem (i.e. without running an http server).*

*This can be useful if you want a basic website for personal use, and don't want to remember to turn on the http server every time.* 

This setting will enable [[NoTabs Mode]] and disable [[Graph view]].

> JS file fetching is not allowed via the filesystem, so these functions have to be disabled for the site to work at all in this mode.

To enable this mode, add the following to your config.yml:
```yaml
toggles:
  relative_path_html: True
```

Testing showed that this setting will also work with a webserver, but it is not intended for this use, so regression testing is absent and a general your-mileage-may-vary warning applies.