window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0033521"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0033521",
  "term_label": "Nasal dryness",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Empty Nose Syndrome",
      "disease_term_id": "MONDO:1060148",
      "source_file": "Empty_Nose_Syndrome.yaml",
      "term_id": "HP:0033521",
      "term_label": "Nasal dryness",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0033521",
      "best_source_term_label": "Nasal dryness",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0033521"
      ],
      "supporting_source_term_labels": [
        "Nasal dryness"
      ],
      "supporting_source_node_names": [
        "Nasal dryness"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0033521" } }));
