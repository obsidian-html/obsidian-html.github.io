Over time, the amount of new features added to obsidianhtml has been staggering. The variety in which people use this package has also been very surprising to me.

This package was started as a personal tool to "just publish" the files in my vault to a static website, without much fuss. When I was happy with the package, and saw there was not much else out there to do what I did, I decided to publish it for all to use.

The users of this package really helped in making the html output very similar to Obsidian Publish, way more than it would've become had I written this only for myself. This did mean that a lot of features were added that the code was not designed for. This spurred a couple of massive rewrites, which certainly cleaned up the code each time, but the core issue of the overwhelming amount of features/configuration wishes was never really addressed.

This will hopefully change with the new module system. This system aims to do a couple things:

- Make a common interface through which users can (more easily) extend/change the functionality of ObsidianHtml.
- Make the code easier to follow. Each module has a defined input and output. After each module, the change in the in-/output files can be inspected. This should making debugging/developing/troubleshooting substantially easier
	- This is combined with an integrated logger, that keeps track of which module read, writes, and updates which module file.

I was planning to keep developing this system until it was completely "finished", but small changes in the master branch add up, and will over time make merging back the module_system branch a nightmare.

Thus I decided to bite the bullet and merge the module system into the master branch. A new branch is created called [v3.5.x](https://github.com/obsidian-html/obsidian-html/tree/v3.5.x), which should allow us to publish updates to pypi in case breaking issues are found.

>[!warning]
>The module system should be a **contract** between ObsidianHtml as a system, and the modules that are written for it. The module system currently is still in alpha. Any part of the system might still change until further notice, so keep that in mind before diving into the module system.

Read more on the module system here:
- [[Module Documentation]]

# Version 4.0.0
As the module system is a huge change, it makes sense to combine this with publishing version 4 of ObsidianHtml. This will mean that any settings that are currently giving a "deprecated" warning, will be deleted, and a change in your config.yml / scripting will be necessary.


