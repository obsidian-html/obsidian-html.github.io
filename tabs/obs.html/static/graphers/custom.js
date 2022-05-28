function run(args) {
    if (window.ObsHtmlGraph.graph_dependencies_loaded['custom'] == false){
        load_script_on_demand(
            '//unpkg.com/force-graph', initGraph, [args]
        )
        // tell obshtml that the dependencies have been loaded, so that they will not be loaded again a next time
        window.ObsHtmlGraph.graph_dependencies_loaded['custom'] = true;
    }
    else {
        initGraph(args)
    }
}

function initGraph(args) {
    // open div right before loading the graph to avoid opening an empty div
    args.graph_container.style.display = "block";

    // Load data then start graph
    fetch(args.data).then(res => res.json()).then(data => {

        // overwrites
        let g = window.ObsHtmlGraph.graphs[args.uid];
        // g.actions['select_node'] = function(args, graph){
        //     return graph_select_node_2d(args, graph)
        // }

        g.graph = ForceGraph()
            (args.graph_container)
            .graphData(data)
            .nodeLabel('id')
            .width(args.width)
            .height(args.height)
    });
}

// export the run() method so that it can be called by obshtml
export { 
    run
};