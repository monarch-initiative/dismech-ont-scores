window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0002419"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0002419",
  "term_label": "T cell mediated cytotoxicity directed against tumor cell target",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.64,
  "mean_score": 0.64,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Lynch Syndrome",
      "disease_term_id": "MONDO:0005835",
      "source_file": "Lynch_Syndrome.yaml",
      "term_id": "GO:0002419",
      "term_label": "T cell mediated cytotoxicity directed against tumor cell target",
      "score": 0.64,
      "direct_score": 0.64,
      "propagated_score": 0.64,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "GO:0002419",
      "best_source_term_label": "T cell mediated cytotoxicity directed against tumor cell target",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0002419"
      ],
      "supporting_source_term_labels": [
        "T cell mediated cytotoxicity directed against tumor cell target"
      ],
      "supporting_source_node_names": [
        "Immune Checkpoint Blockade Sensitivity",
        "Neoantigen Generation and Immune Activation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0002419" } }));
