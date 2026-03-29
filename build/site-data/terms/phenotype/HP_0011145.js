window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0011145"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0011145",
  "term_label": "Symptomatic seizures",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.7,
  "mean_score": 0.7,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Medium Chain Acyl-CoA Dehydrogenase Deficiency",
      "disease_term_id": "MONDO:0008721",
      "source_file": "MCAD_Deficiency.yaml",
      "term_id": "HP:0011145",
      "term_label": "Symptomatic seizures",
      "score": 0.7,
      "direct_score": 0.0,
      "propagated_score": 0.7,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "HP:0002173",
      "best_source_term_label": "Hypoglycemic seizures",
      "best_source_path_score": 0.7,
      "best_source_path": "is_a",
      "best_path_hops": 1,
      "best_path_is_a_hops": 1,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0002173"
      ],
      "supporting_source_term_labels": [
        "Hypoglycemic seizures"
      ],
      "supporting_source_node_names": [
        "Hypoglycemic seizures"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0011145" } }));
