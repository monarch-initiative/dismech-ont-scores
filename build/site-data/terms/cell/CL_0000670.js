window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0000670"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0000670",
  "term_label": "primordial germ cell",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Testicular Germ Cell Tumor",
      "disease_term_id": "MONDO:0010108",
      "source_file": "Testicular_Germ_Cell_Tumor.yaml",
      "term_id": "CL:0000670",
      "term_label": "primordial germ cell",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "CL:0000670",
      "best_source_term_label": "primordial germ cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000670"
      ],
      "supporting_source_term_labels": [
        "primordial germ cell"
      ],
      "supporting_source_node_names": [
        "Germ Cell Neoplasia In Situ (GCNIS)"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0000670" } }));
