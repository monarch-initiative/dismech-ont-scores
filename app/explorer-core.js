/* Shared identity and routes. Also exercised directly by Node contract tests. */
(function (root) {
  function entityRoute(id, space = 'pathophysiology') {
    return `#concept/${encodeURIComponent(id)}/${encodeURIComponent(space)}`;
  }
  function parseRoute(hash) {
    try {
      const [type, first, second] = hash.replace(/^#/, '').split('/');
      if (type === 'concept') return {type, id: decodeURIComponent(first), space: decodeURIComponent(second || 'pathophysiology')};
      if (type === 'term') return {type, ontology: first, id: decodeURIComponent(second)};
    } catch (_) { /* A malformed bookmark must not break the browser. */ }
    return {type: 'ontology'};
  }
  function matches(entity, query) {
    const text = `${entity.name} ${entity.id} ${entity.mondo || ''} ${(entity.terms || []).map(t => `${t.id} ${t.label}`).join(' ')}`.toLowerCase();
    return query.toLowerCase().split(/\s+/).filter(Boolean).every(token => text.includes(token));
  }
  function diseaseId(sourceFile) {
    return `disease:${sourceFile.split('/').pop().replace(/\.yaml$/, '')}`;
  }
  const api = {entityRoute, parseRoute, matches, diseaseId};
  root.ConceptCore = api;
  if (typeof module !== 'undefined') module.exports = api;
})(globalThis);
