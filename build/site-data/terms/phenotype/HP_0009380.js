window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0009380"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0009380",
  "term_label": "Finger aplasia",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.28672,
  "mean_score": 0.28672,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Fanconi_Anemia",
      "disease_term_id": "MONDO:0019391",
      "source_file": "Fanconi_Anemia.yaml",
      "term_id": "HP:0009380",
      "term_label": "Finger aplasia",
      "score": 0.28672,
      "direct_score": 0.0,
      "propagated_score": 0.28672,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "HP:0009777",
      "best_source_term_label": "Absent thumb",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0009777"
      ],
      "supporting_source_term_labels": [
        "Absent thumb"
      ],
      "supporting_source_node_names": [
        "Absent or Hypoplastic Thumbs"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0009380" } }));
