window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:5200060"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:5200060",
  "term_label": "Auditory hypersensitivity",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.577478,
  "mean_score": 0.508181,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Migraine",
      "disease_term_id": "MONDO:0005277",
      "source_file": "Migraine.yaml",
      "term_id": "HP:5200060",
      "term_label": "Auditory hypersensitivity",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0002183",
      "best_source_term_label": "Phonophobia",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002183"
      ],
      "supporting_source_term_labels": [
        "Phonophobia"
      ],
      "supporting_source_node_names": [
        "Phonophobia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Semicircular Canal Dehiscence Syndrome",
      "disease_term_id": "MONDO:0018484",
      "source_file": "Semicircular_Canal_Dehiscence_Syndrome.yaml",
      "term_id": "HP:5200060",
      "term_label": "Auditory hypersensitivity",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0010780",
      "best_source_term_label": "Hyperacusis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
      "term_id": "HP:5200060",
      "term_label": "Auditory hypersensitivity",
      "score": 0.369586,
      "direct_score": 0.0,
      "propagated_score": 0.448,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0010780",
      "best_source_term_label": "Hyperacusis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:5200060" } }));
