window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0042476"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0042476",
  "term_label": "odontogenesis",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.833333,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Taurodontism",
      "disease_term_id": "MONDO:0010098",
      "source_file": "Taurodontism.yaml",
      "term_id": "GO:0042476",
      "term_label": "odontogenesis",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0042476",
      "best_source_term_label": "odontogenesis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0042476"
      ],
      "supporting_source_term_labels": [
        "odontogenesis"
      ],
      "supporting_source_node_names": [
        "Epithelial WNT10A-dependent root furcation failure",
        "Failed invagination of Hertwig epithelial root sheath diaphragm",
        "KCTD1-associated WNT-SHH-BMP signaling perturbation",
        "WNT10A-associated molar crown and root dysmorphology in humans"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Junctional Epidermolysis Bullosa",
      "disease_term_id": "MONDO:0017612",
      "source_file": "Junctional_Epidermolysis_Bullosa.yaml",
      "term_id": "GO:0042476",
      "term_label": "odontogenesis",
      "score": 0.666667,
      "direct_score": 0.666667,
      "propagated_score": 0.666667,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0042476",
      "best_source_term_label": "odontogenesis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0042476"
      ],
      "supporting_source_term_labels": [
        "odontogenesis"
      ],
      "supporting_source_node_names": [
        "Enamel Hypoplasia from Ameloblast-BMZ Defects"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0042476" } }));
