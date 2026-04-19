export function applyDeadlineModifiers(date: Date, modifiers: string[]) {
  const result = new Date(date);

  for (const mod of modifiers) {
    if (mod === "weekend_skip") {
      while (result.getDay() === 0 || result.getDay() === 6) {
        result.setDate(result.getDate() + 1);
      }
    }

    if (mod === "federal_holiday_skip") {
      // placeholder: requires holiday dataset
    }
  }

  return result;
}
