window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0061691"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0061691",
  "term_label": "detoxification of hydrogen peroxide",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.533333,
  "mean_score": 0.533333,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Glucose-6-Phosphate Dehydrogenase (G6PD) Deficiency",
      "disease_term_id": "MONDO:0005775",
      "source_file": "Glucose-6-Phosphate_Dehydrogenase_G6PD_Deficiency.yaml",
      "term_id": "GO:0061691",
      "term_label": "detoxification of hydrogen peroxide",
      "score": 0.533333,
      "direct_score": 0.533333,
      "propagated_score": 0.533333,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0061691",
      "best_source_term_label": "detoxification of hydrogen peroxide",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0061691" } }));
