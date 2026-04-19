export function resolveLegalConflict(nodes: any[]) {
  const statutes = nodes.filter(n => n.type === "statute");
  const cases = nodes.filter(n => n.type === "case");

  // Statutes always dominate in conflict
  if (statutes.length > 0) {
    return {
      controlling: statutes[0],
      overridden: cases,
      rule: "STATUTE_PREVAILS"
    };
  }

  // fallback: highest court case wins
  const sortedCases = cases.sort((a, b) => (b.weight || 0) - (a.weight || 0));

  return {
    controlling: sortedCases[0] || null,
    overridden: sortedCases.slice(1),
    rule: "CASE_HIERARCHY"
  };
}
