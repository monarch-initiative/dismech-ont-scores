window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0071722"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0071722",
  "term_label": "detoxification of arsenic-containing substance",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.8,
  "mean_score": 0.8,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Arsenic Poisoning",
      "disease_term_id": "",
      "source_file": "Arsenic_Poisoning.yaml",
      "term_id": "GO:0071722",
      "term_label": "detoxification of arsenic-containing substance",
      "score": 0.8,
      "direct_score": 0.8,
      "propagated_score": 0.8,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0071722",
      "best_source_term_label": "detoxification of arsenic-containing substance",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0071722"
      ],
      "supporting_source_term_labels": [
        "detoxification of arsenic-containing substance"
      ],
      "supporting_source_node_names": [
        "Hepatic Methylation and Biotransformation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0071722" } }));
