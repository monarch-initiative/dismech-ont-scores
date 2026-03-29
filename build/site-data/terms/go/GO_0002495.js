window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0002495"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0002495",
  "term_label": "antigen processing and presentation of peptide antigen via MHC class II",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 0.6,
  "mean_score": 0.376923,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Addison's Disease",
      "disease_term_id": "MONDO:0015128",
      "source_file": "Addisons_Disease.yaml",
      "term_id": "GO:0002495",
      "term_label": "antigen processing and presentation of peptide antigen via MHC class II",
      "score": 0.6,
      "direct_score": 0.6,
      "propagated_score": 0.6,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0002495",
      "best_source_term_label": "antigen processing and presentation of peptide antigen via MHC class II",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0002495"
      ],
      "supporting_source_term_labels": [
        "antigen processing and presentation of peptide antigen via MHC class II"
      ],
      "supporting_source_node_names": [
        "Autoimmune Adrenalitis"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Multiple Sclerosis",
      "disease_term_id": "MONDO:0005301",
      "source_file": "Multiple_Sclerosis.yaml",
      "term_id": "GO:0002495",
      "term_label": "antigen processing and presentation of peptide antigen via MHC class II",
      "score": 0.153846,
      "direct_score": 0.153846,
      "propagated_score": 0.153846,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0002495",
      "best_source_term_label": "antigen processing and presentation of peptide antigen via MHC class II",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0002495"
      ],
      "supporting_source_term_labels": [
        "antigen processing and presentation of peptide antigen via MHC class II"
      ],
      "supporting_source_node_names": [
        "Demyelination"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0002495" } }));
