# Repository Guidelines

## Project Structure & Module Organization
`index.html` is the browser entrypoint. `app/` contains the static browser assets: `styles.css` and `app.js`. `scripts/build_browser_data.py` converts raw TSV exports into browser JavaScript shards and publishes downloadable TSV copies. `justfile` is the main entrypoint for local workflows. Generated raw TSVs live in `data/context_scores/raw/`. Browser output lives in `build/site-data/`; generated `.json` files there are ignored, while the `.js` files and `downloads/*.tsv` files are the static-site payload.

## Build, Test, and Development Commands
Use `just` from the repository root.

- `just rebuild ../dismech`: export fresh scores from a sibling `dismech` checkout and rebuild all browser data.
- `just export-raw ../dismech`: create `data/context_scores/raw/context_scores.tsv` only.
- `just build-browser`: regenerate `build/site-data/` from existing raw TSVs.
- `just serve`: run a local static server at `http://localhost:8000/`.
- `just clean`: remove generated raw and browser data.

If your `dismech` checkout is elsewhere, set `DISMECH_DIR=/path/to/dismech` or pass the path explicitly.

## Coding Style & Naming Conventions
Match the existing style instead of introducing a formatter-specific rewrite. Python uses 4-space indentation, type hints, `snake_case`, and small helper functions. Frontend files use 2-space indentation, `camelCase` for JavaScript identifiers, and clear DOM id names such as `termResults` or `ontologyPills`. Keep filenames lowercase with underscores for Python and simple lowercase names for static assets.

## Testing Guidelines
There is no automated test suite yet. Treat rebuilds as the main verification path: run `just rebuild ../dismech` after Python changes and `just serve` after frontend changes, then confirm the browser loads, search works, and term detail pages render correctly. When changing data generation logic, verify `build/site-data/indexes/manifest.js`, `overview.js`, `term_index.js`, and a sample shard under `build/site-data/terms/`.

## Commit & Pull Request Guidelines
Use a simple imperative style such as `build: regenerate browser data` or `app: refine term detail rendering`. Keep commits focused. In pull requests, include the purpose, the `dismech` source revision or path used for rebuilds, commands run for verification, and screenshots for visible UI changes.
