/**
 * Routes incoming legal queries into structured graph operations.
 */
export function routeQuery(input: any) {
  if (!input?.nodeId) {
    throw new Error("INVALID_QUERY: missing nodeId");
  }

  return {
    type: "GRAPH_QUERY",
    nodeId: input.nodeId
  };
}
