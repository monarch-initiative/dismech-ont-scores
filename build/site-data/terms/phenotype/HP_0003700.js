window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0003700"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0003700",
  "term_label": "Generalized amyotrophy",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Amyotrophic Lateral Sclerosis",
      "disease_term_id": "MONDO:0004976",
      "source_file": "Amyotrophic_Lateral_Sclerosis.yaml",
      "term_id": "HP:0003700",
      "term_label": "Generalized amyotrophy",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0003700",
      "best_source_term_label": "Generalized amyotrophy",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0003700"
      ],
      "supporting_source_term_labels": [
        "Generalized amyotrophy"
      ],
      "supporting_source_node_names": [
        "Generalized Amyotrophy"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0003700" } }));
