window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0002064"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0002064",
  "term_label": "pancreatic acinar cell",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.651515,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Chronic Pancreatitis",
      "disease_term_id": "MONDO:0005003",
      "source_file": "Chronic_Pancreatitis.yaml",
      "term_id": "CL:0002064",
      "term_label": "pancreatic acinar cell",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "CL:0002064",
      "best_source_term_label": "pancreatic acinar cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
      "term_id": "CL:0002064",
      "term_label": "pancreatic acinar cell",
      "score": 0.30303,
      "direct_score": 0.30303,
      "propagated_score": 0.30303,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "CL:0002064",
      "best_source_term_label": "pancreatic acinar cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0002064" } }));
