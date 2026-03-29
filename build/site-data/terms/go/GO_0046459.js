window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0046459"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0046459",
  "term_label": "short-chain fatty acid metabolic process",
  "disease_count": 4,
  "direct_disease_count": 1,
  "top_score": 0.769231,
  "mean_score": 0.318612,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Ulcerative Colitis",
      "disease_term_id": "MONDO:0005101",
      "source_file": "Ulcerative_Colitis.yaml",
      "term_id": "GO:0046459",
      "term_label": "short-chain fatty acid metabolic process",
      "score": 0.769231,
      "direct_score": 0.769231,
      "propagated_score": 0.769231,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "GO:0046459",
      "best_source_term_label": "short-chain fatty acid metabolic process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0046459"
      ],
      "supporting_source_term_labels": [
        "short-chain fatty acid metabolic process"
      ],
      "supporting_source_node_names": [
        "Decreased Butyrate Production"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Holocarboxylase Synthetase Deficiency",
      "disease_term_id": "MONDO:0009666",
      "source_file": "Holocarboxylase_Synthetase_Deficiency.yaml",
      "term_id": "GO:0046459",
      "term_label": "short-chain fatty acid metabolic process",
      "score": 0.244337,
      "direct_score": 0.0,
      "propagated_score": 0.3136,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0019543",
      "best_source_term_label": "propionate catabolic process",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0019543"
      ],
      "supporting_source_term_labels": [
        "propionate catabolic process"
      ],
      "supporting_source_node_names": [
        "Impaired propionate metabolism"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Methylmalonic Acidemia",
      "disease_term_id": "MONDO:0002012",
      "source_file": "Methylmalonic_Acidemia.yaml",
      "term_id": "GO:0046459",
      "term_label": "short-chain fatty acid metabolic process",
      "score": 0.159073,
      "direct_score": 0.0,
      "propagated_score": 0.204167,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0019543",
      "best_source_term_label": "propionate catabolic process",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0019543"
      ],
      "supporting_source_term_labels": [
        "propionate catabolic process"
      ],
      "supporting_source_node_names": [
        "Impaired methylmalonyl-CoA metabolism"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Biotinidase Deficiency",
      "disease_term_id": "MONDO:0009665",
      "source_file": "Biotinidase_Deficiency.yaml",
      "term_id": "GO:0046459",
      "term_label": "short-chain fatty acid metabolic process",
      "score": 0.101807,
      "direct_score": 0.0,
      "propagated_score": 0.130667,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0019543",
      "best_source_term_label": "propionate catabolic process",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0019543"
      ],
      "supporting_source_term_labels": [
        "propionate catabolic process"
      ],
      "supporting_source_node_names": [
        "Disrupted intermediary metabolism and organic aciduria"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0046459" } }));
