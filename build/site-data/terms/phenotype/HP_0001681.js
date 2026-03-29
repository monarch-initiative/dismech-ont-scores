window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0001681"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0001681",
  "term_label": "Angina pectoris",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Coronary Artery Disease",
      "disease_term_id": "MONDO:1060134",
      "source_file": "Coronary_Artery_Disease.yaml",
      "term_id": "HP:0001681",
      "term_label": "Angina pectoris",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0001681",
      "best_source_term_label": "Angina pectoris",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001681"
      ],
      "supporting_source_term_labels": [
        "Angina pectoris"
      ],
      "supporting_source_node_names": [
        "Angina Pectoris"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Familial Hypercholesterolemia",
      "disease_term_id": "MONDO:0005439",
      "source_file": "Familial_Hypercholesterolemia.yaml",
      "term_id": "HP:0001681",
      "term_label": "Angina pectoris",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0001681",
      "best_source_term_label": "Angina pectoris",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001681"
      ],
      "supporting_source_term_labels": [
        "Angina pectoris"
      ],
      "supporting_source_node_names": [
        "Angina Pectoris"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0001681" } }));
