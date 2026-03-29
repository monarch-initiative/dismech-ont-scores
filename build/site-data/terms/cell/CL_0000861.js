window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0000861"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0000861",
  "term_label": "elicited macrophage",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.311654,
  "mean_score": 0.185694,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Melkersson-Rosenthal syndrome",
      "disease_term_id": "MONDO:0007969",
      "source_file": "Melkersson_Rosenthal_syndrome.yaml",
      "term_id": "CL:0000861",
      "term_label": "elicited macrophage",
      "score": 0.311654,
      "direct_score": 0.0,
      "propagated_score": 0.4,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "CL:0002150",
      "best_source_term_label": "epithelioid macrophage",
      "best_source_path_score": 0.4,
      "best_source_path": "develops_from",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 1,
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
      "disorder_name": "Obesity",
      "disease_term_id": "MONDO:0011122",
      "source_file": "Obesity.yaml",
      "term_id": "CL:0000861",
      "term_label": "elicited macrophage",
      "score": 0.181798,
      "direct_score": 0.0,
      "propagated_score": 0.233333,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "CL:0000863",
      "best_source_term_label": "M1 macrophage",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000863"
      ],
      "supporting_source_term_labels": [
        "M1 macrophage"
      ],
      "supporting_source_node_names": [
        "Adipose Tissue Dysfunction"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Hepatitis B",
      "disease_term_id": "MONDO:0005344",
      "source_file": "Hepatitis_B.yaml",
      "term_id": "CL:0000861",
      "term_label": "elicited macrophage",
      "score": 0.145438,
      "direct_score": 0.0,
      "propagated_score": 0.186667,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "CL:0000863",
      "best_source_term_label": "M1 macrophage",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000863"
      ],
      "supporting_source_term_labels": [
        "M1 macrophage"
      ],
      "supporting_source_node_names": [
        "Chronic Inflammation"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Sarcoidosis",
      "disease_term_id": "MONDO:0019338",
      "source_file": "Sarcoidosis.yaml",
      "term_id": "CL:0000861",
      "term_label": "elicited macrophage",
      "score": 0.103885,
      "direct_score": 0.0,
      "propagated_score": 0.133333,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "CL:0002150",
      "best_source_term_label": "epithelioid macrophage",
      "best_source_path_score": 0.4,
      "best_source_path": "develops_from",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 1,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0000861" } }));
