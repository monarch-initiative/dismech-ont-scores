window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0000784"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0000784",
  "term_label": "plasmacytoid dendritic cell",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.692307,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Dermatomyositis",
      "disease_term_id": "MONDO:0016367",
      "source_file": "Dermatomyositis.yaml",
      "term_id": "CL:0000784",
      "term_label": "plasmacytoid dendritic cell",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "CL:0000784",
      "best_source_term_label": "plasmacytoid dendritic cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000784"
      ],
      "supporting_source_term_labels": [
        "plasmacytoid dendritic cell"
      ],
      "supporting_source_node_names": [
        "Type I Interferon Pathway Activation"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Systemic Lupus Erythematosus",
      "disease_term_id": "MONDO:0007915",
      "source_file": "Systemic_Lupus_Erythematosus.yaml",
      "term_id": "CL:0000784",
      "term_label": "plasmacytoid dendritic cell",
      "score": 0.384615,
      "direct_score": 0.384615,
      "propagated_score": 0.384615,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "CL:0000784",
      "best_source_term_label": "plasmacytoid dendritic cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000784"
      ],
      "supporting_source_term_labels": [
        "plasmacytoid dendritic cell"
      ],
      "supporting_source_node_names": [
        "TLR7/TLR9-Mediated Nucleic Acid Sensing",
        "Type I Interferon Pathway Activation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0000784" } }));
