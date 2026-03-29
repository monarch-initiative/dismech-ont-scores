window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0000863"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0000863",
  "term_label": "M1 macrophage",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 0.333333,
  "mean_score": 0.3,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Obesity",
      "disease_term_id": "MONDO:0011122",
      "source_file": "Obesity.yaml",
      "term_id": "CL:0000863",
      "term_label": "M1 macrophage",
      "score": 0.333333,
      "direct_score": 0.333333,
      "propagated_score": 0.333333,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "CL:0000863",
      "best_source_term_label": "M1 macrophage",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
      "term_id": "CL:0000863",
      "term_label": "M1 macrophage",
      "score": 0.266667,
      "direct_score": 0.266667,
      "propagated_score": 0.266667,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "CL:0000863",
      "best_source_term_label": "M1 macrophage",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0000863" } }));
