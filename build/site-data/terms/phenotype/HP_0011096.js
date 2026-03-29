window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0011096"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0011096",
  "term_label": "Peripheral demyelination",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Cockayne Syndrome",
      "disease_term_id": "MONDO:0016006",
      "source_file": "Cockayne_Syndrome.yaml",
      "term_id": "HP:0011096",
      "term_label": "Peripheral demyelination",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0011096",
      "best_source_term_label": "Peripheral demyelination",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0011096"
      ],
      "supporting_source_term_labels": [
        "Peripheral demyelination"
      ],
      "supporting_source_node_names": [
        "Progressive Peripheral Demyelination"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0011096" } }));
