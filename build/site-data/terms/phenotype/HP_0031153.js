window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0031153"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0031153",
  "term_label": "Membranous vitreous appearance",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Stickler Syndrome Type 1",
      "disease_term_id": "MONDO:0007160",
      "source_file": "Stickler_Syndrome_Type_1.yaml",
      "term_id": "HP:0031153",
      "term_label": "Membranous vitreous appearance",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0031153",
      "best_source_term_label": "Membranous vitreous appearance",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0031153"
      ],
      "supporting_source_term_labels": [
        "Membranous vitreous appearance"
      ],
      "supporting_source_node_names": [
        "Membranous Vitreous"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0031153" } }));
