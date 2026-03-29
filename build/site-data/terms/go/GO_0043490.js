window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0043490"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0043490",
  "term_label": "malate-aspartate shuttle",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.5,
  "mean_score": 0.5,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Citrin Deficiency",
      "disease_term_id": "MONDO:0016602",
      "source_file": "Citrin_Deficiency.yaml",
      "term_id": "GO:0043490",
      "term_label": "malate-aspartate shuttle",
      "score": 0.5,
      "direct_score": 0.5,
      "propagated_score": 0.5,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0043490",
      "best_source_term_label": "malate-aspartate shuttle",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0043490"
      ],
      "supporting_source_term_labels": [
        "malate-aspartate shuttle"
      ],
      "supporting_source_node_names": [
        "Malate-aspartate shuttle dysfunction and hepatocellular energy crisis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0043490" } }));
