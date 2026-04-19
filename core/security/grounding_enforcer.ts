/**
 * Final safety gate:
 * Prevents non-grounded or inferred outputs.
 */
export function enforceGrounding(output: any) {
  if (!output?.controlling_authority) {
    return {
      valid: false,
      reason: "NO_CONTROLLED_AUTHORITY_FOUND"
    };
  }

  return {
    valid: true,
    mode: "strict_grounded_output"
  };
}
