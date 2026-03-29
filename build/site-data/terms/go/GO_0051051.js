window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0051051"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0051051",
  "term_label": "negative regulation of transport",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.40331,
  "mean_score": 0.274303,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Hemochromatosis",
      "disease_term_id": "MONDO:0006507",
      "source_file": "Hemochromatosis.yaml",
      "term_id": "GO:0051051",
      "term_label": "negative regulation of transport",
      "score": 0.40331,
      "direct_score": 0.0,
      "propagated_score": 0.453378,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0034757",
      "best_source_term_label": "negative regulation of iron ion transport",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0034757",
        "GO:0046676"
      ],
      "supporting_source_term_labels": [
        "negative regulation of insulin secretion",
        "negative regulation of iron ion transport"
      ],
      "supporting_source_node_names": [
        "HFE Loss Lowers Hepcidin",
        "Pancreatic Iron Toxicity"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Tetanus",
      "disease_term_id": "MONDO:0005526",
      "source_file": "Tetanus.yaml",
      "term_id": "GO:0051051",
      "term_label": "negative regulation of transport",
      "score": 0.145296,
      "direct_score": 0.0,
      "propagated_score": 0.163333,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0046929",
      "best_source_term_label": "negative regulation of neurotransmitter secretion",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0046929"
      ],
      "supporting_source_term_labels": [
        "negative regulation of neurotransmitter secretion"
      ],
      "supporting_source_node_names": [
        "Tetanus Toxin (Tetanospasmin) Action"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0051051" } }));
