window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0002286"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0002286",
  "term_label": "Fair hair",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Homocystinuria",
      "disease_term_id": "MONDO:0004737",
      "source_file": "Homocystinuria.yaml",
      "term_id": "HP:0002286",
      "term_label": "Fair hair",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0002286",
      "best_source_term_label": "Fair hair",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002286"
      ],
      "supporting_source_term_labels": [
        "Fair hair"
      ],
      "supporting_source_node_names": [
        "Fair hair"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Menkes Disease",
      "disease_term_id": "MONDO:0010651",
      "source_file": "Menkes_Disease.yaml",
      "term_id": "HP:0002286",
      "term_label": "Fair hair",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0002286",
      "best_source_term_label": "Fair hair",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002286"
      ],
      "supporting_source_term_labels": [
        "Fair hair"
      ],
      "supporting_source_node_names": [
        "Fair hair"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0002286" } }));
