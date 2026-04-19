export function validateNoInference(output: any) {
  const suspicious =
    !output ||
    !output.controlling_law ||
    typeof output !== "object";

  return {
    safe: !suspicious,
    enforcement: "strict_source_only"
  };
}
