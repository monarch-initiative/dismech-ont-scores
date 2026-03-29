window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0020301"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0020301",
  "term_label": "Abnormal elbow physiology",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.343,
  "mean_score": 0.343,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Osteogenesis Imperfecta Type V",
      "disease_term_id": "MONDO:0012591",
      "source_file": "Osteogenesis_Imperfecta_Type_V.yaml",
      "term_id": "HP:0020301",
      "term_label": "Abnormal elbow physiology",
      "score": 0.343,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "HP:0003083",
      "best_source_term_label": "Dislocated radial head",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0003083"
      ],
      "supporting_source_term_labels": [
        "Dislocated radial head"
      ],
      "supporting_source_node_names": [
        "Radial Head Dislocation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0020301" } }));
