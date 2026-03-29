window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0009308"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0009308",
  "term_label": "amine metabolic process",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.267243,
  "mean_score": 0.167562,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Pheochromocytoma and Paraganglioma",
      "disease_term_id": "MONDO:0035540",
      "source_file": "Pheochromocytoma_Paraganglioma.yaml",
      "term_id": "GO:0009308",
      "term_label": "amine metabolic process",
      "score": 0.267243,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0042423",
      "best_source_term_label": "catecholamine biosynthetic process",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0042423"
      ],
      "supporting_source_term_labels": [
        "catecholamine biosynthetic process"
      ],
      "supporting_source_node_names": [
        "Catecholamine Hypersecretion"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Parkinson's Disease",
      "disease_term_id": "MONDO:0005180",
      "source_file": "Parkinsons_Disease.yaml",
      "term_id": "GO:0009308",
      "term_label": "amine metabolic process",
      "score": 0.149656,
      "direct_score": 0.0,
      "propagated_score": 0.19208,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0042416",
      "best_source_term_label": "dopamine biosynthetic process",
      "best_source_path_score": 0.2401,
      "best_source_path": "is_a > is_a > is_a > is_a",
      "best_path_hops": 4,
      "best_path_is_a_hops": 4,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0042416"
      ],
      "supporting_source_term_labels": [
        "dopamine biosynthetic process"
      ],
      "supporting_source_node_names": [
        "Dopaminergic Neuron Loss"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Menkes Disease",
      "disease_term_id": "MONDO:0010651",
      "source_file": "Menkes_Disease.yaml",
      "term_id": "GO:0009308",
      "term_label": "amine metabolic process",
      "score": 0.133622,
      "direct_score": 0.0,
      "propagated_score": 0.1715,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0042423",
      "best_source_term_label": "catecholamine biosynthetic process",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0042423"
      ],
      "supporting_source_term_labels": [
        "catecholamine biosynthetic process"
      ],
      "supporting_source_node_names": [
        "Cuproenzyme deficiency and neurodevelopmental injury"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Phenylketonuria",
      "disease_term_id": "MONDO:0009861",
      "source_file": "Phenylketonuria.yaml",
      "term_id": "GO:0009308",
      "term_label": "amine metabolic process",
      "score": 0.119725,
      "direct_score": 0.0,
      "propagated_score": 0.153664,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0042416",
      "best_source_term_label": "dopamine biosynthetic process",
      "best_source_path_score": 0.2401,
      "best_source_path": "is_a > is_a > is_a > is_a",
      "best_path_hops": 4,
      "best_path_is_a_hops": 4,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0042416"
      ],
      "supporting_source_term_labels": [
        "dopamine biosynthetic process"
      ],
      "supporting_source_node_names": [
        "Reduced Dopamine Biosynthesis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0009308" } }));
