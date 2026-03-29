window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0031352"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0031352",
  "term_label": "Chest tightness",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.555556,
  "mean_score": 0.555556,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Asthma",
      "disease_term_id": "MONDO:0004979",
      "source_file": "Asthma.yaml",
      "term_id": "HP:0031352",
      "term_label": "Chest tightness",
      "score": 0.555556,
      "direct_score": 0.555556,
      "propagated_score": 0.555556,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0031352",
      "best_source_term_label": "Chest tightness",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0031352"
      ],
      "supporting_source_term_labels": [
        "Chest tightness"
      ],
      "supporting_source_node_names": [
        "Chest Tightness"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0031352" } }));
