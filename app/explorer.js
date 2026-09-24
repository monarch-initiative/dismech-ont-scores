/* Ontology links and vector neighborhoods share a current-source inventory. */
class ConceptExplorer {
  constructor(catalog) {
    this.catalog = catalog;
    this.entities = catalog.entities;
    this.details = new Map();
    this.space = 'pathophysiology';
    this.selected = null;
    this.query = '';
    this.termFilter = null;
    this.positions = [];
    this.region = null;
    this.colorBy = 'categories';
    this.projection = 'umap';
    this.plotRevision = 0;
    this.hiddenGroups = new Set();
    document.getElementById('colorSelect').addEventListener('change', event => {
      this.colorBy = event.target.value;
      this.hiddenGroups.clear();
      this.render();
    });
    document.getElementById('clearRegion').addEventListener('click', () => {
      this.region = null;
      this.render();
    });
    document.getElementById('downloadSelection').addEventListener('click', () => {
      const rows = this.catalog.spaces[this.space].points.filter(p => this.filtered(this.entities[p.id]));
      const csv = ['id,name,group', ...rows.map(p => [p.id, this.entities[p.id].name, this.group(this.entities[p.id])].map(v => '"' + v.replaceAll('"', '""') + '"').join(','))].join('\n');
      const url = URL.createObjectURL(new Blob([csv], {type: 'text/csv;charset=utf-8'}));
      const a = document.createElement('a'); a.href = url; a.download = 'selected-concepts.csv'; a.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    });
    this.maps = Object.fromEntries(Object.entries(catalog.spaces).map(([name, space]) => [name, new Map(space.points.map(p => [p.id, p]))]));
    document.getElementById('searchInput').addEventListener('input', event => {
      this.query = event.target.value;
      this.renderResults();
      this.draw();
    });
    document.getElementById('spaceSelect').addEventListener('change', event => {
      this.space = event.target.value;
      this.plotRevision++;
      this.region = null;
      if (this.selected) location.hash = ConceptCore.entityRoute(this.selected, this.space);
      this.render();
    });
    document.getElementById('showOntology').addEventListener('click', () => {
      const term = this.termFilter;
      location.hash = term ? `term/${term.ontology}/${encodeURIComponent(term.id)}` : '#ontology';
      this.show(false);
    });
    document.getElementById('showEmbeddings').addEventListener('click', () => { this.show(true); this.render(); });
    document.getElementById('clearTermFilter').addEventListener('click', () => { this.termFilter = null; this.render(); });
    window.addEventListener('hashchange', () => this.route());
    window.addEventListener('ontologyTermSelected', event => {
      this.termFilter = {id: event.detail.term_id, ontology: event.detail.ontology,
                         label: event.detail.term_label,
                         ids: new Set(event.detail.diseases.map(r => ConceptCore.diseaseId(r.source_file)))};
      this.render();
    });
    document.getElementById('projectionSelect').addEventListener('change', event => {
      this.projection = event.target.value; this.region = null; this.plotRevision++; this.render();
    });
    document.getElementById('showLabels').addEventListener('change', () => this.draw());
    document.getElementById('mapAction').addEventListener('change', () => this.draw());
    document.getElementById('resetZoom').addEventListener('click', () => {
      Plotly.relayout('conceptMap', {'xaxis.autorange': true, 'yaxis.autorange': true});
    });
    document.getElementById('focusZoom').addEventListener('click', () => this.focusNeighborhood());
    for (const [id, hide] of [['colorsAll', false], ['colorsNone', true]]) {
      document.getElementById(id).addEventListener('click', () => {
        this.hiddenGroups = hide ? new Set(this.colors.keys()) : new Set(); this.render();
      });
    }
    this.route();
    const params = new URLSearchParams(location.search);
    if (!location.hash && (params.has('focus') || params.has('space'))) {
      const focus = params.get('focus');
      const space = params.get('space');
      if (this.catalog.spaces[space]) this.space = space;
      const matches = Object.values(this.entities).filter(e => e.kind === 'disease' && (e.name === focus || e.id === focus));
      if (matches.length === 1) {
        location.hash = ConceptCore.entityRoute(matches[0].id, this.space);
      } else {
        this.query = focus || '';
        document.getElementById('searchInput').value = this.query;
        this.show(true);
        this.render();
      }
    }
  }
  show(embeddings) {
    document.body.classList.toggle('map-active', embeddings);
    document.getElementById('ontologyView').hidden = embeddings;
    document.getElementById('embeddingView').hidden = !embeddings;
    document.getElementById('showOntology').setAttribute('aria-pressed', String(!embeddings));
    document.getElementById('showEmbeddings').setAttribute('aria-pressed', String(embeddings));
    this.draw();
  }
  route() {
    const route = ConceptCore.parseRoute(location.hash);
    if (route.type === 'concept') {
      this.selected = route.id;
      const oldSpace = this.space;
      this.space = this.catalog.spaces[route.space] ? route.space : 'pathophysiology';
      if (this.entities[this.selected]?.kind === 'mechanism') this.space = 'mechanisms';
      if (oldSpace !== this.space) { this.region = null; this.plotRevision++; }
      this.show(true);
      this.render();
    } else if (route.type === 'term' || route.type === 'ontology') {
      this.show(false);
    }
  }
  filtered(entity) {
    const disease = entity.parent || entity.id;
    return (!this.region || this.region.has(entity.id)) && !this.hiddenGroups.has(this.group(entity)) && ConceptCore.matches(entity, this.query) && (!this.termFilter || this.termFilter.ids.has(disease));
  }
  group(entity) {
    const parent = this.entities[entity.parent] || entity;
    return this.colorBy === 'kind' ? entity.kind : String(parent[this.colorBy]?.[0] || 'Unclassified');
  }
  renderLegend() {
    const groups = [...new Set(this.catalog.spaces[this.space].points.map(p => this.group(this.entities[p.id])))].sort();
    this.colors = new Map(groups.map((group, i) => [group, `hsl(${(i * 137.508) % 360}, 60%, 38%)`]));
    const root = document.getElementById('colorLegend'); root.replaceChildren();
    for (const group of groups) {
      const label = document.createElement('label');
      const checkbox = document.createElement('input'); checkbox.type = 'checkbox'; checkbox.checked = !this.hiddenGroups.has(group);
      checkbox.addEventListener('change', () => { checkbox.checked ? this.hiddenGroups.delete(group) : this.hiddenGroups.add(group); this.renderResults(); this.draw(); });
      const swatch = document.createElement('span'); swatch.className = 'swatch'; swatch.style.background = this.colors.get(group);
      label.append(checkbox, swatch, document.createTextNode(group)); root.append(label);
    }
  }
  link(id, text, space = this.space) {
    const anchor = document.createElement('a');
    anchor.href = ConceptCore.entityRoute(id, space);
    anchor.textContent = text || this.entities[id]?.name || id;
    return anchor;
  }
  render() {
    document.getElementById('spaceSelect').value = this.space;
    const space = this.catalog.spaces[this.space];
    const methods = space.projection_methods || ['pca'];
    if (!methods.includes(this.projection)) this.projection = methods.includes('umap') ? 'umap' : 'pca';
    for (const option of document.getElementById('projectionSelect').options) option.disabled = !methods.includes(option.value);
    document.getElementById('projectionSelect').value = this.projection;
    document.getElementById('focusZoom').disabled = !this.maps[this.space].has(this.selected);
    document.getElementById('spaceInfo').textContent = `${space.points.length.toLocaleString()} represented · ${space.excluded.length} excluded · ${this.projection.toUpperCase()} · ${space.model}`;
    document.getElementById('termFilterInfo').textContent = this.termFilter ? `Selected term: ${this.termFilter.label} (${this.termFilter.id}). Showing its associated diseases and their mechanisms.` : 'All concepts in this representation';
    document.getElementById('clearTermFilter').hidden = !this.termFilter;
    this.renderLegend();
    this.renderResults();
    this.renderDetail();
    this.draw();
  }
  renderResults() {
    const root = document.getElementById('conceptResults');
    root.replaceChildren();
    document.getElementById('regionInfo').textContent = this.region ? `${this.region.size} points selected. Search and color filters further restrict the list and download.` : 'No points selected. Drag to zoom, or choose a selection tool to filter the list.';
    document.getElementById('clearRegion').disabled = !this.region;
    // Include excluded entities so missing representations remain discoverable.
    const candidates = Object.values(this.entities).filter(e => this.space in e.spaces && this.filtered(e));
    document.getElementById('conceptResultCount').textContent = `${candidates.length.toLocaleString()} matches (first 100 shown)`;
    for (const entity of candidates.slice(0, 100)) {
      const row = document.createElement('div');
      row.className = 'concept-result';
      row.append(this.link(entity.id));
      const caption = document.createElement('small');
      caption.textContent = entity.parent ? this.entities[entity.parent].name : entity.mondo || entity.kind;
      row.append(caption);
      root.append(row);
    }
    if (!candidates.length) root.textContent = 'No matches. Clear the selected term or change your search.';
  }
  async renderDetail() {
    const root = document.getElementById('conceptDetail');
    root.replaceChildren();
    const record = this.entities[this.selected];
    if (!record) {
      root.textContent = this.selected ? 'This concept is absent from this snapshot. Search for its current name.' : 'Select a disease or mechanism to inspect its neighborhood.';
      return;
    }
    const selected = this.selected;
    let entity;
    try {
      if (!this.details.has(record.detail_path)) {
        const response = await fetch(`build/site-data/${record.detail_path}?v=${this.catalog.release_id}`);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const detail = await response.json();
        if (detail.__release_id !== this.catalog.release_id) throw new Error('The snapshot changed. Reload the page.');
        this.details.set(record.detail_path, detail);
      }
      entity = this.details.get(record.detail_path)[selected];
      if (selected !== this.selected) return;
      root.replaceChildren();
    } catch (error) {
      root.textContent = `Could not load concept detail: ${error.message}`;
      return;
    }
    const heading = document.createElement('h2');
    heading.textContent = entity.name;
    root.append(heading);
    if (entity.parent) root.append(this.link(entity.parent, `In ${this.entities[entity.parent].name}`, 'pathophysiology'));
    const source = document.createElement('p');
    const anchor = document.createElement('a');
    anchor.href = entity.page_url;
    anchor.textContent = 'Open curated entry and pathograph';
    source.append(anchor);
    root.append(source);
    const terms = document.createElement('div');
    terms.className = 'concept-terms';
    for (const term of entity.terms) {
      const link = document.createElement('a');
      const ranked = (window.ontologyScoresTermIndex || []).some(row => row.ontology === term.ontology && row.term_id === term.id);
      link.href = ranked ? `#term/${term.ontology}/${encodeURIComponent(term.id)}` : `https://bioregistry.io/${encodeURIComponent(term.id)}`;
      if (!ranked) link.title = 'Curated annotation; no disease ranking in this export';
      link.textContent = `${term.label || term.id} (${term.id})`;
      terms.append(link);
    }
    root.append(terms);
    const space = this.catalog.spaces[this.space];
    const point = this.maps[this.space].get(entity.id);
    const neighborTitle = document.createElement('h3');
    neighborTitle.textContent = 'Similar text — cosine neighbors';
    root.append(neighborTitle);
    if (point) {
      const list = document.createElement('ol');
      for (const neighbor of point.neighbors) {
        const item = document.createElement('li');
        item.append(this.link(neighbor.id, `${this.entities[neighbor.id].name} · ${neighbor.cosine.toFixed(3)}`));
        list.append(item);
      }
      root.append(list);
    } else {
      const missing = document.createElement('p');
      missing.textContent = space.excluded.find(x => x.id === entity.id)?.reason || 'This concept has no representation in the selected space.';
      root.append(missing);
    }
    if (entity.nodes?.length) {
      const title = document.createElement('h3');
      title.textContent = 'Curated mechanisms';
      root.append(title);
      const list = document.createElement('ul');
      for (const id of entity.nodes) {
        const item = document.createElement('li');
        item.append(this.link(id, null, 'mechanisms'));
        list.append(item);
      }
      root.append(list);
    }
    if (entity.downstream?.length) {
      const title = document.createElement('h3');
      title.textContent = 'Curated downstream links';
      root.append(title);
      const list = document.createElement('ul');
      for (const edge of entity.downstream) {
        const item = document.createElement('li');
        const target = this.entities[entity.parent].nodes.find(id => this.entities[id].name === edge.target);
        if (this.entities[target]) item.append(this.link(target, edge.target, 'mechanisms'));
        else item.textContent = `${edge.target} (see entry for phenotype or other target)`;
        list.append(item);
      }
      root.append(list);
    }
    if (entity.conforms_to) {
      const p = document.createElement('p');
      p.append('Curated module conformance: ');
      const [moduleName, nodeName] = entity.conforms_to.split('#');
      const moduleId = `module:${moduleName}`;
      const module = this.entities[moduleId];
      const nodeId = module?.nodes.find(id => this.entities[id].name === nodeName);
      if (module) p.append(this.link(nodeId || moduleId, entity.conforms_to, 'mechanisms'));
      else p.append(entity.conforms_to);
      root.append(p);
    }
    const details = document.createElement('details');
    const summary = document.createElement('summary');
    summary.textContent = 'Text used for this embedding';
    const text = document.createElement('p');
    text.textContent = entity.spaces[this.space] || 'No text in this representation';
    details.append(summary, text);
    root.append(details);
  }
  xy(point) { return point.projections?.[this.projection] || point.xy; }
  focusNeighborhood() {
    const point = this.maps[this.space].get(this.selected);
    if (!point) return;
    const center = this.xy(point);
    const distances = this.catalog.spaces[this.space].points.map(p => Math.hypot(this.xy(p)[0]-center[0], this.xy(p)[1]-center[1])).sort((a,b) => a-b);
    const radius = (distances[Math.min(15, distances.length-1)] || 1) * 1.25;
    Plotly.relayout('conceptMap', {'xaxis.range': [center[0]-radius, center[0]+radius], 'yaxis.range': [center[1]-radius, center[1]+radius]});
  }
  draw() {
    if (document.getElementById('embeddingView').hidden || !this.colors) return;
    const plot = document.getElementById('conceptMap');
    const labels = document.getElementById('showLabels').checked;
    const groups = new Map();
    const escape = value => String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
    for (const point of this.catalog.spaces[this.space].points) {
      const entity = this.entities[point.id];
      // Selection filters the list/export, but leaves the plot available for a new selection.
      const region = this.region; this.region = null;
      const visible = this.filtered(entity); this.region = region;
      if (!visible) continue;
      const group = this.group(entity);
      if (!groups.has(group)) groups.set(group, {x: [], y: [], customdata: [], text: [], hovertext: []});
      const trace = groups.get(group), xy = this.xy(point);
      trace.x.push(xy[0]); trace.y.push(xy[1]); trace.customdata.push(point.id);
      trace.text.push(escape(entity.name)); trace.hovertext.push(`${escape(entity.name)}<br>${escape(group)}`);
    }
    const traces = [...groups].map(([name, data]) => ({...data, name, type: 'scattergl',
      mode: labels ? 'markers+text' : 'markers', textposition: 'top center', textfont: {size: 10},
      marker: {color: this.colors.get(name), size: 8, opacity: 0.8},
      selectedpoints: this.region ? data.customdata.flatMap((id,i) => this.region.has(id) ? [i] : []) : null,
      hovertemplate: '%{hovertext}<extra></extra>'}));
    const selected = this.maps[this.space].get(this.selected);
    if (selected) traces.push({x: [this.xy(selected)[0]], y: [this.xy(selected)[1]],
      customdata: [selected.id], text: [escape(this.entities[selected.id].name)],
      type: 'scattergl', mode: 'markers', marker: {size: 18, symbol: 'star', color: '#6d28d9'},
      hovertemplate: '%{text}<extra>Focused</extra>', name: 'Focused'});
    Plotly.react(plot, traces, {
      autosize: true, height: 650, showlegend: false, hovermode: 'closest',
      dragmode: document.getElementById('mapAction').value,
      uirevision: `${this.space}/${this.projection}/${this.plotRevision}`,
      xaxis: {title: this.projection.toUpperCase() + ' 1', zeroline: false},
      yaxis: {title: this.projection.toUpperCase() + ' 2', zeroline: false},
      margin: {l: 55, r: 20, t: 35, b: 55}, paper_bgcolor: 'rgba(0,0,0,0)',
      font: {family: 'Georgia, serif', color: '#374151'}
    }, {responsive: true, scrollZoom: true, displayModeBar: true, displaylogo: false});
    if (!this.plotBound) {
      this.plotBound = true;
      plot.on('plotly_click', event => {
        const id = event.points?.[0]?.customdata;
        if (id) location.hash = ConceptCore.entityRoute(id, this.space);
      });
      plot.on('plotly_selected', event => {
        if (!event || (!event.range && !event.lassoPoints)) return;
        this.region = new Set(event.points.map(p => p.customdata)); this.renderResults();
      });
      plot.on('plotly_deselect', () => { this.region = null; this.renderResults(); });
    }
  }

}

