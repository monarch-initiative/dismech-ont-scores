window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0045576"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0045576",
  "term_label": "mast cell activation",
  "disease_count": 3,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.634708,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Irritable Bowel Syndrome",
      "disease_term_id": "MONDO:0005052",
      "source_file": "Irritable_Bowel_Syndrome.yaml",
      "term_id": "GO:0045576",
      "term_label": "mast cell activation",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0045576",
      "best_source_term_label": "mast cell activation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0045576"
      ],
      "supporting_source_term_labels": [
        "mast cell activation"
      ],
      "supporting_source_node_names": [
        "Immune Activation and Mast Cell Degranulation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Long COVID",
      "disease_term_id": "MONDO:0100233",
      "source_file": "Long_COVID.yaml",
      "term_id": "GO:0045576",
      "term_label": "mast cell activation",
      "score": 0.615385,
      "direct_score": 0.615385,
      "propagated_score": 0.615385,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0045576",
      "best_source_term_label": "mast cell activation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0045576"
      ],
      "supporting_source_term_labels": [
        "mast cell activation"
      ],
      "supporting_source_node_names": [
        "Autonomic Nervous System Dysfunction"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Urticaria",
      "disease_term_id": "MONDO:0005492",
      "source_file": "Urticaria.yaml",
      "term_id": "GO:0045576",
      "term_label": "mast cell activation",
      "score": 0.288739,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0043303",
      "best_source_term_label": "mast cell degranulation",
      "best_source_path_score": 0.35,
      "best_source_path": "part_of > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0043303"
      ],
      "supporting_source_term_labels": [
        "mast cell degranulation"
      ],
      "supporting_source_node_names": [
        "Mast cell-driven inflammation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0045576" } }));
