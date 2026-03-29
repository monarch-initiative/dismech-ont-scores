window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0000017"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0000017",
  "term_label": "spermatocyte",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.8,
  "mean_score": 0.8,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Klinefelter Syndrome",
      "disease_term_id": "MONDO:0006823",
      "source_file": "Klinefelter_Syndrome.yaml",
      "term_id": "CL:0000017",
      "term_label": "spermatocyte",
      "score": 0.8,
      "direct_score": 0.8,
      "propagated_score": 0.8,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "CL:0000017",
      "best_source_term_label": "spermatocyte",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000017"
      ],
      "supporting_source_term_labels": [
        "spermatocyte"
      ],
      "supporting_source_node_names": [
        "Progressive Germ Cell Loss"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0000017" } }));
