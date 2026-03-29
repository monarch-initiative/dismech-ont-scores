window.ontologyScoresTermShards = window.ontologyScoresTermShards || {};
window.ontologyScoresTermShards["phenotype::HP:0005819"] = {
  "ontology": "phenotype",
  "ontology_label": "Phenotypes",
  "term_id": "HP:0005819",
  "term_label": "Short middle phalanx of finger",
  "disease_count": 1,
  "direct_disease_count": 1,
  "top_score": 1.0,
  "mean_score": 1.0,
  "diseases": [
    {
      "ontology": "phenotype",
      "disorder_name": "Brachydactyly Type A1",
      "disease_term_id": "MONDO:0007215",
      "source_file": "Brachydactyly_Type_A1.yaml",
      "term_id": "HP:0005819",
      "term_label": "Short middle phalanx of finger",
      "score": 1.0,
      "direct_score": 1.0,
      "propagated_score": 1.0,
      "specificity": 1.0,
      "is_direct": true,
      "best_source_term_id": "HP:0005819",
      "best_source_term_label": "Short middle phalanx of finger",
      "best_source_path_score": 1.0,
      "best_source_path": "self",
      "best_path_hops": 0,
      "best_path_is_a_hops": 0,
      "best_path_develops_from_hops": 0,
      "best_path_part_of_hops": 0,
      "supporting_source_term_ids": [
        "HP:0005819"
      ],
      "supporting_source_term_labels": [
        "Short middle phalanx of finger"
      ],
      "supporting_source_node_names": [
        "Short Middle Phalanx of Finger"
      ]
    }
  ]
};
window.dispatchEvent(new CustomEvent('ontologyScoresTermShardReady', { detail: { key: "phenotype::HP:0005819" } }));
