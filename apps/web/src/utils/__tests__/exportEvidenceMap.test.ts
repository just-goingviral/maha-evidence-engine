import { exportEvidenceGaps, EvidenceGap } from '../exportEvidenceMap';

describe('exportEvidenceGaps', () => {
  const apiUrl = 'https://example.com/evidence-maps';

  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      statusText: 'OK',
    }) as unknown as typeof fetch;
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('sends gaps to the specified API endpoint', async () => {
    const gaps: EvidenceGap[] = [{ id: '1', description: 'example gap' }];
    await exportEvidenceGaps(gaps, apiUrl);
    expect(fetch).toHaveBeenCalledWith(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ gaps }),
    });
  });

  it('throws an error when the response is not ok', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({ ok: false, statusText: 'Bad Request' });
    await expect(exportEvidenceGaps([], apiUrl)).rejects.toThrow(
      'Failed to export evidence gaps: Bad Request'
    );
  });
});
