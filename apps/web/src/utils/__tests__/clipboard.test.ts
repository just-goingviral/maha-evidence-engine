import { copyToClipboard } from '../clipboard';

describe('copyToClipboard', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const originalClipboard = (navigator as any).clipboard;

  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (document as any).execCommand = jest.fn();
  });

  afterEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (navigator as any).clipboard = originalClipboard;
    jest.clearAllMocks();
  });

  it('uses navigator.clipboard.writeText when available', async () => {
    const writeText = jest.fn().mockResolvedValue(undefined);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (navigator as any).clipboard = { writeText };

    await copyToClipboard('hello');

    expect(writeText).toHaveBeenCalledWith('hello');
    expect(document.execCommand).not.toHaveBeenCalled();
  });

  it('falls back to execCommand when clipboard API is missing', async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (navigator as any).clipboard = undefined;

    await copyToClipboard('fallback');

    expect(document.execCommand).toHaveBeenCalledWith('copy');
  });

  it('falls back to execCommand when clipboard API rejects', async () => {
    const writeText = jest.fn().mockRejectedValue(new Error('fail'));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (navigator as any).clipboard = { writeText };

    await copyToClipboard('error');

    expect(writeText).toHaveBeenCalled();
    expect(document.execCommand).toHaveBeenCalledWith('copy');
  });
});
