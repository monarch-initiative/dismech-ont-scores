window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0002522"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0002522",
  "term_label": "renal filtration cell",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.35,
  "mean_score": 0.35,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Chronic Kidney Disease",
      "disease_term_id": "MONDO:0005300",
      "source_file": "Chronic_Kidney_Disease.yaml",
      "term_id": "CL:0002522",
      "term_label": "renal filtration cell",
      "score": 0.35,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "CL:0000653",
      "best_source_term_label": "podocyte",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000653"
      ],
      "supporting_source_term_labels": [
        "podocyte"
      ],
      "supporting_source_node_names": [
        "Nephron Loss"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0002522" } }));
