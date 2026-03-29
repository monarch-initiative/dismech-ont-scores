window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0007817"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0007817",
  "term_label": "Horizontal supranuclear gaze palsy",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Gaucher Disease",
      "disease_term_id": "MONDO:0018150",
      "source_file": "Gaucher_Disease.yaml",
      "term_id": "HP:0007817",
      "term_label": "Horizontal supranuclear gaze palsy",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0007817",
      "best_source_term_label": "Horizontal supranuclear gaze palsy",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0007817"
      ],
      "supporting_source_term_labels": [
        "Horizontal supranuclear gaze palsy"
      ],
      "supporting_source_node_names": [
        "Horizontal Supranuclear Gaze Palsy"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0007817" } }));
