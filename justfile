set shell := ["bash", "-cu"]

default_dismech_dir := if env_var_or_default("DISMECH_DIR", "") != "" {
  env_var_or_default("DISMECH_DIR", "")
} else {
  "../dismech"
}

python := if os() == "windows" {
  "py"
} else {
  "python3"
}

default:
  @just --list

[group('Build')]
export-raw dismech_dir=default_dismech_dir raw_dir="data/context_scores/raw":
  #!/usr/bin/env bash
  set -euo pipefail
  if [[ ! -d "{{dismech_dir}}/kb/disorders" ]]; then
    echo "dismech checkout not found at {{dismech_dir}}" >&2
    exit 1
  fi
  rm -rf "{{raw_dir}}"
  mkdir -p "{{raw_dir}}"
  uv run --project "{{dismech_dir}}" python -m dismech.export.context_score \
    -i "{{dismech_dir}}/kb/disorders" \
    -o "{{raw_dir}}"

[group('Build')]
build-browser raw_dir="data/context_scores/raw" output_dir="build/site-data" dismech_dir=default_dismech_dir:
  #!/usr/bin/env bash
  set -euo pipefail
  if [[ ! -f "{{raw_dir}}/context_scores.tsv" ]]; then
    echo "Missing raw score export at {{raw_dir}}/context_scores.tsv" >&2
    echo "Run: just export-raw {{dismech_dir}}" >&2
    exit 1
  fi
  rm -rf "{{output_dir}}"
  mkdir -p "{{output_dir}}"
  {{python}} scripts/build_browser_data.py \
    --raw-dir "{{raw_dir}}" \
    --output-dir "{{output_dir}}" \
    --dismech-dir "{{dismech_dir}}"

[group('Build')]
rebuild dismech_dir=default_dismech_dir raw_dir="data/context_scores/raw" output_dir="build/site-data":
  #!/usr/bin/env bash
  set -euo pipefail
  just export-raw "{{dismech_dir}}" "{{raw_dir}}"
  just build-browser "{{raw_dir}}" "{{output_dir}}" "{{dismech_dir}}"

[group('Build')]
clean:
  rm -rf build/site-data data/context_scores/raw

[group('Serve')]
serve port="8000":
  @echo "Ontology browser: http://localhost:{{port}}/app/"
  {{python}} -m http.server {{port}}
