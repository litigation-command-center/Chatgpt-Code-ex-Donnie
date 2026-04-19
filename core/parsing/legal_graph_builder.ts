export function buildLegalGraph(structure: any) {
  return {
    nodes: [
      ...(structure.statutes || []),
      ...(structure.cases || []),
      ...(structure.rules || [])
    ],
    edges: structure.links || [],
    graph_type: "legal_knowledge_graph"
  };
}
