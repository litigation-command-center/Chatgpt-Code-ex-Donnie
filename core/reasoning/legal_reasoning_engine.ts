export function reasonLegalIssue(input: any) {
  const {
    statutes,
    cases,
    rules,
    facts
  } = input;

  return {
    issue: facts.issue,
    controlling_law: statutes[0] || null,
    interpretive_cases: cases || [],
    procedural_rules: rules || [],
    reasoning_note:
      "Output is derived from structured authority only. No inference beyond provided sources."
  };
}
