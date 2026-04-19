export interface StatuteSection {
  chapter?: string;
  section: string;
  text: string;
}

/**
 * Extracts statute sections from raw Texas statute HTML/text.
 * NOTE: lightweight parser; structural normalization happens later.
 */
export function parseStatuteSections(raw: string): StatuteSection[] {
  const sections: StatuteSection[] = [];

  const matches = raw.match(/Sec\.\s?\d+[\.\dA-Za-z]*\..*?(?=Sec\.|$)/gs);

  if (!matches) return [];

  for (const m of matches) {
    const sectionMatch = m.match(/Sec\.\s?([\d\.A-Za-z]+)/);

    sections.push({
      section: sectionMatch?.[1] || "unknown",
      text: m.replace(/\s+/g, " ").trim()
    });
  }

  return sections;
}
