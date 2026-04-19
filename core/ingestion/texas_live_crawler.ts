import { ingestTexasStatute } from "./texas_statutes_ingestor";

const TEXAS_BASE = "https://statutes.capitol.texas.gov/";

export async function crawlTexasStatutes() {
  // placeholder seed endpoints (expand later with sitemap crawl)
  const seeds = [
    TEXAS_BASE
  ];

  const results = [];

  for (const url of seeds) {
    const data = await ingestTexasStatute(url);
    results.push(data);
  }

  return results;
}
