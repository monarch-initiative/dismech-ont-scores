window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0000789"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0000789",
  "term_label": "Infertility",
  "disease_count": 5,
  "direct_disease_count": 3,
  "top_score": 1.0,
  "mean_score": 0.580729,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Polycystic Ovary Syndrome",
      "disease_term_id": "MONDO:0008487",
      "source_file": "Polycystic_Ovary_Syndrome.yaml",
      "term_id": "HP:0000789",
      "term_label": "Infertility",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.743583,
      "is_direct": true,
      "best_source_term_id": "HP:0000789",
      "best_source_term_label": "Infertility",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000789"
      ],
      "supporting_source_term_labels": [
        "Infertility"
      ],
      "supporting_source_node_names": [
        "Infertility"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Cystic Fibrosis",
      "disease_term_id": "MONDO:0009061",
      "source_file": "Cystic_Fibrosis.yaml",
      "term_id": "HP:0000789",
      "term_label": "Infertility",
      "score": 0.676661,
      "direct_score": 0.0,
      "propagated_score": 0.91,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "HP:0008222",
      "best_source_term_label": "Female infertility",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0003251",
        "HP:0008222"
      ],
      "supporting_source_term_labels": [
        "Female infertility",
        "Male infertility"
      ],
      "supporting_source_node_names": [
        "Male Infertility",
        "Reduced Female Fertility"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Endometriosis",
      "disease_term_id": "MONDO:0005133",
      "source_file": "Endometriosis.yaml",
      "term_id": "HP:0000789",
      "term_label": "Infertility",
      "score": 0.5,
      "direct_score": 0.5,
      "propagated_score": 0.5,
      "specificity": 0.743583,
      "is_direct": true,
      "best_source_term_id": "HP:0000789",
      "best_source_term_label": "Infertility",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000789"
      ],
      "supporting_source_term_labels": [
        "Infertility"
      ],
      "supporting_source_node_names": [
        "Infertility"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Fanconi_Anemia",
      "disease_term_id": "MONDO:0019391",
      "source_file": "Fanconi_Anemia.yaml",
      "term_id": "HP:0000789",
      "term_label": "Infertility",
      "score": 0.4096,
      "direct_score": 0.4096,
      "propagated_score": 0.4096,
      "specificity": 0.743583,
      "is_direct": true,
      "best_source_term_id": "HP:0000789",
      "best_source_term_label": "Infertility",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000789"
      ],
      "supporting_source_term_labels": [
        "Infertility"
      ],
      "supporting_source_node_names": [
        "Impaired Fertility"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Primary_Ciliary_Dyskinesia",
      "disease_term_id": "MONDO:0016575",
      "source_file": "Primary_Ciliary_Dyskinesia.yaml",
      "term_id": "HP:0000789",
      "term_label": "Infertility",
      "score": 0.317383,
      "direct_score": 0.0,
      "propagated_score": 0.426829,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "HP:0003251",
      "best_source_term_label": "Male infertility",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0003251"
      ],
      "supporting_source_term_labels": [
        "Male infertility"
      ],
      "supporting_source_node_names": [
        "Male Infertility"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0000789" } }));
