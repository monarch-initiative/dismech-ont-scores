window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0007015"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0007015",
  "term_label": "actin filament organization",
  "disease_count": 3,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.44647,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Larsen Syndrome",
      "disease_term_id": "MONDO:0007875",
      "source_file": "Larsen_Syndrome.yaml",
      "term_id": "GO:0007015",
      "term_label": "actin filament organization",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0007015",
      "best_source_term_label": "actin filament organization",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0007015"
      ],
      "supporting_source_term_labels": [
        "actin filament organization"
      ],
      "supporting_source_node_names": [
        "FLNB Variant Clustering in Functional Protein Domains",
        "Gain-of-Function Actin-Binding Dysregulation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Nemaline Myopathy",
      "disease_term_id": "MONDO:0018958",
      "source_file": "Nemaline_Myopathy.yaml",
      "term_id": "GO:0007015",
      "term_label": "actin filament organization",
      "score": 0.252787,
      "direct_score": 0.196078,
      "propagated_score": 0.306421,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0007015",
      "best_source_term_label": "actin filament organization",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0007015",
        "GO:0030240"
      ],
      "supporting_source_term_labels": [
        "actin filament organization",
        "skeletal muscle thin filament assembly"
      ],
      "supporting_source_node_names": [
        "Thin Filament Dysfunction"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Shigellosis",
      "disease_term_id": "MONDO:0019345",
      "source_file": "Shigellosis.yaml",
      "term_id": "GO:0007015",
      "term_label": "actin filament organization",
      "score": 0.086622,
      "direct_score": 0.0,
      "propagated_score": 0.105,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0030041",
      "best_source_term_label": "actin filament polymerization",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0030041"
      ],
      "supporting_source_term_labels": [
        "actin filament polymerization"
      ],
      "supporting_source_node_names": [
        "Actin-based motility and cell-to-cell spread"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0007015" } }));
