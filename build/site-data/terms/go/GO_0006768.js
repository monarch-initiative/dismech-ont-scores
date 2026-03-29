window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0006768"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0006768",
  "term_label": "biotin metabolic process",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Biotinidase Deficiency",
      "disease_term_id": "MONDO:0009665",
      "source_file": "Biotinidase_Deficiency.yaml",
      "term_id": "GO:0006768",
      "term_label": "biotin metabolic process",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0006768",
      "best_source_term_label": "biotin metabolic process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006768"
      ],
      "supporting_source_term_labels": [
        "biotin metabolic process"
      ],
      "supporting_source_node_names": [
        "Impaired biotin recycling and secondary multiple carboxylase deficiency"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Holocarboxylase Synthetase Deficiency",
      "disease_term_id": "MONDO:0009666",
      "source_file": "Holocarboxylase_Synthetase_Deficiency.yaml",
      "term_id": "GO:0006768",
      "term_label": "biotin metabolic process",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0006768",
      "best_source_term_label": "biotin metabolic process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006768"
      ],
      "supporting_source_term_labels": [
        "biotin metabolic process"
      ],
      "supporting_source_node_names": [
        "Impaired HLCS-mediated protein biotinylation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0006768" } }));
