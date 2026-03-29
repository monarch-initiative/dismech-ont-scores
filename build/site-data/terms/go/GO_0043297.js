window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0043297"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0043297",
  "term_label": "apical junction assembly",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.412484,
  "mean_score": 0.304452,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Pouchitis",
      "disease_term_id": "MONDO:0005312",
      "source_file": "Pouchitis.yaml",
      "term_id": "GO:0043297",
      "term_label": "apical junction assembly",
      "score": 0.412484,
      "direct_score": 0.0,
      "propagated_score": 0.5,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0070830",
      "best_source_term_label": "bicellular tight junction assembly",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
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
      "term_id": "GO:0043297",
      "term_label": "apical junction assembly",
      "score": 0.412484,
      "direct_score": 0.0,
      "propagated_score": 0.5,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0070830",
      "best_source_term_label": "bicellular tight junction assembly",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
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
      "disorder_name": "Shigellosis",
      "disease_term_id": "MONDO:0019345",
      "source_file": "Shigellosis.yaml",
      "term_id": "GO:0043297",
      "term_label": "apical junction assembly",
      "score": 0.088389,
      "direct_score": 0.0,
      "propagated_score": 0.107143,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0070830",
      "best_source_term_label": "bicellular tight junction assembly",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0043297" } }));
