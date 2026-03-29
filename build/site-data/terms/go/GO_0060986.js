window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0060986"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0060986",
  "term_label": "endocrine hormone secretion",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.433108,
  "mean_score": 0.284319,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Aromatase Deficiency",
      "disease_term_id": "MONDO:0013301",
      "source_file": "Aromatase_Deficiency.yaml",
      "term_id": "GO:0060986",
      "term_label": "endocrine hormone secretion",
      "score": 0.433108,
      "direct_score": 0.0,
      "propagated_score": 0.525,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0032274",
      "best_source_term_label": "gonadotropin secretion",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
    },
    {
      "ontology": "go",
      "disorder_name": "Cushing's Syndrome",
      "disease_term_id": "MONDO:0018912",
      "source_file": "Cushings_Syndrome.yaml",
      "term_id": "GO:0060986",
      "term_label": "endocrine hormone secretion",
      "score": 0.282964,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0035933",
      "best_source_term_label": "glucocorticoid secretion",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0035933"
      ],
      "supporting_source_term_labels": [
        "glucocorticoid secretion"
      ],
      "supporting_source_node_names": [
        "Chronic Cortisol Excess"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "CKD-Mineral Bone Disorder",
      "disease_term_id": "MONDO:0006946",
      "source_file": "CKD-Mineral_Bone_Disorder.yaml",
      "term_id": "GO:0060986",
      "term_label": "endocrine hormone secretion",
      "score": 0.136884,
      "direct_score": 0.0,
      "propagated_score": 0.165926,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0035898",
      "best_source_term_label": "parathyroid hormone secretion",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0035898"
      ],
      "supporting_source_term_labels": [
        "parathyroid hormone secretion"
      ],
      "supporting_source_node_names": [
        "Secondary Hyperparathyroidism"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0060986" } }));
