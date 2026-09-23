# DisMech Concept Explorer

Explore ontology associations, disease similarities, and individual mechanisms
from one current [DisMech](https://github.com/monarch-initiative/dismech) snapshot.

- [Browser](https://monarch-initiative.github.io/dismech-ont-scores/)
- [Methods, score change, and limitations](METHODS.md)
- [Build history](https://github.com/monarch-initiative/dismech-ont-scores/actions)

Search a term, inspect its ranked diseases and annotation provenance, and follow
**Explore similarities and mechanisms** into the map. Select a disease's mechanism
to compare it with nodes from other diseases and modules. Ontology selection
filters the map; **Clear term selection** returns to the whole space. Neighbors
use full-vector cosine similarity; the map is a separate 2D PCA projection.

This browser is a downstream derived view. Disease/module curation remains in
DisMech. Source YAML is never copied into this repository's tracked files.

## Rebuild and test

Python 3.12, Node 22, and [uv](https://docs.astral.sh/uv/) are required. No API key
or paid embedding service is needed. The first build downloads a pinned local
model and four ontology releases; vector/model caches make later builds cheaper.

```sh
uv sync --locked
uv run pytest -q
node --test tests/core.test.cjs
uv run python scripts/build_site.py --source ../dismech
uv run python scripts/build_site.py --validate
uv run playwright install chromium
uv run python tests/browser_smoke.py
uv run python -m http.server 8000 --directory dist
```

Alternatively, `just rebuild ../dismech`, `just test`, and `just serve` wrap these
commands. Open `http://localhost:8000/`; the new inventory is fetched over HTTP,
so opening the HTML via `file://` is no longer supported.

`--source` must name a Git checkout with clean `kb/disorders` and `kb/modules`
inputs. All other DisMech files, including reference caches, are outside the
builder's read scope. `--ontology-dir DIR` uses explicit offline snapshots named
`cell.obo`, `anatomy.obo`, `go.obo`, and `phenotype.obo`. Their checksums and OBO
versions are recorded exactly as for network downloads.

The build produces `dist/` only after generation and validation succeed. Generated
assets are deployed as an artifact, not committed. The old `build/site-data/`
files remain as the March historical snapshot and are never used as build inputs.

## Publication

`.github/workflows/pages.yml` follows the monarch-nams/dismech-history pattern:

- Daily at 09:53 UTC, on main pushes, or by manual dispatch: check out current
  DisMech main, regenerate scores and embeddings, validate, smoke-test, and deploy.
- PRs: run contracts and build/smoke-test a small offline fixture. Fixture output
  cannot be uploaded or deployed. A full-corpus build is also required before
  accepting changes to extraction/scoring/rendering.
- Build permissions are read-only. Only the main-branch deploy job receives Pages
  write and OIDC permissions. No cross-repository write token is required.

**Initial rollout:** after this workflow is merged, set Settings → Pages → Source
to **GitHub Actions**, then dispatch the workflow on main. Confirm its validated
artifact deploys before merging the companion DisMech legacy-browser redirects.
That ordering prevents old URLs from redirecting to an unbuilt explorer.

The main page exposes build date, source SHA, model, coverage, and build status.
`manifest.json` adds source-file hashes, ontology versions/checksums and output
checksums. A failed build leaves the last successful site online; snapshots older
than three days are marked visibly.

## Scores and compatibility

The missing original exporter has been replaced by **context-v2-max-product**.
This explicitly changes scoring: direct support, decayed ontology paths, and
corpus specificity replace the unrecoverable causal-depth rule. Scores are
heuristics, not disease probabilities. See [METHODS.md](METHODS.md) before use.
Local model2vec embeddings likewise replace the legacy ada representations; there
is no claim of numerical comparability or superior biomedical retrieval quality.

Existing `#term/<ontology>/<CURIE>` links and all five TSV download paths under
`build/site-data/downloads/` are retained. `manifest.json` identifies the method
and source of those files. The March data remain accessible at the immutable
[snapshot commit](https://github.com/monarch-initiative/dismech-ont-scores/tree/567c7b957ed44fd4803aa89f87e21c403cfdf67e/build/site-data).
