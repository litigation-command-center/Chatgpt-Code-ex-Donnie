export function interpretStatuteWithCaseLaw(statute: any, cases: any[]) {
  const bindingCases = cases.filter(c => c.binding === true);

  return {
    statute,
    interpretation: {
      binding_case_law: bindingCases,
      persuasive_case_law: cases.filter(c => !c.binding),
      note: "Case law informs interpretation but does not replace statutory text."
    }
  };
}
