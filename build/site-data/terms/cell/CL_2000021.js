window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:2000021"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:2000021",
  "term_label": "sebaceous gland cell",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.622697,
  "mean_score": 0.39433,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Acne Vulgaris",
      "disease_term_id": "MONDO:0011438",
      "source_file": "Acne_Vulgaris.yaml",
      "term_id": "CL:2000021",
      "term_label": "sebaceous gland cell",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "CL:0000317",
      "best_source_term_label": "sebocyte",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
      "term_id": "CL:2000021",
      "term_label": "sebaceous gland cell",
      "score": 0.165964,
      "direct_score": 0.0,
      "propagated_score": 0.186567,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "CL:0000317",
      "best_source_term_label": "sebocyte",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:2000021" } }));
