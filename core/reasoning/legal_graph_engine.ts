export interface LegalNode {
  id: string;
  type: "statute" | "case" | "rule";
  weight: number;
  content: any;
}

export interface LegalEdge {
  from: string;
  to: string;
  type: "interprets" | "limits" | "conflicts_with" | "supports";
}

/**
 * Core reasoning engine:
 * Traverses legal graph using weighted authority + edge semantics.
 */
export function evaluateLegalGraph(
  nodes: LegalNode[],
  edges: LegalEdge[],
  queryNodeId: string
) {
  const visited = new Set<string>();

  function traverse(nodeId: string, path: string[] = []) {
    if (visited.has(nodeId)) return [];
    visited.add(nodeId);

    const outgoing = edges.filter(e => e.from === nodeId);

    let results: any[] = [];

    for (const edge of outgoing) {
      const nextPath = [...path, edge.type];

      results.push({
        path: nextPath,
        node: edge.to
      });

      results = results.concat(traverse(edge.to, nextPath));
    }

    return results;
  }

  return traverse(queryNodeId);
}
