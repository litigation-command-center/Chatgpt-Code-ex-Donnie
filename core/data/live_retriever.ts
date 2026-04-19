import { SOURCE_REGISTRY } from "./source_registry";

export async function liveRetrieve(url: string) {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`FETCH_FAILED: ${res.status}`);
  }

  const html = await res.text();

  return {
    url,
    html,
    retrieved_at: new Date().toISOString()
  };
}
