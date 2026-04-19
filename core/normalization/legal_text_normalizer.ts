export function normalizeLegalText(raw: string) {
  return raw
    .replace(/\s+/g, " ")
    .replace(/\n+/g, "\n")
    .trim();
}
