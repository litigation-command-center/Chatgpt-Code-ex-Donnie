/**
 * Periodic ingestion system for updated legal sources.
 */
export function scheduleIngestion(task: () => Promise<void>, intervalMs: number) {
  setInterval(async () => {
    try {
      await task();
    } catch (err) {
      console.error("INGESTION_ERROR", err);
    }
  }, intervalMs);
}
