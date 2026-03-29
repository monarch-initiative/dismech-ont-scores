window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0031690"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0031690",
  "term_label": "Opportunistic infection",
  "disease_count": 1,
  "direct_disease_count": 0,
  "top_score": 0.49,
  "mean_score": 0.49,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Acquired Immunodeficiency Syndrome",
      "disease_term_id": "MONDO:0012268",
      "source_file": "Acquired_Immunodeficiency_Syndrome.yaml",
      "term_id": "HP:0031690",
      "term_label": "Opportunistic infection",
      "score": 0.49,
      "direct_score": 0.0,
      "propagated_score": 0.49,
      "specificity": 1.0,
      "is_direct": false,
      "best_source_term_id": "HP:0020102",
      "best_source_term_label": "Pneumocystis jirovecii pneumonia",
      "best_source_path_score": 0.49,
      "best_source_path": "is_a > is_a",
      "best_path_hops": 2,
      "best_path_is_a_hops": 2,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0020102"
      ],
      "supporting_source_term_labels": [
        "Pneumocystis jirovecii pneumonia"
      ],
      "supporting_source_node_names": [
        "Pneumocystis Pneumonia"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0031690" } }));
