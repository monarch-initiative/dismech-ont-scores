window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:1000612"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:1000612",
  "term_label": "kidney corpuscule cell",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.12005,
  "mean_score": 0.12005,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Chronic Kidney Disease",
      "disease_term_id": "MONDO:0005300",
      "source_file": "Chronic_Kidney_Disease.yaml",
      "term_id": "CL:1000612",
      "term_label": "kidney corpuscule cell",
      "score": 0.12005,
      "direct_score": 0.0,
      "propagated_score": 0.12005,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "CL:0000653",
      "best_source_term_label": "podocyte",
      "best_source_path_score": 0.2401,
      "best_source_path": "is_a > is_a > is_a > is_a",
      "best_path_hops": 4,
      "best_path_is_a_hops": 4,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:1000612" } }));
