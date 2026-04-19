export interface TriggerEvent {
  type: "filing" | "service" | "order" | "hearing";
  date: string;
  jurisdiction: "Texas";
}

export interface DeadlineRule {
  name: string;
  days: number;
  description: string;
}

/**
 * Pure computation engine:
 * No assumptions about tolling, weekends, or exceptions yet.
 */
export function calculateDeadline(trigger: TriggerEvent, rule: DeadlineRule) {
  const base = new Date(trigger.date);
  const result = new Date(base);

  result.setDate(result.getDate() + rule.days);

  return {
    trigger,
    rule,
    computed_deadline: result.toISOString()
  };
}
