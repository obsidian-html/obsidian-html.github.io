---
tags:
- type/template
- date/2022-04-24
---

# Writing a custom graph view template
> This functionality has been added in version [[v2.1.0]]
> It is still in beta, so let us know if you are having issues with it or want added functionality: [[Report Issues & Request features]].

See also [[Graph view]].

## Passing in a custom template
If we look at the [[Graph view|configuration for graph view]], then we see the template key:

``` yaml
toggles:
  features: 
    graph:
      template: 3d            # "2d", "3d", or path to own code
```

When set to either "2d" or "3d", the system will use a built-in template. ([2d](https://github.com/obsidian-html/obsidian-html/blob/master/obsidianhtml/src/graph/default_grapher_2d.html) or [3d](https://github.com/obsidian-html/obsidian-html/blob/master/obsidianhtml/src/graph/default_grapher_3d.html)). When set to anything else, the string is parsed as a path (either relative to the working directory that you run the obsidianhtml command from, or absolute). This path should then be your custom template.

## What your custom template should contain
The custom template should be valid html code. This code should at least contain a `<script></script>` block defining a `grapher(args)` function. 

This function is [called by the default obsidianhtml graphview javascript code](https://github.com/obsidian-html/obsidian-html/blob/06f8cd8896c3f00a035d6ecce8445d4462e801b9/obsidianhtml/src/graph/graph.js#L33) to load the graphview.

### args
Note the args variable, this is a hashtable containing information that is needed for most graph packages to initialize. At the time of writing the following values are passed in:

``` js
 return {
 	   'graph_container': cont, 
 	   'width': width, 
 	   'height': height, 
 	   'current_node_id':null, 
 	   'data': data, 
 	   'node': null, 
 	   'link': null,
 	   'coalesce_force': '{coalesce_force}'
    }
```

- graph_container: the object returned by calling `document.getElementById('<id-of-the-div-where-the-graph-should-be-drawn>')`
- width/height: the width and height of the container above
- current_node_id: the page is aware of which node id belongs to the page, this can be used to highlight the correct node for the page when loading the graph.
- data: the path to the graph.json, containing all the node/link data (i.e. the value of `{html_url_prefix}/obs.html/data/graph.json`)
- node/link: initially set to null, these are used for left/right click actions.
- coalesce_force: used in the default templates to control how close the nodes bunch up together. This can be configured in the config.yml

### Minimal template
So for a very basic (non-functional!) test template, we could write something like this:

``` html
<script>
    function grapher(args) {
        alert("Node id for this page: "+args.current_node_id)
    }
</script>
```

You can load in dependencies simply by adding a script tag like so:

``` html
<script src="//unpkg.com/force-graph"></script>
```

### Minimal functional template
I advice you to use the [force-graph](https://github.com/vasturiano/force-graph) package to build your graphs. It is pretty powerful and the documentation is amazing. It uses [d3-force](https://github.com/d3/d3-force) to build the graph, which can also be used directly; the expected json structure for the data is compatible along these packages.

Below is a template based on the [2d](https://github.com/obsidian-html/obsidian-html/blob/master/obsidianhtml/src/graph/default_grapher_2d.html) default template.

``` html
<script src="//unpkg.com/force-graph"></script>
<script src="//unpkg.com/d3-force"></script>
<script src="https://d3js.org/d3.v4.min.js"></script>
<script>
    function grapher(args) {
        fetch(args.data).then(res => res.json()).then(data => {
            window.Graph = ForceGraph()
                (args.graph_container)
                .graphData(data)
                .width(args.width)
                .height(args.height)
                .nodeLabel('id')
                .backgroundColor('#f4f4f4')
                .d3Force("charge", d3.forceManyBody().strength(args.coalesce_force))
                .nodeColor(() => {return '#546bdd'});
        });
    }
</script>
```

Note that this code is basically the same as [the example code of force-graph](https://github.com/vasturiano/force-graph/blob/master/example/load-json/index.html).

- Instead of `(document.getElementById('graph'))` we have `(args.graph_container)`, because obsidianhtml decides where the best location is, though you can ignore this of course.
- Instead of `const Graph =` we have `window.Graph =`, so that the Graph object is global and can be easily manipulated in other functions.
- The `args.coalesce_force` value is replaced with the value set in configurations, where the default is `-30`.

If you get to run this code, you will see a very basic graph, where clicking doesn't do anything. 

### Color the main node red
Change the .nodeColor line to this block:
``` js
 .nodeColor((node) => {
    if (node.id == args.current_node_id){
 	   return '#ff0000'
    }
    return '#546bdd'
 });
```

This will color the selected note red.

### Rightclick another node to select it
The graph still isn't very interactive, let's change that by setting right click to select the node.

In the list of `.<command>()` lines, add the following block:
``` js
    .nodeColor((node) => {
 	   if (node.id == current_node_id){
 		   return '#ff0000'
 	   }
 	   return '#546bdd'
    })
```

Note that we now use current_node_id. This is a global that makes it easier to set the current node from different sources. `args.current_node_id` will contain the node that the page thinks is the current node (for the page). We can set `current_node_id` to this value upon loading the graph, so we start out with the correct node highlighted. After that, the right clicks will edit this `current_node_id` value, but leave  `args.current_node_id` untouched.

To do this, simply add this line at the start of your function:
``` js
	// load starting node into global current_node_id
	current_node_id = args.current_node_id
```

And outside the grapher function, add this function to overwrite the default (which doesn't work for the 2d version):
``` js
    function graph_select_node(args){
        return function() {
            current_node_id = args.node.id;
            return false;
        }
    }
```

All together the template now looks like this:

``` js
<script src="//unpkg.com/force-graph"></script>
<script src="//unpkg.com/d3-force"></script>
<script src="https://d3js.org/d3.v4.min.js"></script>

<script>
    function graph_select_node(args){
        return function() {
            current_node_id = args.node.id;
            return false;
        }
    }
    
    function grapher(args) {
        // load starting node into global current_node_id
        current_node_id = args.current_node_id

        fetch(args.data).then(res => res.json()).then(data => {
            window.Graph = ForceGraph()
                (args.graph_container)
                .graphData(data)
                .width(args.width)
                .height(args.height)
                .nodeLabel('id')
                .backgroundColor('#f4f4f4')
                .nodeColor((node) => {
                    if (node.id == current_node_id){
                        return '#ff0000'
                    }
                    return '#546bdd'
                })
                .onNodeRightClick(node => {
                    args.node = node;
                    graph_select_node(args)()
                })
        });
    }
</script>
```

This will now give you a graph where the current page is highlighted, and you can right click on other nodes to highlight them. 

### Further steps
We've now touched upon 
- Building and passing in a custom template
- The args hashtable
- Overwriting functions
- Globals
- Actions (right click)

This should be enough of a basis to understand the full [2d](https://github.com/obsidian-html/obsidian-html/blob/master/obsidianhtml/src/graph/default_grapher_2d.html) default template, which contains way more such as:
- link colors
- text below the nodes
- advanced styling of the selected node using html5 canvas code
- opening links

Make sure to also check out the force-graph docs, which contains many examples. Below is some more in depth information on the functions and globals being used. If you have any questions, be sure to drop by and make an issue [[Report Issues & Request features]], even if it is just for a question on how to configure things!

## Overwrite default functions
There are a couple of functions provided by the graph.js file, which can be overwritten if you feel like it. Just add a new function with the same name to your template file, and it will be used instead.

I will list a couple of functions of interest here.

### run(uid, pinnedNode)
- uid: the unique id of the graph div and its button. the unique id is necessary for the tabs layout, and for standardization it is used for every layout.
- pinnedNode: the node id for the current page, will be null for a generated page such as the tags pages.

Run() is called when the "show graph" button is pressed. It collects the args hashtable, toggles the button, and then calls the `grapher(args)` function to load the (custom) code to load the actual graph.

Note that on the fullpage graph view, run is skipped and [grapher(args) is called directly](https://github.com/obsidian-html/obsidian-html/blob/06f8cd8896c3f00a035d6ecce8445d4462e801b9/obsidianhtml/src/graph/graph_full_page.html#L75), since no button toggle is necessary and we want to display the graph immediately.

### get_graph_args(uid)
- uid: see run()

This function provides the args variable, and is used by run(). Overwriting it will make sure that your additions/alterations will be present in every graph related function

### graph_open_link(args)
This action is called by default by the `graph_left_click()` function. It opens the link. This code will have different actions based on the layout. The tabs mode will call a function to load the new tab on the current page, all others will just open the link as normal.

### graph_select_node(args)
This functions expects `args.node.id` to be set with the id of the node that you want to select. It will then write it to the global of `current_node_id` and do a call to `Graph.refresh()`. Note that this default assumes the use of [3d-force-graph](https://github.com/vasturiano/3d-force-graph) as the 2d version doesn't have a `Graph.refresh()` method.

This function is set as the `graph_left_click()` action for the [full page graph view](https://github.com/obsidian-html/obsidian-html/blob/06f8cd8896c3f00a035d6ecce8445d4462e801b9/obsidianhtml/src/graph/graph_full_page.html#L61).

## Globals
### current_node_id
This value is the node id of the currently selected node. It is set by the grapher function (if you code this) and can be used to highlight the selected node, or be ignored. The args hashtable will contain `args.current_node_id`, which is the node id that corresponds to the page you are currently on, or, in the case of the full page view, the page on which you clicked on the graph view icon.

### Graph
This is the graph object that is created by the grapher function. It is global for the 3d function, which needs a call to `Graph.refresh()` after an action to redraw the elements (and thus reflect changes in what nodes are selected). To set the graph value, assign to `window.Graph` when creating the graph object.