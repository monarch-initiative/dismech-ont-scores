window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0100007"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0100007",
  "term_label": "Neoplasm of the peripheral nervous system",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.659927,
  "mean_score": 0.580368,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Von Hippel-Lindau Disease",
      "disease_term_id": "MONDO:0008667",
      "source_file": "Von_Hippel-Lindau_Disease.yaml",
      "term_id": "HP:0100007",
      "term_label": "Neoplasm of the peripheral nervous system",
      "score": 0.659927,
      "direct_score": 0.0,
      "propagated_score": 0.847,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0100634",
      "best_source_term_label": "Neuroendocrine neoplasm",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002666",
        "HP:0100634"
      ],
      "supporting_source_term_labels": [
        "Neuroendocrine neoplasm",
        "Pheochromocytoma"
      ],
      "supporting_source_node_names": [
        "Pancreatic Neuroendocrine Tumor",
        "Pheochromocytoma"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Neurofibromatosis Type 1",
      "disease_term_id": "MONDO:0018975",
      "source_file": "Neurofibromatosis_Type_1.yaml",
      "term_id": "HP:0100007",
      "term_label": "Neoplasm of the peripheral nervous system",
      "score": 0.63702,
      "direct_score": 0.0,
      "propagated_score": 0.8176,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0001067",
      "best_source_term_label": "Neurofibroma",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001067",
        "HP:0009732"
      ],
      "supporting_source_term_labels": [
        "Neurofibroma",
        "Plexiform neurofibroma"
      ],
      "supporting_source_node_names": [
        "Cutaneous Neurofibromas",
        "Plexiform Neurofibromas"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Merkel Cell Carcinoma",
      "disease_term_id": "MONDO:0019210",
      "source_file": "Merkel_Cell_Carcinoma.yaml",
      "term_id": "HP:0100007",
      "term_label": "Neoplasm of the peripheral nervous system",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0100634",
      "best_source_term_label": "Neuroendocrine neoplasm",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0100634"
      ],
      "supporting_source_term_labels": [
        "Neuroendocrine neoplasm"
      ],
      "supporting_source_node_names": [
        "Neuroendocrine Neoplasm"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Multiple Endocrine Neoplasia Type 2",
      "disease_term_id": "MONDO:0019003",
      "source_file": "Multiple_Endocrine_Neoplasia_Type_2.yaml",
      "term_id": "HP:0100007",
      "term_label": "Neoplasm of the peripheral nervous system",
      "score": 0.479129,
      "direct_score": 0.0,
      "propagated_score": 0.61495,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "HP:0003005",
      "best_source_term_label": "Ganglioneuroma",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002666",
        "HP:0003005"
      ],
      "supporting_source_term_labels": [
        "Ganglioneuroma",
        "Pheochromocytoma"
      ],
      "supporting_source_node_names": [
        "Intestinal Ganglioneuromatosis",
        "Mucosal Neuromas",
        "Pheochromocytoma"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0100007" } }));
