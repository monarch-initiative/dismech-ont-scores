window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0002334"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0002334",
  "term_label": "Abnormal cerebellar vermis morphology",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.49,
  "mean_score": 0.49,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Joubert syndrome",
      "disease_term_id": "MONDO:0018772",
      "source_file": "Joubert_syndrome.yaml",
      "term_id": "HP:0002334",
      "term_label": "Abnormal cerebellar vermis morphology",
      "score": 0.49,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "HP:0001320",
      "best_source_term_label": "Cerebellar vermis hypoplasia",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0001320"
      ],
      "supporting_source_term_labels": [
        "Cerebellar vermis hypoplasia"
      ],
      "supporting_source_node_names": [
        "Cerebellar vermis hypoplasia"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0002334" } }));
