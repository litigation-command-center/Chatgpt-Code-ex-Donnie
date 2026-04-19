export function explainLegally(result: any) {
  if (!result?.controlling_law) {
    return "I can’t find controlling legal authority for this issue in the current dataset.";
  }

  return `
Here is the controlling legal authority:

${result.controlling_law.text}

Supporting case law:
${result.interpretive_cases?.map((c: any) => c.citation).join("\n") || "None"}

Procedural rules:
${result.procedural_rules?.length ? "Applicable rules identified" : "None identified"}

Note:
This explanation is strictly derived from structured legal sources.
`;
}
