window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0035150"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0035150",
  "term_label": "regulation of tube size",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.347053,
  "mean_score": 0.273833,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Raynaud Disease",
      "disease_term_id": "MONDO:0008364",
      "source_file": "Raynaud_Disease.yaml",
      "term_id": "GO:0035150",
      "term_label": "regulation of tube size",
      "score": 0.347053,
      "direct_score": 0.0,
      "propagated_score": 0.445434,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0014829",
      "best_source_term_label": "vascular associated smooth muscle contraction",
      "best_source_path_score": 0.2401,
      "best_source_path": "is_a > is_a > is_a > is_a",
      "best_path_hops": 4,
      "best_path_is_a_hops": 4,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0014829",
        "GO:0042310",
        "GO:0042311"
      ],
      "supporting_source_term_labels": [
        "vascular associated smooth muscle contraction",
        "vasoconstriction",
        "vasodilation"
      ],
      "supporting_source_node_names": [
        "Alpha-2C Adrenoceptor Cold-Induced Vasoconstriction",
        "Endothelial Dysfunction",
        "RhoA/ROCK Potentiation of Vasospasm"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Congestive Splenomegaly",
      "disease_term_id": "MONDO:0037251",
      "source_file": "Congestive_Splenomegaly.yaml",
      "term_id": "GO:0035150",
      "term_label": "regulation of tube size",
      "score": 0.267243,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0042311",
      "best_source_term_label": "vasodilation",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0042311"
      ],
      "supporting_source_term_labels": [
        "vasodilation"
      ],
      "supporting_source_node_names": [
        "Portal and Splenic Venous Congestion"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Peripheral Artery Disease",
      "disease_term_id": "MONDO:0005386",
      "source_file": "Peripheral_Artery_Disease.yaml",
      "term_id": "GO:0035150",
      "term_label": "regulation of tube size",
      "score": 0.267243,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0042311",
      "best_source_term_label": "vasodilation",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0042311"
      ],
      "supporting_source_term_labels": [
        "vasodilation"
      ],
      "supporting_source_node_names": [
        "Endothelial Dysfunction"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Postural Orthostatic Tachycardia Syndrome",
      "disease_term_id": "MONDO:0011479",
      "source_file": "Postural_Orthostatic_Tachycardia_Syndrome.yaml",
      "term_id": "GO:0035150",
      "term_label": "regulation of tube size",
      "score": 0.213794,
      "direct_score": 0.0,
      "propagated_score": 0.2744,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0042310",
      "best_source_term_label": "vasoconstriction",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0042310"
      ],
      "supporting_source_term_labels": [
        "vasoconstriction"
      ],
      "supporting_source_node_names": [
        "Venous Pooling and Reduced Preload"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0035150" } }));
