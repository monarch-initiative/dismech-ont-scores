window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0034237"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0034237",
  "term_label": "Open neural tube defect",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.435888,
  "mean_score": 0.435888,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Meckel Syndrome",
      "disease_term_id": "MONDO:0018921",
      "source_file": "Meckel_Syndrome.yaml",
      "term_id": "HP:0034237",
      "term_label": "Open neural tube defect",
      "score": 0.435888,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0002085",
      "best_source_term_label": "Occipital encephalocele",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002085"
      ],
      "supporting_source_term_labels": [
        "Occipital encephalocele"
      ],
      "supporting_source_node_names": [
        "Occipital encephalocele"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "SADDAN",
      "disease_term_id": "MONDO:0014658",
      "source_file": "SADDAN.yaml",
      "term_id": "HP:0034237",
      "term_label": "Open neural tube defect",
      "score": 0.435888,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0002324",
      "best_source_term_label": "Hydranencephaly",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002324"
      ],
      "supporting_source_term_labels": [
        "Hydranencephaly"
      ],
      "supporting_source_node_names": [
        "Hydranencephaly"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0034237" } }));
