export function searchLegalSystem(query: string, index: any) {
  const graphMatches = index.graph_nodes.filter((n: any) =>
    JSON.stringify(n).includes(query)
  );

  const vectorMatches = index.vector_index?.filter((v: any) =>
    v.text?.includes(query)
  );

  return {
    graph_results: graphMatches,
    semantic_results: vectorMatches || []
  };
}
