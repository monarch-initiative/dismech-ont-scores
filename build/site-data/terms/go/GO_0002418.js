window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0002418"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0002418",
  "term_label": "immune response to tumor cell",
  "disease_count": 2,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 0.639484,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Acquired Immunodeficiency Syndrome",
      "disease_term_id": "MONDO:0012268",
      "source_file": "Acquired_Immunodeficiency_Syndrome.yaml",
      "term_id": "GO:0002418",
      "term_label": "immune response to tumor cell",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0002418",
      "best_source_term_label": "immune response to tumor cell",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0002418"
      ],
      "supporting_source_term_labels": [
        "immune response to tumor cell"
      ],
      "supporting_source_node_names": [
        "AIDS-related Cancers"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Lynch Syndrome",
      "disease_term_id": "MONDO:0005835",
      "source_file": "Lynch_Syndrome.yaml",
      "term_id": "GO:0002418",
      "term_label": "immune response to tumor cell",
      "score": 0.278968,
      "direct_score": 0.0,
      "propagated_score": 0.3136,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0002419",
      "best_source_term_label": "T cell mediated cytotoxicity directed against tumor cell target",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0002418" } }));
