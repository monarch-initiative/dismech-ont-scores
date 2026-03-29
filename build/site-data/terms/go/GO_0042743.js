window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0042743"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0042743",
  "term_label": "hydrogen peroxide metabolic process",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.560498,
  "mean_score": 0.560498,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Glucose-6-Phosphate Dehydrogenase (G6PD) Deficiency",
      "disease_term_id": "MONDO:0005775",
      "source_file": "Glucose-6-Phosphate_Dehydrogenase_G6PD_Deficiency.yaml",
      "term_id": "GO:0042743",
      "term_label": "hydrogen peroxide metabolic process",
      "score": 0.560498,
      "direct_score": 0.0,
      "propagated_score": 0.560498,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0061691",
      "best_source_term_label": "detoxification of hydrogen peroxide",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0042744",
        "GO:0061691"
      ],
      "supporting_source_term_labels": [
        "detoxification of hydrogen peroxide",
        "hydrogen peroxide catabolic process"
      ],
      "supporting_source_node_names": [
        "Impaired Redox Homeostasis",
        "Oxidative Stress"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0042743" } }));
