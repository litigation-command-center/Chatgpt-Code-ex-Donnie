import { fetchDocument } from "./document_fetcher";

export async function ingestTexasStatute(url: string) {
  const doc = await fetchDocument(url);

  return {
    source: "Texas Statutes",
    url,
    raw_html: doc.raw,
    retrieved_at: doc.fetched_at
  };
}
