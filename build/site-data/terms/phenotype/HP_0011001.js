window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0011001"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0011001",
  "term_label": "Increased bone mineral density",
  "disease_count": 4,
  "direct_disease_count": 1,
  "top_score": 0.694988,
  "mean_score": 0.582793,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Dacryocystitis-Osteopoikilosis Syndrome",
      "disease_term_id": "MONDO:0008158",
      "source_file": "Dacryocystitis-Osteopoikilosis_Syndrome.yaml",
      "term_id": "HP:0011001",
      "term_label": "Increased bone mineral density",
      "score": 0.694988,
      "direct_score": 0.64,
      "propagated_score": 0.892,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "HP:0010739",
      "best_source_term_label": "Osteopoikilosis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0010739",
        "HP:0011001"
      ],
      "supporting_source_term_labels": [
        "Increased bone mineral density",
        "Osteopoikilosis"
      ],
      "supporting_source_node_names": [
        "Increased Bone Mineral Density"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Autosomal Dominant Osteopetrosis Type II",
      "disease_term_id": "MONDO:0008156",
      "source_file": "Autosomal_Dominant_Osteopetrosis_Type_II.yaml",
      "term_id": "HP:0011001",
      "term_label": "Increased bone mineral density",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0011002",
      "best_source_term_label": "Osteopetrosis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0011002"
      ],
      "supporting_source_term_labels": [
        "Osteopetrosis"
      ],
      "supporting_source_node_names": [
        "Osteopetrosis"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Autosomal Recessive Osteopetrosis Type 2",
      "disease_term_id": "MONDO:0009816",
      "source_file": "Autosomal_Recessive_Osteopetrosis.yaml",
      "term_id": "HP:0011001",
      "term_label": "Increased bone mineral density",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0011002",
      "best_source_term_label": "Osteopetrosis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0011002"
      ],
      "supporting_source_term_labels": [
        "Osteopetrosis"
      ],
      "supporting_source_node_names": [
        "Osteopetrosis"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Pycnodysostosis",
      "disease_term_id": "MONDO:0009940",
      "source_file": "Pycnodysostosis.yaml",
      "term_id": "HP:0011001",
      "term_label": "Increased bone mineral density",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0011002",
      "best_source_term_label": "Osteopetrosis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0011002"
      ],
      "supporting_source_term_labels": [
        "Osteopetrosis"
      ],
      "supporting_source_node_names": [
        "Osteosclerosis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0011001" } }));
