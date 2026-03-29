window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0008240"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0008240",
  "term_label": "Secondary growth hormone deficiency",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.4096,
  "mean_score": 0.4096,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Fanconi_Anemia",
      "disease_term_id": "MONDO:0019391",
      "source_file": "Fanconi_Anemia.yaml",
      "term_id": "HP:0008240",
      "term_label": "Secondary growth hormone deficiency",
      "score": 0.4096,
      "direct_score": 0.4096,
      "propagated_score": 0.4096,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0008240",
      "best_source_term_label": "Secondary growth hormone deficiency",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0008240"
      ],
      "supporting_source_term_labels": [
        "Secondary growth hormone deficiency"
      ],
      "supporting_source_node_names": [
        "Growth Hormone Deficiency"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0008240" } }));
