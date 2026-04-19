export function buildLegalOutcome(result: any) {
  return {
    controlling_authority: result?.ranked_paths?.[0] || null,
    reasoning_chain: result?.ranked_paths?.slice(0, 5) || [],
    confidence_model: "graph_based_deterministic",
    note: "No inference beyond graph traversal allowed."
  };
}
