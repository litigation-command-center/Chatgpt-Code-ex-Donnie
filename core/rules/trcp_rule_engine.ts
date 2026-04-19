export interface Rule {
  id: string;
  name: string;
  jurisdiction: "Texas";
  text: string;
  priority: number;
}

/**
 * Core rule resolution:
 * Higher priority overrides lower procedural interpretations.
 */
export function resolveRuleConflict(rules: Rule[]) {
  return rules.sort((a, b) => b.priority - a.priority)[0];
}
