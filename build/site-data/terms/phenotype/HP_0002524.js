window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0002524"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0002524",
  "term_label": "Cataplexy",
  "disease_count": 2,
  "direct_disease_count": 2,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Narcolepsy",
      "disease_term_id": "MONDO:0021107",
      "source_file": "Narcolepsy.yaml",
      "term_id": "HP:0002524",
      "term_label": "Cataplexy",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0002524",
      "best_source_term_label": "Cataplexy",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002524"
      ],
      "supporting_source_term_labels": [
        "Cataplexy"
      ],
      "supporting_source_node_names": [
        "Cataplexy"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Niemann-Pick Disease Type C",
      "disease_term_id": "MONDO:0018982",
      "source_file": "Niemann_Pick_Disease_Type_C.yaml",
      "term_id": "HP:0002524",
      "term_label": "Cataplexy",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 0.889567,
      "is_direct": true,
      "best_source_term_id": "HP:0002524",
      "best_source_term_label": "Cataplexy",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002524"
      ],
      "supporting_source_term_labels": [
        "Cataplexy"
      ],
      "supporting_source_node_names": [
        "Gelastic Cataplexy"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0002524" } }));
