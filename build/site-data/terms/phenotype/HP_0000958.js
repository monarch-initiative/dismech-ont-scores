window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0000958"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0000958",
  "term_label": "Dry skin",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Atopic Dermatitis",
      "disease_term_id": "MONDO:0004980",
      "source_file": "Atopic_Dermatitis.yaml",
      "term_id": "HP:0000958",
      "term_label": "Dry skin",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0000958",
      "best_source_term_label": "Dry skin",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000958"
      ],
      "supporting_source_term_labels": [
        "Dry skin"
      ],
      "supporting_source_node_names": [
        "Xerosis"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Hashimoto's Thyroiditis",
      "disease_term_id": "MONDO:0007699",
      "source_file": "Hashimotos_Thyroiditis.yaml",
      "term_id": "HP:0000958",
      "term_label": "Dry skin",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0000958",
      "best_source_term_label": "Dry skin",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000958"
      ],
      "supporting_source_term_labels": [
        "Dry skin"
      ],
      "supporting_source_node_names": [
        "Dry Skin"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0000958" } }));
