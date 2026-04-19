export interface ParsedCaseOpinion {
  citation: string;
  holding: string;
  dicta: string[];
}

/**
 * Separates holding from dicta using minimal structural heuristics.
 */
export function parseCaseOpinion(text: string): ParsedCaseOpinion {
  return {
    citation: extractCitation(text),
    holding: extractHolding(text),
    dicta: extractDicta(text)
  };
}

function extractCitation(text: string): string {
  const match = text.match(/\d+\s+S\.W\.\d+d\s+\d+/);
  return match?.[0] || "unknown";
}

function extractHolding(text: string): string {
  const match = text.match(/held that(.*?)(\.|;)/i);
  return match ? match[1].trim() : "unparsed";
}

function extractDicta(text: string): string[] {
  return text.match(/we note that(.*?)(\.|;)/gi) || [];
}
