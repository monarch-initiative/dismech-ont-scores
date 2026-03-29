window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0015874"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0015874",
  "term_label": "norepinephrine transport",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.448,
  "mean_score": 0.448,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Postural Orthostatic Tachycardia Syndrome",
      "disease_term_id": "MONDO:0011479",
      "source_file": "Postural_Orthostatic_Tachycardia_Syndrome.yaml",
      "term_id": "GO:0015874",
      "term_label": "norepinephrine transport",
      "score": 0.448,
      "direct_score": 0.0,
      "propagated_score": 0.448,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0048243",
      "best_source_term_label": "norepinephrine secretion",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0048243"
      ],
      "supporting_source_term_labels": [
        "norepinephrine secretion"
      ],
      "supporting_source_node_names": [
        "Sympathetic Denervation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0015874" } }));
