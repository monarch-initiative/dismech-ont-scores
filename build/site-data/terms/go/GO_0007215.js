window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0007215"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0007215",
  "term_label": "glutamate receptor signaling pathway",
  "disease_count": 3,
  "direct_disease_count": 3,
  "top_score": 1.0,
  "mean_score": 0.565641,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Autoimmune Encephalitis",
      "disease_term_id": "MONDO:0020640",
      "source_file": "Autoimmune_Encephalitis.yaml",
      "term_id": "GO:0007215",
      "term_label": "glutamate receptor signaling pathway",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0007215",
      "best_source_term_label": "glutamate receptor signaling pathway",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0007215"
      ],
      "supporting_source_term_labels": [
        "glutamate receptor signaling pathway"
      ],
      "supporting_source_node_names": [
        "Antibody-Mediated NMDA Receptor Internalization"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Small Cell Lung Cancer",
      "disease_term_id": "MONDO:0008433",
      "source_file": "Small_Cell_Lung_Cancer.yaml",
      "term_id": "GO:0007215",
      "term_label": "glutamate receptor signaling pathway",
      "score": 0.5,
      "direct_score": 0.5,
      "propagated_score": 0.5,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0007215",
      "best_source_term_label": "glutamate receptor signaling pathway",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0007215"
      ],
      "supporting_source_term_labels": [
        "glutamate receptor signaling pathway"
      ],
      "supporting_source_node_names": [
        "Glutamate Signaling Dependency"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Nonketotic Hyperglycinemia",
      "disease_term_id": "MONDO:0011612",
      "source_file": "Nonketotic_Hyperglycinemia.yaml",
      "term_id": "GO:0007215",
      "term_label": "glutamate receptor signaling pathway",
      "score": 0.196923,
      "direct_score": 0.196923,
      "propagated_score": 0.196923,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0007215",
      "best_source_term_label": "glutamate receptor signaling pathway",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0007215"
      ],
      "supporting_source_term_labels": [
        "glutamate receptor signaling pathway"
      ],
      "supporting_source_node_names": [
        "NMDA receptor dysregulation and neurotransmission imbalance"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0007215" } }));
