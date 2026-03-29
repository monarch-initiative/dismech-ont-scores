window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0002620"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0002620",
  "term_label": "skin fibroblast",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.625,
  "mean_score": 0.625,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Ehlers-Danlos Syndrome, COL5A1-related",
      "disease_term_id": "MONDO:0007522",
      "source_file": "Ehlers-Danlos_Syndrome_COL5A1-related.yaml",
      "term_id": "CL:0002620",
      "term_label": "skin fibroblast",
      "score": 0.625,
      "direct_score": 0.625,
      "propagated_score": 0.625,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "CL:0002620",
      "best_source_term_label": "skin fibroblast",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0002620"
      ],
      "supporting_source_term_labels": [
        "skin fibroblast"
      ],
      "supporting_source_node_names": [
        "Connective Tissue Fragility"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0002620" } }));
