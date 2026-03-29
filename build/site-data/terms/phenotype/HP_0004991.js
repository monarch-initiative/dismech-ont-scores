window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0004991"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0004991",
  "term_label": "Rhizomelic arm shortening",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Achondroplasia",
      "disease_term_id": "MONDO:0007037",
      "source_file": "Achondroplasia.yaml",
      "term_id": "HP:0004991",
      "term_label": "Rhizomelic arm shortening",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0004991",
      "best_source_term_label": "Rhizomelic arm shortening",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0004991"
      ],
      "supporting_source_term_labels": [
        "Rhizomelic arm shortening"
      ],
      "supporting_source_node_names": [
        "Rhizomelic limb shortening"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Hypochondroplasia",
      "disease_term_id": "MONDO:0007793",
      "source_file": "Hypochondroplasia.yaml",
      "term_id": "HP:0004991",
      "term_label": "Rhizomelic arm shortening",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0004991",
      "best_source_term_label": "Rhizomelic arm shortening",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0004991"
      ],
      "supporting_source_term_labels": [
        "Rhizomelic arm shortening"
      ],
      "supporting_source_node_names": [
        "Rhizomelic limb shortening (mild)"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0004991" } }));
