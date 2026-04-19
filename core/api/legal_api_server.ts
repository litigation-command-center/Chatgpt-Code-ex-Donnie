import { runLegalQuery } from "../reasoning/legal_query_engine";
import { buildLegalOutcome } from "../reasoning/legal_outcome_builder";

/**
 * Entry API for legal system queries.
 * MUST remain deterministic and source-bound.
 */
export function handleLegalQuery(req: any, graph: any) {
  const { nodeId } = req;

  const result = runLegalQuery(graph, nodeId);

  return buildLegalOutcome(result);
}
