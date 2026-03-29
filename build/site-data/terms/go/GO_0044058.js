window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0044058"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0044058",
  "term_label": "regulation of digestive system process",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.204167,
  "mean_score": 0.204167,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Hemochromatosis",
      "disease_term_id": "MONDO:0006507",
      "source_file": "Hemochromatosis.yaml",
      "term_id": "GO:0044058",
      "term_label": "regulation of digestive system process",
      "score": 0.204167,
      "direct_score": 0.0,
      "propagated_score": 0.204167,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:1904480",
      "best_source_term_label": "positive regulation of intestinal absorption",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:1904480"
      ],
      "supporting_source_term_labels": [
        "positive regulation of intestinal absorption"
      ],
      "supporting_source_node_names": [
        "Low Hepcidin Leads to Ferroportin Hyperabsorption"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0044058" } }));
