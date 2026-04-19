export function normalizeLegalStructure(input: any) {
  return {
    statutes: input.statutes?.map((s: any) => ({ ...s, normalized: true })) || [],
    cases: input.cases || [],
    rules: input.rules || []
  };
}
