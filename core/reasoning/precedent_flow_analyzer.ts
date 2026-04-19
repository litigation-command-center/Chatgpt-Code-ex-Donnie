export function analyzePrecedentFlow(paths: any[]) {
  return paths.map(p => {
    return {
      node: p.node,
      influence_chain: p.path,
      depth: p.path.length,
      influence_type:
        p.path.includes("conflicts_with")
          ? "negative"
          : "supportive"
    };
  });
}
