---
graph_name: HTML tweaks
tags:
- feature/html_output
- type/styling
- date/2022-02-04
---
   
# Html tweaks   
Quite some work has been put into the usability of the html website interface. Though if you don't like it, simply change `src/template.html` out for something more basic - or more fancy.   
   
If you use the pypi package, this becomes more difficult, so the option to define your own template has been added to the configuration file: [Configuration Options#Html Template Path Str](../Configurations/Configuration%20Options.md#html-template-path-str).   
   
## Finding notes   
Use the [Graph view](../Configurations/Graph%20view.md), [Backlinks](../Configurations/Backlinks.md), or [Tags Page](../Configurations/Tags%20Page.md) to find other notes, or just follow the links on the note that you're on.   
   
## Header links   
Hover over any header to see a chain link icon. Clicking on this will send you to the page and scroll to the header location.   
   
## Scrolling notes   
When you open a whole chain of notes, you'll be scrolled rightward to keep up.   
   
- To move back to the beginning, keeping all notes open, press `1`   
- To move back to the beginnning, closing all notes, click on the link in the top left (ObsidianHtml/Documentation)   
- To move left/right by one note, press `,` or `.`   
   
Of course, the scrollbar and arrow keys are available too as methods of navigation.   
   
## Click-backs   
Clicking on a click-back corner will align that note with the left of the screen. This is a different way to move back/forward one note at a time.    
   
The clickbacks are in the top right corner of every note:   
![](../Resources/img/Pasted%20image%2020211012013603.png)   
   
## Closing tabs   
When you click on a new link in an earlier tab, all the open tabs after it will be closed.   
   
## Notice the url   
There is a `?path=` part in the link that allows you to open the same set of tabs after a refresh.    
   
## Graph view   
Read more [Graph View](../Configurations/Graph%20view.md).