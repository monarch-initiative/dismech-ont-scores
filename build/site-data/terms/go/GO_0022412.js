window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0022412"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0022412",
  "term_label": "cellular process involved in reproduction in multicellular organism",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.622697,
  "mean_score": 0.397198,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Testicular Germ Cell Tumor",
      "disease_term_id": "MONDO:0010108",
      "source_file": "Testicular_Germ_Cell_Tumor.yaml",
      "term_id": "GO:0022412",
      "term_label": "cellular process involved in reproduction in multicellular organism",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0007281",
      "best_source_term_label": "germ cell development",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0007281"
      ],
      "supporting_source_term_labels": [
        "germ cell development"
      ],
      "supporting_source_node_names": [
        "Germ Cell Neoplasia In Situ (GCNIS)"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Pseudohypoparathyroidism",
      "disease_term_id": "MONDO:0019992",
      "source_file": "Pseudohypoparathyroidism.yaml",
      "term_id": "GO:0022412",
      "term_label": "cellular process involved in reproduction in multicellular organism",
      "score": 0.1717,
      "direct_score": 0.0,
      "propagated_score": 0.193015,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0071514",
      "best_source_term_label": "genomic imprinting",
      "best_source_path_score": 0.35,
      "best_source_path": "part_of > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0071514"
      ],
      "supporting_source_term_labels": [
        "genomic imprinting"
      ],
      "supporting_source_node_names": [
        "GNAS Imprinting-Dependent Signaling Defect"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0022412" } }));
