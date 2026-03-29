window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0100299"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0100299",
  "term_label": "Muscle fiber inclusion bodies",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.3136,
  "mean_score": 0.3136,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Nemaline Myopathy",
      "disease_term_id": "MONDO:0018958",
      "source_file": "Nemaline_Myopathy.yaml",
      "term_id": "HP:0100299",
      "term_label": "Muscle fiber inclusion bodies",
      "score": 0.3136,
      "direct_score": 0.0,
      "propagated_score": 0.3136,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "HP:0003798",
      "best_source_term_label": "Nemaline bodies",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0003798"
      ],
      "supporting_source_term_labels": [
        "Nemaline bodies"
      ],
      "supporting_source_node_names": [
        "Nemaline Bodies"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0100299" } }));
