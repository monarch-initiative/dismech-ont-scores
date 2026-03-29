window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0050832"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0050832",
  "term_label": "defense response to fungus",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.227556,
  "mean_score": 0.227556,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Otomycosis",
      "disease_term_id": "MONDO:0000262",
      "source_file": "Otomycosis.yaml",
      "term_id": "GO:0050832",
      "term_label": "defense response to fungus",
      "score": 0.227556,
      "direct_score": 0.227556,
      "propagated_score": 0.227556,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0050832",
      "best_source_term_label": "defense response to fungus",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0050832"
      ],
      "supporting_source_term_labels": [
        "defense response to fungus"
      ],
      "supporting_source_node_names": [
        "Local innate immune activation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0050832" } }));
