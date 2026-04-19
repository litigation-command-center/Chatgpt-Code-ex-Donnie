export interface ServiceEvent {
  method: "personal" | "substituted" | "certified_mail";
  date: string;
}

export function validateService(event: ServiceEvent) {
  return {
    valid: !!event.method && !!event.date,
    presumed_effective_date: event.date
  };
}
