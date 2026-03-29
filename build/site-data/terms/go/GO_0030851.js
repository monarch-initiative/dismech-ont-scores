window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0030851"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0030851",
  "term_label": "granulocyte differentiation",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 0.8,
  "mean_score": 0.8,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Acute Myeloid Leukemia, Core Binding Factor",
      "disease_term_id": "MONDO:0015166",
      "source_file": "Core_Binding_Factor_AML.yaml",
      "term_id": "GO:0030851",
      "term_label": "granulocyte differentiation",
      "score": 0.8,
      "direct_score": 0.8,
      "propagated_score": 0.8,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0030851",
      "best_source_term_label": "granulocyte differentiation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0030851"
      ],
      "supporting_source_term_labels": [
        "granulocyte differentiation"
      ],
      "supporting_source_node_names": [
        "Differentiation Block at Myeloid Stage"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Acute Promyelocytic Leukemia, PML-RARA",
      "disease_term_id": "MONDO:0012883",
      "source_file": "APL_PML_RARA.yaml",
      "term_id": "GO:0030851",
      "term_label": "granulocyte differentiation",
      "score": 0.8,
      "direct_score": 0.8,
      "propagated_score": 0.8,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0030851",
      "best_source_term_label": "granulocyte differentiation",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0030851"
      ],
      "supporting_source_term_labels": [
        "granulocyte differentiation"
      ],
      "supporting_source_node_names": [
        "Transcriptional Repression of Differentiation Genes"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0030851" } }));
