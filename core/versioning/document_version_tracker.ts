export function createVersionRecord(doc: any) {
  return {
    hash: Buffer.from(doc.raw || "").toString("base64").slice(0, 32),
    source: doc.source,
    url: doc.url,
    timestamp: doc.retrieved_at
  };
}
