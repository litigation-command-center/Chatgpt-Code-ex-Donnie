export interface LegalEvent {
  label: string;
  date: string;
  type: "filing" | "motion" | "hearing" | "order";
}

export function buildTimeline(events: LegalEvent[]) {
  return events
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .map((e, index) => ({
      step: index + 1,
      ...e
    }));
}
