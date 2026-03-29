window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0019233"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0019233",
  "term_label": "sensory perception of pain",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.75,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Fibromyalgia",
      "disease_term_id": "MONDO:0005546",
      "source_file": "Fibromyalgia.yaml",
      "term_id": "GO:0019233",
      "term_label": "sensory perception of pain",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0019233",
      "best_source_term_label": "sensory perception of pain",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0019233"
      ],
      "supporting_source_term_labels": [
        "sensory perception of pain"
      ],
      "supporting_source_node_names": [
        "Genetic Susceptibility"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Achoo Syndrome",
      "disease_term_id": "MONDO:0007038",
      "source_file": "Achoo_Syndrome.yaml",
      "term_id": "GO:0019233",
      "term_label": "sensory perception of pain",
      "score": 0.5,
      "direct_score": 0.5,
      "propagated_score": 0.5,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0019233",
      "best_source_term_label": "sensory perception of pain",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0019233"
      ],
      "supporting_source_term_labels": [
        "sensory perception of pain"
      ],
      "supporting_source_node_names": [
        "Optic-Trigeminal Cross-Activation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0019233" } }));
