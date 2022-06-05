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