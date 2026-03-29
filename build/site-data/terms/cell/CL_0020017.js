window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0020017"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0020017",
  "term_label": "M0 macrophage",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.118609,
  "mean_score": 0.106748,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Obesity",
      "disease_term_id": "MONDO:0011122",
      "source_file": "Obesity.yaml",
      "term_id": "CL:0020017",
      "term_label": "M0 macrophage",
      "score": 0.118609,
      "direct_score": 0.0,
      "propagated_score": 0.133333,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "CL:0000863",
      "best_source_term_label": "M1 macrophage",
      "best_source_path_score": 0.4,
      "best_source_path": "develops_from",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 1,
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
      "term_id": "CL:0020017",
      "term_label": "M0 macrophage",
      "score": 0.094887,
      "direct_score": 0.0,
      "propagated_score": 0.106667,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "CL:0000863",
      "best_source_term_label": "M1 macrophage",
      "best_source_path_score": 0.4,
      "best_source_path": "develops_from",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 1,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0020017" } }));
