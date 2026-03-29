window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:1001599"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:1001599",
  "term_label": "pancreas exocrine glandular cell",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.622697,
  "mean_score": 0.405696,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Chronic Pancreatitis",
      "disease_term_id": "MONDO:0005003",
      "source_file": "Chronic_Pancreatitis.yaml",
      "term_id": "CL:1001599",
      "term_label": "pancreas exocrine glandular cell",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "CL:0002064",
      "best_source_term_label": "pancreatic acinar cell",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0002064"
      ],
      "supporting_source_term_labels": [
        "pancreatic acinar cell"
      ],
      "supporting_source_node_names": [
        "Recurrent Acinar Cell Injury"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Cystic Fibrosis",
      "disease_term_id": "MONDO:0009061",
      "source_file": "Cystic_Fibrosis.yaml",
      "term_id": "CL:1001599",
      "term_label": "pancreas exocrine glandular cell",
      "score": 0.188696,
      "direct_score": 0.0,
      "propagated_score": 0.212121,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "CL:0002064",
      "best_source_term_label": "pancreatic acinar cell",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0002064"
      ],
      "supporting_source_term_labels": [
        "pancreatic acinar cell"
      ],
      "supporting_source_node_names": [
        "Exocrine Pancreatic Tissue Destruction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:1001599" } }));
