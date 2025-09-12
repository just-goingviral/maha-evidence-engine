import { fetchPubMedArticles } from '../pubmed';

describe('fetchPubMedArticles', () => {
  const originalUrl = process.env.PUBMED_URL;
  beforeEach(() => {
    process.env.PUBMED_URL = 'https://pubmed.example';
  });
  afterEach(() => {
    process.env.PUBMED_URL = originalUrl;
  });

  it('fetches articles for a term', async () => {
    const searchResp = {
      ok: true,
      json: async () => ({ esearchresult: { idlist: ['123'] } }),
    };
    const summaryResp = {
      ok: true,
      json: async () => ({ result: { '123': { title: 'A study' } } }),
    };
    const mockFetch = jest
      .fn()
      .mockResolvedValueOnce(searchResp)
      .mockResolvedValueOnce(summaryResp);
    const articles = await fetchPubMedArticles('cancer', mockFetch as unknown as typeof fetch);
    expect(mockFetch).toHaveBeenNthCalledWith(
      1,
      'https://pubmed.example/esearch.fcgi?db=pubmed&retmode=json&term=cancer',
    );
    expect(mockFetch).toHaveBeenNthCalledWith(
      2,
      'https://pubmed.example/esummary.fcgi?db=pubmed&id=123&retmode=json',
    );
    expect(articles).toEqual([
      { id: '123', title: 'A study', url: 'https://pubmed.ncbi.nlm.nih.gov/123/' },
    ]);
  });

  it('returns empty array when no ids', async () => {
    const mockFetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ esearchresult: { idlist: [] } }),
    });
    const articles = await fetchPubMedArticles('unknown', mockFetch as unknown as typeof fetch);
    expect(articles).toEqual([]);
    expect(mockFetch).toHaveBeenCalledTimes(1);
  });
});
