window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0002797"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0002797",
  "term_label": "Osteolysis",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Ainhum",
      "disease_term_id": "MONDO:0007074",
      "source_file": "Ainhum.yaml",
      "term_id": "HP:0002797",
      "term_label": "Osteolysis",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0002797",
      "best_source_term_label": "Osteolysis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002797"
      ],
      "supporting_source_term_labels": [
        "Osteolysis"
      ],
      "supporting_source_node_names": [
        "Osteolysis"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Multiple Myeloma",
      "disease_term_id": "MONDO:0009693",
      "source_file": "Multiple_Myeloma.yaml",
      "term_id": "HP:0002797",
      "term_label": "Osteolysis",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0002797",
      "best_source_term_label": "Osteolysis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002797"
      ],
      "supporting_source_term_labels": [
        "Osteolysis"
      ],
      "supporting_source_node_names": [
        "Osteolytic Bone Lesions"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0002797" } }));
