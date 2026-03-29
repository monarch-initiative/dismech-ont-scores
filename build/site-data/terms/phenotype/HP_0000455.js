window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0000455"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0000455",
  "term_label": "Broad nasal tip",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Granulomatosis with Polyangiitis",
      "disease_term_id": "MONDO:0012105",
      "source_file": "Granulomatosis_with_Polyangiitis.yaml",
      "term_id": "HP:0000455",
      "term_label": "Broad nasal tip",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0000455",
      "best_source_term_label": "Broad nasal tip",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000455"
      ],
      "supporting_source_term_labels": [
        "Broad nasal tip"
      ],
      "supporting_source_node_names": [
        "Saddle Nose Deformity"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0000455" } }));
