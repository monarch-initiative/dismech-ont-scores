window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0011747"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0011747",
  "term_label": "Abnormality of the anterior pituitary",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.540156,
  "mean_score": 0.540156,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Fanconi_Anemia",
      "disease_term_id": "MONDO:0019391",
      "source_file": "Fanconi_Anemia.yaml",
      "term_id": "HP:0011747",
      "term_label": "Abnormality of the anterior pituitary",
      "score": 0.540156,
      "direct_score": 0.0,
      "propagated_score": 0.540156,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "HP:0010627",
      "best_source_term_label": "Anterior pituitary hypoplasia",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0008240",
        "HP:0010627"
      ],
      "supporting_source_term_labels": [
        "Anterior pituitary hypoplasia",
        "Secondary growth hormone deficiency"
      ],
      "supporting_source_node_names": [
        "Anterior Pituitary Hypoplasia",
        "Growth Hormone Deficiency"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0011747" } }));
