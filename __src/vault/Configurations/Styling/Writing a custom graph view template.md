---
tags:
- type/instruction
- type/styling
- date/2022-04-24
---

# Writing a custom graph view template
> **THIS PAGE IS OUTDATED SINCE [v2.4.0] to be rewritten.
> This functionality has been added in version [[v2.1.0]]
> It is still in beta, so let us know if you are having issues with it or want added functionality: [[Report Issues & Request features]].

See also [[Graph view]].

## Passing in a custom template
If we look at the [[Graph view|configuration for graph view]], then we see the 'templates' key:

``` yaml
toggles:
  features: 
    graph:
      enabled: True 
      templates:
        - id: 3d
          name: 3d
          path: builtin<3d>
        - id: 2d
          name: 2d
          path: builtin<2d>
```

The built-in templates can be found here:[2d](https://github.com/obsidian-html/obsidian-html/blob/master/obsidianhtml/src/graph/default_grapher_2d.html) or [3d](https://github.com/obsidian-html/obsidian-html/blob/master/obsidianhtml/src/graph/default_grapher_3d.html). 

When passing in a custom template, `path` should be either relative to the working directory that you run the obsidianhtml command from, or absolute, e.g.:

``` yaml
    graph:
      enabled: True           
      templates:
        - id: custom
          name: custom
          path: ../obsidian-html.github.io/__src/custom_grapher.js
        - id: 2d
          name: 2d
          path: builtin<2d>
```

Id will be used in the code to point to your custom grapher code, and name is used display your code being selected in the graph type toggle button.

## What your custom template should contain
The contents of your custom grapher code will be loaded as a javascript module and should thus be valid javascript code. When a user opens a graph with your grapher selected, ObsidianHtml will call the `run(args)` method from your file. 

It is up to your implementation to change the display of the graph div to `block` so that it becomes visible. (This is done to avoid opening an empty div when the grapher takes some time to initialize, as it looks sloppy.)

This makes the bare minimal functional code for a custom grapher to be this:
``` js
function run(args){
	args.graph_container.innerHTML = 'still not very functional';
	args.graph_container.style.display = "block";
}

// because this code is loaded as a module, we need this export statement
// in order to be able to call run(args) from elsewhere in the code.
export { 
    run
};
```

The `args` variable contains all the information that your grapher should need to make a graph. What exacly is in there will be explained further below shortly.

## Minimal functional example
First, a slightly more functional example. This one will actually draw a graph this time.

``` js
function run(args) {
    if (window.ObsHtmlGraph.graph_dependencies_loaded['custom'] == false){
        load_script_on_demand(
            '//unpkg.com/force-graph', initGraph, [args]
        )
        window.ObsHtmlGraph.graph_dependencies_loaded['custom'] = true;
    }
    else {
        initGraph(args)
    }
}

function initGraph(args) {
    args.graph_container.style.display = "block";

    // Load data then start graph
    fetch(args.data).then(res => res.json()).then(data => {
        let g = window.ObsHtmlGraph.graphs[args.uid];
        g.graph = ForceGraph()
            (args.graph_container)
            .graphData(data)
            .nodeLabel('id')
            .width(args.width)
            .height(args.height)
    });
}

export { 
    run
};
```

This time we need to load in a javascript file for our grapher to work. This is handled dynamically by the `load_script_on_demand(script_path, callback, arguments[])` function. This function loads in the script in the first argument, once that is fully loaded it will call  `callback(...arguments)`. 

To avoid loading in the external dependencies every time that we click open the graph, we keep track of whether we have loaded them in already. That is what the `window.ObsHtmlGraph.graph_dependencies_loaded['custom']` is for. The 'custom' part here should be the key that you used in the config. 

The line `fetch(args.data).then(res => res.json()).then(data => {` will load the contents of the file in the `args.data` filepath and convert the json in that file to a js object called `data`. Once that is done we create our graph. Note that the graph is saved to `window.ObsHtmlGraph.graphs[args.uid].graph`, this is ideal because then the graph can be cleaned up when the user toggles between different graphers. (But honestly this is probably not a very big issue if it does not work).

That is all there is to the custom graph.

## args
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


## Expanding on the minimal example
See the [[#Minimal functional example]] section.  Below we will add some functionality to inch closer to a useable example.

### Color the main node red
Add this block right below the `.height(args.height)` line:
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