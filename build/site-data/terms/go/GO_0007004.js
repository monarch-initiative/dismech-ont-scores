window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0007004"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0007004",
  "term_label": "telomere maintenance via telomerase",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.568182,
  "mean_score": 0.568182,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Glioblastoma, IDH-Wildtype",
      "disease_term_id": "MONDO:0850335",
      "source_file": "Glioblastoma_IDH_Wildtype.yaml",
      "term_id": "GO:0007004",
      "term_label": "telomere maintenance via telomerase",
      "score": 0.568182,
      "direct_score": 0.568182,
      "propagated_score": 0.568182,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0007004",
      "best_source_term_label": "telomere maintenance via telomerase",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0007004"
      ],
      "supporting_source_term_labels": [
        "telomere maintenance via telomerase"
      ],
      "supporting_source_node_names": [
        "TERT Promoter Activation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0007004" } }));
