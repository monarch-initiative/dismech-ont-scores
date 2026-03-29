window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0036294"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0036294",
  "term_label": "cellular response to decreased oxygen levels",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.577478,
  "mean_score": 0.384985,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Von Hippel-Lindau Disease",
      "disease_term_id": "MONDO:0008667",
      "source_file": "Von_Hippel-Lindau_Disease.yaml",
      "term_id": "GO:0036294",
      "term_label": "cellular response to decreased oxygen levels",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0071456",
      "best_source_term_label": "cellular response to hypoxia",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
      "term_id": "GO:0036294",
      "term_label": "cellular response to decreased oxygen levels",
      "score": 0.288739,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0071456",
      "best_source_term_label": "cellular response to hypoxia",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
      "term_id": "GO:0036294",
      "term_label": "cellular response to decreased oxygen levels",
      "score": 0.288739,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0097411",
      "best_source_term_label": "hypoxia-inducible factor-1alpha signaling pathway",
      "best_source_path_score": 0.35,
      "best_source_path": "part_of > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0036294" } }));
