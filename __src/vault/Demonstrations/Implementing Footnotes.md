---
tags:
- feature/parsing_markdown
- date/2022-08-26
---

# Implementing Footnotes
Footnotes are baked in to python-markdown, only that extension lacks inline footnotes.
These have been added in [[v3.2.0]].

## Normal footnotes
```md
Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: meaningful!
[^bignote]: Here's one with multiple paragraphs and code.
	Indent paragraphs to include them in the footnote.
    `{ my code }`
    Add as many paragraphs as you like.
```

Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: meaningful!
[^bignote]: Here's one with multiple paragraphs and code.
	Indent paragraphs to include them in the footnote.
    `{ my code }`
    Add as many paragraphs as you like.

## Some long text
I've added some text here to have scrolling happen.
You can ignore this.

> Mauris tincidunt semper nibh non mollis. Nunc gravida vehicula porttitor. Phasellus finibus diam non est semper cursus. Ut molestie purus vitae consequat pellentesque. Sed mattis felis at risus convallis consequat. Nunc luctus massa vel sem vulputate, vitae pellentesque mauris tincidunt. Pellentesque fringilla eu leo in dignissim. Maecenas nec sapien leo. Nullam eget ullamcorper lorem, quis viverra tortor. Proin sit amet consequat eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum ornare, est vitae varius ultrices, nisi ipsum pharetra nisi, a tempor metus neque quis erat. Curabitur tempus sem vel est ultricies convallis. Quisque elementum vulputate purus, eget euismod lorem feugiat in.
>
Vivamus vehicula, ex at pharetra venenatis, purus lorem vestibulum mi, vel suscipit tortor risus non diam. Donec at lobortis lectus. Fusce congue ipsum eget consectetur elementum. Curabitur malesuada pretium eros, ut rhoncus magna. Aenean eu sodales ligula. Cras pulvinar augue nec ipsum consequat volutpat. Phasellus ultricies mauris in nisi mattis, ut tempor magna iaculis. Etiam quis scelerisque justo, blandit blandit justo. Quisque at ante at orci lobortis pretium at a erat. Proin semper pharetra sapien nec mattis. Sed ac elementum lectus, in vehicula quam. Duis sit amet bibendum neque. Morbi venenatis justo dui, varius gravida nibh egestas a. Etiam luctus erat sed feugiat iaculis.
>
Sed ut ipsum sit amet tellus dapibus pellentesque. Ut sem quam, ultrices in interdum sit amet, sollicitudin nec diam. Aenean sit amet vulputate metus, pharetra venenatis eros. Duis tincidunt quam turpis. Nunc et arcu elit. Nunc vitae purus ut dui tincidunt maximus. In eget tortor eu nibh venenatis fermentum. Aliquam convallis condimentum elementum. Vivamus vel risus egestas, porttitor dui non, volutpat tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.




## Inline footnotes
```md
You can also use inline footnotes. ^[notice that the carat goes outside of the brackets on this one.]
```

You can also use inline footnotes. ^[notice that the carat goes outside of the brackets on this one.]



