window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0036465"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0036465",
  "term_label": "synaptic vesicle recycling",
  "disease_count": 2,
  "direct_disease_count": 1,
  "top_score": 0.8,
  "mean_score": 0.511196,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "CN-Related Developmental and Epileptic Encephalopathy",
      "disease_term_id": "MONDO:0020630",
      "source_file": "CN_Related_DEE.yaml",
      "term_id": "GO:0036465",
      "term_label": "synaptic vesicle recycling",
      "score": 0.8,
      "direct_score": 0.8,
      "propagated_score": 0.8,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0036465",
      "best_source_term_label": "synaptic vesicle recycling",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0036465"
      ],
      "supporting_source_term_labels": [
        "synaptic vesicle recycling"
      ],
      "supporting_source_node_names": [
        "Disrupted synaptic vesicle recycling"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Parkinson's Disease",
      "disease_term_id": "MONDO:0005180",
      "source_file": "Parkinsons_Disease.yaml",
      "term_id": "GO:0036465",
      "term_label": "synaptic vesicle recycling",
      "score": 0.222392,
      "direct_score": 0.0,
      "propagated_score": 0.25,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0048488",
      "best_source_term_label": "synaptic vesicle endocytosis",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0048488"
      ],
      "supporting_source_term_labels": [
        "synaptic vesicle endocytosis"
      ],
      "supporting_source_node_names": [
        "Synaptic Dysfunction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0036465" } }));
