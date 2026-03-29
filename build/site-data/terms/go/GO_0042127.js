window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0042127"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0042127",
  "term_label": "regulation of cell population proliferation",
  "disease_count": 5,
  "direct_disease_count": 2,
  "top_score": 0.8,
  "mean_score": 0.553587,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Embryonal Rhabdomyosarcoma",
      "disease_term_id": "MONDO:0009993",
      "source_file": "Embryonal_Rhabdomyosarcoma.yaml",
      "term_id": "GO:0042127",
      "term_label": "regulation of cell population proliferation",
      "score": 0.8,
      "direct_score": 0.8,
      "propagated_score": 0.8,
      "specificity": 0.743583,
      "is_direct": true,
      "best_source_term_id": "GO:0042127",
      "best_source_term_label": "regulation of cell population proliferation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0042127"
      ],
      "supporting_source_term_labels": [
        "regulation of cell population proliferation"
      ],
      "supporting_source_node_names": [
        "IGF2 Overexpression"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Polycystic Kidney Disease",
      "disease_term_id": "MONDO:0020642",
      "source_file": "Polycystic_Kidney_Disease.yaml",
      "term_id": "GO:0042127",
      "term_label": "regulation of cell population proliferation",
      "score": 0.666667,
      "direct_score": 0.666667,
      "propagated_score": 0.666667,
      "specificity": 0.743583,
      "is_direct": true,
      "best_source_term_id": "GO:0042127",
      "best_source_term_label": "regulation of cell population proliferation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0042127"
      ],
      "supporting_source_term_labels": [
        "regulation of cell population proliferation"
      ],
      "supporting_source_node_names": [
        "Epithelial Proliferation and Kidney Enlargement"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Small Cell Lung Cancer",
      "disease_term_id": "MONDO:0008433",
      "source_file": "Small_Cell_Lung_Cancer.yaml",
      "term_id": "GO:0042127",
      "term_label": "regulation of cell population proliferation",
      "score": 0.520508,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "GO:0008284",
      "best_source_term_label": "positive regulation of cell population proliferation",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0008284"
      ],
      "supporting_source_term_labels": [
        "positive regulation of cell population proliferation"
      ],
      "supporting_source_node_names": [
        "Neuron-Driven Proliferation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "IDH-Mutant and 1p/19q-Codeleted Oligodendroglioma",
      "disease_term_id": "MONDO:0859592",
      "source_file": "IDH_Mutant_Oligodendroglioma.yaml",
      "term_id": "GO:0042127",
      "term_label": "regulation of cell population proliferation",
      "score": 0.416406,
      "direct_score": 0.0,
      "propagated_score": 0.56,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "GO:0008285",
      "best_source_term_label": "negative regulation of cell population proliferation",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0008285"
      ],
      "supporting_source_term_labels": [
        "negative regulation of cell population proliferation"
      ],
      "supporting_source_node_names": [
        "CIC/FUBP1 Tumor Suppressor Loss"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Pulmonary_hypertension",
      "disease_term_id": "MONDO:0005149",
      "source_file": "Pulmonary_hypertension.yaml",
      "term_id": "GO:0042127",
      "term_label": "regulation of cell population proliferation",
      "score": 0.364356,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.743583,
      "is_direct": false,
      "best_source_term_id": "GO:0048661",
      "best_source_term_label": "positive regulation of smooth muscle cell proliferation",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0048661"
      ],
      "supporting_source_term_labels": [
        "positive regulation of smooth muscle cell proliferation"
      ],
      "supporting_source_node_names": [
        "Vascular Remodeling"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0042127" } }));
