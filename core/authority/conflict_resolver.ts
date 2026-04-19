import { AUTHORITY_WEIGHTS } from "./authority_weights";

export function resolveAuthorityConflict(authorities: any[]) {
  if (!Array.isArray(authorities)) return [];

  return authorities.sort((a, b) => {
    const weightA = AUTHORITY_WEIGHTS[a.type] ?? 0;
    const weightB = AUTHORITY_WEIGHTS[b.type] ?? 0;

    return weightB - weightA;
  });
}
