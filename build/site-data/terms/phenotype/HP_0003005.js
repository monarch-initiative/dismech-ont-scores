window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0003005"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0003005",
  "term_label": "Ganglioneuroma",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Multiple Endocrine Neoplasia Type 2",
      "disease_term_id": "MONDO:0019003",
      "source_file": "Multiple_Endocrine_Neoplasia_Type_2.yaml",
      "term_id": "HP:0003005",
      "term_label": "Ganglioneuroma",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0003005",
      "best_source_term_label": "Ganglioneuroma",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0003005" } }));
