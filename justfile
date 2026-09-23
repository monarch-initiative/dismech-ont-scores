set shell := ["bash", "-cu"]
set positional-arguments := true

default_dismech_dir := env_var_or_default("DISMECH_DIR", "../dismech")

default:
  @just --list

rebuild dismech_dir=default_dismech_dir:
  uv run python scripts/build_site.py --source "$1"

validate:
  uv run python scripts/build_site.py --validate

test:
  uv run pytest -q
  node --test tests/core.test.cjs

smoke:
  uv run python tests/browser_smoke.py

serve port="8000":
  uv run python -m http.server "$1" --directory dist
