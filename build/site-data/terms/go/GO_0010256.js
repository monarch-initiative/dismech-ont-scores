window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0010256"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0010256",
  "term_label": "endomembrane system organization",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.327047,
  "mean_score": 0.223398,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Nemaline Myopathy",
      "disease_term_id": "MONDO:0018958",
      "source_file": "Nemaline_Myopathy.yaml",
      "term_id": "GO:0010256",
      "term_label": "endomembrane system organization",
      "score": 0.327047,
      "direct_score": 0.0,
      "propagated_score": 0.367647,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0006998",
      "best_source_term_label": "nuclear envelope organization",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
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
      "disorder_name": "Keratoderma Hereditarium Mutilans",
      "disease_term_id": "MONDO:0007422",
      "source_file": "Keratoderma_Hereditarium_Mutilans.yaml",
      "term_id": "GO:0010256",
      "term_label": "endomembrane system organization",
      "score": 0.119749,
      "direct_score": 0.0,
      "propagated_score": 0.134615,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:1903575",
      "best_source_term_label": "cornified envelope assembly",
      "best_source_path_score": 0.35,
      "best_source_path": "is_a > part_of",
      "best_path_hops": 2,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0010256" } }));
