window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0000141"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0000141",
  "term_label": "Amenorrhea",
  "disease_count": 3,
  "direct_disease_count": 1,
  "top_score": 0.8,
  "mean_score": 0.651652,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Morgagni-Stewart-Morel Syndrome",
      "disease_term_id": "MONDO:0007766",
      "source_file": "Morgagni-Stewart-Morel_Syndrome.yaml",
      "term_id": "HP:0000141",
      "term_label": "Amenorrhea",
      "score": 0.8,
      "direct_score": 0.8,
      "propagated_score": 0.8,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "HP:0000141",
      "best_source_term_label": "Amenorrhea",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000141"
      ],
      "supporting_source_term_labels": [
        "Amenorrhea"
      ],
      "supporting_source_node_names": [
        "Amenorrhea"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Aromatase Deficiency",
      "disease_term_id": "MONDO:0013301",
      "source_file": "Aromatase_Deficiency.yaml",
      "term_id": "HP:0000141",
      "term_label": "Amenorrhea",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0000786",
      "best_source_term_label": "Primary amenorrhea",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000786"
      ],
      "supporting_source_term_labels": [
        "Primary amenorrhea"
      ],
      "supporting_source_node_names": [
        "Primary Amenorrhea"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Satoyoshi Syndrome",
      "disease_term_id": "MONDO:0010922",
      "source_file": "Satoyoshi_Syndrome.yaml",
      "term_id": "HP:0000141",
      "term_label": "Amenorrhea",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0000869",
      "best_source_term_label": "Secondary amenorrhea",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000869"
      ],
      "supporting_source_term_labels": [
        "Secondary amenorrhea"
      ],
      "supporting_source_node_names": [
        "Amenorrhea"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0000141" } }));
