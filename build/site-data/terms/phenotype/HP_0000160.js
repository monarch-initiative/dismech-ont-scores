window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0000160"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0000160",
  "term_label": "Narrow mouth",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Dystrophic Epidermolysis Bullosa",
      "disease_term_id": "MONDO:0006543",
      "source_file": "Dystrophic_Epidermolysis_Bullosa.yaml",
      "term_id": "HP:0000160",
      "term_label": "Narrow mouth",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0000160",
      "best_source_term_label": "Narrow mouth",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
      "term_id": "HP:0000160",
      "term_label": "Narrow mouth",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0000160",
      "best_source_term_label": "Narrow mouth",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0000160" } }));
