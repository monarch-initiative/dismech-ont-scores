window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0042116"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0042116",
  "term_label": "macrophage activation",
  "disease_count": 5,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.472773,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Whipple Disease",
      "disease_term_id": "MONDO:0005116",
      "source_file": "Whipple_Disease.yaml",
      "term_id": "GO:0042116",
      "term_label": "macrophage activation",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.743583,
      "is_direct": true,
      "best_source_term_id": "GO:0042116",
      "best_source_term_label": "macrophage activation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0042116"
      ],
      "supporting_source_term_labels": [
        "macrophage activation"
      ],
      "supporting_source_node_names": [
        "Macrophage dysfunction and malabsorption"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Amyotrophic Lateral Sclerosis",
      "disease_term_id": "MONDO:0004976",
      "source_file": "Amyotrophic_Lateral_Sclerosis.yaml",
      "term_id": "GO:0042116",
      "term_label": "macrophage activation",
      "score": 0.520508,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "GO:0001774",
      "best_source_term_label": "microglial cell activation",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0001774"
      ],
      "supporting_source_term_labels": [
        "microglial cell activation"
      ],
      "supporting_source_node_names": [
        "Microglial TREM2 Signaling"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Gaucher Disease",
      "disease_term_id": "MONDO:0018150",
      "source_file": "Gaucher_Disease.yaml",
      "term_id": "GO:0042116",
      "term_label": "macrophage activation",
      "score": 0.4096,
      "direct_score": 0.4096,
      "propagated_score": 0.4096,
      "specificity": 0.743583,
      "is_direct": true,
      "best_source_term_id": "GO:0042116",
      "best_source_term_label": "macrophage activation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0042116"
      ],
      "supporting_source_term_labels": [
        "macrophage activation"
      ],
      "supporting_source_node_names": [
        "Gaucher Cell Formation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Huntington's Disease",
      "disease_term_id": "MONDO:0007739",
      "source_file": "Huntingtons_Disease.yaml",
      "term_id": "GO:0042116",
      "term_label": "macrophage activation",
      "score": 0.260254,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "GO:0001774",
      "best_source_term_label": "microglial cell activation",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0001774"
      ],
      "supporting_source_term_labels": [
        "microglial cell activation"
      ],
      "supporting_source_node_names": [
        "Neuroinflammation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Krabbe Disease",
      "disease_term_id": "MONDO:0009499",
      "source_file": "Krabbe_Disease.yaml",
      "term_id": "GO:0042116",
      "term_label": "macrophage activation",
      "score": 0.173503,
      "direct_score": 0.0,
      "propagated_score": 0.233333,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "GO:0001774",
      "best_source_term_label": "microglial cell activation",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0001774"
      ],
      "supporting_source_term_labels": [
        "microglial cell activation"
      ],
      "supporting_source_node_names": [
        "Neuroinflammation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0042116" } }));
