window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0044068"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0044068",
  "term_label": "symbiont-mediated perturbation of host cellular process",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.2401,
  "mean_score": 0.2401,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Hepatitis C",
      "disease_term_id": "MONDO:0005231",
      "source_file": "Hepatitis_C.yaml",
      "term_id": "GO:0044068",
      "term_label": "symbiont-mediated perturbation of host cellular process",
      "score": 0.2401,
      "direct_score": 0.0,
      "propagated_score": 0.2401,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "GO:0039502",
      "best_source_term_label": "symbiont-mediated suppression of host type I interferon-mediated signaling pathway",
      "best_source_path_score": 0.2401,
      "best_source_path": "is_a > is_a > is_a > is_a",
      "best_path_hops": 4,
      "best_path_is_a_hops": 4,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0039502"
      ],
      "supporting_source_term_labels": [
        "symbiont-mediated suppression of host type I interferon-mediated signaling pathway"
      ],
      "supporting_source_node_names": [
        "Immune Evasion"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0044068" } }));
