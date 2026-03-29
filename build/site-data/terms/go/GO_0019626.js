window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0019626"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0019626",
  "term_label": "short-chain fatty acid catabolic process",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.369586,
  "mean_score": 0.254732,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Holocarboxylase Synthetase Deficiency",
      "disease_term_id": "MONDO:0009666",
      "source_file": "Holocarboxylase_Synthetase_Deficiency.yaml",
      "term_id": "GO:0019626",
      "term_label": "short-chain fatty acid catabolic process",
      "score": 0.369586,
      "direct_score": 0.0,
      "propagated_score": 0.448,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0019543",
      "best_source_term_label": "propionate catabolic process",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
      "term_id": "GO:0019626",
      "term_label": "short-chain fatty acid catabolic process",
      "score": 0.240616,
      "direct_score": 0.0,
      "propagated_score": 0.291667,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0019543",
      "best_source_term_label": "propionate catabolic process",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
      "term_id": "GO:0019626",
      "term_label": "short-chain fatty acid catabolic process",
      "score": 0.153994,
      "direct_score": 0.0,
      "propagated_score": 0.186667,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0019543",
      "best_source_term_label": "propionate catabolic process",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0019626" } }));
