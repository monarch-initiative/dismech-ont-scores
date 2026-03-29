window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0001993"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0001993",
  "term_label": "regulation of systemic arterial blood pressure by norepinephrine-epinephrine",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.14,
  "mean_score": 0.14,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Postural Orthostatic Tachycardia Syndrome",
      "disease_term_id": "MONDO:0011479",
      "source_file": "Postural_Orthostatic_Tachycardia_Syndrome.yaml",
      "term_id": "GO:0001993",
      "term_label": "regulation of systemic arterial blood pressure by norepinephrine-epinephrine",
      "score": 0.14,
      "direct_score": 0.0,
      "propagated_score": 0.14,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0003066",
      "best_source_term_label": "positive regulation of heart rate by norepinephrine",
      "best_source_path_score": 0.175,
      "best_source_path": "part_of > part_of > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 2,
      "supporting_source_term_ids": [
        "GO:0003066"
      ],
      "supporting_source_term_labels": [
        "positive regulation of heart rate by norepinephrine"
      ],
      "supporting_source_node_names": [
        "Compensatory Reflex Tachycardia"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0001993" } }));
