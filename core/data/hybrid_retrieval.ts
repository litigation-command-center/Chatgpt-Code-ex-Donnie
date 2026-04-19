import { liveRetrieve } from "./live_retriever";

const cache = new Map<string, any>();

export async function hybridRetrieve(key: string, url: string) {
  const cached = cache.get(key);

  if (cached && Date.now() - cached.time < 86400000) {
    return cached.data;
  }

  const fresh = await liveRetrieve(url);

  cache.set(key, {
    time: Date.now(),
    data: fresh
  });

  return fresh;
}
