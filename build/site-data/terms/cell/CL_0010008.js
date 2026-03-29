window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0010008"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0010008",
  "term_label": "cardiac endothelial cell",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.56,
  "mean_score": 0.56,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Noonan Syndrome",
      "disease_term_id": "MONDO:0018997",
      "source_file": "Noonan_Syndrome.yaml",
      "term_id": "CL:0010008",
      "term_label": "cardiac endothelial cell",
      "score": 0.56,
      "direct_score": 0.0,
      "propagated_score": 0.56,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "CL:0002350",
      "best_source_term_label": "endocardial cell",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0002350"
      ],
      "supporting_source_term_labels": [
        "endocardial cell"
      ],
      "supporting_source_node_names": [
        "Cardiac Valve Morphogenesis Defects"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0010008" } }));
