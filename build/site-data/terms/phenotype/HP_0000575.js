window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0000575"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0000575",
  "term_label": "Scotoma",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.229376,
  "mean_score": 0.229376,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Stargardt Disease",
      "disease_term_id": "MONDO:0019353",
      "source_file": "Stargardt_Disease.yaml",
      "term_id": "HP:0000575",
      "term_label": "Scotoma",
      "score": 0.229376,
      "direct_score": 0.0,
      "propagated_score": 0.229376,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "HP:0000603",
      "best_source_term_label": "Central scotoma",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000603"
      ],
      "supporting_source_term_labels": [
        "Central scotoma"
      ],
      "supporting_source_node_names": [
        "Central scotoma"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0000575" } }));
