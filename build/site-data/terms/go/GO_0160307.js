window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0160307"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0160307",
  "term_label": "protein biosynthetic process",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.412484,
  "mean_score": 0.238628,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Liver Cirrhosis",
      "disease_term_id": "MONDO:0005155",
      "source_file": "Liver_Cirrhosis.yaml",
      "term_id": "GO:0160307",
      "term_label": "protein biosynthetic process",
      "score": 0.412484,
      "direct_score": 0.0,
      "propagated_score": 0.5,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0006412",
      "best_source_term_label": "translation",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0006412"
      ],
      "supporting_source_term_labels": [
        "translation"
      ],
      "supporting_source_node_names": [
        "Synthetic Dysfunction"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Diamond-Blackfan Anemia",
      "disease_term_id": "MONDO:0015253",
      "source_file": "Diamond-Blackfan_Anemia.yaml",
      "term_id": "GO:0160307",
      "term_label": "protein biosynthetic process",
      "score": 0.215012,
      "direct_score": 0.0,
      "propagated_score": 0.260631,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0006412",
      "best_source_term_label": "translation",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0006412",
        "GO:0006413"
      ],
      "supporting_source_term_labels": [
        "translation",
        "translational initiation"
      ],
      "supporting_source_node_names": [
        "Ribosomal Protein Haploinsufficiency"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Shigellosis",
      "disease_term_id": "MONDO:0019345",
      "source_file": "Shigellosis.yaml",
      "term_id": "GO:0160307",
      "term_label": "protein biosynthetic process",
      "score": 0.088389,
      "direct_score": 0.0,
      "propagated_score": 0.107143,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0006412",
      "best_source_term_label": "translation",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0006412"
      ],
      "supporting_source_term_labels": [
        "translation"
      ],
      "supporting_source_node_names": [
        "Bacterial toxin production and endothelial damage"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0160307" } }));
