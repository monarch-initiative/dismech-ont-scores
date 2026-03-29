window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0002262"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0002262",
  "term_label": "endothelial cell of sinusoid",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.7,
  "mean_score": 0.7,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Liver Cirrhosis",
      "disease_term_id": "MONDO:0005155",
      "source_file": "Liver_Cirrhosis.yaml",
      "term_id": "CL:0002262",
      "term_label": "endothelial cell of sinusoid",
      "score": 0.7,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "CL:1000398",
      "best_source_term_label": "endothelial cell of hepatic sinusoid",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:1000398"
      ],
      "supporting_source_term_labels": [
        "endothelial cell of hepatic sinusoid"
      ],
      "supporting_source_node_names": [
        "Portal Hypertension"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0002262" } }));
