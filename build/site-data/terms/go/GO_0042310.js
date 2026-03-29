window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0042310"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0042310",
  "term_label": "vasoconstriction",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 0.8,
  "mean_score": 0.746931,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Postural Orthostatic Tachycardia Syndrome",
      "disease_term_id": "MONDO:0011479",
      "source_file": "Postural_Orthostatic_Tachycardia_Syndrome.yaml",
      "term_id": "GO:0042310",
      "term_label": "vasoconstriction",
      "score": 0.8,
      "direct_score": 0.8,
      "propagated_score": 0.8,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0042310",
      "best_source_term_label": "vasoconstriction",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
    },
    {
      "ontology": "go",
      "disorder_name": "Raynaud Disease",
      "disease_term_id": "MONDO:0008364",
      "source_file": "Raynaud_Disease.yaml",
      "term_id": "GO:0042310",
      "term_label": "vasoconstriction",
      "score": 0.693862,
      "direct_score": 0.5,
      "propagated_score": 0.78,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0014829",
      "best_source_term_label": "vascular associated smooth muscle contraction",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0014829",
        "GO:0042310"
      ],
      "supporting_source_term_labels": [
        "vascular associated smooth muscle contraction",
        "vasoconstriction"
      ],
      "supporting_source_node_names": [
        "Alpha-2C Adrenoceptor Cold-Induced Vasoconstriction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0042310" } }));
