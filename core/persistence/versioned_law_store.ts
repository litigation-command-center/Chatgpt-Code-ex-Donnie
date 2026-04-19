export function storeVersionedLaw(doc: any) {
  return {
    id: Buffer.from(doc.url).toString("base64").slice(0, 12),
    hash: Buffer.from(doc.raw || "").toString("base64").slice(0, 32),
    timestamp: new Date().toISOString(),
    source: doc.source
  };
}
