export function weightNode(type: string): number {
  switch (type) {
    case "statute": return 100;
    case "constitutional": return 110;
    case "binding_case": return 85;
    case "persuasive_case": return 60;
    case "rule": return 70;
    default: return 0;
  }
}

/**
 * Applies authority weighting to graph traversal results.
 */
export function rankPaths(paths: any[], nodeMap: Record<string, any>) {
  return paths
    .map(p => ({
      ...p,
      score: weightNode(nodeMap[p.node]?.type || "unknown")
    }))
    .sort((a, b) => b.score - a.score);
}
