import { mapReviewToEvidence, ReviewRecord } from '@/utils/schemaMapping'

describe('mapReviewToEvidence', () => {
  it('maps known fields to EvidenceRecord', () => {
    const review: ReviewRecord = {
      doi: '10.1000/xyz123',
      pmid: '987654',
      title: 'Sample Review',
      authors: ['Alice', 'Bob'],
      publicationDate: '2024-01-01',
      type: 'meta_analysis',
      outcomes: ['Outcome1', 'Outcome2'],
    }

    const evidence = mapReviewToEvidence(review)

    expect(evidence).toEqual({
      id: '10.1000/xyz123',
      title: 'Sample Review',
      authors: ['Alice', 'Bob'],
      publicationDate: '2024-01-01',
      type: 'meta-analysis',
      outcomes: ['Outcome1', 'Outcome2'],
    })
  })

  it('falls back gracefully when optional fields are missing', () => {
    const review: ReviewRecord = {
      title: 'Untitled Review',
    }

    const evidence = mapReviewToEvidence(review)

    expect(evidence).toEqual({
      id: 'Untitled Review',
      title: 'Untitled Review',
      authors: [],
      publicationDate: undefined,
      type: 'systematic-review',
      outcomes: [],
    })
  })
})
