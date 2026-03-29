window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0048243"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0048243",
  "term_label": "norepinephrine secretion",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.64,
  "mean_score": 0.64,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Postural Orthostatic Tachycardia Syndrome",
      "disease_term_id": "MONDO:0011479",
      "source_file": "Postural_Orthostatic_Tachycardia_Syndrome.yaml",
      "term_id": "GO:0048243",
      "term_label": "norepinephrine secretion",
      "score": 0.64,
      "direct_score": 0.64,
      "propagated_score": 0.64,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0048243",
      "best_source_term_label": "norepinephrine secretion",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0048243" } }));
