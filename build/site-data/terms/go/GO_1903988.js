window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:1903988"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:1903988",
  "term_label": "iron ion export across plasma membrane",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.416667,
  "mean_score": 0.416667,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Hemochromatosis",
      "disease_term_id": "MONDO:0006507",
      "source_file": "Hemochromatosis.yaml",
      "term_id": "GO:1903988",
      "term_label": "iron ion export across plasma membrane",
      "score": 0.416667,
      "direct_score": 0.416667,
      "propagated_score": 0.416667,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:1903988",
      "best_source_term_label": "iron ion export across plasma membrane",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:1903988"
      ],
      "supporting_source_term_labels": [
        "iron ion export across plasma membrane"
      ],
      "supporting_source_node_names": [
        "Low Hepcidin Leads to Ferroportin Hyperabsorption"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:1903988" } }));
