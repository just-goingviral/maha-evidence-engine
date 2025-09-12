export interface PubMedArticle {
  id: string;
  title: string;
  url: string;
}

/**
 * Fetch articles from the PubMed API for the given search term.
 * Uses the NCBI E-utilities service.
 * @param term Search term
 * @param fetchFn Optional fetch implementation for testing
 */
export async function fetchPubMedArticles(term: string, fetchFn: typeof fetch = fetch): Promise<PubMedArticle[]> {
  const baseUrl = process.env.PUBMED_URL || 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils';
  const searchUrl = `${baseUrl}/esearch.fcgi?db=pubmed&retmode=json&term=${encodeURIComponent(term)}`;
  const searchResp = await fetchFn(searchUrl);
  if (!searchResp.ok) {
    throw new Error(`PubMed search failed with ${searchResp.status}`);
  }
  const searchJson = await searchResp.json();
  const ids: string[] = searchJson.esearchresult?.idlist ?? [];
  if (ids.length === 0) {
    return [];
  }
  const summaryUrl = `${baseUrl}/esummary.fcgi?db=pubmed&id=${ids.join(',')}&retmode=json`;
  const summaryResp = await fetchFn(summaryUrl);
  if (!summaryResp.ok) {
    throw new Error(`PubMed summary failed with ${summaryResp.status}`);
  }
  const summaryJson = await summaryResp.json();
  return ids.map((id: string) => ({
    id,
    title: summaryJson.result?.[id]?.title ?? '',
    url: `https://pubmed.ncbi.nlm.nih.gov/${id}/`,
  }));
}
