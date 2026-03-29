window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0000348"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0000348",
  "term_label": "choroidal cell of the eye",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.30303,
  "mean_score": 0.30303,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Spaceflight Associated Neuro-Ocular Syndrome",
      "disease_term_id": "",
      "source_file": "Spaceflight_Associated_Neuro-Ocular_Syndrome.yaml",
      "term_id": "CL:0000348",
      "term_label": "choroidal cell of the eye",
      "score": 0.30303,
      "direct_score": 0.30303,
      "propagated_score": 0.30303,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "CL:0000348",
      "best_source_term_label": "choroidal cell of the eye",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000348"
      ],
      "supporting_source_term_labels": [
        "choroidal cell of the eye"
      ],
      "supporting_source_node_names": [
        "Choroidal Engorgement and Vascular Congestion"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0000348" } }));
