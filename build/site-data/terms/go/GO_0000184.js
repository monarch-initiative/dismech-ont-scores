window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0000184"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0000184",
  "term_label": "nuclear-transcribed mRNA catabolic process, nonsense-mediated decay",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "You-Hoover-Fong Syndrome",
      "disease_term_id": "MONDO:0014848",
      "source_file": "You-Hoover-Fong_Syndrome.yaml",
      "term_id": "GO:0000184",
      "term_label": "nuclear-transcribed mRNA catabolic process, nonsense-mediated decay",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0000184",
      "best_source_term_label": "nuclear-transcribed mRNA catabolic process, nonsense-mediated decay",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0000184"
      ],
      "supporting_source_term_labels": [
        "nuclear-transcribed mRNA catabolic process, nonsense-mediated decay"
      ],
      "supporting_source_node_names": [
        "TTT complex dysfunction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0000184" } }));
