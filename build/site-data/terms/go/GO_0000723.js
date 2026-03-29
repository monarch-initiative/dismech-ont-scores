window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0000723"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0000723",
  "term_label": "telomere maintenance",
  "disease_count": 4,
  "direct_disease_count": 3,
  "top_score": 0.8,
  "mean_score": 0.545896,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Hepatocellular Carcinoma",
      "disease_term_id": "MONDO:0007256",
      "source_file": "Hepatocellular_Carcinoma.yaml",
      "term_id": "GO:0000723",
      "term_label": "telomere maintenance",
      "score": 0.8,
      "direct_score": 0.8,
      "propagated_score": 0.8,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "GO:0000723",
      "best_source_term_label": "telomere maintenance",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0000723"
      ],
      "supporting_source_term_labels": [
        "telomere maintenance"
      ],
      "supporting_source_node_names": [
        "Telomere Dysfunction and Genomic Instability"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Melanoma_in_Congenital_Melanocytic_Nevus",
      "disease_term_id": "MONDO:0850110",
      "source_file": "Melanoma_in_Congenital_Melanocytic_Nevus.yaml",
      "term_id": "GO:0000723",
      "term_label": "telomere maintenance",
      "score": 0.666667,
      "direct_score": 0.666667,
      "propagated_score": 0.666667,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "GO:0000723",
      "best_source_term_label": "telomere maintenance",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0000723"
      ],
      "supporting_source_term_labels": [
        "telomere maintenance"
      ],
      "supporting_source_node_names": [
        "Genetic Mutations"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Pancreatic Neuroendocrine Tumor",
      "disease_term_id": "MONDO:0019954",
      "source_file": "Pancreatic_Neuroendocrine_Tumor.yaml",
      "term_id": "GO:0000723",
      "term_label": "telomere maintenance",
      "score": 0.5,
      "direct_score": 0.5,
      "propagated_score": 0.5,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "GO:0000723",
      "best_source_term_label": "telomere maintenance",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0000723"
      ],
      "supporting_source_term_labels": [
        "telomere maintenance"
      ],
      "supporting_source_node_names": [
        "DAXX/ATRX Chromatin Remodeling Deficiency"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Glioblastoma, IDH-Wildtype",
      "disease_term_id": "MONDO:0850335",
      "source_file": "Glioblastoma_IDH_Wildtype.yaml",
      "term_id": "GO:0000723",
      "term_label": "telomere maintenance",
      "score": 0.216918,
      "direct_score": 0.0,
      "propagated_score": 0.278409,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0007004",
      "best_source_term_label": "telomere maintenance via telomerase",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0007004"
      ],
      "supporting_source_term_labels": [
        "telomere maintenance via telomerase"
      ],
      "supporting_source_node_names": [
        "TERT Promoter Activation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0000723" } }));
