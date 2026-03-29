window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0001942"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0001942",
  "term_label": "hair follicle development",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.256,
  "mean_score": 0.256,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Thallium Poisoning",
      "disease_term_id": "MONDO:0041996",
      "source_file": "Thallium_Poisoning.yaml",
      "term_id": "GO:0001942",
      "term_label": "hair follicle development",
      "score": 0.256,
      "direct_score": 0.256,
      "propagated_score": 0.256,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0001942",
      "best_source_term_label": "hair follicle development",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0001942"
      ],
      "supporting_source_term_labels": [
        "hair follicle development"
      ],
      "supporting_source_node_names": [
        "Hair follicle toxicity"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0001942" } }));
