window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0007401"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0007401",
  "term_label": "Macular atrophy",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.32768,
  "mean_score": 0.32768,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Stargardt Disease",
      "disease_term_id": "MONDO:0019353",
      "source_file": "Stargardt_Disease.yaml",
      "term_id": "HP:0007401",
      "term_label": "Macular atrophy",
      "score": 0.32768,
      "direct_score": 0.32768,
      "propagated_score": 0.32768,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0007401",
      "best_source_term_label": "Macular atrophy",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0007401"
      ],
      "supporting_source_term_labels": [
        "Macular atrophy"
      ],
      "supporting_source_node_names": [
        "Macular atrophy"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0007401" } }));
