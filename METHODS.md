# Methods and snapshot provenance

The explorer combines three relationships: curated ontology annotations and their
ontology ancestors; similarity of rendered text; and curated pathograph links.
These relationships retain separate meanings. A similar vector is not a causal
edge, an ontology equivalence, or evidence for an uncurated annotation.

## Ontology scores: context-v2-max-product

This is a **new method**, not a reconstruction of the March 2026 score exporter.
That exporter is absent from the source commit named by the old payload and was
not recoverable from the available DisMech branches. Its causal-depth weighting
is consequently not reproduced. Do not compare v2 numerical scores with the old
snapshot as if they measured change in disease biology.

The immutable [March snapshot](https://github.com/monarch-initiative/dismech-ont-scores/tree/567c7b957ed44fd4803aa89f87e21c403cfdf67e/build/site-data)
remains available for historical comparisons. Current TSVs retain its column and
URL contract, while `manifest.json` and the visible interface identify v2.

For each disease:

1. Extract direct CL cell types, UBERON locations, and GO biological processes
   from pathophysiology nodes, and HP terms from phenotype descriptors. Repeated
   annotations contribute once; node names are retained as supporting provenance.
2. A direct association has support 1. Follow asserted child-to-parent ontology
   edges, multiplying by 0.8 per `is_a` or `part_of` edge, or 0.6 per
   `develops_from` edge. CL allows `is_a`/`develops_from`, UBERON and GO allow
   `is_a`/`part_of`, and HP allows `is_a`. Only named, non-obsolete classes within
   the corresponding namespace are traversed. OBO logical definitions,
   equivalence axioms, alternate IDs and other predicates are not expanded.
3. For each target term, keep the maximum path support across source terms. This
   avoids double counting when several annotations or paths reach one ancestor.
   The best source path, source terms and supporting nodes remain inspectable.
4. Let N be the number of disease entries and df(t) the number with positive
   direct or propagated support for t. Specificity is
   `log(1 + N / df(t)) / log(1 + N)`. The displayed score is
   `max(direct_support, propagated_support) * specificity`.

`direct_score` and `propagated_score` are support components, not additive final
scores. All results lie in [0, 1], but **are not probabilities**, causal importance,
clinical utility, or curation priorities. The edge decay constants are declared
heuristics, not fitted parameters. Broad ancestors are downweighted by document
frequency; this does not turn term specificity into evidence quality. Modules
are navigable and embedded, but are not additional diseases in N or score rows.

A curated term absent from the downloaded active ontology retains direct-only
support with its CURIE as the ranking label. It is listed in
`build/site-data/downloads/unresolved_annotations.json`; the browser's original
annotation retains the curated label. It is never silently replaced or propagated.
Every ontology's data-version, source URL, predicates, and exact byte checksum are
recorded in the release manifest. New runs download the current releases explicitly;
`--ontology-dir` can reproduce a build using previously saved matching OBO files.

## Embeddings: concept-text-v1

The initial local backend is model2vec `minishlab/potion-base-8M`, pinned to
revision `bf8b056651a2c21b8d2565580b8569da283cab23`. Model and package versions are
fixed by `config/build.json` and `uv.lock`. These are **new representations**, not
the legacy OpenAI ada vectors, and their cosine values and coordinates must not
be compared directly with the legacy browser. Model2vec's general-purpose model
has not been established here as a biomedical retrieval benchmark winner.

Disease-level spaces separately render pathophysiology, phenotypes, treatments,
and cell types/anatomy. The mechanism space renders individual pathophysiology
nodes from diseases and modules. Text uses the chosen items' names, descriptions,
and selected ontology descriptor labels. Evidence quotes, references, dates and
curation metadata are excluded. Disease names are not prepended to mechanism
text, reducing disease-name leakage when exploring cross-disease mechanisms.
All rendered tokens are encoded (`max_length=None`); the library default 512-token
truncation is disabled. The exact rendered text is available in each detail panel.

The fresh YAML inventory determines active entities. SQLite caches vectors by
SHA256 of `(model, model revision, text version, token limit, rendered text)`; it does not
supply entity identities. Deletions and renames disappear on rebuild even with a
warm cache. Metadata-only changes reuse vectors. New text/model/template versions
invalidate only the corresponding cache lookup. Bump the text version whenever
the rendering semantics change. Empty text and zero vectors are explicitly listed
as excluded; a model error fails the build rather than becoming an exclusion.

Neighbors use cosine similarity of the full vectors within one space, excluding
the selected record itself. The map uses two principal components of unit vectors
(full SVD). It is a visual projection, not the neighbor metric. The coordinate
system is fitted afresh and can move or flip between releases. Independent spaces
have no shared coordinate system. Rendering uses a canvas; the searchable list
provides keyboard-accessible selection of the same concepts.

## Identity and release contract

Disease and module keys use typed source filenames; MONDO IDs are mappings,
not unique primary keys. Mechanism keys combine the parent key and encoded node
name. A renamed source/node is a new identity; old bookmarks report absence
rather than guessing a successor. Existing `#term/<ontology>/<CURIE>` routes
and TSV download paths remain supported.

One manifest records source SHA/time, per-file source hashes, browser SHA, method,
model provenance and checksums of all built assets. All views use the same source
snapshot. Validation checks active/excluded inventory partitions, neighbor IDs,
term shards and score-to-disease joins. The build stages everything in a temporary
directory; generation/validation failures cannot replace the previous output or
reach deployment. A timestamp reports when data were built, not merely deployed.
The interface flags snapshots older than three days and links the build history.

## Validation snapshot (2026-09-22)

The full-corpus build at DisMech `9c1bdef6a5bc8a6490c8dde06ab9e1d2ca8efc6c`
contains 3,083 diseases, 178 modules, and 21,442 mechanism nodes. It produces
435,166 disease–term rows across 13,583 terms. Twelve annotation occurrences are
unresolved in the downloaded active ontology snapshots and retain direct-only
support. Entity/space coverage and exclusions are measured anew in every build.

The March export has 59,720 disease–term pairs; 56,121 are also present in this
build. Both the corpus and method changed, so the difference cannot be attributed
to the scoring method alone. This is a coverage comparison, not a reproducibility
claim or a numerical calibration. The archived March output is preserved.

Publication contracts cover cache reuse/invalidation, removal of inactive entities,
cycle-safe maximum paths, duplicate annotation handling, duplicate YAML rejection,
source/asset integrity, and failed-build preservation. Chromium smoke tests run
against fixtures and the full corpus, covering term → disease → mechanism → back,
legacy focus links, absent identities, and a narrow mobile viewport. These are
software correctness checks; they do not establish biomedical retrieval accuracy.
