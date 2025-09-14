export interface ReviewRecord {
  /** Unique identifier for the review or meta-analysis. Prefers DOI, then PMID. */
  doi?: string
  pmid?: string
  id?: string
  title: string
  authors?: string[]
  publicationDate?: string
  type?: 'systematic_review' | 'meta_analysis' | string
  outcomes?: string[]
}

export type EvidenceType = 'systematic-review' | 'meta-analysis'

export interface EvidenceRecord {
  id: string
  title: string
  authors: string[]
  publicationDate?: string
  type: EvidenceType
  outcomes: string[]
}

/**
 * Map an external review/meta-analysis record into the canonical Evidence Engine schema.
 * Fields are normalised to match the internal ontology so downstream consumers can rely on
 * consistent naming regardless of source.
 */
export function mapReviewToEvidence(review: ReviewRecord): EvidenceRecord {
  const id = review.doi ?? review.pmid ?? review.id ?? review.title
  const type: EvidenceType = review.type === 'meta_analysis' ? 'meta-analysis' : 'systematic-review'

  return {
    id,
    title: review.title,
    authors: review.authors ?? [],
    publicationDate: review.publicationDate,
    type,
    outcomes: review.outcomes ?? [],
  }
}
