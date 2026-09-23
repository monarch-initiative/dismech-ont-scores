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
    this.maps = Object.fromEntries(Object.entries(catalog.spaces).map(([name, space]) => [name, new Map(space.points.map(p => [p.id, p]))]));
    document.getElementById('searchInput').addEventListener('input', event => {
      this.query = event.target.value;
      this.renderResults();
      this.draw();
    });
    document.getElementById('spaceSelect').addEventListener('change', event => {
      this.space = event.target.value;
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
    window.addEventListener('resize', () => this.draw());
    const canvas = document.getElementById('conceptMap');
    canvas.addEventListener('click', event => {
      const point = this.nearestPoint(event);
      if (point) location.hash = ConceptCore.entityRoute(point.id, this.space);
    });
    canvas.addEventListener('mousemove', event => {
      const point = this.nearestPoint(event);
      document.getElementById('mapHover').textContent = point ? this.entities[point.id].name : 'Select a point or use the searchable list.';
      canvas.style.cursor = point ? 'pointer' : 'default';
    });
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
      this.space = this.catalog.spaces[route.space] ? route.space : 'pathophysiology';
      if (this.entities[this.selected]?.kind === 'mechanism') this.space = 'mechanisms';
      this.show(true);
      this.render();
    } else if (route.type === 'term' || route.type === 'ontology') {
      this.show(false);
    }
  }
  filtered(entity) {
    const disease = entity.parent || entity.id;
    return ConceptCore.matches(entity, this.query) && (!this.termFilter || this.termFilter.ids.has(disease));
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
    document.getElementById('spaceInfo').textContent = `${space.points.length.toLocaleString()} represented · ${space.excluded.length} excluded · ${space.projection || 'No projection'} · ${space.model}`;
    document.getElementById('termFilterInfo').textContent = this.termFilter ? `Selected term: ${this.termFilter.label} (${this.termFilter.id}). Showing its associated diseases and their mechanisms.` : 'All concepts in this representation';
    document.getElementById('clearTermFilter').hidden = !this.termFilter;
    this.renderResults();
    this.renderDetail();
    this.draw();
  }
  renderResults() {
    const root = document.getElementById('conceptResults');
    root.replaceChildren();
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
      link.href = `#term/${term.ontology}/${encodeURIComponent(term.id)}`;
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
  draw() {
    const canvas = document.getElementById('conceptMap');
    if (document.getElementById('embeddingView').hidden) return;
    const width = canvas.clientWidth || 600, height = 400, ratio = devicePixelRatio || 1;
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    const ctx = canvas.getContext('2d');
    ctx.scale(ratio, ratio);
    ctx.clearRect(0, 0, width, height);
    const points = this.catalog.spaces[this.space].points;
    if (!points.length) return;
    let xmin = Infinity, xmax = -Infinity, ymin = Infinity, ymax = -Infinity;
    for (const p of points) {
      xmin = Math.min(xmin, p.xy[0]); xmax = Math.max(xmax, p.xy[0]);
      ymin = Math.min(ymin, p.xy[1]); ymax = Math.max(ymax, p.xy[1]);
    }
    this.positions = points.map(point => ({id: point.id,
      x: 15 + (point.xy[0] - xmin) / (xmax - xmin || 1) * (width - 30),
      y: 15 + (point.xy[1] - ymin) / (ymax - ymin || 1) * (height - 30)}));
    for (const p of this.positions) {
      ctx.fillStyle = this.filtered(this.entities[p.id]) ? 'rgba(14,109,99,0.48)' : 'rgba(130,130,130,0.07)';
      ctx.beginPath(); ctx.arc(p.x, p.y, 2, 0, 2 * Math.PI); ctx.fill();
    }
    const selected = this.positions.find(p => p.id === this.selected);
    if (selected) {
      ctx.strokeStyle = '#b85c38'; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.arc(selected.x, selected.y, 7, 0, 2 * Math.PI); ctx.stroke();
    }
  }
  nearestPoint(event) {
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left, y = event.clientY - rect.top;
    let best, distance = 64;
    for (const p of this.positions) {
      if (!this.filtered(this.entities[p.id])) continue;
      const d = (p.x - x) ** 2 + (p.y - y) ** 2;
      if (d < distance) { best = p; distance = d; }
    }
    return best;
  }
}

window.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch(`build/site-data/concepts.json?v=${window.CONCEPT_RELEASE || ''}`);
    if (!response.ok) throw new Error(`Concept inventory: HTTP ${response.status}`);
    const catalog = await response.json();
    if (catalog.release_id !== window.CONCEPT_RELEASE) throw new Error('The snapshot changed. Reload the page.');
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
