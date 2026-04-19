import { PROCEDURAL_PRIORITY } from "./procedural_priority_map";

export function resolveProceduralConflict(items: any[]) {
  return items.sort((a, b) => {
    return (PROCEDURAL_PRIORITY[b.type] ?? 0) - (PROCEDURAL_PRIORITY[a.type] ?? 0);
  });
}
