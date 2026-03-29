window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0000794"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0000794",
  "term_label": "CD8-positive, alpha-beta cytotoxic T cell",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.527027,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Addison's Disease",
      "disease_term_id": "MONDO:0015128",
      "source_file": "Addisons_Disease.yaml",
      "term_id": "CL:0000794",
      "term_label": "CD8-positive, alpha-beta cytotoxic T cell",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "CL:0000794",
      "best_source_term_label": "CD8-positive, alpha-beta cytotoxic T cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
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
      "term_id": "CL:0000794",
      "term_label": "CD8-positive, alpha-beta cytotoxic T cell",
      "score": 0.054054,
      "direct_score": 0.054054,
      "propagated_score": 0.054054,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "CL:0000794",
      "best_source_term_label": "CD8-positive, alpha-beta cytotoxic T cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0000794" } }));
