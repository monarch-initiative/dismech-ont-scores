window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0031274"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0031274",
  "term_label": "Hypovolemic shock",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.796178,
  "mean_score": 0.796178,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Cholera",
      "disease_term_id": "MONDO:0015766",
      "source_file": "Cholera.yaml",
      "term_id": "HP:0031274",
      "term_label": "Hypovolemic shock",
      "score": 0.796178,
      "direct_score": 0.796178,
      "propagated_score": 0.796178,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0031274",
      "best_source_term_label": "Hypovolemic shock",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0031274"
      ],
      "supporting_source_term_labels": [
        "Hypovolemic shock"
      ],
      "supporting_source_node_names": [
        "Hypovolemic Shock"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0031274" } }));
