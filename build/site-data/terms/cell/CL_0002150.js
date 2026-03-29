window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0002150"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0002150",
  "term_label": "epithelioid macrophage",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.666667,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Melkersson-Rosenthal syndrome",
      "disease_term_id": "MONDO:0007969",
      "source_file": "Melkersson_Rosenthal_syndrome.yaml",
      "term_id": "CL:0002150",
      "term_label": "epithelioid macrophage",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "CL:0002150",
      "best_source_term_label": "epithelioid macrophage",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0002150"
      ],
      "supporting_source_term_labels": [
        "epithelioid macrophage"
      ],
      "supporting_source_node_names": [
        "Dysregulated Th1/Th17 cytokine signaling with IL-12/23 and TNF-\u03b1 involvement",
        "Non-caseating granulomatous inflammation with epithelioid histiocytes"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Sarcoidosis",
      "disease_term_id": "MONDO:0019338",
      "source_file": "Sarcoidosis.yaml",
      "term_id": "CL:0002150",
      "term_label": "epithelioid macrophage",
      "score": 0.333333,
      "direct_score": 0.333333,
      "propagated_score": 0.333333,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "CL:0002150",
      "best_source_term_label": "epithelioid macrophage",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0002150"
      ],
      "supporting_source_term_labels": [
        "epithelioid macrophage"
      ],
      "supporting_source_node_names": [
        "Granuloma Formation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0002150" } }));
