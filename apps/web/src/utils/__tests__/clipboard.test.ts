import { copyToClipboard } from '../clipboard';

describe('copyToClipboard', () => {
  const originalClipboard = (navigator as any).clipboard;

  beforeEach(() => {
    (document as any).execCommand = jest.fn();
  });

  afterEach(() => {
    (navigator as any).clipboard = originalClipboard;
    jest.clearAllMocks();
  });

  it('uses navigator.clipboard.writeText when available', async () => {
    const writeText = jest.fn().mockResolvedValue(undefined);
    (navigator as any).clipboard = { writeText };

    await copyToClipboard('hello');

    expect(writeText).toHaveBeenCalledWith('hello');
    expect(document.execCommand).not.toHaveBeenCalled();
  });

  it('falls back to execCommand when clipboard API is missing', async () => {
    (navigator as any).clipboard = undefined;

    await copyToClipboard('fallback');

    expect(document.execCommand).toHaveBeenCalledWith('copy');
  });

  it('falls back to execCommand when clipboard API rejects', async () => {
    const writeText = jest.fn().mockRejectedValue(new Error('fail'));
    (navigator as any).clipboard = { writeText };

    await copyToClipboard('error');

    expect(writeText).toHaveBeenCalled();
    expect(document.execCommand).toHaveBeenCalledWith('copy');
  });
});
