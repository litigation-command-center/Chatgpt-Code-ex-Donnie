import { fetchDocument } from "./document_fetcher";

export async function ingestFederalRegister(url: string) {
  const doc = await fetchDocument(url);

  return {
    source: "Federal Register",
    url,
    raw_html: doc.raw,
    retrieved_at: doc.fetched_at
  };
}
