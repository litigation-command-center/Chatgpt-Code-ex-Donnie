export function mapProcedure(input: string) {
  const text = input.toLowerCase();

  if (text.includes("answer")) {
    return {
      stage: "responsive_pleading",
      triggers: ["service_of_citation"],
      deadline_type: "answer_deadline"
    };
  }

  if (text.includes("motion")) {
    return {
      stage: "motion_practice",
      triggers: ["filing"],
      deadline_type: "hearing_or_response"
    };
  }

  return null;
}
