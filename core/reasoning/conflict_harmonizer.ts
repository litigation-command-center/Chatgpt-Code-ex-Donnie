export function harmonizeAuthorities(statute: any, cases: any[]) {
  return {
    statute,
    case_law_support: cases.filter(c => c.binding),
    persuasive_only: cases.filter(c => !c.binding),
    note: "Case law does not override statute; it constrains interpretation."
  };
}
