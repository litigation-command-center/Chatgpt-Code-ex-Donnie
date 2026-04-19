export function buildLegalHierarchy(data: any) {
  return {
    statutes: data.statutes || [],
    cases: data.cases || [],
    rules: data.rules || [],
    type: "legal_hierarchy_v1"
  };
}
