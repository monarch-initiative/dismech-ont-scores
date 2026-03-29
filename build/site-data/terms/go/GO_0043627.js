window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0043627"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0043627",
  "term_label": "response to estrogen",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.5,
  "mean_score": 0.5,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Endometriosis",
      "disease_term_id": "MONDO:0005133",
      "source_file": "Endometriosis.yaml",
      "term_id": "GO:0043627",
      "term_label": "response to estrogen",
      "score": 0.5,
      "direct_score": 0.5,
      "propagated_score": 0.5,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0043627",
      "best_source_term_label": "response to estrogen",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0043627"
      ],
      "supporting_source_term_labels": [
        "response to estrogen"
      ],
      "supporting_source_node_names": [
        "Estrogen Dependence"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0043627" } }));
