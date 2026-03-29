window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0061024"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0061024",
  "term_label": "membrane organization",
  "disease_count": 3,
  "direct_disease_count": 0,
  "top_score": 0.424616,
  "mean_score": 0.287685,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Nemaline Myopathy",
      "disease_term_id": "MONDO:0018958",
      "source_file": "Nemaline_Myopathy.yaml",
      "term_id": "GO:0061024",
      "term_label": "membrane organization",
      "score": 0.424616,
      "direct_score": 0.0,
      "propagated_score": 0.514706,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0006998",
      "best_source_term_label": "nuclear envelope organization",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006998"
      ],
      "supporting_source_term_labels": [
        "nuclear envelope organization"
      ],
      "supporting_source_node_names": [
        "Nuclear Envelope Disruption (ACTA1)"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Sengers syndrome",
      "disease_term_id": "MONDO:0008922",
      "source_file": "Sengers_syndrome.yaml",
      "term_id": "GO:0061024",
      "term_label": "membrane organization",
      "score": 0.282964,
      "direct_score": 0.0,
      "propagated_score": 0.343,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:0045039",
      "best_source_term_label": "protein insertion into mitochondrial inner membrane",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
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
      "disorder_name": "Keratoderma Hereditarium Mutilans",
      "disease_term_id": "MONDO:0007422",
      "source_file": "Keratoderma_Hereditarium_Mutilans.yaml",
      "term_id": "GO:0061024",
      "term_label": "membrane organization",
      "score": 0.155475,
      "direct_score": 0.0,
      "propagated_score": 0.188462,
      "specificity": 0.824968,
      "is_direct": false,
      "best_source_term_id": "GO:1903575",
      "best_source_term_label": "cornified envelope assembly",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:1903575"
      ],
      "supporting_source_term_labels": [
        "cornified envelope assembly"
      ],
      "supporting_source_node_names": [
        "Mutant Loricrin Nuclear Accumulation"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0061024" } }));
