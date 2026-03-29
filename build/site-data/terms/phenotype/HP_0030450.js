window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0030450"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0030450",
  "term_label": "Neoplasm of the autonomic nervous system",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.7,
  "mean_score": 0.7,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Multiple Endocrine Neoplasia Type 2",
      "disease_term_id": "MONDO:0019003",
      "source_file": "Multiple_Endocrine_Neoplasia_Type_2.yaml",
      "term_id": "HP:0030450",
      "term_label": "Neoplasm of the autonomic nervous system",
      "score": 0.7,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "HP:0003005",
      "best_source_term_label": "Ganglioneuroma",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0003005"
      ],
      "supporting_source_term_labels": [
        "Ganglioneuroma"
      ],
      "supporting_source_node_names": [
        "Intestinal Ganglioneuromatosis",
        "Mucosal Neuromas"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0030450" } }));
