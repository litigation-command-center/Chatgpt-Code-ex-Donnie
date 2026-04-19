export function preventDrift(output: any) {
  const allowed =
    output?.includes("statute") ||
    output?.includes("case law") ||
    output?.includes("rule");

  return {
    safe: allowed,
    mode: "no speculation allowed"
  };
}
