window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0000586"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0000586",
  "term_label": "germ cell",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.392,
  "mean_score": 0.392,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Klinefelter Syndrome",
      "disease_term_id": "MONDO:0006823",
      "source_file": "Klinefelter_Syndrome.yaml",
      "term_id": "CL:0000586",
      "term_label": "germ cell",
      "score": 0.392,
      "direct_score": 0.0,
      "propagated_score": 0.392,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "CL:0000017",
      "best_source_term_label": "spermatocyte",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0000586" } }));
