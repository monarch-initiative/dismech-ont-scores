# dismech-ont-scores

Derived ontology-centric disease scores from
[dismech](https://github.com/monarch-initiative/dismech), published as a static
browser and downloadable TSVs.

- Live browser: https://monarch-initiative.github.io/dismech-ont-scores/
- Source knowledge base: https://dismech.monarchinitiative.org/
- Scoring implementation: https://github.com/monarch-initiative/dismech/blob/main/src/dismech/export/context_score.py

This repository is 100% derived. It is not the source of truth for disease
curation. The curated assertions, scoring code, and provenance model live in
`dismech`; this repo publishes the resulting browser payloads and download files.

## What Is Published Here

- An ontology-first browser over CL, UBERON, GO, and HPO terms.
- Raw TSV downloads for users who want the full exports.
- Static JavaScript shards that let the site run directly on GitHub Pages.

## How Scores Are Made

Scores are derived from curated annotations in `dismech`.

1. Direct disease-context signal comes from curated ontology annotations.
   - Cells: `pathophysiology[].cell_types`
   - Anatomy: `pathophysiology[].locations`
   - Biological processes: `pathophysiology[].biological_processes`
   - Phenotypes: `phenotypes[].phenotype_term`
2. Each supporting node is weighted by its place in the disease mechanism graph.
   Upstream mechanism nodes contribute more than downstream terminal nodes.
3. Direct signal is propagated upward through ontology structure.
   - CL: `is_a`, `develops_from`
   - UBERON: `is_a`, `part_of`
   - GO: `is_a`, `part_of`
   - HPO: `is_a`
4. Broad ancestors are penalized using corpus-level specificity, so generic
   terms score lower than specific disease-relevant descendants.
5. The exports preserve both the total score and its components, including
   `direct_score`, `propagated_score`, `specificity`, and best-source provenance.

## Downloads

- Full export: https://monarch-initiative.github.io/dismech-ont-scores/build/site-data/downloads/context_scores.tsv
- Cell scores: https://monarch-initiative.github.io/dismech-ont-scores/build/site-data/downloads/cell_scores.tsv
- Anatomy scores: https://monarch-initiative.github.io/dismech-ont-scores/build/site-data/downloads/anatomy_scores.tsv
- GO scores: https://monarch-initiative.github.io/dismech-ont-scores/build/site-data/downloads/go_scores.tsv
- Phenotype scores: https://monarch-initiative.github.io/dismech-ont-scores/build/site-data/downloads/phenotype_scores.tsv

## Notes For Maintainers

- The published site entrypoint is `index.html`.
- Browser payloads live under `build/site-data/`.
- Generated JSON is optional debug output only; the published site uses JS shards
  and TSV downloads.
- Regeneration is done from a local `dismech` checkout via the scripts and
  `justfile` in this repo.
