window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0006536"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0006536",
  "term_label": "glutamate metabolic process",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.209836,
  "mean_score": 0.209836,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Maple Syrup Urine Disease",
      "disease_term_id": "MONDO:0009563",
      "source_file": "Maple_Syrup_Urine_Disease.yaml",
      "term_id": "GO:0006536",
      "term_label": "glutamate metabolic process",
      "score": 0.209836,
      "direct_score": 0.209836,
      "propagated_score": 0.209836,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0006536",
      "best_source_term_label": "glutamate metabolic process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006536"
      ],
      "supporting_source_term_labels": [
        "glutamate metabolic process"
      ],
      "supporting_source_node_names": [
        "Brain Neurotransmitter Depletion"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0006536" } }));
