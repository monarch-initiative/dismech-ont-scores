window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0000891"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0000891",
  "term_label": "foam cell",
  "disease_count": 4,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.482771,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Peripheral Artery Disease",
      "disease_term_id": "MONDO:0005386",
      "source_file": "Peripheral_Artery_Disease.yaml",
      "term_id": "CL:0000891",
      "term_label": "foam cell",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "CL:0000891",
      "best_source_term_label": "foam cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000891"
      ],
      "supporting_source_term_labels": [
        "foam cell"
      ],
      "supporting_source_node_names": [
        "Atherosclerosis"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Erdheim-Chester Disease",
      "disease_term_id": "MONDO:0018153",
      "source_file": "Erdheim-Chester_Disease.yaml",
      "term_id": "CL:0000891",
      "term_label": "foam cell",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "CL:0000517",
      "best_source_term_label": "macrophage derived foam cell",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000517"
      ],
      "supporting_source_term_labels": [
        "macrophage derived foam cell"
      ],
      "supporting_source_node_names": [
        "Histiocytic Infiltration and Fibrosis"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Coronary Artery Disease",
      "disease_term_id": "MONDO:1060134",
      "source_file": "Coronary_Artery_Disease.yaml",
      "term_id": "CL:0000891",
      "term_label": "foam cell",
      "score": 0.333333,
      "direct_score": 0.333333,
      "propagated_score": 0.333333,
      "specificity": 0.779134,
      "is_direct": true,
      "best_source_term_id": "CL:0000891",
      "best_source_term_label": "foam cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000891"
      ],
      "supporting_source_term_labels": [
        "foam cell"
      ],
      "supporting_source_node_names": [
        "Atherosclerotic Plaque Formation"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Hyperlipidemia",
      "disease_term_id": "MONDO:0021187",
      "source_file": "Hyperlipidemia.yaml",
      "term_id": "CL:0000891",
      "term_label": "foam cell",
      "score": 0.052358,
      "direct_score": 0.0,
      "propagated_score": 0.0672,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "CL:0000517",
      "best_source_term_label": "macrophage derived foam cell",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000517"
      ],
      "supporting_source_term_labels": [
        "macrophage derived foam cell"
      ],
      "supporting_source_node_names": [
        "Macrophage-Derived Foam Cell Formation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0000891" } }));
