# Example Site   
   
This is an example project showing off the capabilities of [Obsidian-html](https://github.com/obsidian-html/obsidian-html).   
   
In short, this code converts Obsidian notes to proper markdown, and then spits out a site like this. [You can find the generated markdown here](https://github.com/obsidian-html/obsidian-html.github.io/tree/main/md).   
   
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
## Obsidian type links   
`[[Simple Obsidian-type Link]]` translates too:   
[Simple Obsidian-type Link](Simple%20Obsidian-type%20Link.md)   
   
Aliasing also works, `[[Simple Obsidian-type Link|Same link as before]]`:   
[Same link as before](Simple%20Obsidian-type%20Link.md)   
   
As does linking to chapters `[[Long long page#Chapter of interest]]`   
[Long long page#Chapter of interest](Long%20long%20page.md#chapter-of-interest)   
   
## Proper markdown links   
There is a setting that forces Obsidian to use proper markdown notation. So this is also supported:   
   
`[Proper markdown link](proper%20markdown)`   
[Proper markdown link](proper markdown.md)   
    
 Note that spaces must be encoded in proper markdown links.   
   
## Link awareness   
A external links show up the little icon to show it:   
[https://github.com/obsidian-html/obsidian-html](https://github.com/obsidian-html/obsidian-html)   
   
When linking to new notes, and not creating them, the link will be replaced with "not_created.html", and the link will be color coded by adding `class="nonexistent-link"` to the a href:   
   
[In the end I never created this note](/not_created.md)   
   
## Link to non-markdown files   
Image files and other non-markdown files local to the given root folder get copied over to the output. Take for example: [test textfile](textfile.txt).   
   
Note that Obsidian type links will always be appended with .md if this is missing.    
   
This is the default behavior of Obsidian. You can work around this, but when you do, it is impossible to determine with 100% certainty which file is linked to.    
   
If you want to link to files that are not markdown, use proper markdown links:   
```
[[textfile.txt]] --> [textfile.txt](textfile.txt.md)
[textfile.txt](textfile.txt) --> [textfile.txt](textfile.txt)
```
   
   
   
# Code blocks   
This is built into python-markdown, and enabled by default.   
Any codeblock or codeline is excempt from modification because they get cut out of the markdown code in the beginning, and then reinserted right before the html is created.   
[Code block examples](Code%20block%20examples.md)   
   
# Html tweaks   
Quite some work has been put into the usability of the html website interface. Though if you don't like it, simply change `src/template.html` out for something more basic - or more fancy.   
   
## Click-backs   
When you open a whole chain of notes, you'll be scrolled rightward to keep up.    
Clicking on a click-back corner will align that note with the left of the screen. This allows you to move back/forward one note at a time.    
   
Of course, the scrollbar and arrow keys are available too as methods of navigation.   
   
The clickbacks are in the top right corner of every note:   
![](Pasted%20image%2020211012013603.png)   
   
## Closing tabs   
When you click on a new link in an earlier tab, all the open tabs after it will be closed.   
   
## Notice the url   
There is a `?path=` part in the link that allows you to open the same set of tabs after a refresh.