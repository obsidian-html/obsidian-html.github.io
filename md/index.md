# Example Site   
   
This is an example project showing off the capabilities of [Obsidian-html](https://github.com/obsidian-html/obsidian-html).   
   
In short, this code converts Obsidian notes to proper markdown, and then spits out a site like this. You can find the generated markdown here: [To be created](/not_created.md).   
   
> All credit to this site's design goes to Andy Matuschak. I basically [stole his design](https://notes.andymatuschak.org/Evergreen_notes) because I think it is perfect.   
   
   
# Basics   
```
One enter
translates to
a new line, just like in Obsidian!
```
   
One enter   
translates to   
a new line, just like in Obsidian!   
   
# Links   
`[[Simple Obsidian-type Link]]` translates too:   
[Simple Obsidian-type Link](Simple%20Obsidian-type%20Link.md)   
   
As does using a `[Proper markdown link](proper%20%markdown)`:   
[Proper markdown link](proper%20markdown)   
   
Aliasing also works, `[[Simple Obsidian-type Link|Same link as before]]`:   
[Same link as before](Simple%20Obsidian-type%20Link.md)   
   
As does linking to chapters `[[Long long page#Chapter of interest]]`   
[Long long page#Chapter of interest](Long%20long%20page.md#chapter-of-interest)   
   
And external links show up the little icon to show it:   
[https://github.com/obsidian-html/obsidian-html](https://github.com/obsidian-html/obsidian-html)   
   
When linking to new notes, and not creating them, the link will be replaced with "not_created.html", and the link will be color coded by adding `class="nonexistent-link"` to the a href:   
[In the end I never created this note](/not_created.md)   
   
   
   
# Html tweaks   
## Try out the click-backs to see what they do   
They are in the top right corner of every note:   
![](Pasted%20image%2020211012013603.png)   
   
You can also just use the scroll bar or the arrow keys if you want   
   
## Notice the url   
There is a `?path=` part in the link that allows you to open the same set of tabs after a refresh.