window.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch(`build/site-data/concepts.json?v=${window.CONCEPT_RELEASE || ''}`);
    if (!response.ok) throw new Error(`Concept inventory: HTTP ${response.status}`);
    const catalog = await response.json();
    if (catalog.release_id !== window.CONCEPT_RELEASE || catalog.release_id !== window.ontologyScoresManifest?.release_id) throw new Error('The snapshot changed. Reload the page.');
    for (const space of Object.values(catalog.spaces)) {
      if (!space.ids) continue;
      for (const point of space.points) {
        point.id = space.ids[point.id];
        for (const neighbor of point.neighbors) neighbor.id = space.ids[neighbor.id];
      }
      delete space.ids;
    }
    const status = document.getElementById('freshness');
    const age = (Date.now() - Date.parse(catalog.generated_at)) / 86400000;
    status.textContent = `Data built ${new Date(catalog.generated_at).toLocaleString()} · source ${catalog.source_sha.slice(0, 12)}${age > 3 ? ' · This snapshot is more than three days old' : ''}`;
    new ConceptExplorer(catalog);
    if (catalog.unresolved_annotations.length) {
      const report = document.createElement('a');
      report.href = 'build/site-data/downloads/unresolved_annotations.json';
      report.textContent = ` · ${catalog.unresolved_annotations.length} annotations unresolved in the ontology snapshot (direct-only)`;
      status.append(report);
    }
    // The ontology view may have loaded its initial shard before this fetch finished.
    const route = ConceptCore.parseRoute(location.hash);
    const detail = window.ontologyScoresTermShards?.[`${route.ontology}::${route.id}`];
    if (detail) window.dispatchEvent(new CustomEvent('ontologyTermSelected', {detail}));
  } catch (error) {
    document.getElementById('freshness').textContent = `Concept browser failed to load: ${error.message}`;
    document.getElementById('showEmbeddings').disabled = true;
  }
});
