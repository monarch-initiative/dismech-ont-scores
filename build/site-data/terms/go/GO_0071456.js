window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0071456"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0071456",
  "term_label": "cellular response to hypoxia",
  "disease_count": 3,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.637495,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Von Hippel-Lindau Disease",
      "disease_term_id": "MONDO:0008667",
      "source_file": "Von_Hippel-Lindau_Disease.yaml",
      "term_id": "GO:0071456",
      "term_label": "cellular response to hypoxia",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0071456",
      "best_source_term_label": "cellular response to hypoxia",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0071456"
      ],
      "supporting_source_term_labels": [
        "cellular response to hypoxia"
      ],
      "supporting_source_node_names": [
        "VHL Tumor Suppressor Loss"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Clear Cell Renal Cell Carcinoma",
      "disease_term_id": "MONDO:0005005",
      "source_file": "Clear_Cell_Renal_Cell_Carcinoma.yaml",
      "term_id": "GO:0071456",
      "term_label": "cellular response to hypoxia",
      "score": 0.5,
      "direct_score": 0.5,
      "propagated_score": 0.5,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0071456",
      "best_source_term_label": "cellular response to hypoxia",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0071456"
      ],
      "supporting_source_term_labels": [
        "cellular response to hypoxia"
      ],
      "supporting_source_node_names": [
        "VHL Tumor Suppressor Inactivation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Pulmonary_hypertension",
      "disease_term_id": "MONDO:0005149",
      "source_file": "Pulmonary_hypertension.yaml",
      "term_id": "GO:0071456",
      "term_label": "cellular response to hypoxia",
      "score": 0.412484,
      "direct_score": 0.0,
      "propagated_score": 0.5,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0097411",
      "best_source_term_label": "hypoxia-inducible factor-1alpha signaling pathway",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0097411"
      ],
      "supporting_source_term_labels": [
        "hypoxia-inducible factor-1alpha signaling pathway"
      ],
      "supporting_source_node_names": [
        "Hypoxia Signaling"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0071456" } }));
