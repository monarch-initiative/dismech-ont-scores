window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0007623"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0007623",
  "term_label": "circadian rhythm",
  "disease_count": 3,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.801411,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Bipolar Disorder",
      "disease_term_id": "MONDO:0004985",
      "source_file": "Bipolar_Disorder.yaml",
      "term_id": "GO:0007623",
      "term_label": "circadian rhythm",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0007623",
      "best_source_term_label": "circadian rhythm",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0007623"
      ],
      "supporting_source_term_labels": [
        "circadian rhythm"
      ],
      "supporting_source_node_names": [
        "Circadian Rhythm Disruption"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Delayed Sleep Phase Syndrome",
      "disease_term_id": "MONDO:0024377",
      "source_file": "Delayed_Sleep_Phase_Syndrome.yaml",
      "term_id": "GO:0007623",
      "term_label": "circadian rhythm",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0007623",
      "best_source_term_label": "circadian rhythm",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0007623"
      ],
      "supporting_source_term_labels": [
        "circadian rhythm"
      ],
      "supporting_source_node_names": [
        "Circadian Clock Gene Polymorphisms"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Narcolepsy",
      "disease_term_id": "MONDO:0021107",
      "source_file": "Narcolepsy.yaml",
      "term_id": "GO:0007623",
      "term_label": "circadian rhythm",
      "score": 0.404234,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0042745",
      "best_source_term_label": "circadian sleep/wake cycle",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0042745"
      ],
      "supporting_source_term_labels": [
        "circadian sleep/wake cycle"
      ],
      "supporting_source_node_names": [
        "Orexin/Hypocretin Deficiency"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0007623" } }));
