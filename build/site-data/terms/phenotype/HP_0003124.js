window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0003124"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0003124",
  "term_label": "Hypercholesterolemia",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Familial Hypercholesterolemia",
      "disease_term_id": "MONDO:0005439",
      "source_file": "Familial_Hypercholesterolemia.yaml",
      "term_id": "HP:0003124",
      "term_label": "Hypercholesterolemia",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0003124",
      "best_source_term_label": "Hypercholesterolemia",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0003124"
      ],
      "supporting_source_term_labels": [
        "Hypercholesterolemia"
      ],
      "supporting_source_node_names": [
        "Hypercholesterolemia"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0003124" } }));
