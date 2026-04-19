import { LEGAL_SYSTEM } from "./system_entrypoint";

/**
 * Production bootstrap for full legal intelligence system.
 */
export function startSystem(graph: any) {
  return {
    query: (input: any) => LEGAL_SYSTEM(input, graph),
    status: "ready",
    mode: "production"
  };
}
