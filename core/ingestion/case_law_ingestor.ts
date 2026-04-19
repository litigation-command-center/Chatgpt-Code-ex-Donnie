import { fetchDocument } from "./document_fetcher";

export async function ingestCaseOpinion(url: string) {
  const doc = await fetchDocument(url);

  return {
    source: "Court Opinion",
    url,
    raw_text: doc.raw,
    retrieved_at: doc.fetched_at
  };
}
