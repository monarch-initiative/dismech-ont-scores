const test = require('node:test');
const assert = require('node:assert/strict');
const {entityRoute, parseRoute, diseaseId, matches} = require('../app/explorer-core.js');
test('entity routes round-trip names with punctuation, slash and unicode', () => {
  const id = 'disease:A#pathophysiology/Repair / β';
  assert.deepEqual(parseRoute(entityRoute(id, 'mechanisms')), {type: 'concept', id, space: 'mechanisms'});
});
test('old term routes still resolve and malformed escapes are harmless', () => {
  assert.deepEqual(parseRoute('#term/cell/CL%3ATEST'), {type: 'term', ontology: 'cell', id: 'CL:TEST'});
  assert.deepEqual(parseRoute('#concept/%XX'), {type: 'ontology'});
});
test('score rows join by source filename rather than display name or MONDO', () => {
  assert.equal(diseaseId('/kb/disorders/Name_A.yaml'), 'disease:Name_A');
});
test('search includes identifiers and annotations', () => {
  assert.ok(matches({name:'A', id:'disease:A', terms:[{id:'CL:TEST',label:'cell'}]}, 'CL:TEST cell'));
});
