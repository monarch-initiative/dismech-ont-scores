window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0042632"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0042632",
  "term_label": "cholesterol homeostasis",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 0.75,
  "mean_score": 0.597222,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Familial Hypercholesterolemia",
      "disease_term_id": "MONDO:0005439",
      "source_file": "Familial_Hypercholesterolemia.yaml",
      "term_id": "GO:0042632",
      "term_label": "cholesterol homeostasis",
      "score": 0.75,
      "direct_score": 0.75,
      "propagated_score": 0.75,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0042632",
      "best_source_term_label": "cholesterol homeostasis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0042632"
      ],
      "supporting_source_term_labels": [
        "cholesterol homeostasis"
      ],
      "supporting_source_node_names": [
        "Cholesterol Homeostasis Disruption"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Cadmium Poisoning",
      "disease_term_id": "MONDO:0043523",
      "source_file": "Cadmium_Poisoning.yaml",
      "term_id": "GO:0042632",
      "term_label": "cholesterol homeostasis",
      "score": 0.444444,
      "direct_score": 0.444444,
      "propagated_score": 0.444444,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0042632",
      "best_source_term_label": "cholesterol homeostasis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0042632"
      ],
      "supporting_source_term_labels": [
        "cholesterol homeostasis"
      ],
      "supporting_source_node_names": [
        "Cadmium-Induced Vascular Cholesterol Dysregulation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0042632" } }));
