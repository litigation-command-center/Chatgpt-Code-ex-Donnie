export function diffDocuments(oldDoc: string, newDoc: string) {
  if (!oldDoc || !newDoc) {
    return { changed: true, reason: "missing_document" };
  }

  return {
    changed: oldDoc !== newDoc,
    similarity_check: oldDoc.length / (newDoc.length || 1)
  };
}
