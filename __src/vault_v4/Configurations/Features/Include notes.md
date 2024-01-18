The normal obsidian code inclusion syntax of `![[note]]` works as intended.

![[Demonstrate inclusion]]

## Include specific header
If you want to only include the text under a header called 'header', then you can use `![[note#header]]`.

If you need specificity in selecting a subheader, you can type `![[note#header#subheader]]` instead of `![[note#subheader]]` when needed.

## Show/hide inclusion in the graph view
By default, inclusions are shown in the graph view as a dotted line. To disable this (i.e. stop showing inclusions in the graph view), set the following value:

``` yaml
toggles:
  features:
    graph:
      show_inclusions_in_graph: False
```


## Wrap inclusions with div
If you want to style your inclusions differently then you can opt-in to have your inclusions wrapped with a div. 

This div gets the class `inclusion`, so if you add `.inclusion { background-color:red }` in your [[Edit HTML, CSS, JS|custom css]] you should see the inclusions have a red background.

Currently, this is still in a test phase. Once it is better tested this option will be turned on by default.

To turn on this feature ensure that you are on at least version 4.0.1 and add the following to your config.yml:
``` yaml
toggles:
  # Will wrap inclusions with <div class="inclusion">{content}</div>
  wrap_inclusions: True
```