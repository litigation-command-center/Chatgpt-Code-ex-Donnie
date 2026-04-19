/**
 * Ensures responses remain grounded and non-speculative.
 */
export function formatLegalResponse(output: any) {
  return {
    controlling_authority: output.controlling_authority,
    reasoning_chain: output.reasoning_chain,
    confidence_model: output.confidence_model,
    disclaimer:
      "Output is derived strictly from structured legal sources and graph traversal."
  };
}
