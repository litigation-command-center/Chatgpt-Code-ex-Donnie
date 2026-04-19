export function nextStep(state: string) {
  const flow: Record<string, string> = {
    complaint_filed: "service_required",
    service_completed: "answer_due",
    answer_filed: "discovery_phase",
    discovery_complete: "motion_practice",
    motion_complete: "trial_ready"
  };

  return flow[state] || "unknown_stage";
}
