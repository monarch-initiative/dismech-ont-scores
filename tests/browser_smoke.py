"""Exercise old term routes and new disease/mechanism navigation in Chromium."""
import functools
import http.server
import json
import threading
from pathlib import Path
from urllib.parse import quote
from playwright.sync_api import sync_playwright
import sys
sys.path.insert(0, str(Path(__file__).resolve().parents[1] / 'scripts'))
from build_site import read_shard

site = Path(sys.argv[1] if len(sys.argv) > 1 else 'dist').resolve()
catalog = json.loads((site / 'build/site-data/concepts.json').read_text())
terms = json.loads((site / 'build/site-data/indexes/term_index.json').read_text())
# Pick a term whose ranking includes a represented disease with mechanism nodes.
for term in terms:
    shard = site / 'build/site-data' / term['shard_path']
    detail = read_shard(shard)
    disease = next((catalog['entities'].get('disease:' + Path(row['source_file']).stem)
                    for row in detail['diseases'][:120]
                    if catalog['entities']['disease:' + Path(row['source_file']).stem]['nodes']), None)
    if disease:
        break
else:
    raise AssertionError('No term/disease/mechanism journey available')

class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *args):
        pass

server = http.server.ThreadingHTTPServer(('127.0.0.1', 0), functools.partial(QuietHandler, directory=str(site)))
threading.Thread(target=server.serve_forever, daemon=True).start()
errors = []
try:
    with sync_playwright() as playwright:
        browser = playwright.chromium.launch()
        page = browser.new_page(viewport={'width': 1440, 'height': 1000})
        page.on('pageerror', lambda error: errors.append(str(error)))
        origin = f'http://127.0.0.1:{server.server_port}'
        page.goto(f"{origin}/#term/{term['ontology']}/{quote(term['term_id'], safe='')}")
        page.wait_for_function("document.getElementById('freshness').textContent.startsWith('Data built')")
        page.locator('#termDetail .disease-row').first.wait_for()
        assert page.locator('#detailPanel').bounding_box()['width'] > 1200
        page.locator('#rankLimit').select_option('10')
        assert page.locator('#termDetail .disease-row').count() == min(10, len(detail['diseases']))
        page.locator('#rankLimit').select_option('100000')
        assert page.locator('#termDetail .disease-row').count() == len(detail['diseases'])
        page.locator(f'#termDetail a[href*="{quote(disease["id"], safe="")}"]').first.click()
        page.locator('#conceptDetail h2').wait_for()
        assert page.locator('#conceptDetail h2').inner_text() == disease['name']
        page.locator('#conceptDetail a[href*="mechanisms"]').first.click()
        page.wait_for_function("document.getElementById('spaceSelect').value === 'mechanisms'")
        assert page.locator('#conceptDetail h2').inner_text() in [catalog['entities'][key]['name'] for key in disease['nodes']]
        # Source and annotation links remain usable, including after navigation back.
        assert page.locator('#conceptDetail a', has_text='Open curated entry').count() == 1
        page.go_back()
        page.wait_for_function("document.getElementById('spaceSelect').value === 'pathophysiology'")
        page.locator('#clearTermFilter').click()
        for method in catalog['spaces']['pathophysiology'].get('projection_methods', ['pca']):
            page.locator('#projectionSelect').select_option(method)
            page.wait_for_function("method => document.getElementById('conceptMap')._fullLayout.xaxis.title.text === method.toUpperCase() + ' 1'", arg=method)
        page.locator('#colorsNone').click()
        assert page.locator('#colorLegend input:checked').count() == 0
        page.locator('#colorsAll').click()
        assert page.locator('#colorLegend input:checked').count() > 0
        page.locator('#colorSelect').select_option('categories')
        assert page.locator('#colorLegend input').count() > 0
        if disease.get('categories'):
            assert disease['categories'][0] in page.locator('#colorLegend').inner_text()
        page.locator('#conceptMap .nsewdrag').wait_for()
        page.locator('#mapAction').select_option('zoom')
        page.locator('#conceptMap').scroll_into_view_if_needed()
        before = page.evaluate("document.getElementById('conceptMap')._fullLayout.xaxis.range.slice()")
        box = page.locator('#conceptMap .nsewdrag').bounding_box()
        page.mouse.move(box['x'] + box['width'] * .2, box['y'] + box['height'] * .2)
        page.mouse.down()
        page.mouse.move(box['x'] + box['width'] * .7, box['y'] + box['height'] * .7, steps=5)
        page.mouse.up()
        page.wait_for_function("before => { const r = document.getElementById('conceptMap')._fullLayout.xaxis.range; return r[1]-r[0] < before[1]-before[0]; }", arg=before)
        page.locator('#resetZoom').click()
        page.wait_for_function("document.getElementById('conceptMap')._fullLayout.xaxis.autorange")
        page.locator('#showLabels').check()
        assert page.evaluate("document.getElementById('conceptMap').data[0].mode.includes('text')")
        page.locator('#mapAction').select_option('select')
        page.locator('#conceptMap').scroll_into_view_if_needed()
        box = page.locator('#conceptMap .nsewdrag').bounding_box()
        page.mouse.move(box['x'] + 2, box['y'] + 2)
        page.mouse.down()
        page.mouse.move(box['x'] + box['width'] - 2, box['y'] + box['height'] - 2, steps=5)
        page.mouse.up()
        page.wait_for_function("document.getElementById('regionInfo').textContent.includes('points selected')")
        with page.expect_download() as download:
            page.locator('#downloadSelection').click()
        assert download.value.suggested_filename == 'selected-concepts.csv'
        assert 'id,name,group' in Path(download.value.path()).read_text()
        page.locator('#clearRegion').click()
        page.wait_for_function("document.getElementById('clearRegion').disabled")
        page.locator('#colorLegend input').first.uncheck()
        assert not page.locator('#colorLegend input').first.is_checked()
        page.locator('#colorLegend input').first.check()
        page.locator('#showLabels').uncheck()
        page.screenshot(path='/tmp/concept-explorer-desktop.png', full_page=True)
        page.set_viewport_size({'width': 390, 'height': 844})
        page.screenshot(path='/tmp/concept-explorer-mobile.png', full_page=True)
        assert page.evaluate('document.documentElement.scrollWidth <= window.innerWidth')
        page.goto(f'{origin}/?focus={quote(disease["name"], safe="")}&space=phenotypes')
        page.locator('#conceptDetail h2').wait_for()
        assert page.locator('#conceptDetail h2').inner_text() == disease['name']
        assert page.locator('#spaceSelect').input_value() == 'phenotypes'
        page.goto(f'{origin}/#concept/does-not-exist/pathophysiology')
        page.wait_for_function("document.getElementById('conceptDetail').textContent.includes('absent from this snapshot')")
        page.goto(f'{origin}/#ontology')
        page.locator('#searchInput').fill('peroxisome')
        page.wait_for_function("document.querySelector('#termResults button')?.textContent.includes('GO:0005777')")
        page.locator('#termResults button').first.click()
        page.wait_for_function("document.querySelector('#termDetail h2')?.textContent === 'peroxisome'")
        assert page.locator('#termDetail .disease-row').count() > 0
        assert not errors, errors
        browser.close()
finally:
    server.shutdown()
print('Browser smoke tests passed (term → disease → mechanism → back; missing ID; mobile layout).')
