window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0002434"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0002434",
  "term_label": "CD24-positive, CD8 single-positive thymocyte",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.022773,
  "mean_score": 0.012002,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Addison's Disease",
      "disease_term_id": "MONDO:0015128",
      "source_file": "Addisons_Disease.yaml",
      "term_id": "CL:0002434",
      "term_label": "CD24-positive, CD8 single-positive thymocyte",
      "score": 0.022773,
      "direct_score": 0.0,
      "propagated_score": 0.0256,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "CL:0000794",
      "best_source_term_label": "CD8-positive, alpha-beta cytotoxic T cell",
      "best_source_path_score": 0.0256,
      "best_source_path": "develops_from > develops_from > develops_from > develops_from",
      "best_path_hops": 4,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 4,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000794"
      ],
      "supporting_source_term_labels": [
        "CD8-positive, alpha-beta cytotoxic T cell"
      ],
      "supporting_source_node_names": [
        "Autoimmune Adrenalitis"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Type I Diabetes",
      "disease_term_id": "MONDO:0005147",
      "source_file": "Type_I_Diabetes.yaml",
      "term_id": "CL:0002434",
      "term_label": "CD24-positive, CD8 single-positive thymocyte",
      "score": 0.001231,
      "direct_score": 0.0,
      "propagated_score": 0.001384,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "CL:0000794",
      "best_source_term_label": "CD8-positive, alpha-beta cytotoxic T cell",
      "best_source_path_score": 0.0256,
      "best_source_path": "develops_from > develops_from > develops_from > develops_from",
      "best_path_hops": 4,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 4,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000794"
      ],
      "supporting_source_term_labels": [
        "CD8-positive, alpha-beta cytotoxic T cell"
      ],
      "supporting_source_node_names": [
        "Autoimmune Destruction of Beta Cells"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0002434" } }));
