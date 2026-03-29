window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0000451"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0000451",
  "term_label": "prefrontal cortex",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Schizophrenia",
      "disease_term_id": "MONDO:0005090",
      "source_file": "Schizophrenia.yaml",
      "term_id": "UBERON:0000451",
      "term_label": "prefrontal cortex",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "UBERON:0000451",
      "best_source_term_label": "prefrontal cortex",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0000451"
      ],
      "supporting_source_term_labels": [
        "prefrontal cortex"
      ],
      "supporting_source_node_names": [
        "Abnormality of GABAergic Signaling",
        "Abnormality of Glutamergic Signaling",
        "Complement-Mediated Excessive Synaptic Pruning",
        "Mitochondrial Dysfunction and Oxidative Stress",
        "Oligodendrocyte and Myelin Dysfunction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0000451" } }));
