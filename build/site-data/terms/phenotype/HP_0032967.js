window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0032967"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0032967",
  "term_label": "Panacinar emphysema",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Alpha-1 Antitrypsin Deficiency",
      "disease_term_id": "MONDO:0013282",
      "source_file": "Alpha_1_Antitrypsin_Deficiency.yaml",
      "term_id": "HP:0032967",
      "term_label": "Panacinar emphysema",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0032967",
      "best_source_term_label": "Panacinar emphysema",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0032967"
      ],
      "supporting_source_term_labels": [
        "Panacinar emphysema"
      ],
      "supporting_source_node_names": [
        "Emphysema"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0032967" } }));
