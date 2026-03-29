window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0000225"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0000225",
  "term_label": "Gingival bleeding",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 0.8,
  "mean_score": 0.8,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Scurvy",
      "disease_term_id": "MONDO:0009412",
      "source_file": "Scurvy.yaml",
      "term_id": "HP:0000225",
      "term_label": "Gingival bleeding",
      "score": 0.8,
      "direct_score": 0.8,
      "propagated_score": 0.8,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0000225",
      "best_source_term_label": "Gingival bleeding",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0000225"
      ],
      "supporting_source_term_labels": [
        "Gingival bleeding"
      ],
      "supporting_source_node_names": [
        "Gingival Bleeding"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0000225" } }));
