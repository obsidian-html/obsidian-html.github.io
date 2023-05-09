---
tags:
- type/instruction
- type/styling
- date/2022-04-24
---
   
> This functionality has been added in version [v2.1.0](/not_created.md) and rewritten in [v3.0.0](/not_created.md).   
> It is still in beta, so let us know if you are having issues with it or want added functionality: [Report Issues & Request features](../../General%20Information/Report%20Issues%20%26%20Request%20features.md).   
   
See also [Graph view](../../Configurations/Features/Graph%20view.md).   
   
## Passing in a custom template   
If we look at the [configuration for graph view](../../Configurations/Features/Graph%20view.md), then we see the 'templates' key:   
   
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
   
   
The built-in templates can be found here:[2d](https://github.com/obsidian-html/obsidian-html/blob/master/obsidianhtml/src/graph/default_grapher_2d.js) or [3d](https://github.com/obsidian-html/obsidian-html/blob/master/obsidianhtml/src/graph/default_grapher_3d.js).    
   
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
   
The line `fetch(args.data).then(res => res.json()).then(data => {` will load the contents of the file in the `args.data` filepath and convert the json in that file to a js object called `data`. Once that is done we create our graph.    
   
Note that the graph is saved to `window.ObsHtmlGraph.graphs[args.uid].graph`, this is ideal because then the graph can be cleaned up when the user toggles between different graphers. (But honestly this is probably not a very big issue if it does not work).    
   
Whilst that is the shared location, we can use the local `g` for brevity. Note that `g` is a collection object (dict), and `g.graph` is the actual graph. That will be of importance once we start to do more complex things.   
   
That is all there is to the custom graph for now.   
   
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
See the [Minimal functional example](#minimal-functional-example) section.  Below we will add some functionality to inch closer to a useable example.   
   
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
			.onNodeRightClick(node => {
				g.current_node_id = node.id;
			})
```
   
   
This will change the value of the global `current_node_id` when right clicking on a node, which we can then use to color our nodes:   
   
``` js

			.nodeColor((node) => {
			   if (node.id == g.current_node_id){
				   return '#ff0000'
			   }
			   return '#546bdd'
			})
```
   
   
Note that we now use `g.current_node_id` instead of `args.current_node_id`.    
   
`args.current_node_id` will contain the node that the page thinks is the current node (for the page). We can set `g.current_node_id` to this value upon loading the graph, so we start out with the correct node highlighted. After that, the right clicks will edit this `current_node_id` value, but leave  `args.current_node_id` untouched.   
   
To do this, simply add this line at the start of your function (after creating `g`):   
``` js
	// load starting node into global current_node_id
	g.current_node_id = args.current_node_id
```
   
   
   
All together the template now looks like this:   
   
``` js
// This function is called by obshtml when it wants to open the graph
function run(args) {
    if (window.ObsHtmlGraph.graph_dependencies_loaded['custom'] == false){
        // load the dependency and when done run initGraph(args)
        load_script_on_demand(
            '//unpkg.com/force-graph', initGraph, [args]
        )
        // tell obshtml that the dependencies have been loaded, so that they will not be loaded again a next time
        window.ObsHtmlGraph.graph_dependencies_loaded['custom'] = true;
    }
    else {
        // just run directly
        initGraph(args)
    }
}

function initGraph(args) {
    // open div right before loading the graph to avoid opening an empty div
    args.graph_container.style.display = "block";

    // Load data then start graph
    fetch(args.data).then(res => res.json()).then(data => {
        let g = window.ObsHtmlGraph.graphs[args.uid];
    
        // load starting node into global current_node_id
        g.current_node_id = args.current_node_id
    
        g.graph = ForceGraph()
            (args.graph_container)
            .graphData(data)
            .nodeLabel('id')
            .width(args.width)
            .height(args.height)
            .nodeColor((node) => {
                if (node.id == g.current_node_id){
                    return '#ff0000'
                }
                return '#546bdd'
             })
             .onNodeRightClick(node => {
                g.current_node_id = node.id;
            });
    });
}

// export the run() method so that it can be called by obshtml
export { 
    run
};
```
   
   
This will now give you a graph where the current page is highlighted, and you can right click on other nodes to highlight them.    
   
[Preview](https://obsidian-html.github.io/no_tabs/obs.html/graph/index.html?node=Homepage) (set grapher to custom in the topright).   
   
   
### Further steps   
We've now touched upon    
   
- Building and passing in a custom template   
- The args hashtable   
- Globals   
- Actions (right click)   
   
This should be enough of a basis to understand the full [2d](https://github.com/obsidian-html/obsidian-html/blob/master/obsidianhtml/src/graph/default_grapher_2d.html) default template, which contains way more such as:   
   
- link colors   
- text below the nodes   
- advanced styling of the selected node using html5 canvas code   
- opening links   
   
Make sure to also check out the force-graph docs, which contains many examples. Below is some more in depth information on the functions and globals being used. If you have any questions, be sure to drop by and make an issue [Report Issues & Request features](../../General%20Information/Report%20Issues%20%26%20Request%20features.md), even if it is just for a question on how to configure things!