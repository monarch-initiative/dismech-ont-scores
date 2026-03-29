window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0019019"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0019019",
  "term_label": "tracheobronchial smooth muscle cell",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.233333,
  "mean_score": 0.233333,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Cough Variant Asthma",
      "disease_term_id": "MONDO:0001491",
      "source_file": "Cough_Variant_Asthma.yaml",
      "term_id": "CL:0019019",
      "term_label": "tracheobronchial smooth muscle cell",
      "score": 0.233333,
      "direct_score": 0.0,
      "propagated_score": 0.233333,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "CL:0002598",
      "best_source_term_label": "bronchial smooth muscle cell",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0002598"
      ],
      "supporting_source_term_labels": [
        "bronchial smooth muscle cell"
      ],
      "supporting_source_node_names": [
        "Airway Hyperresponsiveness"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0019019" } }));
