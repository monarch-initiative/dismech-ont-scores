window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0002202"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0002202",
  "term_label": "epithelial cell of tracheobronchial tree",
  "disease_count": 4,
  "direct_disease_count": 1,
  "top_score": 0.545394,
  "mean_score": 0.446096,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Cough Variant Asthma",
      "disease_term_id": "MONDO:0001491",
      "source_file": "Cough_Variant_Asthma.yaml",
      "term_id": "CL:0002202",
      "term_label": "epithelial cell of tracheobronchial tree",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "CL:0002328",
      "best_source_term_label": "bronchial epithelial cell",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0002328"
      ],
      "supporting_source_term_labels": [
        "bronchial epithelial cell"
      ],
      "supporting_source_node_names": [
        "Airway Hyperresponsiveness",
        "Cough Reflex Hypersensitivity"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Cystic Fibrosis",
      "disease_term_id": "MONDO:0009061",
      "source_file": "Cystic_Fibrosis.yaml",
      "term_id": "CL:0002202",
      "term_label": "epithelial cell of tracheobronchial tree",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "CL:0002328",
      "best_source_term_label": "bronchial epithelial cell",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0002328"
      ],
      "supporting_source_term_labels": [
        "bronchial epithelial cell"
      ],
      "supporting_source_node_names": [
        "Airway Surface Liquid Depletion",
        "ENaC Hyperactivity and Sodium Hyperabsorption",
        "Mucus Plugging"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Asthma",
      "disease_term_id": "MONDO:0004979",
      "source_file": "Asthma.yaml",
      "term_id": "CL:0002202",
      "term_label": "epithelial cell of tracheobronchial tree",
      "score": 0.511796,
      "direct_score": 0.273973,
      "propagated_score": 0.656877,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "CL:0002328",
      "best_source_term_label": "bronchial epithelial cell",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0002202",
        "CL:0002328"
      ],
      "supporting_source_term_labels": [
        "bronchial epithelial cell",
        "epithelial cell of tracheobronchial tree"
      ],
      "supporting_source_node_names": [
        "Mucus Overproduction"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Chronic_Obstructive_Pulmonary_Disease",
      "disease_term_id": "MONDO:0005002",
      "source_file": "Chronic_Obstructive_Pulmonary_Disease.yaml",
      "term_id": "CL:0002202",
      "term_label": "epithelial cell of tracheobronchial tree",
      "score": 0.181798,
      "direct_score": 0.0,
      "propagated_score": 0.233333,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "CL:0000158",
      "best_source_term_label": "club cell",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000158"
      ],
      "supporting_source_term_labels": [
        "club cell"
      ],
      "supporting_source_node_names": [
        "Mucus Hypersecretion"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0002202" } }));
