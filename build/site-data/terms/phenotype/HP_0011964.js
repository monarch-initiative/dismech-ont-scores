window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0011964"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0011964",
  "term_label": "Intermittent painful muscle spasms",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.756,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Stiff Person Syndrome",
      "disease_term_id": "MONDO:0008491",
      "source_file": "Stiff_Person_Syndrome.yaml",
      "term_id": "HP:0011964",
      "term_label": "Intermittent painful muscle spasms",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0011964",
      "best_source_term_label": "Intermittent painful muscle spasms",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0011964"
      ],
      "supporting_source_term_labels": [
        "Intermittent painful muscle spasms"
      ],
      "supporting_source_node_names": [
        "Painful Muscle Spasms"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Satoyoshi Syndrome",
      "disease_term_id": "MONDO:0010922",
      "source_file": "Satoyoshi_Syndrome.yaml",
      "term_id": "HP:0011964",
      "term_label": "Intermittent painful muscle spasms",
      "score": 0.512,
      "direct_score": 0.512,
      "propagated_score": 0.512,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0011964",
      "best_source_term_label": "Intermittent painful muscle spasms",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0011964"
      ],
      "supporting_source_term_labels": [
        "Intermittent painful muscle spasms"
      ],
      "supporting_source_node_names": [
        "Painful Muscle Spasms"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0011964" } }));
