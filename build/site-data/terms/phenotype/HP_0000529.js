window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0000529"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0000529",
  "term_label": "Progressive visual loss",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Bardet-Biedl Syndrome",
      "disease_term_id": "MONDO:0015229",
      "source_file": "Bardet-Biedl_Syndrome.yaml",
      "term_id": "HP:0000529",
      "term_label": "Progressive visual loss",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0000529",
      "best_source_term_label": "Progressive visual loss",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000529"
      ],
      "supporting_source_term_labels": [
        "Progressive visual loss"
      ],
      "supporting_source_node_names": [
        "Progressive Vision Loss"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0000529" } }));
