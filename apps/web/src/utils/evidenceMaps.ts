export interface EvidenceMapRecord {
  id: string;
  title: string;
  url: string;
}

/**
 * Fetch evidence maps data from an external API.
 * @param query Query string, e.g. "q=covid"
 * @param fetchFn Optional fetch implementation for testing
 */
export async function fetchEvidenceMaps(
  query: string,
  fetchFn: typeof fetch = fetch,
): Promise<unknown> {
  const baseUrl = process.env.EVIDENCE_MAPS_URL || 'https://api.epistemonikos.org/v1/evidencemap';
  const url = `${baseUrl}${query ? `?${query}` : ''}`;
  const resp = await fetchFn(url, { headers: { Accept: 'application/json' } });
  if (!resp.ok) {
    throw new Error(`Evidence Maps request failed with ${resp.status}`);
  }
  return resp.json();
}
