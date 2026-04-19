const cache = new Map<string, any>();

export async function hybridRetrieve(key: string, fetchFn: () => Promise<any>) {
  const cached = cache.get(key);

  if (cached && Date.now() - cached.time < 86400000) {
    return cached.data;
  }

  const fresh = await fetchFn();

  cache.set(key, {
    time: Date.now(),
    data: fresh
  });

  return fresh;
}
