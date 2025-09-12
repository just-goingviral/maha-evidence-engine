import { fetchEvidenceMaps } from '../evidenceMaps';

describe('fetchEvidenceMaps', () => {
  const originalUrl = process.env.EVIDENCE_MAPS_URL;
  beforeEach(() => {
    process.env.EVIDENCE_MAPS_URL = 'https://maps.example/api';
  });
  afterEach(() => {
    process.env.EVIDENCE_MAPS_URL = originalUrl;
  });

  it('fetches evidence maps data', async () => {
    const mockFetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ records: [{ id: '1', title: 'Test', url: 'http://x' }] }),
    });
    const data = await fetchEvidenceMaps('q=test', mockFetch as unknown as typeof fetch);
    expect(mockFetch).toHaveBeenCalledWith('https://maps.example/api?q=test', expect.any(Object));
    expect(data).toEqual({ records: [{ id: '1', title: 'Test', url: 'http://x' }] });
  });

  it('throws on non-ok responses', async () => {
    const mockFetch = jest.fn().mockResolvedValue({ ok: false, status: 500 });
    await expect(fetchEvidenceMaps('q=test', mockFetch as unknown as typeof fetch)).rejects.toThrow(
      'Evidence Maps request failed with 500',
    );
  });
});
