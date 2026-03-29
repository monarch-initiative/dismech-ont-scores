window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0000034"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0000034",
  "term_label": "Hydrocele testis",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.5,
  "mean_score": 0.5,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Lymphatic filariasis",
      "disease_term_id": "MONDO:0016075",
      "source_file": "Lymphatic_Filariasis.yaml",
      "term_id": "HP:0000034",
      "term_label": "Hydrocele testis",
      "score": 0.5,
      "direct_score": 0.5,
      "propagated_score": 0.5,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0000034",
      "best_source_term_label": "Hydrocele testis",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000034"
      ],
      "supporting_source_term_labels": [
        "Hydrocele testis"
      ],
      "supporting_source_node_names": [
        "Hydrocele"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0000034" } }));
