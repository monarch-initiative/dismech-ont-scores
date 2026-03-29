window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0090605"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0090605",
  "term_label": "submerged biofilm formation",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.384615,
  "mean_score": 0.384615,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Furunculosis",
      "disease_term_id": "MONDO:0100595",
      "source_file": "Furunculosis.yaml",
      "term_id": "GO:0090605",
      "term_label": "submerged biofilm formation",
      "score": 0.384615,
      "direct_score": 0.0,
      "propagated_score": 0.384615,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0043708",
      "best_source_term_label": "cell adhesion involved in biofilm formation",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0043708"
      ],
      "supporting_source_term_labels": [
        "cell adhesion involved in biofilm formation"
      ],
      "supporting_source_node_names": [
        "Adhesin-enriched follicular attachment"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0090605" } }));
