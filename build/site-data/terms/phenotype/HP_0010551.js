window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0010551"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0010551",
  "term_label": "Paraplegia/paraparesis",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.545394,
  "mean_score": 0.422681,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Transverse Myelitis",
      "disease_term_id": "MONDO:0021553",
      "source_file": "Transverse_Myelitis.yaml",
      "term_id": "HP:0010551",
      "term_label": "Paraplegia/paraparesis",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0010550",
      "best_source_term_label": "Paraplegia",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0010550"
      ],
      "supporting_source_term_labels": [
        "Paraplegia"
      ],
      "supporting_source_node_names": [
        "Paraplegia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Arginase Deficiency",
      "disease_term_id": "MONDO:0008814",
      "source_file": "Arginase_Deficiency.yaml",
      "term_id": "HP:0010551",
      "term_label": "Paraplegia/paraparesis",
      "score": 0.381776,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0002313",
      "best_source_term_label": "Spastic paraparesis",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002313"
      ],
      "supporting_source_term_labels": [
        "Spastic paraparesis"
      ],
      "supporting_source_node_names": [
        "Spastic paraparesis"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Biotinidase Deficiency",
      "disease_term_id": "MONDO:0009665",
      "source_file": "Biotinidase_Deficiency.yaml",
      "term_id": "HP:0010551",
      "term_label": "Paraplegia/paraparesis",
      "score": 0.381776,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0001258",
      "best_source_term_label": "Spastic paraplegia",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001258"
      ],
      "supporting_source_term_labels": [
        "Spastic paraplegia"
      ],
      "supporting_source_node_names": [
        "Spastic paraplegia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Urea Cycle Disorder",
      "disease_term_id": "MONDO:0004739",
      "source_file": "Urea_Cycle_Disorder.yaml",
      "term_id": "HP:0010551",
      "term_label": "Paraplegia/paraparesis",
      "score": 0.381776,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0001258",
      "best_source_term_label": "Spastic paraplegia",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001258"
      ],
      "supporting_source_term_labels": [
        "Spastic paraplegia"
      ],
      "supporting_source_node_names": [
        "Spastic paraplegia"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0010551" } }));
