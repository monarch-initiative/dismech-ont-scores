window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0044406"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0044406",
  "term_label": "adhesion of symbiont to host",
  "disease_count": 2,
  "direct_disease_count": 1,
  "top_score": 0.5,
  "mean_score": 0.467944,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Cholera",
      "disease_term_id": "MONDO:0015766",
      "source_file": "Cholera.yaml",
      "term_id": "GO:0044406",
      "term_label": "adhesion of symbiont to host",
      "score": 0.5,
      "direct_score": 0.5,
      "propagated_score": 0.5,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "GO:0044406",
      "best_source_term_label": "adhesion of symbiont to host",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0044406"
      ],
      "supporting_source_term_labels": [
        "adhesion of symbiont to host"
      ],
      "supporting_source_node_names": [
        "Colonization and Biofilm Formation"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Monkeypox",
      "disease_term_id": "MONDO:0002594",
      "source_file": "Monkeypox.yaml",
      "term_id": "GO:0044406",
      "term_label": "adhesion of symbiont to host",
      "score": 0.435888,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0019062",
      "best_source_term_label": "virion attachment to host cell",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0019062"
      ],
      "supporting_source_term_labels": [
        "virion attachment to host cell"
      ],
      "supporting_source_node_names": [
        "Hematogenous Spread and Viremia"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0044406" } }));
