import { queryLegalSystem } from "../api/legal_query_interface";
import { formatLegalResponse } from "../api/response_formatter";
import { enforceGrounding } from "../security/grounding_enforcer";

/**
 * MAIN ENTRYPOINT
 * This is the only safe external interface.
 */
export function LEGAL_SYSTEM(input: any, graph: any) {
  const raw = queryLegalSystem(input, graph);

  const check = enforceGrounding(raw);

  if (!check.valid) {
    return check;
  }

  return formatLegalResponse(raw);
}
