window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0006412"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0006412",
  "term_label": "translation",
  "disease_count": 3,
  "direct_disease_count": 3,
  "top_score": 1.0,
  "mean_score": 0.538673,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Liver Cirrhosis",
      "disease_term_id": "MONDO:0005155",
      "source_file": "Liver_Cirrhosis.yaml",
      "term_id": "GO:0006412",
      "term_label": "translation",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0006412",
      "best_source_term_label": "translation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
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
      "term_id": "GO:0006412",
      "term_label": "translation",
      "score": 0.401733,
      "direct_score": 0.37037,
      "propagated_score": 0.486968,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0006412",
      "best_source_term_label": "translation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
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
      "term_id": "GO:0006412",
      "term_label": "translation",
      "score": 0.214286,
      "direct_score": 0.214286,
      "propagated_score": 0.214286,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0006412",
      "best_source_term_label": "translation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0006412" } }));
