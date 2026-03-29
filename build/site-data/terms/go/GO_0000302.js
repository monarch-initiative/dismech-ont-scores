window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0000302"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0000302",
  "term_label": "response to reactive oxygen species",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.186667,
  "mean_score": 0.186667,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Glucose-6-Phosphate Dehydrogenase (G6PD) Deficiency",
      "disease_term_id": "MONDO:0005775",
      "source_file": "Glucose-6-Phosphate_Dehydrogenase_G6PD_Deficiency.yaml",
      "term_id": "GO:0000302",
      "term_label": "response to reactive oxygen species",
      "score": 0.186667,
      "direct_score": 0.0,
      "propagated_score": 0.186667,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0061691",
      "best_source_term_label": "detoxification of hydrogen peroxide",
      "best_source_path_score": 0.35,
      "best_source_path": "part_of > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0061691"
      ],
      "supporting_source_term_labels": [
        "detoxification of hydrogen peroxide"
      ],
      "supporting_source_node_names": [
        "Impaired Redox Homeostasis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0000302" } }));
