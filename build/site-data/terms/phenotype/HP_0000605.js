window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0000605"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0000605",
  "term_label": "Supranuclear gaze palsy",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.622697,
  "mean_score": 0.622697,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Gaucher Disease",
      "disease_term_id": "MONDO:0018150",
      "source_file": "Gaucher_Disease.yaml",
      "term_id": "HP:0000605",
      "term_label": "Supranuclear gaze palsy",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0007817",
      "best_source_term_label": "Horizontal supranuclear gaze palsy",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Niemann-Pick Disease Type C",
      "disease_term_id": "MONDO:0018982",
      "source_file": "Niemann_Pick_Disease_Type_C.yaml",
      "term_id": "HP:0000605",
      "term_label": "Supranuclear gaze palsy",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0000511",
      "best_source_term_label": "Vertical supranuclear gaze palsy",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000511"
      ],
      "supporting_source_term_labels": [
        "Vertical supranuclear gaze palsy"
      ],
      "supporting_source_node_names": [
        "Vertical Supranuclear Gaze Palsy"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0000605" } }));
