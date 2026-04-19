export function resolveCitation(input: string) {
  const text = input.toLowerCase();

  if (text.includes("health and safety") && text.includes("343")) {
    return {
      code: "Health and Safety Code",
      chapter: "343"
    };
  }

  return null;
}
