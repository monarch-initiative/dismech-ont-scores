window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0010780"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0010780",
  "term_label": "Hyperacusis",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.82,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Semicircular Canal Dehiscence Syndrome",
      "disease_term_id": "MONDO:0018484",
      "source_file": "Semicircular_Canal_Dehiscence_Syndrome.yaml",
      "term_id": "HP:0010780",
      "term_label": "Hyperacusis",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0010780",
      "best_source_term_label": "Hyperacusis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0010780"
      ],
      "supporting_source_term_labels": [
        "Hyperacusis"
      ],
      "supporting_source_node_names": [
        "Hyperacusis"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Bell's palsy",
      "disease_term_id": "MONDO:0005665",
      "source_file": "Bells_Palsy.yaml",
      "term_id": "HP:0010780",
      "term_label": "Hyperacusis",
      "score": 0.64,
      "direct_score": 0.64,
      "propagated_score": 0.64,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0010780",
      "best_source_term_label": "Hyperacusis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0010780"
      ],
      "supporting_source_term_labels": [
        "Hyperacusis"
      ],
      "supporting_source_node_names": [
        "Hyperacusis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0010780" } }));
