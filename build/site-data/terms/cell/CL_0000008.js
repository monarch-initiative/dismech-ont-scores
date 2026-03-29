window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0000008"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0000008",
  "term_label": "migratory cranial neural crest cell",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.107826,
  "mean_score": 0.084413,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Spaceflight Associated Neuro-Ocular Syndrome",
      "disease_term_id": "",
      "source_file": "Spaceflight_Associated_Neuro-Ocular_Syndrome.yaml",
      "term_id": "CL:0000008",
      "term_label": "migratory cranial neural crest cell",
      "score": 0.107826,
      "direct_score": 0.0,
      "propagated_score": 0.121212,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "CL:0000348",
      "best_source_term_label": "choroidal cell of the eye",
      "best_source_path_score": 0.4,
      "best_source_path": "develops_from",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 1,
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
    },
    {
      "ontology": "cell",
      "disorder_name": "Taurodontism",
      "disease_term_id": "MONDO:0010098",
      "source_file": "Taurodontism.yaml",
      "term_id": "CL:0000008",
      "term_label": "migratory cranial neural crest cell",
      "score": 0.060999,
      "direct_score": 0.0,
      "propagated_score": 0.068571,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "CL:0000060",
      "best_source_term_label": "odontoblast",
      "best_source_path_score": 0.16,
      "best_source_path": "develops_from > develops_from",
      "best_path_hops": 2,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 2,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0000008" } }));
