window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0000900"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0000900",
  "term_label": "naive thymus-derived CD8-positive, alpha-beta T cell",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.142331,
  "mean_score": 0.075013,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Addison's Disease",
      "disease_term_id": "MONDO:0015128",
      "source_file": "Addisons_Disease.yaml",
      "term_id": "CL:0000900",
      "term_label": "naive thymus-derived CD8-positive, alpha-beta T cell",
      "score": 0.142331,
      "direct_score": 0.0,
      "propagated_score": 0.16,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "CL:0000794",
      "best_source_term_label": "CD8-positive, alpha-beta cytotoxic T cell",
      "best_source_path_score": 0.16,
      "best_source_path": "develops_from > develops_from",
      "best_path_hops": 2,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 2,
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
      "term_id": "CL:0000900",
      "term_label": "naive thymus-derived CD8-positive, alpha-beta T cell",
      "score": 0.007694,
      "direct_score": 0.0,
      "propagated_score": 0.008649,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "CL:0000794",
      "best_source_term_label": "CD8-positive, alpha-beta cytotoxic T cell",
      "best_source_path_score": 0.16,
      "best_source_path": "develops_from > develops_from",
      "best_path_hops": 2,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 2,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0000900" } }));
