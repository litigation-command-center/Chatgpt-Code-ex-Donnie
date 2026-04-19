import { evaluateLegalGraph } from "./legal_graph_engine";
import { rankPaths } from "./authority_weighted_traversal";

/**
 * Entry point for legal reasoning queries.
 */
export function runLegalQuery(graph: any, startNodeId: string) {
  const paths = evaluateLegalGraph(graph.nodes, graph.edges, startNodeId);

  const ranked = rankPaths(paths, graph.nodeMap || {});

  return {
    raw_paths: paths,
    ranked_paths: ranked
  };
}
