window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:2000001"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:2000001",
  "term_label": "regulation of DNA damage checkpoint",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.64,
  "mean_score": 0.64,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Hereditary Breast and Ovarian Cancer Syndrome",
      "disease_term_id": "MONDO:0011450",
      "source_file": "Hereditary_Breast_and_Ovarian_Cancer_Syndrome.yaml",
      "term_id": "GO:2000001",
      "term_label": "regulation of DNA damage checkpoint",
      "score": 0.64,
      "direct_score": 0.64,
      "propagated_score": 0.64,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:2000001",
      "best_source_term_label": "regulation of DNA damage checkpoint",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:2000001"
      ],
      "supporting_source_term_labels": [
        "regulation of DNA damage checkpoint"
      ],
      "supporting_source_node_names": [
        "Genomic Instability"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:2000001" } }));
