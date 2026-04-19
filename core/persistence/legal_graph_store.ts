export interface GraphStore {
  nodes: any[];
  edges: any[];
}

/**
 * In-memory baseline store (replaceable with DB later).
 */
let STORE: GraphStore = {
  nodes: [],
  edges: []
};

export function saveGraph(graph: GraphStore) {
  STORE = graph;
  return { status: "saved", nodeCount: graph.nodes.length };
}

export function loadGraph() {
  return STORE;
}
