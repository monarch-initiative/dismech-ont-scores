window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0100634"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0100634",
  "term_label": "Neuroendocrine neoplasm",
  "disease_count": 3,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.762913,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Merkel Cell Carcinoma",
      "disease_term_id": "MONDO:0019210",
      "source_file": "Merkel_Cell_Carcinoma.yaml",
      "term_id": "HP:0100634",
      "term_label": "Neuroendocrine neoplasm",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "HP:0100634",
      "best_source_term_label": "Neuroendocrine neoplasm",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
      "disorder_name": "Von Hippel-Lindau Disease",
      "disease_term_id": "MONDO:0008667",
      "source_file": "Von_Hippel-Lindau_Disease.yaml",
      "term_id": "HP:0100634",
      "term_label": "Neuroendocrine neoplasm",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "HP:0100634",
      "best_source_term_label": "Neuroendocrine neoplasm",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
        "Pancreatic Neuroendocrine Tumor"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Multiple Endocrine Neoplasia Type 2",
      "disease_term_id": "MONDO:0019003",
      "source_file": "Multiple_Endocrine_Neoplasia_Type_2.yaml",
      "term_id": "HP:0100634",
      "term_label": "Neuroendocrine neoplasm",
      "score": 0.288739,
      "direct_score": 0.0,
      "propagated_score": 0.35,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0002666",
      "best_source_term_label": "Pheochromocytoma",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002666"
      ],
      "supporting_source_term_labels": [
        "Pheochromocytoma"
      ],
      "supporting_source_node_names": [
        "Pheochromocytoma"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0100634" } }));
