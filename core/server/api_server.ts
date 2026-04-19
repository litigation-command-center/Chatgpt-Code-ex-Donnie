import { startSystem } from "../system/production_bootstrap";
import { loadGraph } from "../persistence/legal_graph_store";

/**
 * Phase 13: API Server Bootstrap
 * Minimal production entrypoint (no framework dependency yet)
 */

export function createAPIServer() {
  const graph = loadGraph();
  const system = startSystem(graph);

  return {
    status: "running",

    health: () => ({ ok: true, mode: "phase_13_bootstrap" }),

    query: (input: any) => {
      return system.query(input);
    },

    ingest: async (fn: () => Promise<any>) => {
      return await fn();
    }
  };
}
