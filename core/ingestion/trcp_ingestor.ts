import { fetchDocument } from "./document_fetcher";

export async function ingestTRCP(url: string) {
  const doc = await fetchDocument(url);

  return {
    source: "Texas Rules of Civil Procedure",
    url,
    raw_text: doc.raw,
    retrieved_at: doc.fetched_at
  };
}
