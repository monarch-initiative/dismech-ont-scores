window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0009612"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0009612",
  "term_label": "response to mechanical stimulus",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.577478,
  "mean_score": 0.406852,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Osteoporosis",
      "disease_term_id": "MONDO:0005298",
      "source_file": "Osteoporosis.yaml",
      "term_id": "GO:0009612",
      "term_label": "response to mechanical stimulus",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0071260",
      "best_source_term_label": "cellular response to mechanical stimulus",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0071260"
      ],
      "supporting_source_term_labels": [
        "cellular response to mechanical stimulus"
      ],
      "supporting_source_node_names": [
        "Osteocyte Mechanosensing Disruption in Microgravity"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Marfan Syndrome",
      "disease_term_id": "MONDO:0007947",
      "source_file": "Marfan_Syndrome.yaml",
      "term_id": "GO:0009612",
      "term_label": "response to mechanical stimulus",
      "score": 0.461982,
      "direct_score": 0.0,
      "propagated_score": 0.56,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0071260",
      "best_source_term_label": "cellular response to mechanical stimulus",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0071260"
      ],
      "supporting_source_term_labels": [
        "cellular response to mechanical stimulus"
      ],
      "supporting_source_node_names": [
        "Impaired Mechanotransduction"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Semicircular Canal Dehiscence Syndrome",
      "disease_term_id": "MONDO:0018484",
      "source_file": "Semicircular_Canal_Dehiscence_Syndrome.yaml",
      "term_id": "GO:0009612",
      "term_label": "response to mechanical stimulus",
      "score": 0.181097,
      "direct_score": 0.0,
      "propagated_score": 0.21952,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0050973",
      "best_source_term_label": "detection of mechanical stimulus involved in equilibrioception",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0050973"
      ],
      "supporting_source_term_labels": [
        "detection of mechanical stimulus involved in equilibrioception"
      ],
      "supporting_source_node_names": [
        "Third Window Effect"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0009612" } }));
