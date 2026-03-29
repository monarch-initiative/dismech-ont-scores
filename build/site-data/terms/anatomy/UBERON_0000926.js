window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0000926"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0000926",
  "term_label": "mesoderm",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.25,
  "mean_score": 0.25,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Laryngotracheoesophageal Cleft",
      "disease_term_id": "MONDO:0016060",
      "source_file": "Laryngotracheoesophageal_Cleft.yaml",
      "term_id": "UBERON:0000926",
      "term_label": "mesoderm",
      "score": 0.25,
      "direct_score": 0.0,
      "propagated_score": 0.25,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "UBERON:0003081",
      "best_source_term_label": "lateral plate mesoderm",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0003081"
      ],
      "supporting_source_term_labels": [
        "lateral plate mesoderm"
      ],
      "supporting_source_node_names": [
        "Enriched esophageal malformation gene expression in lateral plate mesoderm"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0000926" } }));
