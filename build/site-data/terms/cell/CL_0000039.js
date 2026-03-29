window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["cell::CL:0000039"] = {
  "ontology": "cell",
  "ontology_label": "Cell Types",
  "term_id": "CL:0000039",
  "term_label": "germ line cell",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.622697,
  "mean_score": 0.433397,
  "diseases": [
    {
      "ontology": "cell",
      "disorder_name": "Testicular Germ Cell Tumor",
      "disease_term_id": "MONDO:0010108",
      "source_file": "Testicular_Germ_Cell_Tumor.yaml",
      "term_id": "CL:0000039",
      "term_label": "germ line cell",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "CL:0000670",
      "best_source_term_label": "primordial germ cell",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "CL:0000670"
      ],
      "supporting_source_term_labels": [
        "primordial germ cell"
      ],
      "supporting_source_node_names": [
        "Germ Cell Neoplasia In Situ (GCNIS)"
      ]
    },
    {
      "ontology": "cell",
      "disorder_name": "Klinefelter Syndrome",
      "disease_term_id": "MONDO:0006823",
      "source_file": "Klinefelter_Syndrome.yaml",
      "term_id": "CL:0000039",
      "term_label": "germ line cell",
      "score": 0.244097,
      "direct_score": 0.0,
      "propagated_score": 0.2744,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "CL:0000017",
      "best_source_term_label": "spermatocyte",
      "best_source_path_score": 0.343,
      "best_source_path": "is_a > is_a > is_a",
      "best_path_hops": 3,
      "best_path_is_a_hops": 3,
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
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "cell::CL:0000039" } }));
