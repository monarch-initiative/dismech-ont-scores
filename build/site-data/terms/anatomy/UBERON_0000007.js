window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["anatomy::UBERON:0000007"] = {
  "ontology": "anatomy",
  "ontology_label": "Anatomy",
  "term_id": "UBERON:0000007",
  "term_label": "pituitary gland",
  "disease_count": 2,
  "direct_disease_count": 1,
  "top_score": 0.444784,
  "mean_score": 0.312958,
  "diseases": [
    {
      "ontology": "anatomy",
      "disorder_name": "Morgagni-Stewart-Morel Syndrome",
      "disease_term_id": "MONDO:0007766",
      "source_file": "Morgagni-Stewart-Morel_Syndrome.yaml",
      "term_id": "UBERON:0000007",
      "term_label": "pituitary gland",
      "score": 0.444784,
      "direct_score": 0.0,
      "propagated_score": 0.5,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "UBERON:0002196",
      "best_source_term_label": "adenohypophysis",
      "best_source_path_score": 0.5,
      "best_source_path": "part_of",
      "best_path_hops": 1,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 1,
      "supporting_source_term_ids": [
        "UBERON:0002196"
      ],
      "supporting_source_term_labels": [
        "adenohypophysis"
      ],
      "supporting_source_node_names": [
        "Hyperprolactinemia-associated endocrine dysfunction"
      ]
    },
    {
      "ontology": "anatomy",
      "disorder_name": "Fanconi_Anemia",
      "disease_term_id": "MONDO:0019391",
      "source_file": "Fanconi_Anemia.yaml",
      "term_id": "UBERON:0000007",
      "term_label": "pituitary gland",
      "score": 0.181132,
      "direct_score": 0.181132,
      "propagated_score": 0.181132,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "UBERON:0000007",
      "best_source_term_label": "pituitary gland",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "UBERON:0000007"
      ],
      "supporting_source_term_labels": [
        "pituitary gland"
      ],
      "supporting_source_node_names": [
        "CNS Developmental Anomalies",
        "Endocrine Gland Dysfunction"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "anatomy::UBERON:0000007" } }));
