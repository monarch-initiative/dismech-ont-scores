window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0002424"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0002424",
  "term_label": "T cell mediated immune response to tumor cell",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.448,
  "mean_score": 0.448,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Lynch Syndrome",
      "disease_term_id": "MONDO:0005835",
      "source_file": "Lynch_Syndrome.yaml",
      "term_id": "GO:0002424",
      "term_label": "T cell mediated immune response to tumor cell",
      "score": 0.448,
      "direct_score": 0.0,
      "propagated_score": 0.448,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0002419",
      "best_source_term_label": "T cell mediated cytotoxicity directed against tumor cell target",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0002424" } }));
