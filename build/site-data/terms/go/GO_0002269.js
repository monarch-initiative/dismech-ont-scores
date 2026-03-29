window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0002269"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0002269",
  "term_label": "leukocyte activation involved in inflammatory response",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.577478,
  "mean_score": 0.352903,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Amyotrophic Lateral Sclerosis",
      "disease_term_id": "MONDO:0004976",
      "source_file": "Amyotrophic_Lateral_Sclerosis.yaml",
      "term_id": "GO:0002269",
      "term_label": "leukocyte activation involved in inflammatory response",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0001774",
      "best_source_term_label": "microglial cell activation",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0001774"
      ],
      "supporting_source_term_labels": [
        "microglial cell activation"
      ],
      "supporting_source_node_names": [
        "Microglial TREM2 Signaling"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Huntington's Disease",
      "disease_term_id": "MONDO:0007739",
      "source_file": "Huntingtons_Disease.yaml",
      "term_id": "GO:0002269",
      "term_label": "leukocyte activation involved in inflammatory response",
      "score": 0.288739,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0001774",
      "best_source_term_label": "microglial cell activation",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0001774"
      ],
      "supporting_source_term_labels": [
        "microglial cell activation"
      ],
      "supporting_source_node_names": [
        "Neuroinflammation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Krabbe Disease",
      "disease_term_id": "MONDO:0009499",
      "source_file": "Krabbe_Disease.yaml",
      "term_id": "GO:0002269",
      "term_label": "leukocyte activation involved in inflammatory response",
      "score": 0.192493,
      "direct_score": 0.0,
      "propagated_score": 0.233333,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0001774",
      "best_source_term_label": "microglial cell activation",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0001774"
      ],
      "supporting_source_term_labels": [
        "microglial cell activation"
      ],
      "supporting_source_node_names": [
        "Neuroinflammation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0002269" } }));
