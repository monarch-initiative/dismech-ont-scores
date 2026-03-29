window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0000648"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0000648",
  "term_label": "kidney granular cell",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Essential Hypertension",
      "disease_term_id": "MONDO:0001134",
      "source_file": "Essential_Hypertension.yaml",
      "term_id": "CL:0000648",
      "term_label": "kidney granular cell",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "CL:0000648",
      "best_source_term_label": "kidney granular cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000648"
      ],
      "supporting_source_term_labels": [
        "kidney granular cell"
      ],
      "supporting_source_node_names": [
        "Renin-Angiotensin-Aldosterone System Dysregulation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0000648" } }));
