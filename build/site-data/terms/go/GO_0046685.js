window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0046685"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0046685",
  "term_label": "response to arsenic-containing substance",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.4,
  "mean_score": 0.4,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Arsenic Poisoning",
      "disease_term_id": "",
      "source_file": "Arsenic_Poisoning.yaml",
      "term_id": "GO:0046685",
      "term_label": "response to arsenic-containing substance",
      "score": 0.4,
      "direct_score": 0.0,
      "propagated_score": 0.4,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0071722",
      "best_source_term_label": "detoxification of arsenic-containing substance",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0046685" } }));
