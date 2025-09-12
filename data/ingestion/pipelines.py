import json
import logging
import os
from pathlib import Path
from typing import Any, Dict

import requests

# Default query used when none is provided via environment variables.
DEFAULT_QUERY = os.environ.get("INGEST_QUERY", "diabetes systematic review")

DATA_DIR = Path("data")
DATA_DIR.mkdir(exist_ok=True)

PUBMED_BASE = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils"
SEMANTIC_SCHOLAR_SEARCH = "https://api.semanticscholar.org/graph/v1/paper/search"


def fetch_pubmed(query: str, retmax: int = 20) -> Dict[str, Any]:
    """Fetch metadata for a query from the PubMed API.

    Returns a JSON structure from the `esummary` endpoint containing
    publication metadata.
    """
    search_params = {
        "db": "pubmed",
        "term": query,
        "retmax": retmax,
        "retmode": "json",
        "tool": "maha_evidence_engine",
    }
    email = os.environ.get("PUBMED_EMAIL")
    if email:
        search_params["email"] = email
    search_resp = requests.get(f"{PUBMED_BASE}/esearch.fcgi", params=search_params, timeout=30)
    search_resp.raise_for_status()
    ids = search_resp.json().get("esearchresult", {}).get("idlist", [])
    if not ids:
        return {"result": {}}
    summary_params = {
        "db": "pubmed",
        "id": ",".join(ids),
        "retmode": "json",
        "tool": "maha_evidence_engine",
    }
    if email:
        summary_params["email"] = email
    summary_resp = requests.get(f"{PUBMED_BASE}/esummary.fcgi", params=summary_params, timeout=30)
    summary_resp.raise_for_status()
    return summary_resp.json()


def fetch_evidence_maps(query: str, limit: int = 20) -> Dict[str, Any]:
    """Query Semantic Scholar for review papers as a proxy evidence map."""
    params = {
        "query": query,
        "limit": limit,
        "fields": "title,year,authors",
    }
    resp = requests.get(SEMANTIC_SCHOLAR_SEARCH, params=params, timeout=30)
    resp.raise_for_status()
    return resp.json()


def save_json(data: Dict[str, Any], path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, sort_keys=True)


def main(query: str = DEFAULT_QUERY) -> None:
    logging.info("Starting ingestion for query: %s", query)
    pubmed_data = fetch_pubmed(query)
    save_json(pubmed_data, DATA_DIR / "pubmed.json")
    try:
        em_data = fetch_evidence_maps(query)
        save_json(em_data, DATA_DIR / "evidence_maps.json")
    except Exception as exc:  # pragma: no cover - best effort
        logging.exception("Evidence map ingestion failed: %s", exc)


if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO)
    main()
