window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0006660"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0006660",
  "term_label": "muscular coat",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.1225,
  "mean_score": 0.1225,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Hirschsprung Disease",
      "disease_term_id": "MONDO:0018309",
      "source_file": "Hirschsprung_Disease.yaml",
      "term_id": "UBERON:0006660",
      "term_label": "muscular coat",
      "score": 0.1225,
      "direct_score": 0.0,
      "propagated_score": 0.1225,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002439",
      "best_source_term_label": "myenteric nerve plexus",
      "best_source_path_score": 0.245,
      "best_source_path": "part_of > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0002439"
      ],
      "supporting_source_term_labels": [
        "myenteric nerve plexus"
      ],
      "supporting_source_node_names": [
        "Failure of Enteric Ganglion Cell Migration"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0006660" } }));
