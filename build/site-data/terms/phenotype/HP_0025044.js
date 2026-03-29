window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0025044"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0025044",
  "term_label": "Lung abscess",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Polycystic echinococcosis",
      "disease_term_id": "MONDO:0000288",
      "source_file": "Polycystic_Echinococcosis.yaml",
      "term_id": "HP:0025044",
      "term_label": "Lung abscess",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0025044",
      "best_source_term_label": "Lung abscess",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0025044"
      ],
      "supporting_source_term_labels": [
        "Lung abscess"
      ],
      "supporting_source_node_names": [
        "Thoracic abscess from hepatic fistula"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0025044" } }));
