window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0006633"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0006633",
  "term_label": "fatty acid biosynthetic process",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 0.64,
  "mean_score": 0.52,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Biotinidase Deficiency",
      "disease_term_id": "MONDO:0009665",
      "source_file": "Biotinidase_Deficiency.yaml",
      "term_id": "GO:0006633",
      "term_label": "fatty acid biosynthetic process",
      "score": 0.64,
      "direct_score": 0.64,
      "propagated_score": 0.64,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0006633",
      "best_source_term_label": "fatty acid biosynthetic process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006633"
      ],
      "supporting_source_term_labels": [
        "fatty acid biosynthetic process"
      ],
      "supporting_source_node_names": [
        "Dermatologic manifestations from systemic biotin depletion"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Citrin Deficiency",
      "disease_term_id": "MONDO:0016602",
      "source_file": "Citrin_Deficiency.yaml",
      "term_id": "GO:0006633",
      "term_label": "fatty acid biosynthetic process",
      "score": 0.4,
      "direct_score": 0.4,
      "propagated_score": 0.4,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0006633",
      "best_source_term_label": "fatty acid biosynthetic process",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0006633"
      ],
      "supporting_source_term_labels": [
        "fatty acid biosynthetic process"
      ],
      "supporting_source_node_names": [
        "De novo lipogenesis defects and PPARalpha-mediated beta-oxidation impairment"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0006633" } }));
