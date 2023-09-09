---
tags:
- feature/parsing_markdown
- date/2022-02-04
---
   
>[!important]   
> This is the documentation for [v3.5.0](../Changelog/v3.5.0.md) and lower, for documentation for **v4.0.0** and higher, see [https://obsidian-html.github.io/](https://obsidian-html.github.io/)   
   
   
# Images   
## Obsidian type image links    
`![[Resources/img/obsidian-html-logo-sq.png|300]]`   
<img src="../Resources/img/obsidian-html-logo.png" width="300" alt="" title="" />   
   
`![[obsidian-html-logo-sq.png]]`   
![](../Resources/img/obsidian-html-logo-sq.png)    
## Proper markdown image links   
`![](Resources/img/obsidian-html-logo.png)`   
![](../Resources/img/obsidian-html-logo.png)   
   
`![200](obsidian-html-logo.png)`   
<img src="../Resources/img/obsidian-html-logo.png" width="200" alt="" title="" />   
   
## Alt text and size   
`![[Resources/img/obsidian-html-logo-sq.png|alt|100]]`   
<figure>   
  <img src="../Resources/img/obsidian-html-logo-sq.png" width="100" alt="alt" title="alt" />   
  <figcaption>alt</figcaption>   
</figure>   
   
   
`![alt|100](Resources/img/obsidian-html-logo-sq.png)`   
<figure>   
  <img src="../Resources/img/obsidian-html-logo-sq.png" width="100" alt="alt" title="alt" />   
  <figcaption>alt</figcaption>   
</figure>   
   
   
   
## External images   
`![](https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/ObsidianOregon.jpg/480px-ObsidianOregon.jpg)`   
   
![](https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/ObsidianOregon.jpg/480px-ObsidianOregon.jpg)   
   
## Resizing large images   
`![[wide-image.jpg]]`   
   
![](../Resources/img/wide-image.jpg)   
   
`![[wide-image.jpg|300]]`   
   
<img src="../Resources/img/wide-image.jpg" width="300" alt="" title="" />   
   
   
# Videos   
At the moment of writing mp4 and webm's are supported. If you want to use a different type, contact us via [Report Issues & Request features](../General%20Information/Report%20Issues%20%26%20Request%20features.md).   
   
`![[chill_frog.mp4]]`   
   
<video controls><source src="../Resources/mp4/chill_frog.mp4" type="video/mp4">Your browser does not support the video tag.</video>   
   
# Audio    
##  .wav   
 `![[geese.wav]]`   
    
 <audio controls>   
    <source src="../Resources/audio/geese.wav" type="audio/x-wav">   
  Your browser does not support the audio element.   
</audio>    
   
## .mp3   
 `![[jazzy.mp3]]`   
    
 <audio controls>   
    <source src="../Resources/audio/jazzy.mp3" type="audio/mpeg">   
  Your browser does not support the audio element.   
</audio>    
   
# Pdfs   
`![[RossettiGoblinMarket.pdf]]`   
   
<embed src="../Resources/pdfs/RossettiGoblinMarket.pdf" width="90%" height="700px">