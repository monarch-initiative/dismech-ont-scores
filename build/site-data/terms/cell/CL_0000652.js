window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0000652"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0000652",
  "term_label": "pinealocyte",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Delayed Sleep Phase Syndrome",
      "disease_term_id": "MONDO:0024377",
      "source_file": "Delayed_Sleep_Phase_Syndrome.yaml",
      "term_id": "CL:0000652",
      "term_label": "pinealocyte",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "CL:0000652",
      "best_source_term_label": "pinealocyte",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000652"
      ],
      "supporting_source_term_labels": [
        "pinealocyte"
      ],
      "supporting_source_node_names": [
        "Altered Melatonin Secretion Timing"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0000652" } }));
