window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0008631"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0008631",
  "term_label": "intrinsic apoptotic signaling pathway in response to oxidative stress",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.333333,
  "mean_score": 0.333333,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Hemochromatosis",
      "disease_term_id": "MONDO:0006507",
      "source_file": "Hemochromatosis.yaml",
      "term_id": "GO:0008631",
      "term_label": "intrinsic apoptotic signaling pathway in response to oxidative stress",
      "score": 0.333333,
      "direct_score": 0.333333,
      "propagated_score": 0.333333,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0008631",
      "best_source_term_label": "intrinsic apoptotic signaling pathway in response to oxidative stress",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0008631"
      ],
      "supporting_source_term_labels": [
        "intrinsic apoptotic signaling pathway in response to oxidative stress"
      ],
      "supporting_source_node_names": [
        "Hepatic Iron Toxicity"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0008631" } }));
