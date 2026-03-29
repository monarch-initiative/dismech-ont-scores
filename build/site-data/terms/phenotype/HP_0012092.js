window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0012092"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0012092",
  "term_label": "Abnormality of exocrine pancreas physiology",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.448,
  "mean_score": 0.448,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Cystic Fibrosis",
      "disease_term_id": "MONDO:0009061",
      "source_file": "Cystic_Fibrosis.yaml",
      "term_id": "HP:0012092",
      "term_label": "Abnormality of exocrine pancreas physiology",
      "score": 0.448,
      "direct_score": 0.0,
      "propagated_score": 0.448,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "HP:0001738",
      "best_source_term_label": "Exocrine pancreatic insufficiency",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001738"
      ],
      "supporting_source_term_labels": [
        "Exocrine pancreatic insufficiency"
      ],
      "supporting_source_node_names": [
        "Exocrine Pancreatic Insufficiency"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0012092" } }));
