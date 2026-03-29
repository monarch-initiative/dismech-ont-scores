window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0002148"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0002148",
  "term_label": "dental pulp cell",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.3,
  "mean_score": 0.3,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Taurodontism",
      "disease_term_id": "MONDO:0010098",
      "source_file": "Taurodontism.yaml",
      "term_id": "CL:0002148",
      "term_label": "dental pulp cell",
      "score": 0.3,
      "direct_score": 0.0,
      "propagated_score": 0.3,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "CL:0000060",
      "best_source_term_label": "odontoblast",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000060"
      ],
      "supporting_source_term_labels": [
        "odontoblast"
      ],
      "supporting_source_node_names": [
        "Epithelial WNT10A-dependent root furcation failure",
        "WNT10A-associated molar crown and root dysmorphology in humans"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0002148" } }));
