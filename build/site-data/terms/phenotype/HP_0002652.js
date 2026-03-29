window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0002652"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0002652",
  "term_label": "Skeletal dysplasia",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.622697,
  "mean_score": 0.438877,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Camurati-Engelmann Disease",
      "disease_term_id": "MONDO:0007542",
      "source_file": "Camurati-Engelmann_Disease.yaml",
      "term_id": "HP:0002652",
      "term_label": "Skeletal dysplasia",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0100252",
      "best_source_term_label": "Diaphyseal dysplasia",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0100252"
      ],
      "supporting_source_term_labels": [
        "Diaphyseal dysplasia"
      ],
      "supporting_source_node_names": [
        "Diaphyseal Dysplasia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Fanconi_Anemia",
      "disease_term_id": "MONDO:0019391",
      "source_file": "Fanconi_Anemia.yaml",
      "term_id": "HP:0002652",
      "term_label": "Skeletal dysplasia",
      "score": 0.255057,
      "direct_score": 0.0,
      "propagated_score": 0.28672,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0005775",
      "best_source_term_label": "Multiple skeletal anomalies",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0005775"
      ],
      "supporting_source_term_labels": [
        "Multiple skeletal anomalies"
      ],
      "supporting_source_node_names": [
        "Skeletal Anomalies"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0002652" } }));
