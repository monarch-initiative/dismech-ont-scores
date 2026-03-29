window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0034765"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0034765",
  "term_label": "regulation of monoatomic ion transmembrane transport",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.09604,
  "mean_score": 0.09604,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Central Core Myopathy",
      "disease_term_id": "MONDO:0007294",
      "source_file": "Central_Core_Myopathy.yaml",
      "term_id": "GO:0034765",
      "term_label": "regulation of monoatomic ion transmembrane transport",
      "score": 0.09604,
      "direct_score": 0.0,
      "propagated_score": 0.09604,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0010880",
      "best_source_term_label": "regulation of release of sequestered calcium ion into cytosol by sarcoplasmic reticulum",
      "best_source_path_score": 0.2401,
      "best_source_path": "is_a > is_a > is_a > is_a",
      "best_path_hops": 4,
      "best_path_is_a_hops": 4,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0034765" } }));
