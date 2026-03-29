window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0011986"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0011986",
  "term_label": "Ectopic ossification",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.622697,
  "mean_score": 0.622697,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Fibrodysplasia Ossificans Progressiva",
      "disease_term_id": "MONDO:0007606",
      "source_file": "Fibrodysplasia_Ossificans_Progressiva.yaml",
      "term_id": "HP:0011986",
      "term_label": "Ectopic ossification",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0011987",
      "best_source_term_label": "Ectopic ossification in muscle tissue",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0011987"
      ],
      "supporting_source_term_labels": [
        "Ectopic ossification in muscle tissue"
      ],
      "supporting_source_node_names": [
        "Heterotopic Ossification"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Pseudohypoparathyroidism",
      "disease_term_id": "MONDO:0019992",
      "source_file": "Pseudohypoparathyroidism.yaml",
      "term_id": "HP:0011986",
      "term_label": "Ectopic ossification",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0034282",
      "best_source_term_label": "Subcutaneous ossification",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0034282"
      ],
      "supporting_source_term_labels": [
        "Subcutaneous ossification"
      ],
      "supporting_source_node_names": [
        "Subcutaneous Ossifications"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0011986" } }));
