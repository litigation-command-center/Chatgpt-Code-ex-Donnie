export function resolveTexasStatuteURL(code: string, chapter?: string, section?: string) {
  const base = "https://statutes.capitol.texas.gov/Docs";

  const map: Record<string, string> = {
    "Health and Safety Code": "HS",
    "Penal Code": "PE",
    "Civil Practice and Remedies Code": "CP",
    "Government Code": "GV"
  };

  const prefix = map[code];
  if (!prefix) throw new Error("UNKNOWN_CODE");

  if (section) return `${base}/${prefix}/htm/${prefix}.${section}.htm`;
  if (chapter) return `${base}/${prefix}/htm/${prefix}.${chapter}.htm`;

  return `${base}/${prefix}/htm/${prefix}.html`;
}
