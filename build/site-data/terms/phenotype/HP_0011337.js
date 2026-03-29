window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0011337"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0011337",
  "term_label": "Abnormality of mouth size",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.577478,
  "mean_score": 0.577478,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Dystrophic Epidermolysis Bullosa",
      "disease_term_id": "MONDO:0006543",
      "source_file": "Dystrophic_Epidermolysis_Bullosa.yaml",
      "term_id": "HP:0011337",
      "term_label": "Abnormality of mouth size",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0000160",
      "best_source_term_label": "Narrow mouth",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000160"
      ],
      "supporting_source_term_labels": [
        "Narrow mouth"
      ],
      "supporting_source_node_names": [
        "Microstomia"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Ellis-van Creveld Syndrome",
      "disease_term_id": "MONDO:0009162",
      "source_file": "Ellis-van_Creveld_Syndrome.yaml",
      "term_id": "HP:0011337",
      "term_label": "Abnormality of mouth size",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0000160",
      "best_source_term_label": "Narrow mouth",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000160"
      ],
      "supporting_source_term_labels": [
        "Narrow mouth"
      ],
      "supporting_source_node_names": [
        "Short Upper Lip with Multiple Frenula"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Temple-Baraitser Syndrome",
      "disease_term_id": "MONDO:0012735",
      "source_file": "Temple-Baraitser_Syndrome.yaml",
      "term_id": "HP:0011337",
      "term_label": "Abnormality of mouth size",
      "score": 0.577478,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "HP:0000154",
      "best_source_term_label": "Wide mouth",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000154"
      ],
      "supporting_source_term_labels": [
        "Wide mouth"
      ],
      "supporting_source_node_names": [
        "Wide mouth"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0011337" } }));
