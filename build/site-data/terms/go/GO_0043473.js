window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0043473"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0043473",
  "term_label": "pigmentation",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Transient Neonatal Pustular Melanosis",
      "disease_term_id": "",
      "source_file": "Transient_Neonatal_Pustular_Melanosis.yaml",
      "term_id": "GO:0043473",
      "term_label": "pigmentation",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0043473",
      "best_source_term_label": "pigmentation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0043473"
      ],
      "supporting_source_term_labels": [
        "pigmentation"
      ],
      "supporting_source_node_names": [
        "Melanocyte Activation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0043473" } }));
