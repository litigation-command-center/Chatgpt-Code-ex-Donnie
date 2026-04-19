export function enforceGrounding(data: any) {
  if (!data.controlling_law) {
    return {
      valid: false,
      reason: "NO_CONTROLLING_AUTHORITY_FOUND"
    };
  }

  return {
    valid: true,
    confidence: "structured_only"
  };
}
