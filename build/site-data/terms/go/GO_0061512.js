window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0061512"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0061512",
  "term_label": "protein localization to cilium",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 0.661083,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Bardet-Biedl Syndrome",
      "disease_term_id": "MONDO:0015229",
      "source_file": "Bardet-Biedl_Syndrome.yaml",
      "term_id": "GO:0061512",
      "term_label": "protein localization to cilium",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0061512",
      "best_source_term_label": "protein localization to cilium",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0061512"
      ],
      "supporting_source_term_labels": [
        "protein localization to cilium"
      ],
      "supporting_source_node_names": [
        "BBSome Assembly and Intraflagellar Transport Defects"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "RPGR-Related Retinopathy",
      "disease_term_id": "MONDO:0100437",
      "source_file": "RPGR-Related_Retinopathy.yaml",
      "term_id": "GO:0061512",
      "term_label": "protein localization to cilium",
      "score": 0.322165,
      "direct_score": 0.322165,
      "propagated_score": 0.322165,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0061512",
      "best_source_term_label": "protein localization to cilium",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0061512"
      ],
      "supporting_source_term_labels": [
        "protein localization to cilium"
      ],
      "supporting_source_node_names": [
        "RPGR dysfunction at the photoreceptor connecting cilium"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0061512" } }));
