window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0002350"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0002350",
  "term_label": "endocardial cell",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.8,
  "mean_score": 0.8,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Noonan Syndrome",
      "disease_term_id": "MONDO:0018997",
      "source_file": "Noonan_Syndrome.yaml",
      "term_id": "CL:0002350",
      "term_label": "endocardial cell",
      "score": 0.8,
      "direct_score": 0.8,
      "propagated_score": 0.8,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "CL:0002350",
      "best_source_term_label": "endocardial cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0002350" } }));
