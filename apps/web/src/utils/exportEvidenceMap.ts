export interface EvidenceGap {
  id: string;
  description: string;
  // Allow arbitrary additional properties
  [key: string]: unknown;
}

/**
 * Export identified evidence gaps to an external Evidence Maps service.
 * @param gaps Array of evidence gap objects
 * @param apiUrl Destination API endpoint
 */
export async function exportEvidenceGaps(
  gaps: EvidenceGap[],
  apiUrl: string
): Promise<void> {
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ gaps }),
  });

  if (!response.ok) {
    throw new Error(`Failed to export evidence gaps: ${response.statusText}`);
  }
}
