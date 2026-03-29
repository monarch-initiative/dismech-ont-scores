window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0033365"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0033365",
  "term_label": "protein localization to organelle",
  "disease_count": 4,
  "direct_disease_count": 0,
  "top_score": 0.545394,
  "mean_score": 0.323441,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Bardet-Biedl Syndrome",
      "disease_term_id": "MONDO:0015229",
      "source_file": "Bardet-Biedl_Syndrome.yaml",
      "term_id": "GO:0033365",
      "term_label": "protein localization to organelle",
      "score": 0.545394,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0061512",
      "best_source_term_label": "protein localization to cilium",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
      "disorder_name": "Peroxisome Biogenesis Disorder",
      "disease_term_id": "MONDO:0019234",
      "source_file": "Peroxisome_Biogenesis_Disorder.yaml",
      "term_id": "GO:0033365",
      "term_label": "protein localization to organelle",
      "score": 0.381776,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0016558",
      "best_source_term_label": "protein import into peroxisome matrix",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0016558"
      ],
      "supporting_source_term_labels": [
        "protein import into peroxisome matrix"
      ],
      "supporting_source_node_names": [
        "Impaired Peroxisome Biogenesis and Import"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Sengers syndrome",
      "disease_term_id": "MONDO:0008922",
      "source_file": "Sengers_syndrome.yaml",
      "term_id": "GO:0033365",
      "term_label": "protein localization to organelle",
      "score": 0.190888,
      "direct_score": 0.0,
      "propagated_score": 0.245,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0045039",
      "best_source_term_label": "protein insertion into mitochondrial inner membrane",
      "best_source_path_score": 0.245,
      "best_source_path": "is_a > part_of > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "GO:0045039"
      ],
      "supporting_source_term_labels": [
        "protein insertion into mitochondrial inner membrane"
      ],
      "supporting_source_node_names": [
        "Reduced TIM22-mediated import of inner-membrane carrier proteins"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "RPGR-Related Retinopathy",
      "disease_term_id": "MONDO:0100437",
      "source_file": "RPGR-Related_Retinopathy.yaml",
      "term_id": "GO:0033365",
      "term_label": "protein localization to organelle",
      "score": 0.175707,
      "direct_score": 0.0,
      "propagated_score": 0.225515,
      "specificity": 0.779134,
      "is_direct": false,
      "best_source_term_id": "GO:0061512",
      "best_source_term_label": "protein localization to cilium",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0033365" } }));
