window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0009019"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0009019",
  "term_label": "nephrogenic zone cell",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.555556,
  "mean_score": 0.555556,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Wilms Tumor",
      "disease_term_id": "MONDO:0006058",
      "source_file": "Wilms_Tumor.yaml",
      "term_id": "CL:0009019",
      "term_label": "nephrogenic zone cell",
      "score": 0.555556,
      "direct_score": 0.555556,
      "propagated_score": 0.555556,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "CL:0009019",
      "best_source_term_label": "nephrogenic zone cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0009019"
      ],
      "supporting_source_term_labels": [
        "nephrogenic zone cell"
      ],
      "supporting_source_node_names": [
        "CTNNB1 Activating Mutation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0009019" } }));
