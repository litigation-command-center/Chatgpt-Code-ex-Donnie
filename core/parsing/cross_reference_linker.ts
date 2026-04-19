export interface CrossReference {
  from: string;
  to: string;
  type: "interprets" | "modifies" | "cites";
}

export function linkCrossReferences(statutes: any[], cases: any[]): CrossReference[] {
  const links: CrossReference[] = [];

  for (const s of statutes) {
    for (const c of cases) {
      if (c.holding?.includes(s.section)) {
        links.push({
          from: s.section,
          to: c.citation,
          type: "interprets"
        });
      }
    }
  }

  return links;
}
