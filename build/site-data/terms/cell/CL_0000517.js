window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0000517"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0000517",
  "term_label": "macrophage derived foam cell",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.548,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Erdheim-Chester Disease",
      "disease_term_id": "MONDO:0018153",
      "source_file": "Erdheim-Chester_Disease.yaml",
      "term_id": "CL:0000517",
      "term_label": "macrophage derived foam cell",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "CL:0000517",
      "best_source_term_label": "macrophage derived foam cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
      "disorder_name": "Hyperlipidemia",
      "disease_term_id": "MONDO:0021187",
      "source_file": "Hyperlipidemia.yaml",
      "term_id": "CL:0000517",
      "term_label": "macrophage derived foam cell",
      "score": 0.096,
      "direct_score": 0.096,
      "propagated_score": 0.096,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "CL:0000517",
      "best_source_term_label": "macrophage derived foam cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0000517" } }));
