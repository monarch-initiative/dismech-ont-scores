window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0000443"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0000443",
  "term_label": "calcitonin secreting cell",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.622697,
  "mean_score": 0.622697,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Medullary Thyroid Carcinoma",
      "disease_term_id": "MONDO:0015277",
      "source_file": "Medullary_Thyroid_Carcinoma.yaml",
      "term_id": "CL:0000443",
      "term_label": "calcitonin secreting cell",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "CL:0000570",
      "best_source_term_label": "parafollicular cell",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000570"
      ],
      "supporting_source_term_labels": [
        "parafollicular cell"
      ],
      "supporting_source_node_names": [
        "RET Proto-Oncogene Activation"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Multiple Endocrine Neoplasia Type 2",
      "disease_term_id": "MONDO:0019003",
      "source_file": "Multiple_Endocrine_Neoplasia_Type_2.yaml",
      "term_id": "CL:0000443",
      "term_label": "calcitonin secreting cell",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "CL:0000570",
      "best_source_term_label": "parafollicular cell",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000570"
      ],
      "supporting_source_term_labels": [
        "parafollicular cell"
      ],
      "supporting_source_node_names": [
        "Neuroendocrine Cell Transformation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0000443" } }));
