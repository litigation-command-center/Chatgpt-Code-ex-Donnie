export interface ParsedRule {
  rule_number: string;
  conditions: string[];
  exceptions: string[];
  effects: string[];
}

export function parseRuleText(text: string): ParsedRule {
  return {
    rule_number: extractRuleNumber(text),
    conditions: extract(text, "if"),
    exceptions: extract(text, "unless"),
    effects: extract(text, "shall")
  };
}

function extractRuleNumber(text: string): string {
  const m = text.match(/Rule\s?(\d+[A-Za-z]?)/i);
  return m?.[1] || "unknown";
}

function extract(text: string, keyword: string): string[] {
  const regex = new RegExp(`${keyword}[^.]*\\.`, "gi");
  return text.match(regex) || [];
}
