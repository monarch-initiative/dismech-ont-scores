window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0032274"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0032274",
  "term_label": "gonadotropin secretion",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.75,
  "mean_score": 0.75,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Aromatase Deficiency",
      "disease_term_id": "MONDO:0013301",
      "source_file": "Aromatase_Deficiency.yaml",
      "term_id": "GO:0032274",
      "term_label": "gonadotropin secretion",
      "score": 0.75,
      "direct_score": 0.75,
      "propagated_score": 0.75,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0032274",
      "best_source_term_label": "gonadotropin secretion",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0032274"
      ],
      "supporting_source_term_labels": [
        "gonadotropin secretion"
      ],
      "supporting_source_node_names": [
        "Estrogen Deficiency"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0032274" } }));
