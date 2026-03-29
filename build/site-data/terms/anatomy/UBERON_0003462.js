window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0003462"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0003462",
  "term_label": "facial bone",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.152561,
  "mean_score": 0.13855,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Silent Sinus Syndrome",
      "disease_term_id": "MONDO:0019108",
      "source_file": "Silent_Sinus_Syndrome.yaml",
      "term_id": "UBERON:0003462",
      "term_label": "facial bone",
      "score": 0.152561,
      "direct_score": 0.0,
      "propagated_score": 0.1715,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0001764",
      "best_source_term_label": "maxillary sinus",
      "best_source_path_score": 0.1715,
      "best_source_path": "part_of > is_a > is_a > is_a",
      "best_path_hops": 4,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0001764"
      ],
      "supporting_source_term_labels": [
        "maxillary sinus"
      ],
      "supporting_source_node_names": [
        "Maxillary Sinus Atelectasis"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Empty Nose Syndrome",
      "disease_term_id": "MONDO:1060148",
      "source_file": "Empty_Nose_Syndrome.yaml",
      "term_id": "UBERON:0003462",
      "term_label": "facial bone",
      "score": 0.124539,
      "direct_score": 0.0,
      "propagated_score": 0.14,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0005922",
      "best_source_term_label": "inferior nasal concha",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0005922"
      ],
      "supporting_source_term_labels": [
        "inferior nasal concha"
      ],
      "supporting_source_node_names": [
        "Turbinate tissue loss from surgical resection"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0003462" } }));
