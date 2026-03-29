# dismech-ont-scores

Derived ontology score exports and an ontology-centric browser built from
[`dismech`](../dismech).

This repo is intentionally manual-first for now. It does not depend on GitHub
Actions. The main workflow is:

1. Export raw disease-to-ontology score TSVs from a local `dismech` checkout.
2. Materialize browser-friendly JavaScript shards and a provenance manifest.
3. Open the static ontology browser directly from disk or serve it locally.

## What the browser does

- Starts from ontology terms, not diseases.
- Lets you browse by `cell`, `anatomy`, `go`, and `phenotype`.
- Supports term search by label or CURIE.
- Shows ranked diseases for a selected ontology term.
- Preserves direct vs propagated score signal and best-source provenance.

## Manual workflow

From this repo:

```bash
just rebuild ../dismech
just serve
```

Then open:

```text
file:///Users/cjm/repos/dismech-ont-scores/app/index.html
```

or:

```text
http://localhost:8000/app/
```

Useful variants:

```bash
just export-raw ../dismech
just build-browser
just clean
```

## Build outputs

- Raw scorer output: `data/context_scores/raw/`
- Browser data shards: `build/site-data/`
- Browser app: `app/`
- Published raw downloads: `build/site-data/downloads/*.tsv`

The published static site is just:

- `app/index.html`
- `app/app.js`
- `app/styles.css`
- generated `build/site-data/**/*.js`
- generated `build/site-data/downloads/*.tsv`

JSON copies are not part of the normal site build. If you want them for
debugging, run:

```bash
python3 scripts/build_browser_data.py \
  --raw-dir data/context_scores/raw \
  --output-dir build/site-data \
  --dismech-dir ../dismech \
  --write-json
```

## Notes

- The build reads from the local source checkout you point it at; the default is
  `../dismech`.
- Provenance for each rebuild is written to
  `build/site-data/indexes/manifest.js`.
