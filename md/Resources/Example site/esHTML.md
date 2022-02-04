---
tags:
- date/2022-02-04
---
   
# Html tweaks   
Quite some work has been put into the usability of the html website interface. Though if you don't like it, simply change `src/template.html` out for something more basic - or more fancy.   
   
If you use the pypi package, this becomes more difficult, so the option to define your own template has been added to the configuration file: [https://github.com/obsidian-html/obsidian-html#use-a-custom-html-template](https://github.com/obsidian-html/obsidian-html#use-a-custom-html-template)   
   
## Header links   
Hover over any header to see a chain link icon. Clicking on this will send you to the page and scroll to the header location.   
   
## Click-backs   
When you open a whole chain of notes, you'll be scrolled rightward to keep up.    
Clicking on a click-back corner will align that note with the left of the screen. This allows you to move back/forward one note at a time.    
   
Of course, the scrollbar and arrow keys are available too as methods of navigation.   
   
The clickbacks are in the top right corner of every note:   
![](../../Resources/img/Pasted%20image%2020211012013603.png)   
   
## Closing tabs   
When you click on a new link in an earlier tab, all the open tabs after it will be closed.   
   
## Notice the url   
There is a `?path=` part in the link that allows you to open the same set of tabs after a refresh.