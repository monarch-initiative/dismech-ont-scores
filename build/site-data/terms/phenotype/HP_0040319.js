window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0040319"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0040319",
  "term_label": "Dark urine",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Glucose-6-Phosphate Dehydrogenase (G6PD) Deficiency",
      "disease_term_id": "MONDO:0005775",
      "source_file": "Glucose-6-Phosphate_Dehydrogenase_G6PD_Deficiency.yaml",
      "term_id": "HP:0040319",
      "term_label": "Dark urine",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0040319",
      "best_source_term_label": "Dark urine",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0040319"
      ],
      "supporting_source_term_labels": [
        "Dark urine"
      ],
      "supporting_source_node_names": [
        "Dark Urine"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0040319" } }));
