export async function fetchDocument(url: string) {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`FETCH_FAILED: ${res.status}`);
  }

  const contentType = res.headers.get("content-type");

  return {
    url,
    contentType,
    raw: await res.text(),
    fetched_at: new Date().toISOString()
  };
}
