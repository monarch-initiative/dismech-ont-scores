window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0000325"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0000325",
  "term_label": "Triangular face",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Fanconi_Anemia",
      "disease_term_id": "MONDO:0019391",
      "source_file": "Fanconi_Anemia.yaml",
      "term_id": "HP:0000325",
      "term_label": "Triangular face",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0000325",
      "best_source_term_label": "Triangular face",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000325"
      ],
      "supporting_source_term_labels": [
        "Triangular face"
      ],
      "supporting_source_node_names": [
        "Triangular Face"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Osteogenesis Imperfecta Type III",
      "disease_term_id": "MONDO:0009804",
      "source_file": "Osteogenesis_Imperfecta_Type_III.yaml",
      "term_id": "HP:0000325",
      "term_label": "Triangular face",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0000325",
      "best_source_term_label": "Triangular face",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000325"
      ],
      "supporting_source_term_labels": [
        "Triangular face"
      ],
      "supporting_source_node_names": [
        "Triangular Facies"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0000325" } }));
