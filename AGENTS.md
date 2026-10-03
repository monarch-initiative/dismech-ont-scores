# Repository guidelines

This repository publishes the DisMech Concept Explorer. Curated assertions belong
in upstream `monarch-initiative/dismech`; do not edit upstream KB content here.
Read `METHODS.md` before changing scoring, extraction, or embedding semantics.

- `scripts/concept_data.py`: current-source inventory, v2 scores and vector cache.
- `scripts/build_site.py`: source snapshot, build, validation and publication artifact.
- `scripts/build_browser_data.py`: existing term shards and TSV compatibility layer.
- `app/`, `index.html`: browser sources; `config/build.json`: model and ontology inputs.
- `dist/`: disposable build; `.cache/`: reusable vectors; neither is committed.
- `build/site-data/`: retained March 2026 historical payload, not a build input.

Use `uv sync --locked`; run `just test`, then a full `just rebuild /path/to/dismech`
when changing extraction/scoring/rendering. Run `uv run playwright install chromium`
and `just smoke` for UI changes. Inspect desktop/mobile screenshots generated under
`/tmp/concept-explorer-*.png`. A fixture build alone is not a full-corpus test.

Preserve old term routes and download URLs. Keep current entity identity separate
from the text-vector cache. Never use cache rows as the published entity inventory.
Any text rendering change must bump `TEXT_VERSION`. Record scientific method
changes explicitly in `METHODS.md` and the release method version; do not imply
comparability with old scores or vector spaces. Fail on malformed input rather
than silently dropping curated records.

Use targeted staging and commit only source/tests/docs/lockfiles. Generated site
assets are deployed by Actions, never committed. Python uses four-space indents;
JavaScript uses two. PRs should explain user-visible changes, method changes,
source SHA used for full-corpus validation, and tests run.
