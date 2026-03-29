window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:4033066"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:4033066",
  "term_label": "pre-granulosa cell",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.2,
  "mean_score": 0.2,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Aromatase Deficiency",
      "disease_term_id": "MONDO:0013301",
      "source_file": "Aromatase_Deficiency.yaml",
      "term_id": "CL:4033066",
      "term_label": "pre-granulosa cell",
      "score": 0.2,
      "direct_score": 0.0,
      "propagated_score": 0.2,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "CL:0000501",
      "best_source_term_label": "granulosa cell",
      "best_source_path_score": 0.4,
      "best_source_path": "develops_from",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 1,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:4033066" } }));
