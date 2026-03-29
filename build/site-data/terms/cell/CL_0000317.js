window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0000317"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0000317",
  "term_label": "sebocyte",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.633263,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Acne Vulgaris",
      "disease_term_id": "MONDO:0011438",
      "source_file": "Acne_Vulgaris.yaml",
      "term_id": "CL:0000317",
      "term_label": "sebocyte",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "CL:0000317",
      "best_source_term_label": "sebocyte",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000317"
      ],
      "supporting_source_term_labels": [
        "sebocyte"
      ],
      "supporting_source_node_names": [
        "C. acnes follicular colonization",
        "Sebum compositional change",
        "Sebum overproduction"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Seborrheic Dermatitis",
      "disease_term_id": "MONDO:0006608",
      "source_file": "Seborrheic_Dermatitis.yaml",
      "term_id": "CL:0000317",
      "term_label": "sebocyte",
      "score": 0.266525,
      "direct_score": 0.266525,
      "propagated_score": 0.266525,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "CL:0000317",
      "best_source_term_label": "sebocyte",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000317"
      ],
      "supporting_source_term_labels": [
        "sebocyte"
      ],
      "supporting_source_node_names": [
        "Sebaceous gland activity and sebum-rich cutaneous milieu"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0000317" } }));
