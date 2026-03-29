window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0000174"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0000174",
  "term_label": "steroid hormone secreting cell",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.622697,
  "mean_score": 0.467023,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Cushing's Syndrome",
      "disease_term_id": "MONDO:0018912",
      "source_file": "Cushings_Syndrome.yaml",
      "term_id": "CL:0000174",
      "term_label": "steroid hormone secreting cell",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "CL:0000460",
      "best_source_term_label": "glucocorticoid secreting cell",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000460"
      ],
      "supporting_source_term_labels": [
        "glucocorticoid secreting cell"
      ],
      "supporting_source_node_names": [
        "Chronic Cortisol Excess"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Aromatase Deficiency",
      "disease_term_id": "MONDO:0013301",
      "source_file": "Aromatase_Deficiency.yaml",
      "term_id": "CL:0000174",
      "term_label": "steroid hormone secreting cell",
      "score": 0.311349,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "CL:0000501",
      "best_source_term_label": "granulosa cell",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000501"
      ],
      "supporting_source_term_labels": [
        "granulosa cell"
      ],
      "supporting_source_node_names": [
        "CYP19A1 Gene Mutation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0000174" } }));
