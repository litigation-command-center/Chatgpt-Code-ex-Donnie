export function matchPrecedent(inputFacts: string, cases: any[]) {
  return cases.filter(c => {
    return c.holding?.toLowerCase().includes(
      inputFacts.toLowerCase().slice(0, 30)
    );
  });
}
