window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0007043"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0007043",
  "term_label": "cell-cell junction assembly",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.381776,
  "mean_score": 0.263782,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Pouchitis",
      "disease_term_id": "MONDO:0005312",
      "source_file": "Pouchitis.yaml",
      "term_id": "GO:0007043",
      "term_label": "cell-cell junction assembly",
      "score": 0.381776,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0070830",
      "best_source_term_label": "bicellular tight junction assembly",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0070830"
      ],
      "supporting_source_term_labels": [
        "bicellular tight junction assembly"
      ],
      "supporting_source_node_names": [
        "Epithelial Barrier Dysfunction"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Small Intestinal Bacterial Overgrowth",
      "disease_term_id": "MONDO:0400000",
      "source_file": "Small_Intestinal_Bacterial_Overgrowth.yaml",
      "term_id": "GO:0007043",
      "term_label": "cell-cell junction assembly",
      "score": 0.381776,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0070830",
      "best_source_term_label": "bicellular tight junction assembly",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0070830"
      ],
      "supporting_source_term_labels": [
        "bicellular tight junction assembly"
      ],
      "supporting_source_node_names": [
        "Bacterial overgrowth in small intestine"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Keratoderma Hereditarium Mutilans",
      "disease_term_id": "MONDO:0007422",
      "source_file": "Keratoderma_Hereditarium_Mutilans.yaml",
      "term_id": "GO:0007043",
      "term_label": "cell-cell junction assembly",
      "score": 0.209767,
      "direct_score": 0.0,
      "propagated_score": 0.269231,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0016264",
      "best_source_term_label": "gap junction assembly",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0016264"
      ],
      "supporting_source_term_labels": [
        "gap junction assembly"
      ],
      "supporting_source_node_names": [
        "Gap Junction Dysfunction"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Shigellosis",
      "disease_term_id": "MONDO:0019345",
      "source_file": "Shigellosis.yaml",
      "term_id": "GO:0007043",
      "term_label": "cell-cell junction assembly",
      "score": 0.081809,
      "direct_score": 0.0,
      "propagated_score": 0.105,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0070830",
      "best_source_term_label": "bicellular tight junction assembly",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0070830"
      ],
      "supporting_source_term_labels": [
        "bicellular tight junction assembly"
      ],
      "supporting_source_node_names": [
        "Intestinal barrier dysfunction and increased permeability"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0007043" } }));
