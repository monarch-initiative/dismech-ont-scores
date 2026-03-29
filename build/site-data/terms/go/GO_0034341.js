window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0034341"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0034341",
  "term_label": "response to type II interferon",
  "disease_count": 3,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.573949,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Vitiligo",
      "disease_term_id": "MONDO:0008661",
      "source_file": "Vitiligo.yaml",
      "term_id": "GO:0034341",
      "term_label": "response to type II interferon",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.824968,
      "is_direct": true,
      "best_source_term_id": "GO:0034341",
      "best_source_term_label": "response to type II interferon",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0034341"
      ],
      "supporting_source_term_labels": [
        "response to type II interferon"
      ],
      "supporting_source_node_names": [
        "IFN-gamma-CXCL9/CXCL10 Chemokine Axis"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Osteoarthritis",
      "disease_term_id": "MONDO:0005178",
      "source_file": "Osteoarthritis.yaml",
      "term_id": "GO:0034341",
      "term_label": "response to type II interferon",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0071346",
      "best_source_term_label": "cellular response to type II interferon",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0071346"
      ],
      "supporting_source_term_labels": [
        "cellular response to type II interferon"
      ],
      "supporting_source_node_names": [
        "Cartilage Degradation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Melkersson-Rosenthal syndrome",
      "disease_term_id": "MONDO:0007969",
      "source_file": "Melkersson_Rosenthal_syndrome.yaml",
      "term_id": "GO:0034341",
      "term_label": "response to type II interferon",
      "score": 0.144369,
      "direct_score": 0.0,
      "propagated_score": 0.175,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0060333",
      "best_source_term_label": "type II interferon-mediated signaling pathway",
      "best_source_path_score": 0.35,
      "best_source_path": "part_of > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0060333"
      ],
      "supporting_source_term_labels": [
        "type II interferon-mediated signaling pathway"
      ],
      "supporting_source_node_names": [
        "Dysregulated Th1/Th17 cytokine signaling with IL-12/23 and TNF-\u03b1 involvement"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0034341" } }));
