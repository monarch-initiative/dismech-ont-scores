window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0000060"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0000060",
  "term_label": "odontoblast",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.428571,
  "mean_score": 0.428571,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Taurodontism",
      "disease_term_id": "MONDO:0010098",
      "source_file": "Taurodontism.yaml",
      "term_id": "CL:0000060",
      "term_label": "odontoblast",
      "score": 0.428571,
      "direct_score": 0.428571,
      "propagated_score": 0.428571,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "CL:0000060",
      "best_source_term_label": "odontoblast",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0000060" } }));
