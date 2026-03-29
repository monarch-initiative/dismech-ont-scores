window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0010657"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0010657",
  "term_label": "muscle cell apoptotic process",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.326667,
  "mean_score": 0.326667,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "CADASIL Type 1",
      "disease_term_id": "MONDO:0007432",
      "source_file": "CADASIL_Type_1.yaml",
      "term_id": "GO:0010657",
      "term_label": "muscle cell apoptotic process",
      "score": 0.326667,
      "direct_score": 0.0,
      "propagated_score": 0.326667,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:1905288",
      "best_source_term_label": "vascular associated smooth muscle cell apoptotic process",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:1905288"
      ],
      "supporting_source_term_labels": [
        "vascular associated smooth muscle cell apoptotic process"
      ],
      "supporting_source_node_names": [
        "Small Vessel Arteriopathy and Hypoperfusion"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0010657" } }));
