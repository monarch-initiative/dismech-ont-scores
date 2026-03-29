window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0002521"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0002521",
  "term_label": "Hypsarrhythmia",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "CN-Related Developmental and Epileptic Encephalopathy",
      "disease_term_id": "MONDO:0020630",
      "source_file": "CN_Related_DEE.yaml",
      "term_id": "HP:0002521",
      "term_label": "Hypsarrhythmia",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0002521",
      "best_source_term_label": "Hypsarrhythmia",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002521"
      ],
      "supporting_source_term_labels": [
        "Hypsarrhythmia"
      ],
      "supporting_source_node_names": [
        "Hypsarrhythmia"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0002521" } }));
