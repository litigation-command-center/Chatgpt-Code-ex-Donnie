import { ingestTexasStatute } from "./texas_statutes_ingestor";
import { ingestTRCP } from "./trcp_ingestor";
import { ingestCaseOpinion } from "./case_law_ingestor";

export async function ingestLegalSource(type: string, url: string) {
  switch (type) {
    case "statute":
      return ingestTexasStatute(url);

    case "trcp":
      return ingestTRCP(url);

    case "case":
      return ingestCaseOpinion(url);

    default:
      throw new Error("UNKNOWN_SOURCE_TYPE");
  }
}
