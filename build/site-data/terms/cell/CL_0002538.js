window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0002538"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0002538",
  "term_label": "intrahepatic cholangiocyte",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "FGFR-Altered Cholangiocarcinoma",
      "disease_term_id": "MONDO:0003210",
      "source_file": "FGFR_Altered_Cholangiocarcinoma.yaml",
      "term_id": "CL:0002538",
      "term_label": "intrahepatic cholangiocyte",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "CL:0002538",
      "best_source_term_label": "intrahepatic cholangiocyte",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0002538"
      ],
      "supporting_source_term_labels": [
        "intrahepatic cholangiocyte"
      ],
      "supporting_source_node_names": [
        "FGFR2 Fusion and Constitutive Activation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0002538" } }));
