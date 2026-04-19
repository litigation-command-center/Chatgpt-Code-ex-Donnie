import { CaseLaw } from "../models/case_law";

export async function ingestCaseLaw(caseData: CaseLaw) {
  if (!caseData.citation || !caseData.holding) {
    throw new Error("INVALID_CASE_LAW_OBJECT");
  }

  return {
    ...caseData,
    ingested_at: new Date().toISOString(),
    validated: true
  };
}
