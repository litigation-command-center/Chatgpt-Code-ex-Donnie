export function detectAmendments(oldData: any, newData: any) {
  if (!oldData || !newData) return null;

  return {
    changed: oldData.html !== newData.html,
    timestamp: new Date().toISOString()
  };
}
