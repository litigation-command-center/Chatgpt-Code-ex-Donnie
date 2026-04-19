import { routeQuery } from "./query_router";
import { handleLegalQuery } from "./legal_api_server";

/**
 * Public interface (safe boundary).
 */
export function queryLegalSystem(input: any, graph: any) {
  const routed = routeQuery(input);

  return handleLegalQuery(routed, graph);
}
