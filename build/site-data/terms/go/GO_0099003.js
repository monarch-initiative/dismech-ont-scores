window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0099003"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0099003",
  "term_label": "vesicle-mediated transport in synapse",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.453012,
  "mean_score": 0.351046,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Parkinson's Disease",
      "disease_term_id": "MONDO:0005180",
      "source_file": "Parkinsons_Disease.yaml",
      "term_id": "GO:0099003",
      "term_label": "vesicle-mediated transport in synapse",
      "score": 0.453012,
      "direct_score": 0.0,
      "propagated_score": 0.50925,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0099504",
      "best_source_term_label": "synaptic vesicle cycle",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0048488",
        "GO:0099504"
      ],
      "supporting_source_term_labels": [
        "synaptic vesicle cycle",
        "synaptic vesicle endocytosis"
      ],
      "supporting_source_node_names": [
        "Synaptic Dysfunction"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "CN-Related Developmental and Epileptic Encephalopathy",
      "disease_term_id": "MONDO:0020630",
      "source_file": "CN_Related_DEE.yaml",
      "term_id": "GO:0099003",
      "term_label": "vesicle-mediated transport in synapse",
      "score": 0.249079,
      "direct_score": 0.0,
      "propagated_score": 0.28,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0036465",
      "best_source_term_label": "synaptic vesicle recycling",
      "best_source_path_score": 0.35,
      "best_source_path": "part_of > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0036465"
      ],
      "supporting_source_term_labels": [
        "synaptic vesicle recycling"
      ],
      "supporting_source_node_names": [
        "Disrupted synaptic vesicle recycling"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0099003" } }));
