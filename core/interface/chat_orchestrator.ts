import { reasonLegalIssue } from "../reasoning/legal_reasoning_engine";
import { explainLegally } from "./human_explainer";

export function chatPipeline(input: any) {
  const reasoning = reasonLegalIssue(input);

  return explainLegally(reasoning);
}
