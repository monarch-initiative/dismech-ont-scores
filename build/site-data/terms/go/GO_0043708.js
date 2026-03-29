window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0043708"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0043708",
  "term_label": "cell adhesion involved in biofilm formation",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.769231,
  "mean_score": 0.769231,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Furunculosis",
      "disease_term_id": "MONDO:0100595",
      "source_file": "Furunculosis.yaml",
      "term_id": "GO:0043708",
      "term_label": "cell adhesion involved in biofilm formation",
      "score": 0.769231,
      "direct_score": 0.769231,
      "propagated_score": 0.769231,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0043708",
      "best_source_term_label": "cell adhesion involved in biofilm formation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0043708" } }));
