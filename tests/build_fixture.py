"""Offline end-to-end fixture for PR builds; never eligible for deployment."""
import tempfile
from pathlib import Path
from test_pipeline import make_source, make_ontologies, encode
from build_site import build

with tempfile.TemporaryDirectory() as directory:
    root = Path(directory)
    build(make_source(root), Path('dist'), root / 'cache', make_ontologies(root), encode,
          {'model': 'TEST-DOUBLE-NOT-A-REAL-MODEL', 'model_revision': 'fixture',
           'ontology_urls': {key: 'test-fixture' for key in ('cell', 'anatomy', 'go', 'phenotype')}})
