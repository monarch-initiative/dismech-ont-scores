window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0012028"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0012028",
  "term_label": "Hepatocellular adenoma",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Glycogen Storage Disease Type I",
      "disease_term_id": "MONDO:0002413",
      "source_file": "Glycogen_Storage_Disease_Type_I.yaml",
      "term_id": "HP:0012028",
      "term_label": "Hepatocellular adenoma",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0012028",
      "best_source_term_label": "Hepatocellular adenoma",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0012028"
      ],
      "supporting_source_term_labels": [
        "Hepatocellular adenoma"
      ],
      "supporting_source_node_names": [
        "Hepatocellular adenoma"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0012028" } }));
