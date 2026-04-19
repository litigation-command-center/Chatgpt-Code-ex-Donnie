export function buildHybridIndex(graph: any, embeddings: any[]) {
  return {
    graph_nodes: graph.nodes,
    graph_edges: graph.edges,
    vector_index: embeddings,
    mode: "graph_plus_vector"
  };
}
