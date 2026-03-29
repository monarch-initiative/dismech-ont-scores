window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["go::GO:0014821"] = {
  "ontology": "go",
  "ontology_label": "Biological Processes",
  "term_id": "GO:0014821",
  "term_label": "phasic smooth muscle contraction",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.622697,
  "mean_score": 0.622697,
  "diseases": [
    {
      "ontology": "go",
      "disorder_name": "Hirschsprung Disease",
      "disease_term_id": "MONDO:0018309",
      "source_file": "Hirschsprung_Disease.yaml",
      "term_id": "GO:0014821",
      "term_label": "phasic smooth muscle contraction",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0030432",
      "best_source_term_label": "peristalsis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0030432"
      ],
      "supporting_source_term_labels": [
        "peristalsis"
      ],
      "supporting_source_node_names": [
        "Disrupted Enteric Nervous System Development"
      ]
    },
    {
      "ontology": "go",
      "disorder_name": "Irritable Bowel Syndrome",
      "disease_term_id": "MONDO:0005052",
      "source_file": "Irritable_Bowel_Syndrome.yaml",
      "term_id": "GO:0014821",
      "term_label": "phasic smooth muscle contraction",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "GO:0030432",
      "best_source_term_label": "peristalsis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "GO:0030432"
      ],
      "supporting_source_term_labels": [
        "peristalsis"
      ],
      "supporting_source_node_names": [
        "Gut Dysmotility"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "go::GO:0014821" } }));
