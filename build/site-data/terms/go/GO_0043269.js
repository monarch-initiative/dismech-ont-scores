window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0043269"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0043269",
  "term_label": "regulation of monoatomic ion transport",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.619896,
  "mean_score": 0.33985,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Hemochromatosis",
      "disease_term_id": "MONDO:0006507",
      "source_file": "Hemochromatosis.yaml",
      "term_id": "GO:0043269",
      "term_label": "regulation of monoatomic ion transport",
      "score": 0.619896,
      "direct_score": 0.0,
      "propagated_score": 0.696851,
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
        "GO:0034756",
        "GO:0034757",
        "GO:0034758"
      ],
      "supporting_source_term_labels": [
        "negative regulation of iron ion transport",
        "positive regulation of iron ion transport",
        "regulation of iron ion transport"
      ],
      "supporting_source_node_names": [
        "HFE Loss Lowers Hepcidin",
        "Low Hepcidin Leads to Ferroportin Hyperabsorption"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Central Core Myopathy",
      "disease_term_id": "MONDO:0007294",
      "source_file": "Central_Core_Myopathy.yaml",
      "term_id": "GO:0043269",
      "term_label": "regulation of monoatomic ion transport",
      "score": 0.059804,
      "direct_score": 0.0,
      "propagated_score": 0.067228,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0010880",
      "best_source_term_label": "regulation of release of sequestered calcium ion into cytosol by sarcoplasmic reticulum",
      "best_source_path_score": 0.16807,
      "best_source_path": "is_a > is_a > is_a > is_a > is_a",
      "best_path_hops": 5,
      "best_path_is_a_hops": 5,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0010880"
      ],
      "supporting_source_term_labels": [
        "regulation of release of sequestered calcium ion into cytosol by sarcoplasmic reticulum"
      ],
      "supporting_source_node_names": [
        "Abnormal RyR1 calcium release channel function"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0043269" } }));
