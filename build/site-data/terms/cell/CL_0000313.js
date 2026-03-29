window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0000313"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0000313",
  "term_label": "serous secreting cell",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.56,
  "mean_score": 0.56,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Empty Nose Syndrome",
      "disease_term_id": "MONDO:1060148",
      "source_file": "Empty_Nose_Syndrome.yaml",
      "term_id": "CL:0000313",
      "term_label": "serous secreting cell",
      "score": 0.56,
      "direct_score": 0.0,
      "propagated_score": 0.56,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "CL:4042016",
      "best_source_term_label": "nasal serous secreting cell",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:4042016"
      ],
      "supporting_source_term_labels": [
        "nasal serous secreting cell"
      ],
      "supporting_source_node_names": [
        "Impaired nasal air conditioning"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0000313" } }));
