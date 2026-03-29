window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0004936"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0004936",
  "term_label": "Venous thrombosis",
  "disease_count": 2,
  "direct_disease_count": 0,
  "top_score": 0.622697,
  "mean_score": 0.42032,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Proteus syndrome",
      "disease_term_id": "MONDO:0008318",
      "source_file": "Proteus_syndrome.yaml",
      "term_id": "HP:0004936",
      "term_label": "Venous thrombosis",
      "score": 0.622697,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0002625",
      "best_source_term_label": "Deep venous thrombosis",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002625"
      ],
      "supporting_source_term_labels": [
        "Deep venous thrombosis"
      ],
      "supporting_source_node_names": [
        "Deep vein thrombosis"
      ]
    },
    {
      "ontology": "phenotype",
      "disorder_name": "Antiphospholipid Syndrome",
      "disease_term_id": "MONDO:8000010",
      "source_file": "Antiphospholipid_Syndrome.yaml",
      "term_id": "HP:0004936",
      "term_label": "Venous thrombosis",
      "score": 0.217944,
      "direct_score": 0.0,
      "propagated_score": 0.245,
      "specificity": 0.889567,
      "is_direct": false,
      "best_source_term_id": "HP:0004850",
      "best_source_term_label": "Recurrent deep vein thrombosis",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0004850"
      ],
      "supporting_source_term_labels": [
        "Recurrent deep vein thrombosis"
      ],
      "supporting_source_node_names": [
        "Deep Vein Thrombosis"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0004936" } }));
